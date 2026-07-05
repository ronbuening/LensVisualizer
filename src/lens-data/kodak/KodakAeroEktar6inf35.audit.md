# Audit Log - KODAK AERO EKTAR 6 inch f/3.5

Patent: US 2,983,193, Fig. 2 prescription / Fig. 1 section

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2983193.pdf`. The patent publishes the f = 100 mm f/3.5 prescription table and section drawing, but no clear-aperture or semi-diameter table.
- The drawing shows a fast double-Gauss-like objective with large outer positive singles, smaller inner cemented groups around the central stop space, and a rear single that remains broad but smaller than the front mouth.
- Stored SDs follow that pattern after scaling to the 6 inch design: front surfaces are 39-43 mm, the inner groups are roughly 27.8-33.0 mm, the stop is 14.455 mm, and the final rear surface is 35.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/3.5 stop solution, ray-envelope clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
