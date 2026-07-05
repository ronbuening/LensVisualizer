# Audit Log - SONY FE 24mm f/1.4 GM

Patent: JP WO2019/073744 A1, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPWO2019073744A1.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 37.
- The patent does not publish clear apertures. Stored SDs are estimated by combined paraxial marginal/chief-ray tracing and limited by element edge thickness, element SD ratio, the tight S20-S21 air gap, and the project sd/|R| convention.
- FIG. 1 shows the large front XA element as the dominant aperture, a mid-lens stop, and rear GR2/GR3 sections that step down from the front group. Current SDs preserve that patent silhouette, including the binding L11 rear-surface constraint documented in the data file.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
