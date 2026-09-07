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

## Second live-site review

Reviewed the actual SVG diagrams at `http://localhost:5173` in the in-app browser,
with wide/tele zoom states and chromatic rays enabled. Compared f/2.8L IS against
Figures 1 and 2 (PDF pp10–11), f/4L IS against Figure 1(a)/(b) (p10), and f/4L
against Figure 1 and its movement arrows (p8; no separate tele section published).
Optical rims were checked against the 600 dpi crops above; f/4L IS tele was also
rendered at 600 dpi. Numeric element labels are model identifiers; patent group
labels, stop, cemented-pair spans, and fixed image-plane placement were checked.

Additional accepted SD refinements, relative to the first audit:

| Lens | Surface SD changes (mm) | Reason |
| --- | --- | --- |
| f/2.8L IS | r5/r6: 35.5/35 → 34/34; r7: 29 → 26 | Reduce oversize front/focus rims toward the source section |
| f/4L IS | r25/r26: 11.1 → 12.8; r29: 11.1 → 12.5 | Match Gm outer rims; retain r27/r28 at 11.1 for D27 clearance |
| f/4L | r3/r6: 23.5/21.8 → 25.8/25.8; r4/r5: 20 → 21; r7/r8: 21.8/21.5 → 24.2/24.2 | Restore the taller L1b outline while retaining the tight D4 shared-rim limit |

### Movement and visible metadata

- Split f/4L L1 into `L1a FIXED` and `L1b FOCUS`. The prior chart combined a
  fixed surface with the moving subgroup and reported only 6.77 mm travel. The
  live chart now reports the full 13.54 mm; the focus slider visibly translates
  only L1b objectward. Its 13.53–13.54 mm endpoints remain explicitly reconstructed.
- Preserved all source zoom stations and their order. f/4L L2 moves imageward
  39.35 mm; L3 moves 15.22 mm by the middle station, then reverses 0.33 mm.
  f/4L IS L2 moves imageward 34.11 mm; L3 reaches 8.813 mm, then reverses
  6.854 mm. This reversal was also inspected using the live middle/tele slider.
- f/2.8L IS g2/g3/g4 move imageward 27.78/43.53/11.09 mm relative to R1.
  Its fixed-camera chart retains the existing 0.0131 mm BFD rounding residual.
- Exposed f/4L IS relay subgroups `Gf (+)`, `Gm IS (-)`, and `Gr (+)` as shown
  in the patent. Both IS lenses correctly keep their unsupported focus slider
  disabled; no finite-focus spacing was invented.
- Added inferred APD tags for f/4L E3/E4/E12 and f/4L IS E3/E4/E13, supported
  by the fluorite/UD production correlation and compatible catalog dispersion.
  Confirmed purple coloring and `APD (INFERRED)` inspector text. No patent APD
  measurement or production supplier is asserted. The 21/19 f/2.8 patent design
  retains its separate production-correlation limitation and no branded UD tags.

### Dispersion root cause and catalog additions

The first audit's 57/57 total counted compatible catalog names, but 37 elements
still copied surrogate C/F/g indices into fields the runtime treats as measured.
Thus only 20/57 actually used catalog curves. Removed those copied fields and
surrogate dPgF values from the two affected prescriptions; all 57/57 now use the
catalog model in the runtime and live inspector. Patent nd/vd remain unchanged.

Added two previously absent vendor curves, with coefficients transcribed directly:

- [SCHOTT LAFN7 datasheet](https://media.schott.com/api/public/content/c842d31345bc40ae86b67732d6eb4eea?v=02357659),
  three-term Sellmeier, nd 1.74950 / vd 34.95, code 750350.
- [Nikon/Hikari J-LASF013 datasheet](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/pdf/J-LASF013.pdf),
  nine-term power series, nd 1.804400 / vd 39.61, code 804396.

The f/4L E8/E13 labels now select those exact stated surrogates instead of
implicitly selecting H-LaF4/S-LAH63 through competing coordinate tokens.
Both live inspectors reproduce the vendor C/F/g lines. CaF2 uses the shared
Daimon/Masumura catalog curve; removed the stale Canon Optron curve attribution.
All f/4L IS catalog names now explicitly state surrogate/supplier uncertainty.

Catalog side effects were audited. New LAFN7 exposes the older Leica ELCAN
50mm f/2 E4 approximate label as outside nd tolerance (0.0051 mismatch). Its
annotation/notes now explicitly retain unmatched lanthanum flint and the existing
Abbe model. J-LASF013 is the closer coordinate match for some existing 804396
classes; updated the Nikon DX regression expectation to reflect that selection.
Global strict coverage remains 7,334/7,877 (93.1%), with zero catalog mismatches.

### Follow-up verification

- Surface and image-circle audits pass for all three lenses.
- 72,090 d-line rays: five zoom positions, both focus endpoints, and axial/half/full
  sampled fields, with an identical launch grid before/after. No previously
  transmitted rays became clipped; f/4L IS gained 108 and f/4L gained 191 samples.
  This is a regression comparison, not a claim of unvignetted full-pupil coverage.
- No hidden rendering trims across all 30 sampled lens states.
- Added regression coverage for actual runtime dispersion quality, vendor spectral
  lines, inferred APD provenance, complete focus travel, and compensator reversal.
- No additional changelog entry; the original UTC-dated batch entry is unchanged.
- Final TypeScript, formatting, and lint checks passed. Full Vitest suite passed:
  297 files / 2,757 tests. Final production build passed with 1,264 prerendered
  routes, sitemap, and RSS. Glass reports passed 8 files / 15 tests.
