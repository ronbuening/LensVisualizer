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
