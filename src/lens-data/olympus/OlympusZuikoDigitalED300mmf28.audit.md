# Olympus ZUIKO DIGITAL ED 300mm F2.8 — author extraction audit

## Job and reference versions
US6927926B2, Example3, exact original card and 20-page original PDF. CHAT-1.0 September11,2026 governs stage boundaries. Current project main712f09476bf13a7db269c2aaaebdd5392a5764ef and individual reference hashes are recorded in the manifest. No repository edits or integration.

## Extraction and conventions
Numerical data3 on PDF16 columns9–10 was entered directly from the rendered table. Both source certificates remain in the unmodified original. nd5 is printed51.49700; the actual July18,2006 certificate expressly replaces it with1.49700. Index-column and d8 label typographical readings are individually recorded. Positive radii have centres imageward. Native nd/vd are d-line. Distances are mm; no scaling. D0 is object-to-first-vertex. All23 source planes, including source plane18 as STO, are retained. No plate/filter row is tabulated.

## Model transformations and pending construction
BFD is absent from source and is independently derived, never represented as printed. Construction will use the table2.80 f-number for exact axial stop calibration while retaining unresolved plot2.850. Physical apertures are absent and require inferred source-figure/beam sizing and full geometry/field validation. Both published focus endpoints are retained; no cam reconstruction. The factory mandatory SCF-43 filter has no patent prescription and will not be invented.

## Glass review
Eleven original files covering OHARA, HOYA, Schott, HIKARI, CDGM and Sumita were freshly parsed and their custody hashes verified. The scan contains3179 records, including duplicate formats and current/included obsolete rows. Relevant285 excerpts with source locations and coefficients are embedded for numerical replay. This is a bounded published-catalog search, not an exhaustive historical-melt search. Refractive indices/Abbe numbers stay unchanged; compatible catalog names may be dispersion proxies only. No supplier/melt or APO performance assertion.

## Numerical results

Infinity: EFL 299.995876385mm; infinity-conjugate BFD 96.493535978mm; first-to-last vertex 218.5036000mm.
Proximity: EFL 249.056897540mm; infinity-conjugate BFD 48.106889968mm; first-to-last vertex 218.5056000mm.

Published proximity D0=1685.0494mm independently gives finite image BFD 96.492362727mm and magnification -0.194274775. The Gaussian image-plane difference between rounded states is 0.000826749mm.

The strict printed-EFL last-digit comparison does not match; the outward-rounded source-precision interval contains299.9986mm. The raw mismatch remains in results.comparisons; it is not hidden by resetting the expected quantity. Sequential scalar tracing and separately assembled ABCD matrices agree. Element powers, both cemented-group powers, functional-group powers, pupils and surface-by-surface Petzval terms are computed. Conditions reproduce81.54, approximately−1.06, and0.239 within their printed rounding. First vertex to infinity image/EFL=1.050005: the patent title may be quoted, but a TL/EFL<1 compactness claim is not supported.

## Correction/discrepancy register
1. nd5:51.49700→1.49700, official certificate; changes all optics from an impossible raw-table material to the corrected patent.
2. Table Fno2.80 versus Fig8A/9A FNO2.850 remains unresolved and visible.
3. Unprinted BFD is a model derivation, not a source correction.
4. Rounded D1+D2+D3 sum differs by0.002mm between endpoints; no gap is silently changed.
5. Commercial13/11 count and patent12/10 can be reconciled by counting the required rear filter, an evidence-based counting inference; the filter prescription and manufacturer patent attribution are absent.
6. Official manual field4.2° versus 2011 specification4.1° remains a production metadata discrepancy, separate from patent half-field2.33°.

## Independent review
This is author-side extraction and reused generic numerical infrastructure. It is not Stage4. A separate fresh source-only auditor is working without candidate exposure. Prior SOURCE_SCOPE numerical conclusions were disclosed; no context-blindness claim is made.

## Stage 1 gate disposition
READY_FOR_DATA, supported by the executed source-only verifier. Stage2 aperture/geometry/model checks remain required. This stage contains no candidate data or analysis.

## Pending integration
All full-corpus, full-build and later integration gates remain NOT_RUN and INTEGRATION_PENDING. Actual targeted current-main runtime checks belong to construction and have not yet run.


## Stage 2 construction and actual runtime
The candidate was first created after independent Pass A fingerprint c5016a5934031978f133e9403329a40067bcaf90fe7846496d86cbab3dfaf9ac was frozen. The author transcription/calculation had already completed independently; no frozen source inputs were rewritten to match it.

Exactly 23 native planes and all three native variable-gap pairs are authored. STO is source plane18; downstream element IDs at cemented planes10 and20 are6 and11. All 12 standalone element focal lengths are recomputed from the parsed actual TypeScript, not copied from a separate model. Canonical Four Thirds mount/format, both inventors and historical Olympus Corporation assignee are retained. Near label is the computed object-to-authored-image distance, approximately2m; it does not replace the production2.4m specification. Source finite D0 is1685.0494mm from the first vertex. Last d is the derived infinity BFD and remains fixed; native internal-gap rounding changes first-to-last vertex by0.002mm.

Stop SD24.5538180691mm is calibrated using the exact d-line axial ray at infinity EP radius EFL/(2*2.80). The paraxial alternative24.0298193901mm is a distinct branch, not used as the exact stop. All other SDs are inferred from Fig7, with author's grouped curve-end estimates differing by at most3.1%; an independent individual-rim measurement resolves a small E10/E11 step and places E11 about4.8% below the adopted value. Neither measurement proves physical clear apertures. No gap-sag or rim-angle override is used. All 21 geometry samples pass at default gapSagFrac0.90; spherical domain, rim slope, element edge thickness and shared-band gaps remain valid. The actual project render diagnostics report zero hidden trim at all21 samples. Equal-scale section plots were inspected against Fig7 and the manufacturer section; the4|3|2|3 construction and both cemented boundaries agree.

2,745 direct entrance-plane ray trials cover five focus controls, three aperture settings and three field fractions. The two endpoint prescriptions are native; intermediate collimated trials are only diagnostics, not reconstructed finite-focus states. All chief rays clear. Some outer rays hit front rim or stop; the independent physical tracer has no sampled cemented-interface clips or non-aperture failures. Raw engine statuses differ as explained below. The direct grid is not a uniform stop-area integration, so trial pass counts are not physical transmission percentages. The exact stated infinity axial beam passes. Full fixed-iris finite coverage does not: near rays can be front-rim limited. Figure-informed apertures are not enlarged to hide that result, and no unpublished iris schedule is invented.

Actual current-main712f09476bf13a7db269c2aaaebdd5392a5764ef source files and Git blob identities were checked. buildLens(), validateLensData(), 21-state production render diagnostics, all2,745 real skew-ray boolean rejection statuses and surviving image intersections agree with the separate portable tracer. All12 native-coordinate glass entries resolve on compatible catalog Sellmeier proxies. Supplier/melt identities remain unproved. The raw runtime aperture-limited chief-ray bound is not the source field: format-limited analysis field is recorded separately from the patent2.33° half-angle.

Targeted TypeScript5.9.3 strict checking used the actual current-main LensDataInput and transitive type sources; Prettier3.8.1 used the current project configuration. Both pass. This is neither full-project typecheck nor full build/corpus validation. Exact tool versions, data hash and scope are preserved in evidence.

## Stage 2 gate disposition
READY_FOR_ANALYSIS. The checkpoint binds the actual data/evidence/verifier/results bytes and targeted runtime proof. Full integration remains INTEGRATION_PENDING.


### Stage 2 coverage extension before analysis
General specification conditions4/5 and preferred ranges on PDF14 column5 were visually rechecked and added to the verifier. The initial author checkpoint evaluated only Numerical data3 conditions1–3. This expands coverage without changing any data-file byte or frozen independent input. The former Stage2 archive remains preserved as Stage2InitialCheckpoint.zip.

### Independent-review Stage 2 correction checkpoint
Added the inline nd5 correction comment required at the value, and qualified the commercial filter count as an inference. Parsed optical data are unchanged, but all dependent data hashes, rays, actual runtime, TypeScript and formatting proofs were refreshed. Original source-only baseline remains immutable. The previous archive is retained as Stage2PreReviewCheckpoint.zip.

The public engine adapter maps every non-ok status to clipped=true. Independent inspection of the raw engine finds2070 ok,424 explicit aperture clips and251 failed/noBracket. Every noBracket is at the first surface, where the unique forward spherical-profile intersection lies outside the54mm rim (minimum excess4.3363mm). Expanded intersection bounds reproduce those outside-rim hits. Physical aperture-loss accounting is361 front-rim+314stop=675. Raw category equality is false; boolean rejection and passing image-coordinate equality are true. No engine change or lens geometry override is used.

## Stage 3 claim-to-result map and citation review
Analysis was authored only after the replacement Stage2 checkpoint cd9737d243cd205b9b12852dbe628a724144578ae6c843269c2d2ecae8321e69 clean-replayed. Its data bytes are unchanged. Stage3 expands verifier coverage for analysis and the reviewed inline/structured errata; no optical input or frozen source baseline changed.

| Analysis claim family | Executed result / direct source |
|---|---|
| Twelve element first lines, names, types, proxy labels | parsed actual model elements; implementedModel.Infinity.elements |
| Four unit powers and both cemented powers | implementedModel.Infinity.groups |
| Infinity EFL, BFD, track and ratio | implementedModel.Infinity fields |
| Near EFL, finite and infinity BFD, magnification | implementedModel.Proximity fields |
| Near authored/Gaussian/infinity reference planes | explicit differences computed by analysis quantitative checker |
| Focus travels | parsed model.var endpoint differences |
| Stop/entrance radii | parsed model surface18 and implemented infinity EFL/fnumber; exact-stop-calibration |
| Conditions | conditions plus PDF14 specificationConditions and native νd coordinates |
| Source native gaps, printed EFL/fnumber/Y/magnification | rawPrescription and visual source table/plots |
| Product13/11, filter instruction,2.4m/.15x,fields | unchanged manufacturer manual PDF8–10 and official specification snapshot |
| Glass displayed/coefficient distinction | original six-vendor inputs and independent glass replay |
|4.8%rim-step uncertainty; noBracket physical interpretation | independent PassB figure and raw-engine diagnostics |

Verifier results include every required computed text string under analysis-quantitative-claims. Structural headings, all per-element properties, metadata order, exact Stage2 data hash and key disclosures are checked. Manual citation review confirms interpretive roles are attributed to group-level patent discussion, not uncomputed per-element aberration budgets. Product correlation, glass identity and aperture inference remain qualified. All sources are conventional file-safe citations, without conversation-only tokens.

### Independent Stage3 citation correction
Removed the overly broad statement that the source patent predates the production lens: the filing precedes it, but the B2 grant does not. Expanded manual locator to printed12–19/PDF7–10 and attributed the commercial section explicitly to the manufacturer catalog. No numerical claim or data changed.

The author interval path was hardened after independent review: decimal endpoints are formed exactly before directed nextafter conversion, and reciprocal endpoints are directed outward. Prior input values and all nominal optics remain unchanged; the earlier bound was numerically sufficient but did not rigorously implement its outward-rounding label at these two operations. Frozen independent baseline is unchanged.

## Stage 4 independent reconciliation and final scope
The independent source-only baseline was frozen before candidate exposure. Its complete unchanged13-file archive is embedded byte-for-byte in baseline.json; the separate independent.py is the exact frozen numerical program, not an author rewrite. The final portable verifier safely extracts and replays that archive, demands exact stable results, and then feeds the actual parsed final model to the independent equations for native prescription, cardinal, finite-conjugate and element-power reconciliation. Prior numerical conclusions in SOURCE_SCOPE were exposed and disclosed; this is source/method independence, not numerical blindness.

The independent content review is embedded unchanged in evidence with a hard-pinned receipt hash. It confirms all50 quantitative analysis claims, all12 element sections, native endpoints, certificate correction, inferred geometry and current runtime. Active file pins cover data, analysis, baseline, independent code, runtime proof/script/rays. Exact14-file inventory and current manifest sizes/hashes are enforced by the verifier. Full archive acceptance is a separate SupportingEvidence receipt after clean extraction.

Fresh main25bb13b53c23cbae4885a60241f8907fad5e03e6 is two commits beyond the prior712f094 pin. A complete GitHub compare found9 changed paths; within198 pinned source/reference files only HOYA catalog and decisions changed. Exact new-head bytes/Git blobs were fetched; other paths inherit only when verified unchanged by the complete compare. The HOYA FCD1 entry now uses a vendor polynomial with a small documented a0 offset, rather than the previous fitted Sellmeier curve. ED300 retains OHARA proxy names and unchanged resolved optical outputs. Repeated actual runtime, independent raw engine, TypeScript5.9.3 and Prettier3.8.1 checks pass on the new pin. Distortion chart sign-label corrections do not alter this prescription or its equations.

Final runtime outcomes:2070 pass,424 explicit aperture clips and251 raw failed/noBracket, all of the latter physically explained as first-surface intersections beyond the54mm rim. Total physical losses361front+314stop=675; no sampled cemented-interface loss. Public boolean rejection agreement is not raw category equality. Twenty-one render states have zero hidden trim. No gap-sag override is used.

The final package remains INTEGRATION_PENDING. Full repository corpus/build/browser validation, repository writes and deployment are NOT_RUN. The native patent model omits the commercially required filter because no prescription exists. Physical apertures, supplier/melt identity, table/plot aperture discrepancy and commercial matching remain qualified.

The standalone independent numerical copy is hash-checked before import/execution, mirroring the frozen-archive code check. Nineteen active negative fixtures were rejected with their outer manifests refreshed, covering source, model, metadata, glass label, errata, analysis, runtime proof, rays, baseline/code, original patent, inventory and withdrawn review. The complete final delivery replay repeats these fixtures on clean extracted bytes.


## 2026-10-15 — Patent-rim, glass and release-metadata review

Patent: local `patents/US6927926B2.pdf`, Numerical data 3, Figure 7, PDF p.8 (rotated for inspection).

No SD or glass annotation changed. The 600 dpi figure shows the existing taper from the approximately 54 mm front rims to 33.5/32 mm G2, 30.5 mm G3 and 24/22 mm G4. Automatic readings on the densely annotated rear groups include leader lines and are rejected; the actual paired optical rims agree with the stored shape. All 12 elements retain compatible OHARA spectral proxies, with original nd/vd and the official correction intact.

[Maker compatibility table](https://support.jp.omsystem.com/en/support/imsg/digicamera/compati/e_system_zdl.html) confirms the Four Thirds mount. Display name, Four Thirds image format, complete source-party metadata and native 12/10 optical counts remain appropriate. The commercial 13/11 count includes a required filter by the existing qualified inference; the source does not justify inventing its prescription. No missing native mount was found.


## 2026-10-16 — Live diagram, glass-color and travel review

Rechecked Figure 7 (US6927926B2.pdf p.8), including a 600 dpi optical-rim crop, against both local focus endpoints. Retained SDs: the taper and paired rims agree within figure uncertainty, with no hidden render trim. Relative to the image plane, G2 moves +17.1354 mm imageward and G3 −16.5010 mm objectward; G1/G4 stay fixed within source rounding. Added inferred APD color and catalog notes to L2/L3/L9 (S-FPL51, ΔPgF ≈ +0.03081), consistent with the maker's three ED elements. This is not a patent anomalous-glass designation. All twelve curves and native prescription values are unchanged. Olympus Corporation matches the source cover; the later Imaging entity remains distinct.

All six release lenses retain 81/81 catalog-backed elements; no additional curve is needed to fill a coverage gap. Surface, image-circle and aperture audits pass at all ten infinity/zoom stations. The sole field-coverage limitation is Miranda's explicitly declared 22.5° half-field (94% of the full-frame corner); no rim clips its corner chief ray. No new changelog entry was added.
