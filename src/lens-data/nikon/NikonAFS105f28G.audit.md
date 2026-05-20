# Audit Log - Nikon AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED

Patent: US 7,218,457 B2, Example 4 / Table 4

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US7218457.pdf`.
- Example 4 / Table 4 rows confirmed from the local patent text:
  - S5 / L3: nd = 1.717360, vd = 29.52.
  - S9 / L5: nd = 1.582670, vd = 46.43.
  - S19 / L10: nd = 1.620410, vd = 60.29.
  - S21 / L11: nd = 1.806100, vd = 40.94.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `S-TIH13 (OHARA)` | `S-TIH1 (OHARA)` | Exact nd/vd catalog match. |
| L5 / S9 | `S-TIM22 (OHARA)` | `BAF3` | Exact Schott nd/vd catalog match already in catalog. |
| L10 / S19 | `S-LAL59 (OHARA)` | `S-BSM16 (OHARA)` | Exact nd/vd catalog match. |
| L11 / S21 | `S-TIH53...` | `S-LAH53 (OHARA)` | Exact nd/vd catalog match; removed weaker alternate wording. |

### Catalog-search disposition

- Checked public OHARA/Schott-backed catalog data and existing coefficient-backed entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and the catalog-identification note.
