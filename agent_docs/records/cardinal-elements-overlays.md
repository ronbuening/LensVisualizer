# Cardinal Elements Overlays

## Summary
- Added Tier 1 cardinal element and axial distance overlays for lens diagrams.

## Changes
- Added state-aware first-order calculations for F/F′, H/H′, N/N′, EFL, BFD, FFD, Hiatus, and Total track.
- Added feature-flagged CARDINALS / DIMENSIONS controls with desktop placement beside ray controls and mobile arrow paging.
- Added SVG rendering for cardinal markers, principal surfaces, nodal coincidence labels, and dimension lanes.

## Verification
- `npx vitest run __tests__/cardinalElements.test.ts` — passed
- `npx vitest run __tests__/featureFlags.test.ts __tests__/lensReducer.test.ts __tests__/preferences.test.ts __tests__/usePreferences.test.ts __tests__/useDispatchAdapters.test.tsx` — passed
- `npx vitest run __tests__/CardinalElementsOverlay.test.tsx __tests__/DiagramSVG.test.tsx __tests__/diagramGeometry.test.ts __tests__/useLensComputation.test.ts __tests__/LensDiagramPanelCoverage.test.tsx` — passed
- `npx vitest run __tests__/CardinalControls.test.tsx __tests__/ControlsBar.test.ts __tests__/ViewerChrome.test.tsx __tests__/LensDiagramPanelCoverage.test.tsx` — passed
- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed

## Follow-ups
- Consider moving Tier 2 pupil apparatus onto the same first-order infrastructure once requirements are ready.
