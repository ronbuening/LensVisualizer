# Audit Log - CANON RF 16mm f/2.8 STM

Patent: JP 2022-085382 A, Numerical Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2022085382A.pdf`. The Numerical Example 3 table lists surface number, radius, thickness, refractive index, and Abbe number, but no clear-aperture or semi-diameter column.
- Fig. 5 shows the corresponding two-group ultra-wide layout: a moderate negative-front group, a smaller stop region, compact cemented rear groups, and the largest clear aperture on the final rear positive meniscus near the image plane.
- Stored SDs follow that silhouette: the front group steps from 9.5 mm down to 6.8 mm, the stop is 4.842 mm, the rear group grows through 6.3-9.5 mm, and the final element reaches 10.0-10.5 mm.
- No SD values changed. Current values remain inferred from paraxial marginal/chief-ray envelopes and constrained by edge thickness, rim slope, element SD ratio, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
