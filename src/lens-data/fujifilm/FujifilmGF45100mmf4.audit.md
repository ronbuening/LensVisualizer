# Audit Log - FUJIFILM FUJINON GF45-100mmF4 R LM OIS WR

Patent: US 2020/0379223 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20200379223A1.pdf`. The patent publishes Example 1 prescription, zoom data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows G1 as the largest front group, mid-sized G2/G3 groups around the stop and shake-correction/focus section, and a large final G4 near the image side.
- Stored SDs match that silhouette: G1 begins at 25.5-34.0 mm, the middle groups sit mostly around 14.7-18.4 mm, the stop is 12.1 mm, and final G4 expands to 24.5-25.5 mm.
- No SD values changed. Current values remain inferred from the patent figure, zoom ray envelopes, f/4 stop geometry, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
