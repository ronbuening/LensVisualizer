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

## 2026-08-11 - D-K59 catalog recovery

- Rendered local `patents/US20140285903A1.pdf` page 14 and visually confirmed Example 1 surfaces 10-11 at
  `nd = 1.51760`, `vd = 63.5` for the double-aspheric L21 element.
- CDGM D-K59 is the exact coefficient-backed 518635 catalog coordinate and is a better dispersion model than the prior
  BSC7-family inference.
- Relabeled L21 as a D-K59 catalog equivalent. Fujifilm's production supplier remains unspecified; no asphere,
  prescription, or semi-diameter values changed.
