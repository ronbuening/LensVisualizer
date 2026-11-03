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
