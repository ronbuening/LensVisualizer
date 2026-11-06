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
