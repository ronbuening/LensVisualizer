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

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Rechecked local `patents/JP2004109559A.pdf`.
- Because the numeric tables do not extract cleanly with `pdftotext`, pages 15-17 were rendered locally for visual checking of Example 1.
- The rendered tables confirm the four `1.49310 / 83.58` low-dispersion rows at N2, N3, N12, and N15, plus the previously audited `697565`, `755516`, `670571`, and `781446` rows.

### Glass and APD disposition

- Changed the four `1.49310 / 83.58` rows from generic proprietary unmatched labels to explicit `493836` Minolta AD/ED fluorophosphate-type code labels.
- APD remains `inferred` from production documentation. The patent confirms the high-Abbe material rows but does not publish partial-dispersion ratios or line-index data.

### Semi-diameter disposition

- The patent gives no per-surface clear apertures.
- Existing SDs remain inferred visualization apertures constrained by the zoom envelope and f/2.8 telephoto proportions. No SD edits were made.
