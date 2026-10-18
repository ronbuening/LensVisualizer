# Minolta 600mm F6.3 MD Apo-Tele — consolidated audit

## Follow-up diagram and movement review

FIG. 7 and the live section retain the small rear groups. From infinity to the interpreted 12 m endpoint, groups I/II move objectward by 9.120/14.592 mm; the front assembly and group III remain fixed. No zoom travel exists. Source-line and fluorite-proxy qualifications remain visible. All eight glass records retain qualified catalog curves.

## Catalog integration — 2026-10-17

This section records the current catalog decisions. Earlier stages below retain the extraction history and may describe superseded rim or glass choices.

- **Optical-rim source:** US 4,126,378 A Example 3 / FIG. 7 (local PDF page 4, 600 DPI). Retained the existing optical rims after inspection of the fixed front assembly, small moving rear groups and rear doublet. Figure labels and hatching contaminated automatic envelope estimates, so those oversized machine candidates were rejected.
- **Glass:** All eight records now carry qualified spectral proxies. Added historical HOYA LAFL23 from its official 2026-07-07 AGF, including obsolete types, for L5. The source line is unspecified; all matches depend on the disclosed approximate d-line interpretation. Fluorite/APO production branding does not validate spectral performance.
- **Metadata and V2:** Canonicalized the assignee and normalized the MD APO TELE display name. Replaced the two 6e15 radius sentinels with V2 "flat" surfaces and marked the tabulated focus endpoint as published. The 12 m reference-plane interpretation and interpolated cam remain qualified. The source has eight powered elements; no unprescribed production filter was added.


## Current Stage 4 disposition

READY_FOR_BATCH, with INTEGRATION_PENDING. The source-first baseline was frozen before candidate exposure. The corrected final pair passes mandatory portable checks and the targeted real-project checks described below. This does not certify the production prescription, mechanical iris, APO performance, continuous-state clearance, or integration. Historical Stage 1–3 sections below retain their original construction context; the current Stage 4 record controls final readiness.

## Job and reference versions

US4126378A, Example 3, original four-field card and original PDF are unchanged. Current controlling reference tree is commit `66b394809241620190908def6caf9a81d3f3a6f5`; reference identities are in the manifest. Batch 5 independently checked current main and all 26 reference files; the optional engine dependency verification covers 218 files. Working/output paths are authorized workspace paths because `/mnt/data` is not an available writable output mount. No repository writes, corpus sweeps, build, integration, or publication occurred.

## Extraction and conventions

The original PDF has no extractable text. Pages 4, 7–12 were rendered; Table 5 was inspected at 300 dpi and cross-checked against its verbatim repetition in claim 9. Fifteen refracting surfaces form eight powered elements and seven air-separated groups. The table is normalized to f=100, despite general prose describing unity normalization. No extra factor of 100 is applied. Index and Abbe columns are labelled n and ν, without named spectral lines; the source numbers remain unchanged, and a d-line tracing proxy is disclosed rather than asserting d-line provenance.

## Model transformations

Uniform 6× scale maps the table's nominal 100 to the job-card 600 mm. Source-derived EFL is 99.9397837 native, yielding 599.6387024 mm. BFD is computed from the rounded source matrix, not reverse-engineered from its rounded telephoto ratio. The manufacturer's integral filter has no numerical patent prescription; no plate, spacing, or refractive index is invented.

The stop is not shown by a literal iris glyph in Fig.7. A constrained optical inference uses ten strong-surface Table6 ratios SII/SI, which equal the chief/marginal refraction-invariant ratio. The two-parameter solution gives the incident chief-ray basis; its zero crossing lies in d8. Published two-decimal coefficients and rounded surface data limit precision. Leave-one-out and source-rounding sensitivity are executed and retained. This determines an approximate optical pupil model, not an authenticated mechanical diaphragm. Stop size is f/6.3 calibration, not independently published diameter.

## Glass review

OHARA, HOYA, SUMITA, HIKARI, CDGM and SCHOTT vendor sources were downloaded and hashed. Full available AGF coordinates from the first three vendors were screened; individual HIKARI/CDGM and SCHOTT rows were inspected. Candidate residuals are preserved. No supplier is deduced from Minolta's name; S-/L- OHARA families remain distinct. Because the patent omits spectral-line identification and no melt/supplier identity is given, implementation uses explicit Unmatched class annotations and indexReferenceNote. Manufacturer literature identifies a fluorite second element, supporting correlation, but does not establish the exact patent material or validate APO performance from this monochromatic model.

## Numerical and geometry results

Sequential reduced-angle trace agrees with an independent ABCD multiplication at infinity and the published finite endpoint. The native infinity BFD is 25.8802977; total first-vertex-to-image track is 68.4052977. TL/EFL=0.6844651 supports telephoto classification. Element, cemented and functional-group powers, principal planes, determinant, and per-surface Petzval sums are computed in the verifier.

The published d8/d10/d12 pairs sum to31.558 native at both endpoints. G5 moves9.120mm and G6 moves14.592mm objectward after6× scaling. The final doublet and front group are fixed. Source object-to-image distance2000 becomes12m. Finite conjugate closure differs from the fixed infinity image plane by0.005874mm at production scale, consistent with rounded0.001native spacings. Geometry and exact off-axis sampling are Stage2 tasks.

## Correction and discrepancy register

1. Table6 r2 spherical coefficient is −17.40, confirmed visually at300dpi; low-resolution reading must not lose its minus sign.
2. Body eq.(2) says1.2f>|fM|, whereas abstract and claim3 say|fM|>1.2f. Direct calculation gives fM=209.097569native and1.2f=119.927740native. The raw body comparison remains FAIL. Its opposite claim/abstract statement is supported; the resolution check passes without changing source surfaces or concealing the mismatch.
3. Rounded source f=100 versus computed99.939784: residual−0.060216native is recorded, not claimed as exact agreement. Source telephoto ratio0.684 versus computed0.684465 remains visible.
4. Manufacturer9elements/8groups explicitly includes one filter; patent8powered/7groups has no filter prescription. These are different counting/model extents, not a missing powered lens.
5. Manufacturer16.5ft MFD (pageC7; another catalog summary rounds differently) is not substituted for the patent12m endpoint. No focus extrapolation is authored.
6. Fig9a labels f/7.6 for the close aberration chart. No relation between this chart aperture and a fixed iris is stated. Its curves are not certified by the model's nominal maximum-aperture setting.

## Construction-stage independent-review status (historical)

Not performed in the authoring context. Stage4 must independently re-extract the original source and freeze a baseline before reading these conclusions.

## Gate disposition

Stage1: READY_FOR_DATA. The source model and its transformations are reproducible. Stage2 must validate inferred apertures/stop, literal application data, geometry and representative rays. Integration remains pending.

## Quantitative claim map

- Source/scaled EFL, BFD, track, telephoto ratio → results.facts / sourceModel.infinity
- Per-element and group focal lengths → results.facts.nativeElements / groups
- d8/d10/d12 movement, 12m endpoint, focus residual → focus_conservation / sourceModel.focus
- Condition statements → results.facts.conditions and raw condition2_body FAIL
- Inferred stop → sourceModel.stopInference, all fit/sensitivity residuals
- Vendor coordinate residuals → evidence.glassEvidence; verifier recomputes each difference

Manual extraction/citation review distinguished source facts, product facts, computed results and inferences. Interpretation does not assign an aberration function from power sign alone. No independent Stage4 or integration result is claimed.

## Pending integration

Actual real-project type/schema/render/ray checks will be recorded if executed. Full-corpus policy gates and production build remain NOT_RUN by workflow scope.

## Stage 2 construction and targeted project checks

The final literal-only data imports the real LensDataInput type and passes strict TypeScript5.9.3. The portable parser accepts only its declared literal grammar and rejects duplicate keys, spreads, expressions, unknown tokens and trailing code; semantic fixtures additionally mutate radius, index, axial spacing and a close-focus gap and require rejection. Actual data—not an evidence duplicate—drives the implemented branch.

The initial inferred L2 semi-diameter51mm produced−0.097034mm edge thickness in both custom geometry and validateLensData. It was corrected to50.5mm on both faces; radii, glass thickness and all source values are unchanged. Final actual buildLens passes. The five-state production render diagnostic reports0mm hidden trim; actual engine rays have zero primary/chief failures and zero cemented-interface first clips. Outer-field/pupil vignetting, where present, remains recorded rather than hidden by changing the source.

All surfaces pass spherical-domain, actual rim-slope, edge-thickness and shared-band air-gap checks at focus0,0.25,0.5,0.75,1. The exact sphere/vector-Snell trace aims the stop in two transverse dimensions and tests0,0.6,1 times published half-field, pupil0,0.75,1, and eight azimuths at nonzero pupil. This finite sample is not a continuum clearance proof.

The real engine computes EFL599.638702mm and FOPEN6.3. The latter is calibrated through nominalFno; no independent diameter validation is claimed. Runtime glass resolution intentionally leaves every Unmatched class unresolved; d-line proxy and unknown native spectral line remain disclosed. Full-corpus, full-build and publication checks are not run.

Stage2 gate: READY_FOR_ANALYSIS, bound to the exact data/evidence/verifier/results revision in its manifest.

## Stage 3 analysis reconciliation

The Stage2 manifest and every file hash were checked, and the portable verifier was rerun before analysis authoring. Data bytes remain unchanged at SHA256581807e1f672c5cb5df28c23bb7786991b0b020fc9b1e8f076bc799aa125fd79. The analysis extends no focus range, adds no optical element, and makes no new spectral-performance assertion. Stage3 extends the verifier with rounded quantitative-claim comparisons and an intentionally mutated EFL prose fixture; the full Stage2 checks are rerun.

Production element-shape output was rendered at infinity, the midpoint and the published endpoint, then visually compared with patent Fig.7 and the manufacturer's section. It preserves the four-element front assembly, two moving singlets and fixed rear doublet without hidden trims. The inferred iris is visually identified separately; its location is not asserted as a literal source marker.

Quantitative analysis claim map:

- Identification and Optical Architecture: scaled EFL, BFD, track and TL/EFL → facts.scaledEFL_mm, scaledBFD_mm, scaledTrack_mm, telephotoRatio; current parsed data.
- Group powers: facts.groups FRONT/I/II/III, multiplied by explicit scale6.
- Stop position and ten-surface fit: sourceModel.stopInference, raw Table6 and method reference.
- Element first lines: final data.elements nd/vd/glass/fl; standalone powers rederived by element_focal_lengths.
- Focus table and movements: raw variableSpacings transformed by6, final parsed var, focus_conservation and closeImageResidual_mm.
- Conditional Expressions: facts.conditions with raw body inequality FAIL retained.
- Verification Summary: current CHAT_PREFLIGHT geometry/exact rays and evidence.projectExecution bound to final data hash.

Manual review confirms third-person technical prose, exact labels and source locators, explicit unknown spectral line, inferred stop/SD disclosures, omitted undocumented filter, nominal-versus-computed quantities, and distinction between patent12m endpoint and production~5m MFD. No source aberration plot, APO performance or mechanical cam law is presented as verified.

Stage3 gate: READY_FOR_AUDIT. No data change occurred during analysis. Fresh Stage4 remains unperformed and must occur in a separate review context.

## Stage 4 source-first independent review

### Frozen Pass A and exposure

Pass A independently rendered and re-entered Table 5 from original PDF pages 10 and 12, plus focus prose, conditions, aperture/field facts, and spectral limitations. It used fresh scalar reduced-angle and separately formed true-angle ABCD paths. The baseline was frozen at 2026-10-02T22:39:25Z, before this reviewer opened the candidate or prior author evidence, results, analysis or audit. Its SHA256 fingerprint is `c3fb958507eae7410c0655fe176032b10bb6f16b320ffd4299673f7e434ea1f5`. Original frozen member hashes and the original fingerprint are preserved under evidence.independentPass. Independent code, optical inputs, material research, review, numerical output and original source bytes remain exact. Only reference-identities.json is rendered with project/ and workflow/ relative paths to remove execution-local directory names. Its original byte hash remains in the frozen manifest; evidence.independentPass.portableRendering separately binds the rendered bytes and file-list fingerprint. The verifier checks both commitments and recomputes the unchanged optical inputs; it does not claim to reconstruct the removed directory prefixes. The unchanged standalone baseline remains separately retained by the parent.

The source-only baseline used generic project specifications/catalog rows for method and search leads, not the author’s lens conclusions. Manufacturer glass sources were freshly consulted. The baseline did not infer the Seidel stop. After freeze, Pass B read the exact candidate and author method, re-read Table 6 at 300 dpi, verified the cited Wiley equations, and implemented a new Seidel fit. That stop review is independent reimplementation after method exposure, not a falsely claimed blind invention of the same method.

Original Stage 3 ZIP SHA256: `b8f5b0ddb18079301f8034e3bfb20c6435e278079a190c6832d4220046404765`.
Original candidate data SHA256: `581807e1f672c5cb5df28c23bb7786991b0b020fc9b1e8f076bc799aa125fd79`.
Final candidate data SHA256: `0c237cd370b0fc4b57bff724c397a86698aeb5afbefb97afed37e53d96e74ea0`.

### Reconciliation of raw patent and candidate

Every source R/d/n value agrees with the final data after uniform 6× scaling and recombination of the inserted neutral stop gap. Both published focus endpoints agree. No patent radius, thickness, material coordinate or focus gap was corrected.

Fresh native values: EFL99.939783730954, BFD25.880297728937, vertex span42.525, and first-vertex-to-image track68.405297728937. Scaled values are EFL599.638702386mm, BFD155.281786374mm and track410.431786374mm. TL/EFL0.684465136658 supports telephoto classification. Front, rear, moving-group and cemented-doublet powers and principal planes were recomputed from separately selected spans. Individual G7/G8 powers remain explicitly standalone-in-air, not substituted for the cemented net power.

The exact f=100 comparison remains FAIL, delta−0.060216269046 native. A fresh rounding-cell witness demonstrates that an unprinted n3=1.757085449951, strictly within the printed1.757±0.0005 cell, would yield100. It is not adopted or presented as the actual glass. It supports a rounded-source explanation while preserving every literal source and data value. Telephoto ratio0.684 versus computed0.684465 is separately retained. Per-surface Petzval values are preserved; r11×100=0.925108 versus printed0.92 is not claimed to round exactly.

The body equation(2) and repeated body text give1.2f>|fM|, while abstract, summary and claim3 give|fM|>1.2f. Both raw statements and truth values survive. Computed fM209.097568694 native supports the claim/abstract formulation. The clean analysis distinguishes thresholds calculated using f99.939784 from nominal f100 thresholds15/120/80. Neither formulation changes the source prescription. The general “unity” normalization wording remains recorded against the table’s f100 headers.

Page11 prints d8=27,894. This exact punctuation is retained. Decimal27.894 conserves the three-gap sum31.558 and produces objectward group-I/group-II displacements1.520/2.432 native, with groupIII fixed. Literal27894 is separately rejected numerically. The source only says photographic distance2,000; object-to-image is now explicitly an interpretation supported by the finite conjugate2000.376935610. Treating2,000 as first-vertex distance gives a substantially worse focus residual. The clean files no longer portray the reference-plane inference as explicit source text.

The independently downloaded and visually inspected manufacturer document has SHA256248ab31d5ee90a6075e617b9fcaed9bbb09188150b783eb8b1b956fa0187d029. Printed C7 confirms nine elements/eight groups including one filter, second-element crystalline calcium fluoride,16.5ft minimum focus,4°10′ field and constant-length internal focus. None proves Table5 is the actual production prescription. Patent-scaled12m remains distinct from production approximately5m; no extrapolation to5m or filter prescription is invented.

### Independent Seidel stop audit

The source per-surface SI/SII/SIII values satisfy the necessary SI×SIII=SII² identity within their printed two-decimal rounding bounds. For each spherical surface, the independently computed refraction invariants give SII/SI as chief/marginal invariant ratio. A true-angle basis and matrix zero-crossing fit give stop z34.318485767386 native, agreeing with the author’s value. A separately weighted cross-multiplied fit gives34.312765704756. The leave-one-out range is34.311709816768–34.322319590713;1,000 coefficient-only perturbations give34.306021902714–34.332022135700; joint prescription/coefficient perturbations give34.300491552535–34.336601374245. These are finite sensitivity samples, not confidence intervals or physical manufacturing tolerances. Weighted and unweighted residuals both remain available; the alternate fit has a maximum ratio residual0.002112889, so the author’s0.002 criterion is not misrepresented as an exact universal source-match tolerance.

The optical location near205.9mm lies inside d8 at both source endpoints and is adequately constrained for a disclosed approximate visualization. It is not an explicitly published mechanical iris specification. Table6 is the infinity state only. Holding the iris fixed during focus is now an explicit model assumption. Diameter is calibrated to infinity f/6.3, not independently measured. The current fixed-iris model’s close working f-number is approximately6.472629, while Fig9a says7.6. The source chart aperture is retained separately; no matching aperture or mechanical motion law is inferred from that discrepancy.

### Corrections and scope

1. Source original values are unchanged. The previously justified inferred L2 SD51→50.5mm correction is independently supported:51mm has negative rim thickness, whereas the retained50.5mm model has a positive minimum thickness0.222070mm. It does not alter source curvature/thickness.
2. G6 surfaces11/12 SD13.5→16mm. Fresh strict first-clip tracing of the original candidate found32 full-pupil axial clips at four nonzero focus samples. The original acceptance only checked the75% pupil primary bundle. Increasing this inferred clear aperture removes these axial clips while retaining positive edge thickness, valid rim slope and all gap constraints.
3. Shared cemented surface14 and exit15 SD13→13.2mm; exposed entrance13 remains13mm. Expanded testing after the G6 correction found four first clips at cemented r14. The small downstream-clearance increase removes them without altering glass shapes’ source R/d/n, creating a new surface, or introducing synthetic cement.
4. L5 annotation “medium-dispersion crown class” becomes “medium-dispersion glass class.” A possible HOYA LAFL23 coordinate family is not proof of composition or supplier, so the unnecessary crown claim is removed. All glasses remain Unmatched, native line unspecified; no new spectral properties or APO claims are asserted.
5. Explicitly disclose fixed-iris modeling and the inferred photographic-distance reference plane in the clean header/focusDescription/analysis. Revision history stays here, not in clean prose.
6. Correct coverage claims: the author’s recorded actual engine result has218 rays, not255, because37 unavailable launches were skipped. These original records remain as construction history. The current audit runs every one of9,750 specified launches.

### Independent full-ray and actual-project validation

The fresh tracer solves spherical intersections analytically using the sphere quadratic and applies vector Snell refraction. It strictly propagates transmitted rays forward and terminates on the first physical aperture clip. Aperture-ignoring mathematical continuation may be used only to aim a hypothetical stop coordinate; it is never counted as transmitted light. This resolves the former numerical “unavailable” cases as real exposed-rim rejection rather than silently dropping them.

Sampling comprises5focus states(0/.25/.5/.75/1),6aperture settings(6.3/8/11/16/22/32),5field fractions(0/.3/.6/.8/1),5pupil fractions(0/.5/.75/.9/1), and16azimuths at nonzero pupil, giving9,750 rays. Portable outcomes:9,265 transmitted and485 exposed-surface clips; zero full-axial-pupil, chief, primary, cemented-first-clip or unexplained failures. These finite tests do not claim a continuum proof or unvignetted full field. Independent exact spherical rim/edge/shared-band checks cover101focus states, with positive minimum edge thickness0.222070mm. Linear-gap extrema lie at endpoints. No default rule was relaxed.

All218 recorded generic engine dependencies were rehashed against the pinned reference identity with zero mismatches. Actual TypeScript5.9.3 strict type checking against LensDataInput and real buildLens/validateLensData pass for the final data bytes. Actual production render diagnostics over101focus states give0mm trim. Runtime glass resolution retains all eight intentional Unmatched entries. Production element paths at focus0/.5/1 were rendered and visually compared to the original sections; no overlapping or hidden-trim artifact is concealed by layout.

Actual engine raw ray statuses:9,265 ok,400 clipped,85 failed/noBracket. All85 occur before the first hit. Independent sphere intersections for each lie outside the first52.5mm SD and beyond sequentialSurfaceMaxT’s authored-rim search bound. The engine intentionally rejects them as physical misses; every raw failed status and per-ray bound/radius proof remains in projectExecution. No failed status for a potentially transmitted ray is excused. Actual intersectImagePlane results agree with portable image points to7.5767×10⁻¹⁰mm. No unexpected status, transmitted-ray loss or cemented-first-clip mismatch remains.

The first audit harness initially compared the last-surface terminalPoint to the image plane and treated every raw “failed” string as an optical-model failure. Inspection of the real API corrected these harness assumptions; actual image-plane intersection and independent outside-rim proofs are now used. Raw initial observations remain in evidence. This is not a relaxed geometry/schema validator or a hidden optical correction.

### Quantitative and interpretive claim map

- Source literals, conditions, scale and two focus endpoints → independentPass frozen source inputs plus source-equivalence checks.
- EFL/BFD/track/principal planes/element and group powers/Petzval → independentBaseline recomputation and implementedModel independentStates.
- Nominalf100 mismatch and source-precision resolution → source_EFL rawFAIL plus source_efl_rounding_resolution witness(adopted:false).
- Optical stop, alternate fit and all rounding/leave-one-out ranges → independent_stop_inference and independentBaseline.seidelStopAudit.
- Fixed stop, entrance/exit pupils, infinity calibration and close working f-number → audit_stop_and_movement and independentStates.
- SD corrections and original axial failures → audit_correction_scope, originalCandidateRaySummary and exact source/data hashes.
- Updated9,750-ray and101-state claims → audit_exact_full_rays, audit_geometry and bound projectExecution.
- Source/production12m/5m distinction, filter count and material identity limits → original manufacturer pC7, patent focus text, independent material review and manual narrative check.

The manual review checked every analysis section, metadata string, element shape/power role, glass statement, source citation and inference disclosure. Additional numeric assertions in the new sensitivity/ray prose are executable checks. The final portable verifier includes both retained construction checks and clearly marked fresh independent paths, complete code and inputs; no previous absolute work-directory dependency is required for replay.

### Gate and pending integration

All mandatory chat checks and exact-byte targeted project checks pass after the above corrections. READY_FOR_BATCH is earned for this limited, disclosed patent visualization. The original literal discrepancies and expected physical misses remain visible. IntegrationStatus remains INTEGRATION_PENDING. Full corpus policies, full build/prerender, metadata generation, Git writes, integration, publication and uploads were not performed. Final nine-file archive clean extraction, exact membership/hash checks and portable replay are recorded in the manifest.

### Portable packaging revision

Execution-local locations were removed from reference metadata, probe reports and replay records. All four embedded runtime/typecheck probes now accept projectRoot explicitly, with TypeScript resolved from that project. Original probe hashes remain recorded alongside their portable replacements. Optical source values, final data and analysis bytes, all ray/geometry results and raw discrepancies are unchanged. The final package has a separately documented portable rendering fingerprint; the original standalone Pass A baseline remains unmodified.
