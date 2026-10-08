# Audit Log — Nikon AI AF-S Zoom-Nikkor 80-200mm f/2.8D IF-ED

Patent: JP 2000-19398 A, Example 1, Figure 1 and Table 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| Patent L43 / data L16, 28–29 | 14.5 / 14.2 mm | 10.6 / 10.4 mm | A 300 dpi Figure 1 hand measurement makes L43 slightly smaller than L44/L45; the prior data made it about 30% larger. Both revised surfaces pass geometry validation. |

The patent-published SD anchors at surfaces 1, 6, 10, and 17 remain unchanged. The other silhouettes were within the figure-audit tolerance.

### Labels and glass

- Added the patent-facing L11a–L45 `diagramLabel` mapping and shortened group/component annotations to the labels printed in Figure 1.
- Corrected the displayed product designation from `f/2.8 D` to Nikon's `f/2.8D` styling.
- Marked the five `498825` positions as inferred ED/APD candidates because their count matches Nikon's five-ED production specification. No patent line indices or `dPgF` values were invented.
- All 18 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

## 2026-09-24 — Semi-diameters raised to the traced format corner

JP 2000-19398 A Example 1 (【表１】, PDF pp. 6–7) and its field plots in 図2 (PDF p. 14), which run to Y = 21.60 mm,
cover the 135-format corner (21.65 mm). The estimated L44/L45 rims clipped the real chief ray (solved through the stop
centre) at 18.52 mm, 86% of the corner, at every station. G4 and the stop are fixed ahead of the image, so the corner
chief ray crosses G4 at the same heights at every station: surface 30 ≥ 11.21, 31 ≥ 11.90, 32 ≥ 12.29 and 33 ≥
12.74 mm. 図1 (PDF p. 14) is drawn to scale. At 300 dpi the published effective diameters calibrate it at
0.170–0.174 mm/px (half-heights between line centres: L11 205 px for Φ1F 71.5, L21 102 px for Φ2 34.8, L31 105.5 px
for Φ3 36.8), and it draws L43, L44 and L45 at 96, 102 and 108.5 px, about 16.6, 17.7 and 18.8 mm: 57–74% above the
stored 10.4–11.2 mm. The drawn corner bundle itself crosses L44/L45 at about 16–17 mm. The automated figure tool
could not measure this sheet (the drawn ray bundles reach the crop edge and swamp the rim readings), so the hand
measurement stands; it matches the triage measurement of the same sheet. Where the figure and the chief-ray floor
disagree the larger value is taken, so L43–L45 follow the figure with each element scaled as a unit. This reverses
the 2026-08-14 cut of L43 from 14.5/14.2 to 10.6/10.4 mm: that hand measurement sized L43 against the undersized
L44/L45 instead of the published diameters, and the calibrated drawing contradicts it. The published anchors at
surfaces 1, 6, 10 and 17 are unchanged.

| Surface | Before | After | Justification |
|---|---|---|---|
| 28 | 10.6 | 16.6 | 図1 L43 ≈16.6 mm (96 px); corner chief ray 8.93 mm |
| 29 | 10.4 | 16.3 | L43 scaled with surface 28 (×1.566); corner chief ray 9.49 mm |
| 30 | 11.2 | 17.7 | 図1 L44 ≈17.7 mm (102 px); corner chief ray 11.21 mm |
| 31 | 11.2 | 17.7 | 図1 L44 ≈17.7 mm (both rims end on one drawn edge); corner chief ray 11.90 mm |
| 32 | 11.0 | 18.8 | 図1 L45 ≈18.8 mm (108.5 px); corner chief ray 12.29 mm |
| 33 | 10.8 | 18.5 | L45 scaled with surface 32 (×1.709); corner chief ray 12.74 mm |

The validator accepts the new values (the thinnest glass edge is now L45, 1.81 mm at 18.5 mm), the traced edge reaches
21.65 mm at every station (Wide 15.41°, 135 mm 9.08°, Tele 6.21°; 100%), and the image-circle floor still reports
nothing undersized. The lens is all-spherical, and the analysis quotes none of these values.

## 2026-10-08 — Nine rims raised to the stated on-axis ray; four held by the cross-gap rule

Rule (maintainer, 2026-10-08; `agent_docs/patent-figure-sd-audit-procedure.md`, "A clipped stated beam"): an inferred rim that clips the on-axis beam of the f-number the source prints is corrected by the change that alters shape and comparative size the least, so only the surfaces that clip move, each rises only to the height the stated on-axis ray reaches there at the station that needs most, rounded up at the precision the file's semi-diameters use, and the patent figure is a check, not the source of the value.

The stated ray is the f/2.88 on-axis marginal ray: 図2, 図3 and 図4 (PDF pp. 14–15) print FNO = 2.88 at all three stations, 【表１】 (PDF p. 6) rounds it to 2.9, and no stop diameter or semi-diameter is printed beyond Φ1F, Φ1R, Φ2 and Φ3. The file's semi-diameters are written to 0.1 mm. Thirteen inferred rims stood below the ray. Nine are raised. The other four were set to the listed values, failed the validator and are back at their former values, so this pass is partial: the 81.55 and 135 mm stations now trace at the stated f-number on the iris, and the tele column is still limited by the surface 7 rim. Elements are named by the Figure 1 labels the file carries as `diagramLabel`.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (L13 rear) | 26.1 mm | 26.1 mm (not raised) | Stated ray reaches 26.910 mm at 194 mm, so 27.0 mm is needed; 27.0 mm fails the cross-gap rule against surface 8 |
| Surface 8 `sd` (L14 front) | 26.1 mm | 26.1 mm (not raised) | Stated ray reaches 26.904 mm at 194 mm, so 27.0 mm is needed; 27.0 mm fails the cross-gap rule against surface 7 |
| Surface 9 `sd` (L14 rear) | 26.2 mm | 26.5 mm | Stated ray reaches 26.472 mm at 194 mm |
| Surface 11 `sd` (L21 rear) | 16.1 mm | 16.2 mm | Stated ray reaches 16.180 mm at 194 mm |
| Surface 12 `sd` (L22a front) | 16.1 mm | 16.2 mm | Stated ray reaches 16.184 mm at 194 mm |
| Surface 13 `sd` (L22 cemented junction) | 16.6 mm | 17.1 mm | Stated ray reaches 17.048 mm at 194 mm |
| Surface 14 `sd` (L22b rear) | 16.7 mm | 16.7 mm (not raised) | Stated ray reaches 17.065 mm at 194 mm, so 17.1 mm is needed; 17.1 mm fails the cross-gap rule against surface 15 |
| Surface 15 `sd` (L23 front) | 16.7 mm | 16.7 mm (not raised) | Stated ray reaches 17.059 mm at 194 mm, so 17.1 mm is needed; 17.1 mm fails the cross-gap rule against surface 14 |
| Surface 16 `sd` (L23 rear) | 17.2 mm | 17.6 mm | Stated ray reaches 17.524 mm at 194 mm |
| Surface 21 `sd` (L32b rear) | 19.0 mm | 19.1 mm | Stated ray reaches 19.085 mm at 135 mm (19.073 mm at 81.55 mm) |
| Surface 23 `sd` (L41 front) | 19.2 mm | 19.4 mm | Stated ray reaches 19.307 mm at 194 mm (19.289 mm at 81.55 mm, 19.299 mm at 135 mm) |
| Surface 24 `sd` (L41 rear) | 19.0 mm | 19.2 mm | Stated ray reaches 19.119 mm at 194 mm (19.100 mm at 81.55 mm, 19.111 mm at 135 mm) |
| Surface 26 `sd` (L42 cemented junction) | 18.1 mm | 18.2 mm | Stated ray reaches 18.150 mm at 194 mm (18.130 mm at 81.55 mm, 18.143 mm at 135 mm) |

The nine raises are +1.1 % (surface 9), +0.6 % (11 and 12), +3.0 % (13), +2.3 % (16), +0.5 % (21), +1.0 % (23), +1.1 % (24) and +0.6 % (26). Each is the smallest 0.1 mm value that passes the ray; the raised rims stand 0.015 mm (surface 21) to 0.093 mm (surface 23) outside it. Surfaces 9, 11, 12, 13 and 16 clipped only at the tele column. Surfaces 21, 23, 24 and 26 sit beside the stop: 23, 24 and 26 clipped at every station and 21 at 81.55 and 135 mm.

The four values not raised. With all thirteen listed values the file does not build. The validator lets the two surfaces facing an air gap close 90 % of it at the rim of their shared band (`gapSagFrac`, default 0.9; the file sets none), and both pairs fail at every station because neither gap moves with zoom:

- Surfaces 7 and 8 at 27.0 mm close 1.759 mm of the 1.810 mm L13–L14 gap (97.2 %; 1.629 mm allowed) and leave 0.051 mm of air at the rim. The rule admits 26.2 mm at most (1.625 mm); the two spheres touch at 27.29 mm.
- Surfaces 14 and 15 at 17.1 mm close 1.957 mm of the 2.110 mm L22–L23 gap (92.8 %; 1.899 mm allowed) and leave 0.153 mm. The rule admits 16.8 mm at most; the two spheres touch at 17.74 mm.
- Neither face of a pair was raised alone. The rule reads the smaller of the two semi-diameters, so one face at the listed value would validate, but the other would still clip the ray and an element face would have moved for nothing.
- For the listed values to pass, the file needs `gapSagFrac` of at least 0.972. Checked in memory with nothing written: the thirteen listed values with `gapSagFrac: 0.98` build, need no render trim at any station and trace f/2.880 / 2.881 / 2.883 on the iris. With surfaces 7 and 8 alone at 27.0 mm the tele column would trace f/2.94 on surface 14. Setting `gapSagFrac` is outside this pass, which changes semi-diameters only.

Traced at infinity focus, wide open:

| Station | Stated → traced before | Limiter before | Stated → traced after | Limiter after |
|---|---|---|---|---|
| 81.55 mm | f/2.88 → f/2.89 (+0.5 %) | rim, surface 24 (L41 rear, sd 19.0 mm) | f/2.88 → f/2.88 (0.0 %) | iris (`STO`) |
| 135 mm | f/2.88 → f/2.90 (+0.5 %) | rim, surface 24 (L41 rear, sd 19.0 mm) | f/2.88 → f/2.88 (+0.0 %) | iris (`STO`) |
| 194 mm | f/2.88 → f/2.98 (+3.4 %) | rim, surface 7 (L13 rear, sd 26.1 mm) | f/2.88 → f/2.98 (+3.4 %) | rim, surface 7 (L13 rear, sd 26.1 mm) |

The proposal listing (`audit:aperture` with `--raise`) now prints only the four values left: 7: 26.1 → 27, 8: 26.1 → 27, 14: 16.7 → 17.1, 15: 16.7 → 17.1.

Figure check, made before the edit. 図1 (PDF p. 14) is Example 1's section. The sheet is a 200 ppi one-bit scan, read here on a 600 dpi render (three render pixels per scan pixel); the axis is at y = 647 px and a half-height is the mean of the upper and lower reading.

- Axial scale: the surface 1 vertex and the image plane are 2763.5 px apart for the 250.830 mm the printed 81.55 mm column sums to, 11.02 px/mm. The 27 other vertex crossings that can be told apart on the axis fall within 5 px (0.45 mm) of that scale with the 81.55 mm gaps, so the sheet draws the wide state. One scan pixel is 0.27 mm of lens.
- Height scale: the four published effective diameters read 410 px for Φ1F/2 = 35.75 mm (11.47 px/mm), 325 px for Φ1R/2 = 28.0 mm (11.61), 205 px for Φ2/2 = 17.4 mm (11.78) and 213 px at the ends of the surface 17 arcs for Φ3/2 = 18.4 mm (11.58). Heights are drawn 4–7 % larger than lengths, so each group is read on its own published diameter and the axial-scale reading is given beside it.

| Drawn feature | Half-height | On its published diameter | On the axial scale | Stated ray needs |
|---|---:|---:|---:|---:|
| Surfaces 7, 8 and 9: the two arcs and the flat line end at one corner under the L13/L14 cap (cap 325 px) | 307–313 px | 26.4–27.0 mm | 27.9–28.4 mm | 26.91 / 26.90 / 26.47 mm |
| Surfaces 11 and 12: the arcs meet on L21's rear edge | 182.5 px | 15.5 mm | 16.6 mm | 16.18 / 16.18 mm |
| Surfaces 13 and 14: both run to L22's cap | 198.5 px | 16.85 mm | 18.0 mm | 17.05 / 17.06 mm |
| Surfaces 15 and 16: L23's cap | 205 px | 17.4 mm | 18.6 mm | 17.06 / 17.52 mm |
| Surface 21: L32b's cap | 226 px | 19.5 mm | 20.5 mm | 19.08 mm |
| Surfaces 23 and 24: L41's tips | 226 px | 19.5 mm | 20.5 mm | 19.31 / 19.12 mm |
| Surface 26: between L42b's cap and L42a's cap | 213–219 px | 18.4–18.9 mm | 19.3–19.9 mm | 18.15 mm |

No element is drawn clearly smaller than the ray needs, so no raise was withheld on the figure. The largest shortfall is surfaces 11 and 12, 4.3 % below on the published-diameter scale and above on the axial scale. L22's cap is 1.2 % below and L23's cap 0.7 % below the larger of its two needs, each under one scan pixel. Surfaces 7 and 8 read 26.4–27.0 mm against 26.91 mm, and everything else is drawn above the ray. The inner ends of the stop ticks stand at about 220 px, 19.0 mm, against the traced 19.2041 mm iris. For the two held pairs the figure is on the side of the ray: it ends surfaces 7 and 8 at 26.4–27.0 mm against the stored 26.1 mm, and draws surfaces 14 and 15 to 16.85 and 17.4 mm against the stored 16.7 mm. It runs each pair of facing lines together below the rim, and at 0.27 mm per scan pixel it cannot show whether 0.05–0.25 mm of air remains.

Render comparison. The cross-section was rendered at 81.55 mm, infinity focus, the state 図1 draws, and read at 6.97 px/mm on both axes.

- Element order and grouping agree: the L11 doublet and L12, then L13 and L14, then L21, the L22 doublet and L23 against G1R, 32 mm of air, L31 and the L32 doublet, the stop, L41, the L42 doublet, L43, L44 and L45.
- Proportions agree. As a share of L11's half-height, figure against file (tallest rim of each element): L13 0.79 / 0.78, L21 0.50 / 0.49, L22 0.48 / 0.48, L23 0.50 / 0.49, L31 0.52 / 0.52, L32 0.55 / 0.53, L41 0.55 / 0.54, L42 0.53 / 0.53, L43 0.47 / 0.46, L44 0.50 / 0.50, L45 0.53 / 0.53. The front group is the largest, G1R next, G3 and the front of G4 stand above G2, and L43 is the smallest, in both.
- Departures from the drawing. 図1 closes G1R and each G2 element with a flat cap at one height, where the render joins an element's front and rear rims with a straight edge, so L13 (28.0 / 26.1 mm) and L21 (17.4 / 16.2 mm) show a slanted edge as they did before. Three are new or larger with this pass and are listed under comparative size: the peak at L22's junction, L14's rear rim above its front rim, and L23's steeper edge.
- Against a render of the file as it stood, taken at the same state and size, 145 pixels of the 1400 × 900 frame differ by more than 24 of 255 levels in a colour channel, in five clusters: L14's rear rim, the rear of L21 with the L22 doublet, L23's rear rim, L41, and L42's junction. Counting every pixel that differs by more than 2 grey levels gives 642, which adds L32b's rear rim and resampled points along the raised arcs; all of them lie on the outlines of the touched elements (x 434–648, y 475–599 px). Scale, positions and every other outline are identical.
- No outline crosses or overlaps a neighbour at 81.55 or 194 mm, and the element outlines need no render trim at 81.55, 135 or 194 mm.

Where comparative size changed:

- L23's rear rim (surface 16, 17.6 mm) is now the tallest in G2, 0.2 mm above L21's front rim (surface 10, published 17.4 mm); it was 0.2 mm below. 図1 draws the two caps at the same 205 px, and 0.2 mm is under one scan pixel, so the figure does not settle the order.
- L22's junction (surface 13, 17.1 mm) now stands 0.4 mm above the doublet's rear face (surface 14, held at 16.7 mm); it was 0.1 mm below. 図1 draws L22 with a flat cap, so the figure does not draw this peak. It comes from surface 14 being held: at 17.1 mm the two would be level.
- L14's rear rim (surface 9, 26.5 mm) is 0.4 mm above its front rim (surface 8, held at 26.1 mm); the difference was 0.1 mm. 図1 ends both at one corner. At 27.0 mm the front rim would be 0.5 mm above the rear.
- L23's front and rear rims differ by 0.9 mm (16.7 / 17.6 mm) against 0.5 mm before, with surface 15 held; 図1 draws a flat cap.
- L41's rear rim (surface 24, 19.2 mm) stands 0.2 mm above L42's front rim (surface 25, 19.0 mm); they were level. 図1 draws L41's tips 7 px, 0.6 mm, above L42a's cap, so the figure draws it that way.
- L41's front rim (19.4 mm) is 0.3 mm above L32's rear rim (19.1 mm) against 0.2 mm before; 図1 draws both at 226 px.
- Nothing else changed order: L21 (17.4 / 16.2 mm), the L32 doublet (18.6 / 18.8 / 19.1 mm) and the L42 doublet (19.0 / 18.2 / 17.5 mm) keep the direction of their taper, and L13 is as it was.

Validation of the new values: the file builds and the validator reports nothing. Edge thickness at the smaller rim of each touched element is 5.268 mm (L21, 5.218 before), 7.438 mm (L22a, 7.367), 2.305 mm (L22b, 2.351), 1.975 mm (L41, 2.007) and 2.599 mm (L42a, 2.639); L14 (2.169 mm), L23 (4.166 mm), L32b (4.883 mm) and L42b (7.722 mm) are read at an unchanged rim, and the thinnest edge is still L45 at 1.808 mm. The steepest raised rim is surface 11 at 28.6° (28.4° before) and the steepest in the file is still surface 7 at 35.9°, against the 64.2° limit. The tightest cross-gap is now surfaces 11 and 12, which close 6.752 mm of the 6.768 mm allowed across the 7.520 mm gap at their 16.2 mm band (6.665 mm before; the rule admits 16.2 mm at most there). Surfaces 7 and 8 close 1.609 mm of 1.629 mm allowed and surfaces 14 and 15 close 1.864 mm of 1.899 mm allowed, both as before.

Moved with the values:

- Rewritten to the traced state: the data-file header blocks on the aperture and the semi-diameters, the note's stop paragraph under Optical Architecture with the new semi-diameter paragraph after it, and the stop paragraph under Verification Summary. They no longer say that the 18.801412058 mm `STO` radius reproduces f/2.88 at all three stations: that radius is the paraxial one (18.8014 mm at every station), the traced iris is 19.2041 mm, and the tele column traces f/2.98.
- The header's sentence on L43–L45 lost its clause about the former 10.4–11.2 mm values, which this log already records. Header lines outside the two blocks were re-padded so the box borders align; their text is unchanged.

Confirmed unchanged:

- The `STO` row (sd 18.801412058 mm), every radius, thickness and index, the `var` gaps, `nominalFno` 2.88, `zoomApertureModel` and `fstopSeries`; the published semi-diameters at surfaces 1, 6, 10 and 17; the semi-diameters of surfaces 2–5, 18–20, 25 and 27–33, and of the four held surfaces 7, 8, 14 and 15.
- The traced wide-open iris, 19.2041 mm, which alone gives f/2.880 / 2.881 / 2.883; computed focal lengths 81.5499, 134.9998 and 196.0000 mm.
- The tele column: f/2.88 → f/2.98 on the surface 7 rim.
- Traced field coverage: 100 % at 81.55 mm (15.4°), 135 mm (9.1°) and 194 mm (6.2°), corner chief ray clear at 21.65 mm. Image-circle floor: no surface listed. Engine half-field 16.77° / 10.63° / 8.05°.

Left open:

- The tele column traces f/2.98 (+3.4 %) against the printed 2.88, outside the rounding of both 2.88 and Table 1's 2.9. Surfaces 7 and 8 need 27.0 mm and surfaces 14 and 15 need 17.1 mm; the 90 % cross-gap rule stops them, not the figure. Whether this file may carry `gapSagFrac: 0.98` is a maintainer decision. With it the four values go in unchanged and all three stations trace on the iris.
- Until then the raises of surfaces 9, 11, 12, 13 and 16 change no traced f-number, because surface 7 still limits the only station at which they clipped. They stand at the ray's height so that the four held values are the whole of what remains, and they are the source of the L22 junction peak and the L14 and L23 rim differences listed above.
- 図1 draws L13 and L14 under one flat cap at the published 28.0 mm and gives each G2 element a flat cap. The file's L14 rims (26.1 / 26.5 mm) are 5–7 % under that cap. No rim rule reaches this, and it is not changed.
