# Audit Log - Laowa 12mm f/2.8 Zero-D

Patent: CN205720849U / WO2017177665A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/CN205720849U.pdf`.
- The PDF text layer is empty; pages were rendered locally from the gitignored PDF and the Example 2 table was checked visually.
- Example 2 rows confirmed:
  - surface 1 / L1: nd = 1.74916, vd = 54.67.
  - surface 8 / L5: nd = 1.83481, vd = 44.72.
  - surface 19 / L12: nd = 1.90366, vd = 29.31.
  - surface 26 / L16: nd = 1.80781, vd = 40.97.

### Catalog-search disposition

- Added CDGM `D-ZLAF81-25` from the public CDGM 2022 Zemax / refractiveindex.info coefficient row; it is the coefficient-backed `808410` match used for L16.
- No coefficient-backed public matches were found for `749547`, `835447`, or `904293`.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `Unmatched high-index crown class (749/547)` | `749547 - high-index crown class ...` | Unresolved; explicit code retained. |
| L5 / S8 | `Unmatched high-index lanthanum class (835/447)` | `835447 - high-index lanthanum class ...` | Unresolved; explicit code retained. |
| L12 / S19 | `Unmatched dense flint class (904/293)` | `904293 - dense flint class ...` | Unresolved; explicit code retained. |
| L16 / S26 | `Unmatched high-index class (808/410)` | `D-ZLAF81-25 (CDGM)` | Coefficient-backed catalog match. |

### Analysis sync

- Updated the L1, L5, L12, and L16 narratives plus the glass-selection table.
