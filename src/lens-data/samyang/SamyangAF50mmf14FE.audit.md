# SamyangAF50mmf14FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR101825708B1.pdf, PDF page 15, Figure 1, Example 1`. Inspected at 600 dpi; axial screening scale approximately 60.78 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| All | Existing | Retained | Most differences are within 15%; enlarging L4 fails gap clearance. |

L8 uses SUMITA K-VC80(M) as a qualified dispersion proxy, improving coverage from 6/9 to 7/9. The source spectral ambiguity and rejection of L-LAL15 as an identity remain explicit. L3/L7 (1.684 / 31.3) remain unmatched. A surface-7 trial of 19.4 mm failed the 6A→7 gap rule (13.00 mm versus 9.703 mm allowed).

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.
