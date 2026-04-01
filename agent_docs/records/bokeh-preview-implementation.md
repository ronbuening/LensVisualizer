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
- Phase 2 Step 1: extracted a reusable representative-preview SVG shell from the coma grid
- Added bokeh preview renderer components with dual 2x2 grids, shared legend copy, and a silhouette abstraction hook for future blade-shape work
- Added component + SSR coverage for the new bokeh renderer while keeping the coma preview on the shared shell
- Phase 2 Step 2: wired the bokeh preview into the diagram viewport with a new upper-right launch button and panel overlay
- Extended diagram overlay state so the bokeh preview hides in zoom mode and resets automatically when the lens changes
- Added viewport + hook coverage for button placement, open behavior, zoom gating, and lens-change reset

## Verification
- `npx vitest run __tests__/offAxisBundle.test.ts __tests__/skewRay.test.ts __tests__/aberrationAnalysis.test.ts` — passed
- `npx vitest run __tests__/offAxisBundle.test.ts __tests__/aberrationAnalysis.test.ts` — passed
- `npx vitest run __tests__/ComaPreviewGrid.test.tsx __tests__/BokehPreviewOverlayContent.test.tsx __tests__/analysisDisplayTabs.test.ts` — passed
- `npx vitest run __tests__/DiagramViewport.test.tsx __tests__/useOverlayState.test.tsx __tests__/BokehPreviewOverlayContent.test.tsx` — passed
- `npx vitest run __tests__/ComaPreviewGrid.test.tsx __tests__/BokehPreviewOverlayContent.test.tsx __tests__/analysisDisplayTabs.test.ts __tests__/DiagramViewport.test.tsx __tests__/useOverlayState.test.tsx` — passed
- `npm run typecheck` — failed due existing lens-data import errors in `src/lens-data/CanonFDn50f12.data.ts` and `src/lens-data/VoigtlanderNokton50f12XMount.data.ts`

## Follow-ups
- Update docs/changelog, run the formatter + full release gate, and open the PR
