# PENTAX SMC TAKUMAR 6x7 300mm f/4 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 3,467,462 Example 1 (p. 5 col. 3 at 300 dpi and Claim 2, p. 6): 10 R, 9 d, 5 nd/νd and the
back focus 40.16 → 120.48 agree at one scale factor ×3. Two printed sign conflicts (the table's r9 = +18 and the claim's
r3 = +1.1700F) are resolved by the patent's Seidel Petzval column (−0.357 at r3, −1.879 at r9); all ten per-surface
Petzval terms reproduce (sum 0.174 against 0.173 printed), so the file's r3 −351 and r9 −54 are right. Engine EFL
300.051, f/4, half-field 8°, paraxial back focus 120.531. Stop 3 mm behind r8 and the clear diameters come from
PhotonsToPhotos and agree with Fig. 1 within the figure's scale.

Attribution probable: Ricoh lists 5/5, 17°, 5.0 m, 186 mm long (model front vertex to flange 184.6 mm); PhotonsToPhotos
titles this example the SMC Takumar 6×7 300mm f/4, and the catalog's 6×7 600mm patent (US 3,502,393) cites this
application. Against: the 1964 priority predates the 6×7 camera (1969), and scaled ×1.5 the example fits the 35 mm
Super-Takumar 150mm f/4 equally well. No maker drawing found. No deployment changes.
Open: `focus.closeFocusM` 10 is a placeholder (production 5.0 m); name style against the catalog's "PENTAX SMC TAKUMAR
6x7 600mm f/4"; package wording remains for the cleanup pass. (All three closed: name and key changed with this
section's rename; focus and wording in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. The one-line header became a full comment: patent, embodiment, ×3 scale, printed versus derived values, the
r3/r9 sign resolution from the Seidel Petzval column, image plane, stop and rim sources, static focus and the
probable attribution with the Super-Takumar 150mm f/4 caveat. Subtitle "Qualified patent reconstruction; assumed clear
apertures and approximate dispersion" became "US 3,467,462 A, Example 1 — probable match to the 1969 production lens".
Added `catalog.specs` (5 ELEMENTS / 5 GROUPS, DESIGN f = 300 mm, DESIGN F/4, ALL SPHERICAL, PATENT f = 100 SCALED × 3)
and `catalog.closeFocusM.marketing` 5 (Ricoh 67II catalog). `focus.closeFocusM` 10 became 1e15 with a plain static
description. The aperture scale now runs to f/45 (`fStops` add 32 and 45, `maxFNumber` 22 → 45) per Ricoh's
catalog; blade count left unset because references disagree (7 or 9). Glass labels changed from "Unmatched (patent
coordinates)" to OHARA catalog equivalents that match the printed pairs within print precision: L1 and L3 S-BSL7
(1.51633/64.14), L2 S-TIH1 (1.71736/29.52), L4 S-TIM5 (1.60342/38.03), L5 NSL7 (1.51112/60.49); each label resolves to
that row. The `indexReferenceNote` boilerplate was removed and a `role` added per element. R, d, nd, νd, sd, stop,
key, name, patent fields, mount and format are unchanged.

Engine numbers are identical before and after: EFL 300.0513, FOPEN 4.000, half-field 8°, stop radius 21.978, paraxial
BFD 120.531, last gap 120.48. Only the focus placeholder (10 → 1e15) and the maximum f-number (22 → 45) differ. The
surface audit reports no errors and the aperture audit no rim limit. Transmission at f/4 is 77.9 % at 4° and 44.1 %
at 8°.

Analysis. Removed the package and process material (evidence packet, "not OCR repairs", literal sign-combination EFLs
to eight decimals, MTF grid and convergence notes, sampled-transmission grid, "placeholder"). Added the metadata
block with priority and Ser. No., the product and its version history from Ricoh and Cine Lens Wiki, five numbered
association points (construction, field, barrel length, the US 3,502,393 reference to Ser. No. 470,711,
PhotonsToPhotos), the two caveats (1964 priority before the 6x7 system; the same example at ×1.5 suits the 1965
Super-Takumar 150mm f/4), the Seidel-column confirmation of r3 and r9 with the four sign combinations' focal lengths,
the patent's chromatic and astigmatism rationale per element, a glass table, the stop and Fig. 1 rim readings, and a
scope table.

Open: no Pentax construction drawing of the 6x7 300mm f/4 or of the Super-Takumar 150mm f/4 was found, so the choice
between the two remains open. Open: L1's rim equals the f/4 entrance pupil (PhotonsToPhotos diameters; Fig. 1 reads
about 36.4 mm), which cuts the oblique beam to 44 % at 8°; the retail 82 mm filter would allow a larger front clear
aperture, but rims were left unchanged in this pass. Open: the projection traces to the patent's 8°, 94 % of the 6x7
half-diagonal.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: patents/US3467462.pdf, sheet 1, Fig. 1 (the first embodiment), read at the scan's native 72 dpi (one pixel per
point of the 2320 × 3408 page). Rim edges were located column by column on the ink, taking the centre of each drawn
line; the axis line is tilted about 0.9° across the sheet, so each element's half-height is half its drawn top-to-bottom
height. Axial scale: S2 (the nearly flat rear of L1) at x = 119.5 px, S8 at 394.5 px and the image line at 837.5 px give
8.41, 8.46 and 8.49 px per unit at f = 100 over spans of 32.7, 84.86 and 52.16 units, so 8.45 px per unit, or
2.817 px per mm at the file's ×3 scale. The figure is drawn to scale along the axis except L5's thickness (1 unit drawn
about 13 px). No independent vertical check exists (no stop, rays or printed diameters); an arc fit to L1's front face
suggests the vertical scale is within about 8 % of the axial one, and nothing below depends on more than the elements'
relative heights.

| Element | Drawn half-height (px) | Figure × 3 (mm) | Stored sd | Ratio | Decision |
|---|---|---|---|---|---|
| L1 (S1, S2) | 102.1 | 36.3 | 37.50 | 0.97 | Kept: equals the f/4 entrance pupil (axial ray 37.51 at S1) |
| L2 (S3, S4) | 95.3 | 33.8 | 35.43 | 0.95 | Kept: axial ray 35.01 at S3 |
| L3 (S5, S6) | 95.4 | 33.9 | 34.295 → 35.43 | 0.99 → 0.96 | Raised to L2's height |
| L4 (S7, S8) | 73.5 | 26.1 | 25.47 | 1.02 | Kept, within noise |
| L5 (S9, S10) | 49.0 | 17.4 | 17.25 | 1.01 | Kept, within noise |

Normalised to L1, the shape ratios are L2 0.99, L3 1.02, L4 1.06 and L5 1.04, all inside the noise band. The one
change is order, not size: Fig. 1 draws L2 and L3 with their top and bottom edges on the same pixel rows (95.3 and
95.4 px), while the stored rims stepped L3 1.1 mm (3.2 px of the figure) below L2, a step visible in the page render.
L2 cannot come down (its 35.43 mm is 0.4 mm above the f/4 axial ray at S3), so L3 rose to 35.43 mm on both faces; the
figure draws it square-cut. Its rim gap to L2 opens outward (6.5 mm at the rim) and its edge is 8.3 mm thick. L4 and L5
read 2 % and 1 % above their stored values at the axial scale; if the figure is instead anchored to L1 at 37.5 mm, they
read 6 % and 4 % above, still inside the band, so both stay.

Clearance and light, final set against the starting rims: the surface audit reports no errors, the aperture audit no
rim limit, the image-circle audit no undersized surface, and field coverage is unchanged at 95 % (8.0° gives 42.49 of
44.80 mm, stopped by the declared field). The real-ray check at 42.16 and 44.8 mm shows no axial clip and no blocked
chief ray. Geometric transmission at f/4 is unchanged at every field: 100, 95.4, 88.7, 77.9, 66.6, 55.5 and 44.1 % at
0 to 8°, because L3 does not limit any beam. Engine values are unchanged: EFL 300.051 mm, f/4.000, half-field 8°, stop
radius 21.98 mm, paraxial back focus 120.531 mm. The lens has one printed state (infinity), and the page render at
that state shows L2 and L3 at one height as in Fig. 1. No maker drawing is known; the 5-group, 5-element count is
Ricoh's.

Open: Fig. 1 reads L1 at 36.3 mm, inside the f/4 entrance pupil; the rim stays at the pupil and the earlier Open line
on its corner vignetting stands.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page (infinity, the L1 inspector, the movement overlay, the vignetting tab) and a model-over-figure
overlay with Fig. 1 at its native 72 dpi. Axial scale re-measured from vertex crossings 16 px below the axis: S1 to
the image line 8.43 px per unit at f = 100, S1 to S10 8.44, S8 to the image 8.47; the sheet is turned about 0.9°.
Drawn half-heights (half the top-to-bottom height between line centres) are L1 102.25 px, L2 95.25, L3 95.25,
L4 73.5 and L5 49.0: 36.3, 33.9, 33.9, 26.1 and 17.4 mm at the axial scale, or 37.5, 34.9, 34.9, 27.0 and 18.0 mm
anchored to L1. Every stored rim lies within 5.5 % of one reading, the drawn order L1 > L2 = L3 > L4 > L5 holds on the
page, and each element is square as drawn. L1 (37.5 mm, the f/4 entrance pupil) and L2 (35.43 mm, axial ray 35.01 at
S3) are floors; L3 at L2's height sits on Fig. 1's top and bottom lines, where the baseline 34.295 mm fell inside
them. No rim changed. Lands and cuts: none; worst loss against the pre-pass rims 0.0 points at every field, wide open
(100, 95.4, 88.7, 77.9, 66.6, 55.5 and 44.1 % from 0 to 8°). Engine half-field 8° and f/4.000 unchanged; no near
state exists.

Labels: L1 to L5 follow the figure's numerals 1 to 5, and each type agrees with the signs of R; there is no cemented,
aspheric or tagged element and no group bracket, since the patent names lenses, not groups. The L1 inspector shows
Biconvex Positive, FL +200.01 mm, S-BSL7. Movement: static; the focus slider reads "Not modeled" at both ends and the
movement overlay reports no group movement.

The model reproduces all ten spherical (S1) terms of the patent's Seidel table, sum 0.450. Its coma, astigmatism and
distortion columns (sums 0.114, −0.001, −0.789) reproduce only with the chief ray through S1's vertex, so the patent
computed them with the entrance pupil at the first surface; the file's stop gives −0.144, 0.015 and −0.858.

Colour, Fig. 3(b) (84.25 px per mm at f = 100): at the paraxial foot the C line sits +0.14 mm from the solid d line,
F −0.04 mm, and g lies within the d line's width (±0.02 mm). The model gives C +0.117, F −0.080 and g +0.028 mm. C
agrees; F sits about 3 px farther from d, beyond the line reading, but no normal-glass label moves it; g fits PBH1 at
L2 (+0.002 mm) better than S-TIH1. Fig. 3(c) plots at most 0.25 % distortion at 8°, against +0.77 % traced and about
0.8 % from the patent's own distortion sum, and Fig. 3(a)'s solid curve does not follow the S1 sum either, so those
plots are taken as schematic. Fig. 3(d) bends both fans inward by roughly 0.05 to 0.3 mm at 8°, the same sign and
order as the model's third-order −0.19 mm sagittal and −0.22 mm meridional.

Open: the earlier line on the 8° projection stands: the page traces 42.49 of 44.80 mm; `fullFieldDeg` 17 with
`maxTraceFieldDeg` 8.5 (Ricoh's 17°) would reach the corner at 8.4°, where the chief ray clears every rim and about
41 % of the f/4 beam passes. Open: the stop position is the PhotonsToPhotos choice; the patent's Seidel table assumes
the pupil at S1. Open: L2 S-TIH1 → PBH1 proposed for the coordinator (era lead flint, νd 29.51, g line as Fig. 3).

Coordinator follow-up, same day: L2 (1.7174 / 29.5) moves from OHARA S-TIH1 to OHARA PBH1 (1.71736 / 29.51), the lead
dense flint of the period; the reviewer's paraxial g-line focus moves from +0.028 to +0.002 (f = 100) against about 0 on
Fig. 3(b), with C and d unchanged. `projection` now traces to 8.5° (`fullFieldDeg` 17, Ricoh's angle of view) so the
page reaches the 6x7 corner at 8.4°; the chief ray clears every rim there and about 41 % of the f/4 beam passes.
Engine EFL, f/4 and the stop are unchanged; `audit:surface` OK and field coverage reaches the corner.
