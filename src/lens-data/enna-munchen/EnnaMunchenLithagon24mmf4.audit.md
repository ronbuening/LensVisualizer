# Audit Log - ENNA MÜNCHEN LITHAGON 24mm f/4

Patent: DE 1 228 820 B, sole claimed prescription

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_1228820_B.pdf`. The patent publishes the f = 100 prescription, f/4 relative aperture, 85 degree field, and drawing sheet, but no clear-aperture or semi-diameter table.
- The drawing shows the F section as the largest part, with L1 slightly broader than L2, the positive M singlet moderately smaller, and the rear H section as a compact group. L4/L5 are small stop-adjacent positive elements, L6 is the taller dense-flint negative, and L7 is a thin final positive element rather than a large rear collector.
- Stored SDs follow that silhouette: 15.0 / 14.05 mm for the front negative pair, 11.0 mm for the median singlet, roughly 7.8-7.95 mm through the main rear section, and 6.45 mm for the thin final member.
- No SD values changed. Current values remain inferred from the patent figure, f/4 entrance-pupil geometry, rendered edge thickness, cross-gap sag limits, and same-element diameter constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
