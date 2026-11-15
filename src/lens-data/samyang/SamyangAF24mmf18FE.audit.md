# SamyangAF24mmf18FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/US20240151940A1.pdf, PDF page 2, Figure 1, Example 1, rotated 90 degrees`. Inspected at 600 dpi; axial screening scale approximately 24.87 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| All | Existing | Retained | Manual optical rims agree within measurement/model tolerance; high L91 screening result is label ink. |

All 11/11 elements already resolve to compatible curves; no glass reassignment is needed. The first crop touched the span boundary; the corrected crop was 0.20,0.375,0.655,0.669 after rotation.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.

## 2026-11-14 — Published finite conjugates

Patent: US 2024/0151940 A1. PDF pages below use the one-based PDF page index.

| State (zoom/keyframe) | Field | Before | After | Source and paraxial residual |
| --- | --- | --- | --- | --- |
| 0/1 | `focus.conjugates` | Absent | 915.554 mm, `first-surface` | PDF p. 14, Embodiment 1, TABLE 3, m=-1/40 column; D1=10.155 mm, D2=1.407 mm. Offset +0.036468963 mm (+9.000471 diffraction depths); `consistent`. |
| 0/2 | `focus.conjugates` | Absent | 101.451 mm, `first-surface` | PDF p. 14, Embodiment 1, TABLE 3, TL=0.19 m column; D1=7.642 mm, D2=3.920 mm. Offset +0.086603851 mm (+21.586974 diffraction depths); `consistent`. |

Table 1: "Object" row has D0 in Thickness, immediately before surface 1 (PDF p. 13, printed p. 3); ¶0053 specifies mm. This defines the declared distance from the object plane to the first surface.

The published flags already include the declared keyframes. All gap values, surfaces, image-plane settings and existing focus controls are retained.
