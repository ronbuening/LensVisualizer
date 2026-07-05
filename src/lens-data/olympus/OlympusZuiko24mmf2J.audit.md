# Audit Log - Olympus Zuiko Auto-W 24mm f/2.0

Patent: US 3,830,559, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US3830559.pdf`. Example 1 maps to FIG. 1 and is scaled from the patent's f = 100 normalization by 0.24031 in the data file.
- The patent publishes constructional data, but no full per-surface clear-aperture table. The stop position remains inferred from the FIG. 1 placement between components III and IV.
- FIG. 1 shows a large retrofocus front component, a narrowed middle/stop region, and a rear group that grows but remains smaller than the front. Stored SDs follow that silhouette: 21.0-10.0 mm through the front/middle sequence, an 8.1 mm stop, and 10.0-13.0 mm through the rear group.
- No SD values changed. Current values remain inferred from FIG. 1, off-axis ray clearance, and edge/sag constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
