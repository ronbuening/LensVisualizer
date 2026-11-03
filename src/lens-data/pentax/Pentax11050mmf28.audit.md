# Audit Log — Pentax-110 50mm f/2.8

Patent: US 4,289,385, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4289385.pdf`.
- Patent rows confirmed L4 nd = 1.74077, vd = 27.8 and L5 nd = 1.66446, vd = 35.8.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7 | `S-TIH11 (OHARA)` | `S-TIH13 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L5 / S9 | `S-TIM22 (OHARA)` | `J-BASF2 (Hikari)` | Coefficient-backed Hikari row already present in the catalog. |

### Analysis sync

- Updated the L4/L5 element discussion and summary table.

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US4289385.pdf`.
- Reviewed the first drawing sheet; the five-element telephoto layout and rear body diaphragm agree with the current rear-stop modeling.

### Disposition

- No additional glass corrections beyond the 2026-05-20 L4/L5 relabels.
- APD status remains `false` for all elements; no partial-dispersion data is present in the patent.
- No numeric clear-aperture or semi-diameter table was found. Existing SDs remain unchanged.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.9 → 0.953 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 5.9 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; focus description gives the 0.9 m MFD.
- `catalog.closeFocusM.marketing` 0.9 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
