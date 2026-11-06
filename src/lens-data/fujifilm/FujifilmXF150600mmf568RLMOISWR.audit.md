# Private reconstruction audit

Whole JP2023020586A Example1, GradeB probable XF150–600 family; other examples remain alternatives, no exact factory prescription. Native154.611–582.420/F5.76–8.19. Four literal W/T infinity/2.4m image-referenced states preserve fixed image325.037mm, camera-side2.85mm plate and final1mm gap. Inferred clear caps and native F/N zoom-dependent iris; source does not print physical iris schedule. Source finiteF5.85/9.48 retained as a comparison, not a second iris schedule. Zoom/focus interpolation is implementation only; finite MTF restricted to explicit endpoint conjugates. D-line n/V/theta_gF, no catalog or measured full dispersion. Centered OIS only, no OIS displacement law. Finite-aperture qualification remains unresolved: unchanged native inferred iris yields paraxial wide/tele nearF5.844315/9.591046 versus source5.85/9.48, and real tele nearF9.639929. No fit, iris schedule, mechanical iris constancy or nominal/effective explanation is asserted as a patent fact. Finite curves describe this stated aperture hypothesis; they do not certify the printed teleF9.48.

All source/model states, pre-MTF geometry hypotheses, rejected alternatives, native trace counters, raw pupil records and every MTF prior grid are retained. Initial11ingest rejections lacked required layout and were corrected without optical changes. The finite height-bracket harness failure and assumed nearYwindow history are retained separately. Source-angle scientific results and compiled-viewer integration are distinct. No commit, publication or deployment. (Closed 2026-11-06: integrated; see the sections below.)

## 2026-11-05 — Deployment check against JP 2023-020586 A

### Transcription

Tables 1A, 1B and 2 (pp. 34–35, read from 300 dpi renders, since the tables are images) were checked row by row: 42
lens surfaces plus the two plate surfaces (R, d, nd, νd, θgF), six variable gaps at all four states, six cemented
junctions including the L20–L22 triplet, and the stop position. No mismatch. The example has no aspheres. EFL is
154.601 / 582.397 mm against the printed 154.611 / 582.420, total length 325.037 mm as printed, and the 2.4 m close
state reproduces (2400.3 / 2400.0 mm from the image). Fujifilm's 24 elements / 17 groups, four Super ED and three ED
elements match Example 1's four 1.43700/95.10 and three 1.49700/81.54 glasses.

### Rim fixes

The inferred clear radii clipped the on-axis bundle at wide open, in both focus states, so the stop no longer set the
aperture: G3 (S12–S18) sat at 20.8 mm and the front of the L51/L52 focus doublet at 12.0. Following the least-change
rim rule, only the clipping surfaces rise, to the height `audit:aperture --raise` gives for the engine's iris, and each
element keeps the square rim Fig. 1 draws: S12/S13 22.2, S14/S15 22.1, S16/S17 21.7, S18 21.3, S24/S25 12.5 and S26
12.3 mm. Fig. 1, scaled from L11 = 39.1 mm, draws G3 at about 23.5 mm and the doublet as wide as the stop, about
13.9 mm, so both stay at or inside the drawn size. `audit:aperture` now finds no surface below the on-axis ray,
`audit:surface` passes and field coverage is 100 % at both stations. The nominal F5.76 cone is slightly wider than the
iris the file derives (13.79 against 13.96 mm), so `clearap` at that cone still grazes S12–S16 and S24 by under
0.2 mm. The MTF tables in the analysis were computed with the old rims. (Closed 2026-11-06: the wording pass removed
them.)

### Labels

L20 carried `cemented: "CD20"` while L21 and L22 carried `"CD21"`, which split the triplet in the inspector. All three
now carry `"CD21"`.

## 2026-11-06 — Deployment validation and wording pass

**Source re-read.** Tables 1A, 1B and 2 (pp. 34–35, rendered at 200 dpi) against the data file: 42 lens surfaces
(R, d, Nd, νd), the plate S43–S44 (2.850 mm, 1.51680 / 64.20, then 1.000 mm to the image) and DD6, DD11, DD18, DD22,
DD23 and DD26 in all four states match. All surfaces are spherical. Every element's stored `dPgF` equals its printed
θgF minus 0.6438 − 0.001682·νd exactly. Group signs from the tables: + − + + −; focus group L51–L52 (S24–S26) and
stabilization group L55–L57 (S30–S34), both negative (¶0162).

**Patent against model.** f 154.611 / 582.420 against EFL 154.601 / 582.397 mm; F/5.76 / 8.19 at infinity (the iris
is derived from these); total length 325.037 mm as printed. At 2.4 m the model gives object-to-image 2400.3 / 2400.0 mm,
magnification −0.0709 / −0.2426, and paraxial working F/5.844 / 9.590 against the printed 5.85 / 9.48. Computed group
focal lengths at infinity: G1 +183.1, G2 −53.6, G3 +85.4, G4 +131.6, G5 −38.0, focus doublet −78.0, stabilization
group −27.3, Gk +51.5 mm (|fis/fisr| 0.53, inside condition 21). `audit:aperture`: both stations within 3 % of the
stated F-number, with no rim, trace or iris limit.

**Maker comparison.** Fujifilm's published construction, 24 elements / 17 groups with four Super ED and three ED
elements, matches by count: the only glasses above νd 80 are 1.43700 / 95.10 (L2, L3, L5, L9) and 1.49700 / 81.54
(L7, L8, L12). The printed values coincide with Hoya FCD100 (θgF 0.5336) and Ohara S-FPL51 (θgF 0.5375); the patent
names no supplier, so the glass strings stay Unmatched. No Fujifilm construction diagram was compared in this pass.

**Fields changed.** Header comment rewritten in plain terms with every fact kept (near F-numbers rounded to two
decimals). `subtitle` → "JP 2023-020586 A, Example 1 — probable production design". `specs` → 24 ELEMENTS / 17 GROUPS,
DESIGN f = 154.6–582.4 mm, DESIGN F/5.76–8.19, ALL SPHERICAL, 4 SUPER ED / 3 ED ELEMENTS. All 24 `role` strings
replaced with group-specific roles. All 24 `glass` strings reworded to "Unmatched (patent nd X / νd Y; supplier not
disclosed)". All 24 `apdNote` strings reworded; `apd: "inferred"` added on L2, L3, L5, L9 (Super ED) and L7, L8, L12
(ED). `focus.description` rewritten. Gap label "DDSTO" → "DD23", the patent's name. `built.mjs` and `probe.mjs`
output unchanged; `audit:surface` OK. Analysis: the correlation, architecture, element, glass and focus sections
rewritten from the patent; an Image Stabilization section added; "Apertures, Stop and Numerical Validation" replaced by
"Aperture, Stop and Model Scope"; the MTF table and pupil-sample counts, computed before the rim change, removed.

Closed: the two `focus.conjugates[].source` strings and the `rearPlates[0].source` string, which kept run-together
wording ("JP2023020586A Example1 Table2 and paragraph0166:2.4m …"), now read as plain citations of Table 2 / ¶0166 and
Table 1B S43–S44.

Closed: Fujifilm's lens-configuration diagram on the XF150-600 specifications page marks Super ED on the second and
third elements of the front group, the middle element of the second group and the front element of the third group's
cemented pair (L2, L3, L5, L9), and ED on the first two elements of the third group and the rear element of the fourth
group (L7, L8, L12). That matches the `apd: "inferred"` tags exactly.

## 2026-11-06 — Semi-diameter pass against the patent figure

**Source.** JP 2023-020586 A, Fig. 1 on PDF p. 81 (Example 1, a single wide-end panel with movement loci; optical
axis vertical, object at the bottom), measured from a 381 dpi render, the native resolution of the embedded raster.
Fig. 1 is CAD-drawn with clean square rim edges, and both halves agree to within 1 px.

**Scale.** Axial: 0.2065 mm/px from the vertex crossings beside the axis at the wide-infinity spacings, S1 to the image
plane (1574 px for 325.037 mm), checked on S1–S12 (0.2065) and S1–S42 (0.2064). Transverse: 0.2235 mm/px from the sags
of drawn arcs of known radius at 75–165 px from the axis (S1 0.2229, S3 0.2236, S5 0.2244, S13 0.227, S21 0.2235;
S2 0.219). The drawing is anamorphic, about 8 % coarser across the axis than along it. At the transverse scale the
drawn stop (62.5 px) is 13.97 mm, the 13.96 mm stop radius of the F/5.76 cone, which confirms it. Rim heights below
are edge-line centres from both sides, ±0.5 px (±0.11 mm).

**Rims.**

| Surfaces | Element | Before | Fig. 1 | After | Evidence |
| --- | --- | --- | --- | --- | --- |
| S1, S2 | L1 | 39.1 | 169.5 px, 37.9 | 39.1 | Within 3 %; kept so the drawn L1–L2 step survives the light floor below |
| S3, S4 | L2 | 39.1 | 163.5 px, 36.5 | 37.7 | Drawn step order; lowest value meeting the corner-light rule |
| S5, S6 | L3 | 39.04 | 160.5 px, 35.9 | 37.1 | Same; the old rim was a 0.00 mm knife edge, the figure draws a 1 mm edge |
| S7 | L4 | 16.0 | 79.0 px, 17.7 | 17.7 | Figure, +11 % |
| S8, S9 | L4 rear, L5 front | 15.42 | curves merge near 15 mm and run flat to 17.7 | 15.42, land to 17.7 | Faces would meet at 16.25 mm; Fig. 1 draws a flat rim contact |
| S10 | L5–L6 junction | 16.0 | L5 17.7, L6 16.9 | 16.9 | Junction ends at the smaller element |
| S11 | L6 | 16.0 | 75.5 px, 16.9 | 16.9 | Figure; keeps the drawn L5 > L6 step |
| S12–S15 | L7, L8 | 22.2, 22.1 | 104.5 px, 23.4 | 23.4 | Figure; G3 drawn clearly larger than G4 |
| S16–S18 | L9–L10 | 21.7, 21.3 | 103.5 px, 23.1 | 23.1 | Figure; square doublet edge as drawn |
| S19, S20 | L11 | 20.8 | 91.5 px, 20.45 | 20.8 | Within 2 %, kept |
| S21, S22 | L12 | 20.8 | 88.0 px, 19.7 | 19.7 | Drawn L11 > L12 step; no light cost |
| S24–S26 | L13–L14 | 12.5, 12.5, 12.3 | 62.5 px, 13.97 | 14.0 | Figure, +12–14 %; as wide as the drawn stop |
| S27–S29 | L15–L16 | 12.0 | 45.5 px, 10.2 | 10.2 | Figure, −15 % |
| S30 | L17 | 12.0 | 44.5 px, 9.95 | 10.0 | Figure |
| S31 | L17–L18 junction | 12.0 | L17 9.95, L18 10.45 | 10.0 | Junction ends at the smaller element |
| S32, S33 | L18 rear, L19 front | 8.54 | L18's curve meets L19 near 7.8 mm, then one line to 10.45 | 8.54, land to 10.5 | Faces would meet at 9.0 mm; drawn rim contact |
| S34 | L19 | 12.0 | 46.75 px, 10.45 | 10.5 | Figure |
| S35 | L20 | 10.65 | 41.25 px, 9.2 | 9.2 | Figure; old edge 0.02 mm, now 1.25 mm |
| S36 | L20–L21 junction | 10.65 | L20 9.2, L21 10.3 | 9.2 | Junction ends at the smaller element |
| S37 | L21–L22 junction | 11.82 | L21 10.3, L22 9.7 | 9.7 | Same |
| S38 | L22 | 11.82 | 43.5 px, 9.7 | 9.7 | Figure; old edge 0.03 mm |
| S39, S40 | L23 | 11.94 | 46.0 px, 10.3 | 10.3 | Figure; old edge 0.01 mm |
| S41 | L24 front | 12.0 | curve ends at 39 px (8.7), flange to 47.0 px (10.5) | 9.0, land to 10.5 | 8.7 costs 1.3 points at tele, 8.9 costs 0.3, 9.0 costs none |
| S42 | L24 rear | 12.0 | 47.0 px, 10.5 | 10.5 | Figure |

The stop `sd` is unchanged. The lands are `rimExtensionSd` on S8, S9, S32, S33 and S41; they stay at the starting
`checks.gapSagFrac` (default 0.9).

**Corner light.** With every other rim final, the drawn G1 sizes (37.9 / 36.5 / 35.9) cost the tele corner 5.7 points
at infinity and 5.4 at 2.4 m against the starting rims. Lowering L2 or L3 below 37.7 / 37.1 breaks the 3-point line; L1 could go to 38.1 at
the same cost but would compress the drawn 1.4 mm L1–L2 step to 0.4 mm, so it keeps 39.1. All three now sit 1.2 mm
above the drawing with its steps. Engine vignetting, wide open, final rims against the starting rims: wide infinity
corner (5.2°) 72.6 → 74.5 %, with mid-field gains up to 4.8 points; wide 2.4 m corner (5.1°) 75.8 → 77.8 %; tele
infinity corner (1.4°) 76.3 → 73.5 %, worst loss 2.9 points there; tele 2.4 m corner (1.2°) 81.1 → 78.7 %, worst loss
2.5 points at 1.0°. On their own the G5 rear rims cost at most 1.1 points (wide corner), mostly at the triplet, and
the G2, G3 and focus-doublet rims win more than that back at the wide end.

**Clearance.** Real-ray trace at Y = 14.2 mm, both stations, infinity and 2.4 m: no surface clips the on-axis beam or
blocks the corner chief ray, and the slight graze of the nominal F/5.76 cone at S12–S16 and S24 noted on 2026-11-05 is
gone. The aperture check finds both stations within 3 % of the stated F-number with no rim limit; the validator
passes; the image-circle floor shows nothing undersized; traced field coverage is 100 % at both stations. The engine
still gives EFL 154.60 mm, half-field 5.2° at both ends, F/5.76 and F/8.19 and stop radii 13.79 / 9.70 mm. The
on-axis spherical aberration at full pupil (0.008 / −0.032 mm, wide / tele) shows no prescription misprint. No
aspheres, so no departure figures move.

**Maker comparison.** Fujifilm's lens-configuration image agrees with Fig. 1 in order, grouping and proportions within
its resolution: G1 descends L1 > L2 > L3, G3 is about 1.3 times G2 and G4 about 0.9 times G3, the iris and the focus
doublet are about 0.6 times G3, and the rear group about 0.45 times G3. It marks Super ED on elements 2, 3, 5 and 9 and
ED on elements 7, 8 and 12, and shows no aspherical element.

**Limits.** L21, the middle of the cemented triplet, is drawn 10.3 mm, larger than both partners; its faces are both
junctions, which end at the smaller partner, so the model draws it at 9.2–9.7 mm. L18's 10.45 mm rim shows only through
its S32 land, for the same reason at S31. G1 stays 1.2 mm above the drawing for corner light.
