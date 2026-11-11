# Source and inference audit — SMC Pentax 24mm f/2.8 (US 3,938,883)

## 2026-11-06 — Package history

Source: US 3,938,883 (Yasuo Takahashi, Asahi Kogaku Kogyo, granted 17 February 1976), the sole example in column 3, repeated in the claim, with Fig. 1 and Fig. 2. Printed at F = 100 and 1:2.8, with d-line indices and Abbe numbers. All surfaces spherical.

- Scaling: the package first held the prescription at F = 100, then rescaled it uniformly by 24/100 = 0.24, using the printed F rather than the traced EFL. Every R, d, inferred `sd`, the stop split and the image distance scale together; nd and νd do not. The traced EFL of 23.9937 mm (99.974 at F = 100) was kept, not refitted. r16 = 34680.0 stays curved (8323.2 mm).
- Printed vs derived: R, d, nd and νd are printed. The final gap, 39.981 mm, is the computed paraxial back focus (166.588 at F = 100); the patent's only back-focus figure is the abstract's "about 1.6 times" the focal length. The stop is inferred: of quarter, midpoint and three-quarter positions in d9, the three-quarter one (3.33 + 1.11 mm, z = 21.57 mm) was chosen for chief-ray clearance before any image-quality trace. All `sd` values are inferred from Fig. 1's shapes, a tapering L2, paraxial envelopes and rim and edge-thickness limits; they were not calibrated to the figure.
- Rim variants: rims 5 % larger failed the L4 and L8 edge thickness, the r4 rim slope and cross-gap clearance, and were rejected. Rims 5 % smaller passed but cut more corner light (valid/blocked pupil samples at 0/21/42°: 208/0, 188/20, 108/100 for the chosen rims; 208/0, 178/30, 74/134 at −5 %).
- Focus: static at infinity, `focus.closeFocusM` = 1e15; the maker's 0.25 m was not authored as a state.
- Field: the maker's 84° and Fig. 2's 42° half field were used as the operating field.
- Identity: the package treated the lens as a probable design-family association, based on the 9-element, 8-group count and a section drawing in an Asahi Pentax lens brochure that the package did not include.

## 2026-11-08 — Deployment validation and production cleanup

Source re-read: page images of US 3,938,883 at 200 dpi, PDF page 4 (column 3 table and the claim's table). All 17 radii, 16 spacings and 9 nd/νd pairs agree with the file: each file length divided by 0.24 equals the printed value. No mismatches. The PDF text layer misreads r17 as −46.9 and n7 as 1.8058; the page image prints −146.9 and 1.80518, as the file has. The claim's table agrees with column 3.

Patent vs model (printed at F = 100, model at × 0.24):

| Quantity | Patent | Model |
| --- | --- | --- |
| EFL | F = 100 (24 mm scaled) | 23.9937 mm (99.974 at F = 100, −0.026 %) |
| F-number | 1:2.8 | 2.80; stop radius 5.763 mm, entrance pupil radius 4.285 mm |
| Back focus | about 1.6 F | 39.981 mm = 1.666 F (paraxial; the image plane) |
| Vertex span | 195.4 | 46.896 mm; 86.877 mm to the image |
| Half field | 42° (Fig. 2) | declared 42°, lands at 21.03 mm (97 % of 21.65 mm); corner 42.8°, clear |
| Distortion at 42° | about −2.7 % (Fig. 2(c)) | −2.66 % |
| Spherical aberration | zonal undercorrection (Fig. 2(a)) | +0.111, −0.110, −0.176, −0.136 mm at pupil 1, 0.85, 0.7, 0.5 |
| F1 / F1–5 / F1–6 | 571.4 / −65.4 / 149.3 | 572.06 / −65.28 / 149.01 at F = 100 |

Conditions (1) to (5) all hold: n3 − n4 = 0.1132, ν3 − ν4 = 12.1, (n8 + n9)/2 = 1.60994, (ν8 + ν9)/2 = 57.05. The text has three slips that touch no data: the claim's condition (2) lacks the absolute-value bars of column 2, the condition (4) discussion says F/0.55 for F/0.6, and the condition (5) discussion says 1.55 for 1.5.

Maker-diagram comparison: no Pentax cross-section of the 24mm f/2.8 was available, so the element shapes were not compared with the production lens. Against the patent's Fig. 1 (page 2 at 300 dpi, about 19.1 px/mm from the 46.896 mm vertex span, vertical scale assumed equal to axial), half-spans read L1 about 19.3 mm (model 19.2), L2 front 13.5 (13.2), L6 7.6 (7.92), L7 7.6 (8.4), L8 8.9 (10.08) and L9 10.1 (12.0). The front group fits; the rear group stands 0.3 to 1.9 mm wider than drawn. Axial marginal heights at F/2.8 on r10 to r17 are 6.48, 7.19, 6.85, 7.07, 7.19, 7.47, 7.42 and 7.40 mm, so the figure's rims would still pass the axial beam. At the full-frame corner (Y = 21.63 mm, 42.75°) the bundle is clipped on r10 to r17, most at r13 (66 % of one side); nothing clips the axial beam or blocks the chief ray, and the lower rim ray was not found.

Product: Cine Lens Wiki (cinelenswiki.com/lens:pensmc24mmf2.8) gives introduction in 1977, production to 1984, 9 elements in 8 groups, 84°, 0.25 m (0.12×), 52 mm filter, five blades, f/22 and 194 g, and says the SMC Pentax-A 24mm f/2.8 keeps the same optical formula. The release year is 1977, not 1975; 1975 is the year of the K mount. The patent's 1:2.8 separates this design from Asahi's slower 24 mm lenses. With no maker section drawing, the association is plausible to moderate.

Glass: each label matches the printed nd to five decimals and νd within 0.3, and all nine resolve as compatible.

| Element | Printed | Label | Δνd | Note |
| --- | --- | --- | --- | --- |
| L1 | 1.71300 / 54.0 | LAC8 (HOYA) | −0.06 | S-LAL8 (1.71299) misses the fifth decimal |
| L2 | 1.62041 / 60.3 | S-BSM16 (OHARA) | −0.01 | N-SK16 (+0.02) also fits |
| L3 | 1.78590 / 44.2 | S-LAH51 (OHARA) | 0.00 | |
| L4 | 1.67270 / 32.1 | SF5 (Schott) | +0.11 | S-TIM25 (0.00) also fits; legacy lead flint, as SF6 on L7 |
| L5 | 1.64250 / 58.4 | S-BSM36 (OHARA) | −0.03 | |
| L6 | 1.74320 / 49.4 | S-LAM60 (OHARA) | −0.06 | N-LAF35 (1.74330) misses |
| L7 | 1.80518 / 25.4 | SF6 (Schott) | +0.03 | the 18mm f/3.5 uses SF6 for the same pair |
| L8 | 1.52307 / 58.4 | C12 (HOYA) | +0.24 | only catalog row at 1.52307 |
| L9 | 1.69680 / 55.7 | S-LAL14 (OHARA) | −0.17 | K-LaK14 (Sumita, −0.04) also fits |

Fields changed in this pass:

- `key` `pentax-smc-k-24mm-f28-scaled-patent-reconstruction` → `pentax-smc-24mm-f28`, the house form of `pentax-smc-18mm-f35`.
- `name` "PENTAX SMC K 24mm f/2.8 — scaled patent-family reconstruction" → "PENTAX SMC PENTAX 24mm f/2.8".
- `subtitle` → "US 3,938,883, sole example — F = 100 design scaled 0.24× to 24 mm; probable production correlation".
- `catalog.specs`: 13 lines of process notes → "9 ELEMENTS / 8 GROUPS", "DESIGN f = 24 mm", "DESIGN F/2.8", "ALL SPHERICAL", "SCALED FROM f = 100".
- `catalog.closeFocusM.marketing` 0.25 added. `focalLengthMm.design` stays 24, the printed F = 100 × 0.24 (LENS_DATA_SPEC item 9).
- `focus.description` rewritten in plain terms; `focus.closeFocusM` stays 1e15, since the patent prints no finite state.
- Elements: labels "Source element n" → "Element n"; boilerplate roles replaced; L9 type "Positive nearly Plano-Convex" → "Biconvex Positive" (r16 > 0, r17 < 0); `focalLengthMm` added; the nine `Unmatched` glass strings → the labels above; `cemented: "C1"` on L3 and L4.
- `groups` FRONT (surfaces 1–9, the patent's front group) and REAR (10–17) added; `doublets` C1 (5–7) added.
- Header comment rewritten as the house block. Analysis rewritten to the LENS_ANALYSIS_SPEC skeleton with the conditional expressions, product sources and the 1977 date. This log condensed.
- No R, d, nd, νd, `sd`, stop or image-plane value changed. First-order values before and after are identical (EFL 23.9937 mm, F/2.80, BFD 39.9811 mm, stop radius 5.7626 mm, half field 42°).

Checks after the edits: the surface audit reports no validation errors; the aperture audit puts the lens within 3 % of its stated f-number with no rim, trace or iris failure; the image-circle audit does not flag it; field coverage is 97 %, stopped by the declared 42° field.

Closed 2026-11-08 (second review below): every rim was measured on Fig. 1; L7 to L9 were narrowed as far as the light rule allows and now stand at most 0.6 mm wider than drawn.

Closed 2026-11-08 (third review below): the brochure's p. 3 section of the SMC Pentax 24mm f/2.8 and the SMC PENTAX-A manual's section of the Pentax-A version were compared; both match Fig. 1's arrangement, and the association is now rated probable.

Closed 2026-11-08 (third review below): the stop position is no longer inferred. The SMC PENTAX-A manual's drawing (printed p. 36) marks the iris in d11, between L6 and L7, and the stop now sits there.

## 2026-11-08 — Second review: diagram, labels and movement

Compared: the live page (infinity; `focus=1`, which is the same static state; both movement overlays; the inspectors for L4, L7, L8 and L9) and the model outline against Fig. 1 of US 3,938,883 (PDF p. 2, the native 300 dpi raster), the drawing of the sole example, and the Fig. 2 plots on the same page. An overlay of the model (red) and the package rims (blue, dashed) on the figure at 19.1 px/mm is kept in the review scratch folder as `r2/pentax24/overlay.png`.

Scale. The axis runs along row 1285.5 px and stays level to 1 px across the figure. Fifteen vertex crossings (r2/r3 and r15/r16 merge at this resolution) fit 19.13 px/mm with residuals of 6.5 px (0.34 mm) or less; r1 to r17 span 894 px for 46.896 mm. Rims are read at the line centre, top and bottom averaged, at 19.1 px/mm. Fig. 1 has no stop tick, and arc fits cannot prove the vertical scale: the drawn radii run flatter than the prescription in front (r1 61.6 against 59.2 mm, r4 13.1 against 10.46, r6 12.8 against 11.4) and steeper behind (r10 19.8 against 27.2, r13 28.7 against 41.3, r17 30.5 against 35.3), so no single stretch fits and heights are read at the axial scale. The drawing bevels L1, L2, C1 and L5 (a flat outer edge, then a chamfer down to the rear face), draws L6, L7 and L9 square, and draws L8 with its front rim at L7's height and its rear rim higher.

Rims. Light is `rimcost.mjs` (full-pupil lattice, F/2.8, infinity, 0° to 42° in 3° steps) against the package rims, in points of transmitted light. The file has no lands (`rimExtensionSd`, `rimCutDepthMm`) and no `checks.gapSagFrac`.

| Surface | Fig. 1 | Package | Final | Verdict | Light |
| --- | --- | --- | --- | --- | --- |
| 2, L1 rear | 17.2 | 19.2 | 17.2 | cut; keep (slight) | 0.0 at every field |
| 4, L2 rear | 10.2 | 9.12 | 9.4 | raised toward the figure; 9.42 fails the rim-slope limit (64.2°) | alone gains 5.3 at 42° |
| 6, C1 cemented face | 8.6 | 9.12 | 8.6 | cut; keep (slight). Inside the 10 % band, but with r7 at 7.75 a 9.12 rim would sit 0.04 mm behind r7's and L4 would lose the drawn bevel | 0.0 |
| 7, L4 rear | 7.75 | 9.12 | 7.75 | cut; keep (slight) | 0.0 |
| 9, L5 rear | 6.73 | 7.68 | 6.75 | cut; keep (slight) | 0.0 |
| 10, 11, L6 | 7.55 | 7.92 | 7.92 | unchanged: 5 % over, inside the band; 7.55 alone costs 2.5 at 12° | — |
| 12, 13, L7 | 7.6 | 8.4 | 8.18 | cut, partly raised (slight); 8.15 reaches 3.2 at 30° | restore wins 0.8 at 24° |
| 14, L8 front | 7.75 | 10.08 | 8.35 | cut, partly raised (slight); 8.33 reaches 3.0 | L8 restore wins 0.2 at 36° |
| 15, L8 rear | 8.75 | 10.08 | 8.8 | cut, partly raised (slight); 8.78 reaches 3.1 at 36° | with r14 |
| 16, 17, L9 | 10.1 | 12.0 | 10.18 | cut, partly raised (slight); 10.15 reaches 3.0 at 42° | restore wins 3.0 at 42° |

Single cuts to the drawn heights from the package rims would cost L7 10.2 points at 39°, r14 12.9 at 42°, r15 5.8 at 42° and L9 9.0 at 42°; all four together (with r4 at 9.4) lose 11.6 at 36°. L7 and L9 stay square and L8 stays stepped, as drawn. The r4 raise is figure-driven; it also returns the 5.3 points at 42° that the package's 9.12 mm rim cut from the lower rim of the corner bundle, which leaves room for L9 at 10.18 mm.

Final light: worst loss 2.9 points at 36° (71.1 → 68.2 %); 42° goes from 53.1 to 50.6 % and 21° from 91.1 to 88.8 %; no field gains. The real-ray check finds no axial clip or blocked chief ray at 42° or at the 42.78° corner. Corner chief heights on r13 to r17 are 6.62, 7.21, 8.00, 9.23 and 9.59 mm; the F/2.8 axial heights on the cut faces are r2 4.15, r6 4.62, r7 4.78, r9 4.94 and r12 to r17 6.85 to 7.47 mm. The surface validator passes, the aperture audit finds no rim, trace or iris limit, the image-circle audit does not flag the lens, field coverage stays 97 % (declared 42°), and `built.mjs` runs. EFL 23.9937 mm, F/2.80, stop radius 5.763 mm and the 42° half field are unchanged. `tracingHalfField` falls from 41.31° to 37.99°: the engine's paraxial chief-ray estimate meets r15 there, although the real chief ray at the 42.78° corner passes r15 at 8.00 mm. The diagram's default off-axis fan therefore launches at 22.8° instead of 24.8°.

Live page after the edits: L1's bevel, L2's tapered rear, the C1 bevel and L5's chamfer render as drawn; L6 and L7 stand at nearly one height, L8 meets L7 at the rim and steps up behind it, and L9 is about as tall as drawn.

Checked and correct. Names L1 to L9 follow the patent's first to ninth lens (Fig. 1 numerals 12 to 28); the patent has no element letters to carry. Types agree with the radius signs: L1, L4 and L8 positive menisci; L2, L3 and L5 negative menisci; L6 and L9 biconvex (r16 = +8323.2 mm); L7 biconcave. Stored focal lengths equal the paraxial values (137.29, −30.33, −19.86, 22.24, −39.15, 17.94, −21.18, 33.56 and 50.39 mm; C1 −129.83 mm). The inspector shows L4 as "DOUBLET C1", Positive Meniscus, +22.24 mm, SF5; L7 Biconcave Negative, −21.18 mm, SF6; L8 Positive Meniscus, +33.56 mm, C12; L9 Biconvex Positive, +50.39 mm, S-LAL14. Brackets: C1 on surfaces 5 to 7 (the patent's bonded third and fourth lenses), FRONT on 1 to 9 (the patent's "front lens group of the negative retrofocus type", L1 to L5), REAR on 10 to 17 (no patent name); there are no gap labels to clash with. All surfaces are spherical and none carries an `A` label. There are no `apd` tags; the patent names no special glass and the validator report records none. The stop is drawn between L5 and L6. Roles match the numbers (L1 to L5 −15.67 mm, L1 to L6 +35.76 mm, L6 the strongest element). Movement: none. The focus slider reads "Not modeled", both `mv` overlays report no modeled focus or zoom group movement, and `focus.description` states the static model and Pentax's 0.25 m.

Aberrations against Fig. 2, read from each plot's local axis line, at F = 100. Spherical aberration (2(a)) agrees within the reading: model −0.46, −0.73 and −0.57 at 0.85, 0.7 and 0.5 of the pupil against about −0.57, −0.76 and −0.62 plotted, both crossing zero near 0.95. Colour (2(b)): the g-line paraxial focus is −0.29 against about −0.27 plotted; at 0.5 of the pupil the model's g − d is −0.20 against about −0.07, some 0.03 mm at 24 mm and a little over twice the reading error. Every label is within 0.24 of the printed νd, so no single element stands out. Distortion (2(c)): model −2.67 % at 32°, a −3.0 % peak at 38° and −2.65 % at 42°; plotted about −2.8 %, −3.1 % near 36° and −2.1 % at 42°. The deployment section's "about −2.7 %" at 42° was read at lower resolution. Astigmatism (2(d)) is not reproduced: model sagittal and tangential −0.32 and +0.11 at 20°, −0.13 and +0.22 at 32°, +2.76 and −2.28 at 42°; plotted about −0.46 and −0.33, −0.79 and −0.79, +0.45 and −3.0. Finite-difference rays confirm the model's tangential values. The Petzval term (3ΔS − ΔM)/2 agrees at 20° (−0.53 in both).

Stop. The patent text never mentions a stop or diaphragm, and Fig. 1 draws none. Moving the stop across d9 changes the model's distortion at 42° from −4.40 % (at r9) through −3.06 % (1.11 mm behind), −2.73 % (2.22 mm) and −2.65 % (3.33 mm, the file) to −2.63 % (at r10); the plotted peak and mid-field values favour the rear half of the gap. No position in d9 reproduces Fig. 2(d): at 32° the sagittal focus runs from +0.33 to −0.31 across the gap against −0.79 plotted. A stop behind L6 comes closer at 20° but not at 42°. The 3.33 mm placement stays.

Glass: all nine labels resolve to compatible catalog rows (largest Δνd 0.24, L8's C12); none is `Unmatched`.

Open: Fig. 2(d)'s astigmatism is not reproduced at any stop position in d9 (32°: model −0.13 sagittal and +0.22 tangential against about −0.79 for both, at F = 100). The prescription matches the table and the other three plots; the plot may rest on another chief-ray convention or design state.

## 2026-11-08 — Third review: diagram, labels and movement

Compared: the live page (infinity, both movement overlays, all nine inspectors) and the model outline against Fig. 1 (PDF p. 2, native 300 dpi), and Pentax's section drawings of the SMC Pentax 24mm f/2.8 (Asahi Pentax lens brochure, p. 3) and the SMC Pentax-A 24mm f/2.8 (SMC PENTAX-A manual, printed p. 36, PDF p. 39). Fig. 1's scale was proved again: 15 vertex crossings fit 19.13 px/mm (residuals ≤ 6.4 px), and the drawn sags of r1 and r15 at their rims come within 4 % and 7 % of what their radii give at that scale, so heights are read at the axial scale. The overlay is `r3/pentax24/overlay.png` in the review scratch folder. No rim, label, tag or movement field changed. Second-review land and cut verdicts re-measured: unchanged; worst loss 2.9 points at 36°.

r15 and the engine half-field. Fig. 1 draws r15 at 8.60 mm above the axis and 8.86 below (L7 7.58, L8 front 7.80, L9 10.05), and the drawn r15 arc's sag puts its rim at 8.3 to 8.6 mm. The engine's paraxial chief-ray estimate stops `tracingHalfField` at 37.99° on r15; 41.3° needs r15 = 9.9 mm with L9 ≥ 10.8 mm, and r15 = 9.6 mm (10 % over the drawing) gives 40.4°. No figure-supported rim set passes 41°, so the rims stay. The real 42.8° chief ray crosses r15 at 8.01 mm.

Maker drawings. Least-squares fits of the drawn vertices to the scaled table give 5.85 px/mm (brochure, 15 crossings) and 5.44 px/mm (A manual, 14), with every residual within 1.6 mm, the largest at L1's rear face and the C1 faces. Both drawings show L1 thinner (3.1 and 3.6 mm against 4.61) and L2 thicker (2.7 and 2.85 mm against 1.46) on the axis. Scaled to Fig. 1's L1, the brochure draws L3 at 10.9 mm and L6 at 8.7 against 9.7 and 7.55 in Fig. 1, and L2, L7 and L9 within 3 %. Fig. 1 governs the rims.

Stop. The brochure marks no iris. The A manual draws a line across the barrel between L6 and L7, 34.29 mm behind r1 on the fitted scale: inside d11 (2.568 mm), 0.9 mm behind the drawn r11 and 1.24 mm behind the scaled one. Against Fig. 2 at F = 100 (10° to 41°), a stop 0.9 mm into d11 matches distortion as well as the file's (RMS 0.27 % for both) and the sagittal curve better (RMS 0.47 against 1.07; tangential 0.89 against 0.79); at 20° it gives −0.56 and −0.49 against about −0.47 and −0.34 plotted (file −0.32 and +0.11). Moving the stop changes `d`, outside this pass. A trial (r9 d 4.44, r11 d 0.9, stop d 1.668) passes the surface and aperture audits, with a 6.60 mm stop radius and 99.8, 78.6 and 51.4 % transmission at 21°, 36° and 42° (file 88.8, 68.2 and 50.6 %). There, the r9 cut would cost 5.3 points at 27° against the baseline rims; r9 = 7.0 mm brings the worst loss to 2.4 points (2.7 with the stop 1.24 mm into d11). `tracingHalfField` would fall to 34.3°, the paraxial limit at r4, which the rim-slope limit holds at 9.4 mm, although the real 42° chief ray crosses r4 at 9.02 mm. L5's and L6's roles name the stop.

Labels, tags and movement re-checked on the page: the nine inspectors show the names, types, focal lengths, glass and roles the second review lists; C1 brackets surfaces 5 to 7, FRONT 1 to 9 and REAR 10 to 17; the stop is drawn between L5 and L6; the focus slider reads "Not modeled" and both overlays report no movement. All nine glass labels resolve (largest Δνd 0.24, L8); the patent prints only nd and νd. Fig. 2(b) re-read: g-line paraxial focus −0.26 against −0.29 in the model, and g − d at half pupil −0.07 against −0.20 (F = 100).

Stop moved, with the owner's approval. Following the SMC PENTAX-A manual (printed p. 36, PDF p. 39), the stop now sits in d11, 0.9 mm behind r11. Only the air around it was redistributed, so each printed spacing stays whole: r9 d 3.33 → 4.44 (the printed d9), STO d 1.11 → 1.668 after r11, r11 d 2.568 → 0.9 (0.9 + 1.668 = the printed d11). Every R, nd, νd and lens-vertex position is unchanged, and the track stays 86.877 mm. r9 `sd` 6.75 → 7.0: with the stop behind L6, 6.75 costs 5.3 points of light at 27° against the package rims, over the budget, and 7.0 is within 4 % of the 6.73 mm drawn. Engine stop radius 5.763 → 6.600 mm; F/2.80 and EFL unchanged. Transmission at 21°, 36° and 42°: 88.8, 68.2 and 50.6 % → 100.0, 80.9 and 51.4 %. `rimcost.mjs --loo` worst loss 2.4 points at 27°. Restoring an element wins back: C1 0.7 at 36°, r9 1.9 at 27°, L8 0.1 at 36°, L9 2.6 at 42°, and nothing for L1, L2 or L7. Every cut stays as slight. The 42° chief ray lands at 21.10 mm (21.03 before). Distortion is −2.59 % at 32°, −2.83 % at 36° to 38° and −2.33 % at 42°. Fig. 2(d)'s astigmatism is now matched in form but not in size: at 32° the model gives −1.12 sagittal and −1.50 tangential, against about −0.77 for both (F = 100). L5's and L6's roles no longer place the stop in d9. The surface validator passes, the aperture audit finds no rim, trace or iris limit, the image-circle audit does not flag the lens, and field coverage stays 97 % (declared 42°, corner 42.7° clear). `clearap.mjs` finds no chief ray with this stop at 38° and above; an exact trace finds the 42.7° chief ray clear of every rim, closest at r4 (9.13 against 9.4 mm).

Open: `tracingHalfField` is 34.27° (37.99° with the stop in d9), so off-axis analyses stop short of the patent's 42°. The limit is the engine's paraxial chief-ray estimate at r4, which the rim-slope limit holds at 9.4 mm, not a rim the real chief ray meets: the real 42° chief ray crosses r4 at 9.02 mm.
