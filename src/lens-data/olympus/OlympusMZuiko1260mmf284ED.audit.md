# Audit Log - Olympus M.Zuiko Digital ED 12-60mm f/2.8-4.0

Patent: US 7,583,450 B2, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US7583450.pdf`. Example 4 maps to FIGS. 4(a)-4(c).
- The patent publishes the Example 4 prescription, zoom data, and cover-glass plate, but no full per-surface clear-aperture table for the lens elements.
- FIG. 4 shows a very large G1, compact G2/G3 groups around the stop, and a medium rear G4 before the cover glass. Stored SDs follow that hierarchy: 35.0-26.2 mm through G1, about 10.0-15.4 mm through G2/G3, and about 9.8-14.6 mm through G4.
- No SD values changed. Current values remain inferred from the patent figure, zoom ray envelopes, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
