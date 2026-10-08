# Audit Log — NIKON AI ZOOM-NIKKOR 50-300mm f/4.5 ED

Patent: US 4,189,213 A (Iizuka / Nippon Kogaku K.K., granted 1980-02-19), Example 3; 15-page PDF US_4189213_A.pdf, no certificate of correction.

## 2026-10-08 — Rims raised to the stated on-axis ray

Rule (maintainer, 2026-10-08; figure-audit procedure, "A clipped stated beam"): an inferred rim that clips the on-axis beam of the f-number the source prints is corrected by the change that alters shape and comparative size the least, so only the surfaces that clip move, each rises only to the height the stated on-axis ray reaches there at the station that needs most, rounded up at the precision the file's semi-diameters use, and the patent figure is a check on the result, not the source of the value.

The stated ray is the f/4.5 on-axis marginal ray. The patent prints F/4.5 for the whole 50.000-295.200 range (Example 3 header, col. 12, PDF p. 11) and F 4.5 beside each of the three spherical-aberration plots of FIG. 6 (Sheet 4 of 4, PDF p. 5); it prints no semi-diameter, clear aperture or stop diameter. The file's semi-diameters are written to 0.1 mm.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 19 `sd` (L12 front) | 11.0 mm | 12.6 mm | Stated ray reaches 12.533 mm at 122.458 mm, the station that needs most (12.516 mm at 50 mm, 12.501 mm at 295.2 mm); 11.0 mm clipped it at all three |
| Surface 20 `sd` (L12 rear) | 11.0 mm | 12.4 mm | Stated ray reaches 12.360 mm at 122.458 mm (12.344 mm at 50 mm, 12.330 mm at 295.2 mm); 11.0 mm clipped it at all three |

The raises are +14.5 % (surface 19) and +12.7 % (surface 20), under the roughly 15 % above which the procedure asks for the figure to be read before anything changes; the figure was read anyway (below). Each value is the smallest 0.1 mm step that passes the ray: 12.5 and 12.3 mm are below it. The rims stand 0.067 mm and 0.040 mm outside the ray. A separate meridional real-ray trace of the prescription gives the same axial marginal maxima, 12.53 and 12.36 mm. No other surface was below the stated ray: the nearest are surface 5 (1.255 mm outside it at 295.2 mm) and surface 18 (1.392 mm).

Traced at infinity focus, wide open, fixed iris:

| Station | Stated → traced before | Limiter before | Stated → traced after | Limiter after |
|---|---|---|---|---|
| 50 mm | f/4.50 → f/5.11 (+13.5 %) | rim, surface 19 (sd 11.0 mm) | f/4.50 → f/4.50 (0.0 %) | iris (`STO`) |
| 122.458 mm | f/4.50 → f/5.11 (+13.6 %) | rim, surface 19 (sd 11.0 mm) | f/4.50 → f/4.51 (+0.1 %) | iris (`STO`) |
| 295.2 mm | f/4.50 → f/5.10 (+13.4 %) | rim, surface 19 (sd 11.0 mm) | f/4.50 → f/4.49 (-0.1 %) | iris (`STO`) |

The ±0.1 % that remains is the fixed iris itself: it is opened to the real-ray f/4.5 radius at 50 mm, 12.7356 mm, while 122.458 mm and 295.2 mm would need 12.7524 mm and 12.7208 mm (f/4.506 and f/4.495 on the iris alone). Run on the file as it now stands, the proposal listing names no surface below the stated ray.

**Figure check.** FIG. 3 (Sheet 1 of 4, PDF p. 2) is the Example 3 section; its surfaces are labelled r1-r26 and its spacings d1-d25, the surface count of Example 3 alone. The page is a 2320 × 3408 px one-bit scan placed on an A4 page at 281 × 291 ppi, so any page render is stretched 3.8 % more across than down. Heights and vertex positions were therefore read on the native pixels, with 600 dpi and larger renders used only to identify the lines. The axis runs 0.37° off horizontal. A height is half the distance between the centres of an element's upper and lower rim lines.

- Scale, from axial vertex spacings of the printed prescription inside each rigid group: r1 to r5, 132.75 px for 23.2 mm, 5.72 px/mm; r6 to r11, 122 px for 22.2 mm, 5.50 px/mm; r12 to r18, 106 px for 18.4 mm, 5.76 px/mm; r19 to r26, 388 px for 70.563 mm, 5.50 px/mm. The median is 5.61 px/mm. The short span around the element itself, r19 to r22, is 47.5 px for 8.163 mm, 5.82 px/mm. The whole span r1 to r26, which no zoom state changes because G1, G4 and G5 are fixed, is 1304.5 px for 241.80 mm, 5.39 px/mm, so the air spaces between groups are drawn compressed against the groups. The drawing is a schematic: thin elements and narrow air gaps are drawn thicker than scale, so the group scales differ by up to 6 % and every reading carries about that much.
- Zoom state: on the median scale the three variable spaces are drawn at 40.0, 44.7 and 14.3 mm (d5, d11, d18). The printed rows are 1.879 / 102.313 / 3.249 at 50.000, 41.998 / 47.342 / 18.099 at 122.458 and 66.699 / 0.629 / 40.111 at 295.200, so the figure is nearest the 122.458 mm state.
- L12 (the element raised): upper rim line at y = 2544-2546, lower rim line (hatched) at y = 2694-2698, half-height 75.5 px. That is 13.5 mm on the median scale, 13.0 to 13.7 mm across the five group scales above, and 14.0 mm on the whole r1 to r26 span.
- Neighbours on the same scales: L13 75.0 px, 13.4 mm (12.9-13.6); the inner tips of the stop marks ahead of r19 79 px, 14.1 mm (13.6-14.4); the D2 doublet at the rear of G3 117.75 px, 21.0 mm (20.2-21.4); L14 88 px, 15.7 mm (15.1-16.0).
- Result: the figure draws L12 taller than the stated ray needs, by 7 % on the median scale and by 3 % on the scale that gives the smallest reading, so there is no conflict and both surfaces were raised. The raised values stay below the drawn rim (12.6 and 12.4 mm against 13.0-13.7 mm). The former 11.0 mm was 18 % below the drawn rim (15 to 20 % across the scales).

**Render comparison.** The cross-section was screenshotted from the running site at zoom 122.458 mm (the state FIG. 3 is nearest) and at 50 mm, before and after the edit, and compared with FIG. 3.

- Element order agrees: D1 (L1 + L2) and L3; L4 and T1 (L5 + L6 + L7); L8, L9 and D2 (L10 + L11); the stop; L12; L13; the long air space; L14 and L15.
- Group heights agree in order: G1 tallest, G2 and G3 next, L12 the smallest element of the lens, the rear of G5 between G4 and G3.
- L12 now reaches the inner tips of the rendered stop marks, 0.136 mm inside the 12.7356 mm iris radius at its front rim; before, it ended 1.736 mm inside them. FIG. 3 draws the same relation, the stop marks opening 5 % wider than L12.
- Where the render departs from the drawing, on surfaces this pass did not touch: L13 is drawn level with L12 and rendered 1.4 mm taller than L12's front rim (14.0 mm in the file); L15 is drawn taller than L14 (18.2 against 15.7 mm) and both carry 15.5 mm; L4 is drawn taller than T1 (25.2 against 23.1 mm, with a stepped rim; its rim lines are at y = 2475-2477 and 2757-2761, half-height 141.5 px, and the group-2 bracket runs 20 px above the upper one) and carries 22.0 / 21.0 mm against T1's 21.0-22.5 mm; L1 + L2 are drawn at 32.6 mm and L3 at 29.4 mm against 35.0 / 35.0 / 34.0 mm and 34.0 / 33.0 mm.
- No element outline needs a render trim at any of the three zoom stations, at infinity or at 2.5 m.

**Comparative size.**

- No element changes rank. L12 was the smallest element at 11.0 mm and still is at 12.6 / 12.4 mm; the next is L13 at 14.0 mm. It stays shorter than both neighbours (surface 18 at 20.5 mm, surface 21 at 14.0 mm) and inside the iris radius.
- L12's two faces had one value and now differ by 0.2 mm, because each rises only to its own ray height. FIG. 3 draws L12 with one rim height on both faces.
- Ratios, figure / file before / file now: L12 to L13 1.01 / 0.79 / 0.90 (surface 19 to 21); L12 to the rear of G3 0.64 / 0.54 / 0.61 (to surface 18); L12 to L14 0.86 / 0.71 / 0.81; L12 to L1 0.41 / 0.31 / 0.36; L12 to the stop opening 0.96 / 0.86 / 0.99. Each moves toward the drawing and none passes it by more than the reading error.

**Geometry at the new values.** The file builds and the validator reports nothing.

- L12 edge thickness, at the smaller of its two semi-diameters: 3.130 mm (at 11.0 mm) → 3.437 mm (at 12.4 mm).
- Rim slope: 5.4° → 6.2° at surface 19 and 6.3° → 7.1° at surface 20, against the 64.2° limit.
- Air gap d20 to L13 opens outward (the cross-gap intrusion is negative): 0.963 mm on axis, 2.197 mm at the former 11.0 mm rim, 2.549 mm at the 12.4 mm rim.
- Surface 19's rim sits 1.315 mm behind the stop plane (1.479 mm at 11.0 mm).

**Prose moved with the values.**

- Data-file header: a stop paragraph giving the paraxial and real-ray f/4.5 radii and the traced f-number and limiter per station; the semi-diameter paragraph, which now states the two L12 values and their source. The spectral-limitation paragraph was rewrapped because one line was 121 columns wide; its text is unchanged.
- Analysis note: the stop paragraph under Optical Architecture labels the 12.72440 / 12.72462 / 12.72475 mm figures as paraxial and adds the traced result; the semi-diameter paragraph under Verification Summary states the present G1, G4 and G5 values.
- Carried here from that paragraph, which described an earlier figure pass: a 600-dpi reading of FIG. 3 replaced a 45 / 45 / 44 / 44 / 42 mm G1 profile with 35 / 35 / 34 / 34 / 33 mm and an 11.5-12.5 mm G5 profile with 14 / 14 / 15.5 / 15.5 / 15.5 / 15.5 mm, keeping the G2-G4 rims. The 11.0 mm on L12 therefore predates that pass.

**Confirmed unchanged.**

- The `STO` row (sd 12.72462 mm, 2.0 mm ahead of surface 19), every other semi-diameter, every radius, thickness and index, the `var` gaps, `nominalFno` 4.5, `zoomApertureModel` and `fstopSeries`.
- Wide-open iris radius 12.7356 mm; computed focal lengths 50.0005 / 122.4599 / 295.2062 mm; engine half-fields 22.446° / 10.049° / 4.245°.
- Traced field coverage: 99 % at 50 mm (21.43 of 21.65 mm; the corner chief ray needs 22.21 mm at surface 6 against its 22.0 mm rim), 100 % at 122.458 mm and at 295.2 mm. Image-circle floor: no surface listed.
- Minimum element edge thickness 1.037 mm (L8); steepest rim 49.4° at surface 23; largest cross-gap intrusion 0.879 of the gap, across the fixed 9.6 mm gap d7 (the same at every station), against the 0.90 allowed.

**Left open.**

- L13 (14.0 mm) is drawn level with L12 at about 13.4 mm. It does not clip the stated ray (12.369 mm needed), so the rule does not reach it.
- L15 is drawn about 2.5 mm taller than L14, L4 about 2 mm taller than T1, and G1 about 2.4 mm (L1 + L2) to 4.6 mm (L3) shorter than the file. None clips the stated ray; a figure pass on those rims would be a separate change.
- Surface 6 (22.0 mm) stops the corner chief ray at 50 mm, which needs 22.21 mm there; that is the 99 % field coverage above. It is not an on-axis clip, so the rule does not reach it. FIG. 3 draws L4 at about 25 mm.
- `focalLengthDesign` stores the recomputed 50.000485 / 295.206225 mm while the header calls the design endpoints the patent's 50.000 and 295.200 mm (noted by the 2026-10-07 patent audit; 0.002 % at most).

L12's two faces carry one value again: see "2026-10-08 — Square rims kept square" below, which replaces the 12.4 mm on surface 20 and the figures in this section that depend on it.

## 2026-10-08 — Square rims kept square

Rule (maintainer, 2026-10-08; figure-audit procedure, "A clipped stated beam", "Square rims stay square"): an element whose two faces carried one value before any rim was raised, and which the patent figure draws with a square-cut rim, keeps one value, and both faces take the higher of the two heights the stated on-axis ray needs. Applied here: the face-by-face ray heights of the section above (point 1) and one square rim on L12 (point 2). The cross-gap limit refuses nothing, so `gapSagFrac` is not set and the 0.90 default stands (point 3 not used). FIG. 3 draws L12 taller than the value, so nothing is held back (point 4).

Starting point: in the file as it stood before any rim was raised (commit 2c813a34), surfaces 19 and 20 both carried 11.0 mm. The proposal listing run on a copy of that file gives 19: 11 → 12.6 and 20: 11 → 12.4 (ray heights 12.533 and 12.360 mm), a square-rim height of 12.6 mm for the pair 19 / 20, a largest raise of 14.5 % and no flag. On the file as this pass found it (12.6 / 12.4 mm) the listing named no surface.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 20 `sd` (L12 rear) | 12.4 mm | 12.6 mm | Squared to the higher face, figure draws a square rim. The higher face is surface 19, where the stated ray reaches 12.533 mm at 122.458 mm, the station that needs most (12.516 mm at 50 mm, 12.501 mm at 295.2 mm); surface 20's own ray height is 12.360 mm at 122.458 mm (12.344 mm, 12.330 mm) |

Surface 19 keeps 12.6 mm. L12's faces were 11.0 / 11.0 mm before any rim work, 12.6 / 12.4 mm after the face-by-face raise, and are 12.6 / 12.6 mm now.

**How FIG. 3 draws the rim.** FIG. 3 (Sheet 1 of 4, PDF p. 2) was read on the native 2320 × 3408 px scan; renders at 300, 600 and 1200 dpi were used to identify the lines. L12 is the only element with a raised face.

- L12 (surfaces 19 / 20): square-cut. One straight rim line closes the element at the top and one at the bottom, each running from the end of the front face (x = 1417) to the end of the rear face (x = 1450). The top line lies on rows y = 2544-2546 at the front corner and 2545-2547 at the rear corner; the bottom line lies on rows 2694-2698 and 2694-2697; the axis is on rows 2621-2622 under both. The drawn half-heights are 75.5 px at the front face and 74.75 px at the rear face, 13.5 mm and 13.3 mm on the 5.61 px/mm median scale of the section above. The 0.75 px between them is inside the 3-5 px width of the rim lines. Neither side shows a step, a notch or a chamfer.
- The same sheet draws a step where it means one: L4 has a flat land outside its rear face, whose curve ends below the element's outer edge. The drawing therefore distinguishes a stepped rim from a square one, and L12's is square.

**Cross-gap.** No pair needs `gapSagFrac`. The candidate (surface 20 at 12.6 mm) was built in memory at the default 0.90 before the file was edited, and the validator reported nothing. Surface 20 faces surface 21 across d20, 0.963 mm on axis; both curve toward the image, so the gap opens outward. Over the shared 12.6 mm band the cross-gap intrusion is -1.640 mm (-1.586 mm at 12.4 mm) and the rims stand 2.603 mm apart (2.549 mm at 12.4 mm). The largest share in the lens is unchanged: 0.879 of the fixed 9.6 mm gap d7, between surfaces 7 and 8.

Traced at infinity focus, wide open, fixed iris:

| Station | Stated → traced before | Limiter before | Stated → traced after | Limiter after |
|---|---|---|---|---|
| 50 mm | f/4.50 → f/4.50 (0.0 %) | iris (`STO`) | f/4.50 → f/4.50 (0.0 %) | iris (`STO`) |
| 122.458 mm | f/4.50 → f/4.51 (+0.1 %) | iris (`STO`) | f/4.50 → f/4.51 (+0.1 %) | iris (`STO`) |
| 295.2 mm | f/4.50 → f/4.49 (-0.1 %) | iris (`STO`) | f/4.50 → f/4.49 (-0.1 %) | iris (`STO`) |

The f-numbers do not move, because surface 20 was already outside the stated ray. The ±0.1 % is the fixed iris, opened to the real-ray f/4.5 radius at 50 mm (12.7356 mm; f/4.506 and f/4.495 on the iris alone at the other two stations), not a rim. Run on the edited file, the proposal listing names no surface. At 122.458 mm, the tightest station, the rims stand outside the stated ray by 0.067 mm at surface 19 and 0.240 mm at surface 20 (0.040 mm before).

**Geometry at the new value.** The file builds and the validator reports nothing.

- L12 edge thickness at its rim: 3.437 mm (at 12.4 mm) → 3.484 mm (at 12.6 mm).
- Rim slope at surface 20: 7.1° → 7.3°. Surface 19 stays at 6.2°. The limit is 64.2°.
- Both L12 rims end 0.136 mm inside the 12.7356 mm iris radius. Surface 19's rim is 1.315 mm behind the stop plane, as before.
- Unchanged across the lens: minimum element edge thickness 1.037 mm (L8); steepest rim 49.4° at surface 23.
- Traced field coverage is unchanged: 99 % at 50 mm (21.43 of 21.65 mm; the corner chief ray needs 22.21 mm at surface 6 against its 22.0 mm rim), 100 % at 122.458 mm and at 295.2 mm. Image-circle floor: no surface listed.
- No element outline needs a render trim at any of the three zoom stations, at infinity, at mid focus or at 2.5 m.

**Render comparison.** The cross-section was screenshotted from the running site at 122.458 mm (the state FIG. 3 is nearest) and at 295.2 mm (the long end), before the edit and after it, the latter also at four times the pixel density, and compared with FIG. 3.

- L12 is rendered with one horizontal rim line across both faces, top and bottom, as FIG. 3 draws it. Before, its rear face ended 0.2 mm below its front face.
- Element order agrees at both states: D1 (L1 + L2) and L3; L4 and T1 (L5 + L6 + L7); L8, L9 and D2 (L10 + L11); the stop; L12; L13; the long air space; L14 and L15. At 295.2 mm G2 and G3 stand closed up (d11 0.629 mm) with 38.111 mm of air from G3 to the stop; G4 and G5 do not move, so L12 and its neighbours look the same at both states.
- Proportions: L12 is still the smallest element and ends just inside the stop marks, as drawn. L12 to L13 is 0.90 on both faces (the rear face was 0.89) against 1.01 drawn: L13 (14.0 mm) is rendered 1.4 mm taller than L12, where FIG. 3 draws the two level.
- The departures recorded in the section above, on surfaces neither pass touched, are as they were: L15 drawn taller than L14, L4 taller than T1, G1 shorter than the file.

**Prose moved with the values.** The data-file header's semi-diameter paragraph and the semi-diameter paragraph under Verification Summary in the analysis note state the one 12.6 mm value, its source, and the 3.484 mm edge thickness, 6.2° / 7.3° rim slopes and 2.603 mm rim gap that follow from it.

**Confirmed unchanged.** The `STO` row, surface 19 and every other semi-diameter, every radius, thickness and index, the `var` gaps, `nominalFno` 4.5, `zoomApertureModel`, `fstopSeries` and the display fields; no `gapSagFrac` property was added.

**Left open.**

- The open items of the section above stand: L13 against L12, L15 against L14, L4 against T1, G1, surface 6 at 50 mm, and `focalLengthDesign`.
- FIG. 3 draws D1, L3 and D2 each with one rim line, and the file steps them: 35.0 / 35.0 / 34.0 mm on surfaces 1-3, 34.0 / 33.0 mm on L3, 22.0 / 21.0 / 20.5 mm on surfaces 16-18. None of those faces was raised and none clips the stated ray, so the square-rim rule does not reach them; squaring them would be a figure pass of its own.
