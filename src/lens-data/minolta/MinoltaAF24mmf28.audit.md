# Source and numerical audit

- Whole US 4,759,619 Embodiment 2; probable family, not factory-exact.
- Literal prescription and frozen infinity plane retained; computed finite conjugates explicitly labeled where present.
- Stop/SD hypotheses selected before MTF; rejected shapes and all clipping/raw failures retained.
- Normal scalar native convergence is not independent phase/factory certification.
- Self-contained source/rebuild/report provenance and final integration receipts accompany private package.
- Model SHA256 `b1911b7a145da3192edf136a4c282d435d9536596c22ff864d509650ca3bf153`.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: Table 2 of US 4,759,619 (PDF pages 9–10, read from page renders of the scan) was checked row by row against the file
divided by 0.24: 16 radii, 15 spacings, 8 nd/νd pairs and the near d4. No mismatches. The printed spacings sum to 200.869 against the
printed Σd = 200.862; removing 0.007 from any single spacing moves f by less than 0.011 at f = 100, so no cell-level misprint can be
identified and all spacings stay as printed. Table 1 (Embodiment 1, not used) prints d5 = 4.743, which looks like a transposition of
4.473: that value restores its Σd to within 0.001 and its f to 100.0001.

First-order: f = 100.0028 at patent scale (24.0007 mm) against the printed 100.0; F/2.8 and 2ω = 84° match. Conditional values
|fF|/fR 4.015, r1/r2 0.275, r2/r3 16.64, d4/d6 1.188 and |r7/r8| 0.223 reproduce the printed 4.01, 0.28, 16.6, 1.19 and 0.22. The
patent prints no back focus; the computed paraxial value is 36.103 mm (track 84.311 mm). The near state (d4 27.728 at β = −0.1, rear
group moving) gives 238.418 mm from S1, β = −0.10006 and 0.3227 m object to image with the image plane fixed. The model's aberrations
agree with Fig. 5 in sign and size: spherical aberration −0.62 at 0.7 pupil and about zero at full aperture (f = 100 units), distortion
−2.11% at 42° with a −2.76% minimum, sagittal field −1.13 to +0.48 and meridional about −1.0 at the edge.

Maker comparison: the collector-site section (minolta.eazypix.de/AF/24_2,8_cross.jpg, object at top) shows eight singlets with the
same shapes. A least-squares fit of its axial spacings gives RMS residuals of 1.6 (Embodiment 2) against 3.35 (Embodiment 3) patent
units, with d4/d6 drawn at 1.22 (Embodiment 2 1.19, Embodiment 3 1.92). Embodiment 1 (L5 and L6 cemented, seven groups) and
Embodiments 4 and 5 (94°, ten elements) do not fit the marketed 8/8 construction. Retail data: 0.25 m minimum focus, 0.16×, 1985.

Checks after both steps: surface validator OK; aperture audit within 3% of f/2.8; field coverage 98% (42° reaches 21.15 of 21.65 mm);
no axial clipping; relative illumination 72.4% at 30° and 32.4% at 42° at f/2.8. Engine output identical before and after.

Fields changed. Data step: `focus.description` gained the retail 0.25 m / 0.16× statement; `closeFocusM` (0.3227 m, printed state),
`published`, the conjugate and `groups` F/R were checked and kept; no rim changes. Wording step: header comment, `subtitle`, `catalog.specs`,
every element `role`, `indexReferenceNote` removed from all eight elements (the table heads its columns Nd and νd), `focus.description`
rewritten in plain sentences; the analysis reworded throughout, glass named as catalog equivalents, "Verification Summary" replaced by
"Model Scope and Limitations", and package process text removed.

Open: none.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: Fig. 4 of US 4,759,619 (PDF page 3, Sheet 2 of 5), the section of Embodiment 2 at infinity, measured on the scan's native
1-bit raster (2320 × 3408 px). The dash-dot axis was fitted from 414 points; it runs at 0.88° to the page rows while the near-vertical
lines (the flat r2 face, the stop tick) are not tilted, so the scan is sheared rather than rotated and heights were read vertically from
the fitted axis line. Each rim is half the distance between the top and bottom rim lines, because the drawn elements sit 1–3 px above
the drawn axis line.

Scale: fourteen axial crossings (r2/r3 and r14/r15 merge) fit the prescription at 13.14 px/mm with 0.15 mm rms; the r1-to-r16 span
alone gives 13.16 (634.5 px for 48.21 mm). Arc fits of r6, r4 and r3 give 13.30, 13.50 and 13.65 px/mm across the axis, 1–4% above
the axial scale. Rims were read at 13.15 px/mm, the scale at which the twelve unchanged rims agree with the figure to 1%; the arc-fit
scale would lower every reading by 2–3% alike and changes no decision. The stop tick is drawn at 0.53 of d8, consistent with the
file's 52%.

| Surface | Starting sd | Figure, px | Figure, mm | New sd | Evidence                                              |
| ------- | ----------: | ---------: | ---------: | -----: | ----------------------------------------------------- |
| 1, 2    |        22.0 |      288.8 |      21.96 |   22.0 | square rim; kept                                      |
| 3       |        15.8 |      206.9 |      15.73 |   15.8 | front corner of the flat land; kept                   |
| 4       |        12.9 |      170.6 |      12.97 |   12.9 | foot of the bevel; kept                               |
| 5       |         9.9 |      130.3 |       9.90 |    9.9 | front corner of the flat land; kept                   |
| 6       |         8.1 |      105.8 |       8.05 |    8.1 | foot of the bevel; kept                               |
| 7, 8    |         6.9 |       90.7 |       6.90 |    6.9 | square rim; kept                                      |
| 9, 10   |         6.9 |       90.5 |       6.88 |    6.9 | square rim; kept                                      |
| 11, 12  |         7.3 |       92.3 |       7.02 |    7.0 | square rim, 1.8 px above L5 and 8.3 px below L7       |
| 13, 14  |         7.3 |      100.6 |       7.65 |    7.6 | square rim; front corner reaches over the rim of L6   |
| 15, 16  |         9.0 |      119.3 |       9.07 |    9.0 | square rim; kept                                      |

L6 and L7 are each inside the noise band (−4% and +5%), but the figure draws L7 0.63 mm taller than L6, with its concave front face
passing over L6's rim corner, where the starting file had both at 7.3 mm. The readings are good to about 1 px (0.08 mm). L7 takes the
lower rounding of 7.65 mm. Both elements stay square-cut.

Clearance: through the engine stop radius (6.32 mm) the axial marginal ray reaches 6.09 and 6.08 mm at r11 and r12 and 6.17 and
6.38 mm at r13 and r14 at infinity, and 6.14, 6.15, 6.25 and 6.46 mm in the β = −0.1 state. The surface validator passes; r12 and r13
are 0.37 mm apart at the edge of L6 (0.25 mm at the former 7.3 mm). Field coverage is unchanged (42.0° reaches 21.15 mm), no
surface is under the image-circle floor, the aperture audit stays within 3% of f/2.8, and the engine half-field (42.0°), f-number
(2.800) and stop radius (6.3205 mm) are unchanged.

Corner light at f/2.8 (engine geometric transmission), starting rims against new: at infinity 72.4 to 76.7% at 30°, 57.0 to 62.2%
at 36° and 32.4 to 36.0% at 42°; in the β = −0.1 state 72.6 to 77.0% at 29.3° and 35.3 to 39.2% at 41.1°. No field loses light. With
L7 at 7.6 mm, restoring L6 alone to 7.3 mm would add at most 1.3 points (at 21°), so the figure value stands.

Maker drawing: the collector-site barrel section shows eight singlets in eight groups in the same order and shapes. It draws L6 and
L7 at about the same optical height, with a stepped rear flange making L6 the wider of the two, and the two elements touching at the
rim. It is not to scale and the patent figure governs; the model follows Fig. 4, where L7 is the taller element.

The rendered section was compared with Fig. 4 at matched scale and on the live page at infinity and at the near state: L7 now steps
above L6 as drawn, and every other element keeps its outline. The local meridional probe does not find the 42° chief ray for this lens,
so the chief-ray floor relies on the engine field-coverage trace.

Open: none.
