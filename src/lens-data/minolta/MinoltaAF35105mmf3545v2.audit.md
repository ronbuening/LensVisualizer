# Audit Log - Minolta AF 35-105mm f/3.5-4.5 New (v2)

Patent: US 4,871,239, Example 3 / claim 29

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US4871239.pdf`.
- Claim 29 table rows confirmed for the reviewed code-only elements:
  - L2/L5/L8: nd = 1.67000, vd = 57.07.
  - L3: nd = 1.69680, vd = 56.47.
  - L4: nd = 1.77250, vd = 49.77.
  - L10: nd = 1.80741, vd = 31.59.
  - L11: nd = 1.72000, vd = 42.02.
  - L12 thin layer: nd = 1.51790, vd = 52.31.
  - L13: nd = 1.80500, vd = 40.97.

### Catalog-search disposition

- Used the newly added CDGM `H-LAK12` as the coefficient-backed equivalent for L3's `697565` family.
- Added OHARA `S-LAM58` from the public OHARA datasheet; it is the exact coefficient-backed `720420` match for L11.
- No coefficient-backed public matches were found for `670571`, `773498`, `807316`, `518523`, or `805410`.

### Changes made

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L2, L5, L8 | `Unmatched 670/571 ...` | `670571 - ...` | Unresolved; explicit code retained. |
| L3 | `Unmatched 697/565 ...` | `H-LAK12 (CDGM equivalent; patent 697565)` | Coefficient-backed equivalent. |
| L4 | `Unmatched 773/498 ...` | `773498 - ...` | Unresolved; explicit code retained. |
| L10 | `Unmatched 807/316 ...` | `807316 - ...` | Unresolved; explicit code retained. |
| L11 | `Unmatched 720/420 ...` | `S-LAM58 (OHARA)` | Exact catalog match. |
| L12 | `Unmatched 518/523 ...` | `518523 - ...` | Unresolved hybrid/aspheric layer. |
| L13 | `Unmatched 805/410 ...` | `805410 - ...` | Unresolved; explicit code retained. |

### Analysis sync

- Updated element descriptions and the glass-identification table for the resolved and unresolved rows.
