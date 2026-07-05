# Audit Log - FUJIFILM FUJINON XF16-55mmF2.8 R LM WR

Patent: US 2016/0154221 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20160154221A1.pdf`. The patent publishes Example 1 prescription, zoom data, focus assumptions, and Fig. 1 wide/intermediate/tele sections, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a very large front G1 across the zoom range, while G2 through G5 remain much smaller around the stop and image-side groups.
- Stored SDs match that outline: G1 starts at 21.7-25.2 mm, G2-G5 stay mostly in the 8.8-11.4 mm range, and the stop is 9.1 mm.
- No SD values changed. Current values remain inferred from the patent figure, infinity zoom-state ray envelopes, f/2.8 stop geometry, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
