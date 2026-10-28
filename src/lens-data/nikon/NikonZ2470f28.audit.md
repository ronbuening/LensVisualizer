# Audit Log - Nikon NIKKOR Z 24-70mm f/2.8 S

Patent: WO2020/136749 A1, Example 1 (Table 1)
Catalog version: local working tree, 2026-05-04

## 2026-05-04 - Patent audit and glass relabel cleanup

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S2 | `glass` | `S-LAL8 (OHARA)` | `S-LAH97 (OHARA)` | Patent Table 1 lists nd=1.75500, vd=52.34. Catalog S-LAH97 round-trips this pair; S-LAL8 resolves to nd=1.712995. |
| L13 / S4 | `glass` | `S-LAH55VS (OHARA)` | `S-LAH66 (OHARA)` | Patent Table 1 lists nd=1.77250, vd=49.62. Catalog S-LAH66 round-trips this pair; S-LAH55VS resolves to nd=1.834809. |
| L21 / S6 | `glass` | `L-LAH85 (OHARA)` | `744495 - moldable lanthanum crown (patent nd=1.74389, vd=49.53)` | Patent Table 1 lists nd=1.74389, vd=49.53. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L22 / S8 | `glass` | `S-LAH55VS (OHARA)` | `S-LAH66 (OHARA)` | Same patent constants as L13; catalog S-LAH66 round-trips the stored pair. |
| L23 / S10 | `glass` | `S-TIH6 (OHARA)` | `728284 - high-dispersion flint (patent nd=1.72825, vd=28.38)` | Patent Table 1 lists nd=1.72825, vd=28.38. S-TIH6 resolves to nd=1.805181, so a code label preserves Abbe fallback. |
| L24 / S12 | `glass` | `S-PHM52Q (OHARA)` | `S-PHM52 (OHARA)` | Patent Table 1 lists nd=1.61800, vd=63.34, matching catalog S-PHM52 within round-trip tolerance. |
| L31 / S15 | `glass` | `S-LAL12Q (OHARA)` | `694533 - lanthanum crown (patent nd=1.69370, vd=53.32)` | Patent Table 1 lists nd=1.69370, vd=53.32. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L32 / S17 | `glass` | `S-PHM52 (OHARA)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Patent Table 1 lists nd=1.59319, vd=67.90. S-PHM52 resolves to nd=1.61800, so a code label preserves Abbe fallback. |
| L41 / S19 | `glass` | `S-NBH8 (OHARA)` | `738323 - niobium dense flint (patent nd=1.73800, vd=32.33)` | Patent Table 1 lists nd=1.73800, vd=32.33. S-NBH8 resolves to nd=1.720467, so a code label preserves Abbe fallback. |
| L42 / S20 | `glass` | `S-FPL51Y (OHARA)` | `498826 - fluorophosphate ED (patent nd=1.49782, vd=82.57)` | Patent Table 1 lists nd=1.49782, vd=82.57. The project catalog has S-FPL51 but not this Y/variant pair; the code label prevents an implied Sellmeier match. |
| L51 / S22 | `glass` | `S-NBH56 (OHARA)` | `S-NBH8 (OHARA)` | Patent Table 1 lists nd=1.72047, vd=34.71. Catalog S-NBH8 round-trips this pair; S-NBH56 resolves to nd=1.854779. |
| L52 / S24 | `glass` | `S-PHM53 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 lists nd=1.59349, vd=67.00. S-PHM53 resolves to nd=1.603001, so a code label preserves Abbe fallback. |
| L61 / S26 | `glass` | `S-LAH98 (OHARA)` | `792450 - dense lanthanum crown (patent nd=1.79189, vd=45.04)` | Patent Table 1 lists nd=1.79189, vd=45.04. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L71 / S28 | `glass` | `S-NPH2 (OHARA)` | `946180 - ultra-high-index dense flint (patent nd=1.94595, vd=17.98)` | Patent Table 1 lists nd=1.94595, vd=17.98. S-NPH2 resolves to nd=1.92286, so a code label preserves Abbe fallback. |
| L72 / S30 | `glass` | `S-LAH93 (OHARA)` | `852402 - dense lanthanum flint (patent nd=1.85207, vd=40.15)` | Patent Table 1 lists nd=1.85207, vd=40.15. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L73 / S32 | `glass` | `S-BAL42 (OHARA)` | `S-BAL35 (OHARA)` | Patent Table 1 lists nd=1.58913, vd=61.22. Catalog S-BAL35 round-trips this pair; S-BAL42 resolves to nd=1.583126. |

### Phase 2 - Retained-information audit

- Patent Table 1 lens prescription rows 1-33 match the stored `R`, `d`, `nd`, and `vd` values at the wide-angle infinity position, including stop surface S14 and image-side BF row S33.
- Patent Table 1 variable-spacing data matches all stored `var` entries for W, M, and T at infinity and close focus: D5, D13, D18, D21, D25, D27, and BF.
- Patent Table 1 aspherical data for S6, S15, S27, and S30 matches the stored coefficients. The patent uses kappa=1.0000, matching the file's existing asphere convention.
- Patent Table 1 group focal lengths match the stored group annotations: G1=119.124, G2=-22.126, G3=40.880, G4=115.687, G5=124.717, G6=100.365, G7=-47.354.
- Semi-diameters remain estimated because the patent does not publish clear apertures.

### Phase 3 - Spectral / metadata enrichment

- Relabeled L24 to catalog S-PHM52, upgrading that element to catalog Sellmeier resolution.
- Removed inferred APD flags from L32, L42, and L52 because the patent provides only nd/vd and no line-index or partial-dispersion data for those variant glasses.
- Existing metadata already included patent year, design focal lengths, design aperture, element/group counts, maker, and focus description.

### Phase 4 - Analysis sync

- Updated the element-by-element narrative and glass budget table to match the corrected labels.
- Removed catalog-specific APD claims for L32 and L52; retained ED identification only as an nd/vd-position inference.
- Updated the manufacturing/asphere notes so non-catalog labels are described by patent code and nd/vd rather than unresolved OHARA suffix names.

## 2026-05-19 — Six-digit glass-code backfill review

Reopened `patents/WO2020136749A1.pdf`, Example 1 / Table 1. The reviewed missing-Sellmeier rows were L21 / S6 (`744495`, nd=1.74389, νd=49.53), L42 / S20 (`498826`, nd=1.49782, νd=82.57), L61 / S26 (`792450`, nd=1.79189, νd=45.04), and L72 / S30 (`852402`, nd=1.85207, νd=40.15).

Catalog-search disposition:

- Hikari J-FKH1 exactly backs `498826` with nd=1.49782, νd=82.57, and published formula-3 power-series coefficients.
- No coefficient-backed exact public matches were found for `744495`, `792450`, or `852402`; those remain explicit unresolved six-digit labels.

Changes made:

- Added Hikari J-FKH1 to `glassCatalogData.ts`.
- Relabeled L42 in `NikonZ2470f28.data.ts` to J-FKH1 and reworded the unresolved L21/L61/L72 labels.
- Updated `NikonZ2470f28.analysis.md` so L42 is catalog-backed and the other reviewed rows are explicitly unresolved.

## 2026-08-18 — Hoya molding-glass coefficient assignments

- Rechecked local `patents/WO2020136749A1.pdf`, Example 1 / Table 1, against the prior transcription: L21 remains `1.74389 / 49.53` and L72 remains `1.85207 / 40.15`.
- Relabeled L21 to Hoya M-NBF1 (`1.743300 / 49.326`) and L72 to Hoya M-TAFD305 (`1.851348 / 40.104`) as coefficient-backed catalog equivalents.
- Patent codes `744495` and `852402` and the unspecified production supplier remain explicit. L61 stays unresolved; no geometry, asphere, or APD metadata changed.

## 2026-09-08 — First-hosted catalog audit, lens 16

This reinspection supersedes earlier claims that all zoom/focus gaps matched.
Original ignored WO2020136749A1 PDF: title p. 1, equation (A) p. 30,
Table 1 pp. 34–37, Figure 4 p. 83 (600 dpi).

- Corrected all four κ=1 aspheres to standard K=0; coefficients unchanged.
- Restored middle50mm station, D5=21.220, D13=6.132, D18=3.866, BF=23.42.
  Removed invented focus-dependent BF: source BF11.93/23.42/28.62 is zoom-only.
- Preserved source near gaps and calculated their approximately1:30 conjugates:
  0.844245/1.582032/2.095598m object-to-image distance. New zoom-dependent
  endpoint support replaces common0.38m in controls, summary, breathing,
  effective-f-number estimates and comparison mappings.
- Figure-derived front SD34mm, L13 28.8mm and L21 front21.5mm; internal/rear
  rims refined. L22 14.8mm trial rejected by gap7→8; retained14.5mm.
  Final surface/image-circle and15zoom/focus render-state checks pass.
- Source f/2.92 and reachable shortcuts corrected. Explicit inferred zoom iris
  schedule has radii8.625232/11.148693/12.466456mm; exact-engine rays launched
  at EFL/(2*2.92) reach those rims. Other lenses retain their existing model.
  Pupil readout is labeled estimated because its first-order ratio differs
  from the exact marginal-ray entrance diameter.
- Qualified catalog glass identities as inferences; retained all source nd/νd.
  Recomputed isolated powers (L22−38.4, L42+29.6mm). Included stop in G3;
  gap labels now identify adjacent groups. Public analysis rewritten, including
  all seven inventors, G2 reversal and source/model distinctions.
- Live production wide baseline; local infinity, near and intermediate focus,
  middle/tele zoom, f/2.92–16 and both motion charts inspected. Tele focus
  chart1.35mm maximum; zoom chart29.81mm. Middle near1.58m; tele near2.10m;
  half-focus4.19m, f/16 iris4.55mm diameter.

Final focused checks:85tests/5files pass; prior validator-inclusive159tests pass.
Full typecheck/format/lint/test/build and generated reports are due at lens20.

## 2026-10-27 — Rim-cut figure review

Figure 4 (PDF p. 83, the single wide-end panel; native 300 ppi raster, 11.49 px/mm from surface 1 to the image
plane) was read element by element for flat lands square to the axis at the rims of concave faces. Each candidate rim
was also fitted against its own cap, so a land counts only where the drawn rim leaves the cap's curve.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 9 (L22 rear, R 59.686) | 0.91 | 1.48 mm | 13.21 mm | 14.5 | 9.90 mm |
| 22 (L51 front, R −23.924) | 0.95 | 2.99 mm | 11.58 mm | 12.2 | 9.61 mm |

- Faces 5, 8, 12, 16, 28, 30A and 31 follow their caps to the element edge within about 1 px; face 3 is too flat
  to show a land. No cut.
- Surface 7 (L21 rear) has a clear square shoulder: the cap ends at 16.2 mm of a 21.45 mm edge (0.755). Its stored
  sd of 16.3 already sits at the cap end, and raising it to L21's 21.5 mm edge for a cut is impossible because
  R = 18.70 mm ends the sphere first. Left as is; the diagram keeps a diagonal edge where the figure draws the
  shoulder.
- Surface 26 (L61 front) ends in a short straight run that stays within 1 px of the cap, below what the figure
  resolves. A cut at its visible kink (0.92, 13.28 mm) would also raise full-field side vignetting there from 67 %
  to 87 %. Not cut.
- Surface 32 (L73 front) ends its cap near 15.2 mm (0.91) and then runs a slanted bevel to the edge, not a land
  square to the axis; a cut there would add 59 points of side vignetting. Not cut.
- The L11 flange beyond L12 (surface 2) and the L41 flange beyond L42 (surface 20) are cemented faces, not lands.
- No cap reaches the stop plane: STO's neighbours 13 and 15A both curve away from it.
- The aperture audit is unchanged: all three stations trace the stated f/2.92, with no rim, trace or rim-cut
  limiter. The cut on 9 lies outside the full-field bundle (12.25 mm) at every station. The cut on 22 raises
  full-field side vignetting at that surface from 62 % to 71 % (61 % to 69 % at close focus).

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). Traced against that rule, these cuts from the figure review above were changed:

- Surface 9: the beams reach 13.79 mm there (24 mm, near 41°), past the figure's 13.21 mm cut. The depth goes from 1.48 to
  1.63 mm, which puts the cut radius at 13.85 mm, 0.06 mm outside the beams; the land is shorter than the figure's.
- Surface 22: the beams reach 11.72 mm there (near 70 mm and close focus, near 5.1°), past the figure's 11.58 mm cut. The depth goes from 2.99 to
  3.11 mm, which puts the cut radius at 11.80 mm, 0.07 mm outside the beams; the land is shorter than the figure's.

The other cuts clear the beams by their margins, and the surface audit and the beam rule pass.
