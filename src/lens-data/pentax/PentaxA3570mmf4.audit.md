# Audit Log — SMC PENTAX-A ZOOM 35-70mm f/4

Patent: US 4,812,022, Example 3, Figure 9 and Table 3

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L7, 13–14 | 10.8 mm | 7.2 mm | A 300 dpi Figure 9 measurement makes the final meniscus distinctly smaller than L4–L6. The former value instead made it the rear group's largest element. |

The remaining profiles follow Figure 9 within the drawing tolerance. Leader curves around the section were excluded from the measurement.

### Labels and glass

- Corrected the displayed name to the A-series catalog styling, `SMC PENTAX-A ZOOM`, removing the duplicated leading maker name.
- Normalized the patent assignee spelling to the repository's existing form.
- Identified OHARA S-LAM2 as a source-precision catalog equivalent for L4's patent 744447 coordinate. This supplies verified Sellmeier coverage without asserting the production supplier.
- All seven elements now have coordinate-compatible Sellmeier coverage.

### Motion

- Rechecked the two source endpoints. The modeled order is 36.0 mm wide to 68.5 mm tele: the front/rear-group gap contracts from 41.111 to 3.821 mm while the solved infinity back focus increases. Focus pairs remain identical because Example 3 publishes no close-focus cam law.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

| Field | Before | After | Source |
|---|---|---|---|
| `zoomApertureModel` | `"fixed-iris"` | removed; the default per-station iris applies | The patent prints no stop diameter and never says the opening is constant. It prints F number 1:4.1 for F = 36-68.5 (Example 3 header, col. 5, PDF p. 10) and heads the Example 3 plots 1:4.1 at minimum, medium and maximum focal length (Fig. 10, sheet 5, PDF p. 6; Figs. 11 and 12, sheet 6, PDF p. 7; figure-to-state mapping at col. 1 lines 65-68, PDF p. 8). With the stop on the rear group, f/4.1 needs a 7.7842 mm radius at 36 mm and 10.3442 mm at 68.5 mm, so one radius contradicts the printed values. |
| `nominalFno` | `[4.1, 5.394215]` | `4.1` | Example 3 header, col. 5, PDF p. 10: F number 1:4.1 for F = 36-68.5. Fig. 12 (maximum focal length), sheet 6, PDF p. 7, headed 1:4.1. The former tele value was the f-number of the wide-calibrated radius, not a patent number. |

Traced result of the two edits, at infinity focus and wide open:

| Station | Wide-open iris radius before | After | Stated → traced before | After | Limiter after |
|---|---:|---:|---|---|---|
| 36 mm | 7.7842 mm | 7.7842 mm | f/4.10 → f/4.10 | f/4.10 → f/4.10 | iris (STO) |
| 68.5 mm | 7.7842 mm | 10.3442 mm | f/5.39 → f/5.41 | f/4.10 → f/4.61 (+12.4 %) | rim, surface 7 (L4 front, sd 9.5 mm) |

Confirmed unchanged:

- Example identity. All 14 radii, 13 thicknesses and 7 nd/νd pairs of Example 3 (col. 5, PDF p. 10) equal the file, from r1 = 93.720 through r14 = -28.475. Examples 1 and 2 begin r1 = 99.624 and 103.259 and do not match.
- Focal lengths. The header prints F = 36-68.5; the prescription computes 35.9998 and 68.5002 mm.
- Gaps. d6 = 41.111-3.821 is split around the stop as 39.2005 + 1.9105 and 1.9105 + 1.9105 mm. The back focus values 42.3869 and 62.0194 mm are computed, not printed.
- Stop position. The patent places the aperture ahead of the rear group and movable with it (col. 2 lines 13-16; claim 1, col. 6 lines 19-21) and prints no coordinate. The 1.9105 mm offset ahead of r7 stays the file's inference. The authored STO semi-diameter 7.752338441 mm, the paraxial f/4.1 radius at 36 mm, is untouched.
- `apertureDesign` 4.1 and `fstopSeries` starting at 4.1 already agree with the patent's 1:4.1. `apertureMarketing` 4 is the catalog value.
- No semi-diameter was changed.

Left open:

- The 68.5 mm station is rim-limited. The f/4.1 marginal ray there reaches 10.762 mm at surface 7, 10.681 at 8, 10.201 at 9, 9.698 at 10, 9.612 at 11, 7.731 at 12, 7.714 at 13 and 7.755 mm at 14. It exceeds the authored semi-diameters at surfaces 7, 8, 9, 11, 13 and 14 (9.5, 9.5, 9.8, 9.4, 7.2, 7.2 mm). Surface 7 is the first rim it meets, and the largest ray that clears every rim gives f/4.61.
- The rear-group semi-diameters are inferred, not printed, and sit below the drawing. Fig. 9 (sheet 5, PDF p. 6) measured at 400 dpi, with 20.3 px/mm taken from r7-r14 = 23.25 mm, draws L4 at about 11.3 mm, L5 at about 10.8 mm, L6 at about 10.2 mm (outer rim) and L7 at about 8.2 mm, against 9.5, 9.8, 9.4 and 7.2 mm in the file. The patent calls Fig. 9 a schematic view (col. 1 lines 55-58, PDF p. 8), so these are approximate. Re-deriving L4-L7 from the figure is a semi-diameter audit task and was not part of this pass. The 2026-08-14 statement that the remaining profiles follow Figure 9 within the drawing tolerance is not met by L4, authored 16 % under the drawing.
- The lowest ray of the default 0.60-field fan is cut at L7 at both endpoints (surface 14 at 36 mm, surface 13 at 68.5 mm). The data-file header states this; it follows from the 7.2 mm L7 value and is part of the same semi-diameter question.
- The note's edge-thickness, rim-angle and cross-gap figures depend only on the unchanged semi-diameters and were not re-derived.
- The note's 0.586 mm wide-field clip at surface 3 reproduces for the 32.25° ray through the edge of the authored 7.752338441 mm stop radius at 36 mm. Through the traced 7.7842 mm iris, which this pass leaves as it was at 36 mm, the same ray is 0.601 mm over. The note keeps the 0.586 mm figure.

## 2026-10-07 — Patent-audit queue: rear-group rim audit

No value changed. Fig. 9 draws all four rear elements larger than the file, by 8 to 19 %. That is under the roughly 25 % the figure-audit procedure requires before a semi-diameter is changed, and three of the four elements are inside its roughly 15 % noise band.

Fig. 9 (sheet 5, PDF p. 6) is drawn at the 36 mm position. The page is a 300 dpi one-bit scan, so heights were read on the native pixels and checked by eye on 600 dpi renders. A height is half the distance between the centres of an element's upper and lower rim lines. Two scales were used:

- Axial vertices: r7 to r14 measures 354.6 px for the 23.250 mm that the printed d7 to d13 sum to, 15.25 px/mm. The other vertex spans give 15.08 px/mm (d6, 41.111 mm), 14.89 px/mm (r1 to r6, 16.420 mm) and 15.09 px/mm (r1 to r14, 80.781 mm).
- Drawn curvature: circles fitted to eight drawn arcs and divided by their printed radii (r2, r3, r4, r5, r7, r9, r12, r14) give a median of 15.16 px/mm. Six lie between 14.8 and 15.3; r7 reads 12.7 and r9 16.3.

| Element (surfaces) | File sd | Fig. 9 half-height | Vertex scale | Curvature scale | Figure ÷ file |
|---|---:|---:|---:|---:|---:|
| L4 (7, 8) | 9.5 mm | 171.75 px | 11.26 mm | 11.33 mm | 1.19 |
| L5 (9, 10) | 9.8 mm | 163.25 px | 10.70 mm | 10.77 mm | 1.09-1.10 |
| L6 front (11), outer rim | 9.4 mm | 154.75 px | 10.15 mm | 10.21 mm | 1.08-1.09 |
| L6 rear (12), inside the drawn chamfer | 9.4 mm | 127.5 px | 8.36 mm | 8.41 mm | 0.89 |
| L7 (13, 14) | 7.2 mm | 124.75 px | 8.18 mm | 8.23 mm | 1.14 |

Checked:

- Image-circle floor: no surface listed. Traced field coverage: 100 % at 36 mm and at 68.5 mm, corner chief ray clear. Neither gives proof that a rear rim is short.
- The two scales agree to 0.6 %, so the reading is not a scale artefact. The front group read the same way gives L1 21.4 mm, L2 18.6 mm and L3 17.8 mm on the vertex scale, against 21.5, 17.6 and 18 mm in the file.
- The drawing is accurate to a few pixels per feature, not uniformly to scale. r7 is drawn with a radius of about 33 mm against the printed 39.600, the d10 air gap at about 0.9 mm against 0.640, and single vertices sit up to 4 px (0.27 mm) from the printed spacings. The patent calls Fig. 9 a schematic view (col. 1 lines 56-58, PDF p. 8).
- `audit:patent-figure` cannot screen this sheet. The scanned axis line is 5 px thick, the tool's minimum rim run at 300 dpi, and runs past the glass at both ends, and the r and d leader lines straddle the axis over the rear group. Of six crops, five raised the crop-edge warning and the sixth ended its glass span on the axis line 130 px past r14; full-height crops read L4-L6 at 16 to 20 mm, which are leader-line heights. Limited to the rear group's height band the tool read L4 at 11.4-11.5 mm and L6 at 10.4 mm, in line with the hand reading; its L5 and L7 rows followed leader lines.

Confirmed unchanged:

- Semi-diameters of surfaces 7-14 (9.5, 9.5, 9.8, 9.8, 9.4, 9.4, 7.2, 7.2 mm) and the `STO` row.
- Traced f-number and limiter, the same before and after this pass: 36 mm f/4.10 → f/4.10, iris (`STO`); 68.5 mm f/4.10 → f/4.61 (+12.4 %), rim of surface 7.
- The header and note statement that Fig. 9 draws L4 at about 11.3 mm.

Left open:

- The 68.5 mm station stays rim-limited. The printed 1:4.1 needs 10.762 mm at surface 7, 10.201 at 9, 9.612 at 11 and 7.755 mm at 14; the file's 9.5, 9.8, 9.4 and 7.2 mm are below it on all four elements.
- The Fig. 9 reading rounded to 0.1 mm is L4 11.3, L5 10.7, L6 10.2 (surface 11) and 8.4 (surface 12), L7 8.2 mm. It sits 5 to 6 % above the f/4.1 marginal ray on every element. Substituted without editing the file, these values pass the validator (edge thickness, rim slope, cross-gap) and the 68.5 mm station traces f/4.10 on the iris. Adopting them means accepting a figure difference below the procedure's threshold on the strength of the printed f-number; that decision was not taken in this pass.
- L2 is drawn at about 18.6 mm against 17.6 mm in the file; the front group was outside this pass.

## 2026-10-08 — Rear-group semi-diameters from Fig. 9

Ruling (maintainer, 2026-10-08): where an inferred rim clips the on-axis beam of the f-number the source prints, and the patent figure measured on two independent scales that agree gives a wider rim, the figure's value is adopted even below the roughly 25 % bar, and the value is the figure's, never the one the beam needs.

Fig. 9 (sheet 5, PDF p. 6) was measured again on the native 300 dpi one-bit scan and checked by eye on a 600 dpi render of the rear group. The scanned axis runs 0.51° off horizontal, which changes a height by less than 0.01 %. A height is half the distance between the centres of an element's upper and lower rim lines. Every reading repeats the 2026-10-07 one within 0.3 px (0.2 %), so the values adopted are the ones that section lists.

- Vertex scale: the r7 and r14 vertices sit at x = 1376.0 and 1730.6 px, 354.6 px for the printed 23.250 mm, 15.25 px/mm. The other spans read 14.90 px/mm (r1 to r6), 15.08 px/mm (d6) and 15.09 px/mm (r1 to r14).
- Curvature scale: circles fitted to the same eight drawn arcs give 15.07 (r2), 15.27 (r3), 14.87 (r4), 15.33 (r5), 12.50 (r7), 16.40 (r9), 14.85 (r12) and 15.27 px/mm (r14). The median is 15.17 px/mm, against 15.16 on 2026-10-07. The two scales agree to 0.5 %.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (L4 front) | 9.5 mm | 11.3 mm | Fig. 9, L4 rim lines: half-height 171.75 px, 11.26 mm on the vertex scale and 11.32 mm on the curvature scale |
| Surface 8 `sd` (L4 rear) | 9.5 mm | 11.3 mm | The same L4 reading; Fig. 9 draws both L4 surfaces out to one rim |
| Surface 9 `sd` (L5 front) | 9.8 mm | 10.7 mm | Fig. 9, L5 rim lines: half-height 163.2 px, 10.70 mm on the vertex scale and 10.76 mm on the curvature scale |
| Surface 10 `sd` (L5 rear) | 9.8 mm | 10.7 mm | The same L5 reading; Fig. 9 draws both L5 surfaces out to one rim |
| Surface 11 `sd` (L6 front) | 9.4 mm | 10.2 mm | Fig. 9, L6 outer rim lines: half-height 154.6 px, 10.14 mm on the vertex scale and 10.19 mm on the curvature scale |
| Surface 12 `sd` (L6 rear) | 9.4 mm | 8.4 mm | Fig. 9, the corners where the drawn chamfer meets the r12 arc: half-height 127.2 px (126.8 px from the crossing of the two fitted centrelines, 127.6 px read on the corner ink), 8.34 mm on the vertex scale and 8.38 mm on the curvature scale |
| Surface 13 `sd` (L7 front) | 7.2 mm | 8.2 mm | Fig. 9, L7 rim lines: half-height 124.7 px, 8.18 mm on the vertex scale and 8.22 mm on the curvature scale |
| Surface 14 `sd` (L7 rear) | 7.2 mm | 8.2 mm | The same L7 reading; Fig. 9 draws both L7 surfaces out to one rim |

Each value is the mean of the two scales rounded to 0.1 mm: 11.29, 10.73, 10.16, 8.36 and 8.20 mm. The changes are +18.9 % (L4), +9.2 % (L5), +8.5 % (surface 11), -10.6 % (surface 12) and +13.9 % (L7), all under the roughly 25 % bar. At their former values surfaces 7, 8, 9, 11, 13 and 14 clipped the f/4.1 beam at 68.5 mm, one or more on every rear element, and Fig. 9 draws each of them wider, so those six are adopted under the ruling. Surfaces 10 and 12 did not clip (9.698 mm needed against 9.8 mm, 7.731 mm against 9.4 mm). Surface 10 takes the one rim Fig. 9 draws for L5. Surface 12 becomes narrower, which the ruling's wording (a wider rim) does not cover: it takes the figure's chamfer corner so that both L6 surfaces come from the same drawing. None was sized to the beam. The f/4.1 marginal ray at 68.5 mm needs 10.762, 10.681, 10.201, 9.698, 9.612, 7.731, 7.714 and 7.755 mm at surfaces 7 to 14, so the figure's rims stand 0.445 mm (surface 14) to 1.002 mm (surface 10) outside it. Surfaces 11 and 12 read within 0.02 mm of a rounding boundary; 10.1 and 8.3 mm would clear the beam as well, so the rounding does not decide the result.

Traced at infinity focus, wide open:

| Station | Stated → traced before | Limiter before | Stated → traced after | Limiter after |
|---|---|---|---|---|
| 36 mm | f/4.10 → f/4.10 | iris (`STO`) | f/4.10 → f/4.10 | iris (`STO`) |
| 68.5 mm | f/4.10 → f/4.61 (+12.4 %) | rim, surface 7 (L4 front, sd 9.5 mm) | f/4.10 → f/4.10 | iris (`STO`) |

Validation of the new values: the file builds and the validator reports nothing. Edge thickness is 1.370 mm (L4), 1.438 mm (L5), 8.498 mm (L6, at the 8.4 mm rear rim) and 1.388 mm (L7). Rim slope is 16.6° at surface 7, 30.3° at surface 9, 30.5° at surface 12 and 16.7° at surface 14, against the 64.2° limit. The cross-gap intrusion is negative across d8, 0.521 mm of the 0.576 mm allowed across d10, and 2.536 mm of 6.030 mm across d12. The element outlines need no render trim at either endpoint or at mid-zoom.

Moved with the values:

- Minimum element edge thickness: 1.585461 mm (L7) before, 1.370140 mm (L4) now. The note's former 0.735335 mm was L7's edge at the 10.8 mm value retired on 2026-08-14, not a property of the file as it stood, so the 2026-10-07 statement that the note's edge-thickness figure depended only on unchanged semi-diameters was wrong.
- Smallest cross-gap clearance: 0.064313 mm across d2 before, 0.055314 mm across d10 (surfaces 10 and 11, 0.640 mm gap) now. The d2 figure itself is unchanged.
- Chief-ray-limited half-field computed by the engine: 32.128° → 34.398° at 36 mm and 23.471° → 26.313° at 68.5 mm, so the diagram's default 0.60-field fan launches at 20.64° and 15.79° instead of 19.28° and 14.08°. Its lowest ray (pupil fraction -0.75) was cut at surface 14 by 0.137 mm at 36 mm and at surface 13 by 1.780 mm at 68.5 mm. It now passes at 36 mm and is cut at surface 13 by 1.137 mm at 68.5 mm.
- Rewritten to the traced state: the data-file header blocks on the stop model and the semi-diameters, the comment above `nominalFno`, and the note's aperture table, its paragraph on limits and its semi-diameter paragraph under Verification Summary and Modeling Limits. Header lines outside those two blocks were re-padded so the box borders align; their text is unchanged.

Confirmed unchanged:

- The `STO` row (sd 7.752338441 mm), the semi-diameters of surfaces 1-6, every radius, thickness and index, the `var` gaps, `nominalFno` 4.1 and `fstopSeries`.
- Wide-open iris radii 7.7842 mm at 36 mm and 10.3442 mm at 68.5 mm; computed focal lengths 35.9998 and 68.5002 mm.
- The 36 mm station: f/4.10 → f/4.10 on the iris.
- Traced field coverage: 100 % at 36 mm (32.2°) and at 68.5 mm (17.4°), corner chief ray clear at 21.65 mm. Image-circle floor: no surface listed.
- Maximum rim angle 48.515° at surface 2, and the 0.586 mm clip at surface 3 of the 32.25° ray through the edge of the authored 7.752338441 mm stop radius at 36 mm.

Closed by this pass: the 2026-10-07 "Left open" items on the rim-limited 68.5 mm station, on re-deriving L4-L7 from the figure, on the fan ray cut at L7, and on the note's edge-thickness, rim-angle and cross-gap figures, which are re-derived above.

Left open:

- L2 is drawn at about 18.6 mm against 17.6 mm in the file. No front-group rim clips the stated beam, so the ruling does not reach it.
- The rendered cross-section has not been compared with Fig. 9 in the browser (figure-audit procedure, Step 8).

Superseded the same day: the semi-diameters this section set for surfaces 7-14 were replaced by the values in the section that follows.

## 2026-10-08 — Rear-group semi-diameters by the least-change rule

Rule (maintainer, 2026-10-08, replacing the ruling in the section above): an inferred rim that clips the on-axis beam of the f-number the source prints is corrected by the change that alters shape and comparative size the least. Only the surfaces that clip move, and each rises only to the height the stated on-axis ray reaches there at the station that needs most, rounded up at the precision the file's semi-diameters use. A surface that does not clip keeps its value. The patent figure is a check, not the source of the value: a raised rim must not exceed what the figure draws.

The stated ray is the f/4.1 on-axis marginal ray (Example 3 header, col. 5, PDF p. 10: F number 1:4.1 for F = 36-68.5). Every rear surface needs most at 68.5 mm; at 36 mm the same ray reaches 7.960 mm at surface 7 and less behind it. The file's semi-diameters are written to 0.1 mm. The After values are the ones the repository's proposal listing (`audit:aperture` with `--raise`) prints for the file as it stood before 2026-10-08: 7: 9.5 → 10.8, 8: 9.5 → 10.7, 9: 9.8 → 10.3, 11: 9.4 → 9.7, 13: 7.2 → 7.8, 14: 7.2 → 7.8, with surfaces 10 and 12 not listed.

| Field | Before (to 2026-10-07 → Fig. 9 value set earlier on 2026-10-08) | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (L4 front) | 9.5 mm → 11.3 mm | 10.8 mm | Stated ray reaches 10.762 mm at 68.5 mm; 9.5 mm clipped it |
| Surface 8 `sd` (L4 rear) | 9.5 mm → 11.3 mm | 10.7 mm | Stated ray reaches 10.681 mm at 68.5 mm; 9.5 mm clipped it |
| Surface 9 `sd` (L5 front) | 9.8 mm → 10.7 mm | 10.3 mm | Stated ray reaches 10.201 mm at 68.5 mm; 9.8 mm clipped it |
| Surface 10 `sd` (L5 rear) | 9.8 mm → 10.7 mm | 9.8 mm | Stated ray reaches 9.698 mm at 68.5 mm; 9.8 mm did not clip it, so the value from before 2026-10-08 stands |
| Surface 11 `sd` (L6 front) | 9.4 mm → 10.2 mm | 9.7 mm | Stated ray reaches 9.612 mm at 68.5 mm; 9.4 mm clipped it |
| Surface 12 `sd` (L6 rear) | 9.4 mm → 8.4 mm | 9.4 mm | Stated ray reaches 7.731 mm at 68.5 mm; 9.4 mm did not clip it, so the value from before 2026-10-08 stands |
| Surface 13 `sd` (L7 front) | 7.2 mm → 8.2 mm | 7.8 mm | Stated ray reaches 7.714 mm at 68.5 mm; 7.2 mm clipped it |
| Surface 14 `sd` (L7 rear) | 7.2 mm → 8.2 mm | 7.8 mm | Stated ray reaches 7.755 mm at 68.5 mm; 7.2 mm clipped it |

Against the values from before 2026-10-08 the six raises are +13.7 % (surface 7), +12.6 % (8), +5.1 % (9), +3.2 % (11) and +8.3 % (13 and 14); surfaces 10 and 12 are back at those values exactly. The largest raise is under the roughly 15 % above which the procedure asks for the figure to be read before anything changes. At 0.1 mm each raised value is the smallest that passes the ray: one step lower is 10.7, 10.6, 10.2, 9.6, 7.7 and 7.7 mm, each below the ray height. The raised rims stand 0.019 mm (surface 8) to 0.099 mm (surface 9) outside the ray; surfaces 10 and 12 stand 0.102 mm and 1.669 mm outside it.

Figure check, against the Fig. 9 readings recorded in the two sections above (L4 11.3 mm, L5 10.7 mm, L6 outer rim 10.2 mm, L7 8.2 mm); the figure was not measured again in this pass:

- Every raised value is below the reading for its element: 10.8 and 10.7 mm against 11.3 mm, 10.3 mm against 10.7 mm, 9.7 mm against 10.2 mm, 7.8 mm against 8.2 mm. No raised rim exceeds what the figure draws.
- Surface 12 is not raised. Its 9.4 mm lies between the chamfer corner Fig. 9 draws on the r12 arc at 8.4 mm and L6's 10.2 mm outer rim, so the file carries the r12 arc 1.0 mm further out than the drawing does.

Shape and comparative size, against the file before 2026-10-08:

- By largest rim the rear elements ranked L5 (9.8 mm), L4 (9.5 mm), L6 (9.4 mm), L7 (7.2 mm). They now rank L4 (10.8 mm), L5 (10.3 mm), L6 (9.7 mm), L7 (7.8 mm). L4 passes L5 because the stated ray is higher at surface 7 (10.762 mm) than anywhere on L5 (10.201 mm); keeping L5 the larger would mean raising it past its own ray height. Fig. 9 draws the same order as the file now has.
- L4, L5 and L6 had one value for both surfaces. Their front and rear semi-diameters now differ by 0.1, 0.5 and 0.3 mm, because each surface rises only to its own ray height. L7 keeps one value.

Traced at infinity focus, wide open:

| Station | Values before 2026-10-08 | Fig. 9 values | Values now | Limiter now |
|---|---|---|---|---|
| 36 mm | f/4.10 → f/4.10, iris (`STO`) | f/4.10 → f/4.10, iris (`STO`) | f/4.10 → f/4.10 (0.0 %) | iris (`STO`) |
| 68.5 mm | f/4.10 → f/4.61 (+12.4 %), rim of surface 7 (sd 9.5 mm) | f/4.10 → f/4.10, iris (`STO`) | f/4.10 → f/4.10 (0.0 %) | iris (`STO`) |

Run on the file as it now stands, the proposal listing names no surface below the stated ray.

Validation of the new values: the file builds and the validator reports nothing. Edge thickness, taken at the smaller of each element's two semi-diameters, is 1.594 mm (L4, at 10.7 mm), 1.887 mm (L5, at 9.8 mm), 9.178 mm (L6, at 9.4 mm) and 1.470 mm (L7). Rim slope is 15.8° at surface 7, 29.1° at surface 9, 34.6° at surface 12 and 15.9° at surface 14, against the 64.2° limit. The cross-gap intrusion is negative across d8, 0.471 mm of the 0.576 mm allowed across d10, and 2.280 mm of 6.030 mm across d12. The element outlines need no render trim at either endpoint or at mid-zoom.

Moved with the values, given as before 2026-10-08 → with the Fig. 9 values → now:

- Minimum element edge thickness: 1.585461 mm (L7) → 1.370140 mm (L4) → 1.470464 mm (L7).
- Smallest cross-gap clearance: 0.064313 mm across d2 → 0.055314 mm across d10 → 0.064313 mm across d2 (surfaces 2 and 3, 4.240 mm gap). The d10 clearance itself is 0.133831 → 0.055314 → 0.105140 mm.
- Chief-ray-limited half-field computed by the engine: 32.128° → 34.398° → 34.228° at 36 mm and 23.471° → 26.313° → 25.192° at 68.5 mm, so the diagram's default 0.60-field fan launches at 19.28° → 20.64° → 20.54° and at 14.08° → 15.79° → 15.12°. Its lowest ray (pupil fraction -0.75) at 36 mm: cut at surface 14 by 0.137 mm → passes → passes. At 68.5 mm it is cut at surface 13 by 1.780 mm → 1.137 mm → 1.397 mm. The other four rays of the fan pass at both stations in all three states.
- Rewritten to the traced state: the data-file header's stop-model sentences on the 68.5 mm ray and its semi-diameter block, and the note's per-surface clearance table, the two paragraphs after it and the semi-diameter sentences under Verification Summary and Modeling Limits.

Confirmed unchanged:

- The `STO` row (sd 7.752338441 mm), the semi-diameters of surfaces 1-6, every radius, thickness and index, the `var` gaps, `nominalFno` 4.1, `fstopSeries`, and the comment above `nominalFno`.
- Wide-open iris radii 7.7842 mm at 36 mm and 10.3442 mm at 68.5 mm; computed focal lengths 35.9998 and 68.5002 mm.
- Both stations trace f/4.10 on the iris, as they did with the Fig. 9 values, so the note's aperture table stands as written.
- Traced field coverage: 100 % at 36 mm (32.2°) and at 68.5 mm (17.4°), corner chief ray clear at 21.65 mm. Image-circle floor: no surface listed.
- Maximum rim angle 48.515° at surface 2, and the wide-field clip at surface 3, which involves only surfaces ahead of the stop: the 32.25° bundle through the traced iris still reads 18.20 mm there against the 17.6 mm rim.

Left open:

- L2 is drawn at about 18.6 mm against 17.6 mm in the file. No front-group rim clips the stated beam, so the rule does not reach it.
- The rendered cross-section at 36 mm was compared by eye with Fig. 9 (figure-audit procedure, Step 8): the element order L4 > L5 > L6 > L7 and the rear group at about half the height of L1 agree with the drawing. The chamfer the figure draws on the rear of L6 is not modeled; surface 12 carries its inferred 9.4 mm.

Superseded in part the same day: L4 and L5 carry one value on both faces again and L6 stays face by face, as the section that follows sets out.

## 2026-10-08 — Square rims kept square

Rule (maintainer, 2026-10-08, the square-rim point of "A clipped stated beam" in the figure-audit procedure): an element whose two faces carried one value before any rim was raised, and which the patent figure draws with a square-cut rim, keeps one value, both faces taking the higher of the two face-by-face values; an element the figure draws stepped or chamfered stays face by face. The face-by-face values are those of the section above and do not move. Both squared values pass the validator at the default `gapSagFrac` of 0.90, so the cross-gap point of the rule is not used and `gapSagFrac` is not set.

Starting point. Before any rim was raised (commit d36f44b3) every rear element had one value on both faces: L4 9.5 mm, L5 9.8 mm, L6 9.4 mm, L7 7.2 mm. The proposal listing (`audit:aperture` with `--raise`) on that file gives 7: 9.5 → 10.8, 8: 9.5 → 10.7, 9: 9.8 → 10.3, 11: 9.4 → 9.7, 13: 7.2 → 7.8, 14: 7.2 → 7.8, and as the height a square rim would carry 7/8: 10.8, 9/10: 10.3, 11/12: 9.7. On the file as the section above left it the listing names no surface.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (L4 front) | 10.8 mm | 10.8 mm | Unchanged: stated ray reaches 10.762 mm at 68.5 mm |
| Surface 8 `sd` (L4 rear) | 10.7 mm | 10.8 mm | Squared to the higher face, figure draws a square rim; the higher face is surface 7 |
| Surface 9 `sd` (L5 front) | 10.3 mm | 10.3 mm | Unchanged: stated ray reaches 10.201 mm at 68.5 mm |
| Surface 10 `sd` (L5 rear) | 9.8 mm | 10.3 mm | Squared to the higher face, figure draws a square rim; the higher face is surface 9 |
| Surface 11 `sd` (L6 front) | 9.7 mm | 9.7 mm | Unchanged: stated ray reaches 9.612 mm at 68.5 mm; figure draws L6 chamfered, so face by face |
| Surface 12 `sd` (L6 rear) | 9.4 mm | 9.4 mm | Unchanged: stated ray reaches 7.731 mm at 68.5 mm and never clipped; figure draws L6 chamfered, so face by face |
| Surface 13 `sd` (L7 front) | 7.8 mm | 7.8 mm | Unchanged: stated ray reaches 7.714 mm at 68.5 mm; already one value with surface 14 |
| Surface 14 `sd` (L7 rear) | 7.8 mm | 7.8 mm | Unchanged: stated ray reaches 7.755 mm at 68.5 mm |

Against the values from before 2026-10-08, surface 8 is now +13.7 % and surface 10 +5.1 %, both under the roughly 15 % above which the procedure asks for the figure to be read first. Neither squared value exceeds what Fig. 9 draws for its element (10.8 mm against 11.3 mm, 10.3 mm against 10.7 mm). At 68.5 mm surface 8 now stands 0.119 mm outside the stated ray and surface 10 0.602 mm outside it; the other six clearances are as the section above gives them.

How Fig. 9 draws each rear rim (sheet 5, PDF p. 6; native 300 dpi one-bit scan, with 600 and 1200 dpi renders of the rear group for the corners). A half-height is half the distance between the centres of the upper and lower rim lines, given on the vertex scale (15.25 px/mm) and the curvature scale (15.17 px/mm):

- L4 (surfaces 7, 8): square-cut. One straight rim line parallel to the axis joins the ends of the r7 and r8 arcs, above and below. Both faces end at 171.6 px, 11.25 and 11.31 mm.
- L5 (surfaces 9, 10): square-cut, with a cut rear corner. A rim line parallel to the axis runs from the end of the r9 arc toward the r10 line, about 22 px long (1.44 mm); the prescription gives a 1.42 mm edge at that height. The rim line stands at 163.6 px, 10.73 and 10.78 mm. The r10 line, drawn in one stroke with the r11 line, runs straight as far as L6's rim height and from there slants to the end of L5's rim line, about 5 px toward the object over the 8 to 9 px (0.5 to 0.6 mm) between the two rim lines. The slant is drawn in both halves: in the upper half its outer edge steps from x = 1500 on row 746 to x = 1504 on row 750 and then runs into the two leader lines, in the lower half from x = 1498 on row 1068 to x = 1489 on row 1076. The cut is little more than the 5 px line width and leaves the rear face about 5 % under the front one. That is inside the roughly 15 % the procedure treats as drawing noise, and a third of the 27 px (1.8 mm, 18 %) chamfer on L6, so L5 is read as square-cut.
- L6 (surfaces 11, 12): chamfered at the rear. The front face ends at the outer rim line, 154.6 px, 10.14 and 10.19 mm. From the rear end of that rim line a straight chamfer runs inward to the corner where the r12 arc ends, at about 127 px, 8.3 to 8.4 mm. The rear face ends about 1.8 mm lower than the front face.
- L7 (surfaces 13, 14): square-cut. One rim line joins the r13 and r14 lines, above and below. Both faces end at 125.2 px, 8.21 and 8.25 mm.

These readings repeat the ones in the sections above within 0.5 px. L4, L5 and L7 are square-cut and had one value before any rim was raised, so each carries one value: L4 10.8 mm, L5 10.3 mm, L7 7.8 mm as it already did. L6 is chamfered, so the listing's square-rim height of 9.7 mm for surfaces 11/12 is not applied; its front stays at 9.7 mm and its rear at 9.4 mm, the same sense as the drawing (front face ending higher than rear).

Facing surfaces. The validator compares two facing surfaces over the band both reach, the smaller of the two semi-diameters, and that band is the same before and after for both gaps the squared faces border:

- d8 (surfaces 8 and 9, 0.100 mm gap, band 10.3 mm): the surfaces curve apart; the rim clearance is 3.172 mm.
- d10 (surfaces 10 and 11, 0.640 mm gap, band 9.7 mm): the two sags take 0.470860 mm, 73.6 % of the gap, against the 0.576 mm the default allows; the rim clearance is 0.169140 mm. Fig. 9 draws the r10 and r11 lines meeting at the rim.

Traced at infinity focus, wide open:

| Station | Stated → traced before | Limiter before | Stated → traced after | Limiter after |
|---|---|---|---|---|
| 36 mm | f/4.10 → f/4.10 (0.0 %) | iris (`STO`) | f/4.10 → f/4.10 (0.0 %) | iris (`STO`) |
| 68.5 mm | f/4.10 → f/4.10 (0.0 %) | iris (`STO`) | f/4.10 → f/4.10 (0.0 %) | iris (`STO`) |

Run on the file as it now stands, the proposal listing names no surface below the stated ray.

Validation of the new values: the file builds and the validator reports nothing. Edge thickness is 1.557 mm (L4, at 10.8 mm; 1.594 mm at the former 10.7 mm), 1.644 mm (L5, at 10.3 mm; 1.887 mm at the former 9.8 mm), 9.178 mm (L6, at 9.4 mm) and 1.470 mm (L7). Rim slope is 4.7° at surface 8 and 3.1° at surface 10, against the 64.2° limit. The element outlines need no render trim at either endpoint or at three zoom positions between them.

Render comparison (figure-audit procedure, Step 8). The lens page was captured at 36 mm, the state Fig. 9 draws, and at 68.5 mm:

- Element order and layout agree with the figure: three front elements, the stop ahead of the rear group, biconvex L4, meniscus L5 close against the thick biconcave L6, and the thin L7 behind the long d12 gap.
- Proportions at 36 mm, as rim height relative to L4: L5 0.95, L6 front 0.90 and L7 0.72 in the render, against 0.95, 0.90 and 0.73 in Fig. 9. L4 stands at 0.50 of L1 in the render and 0.53 in the figure (L1 read at 21.4 mm on 2026-10-07).
- Rims: L4, L5 and L7 are drawn square-cut, as the figure draws them. L5's rim stands 0.6 mm above L6's, as in the figure (10.73 against 10.14 mm on the vertex scale). The cut the figure draws on L5's rear corner is not modeled.
- L6 differs from the figure in its rear corner. The renderer joins the end of surface 11 (9.7 mm) to the end of surface 12 (9.4 mm) with one straight line, a rim that slopes 0.3 mm inward toward the rear. The figure draws a rim parallel to the axis and then a chamfer down to about 8.4 mm, so the rear face of L6 ends at 0.87 of L4's height in the render and at 0.74 in the figure.

Moved with the values:

- Rewritten to the traced state: the data-file header's stop-model sentences on the 68.5 mm ray and the rear-group part of its semi-diameter block, and in the note the surface 8 and surface 10 rows of the clearance table, the paragraph after it and the rear-group sentences under Verification Summary and Modeling Limits.

Confirmed unchanged:

- The `STO` row (sd 7.752338441 mm), the semi-diameters of surfaces 1-7, 9 and 11-14, every radius, thickness and index, the `var` gaps, `nominalFno` 4.1 and `fstopSeries`. No semi-diameter was lowered.
- Wide-open iris radii 7.7842 mm at 36 mm and 10.3442 mm at 68.5 mm; computed focal lengths 35.9998 and 68.5002 mm.
- Minimum element edge thickness 1.470464 mm (L7), maximum rim angle 48.515° at surface 2, and the smallest cross-gap clearance to the 0.90 limit, 0.064313 mm across d2; the d10 clearance to that limit stays 0.105140 mm.
- Traced field coverage: 100 % at 36 mm (32.2°) and at 68.5 mm (17.4°), corner chief ray clear at 21.65 mm. Image-circle floor: no surface listed.
- Chief-ray-limited half-field 34.228° at 36 mm and 25.192° at 68.5 mm, set by surface 14 at both stations, so the default 0.60-field fan still launches at 20.54° and 15.12°. It passes whole at 36 mm; at 68.5 mm its lowest ray (pupil fraction -0.75) is cut at surface 13 by 1.397 mm and the other four pass.

Left open:

- L5's square-cut reading is a judgement on a corner cut of 8 to 9 px. Read as a chamfer, L5 would be sized face by face and surface 10 would stay at 9.8 mm, 0.95 of surface 9, about the ratio at which the figure ends the rear face against the front one (154.6 against 163.6 px).
- The chamfer Fig. 9 draws on the rear of L6 is not modeled. Surface 12 carries 9.4 mm where the figure ends the r12 arc at about 8.4 mm, 11 % lower. That is inside the roughly 15 % at which the rule records a conflict, and the rule never lowers a semi-diameter.
- Every rear rim stands 4 to 5 % under the Fig. 9 reading for its element (10.8 against 11.3 mm, 10.3 against 10.7 mm, 9.7 against 10.2 mm, 7.8 against 8.2 mm). The figure is the check and not the source, so the values stay at the stated ray.
- L2 is drawn at about 18.6 mm against 17.6 mm in the file. No front-group rim clips the stated beam, so the rule does not reach it.
