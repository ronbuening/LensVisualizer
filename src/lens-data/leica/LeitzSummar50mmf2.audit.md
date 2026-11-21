# Package authoring audit (2026-11-11)

Authored outside the repo against engine commit e3434b, with no new dependencies. The package recorded these
invariants: 10 radii and 9 thicknesses/air spaces scaled exactly 0.5, six elements on three sodium-D glass pairs, and the
printed image plane 68.3 × 0.5 = 34.15 mm. A TypeScript transpile of the file gave no diagnostics, and the lens built
without overrides.

A first metadata check rejected an example label that carried the amendment-version text with a null id; the label was
changed to "Sole example", and the 1936 amended-specification note moved to the header comment and analysis. No optical
value was changed in response to that error. Semi-diameters were fixed from the figure before any tracing and were not
fitted. The sodium-D indices were used without conversion. The package's own field traces showed axial clipping with
its first rim set (below); it made no claim of a full typecheck, corpus test, build, viewer check or MTF run.
(Closed 2026-11-11: those checks belong to the repo integration.)

## Figure-mapping correction (package, second version)

The first version's common-minimum rims were replaced for the outer and cemented faces only: R3/R4 = 11.6 mm and
R7/R8 = 11.5 mm, read from each face's own full-height outline in the patent drawing. The concave R5/R6 kept the
conservative bevel-tip values 8.7/8.6 mm. These figure-only values were chosen before ray testing and are not factory
clear apertures; the drawing's own distortion is unknown. Radii, spacings, sodium-D indices, the 34.15 mm image plane
and the inferred midpoint stop were unchanged (package figure-mapping review record, not in the repo).

## Deployment validation (2026-11-11)

- Source: GB 423,468 A, Espacenet original-document scan (4 pp., amended specification reprinted 1936), kept as
  `patents/GB423468A.pdf`. Page 2 states the whole-objective focal length as 100 mm, so 0.5 is the right scale; every R
  and d is exactly 0.5× the print. 10 R, 9 gaps plus the back gap and 3 glass pairs checked: no mismatches.
- First order: EFL 49.975 mm, f/2; back gap kept at the printed 68.3 × 0.5 = 34.15 mm (paraxial 34.099). The model
  reproduces the patent's own image distances at 1:2.7 and 1:2 (67.97 / 68.23 vs printed 68.0 / 68.2).
- Product: Summar 5 cm f/2 (1933–40), 6 elements / 4 groups, Leica screw mount. The Leitz sectional "THE SUMMAR"
  (zeissikonveb.de) matches every element shape, both cemented surfaces and the flat-fronted L6.
- Integration fixes: maker "Leica" (folder `leica/`, as the Noctilux), `catalog.lensMounts` ["leica-ltm"],
  `catalog.closeFocusM` 1 m, aperture scale 2–2.2–3.2–4.5–6.3–9–12.5 (the Summar's continental series, max 12.5).
- Rims: a real-ray clearance check flags surface 5 by 0.05 mm (8.75 vs `sd` 8.70) with its own stop; `audit:aperture`
  passes within 3 % of f/2 with the engine iris, so no rim edit at integration (SD pass).
- Open for the cleanup pass: the analysis calls L4/L5 menisci (they are biconcave / biconvex) and claims "26/26 axial";
  public wording throughout; `fullFieldDeg` 48 is unverified (the 24×36 diagonal gives 46.8°). (Closed 2026-11-11 in
  the cleanup pass below, except `fullFieldDeg`, which stays open.)

## 2026-11-11 — Cleanup and wording pass

Fields changed in `LeitzSummar50mmf2.data.ts` (no optical value, rim or stop position changed):

- Header comment rewritten in plain prose with every fact kept: patent and counterpart, f = 100 printed scale and the
  uniform 0.5 factor, sodium-D indices, the printed 34.15 mm back gap versus the 34.099 mm paraxial value, the inferred
  midpoint stop, figure-estimated semi-diameters and the infinity placeholder.
- `subtitle`: "GB423468A amended specification; qualified scaled representative, native sodium D" →
  "GB 423,468 A, sole example — scaled ×0.5; production correlation not manufacturer-confirmed".
- `specs`: three package lines → "6 ELEMENTS / 4 GROUPS", "DESIGN f = 50 mm", "DESIGN F/2", "ALL SPHERICAL",
  "F/2–12.5, COLLAPSIBLE LTM MOUNT" (the Noctilux's spec form).
- `catalog.focalLengthMm.design` stays 50: the patent's stated f = 100 mm scaled by 0.5, as the Noctilux uses the
  patent's stated focal length (traced EFL 49.975 mm).
- `focus.closeFocusM` 1000000000000000.0 → 1e15 (same value); `focus.description` → "Infinity focus only; the patent
  prints no close-focus spacing. The production Summar focuses to 1 m on a helicoid; that movement is not modeled."
- Element `type` from the signs of R: L1/L2 Positive Meniscus, L3 Negative Meniscus, L4 Biconcave Negative, L5 Biconvex
  Positive, L6 Plano-Convex Positive (all were "Patent spherical element"). `role` lines replaced with each element's
  place in the layout.
- Glass labels, compared at the D line (589.2938 nm, `indexReference` "D" kept): L3 → "LF5 (Schott)", nD 1.581315
  (Δ −0.85e-4), νD 40.843 (Δ +0.04); L4 → "S-TIL26 (Ohara; LF6-type equivalent)", nD 1.567205 (Δ −0.95e-4), νD 42.808
  (Δ +0.01; Hoya E-FL6 also fits at Δ −0.97e-4 / +0.03, and no period Schott LF6 row is in the catalog). L1/L2/L5/L6
  stay unmatched: the nearest SK16-type rows (N-SK16, BACD16, S-BSM16) are 1.17e-4 to 1.19e-4 higher in nD, outside the
  1e-4 tolerance; the label is now "Unmatched (nD 1.6202 / νD 60.4; SK16-type dense crown)". No element carried
  nC/nF/ng. The d/D line test is inconclusive (LF5/LF6 match the printed index at d exactly, SK16 sits closer at D);
  "D" follows the patent's own nD and "D line" wording.

Analysis: package vocabulary, run-together numbers and the package's ray-count table removed; the "Verification
Summary" became "Model Scope and Limitations"; L4/L5 corrected to biconcave/biconvex; the "26/26 axial" claim replaced
by the 0.05 mm graze at R5; the patent's per-surface and 1:2.7 / 1:2 image-distance agreement, the cemented-pair
focal lengths and the LF5 / S-TIL26 matches added; the Leitz sectional, Leica Society International and Ken Rockwell
pages cited.

Engine numbers before and after the pass are identical: EFL 49.974672 mm, FOPEN 2, half-field 24°, stop index 5,
stop semi-diameter 8.821826 mm, paraxial BFD 34.0987 mm, back gap 34.15 mm, total length 64.275 mm. `audit:surface`
reports no validation errors; `audit:aperture` reports the lens within 3 % of f/2 with no rim limit.

Open:
- `projection.fullFieldDeg` 48: no Leitz figure found; the patent states about 52° and the 24 × 36 mm diagonal at
  50 mm gives 46.8°.
- Surface 5 rim: `sd` 8.70 is 0.05 mm under the f/2 axial marginal ray (8.75 mm). With the midpoint stop, R5's sag
  limits `sd` to about 8.8 mm. (Closed 2026-11-11: raised to 8.9 mm in the semi-diameter pass below.)
- Stop position: the Leitz sectional puts the iris at about 59 % of A2 behind R5 (about 4.6 / 3.26 mm scaled) rather
  than the midpoint; a 4.6 / 3.26 split with R5 `sd` 9.0 clears the axial graze and reduces off-axis vignetting.
- Close focus 1 m (`catalog.closeFocusM.marketing`): supported by dealer listings only; no Leitz source located.

## 2026-11-11 — Semi-diameter pass against the patent figure

Source: `patents/GB423468A.pdf`, page 4, the single drawing sheet ("This Drawing is a full-size reproduction of the
Original"), measured at the scan's native 300 dpi with the optical axis horizontal. The drawing has no axis line; the
axis (page y ≈ 1643.5 px) is the midpoint of the top and bottom edges of all four components, which agree within
±2 px. Scale: vertex crossings on the axis row put R1 at x 850.5 and R10 at x 1570, 719.5 px for the printed 60.25 mm
vertex length, so 11.94 px/mm at the printed f = 100 mm (23.88 px per model mm). The drawing is about 1 % over full
size, and its spacings are not all proportional (L1 and L6 are drawn about 20 % thin, A2 about 8 % wide). The radial
scale was confirmed on the R5 arc: at 22.5 px and 42.5 px behind its vertex, the drawn arc sits 110 and 149 px off the
axis, as R5 = 23.76 mm predicts at 11.94 px/mm. The rim corners of R5 and R6 also land where their sags predict
(x 1195 vs 1195.5, x 1240 vs 1237).

| Surface | Baseline `sd` | Figure (scaled ×0.5) | Ray need (f/2, engine iris) | New `sd` | Evidence |
|---|---:|---:|---:|---:|---|
| 1, 2 | 13.0 | 13.3 (square tip, top edge) | 12.49 | 13.0 | within 2.5 %, kept |
| 3, 4 | 11.6 | 11.6 (flat top 11.62, bottom 11.58) | 11.61 at 3 | 11.7 | on-axis clip at 3 by 0.01 mm; square rim, both faces |
| 5 | 8.7 | 9.0 (bevel corner, 214.5 px) | 8.82 | 8.9 | on-axis clip by 0.12 mm; least raise, within the drawn 9.0 |
| 6 | 8.6 | 9.0 (bevel corner, 216 px) | 8.61 | 8.7 | on-axis clip by 0.01 mm; least raise |
| 7, 8 | 11.5 | 11.75 (flat top 11.64, bottom 11.85) | 9.44 | 11.7 | drawn at the same height as L2–L3; restores that equality; no light change |
| 9, 10 | 12.4 | 12.7 (top 12.79, bottom 12.54) | 9.26 | 12.4 | within 2 %, kept |

The "ray need" column is the height at which the on-axis ray the engine iris admits (entering slightly above the
12.494 mm paraxial pupil, because of pupil aberration) meets each face; three faces were below it. The lens's spherical
aberration was checked first (longitudinal +0.017 mm at the full pupil, −0.114 mm at 0.7), so the clip is not from a
prescription error. R5's new rim lies 4.01 mm behind its vertex, 0.08 mm past the midpoint stop plane (3.93 mm); the
f/2 beam itself meets R5 at 8.82 mm, at the stop plane's depth, so any R5 rim that passes the beam reaches the stop
plane. The surface validator accepts it. R6 was not raised to the drawn 9.0 mm: that would add 1–3 points of
mid-field light beyond what the axial beam needs, inside the figure's noise.

Engine values are unchanged: EFL 49.975 mm, FOPEN 2.000, half-field 24°, stop semi-diameter 8.822 mm. The surface
validator reports no errors. The aperture census is within 3 % of f/2 with no rim limit, and no surface is now below
the stated on-axis ray (before: 3, 5 and 6). The image-circle check finds none undersized; corner coverage stays 100 %.
The meridional clearance trace at Y = 21.63 mm flags no axial clip and no chief-ray block. Geometric transmission
(engine curve, wide open) changes from 95.9 / 89.5 / 79.9 / 63.0 / 51.0 % to 100.0 / 91.4 / 81.4 / 63.2 / 51.1 % at
0° / 8.7° / 14.5° / 20.4° / 23.3°. No face is below its baseline, so there are no cuts to price; one-at-a-time restores
win back nothing.

Open:
- Stop position (repeated from the cleanup pass): a rearward iris, as the Leitz sectional draws it, would keep R5's rim
  in front of the stop plane.
- The drawing puts L4–L5's lower edge 0.2 mm farther from the axis than its upper edge (11.85 vs 11.64 mm); the model
  keeps one value, 11.7 mm.

## 2026-11-11 — Second review: diagram, labels and movement

Compared: the local page (infinity, `mv=focus`, `focus=1` and every element inspector) with the drawing sheet of
`patents/GB423468A.pdf` (page 4) read at the scan's native 300 dpi, the patent text (pages 1–2), and the validator's
saved copy of the Leitz sectional. Scale: R1 to R10 vertex crossings on the axis row (x 850.5 and 1569.5) give 719 px
for 30.125 mm, 23.87 px per model mm. The radial scale holds on the R10 arc: 300 px above and below the axis the drawn
face sits at x 1516 and 1518 against 1516.3 predicted. Rims were read where each outline meets its flat top or its
chamfer, above and below the axis.

| Surface | Drawn (top / bottom) | Before | After | Verdict |
|---|---:|---:|---:|---|
| 1, 2 | 13.32 / 13.28 | 13.0 | 13.0 | 2 % under, inside the noise; kept square |
| 3, 4 | 11.66 / 11.75 | 11.7 | 11.7 | agrees; kept |
| 5 | 8.90 / 8.94 | 8.9 | 8.9 | agrees; kept |
| 6 | 9.02 / 9.07 | 8.7 | 9.0 | raised: the figure draws R6 0.13 mm above R5, the page drew it 0.2 mm below |
| 7, 8 | 11.66 / 11.85 | 11.7 | 11.7 | agrees; kept |
| 9, 10 | 12.79 / 12.67 | 12.4 | 12.4 | 2.6 % under, inside the noise; kept square |

The R6 raise passes the surface validator. The meridional clearance trace at Y = 21.63 mm shows no axial clip or
chief-ray block, and R6's side vignetting there falls from 12 % to 8 %. The engine curve goes from 100.0 / 91.4 / 81.4
/ 63.2 / 51.1 % to 100.0 / 93.1 / 82.8 / 63.4 / 51.1 % at 0° / 8.7° / 14.5° / 20.4° / 23.3°. Engine values are
unchanged: EFL 49.975 mm, FOPEN 2.000, half-field 24°, stop semi-diameter 8.822 mm, traced half-field 31.95°. The
aperture census stays within 3 % of f/2 with no rim limit, the image-circle check finds none undersized, and corner
coverage stays 100 %. The page now draws L4's rim corner just above L3's, as the figure does.

Lands and cuts: none. No face sits below its light-rule baseline. The full-pupil lattice gains 0.1 to 4.1 points over
baseline rims at every field, and one-at-a-time restores win back nothing.

Element focal lengths were missing (the inspector showed "FL = —"). Each element now carries its thick-lens focal
length in air at the D line: L1 +76.69, L2 +33.58, L3 −24.50, L4 −19.77, L5 +23.80, L6 +58.89 mm, the values the
analysis already quotes.

Found correct: `name` L1–L6 are the patent's own designations (page 1, lines 86–88; page 2, lines 37–42); every `type`
agrees with the signs of R; `role` lines are true; C1 brackets surfaces 3–5 and C2 surfaces 6–8; no group bracket is
needed (the patent names members, not groups); the stop sits in A2 between L3 and L4; the design is all spherical, with
no `A` label; no `apd` tag (the patent names no special glass). The lens is static: no variable gap, the movement
overlay reports no modeled movement, the focus slider reads "Not modeled", and `focus.description` states the
production unit helicoid focusing to 1 m plainly. `source.assignees` "Ernst Leitz GmbH" matches the front page and the
corpus spelling.

Glass: the patent prints only nD and ν (page 2, lines 37–42). L3's LF5 (Schott) is exact at D (Δ −0.85e-4, +0.04);
L4's S-TIL26 is exact (Δ −0.95e-4, +0.01; Hoya E-FL6 also fits, and Sumita's obsolete LF6 row, 1.56732 / 42.80 at d,
is in the vendor files but is not a Schott row). The crown 1.6202 / 60.4 recurs on four elements of the one example,
so it is a real glass. The nearest rows at D, N-SK16, BACD16, S-BSM16 and J-SK16, sit at nD 1.62032 (Δ +1.2e-4), outside
the window, and no vendor file has a closer row; the label stays `Unmatched`. Colour agrees with the patent's D and G
rows (page 2, isoplanasy table, at the printed scale): paraxial focus D 68.20 / g 68.24 mm against 68.3 / 68.3,
f/2 marginal D 68.23 / g 68.41 against 68.2 / 68.4, and focal length D 99.95 / g 100.04 against 100.0 / 100.1. The
model's g line (435.8 nm) stands in for the patent's G.

Stop split (report only; a gap change): moving the stop to 4.6 / 3.26 mm, as the Leitz sectional draws it, puts R5's
rim (sag 4.011 mm at 8.9 mm) 0.59 mm in front of the stop plane instead of 0.08 mm past it, and R6's rim 0.60 mm
behind it (now 1.27 mm). The stop semi-diameter becomes 8.725 mm, f/2 and the 24° half-field are unchanged, and the
axial need at R5 and R6 stays 8.75 and 8.52 mm. Full-pupil light changes from 100.0 / 93.1 / 89.0 / 82.8 / 63.4 /
51.1 % to 100.0 / 92.1 / 87.9 / 82.3 / 63.2 / 51.2 % at 0° / 8.7° / 11.6° / 14.5° / 20.4° / 23.3°: with the present
rims the move no longer reduces off-axis vignetting; it costs up to 1.1 points at mid-field.

Open:
- Both the drawing and the Leitz sectional square each cemented member at 11.7 mm across the crown and part of the
  flint, then chamfer down to the concave rim at about 9.0 mm. The renderer joins L3's and L4's rims with one straight
  edge, so their outer edges show as a single slant, about 1.4 mm inside the drawn outline at mid-edge. No allowed
  field draws a chamfer, and a vertical land at R5 or R6 would draw glass the figure leaves out.
