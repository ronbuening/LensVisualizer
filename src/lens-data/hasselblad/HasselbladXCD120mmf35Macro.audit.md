# Audit Log - Hasselblad XCD 3,5/120mm Macro

Patent: US 2020/0192060 A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US20200192060A1.pdf`.
- Example 2 table rows confirmed:
  - L11: nd = 1.85026, vd = 32.27.
  - L23: nd = 1.91650, vd = 31.60.
  - L31: nd = 1.89286, vd = 20.36.
  - L51: nd = 1.80000, vd = 29.84.
  - L52: nd = 1.91650, vd = 31.60.

### Catalog-search disposition

- Matched L11 to existing coefficient-backed OHARA `S-LAH71` (`850323`).
- Corrected/used OHARA `S-LAH88` as the coefficient-backed `917316` match for L23/L52; the runtime catalog code was updated from rounded `916316` to vendor d-code `917316`.
- Matched L51 to existing coefficient-backed OHARA `S-NBH55` (`800298`).
- The original pass found no defensible public match for L31 / `893204`. The later Sweep 2 catalog pass added the S-NPH4 `893204` code path from public OHARA coefficients.

### Changes made

| Element | Before | After | Disposition |
|---|---|---|---|
| L11 | `Lanthanum flint, 850/323 (unmatched)` | `S-LAH71 (OHARA)` | Exact catalog match. |
| L23 | `Very high-index lanthanum flint, 917/316 (unmatched)` | `S-LAH88 (OHARA)` | Exact catalog match. |
| L31 | `Ultra-high-dispersion flint, 893/204 (unmatched)` | `893204 - ultra-high-dispersion flint ...` | Resolved by Sweep 2 via S-NPH4 code-backed catalog data. |
| L51 | `Dense flint, 800/298 (unmatched)` | `S-NBH55 (OHARA)` | Exact catalog match. |
| L52 | `Very high-index lanthanum flint, 917/316 ...` | `S-LAH88 (OHARA)` | Same glass as L23. |

### Analysis sync

- Updated element descriptions, glass table rows, and palette summary. Sweep 2 later resolved L31 by adding the missing `893204` catalog code.
