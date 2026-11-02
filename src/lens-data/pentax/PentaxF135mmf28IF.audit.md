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
