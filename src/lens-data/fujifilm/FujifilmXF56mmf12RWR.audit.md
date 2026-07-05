# Audit Log - FUJIFILM FUJINON XF56mmF1.2 R WR

Patent: JP 2023-029039 A, Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2023029039A.pdf`. The patent publishes Example 2 prescription and focus data in the Japanese tables and Fig. 4 section, but no clear-aperture or semi-diameter table. The prescription table columns are `Sn`, `R`, `D`, `Nd`, `vd`, and `theta_gF`.
- Fig. 4 shows two tall front G1 elements, a large moving G2 with its widest elements object-side of the stop, and a smaller but still full-height G3 behind the focus group.
- Stored SDs follow that hierarchy: G1 is 25.4-25.6 mm, G2 tapers from about 21.5 mm to 11.6-13.1 mm around and behind the stop, and G3 remains about 11.0-13.2 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/1.2 stop geometry, focus-group ray envelope, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
