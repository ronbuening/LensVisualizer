# Sigma 18–35mm F1.8 DC HSM | Art: technical dossier

## Job and reference versions

JP2014089365A Numerical Example 1 is controlling. The original 33-page A publication includes the PAJ wrapper; its SHA-256 is 2a4d94bc7fdb6bf74e25f2723b0483192d9cb54327a0ae46f359eb055e5fc1d4. The unchanged four-field card selects the same publication and example. Current main was freshly rechecked as 53470da5a5cbda1807d1e523fbc71963e5a1adc7 on 2026-10-04. CHAT-1.0 workflow, current data/analysis specifications, template, defaults, taxonomy and geometry rules control. Exact reference-file fingerprints are in the manifest. No PR features or integrated lens data seed this extraction.

## Extraction and conventions

The author inspected rendered A PDF pages 1–2 (metadata), 14 (equation/conventions), 15–16 (complete Example 1), 27 (conditions), and 28 (degraded Figure 1). Source table values were entered from the original, not the preparation index. There are 30 surface/stop rows, 17 glass elements, 12 air-separated groups, five aspherical surfaces on four elements, and three zoom stations with two focus states each. No source-listed rear plate, required in-lens plate, or inactive dummy plane is present. Object/image reference planes are preserved in evidence.

Indices are nd and Abbe numbers νd at d=587.56nm. The rendered equation uses sqrt(1−(1+K)(y/r)^2), so K is copied directly; every source K is zero. A4 through A12 are complete; A14 is an application-schema zero, not an omitted nonzero source coefficient. Units are millimetres and A_p has units mm^(1−p). No rescaling or spectral normal-line conversion applies. No nC/nF/ng/PgF/ΔPgF is published for this example.

The recovered JP5952167B2 original is preserved as an eighth essential dossier file. Figure 1 on its PDF page 26 is legible and supports only the optical arrangement and later modeled-aperture proportions. No B numerical values replace or repair the controlling A table; A/B numerical equivalence is not claimed.

## Model transformations

Stage 2 will rename surface18 as STO and attach A suffixes to 1,3,14,29,30. The infinity stop radius will be represented by 1e15. No plate or physical optical surface is omitted. All five variable gaps, all three zoom stations and both focus states must remain literal. Intermediate slider states are interpolation, not a recovered mechanical cam law.

The actual physical stop diameter and clear apertures are unpublished. Stage 2 must derive a disclosed f/1.86-calibrated stop and verify modeled SDs. Agreement with f/1.86 will be calibration rather than independent stop evidence.

## Glass review

The complete primary HOYA 20260707 catalog NM inventory, including obsolete glasses, was searched for all ten distinct coordinates. Relevant NM/CD/LD/GC rows, coefficients and candidates are in evidence. The official download index was rechecked. Every coordinate has close HOYA equivalents; multiple alternatives prevent actual supplier/melt identification. Catalog formulas independently reproduce their coordinate metadata, and their nd/νd residuals to source were calculated. No primary OHARA, SCHOTT, HIKARI, CDGM or Sumita catalogs were independently scanned in this pass. That limitation is explicit. Six-digit coordinate/class annotations avoid unsupported supplier claims. No catalog line indices are falsely presented as published patent data and no APO performance claim is made.

## Numerical results

The portable Python verifier reads actual source evidence and computes sequential height/reduced-angle propagation and separately implemented ABCD multiplication. At wide/mid/tele infinity it finds EFL 18.601515/26.023756/33.778926mm and BFD 38.560176/39.300731/39.906531mm. Track is 168.5001mm. All printed EFL, group power, BFD and conditional-expression comparisons pass source-precision-aware tolerances. The separate finite-conjugate calculation reproduces all published close-focus image distances. Every surface has a Petzval phi/(n*nPrime) term. Standalone element, cemented net and functional group powers are kept distinct.

Close d0 is measured from object to first vertex, not image. Object-to-image distances compute to 279.9999, 280.0001 and 280.0012mm, consistent with the marketed 0.28m while retaining source precision. A tiny tele close-state total-track difference is kept; no gap is adjusted to enforce exact conservation. The close-state EFL is not incorrectly compared to the infinity zoom label.

## Correction and discrepancy register

- No numerical source repair or substitution has been made.
- Five aspheric surfaces occur on four physical elements; these counts are not interchangeable.
- The marketed 18–35mm f/1.8 is distinct from design 18.60–33.78mm f/1.86; no scaling is used to erase this difference.
- Manufacturer 121mm length uses filter-to-mount reference planes, unlike the 168.50mm first-vertex-to-image track.
- Current specification incorrectly calls K>0 hyperboloidal. Its equation/domain rule controls; K=0 here means this wording defect has no numerical consequence.
- The original construction stage did not assert A/B numerical equivalence. The fresh independent Stage4 comparison is documented below.

## Independent review

This is the author’s source-first construction pass. There is no independent Stage 4 baseline or approval yet.

## Quantitative claim map

Audit headline EFL/BFD/track → sourceModel.states[].paraxial; glass equivalents → sourceModel.glass; standalone/cemented/group powers → sourceModel.elements/cemented/groups; source conditions → sourceModel.conditions and comparisons; counts → facts and rawPrescription; source metadata → original A pp1–2. No analysis file exists at Stage 1. Interpretive claims were manually checked against A paragraphs0017–0039 and Sigma's product page.

## Gate disposition and pending integration

Stage 1 passes source extraction, conventions, source computation and glass/product evidence checks: READY_FOR_DATA. Stage 2 aperture construction/geometry remains unperformed, not passed. Actual TypeScript/Prettier/buildLens/production-render/UI-fan/runtime-glass and full-corpus/build checks have not been executed at this checkpoint and remain separately NOT_RUN. INTEGRATION_PENDING. No Git, desktop, IDE, full build, metadata generation, corpus sweep, Library upload or Drive write was performed.

## Stage 2 construction record

This section supersedes the Stage 1 task dispositions above without rewriting that checkpoint. All original source values remain unchanged. The actual final data is parsed by a strict JSON-literal TypeScript-wrapper loader; unsupported expressions, NaN, duplicate keys and leftover text are intentionally rejected. The negative fixtures are part of the portable verifier, together with a wrong-index mutation and an excessive-aperture mutation. This parser makes no general TypeScript claim.

The final model preserves 30 surfaces/stop entries, all five variable gap vectors, three zoom stations, two focus stations, all five exact aspheres, full element/cemented annotations, d-line coordinates, and the six published conjugates. The model contains no invented or omitted rear plate. It uses the current-main `zoomApertureModel: "from-nominal-fno"` expressly provided by the current specification. The nominal f/1.86 at each infinity zoom station generates inferred exact-marginal physical iris radii 11.557047254, 11.942050844 and 12.613127576mm. These differ from the preliminary paraxial radii. The actual runtime performs this calibration; cached nominal EP values are not substituted for its current-state `entrancePupilAtState2` results.

### Modeled aperture derivation and limits

B Figure1 is qualitative arrangement/proportion support only. A preliminary isotropic drawing-scale estimate failed rim, edge-thickness and shared-gap tests, so it was rejected rather than treated as dimensional authority. Final modeled surface SDs were inferred from exact source-field chief rays, marginal/default bundle diagnostics and current geometry limits. Entry/exit values can differ for real curved menisci and cemented boundaries; none is a published clear aperture. No `gapSagFrac`, rim-angle, source-radius, source-gap, default-fan or layout-policy override was introduced to hide a failure.

Surface14's positive polynomial terms cause a rim-slope sign reversal at approximately 18.6445mm; its paired L8 surfaces use SD18.5mm, below that point. The 28/29 air lens's narrow gap bounds its shared aperture: both use SD13.9mm. These choices retain all source coefficients and source gaps. The portable verifier checks the entire sampled radial thickness/domain/slope bands and 25 interpolated focus/zoom states, as well as every published state. These are finite sample claims, not continuum certification.

### Genuine targeted current-main execution

A source-only 152-module dependency closure is identified by hashes in the native runtime output. Seventy-five original modules were copied unchanged from the previously hash-verified pinned source tree; missing actual public-facade dependencies were read from the same main commit and checked against Git blob hashes. No source implementation was patched or mocked. Node24 executes the actual public `buildLens` entry, actual `validateLensData`, actual `computeOffAxisTraceGeometry` helper, actual `entrancePupilAtState2`, actual exact tracer and actual production element-render diagnostics. Only `.js` import references are mapped to corresponding unchanged `.ts` files by a local loader. Native TypeScript erasure is not typechecking. The React hooks were read to construct their exact ordinary on-axis/off-axis launch formulas; React/browser UI mounting was not performed.

The actual default ray grid has five focus states × five zoom states × three aperture states × eleven rays = 825 samples. The original default off-axis helper determines its current field, with the original tracing-field clamp. The actual current-state pupil helper sets launch offsets, rather than a physical-iris sampling grid. There are 62 clipped samples: first clips are STO or exterior element/air boundaries. None first clips at a cemented junction and none first fails intersection. Raw diagnostic `clipEvents`, surviving points and ghost points remain in the native JSON. Later intersection failures on already-clipped ghost extensions are not physical first failures. The template's Semi-Diameter Guidelines expressly permit off-axis clipping at element edges/air gaps and forbid clipping inside cemented groups. This is the applied containment criterion; no all-rays-survive claim is made.

All native validator checks pass. Production render diagnostics report zero hidden material trim across the 25 geometry states. Native exact chief rays reach image semi-height14.2mm at all six endpoint states (absolute residual below0.0001mm). At infinity the field half-angles are 38.059223°, 28.336723°, 22.398410°, matching the source-rounded fields. Portable independently implemented exact Snell chief traces also reproduce source infinity image height within0.005mm. Neither chief-only coverage nor these default fan samples certifies full-pupil transmission at the corner.

All17 elements genuinely resolve to the declared checked HOYA catalog equivalents in the current runtime. The annotation names identify spectral proxies, never actual supplier/melt identity. Primary catalog coefficients and native coordinate residuals remain available for offline numerical comparisons.

### Checkpoint and remaining checks

Stage2 READY_FOR_ANALYSIS binds to the exact final data/evidence/verifier/results hashes in this stage's manifest after clean-extraction replay. No Stage3 analysis was authored before that checkpoint. TypeScript compiler, Prettier, mounted React/browser UI, whole-corpus policies and production build remain NOT_RUN at integration; no full build or corpus action was attempted. The native replay requires the identified shared source tree and Node24; the portable Python replay recomputes source/data optics/geometry, validates hash-bound native execution evidence, and explicitly does not re-execute LensVisualizer. INTEGRATION_PENDING.

### Stage 2 source-prose reconciliation before analysis

The first Stage2 manifest was a832082f3fbd0fedd72684aa88c5d5ef7d6ac2bc14cce0b71dcd86d337a35b8f. Its data bytes remain unchanged (SHA76dd4b5e6d1a2c4f19ac932a30800b32b47006a4dfca2ed1bb60fdcb2ce8392f). The evidence/verifier/results checkpoint was reopened for a newly identified prose-versus-table discrepancy, before drafting analysis.

Rendered A PDF p10 / printed p9 paragraph0038 says the cemented biconcave/biconvex pair in G3 has negative power. Direct tracing of unchanged source surfaces21–23 gives net positive f=+348.638990mm. The raw sign comparison remains FAIL in results.comparisons. Both sequential propagation and separate ABCD multiplication establish that sign, while the entire G3 gives −49.963682mm and independently reproduces printed −49.96mm. Therefore the supported resolution preserves the unambiguous numerical table and explicitly reports the prose contradiction. No table number, group composition, patent or example is changed. The mandatory resolution check passes; the failed raw prose comparison is not erased or called reproduced.

### Final display-name normalization

The display name was normalized from SIGMA 18–35mm f/1.8 DC HSM Art to SIGMA ART 18–35mm f/1.8 DC HSM to follow the current all-capital optical-line convention. Actual data and analysis use normal word spacing. This is metadata only; original card/job fields and all prescription values remain unchanged. Native hash-bound checks and the Stage2 construction checkpoint were refreshed before final Stage3 approval.

## Stage 3 analysis verification and quantitative claim map

The complete Stage2 checkpoint was verified before prose authoring. Main was rechecked again and remains 53470da5a5cbda1807d1e523fbc71963e5a1adc7. The final Stage3 file follows the current required section order, with17 element subsections, the full five-surface coefficient table, every patent condition and explicit source/model distinctions. It is a technical description rather than a numerical-table duplicate. The source-prose G3 discrepancy is stated in its two relevant element sections and conditional-expression discussion.

The only final data change during Stage3 was the display-name normalization described above. No optical value, control state, material coordinate, glass label, aperture, geometry policy or ray default changed. Stage2 was revalidated and its latest clean-replayed checkpoint replaced before final Stage3 approval. Evidence, data and native execution output are identical to that latest Stage2 revision. The Stage3 verifier additionally checks analysis and computes the claimed focus travel and14A slope-reversal root. It re-executes all inherited mandatory construction checks; the original frozen Stage2 verification hashes remain separately identified in the manifest instead of being silently transferred to this extended verifier.

| Analysis claim / section | Stable fact or result pointer | Authority |
|---|---|---|
| Patent identity, dates, inventor/applicant, selected example | evidence.job; evidence.productCorrelation.patentMetadata | Original A pp1–2; original card |
| Product mounts/format, f/1.8, MFD, blade count, HSM, dimensions and A013 timing | evidence.productCorrelation.marketed | Cited official Sigma product page |
| Counts and K/index convention | facts.elementCount/airSeparatedGroupCount/asphericalSurfaceCount/asphericalElementCount; evidence.conventions | Parsed final data versus original A ¶0083–0091 |
| Infinity EFL/BFD/track and retrofocus inequality | implementedModel.states[0:3].paraxial | Parsed final data, sequential and ABCD computation |
| Group and subgroup focal lengths and signs | implementedModel.groups | Parsed data with source group boundaries |
| L1–L17 first-line nd/νd/glass/fl and shape labels | implementedModel.elements[0:17] | Parsed final data; recomputed standalone power |
| D1–D5 net focal lengths and cemented sign distinctions | implementedModel.cemented | Complete parsed shared-interface calculation |
| G3 doublet contradiction and supported treatment | comparisons.g3_cemented_prose_sign; checks.g3_pair_prose_resolution; implementedModel.sourceProseDiscrepancy | Rendered A ¶0038 versus unaltered source table; raw FAIL retained |
| Per-surface and total Petzval | implementedModel.states[0].paraxial.petzval | Every actual medium transition, phi/(n*nPrime) |
| Glass coordinate candidate residual table | sourceModel.glass; evidence.glassEvidence.coordinates | Primary HOYA excerpts/formulas; actual-source values retained |
| Runtime material resolution | implementedModel.runtimeGlass | Actual named catalog proxy resolution; no supplier identity claim |
| Published focus spacings, object/image planes, magnifications | evidence.rawPrescription.states; implementedModel.states[3:6].paraxial; implementedModel.focusMovementMm | Exact source tables and independent conjugate calculation |
| Aspheric coefficients/equation | evidence.rawPrescription.aspheres; parsed data.asph | Rendered A pp14–16, exact parity/sign/exponent preservation |
| Rim departures/angles at modeled radii | implementedModel.geometry.rims | Parsed coefficients and SDs; units explicit |
| 14A18.6445mm slope-reversal diagnostic | implementedModel.surface14SlopeReversalMm | Executed bisection of analytic source-profile derivative; modeled SD stays18.5mm |
| Conditions(1)–(8) | sourceModel.conditions; comparisons.condition_*; implementedModel.groups/source-equivalent data | Defined source radii/groups and computed endpoint EFL |
| Inferred iris schedule | implementedModel.inferredIrisRadiiMm; runtime.json.zoomStopSDs | Independent exact marginal calculation and actual native calibration |
| 25-state geometry, zero trim,825 rays and62 first clips | implementedModel.geometry; implementedModel.runtimeSummary; original runtime.json.rows | Actual finite sampling; stop/exterior allowance, no full-pupil corner guarantee |
| Chief coverage14.2mm | implementedModel.publishedInfinityFieldChiefRays; runtime.json.coverage | Independent exact source-field chief rays; actual native endpoint-corner solve |

The author manually checked interpretive statements and citations against the displayed original source and the named primary catalog/product sources. The automated cross-file checks supplement this review; they do not establish the truth of optical design-intent prose. No new unsupported performance claim was added. The native scalar-ray diagnostics and partial-pupil scope are explicitly disclosed. The analysis carries normal source URLs and PDF/paragraph locators, with no conversation-only citation tokens.

Stage3 READY_FOR_AUDIT applies only after final file hashing, exact archive membership verification and clean portable replay. It does not claim the fresh independent Stage4 audit has occurred. INTEGRATION_PENDING remains separate.

## Stage 4 source-first independent review — 2026-10-04

The earlier sections are construction-stage history. This section records the completed independent review and supersedes their pending Stage 4 dispositions.

### Frozen source-first baseline

Before opening the candidate or prior calculations, the reviewer read the unchanged four-field card, independently rendered the controlling A publication, manually re-entered its complete prescription, five aspheres and six state rows, and executed newly written sequential reduced-angle and separate ABCD paths. The seven-file source-only checkpoint was frozen with content fingerprint `619e3a484f365ae7693f860a1c4c9238b4c193bca848a64e7b5973a7b7b169eb`; its original archive SHA256 is `3ecd4b114bf114b9a885cd0a8d81170644119e569f8b462ebe61dd8ff9895ca4`. The final evidence preserves its distinct inputs, exact original fingerprints and exposure disclosure. Its calculation functions remain in the consolidated verifier, transformed only by namespace prefixes; reversing that transformation yields the original function ASTs exactly.

No candidate or prior author results seeded those inputs. Incidental source exposure is explicit: a locator read showed A p17 Example 2; shared pages also showed neighboring rows/condition columns/figures and prose. None was substituted for Example 1. The plain source card contained only selection fields. Supporting B Figure 1 was viewed separately. After fresh A entry, all 173 selected-example decimal/scientific table tokens independently compared identical between A and B. That corroborates supporting figure use; no B number replaces A. Hashes establish retained byte identity, not philosophical proof of blindness.

Exact original Stage 3 candidate archive SHA256: `2e78a1cf6a485f152f8ac42b860c75faad0fa0fd116a6061c3f41d237bfcc233`; original data `2952106ff3f483f33f5b6f0986add78c776833a27bd13b3ee2a02673652006bd`; original analysis `41c5291da64a049695400ee5f6751b2e51e82dba521a1747faa7f32c9b7394e0`. All twelve original members and hashes were checked before reconciliation.

### Independent reconciliation results

Every radius, after-medium, physical spacing at all six published states, stop identity, downstream cemented element assignment and asphere coefficient agrees with the frozen source. All 17 native nd/νd pairs and standalone powers agree. Five cemented-pair powers, six functional/subgroup powers, eight source conditions, cardinal planes, pupils, Petzval terms, focus movement, magnifications and reference planes remain independently reproduced. No scaling, source repair, plate omission, guessed focus law or altered semi-diameter was needed.

The independently reconstructed infinity EFLs remain 18.6015154225, 26.0237559132 and 33.7789264434 mm. At all three close states d0=111.5 mm from the first vertex, the computed image-gap residual is below 0.000232 mm. Best-conjugate magnifications are −0.1320330661, −0.1847236756 and −0.2397646917. The analysis table instead reports magnification at the printed image plane; this reference-plane distinction is now explicit.

The source's G3 cemented-pair prose sign remains a raw FAIL comparison. Both independent paths establish +348.6389898255 mm for surfaces 21–23; the whole G3 remains negative and matches the published −49.96 mm. The supported table-first resolution remains PASS. No value was changed to erase this contradiction.

The primary HOYA catalog was independently scanned without adopting the author's labels. All chosen labels are compatible equivalents, with prefix/tie ambiguity preserved. The nominal primary catalog differs slightly from project metadata for FCD505/FCD515 and TAFD30. The analysis's residual table uses evaluated catalog coefficients, not nominal AGF coordinates, and now identifies the exact evaluation wavelengths. No catalog spectrum is represented as a measured patent melt or proof of APO performance. Other vendor catalogs were crosschecked through project transcriptions only; their originals were not independently authenticated.

The official Sigma product page was independently opened and confirms the stated 17/12 construction, APS-C designation, five mounts, nine diaphragm blades, f/16 minimum aperture, 28 cm MFD, 1:4.3 marketed magnification and 121 mm filter-to-mount length. Exact factory prescription identity remains unconfirmed.

### Geometry and actual execution

A fresh independent analytic sag/derivative implementation evaluated 1,001 radial samples per relevant band and the 25 focus/zoom geometry states. It found minimum sampled edge thickness 0.6054771449 mm and minimum shared-band reserve under the unchanged 90% gap rule 0.0064569231 mm. All real-conic, full-radius slope, thickness, aperture-ratio and shared-gap checks pass. Surface 14A remains at the inherited 18.5 mm SD below its independently confirmed 18.6445 mm slope reversal. This is finite sampling, not a continuum theorem.

The original 152-module native replay was independently executed and reproduced the original runtime JSON exactly. The source tree was then expanded only by unchanged pinned-main `src/optics/analysis/mtfConjugates.ts`, Git blob SHA `56bfdd80dc445b585a7cd5ff88a56f1046c0a847`, SHA256 `cbe98f44c6858f424abf0cd967dff4f5d2a973575f9e923f8e8e75f5ee398df8`. Both hashes were independently recomputed. The final driver checks all 153 expected module hashes before importing them. No project source module is patched, mocked or replaced.

The final data was rebuilt through actual public buildLens and actual validateLensData. The actual current default off-axis helper, pupil helper and hook launch formula were checked; the native sample uses focus-tracking ray launch. All 825 rays retain the same result: 62 first clips, consisting of 40 on-axis stop clips and 22 exterior boundary clips; none first clips at a cemented interface and none first fails intersection. Exterior clipping is allowed by the actual template; no arbitrary complete-pupil transmission standard or geometry waiver was introduced. All six native endpoint corner chiefs reach 14.2 mm image semi-height within 0.0001 mm. Production element-render diagnostics still find zero hidden trim. All 17 named elements resolve to coordinate-compatible catalog proxies.

### Corrections and their effects

1. Added `finiteConjugates` descriptors for exactly three published close endpoints: focusT=1 and zoomT=0,0.5,1; objectDistanceMm=111.5; distanceReference=first-surface; explicit A paragraph0091 source. This is source-supported schema metadata, not a reconstructed focus state. No optical array, asphere, gap, SD, inferred iris rule, default fan or display geometry changed.
2. Executed the actual current-main finite-conjugate selector and object-point resolver against prepared native states. All three descriptors select correctly and yield on-axis physical object point z=−111.5 mm. Twelve infinity/intermediate/uncertified states and three nonzero-aberration controls are rejected. No interpolated state is certified. Actual closeFocusAtZoom and conjugateK were also exercised. No numerical MTF performance calculation is claimed.
3. Removed private authorization-account/queue identifiers and a private Drive source URL from delivered technical prose. Both unchanged original PDFs, original candidate hashes and all optical audit history remain.
4. Clarified coefficient-evaluated catalog residual wavelengths, printed-plane versus best-conjugate magnification, and the independently established selected-example A/B numerical equivalence. These are provenance/reference-plane clarifications; no optical result changed.

Correction validation is honestly post-exposure. The original independent baseline remains unchanged; new candidate metadata and prose were rechecked against its source facts, then all affected source/model/analysis checks and genuine runtime checks were rerun on final bytes.

### Additional quantitative claim map

| Final claim | Result/evidence location | Method |
|---|---|---|
| Complete source/model equality | checks.independent_all_native_source_values / independent_all_native_aspheres | All six native endpoint arrays versus frozen pre-candidate transcription |
| Independent group/pair/element/pupil/Petzval/conjugate results | results.independentBaseline.sourceFirstResults and finalCandidateResults | Preserved fresh sequential and ABCD implementations |
| Independent geometry margins and SD14 profile | results.independentBaseline.independentGeometry | Fresh analytic sag/derivative; 1,001 radial samples; 25 states |
| Three certified finite endpoints | data.finiteConjugates; runtime.finiteMtfCertification.samples | Actual mtfFiniteConjugate and mtfFiniteObjectPoint; positive and negative controls |
| Correct focus-distance endpoint/reference | runtime.focusSelectorAudit | Actual closeFocusAtZoom / conjugateK and native image-plane geometry |
| 825 default rays, 62 permitted clips, zero trim | runtime.rows / failures / maxTrim | Genuine final-byte-bound 153-module replay |
| Supporting-source numerical equivalence | evidence.independentPass.supportingGrantEquivalence | 173 direct source decimal/scientific tokens, no numeric substitution |
| Final metadata/prose corrections | evidence.modelingDecisions S4-01 through S4-03 | Manual citation/claim review plus parsed-field and numerical checks |

### Final disposition

READY_FOR_BATCH, contingent on the exact final member hashes and successful clean-extraction portable/native replay recorded in the manifest. INTEGRATION_PENDING. No hidden-trim, gap, slope or vignetting waiver is used. Optional/limited source data remain disclosed: physical SDs/iris are inferred; catalog labels are equivalents; no source melt spectra, manufacturing cam law, full-pupil corner-transmission or continuum guarantee is asserted.

The compiler, Prettier, mounted React/browser integration, whole-corpus policies and production build remain NOT_RUN at integration scope. Node TypeScript erasure is not compilation/typechecking. Finite MTF station selection is executed; MTF performance is not. No Git, desktop, IDE, metadata generation, corpus sweep, build, publication, Library or Drive write was performed.

## 2026-10-06 — Patent-figure semi-diameter pass

This pass re-estimates surface semi-diameters against the source drawing. It changes `sd` values only; every radius, spacing, index, asphere coefficient, variable-gap table, the inferred iris and all metadata are untouched. It supersedes the Stage 2 and Stage 4 statements above that both L8 surfaces use an 18.5 mm semi-diameter, that the default-fan check finds 62 first clips (40 at the stop, 22 exterior), and that the grant's Figure 1 is qualitative support only.

### Figure and scale

The drawing used is Figure 1 of the granted family member JP5952167B2, PDF page 26: a single panel, 685 × 390 px at its native 300 ppi, with dotted outlines. Figure 1 of the controlling A publication (PDF page 28) is the same drawing but survives only as isolated dots and cannot be measured. The panel is the wide-end infinity state: at 600 dpi the first vertex sits at x = 745 px and the image plane at x = 1934 px, giving 7.056 px/mm over the 168.5001 mm track, and all 28 intermediate vertex crossings fall within about 1.5 px of the positions predicted from the wide-station prescription (D10 = 16.98, D17 = 1.00, D23 = 13.63).

The drawing is not isotropic, which is why the Stage 2 isotropic estimate failed the geometry tests. Heights were calibrated from features whose true height follows from the axial scale alone: the axial position at which a strongly curved surface (1, 2, 6, 9, 17, 19, 22, 23, 26, 27) meets its drawn rim corner, and the image-plane line drawn to ±110.5 px for the 14.2 mm image height. Eleven such estimates give a vertical stretch of 1.093 (range 1.07–1.12), so heights use 7.713 px/mm, about 0.13 mm per pixel. The upper and lower outlines differ by 2–4 px, so each reading is the mean of both sides. The drawing shows flat annuli where one face of an element has a smaller clear aperture than the other; the semi-diameter of such a face is where its curve ends, not the outer rectangle.

### Changes

| Surface | Before | After | Figure reading | Basis |
|---|---:|---:|---|---|
| 1A | 25 | 26.3 | 204 px → 26.4 mm; 26.15 mm from the front sag at the rim corner | Figure; keeps the drawn step of about 5.3 mm from L1 down to L2 |
| 3A | 19.7 | 21.1 | 163 px → 21.1 mm | Figure draws L2 1.3 mm above D1; they were stored level |
| 5 | 18 | 19.7 | 153 px → 19.8 mm; the front curve reaches the top-left corner of D1 | Figure draws D1 as one block; the band shared with surface 4 still ends at 18 mm |
| 8 | 18 | 15.4 | Concave curve meets a flat front annulus at 116 px → 15.1 mm, and at 15.4 mm by its sag | Figure, stored value 17 % larger; the f/1.86 tele axial marginal ray needs 15.19 mm |
| 9, 10 | 19.7 | 18.3 | 141 px → 18.3 mm; 18.5 mm from the sag of surface 9 at the rim | Figure draws G1B 1.5 mm below D1 and G2; they were stored level with D1 |
| 13 | 18.5 | 20.1 | 155 px → 20.1 mm | Figure draws L8 level with L7 and D3; the tele axial marginal ray needs 18.76 mm |
| 14A | 18.5 | 18.6 | 155 px → 20.1 mm | Capped below the slope reversal at 18.6445 mm; the tele axial marginal ray needs 18.70 mm |
| 20, 21 | 12 | 12.3 | L11 102.5 px → 13.3 mm, D4 108.5 px → 14.1 mm, drawn in edge contact | Cross-gap limit (12.4 mm gives 1.17 mm intrusion against 1.159 mm allowed); the tele axial marginal ray needs 12.28 and 12.29 mm |
| 22, 23 | 13 | 14.1 | 108.5 px → 14.1 mm; 13.7 and 14.1 mm from the sags at the rim corners | Figure; the tele axial marginal ray needs 13.18 mm at surface 23 |

Surfaces 1A, 3A, 9 and 10 moved by only 5–7 %. They were changed because the stored set drew L2, D1 and G1B level while the figure shows a clear staircase from L1 down to G1B; the measurements are clean and agree between the height and sag methods.

### Values left alone

Surface 2 (19.7; figure 19.7–19.9) and surface 4 (18; figure 18.4–18.7) sit at their cross-gap limits: 19.8 and 18.1 are rejected. Surfaces 6 and 7 (19.7; figure 19.8), 11 and 12 (20.5; figure 19.9), 15 and 17 (20.5; figure 20.0), 19 (13; figure 13.3), 26 and 27 (15.5; figure 15.2) and 30A (15; figure 15.4) are within 3 %. Surfaces 24 and 25 (16; figure 14.9) are 7 % large and were left because L14 is not visibly out of proportion with its neighbours. The figure ends the cemented curve 16 near 18.4–18.5 mm with a flat step to the 20 mm rim; a smaller junction value would notch the rendered doublet, so 16 stays common with 15 and 17. Surfaces 28 and 29A (13.9) are drawn out to the 15.2–15.4 mm rim, but the two surfaces meet at 14.26 mm, 14.0 mm already fails the cross-gap rule, and 29A reverses slope at 15.325 mm. The stop row was not touched.

### Check results

The surface validator reports no validation errors on the final file, and the image-circle audit reports 0 undersized surfaces. The field-coverage audit reaches 14.20 mm of 14.20 mm at all three stations (38.1°, 28.3° and 22.4°) with the corner clear. The exact meridional clearance trace at image height 14.2 mm, at infinity and at the 111.5 mm close-focus tables, flagged the axial marginal ray at surfaces 13, 14A, 20, 21 and 23 before this pass and flags only 14A after it (18.6 against 18.70 mm); no chief ray is blocked. The built lens is unchanged in EFL (18.6015, 26.0238, 33.7789 mm), f/1.86 at every station and the inferred iris radii (11.557, 11.942, 12.613 mm).

Element-render diagnostics over the 25-state focus/zoom grid give zero hidden trim. The minimum sampled edge thickness (0.6055 mm, L10) and the minimum shared-band reserve under the 90 % gap rule (0.0065 mm, surfaces 2/3A) are unchanged. A re-implementation of the 825-ray default-fan sample reproduced the earlier 62 first clips on the pre-pass file and gives 63 on the final file: 40 on-axis at the stop, 10 off-axis at surface 8, 7 off-axis at surface 28, 4 on-axis at surface 14A and 2 on-axis at surface 11. Every one is an aperture overrun at an exterior air boundary or the iris; none is first at a cemented interface and none is an intersection failure.

The aspheric rim table in the analysis was recomputed at the new heights: 1A at 26.3 mm has +3.540241041 mm departure and a 39.187355° rim angle, 3A at 21.1 mm has −1.276580394 mm and 12.289213°, and 14A at 18.6 mm has +0.401146308 mm and 0.026868°. The page was rendered at the wide end, the tele end and both close-focus endpoints after the edit; no element overlaps and the group heights now follow the drawing.

### Open limitations

- The f/1.86 tele axial marginal ray is still trimmed by 0.10 mm at 14A, about 1 % of the pupil area. The drawing carries L8 to 20.1 mm, past the 18.6445 mm slope reversal of the published polynomial, so the designer's aperture evidently included that zone; the cap follows the audit procedure, not a validator rejection.
- The renderer joins unequal front and rear rims with a straight line. The flat annuli the figure draws on the rear of L1 and L2 and on the front of L5 and L12 therefore appear as chamfers, and the L16/L17 air lens keeps its notch.
- The source is a 300 ppi dotted bitmap. One pixel is 0.13 mm in height, and the upper and lower outlines disagree by up to 0.5 mm, so individual readings are good to about ±0.3 mm.
- These remain estimates from a drawing and traced clearance. No clear aperture, iris diameter or mechanical dimension is published.

## 2026-10-06 — Integration glass and metadata pass

- **Glass.** All 17 elements already resolve to exact HOYA catalog curves (M-TAF1, FCD1, TAFD35, E-F1, TAFD55, FCD505,
  M-PCD51, TAFD30, FDS90, E-FD10) within 4e-6 in nd; no label changed. The patent publishes no partial-dispersion data
  and none is authored.
- **Metadata.** Display name changed from `SIGMA ART 18-35mm f/1.8 DC HSM` to `SIGMA 18-35mm f/1.8 DC HSM | Art`, the
  catalog's convention for Sigma's Art line. `lensMounts` (`sigma-sa`, `canon-ef`, `nikon-f`, `pentax-k`, `sony-a`)
  and `imageFormat` (`aps-c`) re-checked against Sigma's product page and retained.

## 2026-10-06 — Final diagram, label and movement review

This pass compares the lens page as rendered locally with Figure 1 of JP5952167B2 (PDF page 26; Figure 1 of the A publication on PDF page 28 survives only as dots) and with the Example 1 tables and paragraphs 0033–0039 and 0091 of JP2014089365A. It changes semi-diameters, the group annotations, five diagram colour tags and one float-noise digit. No radius, spacing, index, asphere coefficient, variable gap, iris value or name changed. In the "Patent-figure semi-diameter pass" above it supersedes the values quoted for surfaces 8, 11–13, 15–17, 19, 21, 24–27, 29A and 30A, the default-fan census of 63 first clips, the 0.6055 mm minimum edge thickness, and the list of chamfered faces in its open limitations.

### Figure SD review

- **Method.** The grant page was rendered at 600 dpi and the model outline (each surface curve out to its `sd`, rims joined by straight lines as the renderer joins them) was drawn over the bitmap with the first pass's scales: first vertex at x = 745 px, 7.056 px/mm along the axis, 7.713 px/mm in height, axis at y = 3960.5 px. Every surface curve lies on the dotted outline to within 1–2 px from the axis to its rim, so the two scales are confirmed by the curves themselves and not only by rim readings. Block heights, read as the mean of the upper and lower outlines, are L1 26.5, L2 21.1, D1 19.8, G1B 18.35, L7 19.8, L8 20.0, D3 20.0, L11 13.35, D4 14.1, L14 14.85, D5 15.1 and L17 15.3 mm; one pixel is 0.13 mm and the two sides differ by 0.25–0.4 mm.
- **Differences found at the start of the pass.** L1, L2 and D1 agreed in height and curvature; L1 and L2 had the rear chamfers listed below. G1B had the right height but its front face was cut by a 6.7 × 2.9 mm chamfer. L7 and D3 stood 0.5 mm above the drawing and 0.4 mm above L8, which the figure draws level with them. L8 had a 1.5 mm rear chamfer. L11 was 0.35 mm low. The front of D4 was cut by a 4.1 × 1.8 mm chamfer. L14 was 1.1 mm (7 %) too tall, and the rear group stepped down from L14 (16.0) through D5 (15.5) to L17 (15.0) where the figure steps up from 14.85 through 15.1 to 15.3. D5 and L17 met in a V-notch between two chamfers, where the figure draws a square doublet followed by a full biconvex lens. Axial positions, spacings and the stop ticks (drawn from about 11.7 to 13.2 mm) agreed.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 8 | 15.4 | 17.0 | The figure draws G1B as a square block to 18.3 mm with the front curve ending near 15.4 mm at a flat annulus. 18.3 passes the validator, but two of the 825 default-fan rays then clip first at cemented surface 9 and 17.3 still leaves one; 17.2 and below leave none. 17.0 keeps the package's no-junction-clip criterion with 0.2 mm in hand and cuts the chamfer from 2.9 to 1.3 mm. |
| 11, 12 | 20.5 | 20.0 | L7 reads 19.9 (upper) and 19.6 (lower); the figure draws L7, L8 and D3 level. |
| 13 | 20.1 | 20.0 | L8 reads 20.2 and 19.9; set level with L7 and D3. The tele axial marginal ray needs 18.76 mm. |
| 15, 16, 17 | 20.5 | 20.0 | D3 reads 20.2 and 19.9 over its whole flat top. The tele axial marginal ray needs 18.76 mm at surface 17. The rim of L10 thickens from 0.61 mm to 1.18 mm; the thinnest rim in the file is now L7 at 1.13 mm. |
| 19 | 13 | 13.3 | L11 reads 13.55 and 13.16. |
| 21 | 12.3 | 14.1 | The figure draws D4 as a square block. The curve is carried to the block rim; the band shared with surface 20 still ends at 12.3 mm, so the cross-gap rule is unchanged, and the extended curve stays 0.14 mm or more clear of L11's drawn rim. Rays are stopped at surface 20 before they reach the added zone. |
| 24, 25 | 16 | 14.9 | L14 reads 14.97 and 14.72. The tele axial marginal ray needs 13.48 mm. |
| 26, 27 | 15.5 | 15.1 | D5 reads 15.23 and 14.97 over its whole flat top; needed below L17 to keep the drawn staircase. |
| 29A | 13.9 | 15.3 | The figure draws L17 as a full biconvex lens to 15.3 mm. 15.3 is inside the 15.325 mm slope reversal of 29A; the band shared with surface 28 still ends at 13.9 mm, and the extended curve stays 0.07 mm or more clear of L16's drawn rim. |
| 30A | 15 | 15.3 | L17 reads 15.49 and 15.23; no slope reversal out to 15.6 mm. |

- **Trials rejected.** Carrying surface 28 to the D5 rim (15.1) passes the validator, but rays leaving 28 above the 14.26 mm height at which 28 and 29A meet cannot intersect 29A, and the default fan then records an intersection failure; 28 stays at 13.9. Surface 8 at 18.3 is rejected for the junction clips described in the table.
- **Surface 14A.** The documented cap was checked and kept: the profile's slope changes sign at 18.6445 mm (sag minimum −0.430 mm, slope −0.00047 at 18.6 mm) and the f/1.86 tele axial marginal ray needs 18.70 mm, as the header says. The validator itself accepts larger values and the figure carries the surface to 20 mm; the cap is the audit procedure's rule, not a validator limit.
- **Left as they were.** 1A, 2, 3A, 4, 5–7, 9, 10, 14A, 20, 22, 23, 28 and the stop row.
- **Chamfers that remain.** The renderer joins unequal rims with a straight edge, so five faces that the figure draws with a flat annulus appear as chamfers: the rear of L1 (surface 2 at 19.7 mm under a 26.3 mm rim; cross-gap limit with 0.0065 mm reserve), the rear of L2 (surface 4 at 18 under 21.1; it would meet surface 5 at 18.94 mm), the front of L5 (surface 8 at 17.0 under 18.3), the rear of L11 (surface 20 at 12.3 under 13.3; it would meet surface 21 at 13.03 mm) and the rear of L16 (surface 28 at 13.9 under 15.1). The rear of L8 is chamfered by the 14A cap although the figure draws it to full height.
- **Checks on the final file.** The surface validator reports no errors and the image-circle audit 0 undersized surfaces. Field coverage reaches 14.20 of 14.20 mm at 38.1°, 28.3° and 22.4° with the corner clear. The meridional clearance trace at image height 14.2 mm reproduces ω = 38.06°, 28.34° and 22.40°, blocks no chief ray, and at infinity and at the close-focus tables flags only the axial ray at 14A (18.6 against 18.70 mm), as before. The built lens is unchanged in EFL (18.6015, 26.0238, 33.7789 mm), f/1.86 at every station, the iris radii (11.557, 11.942, 12.613 mm) and the wide and tele chief-field limits (37.51° and 29.23°). Two derived values move: the drawn stop-housing radius follows surface 19 from 13 to 13.3 mm, and the middle-station chief-field limit goes from 33.09° to 33.13° because its limiting rim moves from 29A to the adjacent surface 28; both limits lie beyond the 28.34° format corner.
- Render diagnostics over the 25-state focus/zoom grid give zero hidden trim. The drawn outlines, including the rim lines and the curves carried past a shared band, keep positive clearance across every air gap in all 25 states (minimum 0.067 mm at 28/29A, 0.14 mm at 20/21, 1.69 mm at 7/8 at closest focus). The minimum shared-band reserve is unchanged at 0.0065 mm (2/3A).
- The 825-ray default-fan sample gives 62 first clips: 40 on-axis at the stop, 4 on-axis and 1 off-axis at 14A, 2 on-axis at surface 11, and off-axis 6 at surface 8, 4 at 28, 3 at 24 and 1 each at 7 and 10. All are aperture overruns at the iris or an exterior air boundary; none is first at a cemented interface and none is an intersection failure.
- Aspheric rim values recomputed for the analysis table: 29A at 15.3 mm has −0.588989349 mm departure and a 0.225609° rim angle, 30A at 15.3 mm has −0.326966240 mm and 23.326900°. 1A, 3A and 14A are unchanged.
- The page was re-shot at the wide, middle and tele stations at infinity and at closest focus. No element overlaps; the rear group now rises toward L17 as drawn, G2 is level, and D4 and L17 have the drawn outlines.

### Diagram labels and movement order

- **Groups.** `G1` (1A–10) became `G1A` (1A–7) and `G1B` (8–10). Paragraph 0033 and claim 1 divide G1 into a front group and a rear group, the group table lists G1A from surface 1 (−56.72 mm) and G1B from surface 8 (−92.33 mm), and Figure 1 brackets both. The movement overlay takes its groups from this field: with one `G1` it showed "G1" moving 3.84 mm for focus (the midpoint of a group whose rear part moves); it now shows G1A fixed and G1B moving 7.69 mm toward the object.
- **Checked and left.** Seventeen elements numbered 1–17; every `type` against the signed radii and paragraphs 0034–0039 (two negative menisci convex to the object, biconcave/biconvex D1, biconcave plus positive-meniscus D2, two biconvex singlets, biconcave/biconvex D3, biconcave L11, biconcave/biconvex D4, biconvex L14, biconvex/biconcave D5, biconvex L17); asphere markers on L1, L2, L8 and L17 only, for source surfaces 1, 3, 14, 29 and 30; D1–D5 spanning exactly the cemented surfaces; `G2` 11–17, `G3` STO–23 (the patent's group table starts G3 at surface 18, the stop, which moves with G3) and `G4` 24–30A; the stop between surfaces 17 and 19; no rear plate in the source; the `specs` line (17 elements / 12 groups, 18.60–33.78 mm, F/1.86, five aspherical surfaces on four elements); `subtitle`; the element roles; and the variable-gap labels D7, D10, D17, D23 and BF.
- **Zoom order and direction.** The stations are 18.60, 26.02 and 33.78 mm, strictly increasing, and every `var` row lists the patent's wide, middle and tele columns in that order. From the stored gaps the front vertex of each group lies ahead of the image plane by: G1A 168.5001 mm and G1B 130.6721 mm at all three stations; G2 108.7422, 119.0129, 124.2265 mm (15.4843 mm toward the object); G3 with the stop 83.6400, 80.1524, 72.5535 mm (11.0865 mm toward the image); G4 56.3349, 57.0754, 57.6811 mm (1.3462 mm toward the object). Each is monotonic. This is what paragraphs 0033 and 0036–0039 state and what the arrows of Figure 1 draw, and D10 falls (16.9843 → 1.5), D17 rises (1.0 → 27.5708) and D23 falls (13.6327 → 1.2) as claim 1 requires.
- **Focus order and direction.** `focusPositions` [0, 1] runs from infinity to the 111.5 mm object distance. G1B moves toward the object by 7.6889, 7.6877 and 7.6872 mm at the three stations, as paragraph 0035 and the figure's Focus arrow say; nothing else moves. D7 shrinks by exactly what D10 grows at the wide station and to 0.0001 mm at tele. At the middle station D10 grows 0.0024 mm less than D7 shrinks and the printed BF rises by the same 0.0024 mm; that is the source's own rounding and is retained.
- **Close distances.** 111.5 mm plus the close-focus track gives 279.9999, 280.0001 and 280.0012 mm, which are `closeFocusM` and the three `zoomCloseFocusM` entries. The middle entry carried float noise (0.28000010000000003) and is now 0.2800001; nothing reads those digits.
- **Overlays and controls.** The zoom overlay shows G1A and G1B stationary, G2 moving toward the object (maximum travel 15.48 mm), G3 toward the image and G4 slightly toward the object; the focus overlay shows only G1B moving, 7.69 mm toward the object. The patent-positions control lists 18.6, 26.02 and 33.78 mm and ∞ / 28 cm in that order. `focusDescription` names the right group and direction and is unchanged.

### Glass and color completeness

- All 17 elements trace on catalog Sellmeier curves whose coordinates match the stored pairs (largest residuals 3.9e-6 in nd and 0.04 in νd): M-TAF1, FCD1, TAFD35, E-F1, TAFD55, FCD505, M-PCD51, TAFD30, FDS90 and E-FD10.
- **Colour tags.** `apd: "inferred"` with a note was added to L3 (FCD1, the S-FPL51 class) and to L7, L10, L14 and L15 (FCD505). The patent names no glass and identifies no anomalous-dispersion element, so `"patent"` is not available. Sigma's product page prints no element counts in its text, but its lens-construction diagram marks five SLD elements and four aspherical lenses: the SLD positions are exactly L3, L7, L10, L14 and L15, and the aspherical positions are L1, L2, L8 and L17, the four elements that carry the example's five aspheres.
- **Left untagged.** L8 and L17 (M-PCD51) are aspherical positions in Sigma's diagram, not SLD positions. The dense flints and lanthanum glasses are ordinary by the catalog convention.
- No `dPgF` or line index is authored: the patent prints nd and νd only, and catalog values are not copied into those fields.

### Identity and metadata

- Front page of JP 2014-89365 A: application 2012-239798 filed 2012-10-31, published 2014-05-15, applicant 株式会社シグマ, sole inventor 塩田 了 (SHIODA RYO in the PAJ abstract). `patentNumber`, `patentAuthors` (Ryo Shioda), `patentAssignees` (Sigma Corporation) and `patentYear` (2014) agree and are unchanged.
- Sigma's specification table, re-read for this pass: 17 elements in 12 groups, APS-C [DC], Sigma SA, Canon EF, Nikon F, Pentax and Sony A mounts, nine rounded blades, minimum aperture F16, minimum focusing distance 28 cm, maximum magnification 1:4.3. `lensMounts`, `imageFormat`, `elementCount`, `groupCount`, `apertureBlades`, `maxFstop`, `focalLengthMarketing` [18, 35] and `apertureMarketing` 1.8 agree. The page describes inner focusing and inner zooming with constant length, consistent with a fixed G1 and a moving G1B.
- `focalLengthDesign` (18.6015, 33.7789) is the computed EFL at the end stations, against the printed 18.60 and 33.78; `apertureDesign` 1.86 is the printed F-number; `closeFocusM` is the wide-station close distance above. The display name `SIGMA 18-35mm f/1.8 DC HSM | Art` was not touched.

### Open limitations

- The f/1.86 tele axial marginal ray is still trimmed by 0.10 mm at 14A; this is the one remaining clearance flag, and it follows from the documented slope-reversal cap.
- Six faces draw as chamfers where the figure has a flat annulus or, for 14A, a full-height surface. Each is at a limit named above: the cross-gap rule (2, 4, 20, 28), the no-junction-clip criterion (8) or the slope-reversal cap (14A).
- Surfaces 21 and 29A are carried past the height at which the figure ends their curves so that D4 and L17 draw with the figure's outline. Rays cannot reach the added zones, because surfaces 20 and 28 stop them first; the values are drawing extents, not clear apertures.
- The SLD positions are read from Sigma's diagram, which carries no numbers; the tags are inferences and add no spectral data.
