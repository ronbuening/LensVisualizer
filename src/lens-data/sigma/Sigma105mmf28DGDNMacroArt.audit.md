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
