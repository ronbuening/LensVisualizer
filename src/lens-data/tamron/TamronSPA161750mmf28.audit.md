# Tamron A16 / JP2007133138A Example 2 — Consolidated audit

> Final Stage4 disposition and corrections are in the last section. The retained Stages1–3 record below is historical: its tele d5=26.028 extraction and dependent numbers were superseded after original-image review. Earlier candidate approvals do not bind the corrected bytes.


## Stage 1 source-first record

Job: Tamron SP AF 17–50mm f/2.8 XR Di II LD Aspherical [IF] (A16), Example 2. The original card and original 23-page PDF are unmodified. Extraction was made from rendered original pages, not a prior lens candidate. PDF text extraction yielded no text. Pages 17–20 and Figure 5 on p22 were inspected at 150 dpi; ambiguous r28 was reinspected at 300 dpi. Google Patents searchable publication independently corroborated that reading.

The controlling references are pinned to main commit `3d44a1be91db853725ac841b65a9e228f2c544ef`, freshly resolved 2026-10-02 19:15 UTC by the sibling reference verifier. All 26 local controlling references match SHA-256 and pinned Git blob identities. Existing local engine source bytes also match that pin, although checkout HEAD differs. No Git writes, metadata generation, corpus sweep or build is authorized or run.

## Extraction and conventions

- pp17–18 ¶0074–0079 identify Example 2 and the +/−/+/+ functional groups, with G4 split into positive G41/G42 subunits.
- pp18–19 ¶0080 transcribes all 32 planes including stop r16, with three infinity zoom stations. Source d32 is the physical gap to image, not an adjusted BFD.
- p19 ¶0081 and p20 Eq(5) give bonded aspheres r6/r23, A=1, nonzero A4/A6/A8/A10. The model convention is K=A−1=0, coefficient units mm^(1−p). No scaling.
- The two 0.2 mm low-index layers are explicitly retained. The patent identifies 16 physical lens bodies; model media count is 18. They form 13 air-separated components. Neither layer is invented cement.
- No rear cover/filter or inactive dummy plane occurs in this selected example. The current project rule would retain such plates using rearPlates, superseding the older generic workflow omission language where applicable.

## Transcription correction, not patent correction

The first low-resolution reading of r28 was −80.6062 mm. It produced EFL 17.407977/30.013343/48.528150 mm, BFD 39.929911/51.257190/62.091624 mm and G4 EFL 37.469250 mm. These failed source rounding checks. A 300 dpi crop of the original PDF clearly reads −80.6962 mm, also found in the searchable publication. The evidence preserves the misread and correction; no patent value was modified.

With the correct r28, two independently implemented paraxial methods give EFL 17.401052/29.998596/48.499965 mm and BFD 39.910759/51.227968/62.050790 mm. The printed values are 17.40/30.00/48.50 mm and d32 39.9110/51.2280/62.0510 mm. Comparisons retain all residuals, with 0.005 mm EFL tolerance (half printed unit) and 0.002 mm BFD tolerance for propagated prescription rounding. The last gap remains exactly printed.

G2/G3/G4/G41 EFLs and principal-plane interval e4 agree with the source. Four patent inequalities pass from executed quantities. Sequential reduced-angle and independent ABCD calculations agree to machine precision; an analytic thin-lens reference test passes. Per-surface Petzval terms, standalone media powers, cemented composite powers, pupil conjugates, track and principal planes are retained in results.

## Zoom, focus and aperture

Published zoom gaps d5/d15/d22/d32 are all retained. In the fixed-image coordinate frame G2 reverses between the wide/middle/tele samples; the middle station is essential. Relative-gap statements and absolute fixed-image movements are kept distinct. No extrapolated mechanical cam law is asserted.

Paragraph 0077 says G2 moves objectward for close focus, but supplies no finite-conjugate rows. Focus disposition is NO_INTERNAL_RECONSTRUCTION. Marketing MFD 0.27 m is not enough to derive the law. Stage 2 will repeat infinity values across the focus axis and disclose the limitation. No finite-conjugate certification is allowed.

No published stop diameter or SD exists. Stage 2 must infer a station iris schedule from source f/2.88 and derive plausible clear apertures from actual rays/section while satisfying material thickness, conic domain, rim slope, shared-gap policy and off-axis containment. Calibration to f/2.88 is not independent verification of a physical iris.

## Product and glass provenance

Tamron's official A16 archive/manual verify APS-C, non-VC A16, 2006 release, 17–50 mm f/2.8, 16 elements in 13 groups, 0.27 m MFD and Canon EF/Nikon F/Sony A/Pentax K variants. These support the selected correlation but do not establish manufacturer-confirmed patent attribution. Patent EFL/F-number/full fields differ from marketing values and remain distinct.

All ten distinct nd/νd pairs were searched against the six pinned project vendor inventories (OHARA, HOYA, Schott, Hikari, CDGM, Sumita). Candidate rows, residuals and provenance are retained in evidence and recomputed in results. Fresh official OHARA pages/revision notice, Schott catalog, Hikari PDF, CDGM database and HOYA download index were also inspected. HOYA fresh AGF download failed; already-retained vendor AGF bytes and pinned transcription were inspected without claiming new download. Sumita coverage is limited to the pinned vendor-derived inventory. The bonded-layer coordinates remain Unmatched. All other labels are class/code-level; no supplier, melt or proprietary resin chemistry is asserted. The patent gives no nC/nF/ng/dPgF; assigning candidate spectral values to actual media would overstate identity.

## Stage 1 disposition

Mandatory Stage 1 source, first-order, convention, movement, glass and correlation checks pass. Construction tasks are explicitly deferred, not marked passed. READY_FOR_DATA binds only to this seven-file checkpoint. Independent Stage 4 and all integration gates remain pending. (Closed: Stage 4 below; integrated 2026-10-20.)

## Reproduction

Run `python TamronSPA161750mmf28.verify.py --package-dir . --output ../replayed-results.json` with Python 3, NumPy and SciPy. No network or repository is required. Replay recomputes from evidence; later stages load the actual data file with a rejecting literal parser. Packaged results must not be overwritten during replay.

## Stage 2 construction and geometry

The root-level literal-only candidate follows the current template, LensDataInput and taxonomy. Raw R/d/nd, all four variable gaps at every zoom state, all nonzero asphere terms and source medium-after-surface conventions are retained. Exactly one STO replaces source label16. Each bonded layer remains a real source medium. No optical scaling, cover-plate omission, glass substitution or best-focus image shift was introduced. Element focal lengths are isolated-media-in-air powers; compound powers are separate.

The literal lexer/parser reads the final formatted data file. It accepts the declared literal grammar with comments, trailing commas and signed/scientific numbers, and rejects duplicate keys, unsupported expressions/calls/spreads/computed keys, nonfinite values and unparsed suffixes. Portable accepted/malformed fixtures and seven radius/coefficient/zoom/coordinate/power/metadata/gap mutations exercise real rejecting checks. This is documented-structure preflight, separately backed by actual TypeScript5.9.3 strict/noEmit using project LensDataInput (virtual source, no repository write).

The iris schedule is calculated from f/2.88 at each source station with exact marginal rays: 7.248015446, 8.182159932 and 9.289859309 mm. The actual project from-nominal-fno option reproduces the independent calculation. Intermediate iris radii are linearly interpolated; no constant physical diaphragm or independently verified unpublished diameter is claimed.

Clear apertures began from the maximum exact source-station envelope at0/0.6 field and full-field chief rays plus typically10% clearance. Boundaries12/13 and20/21 needed narrower radii8.05 and10.3 mm to satisfy the real shared-gap policy while preserving required ray clearance. Junctions2/24/29 were enlarged to27/12.1/14.2 mm; rear30 is13.9 mm. A subsequent full-field trial showed four failed rear-surface intersections beyond the material aperture. Entry28 was set13.2 mm so those extreme rays are clipped at a physical outer edge before that unsupported extension. All these apertures are inferred, not sourced or concealed with display trim. Trial failures are retained here, not reported as final passes.

Final independent conic/polynomial checks cover nine zoom positions0,0.125,0.25,0.375,0.5,0.625,0.75,0.875,1. Both identical focus columns have the same geometry. Actual rim-angle maximum is50.04863 degrees; minimum sampled material thickness is0.083283 mm. Full mathematical conic domains remain valid. Every shared radial-band gap stays within the0.90 policy. Thickness/gap sampling uses301 radii per pair; this is finite sampling, not a continuous-domain theorem.

The portable verifier and actual project engine sample675 three-dimensional stop-aimed cases (0/0.6/1 of the published half-field; centre plus8 azimuths at0.5/0.75/1 pupil radius; nine zoom states). All default representative0/0.6-field bundles through0.75 pupil and full-field chiefs pass. The actual project reports556 through rays,97 outer-edge clips, zero trace failures and22 unavailable aim solutions at peripheral full-field samples. No first clip is inside a bonded/cemented interface. The latter cases are explicitly outside the full-pupil transmission claim; field vignetting is not erased. Source aberration figures do not establish clear-aperture throughput.

Actual buildLens/validateLensData passes. Actual computeElementRenderDiagnosticsForState2 reports zero hidden material trim at all nine states. Production computeElementShapesForState2 SVG paths were exported at the three published stations and visually inspected against Figure5: no cross-gap collisions or missing bonded layers were seen. This was a targeted shape export, not a browser UI or full production-build test. TypeScript strict checking and actual Prettier3.8.1 check pass. Runtime glass resolution was executed and its chosen coordinate proxies are recorded; class/code labels may select one candidate for spectral rendering, which is not evidence of actual melt identity.

The final data SHA-256 binds the project execution receipt in evidence. Clean replay independently recomputes source and final-file optics/geometry; it validates the receipt binding without pretending to rerun the external project tools. Shared runner source, tool versions and pin proof are embedded in evidence. No forbidden hooks or corpus checks ran.

## Stage 2 disposition

READY_FOR_ANALYSIS is earned for the exact eight-file checkpoint and final data hash recorded in the manifest. Remaining limitations are unpublished finite focus/apertures, inferred SD/iris, supplier/melt identity, peripheral full-field vignetting, interpolation and pending independent audit/integration (audit and integration since closed). They do not assert unverified close-focus or full-pupil performance.

## Rear-material narrative clarification

Source p17 ¶0076 proposes plastic molding for suitable rear-group lenses, and p20 ¶0089 describes G3/G4 as plastic-molded. A high-resolution visual recheck confirms the wording. The numerical example identifies no chemistry or supplier. Catalog classes and runtime spectral proxies therefore describe coordinate compatibility only, not a claim that every physical body is glass. This added source qualification changes no numerical model or data byte. Stage2 source/numerical/construction checks were rerun and the checkpoint rebound to the expanded evidence.

## Stage 3 entry and cross-file verification

The incoming Stage2 files were copied and replayed before analysis authoring; stable results matched byte-for-byte. The final data remained SHA-256 `1486b79452021111fe26ab98e789ab49a1a74c9f1b43b2424a1c4b92e01f2a1c` throughout Stage3. No optical data changed. The additional primary-source material qualification in ¶0076/¶0089 was carried into evidence and both checkpoints; Stage2 was fully rerun and rebound rather than inheriting approval over different evidence bytes. The Stage3 verifier adds only analysis checks to the inherited numerical/construction algorithms, and reruns all inherited checks.

The analysis follows the required metadata block and section order, with separate coverage of all18 modeled media. Its computed values are checked against the actual final-file computation, not a second editable production model. Numerical checks normalize typographic minus and whitespace only. Intentional changed-inventor and removed-focus-disposition fixtures fail.

### Quantitative claim map

- Identification counts and display metadata → `facts.metadata`, `facts.elementValues`, check `physical_and_model_counts`, source ¶0074–¶0075 and Tamron primary product page.
- Architecture EFL/BFD/authored track table → `implementedModel[0.0/0.5/1.0].optics`; source comparisons remain in `comparisons`.
- Functional-group focal-length table → `sourceModel.wide.groups` (source and final data are exactly mapped); final-file `implementedModel[*].optics.groups` recomputes the same inputs.
- Per-element first-line nd/νd/glass/type/power → parsed `data.elements`, `facts.elementValues`, with isolated-media powers checked against `implementedModel[*].optics.elements`.
- D1/H1/D2/H2/D3 compound focal lengths → `sourceModel.wide.compoundEFL_mm` and implemented-state counterparts; prose separates compound from isolated power.
- Petzval → `implementedModel[*].optics.petzvalSurface` and `petzvalSum_per_mm`, all applicable refracting surfaces.
- All source zoom spacing values → actual `data.var` plus raw source spacing rows; gap and base-value equality is checked.
- Fixed-image group vertex table and G2 reversal → `facts.groupMovements`, calculated directly from the same source-exact distances.
- Asphere equation/conic/coefficients → source Eq(5), ¶0081 and parsed `data.asph`; modeled-rim departures → `facts.asphereDepartures`.
- Conditions and principal-plane interval → `facts.conditions` and group matrices; no d25/e4 conflation.
- Iris calibration → `facts.calibratedIrisRadii_mm`, with actual-project station agreement in the hash-bound execution receipt.
- Minimum sampled thickness and maximum actual rim angle → check `physical_geometry` and `facts.geometry`.
- 675-case actual-engine coverage/counts → `facts.projectExecutionReceipt.checks.exactTrace`; portable detailed coverage is separately preserved in `facts.exactRaySampling`.
- Zero hidden material trim → actual `project_renderTrim` receipt from the identified engine; no full-build or browser claim.

The complete rendered-string/result-path map is also generated as `facts.analysisClaimMap`. Manufacturer specifications are clearly labeled source-published marketing values, not computed design facts. Primary citation destinations and patent page/paragraph/figure references were manually reviewed. Interpretive prose avoids attributing a specific aberration contribution from glass class or power sign alone; the patent's rear-plastic narrative prevents treating optical glass proxies as actual composition. No APO or finite-focus performance assertion is made.

## Stage 3 disposition

READY_FOR_AUDIT applies only after the final nine-file manifest/ZIP hash check and clean replay. Independent Stage4 has not been performed in this authoring context. Integration remains pending (closed 2026-10-20). No repository file, Git state, build output, corpus artifact or publication was changed by this task.


## Stage 4 independent source-first audit

### Exposure, frozen identity and later correction

Before candidate access, a separate reviewer re-entered the original PDF tables and used fresh reduced-angle and ABCD calculations. No prior data, analysis, evidence, result, audit or author glass choice was opened. The PASS A checkpoint contains the unchanged original PDF/card and its eight-file frozen baseline. Its fingerprint is `1324ac0c3b15c6ca2dd1d8b70f87e05ffdd37a54a2eeb0a805b38e1e05b5ca32`. Exact frozen text bytes, original-source hashes and the fingerprint recipe survive under evidence.independentPass. The consolidated verifier executes a separately named independent calculation path; stored baseline answers are comparison data only.

PASS B opened Stage 3 ZIP SHA256 `5d55a06ea9620e7098a9e0eb75c08449f924af886e7a4e6a656b31c3be34a902`, whose data SHA256 was `1486b79452021111fe26ab98e789ab49a1a74c9f1b43b2424a1c4b92e01f2a1c`. All original candidate file hashes are preserved in independentPass. These are author material, not evidence that the source-only pass was blind.

Two disagreements required new 350 dpi renders of original pages 18–19. Both are transcription issues, not proposed patent corrections:

| ID | Affected record | Old | Source-confirmed value | Disposition and effect |
|---|---|---:|---:|---|
| S4-C01 | Author/candidate tele d5, PDF p18 ¶0080 | 26.028 mm | 26.0258 mm | Correct evidence raw text and actual TS repeated tele pair. Recompute EFL/BFD/track, intermediate zoom, iris, rays and every dependent claim. The preexisting EFL tolerance pass did not justify the wrong digit sequence. |
| S4-C02 | Frozen reviewer r23 A8, PDF p19 ¶0081 | +1.48358e−10 mm⁻⁷ | −1.48358e−10 mm⁻⁷ | Candidate was already right. Keep frozen baseline unchanged, apply an explicit annotation to the separate reconciliation inputs. No paraxial effect; finite-height sag must use the negative sign. |

S4-C02 would change the r23 polynomial departure at the later-inspected modeled SD 11.8 mm from −0.6364929841 to −0.7480243508 mm. The baseline had made no physical-rim claim because no SD was then available. This post-exposure correction check is disclosed and is not represented as a new blind pass.

### Final numerical and motion reconciliation

All actual candidate R/d/nd/medium assignments, three variable-gap schedules, and aspheric coefficients now match the independently extracted original plus the explicit baseline-sign correction. The final tele values are EFL 48.4979473722 mm, BFD 62.0514915686 mm and first-vertex-to-published-image track 155.3119 mm. The old candidate gave EFL 48.4999651612, BFD 62.0507902159 and track 155.3141 mm. The printed EFL 48.50 and d32=62.0510 are unchanged and their residuals remain in results.comparisons.

The wide/middle results remain EFL 17.4010523957/29.9985961028 mm and BFD 39.9107589568/51.2279684089 mm. Group powers, cemented powers, per-medium standalone powers, principal-plane interval e4=12.2085872288 mm, and Petzval +0.002767830289 mm⁻¹ agree between the independent and candidate paths. The corrected condition f3/ft is 0.8810800849. All published inequalities pass. BFD>EFL at each source station; TL/EFL remains greater than 1 at each state. No telephoto, APO or source-performance claim is inferred merely from a product name.

Fixed-image G1 motion is −27.6917 mm wide-to-tele. G2's sampled +0.2350/−4.3793 mm moves preserve its reversal. Gap mapping and unaltered within-group thicknesses are verified. Intermediates are piecewise-linear model interpolation, not published cam measurements. Focus remains NO_INTERNAL_RECONSTRUCTION; repeated focus columns do not certify the production 0.27 m conjugate.

### Iris, geometry, actual runtime and visual review

The frozen paraxial calibrated stop radii 7.1491162/7.9814941/8.9172276 mm are first-order values. The actual from-nominal-fno implementation instead traces the finite-height on-axis ray. Portable exact radii are 7.2480154456/8.1821599320/9.2899303696 mm and agree with actual runtime within 3.1e−11 mm. This methodological difference is retained, not treated as a source mismatch or independent verification of a mechanical iris. All radii are inferred from f/2.88.

The inherited 301-point radial checks were rerun. A fresh post-exposure implementation independently locates bracketed stationary points of the sag-difference function plus endpoints, covering 270 shared material/gap boundaries across nine zoom stations. Both methods find minimum material thickness 0.0832827658 mm. Maximum actual rim angle remains 50.048630 degrees; conic domains are valid and all default 90%-gap intrusion checks pass. All checks use the actual stored SDs and full conic/polynomial sag; no universal sd/|R| rule or obsolete 1.25 SD-ratio rule is substituted.

Actual buildLens/validateLensData, strict LensDataInput checking, installed Prettier3.8.1, nine-state render-trim diagnostics, runtime glass resolution, and exact tracer were re-executed on the final data hash. In 675 exact-engine cases, 556 traverse all 32 modeled surfaces, 97 clip at material outer edges and 22 peripheral full-field targets cannot be aimed. The sequential engine returns at the last surface and does not mark image-plane arrival; no image-plane hit is claimed from that flag. There are no trace failures among aimed cases, no required 0/0.6-field through 0.75-pupil failures, no full-field chief failures, and no first clips at internal cemented interfaces. These are finite representative checks, not full-field/full-pupil transmission or continuum proof. Portable exact tracing has its separately recorded peripheral counts; it is not silently equated to every engine boundary case.

Production computeElementShapesForState2 renders at wide/middle/tele were rasterized with Inkscape and inspected against original Fig.5. No missing physical assembly, visible overlap or hidden material trim was observed. The figure comparison is qualitative because the patent supplies no clear-aperture dimensions. This is actual shape-function execution, not browser UI testing.

The project pin remains 3d44a1be91db853725ac841b65a9e228f2c544ef. Current main 66b394809241620190908def6caf9a81d3f3a6f5 was inspected and only changes article-referrer rendering/tests. 220 optics/types/default/taxonomy/hook files and the 142-file transitive import closure were freshly compared against Git object bytes at the retained pin. All match. The checkout HEAD differs and is accurately recorded; it is not relabeled as current main. The checkout remains unchanged.

### Glass, materials, metadata and interpretive review

The source gives d-line coordinates, not commercial identities. Independent primary coordinate checks covered selected OHARA, HOYA, HIKARI, SCHOTT, CDGM and SUMITA records. SUMITA K-FK5 is newly checked directly; its 70.4 Abbe number differs from the source 70.21. No complete historical-vendor search is claimed. Class/code labels remain appropriate, bonded layers remain Unmatched, OHARA S/L and suffix distinctions are retained, and runtime dispersion proxies are explicitly distinguished from physical supplier/melt identity. No catalog spectrum is assigned as a patent measurement.

The final analysis retains the paragraphs 0076/0089 plastic-molding qualification; source numerical media must not be transformed into claims that every physical body is catalog glass. Product 17–50 mm/F2.8,16/13, APS-C,0.27 m, seven blades,F32,2006 and mount variants remain manufacturer facts, separate from design optics and patent correlation. Original front-page metadata and the indexed publication corroborate inventor order, filing/publication dates and Tamron applicant identity.

All 18 media narratives and the required section sequence were manually reviewed. Standalone, cemented and functional powers are distinguished. No quantitative aberration allocation is inferred from an isolated element's sign. Focus reconstruction is absent, source asphere convention and units are explicit, and non-confirmed production correlation and bounded optical coverage are disclosed. Revision history was removed from the clean analysis and retained here.

### Quantitative-claim map and final gate

The complete claim map in results.facts.analysisClaimMap is regenerated from final data and executed calculations. Its 123 checked entries include all 18 coordinate/power first lines, group/compound powers, headline EFL/BFD/track, all zoom gaps and absolute positions, Petzval, conditions, every nonzero asphere coefficient, modeled-rim departures, iris radii, minimum thickness and maximum rim angle. Source marketing and bibliographic quantities use the cited patent/manufacturer records. The manual interpretation review is separately bound to final data and analysis hashes; token matching alone is not an interpretation check.

Final numerical/source/model/geometry/analysis checks:32 CHAT_PREFLIGHT PASS plus5 targeted LENSVISUALIZER PASS. The original pair's Stage 2/Stage 3 gates were invalidated by S4-C01; all inherited construction and analysis checks are recomputed on corrected bytes. Full-corpus policy tests, metadata integration and production build remain NOT_RUN with requiredAt integration. No Git writes, integration, corpus sweep, full build, upload or publication occurred.

Gate: READY_FOR_BATCH, subject to the exact nine-file package hashes and successful clean extraction/replay recorded in the manifest. Integration status: INTEGRATION_PENDING (closed: integrated 2026-10-20). READY_FOR_BATCH does not mean integrated, published or full-application acceptance.

Final governing bytes (SHA-256):

- TamronSPA161750mmf28.data.ts: `2090f84c300eac736e30699b4e7e1b8f83765a8196d45c03fa4078e52155377a`
- TamronSPA161750mmf28.analysis.md: `0ef0a0e84cb189713f284c4e83095badd822d3877e149d825d84eb8b914c51da`
- TamronSPA161750mmf28.evidence.json: `4b3c769b6b05b0715be5d725c9a847c1d66ed9b8ce8fc4c4aa4fd25aa7b95d56`
- TamronSPA161750mmf28.verify.py: `94741b68d080b009ecdc80b4cee8dbf88f793f96deeeb46b9bc13264161baf28`
- TamronSPA161750mmf28.results.json: `ea8a07bcad275329850f2e5971c7a742f46f214e2fe6514eb4ed03386e12d9b2`

## 2026-10-20 — Deployment validation and wording pass

Source re-read from the image-only PDF (pp18–19 at 200 dpi): 32 surfaces (r1–r32, stop r16) with every R, d, nd and νd; both aspheres (r6, r23; A = 1.0 → K = 0, A4–A10); and the four variable gaps d5, d15, d22 and d32 at the wide, middle and tele states. No mismatches. r23 and r24 both print −155.8357, as the data file has. Front page: 特開2007-133138, published 2007-05-31, applicant Tamron, inventors 荒川明男 (Akio Arakawa) and 村松雄一 (Yuichi Muramatsu), all as in the file.

First order, patent vs model (wide / middle / tele): EFL 17.40 / 30.00 / 48.50 vs 17.4011 / 29.9986 / 48.4979 mm; printed d32 39.911 / 51.228 / 62.051 vs paraxial BFD 39.9108 / 51.2280 / 62.0515 mm; F2.88 constant, with the model's stop solved to f/2.88 at each station. At 14.5 mm image height the real chief-ray field is 40.57° / 25.31° / 16.31° (patent 2ω 81.1° / 50.6° / 32.6°). Group values match ¶0079: f2 −12.439, f3 42.731, f4 37.456, f41 116.13 and e4 12.209 mm. Image circle and field coverage reach 14.17 of 14.18 mm at all three stations. The clearance check at Y = 14.5 mm shows no axial clipping or chief-ray blocking, but at the wide end the full-field lower rim ray is cut off and the front group vignettes 67–78 % of the off-axis bundle. The surface audit reports no errors. Figure 5 matches the data file's elements, cemented pairs, surface signs and stop position.

Maker comparison: Tamron's A16 page lists 16 elements / 13 groups, one LD element, two hybrid aspherical elements, 0.27 m minimum focus distance, a 67 mm filter and 2006 release. No Tamron construction diagram was found. Example 1 of the same application matches those counts and specifications as well, so the choice of Example 2 is not settled by public evidence.

Fields changed: `name` (corpus Tamron style with [IF] and (A16)), `subtitle`, `specs`, the header comment and focus description (process wording removed), element `label` values (physical numbering Element 1–16, with resin layer and glass body for 4 and 12), `role` text (specific roles in place of boilerplate), resin-layer `type` set to "Hybrid Resin Layer (1× Asph)", `diagramLabel` added (1–16, 4r, 12r), and `apd: "inferred"` with an `apdNote` on L2423 (1.49700/81.61, the only element that fits Tamron's single LD element). The analysis gained the Example 1 note and the LD attribution, and its "Model Apertures and Verification Scope" section became "Model Scope and Limitations" without process content. Optics unchanged: engine and paraxial outputs are identical before and after.

Open: Example 1 vs Example 2 attribution, pending a Tamron construction diagram.

## 2026-10-20 — Second review: diagram, labels and movement

Compared the local page (wide, middle and tele, focus slider at both ends, both movement overlays, inspectors of Elements 4r, 4, 12r and 15) with Figure 5 of JP 2007-133138 A (p22, wide panel; native 200 dpi scan) and the Example 2 text and tables (¶0074–¶0083, pp17–20). No Tamron construction diagram was viewed; the record above notes that none was found, and Tamron's published counts (16 elements / 13 groups, one LD, two hybrid aspherical elements) match the model.

Scale: the wide panel's vertex crossings from r1 to r32 give 3.785 px/mm at 200 dpi (0.264 mm/px), consistent within 3–5 px across G1, G3 and G4; G2 is drawn about 1 mm image-ward of its prescription position and the image plane is drawn short, both ordinary drafting liberties. Sag checks on r4 (heights 18.5 and 22.2 mm) confirm the same scale vertically. Rim heights are the mean of the clean lower side and the upper side where no leader line crosses; the tele panel gives the same G4 heights.

| Surfaces (element) | Before | After | Figure | Reason |
|---|---|---|---|---|
| 5 (L213 rear) | 21.8 | 23.0 | 24.0 square-cut | drawn as a square block; now square at the front-face height 23.0 |
| 9, 10 (L222) | 8.2 / 8.4 | 9.1 / 9.1 | 9.6 | 13–15 % under the drawing; 9.1 is the largest value the r8→r9 gap rule admits |
| 24, 25 (L2411 body) | 12.1 / 12.4 | 11.8 / 11.8 | 11.45 | squared with 23A; keeps G41 shorter than L2421, as drawn |
| 26, 27 (L2421) | 13.2 / 13.4 | 12.2 / 12.2 | 12.0 | 10–12 % over the drawing |
| 28, 29, 30 (L2422/L2423) | 13.2 / 14.2 / 13.9 | 12.2 / 12.2 / 12.2 | 12.0 | 9–17 % over; removes the 0.083 mm knife edge on L2423 (now 1.39 mm, as drawn) |
| 31, 32 (L2424) | 14.3 / 14.5 | 13.2 / 13.2 | 13.1 | 10–11 % over; still the tallest G4 element, as drawn |

Retained: G1 front pair (28.2 / 27.0 / 26.1 against drawn 28.8 for L211 and 27.1 for L212), r4 23.0 (drawn 24.0), H1 (12.8 / 12.2 / 9.4 against 12.95 and a concave face ending at 9.5), L223 (8.7 / 8.05 against about 8.6–9.0), D2 (8.05 / 9.6 / 9.9 against 9.7), all of G3 (231 at 11.1 / 11.4 against 11.4; 232/233 at 11.5 / 10.3 / 10.3 / 11.4 against a flat 11.3), and 23A at 11.8. L224's front face would need 9.6 to square D2 as drawn, but at that height r13 sits 0.8 mm ahead of L223's rear rim and wraps it; r20/r21 cannot reach the drawn 11.3 because the two faces cross above about 10.9 mm. The renderer cannot draw L221's flat rear land, so H1 shows a slanted edge from 12.2 to 9.4.

Clearance after the change: the surface audit reports no errors; the clear-aperture trace at 14.5 mm image height (ω 40.57° / 25.31° / 16.31°, matching the patent's 2ω 81.1° / 50.6° / 32.6°) shows no axial clipping or chief-ray blocking; the tightest axial margin is r30, 12.2 against an axial marginal height of 11.33 mm at tele. Image circle and field coverage still reach 14.17 of 14.18 mm at every station. Engine half-field 37.15° (limited by r8, unchanged), f/2.88 at every station, stop radii 7.248 / 8.182 / 9.290 mm unchanged. Engine meridional geometric transmission at the corner field, before → after: wide 40.0° 79.8 → 94.7 % (L222 no longer clips), middle 24.8° 80.4 → 70.7 %, tele 16.0° 58.7 → 53.3 %. These are meridional values only. Thinnest edge is now the L221r layer at 0.74 mm; thinnest glass edge 1.23 mm (L2421); steepest rim angle 50.0° at r8, unchanged. The 23A departure at 11.8 mm (−0.748 mm) is unchanged.

Checked and found correct: group brackets G1 r1–r5, G2 r6A–r15, G3 r17–r22, G4 r23A–r32 match ¶0074–¶0075 (groups 210–240, G4 = units 241 + 242); cemented brackets D1, H1, D2, H2 and D3 cover exactly the five bonded or cemented components, and none equals a gap label (D5, D15, D22, BF). Element `name` values carry the patent's reference signs (L211…L2424) while `label` and `diagramLabel` number the physical elements 1–16 with 4r and 12r on the bonded layers, so the inspector heading ("Element 4 resin layer", L221r) and the diagram number agree. Every element `type` matches the signs of R and ¶0075's 凸/凹 designations. Only r6 and r23 are marked 非球面 in the tables and only 6A and 23A carry the A suffix. The stop sits at r16, 1.0 mm ahead of r17. The resin-layer inspectors read "DOUBLET H1/H2", not a triplet; L2411r shows f = +694484 mm, which is the true isolated value of an equal-radius 0.2 mm shell. The `apd: "inferred"` tag on L2423 rests on Tamron's single LD element; the patent text names no special glass.

Movement: zoom stations ascend 17.4 / 30 / 48.5 mm, and every gap row is in that order. Relative to the fixed image, G1 moves 27.7 mm objectward, G3 17.1 mm and G4 22.1 mm objectward, monotonically; G2 moves 0.24 mm imageward and then 4.38 mm objectward, as the printed d5/d15 imply. d5 widens and d15/d22 narrow wide to tele, as ¶0077 states. ¶0077 lists only G2–G4 as the zoom groups, yet the printed gaps need G1 to move with a fixed image; the model follows the tables. Focus: ¶0077 focuses by moving G2 objectward but prints no finite-distance spacings; both focus keyframes repeat the infinity gaps, the slider's far end reads "Not modeled", and the movement overlay offers no focus trace.

Aberrations against Figures 6–8: distortion at the patent's image heights is −2.7 % (wide), +2.2 % (middle) and +2.2 % (tele) at 14.5 mm, with the wide curve's −3.6 % trough near 12 mm, matching the plotted d curves; on-axis spherical aberration at full aperture is −0.10 / −0.07 / −0.03 mm, small and under-corrected as plotted. Astigmatism was not traced.

Glass: every printed nd/νd pair except 1.72000/50.25 and 1.71736/29.51 recurs in Example 1 (pp15–17), and those two are exact catalog points (LAC10 class, SF1). The bonded-layer material 1.51460/49.96 recurs in both examples (r6 and r23 here, r6 and r24–r25 in Example 1) but the patent gives no name, no other line index and no partial dispersion, so both layers stay Unmatched. All other labels resolve with Δνd ≤ 0.09.

Open: L224 front face and L232/L233 facing faces sit below the drawn height for the reasons above; H1's flat land is a renderer limitation.

Coordinator follow-up, same day: L222 (s9/s10) 9.1 → 9.4 mm, the height Fig. 5 draws for the block, with
`checks.gapSagFrac` 0.96 (the smallest two-decimal value that admits it: at 0.95 the r8→r9 rims at 9.4 mm sag 5.43 mm
into a 5.720 mm gap against a 5.434 mm allowance at 30 and 48.5 mm; the faces do not cross). audit:surface OK; EFL,
f/2.88 per station and the 37.15° half-field unchanged; clearap shows no axial clip or blocked chief ray. Dropped the
L2411r resin layer's `focalLengthMm` (694484 mm, an equal-radius shell), which the inspector printed literally.
