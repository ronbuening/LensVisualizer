# SamyangAF14mmf28FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR101933088B1.pdf, PDF page 17, Figure 1, Example 1`. Inspected at 600 dpi; axial screening scale approximately 51.22 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 21A / 22A | 9.85 / 9.85 | 8.0 / 8.0 | Optical rim about 8.0 mm; excluded label/leader ink. |
| 23 / 24 / 25 | 10.5 / 10.8 / 11.5 | 8.4 / 9.8 / 9.8 | Final doublet optical rims about 8.4–9.8 mm. |

L3 uses P-LASF47, L12 S-BAL35, and L13 the newly verified CDGM H-LaF7 curve. Coverage improves from 10/14 to 13/14. L7 (1.87795 / 37.3) remains unmatched. The published front-asphere heights 18.04 / 15.21 mm remain unchanged. Automated rear-element screening is contaminated by leader lines; manual optical-rim readings govern.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.
