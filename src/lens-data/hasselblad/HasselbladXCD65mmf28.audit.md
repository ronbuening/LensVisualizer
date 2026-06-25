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

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/US20200319427A1.pdf`, Example 1 / Figure 1, against the current data file.
- Confirmed L22 `S-FPL51` and L23 `S-FPM3` are already marked as patent-backed APD; both rows are the patent-marked anomalous-dispersion glasses.
- Confirmed the high-index elements remain L12 `S-LAH55V` and L31 `S-LAH92` (nd >= 1.8), neither of which is an additional APD element.
- Rendered and reviewed the patent drawing. The current SDs match the ray-bundle layout: compact front cemented groups, small G2 near the stop, and the largest diameters in the rear group. No SD edits were made.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.
