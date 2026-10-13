# SamyangXP35mmf12 audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR102077265B1.pdf, PDF page 20, Figure 5, Example 3`. Inspected at 600 dpi; axial screening scale approximately 74.38 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 13 / 14 / 15 | 23.5 / 20.6 / 20.0 | 26.8 / 26.8 / 26.0 | Central cemented doublet rim about 27 mm; preserve slight rear taper. |

L9 uses E-FD8 and L12 L-LAH85V, improving coverage from 10/12 to 12/12. Smaller rear radii at 21/22A/23A introduce additional default off-axis clipping, so 21.3/22.0/22.5 mm are retained. The 22A polynomial turns near 19.85 mm; reducing it below that point also loses the existing sampled fan clearance. This source/model limitation is recorded rather than changing coefficients or stop size. Existing aspheric departure statements therefore remain valid.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent 23A gap with the patent's physical rear stack (`patents/KR102077265B1.pdf`, PDF pp. 14–15,
  Tables 7 and 9, confirmed on the rendered page): D3 = 35.985595 / 42.958030 mm, plate 2.500 mm, nd 1.51680, νd 64.20,
  D4 = 0.528568 / 0.562472 mm (infinity / close). One `gapAfterMm` = 0.528568 is kept and the +0.033904 mm close-state
  D4 change is carried in the 23A close gap (42.991934 mm), so the printed 23A→IMG path is unchanged. `D5` stays
  unpropagated as before. Glass N-BK7 (catalog-compatible with 1.51680 / 64.20).
- Paraxial check against the previous data: EFL identical and defocus unchanged at both focus keyframes (worst
  difference 6e-15 mm). Physical track grows by 2.5(1 − 1/1.5168) = 0.851793 mm; `closeFocusM` moves from 0.339890654
  to 0.340742447 m so the patent D0 = 175.678043 mm is preserved against the physical image plane.
