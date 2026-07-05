# Audit Log - SIGMA APO MACRO 150mm f/2.8 EX DG OS HSM

Patent: JP 2012-63403 A, Numerical Example 2 / FIG. 8

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2012063403A.pdf`. Numerical Example 2 is shown by FIG. 8 on PDF page 20.
- The patent does not publish clear apertures. Stored SDs are conservative renderer apertures derived from the design F2.92 marginal ray with local reductions for edge-thickness and cross-gap sag clearance.
- FIG. 8 shows a large front L1/L2 section, a smaller stop-adjacent middle, and rear/internal-focus/OS groups tapering toward the image side. Current SDs match this progression: 28.3-25.9 mm front surfaces, a 16.7 mm stop, and rear values descending from about 17.85 mm to 10.2 mm.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
