# Sigma 24–70mm F3.5–5.6 ASPHERICAL HF audit

## Job and reference versions
JP2002236254A Numerical Example 2, original unchanged card and 108,360-byte eight-page original. October 8 READY clearance adopts DERIVED SP2-to-image 35.73 mm; it supersedes only the earlier image-distance hold. The original card and historical index text remain unchanged. Fresh main lookup 2026-10-09: 14da71d94ed3ab6ccf7aef70066f1e49670440ed; 248 local current-project files verified against their Git tree blob identities. No unpublished #771 code used. Workflow CHAT-1.0 retained.

## Extraction and conventions
PDF4 / printed3 paragraphs0018–0022 supply Example2 table, all three native stations, FNO, field and one asphere. PDF7 Fig5 is the selected section; PDF1 JPO wrapper supplies attribution. Positive radii have imageward centers. Patent paragraph0010 (PDF3/printed2) explicitly defines n as d-line index; the Stage1 inferred-line description was corrected on reviewer evidence, without numerical change. Native millimetres retained without scaling. Source equation uses A under the radical, so K=A−1=1.168; A1 H² is zero; nonzero H4/H6/H8/H10 terms retained.

## Model transformations
Nine glass bodies and seven air-separated components include the rear cemented doublet; ten material intervals include the separate 0.1000 mm, n1.51840/v52.1 resin film. SP1 becomes STO. SP2 is the fixed flare stop, not image: its unknown clear radius cannot be inferred as a physical blocker. Retain its raw row in evidence, omit that nonrefracting active-model plane, and combine d18 with the approved constant 35.73 mm. This is a limited research model of the refractive prescription, not a certification of source flare suppression or throughput.

## Glass review
Nine unique native coordinates compared anew against retained authoritative HOYA, OHARA, Schott, HIKARI, Sumita and CDGM catalogues. Cached catalogue bytes/provenance remain in supporting evidence. Compatible names indicate coordinate classes only, not supplier/melt. The resin must remain unmatched; no inorganic catalog spectrum may be assigned to it. Final selections and runtime resolution are Stage2 work.

## Numerical and geometry results
Independent reduced-angle and ABCD code reproduces EFL25.009803/49.447193/67.589572 mm within source one-decimal precision. The Gaussian SP2-image intervals are35.757037/35.766125/35.684410 mm. The approved common35.73 mm yields image errors−0.027037/−0.036125/+0.045590 mm, retained without optimization. G1/G2/G3 standalone focal lengths are−40.207418/+37.309026/−1594.703539 mm. Native iris/SDs not published: Stage2 must infer them and validate geometry/render/exact rays. No near-focus data; NO_INTERNAL_RECONSTRUCTION.

## Correction and discrepancy register
No numerical source repair. Printed β3T1.04 recomputes1.048550: ordinary two-decimal rounding does not reproduce the print; preserve comparison FAIL. Governing1<β3T<1.5 passes. Source aperture and field labels are native, distinct from marketing. No assertion of production identity. The manufacturer2004 catalogue confirms the exact HF variant,9/7 topology, front-group HF motion and the0.4m product MOD, but does not supply focus travel.

## Independent review
Stage1 verification is author construction work. A separate source-first reviewer is preserving its fresh baseline; final Stage4 reconciliation pending.

## Gate disposition
Stage1 READY_FOR_DATA: complete primary extraction, explicit bounded image-plane approval and reproducible first-order model. Stage2 tasks remain inferred aperture schedule, actual geometry/render/runtime/exact-ray checks and targeted true typecheck. No final application pair exists at this checkpoint.

## Pending integration
Full-corpus tests, production build, batch integration and publication are NOT_RUN and outside this job. No CSV/index edits or file moves.

## Quantitative claim map
EFL, image distance/errors, group focal lengths and beta: results.sourceModel.states[].firstOrder from rawPrescription and approved transformation. Material/count claims: raw surfaces and glass audit. Manufacturer specifications: catalogue PDF6/12. No analysis file yet.

## Stage2 construction checkpoint
Final active data has18 rows,10 material entries and exactly one STO. Inferred SDs are20,14.5,14.5,15,15,15,15,10,11,11,11,11,8.3,8.3,10,10,10,10 mm. Current default gapSagFrac0.90 is sufficient: no override. Facing bands2–3 and13–14 have87.2512% and87.2488% intrusion, with positive1.111695 and0.232071mm clearances; resin minimum thickness0.046660mm. Actual max rim56.0982° and s5 conic domain positive. Source polynomial terminates at H10; required A12/A14 authored zero (not missing-source reconstruction).

The actual strict TypeScript compiler, validateLensData, buildLens, module identity check and production render diagnostics pass. Sixty-three geometry grid states plus native layouts give zero hidden trim. Actual chief/tracer runs27,756 sampled rays across native stations, two field definitions and three aperture scales; all native full-aperture on-axis bundles pass257/257 and numerical-failure count is zero. Outer-field aperture blocking remains explicit, not counted as full containment. Exact chief-angle roots reach the physical135-frame corner21.633308mm at42.318857/23.731256/17.729633°; all are clear. The wide source40.85° field and physical-frame corner are distinct due to distortion; do not equate them.

Vendor spectral lines are explicit proxies, not source measurements. TAF1 label resolves through a current S-LAH66 alias, but source HOYA-derived explicit line indices govern actual chromatic runtime. S-FSL5, NBFD10 and BACED5 are current compatible alternatives selected from the retained six-catalog comparison. Every inorganic annotation resolves; resin uses Abbe fallback. No APO claim. Reviewer corrected the Stage1 spectral-reference wording to explicit d-line ¶0010; indexReferenceNote is removed. Layer composition remains an inferred hybrid resin, not a source chemical identification.

Stage2 READY_FOR_ANALYSIS binds the current hashes in the checkpoint manifest. No analysis was drafted before this gate. Full build/corpus/integration remains pending. Geometry, apertures and vignetting are a bounded reconstruction, not measured production performance.

## Stage3 analysis and claim reconciliation
The Stage2 data bytes remain unchanged during analysis. Metadata aligns with JPO wrapper; exact HF product/mount facts derive from Sigma2004 PDF6/12. Minolta AF is represented by current sony-a taxonomy, without claiming a Sony-branded2004 product. Source and computed values remain distinct.

Claim map: metadata/source conditions/coefficient table → rawPrescription/source PDF citations; EFL/BF/track/focus residuals/group powers/Petzval → results.sourceModel.states[].firstOrder; individual focal lengths and class/index strings → parsed data elements and material calculations; group movement → facts.groupFrontsRelativeImageMm; asphere sag/departure/rim/resin thickness → implementedModel[].geometry; exact iris/corner/trace/render quantities → evidence.runtimeRecord with runtime.json fingerprint. Production specs and association limits → productCorrelation and complete manufacturer PDF.

Manual interpretation review: no unique factory assignment, no attributed individual aberration budget, no APO or MTF claim, no source stop diameter, no finite focus law and no full-pupil throughput certification. The fixed SP2-image extension is labeled derived. Printed beta mismatch retained. Renderer straight joins between unequal optical-face radii simplify the outer lands/steps visible in Fig5; they do not establish factory chamfer geometry. Independent reviewer inspected that discrepancy and recommends retaining the valid optical apertures rather than equalizing radii for appearance.

The intentional R1-sign mutation returns exit1 with all21 source/model mapping checks and the runtime fingerprint check failing; original bytes restored by leaving mutation in a separate directory. Stage3 portable verifier passes required skeleton and all preceding source/model/geometry checks. READY_FOR_AUDIT, independent final exact-pair reconciliation pending.

## Control-interpolation limitation
The21-point portable grid finds a maximum absolute Gaussian image error3.845539mm between source stations. The three native states retain the much smaller documented residuals. Intermediate controls are explicitly illustrative, not focused states or quantitative performance certificates. Source-field probes and exact physical-frame corner roots are distinct coverage checks; the wide corner requires42.318857°, beyond printed40.85° half-field.

## Stage4 independent source-first review
The reviewer re-entered the prescription from500-dpi original table/equation/figure renders and wrote fresh ABCD and sequential code before opening the candidate. Exposure was not fully blind: the fixed derived-gap approval, card topology and brief CSV numerical summaries had been seen. Frozen baseline JSON hash598d669a59459d46edd3fc192317d2035fbd1ece3da93c0b52f8a1f45a5c98f9; original code hashd9ca844a30cffa89648a9058faa3340684a15f5b665acb21790fda7a9a211597. Its original limits remain in the frozen section; later glass/geometry reconciliation is separate.

Fresh parsed-data review confirmed every source radius/gap/index/asphere, standalone and group powers, default geometry, exact axial iris, and independently implemented physical-corner rays. Six retained authoritative vendor sources were freshly hash-matched and independently compared; all final spectral proxies and dPgF reproduced. The reviewer independently reran the inspected current-main actual runtime harness, obtaining byte-identical output82ef029ad750bde0f0cafd26e42496872fd918d23302d48c6b528bab477a3d09:27,756 rays, zero numerical failures, native axes all257/257 and zero trim. All137 executed project modules match current-main identity; candidate is separate.

Corrections: author Stage1 inferred-line wording changed to source-explicit d-line paragraph0010; no optical numbers changed. The final analysis gained a consolidated glass-class residual table. Renderer outer-edge simplification, Minolta AF/sony-a taxonomy, source SP2 omission, native beta mismatch and interpolation limits remain explicit. Data unchanged after Stage2. Final approved pair hashes: data14081200ce4766764b03d197390c2009425f22376244901ce2c51dfe26743c6b; analysis2ab684a464acfd31bf4cf609592558132d461fe4a533748495321b40d745cef4. Full report hash699815e4ebc24375375239ddeef38daa6f008fad87877b527a1d139226116c5c preserved in evidence.

The original independent code is incorporated under an isolated local namespace in the portable verifier. Its fresh recomputation exactly matches the frozen baseline and agrees with the author’s native first-order branch. Final results keep failing printed-beta comparison as a visible observation; mandatory discrepancy treatment passes without changing source values. Pair hashes are independently gated. Stage4 READY_FOR_BATCH applies only to the stated native-station/derived-image/unknown-flare-stop research scope. INTEGRATION_PENDING. No full-corpus tests, build, repository publishing, CSV/index modification or file moves occurred.


## V2 conversion — 2026-10-17

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main a85b198951829c52c07bfd83840331363a040449. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog testing was resource-killed and is not a pass. This format conversion is not deployment or complete optical acceptance.

Retained package status: QUALIFIED_SOURCE_STATIONS: JP2002236254A Example 2; approved derived SP2-to-image35.73mm; unknown flare stop diameter remains.


## Continuous infinity-path reconstruction, 2026-10-23
This addendum supersedes the earlier unsupported linear-intermediate zoom limitation. Source d7 and d8 are piecewise-linear driver coordinates through the three exact native configurations. The complementary d15 preserves the fixed iris-to-G3 separation. The final image gap follows first-order focus while retaining the interpolated native Gaussian residuals (+.0270365932,+.0361247465,−.0455901295 mm), not zeroing or optimizing the native prescription. G1 still reverses direction; G2 and G3 travel objectward. All198 intermediate nodes are unpublished. This is an inferred visualization trajectory, not a recovered or uniquely determined production cam.

All source optical surfaces, glass values and proxy qualifications, native gaps and focal/aperture labels are unchanged. No source row, allowance or clear aperture is altered. SP2 remains omitted because its diameter is unknown, so physical flare cutting/throughput cannot be certified. The adopted35.73mm SP2-to-image interval and its uncertainty remain as originally documented. Finite focus is still not modeled. Numerical MTF convergence does not establish production accuracy; per-field converged bandwidth limits remain controlling. Independent integration is pending.
