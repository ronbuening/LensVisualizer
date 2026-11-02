# Lens Patent — Sigma 70-200mm F2.8 DG DN OS | Sports — Stage 4

## Current disposition

READY_FOR_BATCH — INTEGRATION_PENDING (closed 2026-10-13: the lens files are in `src/lens-data/sigma/`; later changes are logged in the dated sections at the end of this file). This gate applies only to the final byte hashes in the accompanying manifest and the stated limited optical model. It is not publication, repository integration, full-application execution, exact production identification, or full-pupil transmission approval.

Pass A was frozen candidate-blind at2026-10-04T22:02:30.639871Z, before the candidate was opened at22:10:41Z. Pass B reconciles the original patent, frozen source baseline, exact implemented data, and final analysis separately. The prior source-only record is preserved below as historical evidence; its incomplete gate is not silently rewritten.

Original Stage3 archive SHA256: d41ad7274cb45210c2c627a8ab7426c3f272382675b5f9c020607fbba6646384.
Original data SHA256: c9c0acdc0db85a1762fc3e1b144da0ac1060f397ae48a64b521306095258a0d4.
Final data SHA256: cbc7241e355a0d06b964e43071825818a3173def3c35a7c3b77bc30cf6e2f42c.
Final analysis SHA256: a198cd94db3b1cfa32022bdf64552b9c5d00b90d63404fea0d6687602aaa6f74.
Current reference: main709dda72a0ddead8ee77b8306347429031f8b379, exact shared manifest125799312b757368f33b04ec5bfbe3f8299f3e750d3078d6e1c56c07c75c34f1. The runtime runner checks all250 source-file hashes before importing the actual optics code. Extra off-axis hook references were independently downloaded at that pin; the author's copies had one extra trailing newline, so their content was equivalent but their hashes were not exact upstream byte hashes. Final evidence records the actual upstream hashes.

## Corrections and reconciled model choices

No numerical optical input changed. A recursive comparison of every numeric/boolean value in the original and final TypeScript payloads is equal. Changes are source-role comments/citation wording, analysis corrections, evidence consolidation and verification coverage.

1. L15's “no candidate at printed precision” claim is corrected: the current OHARA L-glass CSV gives L-LAH91 at1.76450/49.09/PgF0.5528. The L prefix remains L. Its AGF coefficient-derived Abbe value differs from that printed CSV; neither representation proves a supplier or melt. The source coordinates and deliberate Unmatched class-only runtime route are unchanged. The public representative-candidate table now contains independently checked HOYA/OHARA entries; inherited six-vendor research is identified as author history, not fresh independent work.
2. The “fixed apart from accumulated source rounding” statement is corrected. Literal stop/G5 image-relative infinity variable sums are27.0814/27.0803/27.0820mm; adjacent differences−0.0011/+0.0017mm exceed the exact0.0004mm two-station last-place bound. No gap is repaired, and no rounding cause is asserted. G1/G8 idealized fixed-group prose is also qualified where necessary.
3. All six raw BF comparisons and the G1 group-focal comparison remain failed at their printed half-last-digit thresholds. Independent input-precision sensitivity budgets are preserved separately, without widening those raw thresholds or asserting that a sensitivity budget proves the cause. The accepted limited implementation faithfully preserves the literal source values; the analysis states the mismatch rather than presenting an exact match.
4. Source near F-number labels2.92/3.01/3.00 are retained and disclosed separately from infinity-only exact iris calibration. The final physical-ray harness now uses the actual near figure half-fields16.45/9.89/6.08° with published near d0; the original author harness used infinity fields at both focus endpoints. UI and stress scopes are unchanged.
5. Current-state paraxial EP radii and EFL/(2EP) diagnostics are calculated explicitly and distinguished from the nominal-F-number exact-ray iris calibration. Unpublished production iris changes are not invented.
6. Source FL is modeled as camera-side from its image-adjacent location, not called an explicitly identified sensor-cover glass. No optional/removable or holder assumption is introduced. The specific current rearPlates contract permits representing the tiny published BF variation in d36 while keeping gapAfterMm=1.0000; physical/reduced tracks and first-order results are checked. No t/n fold replaces the authored plate.
7. Blank lines that interrupted analysis Markdown tables were removed. Source attribution, dates and release timing were checked against the original rendered front page and primary Sigma pages.

## Independent calculations and actual runtime evidence

The consolidated Python verifier retains the fresh Pass A sequential and ABCD implementations and frozen source payload, adds a strict final-TypeScript literal parser, and independently checks all six transformed source states, source spectra, standalone/cemented/group powers, conditions, apertures and geometry. It rejects malformed expressions, nonfinite literals, duplicate keys and trailing tokens. It loads the final .data.ts itself; stored results are never numerical inputs.

The native runner is an audited adaptation of the author's harness, not claimed as newly written independent engine code. It executes actual current validator, constructor, state preparation, pupils, finite-conjugate selector, exact traces, field solving and native element/render diagnostics. The independent Python path separately checks its outputs, rather than accepting the author's PASS labels as evidence.

- All27 focus/zoom samples reproduce candidate ABCD/track values independently; maximum residual 1.99e-13. Current-front-group EP residual is 1.16e-11mm.
- Independent vector tangential-Snell tracing corroborates 1036 accepted non-ghost meridional rays at every hit position/radius and terminal slope. Maximum residual 1e-09. Native ordinary sequential traces terminate at the final surface; a raw reachedImagePlane=false is not relabeled as true. Image propagation and field-solving remain separately identified.
- Actual public traceRay2 with rayTracksF=true matches all841 accepted default UI rays, maximum residual 2.93e-13. Current useLensComputation entrance-pupil/stop scaling and current on/off-axis launch formulas are independently inspected. React hooks themselves are not executed.
- Native accepted glass segments checked: 26287, no sampled material-volume escapes. This finite19-interior-point segment sampling is not a continuum proof; independent accepted-ray paths and4001-point radial geometry checks corroborate the same model.
- Minimum sampled element edge thickness: 0.436557539mm. Minimum shared-band gap-policy margin: 0.083818838mm. Native hidden render trim:0mm at all27 states. The positive-K domain and actual aspheric rim slopes pass.
- Exact chief rays reach the source21.63mm semi-height at all27 sampled control states. Chief coverage does not establish whole-pupil transmission.
- The six-panel render file contains actual native element paths at equal axial/radial scales. A headless SVG render was visually inspected; it is not a browser screenshot or completed React/UI smoke test.

| Ray scope | ok | clipped | failed |
|---|---:|---:|---:|
| UI_default_on_axis | 462 | 24 | 0 |
| UI_default_off_axis | 379 | 23 | 3 |
| stress_skew_axial | 108 | 0 | 0 |
| stress_UI_full_pupil | 111 | 222 | 72 |
| postclip_ghost | 0 | 91 | 203 |
| source_physical_meridional | 84 | 34 | 8 |

All83 non-ghost zero-hit failures are independently classified by an uncapped first-sphere calculation as entrance-aperture misses, including the three default off-axis cases. Their native failed/noBracket status stays visible. Clipped rays remain clipped; postclip ghosts are excluded from transmission and accepted-material claims. The default clipped surfaces are1,22,24,25A,27 andSTO. No lens-specific clipping waiver or another lens's approval was inherited. These are bounded physical-aperture classifications, not excuses for accepted rays escaping glass or an in-system intersection failure; neither such failure was observed in the applicable tests.

## Continuous interpolation and the mandatory gate

The source six-state prescription is preserved. Current schema interpolation is continuous and piecewise linear; the27 samples include intermediate zoom/focus values. The sampled infinity case zoomT0.75 retains4.030305mm defocus. No source cam, focus compensation or discrete-preset replacement is invented. A fully focused continuum is not a mandatory contract condition, so it is not introduced as a new acceptance test. The limitation is explicit in the data header, focusDescription, evidence and analysis.

Fixed-profile shared-band geometry depends on gap minima; bilinear gap minima occur at cell corners, which are checked in addition to native sampled states. That does not prove all exact field/pupil rays over a continuum. Finite-conjugate metadata applies only to the three source near endpoints. The marketed0.65m wide MFD is not modeled.

The final acceptance check treats source fidelity, explicit limitations and candidate geometry separately. Raw mismatches remain in results.comparisons and frozen baseline checks. The supported resolution is a literal limited-source implementation with qualified prose, not fabricated equality with the printed summaries. The tiny source fixed-group discrepancy is preserved rather than used to alter an aperture, radius or gap. The actual candidate geometry/ray checks independently pass and are not waived. No substantive unsupported model change or observed applicable runtime failure remains.

## Quantitative claim map for the final pair

| Analysis claim or metadata | Independent result | Governing bytes/source |
|---|---|---|
| Exact identity, dates, counts, variants | frozen source record, metadata checks, primary Sigma pages | original PDF/card; final data |
| Six EFL/conjugate/track states | sourceModel.calculations and implementedModel.states | final parsed data plus explicit FL/BF mapping |
| Standalone/cemented/group powers | sourceModel.elements/cementedBlocks/groups; analysis_numeric_claims | original source radii/media and final values |
| Petzval and8conditions | per-surface Petzval and sourceModel.conditions | source-specific normal line, real interfaces |
| Source spectra and material qualifications | glassCoordinateResiduals; source_spectral_rebase; runtime_dispersion_policy | primary embedded catalog rows and sourcePgF |
| Focus travel, G7 reversal, microdrift | sourceModel.movement/fixedGroupMotionComparisons | literal six spacing states |
| Asphere coefficient/rim claims | complete_aspheres; implementedModel.geometry.departures | source equation and final inferred SDs |
| Exact iris versus paraxial EP | independent_exact_iris; runtimeApertureChecks | source infinityF and actual current pupil code |
| Continuous defocus limitation | actual runtime states, preserved source interpolation | no cam reconstruction |
| UI/physical/stress/ghost scopes | actual_ui_wrapper, source_physical_field_definition, runtimeRayCounts | current defaults, true-focus UI and source fields/d0 |
| Chief coverage, material confinement, trim | native field/render checks and independent exact-ray comparisons | final data and exact pinned runtime |

Interpretive prose was manually checked, not approved by string matching alone. No unique per-element aberration correction, APO behavior, supplier/melt identity or factory prescription is asserted. Class-only Unmatched means a catalog identity is not selected by this implemented model, not that no matching catalog coordinate exists.

## Replay, packaging and remaining integration

The final dossier contains12 files: canonical nine plus the actual native runner/report and native render SVG. Originals are unchanged. Python3 standard library suffices for offline numerical replay. Node24 or later plus the identified shared709dda72 source snapshot is required for actual native replay. The runner verifies the shared manifest and all250 file hashes. No network is used during clean replay.

Portable command: python Sigma70200mmf28DGDNOS.verify.py --package-dir <extracted dossier> --output <external results.json>.
Native command: node Sigma70200mmf28DGDNOS.runtime.mjs --reference-root <verified709dda72 sources> --package-dir <extracted dossier> --output <external runtime.json>.

Both commands are re-executed after clean extraction. Membership, original hashes, every packaged hash, exact native JSON and stable portable JSON must match before sealing. Regenerated reports are written outside the package. Archive and manifest hashes are reported externally to avoid circular hashes.

Required later integration: actual project typecheck/format/lint, shared corpus policies, full application rendering and any authorized build/metadata work. These remain NOT_RUN/INTEGRATION_PENDING (status at packaging; superseded by the dated sections at the end). Native type stripping is not TypeScript type checking. No Git, IDE, desktop, full build, corpus, integration, publication, Library or Drive writes were performed.

# Historical frozen Pass A record

The following text was frozen before candidate access. Its open checks and gate-null disposition are historical, preserved without retroactively aligning its paraxial iris diagnostics to the candidate's exact-ray inference. Current reconciled disposition appears above.

# Lens Patent — Sigma 70-200mm F2.8 DG DN OS | Sports — 4 Audit

## Job and reference versions

This is a candidate-blind Stage 4 **Pass A baseline checkpoint**, not a completed Stage 4 audit. The original four-field card fixes JP2025043459A, Numerical Example 1, and exact stem Sigma70200mmf28DGDNOS. The 174-page supplied PDF begins with an English PAJ cover, so the printed Japanese page number is one less than the one-based PDF page number used here. Original PDF and card bytes are unchanged.

CHAT-1.0 protocol, dossier contract, and Stage4 prompt were read from the actual supplied workflow. Current project reference pin is 709dda72a0ddead8ee77b8306347429031f8b379, superseding historical53470da5. Manifest identifies exact reference bytes. Read-only inspection of those sources is not an executed LensVisualizer validation.

## Extraction and conventions

- Original rendered PDF pp17–19: every Example1 surface, medium, PgF value, variable gap at wide/middle/tele infinity and near, group focal length, and miscellaneous datum was manually re-entered.
- PDFp16, printed15, ¶0064: the rendered equation explicitly uses sqrt(1−(1+K)(y/r)^2). The native K therefore maps directly to model K. The equation prints A3 through A20; the Example1 table prints even terms A4 through A20 only. Unlisted odd coefficients are unused; they are not claimed as printed zeros.
- Surfaces14,21,25,26 are aspherical. All source coefficients including nonzero A16/A18/A20 on surface21 are preserved.
- PDFp11 ¶0015 and p15 ¶0061 establish d-line coordinates and spectral definitions. The prescription uses d=587.56nm; earlier prose uses rounded587.6nm and g435.8/F486.1/C656.3nm. Source ΔPgF=PgF−0.64833+0.00180νd differs from the current engine baseline0.6438−0.001682νd. Both deviations are separately computed. No individual nC/nF/ng values were invented.
- Positive radii have centres toward the image; d is vertex-to-next-vertex distance; n is medium after a surface. Blank medium cells are preserved in raw evidence, with air interpretation separately disclosed. The object and image planes are retained as source statements, not additional refractors.
- PDFpp46–48, Figs2–7, supply infinity F2.91/2.89/2.92 and near F2.92/3.01/3.00. Half-field labels are16.47/10.01/6.09° infinity and16.45/9.89/6.08° near. Table full-field values32.93/20.01/12.18° are not silently replaced by twice rounded figure labels.
- PDFp42 ¶0130, only EX1 condition column is used. Figure1 at PDFp45 confirms group topology, opposed focus arrows, stop, and separate image-adjacent FL.

## Model transformations

The independent calculation retains the raw scale1 prescription, stop13, all38 surfaces, and physical filter plate37–38. No marketing rescaling, source correction, example substitution, cam reconstruction, conservation repair, or production iris schedule is present.

FL has thickness2.5000mm, nd1.51680, νd64.20 and PgF0.5343, after d36=29.3510mm and before the printed BF. The source calls it an optical filter, not an optional filter. Its proximity to the image and separation from the lens groups supports a camera-side interpretation, but no sensor-cover identity is claimed as explicit source wording. Current contract requires physical rearPlates representation for a camera-side plate; a required lens-holder filter would instead be a drawn plate. No optionality or holder evidence was found. Mathematical t/n reduction is evaluated only as a paraxial identity, not substituted into the raw model.

BF in the source is measured from surface38, not the final lens vertex36. Both physical and air-equivalent vertex36 BFDs are calculated, with the physical plate shift kept explicit. Source near d0 measures object-to-first-surface; d0 plus physical track is approximately1000mm. Production wide MFD650mm does not authorize extending the selected patent's1000mm focus state.

## Glass review

Fresh direct official downloads were made from HOYA and OHARA after independent nd/νd/PgF extraction. The fresh HOYA bytes match the supplied shared catalog hash. HOYA's2026-07-07 catalog and OHARA's current S/L CSVs plus2026-07-01 all-products AGF were searched numerically, with relevant literal rows/coefficients embedded in evidence for offline replay. All21 media, including FL, have coordinate-compatible candidates within the disclosed search window. That is not evidence of manufacturer/supplier or melt identity.

Notable candidate classes include HOYA FCD100 for the six1.43700/95.10 media, FCD705 for1.55032/75.50, OHARA L-LAH91 for1.76450/49.09, and S-LAL54Q for1.65100/56.24. The L prefix must not become S. Several HOYA molding-family labels share nd/νd but differ spectrally; every candidate's coefficient-derived PgF residual is reported. Native PgF remains authoritative. Catalog-equivalent line indices are kept separate from nonexistent patent-published nC/nF/ng values. Catalog lookup thresholds do not become source-transcription tolerances.

HIKARI/SUMITA official download indexes and a SCHOTT primary catalog excerpt were discovered but not fully matched; CDGM's North-American distributor site had no usable catalog download. The baseline does not claim an exhaustive six-vendor search. No runtime glass resolver or actual model dispersion test was run.

## Numerical and geometry results

Two newly written implementations were executed: explicit height/reduced-angle sequential refraction/translation and separately coded2×2 ABCD products. They agree at all six published states; the determinant check and independent analytic thick-singlet test pass. A physical-plate/reduced-translation matrix identity also passes without changing the source model.

| Source state | EFL mm | Physical track mm | Image-plane correction mm | Finite magnification |
|---|---:|---:|---:|---:|
| wide_infinity | 72.103989494 | 221.9968000 | +0.001581198 | infinity object |
| wide_near | 66.623630167 | 221.9966000 | +0.001548528 | -0.08386909054188071 |
| middle_infinity | 118.003859012 | 221.9972000 | +0.001439383 | infinity object |
| middle_near | 98.005506015 | 221.9973000 | +0.001310167 | -0.127921525851632 |
| tele_infinity | 194.000790666 | 221.9962000 | +0.001979225 | infinity object |
| tele_near | 126.820263518 | 221.9962000 | +0.001835173 | -0.19375914356126772 |

The infinity EFL comparisons match the printed72.10/118.00/194.00mm at half-last-digit0.005mm. No finite-state EFL is printed; calculated near EFL is not substituted for the infinity station designation.

Every refracting surface has a separate φ/(n n′) Petzval term. Single elements are also calculated as standalone air-bounded lenses, including the members of cemented pairs; cemented block net powers and the eight functional group powers remain separate. The full Petzval sum is 0.000513273404mm⁻¹ (radius 1948.279401mm). These first-order sums do not certify chromatic or off-axis imaging quality.

Condition values1–8 are -0.618428523, -0.588552754, 85.300000000, 0.042060000, -1.355093709, 0.047142003, -1.322575282, 0.831002111. Each satisfies the stated inequality and rounds consistently to the printed EX1 value. The stabilization condition uses in-situ slope-ratio magnifications for surfaces19–21 and the system behind them, not the standalone IS doublet focal length.

G6 focus travel is+1.3184/+3.5739/+7.8357mm; G7 travel is−1.2160/−2.7733/−7.4217mm at wide/middle/tele. G7 reverses its zoom motion at the published middle station. These discrete data do not establish a continuous zoom/focus cam.

All physical track/EFL ratios exceed1, including approximately1.1443 at tele. Bare-lens air-equivalent BFD/EFL remains below1. Thus the literal selected design does not meet strict TL/EFL<1 telephoto or BFD>EFL retrofocus tests at the evaluated reference planes, regardless of the title or qualitative architecture prose.

No dimensioned lens apertures, FL aperture, or physical iris schedule is published. Per-station infinity iris radii inferred from source F-numbers are16.517397593/16.478355969/16.527787212mm. Their agreement with the infinity F-numbers is calibration, not independent aperture evidence. Holding those inferred radii for near focus gives paraxial working F2.905976130/2.904008995/2.891606239, which does not reproduce the figure labels2.92/3.01/3.00. These are diagnostic model failures, not proof that the patent's F-numbers are erroneous: finite F-number conventions, exact pupil effects, and any physical iris variation remain unestablished. No inferred schedule is presented as a production mechanism.

Asphere conic-domain limits and analytic slope self-checks are executed. The h=1mm numerical probes are explicitly arbitrary unit checks, not rim departures. Since physical apertures are unknown and the candidate is withheld, edge thickness, physical rim slope, shared-band gap intrusion, full-pupil exact rays, exact off-axis containment, and production render trim are NOT_RUN. Paraxial ray envelopes do not settle these checks.

## Correction and discrepancy register

No patent value has been corrected. The following raw observations are preserved:

1. BF residuals at all six states are+0.001310…+0.001979mm, larger than printed BF half-last-digit0.00005mm. Separate independent perturbation budgets from all R/d/nd rounding are about0.0149–0.0211mm for image-plane correction. They show sensitivity to source precision but are not rigorous interval proofs or reproduction of the printed BF.
2. G1 is161.215066611mm against161.21, residual+0.005066611mm versus0.005mm raw tolerance. A separately calculated first-order input-rounding budget is approximately0.003758mm. The raw comparison remains FAIL.
3. The source describes stop/G5 as fixed relative to the image. At infinity, d26+d30+d32+BF=27.0814/27.0803/27.0820mm. Adjacent differences−0.0011/+0.0017mm exceed the exact0.0004mm two-station rounding bound for four variable distances each. Near-state differences also exceed that bound. This is a literal source conservation discrepancy, not removed by changing d12, BF, or other gaps. A small practical modeling error is not the same as demonstrated source rounding.
4. The near-F-number fixed-iris diagnostics fail as explained above. Physical iris law is unknown. This is separate from the raw BF/group/movement discrepancies.

All failed comparison rows survive in results.comparisons. There is no widened acceptance tolerance, desired-state success generator, or hidden source fix. Discrepancy resolution remains unperformed pending review of the exact candidate and any primary justification.

## Independent review and exposure

No candidate data/analysis, prior per-lens calculations/results, author extraction/qualification material, migration inventory, CSV/index, or sibling audit numerical findings were opened. The original card carries only the four selection fields. Generic project specifications contain unrelated illustrative snippets. Unavoidable adjacent patent exposure comprises Example2 prose below the selected group table and Example10 tail/other condition columns on the page containing EX1 conditions; none supplies calculation inputs.

Fresh source evidence, conventions, computations and exposure are identified by the immutable checkpoint hashes. The canonical input fingerprint is `b2c44d66435e2174115e3fdb31b3b647211c5fc8761ac99a392cb2adbf78b6ad`. It binds {job,rawPrescription,conventions,modelingDecisions} as UTF-8 sorted-key compact JSON. Full-file and manifest hashes bind the catalogs, source commentary, verifier and outputs as well. A digest proves content identity, not psychological independence.

## Quantitative claim map

| Claim | Executed result | Governing evidence |
|---|---|---|
| Six EFL/cardinal/conjugate states | sourceModel.calculations | Literal selected surfaces and six gap columns, PDFpp17–19 |
| Three infinity published EFLs | comparisons.*_infinity_EFL | PDFp18 miscellaneous data |
| BF mismatch and reference planes | comparisons.*_BF; sourceModel.calculations | Physical plate and BF rows, pp18–19 |
| Standalone/cemented/group powers | sourceModel.elements/cementedBlocks/groups | Source lens topology and group table |
| Petzval | perSurface.petzvalPerMm and petzvalSumPerMm | Every entered interface, not a thin-lens aggregate |
| Conditions1–8 | sourceModel.conditions | PDFp42 EX1 and formula definitionspp11–15 |
| Focus travel / reversal / fixed-G5 failure | sourceModel.movement/fixedGroupMotionComparisons | All literal spacing states and ¶0073 |
| Pupils and inferred iris diagnostics | calculations.*.pupils; apertureDiagnostics | Stop13, source F labels; no published diameter |
| Aspheric convention and domain | sourceModel.aspheres | Rendered equationp16 and coefficient tablep18 |
| Spectral coordinates | sourceModel.elements/glassCoordinateResiduals | Source PgF, normal-line formula, embedded primary catalogs |
| Lens counts and production correlation | facts; evidence.productCorrelation | Raw glass spans, Figure1, official Sigma product page |

Manual prose review keeps source statements, calculations and modeling hypotheses distinct. There is no candidate analysis text to reconcile yet.

## Gate disposition and pending integration

Gate is null. Disposition: PASS_A_BASELINE_FROZEN, audit incomplete and source discrepancies retained. This is not READY_FOR_BATCH and is not an approval of a candidate. Pass B requires the exact data/analysis and author dossier, then fresh model parsing, source reconciliation, candidate geometry, cross-file claims, and applicable actual runtime checks under the recorded current pin.

Portable replay uses Python standard library only and reads all numerical inputs from the extracted seven-file dossier. A nonzero verifier exit is intentional while mandatory checks fail or remain unperformed. Clean replay must reproduce the same diagnostic result; reproducibility does not turn blocked checks into a passed gate. Repository validators, constructor, runtime glass resolution, exact rendering, typecheck and integration remain NOT_RUN / INTEGRATION_PENDING. No Git, IDE, desktop, build, corpus sweep, publication, Library or Drive writes occurred.

## 2026-10-13 — Semi-diameter pass against the patent figure

### Source and figure

`patents/JP2025043459A.pdf`, PDF page 45 (printed page 44), FIG. 1. It is the only cross-section of Numerical Example 1: one panel at the wide end, infinity focus, with zoom and focus arrows. There is no tele panel, so the tele and close-focus comparison is the ray trace below, not a second drawing. The embedded raster is 2646 × 1645 px, 1-bit, 420 ppi; all readings are on the 420 dpi page raster.

### Scale

The optical axis is horizontal at page row 1962.6. Vertex crossings: surface 1 at x = 973, surface 11 at 1611, surface 36 at 2456, image plane at 2714. Surface 1 to 36 is 189.1458 mm over 1483 px, 0.12754 mm/px. Two further spans agree: surface 1 to 11, 81.3734 mm over 638 px (0.12754), and surface 1 to the image plane, 221.9968 mm over 1741 px (0.12751). One pixel is 0.13 mm and line centres are read to about one pixel, so a rim reading is good to about ±0.15 mm.

The radial scale equals the axial one: the drawn filter plate is 20 px thick (2.55 mm against 2.5 mm), the image-plane line is 168 px tall above the axis (21.4 mm against Y = 21.63 mm), and the inner ends of the stop marks sit at 131 px (16.7 mm against the 16.66–16.70 mm iris from the f-numbers). At every measured rim the prescription sag puts the curve end within 1–2 px of the drawn one, including aspheres 14A, 25A and 26A. The figure is a to-scale drawing.

### Before and after

Readings are the mean of the upper and lower rim, in px above the axis and in mm.

| Surface | Before | Figure | After | Evidence |
|---|---:|---|---:|---|
| 1 | 36 | 274.5 px, 35.0 | 35.0 | L1 flat rim |
| 2 | 36 | 271.5 px, 34.6 | 34.6 | L2 convex face runs to its own rim, 3 px below L1; the cemented zone itself ends at 33.2 |
| 3 | 36 | 271.5 px, 34.6 | 34.6 | L2 rim; edge 1.05 mm as drawn (was 0.44 mm) |
| 4, 5 | 35.5 | 270 px, 34.4 | 34.4 | L3 rim, 1.5 px below L2 |
| 6 | 24 | 180.5 px, 23.0 | 23.0 | L4 front curve end and blank |
| 7 | 24 | 150.75 px, 19.2 direct; 19.45 from the sag to the annulus plane | 19.3 | concave curve ends here; flat annulus from there to 23.0 |
| 8, 9 | 19 | 146.75 px, 18.7 | 18.7 | L5 square rim |
| 10 | 19 | 144 px, 18.4 | 18.4 | L6 drawn about 3 px below L5 |
| 16 | 18 | 135.5 px, 17.3 | 17.3 | L9 rim, 4.5 px below L8 |
| 17 | 18 | 130 px, 16.6 | 16.6 | L10 convex face runs to its rim; cemented zone ends at 15.6, L9 has a flat annulus outside it |
| 18 | 18 | 130 px, 16.6 | 16.6 | L10 rim, 5.5 px below L9 |
| 19, 20, 21A | 17.5 | 127.25 px, 16.2 | 16.2 | stabilization doublet, square-cut, lowest rim of G5 |
| 22, 23 | 17.5 | 130 px, 16.6 | 16.6 | L13 rim, level with L10 |
| 24 | 17.5 | 131.25 px, 16.7 | 16.7 | L14 rim, 1–1.5 px above L13 at top and bottom |
| 25A, 26A | 18 | 133.5 px, 17.0 | 17.0 | L15 square rim, 6.5 px below L8 |
| 30 | 15.5 | 105–106 px, 13.4–13.5 | 13.5 | concave curve ends here; flat annulus from there to 15.0 |
| 33 | 15.5 | 134 px, 17.1 | 17.1 | L19 front curve runs to the rim |
| 36 | 15.5 | 135.25 px, 17.2 | 17.2 | L20 rear curve runs to the rim, 1 px above L19 |

Note added later on 2026-10-13: the rows for surfaces 6 and 7 record the figure readings and what this pass set. Both were afterwards restored to 24 mm (last section of this file), so 22 of the 24 changes stand and L4 no longer belongs in the list of elements with unequal faces below.

Twenty-four surfaces changed. Surfaces 7, 30, 33 and 36 differed from the drawing by 10–20 %. The others were within 3–8 % but flattened the drawn step order: the file had L1 = L2, L5 = L6, L8 = L9 = L10, the stabilization doublet level with L13/L14, and L15 level with L8, where the drawing steps each of them.

Retained, because they agree with the drawing within 3 % and keep the drawn order: 11 and 12 at 19 (figure 18.8), 14A and 15 at 18 (17.9), 27 and 28 at 15.5 (15.2), 29 at 15.5 (15.0), 31 and 32 at 18 (17.7), 34 at 15.5 (curve end 15.3) and 35 at 15.5 (curve end 15.2). The stop value was not touched.

Where the two faces of an element now differ (L4, L9, L17, L19, L20, and by 0.3–0.4 mm L1 and L6), the drawing shows a square blank with a flat annulus outside the shorter curve. The renderer joins the two rim points with a straight line, so those corners appear chamfered.

### Clearance

Exact meridional traces at all six published states, with the rear plate traced and the iris held at the radius set by the infinity f-number (16.699, 16.664 and 16.702 mm). With the plate in the path the corner chief ray reaches 21.63 mm at 16.47°, 10.01° and 6.09°, the patent's half-fields.

No surface clips the on-axis beam and none blocks the corner chief ray, before or after. The largest on-axis heights against the new rims: surface 1, 33.22 of 35.0 (tele, infinity); surface 7, 16.85 of 19.3; 14A, 16.71 of 18; 16, 16.21 of 17.3; 21A, 15.38 of 16.2; 24, 16.13 of 16.7; 26A, 16.51 of 17.0 (tele, 1.0 m); 30, 11.83 of 13.5. The smallest margin is 0.49 mm at 26A. The largest corner chief-ray heights: surface 1, 27.10; surface 7, 16.59; surface 36, 13.06.

The repository validator reports no errors. The image-circle floor check lists no undersized surface. Traced corner coverage is 100 % at 72.1, 118 and 194 mm, as before. Hidden render trim is zero at 27 zoom and focus states. Minimum rim edge thickness is now 0.93789 mm (L6); it was 0.43656 mm (L2). The minimum cross-gap policy margin is unchanged at 0.083819 mm, between surfaces 34 and 35, so no `gapSagFrac` change is needed.

### Engine results before and after

F-numbers are unchanged at 2.91, 2.89 and 2.92, with unchanged iris radii. The engine half-field went from 20.06°, 12.08° and 7.03° to 17.87°, 12.70° and 7.36°. The wide value fell because surface 7 now ends where the drawn curve ends and limits the field at 17.9°; it stays above the patent's 16.47°. Geometric transmission at the wide end, wide open, went from 59.4 % to 43.8 % at 16.5°, from 89.6 % to 78.1 % at 11.0° and from 95.8 % to 92.7 % at 8.2°. That added vignetting comes from the drawn curve ends of the concave faces 7 and 30, not from a clipped stated ray: with surface 7 left at 24 the corner value is 54.2 %, and with 30, 33 and 36 left at 15.5 it is 46.9 %. The G1 change has no effect at the wide end.

### Aspheric rim values

14A is unchanged at 18.0 mm: −228.044 µm, +16.1706°. Recomputed at the new heights: 21A at 16.2 mm, −101.509 µm and +11.4872°; 25A at 17.0 mm, −342.853 µm and +9.4838°; 26A at 17.0 mm, +44.799 µm and −18.8402°. The analysis table and its clear-aperture paragraph carry these values.

### Rendered comparison

The local page was viewed at 72.1, 118 and 194 mm at infinity and at 1.0 m. No elements overlap in any state. At the wide end the patent crop and the render overlay to within a pixel or two on every outline except the chamfered flange corners named above and the camera-side plate, which the app hides by design.

### Limits

The earlier sections of this file record the package's own geometry and ray-fan results at the first-authored rims: the 0.4366 mm minimum edge thickness, the list of default clipped surfaces and the ray-count table. They are not re-run here. No manufacturer construction diagram was viewed in this pass; this file holds no element-by-element comparison with one.

## 2026-10-13 — Glass labels, special-glass tags, metadata and wording pass

### Glass labels

All 20 element `glass` labels and the rear-plate label now name one catalog glass each, replacing the class-only "Unmatched" labels the earlier sections describe. The basis is the patent's own table: PDF pages 17–18 print nd, νd and PgF for all 21 media, re-read from the text layer in this pass, and each named catalog row equals all three.

| Elements | Patent nd / νd / PgF | Glass | Catalog nd / νd | PgF from the catalog curve |
|---|---|---|---|---:|
| L1 | 1.78590 / 43.94 / 0.5612 | NBFD11 (HOYA) | 1.78590 / 43.93 | 0.5612 |
| L2, L3, L4, L10, L13, L19 | 1.43700 / 95.10 / 0.5336 | FCD100 (HOYA) | 1.43700 / 95.10 | 0.5336 |
| L5 | 1.55032 / 75.50 / 0.5401 | FCD705 (HOYA) | 1.55032 / 75.50 | 0.5400 |
| L6 | 1.85883 / 30.00 / 0.5979 | NBFD30 (HOYA) | 1.85883 / 30.00 | 0.5979 |
| L7 | 1.87070 / 40.73 / 0.5682 | TAFD32 (HOYA) | 1.87070 / 40.73 | 0.5682 |
| L8 | 1.80610 / 40.73 / 0.5694 | M-NBFD130 (HOYA) | 1.80610 / 40.73 | 0.5694 |
| L9 | 1.80610 / 33.27 / 0.5884 | NBFD15 (HOYA) | 1.80610 / 33.27 | 0.5884 |
| L11 | 1.80809 / 22.76 / 0.6307 | S-NPH1 (OHARA) | 1.808095 / 22.76 | 0.6307 |
| L12 | 1.69350 / 53.20 / 0.5467 | M-LAC130 (HOYA) | 1.69350 / 53.20 | 0.5466 |
| L14 | 1.85451 / 25.15 / 0.6103 | NBFD25 (HOYA) | 1.85451 / 25.15 | 0.6103 |
| L15 | 1.76450 / 49.09 / 0.5528 | L-LAH91 (OHARA) | 1.76450 / 49.10 | 0.5529 |
| L16 | 1.86966 / 20.02 / 0.6435 | FDS20-W (HOYA) | 1.86966 / 20.02 | 0.6435 |
| L17 | 1.75500 / 52.32 / 0.5473 | TAC6 (HOYA) | 1.75500 / 52.32 | 0.5473 |
| L18 | 1.65100 / 56.24 / 0.5420 | S-LAL54Q (OHARA) | 1.65100 / 56.24 | 0.5421 |
| L20 | 1.49700 / 81.61 / 0.5389 | FCD1 (HOYA) | 1.49700 / 81.61 | 0.5377 |
| plate FL | 1.51680 / 64.20 / 0.5343 | BSC7 (HOYA) | 1.51680 / 64.20 | 0.5343 |

The catalog nd / νd column is each entry's listed value. The largest index residual is 0.000005 (S-NPH1). The Abbe residuals are 0.01 for NBFD11 and L-LAH91 and zero elsewhere. The curve PgF is within 0.0001 of the print in every row except FCD1: the repo's fitted FCD1 curve gives νd 81.59 and PgF 0.5377, while the entry lists PgF 0.5389, equal to the print.

PgF decided two rows where another glass shares nd and νd. 1.80610 / 40.73 with PgF 0.5694 is M-NBFD130; NBFD13 has 0.5672. 1.80809 / 22.76 with PgF 0.6307 is S-NPH1; FD225 has 0.6287. S-LAL54Q was added to the repo catalog for this lens. The L-LAH91 print of 49.09 and 0.5528 in OHARA's L-glass list is carried from the earlier catalog research in this file; the repo curve gives 49.0969 and 0.5529.

The stored `dPgF` values are unchanged: they are the patent PgF measured from the engine's normal line. All 21 media now resolve to catalog dispersion curves. The names select a curve; supplier and melt are not identified.

### Special-glass tags and the maker's construction diagram

`apd: "inferred"` with a one-sentence `apdNote` is set on L2, L3, L4, L10, L13 and L19 (FLD) and on L5 and L20 (SLD). The basis is the coordinator's viewing of Sigma's product page and construction diagram on 2026-10-13 (sigma-global.com/en/lenses/s023_70_200_28/). The page states "20 elements in 15 groups (6 FLD, 2 SLD, 3 aspherical elements)". The diagram colours FLD at elements 2, 3, 4, 10, 13 and 19, SLD at elements 5 and 20, and outlines aspherical elements 8, 12 and 15.

That is a one-to-one match with the patent example: the six 1.43700 / 95.10 elements, the 1.55032 / 75.50 and 1.49700 / 81.61 elements, and the aspherical surfaces 14 on L8, 21 on L12 and 25–26 on L15. The diagram was not viewed again for this section. The patent itself names neither FLD nor SLD, so the tag is "inferred", not "patent".

Note added later on 2026-10-13: the second review (last section of this file) retagged L4 and L5 "patent" on the patent's conditions (3) and (4); the other six tags stand as described here.

### Fields changed

Set by the coordinator before this pass: `name`, `subtitle`, `specs`, `apertureDesign` 2.91, the `source` strings of the rear plate and the three close-focus records, the 21 glass labels and the eight `apd` tags.

Changed in this pass, data file: the header comment (reworded, with a note on the glass labels); all 20 `role` strings, which had called every element "isolated-air" although ten are cemented; the two `apdNote` sentences; `focusDescription`, which keeps its `PUBLISHED:` keyword and now gives the G6 and G7 travel at each station; and the label of the gap after surface 26A, from "D26A" to the patent's "D26". Element labels, group labels and doublet labels were already plain.

Changed in this pass, analysis: the 20 per-element glass lines now carry the data file's labels; the glass section is rewritten around the table above and the two PgF decisions; the identification list and the L2, L5, L13 and L20 paragraphs state the diagram match; the aperture section drops the package's ray-fan test narrative and states the on-axis clearance, the wide-end transmission (78 % at 11°, 44 % at 16.5°) and the part surface 7 plays in it; the last section is renamed "Model Scope and Limitations" and keeps only statements about the model; the reference to repository files at a commit hash is removed.

Changed in this file: the two "pending" status lines in the opening sections are marked closed in place.

### Engine numbers

Identical before and after the wording edits: EFL 72.1040, 118.0039 and 194.0008 mm; F-numbers 2.91, 2.89 and 2.92; iris radii 16.6986, 16.6640 and 16.7020 mm; engine half-field 17.87°, 12.70° and 7.36°; back focal distance 32.0008, 32.0009 and 32.0012 mm at infinity; the three close-focus keyframes unchanged. The repository validator reports no errors.

### Open

Closed for this lens: the repo's FCD1 dispersion curve is a fit to a 2017 HOYA file and gives νd 81.59 and PgF 0.5377 against the listed 81.61 and 0.5389. The engine takes the g-line index of a catalog-resolved element from its stored `dPgF` when one is authored (`dispersion.ts`), and L20 stores the patent's printed PgF, so the fitted curve's partial dispersion does not reach the trace; only its νd (0.02 low) does. A refit of the shared FCD1 entry would affect every lens that names it and is left as a catalog follow-up.

## 2026-10-13 — Surfaces 6 and 7 restored to 24 mm

Owner decision: L4 keeps its first-authored 24 mm rim, square-cut, on both faces. The semi-diameter pass had set surface 6 to 23.0 mm, the drawn blank, and surface 7 to 19.3 mm, where FIG. 1 ends the rear concave curve inside a flat annulus. The owner chose the old rim to hold wide-corner illumination. Surface 7 was restored first and surface 6 after it, on the coordinator's instruction, so that the element is in the state the 54 % figure belongs to. Every other rim from the semi-diameter pass stays. L4 is now the one element deliberately set away from FIG. 1.

| Quantity | 23.0 front, 19.3 rear (figure) | 23.0 front, 24 rear (intermediate) | 24 on both faces (filed) |
|---|---:|---:|---:|
| Engine half-field at 72.1 mm | 17.87° | 20.50° | 20.64° |
| Engine half-field at 118 mm | 12.70° | 12.70° | 12.70° |
| Engine half-field at 194 mm | 7.36° | 7.36° | 7.36° |
| Geometric transmission, wide end, wide open, 11.0° | 78.1 % | 83.3 % | 83.3 % |
| Same, 13.7° | 61.5 % | 68.8 % | 68.8 % |
| Same, 16.5° corner | 43.8 % | 52.1 % | 54.2 % |

The three corner values on record for the choice: 43.8 % with the rear face at the drawn curve end (19.3 mm), 52.1 % with a square rim at the drawn blank height (23.0 mm on both faces), and 54.2 % with the filed square 24 mm rim. The wide-end field is now limited by surface 35 at 20.6°; surfaces 6 and 7 would limit at 21.3° and 21.9°.

Correction to the semi-diameter section above: it quotes 54.2 % at the corner "with surface 7 left at 24". That figure was computed with both L4 faces at 24, which is the filed state. With surface 6 at 23.0 the corner value is 52.1 % for surface 7 anywhere from 23.0 to 24, because beyond 23 mm the front face is the limit.

Results at the filed values. The repository validator reports no errors. The image-circle floor check lists no undersized surface. Traced corner coverage is 100 % at 72.1, 118 and 194 mm. No surface clips the on-axis beam or blocks the corner chief ray at any of the six published states; the largest on-axis and corner chief-ray heights are 17.60 and 17.99 mm at surface 6 and 16.85 and 16.59 mm at surface 7, against 24. The smallest on-axis margin is still 0.49 mm at 26A. F-numbers stay 2.91, 2.89 and 2.92 with unchanged iris radii. Hidden render trim is zero at 27 zoom and focus states. The minimum cross-gap policy margin is unchanged at 0.083819 mm between surfaces 34 and 35, and the 7-to-8 gap keeps 0.88 mm, so no `gapSagFrac` change is needed.

At the wide station L4 draws square-cut at 24 mm with no overlap. Against the drawing its rim stands 1 mm higher and its concave rear face runs about 3 mm further toward the image at the rim, because the drawn flat annulus is not modeled.

The data-file header's semi-diameter note and the analysis aperture paragraph state the exception and the three corner values; the analysis gives 83 % at 11° and 54 % at the corner.

## 2026-10-13 — Second review: diagram, labels and movement

### What was compared

The local page at 72.1, 118 and 194 mm, at infinity and at 1.0 m, its zoom and focus movement overlays at both ends, and the inspector of all 20 elements, against `patents/JP2025043459A.pdf`: FIG. 1 (PDF p. 45), the Numerical Example 1 tables (PDF pp. 17–19), paragraphs 0072–0075 (PDF pp. 16–17), the conditions (PDF pp. 12–13 and 42), aberration figures 2–7 (PDF pp. 46–48) and the front page (PDF p. 2). FIG. 1 was measured again from the 420 dpi page raster without reference to the first pass's readings. L4 (surfaces 6 and 7) was not open to change in this review.

Maker information is the coordinator's viewing of Sigma's product page and construction diagram on 2026-10-13, recorded in the glass-label section above: 20 elements in 15 groups, FLD at elements 2, 3, 4, 10, 13 and 19, SLD at 5 and 20, aspherical elements 8, 12 and 15. No maker image was viewed in this review.

### Figure measurement and rims

The axis is at page row 1962.1. Surface 1 crosses it at x = 973, surface 11 at 1611, surface 36 at 2456 and the image plane at 2714, which gives 0.12754 mm/px on the 1-to-36 span (189.1458 mm over 1483 px) and the same on the two shorter spans. All 36 vertex crossings fall within 1 px of the prescription. Rim readings are the mean of the upper and lower outline, taken at the centre of the 3 px line.

| Element | Surfaces | File (mm) | Figure, this review |
|---|---|---:|---|
| L1 | 1 | 35.0 | 274.0 px, 34.9 |
| L2 | 2, 3 | 34.6 | 271.0 px, 34.6 |
| L3 | 4, 5 | 34.4 | 268.5 px, 34.2 |
| L4 | 6, 7 | 24 / 24 | blank 180.0 px, 23.0; rear curve end 19.2–19.5 (the owner's exception) |
| L5 | 8, 9 | 18.7 | 146.5 px, 18.7 |
| L6 | 10 | 18.4 | 143.5 px, 18.3 |
| L7 | 11, 12 | 19.0 | 147.0 px, 18.7 |
| L8 | 14A, 15 | 18.0 | 139.5 px, 17.8 |
| L9 | 16 | 17.3 | 135.3 px, 17.3 |
| L10 | 17, 18 | 16.6 | 129.5 px, 16.5 |
| L11, L12 | 19, 20, 21A | 16.2 | 126.7 px, 16.2 |
| L13 | 22, 23 | 16.6 | 129.5 px, 16.5 |
| L14 | 24 | 16.7 | 130.7 px, 16.7 |
| L15 | 25A, 26A | 17.0 | 133.0 px, 17.0 |
| L16 | 27, 28 | 15.5 | 118.3 px, 15.1 |
| L17 | 29 / 30 | 15.5 / 13.5 | block 117.0 px, 14.9; rear curve end 105 px, 13.4 |
| L18 | 31, 32 | 18.0 | 139.0 px, 17.7 |
| L19 | 33 / 34 | 17.1 / 15.5 | 133.5 px, 17.0; rear curve end 15.4–15.7 |
| L20 | 35 / 36 | 15.5 / 17.2 | front curve end 15.4; 135.0 px, 17.2 |

No semi-diameter was changed. Every reading agrees with the file within 0.2 mm except L17's front face (0.6 mm, 3.9 %), L16 (0.4 mm), L18 (0.3 mm) and L7 (0.25 mm), all inside the measurement band, and the drawn order of heights between neighbours is kept throughout. Overlaid at the figure's scale, the live outline lies on the drawn one everywhere except L4 and the corners named next.

The corners the renderer bevels were each tested and left. Squaring L19 and L20 (34 at 17.1, 35 at 17.2) is refused by the validator: the combined sag of the two facing concave surfaces, 6.96 mm, exceeds the 6.39 mm gap, so the faces would cross. Squaring L17 (30 at 15.0) passes the validator but raises the modeled wide-corner transmission from 54.2 % to 59.4 %; the drawn curve end is the optical aperture, so 13.5 stays. Squaring L9 (17 at 17.3) would move the bevel to L10, whose rim the figure draws 0.7 mm lower, and would push the junction rim 1.2 mm past the drawn L9 blank.

Aspheric limits: 14A turns over at 31.8 mm (rim 18.0), 21A at 21.6 mm (rim 16.2), 25A at 23.2 mm with its conic limit at 27.4 mm (rim 17.0), and 26A has no turnover inside its 53.0 mm conic limit (rim 17.0). The departures and rim slopes in the analysis table were recomputed and are unchanged.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `diagramLabel`, all 20 elements | absent; the diagram printed 1…20 | "L1"…"L20" | The patent names groups G1–G8, GR, S, FL and I and no elements (PDF p. 45 legend and FIG. 1). The inspector and the prose already said L1–L20; the diagram now does too. |
| `varLabels` | D5, D7, D10, D12, D26, D30, D32, D36 | d5, d7, d10, d12, d26, d30, d32, d36 | The patent writes the variable gaps in lowercase (PDF p. 18). "D5" was both the gap after surface 5 and the L13 + L14 cemented pair. The cemented-pair labels keep D1–D5. |
| `apd`, `apdNote` on L4 and L5 | "inferred" | "patent" | Paragraph 0030 calls for anomalous-dispersion glass to correct the secondary spectrum, and conditions (3) and (4) bound the mean Abbe number and the mean anomalous dispersion ΔPgF of the negative lenses of G2 and G3 (PDF pp. 12–13; claim 3). L4 and L5 are the only such lenses. Example 1 lists 85.30 and 0.042 (PDF p. 42); from the printed PgF the two values are +0.05645 and +0.02767. |
| `zoomLabels` | absent | "Wide", "Tele" | The corpus convention for zoom lenses; the patent's columns are wide, middle and tele. |
| Header comment | gap names in capitals | lowercase gap names and a note on the labels and the two tags | Follows the changes above. |

The other six special-glass tags stay "inferred": L2, L3, L10, L13 and L19 (FLD) and L20 (SLD) follow the maker's diagram only. The analysis states the element numbering, cites conditions (3) and (4) under L4, and names L4 and L5 as the two elements the patent text itself singles out.

### Checked and found correct

Prescription: the 36 surface rows, the plate, the stop, the four aspheric markers, all 40 printed aspheric values (the conic constant and A4 to A20 of each surface), the seven variable gaps and BF at all six states, and the three close-focus object distances were compared by script with the patent text layer; there is no mismatch. Element types agree with the signs of R and with paragraphs 0074–0075. Roles and the five cemented pairs (surfaces 1–3, 8–10, 16–18, 19–21A, 22–24) are right. The group ranges equal the patent's group table (start surfaces 1, 6, 8, 11, 13, 27, 31, 33); the table starts G5 at the stop, where FIG. 1 draws S just outside the G5 bracket. Front-page data: publication 2025-043459 A of 1 April 2025, application 2023-150744 filed 19 September 2023, applicant Sigma Corporation, inventor Masakazu Hibino.

Zoom, wide to middle to tele, from the printed gaps and measured from surface 1, against paragraph 0073 and the FIG. 1 arrows:

| Group | Position change, wide → middle and middle → tele (mm, + toward the image) | Patent |
|---|---|---|
| G1 | 0 | fixed |
| G2 | +34.63, +31.92 | toward the image |
| G3 | +30.26, +27.82 | toward the image |
| G4 | +7.24, +12.41 | toward the image |
| Stop, G5 | +0.0015, −0.0027 | fixed |
| G6 | −1.38, −4.63 | toward the object |
| G7 | −1.40, +4.41 | moves; curved arrow |
| G8 | +0.0001, −0.0007 | fixed |

`zoomPositions` ascend 72.1, 118, 194 and every `var` array lists the stations in that order with infinity first. Focus, infinity to 1.0 m: G6 moves +1.3184, +3.5739 and +7.8357 mm toward the image and G7 −1.2160, −2.7733 and −7.4217 mm toward the object at the three stations; G1 to G5 and G8 stay. The page's movement overlays show the same directions, with maximum travel 66.55 mm for zoom and 1.32 mm and 7.84 mm for focus at the two ends. The focus slider's far end reads 1.00 m; the printed object distance of 778.00 mm plus the 222.00 mm track is 1000.0 mm.

Field behaviour against the patent's aberration figures, read at the top of each plot (1 px is 0.003 mm on the ±0.5 mm plots, 0.006 mm on the ±1.0 mm plots and 0.06 % in distortion) and computed with a separate exact skew-ray trace of the file's prescription, d-line, with the plate:

| State, half-field | ΔS figure / model (mm) | ΔM figure / model (mm) | Distortion figure / model (%) |
|---|---|---|---|
| 72.1 mm, infinity, 16.47° | −0.063 / −0.058 | +0.017 / +0.017 | +1.49 / +1.50 |
| 72.1 mm, 1.0 m, 16.45° | −0.205 / −0.200 | −0.400 / −0.395 | +1.46 / +1.53 |
| 118 mm, infinity, 10.01° | −0.031 / −0.028 | +0.098 / +0.101 | +3.84 / +3.88 |
| 118 mm, 1.0 m, 9.89° | −0.101 / −0.098 | +0.063 / +0.071 | +3.90 / +3.92 |
| 194 mm, infinity, 6.09° | −0.043 / −0.037 | −0.096 / −0.090 | +4.41 / +4.46 |
| 194 mm, 1.0 m, 6.08° | +0.079 / +0.079 | +0.57 just below the top / +0.60 | +4.76 / +4.79 |

The chief ray at those half-fields lands at 21.637, 21.638 and 21.622 mm at infinity and 21.629, 21.632 and 21.617 mm at 1.0 m, against the printed 21.63. The spherical-aberration curves interlace too closely to tell the three lines apart; the model's d-line marginal values at infinity, −0.054, −0.014 and −0.048 mm, each fall on a curve end at the top of the plot (−0.052, −0.014 and −0.047). Astigmatism and distortion agree in sign and size at all six states, which also confirms the order of the zoom stations and of the two focus states.

Vignetting: no rim changed, so it is unchanged. The page's figure is a meridional sweep (54.2 % at the 16.5° wide corner, before and after). A full-pupil count with the same separate trace gives 87.2 % at 11.0° and 53.0 % at 16.47° at the wide end, 44.3 % at the 118 mm corner and 39.6 % at the 194 mm corner.

Engine values, identical before and after: half-field 20.64°, 12.70° and 7.36°; f-numbers 2.91, 2.89 and 2.92; iris radii 16.6986, 16.6640 and 16.7020 mm; focal lengths 72.1040, 118.0039 and 194.0008 mm. The validator reports no errors, the image-circle check lists no undersized surface, traced corner coverage is 100 % at the three stations, and no surface clips the on-axis beam or blocks the corner chief ray.

The live page after the edits: labels L1–L20 sit in two rows without overlap at 72.1, 118 and 194 mm, at infinity and at 1.0 m. All eight group labels show at every state; at 194 mm G4 drops to a second row under G3. The gap readouts are d5 to d36 and equal the printed gaps at each state. The inspector shows the patent tag on L4 and L5, the inferred tag on the other six, the aspheric marks on L8, L12 and L15, and D1–D5 on the ten cemented elements.

### Open limitations

L4 at the long end. With surface 7 at 24 mm the rear rim point lies 7.65 mm behind its vertex. At 194 mm the gap to G3 is 8.10 mm and L5's front corner (18.7 mm) lies 6.15 mm behind that vertex, so the L4 bowl reaches 1.5 mm past the plane of L5's corner, outside L5's rim. The surfaces do not touch (1.69 mm axial clearance at 18.7 mm height), and the wrap appears from about 166 mm upward. The drawn blank, with its flat annulus 4.9 mm behind the vertex, would clear L5 by 1.3 mm. This follows from the owner's 24 mm rim and is left as it is; a rear face at or below 21.7 mm would not wrap.

The bevelled corners of L9, L17, L19 and L20 remain, for the reasons given above. The two aspheric marks on L15 print side by side as "AA". The gap label d5 and the cemented-pair label D5 now differ in case only, as in the patent's own gap notation.
