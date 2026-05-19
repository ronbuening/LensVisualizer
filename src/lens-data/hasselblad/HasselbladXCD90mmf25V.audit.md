# Audit Log - Hasselblad XCD 2,5/90V

Patent: JP 2022-99402 A, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/JP2022099402A.pdf`.
- Example 1 / Table 1A rows confirmed:
  - surface 5 / L3: nd = 1.77047, vd = 29.7, Pg,F = 0.5951.
  - surface 7 / L4: nd = 1.77047, vd = 29.7.
  - surface 12 / L6: nd = 1.91082, vd = 35.2.

### Catalog-search disposition

- Searched the runtime catalog plus public OHARA, Schott, HOYA, HIKARI, CDGM, and refractiveindex.info rows for 770297 and 911352.
- No coefficient-backed public match was found. The nearest public rows were outside the tolerance needed for a defensible named-glass relabel.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `Unmatched dense flint (770/297)` | `770297 - dense flint ...` | Unresolved; explicit unbroken code retained. |
| L4 / S7 | `Unmatched dense flint (770/297)` | `770297 - dense flint ...` | Same unresolved glass as L3. |
| L6 / S12 | `Unmatched ultra-high-index glass (911/352)` | `911352 - ultra-high-index glass ...` | Unresolved; explicit unbroken code retained. |

### Analysis sync

- Updated glass-selection text and tables to describe 770297 and 911352 as unresolved code-backed patent glasses rather than slash-form unmatched labels.
