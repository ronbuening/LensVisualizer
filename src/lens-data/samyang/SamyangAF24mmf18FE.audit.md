# SamyangAF24mmf18FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/US20240151940A1.pdf, PDF page 2, Figure 1, Example 1, rotated 90 degrees`. Inspected at 600 dpi; axial screening scale approximately 24.87 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| All | Existing | Retained | Manual optical rims agree within measurement/model tolerance; high L91 screening result is label ink. |

All 11/11 elements already resolve to compatible curves; no glass reassignment is needed. The first crop touched the span boundary; the corrected crop was 0.20,0.375,0.655,0.669 after rotation.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.
