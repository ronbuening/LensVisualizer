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

## 2026-10-25 — Semi-diameter pass against the patent figure

Source: `patents/JP2012173420A.pdf`, PDF page 31, 【図2】 実施例2 panel (a) WE. This is the modelled Numerical
Example 2 at the wide end, infinity focus. The sheet is a 300-ppi CCITT raster, measured at its native 300 dpi with the
optical axis horizontal (dash-dot axis at page row 554.5). Semi-diameters remain inferred, not source-published; after
this pass they rest on FIG. 2(a) and are floor-checked by real-ray trace at all 201 zoom stations, infinity and near.

Scale: the vertex crossings beside the axis were S1 at page column 1391, S20 at 2049.5, the plate front at 2136 and the
image plane at 2173. Against the wide-infinity prescription (S1 to S20 85.512 mm, S1 to plate 96.676 mm, S1 to image
101.501 mm) they give 0.12986, 0.12977 and 0.12980 mm/px, so 0.1298 mm/px was used. S9A, S12, S14 and S19 fall within
1.5 px of their predicted columns. The automatic figure screen independently derived 0.12996 mm/px. Its ENV/RIM
rows are contaminated by the G2–G4 brackets and the r-label leaders, so they were not used.

Method: each rim is half the distance between the upper and lower outline line centres in a pixel dump, so the
axis row does not enter. One pixel is ±0.13 mm. The figure draws flat mounting steps on two faces. On L1's rear (r2)
and L2's rear (r4) the optical extent is where the curve meets the step. Below that point the outline is mechanical.
A sag check agrees. 4A's drawn rim lies 35.75 px (4.64 mm) behind its vertex, which the asphere reaches at h ≈ 12.3 mm.
r1's rim lies 29 px (3.76 mm) behind S1, which R 45.22 reaches at h ≈ 17.9 mm.

| Surface | Stored sd (mm) | FIG. 2(a) (mm) | Figure/stored | Decision |
|---|---:|---:|---:|---|
| 1 | 18.0 | 17.85 | 0.99 | kept |
| 2 | 14.0 | 13.8 (curve end at L1's rear flange step) | 0.99 | kept |
| 3A | 13.0 | 13.9 (meets r2 at the drawn rim corner) | 1.07 | kept; gap guard (below) |
| 4A | 13.0 | 12.3 optical; flange drawn to 13.9 | 0.95 | kept; noise band, see below |
| 5 / 6 | 12.3 | 12.15 | 0.99 | kept |
| 7 / 8 | 9.6 | 9.57 | 1.00 | kept |
| 9A / 10A | 7.3 | 7.37 | 1.01 | kept |
| 12 | 6.6 | 6.62 | 1.00 | kept |
| 13 | 6.6 → 6.4 | 6.33 (cemented curve ends at L6b's rim) | 0.96 | changed |
| 14 | 6.6 → 6.4 | 6.33 | 0.96 | changed |
| 15 / 16 | 6.3 | 6.26 | 0.99 | kept |
| 17A / 18A | 7.0 | 7.07 | 1.01 | kept |
| 19 / 20 | 11.2 | 11.3 (drawn knife-edge rim; modelled edge 0.51 mm) | 1.01 | kept |

Every stored value was already within 7 % of the drawing. Surfaces 13 and 14 changed under the step-order rule even
though they sit inside the noise band. On both sides the figure draws L6b's rim 2–2.5 px (about 0.3 mm) below L6a's,
with the cemented curve r13 ending at L6b's rim. The manufacturer's construction diagram shows the same order, with the
ED element visibly smaller than the HR element ahead of it. The stored values drew the pair flush. The new value is
6.4 mm rather than the figure's 6.33 mm because the unvignetted full-field bundle at surface 14 reaches 6.34 mm (the
maximum over all stations). 6.4 mm keeps that bundle unvignetted. With surface 12 at 6.6 mm and surfaces 13–14 at
6.4 mm, L6a steps down at its cemented face as drawn.

Values kept and why:

- 3A: the prescription's surfaces 2 and 3A cross at h ≈ 13.45 mm (at 13.5 mm, z = 9.28 against 9.22 mm). The figure's
  meeting point near 13.8 mm is therefore a drawing idealisation. At 13.0 mm the 2→3A shared-band intrusion is 0.897
  under the default 0.90 guard. The rays do not need a larger rim (full bundle 12.49 mm) and the deviation is 7 %, so no
  `gapSagFrac` change is proposed.
- 4A: the drawn L2 outline is square-cut at 13.9 mm by its flange. The stored square 13.0 mm sits between the two
  optical extents (front 13.9 mm, rear 12.3 mm), and neither deviation exceeds the noise band.
- L1's rear (14.0 mm) and L2's front (13.0 mm) do not meet at one height as the figure draws them. This is the same
  gap-guard limit.

Clearance after the edit: the real-ray trace at Y = 10.815 mm flags no axial clip and no blocked chief at any of the
201 stations, at infinity or at the near state. Surface 13 carries the axial marginal ray at 5.79 mm and the
full-field bundle at 6.15 mm (6.12 mm near). Surface 14 carries them at 5.81 mm and 6.34 mm (6.30 mm near). The surface
validator reports no errors and the image-circle floor reports 0 undersized. Field coverage is at least 99 % at all 201
stations, with the wide corner at 44.9° against the patent's 2ω = 89.71°. Engine values are unchanged: half-field
38.22° (its estimate is limited by surface 2; real-ray coverage reaches the corner), f/3.64 and stop radius 5.1756 mm.
The engine vignetting curves at wide, middle and tele are identical before and after; at wide, transmission is 100 %
to 41.9° and 68.8 % at 44.9°. No aspheric `sd` changed, so the analysis departure table stands.

Manufacturer diagram (OM Digital Solutions lens advisor) as a proportion check: it shows 10 elements in 9 groups. The
DSA element is element 2 (the model's double-aspheric L2), the aspherical elements are 5 (L5) and 9 (L8, plastic),
and HR element 6 (L6a, nd 1.834) is cemented to ED element 7 (L6b, νd 81.54), all agreeing with the model. G1–G2
proportions match the patent. The maker draws G3–G5 about 10–15 % larger relative to L1 (L5 ≈ 0.47 of L1 against 0.41
in the patent and model), and the patent figure governs. The live render at 12.243, 24.463 and 48.956 mm, at infinity
and at 0.35 m, matches the FIG. 2 silhouette with no overlaps, and the L6a/L6b step now shows.

Open limitations: the drawing resolves ±0.13 mm. The figure's flanges on L1's rear and L2's rear are mechanical and
not modelled. The engine half-field estimate stays below the patent field, as it did before this pass.

### Coordinator glass and metadata changes

The coordinator made these changes to the data file during the same integration pass. No radius, thickness, index,
asphere, gap, zoom or focus value changed.

- The key was renamed to the corpus form `olympus-mzuiko-digital-ed-12-50mm-f35-63-ez`, and metadata was regenerated.
- Glass labels were reworded to the corpus form "<glass> (<VENDOR> catalog equivalent; production supplier
  unspecified)". The same catalog rows resolve as before: OHARA S-LAH66, S-BAL42 (L2 and L5), S-NPH1, S-LAL61,
  S-LAH60, S-FPL51 and S-LAH55, and HOYA FF8. Element 9 (L8) reads "Unmatched (optical plastic per the patent;
  polymer unpublished)".
- Element 7 (L6b, S-FPL51) now carries `apd: "inferred"`. Its note records that OM Digital Solutions' construction
  diagram shades it as the lens's one ED element, cemented to the HR element ahead of it.
- The specs now read "10 ELEMENTS / 9 GROUPS", "DESIGN f = 12.24-48.96 mm", "DESIGN F/3.64-6.48", "6 ASPHERICAL
  SURFACES / 3 ELEMENTS", "1 ED / 1 HR ELEMENT" and "MACRO MODE NOT MODELED".

The analysis now matches these labels. Its glass lines and glass table use the catalog-equivalent wording and vendor
attributions, and they name L2 as the maker's DSA element, L5 and L8 as its aspherical elements, L6a as the HR element
and L6b as the ED element. The ED element's anomalous partial dispersion is described as inferred. Package-process
wording was removed from the public prose: "native", "spectral proxy", runtime and evidence-archive references, and
file hashes. Source facts, numbers and qualifications are unchanged, and the Zoom Path section is untouched. The camera
plate's `rearPlates` glass label still uses the older "class (coordinate-compatible spectral proxy; supplier
unproven)" form. The analysis table lists it as S-BSL7 (OHARA).

## 2026-10-25 — Second review: diagram, labels and movement

Compared: the local site (`/lens/olympus-mzuiko-digital-ed-12-50mm-f35-63-ez`) at 12.243, 24.463 and 48.956 mm, at
infinity and 0.35 m, the zoom and focus movement overlays, and the element inspector, against `patents/JP2012173420A.pdf`
PDF p.31, 【図2】 panels (a)–(c), and the Example 2 text and tables (¶0090–0093, PDF p.15–16; Numerical Example 2,
PDF p.20–22; claim 2, PDF p.2). The render was overlaid on FIG. 2(a) scaled to it (S1 vertex, axis and image plane
aligned). OM Digital Solutions' construction diagram was used for element numbering and markings.

Silhouette: re-measured independently at the native 300 dpi, with upper and lower outline centres about the
dash-dot axis (page row 554.5) and 0.1298 mm/px. L1 measured 17.9 mm at its front rim, and its r2 curve ends at
13.85 mm at the flat rear step. L2's front rim is 13.9 mm, and its r4 curve ends at 12.3 mm at its rear step. L3 is
12.2 mm, L4 9.6, L5 7.37, L6a 6.62, L6b 6.33, L7 6.24, L8 7.07 and L9 11.3 mm (knife edge). Every stored rim is
within 1–5 % of these except 3A (13.0 against 13.9). The first pass already has the rims right, and no `sd` changed.
Neighbour height order is preserved: L1 > L2 > L3 > L4, L5 > L6a > L6b, and L7 < L8.

Visible differences that remain, and why:

- L1: the figure draws a square block. A flat top runs at 17.9 mm to a vertical rear step at about z = 9.9 mm, where
  r2 begins at 13.85 mm. The renderer joins the front rim (18.0) to the rear rim (14.0) with one straight edge, so the
  site shows a long slanted bevel. Squaring is impossible: r2's radius is 16.33 mm, and any r2 rim above about
  14 mm moves its rim point behind L2's front corner and wraps L1 over L2. The flat land is mechanical and cannot be
  drawn.
- L2: drawn square at 13.0 mm, against the figure's 13.9 mm front and 12.3 mm rear curve end with a flat step. The
  prescription surfaces 2 and 3A cross at h ≈ 13.45 mm. The validator refuses 3A = 13.1 mm: shared-band sag
  4.71 mm against the allowed 4.608 of the 5.12 mm gap, which needs `gapSagFrac` 0.92. 13.2 mm needs 0.95. Neither
  is proposed, because the gain is small and the faces would nearly touch.
- L6a: a 0.2 mm slant from 6.6 mm at S12 to 6.4 mm at the cemented face, where the figure has a flat land and a
  small step down to L6b. This is the closest the renderer can draw.

Labels and tags checked against the patent: the groups G1 (1–6), G2 (7–8), G3 (9A–14), G4 (15–18A) and G5 (19–20)
match ¶0091 and the figure brackets. The stop is drawn between L5 and the cemented pair (surface 11, 絞り). Element
names L1–L9 follow ¶0091 and the FIG. 2(b) labels. The patent names the cemented block only "L6" (負レンズと正レンズの
２枚接合Ｌ６), so L6a/L6b remain the model's split. All ten `type` strings agree with the signs of R. A markers sit on
3A, 4A, 9A, 10A, 17A and 18A, the three double-aspheric elements of ¶0091, and nowhere else. The only `apd` tag is
"inferred" on L6b. The patent text designates no anomalous-dispersion glass: condition (9) sets only νd 65–96, and
¶0050 and ¶0061 mention anomalous dispersion only as something to limit. The maker diagram shades element 7 as ED.
The inspector shows, for L2, L5, L6b and L8, the expected type, nd/νd, focal length (−38.69, +17.31, +14.73,
+192.15 mm), glass label and asphere coefficients. All glass labels resolve to their catalog rows except L8, which
is unmatched by design. The patent gives L8 only as plastic (プラスチック, ¶0091), nd 1.53071 and νd 55.69, with no
further identification.

| Field | Before | After | Evidence |
|---|---|---|---|
| element `label` (ids 1–10) | "Source L1" … "Source L9" | "Element 1" … "Element 10" | The inspector read "Source L6b L6b". Corpus form; the numbers match the maker's front-to-rear count (HR 6, ED 7, aspherical 5 and 9) |
| `cemented` (L6a, L6b) | "G3 L6 cemented pair" | "L6" | Patent ¶0091 designates the block L6. The badge now reads "DOUBLET L6" |
| `doublets[0].text` | "L6a + L6b" | "L6" | Same designation, consistent with `cemented` |

Movement, from the patent table and figure arrows: `zoom.stations` ascend 12.243 → 48.956 mm, and every gap row
follows that order. In the fixed-image frame, G1 holds −101.5009/−101.5007 mm (printed 0.0002 mm track rounding) and
G5 holds −18.468 mm. G3 moves objectward monotonically by 29.24 mm, and G4 by 13.31 mm. G2 moves imageward by 2.83 mm
to its peak at node 135 and then objectward, ending 0.73 mm objectward of wide: one reversal, as claim 2 and ¶0093
require (D6 6.6446 → 9.3245 → 5.9114 mm). D8 narrows, and D14 and D18 widen. Focus index 0 is infinity and index 1 is
0.35 m. Only G2 moves, objectward by 1.310, 1.231 and 1.333 mm at the printed stations (1.227–1.333 mm over all
nodes). D6 + D8 is conserved, and D14 and D18 are unchanged. The overlays show the same directions. The focus slider's
far end reads 35 cm. The gap labels D6/D8/D14/D18 match the patent's d6/d8/d14/d18.

Results after the edits: the surface validator reports no errors, and the image-circle floor reports 0 undersized.
Field coverage is at least 99 % at all 201 stations. The real-ray clearance table at Y = 10.815 mm is identical to
the one before the edits, with no axial clip or blocked chief. Engine half-field stays 38.22°, f/3.64 and stop radius
5.1756 mm. The vignetting curve is unchanged: 100 % to 41.9° and 68.8 % at 44.9°. The live page at all six printed
states shows no overlaps, the "L6" bracket and the new inspector header.

Open limitations: L1's and L2's flat mounting lands are not drawable, so L1 shows a bevel the figure does not have.
The coordinator section above says the `rearPlates` glass label uses the older proxy wording. The file now reads
"S-BSL7 (OHARA catalog equivalent; production supplier unspecified)", so that sentence is stale.
