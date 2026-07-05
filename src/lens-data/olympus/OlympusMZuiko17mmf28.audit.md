# Audit Log - Olympus M.Zuiko Digital 17mm f/2.8

Patent: US 8,755,132 B2, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8755132.pdf`. Example 1 maps to FIG. 1.
- The patent publishes prescription/asphere data and sensor-side cover-glass surfaces, but no full clear-aperture table. The data file omits the cover-glass stack from the rendered prescription.
- FIG. 1 shows a compact wide-angle section with front and rear groups of similar scale, a smaller stop, and the final L25 element slightly largest. Stored SDs follow that silhouette: 7.3-4.85 mm into the stop, a 3.22 mm stop, and 6.1-9.65 mm through the rear group.
- No SD values changed. Current values remain inferred from the patent figure and renderer-safe ray/sag constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
