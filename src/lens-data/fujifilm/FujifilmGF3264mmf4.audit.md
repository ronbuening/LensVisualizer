# Audit Log - FUJIFILM FUJINON GF32-64mmF4 R LM WR

Patent: US 10,191,246 B2, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US10191246.pdf`. The patent publishes Example 1 prescription, zoom data, asphere data, and the wide/tele figure, but no clear-aperture or semi-diameter table.
- The figure shows a very large G1 at the object side, compact G2-G4 groups around the aperture stop, and a larger final G5 near the image side.
- Stored SDs follow that shape: G1 starts at 34.0 mm, the middle groups contract through roughly 9.6-14.2 mm, and final G5 expands to 22.0-24.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, zoom ray envelopes, f/4 stop geometry, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
