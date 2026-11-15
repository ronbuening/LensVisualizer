# SamyangAF24mmf28FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/WO2020230915A1.pdf, PDF page 28, Figure 1, Example 1`. Inspected at 600 dpi; axial screening scale approximately 22.63 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 14 / 15 | 8.45 / 8.45 | 10.3 / 10.3 | Rear optical rim about 10.3 mm. |

L41 uses J-BK7A and L51 S-TIM35 as qualified dispersion proxies, improving coverage from 5/7 to 7/7. Neither is a production identity. L21 trial 8.5 mm failed the 2→3 gap rule (5.35 mm intrusion versus 4.102 mm allowed); retained 7.5 mm. Its automated 10.34 mm RIM result belongs to overlapping front-element ink, not its own rim.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.24 → 0.257 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 6.9 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed TL = 0.2 m row; focus description calls 0.24 m the production specification.
- `catalog.closeFocusM.marketing` 0.24 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: focus.description and analysis: Samyang's 0.24 m is catalog metadata; the TL=0.2m row focuses at 0.257 m.

## 2026-11-14 — Published finite conjugates

Patent: WO 2020/230915 A1. PDF pages below use the one-based PDF page index.

| State (zoom/keyframe) | Field | Before | After | Source and paraxial residual |
| --- | --- | --- | --- | --- |
| 0/1 | `focus.conjugates` | Absent | 993.49977 mm, `first-surface` | PDF p. 17, Embodiment 1, Table 3 (¶0126), MAG=-1/40 column; D1=4.11302 mm, D2=2.35986 mm. Offset +0.036397355 mm (+3.683634 diffraction depths); `ambiguous-reference`. |
| 0/2 | `focus.conjugates` | Absent | 200.04902 mm, `first-surface` | PDF p. 17, Embodiment 1, Table 3 (¶0126), TL=0.2m column; D1=3.25312 mm, D2=3.21976 mm. Offset +0.061961692 mm (+6.105551 diffraction depths); `consistent`. |

Table 1: "obj | infinity | D0" in Lens surface/R/Dn columns, immediately before surface 1 (PDF p. 16, printed p. 14); ¶0119 specifies Dn in millimeters. This defines the declared distance from the object plane to the first surface.

State 0/1 is retained on that explicit table definition: both references lie within the 25-depth audit limit. The other (`image-plane`) reference gives +0.070890030 mm (+7.161394 depths); the trace does not discriminate the reference.

The close entry uses the printed D0 = 200.04902 mm, not the TL=0.2m column heading. Paragraph 0125 (PDF p. 17, printed p. 15) defines TL as "a distance from an object to the image plane IMG"; the D0 object-row reference is independently explicit in Table 1. The contradictory heading is not used to replace D0 or the authored gaps.

The published flags already include the declared keyframes. All gap values, surfaces, image-plane settings and existing focus controls are retained.
