# Audit Log — NIKON NIKKOR Z 85mm f/1.8 S

Patent: JP 2020-173366 A, Example 3

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Referenced local patent `patents/JP2020173366A.pdf` was not present, so the public patent PDF was fetched to `/tmp/JP2020173366A.pdf` for this review.
- The public patent text for Example 3 confirms the relevant glass rows:
  - row 6 / L14: nd = 1.85025, νd = 30.05
  - row 17 / L43: nd = 1.84850, νd = 43.79

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L14 | `Dense flint (code 850301)` | `H-ZLaF76 (CDGM, 850301)` | CDGM H-ZLaF76 public datasheet gives a coefficient-backed near-exact match, code `850301`. |
| L43 | `Lanthanum crown (code 849438)` | `J-LASFH22 (Hikari, 849438)` | Hikari 2023 catalog gives a coefficient-backed exact match, code `849438`. |

### Catalog-search disposition

- Added CDGM H-ZLaF76 to the glass catalog using published Sellmeier constants from the CDGM datasheet.
- Added Hikari J-LASFH22 to the glass catalog using the Hikari 2023 formula-3 power-series coefficients.
- Updated the analysis notes to identify both catalog-backed glass assignments and keep the remaining unresolved codes unchanged.

