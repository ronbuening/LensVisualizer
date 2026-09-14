# SamyangAF35mmf28FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR102127451B1.pdf, PDF page 24, Figure 7, Example 4`. Inspected at 600 dpi; axial screening scale approximately 25.44 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| All | Existing | Retained | Optical rims agree approximately; larger screening values include the stepped mounting outline and labels. |

All seven source pairs retain the documented e-line-like index / d-line Abbe ambiguity. No index conversion, tolerance relaxation, or opportunistic unrelated glass match is applied. Coverage remains 0/7; the source limitation is explicit in the analysis.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.
