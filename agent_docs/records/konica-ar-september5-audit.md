# Konica AR additions - September 5, 2026

## Scope and root cause

Integrated the six supplied data/analysis pairs in the Konica maker folder: Hexanon AR
21mm f/2.8, 24mm f/2.8, 40mm f/1.8, 50mm f/1.8, 135mm f/3.5, and Zoom-Hexanon AR 35-70mm f/4.
The pre-existing README catalog-count change (663 -> 669) belongs to this addition.

The baseline Vitest run passed all 294 files / 2738 tests. The reproduced quality failure was
ESLint `no-loss-of-precision` on the 24mm lens's L3/L5 standalone focal-length literals.
Canonicalizing `-56.651508834880465` to `-56.65150883488047` and `24.882076321854737` to
`24.882076321854736` preserves exactly the same IEEE-754 values. No engine or test tolerance changed.

## Patent figures and display

All six exact ignored local PDFs were inspected at 600 dpi, using Example 1 throughout.
Individual source pages and retain/change decisions are in the sibling `.audit.md` files.

- 40mm L1: 16.75 -> 13.3 mm; L6: 13.6 -> 11.3 mm. The front optical rim measures about
  12.5 mm, but that trial clips the default 0.6-field fan; 13.3 mm preserves it.
- 135mm L4: 11.0 -> 13.2 mm, matching the clear optical rim.
- Remaining SDs retained: clean outlines agree adequately, while automated inflated readings
  include bevels, surface leaders, or group brackets. The 50mm's documented `gapSagFrac=0.95` remains.
- All six display names reviewed; the zoom range now uses an en dash. Patent-correlated diagram
  labels distinguish cemented component members (21mm L6a/L6b and zoom L2a/L2b).
- Three structured JP patent identifiers use Gregorian publication notation so report source lookup
  finds the existing local files. Route keys and prescription numbers are preserved.
- The 40mm corrected Example 1 table on PDF page 9 was also checked at 600 dpi: L5's Abbe number
  is 55.3, as authored; the small scan can make the final digit look like 5.

## Glass

The 24mm started at 4/8 coefficient-backed elements; all other additions were complete.
L2/L3 now explicitly use qualified S-BAL35 curves, L7 uses J-LAK7R, and L4 resolves through
new legacy OHARA PBH23. The PBH23 six-term polynomial, nd, vd, and code are transcribed from
`OHARA_260701.AGF` in the manufacturer's official all-products/discontinued catalog:
<https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip>.

All six additions now have full strict/trusted coverage (41/41 physical elements).
Global coverage rises from 7197/7741 to 7201/7741 strict and from 7212/7741 to 7216/7741 trusted.
There are zero catalog-coordinate mismatches. Patent nd/vd values and unresolved production
supplier identities are retained; no measured line indices or anomalous-dispersion claims were invented.
Companion analyses now correctly distinguish runtime catalog curves from historical glass identities.

## Changelog

Prepended one `lens` entry for the six additions, dated `2026-09-05`. The UTC clock was checked at
`2026-09-05 17:49:15 UTC`; the changelog stores the UTC calendar date rather than a local timestamp.
Existing published entries were left intact.

## Verification

- Baseline: 294 test files / 2738 tests passed; typecheck and format passed; two lint errors reproduced.
- All six surface and image-circle audits passed before edits.
- Focused dispersion/catalog consistency, render diagnostics, and validator checks: 177 tests passed.
- Added regression verifies all 41 glass elements resolve, patent coordinates remain intact, and
  both SD-refined lenses contain their axial and signed 0.6-field fans.
- Final `typecheck`, `format:check`, and `lint`: passed.
- Final full suite: 295 test files / 2740 tests passed.
- Final surface/image-circle audits: all six passed, zero undersized surfaces.
- Glass reports regenerated: 15 scan tests passed, zero catalog-coordinate mismatches.
- Production build passed: 1251 prerendered routes, sitemap and RSS feeds generated.
- Visual inspection used rasterized paths from the production `computeElementShapes` SVG helper.
  Live browser verification was unavailable (`No browser is available`). Patents and scratch renders remain untracked.
