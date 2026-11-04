# Audit Log - CANON POWERSHOT G7 X 8.8-36.8mm f/1.8-2.8

Patent: US 2016/0062096 A1, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20160062096A1.pdf`. The patent publishes both Fig. 1 and an "Effective diameter" column in the Numerical Example 1 surface table.
- The table lists full effective diameters, and the stored `sd` values are one half of those entries, including the stop. The rendered table confirms the leading digits that OCR drops on several rows.
- Fig. 1 supports the same envelope: a large front L1 group, a smaller variator group, a tight stop, compact L3/L4/L5 groups, and only modest re-expansion at the rear.
- No SD values changed because the data already preserve the patent-published effective diameters.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.05 → 0.109 m, with per-station `closeFocusM` 0.109 / 0.259 / 0.468 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 835.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: close rows are paraxial estimates; focus description gives production 0.05 m wide / 0.40 m tele.
- `catalog.closeFocusM.marketing` 0.05 / 0.4 m (wide / tele) keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: header and focus.description: the close rows were aimed at the 0.05 / 0.40 m MFDs but focus at 0.109 / 0.259 / 0.468 m; analysis: the same, and the production figures are marketed metadata.
