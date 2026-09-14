# SamyangAF24mmf28FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/WO2020230915A1.pdf, PDF page 28, Figure 1, Example 1`. Inspected at 600 dpi; axial screening scale approximately 22.63 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 14 / 15 | 8.45 / 8.45 | 10.3 / 10.3 | Rear optical rim about 10.3 mm. |

L41 uses J-BK7A and L51 S-TIM35 as qualified dispersion proxies, improving coverage from 5/7 to 7/7. Neither is a production identity. L21 trial 8.5 mm failed the 2→3 gap rule (5.35 mm intrusion versus 4.102 mm allowed); retained 7.5 mm. Its automated 10.34 mm RIM result belongs to overlapping front-element ink, not its own rim.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.
