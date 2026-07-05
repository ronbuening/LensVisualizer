# Audit Log - Nikon AF Zoom-Nikkor 28-85mm f/3.5-4.5

Patent: US 4,806,000, Tables 1-2 / FIG. 15

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US4806000.pdf`. The data file matches the single optical prescription shown in FIG. 15, with zoom/macro spacing from Tables 1 and 2.
- The patent provides the construction and zoom data, but no full per-surface clear-aperture table.
- FIG. 15 shows a very large G1, a smaller G2/G3 region around the stop, and a larger rear G4. Stored SDs preserve that hierarchy: 30.8-17.5 mm in G1, about 9.3-15.0 mm through G2/G3, and about 14.1-14.9 mm in G4.
- No SD values changed. Current values remain inferred from FIG. 15, zoom ray envelopes, and sag-clearance checks.

### Verification

- `npm test -- elementRenderDiagnostics`
