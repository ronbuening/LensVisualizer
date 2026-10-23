# SMC PENTAX-FA 28-105mm f/4-5.6 Power Zoom: audit log

The source package carried no audit log; this file starts at deployment validation.

## Deployment validation (2026-10-23 UTC)

- Source: US 5,264,965 A (Jun Hirakawa, Asahi Kogaku Kogyo), Embodiment 4, Tables 7-8 (PDF p. 19), Figure 14.
- Transcription: 24 refracting surfaces, 13 N/ν pairs, nine variable-gap cells and three BF values checked against
  the scanned tables; no mismatches. No aspheric surfaces.
- First order (patent → model, wide/middle/tele): EFL 29.02/57.00/101.60 → 29.017/57.001/101.601 mm; BF
  40.22/53.04/76.73 → 40.225/53.046/76.722 mm; F 4.1/4.9/5.8 nominal; half-field 38.0/20.7/11.9° →
  38.01/20.71/11.87°. Group I focal length −39.648 mm and the condition ratio 0.533 reproduce the patent.
- Embodiment choice: E1 35.7-101.6 (13/11), E2 29-82 (13/11), E3 29-101.6 (14/12), E4 29.02-101.6 (13/11, four
  powered groups). E4 fits the production lens best.
- Product match: Ricoh's discontinued-lens page lists the FA 28-105mm F4-5.6 (Power Zoom) as 13 elements / 11
  groups, four-group non-linear zoom, 0.43 m, 0.33x; its construction image (`sz-faz28f4-105f56.jpg`) agrees with
  Figure 14 in element count and grouping. Association is strong; the factory prescription is not confirmed.
- Values not printed by the patent: clear radii, the iris position 1 mm before group II, the iris-diameter
  schedule and 254 interpolated cam nodes (three printed stations retained).
- Validators: surface audit OK; image circle OK; field coverage 257/257 stations. Real-ray launch at the nominal
  f-number overshoots the iris by 0.022-0.036 mm at the printed stations.
- Open: iris calibration overshoot above. Visibility closed by the coordinator (`visible: true`); public wording
  closed by the wording pass, 2026-10-23.

## 2026-10-23 — Semi-diameter pass against the patent figure

Source: US 5,264,965 A, PDF page 15 (sheet 14 of 15), FIG. 14, the only drawn state (wide, infinity). FIGS. 15-17
(F 4.1/4.9/5.8, ω 38.0/20.7/11.9°) tie it to Embodiment 4, the example the file uses. The sheet is a 1-bit scan at
2320 × 3408 px; it was measured at native resolution. The drawn axis tilts 0.35° (8 px over 1315 px), so every height
is half the top-to-bottom distance between line centres (outer ink less the ~2 px line half-width).

A full-pupil spherical-aberration check first: 0.10 mm at wide, at most 0.25 mm anywhere in the range, varying with
zoom. That is design residual, not a misprint signature.

Scale: vertex crossings r1 at x = 705.5 px and r24 at 1919.5 px span the 114.62 mm wide track, giving 10.59 px/mm
(94.4 µm/px). Check spans: r1-r8 211.5 px over 19.75 mm (10.71 px/mm), r8-r9 453.5 px over 42.90 mm (10.57) and
r9-r24 549 px over 51.97 mm (10.56). Only the thinnest elements (L1, L2) are drawn slightly over-thick. A model outline
drawn on the scan at this scale falls on the drawn surface curves for every element.

| Surfaces | Element | Before (mm) | FIG. 14 (mm) | After (mm) | Evidence |
| --- | --- | --- | --- | --- | --- |
| r1, r2 | L1 | 25 | 23.7 | 25 | ratio 0.95, inside noise; kept |
| r3 | L2 front | 20 | 20.4 | 20 | flat-topped front rim; kept |
| r4 | L2 rear | 16.5 | 16.7 | 16.5 | rear face ends where a flat annulus steps out to the front rim; kept |
| r5, r6 | L3 | 20 | 16.5 | 16.5 | ratio 0.83; drawn rim corners sit where the R/sag at 16.5 mm puts them |
| r7, r8 | L4 | 18 | 16.0 | 16 | ratio 0.89; drawn edge thickness 1.5 mm matches 16 mm (0.7 mm at 18) |
| r9, r10 | L5 | 14 | 11.95 | 12 | ratio 0.85; tele axial floor 11.89 mm at r10 |
| r11-r13 | L6/L7 | 13 | 11.85 | 12 | ratio 0.91; FIG. 14 draws group II as one equal-height block; floor 11.71 mm |
| r14-r16 | L8/L9 | 9.5 | 8.26 | 8.4 | ratio 0.87; square-cut; kept above L10 as drawn; floor 8.04 mm |
| r17, r18 | L10 | 8.3 | 7.9 | 8.3 | ratio 0.95; kept |
| r19, r20 | L11 | 14 | 13.3 | 14 | ratio 0.95; kept |
| r21, r22 | L12 | 14 | 13.7 | 14 | ratio 0.98; kept |
| r23, r24 | L13 | 13.3 | 14.2 | 13.5 | wide corner chief ray grazed r24 (13.30 mm); raised to the gap-sag cap |

Clearance after the edit, maximum over all 257 zoom stations at Y = 21.63 mm: no axial clip and no blocked chief ray.
The tightest margins are r10 (axial 11.89 mm, rim 12), r11 (11.71, rim 12), r14 (8.04, rim 8.4) and r24 (chief
13.30, rim 13.5). The viewer's slightly wider paraxial-pupil launch (+0.2 % at tele) stays inside every changed rim.
The image-circle floor is clear, traced corner coverage stays 257/257 stations and the aperture census stays 257
stations within 3 % of the stated f-number. Engine half-field is unchanged at wide (33.97°, paraxially limited by r4)
and tele (21.59°), and rises from 25.72° to 26.06° at the middle station. Wide-open f/4.1 and the 8.144 mm wide iris
radius are unchanged. Wide-open geometric transmission at wide is 89.6/74.0/40.1 % at 32.2/35.1/38.0° (was
86.5/70.8/37.0 %); middle and tele curves are unchanged.

Off-axis vignetting at wide stays strong. It follows the drawn rims, not undersized estimates: L2's rear rim, which
FIG. 14 draws at 16.7 mm, and L13 cut the 38° bundle. The analysis note's package ray counts (65 × 65 disks,
noBracket events) predate this pass.

Open:

- FIG. 14 draws L13 about 0.5 mm taller than L12, its concave front meeting L12's rear face at the rim. At the default
  gap-sag allowance of 0.9, r23 can only reach 13.5 mm. At 14.0 mm the r22 and r23 faces are still 0.055 mm apart.
  `checks.gapSagFrac` 0.98 is the smallest two-decimal value that admits r23/r24 = 14.0 mm (0.97 is refused). With it,
  wide 38° transmission rises to 49.5 %. Closed: applied by the coordinator, 2026-10-23.
- The viewer joins L2's 20 mm front rim to its 16.5 mm rear rim with a straight slope; FIG. 14 draws a flat top and a
  vertical step.
- FIG. 14's S marker sits about 1.6 mm before r9; the model's iris offset is 1.0 mm. Both are drawing-level
  estimates, and the d values were not changed.
- The iris overshoot recorded above comes from the paraxial versus real entrance pupil. Rim values cannot fix it.

## 2026-10-23 — Deployment validation and wording pass

Re-read the local US 5,264,965 A, Embodiment 4, Tables 7–8 (PDF page 19) and FIG. 14 (PDF page 15).
The comparison covered 24 refracting surface rows, 13 N/ν pairs, nine variable-gap cells and three printed BF
values, with zero mismatches and zero aspheric coefficients. D8 includes the model's inferred 1.0 mm iris-to-r9
gap: its stored values plus that gap reproduce the printed 42.90/14.11/2.90 mm separations.

Patent versus model at wide/middle/tele: focal length 29.02/57.00/101.60 mm versus
29.017001717/57.000854804/101.600968015 mm; BF 40.22/53.04/76.73 mm versus Gaussian BFD
40.224463117/53.046210987/76.721554758 mm. The earlier deployment entry's 40.225 mm wide BF is superseded by
this more precise calculation. Nominal f-numbers remain 4.1/4.9/5.8. Printed half-fields are 38.0/20.7/11.9°;
the engine's drawing half-fields are 33.969655219/26.888963765/21.591686517°, a separate aperture-dependent
quantity. Iris radii remain 8.143954022/9.150411048/11.270312969 mm. The saved Ricoh construction image agrees
with FIG. 14 in 13 elements, 11 groups, four functional components and two cemented doublets; production
correlation remains probable rather than a confirmed factory prescription. Ricoh's discontinued-lens page
confirms the original Power Zoom's specifications and distinguishes the later 15/12 IF lens.

The coordinator's L13 radius of 14.0 mm and 0.98 gap-sag allowance are retained. The calculated r22/r23 clearance
is 0.055 mm, with maximum gap-sag fraction 0.974721481. The earlier semi-diameter section records its historical
13.5 mm state. Its L13 open item is now closed; the header and public rim prose describe the current state.

Changed the data header, subtitle, five specification lines, all 13 element roles, focus description and priority-date
erratum wording. The coordinator's name, key, visibility and glass labels remain unchanged; no APD tags were added.
The analysis now names each catalog equivalent while leaving production melts unidentified, removes package
history and obsolete ray/test counts, and explains focus, pupil, rim and spectral limitations in technical prose.
The earlier visibility/wording item is closed in place. The interpolation residuals and separate calculated
0.43 m focus travels were reproduced; these calculations do not add finite focus stations to the model.

Before/after built summaries and all 514 probe lines (257 zoom positions, two focus keyframes) are identical.
EFL, FOPEN, half-field, stop radius, BFD, focus keyframes and all protected prescription fields are unchanged.
The surface audit reports OK with no validation errors. Screenshot review is assigned to the coordinator.

Open: L2's rendered straight sloping edge approximates FIG. 14's flat top and vertical step. The inferred iris
offset remains 1.0 mm versus approximately 1.6 mm in the figure. The paraxial entrance pupil still slightly
overfills the real iris. The production prescription, melt identities and detailed factory cam/focus laws remain
unconfirmed; the table's spectral line and priority-year discrepancy remain unresolved.
