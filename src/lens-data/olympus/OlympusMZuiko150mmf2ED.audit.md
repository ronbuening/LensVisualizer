# Audit Log - Olympus Zuiko Digital ED 150mm f/2.0

Patent: US 7,408,719 B2, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US7408719.pdf`. Example 1 maps to FIGS. 1A-1B.
- The patent publishes the telephoto prescription and focus data, but no full clear-aperture table. The three rear plane-parallel plates are treated as camera-body cover/filter plates and are omitted from the rendered lens data.
- FIG. 1 shows a large fixed front train, a smaller moving/focus group near the stop, and a compact rear G4. Stored SDs follow that hierarchy: 41.0-31.0 mm across the front G1/G2 run, about 17.6-24.0 mm in G3, a 14.025 mm stop, and 14.5-15.0 mm in G4.
- No SD values changed. Current values remain inferred from FIG. 1, the patent focus path, and edge/sag constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
