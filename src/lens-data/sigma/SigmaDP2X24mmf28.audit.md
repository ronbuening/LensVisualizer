# Audit Log — Sigma DP2X 24mm f/2.8

Patent: JP 2010-101979 A, Example 5

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2010101979A.pdf`.
- Example 5 rows confirmed L1 nd = 1.71300, vd = 53.94 and L6 nd = 1.74180, vd = 49.23.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `S-LAL7 / LACL5 (OHARA / HOYA)` | `S-LAL8 (OHARA)` | Public OHARA catalog row is the closest coefficient-backed match. |
| L6 / S11 | `S-LAM55 (≈) / LACL60 (OHARA / HOYA)` | `S-LAM60 (OHARA)` | Public OHARA catalog row clears the false S-LAM55 resolution. |

### Analysis sync

- Updated the L1/L6 probable-glass notes and glass table.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.28 → 0.343 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 22.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived rear-focus travel; 0.28 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.28 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
