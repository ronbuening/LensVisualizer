# Audit Log — Sony FE 135mm F1.8 GM

Patent: WO 2019/187633, Example 1

## 2026-06-04 — Sweep 2 catalog source pass

- Resolver support for slash-form codes lets the existing HOYA NBFD15 catalog entry resolve the G11 / `806/333` row.
- Relabeled G11 / S20 from `Lanthanum heavy flint (806/333, vendor uncertain)` to `NBFD15 (HOYA, 806333)`.
- `npm test -- dispersion` and `npm run generate:glass-reports` passed.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local equivalent patent file `patents/JPWO2019187633A1.pdf`.
- Example 1 rows confirmed L15 nd = 1.58313, vd = 59.38 and L23 nd = 1.72916, vd = 54.67.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L15 / S9A | `S-BAL35 (OHARA)` | `S-BAL42 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L23 / S14 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the G5/G8 element text and glass table.
