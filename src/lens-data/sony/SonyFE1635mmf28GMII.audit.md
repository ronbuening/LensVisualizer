# Audit Log - Sony FE 16-35mm F2.8 GM II

Patent: WO 2024/135126 A1, Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/WO2024135126A1.pdf`; the PDF is image-only for text extraction, so Tables 1-3 were rendered and checked visually.
- Table 1 confirms the full prescription and full effective diameters `phi_i`. Stored `sd` values are the patent diameters divided by two; spot checks include S1 `phi = 53.74 -> sd = 26.87`, S8 `35.68 -> 17.84`, and the rear image-circle diameter `43.37`.
- Tables 2 and 3 confirm the wide/mid/tele focal lengths, Fno, image height, variable zoom gaps, close-focus state, and aspherical coefficient rows already stored in the data file.
- No glass, APD, high-index, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.22 → 0.25 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 14.0 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: rows reproduce the patent's 247 mm state; focus description gives the production 0.22 m.
- `catalog.closeFocusM.marketing` 0.22 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: header and focus.description: the 247 mm close state focuses at 0.25 m; Sony's 0.22 m is catalog metadata.

## 2026-11-14 — Published finite conjugates

Patent: WO 2024/135126 A1, Example 1.

| Zoom/keyframe | Before | Added object distance / reference | Source locator | Paraxial offset (mm / diffraction depths) | Other-reference offset (mm / depths) |
|---|---|---|---|---|---|
| 0/1 | No conjugate | 111.71 mm / `first-surface` | PDF p. 24, printed p. 22; Table 3, Wide finite column, d0 row; `d0 = 111.71` | 0.017935368 / 1.7736494 | unavailable / unavailable |
| 1/1 | No conjugate | 117.88 mm / `first-surface` | PDF p. 24, printed p. 22; Table 3, Mid finite column, d0 row; `d0 = 117.88` | 0.095391443 / 9.4114543 | unavailable / unavailable |
| 2/1 | No conjugate | 119.57 mm / `first-surface` | PDF p. 24, printed p. 22; Table 3, Tele finite column, d0 row; `d0 = 119.57` | 0.2273778 / 22.228813 | unavailable / unavailable |

The retained rows are `consistent` under the 25-diffraction-depth criterion. Existing gaps, image plane and published flags are retained.

- State 0/1: D8 G1-G2=21.92 mm; D11 G2-STO=6.47 mm; D19 G4-G5=3.81 mm; D22 G5-G6=3.27 mm; D14 G3-G4=7.76 mm; BF=17.31 mm.
- State 1/1: D8 G1-G2=10.42 mm; D11 G2-STO=4.1 mm; D19 G4-G5=4.59 mm; D22 G5-G6=5.37 mm; D14 G3-G4=4.88 mm; BF=25.01 mm.
- State 2/1: D8 G1-G2=1.13 mm; D11 G2-STO=3.64 mm; D19 G4-G5=7.69 mm; D22 G5-G6=3.92 mm; D14 G3-G4=3.23 mm; BF=33.08 mm.

Reference evidence: Table 1 (PDF p. 23, printed p. 21): "0(OBJ)" has "(d0)" in the di column, immediately before surface 1.
