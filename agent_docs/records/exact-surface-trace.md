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
> moderate-angle in-field samples. Visual smoke on the Nikon 6mm at 110° plus catalog
> promotion remain — see `TRACE_MODEL_IMPROVEMENT_PLAN.md` "PR 8 — Remaining: tracer
> surgery" steps 5–7.

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
