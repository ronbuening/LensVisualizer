## 2026-11-01 — Deployment validation and cleanup

**Patent re-read.** JP S54-55424 A, Example 1 was read from the page images at 300 dpi. All 30 printed values (10 radii,
9 gaps, fB, 5 nd, 5 νd) agree with the data file at the ×200 scale; there are no mismatches. Front-page number, 1979
date, inventor and applicant agree with `source`.

The Seidel table was recomputed surface by surface. All 50 entries agree within 0.3% with no fitting, and the rows sum
to the printed totals within 0.0001. A fit of the ten radii alone to those entries has rms 0.000024, the table's own
rounding noise, and keeps every radius within about ±0.00005 of print. The fitted radii return f = 1.000006,
fB = 0.26114, T = 0.8086 and ΣP = 0.0637. The fit also returns R9 = 2.31454 when started from a different value.
Freeing the indices returns 1.51633, 1.7552, 1.51633, 1.77249 and 1.80523.

A search of 1,160 single-digit, transposition and sign changes across R, d and nd found no slip. The best candidate,
n3 = 1.51663, has rms 0.00048, 20 times worse than rounding. The Petzval gap of 0.00104 is rounding, led by R7
(+0.00066) and R5 (+0.00018). The back-focus gap of 0.104 mm is 0.077 mm of radius rounding plus 0.027 mm from printing
fB to three decimals.

The stop caption is printed: the coefficients are for an infinite object with the stop 0.15 behind surface 6. Fig. 1
draws no stop. Table rms has a sharp minimum at 0.150: 0.00111 there unfitted, against 0.018 at 0.149 and 0.151.

**Patent vs model, first order.**

| Quantity | Patent at ×200 | Model |
| --- | --- | --- |
| EFL | 200 mm | 200.178 mm |
| F-number | 4 | 4.000 paraxial; working f/4.12 |
| Back focus | 52.2 mm | last gap 52.2 mm; paraxial 52.304 mm |
| Vertex to image | 161.8 mm (T = 0.809) | 161.7 mm |
| Half-field | 6° | 6° |
| f1, f5 | 116.0, 104.8 mm | 116.01, 104.74 mm |

Stop radius 13.562 mm follows the paraxial rule of `agent_docs/decisions.md`. The last gap stays at the printed value
under `LENS_DATA_SPEC.md`, Source-rounded prescriptions. Real rays match Fig. 2: spherical aberration about −0.0003 at
the zone and +0.0005 at F4, distortion +0.86% at Y = 0.1082 against about +0.8% read from the plot. Y = 0.1082 is
21.64 mm at this scale, the 35 mm half diagonal, which independently supports the 200 scale.

Audit results: surface validator clean, image circle 0 undersized, coverage 98% (21.19 of 21.65 mm), no axial clip or
chief-ray block. Geometric transmission 77% at 6°. Rim ratios measured from Fig. 1 at 600 dpi are 1, 0.84, 0.82, 0.50,
0.53, matching the file's. Fig. 1 is to scale axially and gives L1 about 24 mm absolute, below the 25 mm entrance pupil.

**Public diagram comparison.** The Konica/Berkey 1980 product sheet, cat. no. 703-193, lists 200 mm, f/4 to f/22, five
elements in five groups, 12°, 2.5 m from the film plane, 121 mm length, 65.5 mm diameter, 515 g and 55 mm filter. Its
section was measured at 600 dpi and scaled to the 109.5 mm vertex length. It agrees shape by shape, spacings within
0.5 mm, rims about 27.0, 23.1, 22.1, 12.9 and 14.0 mm against the file's 27, 22.815, 22.113, 13.581 and 14.445 mm. It
draws no stop. Length 121 mm plus the 40.5 mm AR flange (Wikipedia, Konica Autoreflex) is 161.5 mm. Examples 2 and 3 fit
the section equally: spacing rms 1.8 and 1.7 px against 1.95 px, all below the 7 px line width.

**Fields changed in this pass.** Data file: header comment, `subtitle`, new `catalog.specs`, `role` on all five elements,
`focus.description`. Analysis: identification evidence, rounding and back-focus finding, stop and rim paragraphs, element
sections, Glass section rewritten from the current labels, new Sources list; process and MTF research sections removed.
`R`, `d`, `nd`, `vd`, `sd`, `aperture`, `projection` and `source` are unchanged; `key`, `name`, `glass` and `closeFocusM`
were changed in the earlier commits on this branch.

Open: which of Examples 1 to 3, if any, Konica built is unproven; the production f-number, rims and focus motion are not
documented.

Open: the buhla.de page lists a diagram at `Bilder/200F4Diag.jpg`, which was not viewed, so it is not part of this
comparison.

## 2026-11-01 — Semi-diameter pass against the patent figure

**Result.** No `sd` value changes. Fig. 1 and Fig. 2 of JP S54-55424 A (PDF page 5, Example 1) both point to rims about
8% smaller than the file's, but that sits at the edge of the measurement noise, the ratios and step order already match,
and every cut large enough to matter costs more than 3 corner points.

**Scale.** The figure was read at 694 dpi, twice the 347 ppi scan, and deskewed by the drawn axis (−1.60°, residual
0.6 px). Along the axis, vertices R1 to R10 span 1484.4 px over 109.5 mm, 13.56 px/mm; a fit to all ten vertices gives
13.6, and the spans R1–R6 and R6–R7 give 13.3 and 13.7. Across the axis, a fit of the ten drawn arcs to their known radii,
each vertex free, gives 13.28 px/mm, 0.979 of the axial scale; leaving out one surface at a time gives 0.94 to 1.00.
Single surfaces scatter from 0.81 to 1.15, as a hand drawing will, but the figure is not anamorphic by anything near 12%.

**Rims.** Half-heights are the outer ink, top and bottom averaged.

| Element | Surfaces | Stored mm | Fig. 1 px | At 13.56 px/mm | At 13.28 px/mm | Stored ÷ drawn | F/4 axial ray mm | Chief ray mm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| L1 | 1, 2 | 27.0 | 335 | 24.7 | 25.2 | 1.07 | 25.02 | 11.96 |
| L2 | 3, 4 | 22.815 | 281 | 20.7 | 21.2 | 1.08 | 21.06 | 7.62 |
| L3 | 5, 6 | 22.113 | 272.5 | 20.1 | 20.5 | 1.08 | 20.34 | 6.92 |
| L4 | 7, 8 | 13.581 | 166 | 12.2 | 12.5 | 1.09 | 6.84 | 7.82 |
| L5 | 9, 10 | 14.445 | 177 | 13.1 | 13.3 | 1.09 | 6.75 | 8.84 |

The drawn ratios are 1, 0.839, 0.813, 0.496, 0.528 against the file's 1, 0.845, 0.819, 0.503, 0.535. Line centres read
about 1.5% lower than outer ink, which with the axial scale gives the earlier 24 mm reading for L1. Step order (L1 > L2 >
L3, L5 > L4) matches, and each element is drawn square, one height on both faces, as the file has it.

**L1 floor.** L1 at 24.1 mm fails: surfaces 1 and 2 clip the F/4 axial beam, which needs 25.02 and 24.66 mm. At the
arc-fitted scale the three front rims land on the axial heights (25.2, 21.2, 20.5 against 25.02, 21.06, 20.34), so the
drawing shows rims set at the axial beam, not below it. That whole drawn set passes the surface validator with no axial
clip and no chief-ray block; light is what rules it out.

**Fig. 2 fans.** The coma panels plot each fan only part of the way. At Y = 0 the curve reaches the ±1 bars; at Y = 0.0541
it ends at about ±0.785; at Y = 0.1082 it ends at −0.54 on the left, and its right end merges with the baseline near
+0.54. With ±1 as the F4 pupil, the model's fans at its paraxial focus follow the Y = 0 and Y = 0.0541 curves within about
0.00001, which fixes the coordinate and shows the left ends are the rays that run high at the front. Real rays at 3.09°
and 6.12° meet surface 1 at 25.4 to 25.5 mm and 25.0 to 25.1 mm on those ends, one rim near 25.2 mm. On the right they
reach surface 10 at 9.5 and 12.4 mm, which is not one rim and falls inside every candidate at the half field, so the right
ends are the plotted range, not a clip. The model's L1 at 27 mm passes the front side to 0.62 and 0.85.

**Light.** Engine transmission at 0° to 6° in 1° steps, against the package rims, which are the file's rims:

| Rims | Transmission % | Worst loss, points |
| --- | --- | --- |
| Package | 100, 100, 99.3, 95.4, 90.6, 85.7, 77.0 | 0 |
| All five as drawn | 100, 98.5, 94.0, 89.0, 84.1, 77.0, 61.5 | 15.5 at 6° |
| L1 25.2 only | 100, 98.5, 94.0, 89.0, 84.1, 79.1, 70.3 | 6.7 at 5° and 6° |
| L2 21.2, L3 20.5 | 100, 99.3, 96.1, 92.5, 88.5, 84.5, 76.5 | 3.2 at 2° |
| L4 12.5, L5 13.25 | 100, 100, 99.3, 95.4, 90.6, 83.6, 67.9 | 9.0 at 6° |
| L1 26.3, L2 21.3, L3 20.5, L4 13.5, L5 14.4 | 100, 99.6, 96.4, 92.6, 88.0, 83.0, 74.2 | 2.9 at 3° |

The last row is the smallest raise from the drawn set that holds 3 points. Its ratios are 1, 0.810, 0.779, 0.513, 0.548,
further from the figure than the file's on all four, and each move stays inside the noise band (L1 −2.6%, L2 −6.6%, L3
−7.3%, L4 −0.6%, L5 −0.3%), so it was not applied. A uniform scale that keeps the ratios holds 3 points only to about
×0.985, which is also noise. L4 and L5 sit just past the band at 9%, and the 3-point limit stops either one about 3%
below its stored value.

**Clearance.** Nothing moved, so the engine numbers are as before: EFL 200.178 mm, F/4, half-field 6°, stop radius
13.562 mm. Surface validator clean, image circle 0 undersized, coverage 98% (21.19 of 21.65 mm), aperture census within
3% of the stated f-number, no axial clip or chief-ray block.

**Maker section.** The Konica/Berkey sheet (cat. no. 703-193, object at top) is a low-resolution check and set no value.
It shows five separate elements in five groups with L2 wider than L3 and L5 wider than L4, the same step order as the file,
and marks no stop, special glass or aspherical surface. Its reading of 27.0, 23.1, 22.1, 12.9 and 14.0 mm is within 0.7 mm
of the file.

**Overlay and live page.** With the file's outline over Fig. 1 at 13.56 and 13.28 px/mm, the arcs coincide and the file's
rims run 1.6 to 1.8 mm past the drawn ones on L1 to L3 and about 1.1 mm on L4 and L5, with no element out of step. The local
page at infinity and at `focus=1` shows the same silhouette, as the geometry is static.

Open: the Fig. 2 fans trace to an L1 rim near 25.2 mm. That value passes the validator and the F/4 beam, but costs 6.7
points at 5° and 6° and moves L2/L1 to 0.905 against the drawn 0.839, so it was not made.
