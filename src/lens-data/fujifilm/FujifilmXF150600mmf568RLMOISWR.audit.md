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

## 2026-11-06 — Solved intermediate zoom stations

**Reason.** Linear interpolation between the two printed stations alone is not a zoom path: at zoomT 0.5 it gives
EFL 836.9 mm, the paraxial image 207.6 mm behind the sensor and 14.5 % on-axis light. Intermediate stations are
therefore solved.

**Fig. 1 loci.** PDF p. 81 rendered at 400 dpi. Under the section (page horizontal = zoom, wide at the left; page
vertical = axial position) G1 and Gk are straight hatched lines and G2, G3 and G4 are curves that all start at the same
column and end in arrow tips at the same column, 347 px later. Centre lines are ink-weighted run centroids per column
over the clean 315 px before the arrowheads, plus the arrow tip, fitted with a degree-6 polynomial in the drawn
fraction s (rms 0.11–0.16 px; degrees 4–8 move the solved stations by under 0.05 mm). Drawn end travel against the
section's axial scale (0.1967 mm/px at 400 dpi, from the 0.2065 mm/px at 381 dpi above): G2 +72.66, G3 −3.53, G4 +6.52
mm against the printed +72.505, −3.575, +6.641, so the loci are drawn to scale. Each locus is scaled by its own end
ratio (G2 0.1963, G3 0.1993, G4 0.2004 mm/px) so its ends match the printed travel exactly. Read this way, G3 swings
11.31 mm toward the image (peak at s = 0.47) and returns; G4 dips 5.58 mm toward the object (s ≈ 0.40) and then
rises.

**Method.** At each s, G2 and G3 take their drawn positions; G4 is solved paraxially so the infinity image lands
1.000 mm behind the plate (the printed last gap); the focus doublet keeps its printed infinity position (DD23 5.239,
DD26 26.884 at both printed ends) and is solved so the close row focuses 2400 mm from the image plane. DD6 + DD11 +
DD18 + DD22 stays 136.764 and DD23 + DD26 32.123 mm. Displacements are rounded to 0.001 mm before the gaps are
written; residual infinity defocus at the solved stations is under 0.004 mm and close-row object-to-image distances
are 2399.6–2400.3 mm. No R, fixed d, n or ν changed.

**G4 agreement.** Over s = 0–1 the solved G4 runs rms 0.29 mm from its drawn locus, at most 0.61 mm (s = 0.85, f ≈
480 mm), about 3 px on the figure; solved minimum −5.49 mm at s = 0.41 against the drawn −5.58. The figure's G2/G3
loci and a focus solve therefore reproduce its G4 locus, and the stations use G2 and G3 from the figure as drawn.

**Stations.** Sixteen solved stations, spaced in s so the worst interpolated infinity defocus is about equal in every
segment and stays under 0.30 mm, roughly the depth of focus at f/8 (fifteen would sit at the limit). Displacements are
from the wide end, positive toward the image.

| Station | s | x2 | x3 | x4 (drawn − solved) | EFL | F/N | Close DD23 / DD26 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 0 (printed) | 0 | 0 | 0 | 0 | 154.601 | 5.76 | 6.686 / 25.437 |
| 1 | 0.071 | 9.396 | 3.096 | −1.919 (+0.17) | 172.487 | 5.83 | 7.028 / 25.095 |
| 2 | 0.144 | 17.874 | 5.783 | −3.377 (+0.17) | 191.883 | 5.91 | 7.440 / 24.683 |
| 3 | 0.217 | 25.377 | 7.950 | −4.408 (+0.09) | 212.493 | 6.00 | 7.924 / 24.199 |
| 4 | 0.290 | 32.078 | 9.587 | −5.077 (0.00) | 234.538 | 6.10 | 8.496 / 23.627 |
| 5 | 0.361 | 37.950 | 10.662 | −5.419 (−0.07) | 257.580 | 6.20 | 9.156 / 22.967 |
| 6 | 0.430 | 43.135 | 11.212 | −5.477 (−0.09) | 281.736 | 6.32 | 9.918 / 22.205 |
| 7 | 0.496 | 47.676 | 11.276 | −5.285 (−0.06) | 306.668 | 6.44 | 10.783 / 21.340 |
| 8 | 0.559 | 51.670 | 10.911 | −4.871 (+0.03) | 332.317 | 6.57 | 11.760 / 20.363 |
| 9 | 0.619 | 55.194 | 10.171 | −4.256 (+0.15) | 358.599 | 6.71 | 12.857 / 19.266 |
| 10 | 0.676 | 58.313 | 9.111 | −3.456 (+0.29) | 385.407 | 6.86 | 14.081 / 18.042 |
| 11 | 0.730 | 61.076 | 7.783 | −2.484 (+0.43) | 412.634 | 7.02 | 15.439 / 16.684 |
| 12 | 0.781 | 63.528 | 6.239 | −1.353 (+0.54) | 440.117 | 7.18 | 16.933 / 15.190 |
| 13 | 0.830 | 65.748 | 4.488 | −0.047 (+0.61) | 468.294 | 7.36 | 18.600 / 13.523 |
| 14 | 0.876 | 67.718 | 2.609 | 1.403 (+0.60) | 496.518 | 7.55 | 20.414 / 11.709 |
| 15 | 0.919 | 69.463 | 0.647 | 2.979 (+0.51) | 524.544 | 7.75 | 22.365 / 9.758 |
| 16 | 0.961 | 71.080 | −1.458 | 4.755 (+0.31) | 553.675 | 7.97 | 24.556 / 7.567 |
| 17 (printed) | 1 | 72.505 | −3.575 | 6.641 | 582.397 | 8.19 | 26.890 / 5.233 |

Stations 0 and 17 keep the printed spacings, `published: true` and `publishedFocus: [1]`; 1–16 are
`published: false` with `publishedFocus: []`. The tele 2.4 m conjugate points at station 17.

**F-number (inference).** The derived stop radius is 13.786 mm at wide (F/5.76) and 9.696 mm at tele (F/8.19), 29.7 %
apart, so the iris is not constant. Because the stop sits in fixed G5 and the image plane is fixed, EFL × (marginal
height at the stop) is the same at every zoom position, and one radius gives the same F-number everywhere (13.786 mm
gives F/5.761 at every solved station). The solved stations therefore take a radius interpolated linearly in EFL
between the two derived ends, and F/N = 5.76 × 13.786 / r, rounded to 0.01. This is a modeling inference; the patent
prints no intermediate F-number and Fujifilm's aperture schedule was not used. `aperture.fStops` is unchanged.

**Checks.** `probe.mjs`: every station's EFL matches its `focalLengthMm`, infinity defocus ≤ 0.004 mm at solved
stations, close rows 2399.6–2400.3 mm from the image plane. Fine scan of the engine's linear interpolation (zoomT
steps of 0.01 and 0.0005): the paraxial infinity image stays within 0.273 mm of the plane (worst at zoomT 0.912,
between stations 15 and 16); the 2.4 m rows midway between stations focus 2431 mm (first segment) down to 2401 mm
(last), 2398.4–2431.2 mm over the whole range. `vig.mjs` at all 18 stations and 17 midpoints: on-axis 100.0 %
everywhere; corner light where sampled runs 74.5 % (wide), 74–79 % in between, 73.5 % (tele). `clearap2 --Y 14.2` at
infinity and 2.4 m: no stored rim below the axial marginal ray or the chief ray at any station (largest G3 marginal
22.39 against 23.4 mm). `audit:aperture`: 18 stations within 3 % of the stated F-number, no rim, trace or iris limit.
`audit:surface`: OK. No rim changed. Targeted tests: closeFocusEndpoint, publishedStations, focusKeyframes,
zoomApertureModel, irisInAir, duplicatedValues and schemaVersion pass.

## 2026-11-06 — Second review: diagram, labels and movement

**Compared.** The local page (wide and tele, infinity and 2.4 m, 332 mm, the zoom and focus movement overlays, the
element inspector for L12, L33, L51 and L59) against Fig. 1 on PDF p. 81, re-measured at 381 dpi on the clean side of
the axis (axis at x = 775 px; transverse 0.2235 mm/px as above); Table 2 on p. 35; Fig. 4 on p. 82 (Example 1
aberrations, read at 800 and 1600 dpi); and Fujifilm's lens-configuration drawing. Rim decisions follow the owner's
2026-11-01 rule on cuts and lands, measured against the rims saved before the figure pass, at all 18 stations.

**Re-measurement.** Fig. 1 draws L11 170 px (38.0 mm), L12 164 px (36.65), L13 161 px (36.0), L21 and L22 79–80 px
(17.7–17.9), L23 76 px (17.0), L31 and L32 105 px (23.5), L33–L34 104 px (23.2), L41 92 px (20.6), L42 88 px (19.7),
the stop and L51–L52 62–63 px (13.9–14.1), L53–L54 46 px (10.3), L55–L57 45–47 px (10.1–10.5), the triplet 42 / 46 /
44 px (L58 9.4, L59 10.3, L60 9.8), L61 46–47 px (10.4) and L62 47 px (10.5). Every rim the figure pass set agrees with
these within 0.2 mm, and every rim it raised above the earlier values (S7, S10, S11, S12–S18, S24–S26) is supported.
The silhouette on the page has the figure's height order: G1 descending L11 > L12 > L13, then G3 > G4 > G2 > stop and
focus doublet > rear group.

**Cuts and lands.** Corner-light cost against the earlier rims, wide open at infinity, every station. With the
figure-pass rims the long end lost up to 3.4 points (496.5 mm at 1.6°, 79.9 → 76.5 %; 553.7 mm at 1.4°, 77.9 →
74.7 %); the printed tele station alone lost 2.8, which is why the figure pass, which checked only the printed
stations, kept G1 where it did. Restoring L12 or L13 alone wins back almost nothing (0.1 and 0.4 points), because each
shadows the other; restoring both wins back up to 2.2 points (553.7 mm, 74.7 → 76.9 %). The smallest equal raise of both that keeps every
station within 3 points in both field modes below is 0.2 mm, which keeps the drawn L11–L12–L13 steps (1.2 and 0.6 mm
against the drawn 1.35 and 0.65 mm).

| Surfaces | Element | Earlier rim | Fig. 1 | Figure pass | Final | Verdict, points of light it costs |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| S3, S4 | L12 | 39.1 | 36.65 | 37.7 | 37.9 | Partly raised; with S5/S6 the long-end worst falls from 3.4 to 2.7 |
| S5, S6 | L13 | 39.04 | 36.0 | 37.1 | 37.3 | Partly raised, together with S3/S4 |
| S21, S22 | L42 | 20.8 | 19.7 | 19.7 | 19.7 | Kept: 0.0 |
| S27–S29 | L53–L54 | 12.0 | 10.3 | 10.2 | 10.2 | Kept, slight: 0.4 (172.5 mm, 2.3°) |
| S30, S31 | L55 | 12.0 | 10.1 | 10.0 | 10.0 | Kept: 0.0 |
| S34 | L57 rear | 12.0 | 10.5 | 10.5 | 10.5 | Kept: 0.0 |
| S35–S38 | L58–L60 triplet | 10.65 / 11.82 | 9.4–10.3 | 9.2 / 9.7 | 9.2 / 9.7 | Kept, slight: 1.5 (358.6 mm, 2.2°) |
| S39, S40 | L61 | 11.94 | 10.4 | 10.3 | 10.3 | Kept: 0.0 |
| S41 | L62 front | 12.0 | 8.7, flange 10.5 | 9.0 + land 10.5 | 9.0 + land 10.5 | Kept: 0.0 with S42 |
| S42 | L62 rear | 12.0 | 10.5 | 10.5 | 10.5 | Kept: 0.0 |
| S8, S9 land | L21 rear, L22 front | 15.42, no land | rim contact to 17.7 | land 17.7 | land 17.7 | Kept: 0.0, drawn contact |
| S32, S33 land | L56 rear, L57 front | 8.54, no land | rim contact to 10.5 | land 10.5 | land 10.5 | Kept: 0.0, drawn contact |

No `checks.gapSagFrac` is set; the default passes. Final worst loss at every station, every field inside the APS-C
corner: 2.7 points (524.5 mm at 1.5°, 78.8 → 76.1 %) with the analysis field following the real chief ray. Corners,
earlier / figure pass / final: wide infinity (5.2°) 72.6 / 74.5 / 74.5 %; 496.5 mm (1.6°) 79.9 / 76.5 / 77.1 %;
553.7 mm (1.4°) 77.9 / 74.7 / 75.2 %; tele infinity (1.4°) 76.3 / 73.5 / 74.0 %. At 2.4 m with a real object point
2400 mm from the image plane, at the 14.175 mm corner: wide 75.7 / 78.1 / 78.1 %, 332 mm 90.7 / 89.2 / 89.2 %, 440 mm
95.5 / 94.9 / 94.9 %, tele 97.1 / 96.0 / 96.5 %.

**Field axis at 332–468 mm.** `projection: { kind: "rectilinear", fullFieldDeg: 10.4 }` fixes the engine's raw half-field
at 5.2° at every zoom position. Where the chief ray at 5.2° cannot be traced (stations 8–13, 332–468 mm, and zoom
positions between them), the analysis field stays at 5.2° instead of stopping at the format corner (1.7–2.4°): field
coverage reports those six stations unsolved, and the Vignetting tab runs to 5.2° with 0 % past 4.3°. With the block
removed, all 18 stations reach the corner at 100 % and the curves stop at the corner. The rim costs above use that
corner-limited field; with the block in place `rimcost.mjs` reports up to 25 points at fields beyond the corner and
3.5 points at 358.6 mm, both from that axis, not from a rim. Closed: the coordinator removed the `projection` block (a single 10.4° field is only true at the wide end); field coverage now reaches the corner at all 18 stations.

**Clearance after the change.** `audit:surface` OK; `audit:image-circle` nothing undersized; `audit:aperture` 18
stations within 3 % of the stated F-number with no rim, trace or iris limit; `clearap2` at the corner (ω per station
from 14.175 mm) at infinity and 2.4 m: no surface below the axial marginal ray or the chief ray (largest G1 marginal
35.26 mm against 37.9). Engine half-field 5.2°, F/5.76–8.19 and stop radii 13.79 / 9.70 mm before and after.

**Labels and brackets.** Fig. 1 names every element (L11–L13, L21–L23, L31–L34, L41–L42, L51–L62) and draws
brackets for G1–G5, GM, GE, GPA, the focus group L51–L52, the stabilization group L55–L57 and Gk. The file had no
`groups` or `doublets`, element names L1–L24 and no `diagramLabel`, so the page drew no brackets, numbered the
elements 1–24 and its movement overlay fell back to 17 construction groups.

| Field | Before | After |
| --- | --- | --- |
| Element `name` / `label` / `diagramLabel` | L1–L24 / Element 1–24 / none | Fig. 1's L11–L62 / Element L11–L62 / same |
| `groups` | none | G1 (S1–S6), G2 (S7–S11), G3 (S12–S18), G4 (S19–S22), G5 FOCUS (S24–S26), G5 OIS (S30–S34), Gk (S35–S42) |
| `doublets` | none | C1 S9–S11, C2 S16–S18, C3 S24–S26, C4 S27–S29, C5 S30–S32, C6 S35–S38 |
| `cemented` | CD5, CD9, CD13, CD15, CD17, CD21 | C1–C6, matching the brackets |
| `role` cross-references | L5, L6, L9, L10, L15, L17, L18 | L22, L23, L33, L34, L53, L55, L56 |
| `focus.description` | "L13–L14 doublet (…, the patent's focus group L51–L52)" | "L51–L52 doublet (S24–S26), the patent's focus group inside G5" |

G5 is split into its moving and named parts rather than bracketed whole, so that the movement overlay tracks the focus
group; L53–L54 is left without a bracket, as in Fig. 1. Every element `type` agrees with the signs of R; there are no
aspheric surfaces and no `A` labels; the stop sits between L42 and L51 at S23. The inspector shows the new names,
"DOUBLET C3" and "TRIPLET C6", focal lengths for every element checked, and APD (INFERRED) on L12. The `apd: "inferred"`
tags sit on L12, L13, L22 and L33 (Super ED) and L31, L32 and L42 (ED), the second, third, fifth, ninth, seventh, eighth
and twelfth elements Fujifilm's drawing marks; the patent's conditions 5–12 and 16–17 describe such glasses but do not
name these elements, so `"inferred"` stays.

**Movement.** Stations ascend 154.611 → 582.42 mm and every `values` row is in that order; keyframe 0 is infinity and
keyframe 1 is 2.4 m. Table 2 (p. 35) matches stations 0 and 17 exactly. From the gaps, wide to tele: G1 fixed; G2
+72.505 mm toward the image, monotonic; G3 +11.28 mm toward the image at station 7 and back to −3.575 mm; G4 −5.48 mm
toward the object at station 6, then +6.641 mm; G5 fixed (DD6 + DD11 + DD18 + DD22 = 136.764 mm at every station).
Focus: only DD23 and DD26 change, sum 32.123 mm; the doublet moves toward the image by 1.447 mm (wide) to 21.651 mm
(tele). The overlays show the same: in zoom mode G2 travels 72.51 mm and G3 and G4 reverse; in focus mode at the tele
end only G5 FOCUS moves, 21.65 mm toward the image. The focus slider's far end reads 2.40 m.

**Aberrations against Fig. 4.** Distortion: +0.62 % at 5.2° wide and +1.37 % at 1.4° tele against the plotted +0.65
and +1.29 %. Astigmatism, from the image plane: wide 5.2° sagittal +31 / tangential −44 µm against the plotted +42 /
−36; tele 1.4° −67 / −326 µm against −59 / −299, and −34 / −146 against −30 / −138 at 1.05°. Lateral colour at the
corner: wide C +6.3, F −4.6, g +4.2 µm against curves at about +5.5 and −4.5; tele C −6.7, F +0.2, g −10.6 against
about −7.9 and +1.2. On axis, from the image plane: d starts at −9 µm (wide) and −6 µm (tele) as plotted; C, d and F
agree with the plotted curves within the 5 µm reading error at both ends, at the axis and the rim. The g line does
not: the plot's dash-dot curve runs about +32 µm at the axis and +45 µm at the rim at wide, where the model gives +13
and +23, and about +46 and −70 µm at tele, where the model gives +80 and −83. Every element's g index reproduces the
printed θgF exactly and its νd within 0.08, so no single glass label explains it; the dash-dot and dashed curves
overlap near the axis at wide, so line identity there is the weakest part of this reading.

**Closed by the coordinator.** The `projection` block is removed. The header's dispersion line now says each glass
carries its catalog equivalent for C/d/F while the printed θgF, kept as dPgF, sets the g-line. L53's S-TIL1 curve gives
PgF 0.5686 against the printed 0.56859, so its label now reads as a θgF equivalent too (21 of 24 elements).
