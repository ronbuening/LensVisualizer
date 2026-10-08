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
