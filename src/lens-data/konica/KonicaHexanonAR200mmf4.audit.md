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
