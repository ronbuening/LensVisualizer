# Audit Log - Rodenstock Grandagon-N 65mm f/4.5

Patent: DE 2444954 A1, Claim 4 / worked data set 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2444954_A1.pdf`. The drawing sheet shows the symmetric eight-element wide-angle section used by the Grandagon-N examples.
- The patent publishes e-line prescription data but no clear-aperture semi-diameters.
- The figure shows large outer elements, a narrowed central stop waist, and mirrored rear growth. Stored SDs follow that scaled silhouette: 18.0 mm at the outer front and rear, 8.8-9.3 mm at the stop-adjacent inner groups, and a 7.5445 mm stop.
- No SD values changed. Current values remain inferred from the patent figure, exact-ray stop geometry, and the production-style envelope noted in the data file.

### Verification

- `npm test -- elementRenderDiagnostics`
