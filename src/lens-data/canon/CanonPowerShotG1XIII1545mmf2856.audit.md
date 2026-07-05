# Audit Log - CANON POWERSHOT G1 X MARK III 15-45mm f/2.8-5.6

Patent: JP 2018-106021 A, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2018106021A.pdf`. The patent publishes Numerical Data 1 and Fig. 1, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a negative-lead APS-C zoom with a moderate front LN group, a tight stop and compact LP group, a small negative focus lens, and the largest clear aperture on the rear resin GRP element near the image plane.
- Stored SDs follow that silhouette: the front group is 10.5-13.0 mm, the stop/LP region is about 5.25-6.7 mm, the focus lens is 9.6 mm, and the rear GRP surfaces expand to 14.2 mm.
- No SD values changed. Current values remain inferred from combined marginal/chief-ray clearance and constrained by edge thickness, sd/|R|, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
