# Audit Log - Nikon 1 NIKKOR VR 10-30mm f/3.5-5.6

Patent: US 2012/0019926 A1, Numerical Example 4 / Table 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20120019926A1.pdf`. The text maps Numerical Example 4 to FIG. 13 for the lens configuration, with FIGS. 14-16 covering infinity/close/shifting aberration states.
- The patent publishes the Table 4 prescription, zoom/focus spacings, and group composition, but no full clear-aperture table.
- FIG. 13 shows the expected Nikon 1 compact zoom profile: the four-lens G1 is visibly largest, G2 is smaller around the stop and flare stopper, and G3 remains compact at the image side. Stored SDs follow that silhouette, running from 9.9 mm at the first surface down to about 5.6 mm near the stop and 5.05-5.45 mm in G3.
- No SD values changed. Current values remain inferred from the patent figure, ray-envelope clearance, and tight-gap sag constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
