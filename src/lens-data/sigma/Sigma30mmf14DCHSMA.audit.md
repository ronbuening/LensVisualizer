# Audit Log - SIGMA 30mm f/1.4 DC HSM | Art

Patent: JP 2014-142520 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2014142520A.pdf`. Numerical Example 1 is illustrated by FIG. 1 on PDF page 18.
- The patent does not publish clear-aperture semi-diameters. The data file's SDs remain inferred from paraxial on-axis marginal rays plus full-field chief rays, then checked for edge thickness, SD ratios, rim limits, and signed cross-gap sag clearance.
- FIG. 1 is faint in the local PDF, but it shows G1 and G2 as broadly similar-height groups with a smaller internal stop. Current SDs match that silhouette: front and rear element surfaces sit mostly between 14.0 and 16.0 mm, with an 11.4428784521 mm stop.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
