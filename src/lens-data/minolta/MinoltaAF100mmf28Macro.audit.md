# Audit Log - Minolta AF 100mm f/2.8 Macro

Patent: US 4,764,000, Example 8 / claim 9

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US4764000.pdf`.
- Example 8 / claim table rows confirmed:
  - L4 / d7: nd = 1.74000, vd = 31.72.
  - L5 / d9: nd = 1.69680, vd = 56.47.
  - L7 / d13: nd = 1.80741, vd = 31.59.

### Catalog-search disposition

- Added OHARA `BPH50` from the public OHARA 2017 Zemax / refractiveindex.info formula-3 row; it is the exact coefficient-backed `740317` match for L4.
- Added CDGM `H-LAK12` as a coefficient-backed equivalent for the patent's `697565` family. Public CDGM cross-reference tables map `H-LAK12` (`697562`) to old OHARA `LAL64` (`697565`), but no coefficient-backed public LAL64 row was found, so this remains an equivalent assignment rather than supplier proof.
- No coefficient-backed public match was found for L7 / `807316`.

### Changes made

| Element | Before | After | Disposition |
|---|---|---|---|
| L4 | `Unmatched dense flint (740/317 class...)` | `BPH50 (OHARA)` | Exact catalog match. |
| L5 | `Unmatched high-index crown (697/565 class...)` | `H-LAK12 (CDGM equivalent; patent 697565)` | Coefficient-backed equivalent. |
| L7 | `Unmatched dense lanthanum flint (807/316 class...)` | `807316 - dense lanthanum flint ...` | Unresolved; explicit code retained. |

### Analysis sync

- Updated L4/L5/L7 descriptions and the glass-identification table.

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Rechecked local `patents/US4764000.pdf`, Example 8 / claim 9.
- The prior May glass audit remains valid: `BPH50 (OHARA)` for L4, `H-LAK12 (CDGM equivalent; patent 697565)` for L5, and unresolved code `807316` for L7.

### Disposition

- No glass-label, APD, or high-index-status changes were needed in this pass.
- The patent gives no clear apertures. Existing SDs remain inferred from the f/2.83 marginal envelope, 55 mm production filter constraint, edge thickness, and cross-gap sag clearance, so no SD edits were made.
