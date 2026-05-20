# Audit Log - Hasselblad XCD 2,8/65

Patent: US 2020/0319427 A1, Example 1 / Table 1

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US20200319427A1.pdf`.
- Example 1 table rows confirmed from the local text extraction:
  - S8 / L21: nd = 1.59551, vd = 39.24.
  - S11 / L23: nd = 1.53775, vd = 74.70.
  - S13 / L31: nd = 1.89190, vd = 37.13.
  - S14 / L32: nd = 1.69895, vd = 30.13.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L21 / S8 | `S-TIM3 (OHARA)` | `S-TIM8 (OHARA)` | Exact nd/vd catalog match. |
| L23 / S11 | `S-FPM2 (OHARA)` | `S-FPM3 (OHARA)` | Exact nd/vd catalog match. |
| L31 / S13 | `S-LAH79 (OHARA)` | `S-LAH92 (OHARA)` | Exact nd/vd catalog match. |
| L32 / S14 | `S-TIM22 (OHARA)` | `S-TIM35 (OHARA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA catalog pages and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated the element descriptions, chromatic strategy, and glass-selection table.
