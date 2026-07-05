# Audit Log - KODAK WIDE FIELD EKTAR 100mm f/6.3

Patent: US 2,518,719, Example 2 / Fig. 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2518719.pdf`. The patent publishes Example 2 and Fig. 2, but no clear-aperture or semi-diameter table.
- Fig. 2 shows a wide-field four-element layout with large outer positive menisci, smaller inner negative menisci, and a diaphragm in the long central air space.
- Stored SDs match that outline: outer elements are 17.4 mm at the front and 14.1 mm at the rear, while the inner menisci narrow to about 11.35-13.5 mm and the stop remains separate at 6.6845 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/6.3 stop geometry, field ray clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
