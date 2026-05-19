# Audit Log - Minolta AF 70-200mm f/2.8 APO G (D) SSM

Patent: JP 2004-109559 A, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/JP2004109559A.pdf`.
- The table text is not searchable, so the gitignored PDF was rendered locally and Example 1 table rows were checked visually.
- Example 1 rows confirmed:
  - L5: nd = 1.69680, vd = 56.47.
  - L6 and L10: nd = 1.75450, vd = 51.57.
  - L8: nd = 1.67000, vd = 57.07.
  - L14: nd = 1.78100, vd = 44.55.

### Catalog-search disposition

- Used newly added CDGM `H-LAK12` as the coefficient-backed equivalent for L5's `697565` family.
- No defensible coefficient-backed public matches were found for `755516`, `670571`, or `781446`.

### Changes made

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L5 | `Unmatched ... 697/565 code ...` | `H-LAK12 (CDGM equivalent; patent 697565)` | Coefficient-backed equivalent. |
| L6, L10 | `Unmatched (high-index crown, 755/516 code)` | `755516 - high-index crown ...` | Unresolved; explicit code retained. |
| L8 | `Unmatched (moderate-index crown, 670/571 code)` | `670571 - moderate-index crown ...` | Unresolved; explicit code retained. |
| L14 | `Unmatched (high-index mid-dispersion, 781/446 code)` | `781446 - high-index mid-dispersion glass ...` | Unresolved; explicit code retained. |

### Analysis sync

- Updated the affected element descriptions and the glass-identification table.
