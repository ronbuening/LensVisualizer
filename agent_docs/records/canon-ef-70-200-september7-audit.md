# Canon EF 70-200mm patent and glass audit

## Scope

Added the three supplied data/analysis pairs: EF 70-200mm f/2.8L IS USM,
f/4L IS USM, and f/4L USM. Preserved their fixed patent embodiments, source
prescriptions, calibrated stops, and authored focus provenance. The f/2.8L IS
model remains a correlated 21/19 patent design, not the production 23/18 formula.

## Figure review

Inspected the exact ignored local PDFs at 600 dpi. Crops below are page fractions;
figures are horizontal and show the wide infinity state. Dimensions are inferred
optical rims, not published clear apertures or mechanical dimensions.

| Lens | Local PDF / page / crop | Accepted SD changes (mm) |
| --- | --- | --- |
| f/2.8L IS | `JP_2002162564_A.pdf`, p10 Fig. 1, `0.279,0.767,0.618,0.862` | r1/r2: 39/34 → 34/34; r40/r41: 16/16.5 → 19.5/19.5 |
| f/4L IS | `JP_2008070450_A.pdf`, p10 Fig. 1(a), `0.147,0.226,0.36,0.28` | r25–r29: common 11.1; r30/r31: 13.4; r32–r34: 15; r35/r36: 18 |
| f/4L | `JP_2000284174_A.pdf`, p8 Fig. 1, `0.26,0.435,0.641,0.526` | r25/r26: 13 → 15.3; r27/r28: 12.5 → 15.8; r29/r30: 12.5 → 16.4 |

Axial calibration scales were 106.70, 158.03, and 87.17 µm/px, respectively.
The f/2.8L IS front rim is kept at 34 mm (drawing about 32.5–33 mm) to
avoid making the first surface smaller than the tele-state paraxial entrance
aperture. The supplied internal aperture limits remain in place.
Visual inspection confirmed optical edges and rejected contaminated measurements
from brackets/focus arrows (notably f/4L E6/E7). Most retained apertures already
followed the figure within measurement uncertainty or had tight gap constraints.

The f/4L IS Gm outline suggests about 12.5–13 mm, but a 12.5 mm shared rim
produces 2.23 mm intrusion across the 1.98 mm D27 air gap. A common 11.1 mm
rim passes the default 0.90 policy and improves the silhouette. No tolerance was
relaxed. The f/2.8L IS retains its supplied 0.95 gap policy for r12/r13 and r15/r16.

## Glass and metadata

- Added discontinued OHARA S-TIM39 from the freshly downloaded official
  [OHARA_260701.AGF catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip),
  formula 2, code 667330, nd 1.666800, vd 33.054985. Transcribed its six
  Sellmeier constants without fitting; preserved patent nd/vd and supplier uncertainty.
- Strict Sellmeier coverage for the additions improved from 56/57 to 57/57:
  f/2.8L IS 21/21, f/4L IS 20/20, f/4L 16/16. Catalog-wide coverage is
  7,334/7,877 non-air surfaces (93.1%). No production-glass or APO claim was added.
- Corrected display-name spacing to Canon's f/2.8L and f/4L nomenclature and
  normalized structured JP publication numbers to the jurisdiction-aware spaced format.
- Prepended one lens changelog entry dated `2026-09-07`, from the live clock
  reading `2026-09-07 15:46:29 UTC`; existing shipped entries were preserved.

## Verification

- All three surface and image-circle audits passed before and after the edits.
- Glass report generation passed its eight test files / 15 tests.
- A 7,218-ray axial sampling comparison over three zoom positions and both
  focus endpoints found no newly clipped previously transmitted rays. This is
  a regression comparison, not a claim of complete pupil transmission: the
  supplied f/2.8L IS internal apertures already clip some outer axial rays.
- Render diagnostics showed zero hidden SD trimming at all 18 sampled lens states.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` passed.
- `npm run test` passed: 296 files / 2,747 tests.
- `npm run build` passed: 1,264 prerendered routes, sitemap, and RSS feeds.
- `git diff --check` passed; ignored patent PDFs remain outside the commit.
