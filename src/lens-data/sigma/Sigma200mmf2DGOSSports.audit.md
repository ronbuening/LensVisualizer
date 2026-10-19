# Current disposition: qualified Stage 4 limited fixed-iris audit

The explicit 2026-10-04 approval accepts this lens as a limited fixed-iris model with inferred clear apertures and ordinary vignetting. The source near f/2.25 remains unreproduced. Geometry, source prescription, source endpoints, spectral values, physical iris and default thresholds are unchanged. The earlier blocked archive is preserved outside the repository. Earlier sections below are a chronological record; their block labels are historical, not the present gate.
JP2025162727A Numerical Example 1, exact stem Sigma200mmf2DGOSSports. Original PDF/card hashes are verified by the portable program. The original card fixes the selected patent and example. The current schema overrides historical plate shorthand.
# Sigma 200mm F2 DG OS | Sports — source dossier

## Job and reference versions

## Extraction and conventions
The original contains 39 PDF pages: the first PAJ cover precedes 38 printed publication pages. Full selected tables are on PDF pp.13–14 / printed pp.12–13, visually checked at 1800-pixel page height. Figure 1 is PDF p.22; Table 1 conditions PDF p.21. Example 1 has 34 surface rows, including aperture row 18, 19 glass elements, 14 air-separated groups, no aspheres, no camera plate, no lens-holder filter and no converter. Object/image rows remain raw reference planes. The general asphere equation was inspected, but is inapplicable to this all-spherical embodiment.

Native d-line values (587.56 nm) and absolute PgF are retained. Source-specific delta PgF = PgF + 0.0018 νd − 0.64833 is used only for patent conditions. Engine dPgF is separately calculated against 0.6438 − 0.001682 νd. No absolute line indices are invented. Scale is 1.

## Model transformations
Only source mapping and later aperture inference are planned. Source stop row 18 becomes STO. All published infinity and 1700 mm spacings are retained, including the 0.0001 mm BF change. There is no plate omission, air-equivalent rewrite, aperture override, marketing scaling or converter composition. Stage 2 must derive semi-diameters from Figure 1 and ray geometry with the default current geometry policy.

## Glass review
All 16 distinct coordinates were compared over the full supplied primary HOYA 2026-07-07 AGF including obsolete rows. Evidence preserves the three nearest candidate rows, coefficients, residuals and catalog hash. Fifteen pairs have exact coordinate candidates; nd1.80440/νd39.58 is near NBFD3, with residual +0.00010/+0.06. Multiple family variants remain possible. These are candidate coordinate matches, not supplier or melt identification. Other vendor catalogs were not individually checked. Source PgF values provide independent partial-dispersion information; they do not establish full measured spectral curves or APO performance.

## Numerical and geometry results
Separate matrix multiplication and reduced-angle ray recurrence agree. Infinity EFL is 194.30407165 mm; near EFL 153.35901617 mm. Both source tracks sum to 212.0003 mm. Infinity paraxial BFD is 22.44721874 mm against printed 22.4456 mm. At the source near image plane, the finite matrix B residual is 0.01398555 mm; magnification is −0.13130915 and object-to-image distance 1700.0003 mm. G2 moves imageward by 14.5678 mm; other deviations reflect source rounding. These figures are computed from raw source values.

Per-surface Petzval terms, each standalone thick-element power and every named functional-group EFL are included in results. TL/EFL = 1.091; therefore no compact-telephoto ratio claim is made merely because this is a long-focal-length product.

## Correction/discrepancy register
No source value was corrected. The weak G3 group computes 1807.69810684 mm rather than printed 1807.38. The raw printed-rounding comparison remains FAIL. Explicit half-last-digit propagation over the source's R/d/nd precision gives 1.7638 mm RSS and 6.1920 mm linear worst-case sensitivity, supporting a PASS for the separate source-precision resolution rather than a fabricated numerical match.

The near printed F-number 2.25 is not established by an unpublished fixed physical iris. Exact infinity launch at EFL/(2×2.07) calibrates a 16.53862226 mm physical stop radius; its paraxial near effective f-number is ~2.0033. This diagnostic remains visible and is an unresolved Stage 2 aperture-definition task. Source F-number values are preserved; no focus-dependent iris is invented. Stage 1 does not certify near aperture reproduction.

## Gate disposition
The complete source and conventions support construction. Physical iris/clear-aperture inference and near F-number definition are expressly Stage 2 tasks, not passed optical claims. No Stage 2 or later approval exists in this checkpoint.

## Independent review
Independent review had not yet been performed at that construction checkpoint; the final source-first review is recorded below.

## Quantitative claim map
The numerical paragraph maps to results.sourceModel; group/element/Petzval claims map to results.facts.groups, results.facts.elements and sourceModel.surfacePetzval; source condition claims map to facts.conditions; source rounding treatment maps to facts.sourcePrecisionG3. All numerical claims are script-executed. Product identity comes from Sigma's official product page, not inferred optical results.

## Pending integration
Typecheck, Prettier, lint, corpus tests, generated metadata, full build and browser viewer were not run at this point (closed: the lens was integrated into the repository on 2026-10-19).

# Stage 2 — blocked construction checkpoint

## Exact candidate and retained source
This continuation preserves the original source and all R/d/nd values. The candidate uses 19 glass elements and all 34 source surfaces, with dPgF converted to the current engine normal line. Both source focus states and an explicit finiteConjugates station at focusT=1, zoomT=0, 1700 mm image-plane reference are present. Current main remains 709dda72. No teleconverter entity or acceptance flag was authored.

The data file is an unapproved candidate. Stage 3 was not started. The extraction section above is not a Stage 2 pass.

## Geometry and native runtime execution
Preliminary Figure 1 estimates caused actual validateLensData failures at gaps 7→8, 21→22 and 32→33. Modeling decision T5 preserves those trial dimensions and the subsequently constrained SDs. No gapSagFrac, rim-angle, spacing or index policy was altered. The candidate now passes the actual current buildLens/validateLensData. Native computeElementRenderDiagnostics reports zero hidden trim at focusT=0,0.25,0.5,0.75,1. Native computeElementShapes paths were generated for both endpoints, rasterized as polygon paths and visually compared to Figure 1. This is original drawing-code execution, not a full browser viewer test.

The portable Python verifier checks the parsed final TypeScript JSON-literal payload directly and rejects duplicate keys, numeric expressions and trailing unparsed syntax. The TypeScript-only wrapper and JSON literal subset are intentionally narrow; this is not a general TypeScript parser. Node 24's real TypeScript transformation loads the current project modules separately. It is not static typechecking. The original offAxisRayUtils helper is included to execute the upstream off-axis launch selection; every other project module is a hash-verified external shared dependency recorded in evidence/runtime results.

## Aperture blocker
The physical iris inferred from an exact infinity f/2.07 ray is 16.5386222552 mm radius. Filling that same physical iris from the published near object (d0=1488 mm) needs a first-vertex launch height 47.133875882 mm. Exact source tracing, ignoring clear apertures for this diagnostic only, gives s7=31.437035721 mm and s8=31.396028130 mm ray heights. The actual default 0.90 gap rule permits only 30.320817151 mm shared radius across the 3.0213 mm s7→s8 gap. The near full-iris ray must therefore vignette before reaching the iris. The actual aperture-clipped runtime trace confirms the candidate's first stop at s8.

The counterfactual unvignetted near image-space sine cone is f/2.07697596, whereas the source lists f/2.25. The patent does not supply physical iris diameter, clear apertures, a focus-dependent aperture schedule or an explicit near F-number definition. Fixed element vignetting might account for an effective-aperture change, but the particular limiting rim and transmitted pupil are not established by the available source. Neither a fabricated focus iris nor an unstated vignetting fit is accepted. No geometry exception or numerical source repair is requested or applied.

This is the single mandatory Stage 2 FAIL: near-aperture-definition. It does not mean the patent is wrong. It means the inferred current model is not sufficiently established to certify the near aperture. The source values remain literal in evidence. A supported aperture/vignetting interpretation or primary aperture evidence is needed before resuming construction.

## Current UI and physical-pupil distinction
Actual UI launch uses entrancePupilAtState(physicalStop/currentFocusYRatio), giving radius 48.495753252 mm at infinity and 62.021176593 mm near, rather than the cached nominal infinity EP radius 46.933350640 mm. The true “tracks focus” branch uses conjugateK and h×focusK. The actual upstream off-axis helper was executed, including its field-safe scaling. Default UI fractions and additional ±1 stress-edge probes are recorded separately. Ghost continuation is never counted as transmission.

At near focus the default on-axis ±0.83 current-UI samples clip at source surface 1; the −0.75 off-axis sample clips at air-entry surface 22; the +0.75 off-axis sample misses the front surface. These are documented runtime results, not automatically treated as invalid glass geometry or disguised as successful physical rays. Separately aimed finite-source rays through ±0.83 and ±0.5 of the physical iris pass the complete prescription. Near full-iris rays clip at s8 as described above. The source finite-conjugate selector returns the published station only at focusT=1; intermediate spacings are interpolation samples, not source-established object-distance states.

The runtime additionally retains near first-vertex-angle 4.82° diagnostic rays. The source's field-angle reference at finite conjugates is not expressly defined; those rays are not claimed to reproduce its published 21.63 mm field height. The app's generic effectiveFNumber summary gives 2.82816 at near focus and is an approximate UI calculation, not source f/2.25 verification or physical sine-cone evidence.

## Glass coefficient check
The retained primary HOYA candidate coefficients were independently replayed using the catalog's formula 1 at C/d/F. All closest candidate rows meet nd 1e-4 and Abbe 0.02 coefficient roundtrip limits. Candidate naming is not assigned as manufacturer identity; generic class labels preserve source indices and dPgF without pretending the manufacturer supplied melt names.

## Final disposition and reproduction
Stage 2 was blocked at this point. The blocked verifier exits 1 by design because the actual unresolved acceptance check fails. Clean extraction must reproduce that failure and identical stable numerical output; such repeatability is not an optical PASS.

Run Python with --package-dir <extracted directory> --output <outside results path>. It also executes the bundled .runtime.mjs against the identified shared project source root; --runtime-source-root or LENSVISUALIZER_SOURCE_ROOT can supply a relocated copy with the same dependency hashes. No network numerical inputs, cached runtime report, absolute old per-lens paths or sibling dossier data are used as computation inputs. The .runtime.json is retained actual execution evidence, not a substitute for runtime execution.


# Qualified continuation after explicit scope decision

## Approval and change boundary
The user explicitly accepted the specific proposed limited fixed-iris treatment for this 200mm lens, retaining unresolved near F-number and clipping diagnostics. The independent reviewer verified the specific request and affirmative reply. Evidence preserves the lens-specific scope without private conversation identifiers or unrelated discussion. The bounded independent treatment review supported that limited model and did not grant a final pair audit. Raw source and baseline remain untouched.

Only the data header and focusDescription changed. The rest of the parsed data payload was unchanged. No surface, SD, index, spectral field, focus gap, aperture value, geometry threshold or configuration was changed. No normalizer to f/2.25 was added. The new acceptance check verifies this unchanged payload and the recorded specific approval; it does not convert any raw failed comparison into a numerical match.

## Recomputed limited-model evidence
The original current-main constructor, physical-stop/current-focus UI path and native geometry were rerun. A source-based analytic stop-aim solver followed by the original aperture-clipped engine was also rerun against this exact candidate. The bundled treatment probe comes from the bounded review; its portable module-key normalization is the only code adaptation. This is reuse of a checked numerical method, not a newly independent author review.

All 21 sampled focus states (0,0.05,…,1) retain zero hidden native trim. Only the near endpoint is a published finite conjugate. The exact transmitted on-axis near boundary reaches 96.6066744% of physical stop radius, equivalent to 15.977412956 mm at the stop, with image-space sine-cone f/2.143014842. The next failing ray clips at S8. This is a computed geometric limit of the inferred candidate; neither measured production exposure nor complete pupil throughput follows. The raw comparison to printed 2.25 remains FAIL.

The source-height corner chief ray reaches 21.63 mm at both endpoints. At infinity its field angle is 6.22261556°. At near, the one physical source point lies at z=−1488 mm and y=−160.379902 mm; its angle from the first vertex is 6.15171657°, while the actually entering chief ray is 4.81865068°, consistent with the source's rounded half-field 4.82°. This is a calculated convention interpretation; the patent does not explicitly define that finite angle reference. It supersedes no source value.

Corner pupil sampling uses 16 equal-area radial rings × 48 azimuths. At infinity it records 297 transmitted and 288 unresolved numerical aims; near records 326 transmitted and 271 unresolved aims, with other samples explicitly clipped or failed. Unresolved aims are neither transmission nor certified optical blockage. No continuous-pupil, radiometric-throughput, MTF or production-image-quality claim is made. Native sequential traces count as fully traversed only when status=ok and terminalSurfaceIndex=33; image coordinates are then propagated explicitly. Failed or clipped physical rays have null accepted image intercepts. The author runtime report was corrected to stop displaying extrapolated ghost/blocked rays as accepted image coordinates; optics remained unchanged.

## Gate and inherited limitations
Stage 2 passed within the approved limited fixed-iris scope only. All 56 executed/declared checks have their actual status: mandatory source, payload, numerical, geometry, runtime, scope and disclosure checks pass; five integration-only checks remain NOT_RUN. Raw failed source comparisons remain in results.comparisons. The original blocked stage is retained as history. Stage 3 must bind to this exact data/evidence/verifier revision and must include these limitations explicitly.

## Claim-map additions for subsequent analysis
- Architecture/EFL/BFD/principal planes/track: results.sourceModel and implementedModel
- All element nd/νd/class/standalone focal lengths: parsed data.elements and facts.elements
- Group and cemented-interface interpretation: rawPrescription.groups, facts.groups and source ¶0056–0058; element power alone is not an aberration allocation
- Focus travel/magnification/conjugate: facts.focusTravelMm, sourceModel[1], parsed var/finiteConjugates
- Aperture calibration and counterfactual full iris: facts.nearApertureProof and actual runtime.baseline
- Transmitted axial near boundary and corner chief: facts.treatment.states[].axialLimit and facts.treatment.cornerFacts
- Finite pupil samples and unresolved aims: facts.treatment.states[].profiles[].grid; no throughput claim
- Raw source mismatches and accepted treatment: results.comparisons and evidence.limitedTreatment
- UI limitation: facts.runtime.states[].rays/currentEntrancePupil/uiEffectiveFNumber
- Conditions: facts.conditions, source Table 1 and patent-specific PgF baseline
- Glass: evidence.glassEvidence and facts.catalogRoundtrip; no supplier/melt conclusion

These mappings separate source facts, model calculations, inference and approved limitations. The later analysis will not contain workflow readiness badges or approval narrative.

# Stage 3 companion analysis and exact revision binding

## Entry checkpoint
The 13-file qualified Stage 2 ZIP was frozen and clean-replayed before any analysis was authored. Stage 3 preserves the exact Stage 2 data, evidence and verifier bytes. The new analysis and analysis-aware results are the downstream additions; no model change was needed.

## Structural, numeric and prose review
The 287-line analysis opens with the required patent/date/author/applicant/embodiment block and follows the current required section order. All-spherical status is stated rather than adding an empty asphere section. Conditional Expressions and Image Stabilization are included because the source supplies them. Every one of the 19 element first lines is checked against the final parsed data, including nd, νd, glass class and standalone focal length. All standalone/group powers, endpoint EFL/track/BFD/conjugate quantities, spectral conversions, conditions and aperture claims map to the claim-map section above and the actual executed results.

A manual interpretive/citation pass checked the original selected source's ¶0012–0050 and ¶0056–0058 against the analysis claims. The analysis differentiates isolated element power, actual cemented interfaces and complete functional-group power; avoids assigning individual aberration corrections from a glass class or power sign; does not elevate the production correlation to factory-prescription confirmation; distinguishes barrel dimensions from optical track; and states the finite-angle convention as a calculated interpretation. A draft phrase describing L1's rear surface as concave was corrected to “weakly curved,” consistent with its biconvex radii. This was a prose correction only. Greek νd and usable ordinary source links are retained.

The approved limited treatment is explicit in the analysis opening, focus discussion and verification limits: fixed infinity-calibrated iris; inferred SDs and ordinary vignetting; raw near f/2.25 unreproduced; actual transmitted limiting cone distinct from counterfactual full iris; source-corner chief coverage distinct from peripheral-pupil completeness; numerical aiming failures kept visible; current UI pupil/f-number/fan behavior distinct from physically aimed rays. No workflow approval narrative, readiness badge, MTF claim or measured throughput claim occurs in the companion analysis.

## Final authoring gate
Ready for audit, qualified to the explicitly limited fixed-iris scope. The portable verifier reports 61 checks with no mandatory failure; integration-only checks remain NOT_RUN. Raw numerical mismatches remain FAIL in comparisons and are not counted as reproductions. The final 14-file archive is safely extracted, every member hash checked, and the complete Python/current-main runtime/treatment computation rerun with output outside the package. Stable numerical and structured output must be identical. This authoring result did not complete Stage 4 or repository integration.

# Stage 4 — final source-first independent review

## Independent baseline and exact input identities
The independent reviewer first re-extracted the original rendered Example 1 before opening candidates, froze a seven-file source-only baseline, and then performed a bounded treatment review. The source/card were unchanged. Candidate/prior-result exposure began only after baseline freeze; the baseline exposure record discloses adjacent example material visible on shared source pages and directory names. Hashes identify bytes and do not cryptographically prove independence.

The Stage 3 candidate archive was reviewed here. All 14 original candidate members were reverified and remain preserved outside this final revision.

The seven-file baseline was frozen before candidate exposure. Evidence contains the exact original independent evidence text and source identities; the consolidated verifier embeds the exact independent Python implementation. It regenerates the original baseline in a temporary directory and compares the frozen stable numerical fingerprint. The original baseline retains diagnostic exit 1 and its finite-aperture discrepancy. It is never rewritten as if it had used the author's larger exact-calibrated iris or earned the later scope approval.

## Four-view reconciliation and calibration
Raw patent, frozen baseline, final parsed TypeScript and companion prose were checked separately. All source surface R/d/nd values, both published gap states, group spans/printed group values, all nine conditions and every native nd/vd/PgF row reconcile with the independent extraction. All aspheres and source plates are inapplicable for this example. Both normal lines remain separate. No optical value, SD, aperture target, focus spacing or geometry policy changed during final review.

The frozen diagnostic iris uses a paraxial infinity f/2.07 calibration and has radius 16.0057923704mm. Current buildLens instead traces the exact infinity nominal-aperture ray; the independent sphere/Snell path reproduces its radius 16.5386222552mm. That distinct calibration gives infinity exact sine-cone f/2.069828914. It explains the differing paraxial aperture numbers without changing a source value or erasing the frozen baseline. The actual near transmitted f/2.143014842 still differs from source 2.25; full fixed-iris continuation f/2.076975958 is blocked at S8 and is not counted as transmission.

The actual current-EP true-focus UI fan, the physical-source-to-stop bundle and the approximate UI f-number have different definitions. Their clipped/missed rays and accepted transmitted rays remain distinct. Corner chief coverage is established at 21.63 mm; unresolved peripheral aiming samples remain unresolved, with no full-pupil or throughput claim. The near entering chief 4.818651° is a calculated source-consistent interpretation of printed 4.82°, not an explicit published angle definition.

## Final glass and prose corrections
Independent primary-source review supplemented the author's HOYA comparison with OHARA's official coordinate table. L10's 1.80440 / 39.58 pair has an exact OHARA S-LAH63Q coordinate match; HOYA NBFD3 is only a nearby coordinate and its computed PgF≈0.571440 differs from source 0.5762. The analysis now makes that spectral distinction explicit and adds the OHARA citation. No glass label, native value, spectral coefficient or supplier claim changed. S-FPL53's current 1.43875 / 94.93 coordinate is explicitly not treated as identical to source 1.43700 / 95.10. Schott, HIKARI, CDGM and Sumita remain not independently checked.

The final prose was manually read for source citations, group membership, shape/power signs, finite reference planes, normal-line conversion and interpretive claims. All 19 element lines agree with the exact data and independent standalone powers. Full group/cemented power and surface-Petzval evidence is retained. The native shape paths were rasterized for visual inspection against the original Figure 1; this is native geometry execution plus image inspection, not browser-viewer verification.

Non-optical private queue/editor metadata and private conversation identifiers were removed from the delivery records. The specific affirmative scope decision was verified directly; the final evidence retains the approved scope/date without the private transcript or unrelated lens discussion. A stale bounded-report reference was updated to the actual preserved review fingerprint. These documentation/privacy corrections do not authorize or alter optical behavior.

## Narrow acceptance and negative-fixture boundaries
The specific approval permits this limited fixed-infinity-iris model with inferred apertures, ordinary vignetting, unreproduced near f/2.25 and current UI limitations. It does not permit source changes, SD fitting, focus-dependent iris laws, geometry exceptions or unqualified pupil/performance claims.

The acceptance predicate locks the full parsed payload except the separately reviewed focus-description text to the already reviewed optical payload hash. Exact final data and analysis byte identities also bind the manual disclosure reviews. Strict literal parsing rejects executable prefix material, unsupported expressions, duplicate keys and trailing content. Portable negative fixtures reject source, SD, iris, nominal aperture, threshold, focus, finite-conjugate, spectrum and unknown-field changes, revoked approval and unrelated mandatory FAIL/NOT_RUN states. Mandatory unperformed checks cannot silently pass; only explicitly integration-scoped NOT_RUN checks are deferred.

Additional full-process negative runs on temporary copies verify that an unrelated source-radius change, a geometry-rim change, removal of the required unresolved-aperture disclosure and alteration of the focus description all return nonzero and write failure diagnostics. These tests are dossier scripts/temporary fixtures, not added repository tests.

All four author raw source comparisons remain FAIL: near-fno-fixed-iris-paraxial-diagnostic; group-G3-printed-rounding; near-aperture-definition; near-transmitted-edge-vs-source-Fno. G3 has its independent source-precision explanation. The three near-aperture comparisons have the explicitly bounded model-scope treatment, not numerical reproduction. Any new unrelated raw failure or mandatory check failure blocks approval.

## Final claim map and gate
Final numerical claims map to results.sourceModel/implementedModel, facts.elements/groups/conditions/catalogRoundtrip/runtime/treatment and independentBaseline.finalTypeScriptReconciliation. The independent baseline replay supplies separately preserved source conventions, element/cemented/group powers, principal planes, pupils and per-surface Petzval. The final analysis hash binds the manual interpretive/citation check. The manifest binds every final delivered file.

The final review cleared the lens for batch integration only within the expressly approved limited fixed-iris scope. The final nonzero-size/UTF-8/JSON/hash/inventory checks and clean extracted replay bind that qualification to the final bytes. This does not assert source near f/2.25 reproduction or fully transmitting pupils. Actual current constructor/validator, sampled geometry/zero hidden trim, state/finite selector and physical/UI trace diagnostics were executed. Static typechecking, formatting-tool execution, lint/corpus/full-build and browser viewer were not run at that point (closed: integrated 2026-10-19).


## V2 conversion — 2026-10-17

Converted with the repository's deterministic converter and V2 schema. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog end-to-end testing is not claimed for this format-conversion batch. This format conversion is not deployment or complete optical acceptance.

Retained package status: qualified limited model (source near f/2.25 not reproduced, near-focus default rays clip, pupil/readout limitations retained); no new optical approval.

## 2026-10-19 — Deployment validation and wording pass

Source re-read: all 34 rows of Example 1 (R, d, nd, νd, stop at row 18) were compared against the patent's table pages (PDF pp. 13–14, text layer checked against page images), together with the three variable spacings (d12, d14, BF) at both focus states and the PgF-to-dPgF conversion. No aspheres are present. Mismatches: none. Element count (19), group count (14), the five cemented pairs and every element's shape agree with Figure 1.

First-order values, patent vs model: EFL 194.30 vs 194.304 mm at infinity and 153.36 vs 153.359 mm at the near state; F/2.07 vs 2.07 (iris radius 16.5386 mm, calibrated); total track 212.00 vs 212.0003 mm; BF 22.4456 printed vs 22.4472 mm paraxial; half-field 6.22° with the 21.63 mm image height reached (field-coverage audit 100 %). The near conjugate is 1700 mm from the image plane with d0 = 1488 mm. The printed condition values checked (D1/f 0.165, f1a/f 0.863) agree.

Maker diagram: Sigma's S025 construction diagram shows 19 elements in 14 groups and colours L2 and L4 as FLD and L7 and L18 as SLD. These positions carry the 1.43700/95.10 coordinate (L2, L4) and the low-dispersion coordinates 1.59410/60.47 (L7) and 1.57144/71.61 (L18). Element shapes, the near-flat rear of L1 and the 32 mm air space after L2 also match. Examples 2–6 of the same patent fit worse (13 groups, 20 elements, an asphere, or a different focal length). Sigma lists a 170 cm minimum focus, 1:7.6, L-Mount and Sony E, matching the data file.

Near-focus rays: with the viewer's near-focus entrance pupil (62.02 mm radius), the outer pair of the default axial fan is clipped by first-group rims from about 60 % of the focus travel onward and stops at the front element at close focus. This matches the qualified limitation recorded above.

Fields changed in this pass: data-file header comment, `subtitle`, `specs`, `focus.description`, and `apd: "inferred"` with `apdNote` on L2, L4, L7 and L18 (`name` was changed separately to "SIGMA 200mm f/2 DG OS | Sports"). In the analysis, the SLD positions were added, workflow wording was removed, and the former verification section became "Model Scope and Limitations". In this file, workflow status tokens and archive hashes were removed and stale pending lines were closed. No optical value changed; EFL, f-number, half-field, stop radius, BFD and both focus layouts are identical before and after.

Formerly open: the `focus.conjugates[0].source` string still read in run-together shorthand ("JP2025162727A Example1, PDFp14 …"); it was outside this pass's allowed fields. (Closed: the string now reads "JP 2025-162727 A, Example 1 spacing table: object distance 1488 mm, total track 212 mm".)

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/JP2025162727A.pdf`, PDF page 22, Figure 1 (Example 1), a clean line drawing without ray bundles, measured from its native 425 ppi raster. The figure is drawn at the infinity state: every one of the 33 surface vertex crossings lies within 2 px of the prescription positions at d12 = 3.4 and d14 = 20.92. Axial scale from S1 to S34 (189.55 mm) and S1 to the image line (212.00 mm): 9.116 px/mm, both spans agreeing to 0.1 %.

Vertical scale: least-squares sphere fits of 16 strongly curved surfaces (S1, S3, S5, S6, S11, S14, S16, S24, S25, S33 and others) give a vertical/axial factor of 0.98 to 1.00, median 0.99 on the upper side and 0.993 on the lower side. The stop tick's inner end sits at 148 px, i.e. 16.4 mm at that factor against the calibrated 16.54 mm iris radius. Figure 1 is therefore not anamorphic (at most about 1 % short vertically). Rim heights below use 0.111 mm/px, averaged over the upper and lower halves, which agree within 1 px.

| Surface | Stored sd | Figure (mm) | Ratio | Decision |
|---|---|---|---|---|
| 1 / 2 (L1) | 50 / 50 | 50.0 / 50.0 (pointed rim) | 1.00 | kept |
| 3 / 4 (L2) | 47 / 47 | 47.6 / 47.1 | 1.01 | kept |
| 5 (L3) | 35 | 34.8 | 0.99 | kept |
| 6 (L3/L4 cement) | 32 | L4 side 32.3; L3's flat annulus starts at 31.0 | 1.01 | kept |
| 7 (L4) | 32 | 32.1 | 1.00 | kept |
| 8 / 9 (L5) | 30.3 / 30.3 | 30.9 / 30.4 | 1.02 / 1.00 | kept |
| 10 (L6) | 28.5 | 28.4 | 1.00 | kept |
| 11 / 12 (L6/L7, L7) | 27.5 / 27.5 | L7 rim 27.1; L6's annulus starts at 26.4 / 27.0 | 0.98 | kept (noise) |
| 13 (L8) | 24 | 24.3 | 1.01 | kept |
| 14 (L8) | 24 | 22.3 (curve ends at a flat annulus) | 0.93 | **22.3** |
| 15–17 (L9/L10) | 19.5 | 19.7 / 19.3 / 19.3 | 0.99–1.01 | kept |
| 19–21 (L11/L12) | 17 | 16.9 / 16.8 / 16.8–17.0 | 0.99 | kept |
| 22 / 23 (L13) | 15.0 / 15.0 | 16.7 / 16.7 (square-cut) | 1.11 | **15.7 / 15.7** (faces cross at 15.9) |
| 24–26 (L14/L15) | 16.8 | 16.5 / 16.5 / 16.7 | 0.98–0.99 | kept |
| 27 / 28 (L16) | 18 | 18.1 | 1.01 | kept |
| 29 / 30 (L17) | 17.5 | 17.9–18.1 / 17.8 | 1.02 | kept |
| 31 / 32 (L18) | 17 | 17.1 / 16.8 | 1.00 | kept |
| 33 (L19) | 15.4 | curve ends 15.2–15.8, then a flat annulus | 1.00 | kept |
| 34 (L19) | 15.4 | 17.2 | 1.12 | **17.2** |

Changes and evidence:

- S34 15.4 → 17.2 mm: the figure draws L19's convex rear running to a 17.2–17.3 mm flat top, 12 % above the stored value, with the front S33 stepping out from its 15.4 mm curve end through a flat annulus. S33 stays at 15.4 because the S32→S33 gap rule limits it and the figure agrees with it. Rays: S34 was the largest vignetting surface (40 % of the corner bundle side) and the leading engine field limiter; it now trims about 10 %.
- S14 24 → 22.3 mm: the figure draws L8's concave rear ending at 22.3 mm and a flat annulus out to the 24.3 mm front rim. The change is 7 %, inside the usual noise band, but the reading is good to about 0.15 mm, and an overlay showed the old value pushing the rear face about 1 mm axially past the drawn element outline. It is treated as a comparative-step fix. The infinity axial marginal ray needs 21.49 mm at S14, and the near-focus beam needs less because L8 moves rearward.
- S22/S23 (L13) 15.0 → 15.7 mm, both faces: Figure 1 draws L13 square-cut, with L12's rear and L13's front merging from about 14.8 mm up to 16.7 mm. With the printed prescription the two faces cross at about 15.9 mm, so the drawn 16.7 mm is not physically reachable. The default 0.9 gap rule capped L13 at 15.0 mm. At 15.7 mm the S21→S22 sags take 2.77 of the 2.844 mm gap, leaving about 0.07 mm of air at the rim: the elements meet at the rim, as drawn, without crossing. The coordinator therefore set `checks.gapSagFrac` to 0.98, the smallest two-decimal value that admits this rim, under the standing rule for facing surfaces that the figure draws meeting. A value of 0.97 is refused (2.758 mm allowed). The corner-bundle trim at S22/S23 falls from 10–12 % to 5–8 % per side. Every other gap still passes at the default 0.9.
- Other surfaces agree within 1–2 %, apart from S11/S12 at 2 %. No comparative step order is reversed.

Clearance after the edits (S14, S22, S23, S34), by exact meridional trace: no surface clips the f/2.07 infinity axial beam or the 21.63 mm corner chief ray, at infinity or at the 1.7 m state. The near-focus transmitted on-axis boundary is unchanged at about f/2.14 (96.6 % of the iris, still stopped at S8). Engine values: EFL 194.304 mm, f/2.07 and the 16.539 mm iris are unchanged. The engine half-field estimate rose from 7.87° to 8.08°. Field coverage is 100 % at 6.2°. The image-circle, aperture-census and surface validators report no findings. Longitudinal spherical aberration at full aperture is 0.02 mm, so no prescription misprint is indicated.

Live view: the local page was checked at infinity and at 1.7 m. L19 now carries the drawn rear rim, and L13 renders square-cut, meeting L12 at the rim without overlap. L8's rear corner is drawn as a short chamfer rather than the figure's flat annulus, because the renderer joins the two face rims with a straight edge. At near focus the outer pair of the default axial fan is still clipped in the first group, as recorded above.

Maker diagram: per the deployment-validation section above, Sigma's S025 construction diagram shows 19 elements in 14 groups, with FLD at L2 and L4 and SLD at L7 and L18; no aspherical element. No maker image was viewed in this pass.

## 2026-10-19 — Glass relabel to catalog rows

All 19 glass labels changed from descriptive coordinate classes to the catalog rows that the patent's printed nd, νd and PgF pin: HOYA FC5, FCD100, TAC8, NBFD25, TAC6, FCD600, E-C3, NBFD30, FDS16-W, LAC8, TAF1, TAFD40, NBFD29, E-FL6 and FCD615, and OHARA S-LAH63Q for L10. Each label carries the note "nd/νd/PgF coordinate match; production supplier unconfirmed". The printed PgF selects the row where processing variants share one nd/νd pair: TAC6 rather than TAC6L, TAFD40 rather than TAFD40L-W, and S-LAH63Q rather than HOYA NBFD3. The FCD615 row was added to the repository catalog from the local HOYA 2026-07-07 AGF. Every element now resolves to its row. The catalog PgF, computed from each row's dispersion formula, matches the source PgF within 0.0001, and catalog nd/νd match within the source rounding. The authored nd, νd and dPgF are unchanged, and EFL, f-number and half-field are identical before and after. The caution in "Final glass and prose corrections" still applies: these are coordinate equivalents, not supplier or melt identifications. The data header, the four apdNote strings, the analysis element lines and the analysis glass section were updated to match. The analysis quotes no engine-computed chromatic values, so none needed re-checking. Only the patent's own ΔPgF condition values appear, and they are unchanged.

## 2026-10-19 — Second review: diagram, labels and movement

Compared the local page (infinity, 1.7 m, the focus movement overlay, the Distortion and Aberrations tabs, and the inspector for L3, L5, L7, L10, L13 and L18) with Figure 1 (PDF p.22), the Example 1 tables (PDF pp.13–14) and the patent text (claim 1, ¶0014–0015, ¶0056–0058).

Silhouette: the rims were re-measured independently from the native 425 ppi raster on the upper side (axis at row 1239, 0.111 mm/px). L3 34.7–35.1, L4 32.0–32.4, L5 30.8–31.2, L6 28.3–28.6, L7 27.0–27.3, L8 24.2–24.5, L9/L10 19.3–19.7, Gos 16.8–17.1, L14/L15 16.6–17.0, L16 18.2–18.4, L17 17.9–18.1, L18 17.0–17.2 and L19's rear flat 17.2–17.4 mm. Every stored value is within 3 % of these readings, and the height order between neighbours matches the figure. No rim was changed. Figure 1 draws L3, L8 and L19 with a flat land and a vertical step, from the taller face's rim down to where the shorter face's curve ends. The renderer draws this as a straight bevel. Setting both faces to the taller rim would cross the neighbouring face (S33 at 17.2 mm would cross S32 by about 1.0 mm) or push L4 and L8 past the drawn outline, so the bevels stay. The stop sits between L10 and L11, as drawn. The exact meridional trace at infinity shows no axial clip and no blocked corner chief ray. The meridional vignetting curve (100 % on axis, 83 % at 3.1°, 51 % at 6.2°) comes from the drawn rear-group rims and is retained. It is meridional only.

Labels and tags:

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups[1].text` | G2 | G2 focus | ¶0057: G2 alone moves from object side to image side during focusing; Figure 1 arrow |
| `groups[2].text` | G3 | G3 incl. Gos (OS) | ¶0058: G3 = L9–L10 pair, stop S, stabilizing group Gos and rear group Gr; Figure 1 Gos bracket and double-headed arrow |
| L3 `role` | none | patent's L1na, front of subgroup 1b | Figure 1 leader "L1na"; claim 1, ¶0014 |
| L5 `role` | none | patent's L1nb; claim 1 caps its positive anomalous partial dispersion | Figure 1 leader "L1nb"; claim 1 conditions (1)–(3) |
| L8 `role` | none | G2, sole focusing element, 14.57 mm imageward | spacing table |
| L11–L13 `role` | none | members of the stabilizing group Gos | ¶0058; Gos f = −52.92 mm (group data table) |

Group surface ranges (G1 1–12, G2 13–14, G3 15–34) bracket the right elements. The five cemented-pair labels (L3–L4, L6–L7, L9–L10, L11–L12, L14–L15) match Figure 1, have no cement-layer entries, and do not clash with the D12/D14/BF gap labels. All 19 element types agree with the signs of R and with the shapes in ¶0056–0058. There are no aspheres and no `A` labels. Sequential L1–L19 names are kept. The patent names only L1na (L3) and L1nb (L5), and those designations are now in the roles. The analysis already names Gos as L11–L13 (L11–L12 cemented pair plus biconcave L13), which matches ¶0058.

The patent text does not designate any element as anomalous-dispersion, ED or fluorite glass. Its only anomalous-dispersion wording (異常分散性) is condition (3), which caps the positive anomalous dispersion of the flint L1nb (L5). ¶0015 asks for a small partial-dispersion difference inside G1's cemented pair. The `apd: "inferred"` tags on L2, L4, L7 and L18 therefore stay, based on the maker-diagram record in the deployment-validation section above. In the inspector, L7 (FCD600) and L18 (FCD615) show "APD (INFERRED)" with their notes, and L10 shows S-LAH63Q (OHARA). The repository catalog rows for FCD615, FCD600, FCD100, TAFD40 and E-C3 carry the patent's nd/νd. Every element resolves, so no element is unmatched.

Focus movement: the patent's variable spacings go from d12 3.4000 → 17.9678 and d14 20.9224 → 6.3545 (Δ +14.5678 / −14.5679), with BF 22.4456 → 22.4457. L8 therefore moves 14.57 mm toward the image, and G1, G3 and the image plane stay fixed. Index 0 is infinity and index 1 is the 1.7 m state. The overlay shows G2 travelling 14.57 mm toward the focus plane, with G1 and G3 stationary. The slider's far end reads 1.70 m and EFL 153.36 mm.

Against the patent's own plots (Figure 2, infinity): the engine's rectilinear distortion is +2.10 % pincushion at the image edge, against about +2.1 % read from the patent curve at ω = 6.22°. The engine's sagittal and tangential field curves stay within about 0.01 mm of the image plane. The patent's ΔS/ΔM curves are indistinguishable from zero on their ±0.5 mm scale. Both agree.

Engine values before and after: EFL 194.304 mm, f/2.07, iris radius 16.539 mm and half-field 8.08° are unchanged. The surface, image-circle and field-coverage audits report no findings (100 % coverage).
