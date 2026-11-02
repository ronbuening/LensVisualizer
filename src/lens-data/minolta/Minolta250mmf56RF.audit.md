# Stage 4 independent audit — final corrected revision

## Follow-up diagram and movement review

FIG. 3 and the folded live diagram retain the front/primary/secondary proportions. Source identifiers L1, M2, M1, L3, L4, L5 now label the rendered records. Coatings, inactive-side blocking and shared primary blank were rechecked. No finite-focus schedule is supplied. All six rendered glass records retain qualified catalog curves.

## Catalog integration — 2026-10-17

This section records the current catalog decisions. Earlier stages below retain the extraction history and may describe superseded rim or glass choices.

- **Optical-rim source:** US 4,264,136 A Example 2 / FIG. 3 (local PDF page 3, 600 DPI). Reduced the primary outer rim from 30 to 26 mm and the rear doublet from 14.5 to 12.2 mm. Retained the 30 mm front rim, 14 mm secondary, and 14 mm primary central aperture. These are figure estimates, not tabulated dimensions. The physical auto traversal and STO-only mandatory prefix are retained.
- **Glass:** All six rendered element records have qualified spectral proxies (five physical blanks): S-NSL36, N-BK7 and S-TIH3. The source line is unspecified. S-NSL36 has an Abbe residual of about -1.07; source coordinates remain unchanged.
- **Metadata and V2:** Canonicalized the assignee. Added structured source errata for printed N5 = 11.7400 and applied 1.7400: source f and rear-component power support the hypothesis, and claims 1/6 independently require negative rear power. Claim 12 repeats the typo. The design remains f/4.5 versus marketed f/5.6, with a calculated paraxial image plane and no reconstructed finite focus.


## Scope, inputs and reference identity
The exact received Stage 3 ZIP SHA-256 was 1cc3e6d1b840e4fa51ed8386c6c5d9b87af3f2422cb5d5e17b50b3b7363f0ec4 and candidate data SHA-256 was 1a22e21b84851c73fe6a8334112e584cdbb9c510997183f7b96b94347c4a6abc. Source-first PASS A was frozen before opening either candidate or author evidence/results/analysis. Fingerprint: 64ed995db9bcc0f02c98ef2ba3e7bb40a21fea5a95dcf282a20bd6ef471de158. Exposure, original fresh code, inputs, results and frozen file identities are retained in evidence.independentPass. The separate fresh implementation is retained under ind_ names in the consolidated verifier. General method/specification overlap is disclosed; the fingerprint is not a proof of blindness.

Controlling project reference identity is main 66b394809241620190908def6caf9a81d3f3a6f5. The independent audit freshly verified 143 actual engine closure file hashes against the pinned dependency manifest. The actual TypeScript/compiler, Prettier, validator, folded tracer, runtime glass resolver and render diagnostics were executed on the final candidate without lifecycle hooks. No full build, metadata generation, corpus sweep, Git writes, integration or publication occurred.

## Correction and discrepancy register

### A01 — Restore literal N5 and disclose the supported hypothesis
Old evidence called 1.7400 a literal printed value and the pair omitted a source-error caveat. New raw source cell is 11.7400, as visually confirmed at 350 dpi in supplied PDF page 8 Table 2 and page 10 claim 12. The implemented refractive index remains 1.7400 as an explicit hypothesis. Fresh literal calculation produces EFL25.80851775 and LR+7.34541037 versus published100.0 and−27.15; corrected interpretation gives99.97948711 and−27.14879138. Both failed raw comparisons remain in results.comparisons, with a separate supported-resolution gate. No tolerance was widened to hide a mismatch.

### A02 — Qualify the image plane
Old clean prose omitted the source's actual-focus-versus-paraxial distinction. The supplied ten-page patent omits columns7–8; a retrieved eleven-page original scan, downloaded after baseline freeze, visually confirms the second-embodiment discussion on page9. Actual useful focus lies behind paraxial focus because zonal/marginal rays are used; no numeric axial offset is given. Header, focusDescription and analysis now label the stored image plane a calculated paraxial reference. No arbitrary best-focus shift or close-focus mechanism has been added. The frozen HTML-only qualification remains unchanged in the baseline; visual confirmation is a post-freeze annotation.

### A03 — Enforce the already-inferred stop without adding geometry
Old opticalPath was mode:auto alone. Its same-index STO was skipped by the real generalized tracer. On-axis rays0.01,0.1 and1mm outside the declared27.7720797517mm stop all reached IMG on the intended two-mirror branch. This was a material aperture implementation failure, not a tolerance edge.

New opticalPath keeps mode:auto and adds surfaceOrder:["STO"] as a mandatory one-hit entrance prefix. Actual generalizedTrace then performs unrestricted nearest-hit traversal. This does not force a full lens encounter list, change any lens radius/spacing/index/SD, add a surface, or invent a new baffle. All original603 in-pupil outcomes remain unchanged. Outside-stop probes now clip at STO. The finite-sample code normalizes the passive stop separately from13 intended optical interactions.

The portable nearest-hit checker was also corrected to match actual active/inactive mirror aperture classification and passive refractive skipping. Blocked attempted hits are normalized explicitly in parity comparisons. Its18 standard meridional paths now agree with the actual engine in image reach, labels and terminal heights, maximum transmitted image-height residual below3e−10mm. This corrected portable method is not retroactively represented as the independent PASS A method.

### A04 — Preserve blank air cells
Old rawText invented printed1.0000/−1.0000 for blank air index cells. Those rawText cells are now null; their signed±1 working indices remain documented inferences. No optical number changed.

## Independent numerical and geometry result
With the explicit N5 hypothesis, source EFL99.97948710624, BFD17.03257766419, LR EFL−27.14879137752. Nominal2.5× scale gives EFL249.94871776560mm, paraxial BFD42.58144416047mm, first-r1-to-paraxial-image96.88144416047mm. The inferred stop shifts global coordinates+0.25mm, so stored IMG z=97.13144416047mm. Physical track/EFL=0.38760528570; folded vertex path135.3mm is a different quantity. Source signed-index Petzval sum0.0007625968391163 per native unit; all surface terms retained. Standalone glass powers, cemented rear-doublet power and full LR functional-group power are distinct and recomputed from final data.

Five physical blanks/four groups are represented by six elements because primary clear center and silvered annulus tile the same physical blank. All source encounter radii, signed spacings and working media agree with final data. Rim slope, spherical domain, element edge thickness and shared material-band gaps pass the portable geometry checks; all six elements have zero actual render trim. Full pupil/stray-light coverage is not inferred from these tests.

## Real runtime validation and boundary coverage
The repeated603-ray scan has intended13-optical-interaction image-reaching counts92/69/48 at0°/2.9°/4°50′; other direct or multiple-bounce image paths number6/14/17. Fresh2,005-ray meridional coverage sampled401 ordinates at−4°50′,−2.9°,0°,2.9°,4°50′. A further202 skew rays sampled off-meridional paths at0° and4°50′. These scans had zero terminal intersection failures. Positive and negative outside-stop probes at+0.01,+0.1,+1mm were rejected after correction. Real validator errors=0; render trim=0; real TypeScript5.9.3 diagnostics=0; Prettier3.8.1 passes. Runtime glass labels intentionally remain unresolved classes, not supplier-identified curves. The folded runtime EFL is an authored metadata echo and is not used as independent EFL proof.

## Source, glass and product limits
Fresh PASS A checks covered all six named vendor families with bounded scope: targeted official catalog rows, plus the complete435-row current/obsolete HOYA AGF search. N1 remains unmatched; Sumita K-PBK40 has Vd63.5 and is not a match to53.5. Modern equivalents do not identify the original supplier. d-line reference is inferred, not explicitly stated in the patent's N/ν headings. No source nC/nF/ng, anomalous dispersion or APO performance is claimed.

The manufacturer brochure was independently downloaded, hashed and visually rechecked at PDFpage29/printedpage27. It states250mmf/5.6 RF, two mirrors, six lens elements/five groups,10° field,2.5m MFD and integral lens-element filters. The patent is f/4.5, five/four; exact production correlation remains unconfirmed. No filter or focus law is invented. Aperture dimensions/coating radius/stop position are inferred. Direct/multiple-bounce paths remain, so the model does not claim production baffling, stray-light suppression, complete throughput or best-focus performance.

## Quantitative claim map and manual prose review
- Identity, dates and inventorship → supplied patent cover and evidence.job/sources.
- Marketed250mm/f5.6, two mirrors/six elements/five groups,10°/2.5m → rechecked manufacturer source, separate from design facts.
- Literal N5 versus implemented hypothesis → rawPrescription, A01 and rawLiteralSourceEFL/rawLiteralSourceLR comparisons.
- Final element n/ν/class/fl lines → parsed .data.ts elements, implementedModel.elementPowers, independentBaseline.groups.
- EFL/BFD/physical track/global IMG → independentBaseline.correctedHypothesis and implementedModel; all image distances are paraxial.
- LR and cemented rear-pair values → implementedModel.rearFunctionalGroup/rearCementedGroup; not standalone or mirror powers.
- Four conditions → comparisons.patentConditions, source footers and equations.
- STO/SD/innerSd values → parsed surfaces, A03, portable-stop-enforcement and bound real runtime receipt A05.
-603/2,005/202 sample counts, no intersection failure, no trim → A05 executionReceipt; code and143 dependency hashes retained.
- Actual useful focus behind paraxial → post-freeze complete patent scan page9 columns7–8; no numeric offset claim.
- Frozen independence → evidence.independentPass and ind_ calculation paths; no author values entered before freeze.
Manual review covered every analysis section and current header/metadata. No power-sign-only aberration attribution, invented production identity, annular T-stop equivalence, speculative glass identity, guessed focus law, or fixed full-ray label sequence remains.

## Final gate and pending integration
Mandatory source/correction-resolution, numerical, strict literal-parser/mutation, geometry, glass-scope, prose and independent-review checks pass on the final corrected bytes. Clean archive extraction and external-output portable replay are recorded in manifest. READY_FOR_BATCH; INTEGRATION_PENDING. This is pre-integration readiness, not full application/corpus/build acceptance. Broad user-controlled integration checks remain NOT_RUN.

## Superseded Stage1–3 history
The following author record is retained as history. Its statements "No patent correction," bare-auto stop behavior and pre-Stage4 readiness are superseded by A01–A05 above and must not be treated as final conclusions.

# Minolta 250mm F5.6 RF: US4264136A Example 2

## Job and reference versions
Original card and original 10-page image-only PDF preserved byte-for-byte. Current main was freshly resolved through GitHub at 2026-10-02 21:20 UTC: 66b394809241620190908def6caf9a81d3f3a6f5. All 26 controlling reference copies match pinned Git blobs and their SHA-256 hashes. A separate 218-file engine dependency verification has zero current-main mismatches; no repository writes or broad build commands were used.

## Extraction and conventions
PDF pages 1, 3, 6, 7 and 8 were rendered and visually inspected. Table 2 on PDF page 8 is the selected complete 13-encounter prescription. Repeated r3, r4 and r5 labels denote repeated glass crossings; negative d and N denote return travel. Two second-surface mirrors cannot be replaced by a conventional positive-index array. No numerical source correction is made. The figure 4a aperture is F4.5, whereas the product card identifies a marketed F5.6 lens. These quantities remain separate.

## Model transformations
Uniform scale 2.5 changes source f=100 nominal to marketed 250 nominal. Source-computed EFL remains 99.9794871062, giving 249.948717766 mm, not exactly 250. The primary blank has a silvered outer annulus and a clear central region: Stage 2 must model complementary regions at identical stations/radii. One physical blank does not become two physical elements. The source has five lens blanks in four groups. Stop and SDs are missing and are Stage 2 inferred-geometry work, not primary data. No finite-focus motion is invented.

## Glass review
Native coordinates are retained: 1.5176/53.5, 1.5168/64.1, 1.7400/28.3. Six project catalog families were screened, with provenance and limitations in evidence. Fresh primary OHARA S-NSL36, SCHOTT N-BK7 and CDGM H-ZF5 evidence supports comparison only. L1 remains Unmatched. The other glasses use borosilicate crown / dense flint classes. No glass supplier, melt identity or dispersion curve is asserted. Patent d-line interpretation is inferred, not explicitly printed.

## Numerical results
The portable verifier separately executes signed Gaussian matrices and sequential y,q rays. Native EFL 99.9794871062, BFD from r9 17.0325776642, global front-to-image track 38.7525776642. Rear negative component fR=-27.1487913775 reproduces published -27.15. All four patent inequalities pass; surface-by-surface signed Petzval terms and principal planes are retained in results. The matrix determinant and sequential residual are tested. No unsupported unfolded physical-track statement is made.

## Correction and discrepancy register
No patent correction. Product correlation is unconfirmed: marketed f/5.6 differs from Example 2 f/4.5; manufacturer brochure says six elements/five groups versus patent five/four. An integral filter is a possible explanation of the count difference but is not proven and is not invented. Source diagram D/field are both preserved; exact field distortion is not derived from one using the other.

## Gate disposition
Stage 1 mandatory source and applicable numerical checks pass: READY_FOR_DATA. Inferred stop/SD/obstruction and exact physical folded geometry are Stage 2 tasks. Close focus remains NO_INTERNAL_RECONSTRUCTION. There has not yet been a fresh Stage 4 independent review.

## Pending integration
Actual TypeScript/schema, project tracing/rendering/runtime-glass checks are distinct from portable calculations. Only targeted checks are allowed. Full corpus, metadata generation, production build, Git integration and publication remain unperformed and user-controlled.

## Stage 2 construction and correction
The candidate contains twelve unique surface records, six rendered element entries and five physical blanks. The data uses opticalPath.mode="auto" with maxInteractions=32. The clear front CF and annular front M1F share a station/curvature and tile the primary front; CB and M1B tile its rear. The model list resets -4 mm from CB to M1F; this is a station-definition reset, not an extra optical distance. Positive physical indices are used, and reflection reverses actual direction.

An early fixed encounter list was rejected during construction because a return ray near the primary coating boundary could cross the central clear glass but skip the annular label, omitting a refraction. An early planar proxy obstruction also proved unsuitable for physical automatic traversal. Both were removed before any Stage 2 approval: automatic nearest-hit traversal now resolves each real interface, and the secondary's inactive coating side provides the actual modeled obstruction. No patent number, signed spacing, radius, or index was changed.

Modeled apertures are not measured: front SD 30 mm; primary annulus 14–30 mm; central primary plug 14 mm; secondary 14 mm; rear doublet 14.5 mm. The entrance stop lies 0.25 mm ahead of r1 and has SD=27.7720797517 mm. Its f/4.5 agreement is calibration. It does not establish transmission, T-stop, or the marketed f/5.6 prescription. Inferred geometry passes actual rim-slope, material-band gap, edge-thickness and production trim checks without a diagnostic exception.

Actual targeted project checks: TypeScript 5.9.3 against the real LensDataInput type (zero diagnostics), Prettier 3.8.1 with the current config, buildLens/validateLensData (zero validator errors), runtime glass labels (all intentional unresolved classes), and production element render diagnostics (zero trim). No full build, metadata hook or corpus sweep was used. The current-main engine dependency proof covers 218 package/optics/types/reference files; complete small runners are retained in the evidence receipt. Engine folded EFL uses the authored design hint and is not claimed as an independent calculation.

A 603-ray actual physical-engine scan used 201 pupil ordinates from -1 to +1 at fields 0°, 2.9° and 4°50′. There were no intersection failures. At these fields, 92, 69 and 48 rays respectively followed the 13-interaction two-mirror imaging branch. Additional direct or multiple-bounce rays exist because the patent does not specify full baffles or stops; no baffle has been invented to suppress them. This is a physical optical prescription model, not a validated production stray-light system. Central obstruction and off-axis vignetting are expected; no uniform full-field illumination is claimed. The portable verifier has an independently written nearest-hit spherical/vector path and compares the actual-data nominal imaging branch against every signed source encounter.

Stage 2 numerical, geometry, parser/mutation and recorded targeted-project checks pass. READY_FOR_ANALYSIS binds only to the archived eight-file checkpoint and its hashes.

## Stage 3 analysis review and claim-to-fact map
Stage 3 preserved the exact Stage 2 data/evidence bytes. The verifier was extended only to retain separately computed rear-doublet and rear-functional-group matrices; existing computations were rerun on the same final data. No source or geometry correction was made during analysis authoring.

- Identification block → original patent cover, source `patent`, synchronized patentNumber/patentAuthors/patentAssignees/patentYear.
- Marketed focal length/aperture, MFD, field and construction → manufacturer source, evidence productCorrelation; they remain distinct from the patent.
- Physical five/four versus rendered six → rawPrescription.physicalCount and parsed data elementCount/groupCount/elements.
- Element first-line nd/νd, class and standalone focal lengths → parsed elements and implementedModel.elementPowers; all stored fl residuals are zero within 1e-8 mm.
- EFL/BFD/global track and image plane → implementedModel.EFL/BFD/track, actual surface stations, image-plane check; offset is declared 0.25 mm.
- Rear LR focal length → source rear-group-source check and implementedModel.rearFunctionalGroup; cemented rear group is separately retained and not conflated.
- All four conditional values → comparisons.patentConditions; bounds and native published quantities remain visible.
- Radial apertures and STO → actual parsed surfaces; stop calibration test is explicitly non-independent of f/4.5.
- Engine sampling counts/zero intersection failures/zero render trim → exact-data-hash execution receipt M06 with complete runner code, tool versions and dependency identity.
- Fixed-focus and glass limitations → evidence.focus and glassEvidence; no unsupported finite-focus or spectral claims added.

Manual interpretive review checked every section against the patent pages and final data: no inference of isolated aberration contribution from glass/power sign, no production-confirmation claim, no pupil/throughput equivalence for annular aperture, and no reinterpretation of the negative station reset as propagation. Conventional primary-source links remain usable outside the conversation. The all-spherical asphere section is omitted, with a short applicability statement in Focus Mechanism.

Stage 3 source/data/numerical/disclosure/section checks pass. READY_FOR_AUDIT remains pre-integration and awaits a fresh source-first independent Stage 4 review.
