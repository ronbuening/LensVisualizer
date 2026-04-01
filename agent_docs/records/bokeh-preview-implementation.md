# Bokeh Preview Implementation

## Summary
- Add a diagram-level bokeh preview overlay with reusable optics and rendering infrastructure

## Changes
- Phase 1 Step 1: generalized the shared off-axis launch geometry to support explicit object conjugates
- Added representative preview field constants shared across preview-style analyses
- Added low-level coverage for minimum-focus launch behavior and bidirectional skew-ray convergence
- Phase 1 Step 2: added a pure `computeBokehPreview()` analysis engine with dual conjugate grids and a denser weighted point cloud
- Reused a shared weighted point-cloud summarizer so coma and bokeh previews report centroid / RMS / bounds consistently
- Added analysis coverage for conjugate separation, aperture/focus sensitivity, shared ranges, and clipped off-axis truncation

## Verification
- `npx vitest run __tests__/offAxisBundle.test.ts __tests__/skewRay.test.ts __tests__/aberrationAnalysis.test.ts` — passed
- `npx vitest run __tests__/offAxisBundle.test.ts __tests__/aberrationAnalysis.test.ts` — passed
- `npm run typecheck` — failed due existing lens-data import errors in `src/lens-data/CanonFDn50f12.data.ts` and `src/lens-data/VoigtlanderNokton50f12XMount.data.ts`

## Follow-ups
- Build the reusable preview-grid renderer and wire the diagram-level overlay UI
