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

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with the patent's physical rear stack from Example 1 (Table 1 p. 12, Table 3 p. 13,
  confirmed on the rendered pages): surface 25 now stores D3 = 22.66 mm (fixed in all three focus states), then
  `rearPlates` OD1 2.500 mm, nd 1.51680, νd 64.20 (N-BK7; `resolveCompatibleGlass` accepts it). Printed D4 / D5 vary
  (0.448429 / 0.051571, 0.507222 / −0.007222, 0.548758 / −0.048758 mm) but always sum to 0.500000 mm, so the plate's
  `gapAfterMm` is that fixed sum, derived rather than printed, matching the file's existing D5 bookkeeping treatment.
- Paraxial check against the previous data: EFL identical and defocus unchanged at every focus keyframe (worst
  difference 3e-15 mm), because the legacy 24.808206751 mm was the exact fold 22.66 + 2.500/1.51680 + 0.500. Physical
  track grows by 2.500 × (1 − 1/1.51680) = 0.852 mm, to 105.364 mm.

## 2026-10-11 — Element names follow the patent's reference signs

Each element's `name` is now the patent's reference sign, the same string as its `diagramLabel`. Before this, the diagram labelled the first element "L11" while the inspector, the Abbe diagram and the element table gave "L11" to the eleventh element. The EF sibling and the Samyang 100mm Macro file were changed the same way on this date.

| Element | Old name | Name now | | Element | Old name | Name now |
|---:|---|---|---|---:|---|---|
| 1 | L1 | L11 | | 8 | L8 | L81 |
| 2 | L2 | L21 | | 9 | L9 | L91 |
| 3 | L3 | L31 | | 10 | L10 | L101 |
| 4 | L4 | L41 | | 11 | L11 | L111 |
| 5 | L5 | L51 | | 12 | L12 | L121 |
| 6 | L6 | L61 | | 13 | L13 | L131 |
| 7 | L7 | L71 | | 14 | L14 | L141 |

The analysis was remapped by element (84 references and the section headings, which now also give the ordinal) and states the convention once. The sections of this log above this one keep the sequential L1–L14. No optical value, glass label, bracket or diagram label changed; the engine reports the same focal length before and after.
