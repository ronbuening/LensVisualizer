# Audit Log - FUJIFILM FUJINON GF45mmF2.8 R WR

Patent: US 2020/0174231 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20200174231A1.pdf`. The patent publishes Example 1 prescription, focus data, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a balanced medium-format retrofocus layout: broad front G1, a smaller moving G2 around the stop, and a broad rear G3 rather than a narrow tail.
- Stored SDs preserve that balance: G1 is about 16.5-20.5 mm, the stop and central moving group contract to roughly 13-15.7 mm, and rear G3 returns to about 17-20.6 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/2.8 stop geometry, focus-group ray envelopes, edge thickness, and cross-gap sag limits.

### Verification

- `npm test -- elementRenderDiagnostics`
