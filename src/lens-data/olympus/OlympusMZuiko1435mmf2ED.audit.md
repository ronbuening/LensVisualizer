# Audit Log - Olympus Zuiko Digital ED 14-35mm f/2.0 SWD

Patent: US 8,081,392 B2, Numerical Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8081392.pdf`. Numerical Example 3 maps to FIGS. 3(a)-3(c).
- The patent publishes prescription, zoom data, and anomalous partial-dispersion information, but no full per-surface clear-aperture table.
- FIG. 3 shows a very broad front G1, compact G2F/G2R groups, and a rear G3 that grows again toward the image side. Stored SDs follow that hierarchy: 38.5-31.0 mm in G1, about 12.5-17.1 mm through G2, a 12.1 mm stop, and 10.0-17.6 mm through G3.
- No SD values changed. Current values remain inferred from the patent section drawing, zoom ray envelopes, and sag-clearance checks.

### Verification

- `npm test -- elementRenderDiagnostics`
