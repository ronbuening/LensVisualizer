# SamyangXP35mmf12 audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR102077265B1.pdf, PDF page 20, Figure 5, Example 3`. Inspected at 600 dpi; axial screening scale approximately 74.38 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 13 / 14 / 15 | 23.5 / 20.6 / 20.0 | 26.8 / 26.8 / 26.0 | Central cemented doublet rim about 27 mm; preserve slight rear taper. |

L9 uses E-FD8 and L12 L-LAH85V, improving coverage from 10/12 to 12/12. Smaller rear radii at 21/22A/23A introduce additional default off-axis clipping, so 21.3/22.0/22.5 mm are retained. The 22A polynomial turns near 19.85 mm; reducing it below that point also loses the existing sampled fan clearance. This source/model limitation is recorded rather than changing coefficients or stop size. Existing aspheric departure statements therefore remain valid.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.
