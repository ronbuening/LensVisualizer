# Audit Log - Nikon AF Zoom-Nikkor 28-80mm f/3.3-5.6

Patent: US 5,485,314, Fourth Embodiment / Table 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US5485314.pdf`. The Fourth Embodiment corresponds to FIGS. 4A-4C and Table 4.
- The patent discusses front-lens diameter and stop placement, but does not publish a full clear-aperture table.
- FIGS. 4A-4C show a modest front negative G1 and a much smaller G2 around the aperture stop and rear relay. Stored SDs follow that relationship: 18.0-14.6 mm across the front cemented group and about 6.45-11.0 mm through the compact rear group, with a 7.9 mm stop.
- No SD values changed. Current values remain figure-derived estimates with rendering and sag-clearance constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
