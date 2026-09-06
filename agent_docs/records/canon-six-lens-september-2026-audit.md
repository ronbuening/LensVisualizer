# Canon six-lens addition audit — 2026-09-06 UTC

## Result

Added EF 35mm f/2 IS USM, EF 70-300mm f/4-5.6 IS II USM, EF-M 15-45mm f/3.5-6.3 IS STM, EF-S 18-135mm f/3.5-5.6 IS STM, PowerShot G3 X, and PowerShot G9 X patent models with companion analyses and per-lens audit logs.

## Root cause and corrections

The initial full run had 2,742 passing tests and one failure in `patentMetadata`: three new Canon entries used `Canon Kabushiki Kaisha` instead of the catalog's `Canon Inc.`. Corrected those source records and romanized G9 X inventor Akihiko Yuki. No test expectations or metadata normalization rules were weakened.

Reviewed all six exact local patent embodiments at 600 dpi. G9 X used ray-envelope minimum SDs that underrepresented the front/rear optical outlines: enlarged L11 6.2→9.4 mm, L12 6.1→8.5 mm, L31 5.7→9.0 mm. Retained the other lenses' published or constrained apertures, rejecting automated readings contaminated by brackets, labels, and adjacent surfaces. Stops and focus/zoom trajectories are unchanged.

Glass coverage for the additions increased from 69/79 to 76/79 elements through existing qualified curves. Verified M-TAFD307 against HOYA's July 7, 2026 manufacturer AGF: its coefficients already existed, and the unresolved label omitted the M- prefix. No new glass type was necessary. The two EF-M 1.52996/55.8 elements and G9 X 1.84660/20.6 element remain unmatched. Removed 70-300mm proxy-derived line-index/dPgF fields so catalog estimates are not treated as measured patent data; qualified catalog dispersion remains available for all 17 elements.

Global coverage: 7,277/7,820 strict and 7,292/7,820 trusted surfaces, zero catalog-coordinate mismatches. Refreshed all glass reports. Normalized display-name ranges and parenthetical Canon PowerShot camera names. Added the lens changelog entry under September 6 using the live UTC clock (20:48:54 UTC); the schema stores the UTC date, not a time-of-day field.

## Verification

- `npm run typecheck`, `npm run format:check`, `npm run lint` — passed.
- `npm run test` — 295 files, 2,743 tests passed.
- `npm run generate:glass-reports` — 8 files, 15 tests passed.
- `npm run build` — passed, 1,260 prerendered routes and RSS/sitemap generation completed. Existing large-chunk advisory remains non-fatal.
- `audit:surface` and `audit:image-circle` — passed for all six lenses after edits; G9 X asphere scans show no turnover within revised apertures.
- Render diagnostics at five zoom and three focus positions per lens found no material SD trims. Visually compared static outlines generated from the production `computeElementShapes` paths against the patent crops.
- Browser access was unavailable; static geometry review is not a live UI interaction check.

Local patent PDFs remain unchanged and untracked. No production deployment or push was performed.
