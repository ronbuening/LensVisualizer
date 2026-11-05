# Private reconstruction audit

Whole JP2023020586A Example1, GradeB probable XF150–600 family; other examples remain alternatives, no exact factory prescription. Native154.611–582.420/F5.76–8.19. Four literal W/T infinity/2.4m image-referenced states preserve fixed image325.037mm, camera-side2.85mm plate and final1mm gap. Inferred clear caps and native F/N zoom-dependent iris; source does not print physical iris schedule. Source finiteF5.85/9.48 retained as a comparison, not a second iris schedule. Zoom/focus interpolation is implementation only; finite MTF restricted to explicit endpoint conjugates. D-line n/V/theta_gF, no catalog or measured full dispersion. Centered OIS only, no OIS displacement law. Finite-aperture qualification remains unresolved: unchanged native inferred iris yields paraxial wide/tele nearF5.844315/9.591046 versus source5.85/9.48, and real tele nearF9.639929. No fit, iris schedule, mechanical iris constancy or nominal/effective explanation is asserted as a patent fact. Finite curves describe this stated aperture hypothesis; they do not certify the printed teleF9.48.

All source/model states, pre-MTF geometry hypotheses, rejected alternatives, native trace counters, raw pupil records and every MTF prior grid are retained. Initial11ingest rejections lacked required layout and were corrected without optical changes. The finite height-bracket harness failure and assumed nearYwindow history are retained separately. Source-angle scientific results and compiled-viewer integration are distinct. No commit, publication or deployment.

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
0.2 mm. The MTF tables in the analysis were computed with the old rims.

### Labels

L20 carried `cemented: "CD20"` while L21 and L22 carried `"CD21"`, which split the triplet in the inspector. All three
now carry `"CD21"`.
