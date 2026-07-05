# Audit Log - SONY FE 24mm f/2.8 G

Patent: JP 2022-030896 A, Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2022030896A.pdf`. Example 1 is shown by FIG. 1 on PDF page 19.
- The patent publishes clear-aperture H values. Stored surface SDs use those H values, with the stop semi-diameter paraxially adjusted to 5.6105 mm to reproduce the patent Fno = 2.884 while treating patent H = 5.769 as the local clear/effective radius.
- FIG. 1 shows a compact G1, a stop just before the moving G2, and a rear G3 that grows slightly toward the image side. Current SDs match the H-backed silhouette: 8.93 mm at the front, a 5.6105 mm stop, and rear surfaces increasing to 9.64 mm before the folded cover-glass gap.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
