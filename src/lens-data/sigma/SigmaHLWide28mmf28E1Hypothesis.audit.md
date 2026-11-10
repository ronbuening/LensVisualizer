# Sigma H.L. Wide 28mm f/2.8 E1 hypothesis audit

## Status

UNFINISHED, HIDDEN, BOUNDED NATIVE PILOT COMPLETE. Static checkpoint v1 is preserved unchanged. Native geometry, aperture census and reference MTF results follow; full suite and production build remain NOT RUN. No installation-ready or factory-prescription claim.

## Frozen source and example choice

Whole JPS60181715A E1 is frozen, including R2 +1800, R8 +1000 and R15 +345. E2 is retained independently, not blended or selected by nominal focal-length fit. E1's prior card EFL 28.088030213 / BFL 41.861888194 is unreproduced and superseded by fresh literal arithmetic 28.337698345 / 38.851409062. The original card/archive remain unchanged. No source edit is used to force either result.

The terminal source row has no distance. E1_LITERAL.json's zero is a computational endpoint only; the model's terminal d is the derived collimated paraxial BFL. Unit and conjugate assumptions are stated in the analysis. Source row9 is retained as STO with no medium and no authored sd.

## Hypotheses and scope

Engineered rims, in source row order: 20, 20, 17, 11.5, 11.5, 12.5, 9, 9, stop-unspecified, 8.5, 8.5, 8.5, 11, 11, 13, 13 mm. Figure 1 is used only as qualitative envelope evidence, not measured optical aperture data. Default geometry first; no override. Preliminary failed rim sets, if any, remain in static reports rather than replacing evidence silently.

Explicit d-line nd/νd are preserved. Full dispersion curves are unknown. No 22 cm optical motion, real diaphragm size, 95% illumination or product-exact E1 identity is inferred. Static calculations cannot validate usable f/2.8 ray passage.

## Baseline and pending gates

Isolated local clone of 9d121be76e14bc5098256ee78cd0a7545a1acf11 with genuine 2253-commit history. No commit, push, merge, public publication or original14 installation edits. Before any qualified delivery: native schema/geometry, exact source/object equality, full-aperture/on-axis and relevant field diagnostics, spectral limitations, type/lint/format, full tests/build and clean installation reproducibility must be completed under the parent's testing-slot coordination.

Initial 12.5 mm shared rims after R4 exceeded the conservative 80% static air-gap intrusion budget (repository default is 90%) (98.54%); initial 10 mm doublet rear rim crossed the following gap (104.69%). Those failed hypotheses are preserved in failed_initial_rims_static_report.json and failed_initial_rims_model.json. Reducing the affected engineered rims, with the cemented group kept at a common 8.5 mm radius, avoids an override and does not change source optics. Exact-ray clearance remains untested.

## Native pilot, additive v2

Data.ts bytes stayed frozen at SHA256 45eb4413be1c2673a51fe2cd425dbacb6222ea212f8a854d6e30c70d3c3644ae. One native process at a time, NODE_OPTIONS=--max-old-space-size=1536. Geometry and all eight zero-trim diagnostics pass; inferred iris clearance 1.976223388/2 mm. Official aperture census stated2.8/traced2.799999997427, STO-limited, diagnosis ok.

Reference d-line design-plane geometric/diffraction MTF: source angles0/18.8/37.6 degrees converge through40 lp/mm. Distinct declared format corner (rounded taxonomy radius21.65mm)37.761115482 degrees: diffraction converges through40, geometric128 remains unconverged at40, converged through30 (max delta0.0150886175). All raw fields/counters and failed/unconverged evidence are retained under native/. No prescription or derived plane tuning. Native optical slot released after this bounded pilot.

All eight glasses use estimated normal-line dispersion according to native spectral support. No broadband run was performed; no recovered full dispersion claim. Still pending full tests/build/lint, any broader convergence or spectral review, clean installation and final qualified packaging.

Field-label correction: the repository taxonomy diagonal is rounded to43.3 mm, so radius21.65 mm is the declared-format test. The exact36×24 mm physical corner radius hypot(18,12)=21.633307652784mm was subsequently tested in the additive v3 check below. The earlier declared-corner results remain unchanged.

## Exact Physical Format Corner: Additive v3

The distinct exact 36×24 mm physical corner radius 21.633307652784 mm maps to 37.741276019°; the actual sampled angle is 37.741275892°. At the unchanged derived plane and inferred rims, geometric reference MTF at grid128 converges through30 lp/mm but remains unconverged at40 (maximum delta0.0124233121). Diffraction reference MTF at grid128 converges through40 lp/mm (maximum delta0.0031091969). Frequencies were0/10/20/30/40 lp/mm, with the same criteria as the prior declared-format check. This is a distinct previously unrun field, not a retry of the failed declared-corner40 result. No source, rim, plane or criterion was changed. Hidden visibility is retained. Full tests/build/broadband and installation validation remain pending.
