# Exact Surface Trace

> **2026-05-20 update.** The rollout machinery described below has been removed.
> `SURFACE_TRACE_ROLLOUT_MODE`, `EXACT_SURFACE_TRACE_LENS_KEYS`, and
> `SurfaceTraceRolloutMode` are gone; `resolveSurfaceTraceMode` now simply returns
> `requestedMode ?? "exact"`. `SurfaceTraceMode = "legacy" | "exact"` is retained
> as a test/debug escape hatch only.

> **2026-05-20 trace-model staging.** Six commits on `ronbuening/SlowLensOptimization`
> build on top of the exact-tracer foundation: field-launch slope construction is
> centralized through `projectionLaunchSlopeForField` (commit `be230d1`), fisheye-equisolid
> joins fisheye-equidistant as a recognized projection kind (`7ca5706`), a `LaunchSurface`
> discriminator plus `boundingSphereLaunchVector` scaffold the past-cap launch path
> (`0a2442c`), the exact tracer's `direction[2] > 1e-12` gates in `surfaceIntersectionMaxT`
> and `intersectSagSurface` are lifted for grazing/backward rays (`beb040e`), and
> past-cap chief rays now dispatch through `solveChiefRayBoundingSphere`, which
> bisects on the EP-crossing y and traces via the vector entry point (`8e8c225`). Parity
> tests confirm both launch surfaces produce bit-identical chief-ray geometry on
> moderate-angle in-field samples.

> **2026-05-20 PR 8 completion (Steps 6+7).** Seven follow-up commits land Steps 6 and 7
> of PR 8: the `maxTraceFieldDeg` validator cap raises from 90° → 180° (`6ce2906`);
> past-cap integration tests cover the Nikon 6mm at 90°/100°/110° (`b64479d`);
> `launchSurfaceForFieldDeg(fieldDeg, projection)` routes every fisheye chief ray through
> the bounding-sphere arm regardless of field angle (`c60c601`); `computeFieldGeometryAtState`'s
> `testChief` bisection grows a bounding-sphere fallback and the fisheye half-field clamp
> loosens to `ABSOLUTE_HALF_FIELD_CEILING` (175°) (`308ee10`); the paraxial-chief-ray
> bisection is skipped entirely for fisheyes so `halfField` reports the declared
> `maxTraceFieldDeg` (`847d856`); `RuntimeLens.tracingHalfField` (sibling to `halfField`)
> drives off-axis ray rendering through a safety-margined bisected value (`97c6c42`); the
> tracing-margin is restricted to fisheyes only so rectilinear behavior is bit-identical
> to pre-PR-8 (`c707fe9`). After this batch the Nikon Fisheye-Nikkor 6mm f/2.8 and f/5.6
> render at their full patent-declared 110° half-field with off-axis ray bundles that
> actually reach the image plane (~17° default off-axis target via the safety margin).
> Step 5 (visual smoke verification in the running app) and the analysis-module past-cap
> migration remain — see `TRACE_MODEL_IMPROVEMENT_PLAN.md` for the running checklist.

## Summary
- Added an internal exact ray-to-sag-surface trace mode with a central rollout control.
- Finalized the migration so exact surface tracing is the production default through `SURFACE_TRACE_ROLLOUT_MODE =
  "exact"`.

## Changes
- Added `traceMode.ts` with `legacy` / `exact` / `per-lens` resolution and explicit trace-mode override support.
- Added `internal/surfaceIntersection.ts` for flat, spherical, conic, and polynomial-aspheric surface intersections.
- Added `internal/exactSurfaceTrace.ts` as the shared exact surface-stack tracer.
- Wired exact mode through meridional, chromatic meridional, skew, chromatic skew, chief-relative skew trace paths,
  build-derived real-ray constants, field geometry, chief-ray solving, conjugate focus tracking, and pupil aberration
  baselines.
- Renamed the old vertex-plane real-ray helper to `traceSurfacesVertexReal`; `traceSurfacesReal` remains as a legacy
  compatibility alias for tests/diagnostics.
- Added exact-mode unit, parity, representative-lens, full-catalog on-axis smoke, and non-threshold timing coverage.

## Verification
- Stage 1 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 2 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 3 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 4 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 5 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`

## Follow-ups
- Consider adding developer-facing diagnostics output if exact intersection failures need catalog triage.
