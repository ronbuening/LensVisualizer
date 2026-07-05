# Audit Log - FUJIFILM GA645 Professional 60mm f/4

Patent: US 5,548,447, Example 1 / Table I

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US5548447.pdf`. The patent publishes the Example 1 prescription and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a large front section, smaller central elements around the diaphragm, and a taller rear doublet, with the final positive member clearly larger than the stop-adjacent lenses.
- Stored SDs follow that run: the first element is 13.6-14.0 mm, the central lenses remain around 7.8-8.8 mm, and the rear doublet expands to 9.6-11.9 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/4 stop geometry, marginal/chief-ray clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
