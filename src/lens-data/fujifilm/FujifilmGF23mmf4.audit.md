# Audit Log - FUJIFILM FUJINON GF23mmF4 R LM WR

Patent: US 2018/0210178 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20180210178A1.pdf`. The patent publishes Example 1 prescription, focus data, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a large retrofocus front group, a smaller stop/focusing region, and a large final rear positive element near the sensor cover plate.
- Stored SDs match that run: the front group starts at 20.0 mm, the stop-adjacent and focusing lenses sit mostly around 10.8-16.8 mm, and the final rear element expands to 22.0-23.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, wide-angle ray envelope, f/4 stop geometry, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
