# Exact Surface Trace

## Summary
- Added an internal exact ray-to-sag-surface trace mode with a central rollout control.
- Default behavior remains legacy through `SURFACE_TRACE_ROLLOUT_MODE = "per-lens"` and an empty exact lens allowlist.

## Changes
- Added `traceMode.ts` with `legacy` / `exact` / `per-lens` resolution and explicit trace-mode override support.
- Added `internal/surfaceIntersection.ts` for flat, spherical, conic, and polynomial-aspheric surface intersections.
- Wired exact mode through meridional, chromatic meridional, skew, chromatic skew, and chief-relative skew trace paths.
- Added exact-mode unit, parity, representative-lens, full-catalog on-axis smoke, and non-threshold timing coverage.

## Verification
- Stage 1 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 2 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 3 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 4 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`
- Stage 5 full gate passed: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`

## Follow-ups
- Review exact/legacy deltas on candidate lenses before adding keys to `EXACT_SURFACE_TRACE_LENS_KEYS`.
- Consider adding developer-facing diagnostics output if exact intersection failures need catalog triage.
