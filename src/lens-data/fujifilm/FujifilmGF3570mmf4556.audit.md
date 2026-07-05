# Audit Log - FUJIFILM FUJINON GF35-70mmF4.5-5.6 WR

Patent: US 2022/0236544 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20220236544A1.pdf`. The patent publishes Example 1 prescription, zoom/focus data, and Fig. 1 section. It does not publish a full clear-aperture table, but it does define effective-diameter quantities for conditional expressions.
- The text/table context includes the effective-diameter values already used by the data file: 16.58 mm diameter at surface 9 and 25.84 mm diameter at surface 19. Stored SDs of 8.4 mm and 13.0 mm preserve those half-diameter anchors.
- Fig. 1 shows a broad negative G1, a compact stop/middle group, and a very large final G4 element. Stored SDs follow that hierarchy: 23-24 mm at the front, roughly 8.4-13.0 mm through the middle, and 23.5-24.0 mm at the final group.
- No SD values changed. Current values remain inferred from the patent figure, the two patent effective-diameter anchors, zoom ray envelopes, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
