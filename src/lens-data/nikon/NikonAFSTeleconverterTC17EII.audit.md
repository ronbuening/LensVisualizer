# Lens Patent — Nikon AF-S Teleconverter TC-17E II — 4 Audit

## Disposition and exact scope

READY_FOR_BATCH, subject to the archive-only replay closure recorded in the external Stage4 replay/freeze receipt. This is pre-integration readiness, with integrationStatus INTEGRATION_PENDING. The unchanged native converter data is accepted as a bounded patent-correlated model. No prescription, semi-diameter, glass class, motion law, nominal multiplier, host setting or numeric metadata was changed in Pass B. Evidence confidence labels and one clean-analysis metadata paragraph were corrected.

The canonical native application file is `.teleconverter.ts`, not a renamed `.data.ts`: current TeleconverterDataInput requirements override generic older workflow wording. Eleven canonical files include original patent/card, clean pair, evidence, complete verifier, results, audit, manifest, an essential original-pixel comparison figure and replay README. Shared archives are dependency-bound outside the dossier.

## Job, references and lineage

Fixed card: JP2005107261A, Example 5, Nikon AF-S Teleconverter TC-17E II. Source PDF/card bytes are unchanged. Main is pinned to 33ec433d56ed0044db432d6b0ff0395554d14696; all 20 controlling raw blobs match their recorded earlier retrieval and the current tree. The old retrieval manifest is retained as historical provenance, not relabeled as a fresh download. CHAT-1.0 protocol/contract and Stage4 prompt apply. Source/member identities and prior private delivery receipts are bound in the manifest and support delta.

The original clearance row was exposed only during Pass B. Its old blank-render note does not describe the present legible Poppler/PyMuPDF renders; its casual “exactly” statements do not replace explicit numerical residuals. The CSV is unchanged. The selected source, topology, nominal multiplier and approved scope agree. Earlier unsuccessful Stage2 fixture-schema trial and Stage3 prose-check fixture history remain in their immutable support archives.

## Independence and immutable Pass A

Pass A started exclusively from the neutral 47-member original-source/reference archive, before author/candidate inputs or clearance notes were opened. The fixed product, publication, example and archive/ref identities were exposed by the handoff. Original patent sibling panels/text and common method examples were visible while reviewing sources. A fresh task or fingerprint is not claimed to prove blindness or erase prior context.

The independently re-entered literal prescription, conventions, code, results, figure inference, exposure record and audit were frozen in a 10-file archive. The coordinator privately preserved it and independently reproduced every JSON value and figure byte before author/candidate exposure. Its content fingerprint is 471b1046d4f9bc6ceea1a4fa3c7303bc23a53f042a628d0fe19b6ef0520859ef; archive SHA256 c6c7da95b5d9ea860bd366861b1adae919d811e06ab13e6f80ae3f0025a87196. Nothing in that archive was rewritten.

Final evidence.independentPass retains the full frozen evidence; results.independentBaseline retains freshly recomputed source-only results and every raw strict comparison. The complete original Pass A code is visibly embedded verbatim in verify.py and hash-checked before execution in a private non-main namespace. This is static, audited program inclusion, not eval of TypeScript or external code. A separate source-only archive replay additionally verifies the complete original report and figure. Later reconciliation and validation are after candidate exposure and are not described as another blind review.

## Extraction, conventions and source-model transformations

Original glyph review: p1 bibliography/abstract; pp2–4 claims/equations; p5 conventions/common-objective declaration; p6 Table1; pp10–11 Example5/Table6; p14 Figure10; p15 Figure11. d-line nominal588nm is the source convention. Catalog/runtime sampling around587.6nm is separately labeled; no wavelength-based adjustment of source nd. Air n=1, imageward positive z, radius positive when center is imageward, millimetres, scale1, no aspheres, plates, diffractive data or invented cement.

Master surface22 (R=0.0000) is the mechanical M reference. D=-6.90mm from M to converter first vertex combines with master21’s36.9886mm spacing into positive physical junction30.0886mm. Removing M changes no optical transfer. The explicitly printed stop after master16 has1.0mm to17; its index is inferred air, not a fictitious refracting surface. Table1 is an analytical195mm f/2 common objective, not an identified production host. The source master is12 elements/9 air groups; converter7 elements/4 air groups and3 functional groups. The native converter contains no STO; the composed system retains exactly the master stop.

All11 converter radii, distances including last41.4775mm, and nd values agree exactly among raw glyphs, frozen inputs, author evidence and parsed final TypeScript. All vd and downstream cemented elemIds agree. G1 doublet and G2 triplet have one interface at each common boundary; no synthetic cement thickness. Reference48.9mm is a declared rounded model parameter; exact source virtual-object distance48.899981997912mm is kept as its own branch. No marketed value was substituted for a table digit.

## Independently recomputed first-order quantities

| Quantity | Literal source branch | Rounded-reference branch |
|---|---:|---:|
| Master EFL |194.999538755454mm|same|
| Master BFD, from master21 |78.988581997912mm|same|
| Converter standalone EFL |-70.161395298223mm|same|
| Converter first/last-vertex track |39.100000000000mm|same|
| Junction gap |30.088600000000mm|30.088581997912mm|
| Combined EFL |332.063257804952mm|332.063402893431mm|
| Combined BFD, from converter11 |41.477507955668mm|41.477560158921mm|
| Combined/master focal-length ratio |1.702892529512|1.702893273557|
| f-number using source f/2 paraxial EP |3.405785059024|3.405786547115|

The verifier recomputes rather than adopts these printed report numbers. Exact last displayed audit digits follow results.json. Converter H1=+19.9398921739mm from first vertex and H2=-7.8384126596mm from last vertex. et is positive7.8384126596mm. Isolated-air element EFLs in source order are +59.7358181566, -102.3582348548, -20.8678889560, +22.2566779055, -36.5961151194, +39.0984724733 and -48.0999276752mm. Functional groups are +150.6300349088, -35.3076734614 and +162.0733181065mm. Isolated element powers are not in-situ cemented-interface powers or additive focal lengths.

Surface Petzval sums are +0.000576550686382670/mm for the master, -0.000579893656325245/mm for the converter and -0.000003342969942575/mm combined. Per-surface terms are retained; near cancellation alone does not prove flat best focus, low astigmatism or production MTF. Sequential reduced-angle recurrence, separate matrix multiplication, virtual-object specialty checks, thin-lens/plane fixtures and tiny exact-ray limits agree. Master/combined image-track/EFL and BFD/EFL tests are explicit in results; the positive combined system is telephoto in total-track ratio, neither positive system is retrofocus, and standalone negative-converter photography classification is inapplicable.

## Strict printed comparisons and discrepancy disposition

Every failed observation is retained. Strict tolerances are half the last displayed digit, never widened to the source-input sensitivity allowance. “Agrees at stated precision” is not exact equality.

| Comparison | Computed | Printed | Residual | Strict tolerance | Status |
|master_EFL|194.999538755|195|-0.000461244545647|0.5|PASS|
|nominal_beta|1.70289252951|1.7|+0.00289252951202|0.005|PASS|
|last_gap_BFD|41.4775079557|41.4775|+7.9556682735e-06|5e-05|PASS|
|condition_Bf|41.4775079557|41.47753|-2.20443317289e-05|5e-06|FAIL|
|condition_et|7.83841265959|7.8384|+1.26595923948e-05|5e-05|PASS|
|condition_Lr|39.1|39.1|+0|0.005|PASS|
|condition_1|-1.27129080254|-1.2713|+9.19745742411e-06|5e-05|PASS|
|condition_2_trace|0.612030849135|0.606|+0.00603084913464|0.0005|FAIL|
|condition_2_printed_arithmetic|0.612030798164|0.606|+0.0060307981642|0.0005|FAIL|
|condition_3|1.70289252951|1.699|+0.00389252951202|0.0005|FAIL|
|figure11_nominal_fno|3.40578505902|3.4|+0.00578505902403|0.005|FAIL|

The table last gap and the separate condition-block Bf are different source observations. Bf residual -0.000022044332mm fails its0.000005mm strict tolerance; table last-gap residual+0.000007955668mm passes its0.00005mm tolerance. The frozen source-rounding analysis has local absolute-sum BFD sensitivity0.0233648248mm and beta0.00034901893 under explicitly declared half-last-digit input perturbations. These are separate diagnostics, not enlarged acceptance tolerances or proof of actual unprinted digits. Loose natural-interval bounds lose dependencies and are not claimed achievable. In particular, no demonstrated rounding explanation resolves the fine beta discrepancy.

Condition(2) already fails when only printed et/Lr/Bf are arithmetically combined, before tracing. All repeated body/claims inequalities remain satisfied by the literal table: condition1=-1.27129080254, condition2=0.61203084913<0.8 and beta1.70289252951>1.5. The abstract’s different (r1-r2)/(r1+r2) expression is positive0.786602088208 despite negative bounds; the repeated claims/body/Table6 expression is internally coherent. Preserve both source forms. Nominal source f/2 times1.70 gives figure label3.40, while literal paraxial ratio gives3.405785; no physical iris diameter is published.

Disposition: the primary table is unambiguous and independently cross-consistent in BFD, et, track, group signs and system composition. Derived summaries are retained as inconsistent source observations, not “corrected” prescription inputs. This is a defensible limited literal-table model, not a claim that all source summary digits or production behavior reproduce. No mandatory geometry/schema/optical-input failure is waived.

## Figure apertures and baseline reconciliation

All32 non-stop master/converter optical caps were visually reviewed on freshly extracted original native XObjects34/49 after candidate exposure. Full original figure pixels and enlarged shelf/step details are in figure-review.png. Candidate coordinates are visible in Pass B; their visual reconciliation is not falsely described as blind remeasurement. The separate frozen source-only figure estimate remains intact.

Surface3: frozen14.3mm versus candidate14.2mm differs by0.1mm, below the approximately±0.192mm reading band. Retain candidate14.2. Surface10: frozen provisional16.4mm followed the L32 blank/shelf. Original Figure10 clearly ends its front optical curve at about14.97mm and its rear at about16.37mm. Candidate15.0/16.4mm is justified; the baseline’s16.4 front remains preserved as a diagnosed inference. Master9’s32.7mm versus cemented10/rear11’s29.5mm likewise follows a visible step. No source radius or thickness changed to fit a figure.

Final converter SDs:14,14,14.2,13.7,13.7,13.7,14.1,15.1,15.1,15,16.4mm. The author’s original OLS scales15.6350770333px/mm converter and7.0174529090px/mm master recompute exactly. ±3 native pixels gives reading bands about±0.192/±0.428mm, not metrological confidence intervals. ENV/RIM screens, including under-read/contaminated rows, are retained and freshly rerun; manual optical endpoints govern. Manufacturer barrel dimensions are not clear-aperture measurements.

Paraxial f/2 iris radius20.313001910858mm belongs to frozen Pass A. The runtime’s exact marginal-ray calibration gives20.917782496424mm for the same48.749884688864mm entrance-pupil radius. A separate analytic exact trace reproduces that stop within8e-14mm. Neither inferred stop is independent evidence of a production diaphragm. The stop is preserved across compositions; no inferred finite-focus law exists.

## Geometry and actual application checks

The independent analytic sphere calculation on master and both combinations gives minimum glass thickness1.117551922446mm, maximum rim angle46.012773263188degrees and maximum shared-band gap intrusion fraction0.860337023544, below unchanged0.9. Stop collapse is used only to evaluate the actual glass-to-glass gap across the no-power plane; the trace retains the stop. The converter alone has minimum shared-band edge thickness1.770893mm and maximum rim slope tangent0.827581, with all three air gaps opening outward. All spherical domains, edge thicknesses, cap ratios and source junction gaps pass. No conic/asphere domain extrapolation, gap-sag override, artificial layout offset or aperture inflation was used.

Fresh real project code from pinned raw blobs executes native TeleconverterDataInput validation, analytical-master/composed validation, full TypeScript AST parsing and targeted type checking, Prettier3.6.2, actual glass resolution, composition, ray logic and element-render diagnostics. Renderer trim count is0 for master and both branches; source/candidate silhouette is visually consistent, including unequal caps. These are actual targeted runtime tests, not a claim that the exact npm audit CLI/full application UI or full repository build ran. Native code/taxonomy/defaults are pinned, and all919 host source records are parsed with fixtures.203 are Nikon F; none are enrolled/pre-geometry eligible. No production host was edited or enrolled.

## Exact rays, launch semantics and denominator audit

Frozen Pass A independently aims individual pupil targets through the paraxial-calibrated stop:485 targets,446 exact paths found,39 unresolved,417 passing provisional converter rims and29 clipping those provisional rims. Master clear apertures were intentionally not imposed there. Its target grid and calibration are different from the application’s launch convention; do not equate the counts.

Pass B independently follows29905 actual runtime launch lines with analytic supporting-sphere intersections and vector Snell:9199 bare-master plus10353 in each composition, across all named signed image-height grids, dense source axial rays and normal off-axis fans. Every transmitted-versus-excluded decision matches per sample. Maximum transmitted image-intercept residual is below7.6e-13mm. Runtime clipped versus FAILED remains separately recorded: analytical outside-cap continuation is never reclassified as runtime transmission.

Each composition passes4001/4001 source f/2 axial samples, the source Y=21.60mm chief, and six normal axial viewer rays. Each normal off-axis fan attempts5 launch offsets about one converged central chief and transmits3, clips2, fails0. For each signed maximum-height grid,577 attempted/aim-supported launches divide into411 transmitted,110 clipped and56 FAILED noBracket. The analytic comparison excludes all166:93 at master1,72 atTC1 and1 atTC3, preserving which56 are runtime failures. Those56 have supporting-sphere continuations outside master1, not accepted physical-cap hits. The normal fan’s TC1 margin failure is only0.194613621mm versus14mm cap, comparable to figure-reading uncertainty; no rim is enlarged for it.

The single-chief-plus-offset construction is not individual stop aiming. Counts are unweighted samples, not measured throughput or continuum guarantees. Source axial and source-field chief transmission are the required physical floors; complete field/default-fan accounting and physical localization are required, but a universal all-outer-pupil or zero-focus-transmission gate is neither invented nor used to waive actual geometry defects. Optional outer-pupil stress and proxy spectra remain separate diagnostics. No finite focusing behavior is inferred from unchanged marketed MFD.

## Glass/catalog reconciliation

Frozen primary coordinate sets were freshly parsed without author labels: CDGM352, HOYA435, OHARA433, SCHOTT366, SUMITA433 AGF rows and HIKARI155 workbook rows. Their explicitly primary-sheet spectral supplements remain unchanged. Pass B parses each relevant workbook/AGF representation independently via stdlib XML/AGF, including the37-row Schott Inquiry sheet beyond the121-row preferred sheet. Author coverage therefore reconciles exactly as CDGM680, HOYA674, OHARA580, SCHOTT524, SUMITA558, HIKARI155 representations; these are not unique-glass totals.

All288 retained candidate records for the16 unique source/master coordinates are matched to original maker, format, row/line/sheet, nd/vd and coefficients. Independent and author ranking metrics differ (nd/.0001 versusnd/.001; both vd/.1); ranking is a screen, not identity. The final class-level strings and all OHARA legacy/S-/L- prefixes remain distinct. Runtime proxies are S-TIL6, J-LASF09A, H-ZLaF50D, S-TIM28, S-LAH58, S-FSL5, S-LAH58. Source nd/vd remains literal. Runtime green residuals and current/legacy coefficient differences are retained. No nC/nF/ng/dPgF is invented as measured patent data; no supplier/melt, APD/ED or APO performance is established.

## Manufacturer, provenance and correction register

Original Nikon specification HTML, optical-section PNG and download-center manual substantiate1.7x,7/4, dedicated AF-S/AF-I front/NikonF rear,31.5mm mount interval,43.5mm overall length,66mm maximum diameter,250g and unchanged host MFD. Mechanical versus optical reference planes differ. Manual compatibility warnings preclude universal-fit inference. Patent-to-production attribution and the master’s marketed identity are unconfirmed.

Archived originals keep their actual earlier retrieval timestamps. No new web fetch is claimed in Stage4. The original patent public retrieval time is unknown. A prior author web-only NikonUSA sheet reportedly dated July2004 lacks original binary bytes after403; it supports at most historical documentation context, not a verified release date. Latin inventor names remain the prior Google bibliography reading with explicit no-original-HTML limitation; the primary original gives福田 直子 and古田 明子. The final clean-analysis paragraph states this plainly. Its metadata and unchanged data header are mutually consistent.

### S4C01 — provenance

Field: sources[patent].retrievalDate. Old: 2026-10-12. New/disposition: None. Evidence: Neutral source inventory; frozen source-only metadata; author intake/review record. No original public retrieval time established. Retain old author date as review/custody context; do not invent a fresh retrieval. Downstream: No optical/input change; original hashes unchanged.

### S4C02 — provenance

Field: productCorrelation.marketing.year. Old: 2004. New/disposition: None. Evidence: Archived author web-only-source-records.json; NikonUSA PDF binary403. Prior web-only sheet reportedly dated July2004 is documentation timing, not independently verified product launch. Retain prior record and limit explicitly. Downstream: No data field changed; no release-year claim in clean analysis.

### S4C03 — prose/source-confidence

Field: analysis Patent Reference; source inventor provenance. Old: Latin names listed without a local provenance qualification; prior manual review claimed all names from original glyphs.. New/disposition: Original Japanese names explicit; Latin spellings retained from prior same-publication Google bibliography web-only record, not independently established or archived as original page bytes.. Evidence: Original p1 福田 直子; 古田 明子; prior web-only record observed2026-10-12T01:12:50Z. Kanji alone do not establish Latin personal-name reading. Preserve candidate metadata convention with honest provenance. Downstream: Data bytes remain unchanged; analysis and evidence confidence labels corrected.

### S4C04 — baseline-reconciliation-not-baseline-edit

Field: frozen provisional surface10 SD. Old: 16.4. New/disposition: Retain final candidate15.0; frozen16.4 stays unchanged. Evidence: Original p14 Figure10 XObject49; visible front optical endpoint before peripheral shelf. Pass A outer-blank inference included shelf; optical front cap about14.97mm while rear about16.37mm. Downstream: No candidate change; final geometry and ray checks use candidate15.0 and16.4.

### S4C05 — baseline-scope-reconciliation

Field: catalog workbook coverage. Old: Frozen Pass A SCHOTT primary sheet121 rows. New/disposition: Pass B additional Inquiry sheet37 rows separately parsed; combined representations524. Evidence: Unchanged SCHOTT workbook xl/worksheets/sheet2.xml Inquiry glasses. Frozen primary-sheet supplement scope was explicit. Author included both sheets; counts describe representations, not unique glasses. Downstream: No baseline rewrite or glass-label change; final full raw-row reconciliation includes both sheets.

## Quantitative claim map and manual prose review

Every mapped claim is bound to the final data hash below and to freshly executed results, not a stored expected answer masquerading as a calculation.

| Analysis/header claim | Fact/result source | Audit treatment |
|---|---|---|
| Patent/example, seven/four, nominal1.7, dedicated fit |F01,F09; raw p1/Table6; primary Nikon originals|Original Japanese names/dates verified; Latin name reading web-only qualified|
| Source reference/junction,41.4775 last gap |F04–F06; sourceModel and independentReview.implementedFirstOrder|Exact source vs rounded native branch separate|
| Element type/nd/vd/fl, G1/G2/G3 roles |implementedModel.elements/functionGroups; independentReview.elementPowers|Seven isolated powers, downstream cementedIDs, orientation and source paragraph0033|
| Converter EFL/track/principal planes |F02,F07; converter; independentReview.implementedFirstOrder|Independent sequential/ABCD and virtual-object checks|
| Master/converter/combined Petzval |F11; per-surface sourceModel arrays|No flat-field/MTF overclaim|
| Conditions and five failed summaries |F08; comparisons; independentBaseline.comparisons|Residual, strict tolerance and source-input rounding separated|
| SDs, shelf/step, pixel scales, uncertainty |S2F01,S4F02; figureReview and original figure-review.png|Candidate retained; frozen inferred differences never overwritten|
| Iris calibration and physical limits |S2F02; sourceModel.pupils; independentRay check|F-number agreement is calibration, not measurement|
|4001/4001,5/3/2/0,577/411/110/56 and margins|S2F03,S4F03; runtimeExecution/capAndAimAudit and independentReview.launchSemanticsCrossCheck|Per-sample launch and exclusion matching; no dropped denominator|
| Glass class/proxy names/line conventions |glassAudit; fresh raw-row reconciliation; runtime proxies|Preserve nd/vd and prefixes; no actual melt claim|
| Infinity-only, MFD, host eligibility |F10,S2F05; focus; full host metadata audit|No guessed focuslaw/enrollment|
| Primary citations and production limits |S4F04; stage4.metadataProvenance and source records|No new retrieval, unverified release date or primary Latin-name confirmation|

The complete executable analysisVerification map checks every context-bound numeric/table/metadata claim and15 deliberately false prose mutations; ten additional model mutations test wrong/mixed tables, sign, scale, index-line substitution, final-gap replacement, synthetic plane, cemented ownership, asphere, focus and spectral invention. Mutation rejection and hash binding are not substitutes for manual interpretation. All nine analysis sections were manually checked for bounded third-person prose, source attribution, citation support and limits of inferred optical roles.

## Trial history, replay and final gate

Stage4 trials01/02/03 successively expanded independent coverage; no optical model edit occurred. Trial01 had238 checks, trial02/03 have240:233 PASS,4 NOT_APPLICABLE,3 integration-scope NOT_RUN. All stage1–4 mandatory checks pass; the11 raw printed observations retain five FAIL values. No failed comparison is removed or disguised as a passing mandatory source match.

The minimal support delta’s archive-only launcher first replays all sealed Stage1/2/3 originals/catalogs, source renders, all1100 pinned raw code blobs,919 host sources, official tools, compiler/formatter/runtime and figure logic. It then separately reruns final-file typechecking, formatting, regenerated analytical master and actual full runtime, the immutable Pass A report/figure, and the consolidated Stage4 verifier/figure in a clean extraction. Only environment.utc is ignored in stable final JSON comparison. The baseline report and both figures must match exactly. Runtime full JSON bytes must match. All canonical and dependency bytes are reverified after execution.

Final approval binds the files listed by the manifest and external freeze/receipt. Run outputs are outside immutable canonical directories. Replayed numerical agreement proves repeatability, while the original glyph review and truly pre-exposure baseline provide separate source evidence. Correction validation used the same reviewer after exposure; this is honestly not a second independent reviewer. The parent performs a subsequent independent coordinator replay after this worker stops.

## Pending integration and limits

NOT_RUN: real enrolled catalog-host optical sweep, repository integration/index/metadata generation, full corpus/full build. These remain integration scope, not silently passed. No host enrollment, repository mutation, upload or user-Mac operation occurred. Geometry, source-input, native schema and actual targeted runtime checks do not substitute for later application acceptance.

Production identity, true clear apertures/iris, historical glass melt spectra, product release timing and exact finite-focus behavior remain unconfirmed. The model makes no universal-host, unvignetted full-pupil, zero-defocus, measured throughput, production-MTF or APO claim. READY_FOR_BATCH with INTEGRATION_PENDING is earned only for this limited exact dossier and replay closure.

Final data SHA256: 5efb1200e993609fe68b4f4b91015bc108082e8bad7866bc72752cd418dfb918

Final analysis SHA256: 95b555112943b79db8c2bf13d59cd0c8257cbd2e375748a3f1cd14564bb0286c

Final verifier SHA256: 8d893e28aa9da94645139ef0714cce7294cf56a8155a848f3cbfae89baa843f0


## V2 conversion — 2026-10-17

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main a85b198951829c52c07bfd83840331363a040449. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog testing was resource-killed and is not a pass. This format conversion is not deployment or complete optical acceptance.

Retained package status: TELECONVERTER_SEPARATE_SCHEMA: JP2005107261A Example5/Table6; preserve all existing validation limits.


## Restricted current-main release candidate, 2026-10-23
Only nikon-af-i-nikkor-300mm-f2-8d-if-ed is qualified by the supplied representative infinity full-MTF evidence, pending independent integration. Other currently eligible hosts are conservatively excluded in metadata, not asserted mechanically incompatible. No optical values were changed. New host declarations require review; finite-focus performance remains uncertified. See HOST_RELEASE_POLICY.json and the original audits for source, material and aperture qualifications.

## 2026-10-25 — Second review: diagram, labels and movement

First rim and label pass after the converter moved into the repo. Compared: the composed local page (`/lens/nikon-af-i-nikkor-300mm-f2-8d-if-ed?v=1&tc=nikon-af-s-teleconverter-tc-17e-ii`, also at 4× device scale and with the element inspector open) against Figure 10 of JP 2005-107261 A (p. 14, lower right; native 400-dpi raster, profiled at 400 dpi on the clean left side), and the element designations and shapes against ¶0033 and Table 6 (pp. 10–11).

Scale from vertex crossings beside the axis: surface 1 → 11 is 609.5 px for 39.10 mm (15.59 px/mm), checked on 1 → 8 (452.5 px / 28.90 mm, 15.66 px/mm) and 4 → 11 (380.5 px / 24.50 mm, 15.53 px/mm); 15.6 px/mm was used. The M line sits 109.5 px (7.0 mm) behind surface 1, matching the printed D = −6.90 mm. Readings are outer ink, which includes about 0.2 mm of line width.

| Surface(s) | Element edge in Figure 10 | Stored sd | Figure sd | Ratio |
| ---------- | ------------------------- | --------: | --------: | ----: |
| 1, 2       | L11 edge                  |      14.0 |      14.0 |  1.00 |
| 3          | L12 edge                  |      14.2 |      14.3 |  1.01 |
| 4, 5, 6    | L21 and L22 edge          |      13.7 |      13.6 |  0.99 |
| 7          | L23 edge                  |      14.1 |      14.0 |  0.99 |
| 8, 9       | L31 edge                  |      15.1 |      14.9 |  0.99 |
| 10         | L32 front curve end       |      15.0 | 14.7–14.9 |  0.99 |
| 10, 11     | L32 blank edge            |  —, 16.4 |      16.3 |  0.99 |

Every rim already agreed with the figure within 2 %. Visible differences on the live page: (1) L32 rendered as a bevel, a straight edge from the 15.0-mm front rim to the 16.4-mm rear rim, where Figure 10 draws a square-cut blank (front curve ending inside a flat shelf, then a cylindrical edge to the rear face); (2) Figure 10 draws L12 about 0.3 mm taller than L11 and L23 about 0.35 mm taller than L22, each with a step at the cemented face, which one sd per cemented surface cannot draw, so the site shows short slanted edges (14.0 → 14.2 and 13.7 → 14.1 mm) with the drawn height order kept; (3) the converter's own diagram labels L11–L32 and the cemented annotations "G1 doublet" / "G2 triplet" were drawn beside the host's "L14" / "L21" doublet labels and its G1–G3 group brackets, so "L21" appeared twice and the converter annotations read as host groups.

### Changes

| Field | Before | After | Evidence |
| ----- | ------ | ----- | -------- |
| Surface 10 `sd` | 15.0 | 16.4 | Figure 10 square-cut L32 blank (edge 16.3 mm); both faces at the blank height draw it square. Validator ok, renderer trims 0 faces, f/2 axial cone reaches surface 10 at 6.30 mm, no in-format change on the mounting host (below). |
| Element `diagramLabel` ×7 | L11 … L32 | removed | Converter rule: the viewer numbers converter elements T1–T7 itself; removes the doubled "L21". `name` keeps the patent's L11–L32. |
| `doublets` / `cemented` | G1 doublet, G2 triplet | D1, T1 | Fujifilm converter convention; the composed page shows "D1" and "TC T1" and inspector tags "DOUBLET TC D1" / "TRIPLET TC T1". |
| Element `role` ×7 | "Positive first component of G1" style | Converter-qualified roles | ¶0006–0010 (condition (1) on the first positive lens; one-positive, two-negative triplet credited with axial and lateral colour, field curvature and coma) and ¶0033 shapes; "of G3" was ambiguous beside the host's G3 bracket. |
| Header comment | Package wording ("Approved … correlation", "approved rounded", coordinate-code glass note, "No catalog host enrollment") | Plain wording, same facts | Glass labels now name catalog equivalents; the converter mounts on the AF-I 300mm f/2.8 D IF-ED. |

Clearance before → after, declared host AF-I Nikkor 300mm f/2.8 D IF-ED (design f/2.9, the fastest and only mounting host): composed EFL 500.578 mm and f/4.9384 unchanged; corner coverage 100.0 % → 100.0 %; sampled axial beam unclipped (axialClip false → false); the largest unclipped axial-ray fraction is 0.9773 of the entrance pupil both bare and composed, so the host's own rims limit it; geometric transmission at 0, 0.41, 0.82, 1.23, 1.64, 2.05 and 2.46° is 100.0, 98.9, 95.7, 92.4, 89.1, 85.9 and 75.0 % before and after. Engine half-field 3.442° → 3.469°: surface 10 had been the limit of the engine's field estimate beyond the format corner (2.47° for 21.6 mm at 500.6 mm). At `minHostFNumber` f/2, an exact trace of the patent objective's axial cone (sin U = 0.25, converging 48.9 mm behind surface 1) reaches surfaces 1–11 at 12.71, 12.34, 12.23, 9.00, 8.42, 7.67, 7.47, 7.30, 6.46, 6.30 and 6.17 mm, so surface 1 keeps the tightest margin (1.29 mm) and nothing changed there. The catalog sweep still mounts on the same one host. In the forced sweep (acceptance switched on for every Nikon F lens) the 37 geometric passes are unchanged; the only differences are mounted corner coverage on two slow undeclared lenses with distant exit pupils, Nikon Dodotto 400mm f/8 (82.8 → 83.1 %) and Nikkor 800mm f/8 ED (68.5 → 68.6 %), whose corner rays reach surface 10 above 15.0 mm.

### Checked and found correct

Element names L11, L12, L21, L22, L23, L31, L32 and groups G1 (+), G2 (−), G3 (+) are the patent's own (Figure 10, ¶0033; R brackets the whole converter). Types agree with the radius signs: L11 positive meniscus and L12 negative meniscus, both convex to the image; L21 and L23 biconcave; L22 and L31 biconvex; L32 negative meniscus convex to the image. All surfaces are spherical, so no `A` labels; a converter carries no stop. No `apd` tags: the patent names no special glass, and the earlier record of Nikon's specification and optical section ("1.7x, 7/4") marks none; the coordinator's view of the Nikon spec image shows 7 elements / 4 groups as a cemented doublet, a cemented triplet and two singlets, matching Figure 10. `groups` stay G1–G3: composition ignores converter groups and draws one "TC 1.7×" bracket, so they cannot collide on the page. The composed header reads "NIKON AF-I NIKKOR 300mm f/2.8 D IF-ED + NIKON AF-S TELECONVERTER TC-17E II", "11 + 7 elements (lens + 1.7× converter)", f = 500.58 mm, f/4.94 (marketed f/4.8). Inspector checks of elements 1, 3, 4, 6 and 7 show the expected type, nd/νd, focal length, glass and role.

Movement: the converter has no moving group. On the prime host the focus overlay shows only G2 (FOCUS) moving, 10.89 mm imageward, with G1, G3 and the converter fixed; at 2.53 m D9 = 16.02 mm and D14 = 4.95 mm as on the bare host; host vertices are identical bare and composed at both focus ends, the image plane stays 302.444 mm from the first vertex, and the focal-length ratio is 1.70289. On a zoom host (AF-S 70-200mm f/2.8G VR II, composed from a scratch copy without the exclusion list, since the file keeps that host off) the ratio is 1.70286, 1.70290 and 1.70289 at the three stations, host vertices are unchanged and the image plane stays at 277.952 mm through zoom and focus.

### Coordinator glass changes

Before this review the coordinator relabelled every glass to the exact catalog coordinates in the form "<glass> (OHARA catalog equivalent; production supplier unspecified)": L11 S-TIL6, L12 S-LAH59, L21 S-LAH65V, L22 S-TIM28, L23 and L32 S-LAH58, L31 S-FSL5. All seven resolve to those catalog entries. The coordinator also added `source.example` (Example 5) and changed the analysis's example row to "Example details"; during this review the file's specs line became "7 ELEMENTS / 4 GROUPS", "1.7× REAR CONVERTER", "ALL SPHERICAL". This review brought the analysis glass table and the L12 / L21 paragraphs in line with the new labels (they had named the earlier Hikari J-LASF09A and CDGM H-ZLaF50D proxies) and replaced the stale "no catalog host is currently enrolled" sentence.

### Open limitations

Surface 10 now states an optical extent past the 14.9-mm curve end the figure draws. On the mounting host and the patent's reference objective it changes no in-format ray, only the engine's beyond-format field estimate; a future host with a distant exit pupil would see slightly less corner vignetting at surface 10 than the drawn curve end implies. The cemented steps at surfaces 2 and 6 remain short slants.

## 2026-10-25 — Pre-release audit

An independent check re-read all 11 rows against Table 6 (no mismatch), confirmed `masterImageDistanceMm` 48.9, the
composed 1.70289× on the AF-I 300mm f/2.8D (no axial clip, corner coverage 100%) and every glass label. It preferred
surface 10 at the figure's curve end (about 15.0 mm) to the 16.4 mm the second review set; Figure 10 draws L32 as a
square blank with a flat shelf, and the standing rule squares such an element at its outer rim, so 16.4 mm stays.
