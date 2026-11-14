# smc PENTAX-F 135mm F2.8 [IF] — source audit

2026-11-01. Prepared against e1414bf50b190e20541b65b16ec278c120841f70.

The first review kept the printed surfaces, indices and Abbe numbers, the figure-based clear apertures, the stop location and the computed infinity image plane. It used closeFocusM = 1e15 with only the infinity gaps, and left out calculated conjugates, near-state interpolation and alternative iris positions (closed 2026-11-02: the printed close state is authored, closeFocusM is 0.7 and Fig. 3 supports the fixed iris). The rear rim stood at 17.238 mm, not the rejected 9.77 mm first value or a contrast-selected one (closed 2026-11-02: 18.30 mm from Fig. 1). maxFNumber 32 matches the manufacturer endpoint.

The earlier optical-path reference checks and diffraction estimates were not carried as evidence, and no per-lens test was added.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read: page images of US 4,793,698, Example 1. Checked 15 R, 14 d, 8 Nd/νd pairs and 3 variable gaps at both states, all exact at ×1.35; no mismatches. The page prints the d line. The front page agrees on number, date and inventor; it prints the assignee as Asahi Kogaku Kabushiki Kaisha, and the file uses the corpus form, Asahi Kogaku Kogyo Co., Ltd.

Erratum: the table and claim 7 print νd 27.5 for L4, where nd 1.76182 is SF14 class at 26.5. Paraxial g−d at f = 100 reads +0.067 on Fig. 2 and +0.453 on Fig. 3; S-TIH14 traces +0.068 and +0.452, and νd 27.5 gives −0.164 and +0.141. Example 4 prints 1.76182/26.5; Examples 2 and 5 print 1.78470/26.2 and Example 3 prints 1.80518/25.4 for that element. Recorded as `unresolved` because `corrected` takes no `vd` field: vd stays 27.5 and S-TIH14 catalog dispersion traces it at 26.5. The other seven pairs match their catalog equivalents within 0.2 in νd. Separately, the near d8 of Examples 4 and 5 is misprinted (19.690 and 26.023): 25.100 and 31.543 close the gap sums and reach m = −0.2500. Neither example is used here.

Patent against model: f 100 scales to EFL 135.007 mm (+0.005 %), F2.8, half-field 9.4°. The five conditional values reproduce: −1.8933 (−1.893), 0.3425 (0.343), 0.600, 0.1075 (0.108), 0.1407 (0.141). Back focus is not printed; 46.385 mm and 125.800 mm are computed. The printed near gaps give m = −0.2500, object-to-image 725.00 mm, 599.20 mm from S1, EFL 112.37 mm. Real-ray spherical aberration dips to −0.43 (Fig. 3 about −0.44). Distortion traces −0.59 % at 9.4° (Fig. 2 −0.64 %) and +2.36 % at Y = 16.5 (Fig. 3 +2.53 %).

Stop: Fig. 1 has no stop symbol. At 300 dpi its S8 and S9 vertices lie at 1069 and 1169.5 px, at 13.863 px per f = 100 unit; the 75 % plane falls at 1144.4 px. Fig. 3 reads S −0.27, M −0.57 at Y = 16.5. A fixed iris at 75 % traces −0.26, −0.58; moving with unit 20, −0.40, −1.0 or worse, with about 33 mm needed at L1.

Public diagram: Pentax's FA 135mm F2.8 [IF] drawing, on the asobinet page, shows a meniscus doublet and L8 taller than L7, and carries a mark between L4 and the doublet consistent with the iris. Enlarged, the doublet's faces sweep about 15, 55 and 40 px, close to Example 1's sags at 13 mm height (0.95, 3.17, 2.12 mm) and unlike Example 3's (1.26, 0.97, 2.30 mm). The drawing is low resolution and shows the FA, so Example 1 stays a fit, not proof.

Fields changed: L1 26.52→25.15, L2 25.81→23.98, L3 23.81→21.37, S8 18.58→16.10, L7 11.69→12.27, L8 17.238→18.30; closeFocusM 1e15→0.7; `focus.published` [1]; gaps at STO, 11 and 13; `source.errata`; header, subtitle, specs, focus description, element roles, group labels; doublet and `cemented` tags D1→C1. Corner illumination at 9.2° went 63.0→64.6 and no field lost light against the first review.

Open: L1 at 25.15 costs 4.9 points at 9.2° taken alone and passes only net of the L7 and L8 raises; L1 = 26 gives 67.7 and stays on the owner's list as a restore option.
Open: the 725 mm near state is about 3.6 % over the retail 0.7 m; the patent prints no distance to settle it.
Open: the F specifications come from public listings. The maker brochure citation was carried from the first review and not re-read, and the Pentax Forums entry was read through search excerpts only.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: US 4,793,698, sheet 1 (PDF page 2), Fig. 1, which draws Example 1 at infinity, and the front-page copy of the same drawing (PDF page 1). Both are 300 dpi native bilevel scans. Heights are half the distance between line centres above and below the axis, read from pixel rows.

Scale: on the sheet copy S1 to S15 spans 816 px over 79.415 mm, 10.275 px/mm; S9 to S11 gives 10.28 and S14 to S15 gives 10.14. The front-page copy spans 869 px, 10.94 px/mm. Arc fits to the printed radii on the well-curved faces S3, S5, S7 and S10, with the axial scale held, give 10.35 to 10.40 px/mm vertically on seven of eight half-arcs and 10.55 on the eighth. The drawing is round within about 1 %, so no anamorphic correction applies; reading heights at 10.37 would lower the table below by 0.9 % and change no decision. The L3 to L6 vertices sit 3 to 6 px behind their scaled positions, which does not touch rim heights. The patent prints no lateral fans; Figs. 2 and 3 are spherical aberration, chromatic, astigmatism and distortion only.

| Surface | Before | Sheet px (mm) | Front page px (mm) | After | Evidence |
|---|---|---|---|---|---|
| S1, S2 | 25.15 | 257 (25.01) | 271.75 (24.84) | 25.15 | Retained, within 1.3 % |
| S3, S4 | 23.98 | 246 (23.94) | 260 (23.77) | 23.98 | Retained, square rim |
| S5 | 21.37 | 218.5 (21.27) | 230.5 (21.07) | 21.37 | Retained |
| S6 | 21.37 | 203 (19.76) | 215 (19.65) | 19.70 | Cap end at the chamfer; 8 % drop, shape fix |
| S7 | 18.58 | 190 (18.49) | 201.5 (18.42) | 18.58 | Retained, flat rim height |
| S8 | 16.10 | 162.5 (15.82) | 171.5 (15.68) | 15.70 | Cap end at the chamfer; see below |
| S8 land | none | | | `rimExtensionSd` 16.60 | Stands in for flat rim and chamfer |
| S9, S10 | 14.85 | 147 (14.31) | 156.5 (14.31) | 14.85 | Retained, 3.8 % over and inside the noise band |
| S11 | 14.85 | 133 (12.94) | 143 (13.07) | 13.00 | Cap end at the chamfer; 12 % drop |
| S12, S13 | 12.27 | 125.7 (12.23) | 134 (12.25) | 12.27 | Retained |
| S14, S15 | 18.30 | 187.25 (18.22) | 198.75 (18.17) | 18.30 | Retained, square rim |

The rims moved earlier today hold up: L1, L2, S5, L7 and L8 all agree with both copies within 1.4 %, and the step order L1 > L2 > L3 > L4 > L5/L6 > L7 < L8 matches. S8 at 16.10 was within 3 % of the figure, but that cap's rim sits 0.17 mm past the iris plane, 7.34 mm behind S8, where the figure's chamfer tip stops about 0.7 mm short of it. At 15.70 its sag is 7.05 mm, 0.29 mm ahead of the plane.

Chamfers: Fig. 1 chamfers the concave rear faces of L3, L4 and L6. On L3 and L6 the one rim edge between the faces already reads as the chamfer, so `sd` alone draws it. L4 has a flat rim 3.4 mm long and a chamfer about 2.5 × 2.7 mm, which one edge cannot draw. Taking residual area against the figure's upper outline in sheet px², and the largest gap in px: plain S8 at 15.70 gives 380 and 14.1; plain at 16.10, 325 and 11.0; a land to 16.60 on the 15.70 cap, 292 and 9.8; a land to the full 18.45 height, 504 and 27.6. The full-height land squares off a corner the figure cuts, so it is rejected, and 16.60 is the best of the set. It is a `rimExtensionSd` rather than a cut because the figure gives a cap end, not a depth, and the beam never reaches that end. L7 also carries a bevel on its concave front rim, about 0.6–0.9 × 1 mm, which the maker's drawing shows too. It is not modeled: ending S12 at 11.2 mm costs 4.4 points at the corner and 6.5 at Y = 10 against this set, and S12 is the lens's main mid-field limiter. Spacing does not need it.

Clearance, from a full-pupil exact trace independent of the engine, with the near object 599.2 mm from S1: the axial beam stopped by the 14.10 mm iris reaches, at infinity and then at 1/4 magnification, 23.56 and 22.41 at S1, 22.41 and 21.62 at S3, 19.88 and 19.45 at S5, 18.68 and 18.24 at S6, 17.16 and 16.87 at S7, 14.49 and 14.40 at S8, 13.25 and 8.99 at S9, 12.02 and 8.18 at S11, 10.53 and 7.83 at S12, 8.74 and 7.40 at S14. The tightest margin is S11 at 0.98 mm. The real ray at the full paraxial pupil, which the iris stops, reaches 19.14 at S6, 14.77 at S8 and 12.29 at S11, and clears those too. The chief ray to Y = 22.3, the printed reach of both states, passes every rim at both states, and no surface shows `CLIPS-AXIAL` or `BLOCKS-CHIEF`. Fig. 3 settles the near beam independently: its curve reaches −0.427 at 0.80 of its height and ends at about −0.31; the trace reaches −0.428 at 18.2 mm on S1, 0.82 of the 22.3 mm height where the ray meets the 14.10 mm iris, and −0.31 there. The near state is therefore a working f/3.35 and the figure's 1:2.8 label is nominal, so nothing there calls for a raise. `lsa.mjs` shows no misprint signature (+0.016, −0.086, −0.110, −0.081 mm at pupils 1, 0.85, 0.7, 0.5).

Light. Engine half-field stays 9.40°, f-number 2.8, stop 14.10 mm, and the corner stays at 21.65 mm at 9.2°. S6, S8 and S11 stop only rays that L1 or L7 already stops: the independent trace moves by less than 0.01 point at every field at both states, although the meridional tool flags 8 % and 9 % sides at S6 and S11. `rimcost.mjs --loo` wins back nothing on restoring any of them. The app's curve at infinity, wide open, in percent:

| Rims | 3.1° | 4.6° | 6.1° | 7.6° | 9.2° |
|---|---|---|---|---|---|
| Package | 97.1 | 91.4 | 84.4 | 75.7 | 63.0 |
| Package with L1 at 25.15 alone | 97.1 | 89.3 | 80.7 | 71.2 | 58.1 |
| This file | 99.6 | 93.1 | 85.0 | 75.7 | 64.6 |
| This file, L1 = 26.00 | 99.6 | 94.9 | 87.4 | 78.7 | 67.7 |
| This file, L1 = 26.52 | 99.6 | 94.9 | 87.8 | 79.4 | 69.1 |

The file is level with or above the package at every field, by 0 to 2.5 points, and that is the whole L1 trade: L1 alone costs up to 4.9 points against the package, and the L7 and L8 raises return 2.5 to 6.5. Against L1 = 26.00, the largest value that still fits a 52 mm thread, L1 at 25.15 gives up 1.8, 2.4, 3.0 and 3.1 points from 4.6° to 9.2°; the figure reads 24.84 to 25.01. Near, the finite-object trace reads 70.8 against the package's 67.6 at the corner and leads at every field from Y = 14 out. The app's near curve launches collimated through the near gaps, which a separate collimated trace reproduces, so it overstates L1's share: 2.5 points under the package at 5.0°, inside the 3-point line, and 84.0 against 81.7 at its 7.5° end.

Maker's drawing, FA version, low resolution, check only: eight elements in seven groups in the same order, with a meniscus cemented doublet. Rim heights against L1, read by eye, are 0.94, 0.84, 0.75, 0.57, 0.49 and 0.73 for L2, L3, L4, the doublet, L7 and L8; the figure gives 0.96, 0.85, 0.74, 0.57, 0.49 and 0.73. It shows the same L4 flat rim and chamfer, L6 rear chamfer and L7 front bevel, and an iris mark just behind L4's tip. No element carries a special-glass or aspherical mark. Nothing disagrees with the figure.

Limitations: L4's top edge slopes where the figure draws a flat rim and a 45° chamfer, up to 1 mm off, and L7's front bevel is not drawn. S9 and S10 sit 0.55 mm above the figure's top line, inside the noise band.

## 2026-11-02 — Second review: diagram, labels and movement

Compared the live page at infinity, `focus=1`, `focus=0.5`, `mv=focus` and the inspector on elements 4 and 7 against Fig. 1 of US 4,793,698 (sheet 1, PDF page 2, 300 dpi), the Example 1 table (PDF page 12), the text columns (PDF pages 10 to 12) and Pentax's FA drawing, which is low resolution and shows the FA. Rims were re-read from the page pixels, top and bottom stroke centres, and every light figure below comes from `rimcost.mjs` unless it says otherwise.

Designations: the patent numbers its elements in text and figure, so `name`, `label` and a new `diagramLabel` now carry those numerals, and the analysis follows. L1 to L8 of the sections above are elements 12, 14, 16, 18, 24, 22, 32 and 42. Fig. 1's leaders put 24 on the front of the doublet and 22 on the rear, and the text makes 24 the negative and 22 the positive member, matching i = 9 and i = 10. `source.errata` still says "L4 (i = 7)"; it is outside this review's edit list.

Rim reads, half the top-to-bottom stroke distance on the sheet copy, at 10.275 px/mm, then the front-page value recorded above: element 12 257.0 px (25.01, 24.84), 14 246.0 px (23.94, 23.77), 16 218.25 px (21.24, 21.07), 18 190.25 px (18.52, 18.42), doublet 147.5 px (14.35, 14.31), 32 125.5 px (12.21, 12.25), 42 187.0 px (18.20, 18.17). Scale agrees with the earlier section. Those rims and the step order hold, with one exception. S9 and S10 at 14.85 stood above both copies, and the doublet at 0.59 of element 12 against 0.57 on the figure and the maker's drawing.

Cuts and lands against `.lens-work/base1103`:

| Face | Baseline | Figure, sheet / front | Final | Restore wins | Verdict |
|---|---|---|---|---|---|
| S1, S2 | 26.52 | 25.01 / 24.84 | 25.15 | 4.5 at 9.2° | Keep: slight. Whole lens −0.1 at worst |
| S3, S4 | 25.81 | 23.94 / 23.77 | 23.98 | 0.0 | Keep: costs nothing |
| S5 | 23.81 | 21.24 / 21.07 | 21.37 | 0.0 | Keep: costs nothing |
| S6 | 23.81 | 19.76 / 19.65 | 19.70 | 0.0 | Keep: costs nothing |
| S8 | 18.58 | 15.86 / 15.68 cap end | 15.70 | 0.0 | Keep: costs nothing |
| S8 land | none | 18.52 outer rim | 17.00, was 16.60 | 0.0 | Keep: redraws the rim only |
| S9, S10 | 14.85 | 14.35 / 14.31 | 14.30, was 14.85 | 0.0 | New cut, keep: costs nothing |
| S11 | 14.85 | 12.94 / 13.07 | 13.00 | 0.0 | Keep: costs nothing |

No cut needs the spacing clause. Final worst loss against baseline is 0.1 point at 7.6°, and the largest gain is 1.8 points at 3.1°. S12 and S13 (baseline 11.69), S14 and S15 (baseline 17.238) sit above baseline on the figure's outer rims, so they are raises, not cuts. S12 moved down from 12.27, as below.

Element 12 by the rule's own test: the whole lens against baseline loses 0.1 point at worst, so the cut stays at 25.15 and no partial raise is called for. Measured both ways, in percent at infinity, wide open:

| Rims | 3.1° | 4.6° | 6.1° | 7.6° | 9.2° |
|---|---|---|---|---|---|
| Package | 97.1 | 91.4 | 84.4 | 75.7 | 63.0 |
| Package with element 12 at 25.15 alone | 97.1 | 89.3 | 80.7 | 71.2 | 58.1 |
| First pass | 99.6 | 93.1 | 85.0 | 75.7 | 64.6 |
| This file | 98.9 | 92.5 | 84.8 | 75.6 | 64.6 |
| This file, element 12 = 26.00 | 99.0 | 94.4 | 87.2 | 78.6 | 67.7 |
| This file, element 12 = 26.52 | 99.0 | 94.4 | 87.6 | 79.3 | 69.1 |

So the cut alone costs 4.9 points at 9.2°, and 26.00 would give back 3.1 there. The whole-lens pass rests on the raises of elements 32 and 42. A separate lattice trace written for this review, 361 × 361 rays through the 14.10 mm stop, reads 98.8, 92.7, 85.0, 76.0 and 64.2 for this file and 67.0 at 9.2° for 26.00. The Open line on this cut stays open as the owner's choice.

Near curve: it does not count against the rule, which reads infinity, wide open. The app's curve at the near gaps launches collimated rays, and against baseline it reads 99.1 for 100.0 at 3.8°, 97.5 for 100.0 at 5.0°, 95.5 for 96.7 at 6.3° and 84.0 for 81.7 at 7.5°, so −2.5 points at worst, inside 3 regardless. The same lattice trace with the object 599.2 mm from S1 finds no loss: 100.0 against 100.0 out to Y = 10, then 96.4 against 92.4 at Y = 14, 87.8 against 83.4 at Y = 17 and 70.8 against 67.5 at Y = 21.65. Collimated at the near gaps it gives −2.2 at 5.0°, so the loss belongs to the launch. The app's near curve is unchanged by this review's rims.

Element 18's rim: the figure's stroke centres give a flat at ±190.25 px for 3.2 mm behind S7's edge, then a true 45° line, 26.5 × 26.5 px, to a tip at 163 px. The renderer offers one straight top edge and one vertical land, so that outline cannot be drawn. Against those centres, as symmetric difference in sheet px² and the larger of the two gaps at the flat's end and the land's corner: cap 15.70 with the land at 16.60 gives 368 and 10.0 px; at 17.00, 338 and 8.1 px; at 18.45, 435 and 18.7 px. Cap 15.40 with a land at 17.40 gives 305 and 8.6 px, but its tip falls 0.4 mm short of the figure's, so the cap stays at 15.70 and the land goes to 17.00, where the two gaps balance. The land sits on S8's unchanged sag, 0.29 mm ahead of the iris plane, and costs no light.

Element 32's bevel: at the top it runs 0.8 × 1.0 mm, at the bottom 0.4 × 0.8 mm, and the curve ends at 115.5 and 118.5 px (11.24, 11.53 mm), below baseline. A vertical land cannot draw it: S12 at 11.69 with a land to 12.27 moves the corner 0.08 mm. Lowering S12 tilts the top edge instead:

| S12 | Sym. diff., px² | Whole lens vs baseline | Against first pass |
|---|---|---|---|
| 12.27 | 88 | No loss | |
| 12.10 | 71 | No loss | −0.3 at worst |
| 12.00 | 66 | −0.1 at 7.6° | −0.7 at 3.1° |
| 11.90 | 61 | −0.5 at 7.6° | −1.3 at 4.6° |
| 11.69 | 55 | −2.2 at 7.6° | −2.8 at 4.6° |
| 11.60 | not run | −2.8 at 7.6° | |
| 11.36 | 55 | −4.6 at 7.6°, fails | |
| 11.20 | 61 | −5.9 at 7.6°, fails | |

12.00 takes 22 of the 33 px² on offer for at most 0.7 point, and keeps the whole lens level with baseline, so it is the value used. The figure's cap end stays 0.6 mm lower; below 11.60 the budget refuses it, and between there and 12.00 the light goes faster than the fit improves. It is a slanted edge, not a bevel: 0.27 mm across the rim where the figure has a 0.8 mm corner.

Clearance: `audit:surface`, `audit:image-circle`, `audit:field-coverage` and `built.mjs` pass; `clearap.mjs` shows no `CLIPS-AXIAL` or `BLOCKS-CHIEF`. Axial margins are S9 0.74, S11 0.71 and S12 1.22 mm at the real ray of the full paraxial pupil. Engine half-field stays 9.40°, f-number 2.80, stop 14.10 mm, and the corner stays at 21.65 mm at 9.2°. The stop housing line follows S9, 14.85 to 14.30.

Movement: the table prints d8 7.247–25.603, d11 10.753–3.410 and d13 14.075–3.061. Fig. 1 draws the first value, and conditions (4) and (5) reproduce from it (0.108, 0.141), so the first of each pair is infinity. Near, ×1.35: unit 20 moves 24.78 mm toward the image and unit 30 14.87 mm the same way, X3/X2 = 0.600 as printed. The text gives no direction in words, but condition (3)'s warnings that unit 20 would contact unit 30 and unit 30 would contact unit 40 fit it. Swapping in d8 alone gives m = −0.35 and 632 mm, where the pairing as stored gives m = −0.2500 and 725.00 mm. Index 0 of each `gaps` pair is infinity and index 1 the near state, exact at ×1.35. On `mv=focus` units 10 and 40 show no travel, units 20 and 30 move toward the image plane, and maximum travel reads 24.78 mm. The slider's far end reads 70 cm.

Labels: Fig. 1 brackets 10 over r1–r8, 20 over r9–r11, 30 over r12–r13 and 40 over r14–r15, the file's four `groups`. `C1` brackets S9 to S11, and no bracket collides with the `d8b`, `d11` or `d13` labels. Every `type` agrees with the signs of R, every `role` holds, and all eight elements carry `focalLengthMm`. There is no aspheric surface and no `A` suffix. The stop sits between 18 and 24. On `focus=1` the `30 FOCUS` bracket packs to a second row and stays readable. No `apd` is warranted: the patent asks only for "relatively small dispersion" at 12 and the "smallest possible dispersion" at 32, which is ordinary low dispersion, and the maker's drawing marks nothing.

Open limitations: element 18's top edge still leans across the flat, up to 0.8 mm off, and element 32's edge is a slant, as above. The renderer would need a sloped land to draw either.

## 2026-11-02 — Chromatic check of the C line

The deployment pass compared only g−d with Figs. 2 and 3. A color-spread query on the site prompted a fuller check, at f = 100, from the 600 dpi page raster (297 and 298 px per unit between the ±0.50 ticks). The patent plots d, g and C only, so F is not checked.

| Quantity | Figure | Model |
| --- | ---: | ---: |
| Fig. 2, paraxial C − d | +0.15 | +0.130 |
| Fig. 2, paraxial g − d | +0.07 | +0.068 |
| Fig. 2, F/2.8 marginal d | +0.01 | +0.012 |
| Fig. 2, F/2.8 marginal C | +0.12 | +0.119 |
| Fig. 2, F/2.8 marginal g | +0.26 | +0.251 |
| Fig. 3, paraxial C − d | +0.14 | +0.112 |
| Fig. 3, paraxial g − d | +0.46 | +0.452 |
| Fig. 3, marginal d | −0.31 | −0.276 |
| Fig. 3, marginal C | −0.25 | −0.215 |
| Fig. 3, marginal g | +0.53 | +0.553 |

The model follows both figures within about 0.03. The Fig. 3 marginal row uses the entry height that fills the infinity stop at the 599.2 mm object distance. Seven of the eight elements sit within 0.2 % of the catalog νd; element 18 sits 3.6 % away by design, on the erratum recorded above, and the C and g curves support that reading. No field changed.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “a magnification of ¼” → `"1/4"` | US 4,793,698, Example 1 (PDF p. 12) | 599.22 mm, first-surface | in focus 0.25001; at the declared distance 0.25000; −0.10 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
