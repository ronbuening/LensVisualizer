# Current-main refresh: 709dda72

Current disposition is bound to main 709dda72a0ddead8ee77b8306347429031f8b379 and the new final manifest. The prior final archive and immutable source-only baseline are retained as separate checkpoints. All historical sections below keep their historical meaning; the current-pin replay section governs this revision.

# Sigma 60–600mm DG OS HSM Sports: consolidated source-first audit

Current disposition: Stage4 independent review completed under the expressly approved common49.0mm aperture reconstruction and gapSagFrac0.95. Final readiness is bound to the exact manifest and successful clean replay. INTEGRATION_PENDING (2026-10-13: no longer pending; the lens is in the repository and the dated sections at the end record what changed there). The author-stage sections below are retained as historical construction records; the final independent section supersedes their then-current readiness and spectral counts.

## Job, authorization and reference versions

The unchanged card selects JP2020020948A, Numerical Example 1. Original PDF/card bytes remain included. The historical construction was pinned to 53470da5a5cbda1807d1e523fbc71963e5a1adc7. CHAT-1.0 controls evidence handling; actual current-main specifications control schema and geometry.

The user explicitly approved the named common 49.0mm front-doublet inferred aperture reconstruction and per-lens gapSagFrac 0.95 in a direct affirmative response. This is a narrowly scoped aperture/policy treatment. No source R/d/nd/vd, native f-number, stop position, zoom/focus state, scale, physical plate or other threshold was changed. No additional waiver is implied. The independently tested proposal has SHA-25620782f7642ca0be536747f740ebaac4cbdd2baa89000e3d8186a1d2c92c7949b.

## Extraction and conventions

Fresh author transcription used original PDF pages24–26 (printed23–25), front page2 and Figure1 at PDF48/printed47. Paragraphs109–116 establish object-to-image ordering, radii, millimetres and native d-line587.56nm. All 45 source surfaces are retained, including the source 25 air stop. The flat rear face ofL3 is source 5, not a filter plate. There are 25 glass elements, six cemented doublets,19 air-separated groups and six functional zoom groups. No asphere or physical plate is published in the selected example. Eight examples appear in the original; the inherited “of five” selection phrase was corrected without changing Example1.

All nine published spacing states are retained at wide/middle/tele and infinity/13m/2.6m. The source's shooting-distance reference plane is not expressly named. All six finite configurations numerically support object-to-image distance; first-vertex interpretation gives materially larger defocus. FocusPositions[0,.2,1] follows the supported image-reference interpretation. No finiteConjugates certification or extrapolation to the production wide-end0.6m MFD is made. Continuous interpolation is an application approximation, not additional published cam geometry.

## Preserved initial failures and reopened treatment

The original blocked Stage 2 ZIP is preserved unchanged as Sigma60600mmf4563DGOSHSM_stage2_blocked.zip, SHA-2560decdd55c11a8554771c6426d852448912e4e9c7bd7aed2cc263662f9719b85d. Its mandatory edge/gap failures, raw aperture diagnostics and native-aperture lower-bound proof remain in evidence.priorBlockedStage2 and evidence.stage2Diagnostics. They are historical failed observations, not silently converted to passes.

At tele infinity, native f/6.50 requires entrance-pupil radius 44.443907127mm. Exact source rays reach surfaces16/17 at14.466344247/14.484054808mm. Default gapSagFrac 0.90 permits shared radius only14.263045489mm. This conflict remains a FAIL comparison. Source precision does not explain it: the zero-margin required fraction is0.926340376, with local first-order rounding estimate±0.002795649 including the f-number. At that lower-bound radius physical air remains positive0.308957926mm; the original conflict concerns the unused-clearance reserve, not physical overlap at the minimum ray radius.

The approved rounded radius 14.6mm at surfaces16/17 consumes3.958996525mm of the unchanged4.1944mm axial gap. Required fraction0.943876723 is below the approved0.95; positive physical clearance is0.235403475mm. Every other checked gap needs at most0.895733717, below0.90. No hidden source-spacing repair occurred.

The first cemented component now has a common 49.0mm clear rim, consistent with Figure1's shared-rim architecture and below L2's zero-edge radius 49.265173003mm. At49mm its L1/L2 edges are7.760392889/0.114488279mm. These are inferred optical clear apertures, not manufacturer dimensions or a manufacturing tolerance qualification. Other changes follow the complete approved SD ledger in evidence. The final actual profile is not the physically invalid initial Figure1-scaled estimate.

ApertureMarketing/Design were corrected from arrays to scalar4.5/4.48, as the current type contract requires. NominalFno[4.48,5.55,6.50], variable source ranges, marketing ranges and all numerical optical source fields remain unchanged.

## Glass review and actual runtime resolution

All 18 distinct d-line coordinates were searched over the full primary HOYA20260707 current+obsolete and OHARA260701 all-products catalogs. Relevant rows, competing candidates, residuals and coefficients are preserved for portable catalog replay. The names identify coordinate-compatible equivalents only. Supplier/melt identity and exhaustive cross-vendor uniqueness are not established. OHARA S-prefixes are preserved. Schott, Hikari, CDGM and Sumita were not audited.

Exact pinned runtime resolution is separately recorded:23 of 25 elements use catalog dispersion, while L15(BACD5) andL21(BACD16) fall back to Abbe. Catalog identities/aliases and actual C/d/F/g channel values are retained in the runtime result. A successful manufacturer-catalog coefficient match is not the same as an application-resolver match. No catalog was edited and no synthetic spectral fields were added. No APO-performance claim is made.

## Numerical verification and mandatory construction gate

Separate explicit matrix and reduced-angle recurrence calculations agree at all nine source states, with analytic thin-lens and determinant controls. Native infinity EFL is62.0281724/183.6417352/577.7707926mm; track is307.8858/364.3936/407.8801mm. The telephoto TL/EFL is0.70595486. The printed-only tele EFL and small BFD mismatch observations remain visible. Local source-cell half-last-place sensitivity supports their precision-aware disposition, without changing any source value or arbitrarily widening tolerances.

Parsed final .data.ts drives implemented-state first-order quantities, element/group/cemented powers, Petzval, group positions, all twelve conditions, aperture calibration and geometry. Parser negative fixtures reject duplicate keys, arithmetic, trailing code and nonfinite values. An intentional source-index mutation is detected. Current scalar metadata types, exact source mappings and the approved full SD profile are checked explicitly.

All 25 combinations of zoomT[0,.25,.5,.75,1] and focusT[0,.1,.2,.6,1] pass edge thickness, actual rim slope, shared-band gap clearance under the scoped treatment and native prepared-state rendering with zero hidden trim. All 192 interior physical axial-pupil samples plus16 near-rim samples and the chief pass at each state. Every source-image-height chief at21.63mm passes. These finite samples are not proof over a continuum.

Actual pinned raw/UI and format-aware off-axis fans, tracking both on/off, have no first clip inside a cemented interface over those25 configurations.25 edge/iris clips remain in the diagnostics. Upstream UI code is preserved in the source bundle: currentEPSD is iris radius divided by current front-group magnification, while focus tracking adds h×conjugateK. This can oversample the finite physical pupil. Such UI clips are disclosed, not used to shrink the source aperture or enlarge glass into overlap.

The full-source-field geometric sampling remains vignetted:111/192 at each wide source state;167/169/175 at middle infinity/13m/2.6m;126/130/142 at tele. These are sample counts, not measured transmission or guaranteed area integrals. At 60% source image height, wide/middle pass192/192; tele passes161/167/188. No full-corner illumination claim is made.

Finite source graph F labels4.48/4.46/4.37,5.55/5.43/5.01,6.50/6.48/6.45 are preserved. Actual fixed-iris physical image-cone calculations do not reproduce every label; raw residuals remain as diagnostic FAIL comparisons with an explicit aperture-definition limitation. The labels are not repurposed as a physical iris schedule. No exact reproduction of published aberration curves is claimed.

## Genuine application checks and limits

The portable bundle contains unchanged pinned module text/hashes. Node24 executes the actual raw constructor/validator, dispersion resolver, state preparation, exact surface tracer, field/default fan functions, native element-shape and render diagnostic functions. The loader resolves repository .js imports to the pinned .ts strings and uses Node's built-in TypeScript transform. No module code is patched or replaced by stubs. Native SVG paths were freshly rendered via MuPDF and visually inspected at wide infinity, tele infinity and tele near, with no crossing or missing element seen.

This is targeted actual-module execution, not a full React application or integration build. Full static TypeScript compilation, Prettier, full-app rendering and repository integration/build remain NOT_RUN requiredAt integration. No npm installation was pursued. 

## Independence and current disposition

An independent reviewer froze Pass A from source before seeing the author's candidate. Subsequent reviewer proposal and diagnostic code were disclosed to this author, and reuse is explicitly acknowledged. This author does not claim a new blind review. Final Stage 4 reconciliation must evaluate these exact final bytes separately.

This Stage 2 revision earns READY_FOR_ANALYSIS only after the final verifier, clean extraction and exact replay pass and its checkpoint is frozen. Stage 3 authoring had not started at the initial construction checkpoint. INTEGRATION_PENDING remains separate.

## Quantitative-claim map

- Counts, metadata, source states/conventions: evidence.rawPrescription/conventions/productCorrelation and results.facts.
- Source EFL/BFD/track/cardinals, sensitivity and finite-conjugate evidence: results.sourceModel.states and comparisons.
- Parsed candidate powers, Petzval, movements and conditions: results.implementedModel elements/groups/doublets/Petzval/movement/conditions.
- Approved radius, unchanged default conflict, physical gap: results.implementedModel.apertureGeometryLowerBound; original failed branch: evidence.priorBlockedStage2.
- All-state geometry: results.implementedModel.geometry.
- Actual source-field pupils, clipping counts, default-fan witnesses, native paths and dispersion channels: results.implementedModel.actualRuntime.
- Manufacturer/catalog sources: evidence.sources, productCorrelation and glassEvidence.

## Portable replay

Dependencies: Python3.10+ standard library and Node24.19.0 (or a compatible Node24 with registerHooks and stripTypeScriptTypes). Replay requires no network, installed npm package, repository checkout or outside per-lens file. Exact source modules are bundled in runtime-modules.json, verified by SHA-256 before loading. No nested archive is used.

```sh
python Sigma60600mmf4563DGOSHSM.verify.py --package-dir . --output ../replayed.json
```

The output must be outside the package. Expected exit0 and READY_FOR_ANALYSIS at this checkpoint. The Python program invokes the actual pinned Node replay and consolidates raw observations. The historical blocked archive still reproduces its original exit1. New successful construction does not erase that earlier result.


### Derived-quantity replay completion

The verifier additionally solves the source L2 zero-edge radius and records the source d38 focus increments explicitly, so the analysis's derived geometry and movement numerics replay directly. This changed only verification coverage, not data, evidence, runtime code or inferred apertures. A replacement Stage2 checkpoint was regenerated before completing the final analysis gate.


## Stage 3 analysis and final author disposition

The analysis was authored only after the construction checkpoint and its exact clean replay passed. Its substantive data and runtime-module bytes remained unchanged throughout. The verifier was extended to make the already supported zero-edge radius and focus-gap differences explicit replay outputs; the construction gate was rerun and a replacement checkpoint frozen before final analysis acceptance. No optical parameter or glass field was changed for prose agreement.

The final article follows the current analysis specification: patent metadata and identification, optical architecture, all25 elements with native coordinates/catalog confidence/standalone power, glass palette, focus, all12 conditions, stabilization, inferred apertures and model limits, and usable primary-source citations. It contains no readiness badge, internal-process narrative or claimed production confirmation.

Manual prose/citation review was performed against the original source locators, final parsed data and executed results. Element roles are limited to source-stated group membership/motion or plainly identified power relationships. A specific aberration correction is not assigned merely from an index, glass name or power sign. Manufacturer specifications remain distinct from patent quantities. Partial-dispersion/APO performance, measured illumination, full-corner pupil coverage and factory SD identity are not claimed.

### Complete analysis quantitative-claim map

| Analysis section/claim | Executed fact/result | Governing input |
|---|---|---|
| Identity,25/19 count,six cemented components,all-spherical,no plates | facts; rawPrescription structure; literal-source-prescription-mapping | Original PDF/card and final .data.ts |
| Marketed60–600,f4.5–6.3,0.6–2.6m,mounts,FLD/SLD and2018 context | evidence.productCorrelation and cited primary Sigma sources | Manufacturer page/history, not optical calculation |
| Native infinity EFL/BFD/track and0.705955 telephoto ratio | sourceModel.states; implementedModel.states; implementedModel.conditions[6] | Final parsed prescription, source-state mappings checked |
| Group focal-length table | implementedModel.groups | Final parsed surface slices |
| All25 standalone element focal lengths and displayed coordinates | implementedModel.elements; analysis-element-* checks | Final parsed element/surface data |
| Six cemented net focal lengths | implementedModel.doublets | Final parsed cemented components |
| Catalog coordinates and equivalence caveats | sourceModel.catalogReplay; glassEvidence | Primary HOYA/OHARA coefficients retained in evidence |
| Actual23/25 catalog resolution; L15/L21 Abbe | actualRuntime.variants[0].dispersion; facts.runtimeGlassResolution | Actual pinned runtime dispersion cascade |
| Zoom directions,G3 fixed,source-gap reversals | implementedModel.movement; parsed var vectors | All nine published states |
| G6 focus-gap movement table | implementedModel.focusGap38IncrementsMm and data.var['38'] | Final source spacing vectors |
| Near EFL values61.023280/166.020666/319.703265 | sourceModel.states and mapped implemented states | All three2.6m source configurations |
| All12 inequalities and subgroup magnifications | implementedModel.conditions; condition-* checks | Parsed groups, full tele/wide matrices and source bounds |
| Front49mm common rim,edge thicknesses,zero-edge49.265173 | implementedModel.commonBlankEdges/commonBlankZeroEdgeRadiusMm | Unchanged source R/d; explicitly approved inferred radius |
| Gap16→17 fraction0.943877,clearance0.235403mm,only gap above.90 | apertureGeometryLowerBound.approvedRoundedRadius; geometry; only-approved-gap-* | Final14.6mm boundaries and approved.95 |
| Three inferred iris/entrance radii | implementedModel.apertureCalibration | Exact native f-number calibration; not independent diameter evidence |
|25-state native geometry/render and full axial sampling | actualRuntime.checks and actualRuntime.variants[0].states | Exact bundled pinned modules;209 axial samples per state including chief |
| Source-image-height chiefs and full/60% field counts | actualRuntime.summary.sourceStates; analysis-vignetting-* | Actual source-field physical-pupil ray sampling |
| Finite-focus UI oversampling and retained clips | actualRuntime source-state/ui witnesses; bundled upstream hooks | Actual default ray launch semantics; not physical-pupil relabeling |
| Finite graph F labels and tele-near6.312944 image cone | rawPrescription.finiteGraphFLabels; graph-F-label-* comparisons; actualRuntime.summary | Source graphs versus explicitly defined physical image-cone calculation |

Numerical/header/section/disclosure/citation-presence checks supplement this manual interpretive review; string matching alone does not validate optical explanations. All final computed quantities are supported by the packaged verifier or actual bundled modules. Raw earlier failures and current diagnostic graph-label differences remain visible.

### Final author package

READY_FOR_AUDIT is earned for the current exact bytes after a clean-extraction replay. This is not independent Stage4 approval, integration or publication. The independent reviewer must reconcile the final candidate separately. INTEGRATION_PENDING remains in force.

Replay dependencies and command are the same as above. For this Stage3 package, expected exit is0 and gate isREADY_FOR_AUDIT. The portable verifier parses the actual .data.ts, executes unchanged bundled current-main modules without network access, regenerates all numerical/geometry/runtime results and checks the analysis. Final runtime output is written to temporary storage outside the package; the requested consolidated replay output must also be outside the package.


## Final Stage4 source-first reconciliation

### Identity, independence and scope

The independent source-only baseline was frozen on2026-10-04 at18:23:08UTC before candidate/author exposure. Its fingerprint is6c56e5d5733177e53b51b42f824a85abd6deb878551791aec3193238682f6040. Original frozen evidence, program, results, audit and manifest are retained byte-for-byte as UTF-8 source records inside evidence.independentPass.frozenFiles. Their hashes and frozen inventory fingerprint are checked before the unchanged original program is executed in isolated temporary storage. The exact original patent/card are reused only after matching their frozen hashes.

The exposure disclosure remains unchanged: the four-field card carried no numerical assertions; shared patent pages and initial page location work exposed adjacent-example fragments/figures. None supplied numerical seeds. No author model, qualifications, queue, calculations or other lens analysis was opened before freezing. Later author/reviewer sharing of the reopened native runtime harness is explicitly disclosed; it is not falsely described as a second blind implementation.

Original incoming Stage3 archive SHA256:2d6820a96bef4f6a67344ee0551759290fe9f29822eb490b827ec3770fe7f524. Its data hash was78085deeca324a768272769ecbbe9a6609d60fa386190844ffa86b121692a3bd and analysis hash4d7c407b6cfefbaaa721a8514526e2aeafd85a49f5230c9b17f50fff29bc03a0. The author's construction checkpoint was44c1700ec3f4c4010fac3b7df8fdf410f4d07b8225b9b293eb2615907916a962, frozen before final analysis acceptance. These are historical identities, not approval of different final bytes.

### Exact approval and unchanged optical source

The verified user reply was “yes” to the explicit proposal for a shared49.0mm front cemented clear rim and95% gap-intrusion limit, with intact source prescription/full on-axis aperture, no hidden trim and explicit peripheral vignetting. The exact question, reply and identifiers are retained in evidence.approvedTreatment. No additional geometry, aperture, plate, stop, scaling or focus exception has been adopted.

The final SD vector equals the approved complete profile. The first component's49.0mm radius is below the49.265173mm zero-edge bound and preserves the native44.443907mm tele axial pupil. The selected14.6mm boundaries at16/17 need0.943876723 intrusion fraction and retain0.235403475mm physical air with the approved0.95 allowance. Every other checked gap satisfies0.90. The original default-policy failure remains a numerical FAIL observation and the original blocked data text/hash remains in evidence.priorBlockedStage2.

All45 source entries, all nine source zoom/focus states, original R/d/nd/vd, scale and stop position were independently reconciled. Final parsed values were recomputed with the pre-exposure angle-coordinate ABCD and reduced-angle sequential functions. Their maximum disagreement was below5e-13; no marketing normalization or source repair occurred. All25 standalone powers, eight group/subgroup powers, six cemented components, per-surface Petzval, cardinal/pupil references, movements and twelve conditions remain supported. Infinity EFLs remain62.028172399,183.641735204,577.770792647mm.

### Material spectral correction, with history preserved

The original author label “PCD51 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)” resolved to M-PCD51 in the pinned runtime. That curve gives L13 G index1.592013745752 instead of source1.59349. This is materially different: at tele infinity the assembled G-channel EFL/BFD became581.639675741/99.757651174mm, versus source-reference577.770792647/98.688834105mm. Compatibility-window acceptance is not spectral fidelity.

[Superseded 2026-10-13: the repository catalog now has a HOYA PCD51 row (1.59349 / 67.00), so the label is PCD51 again and L13 resolves to it; this paragraph and the next are history.] The final L13 label is “Unmatched (runtime lookup disabled; HOYA PCD51 coordinate equivalent)”. This intentionally selects source-nd/vd Abbe fallback, while preserving the independently verified HOYA PCD51 manufacturer-catalog match in evidence. No source coordinate or new spectral index is authored, and no engine/catalog source is modified. Exact catalog line-index enrichment was evaluated as an alternative but was not adopted.

The corrected assembled G-channel tele EFL/BFD are577.718168648/98.670483289mm. The remaining G-minus-source residuals,−0.052623999/−0.018350816mm, come from the retained rounded catalog/proxy channel representations elsewhere; they are not certified exact-source spectra. The source-reference geometry/iris/rays are unchanged. Final quality is22 catalog-resolved elements plus3 Abbe fallbacks: L13,L15,L21 [superseded 2026-10-13: all 25 now resolve]. The historical23+2 outcome and false-alias numerical results remain explicitly preserved and are also regenerated as a diagnostic branch by the actual-module replay.

The corrected G-channel source/intermediate sweep covers25 states, on-axis and format-aware default samples, with focus tracking both on/off. No corrected first clip occurs inside a cemented interface. External-rim/iris clips remain visible. This does not claim that every spectral ray is transmitted or that Abbe-only material reproduces anomalous partial dispersion.

### Other corrections

- Blank lines between Markdown table rows were removed, restoring actual contiguous GFM tables.
- Glass-table nd/νd columns now explicitly retain patent coordinates; catalog residual examples prevent misleading exact-catalog claims.
- The data header is readable and accurately states the final L13/L15/L21 fallback behavior.
- The Python diagnostic status TRACED_WITHOUT_CLIPPING was renamed TRACED_CLIPPING_NOT_ENFORCED. That branch intentionally ignores clipping and records rim excesses; it is not a transmission pass. No numerical trace result was changed by the label correction.
- Unneeded private queue/account discovery metadata was removed from the final audit/manifest. Technical authorization scope, source identity and hash evidence remain.

### Primary sources and interpretive review

Original rendered source tables, definitions, component descriptions, all selected figures, finite graph labels and the original Japanese front page were reviewed. Sigma's official product page and Ohsone's development history were freshly reopened:25/19 construction, DSLR/full-frame designation, SA/EF/F mount family, three FLD plus one SLD, HSM/OS,0.6–2.6m marketed focusing range and Photokina2018 context support the limited architectural correlation. No exact factory prescription confirmation is claimed.

HOYA's July2026 AGF and OHARA's July2026 catalog were independently checked; fresh official downloads matched the recorded primary byte hashes. All selected coordinate/coefficient excerpts agree with those primary data. Other vendor catalogs were not independently exhaustively searched, so no exclusive supplier/melt claim is made.

The full analysis was manually checked against source and final parsed values. Element narratives distinguish standalone power, cemented net power and in-situ group functions; shape orientations, focus/zoom/IS assignments and every displayed number were reconciled. The primary-source citations support the relevant claims. The article remains third-person, privacy-clean and free of readiness/process badges. No full-illumination, APO, measured-production-vignetting or exact aberration-curve claim is present.

### Applicable final checks

Actual unchanged pinned Node modules execute the raw constructor/validator, resolver, prepared-state geometry, exact tracing, upstream field/pupil/focus selectors, native SVG shapes and trim diagnostics. All78 bundled module hashes match independently retained pinned bytes. Python-only stubs are not represented as application tests. Static TypeScript compilation, Prettier, full React rendering and repository integration/build remain NOT_RUN requiredAt integration; they are not substitutes for required chat checks.

All25 state samples preserve the source-calibrated physical axial pupil (192 interior +16 near-rim +chief rays), source-image-height chiefs and zero hidden native render trim. The default off-axis fans have no first clip inside cemented glass; ordinary edge/iris vignetting is retained, including the separately disclosed UI finite-pupil oversampling. Source corner counts remain111/192 at wide;167/169/175 at middle;126/130/142 at tele for infinity/13m/2.6m. Counts are discrete geometric samples, not full-pupil illumination or photometric transmission.

The native SVG artifact was freshly rasterized with Inkscape and visually inspected at wide infinity, tele infinity and tele near. No crossing or missing element was observed. Finite source graph F labels remain unresolved under the modeled physical-cone definition; diagnostic mismatches are preserved rather than silently repaired or converted into a physical iris schedule.

### Quantitative-claim map amendments and final gate

The historical claim map above remains valid for unchanged source optics. Its runtime spectrum row is superseded by results.facts.runtimeGlassResolution and implementedModel.actualRuntime.spectralAliasCorrection:22 catalog +3 Abbe, with actual current and historical G-channel results. Source/candidate independence maps to results.independentBaseline and the immutable evidence.independentPass bundle. Final table/header/privacy corrections map to independentPass.corrections.

All mandatory applicable Stage4 checks pass for the final revisions. READY_FOR_BATCH is earned only together with the final manifest's exact membership/hashes and successful clean-extraction replay. It means pre-integration readiness under the specifically approved inferred-aperture treatment and disclosed spectral/vignetting limits. INTEGRATION_PENDING remains separate. No Git, corpus/build, integration or publication action occurred.

Final command: python Sigma60600mmf4563DGOSHSM.verify.py --package-dir <extracted-directory> --output <outside-package-results.json>. Dependencies remain Python standard library plus Node24 with registerHooks/stripTypeScriptTypes. Frozen independent source code and actual pinned runtime modules are included; no network or hidden per-lens file is needed. Expected exit0 and READY_FOR_BATCH. The output must not overwrite packaged results.


## Current-pin replay and contract impact

All 250 files of the supplied current-main reference snapshot were independently rehashed, including their Git blob identities, before use. Its manifest SHA256 is 125799312b757368f33b04ec5bfbe3f8299f3e750d3078d6e1c56c07c75c34f1. The four changed existing controlling documents are AGENTS.md, LENS_DATA_SPEC.md, TEMPLATE.data.ts.template and types/optics.ts; the other twelve controls are byte-identical. Current exact controlling texts and the current type/teleconverter contracts are included in the source bundle. The older generic plate shorthand does not override the current specific source-dependent plate rules.

The HSM source has no plates or converter prescription. Surface 5 is the flat rear face of L3; no source filter is omitted or reclassified. The final data bytes are unchanged. One bounded analysis paragraph now discloses the directly observed MTF eligibility limitation; all prior prose remains intact. The approved common 49.0 mm front rim, per-lens gapSagFrac 0.95, source prescription, native aperture, full nine-state focus/zoom schedule, 22 catalog plus three Abbe fallbacks, and all limitations remain intact. No converter compatibility is newly declared.

The complete current pure-optics and type source set is bundled, including the new teleconverterCompatibility dependency shared by the validator and rear-plate code. The changed useLensComputation hook and unchanged useRayTracing selector are retained for inspection: the bare-host branch returns the host before building; current physical stop, current-state entrance pupil and convergence launch semantics are unchanged. The actual current raw constructor/validator, state preparation, native paths, exact rays, dispersion and current support selectors execute anew. Hook inspection is not full React or generated-catalog execution.

The replay compares every original 25-state optical result, all clipping witnesses, native shape paths, source-corner/60%-field pupil samples and both spectral diagnostic branches to the previous executed final result by canonical digest. All native source-reference and green-channel behavior must remain exactly equal for this revision to pass. The original source precision discrepancies, finite graph F-label limitation, inferred distance-reference semantics and peripheral vignetting remain reported rather than reset by the new pin.

[Superseded 2026-10-13: with L13 resolved, broadband MTF is available at infinity; finite focus is still unavailable.] Current MTF support/data-limitation selectors reject broadband C/d/F and photopic MTF at all 25 states because fallback L13 has νd 67 without partial-dispersion data, exceeding the current estimated-dispersion limit of 65. Infinity resolves to the reference wavelength only; every nonzero focus remains unavailable because finiteConjugates is not certified. The first added diagnostic incorrectly expected estimated-broadband eligibility; its raw failed checks and actual observation are retained in evidence.referenceRefresh.initialMTFDiagnostic. Correcting that expectation does not alter source values, spectral data or engine behavior. This tests the current eligibility and warning code only. No MTF curves, spectral certification, full illumination, full React rendering, static compilation, repository build or integration are claimed.

The new final package is sealed only after both direct current-source native execution and clean extracted portable replay pass. Output is written outside the package. Four integration-only checks remain NOT_RUN and INTEGRATION_PENDING (2026-10-13: the lens is now in the repository, where those checks belong to the ordinary pre-commit gate; the dated sections at the end did not run them). The source-only baseline, blocked candidate and prior final identities remain preserved in evidence and local immutable checkpoints.

Two additional current-pin hook/helper source files were retrieved and independently hashed to complete upstream launch provenance; their exact identities are in referenceRefresh.supplementalSourceRecords. The actual public buildLens facade, current entrance-pupil/focus selectors and computeOffAxisTraceGeometry now execute against the current module tree. Every default raw fan is compared to the prior raw-constructor execution, including first clipping witnesses and both focus-tracking modes. This does not execute the React renderer.

## 2026-10-13 — Semi-diameter pass against the patent figure

Scope: `sd` values, the data-file semi-diameter note and the analysis sentences that quote rims. No `R`, `d`, `nd`, stop radius, zoom/focus table, glass label or `gapSagFrac` was changed.

### Source and scale

Source is `patents/JP2020020948A.pdf`, PDF page 48 (printed 47), Figure 1: the cross-section of Numerical Example 1 at the wide end, infinity focus. The sheet holds one panel with zoom-motion arrows; there is no middle or tele panel, so the other stations are checked by ray trace only. The figure is a 1321 × 770 px bilevel image at 399 dpi and was measured on a 400 dpi render.

Axial scale: the surface-1 vertex is at x = 426.5 px and the image plane at x = 1584.5 px, 1158 px for the 307.8858 mm wide-end track, 0.26588 mm/px. The surface-1 to surface-45 span gives 0.26601 mm/px, and every identifiable vertex crossing lands within one pixel of the prescription.

Vertical scale: the sheet draws the section taller than its axial scale. Fitting the drawn arcs to the prescription radii gives a vertical factor of 1.128 (surface 1), 1.132 (2), 1.132 (4), 1.140 (10), 1.132 (16 and 17), 1.136 (30) and 1.140 (43), each with 0.3 px residual. The inner ends of the stop mark sit 66.0 px from the axis against the 15.494 mm iris, 1.133. Read without the factor, the front component would be 53.97 mm tall, above L2's 49.265 mm zero-edge height, and L3 51.85 mm, above its 49.370 mm; with it the drawn L2 and L3 edge thicknesses (about 3 and 6 px) match the prescription. The adopted factor is 1.134, so heights are 0.2345 mm/px. Lines are 2 px wide; each rim is the mean of the top and bottom readings and is good to about one pixel, 0.25 mm. That is coarser than 0.15 mm, so only steps of two pixels or more were treated as real.

The earlier profile tracked the uncorrected reading: 113.5, 76.5, 71, 79.5 and 69.5 px at 0.266 mm/px are 30.2, 20.3, 18.9, 21.1 and 18.5 mm, against the stored 30.0, 20.0, 19.0, 21.0 and 18.5 mm. That is why most rims behind G1 stood 11 to 15 % above the drawing's true proportion.

### Before and after

| Surfaces | Element | Before (mm) | Figure, top/bottom px | Figure (mm) | After (mm) | Basis |
|---|---|---:|---:|---:|---:|---|
| 1–3 | L1–L2 | 49.0 | 203/203 | 47.60 | 49.0 | retained: 2.9 % from the figure and the approved common rim |
| 4–5 | L3 | 49.0 | 195/195 | 45.72 | 47.1 | figure draws L3 8 px (1.9 mm) shorter than the front component; step restored |
| 6–7 | L4, L4–L5 joint | 30.0 | 113/114 | 26.61 | 26.6 | figure |
| 8 | L5 rear | 22.3 | curve ends on the edge flat | 22.2 ± 0.4 | 22.3 | retained: agrees |
| 9–10 | L6 | 27.0 | 100/102 | 23.68 | 23.7 | figure; square-cut rim |
| 11–12 | L7 | 20.0 | 76/77 | 17.94 | 17.9 | figure |
| 13–14 | L8 | 19.0 | 70/72 | 16.65 | 16.6 | figure |
| 15 | L9 front | 18.5 | 67/69 | 15.94 | 15.9 | figure |
| 16–17 | L9 rear, L10 front | 14.6 | drawn to the rims | 15.9 / 16.5 | 14.6 | retained: constrained pair |
| 18–19 | L10–L11 | 18.5 | 70/71 | 16.53 | 16.5 | figure |
| 20–21 | L12 | 21.0 | 79/80 | 18.64 | 18.6 | figure |
| 22–24 | L13–L14 | 20.7 / 20.7 / 21.0 | 78/79 | 18.41 | 18.4 | figure; one common rim |
| 26–27 | L15 | 18.5 | 70/72 | 16.65 | 16.6 | figure |
| 28–29 | L16 | 18.5 | 69/70 | 16.30 | 16.3 | figure; square-cut rim |
| 30–32 | L17–L18 | 17.5 / 17.5 / 18.0 | 67/68 | 15.83 | 15.8 | figure; one common rim |
| 33–34 | L19 | 17.0 | 65/65 | 15.24 | 15.2 | figure |
| 35–36 | L20 | 18.5 | 69/70 | 16.30 | 16.3 | figure |
| 37–38 | L21 | 18.5 | 69/70 | 16.30 | 16.3 | figure |
| 39–40 | L22 | 16.5 | 61/61 | 14.30 | 14.3 | figure |
| 41–42 | L23 | 16.0 | 59/60 | 13.95 | 14.0 | figure |
| 43–45 | L24–L25 | 17.5 / 17.3 / 17.3 | 64/65 | 15.12 | 15.1 | figure; one common rim |

Thirty-eight surface values changed; six were retained (1–3, 8, 16–17) and the stop is untouched.

### Values retained and choices made

- Surfaces 1–3 stay at the approved 49.0 mm. The corrected figure reads 47.6 mm, a 2.9 % difference that is inside the band this pass does not repaint. L3 was equal to the front component in the file and is clearly shorter in the drawing, so it takes the drawn 1.9 mm step below 49.0 rather than its own 45.7 mm reading; its edge is 0.944 mm.
- Surface 8 stays at 22.3 mm. The figure ends that curve on L5's flat edge at 22.2 ± 0.4 mm, and the two faces of the 8→9 gap meet at 23.52 mm, within a pixel of L6's drawn rim.
- Surfaces 16–17 stay at 14.6 mm. The figure draws both curves out to the element rims, where they cross; the faces meet at 15.02 mm, the tele axial ray needs 14.47 / 14.48 mm, and 0.95 of the gap admits at most 14.64 mm. Nothing here needs a different `gapSagFrac`: 16→17 uses 0.9439 and the next-highest gap, 8→9, uses 0.8957.
- L6, L16 and L24 are drawn square-cut with a short flat on the concave face, where the curve stops at 21.5, 14.4 ± 0.35 and 13.2 ± 0.35 mm (surfaces 10, 29, 43). The renderer joins unequal face heights with an inclined edge, so both faces carry the rim height and the silhouette stays square. This also keeps surface 29 above the 14.61 mm the on-axis ray reaches there at tele, 2.6 m.
- L5's rear, L9's rear and L10's front still render with an inclined edge between unequal heights where the figure draws a flat or crossing faces. Those heights are fixed by the gap geometry above.

### Clearance, as numbers

- The validator reports no errors, the image-circle floor lists nothing undersized, and the traced corner chief ray reaches 21.65 of 21.65 mm at 19.7°, 6.7° and 2.1°.
- An exact meridional trace at all nine published zoom/focus states, with the iris held at the infinity radius of each station (15.494 / 15.490 / 15.503 mm) and a finite axial object for 13 m and 2.6 m, clips no on-axis ray and blocks no chief ray to 21.63 mm. The smallest on-axis margins are 0.12 and 0.13 mm at 16–17 (unchanged), then 1.07 mm at surface 33; from G3 to G5 they run 1.07 to 2.35 mm.
- On a grid of 17 zoom positions by five focus positions the on-axis marginal ray clears every rim and the renderer trims nothing. The corner chief ray clears every rim at nine zoom positions by five focus positions; its smallest margin is 1.15 mm at surface 8, wide end, 2.6 m.
- Edge thickness of the positive elements is 0.861 mm (L13) to 2.321 mm (L20), with L2 at the unchanged 0.114 mm.
- Engine values before and after: wide half-field 19.655° and 19.655°; middle 8.579° and 8.579°; tele 3.524° and 3.480°, where surface 4 replaces surface 1 as the paraxial limiter, against a patent half-field of 2.12°. Wide-open f-numbers 4.48 / 5.55 / 6.50 are unchanged, and the stated beam is within 3 % at all three stations.
- Off-axis vignetting increased, as the drawing implies. The corner pupil counts in the analysis were recomputed with a local 3D sampler (six equal-area rings by 32 azimuths, disk scaled to the axial pupil). Run on the earlier rims it returned 111/111/111, 167/171/175 and 126/131/143 at the corner and 192 ×6, 159/167/189 at 60 %, against the earlier table's 111/111/111, 167/169/175, 126/130/142 and 192 ×6, 161/167/188: thirteen of eighteen entries exact, the rest within two samples. On the new rims it gives 85/85/85, 149/153/157 and 107/113/119 at the corner and 189/189/189, 192/192/192 and 156/165/176 at 60 %. First clips fall on surfaces 1, 4, 6, 8, 33–37 and 39, none on a cemented interface.

### Analysis text

No surface is aspheric, so no departure figures move. The analysis sentences quoting the old L13, L17–L18 and L24–L25 rims as edge-limited now give the figure values and their edge thicknesses (0.861, 1.323 and 1.112 mm), the apertures section describes the corrected figure reading, and the vignetting table carries the new counts.

### Live check and limits

The local page was viewed at 62.03, 183.64 and 577.73 mm, at infinity and at closest focus. No elements overlap in any of the six states and the on-axis fan passes. An overlay of the rendered outlines on Figure 1, compressed to true proportion, puts G2 to G6 on the drawn lines to about a line width, apart from the three inclined edges noted above; the front component and L3 stand 1.4 mm above the drawing, as retained.

Manufacturer diagram: none was supplied or viewed in this pass. The earlier sections record only the product-page text comparison (25 elements in 19 groups, three FLD and one SLD element), which the example matches in count and in the positions of its 1.43700 / 95.10 elements (L3, L17, L23) and its 1.49700 / 81.61 element (L2). The patent figure governs the proportions.

Limits: one pixel is 0.23 mm, so 0.1 mm rounding is finer than the reading; the stretch factor carries about ±0.006, or 0.6 % on every height; the finite-conjugate pupil counts depend on the fixed-iris assumption already stated in the analysis.

## 2026-10-13 — Glass label, special-glass tags, metadata and wording pass

Scope: text and metadata only. No `R`, `d`, `nd`, `vd`, `sd`, stop radius, zoom/focus table or `gapSagFrac` was changed.

### Glass label

L13's `glass` is "PCD51 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed)" again. The earlier "runtime lookup disabled" label was written against a catalog snapshot that held only the moldable M-PCD51; the repository catalog now has a HOYA PCD51 row at 1.59349 / 67.00, which matches the patent coordinate with no residual. All 25 elements now resolve to catalog dispersion data, 25 of 25, where the package recorded 22 plus three nd/νd fallbacks (L13, L15, L21). The largest residuals are −0.00001 in nd for TAFD32 (L1, L5, L6, L19) and +0.01 in νd for BACD16 (L21). FD60-W, NBFD15-W and FDS90-SG resolve through FD60, NBFD15 and FDS90. With no estimated glass left, broadband C/d/F and photopic MTF are available at infinity; finite focus is still unavailable because no finite-conjugate record is authored.

### Special-glass tags and maker data

`apd: "inferred"` with a one-sentence `apdNote` was added to L2 (FCD1) and to L3, L17 and L23 (FCD100). The basis is Sigma's product page and construction diagram at sigma-global.com/en/lenses/s018_60_600_45_63/, viewed by the batch coordinator on 2026-10-13 and not viewed in this pass: 25 elements in 19 groups, one SLD element at position 2 and three FLD elements at positions 3, 17 and 23. That is a one-to-one match with the example's 1.49700 / 81.61 element and its three 1.43700 / 95.10 elements. The resolved catalog curves give P_g,F 0.5377 and ΔPgF +0.0312 for FCD1, and 0.5336 and +0.0498 for FCD100, against the Schott normal line. The patent does not designate these elements, so the tag is "inferred".

From the same page: nine rounded diaphragm blades and a minimum aperture of F22–32, entered as `apertureBlades: 9`, `maxFstop: 22` and a 22 appended to `fstopSeries`.

### Name and patent fields

Set by the coordinator before this pass and left as they are: `name` "SIGMA 60-600mm f/4.5-6.3 DG OS HSM | Sports", `subtitle` "JP 2020-020948 A, Numerical Example 1; architectural correlation", `patentNumber` "JP 2020-020948 A", and `specs` with "DESIGN f = 62.03–577.73 mm" and "DESIGN F/4.48–6.50". The front page prints the serial as 2020-20948; the six-digit form is the same number, and the analysis notes the printed form once.

### Wording

- Data file: the header comment is rewritten in plain words with every fact kept, including the 49.0 mm front rim and the 0.95 gap allowance. Both were set with the site owner's agreement during authoring; the public text now gives each value and its basis (49.0 mm sits just under L2's 49.265 mm zero-edge height; the 16–17 gap uses 0.9439 of its 4.1944 mm). All 25 element `role` strings, previously one boilerplate sentence, now name the element's place in its group. `focusDescription` opens with `PUBLISHED:` and states the G6 travel between infinity and 2.6 m: 0.44, 2.39 and 15.90 mm at the three stations.
- Analysis: the title follows the new `name`; the L13, L15 and L21 entries and the glass section say all 25 elements resolve; the MTF paragraph is updated; the maker-diagram match is stated in the identification list, at L2, L3, L17 and L23, and in the glass section; the apertures section is reworded in plain terms (gap allowance, clearance, the viewer's finite-focus ray fans, the patent's chart F-numbers). Words describing how the package was produced or checked were removed. No number was changed except the catalog-resolution counts.
- This log: the L13 lookup paragraphs, the 22-plus-3 count, the MTF paragraph and two pending lines are marked in place; nothing was deleted.

### Model values before and after

Identical before and after: computed EFL 62.0282 / 183.6417 / 577.7708 mm, wide-open f-number 4.48 / 5.55 / 6.50, engine half-field 19.655°, stop radius 15.4938 mm, paraxial BFD 53.5861 / 77.2473 / 98.6888 mm, and all nine focus keyframes. The only engine difference is the aperture-slider limit, 16 to 22. The validator reports no errors.

No open items from this pass. The option of taking surfaces 1–5 from the corrected figure (47.6 and 45.7 mm) is recorded in the section above and rests with the site owner.

## 2026-10-13 — Front-group rims re-read against FIG. 1

The site owner asked for a second, independent reading of surfaces 1–5 before choosing between the 49.0 mm front rim set with his agreement during authoring and the figure's 47.6 mm. The second reading confirms the first, so the figure values are applied. This replaces the 49.0 mm value approved during authoring.

### Previous values, for reverting

Surfaces 1, 2 and 3 were 49.0 mm. Surfaces 4 and 5 were 47.1 mm (set in the semi-diameter pass above; 49.0 mm in the authored package). They are now 47.6, 47.6, 47.6, 45.7 and 45.7 mm. No other surface, the stop and `gapSagFrac` were not touched.

### The two readings

The first reading used a 400 dpi re-render thresholded at mid-grey and took the outermost ink of both halves. The second uses the figure's own 1321 × 770 bilevel bitmap extracted from the PDF at its native 399 dpi, with no resampling or threshold, reads each half of the panel separately, and takes the row where each fitted arc meets the rim instead of the outermost ink. On that bitmap the axis is rows 316–317, the surface-1 vertex is at x = 112.5 and the image plane at x = 1267.5, 0.266568 mm/px (0.266563 from surface 1 to surface 45).

Both columns apply the same vertical correction of 1.134.

| Surface | First reading | Second reading, top / bottom half |
|---|---|---|
| 1 | 203.0 px, 47.60 ± 0.25 mm | 202.0 / 202.0 px, 47.48 ± 0.25 mm |
| 2 | 203.0 px, 47.60 ± 0.25 mm | 202.0 / 202.0 px, 47.48 ± 0.25 mm |
| 3 | 203.0 px, 47.60 ± 0.25 mm | 201.5 / 202.0 px, 47.4 to 47.5 ± 0.25 mm |
| 4 | 195.0 px, 45.72 ± 0.25 mm | 194.0 / 194.0 px, 45.60 ± 0.25 mm |
| 5 | 195.0 px, 45.72 ± 0.25 mm | 194.0 / 194.0 px, 45.60 ± 0.25 mm |

The readings differ by 0.12 mm, half a pixel, which is the resampling of a two-pixel line between the 399 and 400 dpi grids. The error is half a pixel of reading (0.12 mm) plus ±0.006 on the vertical factor (0.25 mm at this height).

Two checks do not depend on the vertical factor at all, because they use positions along the axis. The corner where the surface-1 arc meets the rim sits at x = 134.5 to 135.2, a sag of 5.92 to 6.10 mm, which is a height of 47.2 to 48.0 mm; a 49.0 mm rim would put that corner at x = 136.2. L3's drawn edge is 5.6 ± 0.7 px, 1.49 ± 0.19 mm, which the prescription gives at 45.7 ± 0.5 mm; at 49.0 mm L3's edge would be 0.157 mm, 0.6 px.

One detail is new: L1's rear face leaves the surface-2 arc at about 189 px (44.4 mm) and runs straight up to the rim, a flat, while the arc continues as L2's front face to the knife point it makes with surface 3. The model keeps one height on surface 2.

### The correction, on G1 alone

Fitting only the front-group arcs, each half separately, gives 1.128 / 1.132 for surface 1, 1.130 / 1.132 for surface 2 and 1.132 / 1.134 for surface 4, with 0.27 to 0.33 px residual. An uncorrected scale of 1.000 leaves 1.65 to 2.17 px. The front group alone therefore gives 1.131 ± 0.003 and re-confirms the correction; at 1.131 the second reading would be 47.61 and 45.72 mm. Surface 3 (R = 1000 mm) and the plane surface 5 cannot constrain the factor.

### Cross-checks

- Tele axial beam. The patent's f/6.50 at 577.77 mm is an entrance-pupil radius of 44.44 mm and reaches 44.44 / 43.72 / 43.64 / 43.42 / 43.11 mm at surfaces 1–5. The figure rims clear it by 3.16 mm at surface 1 and 2.28 mm at surface 4. The marketed 600 mm f/6.3 would be a 47.62 mm radius, reaching 47.62 / 46.78 / 46.74 / 46.48 / 46.31 mm: level with the 47.6 mm front rim and 0.78 mm outside L3's 45.7 mm. The earlier 49.0 and 47.1 mm cleared that beam too; the drawing is sized for the patent's own f-number.
- L2's edge reaches zero at 49.265 mm. It is 0.114 mm at 49.0 mm, 0.706 mm at 47.6 mm and 0.748 mm at 47.5 mm. L3's edge is 0.944 mm at 47.1 mm and 1.500 mm at 45.7 mm.
- Tele corner pupil samples at the patent's 21.63 mm image height, same sampler as before, out of 192: 107 / 113 / 119 with the 49.0 and 47.1 mm rims and 101 / 109 / 115 with the figure rims (infinity, 13 m, 2.6 m). At 60 % height: 156 / 165 / 176 and 152 / 161 / 174. The middle station goes from 149 / 153 / 157 to 140 / 140 / 149; the wide station is unchanged at 85.

### Decision and result

The two readings of surfaces 1–3 agree within 0.3 mm and both put the rim below 48.3 mm, so the figure does not draw 49.0 mm and the figure set is applied: 47.6 mm on surfaces 1–3 and 45.7 mm on surfaces 4–5.

After the change the validator reports no errors and no rim clips the on-axis beam or the corner chief ray at any of the nine published states or on the intermediate zoom and focus grid. Traced corner coverage is 21.65 of 21.65 mm at all three stations. `gapSagFrac` is unchanged at 0.95; the largest gap fractions are still 0.9439 (16→17) and 0.8957 (8→9). Wide-open f-numbers are 4.48 / 5.55 / 6.50 as before. The engine's rim-limited half-field estimate is unchanged at the wide end (19.655°) and falls from 8.579° to 8.338° at the middle station and from 3.480° to 3.377° at the tele end, against patent half-fields of 6.66° and 2.12°.

The data-file rim note, the two analysis passages that stated 49.0 mm and the middle and tele rows of the vignetting table were updated to match. The local page was viewed at 62.03 mm and 577.73 mm: no overlap, the on-axis fan passes, and an overlay on Figure 1 now puts the front component and L3 on the drawn lines.

## 2026-10-13 — Second review: diagram, labels and movement

An independent second look at the lens as the local page draws it, against `patents/JP2020020948A.pdf`: Figure 1 (PDF page 48), the Example 1 tables and group descriptions (PDF pages 23–26, ¶0117–0128) and the Example 1 longitudinal aberration plots (Figures 2, 9 and 16 on PDF pages 48–50). One rim changed, four kinds of label changed, and no `R`, `d`, `nd`, `vd`, gap value, stop radius, zoom/focus table, glass label or `gapSagFrac` was touched. Surfaces 1–5 were left as settled in the section above.

### Figure 1 measured again

The figure's own 1321 × 770 bitmap was read with new scratch code, not the first pass's. The optical axis is rows 316–317, the surface-1 vertex is at x = 112.5 and the image plane at x = 1267.5, 0.26657 mm/px. All 44 drawn vertex crossings fall within 0.6 px of the prescription at the wide, infinity state (the stop is drawn as two ticks off the axis, at x = 750–751 against a predicted 750.9), so the panel is Example 1 at the wide end.

Vertical factor. Each arc was followed from its vertex without a model, then fitted for a vertical stretch and a free vertex offset. Surface 1 gives 1.130 (upper half) and 1.133 (lower half), surface 2 gives 1.137 and 1.138, and the weighted mean of the twelve best-conditioned arcs is 1.134 (range 1.116 to 1.142, residual 0.3 px). The first pass's 1.134 stands; heights are 0.2351 mm/px.

Rims. Each rim is the centre of the two-pixel edge line, upper and lower half read separately.

| Element | Surfaces | Upper / lower (px) | Figure (mm) | Stored (mm) |
|---|---|---:|---:|---:|
| L1–L2 | 1–3 | 202 / 202 | 47.5 | 47.6 |
| L3 | 4–5 | 194 / 194 | 45.6 | 45.7 |
| L4–L5 | 6–7 | 113 / 113 | 26.6 | 26.6 |
| L6 | 9–10 | 100 / 101 | 23.6 | 23.7 |
| L7 | 11–12 | 76 / 76 | 17.9 | 17.9 |
| L8 | 13–14 | 70 / 71 | 16.6 | 16.6 |
| L9 | 15 | 67 / 68 | 15.9 | 15.9 |
| L10–L11 | 17–19 | 70 / 70 | 16.5 | 14.6 / 16.5 / 16.5 before this review |
| L12 | 20–21 | 79 / 79 | 18.6 | 18.6 |
| L13–L14 | 22–24 | 78 / 78 | 18.3 | 18.4 |
| L15 | 26–27 | 70 / 71 | 16.6 | 16.6 |
| L16 | 28–29 | 69 / 69 | 16.2 | 16.3 |
| L17–L18 | 30–32 | 67 / 67 | 15.8 | 15.8 |
| L19 | 33–34 | 65 / 65 | 15.3 | 15.2 |
| L20 | 35–36 | 69 / 69 | 16.2 | 16.3 |
| L21 | 37–38 | 69 / 69 | 16.2 | 16.3 |
| L22 | 39–40 | 61 / 61 | 14.3 | 14.3 |
| L23 | 41–42 | 59 / 60 | 14.0 | 14.0 |
| L24–L25 | 43–45 | 64 / 65 | 15.2 | 15.1 |

Every stored rim is within 0.1 mm (under half a pixel) of this reading, so the first pass's heights are kept. The surface-8 curve reaches L5's edge flat between 22.1 and 22.5 mm (stored 22.3), and the inner end of the lower stop tick is 66–67 px, 15.5 to 15.7 mm against the 15.494 mm iris.

### Rim change

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 17 (L10 front) | 14.6 | 16.5 | Figure 1 draws the cemented L10–L11 block square-cut at 70 px, 16.5 mm, on all three faces. With surface 17 at 14.6 mm the page drew the block with a roof-shaped edge 4.8 mm long. |

The validator reports no errors with 17 = 16.5: the cross-gap check is made at the height the two facing surfaces share, still 14.6 mm, where they use 0.943877 of the 4.1944 mm gap and keep 0.2354 mm of air. `gapSagFrac` stays at 0.95 and nothing is trimmed in the drawing. L10's front corner sits at z = 94.99 mm, 0.4 mm on the object side of L9's rear corner (95.39 mm) and 1.9 mm above it; between 14.6 and 15.9 mm of height L9's inclined edge is 0.24 to 2.7 mm clear of L10's front face. The L10 edge is 5.44 mm thick at 16.5 mm.

Three inclined edges were examined against the square blocks the figure draws.

- L5 rear (surface 8 at 26.6 mm, the block height): refused. At L6's 23.7 mm rim the two faces would need 3.282 mm of a 3.232 mm gap, 1.0155 of it; the spheres meet at 23.52 mm. No `gapSagFrac` up to 1 admits it, because the figure's square corner is a flat annulus from 22.3 mm outward, not the sphere. Surface 8 stays at 22.3 mm; 0.95 would admit at most 22.95 mm.
- L9 rear (surface 16 at 15.9 mm) passes on its own, and L10 front (surface 17 at 16.5 mm) passes on its own, each at the present 0.95. Both together are refused: 4.713 mm of a 4.194 mm gap at 15.9 mm, 1.124 of it; the spheres meet at 15.02 mm. Only one of the two can be squared, and the cemented block was chosen because its inclined edge was the longer (4.8 mm against 2.9 mm) and three faces now share one height. L9 keeps its inclined rear edge.

L6, L16 and L24 keep one height on both faces as the first pass set them; taking the concave face down to where the figure's curve ends would trade a corner overshoot of about 1 mm along the axis for an inclined edge across the whole rim.

Clearance is unchanged. A full-pupil skew-ray sweep (a cartesian grid over the whole front aperture, about 40 000 passing rays on axis, at 0, 40, 60, 80 and 100 % of the 21.63 mm image height, three zoom stations, three focus states, iris held at each station's infinity radius) gives identical transmitted counts with surface 17 at 14.6 and at 16.5 mm in all 45 cells; at infinity the corner values are 46.3 %, 71.5 % and 52.4 % of the axial beam. The rays surface 17 used to stop are stopped later by the iris or a rear rim. The analysis table's 192-sample counts are unchanged (85 / 85 / 85, 140 / 140 / 149, 101 / 109 / 115 at the corner). The engine's meridional curve at the wide end is unchanged at 100, 99.0, 100, 100, 97.9, 86.5, 70.8 and 45.8 % from 0° to 19.7°. Half-fields 19.655° / 8.338° / 3.377° and f-numbers 4.48 / 5.55 / 6.50 are the same before and after. No rim clips the on-axis beam or the corner chief ray at infinity, 13 m or 2.6 m; traced corner coverage is 21.65 of 21.65 mm at all three stations and the image-circle check lists nothing.

### Labels changed

| Field | Before | After | Evidence |
|---|---|---|---|
| `diagramLabel`, all 25 elements | absent; the diagram printed 1 … 25 | L1 … L25 | ¶0119–0127 name the elements L1 to L25 (¶0124–0125 misprint L12–L14 as G12–G14). The inspector and the analysis already used L1 … L25. |
| `varLabels` | D5, D10, D19, D32, D38, BF | d5, d10, d19, d32, d38, BF | The patent's variable-spacing table and surface table print the gaps in lower case. "D5" was also the text of the fifth cemented bracket, so one string named two things. |
| `groups` | G1 … G6 | G1, G2, G3, G3a (surfaces 11–14), G3b (15–19), G4, G5, G6 | Figure 1 draws G3a and G3b under G3, ¶0121–0123 describe them and the group table lists both (first surfaces 11 and 15). G3b is the stabilizing subgroup. |
| `cemented`, twelve elements | L1–L2, L4–L5, L10–L11, L13–L14, L17–L18, L24–L25 | D1 … D6 | The inspector badge now carries the same name as the bracket above the pair. This was one of two files in the catalog with D-numbered brackets and a different `cemented` text. |

The cemented brackets keep D1 to D6, the catalog's usual text; the gap labels took the patent's case instead. C1 to C6 is the catalog's second most common bracket text if a wider separation from "d5" is wanted.

### Checked and found correct

- Prescription. All 45 surface rows (R, d, nd, νd) and all 54 variable-gap values match the patent's text layer. Group focal lengths computed from the file are 237.552, −60.923, −246.402, 66.302, 72.871 and −57.898 mm, with G3a 76.823 and G3b −47.402, against the printed 237.55, −60.92, −246.41, 66.30, 72.87, −57.90, 76.82 and −47.40.
- Brackets. G1 = 1–5, G2 = 6–10, G3 = 11–19, G4 = 20–32, G5 = 33–38 and G6 = 39–45 match the group table's first surfaces 1, 6, 11, 20, 33 and 39. D1 = 1–3, D2 = 6–8, D3 = 17–19, D4 = 22–24, D5 = 30–32 and D6 = 43–45 are the six rows with glass on both sides.
- Element types agree with the signs of R and with ¶0119–0127 for all 25 elements, including the plano-convex L3 and the two menisci convex to the image, L18 and L22. The `role` strings are true. The example has no aspheric surface and the file marks none. The stop is patent surface 25, between L14 and L15.
- Tags. The patent names no special glass; ¶0040 only prefers low-dispersion glass for the positive lenses of G1. `apd: "inferred"` on L2, L3, L17 and L23 matches the SLD position 2 and FLD positions 3, 17 and 23 that the batch coordinator read from Sigma's product page and construction diagram on 2026-10-13 (25 elements in 19 groups, nine rounded blades, minimum aperture F22–32, SA / EF / F mounts). No maker image was viewed in this review. The inspector was read for L2, L3, L10, L17, L23 and L25 and shows the stored type, index, focal length, glass, note and role.
- Zoom. `zoomPositions` ascend 62.03, 183.64, 577.73 and every `var` array lists the stations in that order. First surface of each group to the image plane, wide / middle / tele: G1 307.89 / 364.39 / 407.88 mm (toward the object, 99.99 mm); G2 280.16 / 260.08 / 249.88 (toward the image, 30.28 mm); G3 234.71 / 234.71 / 234.71 (fixed); G4 154.46 / 179.68 / 203.80 (toward the object, 49.34 mm); G5 105.36 / 134.67 / 152.65 (toward the object, 47.28 mm); G6 83.47 / 107.13 / 128.56 (toward the object, 45.09 mm). All are monotonic and agree with the arrows under Figure 1 and with ¶0119–0127. The gaps d32 and d38 reverse (10.30 / 6.22 / 12.36 and 2.19 / 7.84 / 4.39 mm) while their groups do not.
- Focus. Index 0 is infinity, then 13 m and 2.6 m, at every station. Only d38 and BF change, by equal and opposite amounts: G6 moves toward the image by 0.08 and 0.44 mm at the wide end, 0.47 and 2.39 mm at the middle and 3.32 and 15.90 mm at the tele end. The traced object-to-image distances are 13 001.9 and 2 599.9 mm at the wide end. The focus slider's far end reads 2.60 m.
- Field behaviour against the patent's plots, infinity focus, at the printed half-fields. Distortion at full field: model −2.49 %, +0.89 % and +1.35 % at wide, middle and tele; the plots read −2.48 %, +0.89 % and +1.34 %. Sagittal and meridional focus at full field: model +0.08 / −0.10 mm, +0.01 / +0.02 mm and −0.29 / −0.62 mm; the plots read +0.07 / about −0.09 mm, within 0.02 mm of zero, and −0.28 / −0.63 mm. One plot pixel is 0.02 mm and 0.05 %.

### The page after the edits

The page was viewed at 62.03, 183.64 and 577.73 mm, at infinity and at closest focus, with both movement overlays at the wide and tele ends. No elements overlap and the on-axis fan passes in all six states. The L10–L11 block is square as drawn; an overlay of the outlines on Figure 1, compressed to true proportion, puts every rim on the drawn lines except the inclined rear edges of L5 and L9. The zoom overlay shows G1, G4, G5 and G6 moving toward the object, G2 toward the image and G3 fixed; the focus overlay shows only G6 moving, toward the image, by 0.44 mm at the wide end and 15.90 mm at the tele end. The gap read-out prints d5, d10, d19, d32, d38 and BF. The distortion tab prints −2.49 %, +0.90 % and +1.36 %.

### Open limitations

- Label row. No element label overlaps another. L15 and L18 sit 0.8 px apart at every station, and at the tele end L10 and L13 (0.8 px) and L11 and L14 (1.2 px) do too, because three label rows are not enough for the six elements between L13 and L18. The L2 label is placed in the second row, whose cap height reaches 3.6 px above the lower rim of the front doublet, so it overprints the rim tip at every station; the numeral 2 sat in the same place before. Both come from the diagram's label layout, not from this file.
- The movement overlay counts the charted rows and now reads "Groups 8", with G3, G3a and G3b as three stationary rows. Removing the two sub-group entries returns it to six.
- L5's and L9's rear edges stay inclined where the figure draws a flat annulus; a flat cannot be expressed with one spherical surface per face.
- The distortion tab names the wide end "pincushion" and the middle and tele stations "barrel". The signs are right and the words are reversed (negative is barrel). The wording comes from the tab component and applies to every lens.

Coordinator follow-up, same day: the parent `G3` bracket (surfaces 11–19) was removed so the third group is bracketed once, as FIG. 1 draws it, by its two subgroups G3a (11–14) and G3b (15–19, the stabiliser). The diagram and the movement overlay now list seven brackets (G1, G2, G3a, G3b, G4, G5, G6) for the patent's six groups. No optical value changed.
