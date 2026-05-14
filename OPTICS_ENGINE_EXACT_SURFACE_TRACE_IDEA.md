# Exact Surface Ray-Tracing Migration State

## Summary

Exact surface tracing is now implemented for the public runtime ray-tracing APIs, but the migration is not complete.
The central rollout switch lives in `src/optics/traceMode.ts`:

- `SURFACE_TRACE_ROLLOUT_MODE: "legacy" | "exact" | "per-lens"`.
- `EXACT_SURFACE_TRACE_LENS_KEYS` for per-lens exact opt-in when the rollout mode is `"per-lens"`.
- `resolveSurfaceTraceMode(L, requestedMode?)`, where explicit `{ mode: "legacy" | "exact" }` test/comparison requests
  override the rollout config.

Current working-tree note: `SURFACE_TRACE_ROLLOUT_MODE` is set to `"exact"`, so all default public trace calls resolve to
exact mode and the allowlist is ignored for default routing. The allowlist currently contains `apo-lanthar-50f2`,
`nokton-50f1`, and `sonnar-50f15`; it only matters when the rollout mode is `"per-lens"`.

The exact runtime engine solves ray intersections against flat, spherical, conic, and polynomial-aspheric sag surfaces,
then applies Snell refraction at the exact hit normal. Public return values stay compatible with existing callers by
projecting terminal `y`/`u` or `x`/`y`/`ux`/`uy` values back to the current surface vertex plane.

## Implemented State

- `src/optics/rayTrace.ts` routes these public trace functions through `resolveSurfaceTraceMode`:
  - `traceRay`
  - `traceRayChromatic`
  - `traceSkewRay`
  - `traceSkewRayChromatic`
  - Chief-relative skew wrappers inherit the same routing through `traceSkewRay` / `traceSkewRayChromatic`.
- `RayTraceOptions` supports `mode?: "legacy" | "exact"` and is now threaded through analysis helpers that need
  deterministic test mode:
  - `computeSphericalAberration`
  - `computeSAProfile`
  - `computeSphericalAberrationBlurCharacter`
  - `computeVignettingCurve`
  - off-axis bundle tracing helpers used by blur-character analysis.
- Exact non-ghost failure handling has been tightened: exact meridional fallback/miss paths do not append fallback
  diagnostic points to `ghostPts` when `ghost=false`.
- Tests have been hardened so they do not assume a fixed rollout mode or an empty allowlist:
  - `traceMode.test.ts` validates the rollout shape, allowlist uniqueness, and catalog-key validity.
  - Default trace tests compare against `resolveSurfaceTraceMode(L)` instead of explicit legacy.
  - Legacy characterization tests pass `{ mode: "legacy" }`.
  - Exact-engine tests pass `{ mode: "exact" }`.
  - Exact catalog coverage includes allowlisted-lens smoke checks, full-catalog on-axis smoke checks, and a Sonnar
    diagnostic that verifies a well-formed exact result without freezing brittle coordinates.

## Important Remaining Gap

Not all optics calculations use the public trace APIs yet. Several engine internals still call
`src/optics/internal/traceSurfaces.ts` directly:

- `traceSurfacesReal` is a vertex-plane exact-Snell helper. It applies exact Snell refraction using the surface normal at
  the ray height, but it transfers from vertex plane to vertex plane. It does not solve the physical sag-surface
  intersection the way exact runtime tracing does.
- `src/optics/buildLens.ts` uses `traceSurfacesReal` while deriving runtime constants such as entrance-pupil behavior,
  exit-pupil behavior, zoom-position constants, and half-field refinements.
- `src/optics/fieldGeometry.ts` uses `traceSurfacesReal` for field geometry, chief-ray launch solving, accurate image
  height, field-angle solving, and `conjugateK`.
- `src/optics/pupilAberration.ts` uses `traceSurfacesReal` for EP/XP baselines and field-dependent pupil-aberration
  samples.

That means the current rollout switch governs runtime diagram and analysis tracing, but it does not yet make every
real-ray-derived optical constant and geometry helper exact-surface-aware. If the goal is full migration, these direct
`traceSurfacesReal` paths must be migrated or deliberately reclassified as legacy/vertex-plane support helpers.

Paraxial helpers are a separate category. `traceSurfacesParaxial`, `traceParaxialRay`, layout/cardinal-element first-order
calculations, and `traceToImage` are intentionally paraxial unless a future feature explicitly replaces first-order
optics with real-ray equivalents.

## What Needs To Be Done To Finish The Migration

1. **Define the final tracing layers.**
   - Rename or document `traceSurfacesReal` as the vertex-plane real-ray helper so it is not mistaken for the exact
     surface-intersection engine.
   - Add a reusable exact-surface helper for non-rendering optics code. It should share the same intersection/refraction
     behavior as `traceRayExactCore` / `traceSkewRayExactCore`, but return the intermediate data needed by build,
     field-geometry, pupil, and analysis code.
   - Avoid duplicating a second exact solver; use `src/optics/internal/surfaceIntersection.ts` as the common
     intersection primitive.

2. **Thread trace mode through direct real-ray consumers.**
   - `fieldGeometry.ts`: chief-ray solving, accurate image-height solving, and `conjugateK` should use the mode resolved
     for the current lens unless an explicit test/comparison mode is passed.
   - `pupilAberration.ts`: EP/XP baselines and sampled pupil-aberration traces should use the same resolved mode.
   - `buildLens.ts`: decide how build-time derived constants should behave under `"legacy"`, `"exact"`, and `"per-lens"`
     without introducing slider-state-dependent analysis into `buildLens()`. This likely needs a lower-level helper that
     can resolve mode from the lens data key before the full `RuntimeLens` exists.

3. **Separate intended paraxial behavior from migration debt.**
   - Keep true first-order calculations explicitly paraxial.
   - For every `traceSurfacesReal` caller, decide whether it should become mode-aware exact tracing or be renamed/tested
     as a legacy vertex-plane approximation.

4. **Expand migration tests around the remaining paths.**
   - Add forced-`"exact"` tests for field geometry, pupil aberration, `conjugateK`, and build-derived constants once those
     paths are mode-aware.
   - Keep tests based on stable invariants: finite results, valid clipping/null behavior, monotonicity only where it is
     physically guaranteed, and catalog-key validity.
   - Avoid assertions that require a specific rollout constant, an empty allowlist, or legacy/exact deep equality.

5. **Triage exact-incompatible catalog behavior.**
   - Sonnar 50/1.5 remains the key diagnostic case: exact tracing exposes a steep rear-surface / stop-plane interaction
     where legacy vertex-plane tracing can pass rays that exact sag tracing clips.
   - Decide per lens whether exact clipping indicates valid physical clear-aperture behavior, a patent/catalog geometry
     issue, missing clear-aperture trim, or an exact solver policy problem.
   - Use those decisions to grow the per-lens allowlist or to fix lens data before broad rollout.

6. **Finish rollout.**
   - Keep `"legacy"` and explicit `{ mode: "legacy" }` available until the direct `traceSurfacesReal` paths are either
     migrated or intentionally quarantined.
   - Use `"per-lens"` for controlled catalog rollout.
   - Switch default production behavior to `"exact"` only after runtime tracing, field geometry, pupil analysis, and
     build-derived real-ray constants are aligned with the same exact-surface model.

## Current Verification Expectations

The hardened tests should pass under `"legacy"`, `"exact"`, and `"per-lens"` rollout modes without requiring a specific
allowlist shape. Before considering the migration complete, run at minimum:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

For rollout work, also run the focused migration suite while temporarily setting `SURFACE_TRACE_ROLLOUT_MODE` to each of
`"legacy"`, `"exact"`, and `"per-lens"`:

```bash
npm run test -- traceMode exactTraceCatalog optics skewRay aberrationAnalysis vignetteAnalysis
```

Restore the intended rollout setting after temporary mode checks.
