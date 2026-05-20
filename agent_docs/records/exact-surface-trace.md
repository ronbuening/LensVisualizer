# Exact Surface Trace

> **2026-05-20 update.** The rollout machinery described below has been removed.
> `SURFACE_TRACE_ROLLOUT_MODE`, `EXACT_SURFACE_TRACE_LENS_KEYS`, and
> `SurfaceTraceRolloutMode` are gone; `resolveSurfaceTraceMode` now simply returns
> `requestedMode ?? "exact"`. `SurfaceTraceMode = "legacy" | "exact"` is retained
> as a test/debug escape hatch only.

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
