# Audit Log - Olympus Zuiko 9-36mm f/2.0-2.4

Patent: US 2003/0072086 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20030072086A1.pdf`. Example 1 maps to FIGS. 1(a)-1(c).
- The patent publishes prescription, zoom data, and the rear prism/filter train, but no full powered-surface clear-aperture table.
- FIG. 1 shows a very large front G1, compact G2/G3 groups around the fixed stop, a moderate G4, and a flat prism/filter rear train. Stored SDs follow that hierarchy: 29.0-24.8 mm in G1, about 10.2-11.3 mm in G2, a 5.72 mm stop, 9.1-12.4 mm through G3/G4, and 13.0 mm for the prism.
- No SD values changed. Current values remain inferred from FIG. 1, zoom ray envelopes, and prism-aware rendering constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
