# Audit Log - Sigma 40mm F1.4 DG HSM Art

Patent: JP 2020-012952 A, Example 1

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2020012952A.pdf`.
- Example 1 rows confirmed from local patent text:
  - S7 / L4: nd = 1.64769, vd = 33.84.
  - S11 / L7: nd = 1.60342, vd = 38.01.
  - S22 / L13: nd = 1.64769, vd = 33.84.
  - S24 / L14: nd = 1.62588, vd = 35.74.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7 | `E-FD15 (HOYA)` | `E-FD2 (HOYA)` | Exact nd/vd catalog match. |
| L7 / S11 | `E-F3 (HOYA)` | `S-TIM5 (OHARA)` | Exact nd/vd catalog match. |
| L13 / S22 | `E-FD15 (HOYA)` | `E-FD2 (HOYA)` | Same glass as L4. |
| L14 / S24 | `S-TIM35 (OHARA)` | `E-F1 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and source notes.
