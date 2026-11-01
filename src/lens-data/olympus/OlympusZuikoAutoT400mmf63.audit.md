# Audit Log — OLYMPUS ZUIKO AUTO-T 400mm f/6.3

Patent: US 3,864,027, Example 1 (Table 1, repeated in claim 2; section in Fig. 1)

## 2026-11-01 — Deployment validation and cleanup

### Patent re-read

Read from the USPTO image scan at native resolution, which has no text layer: 10 radii, 9 spacings, 5 n and 5 ν, against Table 1 and the claim 2 repeat. Mismatches: none. Every file value is the printed value × 400. The stop split, 96.83472 + 45.56928 mm, sums to the printed d6 × 400, 142.404 mm. There are no aspheres or printed variable gaps. The front page agrees with the file: number, 4 February 1975, Kenichi Harada, Olympus Optical.

Patent slips, none touching Example 1's prescription:

- Fig. 5 prints y′ = 0.0054f, NA:0.0064 and NA:0.00045 for 0.054f, 0.064 and 0.045. The 0.7-zone label, y′ = 0.0378f, and the trace both fix the first.
- Table 2 prints r8 = 11.22627 and claim 3 prints 1.22627. Only the second gives f = 1 and t = 0.75, so Table 2 is the misprint.
- Claim 2's preamble and column 7 print 60°10′ for 6°10′.
- Example 3's Petzval sum prints as −0.006; the prescription gives −0.060.

### Patent vs model first-order values

| Quantity | Patent | Model |
| --- | --- | --- |
| Focal length | f = 1 | 399.98 mm (0.99995 × 400) |
| F-number | F/6.3 | 6.30 paraxial; working 6.35 at the stop |
| Telephoto ratio | t = 0.75 | B/f = 0.7509 |
| Back focus | not printed | 96.6325 mm, paraxial |
| Front vertex to image | not printed | 300.36 mm |
| Half-field | 3°05′ (6°11′ full in the abstract) | 3.0833° |
| Petzval sum | −0.157 | −0.157 |
| f1 / f2 / f3 | 0.3 / −0.608 / −2.909 | 0.300 / −0.608 / −2.909 |
| Conditions (1) to (5) | 1.1591 / 0 / 0.0269 / 0.103 / 2.301 | 1.1591 / 0 / 0.0269 / 0.103 / 2.301 |

The package's last gap of 96.272 mm came from the rounded 0.75 and sat 0.3605 mm ahead of paraxial focus. The patent's curves are drawn from paraxial focus, so the gap moved to the paraxial value. At 3°05′ from that plane, Δm/ΔS trace to −0.00028f/+0.00008f against about −0.00026f/+0.00008f read from Fig. 4c. Distortion traces to +0.35 % against about +0.38 % in Fig. 4d, where the old plane gave +0.13 %. Patent values here are pixel reads of the plots.

The stop is inferred. Fig. 1's mark measures 0.683 of d6, and the Fig. 4c curves fit a stop at 0.67 to 0.69 and clearly miss at 0.5 and 0.9.

Rims measured on Fig. 1 at 4.50 px/mm, taken from S1 to M over 300.36 mm: L1 34.3 mm (file 34.29), L2 and L3 30.2 (30.00), L4 18.3 (18.21), S9 18.2 (18.21). S10 was the largest difference, drawn near 18.2 against the package's 16.59, and the figure draws L5 with one continuous edge, so S10 was raised to S9's height. Corner illumination stayed at 74.8 % at 3.1°.

Unit focus reproduces Fig. 5 at 1/10×: NA 0.0639, Δm −0.00036f, ΔS +0.00003f, distortion +0.18 %. Object to image at 1/10× is 4.999 m. The near gap, 136.619 mm, is solved for 5.0 m, and probe.mjs reports 5000.00 mm at m = −0.1000.

At the current plane 3°05′ reaches 21.62 mm, 0.03 mm (0.13 %) short of the viewer's 21.65 mm corner.

The tool clearap.mjs reports ω = 0.57° on this lens whatever `--Y` is given, so its BLOCKS-CHIEF flags were disregarded. Field clearance came from a separate sphere and Snell trace, which matched the engine's EFL and BFD and the package's 21.5739 mm chief height at the old plane.

### Public diagram comparison

The coordinator viewed the Late 0173 catalogue, printed p. 54, and measured it; the PDF was not downloaded or re-measured here. The page prints "6 elements in 5 groups", 1300 g, 255 mm, 80 mm, 72 mm filter, 5 m, f/6.3–32, and its section draws five separate elements. At 1.98 px/mm, in pixel coordinates with L1's front near x = 93: L3 rear 174 (model 174), S7 455 (456), S9 485 (486), S10 498 (496). L1's outline is about 34.6 mm semi-diameter (model 34.29). The model therefore matches the drawing within 1–2 px, and the page's text count is unexplained.

The patent family is DE 2 323 383 A1 (same three five-lens examples at f = 1, no millimetre length) and JP S49-12818 A / JP S51-16135 B2 (text unavailable). The FR entry Google lists is an unrelated mislink. The search found no six-element Olympus design for this lens; it was limited, and US 3,966,307 (five lenses) was seen only in summary.

### Fields changed

Data fix commits: last gap 96.272 → 96.6325; S10 sd 16.594 → 18.2057; closeFocusM 1e15 → 5 with `gaps` BF [96.6325, 136.619]; L3 glass S-FTM16 → FF5, Δν 0.15 against 0.29. J-F16 lists 35.27 and is not in the repo catalog. Stem, key, name and the other glass labels were set earlier on the branch.

This pass: header comment, `subtitle`, `catalog.specs`, element `role`, `focus.description`, and `groups` FRONT and REAR for the patent's F and R. Analysis rewritten for the new image plane, unit focus and glass labels. Removed from it: the MTF research, the process and package text, the Drive and hash references, and the 300 mm-plane and "no movement law" statements. Dropped as unsupported: the claim that Fig. 1 is not uniformly scaled, since d6 and the back focus give one scale within 0.1 % and the rims agree at it.

### Open

- Open: the catalogue's "6 elements in 5 groups" is not explained. No redesign is claimed.
- The Early catalogue (printed p. 54: 5 elements in 5 groups, 1400 g, 255 mm) and the OM-10 FC manual table (printed p. 41: Zuiko MC 400mm F6.3, 5-5, 1300 g, 256 mm) were read from their page images. Retail 5/5 comes from search listings.
- Open: the production focusing mechanism is undocumented. Unit focus is inferred from Fig. 5, and the 5 m state is not a certified conjugate, so no `conjugates` or `published` rows were added.

## 2026-11-01 — Semi-diameter pass against the patent figure

No `sd`, `rimExtensionSd`, `rimCutDepthMm` or `innerSd` changed. The earlier rim readings hold. One analysis sentence on which rims vignette was corrected.

### Source and scale

Source: `patents/US3864027.pdf`, page 2 (sheet 1), Fig. 1, read at the scan's native 2320 × 3408 px. The drawn axis tilts 0.38° on the page and was removed. Strokes are about 5.5 px wide, so positions are stroke centres, and each rim height is half the top-to-bottom distance, which cancels any offset of the drawn axis line.

Along the axis: S1 to M is 1352 px over 300.36 mm, 4.50 px/mm. S1 to S7 gives 4.50 and S1 to S10 gives 4.51. Drawn centre thicknesses run 0.3 to 1.1 mm over the table (L1 13.1 against 11.98 mm).

Across the axis, circle fits to each drawn arc give these radii at 4.50 px/mm, and this implied cross-axis scale if the arc were true to the printed R:

| Surface | Printed R (mm) | Drawn R (mm) | Implied px/mm |
| --- | --- | --- | --- |
| S1 | 88.82 | 95 | 4.66 |
| S2 | −164.20 | −166 | 4.53 |
| S3 | −127.76 | −156 | 4.97 |
| S4 | −437.64 | −405 | 4.33 |
| S7 | −51.62 | −43 | 4.11 |
| S10 | −96.53 | −51 | 3.26 |

The scatter has no common factor. The median is 4.43, and the two longest arcs, S1 and S2, read 4.53 and 4.66, so Fig. 1 is not anamorphic at a level that moves a rim. The arcs are freehand approximations: S10 is drawn nearly twice as curved as printed, and the flat S6 carries 3.5 px of drawn sag. M's half-height, 99.5 px, gives 4.60 px/mm against the 21.62 mm image height. D's opening, 67.5 px, reads 15.0 mm against the 13.84 mm stop and was treated as schematic. The axial beam also bounds the scale: L1 at 154.5 px must reach 31.74 mm and L2 at 136.25 px must reach 28.22 mm, so the cross scale cannot exceed 4.83 px/mm. Even that limit moves a rim by only 7 %, inside the noise band.

### Rims against the figure

| Surfaces | File (mm) | Fig. 1 half-height (px) | Fig. 1 (mm) | Figure / file | Axial marginal (mm) | Corner chief (mm) |
| --- | --- | --- | --- | --- | --- | --- |
| S1, S2 | 34.29 | 154.5 | 34.33 | 1.00 | 31.74, 31.36 | 16.56, 15.61 |
| S3, S4 | 30.00 | 136.25 | 30.28 | 1.01 | 28.22, 27.64 | 13.48, 12.97 |
| S5, S6 | 30.00 | 136.25 | 30.28 | 1.01 | 27.28, 26.55 | 12.69, 12.02 |
| S7, S8 | 18.21 | 82.25 | 18.28 | 1.00 | 8.13, 8.07 | 5.62, 6.09 |
| S9, S10 | 18.21 | 81.75 | 18.17 | 1.00 | 7.82, 7.72 | 8.44, 8.99 |

All values were retained, each within 1 % of the figure. Step order agrees: L1 above L2 and L3, which the figure draws equal, then L4 and L5, also equal. Height ratios to L1 are 0.882 and 0.532 in the figure against 0.875 and 0.531 in the file.

Rim thicknesses agree with the drawn lands: L2 9.6 mm drawn against 10.00 in the model, L3 9.1 against 9.14, the L2 to L3 rim gap 2.4 against 2.40, L4 8.1 against 7.06, L5 2.7 against 3.16. L1 is the outlier, 3.3 mm drawn against 1.48, of which 1.1 mm is the overdrawn centre thickness. Matching the full drawn land would need a rim near 31.2 mm, below the 31.75 mm entrance-pupil radius. Allowing for the overdrawn thickness it would need about 33.1 mm, a 3.5 % move inside the noise band that takes the corner from 74.8 to 72.0 %, so L1 keeps the height the figure gives. An overlay of the model outline on the figure lies on the drawn strokes at every rim.

The automatic figure screen was not usable here. Its L4 and L5 rows read the r7, r8 and r9 leaders, and its L1 ratio moved from 1.01 to 0.80 with the crop. The hand readings above govern.

### Clearance

With root selection nearest the paraxial pupil, the trace reaches Y = 21.65 mm at ω = 3.09°, against the printed 3°05′, with no blocked chief ray, so clearap2.mjs resolves the 0.57° reading recorded above. The same trace at the 5 m focus gives ω = 2.49° and no flags. The axial beam clears every rim, smallest margin 1.78 mm at S3. The aperture audit reports the lens within 3 % of F/6.3 with no rim limit, and the surface validator, image-circle check and field-coverage check all pass.

Engine half-field stays 3.08° and f-number 6.30. Geometric transmission is unchanged from the package rims, in percent at 0.0, 0.5, 1.0, 1.5, 2.1, 2.6 and 3.1°: 100.0, 99.8, 95.7, 90.7, 85.7, 80.5, 74.8. No face sits below its package value and the file has no lands. The S10 raise above the package value costs nothing, and undoing it wins back 0.0 points.

Trials separate the rims. Opening L1 alone to 36.5 mm lifts only the corner, to 75.2 %. Opening L2 alone to 36 mm gives 91.8 % at 1.5° and 75.1 % at the corner. Opening both gives 94.0 % and 79.2 %. Opening L3 alone changes nothing, and the rear group does not clip: its unvignetted corner bundle is 13.7 to 16.7 mm against 18.21 mm. L1 and L2 therefore set the vignetting together, and the analysis now says so in place of naming L1 alone.

### Maker drawing

The supplied image of the Late catalogue page is a low-resolution check at about 2.0 px/mm, axis vertical, with five separate blue elements: biconvex, concave-fronted meniscus, near plano, then two rear elements. It marks no special glass or aspherical surface. The page text prints 6 elements in 5 groups, as noted above.

Read from that image, L1 is 33.3 to 33.9 mm with a sharp edge, in keeping with the model's 1.48 mm edge. L2 is about 31, L3 about 28.6, L4 about 15.7 and L5 about 17.5 mm, against 30.0, 30.0, 18.21 and 18.21. The maker therefore draws L3 smaller than L2 and L4 smaller than L5, where the patent draws each pair equal. Nothing was fitted to these readings. A trial with L4 at 15.7 and L5 at 17.5 mm leaves the vignetting curve unchanged, so the difference is one of drawing only.

### Live check

The local page rendered at infinity and at 5 m focus, with five separate elements, L1 proud of L2 and L3, square-cut L4 and L5, and the whole lens moving forward by 39.99 mm.
