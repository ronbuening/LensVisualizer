# Exact Surface Ray-Tracing Implementation State

## Summary

Exact surface tracing has moved from a proposal to an implemented internal opt-in trace engine. The legacy vertex-plane
trace remains the safe production behavior when `SURFACE_TRACE_ROLLOUT_MODE` is left at `"per-lens"` with an empty
allowlist. For testing, the rollout was temporarily switched to `"exact"` in `src/optics/traceMode.ts`; that forced all
default trace calls through the exact engine and exposed several legacy-assumption failures.

The current exact engine solves ray intersections against flat, spherical, conic, and polynomial-aspheric sag surfaces,
then applies Snell refraction at the exact hit normal. It keeps public trace APIs compatible by projecting returned
terminal `y`/`u` or `x`/`y`/`ux`/`uy` values back to the current surface vertex plane.

## Implemented State

- `src/optics/traceMode.ts` provides the central tri-state rollout control:
  - `SURFACE_TRACE_ROLLOUT_MODE: "legacy" | "exact" | "per-lens"`.
  - `EXACT_SURFACE_TRACE_LENS_KEYS` for per-lens exact opt-in.
  - `resolveSurfaceTraceMode(L, requestedMode?)`, where explicit test/comparison options override rollout config.
- `featureFlags.ts` remains boolean-only; exact tracing uses the optics-specific rollout config instead.
- `RayTraceOptions` supports `mode?: "legacy" | "exact"` for tests and comparison utilities.
- `src/optics/internal/surfaceIntersection.ts` implements the exact intersection helper with hit point, normal,
  residual, iteration count, segment length, optical path length, and failure reasons.
- `traceRay`, `traceRayChromatic`, `traceSkewRay`, `traceSkewRayChromatic`, and chief-relative skew wrappers all route
  default calls through `resolveSurfaceTraceMode`.
- Exact meridional and skew paths have explicit unit coverage for finite traces, chromatic behavior, symmetry,
  meridional/skew equivalence, clipping, and catalog smoke coverage.
- Documentation, changelog, and agent guidance now describe the rollout policy and the central config location.

## Current Test Run With Forced Exact Rollout

Command:

```bash
npm run test
```

Result with `SURFACE_TRACE_ROLLOUT_MODE = "exact"`:

- Test files: 6 failed, 121 passed.
- Tests: 26 failed, 1618 passed.
- Important context: these failures were produced by changing the global default rollout, not by passing
  `{ mode: "exact" }` only to comparison tests.

## Failure Categories

- **Category 1: New exact-engine math or failure-policy issue.** The exact path is doing something that should be fixed
  before broad rollout.
- **Category 2: Brittle or legacy-specific test expectation.** The test assumes the vertex-plane model, the safe default
  rollout config, or catalog data tuned around legacy tracing.

## Failing Tests And RC

| Test area | Failing tests | RC | Category |
| --- | --- | --- | --- |
| Rollout config contract | `traceMode.test.ts`: `defaults to per-lens rollout with an empty exact-trace allowlist` | The working tree intentionally changed `SURFACE_TRACE_ROLLOUT_MODE` from the committed safe default `"per-lens"` to `"exact"` for testing. The test is checking the production safety contract, so this failure is expected under the forced-exact experiment. | Category 2 |
| Default trace equals explicit legacy | `optics.test.ts`: `keeps legacy tracing as the default rollout behavior`; `skewRay.test.ts`: `keeps legacy skew tracing as the default rollout behavior`; `exactTraceCatalog.test.ts`: five representative-lens `keeps default rollout equivalent to explicit legacy` cases | These tests assert that omitted `RayTraceOptions` resolves to legacy. With the global rollout set to `"exact"`, default traces correctly resolve to exact and no longer deep-equal explicit legacy traces. The catalog diffs are small numeric exact-vs-legacy ray differences, not evidence of a solver break. | Category 2 |
| Non-ghost TIR fixture | `optics.test.ts`: `returns clipped=true for non-ghost total internal reflection`; `traceRayChromatic`: `non-ghost mode breaks on chromatic TIR without ghostPts` | The synthetic TIR lens/ray is vertex-plane-friendly but exact-surface-hostile: the steep ray does not physically intersect the first `R = 10` spherical sag surface in the exact model. Exact tracing falls back to a surface point, marks the ray clipped, and currently appends that fallback point to `ghostPts` even when `ghost=false`. The fixture's intended "TIR" event becomes an exact surface miss, and the non-ghost fallback behavior should be tightened. | Category 1 |
| Sonnar production meridional traces | `optics.test.ts`: on-axis default ray fan without TIR; half-aperture image convergence; chromatic R/G/B half-aperture traces; chromatic dispersion measurable; close-focus trace without TIR | Exact tracing shows the Sonnar 50/1.5 prescription is not geometrically compatible with the old assumptions at wider zones. A half-aperture ray hits the steep L4 rear sag at `z ~= 17.282 mm`, while the stop vertex is at `z = 17.1 mm`; the exact hit has already passed the following stop plane. Legacy tracing never sees that because it transfers only between vertex planes. Subsequent exact intersections are treated as clipped/ghost, so chromatic spread collapses to zero when all marginal channels are skipped as clipped. | Category 2 |
| Spherical aberration result nulls | `aberrationAnalysis.test.ts`: finite SA result for Sonnar; um/mm conversion; non-zero Sonnar SA; near-axis real-ray reference; close-focus Sonnar result; comparison-lens finite spread metrics; best-focus no worse than current-plane; SA profile bounded by best-focus peak; profile marginal sign convention | These failures are downstream of the Sonnar exact clipping above. `computeSphericalAberration` requires a surviving near-axis sample, a surviving marginal sample, and enough symmetric profile hits. With forced exact rollout, wider Sonnar samples clip or miss around the steep rear/front-stop region, so the analysis returns `null` rather than finite legacy-derived metrics. | Category 2 |
| Stopped-down SA profile count | `aberrationAnalysis.test.ts`: `returns fewer or equal valid points when stopped down` | The test assumes a smaller pupil cannot produce more valid profile zones. Under exact tracing, wide-open Sonnar zones are clipped by the geometric surface/stop conflict, while stopped-down zones avoid the problematic heights and therefore produce more valid samples. The assertion is a legacy-era monotonicity expectation, not a general exact-trace invariant. | Category 2 |
| Vignetting normalized transmission | `vignetteAnalysis.test.ts`: `geometricTransmission does not exceed 1.0 at any sample` | Exact tracing clips some on-axis Sonnar pupil samples, reducing the on-axis normalization baseline. A few off-axis sampled bundles survive slightly better than that baseline, so normalized `geometricTransmission` rises above 1.0, e.g. `1.01136`. This is a brittle normalization/test expectation exposed by exact clipping and discrete sampling. | Category 2 |

## Important Observations

- The forced-exact suite still passed 1618 tests, including the exact intersection unit coverage and explicit exact catalog
  finite-smoke tests.
- The exact engine is doing something meaningfully different from legacy even on near-axis catalog rays. That is expected:
  exact mode finds the sag-surface hit, while legacy transfers to the next vertex plane and evaluates sag at that height.
- The Sonnar failures are especially useful rollout evidence. Its patent-derived semi-diameters and short gaps were tuned
  around legacy tracing; exact tracing exposes possible physical overlap/trim issues around steep surfaces and the stop.
- The one clear exact-path implementation issue from this run is non-ghost failure handling after an exact intersection
  miss: fallback/diagnostic points should not be emitted as `ghostPts` when `ghost=false`.

## Recommended Follow-Up

1. Restore the committed safe default after forced-exact testing: `SURFACE_TRACE_ROLLOUT_MODE = "per-lens"`.
2. Fix exact non-ghost miss/TIR handling so `ghost=false` never returns fallback points in `ghostPts`.
3. Keep legacy-default tests as safety-contract tests, or run forced-exact experiments through an explicit test helper that
   expects those rollout-contract failures.
4. Add a focused exact-mode diagnostic test for the Sonnar 50/1.5 steep L4 rear/stop interaction so future work can decide
   whether to treat it as catalog geometry, clear-aperture trim, or exact-mode clipping policy.
5. Update exact-mode analysis tests only after deciding whether production analyses should remain legacy by default, use
   per-lens allowlisting, or intentionally tolerate `null`/reduced sample counts for exact-incompatible prescriptions.
