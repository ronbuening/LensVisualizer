# Sagittal Calc Improvements

## Summary
- Replace sagittal heuristics with reusable real skew-ray infrastructure and migrate the current aberration consumers in stages.

## Changes
- Added additive skew-ray tracing helpers in `src/optics/optics.ts` without changing the existing `traceRay()` path.
- Added deterministic orthogonal-fan and equal-area circular pupil samplers for later field-curvature and coma-preview work.
- Added focused regression coverage in `__tests__/skewRay.test.ts` for equivalence, symmetry, clipping, projection, and sampler behavior.
- Generalized the aberration shared helpers around coordinate/slope pairs so tangential and sagittal focus solves can use the same math.
- Centralized the orthogonal fan count and circular pupil pattern constants for the current aberration consumers.
- Added synthetic helper coverage in `__tests__/aberrationInternals.test.ts` for generic focus solving and degenerate-slope fallbacks.
- Replaced the field-curvature Petzval-mirror sagittal estimate with a real sagittal solve built from orthogonal skew-ray pupil fans.
- Added a field-curvature regression that guards against silently falling back to the old Petzval-mirroring shortcut.
- Updated the field-curvature section copy so the sagittal trace is described as real rather than estimated.
- Replaced the coma preview's chord-expanded heuristic with a real circular-pupil point cloud built from chief-relative skew-ray tracing.
- Updated the shared coma-preview types, analysis exports, and grid rendering to use real tangential/sagittal image-height coordinates in millimeters.
- Added point-cloud regression coverage for sample counts, center-field symmetry, clipping tolerance, and shared axis scaling.
- Updated the coma-preview section copy, SSR expectations, and public docs so the preview is described consistently as a real circular-pupil point cloud.
- Refreshed the analysis-options and architecture notes so the documentation reflects the shipped real coma point cloud and real sagittal field-curvature solve.

## Verification
- `npm run test -- __tests__/optics.test.ts __tests__/aberrationInternals.test.ts __tests__/skewRay.test.ts` — passed
- `npm run test -- __tests__/optics.test.ts __tests__/aberrationInternals.test.ts __tests__/skewRay.test.ts __tests__/aberrationAnalysis.test.ts` — passed
- `npm run test -- __tests__/aberrationAnalysis.test.ts` — passed
- `npm run test -- __tests__/AberrationsPanel.test.tsx __tests__/analysisDisplayTabs.test.ts` — passed
- `npm run test -- __tests__/aberrationInternals.test.ts __tests__/aberrationAnalysis.test.ts __tests__/ComaPreviewGrid.test.tsx` — passed
- `npm run test -- __tests__/ComaPreviewGrid.test.tsx __tests__/AberrationsPanel.test.tsx __tests__/analysisDisplayTabs.test.ts` — passed
- `npm run format` — passed
- `npm run build` — passed
- `npm run seo:audit` — passed
- `npm run test` — passed
- `npm run typecheck` — passed
- `npm run lint` — passed
- `npm run format:check` — passed

## Follow-ups
- Monitor whether the current fixed circular-pupil sample count should be increased or made adaptive for very fast wide-angle designs.
- Consider adding a dedicated multi-field spot-diagram view now that the shared skew-ray core is in place.
