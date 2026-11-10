# Sigma H.L. Wide 28mm f/2.8 audit

## Status

Closed 2026-11-10: validated and deployed visible (see the dated sections at the end). Original status line:
UNFINISHED, HIDDEN, BOUNDED NATIVE PILOT COMPLETE. Static checkpoint v1 is preserved unchanged. Native geometry, aperture census and reference MTF results follow; full suite and production build remain NOT RUN. No installation-ready or factory-prescription claim.

## Frozen source and example choice

Whole JPS60181715A E1 is frozen, including R2 +1800, R8 +1000 and R15 +345. E2 is retained independently, not blended or selected by nominal focal-length fit. E1's prior card EFL 28.088030213 / BFL 41.861888194 is unreproduced and superseded by fresh literal arithmetic 28.337698345 / 38.851409062. The original card/archive remain unchanged. No source edit is used to force either result.

The terminal source row has no distance. E1_LITERAL.json's zero is a computational endpoint only; the model's terminal d is the derived collimated paraxial BFL. Unit and conjugate assumptions are stated in the analysis. Source row9 is retained as STO with no medium and no authored sd.

## Hypotheses and scope

Engineered rims, in source row order: 20, 20, 17, 11.5, 11.5, 12.5, 9, 9, stop-unspecified, 8.5, 8.5, 8.5, 11, 11, 13, 13 mm. Figure 1 is used only as qualitative envelope evidence, not measured optical aperture data. Default geometry first; no override. Preliminary failed rim sets, if any, remain in static reports rather than replacing evidence silently.

Explicit d-line nd/νd are preserved. Full dispersion curves are unknown. No 22 cm optical motion, real diaphragm size, 95% illumination or product-exact E1 identity is inferred. Static calculations cannot validate usable f/2.8 ray passage.

## Baseline and pending gates

Isolated local clone of 9d121be76e14bc5098256ee78cd0a7545a1acf11 with genuine 2253-commit history. No commit, push, merge, public publication or original14 installation edits. Before any qualified delivery: native schema/geometry, exact source/object equality, full-aperture/on-axis and relevant field diagnostics, spectral limitations, type/lint/format, full tests/build and clean installation reproducibility must be completed under the parent's testing-slot coordination. (Closed 2026-11-10 by the deployment validation and integration below.)

Initial 12.5 mm shared rims after R4 exceeded the conservative 80% static air-gap intrusion budget (repository default is 90%) (98.54%); initial 10 mm doublet rear rim crossed the following gap (104.69%). Those failed hypotheses are preserved in failed_initial_rims_static_report.json and failed_initial_rims_model.json. Reducing the affected engineered rims, with the cemented group kept at a common 8.5 mm radius, avoids an override and does not change source optics. Exact-ray clearance remains untested.

## Native pilot, additive v2

Data.ts bytes stayed frozen at SHA256 45eb4413be1c2673a51fe2cd425dbacb6222ea212f8a854d6e30c70d3c3644ae. One native process at a time, NODE_OPTIONS=--max-old-space-size=1536. Geometry and all eight zero-trim diagnostics pass; inferred iris clearance 1.976223388/2 mm. Official aperture census stated2.8/traced2.799999997427, STO-limited, diagnosis ok.

Reference d-line design-plane geometric/diffraction MTF: source angles0/18.8/37.6 degrees converge through40 lp/mm. Distinct declared format corner (rounded taxonomy radius21.65mm)37.761115482 degrees: diffraction converges through40, geometric128 remains unconverged at40, converged through30 (max delta0.0150886175). All raw fields/counters and failed/unconverged evidence are retained under native/. No prescription or derived plane tuning. Native optical slot released after this bounded pilot.

All eight glasses use estimated normal-line dispersion according to native spectral support. No broadband run was performed; no recovered full dispersion claim. Still pending full tests/build/lint, any broader convergence or spectral review, clean installation and final qualified packaging. (Closed 2026-11-10: integrated after deployment validation; glasses now resolve to catalog rows, see below.)

Field-label correction: the repository taxonomy diagonal is rounded to43.3 mm, so radius21.65 mm is the declared-format test. The exact36×24 mm physical corner radius hypot(18,12)=21.633307652784mm was subsequently tested in the additive v3 check below. The earlier declared-corner results remain unchanged.

## Exact Physical Format Corner: Additive v3

The distinct exact 36×24 mm physical corner radius 21.633307652784 mm maps to 37.741276019°; the actual sampled angle is 37.741275892°. At the unchanged derived plane and inferred rims, geometric reference MTF at grid128 converges through30 lp/mm but remains unconverged at40 (maximum delta0.0124233121). Diffraction reference MTF at grid128 converges through40 lp/mm (maximum delta0.0031091969). Frequencies were0/10/20/30/40 lp/mm, with the same criteria as the prior declared-format check. This is a distinct previously unrun field, not a retry of the failed declared-corner40 result. No source, rim, plane or criterion was changed. Hidden visibility is retained. Full tests/build/broadband and installation validation remain pending. (Closed 2026-11-10: deployed visible.)

## 2026-11-10 — Deployment validation

Independent check against JP S60-181715 A Example 1 (page 3, printed 75, 300-dpi render): all 16 rows (R, d, nd,
νd), the stop row and the cemented pair agree; the four printed condition values reproduce (1.103/1.10, 5.379/5.38,
1.670/1.67, 3.481/3.48). Front page: 株式会社シグマ, inventor 小山武久 (Takehisa Koyama). Attribution at design-family
level: Sigma's booklet lists the H.L. Wide 28mm F2.8 as 8 elements in 7 groups, 75°, F22, 0.22 m, and Sigma's own
history page records its 1985 launch as the Non Vignetting 28mm F2.8, matching the patent's aim of at least 95 %
aperture efficiency; Examples 1 and 3 fit equally and no source names the production example. `audit:aperture`
passes.

Deployment change: `fStops` extended to f/22 (booklet minimum aperture).

Open: `lensMounts` (the booklet lists mounts for the whole line, not per lens); the cemented pair is drawn about
9.8–11.8 mm in Fig. 1 against 8.5 in the file; key, name, subtitle, specs, focus text and prose wording (key and
name closed at integration; the wording items are closed in the cleanup pass below; the cemented-pair rim is closed
in the semi-diameter pass below).

## 2026-11-10 — Cleanup and wording pass

Data file: header comment rewritten in plain terms with every fact kept (patent and example, product correlation,
d-line indices, millimetre and infinity reading, derived 38.851 mm back focus, stop at row 9, semi-diameters sized
to Fig. 1, infinity focus). Subtitle "JPS60181715A EXAMPLE 1 — PROBABLE NON VIGNETTING FAMILY, NOT VERIFIED FACTORY
E1" → "JP S60-181715 A, Example 1 — design-goal and construction correlation". Specs "PROBABLE FAMILY; WHOLE E1
REPRESENTATIVE", "SOURCE FULL FIELD 75.2°; RETAIL 75°", "STATIC INFINITY HYPOTHESIS" → "f = 28.34 mm (MODELED)"
(the patent prints no focal length), "DESIGN F/2.8", "ALL SPHERICAL", "2ω = 75.2°"; "8 ELEMENTS / 7 GROUPS" kept.
`focus.closeFocusM` 1e9 → 1e15 placeholder, with a plain infinity-only description (marketing 0.22 m unchanged).
`aperture.maxFNumber: 22` added to match the f/22 stop already in `fStops` (Sigma booklet, minimum aperture F22).
Cemented id "L5-L6" → "C1". Short `role` lines added to all eight elements. The eight `indexReferenceNote` lines
removed: the patent states d-line on printed page 74, so `indexReference: "d"` alone is correct.

Glass relabels, all from "Unmatched (source nd/vd only; no verified full dispersion curve)", each resolving with
Δnd ≤ 3.1e-6: L1, L7, L8 → TAF1 (HOYA), Δνd +0.02; L2 → E-CF6 (HOYA), Δνd −0.05; L3 → BSC7 (HOYA), Δνd 0.00;
L4 → FD110 (HOYA), Δνd +0.02; L5 → NBFD11 (HOYA), Δνd +0.03 (only exact row; OHARA S-LAH51 is νd 44.20);
L6 → FD140 (HOYA), Δνd +0.01. No `nC` / `nF` / `ng` were present. No `apd` tags: Sigma names no special-dispersion
element and no printed pair is anomalous.

Analysis: metadata block normalized (example removed from the Patent line, application number, title, inventor in
house order); identification rewritten as a numbered evidence list with the Example 1 / 3 ambiguity stated;
architecture now explains the patent's coma-flare argument and tabulates the four conditions (printed 1.10 / 5.38 /
1.67 / 3.48, model 1.103 / 5.379 / 1.670 / 3.481); element lines give glass and focal length; glass table added;
"Apertures and Validation Scope" renamed "Model Scope and Limitations". Removed: the Bounded Native Pilot and
Additive v3 sections (MTF grids, pupil census, test status), SHA-256 hashes, the private Drive link and
"hidden checkpoint" wording.

Engine numbers, before and after (identical): EFL 28.337698345 mm, FOPEN 2.8, halfField 38.3273°, stop radius
6.895843529 mm, BFD 38.851409 mm, TL 87.4214 mm. Only `closeFocusM` (1e9 → 1e15) and the slider maximum
(16 → 22) changed in the built summary. Surface audit OK; aperture audit: within 3 % of F2.8, no rim limit.

Open: `lensMounts` left out, because the Sigma booklet lists mounts (Canon, Contax, Fujica, Konica, Minolta, Nikon,
Olympus, Pentax K, Praktica, Ricoh, Rollei, Yashica) for the whole line, not per lens. Rim pass: Fig. 1 draws the
cemented doublet at about 9.8 mm (front) to 11.8 mm (L6 outer) against 8.5 mm in the file; the real-ray check at
37.6° shows side clipping at surfaces 11 (11 %) and 12 (32 %); surface 12 can open only to about 9.1 mm before
reaching the 90 % gap budget against surface 13 (the two surfaces meet at about 9.75 mm). G2/G3 rims (11.5 mm)
are conservative against the figure's contact near 12.5 mm. At 37.6° the lower rim ray cannot pass R4 even with
unlimited rims, so part of the corner vignetting is intrinsic to the printed design. (Rim pass closed in the
semi-diameter pass below; `lensMounts` stays open.)

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: JP S60-181715 A, Fig. 1 (Example 1), printed page 76 (PDF page 4), a 347 ppi CCITT scan measured at native
resolution. The optical axis runs vertically on the page at x = 882 px, object at the bottom. Silhouettes were read on
the right-hand (G-label) side, where only short horizontal leaders touch the rims; the left side carries the curved
Y-label leaders. Axial scale: the drawn vertices sit at y = 1449 (surface 1), 1407 (2), 1388 (4), 1317 (5), 1299
(6), 1153 (7), 1028 (8), 965 (10), 848 (11), 805 (12), 771 (13), 730 (14), 723 (15) and 685 px (16). Surface 1 to
surface 7 gives 295 px / 18.75 mm and surface 7 to surface 16 gives 469 px / 29.82 mm, both 15.73 px/mm; every vertex
lies within 5 px (0.3 mm) of that line. Laterally, the weakly curved faces confirm the same scale: S16's curve meets G8's edge
at 202 px, z = 1.53 mm from its vertex, where R = −54.91 mm gives 12.86 mm (202 px / 15.73 = 12.84 mm), and S1 agrees
likewise. The strongly curved faces (R4, R5, R6, R11, R12, R13, R14) are drawn flatter than their printed radii: arc
fits through them give 16.5–18 px/mm, so their drawn contact points sit about 8 % farther out than the prescription
allows. Rim heights below are therefore read at 15.73 px/mm, and where a drawn contact would make the faces cross,
the value is capped at the prescription's geometry.

| Surface | Before | After | Figure (15.73 px/mm) | Evidence |
|---|---|---|---|---|
| 1, 2 (L1) | 20 | 20 | 20.5 | within noise, kept |
| 3 (L2 front) | 17 | 17 | 17.3 (outer flat) | within noise, kept |
| 4 (L2 rear) | 11.5 | 12.3 | drawn meeting L3 at 13.2 | the faces cross at 12.55 mm; 12.3 is the largest rim under the cross-gap limit (S4/S5 close 0.925 of their 4.56 mm gap) |
| 5 (L3 front) | 11.5 | 12.3 | drawn meeting L2 at 13.2 | as surface 4 |
| 6 (L3 rear) | 12.5 | 10.9, `rimExtensionSd` 12.3 | curve ends at 171 px = 10.9 mm, flat top out to the edge | the old 12.5 mm rim ran 2.4 mm deeper toward the stop than the drawn element; the land keeps L3 square at 12.3 mm |
| 7, 8 (L4) | 9 | 9 | 9.35 | within noise, kept |
| 10, 11 (L5) | 8.5 | 10.0 | square outer edge 158 px = 10.0 mm | +18 %; the junction meets L5's edge there |
| 12 (L6 rear) | 8.5 | 9.5 | meets L7 at 167 px; prescription contact at 9.75 mm, at the drawn z = 42.1 mm | needs `checks.gapSagFrac` 0.95 (the 12/13 faces close 0.943 of their 2.11 mm gap at 9.5 mm without crossing) |
| 13, 14 (L7) | 11 | 11 | 11.3 | within noise, kept |
| 15, 16 (L8) | 13 | 13 | 12.9 | within noise, kept |

L6's drawn outer flange (about 12.2 mm, with bevels) lies outside both of its optical faces. It is not modeled: a
land on the cemented face is not allowed, and one on surface 12 would run into L7's front face.

Clearance and light, wide open at infinity. `clearap` at Y = 21.63 mm (ω = 37.74°) shows no CLIPS-AXIAL or
BLOCKS-CHIEF; surface 12 still trims 17 % of one side of the full-field bundle (33 % before), set by the L6/L7 contact.
The engine's geometric transmission at the 37.8° format corner rises from 68.5 % to 88.4 % (34.9°: 81.3 → 94.7 %;
32.0°: 90.5 → 98.6 %), and no field loses light. The surface-6 cut costs nothing: restoring 12.5 mm wins back
0.0 points at every field (`rimcost --loo`). Engine EFL 28.3377 mm, f/2.8 and stop radius 6.8958 mm are unchanged;
the engine half-field estimate grows from 38.33° to 40.22° because surface 4 no longer limits it. Surface audit OK,
aperture audit within 3 % of F2.8 with no rim limit, image-circle 0 undersized, field coverage 100 % (37.8° to
21.65 mm), as before.

Maker diagram: none is public (the deployment validation found no Sigma construction diagram; the booklet gives
8 elements in 7 groups and no special-glass elements). Fig. 1 governs. Overlay of the model on the figure at matched
scale: `overlay.png` in the pass's scratch folder (not in the repo).

Open: Fig. 1's strongly curved faces and drawn contacts are not geometrically exact, so the L2/L3 and L6/L7 rims
follow the prescription's contact limits rather than the drawn pixel heights.

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page at infinity (section, the eight element inspectors, the focus-movement overlay and the
`focus=1` view) with Fig. 1 of JP S60-181715 A at native 347 ppi (printed page 76). The drawing description on printed
page 75 confirms that Fig. 1 is Example 1. Rims were re-read on both sides of the axis at the pass's 15.73 px/mm,
with the axis at x = 882 px:

| Feature | Right side | Left side | Model | Reading |
|---|---|---|---|---|
| L5 square edge (surfaces 10, 11) | 10.0 | 9.5 | 10.0 | agrees |
| S12/S13 drawn contact | 10.5 | 9.5 | 9.5 (faces meet at 9.75) | agrees; capped by the prescription |
| L6 outer flange | 12.1 | 11.5 | not drawn | see below |
| L7 rim (surfaces 13, 14) | 11.5 | 10.7 | 11.0 | agrees |
| Surface 6 cap end | 11.1 | — | 10.9 | agrees |
| L3 front rim / L2 contact | 13.2–13.3 | — | 12.3 (faces cross at 12.55) | capped by the prescription |

No value is off by 10 % or more, and the drawn step order between neighbours holds (L1 > L2 > L3 > L4 < L5;
L5/L6 faces < L7 < L8), apart from L6's flange. No rim changed.

L6's drawn outer edge is a flange outside both of its optical faces. The validator refuses a rim extension on
surface 11 ("a rim extension needs a glass/air boundary"). On surface 12 it refuses one at 11.8 mm (combined sag 2.23
mm against 2.004 mm allowed across gap 12→13) and even at 10.2 mm (2.10 mm against 2.004 mm). The flange therefore
stays undrawn, and the header now says why.

`checks.gapSagFrac` 0.95 is the smallest two-decimal value that passes. At 0.94 the validator refuses gap 12→13 (1.99
mm against 1.983 mm allowed at surface 12's 9.5 mm rim), and at 0.92 it also refuses gap 4→5 (4.22 mm against 4.195 mm
at 12.3 mm). The L2/L3 rims depend on it as well, which the header now states.

Lands and cuts, against the rims before today's semi-diameter pass (`rimcost --loo`, full-pupil lattice, wide open at
infinity):

| Item | Baseline | Final | Light | Verdict |
|---|---|---|---|---|
| Surface 6 cut | 12.5 | 10.9 | restoring 12.5 wins back 0.0 points at every field | keep: no light lost; Fig. 1 draws the cap ending there |
| Surface 6 land (`rimExtensionSd`) | — | 12.3 | an extension never clips | keep: Fig. 1 draws L3's flat top |

Worst loss against the baseline: 0.0 points. Corner transmission at 37.8° is 88.4 % (baseline 68.5 %).

Changes:

- `doublets`: none → C1 over surfaces 10–12. The cemented pair had no bracket; C1 matches the elements' `cemented` id.
- `groups`: none → "FRONT (−)" (surfaces 1–6) and "REAR (+)" (7–16). These follow the claim's front negative lens
  group (L1–L3) and rear positive lens group (patent L4–L7) on printed page 73.
- Glass labels are now in the corpus form "NAME (HOYA catalog equivalent; production supplier unspecified)", since
  Sigma's supplier is unknown: L1, L7 and L8 TAF1; L2 E-CF6; L3 BSC7; L4 FD110; L5 NBFD11; L6 FD140. The resolved
  rows are unchanged (|Δnd| ≤ 3.1e-6, |Δνd| ≤ 0.05).
- The header semi-diameter note now covers the gap 4→5 fraction and the undrawn L6 flange. The analysis notes that
  Fig. 1 labels the elements G1–G8 in the same order as L1–L8.

Labels, tags and movement re-checked. Every element type agrees with the signs of its radii, roles are true, and all
eight focal lengths are present (+152.4, −38.6, −83.5, +44.7, +17.3, −13.7, +46.9, +61.5 mm). The stop sits at row 9
between L4 and L5, and there are no aspheres. No `apd` tags are present, which is correct: the patent text names no
special glass and the Sigma booklet marks none. The lens is static (`gaps` empty). The focus slider reads "Not
modeled", the movement overlay reports no group movement, and `focus.description` states infinity only. Element
designations stay L1–L8: the patent's text numbers seven components L1–L7 (doublet = L5), and Fig. 1's G1–G8 would
read as groups on this site.

Glass and colour: every label resolves exactly, and HOYA stays the single palette, with NBFD11 the only exact row for
L5. E-CF6 is HOYA's later lead-free row: the catalog has no legacy CF6, and the other exact row (Hikari J-KF6, Δνd
0.00) is no older. 1.51742/52.2, 1.51680/64.2 and 1.77250/49.6 recur in all three examples; 1.78472/25.7,
1.78590/43.9 and 1.76182/26.6 are Example 1's own (Examples 2 and 3 use 1.80518/25.5 and 1.74077/27.8). The patent
prints no partial dispersions or line indices, and Fig. 2 plots d-line spherical aberration, astigmatism and
distortion only, so there is no C/F/g curve to compare. No medium is nd-only. No catalog row is proposed.

Assignee "Sigma Corporation" matches the front page (株式会社シグマ) and the corpus spelling.

Correction to the semi-diameter pass: surface 4 still limits the engine half-field estimate. It moved from 38.3° to
40.2° because surface 4's rim rose from 11.5 to 12.3 mm. Engine numbers are unchanged by this review: EFL 28.3377 mm,
f/2.8, stop radius 6.8958 mm, half-field 40.22°. Surface audit OK; the aperture audit is within 3 % of F2.8 with no rim
limit; image circle 0 undersized; field coverage at least 99 %.

Open: Fig. 1's L6 outer flange (11.5–12.1 mm) cannot be drawn. A land on surface 12 crosses L7's front face, and the
cemented surface 11 cannot carry one.
