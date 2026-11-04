# Audit Log - FUJIFILM EBC FUJINON-W 35mm f/1.9

Source: US 4,018,512 Example 1 — Fuji Photo Optical / Yutaka Sakai

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.4 → 0.455 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 13.8 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: travel approximated from the 0.40 m production MFD the focus description names.
- `catalog.closeFocusM.marketing` 0.4 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
