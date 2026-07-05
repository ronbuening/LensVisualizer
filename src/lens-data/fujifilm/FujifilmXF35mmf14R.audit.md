# Audit Log - FUJIFILM FUJINON XF35mmF1.4 R

Patent: US 2014/0285903 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20140285903A1.pdf`. The patent publishes Example 1 prescription, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a broad front group, a taper toward the stop, and a modest rear cemented group rather than a large image-side collector.
- Stored SDs match that profile: front GF begins at 15.5-16.8 mm, stop-adjacent surfaces narrow to about 8.3-9.0 mm, and rear GR remains about 6.5-10.4 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/1.4 stop geometry, marginal/chief-ray envelope, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
