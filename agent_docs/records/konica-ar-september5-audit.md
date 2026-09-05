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

## Screenshot follow-up — 2026-09-05 UTC

Reviewed all six user-supplied site screenshots against the same exact 600 dpi patent crops.
The five prime-lens SD sets remain: their residual shape differences are within scan uncertainty
or arise from bevels outside the optical rims. In particular, the 50mm clean figure/data ratios
are 0.89–0.94 with normalized shape ratios 0.97–1.03, so another SD rescaling is unwarranted.
The 21/24mm stepped front components and the 40mm stop-adjacent components retain optical
clearance limits; copying their external bevels would misrepresent the optical surfaces.
The 135mm's updated rear rim remains consistent with its drawing.

The zoom's prior blanket SD retention was too broad: the front meniscus and final positive
singlet require separate measurements away from nearby brackets. The follow-up reduces S6/S7
from 18.9/18.7 to 15.0/14.8 mm and S14/S15 from 11.6/11.7 to 10.0/10.0 mm. The latter keeps
ray clearance above the drawing's roughly 8.8 mm rim. See the sibling zoom audit for measurements,
rejected trials, and render checks. Radii, glass coordinates, stop size, and spacings are unchanged.

### Display and glass findings

Four new patent numbers lacked the space after `JP` required by the existing publication-link
and jurisdiction parsers. This explains both missing header links in the screenshots and incorrect
`OTHER` jurisdiction assignment. Corrected the four records to `JP YYYY-NNNNNN A`; all six now
produce links and classify under Japan. No shared parser or route key was changed.

The 21mm diagram now uses `FRONT (L1–L4)`, `REAR (L5–L8)`, and `L6 (L6a+L6b)` consistently;
its cemented-element badges identify `L6` too. Other element types, optical-power signs, counts,
cemented pairs, stop annotations, and display names agree with the selected prescriptions.
The prime MFD values remain product metadata. The zoom header continues to distinguish the
marketed 35–70mm f/4 lens from the approximately 36–68mm f/3.5 patent model.

All 41 physical elements still resolve to catalog curves. The largest absolute coordinate
residuals are approximately 0.000004 in nd and 0.07 in vd, well inside the existing guards.
There is no uncovered glass type in this batch to backfill. No coefficient, measured line index,
production supplier, or APD tag was added in this follow-up.

The four themes derive ordinary glass fill from patent nd: low-index at nd ≤ 1.6,
standard at 1.6 < nd ≤ 1.78, and high-index above 1.78. The screenshots agree with those rules:

| Lens | Low-index elements | High-index elements | Remaining elements |
|---|---|---|---|
| 21mm | none | L6b | standard |
| 24mm | L2, L3 | L4, L6 | standard |
| 40mm | L2 | L6 | standard |
| 50mm | none | none | standard |
| 135mm | L1, L2 | L4 | standard |
| 35–70mm | none | L2b, L3, L6 | standard |

No selected patent publishes partial-dispersion evidence supporting an APD badge. The ordinary
index fills and the Abbe-number annotations are already complete; supplier-neutral equivalents
remain distinct from production glass identities. Global strict/trusted coverage remains
7201/7741 and 7216/7741, with zero catalog-coordinate mismatches.

### Movement ordering

The five primes expose neither focus nor zoom movement because no internal reconstruction is
authored. The zoom exposes both. In the fixed camera/image-plane frame, close focus moves FRONT
objectward by 5.490753 / 5.410155 / 5.394246 mm at wide/middle/tele while REAR stays fixed.
At infinity focus, Wide → Middle → Tele moves FRONT imageward by 13.210962 mm and REAR
objectward by 19.869038 mm overall. Sampled paths at infinity, middle, and close focus remain
monotonic, consistent with Fig. 1(a/b). No variable table or direction required correction.

Added regression coverage for publication links/jurisdiction, movement ordering, fixed rear-group
focus position, and the refined zoom's ray clearance across five zoom and three focus positions.
The changelog is unchanged as requested.

### Follow-up verification

- Zoom surface and image-circle audits: passed, zero undersized surfaces.
- Focused batch/render diagnostics: 2 files / 10 tests passed.
- Glass report regeneration: 8 files / 15 tests passed; coordinate mismatches remain zero.
- Typecheck, format check, and lint: passed.
- Full suite: 295 files / 2743 tests passed.
- Production build: passed, 1251 prerendered routes; existing large-chunk warnings only.
- User screenshots, exact patent crops, and rasterized production SVG paths were inspected;
  live browser interaction was unavailable.
- `git diff --check`: passed; ignored patent PDFs and scratch renders remain outside the commit.
