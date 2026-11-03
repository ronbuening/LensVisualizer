# Audit Log - PANASONIC LUMIX G FISHEYE 8mm f/3.5

Source: US 2012/0147254 A1 Example 4 — Panasonic / Adachi, Imaoka

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.1 → 0.996 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 895.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: rows reproduce the patent's 1 m state; focus description gives the production 0.1 m MFD.
- `catalog.closeFocusM.marketing` 0.1 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
