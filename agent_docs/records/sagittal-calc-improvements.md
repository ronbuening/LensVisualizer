# Sagittal Calc Improvements

## Summary
- Replace sagittal heuristics with reusable real skew-ray infrastructure and migrate the current aberration consumers in stages.

## Changes
- Added additive skew-ray tracing helpers in `src/optics/optics.ts` without changing the existing `traceRay()` path.
- Added deterministic orthogonal-fan and equal-area circular pupil samplers for later field-curvature and coma-preview work.
- Added focused regression coverage in `__tests__/skewRay.test.ts` for equivalence, symmetry, clipping, projection, and sampler behavior.

## Verification
- `npm run test -- __tests__/optics.test.ts __tests__/aberrationInternals.test.ts __tests__/skewRay.test.ts` — passed
- `npm run typecheck` — passed
- `npm run lint` — passed
- `npm run format:check` — passed

## Follow-ups
- Generalize aberration shared helpers so tangential and sagittal best-focus solves use the same coordinate/slope math.
- Migrate field curvature off the Petzval-mirror estimate.
- Replace the chord-expanded coma preview with real circular-pupil sampling.
