# Continuous-zoom review, 2026-10-23

Status: candidate awaiting independent repository integration and verified cloud delivery. Not deployed or manufacturer-validated.

Source JP2012173420A ¶0084/0092–0093: G1/G5 fixed (native total-track rounding 0.0002 mm), G2 imageward then objectward, G3/G4 objectward. G2 is the one-element focusing group. Keep D14/D18 and combined D6+D8 piecewise linear; solve G2 position for native-residual infinity focus. This recovers the required single reversal. Published near-focus displacements are retained exactly at all three knots, interpolated elsewhere, not certified finite conjugates.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

# Olympus M.ZUIKO DIGITAL ED 12–50mm F3.5–6.3 EZ technical audit

## Job and reference versions
Fixed JP2012173420A, native Example 2. Normal-focus six-state scope only. Original PDF and four-field card remain unchanged. Governing workflow is CHAT-1.0, September 11, 2026; current source subset is pinned to 25bb13b53c23cbae4885a60241f8907fad5e03e6. Reference hashes are in the manifest and evidence. No repository changes or integration are implied.

## Extraction and conventions
Author freshly transcribed all 22 rows, six aspheres, six spacing states, five group definitions, conditions, and original Figures 8–9. Source-first independent extraction is frozen in the unchanged PassA ZIP, SHA256 643ee4011b459493435b0b84357c6b1faef5b04c3f22b94b36ea86b0b54ab710. The author had read prior intake scope and review; the independent source auditor had not. At auditor assignment no candidate existed; the author subsequently created an unexposed prototype during the audit. A separate clarification preserves that chronology without rewriting the baseline's assignment-time statement.

Sign convention is object left, image right, conventional K in 1+K, native millimetres, d-line 587.6 nm. Air blanks are not glass and variable gaps are not zero. The printed BF and total length are air-equivalent through the 4.080 mm camera plate. The native final .745 mm image gap is retained.

## Model transformations
No optical source correction, scaling, image-plane refocus, or substitute example is proposed. The camera plate becomes a physical, non-clipping rearPlates entry; it is not counted among the ten lens elements. G2/L4 alone follows the published near-focus gaps. No commercial macro reconstruction or finiteConjugates certification is made. Intermediate linear gap interpolation is display-only, not a factory cam law.

## Glass review
All ten distinct native coordinates were freshly scanned against 3,179 overlapping records from six manufacturers. Exact coordinate aliases and prefix distinctions remain in evidence. Catalog coefficients are class-level spectral proxies, not proof of supplier, production melt, or molding grade. The original explicitly identifies L8 as plastic. Its polymer and dispersion remain unknown and are not replaced with a mineral-glass identity or guessed polymer spectrum.

## Numerical and geometry results
Portable computation replays independent source calculations and separately recomputes author matrices and sequential slopes. The native infinity EFLs are 12.243219510, 24.462599012, and 48.954985126 mm. Fixed-image residuals are −0.002661037, −0.004264314, and −0.010264501 mm. Native solved near object-to-physical-image distances are 348.713841, 349.481249, and 349.698476 mm. The printed 0.35 m reference plane is not explicit; the printed near gaps remain authoritative.

Conditions are computed in both a fixed-image/computed-fw convention and a first-vertex/printed-fw convention. Native total-track rounding varies by 0.0002 mm; the resulting tiny G5 movement in the first-vertex frame is retained. It is not hidden by changing gaps. All 15 condition inequalities pass under either disclosed convention.

Semi-diameters and stop diameter are not source-published. Stage 2 subsequently bound inferred radii, geometry, exact ray coverage, stop calibration and render diagnostics to the actual data file. An author-only exploratory runtime has already identified approximately 7.602 mm of intermediate defocus under simple zoom interpolation. It is not evidence that a factory cam has been recovered. Prefer the six published states for optical assessment.

## Correction and discrepancy register
Nine strict raw source comparisons fail in the independently replayed baseline and remain visible. Input precision sensitivity and explicit rounding-box witnesses explain why literal rounded rows need not match every rounded system value; they neither prove the original unrounded design nor establish rigorous nonlinear global bounds. No tolerance is broadened to manufacture agreement. Figure 9 near f-numbers 3.598/5.117/6.246 and plotted FIY10.82 are retained separately from the infinity calibration and numerical-table Y10.815. Geometric f-number is not finite working f-number, and agreement after calibrating an inferred iris is not independent diaphragm evidence.

## Independent review
Pass A is complete and frozen. Every portable replay checks explicit flat independent input hashes, the unchanged independent code, root source bytes and documentary JSON texts, then executes the independent verifier and compares its entire original results JSON. The immutable historical PassA ZIP is retained separately in SupportingEvidence, not nested in the production package. Pass B against the completed candidate is complete. Its accepted findings and exact final-byte closeout are recorded below.

## Quantitative claim map
- Source coordinates, EFL, BF, track, principal planes, Petzval, pupils and conjugates: F-SOURCE-STATES, sourceModel and immutable independentBaseline.sourceModel.
- Element and group powers: F-ELEMENTS and F-GROUPS.
- Native movement and condition values: F-FOCUS and F-CONDITIONS, including explicit reference conventions.
- Geometry, actual runtime, glass resolution and interpolation limitation: Stage 2 F-GEOMETRY and F-RUNTIME when present.
- Product identity and qualification: F-CORRELATION, original manufacturer brochure PDF13 and preserved official launch-page capture.
- Known limits and integration scope: F-LIMITS.
Manual interpretive-prose and citation review is supplied in the Stage 4 acceptance below; string tests alone cannot validate optical explanations.

## Historical Stage 1/2 gate disposition
Stage 1 passed 88 portable checks and complete clean replay. Its archive SHA256 is 1bdb49e40ccaa239e22023ab0535ffdfd7945325fedaaafa6ab459b38e18d038. Stage 2 now binds the actual application file, unchanged source evidence, complete portable verifier and actual runtime record. At this historical Stage 2 checkpoint no analysis had yet been drafted. Its readiness was subsequently verified by archive checks and clean replay before Stage 3 authoring. The current Stage 4 acceptance is recorded below.

## Pending integration
INTEGRATION_PENDING. Full compiler, Prettier, full corpus, production build, UI and integration checks are NOT_RUN. The optional pinned Node runtime uses actual project functions but is not a substitute for these integration gates.

## Stage 2 construction addendum
All six native states have positive material thickness; sampled minimum is 0.509990979 mm, maximum shared-band intrusion fraction 0.897415034 under the default 0.90 allowance, and maximum slope angle 59.034871 degrees with no sampled turnover. These are inferred rims, not physical manufacturing diameters. The first meniscus uses distinct front18/rear14 mm clear radii supported qualitatively by Figure 2 and quantitatively by rays. L2 at13.8 mm was rejected for gap crossing;13.0 mm preserves the default guard without changing native optical rows. All native infinity axial rays and full-field chiefs clear; off-axis sampled vignetting is retained. Actual Node build/validator/render checks and 165 display states are separately recorded. The exact near-ray test uses a disclosed350mm physical-image reference hypothesis and cannot certify that source convention.

## Flat packaging correction
The first exploratory checkpoints nested the frozen baseline ZIP, contrary to the final archive convention. Their readiness does not transfer to this revision. The flat replacement retains independent.py, explicit baseline.json records, the ordinary source brochure and normal dossier files, with no nested archives. Display-name punctuation changes to ASCII hyphens only. Source optical rows, states, aspheres, inferred geometry and numerical model remain unchanged. All dependent fingerprints and replays are refreshed.

## Source wording and prose-verifier correction
The product-correlation summary removes an unneeded43mm macro-setting claim because the archived brochure and launch capture do not give that exact setting. Only the source-supported0.20m macro distance and fixed telephoto-region description are retained. Macro remains excluded. Printed A12 zeros are distinguished from absent A14; Figure9 FNO labels have an unstated near convention, and only the explicit comparison is geometric/paraxial. These are evidence/prose corrections, not optical-data changes. The Stage2 verifier now includes all future analysis numerical and metadata checks, conditional on an analysis file being present.

## Independent candidate review and claim coverage
The independent candidate implementation reproduces all native rows, matrices, all22 physical surfaces, catalog qualifications and the six exact-ray states. Its323 checks pass. Its separate3-D vector Snell tracer,2001-point surface profiles and4001-point shared-band profiles reproduce the documented ray losses and geometry extrema. This is separate from the author's optics and from actual project execution. The reviewed data SHA256 is331b7ced9ade5fa5258c780238ff9723e6e19b7f4ab29ae1103e9d6310003593. First-meniscus unequal optical faces are supported by a fresh original Figure2 crop. Native rounding conventions agree independently.
The final portable verifier's explicit claim checks bind each element first line, all group powers, all15 conditions, all6 coefficient rows and all6 inferred-rim departures, native focal/conjugate/movement rows, metadata, chief heights, pupil sizes, ray counts and limitations to freshly computed results. The detailed expected rows and stable fact pointers are in analysis-* check records. Manual independent review supplies the interpretive-prose and citation check that these text/number controls cannot establish.
Thirty-six full-CLI negative controls pass:31 named semantic/geometry/missing-analysis failures plus5 explicitly reported parser/missing-dependency exceptions. Cases include native radius/thickness/state preservation, rear plate and image plane, asphere coefficient, plastic and glass prefixes, element power/type/cemented ownership, f-number, aperture narrowing and excessive rim, metadata and unsupported conjugate/override fields, runtime record corruption, final prose claims and missing inputs. The actual program never treats an incidental stale runtime fingerprint alone as the required semantic rejection.
The first flat checkpoint corrected naming and packaging. Later changes correct only source-attribution wording and extend verifier coverage; actual optical data SHA remains unchanged. Source rows, physical camera plate, image plane and inferred geometry are unchanged. Final independent byte acceptance is retained as a separate receipt in SupportingEvidence to avoid a circular archive fingerprint.

## Stage 4 independent acceptance
The independent auditor accepted the corrected Stage3 content for the stated native-state normal-focus scope. Full manual prose/citation review, independent323-check candidate calculation,473-check clean portable replay and all36 full-CLI adversarial controls passed. No numerical optical correction was requested. Corrections were limited to ASCII display-name punctuation, flat dossier packaging, source-supported macro wording, explicit printed A12 zero wording, and the unstated near FNO convention. Full source-first and candidate-exposed phases remain distinct, with frozen source inputs untouched.

The independent exact ray implementation reproduced every native field transmission count, including documented losses. A fresh Figure2 crop independently supports the first element's unequal18/14mm active faces and mechanical rear step. The full wide chief requires16.452983109mm on the first face. The13.8mm L2 trial intruded5.579900613mm across a5.12mm gap and was rejected;13.0mm passes without an override. These are independent source/ray/geometry findings, not factory diameter claims.

The historical Stage3 manifest mislabeled its current results hash as the earlier Stage2 results hash. Final stage2Checkpoint is copied from the actual Stage2r4 manifest: results SHA25625b800e5c918fe294c727ba7c0f4ebed6b0768811db392a6c6785e4252fdf456. The old checkpoint archive remains immutable historical evidence with this correction disclosed. The final data, evidence, analysis, verifier and runtime records remain exactly those of the accepted corrected content; only this consolidated audit and final manifest change.

Final archive acceptance binds the actual final archive/member hashes in a separate independent receipt. Private Drive delivery is reported only after complete remote byte readback, every member/hash/CRC check and clean portable/runtime/independent replay. This is READY_FOR_BATCH for a qualified source transcription with the documented interpolation/source/spectral limitations, while INTEGRATION_PENDING remains unchanged.

### Independent review artifacts
- SupportingEvidence independent_candidate_review/passB_findings.md: SHA256 ba73a9e17eb858994bd15b1bede1b62dbf129a32c405c22cb4d6168c131ae617.
- SupportingEvidence independent_candidate_review/stage3_content_review.md: SHA256 9830d9f2905ec1a7526638e43ceb22db3d8a3f2447073b00b633753b9ee5ace7.
- SupportingEvidence independent_candidate_review/independent_candidate_audit.py: SHA256 86869259ca47206b36c9e68524446d8031681b15f977cde98a5d34eebe2545e4.
- SupportingEvidence independent_candidate_review/independent_candidate_r2_results.json: SHA256 70957f9ab41c73fff8658e28bc3d365b12c268e090ec76469677dfed2f37a9b7.
- SupportingEvidence independent_candidate_review/chronology_clarification.md: SHA256 f54251b8c6597f804513da1bf659cb394bd84604efb7ee4c10f07d772c93ea22.
- SupportingEvidence independent_candidate_review/reconciliation_summary.json: SHA256 fbb4e40feb362dc47703136077411da170dc3d4fba8a7eab6822f7d9eb589080.

### Detailed quantitative claim map
- analysis-required-limitations: verified actual model, source or runtime record; PASS.
- analysis-section-order: verified actual model, source or runtime record; PASS.
- analysis-display-name: verified actual model, source or runtime record; PASS.
- analysis-patent-metadata: verified actual model, source or runtime record; PASS.
- analysis-no-chat-citations: verified actual model, source or runtime record; PASS.
- analysis-usable-sources: verified actual model, source or runtime record; PASS.
- analysis-element-L1: F-ELEMENTS[0]; PASS.
- analysis-element-L2: F-ELEMENTS[1]; PASS.
- analysis-element-L3: F-ELEMENTS[2]; PASS.
- analysis-element-L4: F-ELEMENTS[3]; PASS.
- analysis-element-L5: F-ELEMENTS[4]; PASS.
- analysis-element-L6a: F-ELEMENTS[5]; PASS.
- analysis-element-L6b: F-ELEMENTS[6]; PASS.
- analysis-element-L7: F-ELEMENTS[7]; PASS.
- analysis-element-L8: F-ELEMENTS[8]; PASS.
- analysis-element-L9: F-ELEMENTS[9]; PASS.
- analysis-group-G1: F-GROUPS.G1; PASS.
- analysis-group-G2: F-GROUPS.G2; PASS.
- analysis-group-G3: F-GROUPS.G3; PASS.
- analysis-group-G4: F-GROUPS.G4; PASS.
- analysis-group-G5: F-GROUPS.G5; PASS.
- analysis-cemented-net-power: verified actual model, source or runtime record; PASS.
- analysis-infinity-0: F-SOURCE-STATES.states[0]; PASS.
- analysis-infinity-1: F-SOURCE-STATES.states[1]; PASS.
- analysis-infinity-2: F-SOURCE-STATES.states[2]; PASS.
- analysis-near-conjugate-0: F-SOURCE-STATES.states[3]; PASS.
- analysis-near-conjugate-1: F-SOURCE-STATES.states[4]; PASS.
- analysis-near-conjugate-2: F-SOURCE-STATES.states[5]; PASS.
- analysis-focus-travel-0: F-FOCUS; PASS.
- analysis-focus-travel-1: F-FOCUS; PASS.
- analysis-focus-travel-2: F-FOCUS; PASS.
- analysis-condition-1: F-CONDITIONS.firstVertexPrintedFw.1; PASS.
- analysis-condition-2: F-CONDITIONS.firstVertexPrintedFw.2; PASS.
- analysis-condition-3: F-CONDITIONS.firstVertexPrintedFw.3; PASS.
- analysis-condition-4: F-CONDITIONS.firstVertexPrintedFw.4; PASS.
- analysis-condition-5: F-CONDITIONS.firstVertexPrintedFw.5; PASS.
- analysis-condition-6: F-CONDITIONS.firstVertexPrintedFw.6; PASS.
- analysis-condition-7: F-CONDITIONS.firstVertexPrintedFw.7; PASS.
- analysis-condition-8: F-CONDITIONS.firstVertexPrintedFw.8; PASS.
- analysis-condition-9: F-CONDITIONS.firstVertexPrintedFw.9; PASS.
- analysis-condition-10: F-CONDITIONS.firstVertexPrintedFw.10; PASS.
- analysis-condition-11: F-CONDITIONS.firstVertexPrintedFw.11; PASS.
- analysis-condition-12: F-CONDITIONS.firstVertexPrintedFw.12; PASS.
- analysis-condition-13: F-CONDITIONS.firstVertexPrintedFw.13; PASS.
- analysis-condition-14: F-CONDITIONS.firstVertexPrintedFw.14; PASS.
- analysis-condition-15: F-CONDITIONS.firstVertexPrintedFw.15; PASS.
- analysis-asphere-3: rawPrescription.aspheres.3; PASS.
- analysis-asphere-4: rawPrescription.aspheres.4; PASS.
- analysis-asphere-9: rawPrescription.aspheres.9; PASS.
- analysis-asphere-10: rawPrescription.aspheres.10; PASS.
- analysis-asphere-17: rawPrescription.aspheres.17; PASS.
- analysis-asphere-18: rawPrescription.aspheres.18; PASS.
- analysis-departure-3A: F-GEOMETRY.states[0].rims; PASS.
- analysis-departure-4A: F-GEOMETRY.states[0].rims; PASS.
- analysis-departure-9A: F-GEOMETRY.states[0].rims; PASS.
- analysis-departure-10A: F-GEOMETRY.states[0].rims; PASS.
- analysis-departure-17A: F-GEOMETRY.states[0].rims; PASS.
- analysis-departure-18A: F-GEOMETRY.states[0].rims; PASS.
- analysis-native-transmission-0: F-RUNTIME.sourceTransmission; PASS.
- analysis-native-transmission-1: F-RUNTIME.sourceTransmission; PASS.
- analysis-native-transmission-2: F-RUNTIME.sourceTransmission; PASS.
- analysis-petzval: verified actual model, source or runtime record; PASS.
- analysis-stop-radii: verified actual model, source or runtime record; PASS.
- analysis-near-fno: verified actual model, source or runtime record; PASS.
- analysis-track-bf: verified actual model, source or runtime record; PASS.
- analysis-geometry-summary: verified actual model, source or runtime record; PASS.
- analysis-source-chief-heights: verified actual model, source or runtime record; PASS.
- analysis-interpolation-magnitude: verified actual model, source or runtime record; PASS.
- analysis-finite-field-counts: verified actual model, source or runtime record; PASS.
- analysis-spectral-limits: verified actual model, source or runtime record; PASS.
- analysis-state-certification-limits: verified actual model, source or runtime record; PASS.


## V2 conversion — 2026-10-17

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main a85b198951829c52c07bfd83840331363a040449. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog testing was resource-killed and is not a pass. This format conversion is not deployment or complete optical acceptance.

Retained package status: QUALIFIED_SOURCE_STATIONS: JP2012173420A Example 2; six normal-focus states, macro absent; intermediate zoom focus drift -7.602mm.

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 0 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.01084634156771358mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.

## Zoom path regeneration — 2026-10-25

Deployment validation found that the 2026-10-23 continuous path did not deliver the single G2 reversal its
review section claims. With D14, D18 and D6+D8 piecewise linear and G2 solved for focus, D6 ran 6.6446 → 10.946
(node 55) → 9.3245 (middle) → 10.298 (node 126) → 5.9114 mm: three reversals, against claim 2 (G2 first imageward,
then objectward) and the three printed stations, which need one.

The 198 intermediate nodes were regenerated; the three printed stations (gaps, focal-length labels, f-numbers,
flags) are byte-identical, and no radius, thickness, glass, asphere, rim, plate or per-station f-number changed.
Method, following ¶0016–0018 (G3 the main variator; G2 and G4 the compensators; G3–G4 and G4–G5 spacings widen):

- Zoom coordinate: G3 position (D6+D8). Total track interpolated between stations (0.0002 mm printed rounding).
- G2: Fritsch–Carlson monotone cubic through the three printed D6 values plus one inferred peak at D6+D8 = 17.0 mm,
  D6 = 9.4745 mm (0.15 mm beyond the middle-station 9.3245). A peak at the middle station itself forces G4 to
  overshoot the printed tele D18 by 0.51 mm and reverse. Of 30 peaks scanned on a grid (D6+D8 16.5–18.5 mm in
  0.5 mm steps, D6 0.10–0.40 mm beyond the middle station), this one has near-minimal overshoot and the largest G4
  monotonicity margin (smallest per-node G4 step 0.0134 mm); an independent check found (17.1, 9.50) only 1.5e-5 mm
  better.
- G4: solved paraxially per node for infinity focus on the fixed image plane at the printed-station residual
  interpolated in the zoom coordinate (0.0027–0.0103 mm; solver error below 1e-13 mm).
- Nodes: focal length geometric within each printed segment, 100 steps each; labels are the computed EFL.
- Near column: G2 objectward shift solved per node to refocus the stored image plane at the object-to-image distance
  interpolated between the printed near states (348.714 / 349.481 / 349.698 mm).

Results: D6 has one reversal (node 134); D8 narrows and D14, D18 widen monotonically; G3 and G4 move objectward
throughout; computed EFL increases monotonically. The iris radius needed for the unchanged per-station f-number law dips
by 0.002 mm over the first eight stations (5.1756 → 5.1735 mm) and then rises. Repository
surface, image-circle and field-coverage audits pass at all 201 stations; real-ray clearance at Y = 10.815 mm flags no
axial clip or blocked chief, though its chief and lower-rim searches do not converge at a few wide-end stations
(as on the 2026-10-23 path), where the field-coverage audit's converged chiefs stand in; maximum full-pupil longitudinal spherical aberration over all stations is 0.158 mm
(0.125 mm on the 2026-10-23 path; the printed stations are unchanged). The UI-ray, MTF and dense-geometry counts quoted
in the sections above were measured on the 2026-10-23 path and were not re-run.
