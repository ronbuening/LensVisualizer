# Audit Log - AGFA COLOR-TELINEAR 90mm f/4

Patent: US 2,819,651, single worked example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2819651.pdf`. The patent provides the normalized optical prescription and a side-view figure, but no clear-aperture or semi-diameter table.
- The figure shows the front cemented doublet and middle positive meniscus at similar clear apertures, followed by a smaller rear negative cemented doublet after the long telephoto air space.
- Stored SDs already follow that figure envelope: front/middle surfaces stay near 12.3-12.7 mm after scaling, while the rear doublet is smaller at 10.2 mm.
- No SD values changed. Current values remain inferred clear apertures constrained by the f/4 on-axis beam, the 15 degree chief ray, edge thickness, rim slope, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
