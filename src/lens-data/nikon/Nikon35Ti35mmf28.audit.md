# Audit Log — Nikon NIKKOR 35mm f/2.8 (35Ti)

Patent: US 5,243,468, Fifth Embodiment

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US5243468.pdf`.
- Fifth Embodiment row confirmed L1 / surface 1 nd = 1.69680, vd = 55.6.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `Hoya BACD5...` | `S-LAL14 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair closely enough for Sellmeier coverage. |

### Analysis sync

- Updated the L1 glass paragraph and summary table.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.4 → 0.446 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 11.4 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; 0.4 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.4 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
