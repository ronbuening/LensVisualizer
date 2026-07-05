# Audit Log - SIGMA 35mm f/1.4 DG HSM | Art

Patent: JP 2014-048488 A, Numerical Example 4 / FIG. 16

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2014048488A.pdf`. Numerical Example 4 is shown by FIG. 16 on PDF page 27.
- The patent does not publish clear apertures. Stored SDs are inferred from a paraxial marginal/chief-ray envelope and constrained by rim slope, positive edge thickness, element front/rear SD ratio, and cross-gap sag clearance.
- FIG. 16 shows a large G1 front group, a central G2/stop region, and a rear G3 section that is smaller than the leading group. Current SDs follow that profile: G1 surfaces are about 19.5-21.5 mm, the stop is 14.11 mm, and rear surfaces sit mostly between 15.5 and 17.5 mm.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
