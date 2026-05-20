# Audit Log - Sigma 30mm f/2.8 DP2 Merrill

Patent: JP 2013-156459 A, Example 4

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2013156459A.pdf`.
- Example 4 rows confirmed from local patent text:
  - S5 / L3: nd = 1.69895, vd = 30.05.
  - S8 / L5: nd = 1.77250, vd = 49.47.
  - S10 / L6: nd = 1.58144, vd = 40.89.
  - S14 / L8: nd = 1.91082, vd = 35.25.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `S-TIM28 (OHARA)` | `S-TIM35 (OHARA)` | Exact nd/vd catalog match. |
| L5 / S8 | `S-LAL59 (OHARA, probable)` | `S-LAH66 (OHARA)` | Exact nd/vd catalog match. |
| L6 / S10 | `S-TIM2 (OHARA)` | `S-TIL25 (OHARA)` | Exact nd/vd catalog match. |
| L8 / S14 | `S-LAH79 (OHARA)` | `TAFD35 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and manufacturing note.
