# Audit Log - KONICA HEXANON AR 35mm f/2.8

Patent: US 4,170,403, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US4170403.pdf`. The patent publishes Example 1 and Fig. 1, but no clear-aperture or semi-diameter table.
- Fig. 1 shows the retrofocus layout clearly: a large front negative meniscus, a broad biconvex second group, a smaller post-stop negative group, and two compact rear positive menisci.
- Stored SDs follow that shape: front L1 is 12.9-16.0 mm, L2 remains broad at 12.1-12.9 mm, the post-stop negative pair contracts to 6.6-8.4 mm, and final L5 returns to 9.4-11.4 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/2.8 stop geometry, ray-envelope clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
