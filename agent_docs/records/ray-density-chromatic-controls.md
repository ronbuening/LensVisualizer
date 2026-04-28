# Ray Density And Chromatic Controls

## Summary

- Added a persisted ray-density preference with `normal`, `dense`, and `diagnostic` modes.
- Kept `normal` identical to each lens' authored ray fan while deriving denser viewport samples for tracing.
- Extended chromatic ray tracing to axial and off-axis fans, with chromatic mode replacing monochrome ray layers.

## Changes

- Added `rayDensity` state, reducer guards, preference load/save, and density controls in `DiagramHeader` and
  `ControlsBar`.
- Added `src/optics/raySampling.ts` for shared symmetric density sampling.
- Updated on-axis, off-axis, and chromatic tracing hooks to consume density-derived samples.
- Shared state-aware off-axis trace geometry through `src/components/hooks/offAxisRayUtils.ts`.
- Updated ray-layer rendering so COLOR mode uses ON-AXIS and OFF-AXIS to gate chromatic axial/off-axis groups.

## Verification

- Stage checks for each feature commit: `npm run typecheck`, `npm run format:check`, `npm run lint`, and
  `npm run test` — passed.
- Final documentation-stage checks: `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` —
  passed.
- `npm run build` — passed; emitted the existing Vite env/chunk-size warnings and StaticRouter `<Navigate>` warning,
  then prerendered 161 routes and wrote `dist/sitemap.xml`.

## Follow-ups

- No known functional follow-ups.
