# Audit Log - CANON NEW FD 150-600mm f/5.6L

Patent: US 4,110,006, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US4110006.pdf`. The patent provides the Example 4 zoom prescription and construction figures, but no clear-aperture or semi-diameter table for the surfaces.
- The abstract and Figure 1 state and show the intended aperture hierarchy: the first sub-group is the largest, while the second, third, and fourth sub-groups of the focusing lens group are smaller; downstream variator, compensator, and imaging groups are progressively more compact.
- Stored SDs follow that structure: front collector surfaces are near 58-59 mm, the following fixed/focus front sub-groups are near 41-43.5 mm, the variator/compensator groups are near 21-23 mm, and the rear imaging group tapers to 15.5 mm.
- No SD values changed. Current values remain inferred renderer clear apertures, not patent-published mechanical diameters.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-30 - `773497` catalog-equivalent review

- Rendered and visually rechecked Example 4. L3 remains `nd = 1.77250`, `vd = 49.7`.
- Schott N-LAF34 (`1.77250 / 49.62`, code `773496`) retains the exact index and differs only by the final rounded
  Abbe digit (`delta vd = -0.08`).
- Relabeled L3 as an N-LAF34 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-07-30 - Remaining 534555 source audit

- Rechecked Example 4: L17 remains `nd = 1.53375`, `vd = 55.5`.
- Current and discontinued-inclusive first-party catalog searches found no coefficient row within the runtime
  d-line safety window.
- Reworded L17 as explicit unmatched `534555`; no supplier or approximate catalog curve was assigned, and no
  prescription or semi-diameter values changed.
