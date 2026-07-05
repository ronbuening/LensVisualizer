# Audit Log - Rodenstock Grandagon-N 75mm f/4.5

Patent: DE 2444954 A1, Claim 3 / Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2444954_A1.pdf`. The drawing sheet shows the symmetric eight-element Grandagon construction used by the worked examples.
- The patent publishes e-line prescription data but no clear-aperture semi-diameters.
- The stored SDs preserve the figure hierarchy at the 75 mm scale: 21.0 mm at the outer front and rear, 10.2-10.6 mm at the central groups, and an 8.72 mm stop.
- No SD values changed. Current values remain inferred from the patent drawing, ray clearance, and the production 67 mm filter / 60 mm rear-barrel envelope noted in the data file.

### Verification

- `npm test -- elementRenderDiagnostics`
