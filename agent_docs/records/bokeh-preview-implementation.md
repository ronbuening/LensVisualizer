# Bokeh Preview Implementation

## Summary
- Add a diagram-level bokeh preview overlay with reusable optics and rendering infrastructure

## Changes
- Phase 1 Step 1: generalized the shared off-axis launch geometry to support explicit object conjugates
- Added representative preview field constants shared across preview-style analyses
- Added low-level coverage for minimum-focus launch behavior and bidirectional skew-ray convergence

## Verification
- `npx vitest run __tests__/offAxisBundle.test.ts __tests__/skewRay.test.ts __tests__/aberrationAnalysis.test.ts` — passed

## Follow-ups
- Implement the dense bokeh preview analysis result and overlay renderer
