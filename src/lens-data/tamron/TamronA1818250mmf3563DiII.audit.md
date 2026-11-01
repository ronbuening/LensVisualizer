# Continuous-zoom review, 2026-10-23

Status: closed 2026-11-01, integrated into the repository. Not manufacturer-validated. The zoom path described in this section was replaced that day; see the 2026-11-01 section at the end.

JP2008003195A Example2 ¶0083 requires increasing G1–G2 separation, decreasing G2–G3 and G3–G4 separations. These remain monotonic throughout the inferred path; it does not require monotonic absolute G2 position. Keep G1/G3/G4 piecewise-linear and solve paired D5/D14 G2 translation. Infinity is the original explicitly inferred conjugate convention, not a newly discovered source label. Separate conservative aperture correction: source rim was inferred; S1 semi-diameter reduced30→28mm to agree with bonded S2/S3 common28mm boundary. No radius, thickness, index, glass or source gap changes. This eliminates an unphysical first clip inside the cemented pair without widening any surface.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

# Tamron A18 18–250mm — consolidated source-first audit

## Final disposition and exact scope

JP2008003195A, Example 2, Figure 5; output stem TamronA1818250mmf3563DiII. The source-faithful limited reconstruction earns READY_FOR_BATCH after the exact final package and clean replays described in its manifest. INTEGRATION_PENDING remains separate. The archived Stage 3 scientific data is unchanged; final analysis edits correct one shape word and clarify existing field, catalog and audit-scope disclosures.

This acceptance covers unchanged source transcription, explicitly inferred infinity/iris/apertures, fixed internal focus slots, documented continuous zoom interpolation, exact physical source/reference-field core rays and separately solved 14.5 mm chiefs, positive geometry, and the actually executed current validator/render modules. It does not certify a production prescription, a mechanical cam/iris law, a finite-focus reconstruction, loss-free full pupil at the outer field, the patent aberration plots, or complete current UI field equivalence.

## Job, source identities and reference versions

The complete 19-page original PDF (including PAJ wrapper) and original job card remain unchanged. Their hashes are recorded in the manifest and checked by the verifier. PDF pages 14–16 (printed 13–15), paragraphs 0081–0095 supply Example 2; Figure 5 and plots 6–8 are PDF page 18. Rendered pages 1–2 and 19 establish the complete identity: publication 2008-01-10, application JP2006171066 filed 2006-06-21, applicant Tamron Co., Ltd., inventors Yuichi Muramatsu and Akio Arakawa in that order.

CHAT-1.0 shared protocol, dossier contract and Stage 4 source-first procedure govern this record. Current project reference commit is 709dda72a0ddead8ee77b8306347429031f8b379. The earlier 53470da5 pin is superseded. Read-only reference inspection is distinct from execution: 135 actual imported main-source modules were independently checked against the current snapshot using both SHA-256 and their Git blob SHA-1, then executed unchanged under Node 24.19.0. Type stripping is not type checking.

The preceding Stage 3 archive is a7c6180684b0c6f75e1625403ec80e2ac00f986565dcd46c515da5eb7c3f8ede, with manifest 85ae868c8891763ee390ad105a54f312a5564cc6306dfff66438f1b40646ac6e. Its scientific data hash 1e77adae515ef19b68fc9f6ed68a1125fd8ae3635d389fa6429bd38fde894e96 remains the final data hash. Earlier author gates and their source/geometry limitations are retained as history, not transferred as independent approval.

## Extraction and conventions

All 32 source rows, 18 media, four variable gaps, three zoom states, two aspheres, stop position and group conditions were manually re-entered from fresh patent renderings before candidate access. The original source rows and literal text are frozen in the passA evidence file. The source equation, not a conic name, determines K=A−1=0. Powers 4/6/8/10 and their printed signs/exponents are exact; absent A12/A14 become zero in the application. Source lengths are interpreted in mm and d-line indices/Abbe numbers are explicitly defined by paragraph 0092. Blank medium rows become air n=1; the infinity stop radius becomes an optically flat R=1e15. No source radius, thickness, spacing, index, Abbe number, coefficient or angular-field value was corrected or rescaled.

Source r15 is an air stop 1.00 mm ahead of r16. The 0.20 mm media at r6 and r25 remain explicit bonded optical layers. Their hybrid interpretation and exclusion from commercial substrate count are supported by the prescription/figure and maker diagrams; chemistry is unconfirmed. The model has 18 media for 16 substrates in 13 air-separated components, with 3+4+5+4 substrates in the four functional groups. No camera-side plate is listed, and none is inserted or folded into an air-equivalent gap.

The source does not expressly label the object conjugate as infinity. Parallel incident rays are an explicit modeling convention supported by first-order image-gap agreement. The image stays at printed D32. Paragraph 0083 supplies qualitative G2 objectward focusing but no quantitative near-state prescription. NO_INTERNAL_RECONSTRUCTION, identical focus slots and marketing-only 0.45 m metadata are preserved.

## Source-first independence and frozen baseline

The reviewer saw the extended original card before extraction, including its prior qualifications, counts, endpoints, asphere-convention statement and cautions. That exposure is disclosed; it does not constitute complete blindness. No candidate pair, author numerical input/code/result, prior audit or sibling lens content was read before freeze. Public current project contracts/code were available as shared references.

The independent source baseline was sealed before candidate exposure. Fingerprint: 51f9deb5bdfb99940669beb1ab38791525ce287695e7a1375336b958dd25f94f. Its original eight-file archive SHA-256 is f6daf8ac91b8d02d84f7c150f35f2d766035717d6e9408503ddd8fb517d6c7b2. Four exact frozen scientific artifacts are included under passA-qualified filenames: source evidence, full fresh verifier, results and primary catalog excerpts. Their bytes and original-name mapping are recorded in the final evidence; originals are shared unchanged. The final verifier restores the original filenames in a fresh temporary directory and reproduces the exact frozen results. No baseline is rewritten to agree with the author.

Pass B separately parses the actual final TypeScript with a strict JSON-literal envelope and duplicate-key rejection. A new candidate assembly uses the frozen independent scalar/matrix/vector/angle implementations, not the author's calculated answers. The retained author verification path and unchanged native runner are also executed and cross-checked. The native runner is embedded verbatim in the canonical verifier to avoid a nonportable script dependency; its byte hash is checked against the native execution record.

## Numerical reconciliation and raw discrepancies

| State | Independent EFL mm | Independent BFD mm | Published EFL mm | Published D32 mm | Source image track mm |
|---|---:|---:|---:|---:|---:|
| Wide | 18.432340188 | 39.582602759 | 18.43 | 39.583 | 128.828 |
| Middle | 57.803990520 | 67.215075961 | 57.80 | 67.213 | 167.587 |
| Tele | 241.839642018 | 89.389023638 | 241.83 | 89.384 | 206.860 |

Scalar height/reduced-angle recurrence and separately multiplied ABCD agree at floating-point precision. A small physical exact ray converges to each paraxial BFD. Separately implemented scalar-angle Snell and vector-Snell chief traces agree within 6.1e−11 in their reported endpoint/angle residual metric.

Literal half-last-output-digit comparisons remain FAIL for tele EFL and middle/tele D32. EFL residuals are +0.002340/+0.003991/+0.009642 mm; BFD-minus-D32 residuals are −0.000397/+0.002076/+0.005024 mm. The author’s broader rounded-input screening tolerances are retained separately and do not erase these raw FAIL observations. Independently computed one-at-a-time half-last-input-digit sensitivities give L1 EFL scales 0.0325/0.1757/1.0384 mm and BFD scales 0.1065/0.2327/0.5169 mm. These are sensitivity context, not rigorous nonlinear interval bounds. No unsupported source correction is needed or adopted.

Independent standalone group EFLs are +95.468901776/−12.712700422/+43.768107548/+46.214503771 mm. Ratios f1/ft=0.394761177, abs(f2)/fw=0.689695410, f3/ft=0.180979872 satisfy the published bounds and the preferred f3/ft≤0.25 limit. Conditions 4–6 were rechecked against rendered PDF pages 10–11. The positive high-Abbe G3 entry satisfies νd≥80; positive G1 entries meet the stated Abbe/index requirements. Isolated-medium powers and net bonded-component powers remain separate; neither is called an additive in-situ contribution.

The per-surface Petzval sum is +0.001136322412 mm−1 using phi/(n*nPrime). Principal planes and entrance/exit pupil planes are computed with explicit first/last-vertex references. Wide BFD/EFL=2.147454 supports the stated wide retrofocus relation; tele source-image-track/EFL=0.855360 supports the telephoto-end relation. These are state-specific, not whole-zoom classifications.

In the fixed-image frame, G1/G2/G3/G4 move objectward by 78.032/20.185/44.001/49.801 mm from wide to tele. No reversal is resolved by the three source stations. Piecewise-linear gap interpolation is retained without imposing parfocality. BFD-minus-authored-gap defocus is −4.057276 mm at zoomT=.25, +11.080165 mm at .75 and +14.195750 mm at .875 in the nine-point sample. This is not a recovered cam law or a proven continuum extremum.

## Apertures, geometry and physical rays

Neither numerical clear apertures nor a physical stop diameter is published. The final SDs are explicitly inferred. The exact current from-nominal-fno iris calibration gives radii approximately 7.634617/7.630823/7.627753 mm. The independent vector tracer reproduces these values within 1e−7 mm. The frozen Pass A paraxial radii are intentionally different approximations, not a discrepancy to repair. Reproducing F-number is calibration, not independent diaphragm evidence.

A separate Pass B check used nine zoom samples and 1001 radial samples. Minimum positive edge thickness is 0.0757942016 mm; minimum margin against the unchanged 0.90 gap-intrusion policy is 0.0103692703 mm. Minimum conic domain is 0.5440147681 and maximum sampled slope angle is 42.474871°. Element shape/SDs and internal thicknesses are fixed; interpolated air gaps are linear, so published endpoint gap minima bound this particular gap-policy check. This does not make finite ray sampling a continuum proof.

At modeled r6A SD=13.5 mm, base-sphere departure is +0.219666967 mm; at r25A SD=10.5 mm it is −0.560756377 mm. The r25 full-profile slope first reaches zero near 10.714164 mm, beyond the stored 10.5 mm radius. Both films have positive shared-band thickness. No rim, conic, SD-ratio, gap-policy or hidden-trim exception is introduced.

All 162 independent core rays pass at the nine states: ten meridional rays per state at field fractions 0/0.6 with pupil fractions through ±0.83, plus eight 0.75-radius skew rays at 0.6 field. At source keyframes the field comes from the printed full angle; interpolated states use explicitly inferred atan(14.5/EFL) reference fields. Nine independently aimed physical chiefs also reach 14.5 mm without clipping. The original five-state native run additionally passes 40 physical source/reference skew rays and 50 f/22 probes. The author/native exact image intercept comparison covers 113 successful meridional rays; all unsuccessful outer-field samples remain recorded.

Actual current buildLens/validateLensData return no validation errors. Production shape/trim diagnostics show zero hidden trim at all five native states. Eighteen native shapes are finite at every tested state. The wide/tele native SVGs were independently rasterized and visually inspected against source and maker sections. This is production-shape execution and raster inspection, not a mounted application UI test.

## Field-reference and current UI results

The 14.5 mm plot ordinate is not silently substituted for an exact distorted chief height. At printed half-fields 38.2/14.1/3.45°, physical chiefs reach 13.565859/15.063565/14.900105 mm. Relative to EFL*tan(half-field), distortion is approximately −6.47345%/+3.74814%/+2.19745%. Figure 6 visibly extends beyond its −3% tick at the upper ordinate, so the plotted tick range is not a ±3% distortion bound. No quantitative aberration-plot reproduction is claimed.

Physical chiefs reach the independently defined 14.5 mm target at approximately 40.000373/13.631859/3.361361° at source stations. The authored 29 mm field-reference diameter doubles the plot-height label as an inference; it is not a separately published clear-image-circle measurement. Current UI and custom physical probes can use opposite meridional signs; rotationally symmetric absolute heights are compared with their conventions intact.

The actual current bounded UI corner helper returns null at wide. Its raw comparison remains FAIL, not NOT_RUN or PASS. The physical solvers demonstrably reach the target; the UI helper is not substituted for a source-transcription or validator result. Current UI estimated half-fields are 33.572969/24.254006/17.159394/9.843856/5.105958° at the five native states, a distinct set from source/reference fields.

Default EP-offset launch diagnostics pass 5/5, 5/5, 5/5, 4/5 and 4/5 at those states. At zoomT=.75 the lost ray is pupil offset −0.75; at tele it is +0.75 with a first-surface noBracket result. UI-field skew probes pass 8/8, 8/8, 8/8, 8/8 and 5/8. These clips/unavailable results remain explicit. No full UI field-equivalence or loss-free outer-pupil claim is made. They do not constitute an observed build/validator failure, and no failed mandatory source/geometry/core check was reclassified to obtain the gate. Integration must assess the mounted interface behavior within these disclosed limits.

## Glass and production-source audit

The independent pass downloaded primary manufacturer data from OHARA, HOYA, SCHOTT, HIKARI, SUMITA and CDGM. OHARA/HOYA include legacy/discontinued entries; CDGM's current download URLs returned missing-file responses, so its official November 2021 PDF was used. Exact sources, hashes, row/page locators, coefficients and numeric excerpts are preserved in the frozen catalog/evidence artifacts. Offline ranking uses 2089 rows against 11 unique native d-line pairs.

The two 1.51460/49.96 film media have no compatible coordinate within nd±0.003 and νd±2 among the checked rows. Every other pair has multiple candidates. Candidate spectra round-trip their own catalog nd to within 1.12e−5; no candidate spectrum becomes patent line-index data. OHARA legacy/S-/L-prefix differences are preserved. All implemented materials deliberately remain unresolved and use Abbe-only dispersion. There is no supplier, resin chemistry, melt, AD spectrum or APO performance claim. The comparison table is not asserted to be the unique nearest ranking across all catalog editions.

The independently read Tamron model archive and freshly downloaded Japanese/English brochures support production identity, 16/13 construction, two hybrids, LD/AD positions, mount families, seven blades, APS-C use and marketing focus/reproduction data. Both brochure diagrams were visually inspected. The Japanese brochure's planned 2007-02-22 introduction, official 2007 release year and English promotional timeline marked 2006 are preserved as distinct source contexts. The original card's older generic-sheet 14/16 discrepancy was not newly authenticated and is not presented as a new reviewer finding. No source establishes identical production prescription.

## Correction register

1. L7 analysis paragraph: “final negative meniscus” → “final biconcave negative substrate.” Source r13=−21.2556 and r14=+286.1917, final data and heading all support biconcave. No optical input changed.
2. Image-field prose now explicitly labels 29 mm as inferred from the plot-height reference, not a separately published physical circle or exact angular-chief mapping. Numerical data is unchanged.
3. “Nearest catalog coordinate” → “Comparison catalog coordinate”; fresh reviewer catalog retrieval and edition dependence are disclosed. Material labels/dispersion are unchanged.
4. Final verification prose states completed source-first audit and nine-state independent coverage while retaining INTEGRATION_PENDING. Stale pending-audit language is removed.

Every changed analysis byte was rebound, manually reviewed, and replayed with the same scientific data. Original source values and frozen Pass A bytes are unchanged.

## Quantitative-claim map and final package

- Identification/production claims → evidence sources/productCorrelation/independentPass sourceAuthentication → original front matter, official archive and two rendered brochures.
- Element headings/nd/νd/standalone focal lengths → parsed final data, independent source rows and frozen sourceModel.isolatedMedia.
- Group EFLs/conditions/counts/Petzval → final results.sourceModel and independentReview published/state checks.
- Principal planes/pupils/image-relative movement/zoom defocus → results sourceModel and implementedModel; explicit reference frames retained.
- Asphere coefficients/departures → source equations and parsed final asph, implementedModel.asphereRimDeparturesMm; no aperture measurement claim.
- Geometry/rays/corners → independentReview states/checks and actual native JSON; finite sample coverage stated.
- Current UI failures/losses → implementedModel.fieldDiagnostics, comparisons.current-ui-wide-corner-helper and independentReview.nativeUIClassification; no substitution for physical checks.
- Catalog comparisons → frozen passA catalog/evidence/results; every supplier/material inference limited as above.

The final archive contains 14 root-level files, including unchanged originals, the canonical nine-file dossier, four exact frozen independent scientific artifacts, and actual native execution JSON. No routine SVG/raster/cache artifacts are bundled. The canonical verifier contains the complete original native runner and the new independent audit path. Portable replay needs only Python standard library; optional --runtime-root additionally requires Node 24 and the exact hash-identified shared main snapshot. Clean portable and native runs write all regenerated output outside the extracted package. File membership, byte counts/hashes, frozen baseline identity and stable result equality are checked after extraction.

Repository-wide typecheck, formatter, lint, corpus tests, full build and mounted-browser behavior remain NOT_RUN, requiredAt integration. Targeted module execution does not substitute for them. READY_FOR_BATCH; INTEGRATION_PENDING. (Closed 2026-11-01: the lens is now in the repository, and those checks belong to the change that added it.)


## V2 conversion — 2026-10-18

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. The earlier full-catalog test attempt on a prior revision was resource-killed and is not a pass; no full-catalog pass is claimed here. This format conversion is not deployment or complete optical acceptance.

Retained package status: READY_FOR_BATCH / INTEGRATION_PENDING; limited source-faithful reconstruction, illustrative interpolation and all source/focus/field limitations retained. (Closed 2026-11-01.)

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 25 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.05433827550615433mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.

## 2026-11-01 — Deployment validation and fix pass

The patent was re-read independently from page renders of JP 2008-003195 A: 32 surfaces, 108 row values (R, d, nd, νd and 12 variable-gap values) and 8 asphere coefficients, with A = 1.0 read as K = 0 from the printed equation. There were no mismatches, and the bibliographic data agree with the file.

Patent against model at wide/intermediate/tele: EFL 18.43/57.80/241.83 mm against 18.432/57.804/241.840 mm; back focus 39.583/67.213/89.384 mm against 39.583/67.215/89.389 mm; f1/f2/f3 95.47/-12.71/43.77 mm against 95.469/-12.713/43.768 mm. The 241.83 mm tele end is the patent's printed value against the marketed 250 mm. Paragraph 0092 states the d line, and all 16 glass rows meet catalog coordinates at d with none at e.

Example 2 is the right example. Example 1 has 15 elements in 13 groups and three hybrid aspheres, and it does not close at tele as printed: computed EFL 246.15 mm against the stated 241.85 mm, with D32 1.40 mm short of computed back focus. Its f1 to f3 agree with print, and a single-slip search found no one-value fix.

Maker comparison, from the English brochure page 2 as viewed by the coordinator (16 elements, 13 groups): LD on the large G1 biconvex element and on one rear element, AD on the G1 meniscus behind it, hybrid aspherical on the first G2 element and the first rear-group element. L2 and L4 and L13 fit directly, and L11 is the only rear element that fits the rear LD mark. L3 does not fit: 1.62299/58.15 is ordinary S-BSM15 (ΔPgF -0.0001). L2 and L11 are tagged `apd: "inferred"`; L3 stays untagged.

The zoom cam was rebuilt because the earlier path reversed G2 inside the printed intermediate-to-tele segment, with a 0.865 mm overshoot past the printed tele position turning near 186 mm. The new path has 129 stations (was 201), with G3 travel as the path parameter, D24 and G1 on C1 monotone curves through the printed values, and G2 solved for focus with the printed residual interpolated. A G1-solved path failed on the wide-to-intermediate segment. No gap or group reverses. Maximum defocus is 0.005 mm at stations and 0.0097 mm between them. The f-number rises steadily, and the iris runs 7.5635/7.5245/7.5489 mm with its one turn at the printed intermediate station, forced by the printed f-numbers. The earlier G1, G3 and G4 piecewise-linear description in this log is superseded.

The earlier finding that the wide 14.5 mm corner could not be reached no longer applies: analysis-field coverage reaches the corner at all 129 stations. A paraxial G2-only solve at 0.45 m object to image gives 1:3.53 at tele with 8.96 mm of travel and 0.80 mm of travel at wide, against 1.766 mm of D5; this is a consistency note only, and the model stays at infinity focus.

Fields changed in this pass: stations and gaps (in the separate cam change), then the header comment, subtitle, `catalog.specs`, `focus.description`, group text (LG1-LG4 to G1-G4), element labels, roles and hybrid types, `glass`, and `apd`/`apdNote` on L2 and L11. Glass labels resolved went from 0 of 16 to 16 of 16; the two resin layers stay unmatched with a plain label. No R, d, nd, vd, asphere, rim, mount or format value changed.

Open: L3 sits at the position Tamron marks AD but carries ordinary printed coordinates, so the production glass there may differ from Example 2.

Open: the cemented-pair agreement with Tamron's diagrams is carried over from the earlier analysis; the coordinator's brochure reading above covers the coloured marks only.

Open: the Japanese brochure link (w5.fuji.com.tw) did not resolve from this machine on 2026-11-01; recheck it before the citation is relied on.

Closed 2026-11-01: at the 14.5 mm corner, the lower-rim ray of the full-field bundle was reported missing at two wide stations. The ray exists; the scratch clearance tool skipped it, and no rim needs to change for it. See the semi-diameter pass below.

Closed: the explicit default `zoom.apertureModel` was removed, per `agent_docs/decisions.md` (2026-10-20).

## 2026-11-01 — Semi-diameter pass against the patent figure

Source: `patents/JP2008003195A.pdf`, PDF page 18 (printed 17), Figure 5, read from its embedded 300 dpi 1-bit raster. Paragraph 0099 calls Figure 5 the Example 2 section at the wide end, and it is the only section printed for that example: there are no intermediate or tele panels, and Figure 1 is Example 1. Figures 6 to 8 are spherical, lateral colour, astigmatism and distortion plots only, so this patent has no lateral-aberration fans to give a second rim reading.

Scale: first to last vertex (r1 to r32, 89.245 mm) spans 733.3 px, or 0.1217 mm/px. G3 (r16 to r24, 13.65 mm over 112.2 px) gives 0.1217, G1 (r1 to r5, 13.2 mm over 109 px) gives 0.1211. Prescription arcs fitted to the ink give a vertical-to-axial ratio of 0.99 to 1.02 on r2, r4 and r5, so the figure is not anamorphic within 2%. Heights use 0.1223 mm/px and are half the top-to-bottom distance between line centres, which also cancels the sheet's skew of about 3 px across the lens. Reading error is about 1 px, or 0.15 mm. The arcs lie on the ink at the printed radii and spacings, apart from three drawing conventions: the image plane sits 79.5 px behind r32 where D32 would be 325 px; both resin layers are drawn as bands about 10 px thick, reaching 6 to 7 px ahead of the true r6 and r25 positions with a rounded tip 3.5 px past the element edge; and the r8 to r9 air gap draws about 0.25 mm wider than the printed 5.40 mm.

| Surface | Element | Before | Figure (px → mm) | After | Evidence |
|---|---|---:|---:|---:|---|
| 1, 2 | L1 | 28 / 28 | 210 → 25.7 | 25.7 / 25.7 | Square flat from r1 to r2 |
| 3 | L2 rear | 28 | 203.5 → 24.9 | 24.9 | Flat, one step below L1 |
| 4, 5 | L3 | 27 / 27 | 195.5 → 23.9 | 23.9 / 23.9 | Square flat |
| 6A, 7 | L4f, L4 | 13.5 / 13 | 104.5 → 12.8 at the edge; band tip 13.2 | unchanged | Within 2 to 5% |
| 8 | L4 rear curve | 9.15 | 79 → 9.66 | 9.5 | Curve ends at L5's rim; land added |
| 9, 10 | L5 | 10.5 / 10.5 | 79.75 → 9.75 | 9.8 / 9.8 | Square flat, level with L6 |
| 11, 12 | L6 | 9.5 / 9 | 79.75 → 9.75 | 9.8 / 9.8 | Square flat, level with L5 |
| 13, 14 | L7 | 9 / 9 | 71.5 → 8.74 | unchanged | Within 3%, one step below L6 |
| 16, 17 | L8 | 10 / 10 | 75 → 9.17 | 9.2 / 9.2 | Square flat |
| 18 | L9 rear | 10 | 72.75 → 8.90 | 8.9 | Flat, one step below L8 |
| 19, 20 | L10 | 10.5 / 10.5 | 80.5 → 9.85 | 9.9 / 9.9 | Square flat |
| 21, 22 | L11 | 10.5 / 10.5 | 77.5 → 9.48 | 9.5 / 9.5 | Square flat |
| 23, 24 | L12 | 9 / 9.5 | 74 → 9.05 | 9 / 9 | Square flat, so one height |
| 25A, 26, 27 | L13f, L13 | 10.5 / 10.5 / 10.5 | 77.5 → 9.48 | 9.5 / 9.5 / 9.5 | Square flat; band tip discounted |
| 28, 29 | L14 | 10.5 / 10.5 | 77.5 → 9.48 | 9.5 / 9.5 | Square flat |
| 30 | L15 front | 10.5 | 77.5 → 9.48 | 9.5 | Square flat |
| 31, 32 | L16 | 10.5 / 10.5 | 81.75 → 10.0 | 10 / 10 | r31 curve and L16 flat end one step above L15 |

Twenty-six surfaces changed, and S8 also gained `rimExtensionSd: 13`. The largest moves are G1's 3.1 mm cut and L6's rear 0.8 mm rise. L5, L10 and L16 move 5 to 7%, inside the playbook's noise band but well past this figure's 0.15 mm reading: L5 stood above L6 where the figure has them level, and L10 and L16 stood too far proud of their neighbours once those moved. The stop is untouched.

r8 and r9 meet near 9.6 mm in the prescription, so r8 cannot take the full 9.66 mm reading. It stops at 9.5 mm with `checks.gapSagFrac` at 0.99, the smallest two-decimal value that admits the land there: the land intrudes 5.303 mm into the 5.40 mm gap. 9.6 mm fails even at 1.00 with L5 at 9.8. The surfaces do not cross at 9.5 mm. The rise is supported by the rays too: r8 was the wide-corner limiter, and the rim at 9.15 mm held the corner to 38.4% with every other final rim in place. The land sits 0.8 mm ahead of the figure's, because the figure's r8 to r9 gap is drawn wider than printed. A cemented step is not representable, so L2, L9 and L15 draw a short sloped edge where the figure has a flat and a step; the largest is L15's 0.5 mm rise over its 3.6 mm top edge.

The earlier open item on the lower-rim ray is resolved. The scratch clearance tool scans launch heights in 0.28 mm steps, and at the wide end the lower-rim ray lies in a band narrower than one step, next to rays that fail at r12 and r13. The stations it reported moved from 0 and 2 to 0 and 1 when r1's rim, and so the launch plane, changed, which marks a sampling miss. A 0.001 mm scan finds the ray at station 0 with stop height past the iris: it crosses r1 at 26.15 mm, r6 at 13.63 mm, r7 at 13.27 mm and r8 at 9.97 mm, all beyond their rims. It was already blocked by the earlier rims, so it is ordinary vignetting and is not a defect.

Clearance: no axial clip and no blocked chief ray at any of the 129 stations. Smallest axial margins are 0.66 mm at r18 (8.24 mm ray) and 0.96 mm at r23 (8.04 mm); smallest chief margin is 0.58 mm at r8 (8.92 mm ray), then 0.75 mm at r1 (24.95 mm). Field coverage reaches 14.50 mm at all 129 stations, the image-circle floor reports nothing, the surface validator and aperture audit pass, and `built.mjs` raises no error. Design f-numbers (3.47/5.01/6.35) and stop radii (7.5635/7.5245/7.5489 mm) are unchanged. No `--scan` turnover applies: r25A's slope stays one sign to 9.5 mm. Its departure at the rim is now -0.376192 mm, replacing the earlier -0.560756 mm at 10.5 mm, and the resin stays positive at about 0.58 mm there.

Vignetting, wide open at the 14.5 mm corner, from the engine curve:

| Station | Field | Before | After | Change |
|---|---:|---:|---:|---:|
| 18.43 mm | 40.0° | 49.0% | 53.0% | +4.0 |
| 57.80 mm | 13.6° | 85.9% | 61.5% | -24.4 |
| 241.83 mm | 3.4° | 71.1% | 60.8% | -10.3 |

The intermediate and tele losses pass the 5-point limit and stay, because the reading behind them is solid: top and bottom flats agree, the arcs lie on the ink, the scale is proved both ways, and Tamron's section has the same front-element proportion (front-element diameter over vertex span 0.57, against 0.573 for Figure 5, 0.576 now and 0.628 before). G1 drives them. G1 at the earlier 28/28/28/27/27 gives 53.0/82.5/70.8%, and adding G4 at the earlier 10.5 gives 63.7/85.9/71.1%. Engine half-field moved from 33.57/16.91/5.08° to 34.57/15.59/4.52° at the printed stations, a gain at wide and a drop at the other two that stays above the 13.63° and 3.36° corner angles.

Maker comparison, from the supplied brochure crop, which is blurred and used for order and rough proportion only: 16 elements in 13 groups with the same order, LD on L2 and L11, AD on L3, hybrid aspherical on L4 and L13. It shows the same L4 shoulder as Figure 5. It draws L4 relatively taller, 0.56 of the front element against 0.50, and G2's and G4's rear elements nearer one height. Those differences are within what the blur allows, and no rim was fitted to it.

Open limitations: L6 to L7 and the L4 land carry small axial offsets to the figure, about 3 px and 7 px, from the drawing's own spacing. No near-focus state exists, so closest focus draws the same section as infinity.

## 2026-11-01 — Brackets

`doublets` C1, C6, C16, C25 and C30 were added to draw the five junctions the file already tagged in `cemented`, in the form the B003 file uses. Glass stays 16 of 18; the two resin layers have no published dispersion.
