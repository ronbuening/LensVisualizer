# Audit Log - FUJIFILM FUJINON XF18mmF2 R

Patent: US 2014/0240851 A1, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20140240851A1.pdf`. The patent publishes Example 4 prescription, asphere data, Fig. 4 section, and Table 17 effective-radius conditions, but no full clear-aperture table.
- Table 17 provides effective-radius terms Re1/Re2 for the L7 aspherical conditions; the data file uses those as anchors while estimating the rest of the renderer clear apertures.
- Fig. 4 shows a moderate front group, a smaller stop-adjacent middle section, and L8 as the largest rear member. Stored SDs follow that run: front surfaces are about 6.5-7.6 mm, the narrow central/rear aspheric section reaches 4.8-6.5 mm, and final L8 grows to 7.0-8.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, Table 17 effective-radius anchors, f/2 stop geometry, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
