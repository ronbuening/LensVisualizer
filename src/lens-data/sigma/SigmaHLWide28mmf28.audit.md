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
name closed at integration; the wording items are closed in the cleanup pass below).

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
unlimited rims, so part of the corner vignetting is intrinsic to the printed design.
