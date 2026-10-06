# Sigma 105mm F2.8 DG DN Macro | Art: scoped final independent audit

## Job and controlling references

JP2021148808A, Numerical Example 1, output stem `Sigma105mmf28DGDNMacroArt`. The original patent PDF (382,788 bytes, 38 PDF pages including the DPMA wrapper) and original four-field card are unchanged. JPO printed page N corresponds to PDF page N+1. All numerical optical data come from this exact A publication.

Released main was freshly rechecked on 2026-10-05 at 00:46 UTC and remains `709dda72a0ddead8ee77b8306347429031f8b379`. The public current-main reference manifest and imported runtime module hashes are retained. CHAT-1.0 protocol/dossier/stage prompts govern evidence and stage sequencing; current main governs the model schema. The specific plate/TC rules take precedence over old generic shorthand. There are no source plates or converters in this prescription. No unmerged engine changes were used.

## Explicit acceptance scope

`FIXED_IRIS_DIAGNOSTIC_V1` is a diagnostic fixed-iris prescription/geometry visualization. Source radii, media, spacings, three focus states, all inferred SDs and the 9.611937886 mm iris are unchanged. Only the explanatory data header and focusDescription were edited. Every other parsed data field is protected by the canonical optical-payload SHA-256 recorded in evidence and checked by executable code.

This scope does not include verified close-focus aperture/exposure reproduction, illumination, full 3D pupil transmission, continuous-focus fidelity, a production cam law or an integrated viewer certification. All source comparisons remain in the results with their actual status. The scope decision does not change an observed FAIL to PASS or make the original finite F values reproduced. No iris schedule, source correction, engine change or geometry exception has been introduced.

## Extraction and conventions

Rendered original PDF pages 2, 8, 15–17 and 30 were examined against the text layer. The 30 optical rows comprise 29 spherical refracting interfaces and a planar aperture stop; they define 17 elements in 12 air-separated groups. Every index, Abbe number, absolute PgF entry and all three spacing columns are retained. No asphere marker, coefficient table or asphere equation belongs to Example 1; `asph` is empty. No source-listed plate exists. Blank medium cells are air, while variable symbols and infinity remain explicit in the raw source record.

The source uses d-line coordinates: 587.56 nm in paragraph 0097, rounded to 587.6 nm in paragraph 0024. The source defines ΔPgF = PgF − 0.64833 + 0.00180 νd. The engine normal line is 0.6438 − 0.001682 νd. Each absolute source PgF is separately converted into runtime dPgF; native source deviations remain available for checking the patent conditions. No absolute C/F/g indices are invented.

The object distance d0 is measured to the first vertex; d0 plus physical prescription length gives object-to-image distance. No dimension is scaled to marketing values. Source stop 22 is renamed STO with the standard 1e15 flat sentinel. G1 and G3 remain fixed within tabular rounding while G2 and STO move independently objectward. The three focusPositions preserve infinity, −0.5× and −1×. Between them, linear gap interpolation is a visualization approximation and not a production cam law. The finiteConjugates entries preserve the source first-vertex reference plane.

## Glass review

All 16 distinct coordinate pairs were compared with accessible original manufacturer catalog bytes: HOYA 435 rows, OHARA 166, SCHOTT 366, HIKARI 392 and SUMITA 433. The relevant original AGF rows, coefficients, source URLs, hashes, coordinate residuals and calculated PgF alternatives are preserved. Five-maker comparisons were freshly selected from the catalogs; same-day cached source bytes were inspected, without pretending each remote download was independently repeated. CDGM's earlier cited endpoint yielded a non-catalog response, so no CDGM comparison is claimed.

All pairs have close HOYA coordinate equivalents, but that does not prove supplier or melt identity. PgF distinguishes certain otherwise close candidates, including TAFD35 versus TAFD35L. OHARA S-/L- names remain literal. Generic crown/flint-class labels are retained as an explicit modeling choice; the actual runtime resolver uses dPgF-corrected Abbe dispersion. Neither complete Sellmeier accuracy nor APO performance is asserted.

## Numerical construction and source residuals

The portable verifier loads the final literal `.data.ts` and uses independent matrix multiplication, sequential height/reduced-angle recurrence and exact sphere/Snell ray tracing. Small-height exact rays agree with the paraxial limit. The strict JSON-literal TypeScript-envelope loader rejects duplicate keys, arithmetic, nonfinite tokens and trailing content, and an altered-radius fixture is detected. This is not a TypeScript compile-time typecheck.

| State | EFL mm | Physical track mm | Native object-to-image distance mm | Magnification |
|---|---:|---:|---:|---:|
| INF | 103.476770 | 146.7268 | Infinity | Not a finite magnification |
| M05 | 80.010754 | 146.7267 | 384.20799999999997 | -0.499987577 |
| M10 | 65.345921 | 146.7267 | 296.9112 | -0.999981355 |

The source infinity image gap is 31.7486 mm; the recalculated paraxial infinity BFD is 31.7492480 mm. The near native distance is 296.9112 mm versus marketed 295 mm, retained without normalization. Element standalone powers, group/compound powers, principal planes, every surface's Petzval contribution and source conditions are in the results. Standalone element power is not an in-situ aberration allocation.

Direct output-rounding comparisons for CL1, CL2 and CL3 remain FAIL: computed values are +463.4847344, +946.8313137 and +366.2554904 mm versus printed +463.44, +946.89 and +366.25 mm. Conservative inclusion arithmetic using half-last-digit n/R/d uncertainty encloses the printed values. Rounding compatibility is a separate accepted explanation, not numerical equality or a revised prescription.

Condition 8's first source-normal-line deviation is 0.007240 from rounded inputs versus printed 0.0073. The direct printed-rounding comparison stays FAIL; independent acceptance includes source PgF/νd and output rounding. The inequality itself remains satisfied. Condition 10 has an actual wording conflict: claim 8 and paragraph 0021 define f2 as G2 EFL, while paragraph 0089 calls it the whole-system EFL. The latter branch is retained as FAIL. The claim-defined G2 branch independently reproduces the printed ratios. No source number is repaired.

## Physical aperture versus readouts

| Definition | Infinity | −0.5× | −1× |
|---|---:|---:|---:|
| Published source F | 2.90 | 4.32 | 5.73 |
| Fixed iris, unconstrained exact working F | 2.898152 | 3.862330 | 4.746829 |
| Candidate-rim admitted working F | 2.898152 | 4.013750 | 5.225883 |
| Current close-focus effective-F helper | 2.900000 | 4.221402 | 4.317708 |
| Current Summary EFL/EP metric | 2.823872 | 1.724900 | 1.027894 |

Working F is 1/(2 NA) in air, using the actual outgoing marginal direction from a finite object ray aimed through the physical stop. It already includes close-focus effects; adding another bellows correction would double-count them. The two source macro F values are not reproduced. Their FAIL comparisons remain explicit outside the bounded fidelity claim.

The largest admitted stop fractions are approximately 1.000000, 0.961335 and 0.907501. The full finite iris-edge ray first clips at surface 17 at −0.5× and surface 10 at −1×. The limiting rim just above the transmission boundary is surface 17 in both finite states, as independently reconciled. The first clip of a much larger ray need not be that limiting rim. Aperture-disabled continuation is labeled separately and never counted as transmission. Finite source positions and clear apertures are insufficient to establish a unique focus-dependent iris law; inverse calibration is not authored as one.

The current effective-F helper uses a thin-lens magnification approximation and stored infinity pupil ratio. The Summary metric uses current EFL/current entrance-pupil diameter. Neither is the admitted finite cone. The actual current UI fan is also explicitly traced: physical iris divided by current parallel-input yRatio supplies currentEPSD, then h=fraction×currentEPSD and slope=h×focusK. At −0.5×, ±0.83 clips at surface 5; at −1×, ±0.83 clips at surface 3 and ±0.5 at surface 10. This does not justify changing source gaps or enlarging the modeled rims. Existing finite-source selectors already resolve the correct object planes; no new finite-focus engine feature is implied.

## Geometry, field and native execution

Unmodified released validator and buildLens execute successfully. The builder's ordinary infinity calibration produces iris radius 9.611937886008489 mm, consistent with the authored rounded inference. Native render diagnostics at 22 focus controls show zero hidden trim. Independent geometry checks use current actual rim slope, positive edge thickness and the default 0.90 shared-band gap rule. Minimum glass thickness is 0.97900705 mm and maximum actual rim slope is 33.31677664°. Finite sampling is not proof over a continuum.

The native source-based element paths are supplied as a three-state SVG and were rendered and visually examined. The infinity silhouette follows Figure 1. This is native shape-generation evidence, not an integrated React viewer session. The final data still uses inferred SDs, not fabricated published dimensions.

Exact physical chief/image solutions and 60%/100% image-field meridional samples are recorded. Vignetted and unavailable extreme samples stay explicit. One already-rejected far off-axis infinity ray remains a raw cross-implementation FAIL: independent sphere tracing gives a first-surface radius of 31.57420816 mm outside the 26.5 mm rim, while released native tracing returns noBracket at surface 1 even with apertures disabled. Both reject it. Native full-path continuation, working F and image position are unavailable and are never inferred from incomplete terminal information.

The sequential API ordinarily returns a final-surface ray with reachedImagePlane=false. Physical image intercepts are explicitly extrapolated only after complete, forward last-surface passage. No API result or engine implementation was altered.

## Scope-bound gate and review history

The original blocked full-fidelity candidate and the successful source-only Stage 1 checkpoint remain preserved. Stage 2 was reopened for FIXED_IRIS_DIAGNOSTIC_V1, with unchanged optical payload. All 61 scoped acceptance checks were freshly executed and passed; ten raw source/readout/rejected-ray FAIL comparisons remain visible. The gate is limited READY_FOR_ANALYSIS, not certification of excluded close-focus exposure or illumination.

A prior independent source-only baseline was frozen before candidate exposure with fingerprint `96bd88cef44252aee357894c599e2e8ab69b5807728ee81aa1aac66e95d342c1`. Its bounded reconciliation informed the Stage 3 disclosures. The final independent review below closes the separate new-pair audit requirement only for FIXED_IRIS_DIAGNOSTIC_V1.

## Quantitative-claim map and manual review

- EFL/BFD/track/principal planes/conjugates: results states and implementedModel.states.
- Standalone element and group powers: implementedModel.elements and groups, with literal-data input fingerprint.
- Native/application PgF: sourceModel.elements, catalogReplay and normal-line conversion checks.
- Conditional expressions and precision residuals: sourceModel.conditions, sourceModel.groups, comparisons.
- Unconstrained/admitted working aperture and clipping: implementedModel.physicalAperture; fresh native finitePhysical.
- Actual-F/Summary/current pupil and UI rays: implementedModel.nativeExecution.publishedStates and runtime states.
- Geometry and native render trim: implementedModel.geometry and native states[].renderDiagnostics.
- Rejected extreme: implementedModel.rejectedExtremeIndependent and runtime rejectedExtreme.

Interpretive prose and source citations were manually checked. No analysis file was created before this Stage 2 checkpoint was frozen. The Stage 3 claim map below covers the new analysis without changing the protected optical payload.

## Replay and pending integration

Portable command: `python Sigma105mmf28DGDNMacroArt.verify.py --package-dir <extracted> --output <outside-package/results.json>`.

Fresh actual-runtime replay adds `--reference-dir <recorded-current-main-sources>`, requires Node 24 or later and writes native JSON/SVG beside the external results. All per-lens numerical inputs and custom optical code are packaged; the identified public project source snapshot is an external shared dependency. Standard-library portable replay does not pretend to execute the application.

Clean extraction checks exact membership, original bytes, non-manifest hashes, stable numerical equality and actual native replay. No result file is overwritten during replay. All final hashes bind this explicit scope.

INTEGRATION_PENDING. Repository-wide typecheck/format/lint/shared tests and integrated viewer checks are NOT_RUN, requiredAt integration.


## Stage 3 analysis consistency and claim review

The Stage 2 scoped checkpoint was frozen before analysis authoring. Its data, evidence and verifier bytes are unchanged in this Stage 3 revision. The 256-line analysis follows the current specification: patent metadata and correlation, architecture, all 17 elements in order, glass/spectral limits, focus, bounded aperture/readout discussion, source conditions, verification boundaries and portable primary references. A separate asphere section is correctly omitted for this all-spherical example.

All 68 acceptance checks pass. The ten raw failed comparisons remain unchanged in status and meaning. Numerical tables were generated from the approved final-file computation, with primary-source statements explicitly identified separately. The executed structure, metadata, element-first-line, numerical-value, disclosure and citation checks are supplemented by manual source/prose review.

| Analysis claim or section | Fact/result binding | Source/model authority |
|---|---|---|
| Identity, application, dates and embodiment | evidence.job; original PDF p. 2; final data structured metadata | JP2021148808A original; public transliteration only for inventor name |
| Production correlation and 17/12 comparison | source counts; evidence.productCorrelation | Source construction versus official Sigma specifications; exact factory attribution unconfirmed |
| Three-group signs and compound EFL table | implementedModel.groups; GROUP-* checks | Actual final literal prescription matrices; printed residuals retained |
| L1–L17 first-line nd/νd/glass/f | final data.elements; implementedModel.elements; ANALYSIS-ELEMENTS | Native material coordinates and independently computed isolated-air powers |
| Element arrangement and designations | raw source ¶0108–0110; surface map | Patent structure; no invented element-level aberration budget |
| Normal-line formulas and PgF table | sourceModel.elements; NORMAL-LINE-CONVERSION | Native patent baseline and exact released runtime baseline |
| Catalog alternatives and spectral limits | sourceModel.catalogReplay; evidence.glassEvidence | Primary catalog coefficients; generic labels do not assert a supplier/melt |
| Focus spacing and EFL/track tables | implementedModel.states; source-map and conjugate checks | All three published columns; precise reference planes preserved |
| Aperture definition table | implementedModel.physicalAperture; nativeExecution.publishedStates | Independent exact admitted/unconstrained cones and actual released helpers |
| Current UI fan/readout limits | runtime.states; NATIVE-CURRENT-UI-DISCLOSURE | Current yRatio, physical iris, focusK and public traceRay; no cached EP substitution |
| Conditional expressions and precision discussion | sourceModel.conditions; comparisons; group input-precision enclosures | Native source normal line; claim-defined G2 denominator; literal contrary branch retained |
| Rejected extreme noBracket | implementedModel.rejectedExtremeIndependent; runtime.rejectedExtreme | Both physical rejection and unavailable native continuation preserved |
| Geometry and scope boundary | GEOMETRY-PORTABLE; NATIVE-SAMPLED-GEOMETRY; acceptedScope | Bounded sampled checks only; no exposure/illumination/full-pupil claim |

Manual review confirmed that element shape/position descriptions agree with original paragraphs 0108–0110, no APO or complete aberration-performance claim is inferred from power signs, marketing and native conjugates remain distinct, and citations identify the exact publication rather than substituting another family member. Private conversation identifiers and authorization provenance are absent from the scientific files; the semantic fixed-iris scope is the controlling artifact boundary.

Disposition: READY_FOR_AUDIT under FIXED_IRIS_DIAGNOSTIC_V1 only. Final independent review of the exact new pair is still required. INTEGRATION_PENDING remains unchanged.


## Final independent Stage 4

The exact Stage 3 input archive was verified as SHA256 `7870c58b13f3ccd0efbb8eb9a9b5bf8568439c23561d6d0073b5b099a022fa26`. Original candidate data and analysis hashes were `1435b410ec958c4a739f170a4221e67b22e2cf553f521291988bafb7f0d27002` and `4f0426bccedababa5173d9ca08e7f1cca7c8b81ee8a40dbd9c77b9a91cdceace`. Both pair files remain byte-identical. All optical fields, fixed iris, SDs and published focus states therefore remain unchanged. Changes to the dossier consolidate independent evidence, replay and scoped disposition only.

### Source-first independence and portable retention

Pass A was frozen before candidate exposure: fingerprint `96bd88cef44252aee357894c599e2e8ab69b5807728ee81aa1aac66e95d342c1`, original evidence SHA256 `36c2653022cf8c2aec4392496e05d12da8ef500c2cff18c4dfe967d9b27adc58`, original verifier SHA256 `c49882307f8378b7ef6e4df7418a38eb657c10527c768afd61246127335e7592`, original results SHA256 `b62b67a3f7bfe8363c759d02362f0507f67367eaa38bc8c149948648e75868e8`. The original seven files are unchanged. A hash binds bytes but does not prove independence.

The complete frozen source/numerical input subset is preserved under evidence.independentPass.frozenSourceInputs, without irrelevant acquisition metadata. Original frozen result observations are separately retained. The fourteenth dossier file, independent.py, preserves the source-review ABCD, sequential and exact sphere/Snell methods with an explicit final-dossier input adapter; it also maps the final literal data into a separately computed branch. It does not consume saved results as computation inputs. Historical baseline FAILs remain in the frozen reference numbers and fresh baseline computation. The original source files and optical payload were never changed to match author results.

Fresh independent final-data calculations agree with source-first EFL, track, finite conjugates, individual/group powers, material coordinates and runtime partial-dispersion conversions. Actual physical and current-UI aperture results from the earlier bounded reconciliation were independently repeated and agree with the final native replay. The original pre-exposure fingerprint remains the independence anchor; the final candidate was not treated as a fresh blinded extraction.

### Pair, primary sources and appearance review

All seventeen element descriptions, shapes, media, standalone powers and cement memberships were manually reviewed against the original rendered tables, Figure 1 and paragraphs 0107–0110. Source and marketing specifications remain distinct. Public manufacturer product and launch pages were reopened on 5 October 2026, confirming 17/12 construction, full-frame mounts, 1:1, 295 mm production MFD, HSM, and September 2020 announcement/October 2020 release. No factory-prescription or supplier confirmation is inferred.

The final native three-state SVG was regenerated from released shape functions, rasterized with MuPDF and visually inspected. It has coherent glass boundaries and fixed front/rear groups with independent G2/stop movement, consistent with the source figure and stated model. This is bounded native shape QA, not a React viewer or full-ray illumination certification. The initial optional SVG rasterizer was unavailable; MuPDF completed visual inspection without installing software.

An audit-table disclosure was corrected: the tiny infinity axial transfer residual had been displayed in a magnification column. Infinity is now marked as not a finite magnification. This did not change any computed number, source value, data field or analysis claim.

### Executed gates and retained failures

The final native invocation executes 77 applicable scoped acceptance checks, all PASS, including frozen-input integrity, frozen numerical replay, independent final-candidate source mapping/calculation, final-pair review and exact released-module identity. All 134 freshly imported optical module hashes match the recorded released 709dda72 references. No unmerged modules were used.

The ten raw FAIL comparisons remain FAIL: GROUP-PRINTED-CL1/CL2/CL3; CONDITION-PRINTED-8; C10-LITERAL-PARAGRAPH0089; WORKING-APERTURE-M05/M10; REJECTED-EXTREME-NATIVE-CROSSCHECK; NATIVE-ACTUAL-F-M05/M10. Their meanings and scope exclusions are unchanged. The final gate is not a source-F reproduction claim. Positive geometry and constructor checks do not erase any aperture, readout or rejected-ray limitation.

Full-fidelity exposure, illumination, full 3D-pupil and continuous-focus certification remain excluded. Full-project typecheck, lint, build/corpus tests and an integrated browser viewer remain NOT_RUN for later integration. No physics or schema exception has been added.

### Reproduction and final disposition

Portable numerical replay:

`python Sigma105mmf28DGDNMacroArt.verify.py --package-dir . --output /tmp/Sigma105-portable.json`

Native replay additionally requires the exact recorded released reference sources and Node 24 or later:

`python Sigma105mmf28DGDNMacroArt.verify.py --package-dir . --reference-dir /path/to/released709dda72/sources --output /tmp/Sigma105-native.json`

Portable-only replay preserves the three recorded native raw failures with explicit historical provenance; it does not claim to execute application code. Native replay re-executes them, verifies every module hash, and reproduces all ten raw failures alongside the passing scoped checks. No external per-lens numerical inputs are fetched during either replay.

The source-inclusive 14-file archive was reopened and safely extracted; membership, original-source hashes and all manifest member hashes were checked. Portable and native replay results were checked outside the extracted dossier; stable numerical content and expected raw statuses reproduced. Final checks and exact hashes are recorded in the manifest and external delivery record.

**READY_FOR_BATCH, qualified solely by FIXED_IRIS_DIAGNOSTIC_V1. INTEGRATION_PENDING.** This is the authorized unchanged fixed-iris prescription/geometry visualization, with unreproduced close-focus source F, approximate app readouts and unverified exposure/illumination/full-pupil limits disclosed. It is not integrated or published.

## 2026-10-06 — Patent-figure semi-diameter pass

Scope: semi-diameters only, against the cross-section of the stored embodiment. No radius, spacing, medium, focus state, iris value or metadata field was touched.

### Figure and scale

JP2021148808A Figure 1 (PDF p. 30, printed p. 29, top-left panel), Numerical Example 1 at infinity. The panel is an embedded 815 × 379 px raster at 300 ppi; it was measured on a 600 dpi render, so one native pixel is 0.23 mm. The optical axis is horizontal at row 993.5. The surface 1 vertex crosses the axis at x = 659.5 px and the image plane at x = 1948.5 px, giving 1289 px for the 146.7268 mm track, or 0.11383 mm/px. Every other vertex predicted from the prescription lands within 1–2 px of its drawn crossing (surface 5 at 1072, 13 at 1264, 21 at 1397, 30 at 1669), and the rim corners sit where the tabulated spheres put them at the measured heights, so the drawing is to scale in both directions.

Rim heights were read on the lower side, which carries no leader lines, with the search window kept inside the CL brackets; the upper side agrees wherever it is clean (G1, L16, L17).

| Element | Figure rim, px | Figure rim, mm | Stored sd, mm | Figure / stored |
|---|---:|---:|---:|---:|
| L1 | 234 | 26.6 | 26.5 | 1.01 |
| L2 | 230 | 26.2 | 26.5 | 0.99 |
| L3 | 154 | 17.5 | 17.5 | 1.00 |
| CL1 (L4–L5) | 144 | 16.4 | 16.5 | 0.99 |
| CL2 (L6–L8) | 128 | 14.6 | 14.5 | 1.00 |
| CL3 (L9–L10) | 120 | 13.7 | 14.0 | 0.98 |
| CL4 (L11–L12) | 110 | 12.5 | 12.5 | 1.00 |
| L13 | 104 | 11.8 | 12.0 | 0.99 |
| L14 | 88 | 10.0 | 10.0 | 1.00 |
| L15 | 112 | 12.7 | 13.0 | 0.98 |
| L16 | 132 | 15.0 | 15.5 | 0.97 |
| L17 | 146 | 16.6 | 17.0 | 0.98 |

The authored rims therefore already reproduce the drawing to 3 % or better, and the element-to-element proportions are right.

### Change

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 27 (L16 front, R = −28.2194) | 15.5 | 13.3 | Figure 1 draws L16 with a stepped front: the concave curve leaves a vertical flange face 115 px from the axis on both the upper and the lower side (13.1 mm), and the blank continues to the 132 px rim (15.0 mm). Laid over the tabulated sphere, the drawn face follows the curve at a constant line-edge offset up to 13.1–13.3 mm and then stays put, finishing 9 px (more than four native pixels, 1.1 mm along the axis) short of where the sphere would be at the rim. The stored value followed the outer rectangle, 17–18 % beyond the drawn optical zone. 13.3 mm is the upper figure reading and the first 0.1 mm step above the traced requirement below. |

With the rear face left at 15.5 mm, the L16 outline now runs from the front rim at 13.3 mm to the rear rim at 15.5 mm. The rim air space between L15 and L16 goes from 2.73 mm to 4.04 mm; the figure shows 35 px, 3.98 mm. The front corner of L16 now sits 1.3 mm behind the L15 rear vertex, as drawn, instead of level with it.

### Values deliberately left alone

- All twelve rim heights in the table above: within 3 % of the figure.
- Surface 28 (L16 rear, R = +208.5): 15.5 mm against a 15.0 mm drawn rim. The face is nearly flat, so an annulus cannot be told from the surface, and lowering it alone would shift the L16-to-L17 height ratio away from the figure.
- Surface 25 (L15 front): the same overlay hints at a short flat annulus starting near 11.6–12.0 mm, but the departure from the sphere at the rim is under one and a half native pixels. Stored 13.0 mm is 8–12 % above that range; left.
- Surface 24 (L14 rear): the overlay departs from the sphere from about 9.3–9.5 mm, again by under one and a half native pixels, against 10.0 mm stored (5–7 %). The stored rim is also what the corner bundle needs (10.00 mm at the finite states); left.
- Surface 9 (CL1 rear): the drawn face follows the sphere to within one native pixel all the way to the rim; no annulus is measurable. Left at 16.5 mm.
- The remaining air-side faces meet their rims where the tabulated spheres put them, to 1–3 px.
- STO: unchanged. The 100 px (11.4 mm) stop mark in the figure is a symbol, not an iris radius.

### Checks on the result

The repository surface validator reports no validation errors, the image-circle floor check reports 0 undersized surfaces, and the traced field-coverage check reports 100 % (11.7° reaching 21.65 mm of 21.65 mm, corner clear).

An exact meridional trace at image height 21.6 mm shows no clipped axial marginal ray and no blocked chief ray at any of the three published focus states; the infinity half-field is 11.62° against the patent's 11.64°. At surface 27 the axial marginal ray is at 6.17 mm, the corner chief ray at 7.72, 9.88 and 11.00 mm (infinity, −0.5×, −1× gaps), and the unvignetted corner bundle at 13.21, 11.96 and 11.00 mm, all inside 13.3 mm.

A dense meridional fan through the other stored rims, stepped across the whole interpolated focus range, puts no ray that lands inside the 21.6 mm image circle higher than 13.26 mm on surface 27 (13.21 mm with the infinity gaps, rising to 13.26 mm with the −1× gaps), and no ray at all higher than 13.60 mm. Object-point fans at the three published conjugates admit exactly the same in-format rays before and after the change, so the new rim removes no transmitted meridional ray.

The fixed-iris results quoted earlier in this log were recomputed with an independent sphere and Snell trace on the edited file: admitted on-axis working F 4.013750 at −0.5× and 5.225883 at −1×, with surface 17 the limiting rim in both, exactly as before. The engine build is unchanged: EFL 103.4768 mm, open aperture F2.9, calibrated iris radius 9.611937886008489 mm.

Native render diagnostics at 22 focus controls (748 surface states) show zero hidden trim. Surface 27 had the largest rim slope in the model, the 33.32° quoted in the geometry section above; it is now 28.12°, and the largest is 29.10° at cemented surface 18. The minimum glass thickness is unchanged at 0.979 mm (L17 edge).

The local lens page was rendered headlessly at infinity, at the −0.5× control (0.773) and at closest focus, before and after. The infinity section matches Figure 1 in rim heights, group steps and spacing; no element overflows the frame and the layout fields were not changed.

### Open limitations

- The renderer joins unequal front and rear rims with a straight line, so the stepped flange of L16 appears as a chamfer from 13.3 mm to 15.5 mm rather than as the square-topped block of the drawing.
- The figure is a 300 ppi raster; a reading is good to about one native pixel, 0.23 mm, which is why the smaller annuli above were not acted on.
- The statements above that all inferred SDs are unchanged, and the Stage 4 optical-payload hash, describe the file before this pass. Surface 27 is the only optical field that differs. The external dossier verifier is not part of this repository and was not re-run, so its recorded 60 % and 100 % field samples were not regenerated; the fan comparison above is the substitute evidence.
- Only meridional rays were traced here. The off-axis toggle and skew-ray analyses of the live page were not exercised.

## 2026-10-06 — Integration glass and metadata pass

- **Glass labels.** The 17 generic `Crown-class` / `Flint-class (supplier unconfirmed)` annotations were replaced by
  the HOYA catalog glass that reproduces each source row: L1 E-CF6, L2 TAF3D, L3 TAFD65, L4 FCD515, L5 NBFD25, L6 TAC8,
  L7/L9 NBFD29, L8 TAFD5G, L10 E-FDS1-W, L11 FDS90-SG, L12 E-FEL1, L13 TAFD32, L14 BACD16, L15 TAFD35, L16 FCD705 and
  L17 BSC7. Each label keeps the "coordinate equivalent; supplier unconfirmed" qualifier; stored nd, νd and
  the patent-derived dPgF values are unchanged.
- **Evidence.** For every element the catalog curve evaluates to the stored nd within 5e-6, νd within 0.01 and a dPgF within
  0.0002 of the converted patent PgF. PgF separates the same-coordinate alternatives: TAF3D (−0.0083) rather than TAF3
  (−0.0076) for L2, TAFD5G (−0.0072) rather than TAFD5F (−0.0068) for L8, FCD515 rather than FCD505 for L4, TAFD35
  rather than TAFD35L for L15, and HOYA BACD16 (−0.0029) rather than N-SK16 (−0.0011) for L14. BACD16 was added to the
  shared catalog from the HOYA 2026-07-07 AGF for this row. L17's PgF 0.5343 is the HOYA BSC7 value (N-BK7 gives
  0.5349); the true HOYA BSC7 row was added to the shared catalog from the same AGF and replaces the old
  `BSC7 → S-BSL7` alias.
- **Effect.** All 17 elements now trace on catalog Sellmeier data at C/d/F with g rebuilt from the patent PgF, instead
  of the dPgF-corrected Abbe approximation. The header note and the closing paragraph of the analysis glass section
  were rewritten accordingly; the "generic labels" wording in earlier sections of this log describes the pre-pass state.
- **Metadata.** Display name changed to `SIGMA 105mm f/2.8 DG DN MACRO | Art`, following Sigma's product name and the
  catalog's `| Art` convention. `lensMounts` (`l-mount`, `sony-fe`) and `imageFormat` (`135-full-frame`) re-checked and
  retained.

## 2026-10-06 — Final diagram, label and movement review

Second pass of the day, against JP2021148808A Numerical Example 1 and its Figure 1 (PDF p. 30, top-left panel, infinity). It builds on the two sections above. No radius, spacing, index, Abbe number, variable gap, focus keyframe or iris value was touched; all 30 table rows and all 17 PgF entries were re-compared with the patent text layer and agree.

### Figure SD review

**Method.** The figure was measured on the embedded raster itself (815 × 379 px at 300 ppi, one pixel = 0.2277 mm) instead of a resampled render, and the model outline was overlaid on it pixel for pixel. The axis is row 184; the surface 1 vertex is at column 93.5 and the image plane at column 738, so 644.5 px span the 146.7268 mm track (4.3925 px/mm). The 23 vertex crossings between those anchors land within 0.67 px of the prescription. As a radial check, the drawn arcs of nine strongly curved faces (7, 9, 15, 18, 24, 26, 27, 29, 30) were fitted with the axial scale fixed: the best radial scale is 0.95–1.03 of the axial one (median 1.00) and the residual at equal scales is 0.3–0.7 px rms. The image-plane mark is 91.5 px (20.8 mm) long per side against the printed Y = 21.63 mm; it is a symbol and was not used. A rim reading is therefore good to about one pixel (0.23 mm) plus up to 3 % of radial scale, and height ratios between elements are firmer than absolute heights.

**Rim rows.** Flat rim strokes, pixels above / below the axis row (stroke centre), before this pass:

| Element | Rows up / down, px | Figure, mm | Stored, mm | Stored − figure, mm |
|---|---:|---:|---:|---:|
| L1 | 117 / 117 | 26.64 | 26.5 | −0.14 |
| L2 | 115 / 115 | 26.18 | 26.5 | +0.32 |
| L3 | 76 / 76–77 | 17.3–17.5 | 17.5 | 0 to +0.2 |
| CL1 | 72 / 72 | 16.39 | 16.5 | +0.11 |
| CL2 | 63 / 64 | 14.46 | 14.5 | +0.04 |
| CL3 | 59 / 60 | 13.55 | 14.0 | +0.45 |
| CL4 | 55 / 55 | 12.52 | 12.5 | −0.02 |
| L13 | 51 / 52 | 11.72 | 12.0 | +0.28 |
| L14 | 43 / 44 | 9.90 | 10.0 | +0.10 |
| L15 | 56 / 56 | 12.75 | 13.0 | +0.25 |
| L16 | 66 / 66 | 15.03 | 13.3 front, 15.5 rear | −1.73, +0.47 |
| L17 | 73 / 73 | 16.62 | 17.0 | +0.38 |

**Changes.**

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 27 (L16 front) | 13.3 | 15.0 | Figure 1 draws L16 as a square-topped block 66 px (15.03 mm) high on both sides, with a 22 px flat rim stroke. With unequal rims the renderer joined 13.3 mm to 15.5 mm by a 5.4 mm edge inclined 24°, cutting 1.5 mm inside the drawn top corner. Measured against the drawn outline, the mismatch per half-section is 3.41 mm² for the chamfer, 3.89 mm² for the original 15.5 / 15.5 and 1.15 mm² for 15.0 / 15.0. |
| 28 (L16 rear) | 15.5 | 15.0 | Same 66 px rim on both sides; the stored value stood 2 px above it. Equal rims give the drawn square edge. |
| 29, 30 (L17) | 17.0 | 16.6 | Rim at 73 px on both sides (16.62 mm). Lowering L16 alone would have taken the L16 : L17 height ratio from 0.912 to 0.882 against the drawn 66 / 73 = 0.904; 15.0 / 16.6 gives 0.904. The drawn rim flat is 6 px wide including both outline strokes, which fits the 1.24 mm edge at 16.6 mm better than the 0.98 mm edge at 17.0 mm. |

Surface 27 is now a rendering rim, not a clear-aperture claim: the flange face of the drawn step sits at column 551 on both sides, 3.05–3.28 mm ahead of the surface 27 vertex, which puts the end of the concave curve at 12.8–13.2 mm (the first pass read 13.1–13.3 mm). The data header and the analysis say that the outer 1.7 mm is blank. The statements in the first-pass section that surface 27 stops at 13.3 mm, that the rear face stays at 15.5 mm and that L16 renders with a chamfer are superseded by this table.

**Checks on the trial set, before and after editing.**

- Validator: no errors. Largest rim slope is now 32.11° at surface 27 (it was 28.12° there and 29.10° at surface 18 after the first pass). Minimum glass thickness is now the 1.000 mm centre of L5, L7, L9, L11 and L16; the thinnest edge is L3 at 1.126 mm, and the L17 edge grows from 0.979 mm to 1.237 mm. The corresponding figures in the earlier sections describe the earlier rims.
- Image-circle floor: 0 undersized surfaces. Traced field coverage: 100 % (11.7° reaching 21.65 mm of 21.65 mm, corner clear).
- Exact meridional trace at image height 21.6 mm with the infinity, −0.5× and −1× gaps: no clipped axial marginal ray and no blocked chief ray; infinity half-field 11.62° against the patent's 11.64°. Chief-ray heights are at most 11.00 / 12.15 / 12.99 / 13.73 mm on surfaces 27–30, and the unvignetted infinity bundle needs 13.21 / 14.68 / 15.87 / 16.20 mm, all inside 15.0 / 15.0 / 16.6 / 16.6.
- Dense meridional fans (infinity fields to 13°, object points at the two published conjugates) admit exactly the same rays that land inside the 21.6 mm image circle before and after: 362,367, 236,763 and 184,422. The highest such ray is at 13.25 mm on surface 27, 14.73 mm on 28, 15.93 mm on 29 and 16.25 mm on 30.
- Fixed-iris results quoted earlier are unchanged: admitted on-axis working F 4.013750 at −0.5× and 5.225883 at −1×, surface 17 limiting in both, stop fractions 0.961335 and 0.907501, first clip of the full iris-edge ray at surface 17 and surface 10.
- Engine build unchanged line for line: EFL 103.4768 mm, open aperture F2.9, half-field 13.66°, calibrated iris radius 9.611937886008489 mm. Render diagnostics at 22 focus controls (748 surface states) show zero hidden trim.
- The local page was rendered headlessly at infinity, at the −0.5× control (0.7728) and at closest focus. L16 now shows the drawn flat-topped block and the G3 staircase reads 10.0 / 13.0 / 15.0 / 16.6 mm against the drawn 9.9 / 12.75 / 15.03 / 16.62 mm.

**Differences seen and left.**

- L16 front corner. The rendered concave face runs on to the 15.0 mm rim and ends 4.32 mm ahead of its vertex, 1.1 mm ahead of the drawn flange face; the corner sits 0.29 mm behind the L15 rear vertex where the figure shows 1.3 mm. The renderer has no flange step, so this is the residue of choosing the square edge over the chamfer.
- CL3 is 0.45 mm (2 px, 3 %) taller than drawn, so the CL2 → CL3 → CL4 steps read 0.5 / 1.5 mm against the drawn 0.9 / 1.0 mm. Not closed: rays that land inside the image circle reach 13.64 mm on surface 14 at both finite states, so the drawn 13.55 mm would clip them, and any value below 13.81 mm would also move the first clip of the −0.5× iris-edge ray from surface 17 to surface 14.
- L13 is 0.28 mm taller than drawn; in-format rays reach 11.85 mm on surface 20 at −1×.
- L15 is 0.25 mm (1.1 px) taller than drawn and L2 0.32 mm (1.4 px); the figure draws L2 two pixels shorter than L1 where the model draws them equal. Both are inside the reading precision and were left.
- L1, L3, CL1, CL2, CL4 and L14 agree within 0.2 mm; in-format rays use the full stored rim on surfaces 1, 5, 10, 17, 23 and 24.
- Surface 25 (L15 front): the drawn rim corner is at column 525 on both sides, 1–2 px behind the sphere, so a flat annulus could begin near 12.0 mm. A 12.0 / 13.0 pair would turn the drawn square edge into a 29° chamfer, so the equal rims stay.
- Surface 24 (L14 rear) and surface 19 (CL4 rear): the drawn rim corners are within 1.4 px of the spheres; no annulus is measurable (on surface 24 it could not begin below 9.7 mm).
- The stop is drawn as two ticks 11.4 mm from the axis, a symbol; the 9.61 mm iris is unchanged.

### Diagram labels and movement order

- **Elements and types.** 17 elements numbered 1–17 front to rear in 12 air-separated groups. Every `type` string was checked against the signed radii and paragraphs 0108–0110: L1 negative meniscus concave to the object; L2, L3, L4, L8, L10, L13, L17 biconvex; L5, L7, L9, L16 biconcave; L6 and L15 positive menisci convex to the image; L11 and L14 negative menisci and L12 a positive meniscus convex to the object. No change. Example 1 has no aspheric surface and the page draws no asphere marker.
- **Labels.** `label` Element 4 → `Element 4 (G2LPL)`, Element 5 / 7 / 9 → `… (G2LN)`, Element 10 → `Element 10 (G2LPH)`, Element 14 / 16 → `… (G3LN)`: these are the designations Figure 1 prints and paragraphs 0109–0110 assign. The `role` texts of the same seven elements now name the designation, the conditions it serves and the position in its cemented group. The other ten labels and roles were verified and left; the patent does not number individual elements, so L1–L17 remain model slot names.
- **Cemented groups.** CL1 = surfaces 7–9 (L4 + L5), CL2 = 10–13 (L6 + L7 + L8), CL3 = 14–16 (L9 + L10), CL4 = 17–19 (L11 + L12), matching the start surfaces 7 / 10 / 14 / 17 of the patent's group table and the brackets of Figure 1. Recomputed focal lengths +463.48 / +946.83 / +366.26 / −86.97 mm against the printed +463.44 / +946.89 / +366.25 / −86.97. No change.
- **Groups and stop.** G1 = 1–4, G2 = 5–21, G3 = 23–30 match the patent's start surfaces 1 / 5 / 23 and powers (+477.96 / +70.37 / −132.66 mm). The stop is patent surface 22 between G2 and G3 and belongs to neither. Added a stop-only annotation `S` (the patent's symbol) so the group row reads G1 · G2 · S · G3 as in the claims; the `STO` marker is unchanged.
- **Spec line.** The page showed none. Added `specs`: 17 ELEMENTS / 12 GROUPS, f = 103.48 mm, F/2.90 and 2ω = 23.28° (patent infinity values) and ALL SPHERICAL. `subtitle` names the right example and was left. No rear plate is listed by the source and none is modelled.
- **Focus order.** The three `var` vectors list the patent columns in slider order, infinity → −0.5× → −1×: D4 42.2916 / 21.2405 / 1.7259, D21 2.3594 / 11.2153 / 19.4249, D22 1.6794 / 13.8745 / 25.1795. `focusPositions` 0 / 0.7728 / 1 equals 296.9112 mm divided by each state's object-to-image distance (∞, 384.2080, 296.9112 mm); `closeFocusM` 0.2969112 is the −1× object distance 150.1845 mm plus the 146.7267 mm track. Both finite keyframes carry `finiteConjugates` entries and so count as published stations.
- **Focus direction and travel.** Relative to the fixed image plane, the G2 front vertex stands at 99.750 / 120.801 / 140.316 mm and the stop at 60.404 / 72.599 / 83.904 mm, while the G1 rear vertex (142.042 mm) and the G3 front vertex (58.725 mm) do not move. G2 therefore travels 21.051 mm and 40.566 mm toward the object and the stop 12.195 mm and 23.500 mm, 0.579 of the G2 travel at both states. This is what claim 1, claim 7 and paragraph 0107 state (G2 and S move to the object side at different speeds) and what the two objectward "focus" arrows under G2 and under S in Figure 1 show. The three gaps sum to 46.3304 / 46.3303 / 46.3303 mm, so the change in D4 is balanced by D21 + D22 to table rounding. Nothing was mis-ordered.
- **Movement overlay.** The focus overlay of the local page shows G1 and G3 as fixed points and G2 moving toward the object with a maximum travel of 40.57 mm. It does not plot the stop, because it skips single-surface annotations; the stop's own travel is visible on the section and in the D21 / D22 readouts.
- **Focus text.** `focusDescription` already gave the right direction and groups. It now states the travel of G2 and of the stop at both finite states, marked as derived, and no longer says the semi-diameters are retained.

### Glass and color completeness

- All 17 elements trace on catalog Sellmeier data. Each resolved HOYA row reproduces the stored nd within 5e-6 and νd within 0.01, and its dPgF is within 0.0002 of the authored value. Nothing is missing from the shared catalog.
- `dPgF` is authored for all 17 elements, each equal to the printed PgF minus (0.6438 − 0.001682 νd). The patent prints no line indices, so none are stored.
- `apd: "patent"` added to L4 (G2LPL) and L10 (G2LPH). Paragraphs 0053–0058 call the G2LPL material a low-dispersion glass with anomalous partial dispersion and condition (4) requires ΔPgF > 0.0050 (printed 0.0192); paragraphs 0059–0062 call the G2LPH material a high-index glass with large anomalous partial dispersion and condition (7) requires ΔPgF > 0.0100 (printed 0.0283).
- `apd: "inferred"` added to L16: its coordinates (1.55032 / 75.50, PgF 0.5401) are those of the FCD705 low-dispersion crown class. The patent constrains this G3LN element only by nd < 1.67 and νd > 55, which is not a statement about partial dispersion.
- Left untagged: L5, L7 and L9 (G2LN), because condition (8) is an upper limit on ΔPgF; L14 (G3LN, νd 60.35), an ordinary crown; and the dense flints L3 and L11, whose positive deviations the patent does not single out.
- Sigma's product page lists one SLD element. The model has two low-dispersion crowns of SLD-like class, L4 (νd 68.62) and L16 (νd 75.50), and the patent does not say which slot the production SLD element occupies; the SLD brand is not assigned to either.

### Identity and metadata

- Front page (PDF p. 2): JP 2021-148808 A, published 27 September 2021, application 2020-44913 filed 16 March 2020, applicant 株式会社シグマ, sole inventor 植田 裕輝. `patentNumber`, `patentAuthors` (`Yuki Ueda`), `patentAssignees` (`Sigma Corporation`) and `patentYear` 2021 agree.
- Sigma's product page, read on 6 October 2026: 17 elements in 12 groups, one SLD element, angle of view 23.3°, nine rounded blades, minimum aperture F22, minimum focusing distance 29.5 cm, 1:1, L-Mount and Sony E-mount. `elementCount`, `groupCount`, `lensMounts`, `imageFormat`, `focalLengthMarketing` 105, `apertureMarketing` 2.8, `maxFstop` 22 and `apertureBlades` 9 agree.
- `focalLengthDesign` 103.4768 and `apertureDesign` 2.9 are the patent's 103.48 mm and F2.90. `closeFocusM` stays at the patent's 296.9 mm, 1.9 mm longer than the production figure. The display name `SIGMA 105mm f/2.8 DG DN MACRO | Art` was reviewed and left.

### Open limitations

- The renderer cannot draw the stepped front of L16; see the first item under "Differences seen and left".
- The figure is a 300 ppi raster. Rims that differ from it by one or two pixels were only changed where a second measurement supported the move (L16, L17) and no in-format ray was affected.
- Only meridional rays were traced. The off-axis toggle, which needs a click, was not exercised on the live page.
