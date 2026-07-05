# Audit Log - SIGMA 17-40mm f/1.8 DC | Art

Patent: CN 121454749 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/CN_121454749_A.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 40.
- The patent does not publish clear-aperture semi-diameters. The stored SDs remain inferred from paraxial marginal/chief-ray envelopes and constrained by edge thickness, rim slope, element ratio, and cross-gap sag clearance.
- FIG. 1 shows a broad negative-lead G1, a similarly tall mid-front relay around G2/G3, a smaller stop-adjacent G4, and compact G5-G7 rear groups. The current SD set follows that drawn hierarchy: the largest fixed front/mid groups are around 18-20 mm, the stop is 10.94 mm, and the rear groups taper to roughly 12.5-13.9 mm.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
