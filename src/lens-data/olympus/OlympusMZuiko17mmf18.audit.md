# Audit Log - Olympus M.Zuiko Digital 17mm f/1.8

Patent: JP 2013-186458 A, Numerical Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2013186458A.pdf`. Numerical Example 3 maps to FIG. 3; the figure sheet is near the end of the publication.
- The patent publishes the Numerical Example 3 prescription and focus data, but no full clear-aperture table.
- FIG. 3 shows a compact positive G1 before the fixed stop, then a G2/G3 rear section that rises again toward the image side. Stored SDs follow that figure: 10.4-7.8 mm through G1, a 6.4 mm stop, and 8.2-10.2 mm through the rear group.
- No SD values changed. Current values remain inferred from the patent figure, focus ray envelopes, and sag-clearance constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
