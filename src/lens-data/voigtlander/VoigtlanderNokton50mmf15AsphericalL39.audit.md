# Voigtländer NOKTON 50mm F1.5 Aspherical L(L39) — consolidated technical record

## Scope and identity
JP2000330014A, Example 2. Original card and recovered patent retained unchanged. Stage 3 author work only. No final Stage 4 review or approval has occurred. A focused independent edge/rule assessment is disclosed separately; it does not award the final audit gate. Integration remains pending.

Patent SHA-256: `71c7609f53c1a75f87c5fa93ddc697cca56610f5e6f04b302383bf8387016481`. Recovery changed the bytes from the prior archived hash `6f501ab866bacff391e5f90290c5c34bfa4d7bc1d162e37625163d02539a0b1c`; this author re-extracted the actual recovered pages rather than trusting prior optical conclusions.

## Primary extraction
Inspected actual rendered PDF pages [1, 3, 4, 5, 6, 8]; PDF p5 / printed p4 Table 3, Example 2 rows1–12 and image plane; PDF p6 / printed p5, Table 4 continued from preceding page; columns11,12; PDF p4 ¶0018: common asphere convention. Literal rows, signs, zeros and exponents are preserved in evidence. Source blank index cells at exits mean air; cemented junctions are explicitly indexed. All glass and stop planes are retained. The image plane is after the final tabulated spacing. No plate is listed, and none is invented.

The patent uses the standard 1+K conic form, so K is copied unchanged. Indices use the d-line convention supported by the source reference plots, without a spectral conversion. A fourth-order or higher asphere has no first-order paraxial power beyond its vertex radius.

## Executed first-order verification
The portable verifier independently implements sequential height/reduced-angle propagation and 2×2 refraction/translation matrix multiplication. An analytic thin biconvex reference and determinant invariant check test the implementations. Final vertex EFL is 51.6001132346 mm and last-vertex BFD is 36.4275608748 mm. Vertex track is 43.2297 mm; source first-vertex-to-image distance is 79.6572 mm. Every refracting surface has a separate Petzval contribution. Standalone singlet focal lengths are evaluated in air, while cemented groups are traced with the real shared interfaces; they are not interchangeable quantities.

Published comparisons (residual = computed minus source):
- EFL: 51.6001132346 versus 51.6, residual 0.000113234609501, tolerance 0.005; PASS.
- BFD: 36.4275608748 versus 36.4275, residual 6.08748338209e-05, tolerance 0.001; PASS.
- lastGroupEFL: 41.258079567 versus 41.28, residual -0.0219204329764, tolerance 0.005; FAIL.
- lastGroupRatio: 0.799573430768 versus 0.8, residual -0.000426569231813, tolerance 0.005; PASS.
- literal-lastGroupRatio-lower: 0.799573430768 versus 0.8, residual -0.000426569231813, tolerance 0; FAIL.
- full-edge-fan-transmission-marketed-half-field--23.0: 3 versus 5, residual -2, tolerance 0; FAIL.
- full-edge-fan-transmission-marketed-half-field-23.0: 3 versus 5, residual -2, tolerance 0; FAIL.
- full-edge-fan-transmission-source-plot-image-height--23.639871426541184: 3 versus 5, residual -2, tolerance 0; FAIL.
- full-edge-fan-transmission-source-plot-image-height-23.639871426541184: 3 versus 5, residual -2, tolerance 0; FAIL.
- full-edge-fan-transmission-full-format-corner--23.193979944756066: 3 versus 5, residual -2, tolerance 0; FAIL.
- full-edge-fan-transmission-full-format-corner-23.193979944756066: 3 versus 5, residual -2, tolerance 0; FAIL.

## Glass evidence
Fresh primary OHARA, HOYA, Schott, Sumita and Hikari catalogs were searched broadly; evidence preserves per-coordinate competing rows and source hashes. The Stage 1 author checked raw AGF row presence and file hashes. CDGM September 2026 primary catalog is included in the six-vendor review. Candidate residuals are recomputed from their native coordinates. Coordinate equivalence does not prove supplier or melt identity. No catalog spectral curves are falsely promoted to source-published element properties.

## Production correlation and limits
The official Cosina discontinued-product record and supplied optical section establish the marketed focal length, aperture, lens count, mount, release period, and outline topology. They do not explicitly name this patent. Product correlation is therefore supported but unconfirmed. Later M-mount versions are not substituted for the selected L39 product.

## Focus and aperture
The source publishes a single prescription and no finite-focus motion law. The chosen disposition is NO_INTERNAL_RECONSTRUCTION; future data uses the established closeFocusM=1e15 infinity-only sentinel and empty var. Production minimum focus remains marketing context only. The physical diaphragm radius and numerical lens clear apertures are absent. A Stage 2 iris calibrated to source f-number is an inference, not independent f-number verification.

## Limitations and open issues
- summary-f5-mismatch (supported source limitation): Computed rear singlet f5 differs from printed41.28; raw comparison remains FAIL. No source value corrected.
- literal-ratio-shortfall (supported source limitation): Computed f5/f is below literal inclusive0.8 bound, although it rounds0.80. Raw bound comparison remains FAIL; no strict-satisfaction claim.
- focus-limitation (optional source limitation): Finite-focus law unpublished; NO_INTERNAL_RECONSTRUCTION with1e15 sentinel and empty var if data constructed.
- edge-pupil-limit (supported model limitation): At marketed/source-plot/full-format edge fields, chiefs pass but sampled pupil clearance is incomplete: an extreme ray clips surface5 and the opposite one misses cemented interface9. No source/full-pupil performance certification.
- runtime-view-limit (supported model limitation): At100% of the larger aperture-derived runtime view extent, optional rays fail. Their records are retained; model readiness certifies the actual documented default fan, not that larger exploratory bundle.

## Supported source discrepancy disposition
The active original card now selects Example 2 under explicit user authorization. Its unchanged Table 3 prescription and Table 4 coefficients are modeled literally. The system EFL and BFD reproduce the source. The final-singlet summary f5=41.28 mm does not, and computed f5/f remains below the literal inclusive 0.8 bound although rounding to 0.80. Those observations stay FAIL in comparisons. The acceptance check permits only a clearly qualified faithful-table model; it does not repair or certify the failed source condition. The final-singlet source-precision corner calculation does not explain the summary mismatch as ordinary rounding.

## Transformation ledger
- example-selection-change: Honor user-approved replacement of active card; new selection freshly transcribed from original Table3/Table4/Fig3. Example2 primary prescription reproduces system f and BFD, while retaining separately identified rear-group summary/inequality discrepancies. Previous Example1 work and card remain untouched outside this dossier.
- source-summary-disposition: Distinguish faithful numerical prescription from inconsistent prose summary/strict mathematical condition. The full primary prescription is unambiguous and reproduces system EFL/BFD. Its computed rear-singlet value and ratio are valid calculable model properties, but the printed summary and literal lower bound are not reproduced. No unique source correction is established; no fitting is permitted.
- abstract-bound-priority: Use repeated Japanese claim/detail wording; retain cover abstract conflict. Claims and repeated Japanese paragraphs establish0.8. This does not remove the smaller Example2 ratio shortfall.
- stop-real-calibration: Trace an exact axial ray launched at computed EFL/(2*source1.53) through the published front group; use its physical stop hit height as authored radius. The current project runtime uses a real-ray iris calibration and nominal entrance-pupil override. Preserve both the exact calibrated and small-angle paraxial quantities with distinct labels; neither is an independently published diameter.
- semi-diameters: Set clear radii using source optical sections and ray heights, constrained by actual edge/rim/shared-band geometry. No source numerical apertures. Third element rear aperture narrows to keep the strongly curved central air gap physically clear.
- rear-clearance-refinement: Increase initially undersized rear clear radii within source-section proportions and current geometry limits. At the actual default off-axis field one initial ray first clipped on external exit10 and later on rear aspheric boundaries. Updated inferred radii pass all eleven actual default samples with positive edges and zero render trim; source optics unchanged.
- containment-scope-reconciliation: Apply documented current-template scope; remove no failed observation and add no project exception. Template lines143–145 explicitly scopes the off-axis fan to offAxisFieldFrac×half-field. The larger runtime aperture-derived extent is not a source usable-field guarantee. Source/marketed/full-format chief coverage is separately verified, while sampled edge-pupil losses remain disclosed.
- scoped-edge-review-stage2-rebind: Retain all failed rays and record limited coverage; change no data bytes. 384 required/default-plus-intermediate rays and source/format chief coverage pass. True edge interface 9 misses and surface 5 clips limit full-field pupil claims but are outside the stated default-bundle test.

## Claim-to-result map
- System EFL/BFD/principal planes/track: results.sourceModel.
- Standalone/cemented powers: results.sourceModel.elements and airSeparatedGroups.
- Per-surface Petzval: results.sourceModel.petzval.
- Native prescription and coefficient claims: evidence.rawPrescription, checked against cited pages.

## Completed Stage 2 construction and geometry
The final TypeScript literal is parsed by a strict limited JSON grammar with exact wrapper checking. Duplicate keys, trailing code and arithmetic fixtures reject; a first-radius mutation alters EFL as expected. The real pinned project separately imports the final TypeScript file. Geometry is calculated from those final parsed values, not an intended-model copy.
Inferred stop radius 11.501654285 mm calibrates f/1.530000; entrance-pupil radius 16.862782103 mm. Minimum sampled edge thickness 0.140649978 mm. Actual rim angles, conic domain, shared-band intrusion, and all sampled edges passed. Asphere departures apply only at modeled apertures.
The independent exact meridional tracer and real project trace both pass the current default on-axis/off-axis pupil fans. Optional full-field diagnostics are retained; a finite fan does not establish unvignetted continuous-field/full-pupil performance. No cemented-interface first clipping occurs in the mandatory current default fan. Additional source-edge and100%-view probes retain the documented interface9 misses and surface5 losses; chief-ray coverage does not certify complete edge-pupil clearance. Actual state-native project render diagnostics show no trim. No diagnostic exceptions were added.
The authored iris is calibrated by exact axial tracing at EFL/(2×1.53), matching the current runtime real-ray iris. Paraxial stop calibration and the small-angle f-number derived from that physical iris are separately reported; they are not conflated with runtime FOPEN. Source-plot22.10mm, marketed46degree full field, and current full-frame43.3mm diagonal are separately traced in both signs. Chiefs pass but edge-pupil fans retain losses.
Real project typechecking, Prettier, corpus tests and full build remain NOT_RUN at integration. No metadata generation, integration, project edits, commits, pushes or publication took place.

## Stage 3 claim and citation review
The data and evidence exactly match the replacement Stage 2 checkpoint. Stage 3 extends the verifier only to add analysis checks. No geometry or source numeric values changed during this Stage 3 authoring. The completed upstream correction/normalization ledger is retained; all data and evidence were revalidated before the prose was finalized.
Metadata claims map to the source cover and manufacturer record. Architecture numerics map to implementedModel EFL/BFD/track/principal planes and airSeparatedGroups. Every element first line maps to parsed elements and implementedModel.elementFacts. Stop and asphere-rim claims map to implementedModel.aperture and geometry. Each copied token is explicitly checked with declared rounding in analysis-numerical-claims.
Manual review: patent paragraph references support stated architecture and the cited whole-design rationale; individual element paragraphs avoid unsupported aberration allocations. Product correlation remains qualified. Glass candidate examples agree with captured primary catalog coordinates, with supplier and spectral limits explicit. Focus, inferred aperture, no-scaling, published stop and asphere convention disclosures are consistent with final data. Conventional primary URLs and one-based PDF locators are usable outside the conversation.

## Focused edge review and unchanged-data rebind
The focused assessment SHA256 is 62128810ab068457740e5275bb5b5e788002287822437a677f8946d70c8cb5d1. Its scope is the interpretation of the actual current-template containment gate, not Stage 4. The final data remains SHA256 e3da46f00602fafae5d1b6c28a708a9bf4e5133eadf5b3884a24aa5b68407902. The earlier provisional package and pre-scope FAIL checks are preserved and identified in evidence.verificationHistory. The replacement Stage 2 evidence/verifier/results are freshly hashed and replayed.
Actual required/default-plus-intermediate sampling: focus controls 0/0.5/1, all eight authored f-stops, axial six fractions [-0.83,-0.5,-0.17,0.17,0.5,0.83], five off-axis fractions [-0.75,-0.375,0,0.375,0.75] at 0.30 and 0.60 current runtime half-field. This is 384 passing samples. The 120 additional 100%-runtime-field probes are separate and contain failures.
At both signs of marketed23degree half-field, format21.65mm corner, and source22.10mm chief height, each wide-open fan has three of five rays passing. Surface5 is an exterior aperture clip. Surface9 is a genuine first spherical-interface miss after surface8, confirmed independently; it is not a ghost artifact. A straight outer-rim connector offers a possible physical edge-vignetting interpretation but is an inferred diagnostic, not a measured bevel or implemented blocker. Complete full-field pupil containment is not established. The data, SDs, and projection settings were not changed for this disposition.
Claim map additions: current-template sampling and actual default field → results.projectExecutionRecord.samplePolicy/states/rays; source/format chief and full-edge failures → results.implementedModel.coverageProbes, diagnosticObservations, and failed comparisons; scope interpretation → evidence.scopedEdgeReview; failed f5/lower-bound source claims → results.comparisons and sourceModel.rearGroupSourceRoundingDiagnostic.

## Verification-record correction
During Stage 3 entry review, a verifier bookkeeping defect was found: replacing the runtime-filtered check list disconnected four subsequently appended acceptance records. The source/data calculations were unchanged, but those four records were not reaching the final result. The list now updates in place. The replacement Stage 2 gate was rerun and all four checks (runtime sampling completeness, source/format chief coverage, static states, and scoped containment disposition) are explicitly present and PASS. A deliberate one-ray deletion in a separate negative-fixture copy gives exit1 and fails sampling completeness and scoped disposition. No production data or source value changed. The prior r2 package is preserved at SHA256 9d1b66a8a1179ad0d5281815c785226be4165f1195994352adef50878732fd20.

## Disposition
READY_FOR_AUDIT. Qualified faithful-table disposition: printed f5 and the literal lower ratio bound remain failed raw observations. No implied strict-condition compliance, integration or Stage 4 approval. The clean extraction replay must retain the same numerical content and expected exit status.

## Stage 4 — source-first independent final audit

The Example 2 baseline was frozen on 2026-10-03 at 17:12:26.655272 UTC, fingerprint `b6109de5ecc37a63873781f3ebb612d20c562a8f258ebd1bdb02f447f0dd0079`. It preserves the active user-authorized Example 2 card and unchanged canonical JP2000330014A PDF. The old Example 1 baseline and alternative-example investigation remain separate and unchanged. Source-first inputs were genuinely re-entered/rechecked from Tables 3–4, the equation, Figure 3/4 and manufacturer primary sources; broad matching independently scanned raw OHARA, HOYA, Schott, Hikari, Sumita and CDGM catalogs. Reuse of the earlier genuine source-only Example 2 numerical investigation and generic reviewer methods is disclosed. No author candidate was used as a baseline numerical input.

First author exposure was the supplied Stage 2 edge freeze at 17:42:50 UTC. Its scoped audit preceded the authorized Stage 3 candidate exposure at 18:19:17 UTC. The exact Stage 3 archive hash is 862f01f0378c9629f4b45bb9ec6c5a87ab1d5437f65a628886e1ba25e8f95a2c. The data remains unchanged at SHA256 e3da46f00602fafae5d1b6c28a708a9bf4e5133eadf5b3884a24aa5b68407902. The frozen baseline content is embedded as exact text and separately reexecuted; a hash is an integrity checkpoint, not proof of blindness. Post-exposure geometry/vector-Snell code is independently implemented and identified; actual project execution is a third evidence path.

### Four-view reconciliation and material changes

Raw patent, frozen reviewer source baseline, actual final TypeScript and analysis agree on all12 rows, source stop 7, six elements / five groups, originalR/d/N/ν, both full asphere coefficient sets and unconvertedK0. No dimension, aperture, glass coordinate, stop position, focus law or projection limit was changed. Both parsed literal data and real Node-imported data agree. Patent/master card remain the selected Example 2 bytes.

Only analysis disclosure/status and verification metadata changed: the d-line interpretation is now explicitly inferred from genericN/ν headings plus¶0020 d/g references and ordinary catalog compatibility; no spectral conversion is applied. The final independent-audit status replaces the Stage 3 pending-audit sentence. Stale NOT_RUN wording that referred to an unconstructed Stage1 model now states the genuine pending toolchain/integration status. All source discrepancies and failed edge observations remain explicit. The changed analysis and evidence underwent the dependent Stage 2/3 checks before final approval.

### Independent calculations and qualified source discrepancy

EFL 51.6001132346 mm, last-vertexBFD 36.4275608748 mm, glass-vertex track 43.2297 mm and source image track 79.6572 mm reproduce the independent source-only calculation. H=33.5719560223 mm from first vertex and H′=−15.1725523598 mm from last vertex agree. Per-interface Petzval sum 0.00290545808119 mm⁻¹ includes the cemented interface. Separate reduced-angle sequential and physical-angle ABCD methods agree; analytic100 mm thin-lens and thick-element formula fixtures pass. All6 standalone elements and5 air-separated groups agree, including cemented net EFL−239.6798672521 mm. No telephoto/retrofocus claim follows from the checked ratios.

The final singlet is41.2580795670 mm versus printed41.28 mm, and f5/f=.799573430768 is below the literal inclusive.8 lower bound. Both raw comparisons remainFAIL; the ratio merely rounds.80. Independent16-corner last-digit sensitivity reproduces the author’s interval and does not enter the printed41.275–41.285 mm interval. The separate frozen2000-sample diagnostic is also preserved, not replaced by the corners. Neither method proves a source repair. The explicitly authorized faithful-table disposition accepts the unambiguous tabulated model with its qualification, not the failed source summary/inequality or a claim of condition compliance. The earlier Example 1 contradiction is not silently transferred or repaired.

### Pupil, geometry and exact-ray findings

The independent entrance-pupil coordinate is24.1004539932 mm from the first vertex; exit-pupil coordinate−26.7734706720 mm from the last. Nominalf/1.53 gives16.8627821028 mm entrance radius. The exact traced physical iris11.5016542848 mm agrees with stored11.501654285 mm and current runtime. The distinct paraxial calibration11.7445468408 mm remains separate. These are dependent calibrations; none is a published diaphragm measurement. All finite-focus controls remain a static infinity prescription with NO_INTERNAL_RECONSTRUCTION, empty var and1e15 sentinel.

Current-profile geometry was independently recomputed with1025 radial samples and derivative-root bisection. The controlling validator explicitly checks element thickness at min(frontSD, rearSD), lines1408–1418, while checking each actual rim individually. Minimum common-band material thickness is +.140649978365 mm and maximum actual rim angle51.5745822511°. Conic-domain/policy, actual rim slope, SD-ratio3 and all shared-band gap constraints pass. A preliminary inherited maximum-radius probe reported−.663225862771 mm forL5 by extending its 15.5 mm entrance profile to the 16 mm rear radius. That is outside the current common-band thickness domain. The probe and correction are retained; the actual geometry, source values and tolerances did not change. Current validateLensData/buildLens and render diagnostics independently pass, with zero trim.

A new analytic-sphere/vector-Snell forward trace independently reproduces every unique state/aperture/default and additional field sample, including first failures. The exact actual-runtime grid has504 rays:384 required axial/30%/60% samples pass across8 f-stops and3 static focus controls;120 additional100%runtime-field probes preserve their failures. Deleting a ray is detected by grid identity, preventing an empty or incomplete record from passing. Focus samples at .25 / .75 also have identical geometry in the bound reviewer runtime record.

Both signed marketed23°, source image22.10 mm and format21.65 mm chief rays pass. Each signed full edge fan still has only3 of5 passing wide-open samples. One extreme clips entrance 5; the opposite has a real first sphere miss at cemented 9 after surface 8. Independent analytic roots and non-ghost runtime agree; this is not a downstream ghost event. The inferred outer-rim connector is an explanatory edge diagnostic, not a source-measured bevel or an implemented blocker. Complete full-field pupil containment remains unestablished.

The controlling template scopes the off-axis cemented-containment guidance to offAxisFieldFrac×half-field, presently .60. That mandatory default bundle passes. The field-coverage procedure’s actual format-corner chief is clear and the image-circle audit finds zero undersized surfaces. Thus the specific full-edge all-pupil failures do not establish a failure of that current default construction requirement. Raw full-field transmission comparisons remainFAIL, with source, marketing, format and runtime-view fields kept separate. No stricter reused author rule, new numerical tolerance or new diagnostic exception was introduced.

### Glass, production and source provenance

All four native coordinates and six elements agree with the frozen independent extraction. Broad raw-catalog results and competing vendor candidates remain available; no supplier/melt is established. The current actual runtime uses N-LASF44, H-ZF4A, E-F2 and LAC13 proxies, and their d/ν roundtrips pass current native-coordinate tolerances. Catalog curves are estimates, not measured nC/nF/ng or ΔPgF from the patent. No APO claim is made.

Primary Cosina metadata supports original L39,6/5,50 mmf/1.5,46°fullfield,10 blades,0.9m andOctober 1999 release. The6 element optical section, rear cemented pair and double-aspheric final singlet support correlation. No manufacturer confirmation of this exact patent/example is asserted. The recovered canonical source / card provenance distinctions remain: activeExample 2card follows explicit user approval; original pre-interruption card byte identity was unavailable; reacquired PDF identity is not silently equated with lost earlier download bytes.

### Reproduction and final scope

The consolidated standard-library verifier reads the actual final TypeScript, replays original source/author checks and Stage 3 claim mapping, reexecutes frozen independent code with all original member hashes, and runs identifiable new profile/ray/glass/source-discrepancy checks. The first assembled verifier lacked the standard-library copy import; that NameError and its correction are retained in evidence, followed by complete rerun. No source/model correction resulted. The record is bound to unchanged data and identified runtime-script/project hashes. Portable replay does not impersonate the TypeScript compiler or rerun externally installed project dependencies.

All observed applicable real constructor/render checks pass. TypeScript/Prettier and later corpus/build integration remain NOT_RUN at integration scope; no actual failed validator is relabeled pending. The canonical 13-file dossier preserves original PDF/card, clean pair, consolidated evidence/code/results/audit/manifest, author runtime reproducer/record and reviewer runtime reproducer/record. Package readiness is awarded only after exact clean extraction and stable numerical replay. This is pre-integration READY_FOR_BATCH for the explicitly qualified faithful-table model, with INTEGRATION_PENDING, not a claim of full optical performance or strict source-condition compliance.

## 2026-10-09 — Semi-diameter pass against the patent figure

Source: `patents/JP2000330014A.pdf`, PDF page 8 (printed page 7), Figure 3, which the patent text identifies as the lens section of the second embodiment (Example 2, the modeled prescription). The figure is a clean line drawing with no ray bundles; leader lines touch only the lower half, so rims were read on the upper half and cross-checked on the lower. No maker construction diagram was supplied for this pass.

Scale: the page was rasterised at 400 dpi with the axis at row 2569. Vertex crossings sit at columns 822.5 (surface 1), 900.5 (2 and 3 merged), 995.5 (4), 1046 (5), 1219 (8), 1243 (9), 1392.5 (10 and 11A merged), 1476.5 (12A) and the image plane at 2029.5. First vertex to image plane is 1207 px for 79.6572 mm (0.06600 mm/px); first to last vertex is 654 px for 43.2297 mm (0.06610 mm/px). The stop tick at column 1138.5 lands at 20.86 mm against 20.96 mm in the table. 0.066 mm/px was used throughout.

| Surface | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 1 / 2 | 23 / 23 | 22.6 | 23 / 23 | Rim at 342 px upper, 341 px lower. Within 2 %; retained. |
| 3 | 18 | 17.3 | 18 | L2 outer rim at 262 px upper, 259 px lower. Within 4 %; retained. |
| 4 | 17 | 13.9–14.3 | 14.3 | The figure ends the curved rear face of L2 at a flat annulus: the annulus runs from the 262 px rim down to 211 px (13.9 mm), and its plane at column 1032 puts the curve end at 14.3 mm by sag. The stored 17 mm carried the curve 1.5 mm rearward over the rim of L3. The larger reading was taken because the f/1.53 axial ray reaches 13.90 mm here. |
| 5 | 13.85 | 15.3 (drawn top of L3) | 14 | The figure draws L3 meeting L2 at the rim. With the tabulated radii and the 1.2378 mm gap the two faces touch at 14.67 mm, so the drawn 15.3 mm is not reachable. 14.0 mm is the largest value the cross-gap check admits at the lens's 0.9 gap fraction (combined sag 1.113 of 1.114 mm allowed). A gap fraction of 0.95 would admit 14.3 mm, 0.98 would admit 14.5 mm and 0.99 would admit 14.6 mm; the fraction was not changed. |
| 6 | 12.8 | 11.9 | 12 | Flat rear annulus of L3 at columns 1115–1118 runs from 232 px down to 181 px (11.95 mm); its plane lies 19.5 mm from the first vertex, against 20.63 mm for the stored rim, which sat 0.33 mm ahead of the stop plane. Axial ray height 11.60 mm. |
| 8 | 15 | 11.6–11.8 | 11.8 | Flat front annulus of L4 at columns 1165–1168 runs from 228 px down to 175–179 px; the sag method gives 11.8 mm. The stored 15 mm carried the concave face 6.46 mm forward, past the stop plane. Axial ray height 11.39 mm. |
| 9 | 15.5 | 15.0 | 15.5 | Doublet outer cylinder at 228 px upper, 225 px lower. Within 3 %; retained. |
| 10 | 16 | 15.0 | 16 | Within 6 %; retained. |
| 11A / 12A | 16 / 16 | 15.2 | 16 / 16 | L6 rim at 230 px upper, 229 px lower. Within 5 %; retained, so no aspheric sag or departure value moved. |
| STO | 11.501654285 | — | unchanged | Not part of this pass. |

Rear group retained on ray evidence as well as on the noise margin. A trial with 9 and 10 at 15.0 mm and L6 at 15.2 mm validated cleanly but made the +0.75 pupil sample of the default 0.60 off-axis field fail wide open (first at surface 10 at 17.81°), and it lowered the engine half-field from 30.26° to 29.68°. With the rear group left as authored the default fan is unchanged.

Element shapes: the figure draws L2, L3 and the cemented doublet with square outer cylinders and flat annuli beside the curved faces. The renderer joins unequal front and rear rims with a straight connector, so those shoulders render as chamfers. The figure draws L5 square-cut at 15.0 mm with roughly 1.7 mm of edge; the model keeps 15.5 / 16 mm with a 0.14 mm edge at 15.5 mm, because a common 15.0 mm rim costs the default off-axis fan as described above.

Clearance after the edit, by exact meridional trace at f/1.53: axial marginal heights against stored rims are 13.90 / 14.3 at surface 4, 13.84 / 14.0 at surface 5, 11.60 / 12.0 at surface 6 and 11.39 / 11.8 at surface 8; no surface clips the axial beam. Chief rays to 21.63 mm (23.17°) and 22.10 mm (23.64°) pass every surface. The surface validator reports no errors, the image-circle check lists no undersized surface, and traced corner coverage stays 100 % (23.2° to 21.65 mm). Engine half-field 30.259° and f/1.53 are unchanged, and the stop radius is unchanged.

Vignetting: the five-sample off-axis fan (pupil fractions −0.75 to 0.75) still passes 5 of 5 wide open at 9.08° and 18.16°, and 3 of 5 at 23°, 23.19° and 23.64°. At the edge fields the −0.75 sample now first clips exit surface 4 instead of entrance surface 5; the +0.75 sample still first fails at cemented interface 9. The unvignetted meridional band measured at the stop moves from −8.19…+6.43 mm to −8.34…+6.43 mm at 23.17° and from −9.16…+8.44 mm to −9.31…+8.44 mm at 18.16° (stop radius 11.50 mm), a small gain from the 14.0 mm rim at surface 5. The minimum shared-band edge thickness (0.140649978 mm, L5) and maximum rim angle (51.574582°, surface 9) are unchanged.

Open limitations:

- Surface 12A turns over (slope changes sign) at 12.949 mm. The f/1.53 axial marginal ray reaches 12.97 mm there, so no rim below the turnover can pass the stated beam, and the stored 16 mm rim and the figure's 15.2 mm rim both lie past it. Figure 3 draws the reversal: the rear face of L6 is furthest forward between 12.0 and 13.9 mm of height and returns about 0.3 mm by the rim, which matches the prescription. The rim was left as authored and the point is recorded for a decision outside this pass.
- Surface 5 remains 0.67 mm short of the 14.67 mm contact height the figure implies; only a larger gap fraction would admit more.
- The rear group stands 3–6 % taller than the figure.
- Figure 4 labels the Example 2 image height 22.10 mm; 21.63 mm is the Figure 2 (Example 1) label. Both heights were traced.

## 2026-10-09 — Integration: glass labels and metadata

- Glass: the six code labels already resolve to catalog curves at the printed coordinates (804465, 728283, 620363, 694533); no change.
- Metadata: `specs` and subtitle put in the form used by the Ultron 35mm f/1.7 L39 sibling; `apertureBlades: 10` added from the Cosina specification cited above. Display name unchanged.
