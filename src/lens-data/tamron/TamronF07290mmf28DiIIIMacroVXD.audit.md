# Tamron F072 90mm macro technical audit

## Current disposition

The reviewed Stage 3 optical data and analysis pass the independent technical review within the adopted limited model scope. No change to a source radius, spacing, refractive index, glass field, fixed iris, inferred semi-diameter, focus endpoint, name or subtitle is required. The result supports the nominal central-pupil and corner-chief model described below; significant off-axis vignetting and the original source discrepancies remain explicit.

**READY_FOR_BATCH** within the adopted model scope. Independent review, final inventory/hash verification and clean-extraction replay pass. The corrected portable verifier reproduces the fresh independent calculations and makes an isolated mandatory native FAIL exit **1**. The original optics and analysis are unchanged. Application integration remains **INTEGRATION_PENDING**, with five unexecuted integration checks individually recorded as **NOT_RUN**.

## Source and reviewed candidate identities

The numerical source is Example 1 of JP2026057675A, published April 3, 2026, from application JP2024-164765 filed September 24, 2024. The applicant is Tamron Co., Ltd.; the inventor is 小林 知広, normalized as Tomohiro Kobayashi using corroborating published bibliographic metadata. That corroboration supplies the name only; no alternative prescription supplies optical values.

The original job card and patent remain unchanged. Source identity and review identity are distinct:

| Item | SHA-256 |
|---|---|
| Original JP2026057675A PDF, 4,299,131 bytes | `d69efbe9857ccf71267567a58966cb0e2597387418619a2c6ec76ed30ffefed1` |
| Original F072 job card, 174 bytes | `f66a53abcfcfdabddc34d7c46561dfe87482ef13f71f260fa3d3683bdd076502` |
| CHAT-1.0 workflow ZIP, dated September 11, 2026 | `ef9a25e06642c717e3cf4e8da327c3669260036082fdd5f5ef7d5631416b0224` |
| Reviewed Stage 3 candidate archive | `45f15c7d711c8a17fa1c634de519f7151fb4bc57e15d14301308fe953854ab44` |
| Reviewed candidate data | `7763647039764047bca8ae84a9c5aa2d4f7b0c57f923c5923d473928db5995f7` |
| Reviewed candidate analysis | `dbd3dbf000f5d532297b00bf398a4a24eaccf11c94fe86c716ab75fca164554c` |
| Reviewed native harness | `0a560f7b1bb37c3cff3e64873e6eef1aa998e53792952fcf415320cc9211c1db` |

The final manifest binds every delivered file, including evidence, verifier, results and audit. Data, analysis and native-harness bytes retain the reviewed identities above.

The controlling public reference commit is `3f00f21094afdbee2e1b8551b96d2734b7f0d0f1`. All 151 reference-file hashes were independently checked; the snapshot-manifest SHA-256 is `248fb6bfb3fad7f19beaca5486513cafe7a718bd6c97f7c13219378fbf40b705`. Independent public-main checks at 18:51 and 19:25 UTC on October 5, 2026, resolved to that commit. Its authoring specifications match the earlier `25bfb7566f748a75e59647d433da51bdd198a4ff` snapshot, but exact-ray intersection code changed, so candidate native results use the newer pinned code.

## Prescription and modeling conventions

The source has 30 listed planes before the image plane: 27 powered refracting interfaces, the air stop at surface 12, and two camera-cover-plate faces. The active lens contains 15 spherical elements in 12 air-separated components, with cemented interfaces at surfaces 6, 14 and 21, and five motion groups. No asphere coefficients, numerical clear apertures or physical diaphragm diameter are published. Figure 1 corroborates topology and relative outline; it is not a dimensioned aperture table.

The axis increases from object to image. Positive radius places the center of curvature imageward. Paragraph 0071 defines a printed radius of `0.0000` as a plane. All dimensions remain in millimeters at scale 1. Indices and Abbe numbers are d-line values; the patent gives wavelengths d = 587.56 nm, C = 656.27 nm and F = 486.13 nm. Paragraph 0073 references photographic distance to the image plane.

The physical camera cover plate is retained as camera-side optics: 2.5000 mm thickness, nd = 1.51633, vd = 64.14, with 19.4558 mm air after active surface 28 and 1.0000 mm air after the plate. It is neither omitted nor replaced by an air-equivalent distance. Exactly one aperture stop remains at source plane 12.

The four published variable gaps retain both printed endpoints without fitting. G2 moves imageward by 13.4002 mm and G4 by 15.0002 mm in absolute source coordinates. The local D19 increase is 15.0003 mm; accumulated upstream rounding accounts for the difference. G3 and G5 retain the small source-derived shifts of −0.0001 and −0.0004 mm. Linear interpolation of the gaps is an application approximation. Intermediate conjugates calculated for ray diagnostics do not become additional published focus stations or a measured cam law.

## Independent review provenance

Three identities must not be conflated:

- Author extraction fingerprint: `358441418fac1a95bca24a1918fe2a024fbde0d61801b4d4e6482f2e6d5729b1`. This identifies the author’s source transcription; it does not establish independent extraction.
- Stage 1 independent source baseline: `cd39d7007b56cf2d2ce97f02ebf091e241dfcb04765aa1dc2018d21585ab54d5`, frozen October 5, 2026, at 15:40:40.593833 UTC. The reviewer re-entered the original source and computed it before inspecting author artifacts. The preserved numerical inputs, programs and outputs remain unchanged.
- Fresh Stage 4 original-only baseline: `8a9dff6db413be5120c9514b948cf6851fa655a5f6242c108e95a8ca51c31db4`, frozen October 5, 2026, at 19:03:03.035713 UTC. Before freezing, the reviewer had inspected the original card and PDF, governing protocol and current reference code, but had not read candidate data or analysis, prior results or audit conclusions, glass choices, or accepted model-scope limitations. Earlier artifact filenames and the assigned lens identity were visible. A fingerprint establishes byte identity, not proof of blindness.

The fresh Stage 4 baseline independently implements height/reduced-angle sequential tracing, 2×2 ABCD multiplication, exact spherical-cap/vector-Snell tracing and source-rounding perturbations. Candidate reconciliation then reads a JSON representation obtained by actual Node loading of the exact candidate data. Every source radius, spacing, medium index, endpoint and physical cover-plate value agrees. Fresh sequential and matrix source calculations agree to about 1.5 × 10⁻¹⁴.

The consolidated evidence embeds **seven fresh Stage 4 and five prior Stage 1 numerical baseline files byte-for-byte**. Executed portable replay verifies their hashes and reproduces the numerical outputs. The full frozen inventories retain digest-only provenance for the two omitted fresh narrative records and three omitted prior records, including operational notes; those omitted files are not claimed to be reconstructed. Three additional fresh catalog identity, parser and coordinate-result files are preserved exactly; their retained source-coordinate residuals are checked offline. Full original catalogs remain declared external dependencies. Corrective annotations remain separate from frozen numerical bytes.

The earlier bounded rim review had already seen the proposed numerical claims. It independently recomputed central endpoint rays and spherical geometry, but its 53 sidewall tests used author-native hit coordinates. The fresh Stage 4 reconciliation is stronger for those events: it regenerates 3D rays from the native state, field and stop-target definitions and independently solves the cylinder intersections, without reusing native hit coordinates or proof results as ray inputs.

Two baseline annotations are retained without rewriting frozen calculations. First, the fresh source-only condition 8b calculation used the local 15.0003 mm D19 growth; the correct absolute G4 travel is 15.0002 mm and the absolute-motion condition is −0.3553457965566693. The candidate already uses the correct absolute motion. Second, a previous nonconjugate `principalMagnification` value described −v/u between unmatched planes, not focused image magnification. The best-image and fixed-sensor-conjugate magnifications are kept separate. The frozen paraxial iris inference of 12.447688390 mm also remains a distinct calculation rather than being relabeled as the exact-ray calibration.

## Source comparisons and adopted endpoint

| Quantity | Infinity | Published close spacing state |
|---|---:|---:|
| Published EFL, mm | 87.3000 | 38.8752 |
| Calculated EFL, mm | 87.3062039 | 38.8764565 |
| First vertex to physical image plane, mm | 138.9986 | 138.9982 |
| First vertex to last active lens vertex, mm | 116.0428 | 116.0424 |
| Best-image shift from source image plane at the printed conjugate, mm | +0.0037317 | −2.9000662 |

The small EFL, group-power and infinity-focus residuals are compatible with source precision under the recorded local rounding model. The close-focus shift is roughly 82 times the doubled 0.035224 mm source-precision allowance and is not explained by printed last digits under that model.

At the printed 227.4085 mm image-referenced distance, the object is 88.4103 mm before the first vertex. The object-to-image matrix has B = −3.1540947 mm. A separately traced exact 0.001 mm-height ray corroborates best focus approximately 2.900066 mm before the fixed image plane. Best-image magnification for that object plane is −0.919460733, so the printed −1.0 comparison remains **FAIL**. An A coefficient evaluated at the nonconjugate fixed sensor cannot establish focused 1:1 imaging.

The adopted endpoint is the calculated d-line paraxial object-to-image distance **224.235550734 mm**, or `closeFocusM = 0.224235550734`. The single finite-conjugate entry uses focusT = 1, zoomT = 0 and the image-plane reference. Its signed magnification is −0.994057713, approximately **0.99406×**. The source prescription, sensor and cover plate remain unchanged. This is calculated model metadata, not a patent correction or measured production minimum-focus distance.

The following raw source comparisons remain failed:

| Comparison | Printed value | Calculated value or residual |
|---|---:|---:|
| Close conjugate at 227.4085 mm | Zero image defocus | −2.9000662 mm |
| Close best-image magnification at that object plane | −1.0 | −0.919460733 |
| Table 1 condition 2 | 1.124 | 1.127618840 |
| Table 1 condition 3 | 1.413 | 1.423391572 |
| Table 1 condition 6 | −0.537 | −0.483504769 |
| Table 1 condition 8b | −0.320 | −0.355345797 |

All nine condition inequalities from (1) through (8b) pass. Inequality compliance does not turn the four inconsistent Table 1 numerical summaries into matches. No source radius, index or spacing is fitted to those summaries.

## Fixed aperture and nominal clearances

The adopted iris is **fixed with focus**, with authored radius **12.981452 mm**. Exact infinity marginal-ray calibration to source F/2.9093 independently gives 12.981452055 mm. Matching the calibration target does not independently establish a measured physical iris diameter. The paraxial entrance-pupil calibration of 12.447688390 mm is a different method and is not the authored aperture.

At the calculated close endpoint, the exact axial image-cone definition N = 1/(2 sin u′) gives approximately **F/3.37792947**. The patent’s close Fno **5.8166 remains unreproduced**. Paragraph 0072 does not specify that number’s finite-conjugate convention. Tamron’s camera-dependent effective-aperture display caveats do not supply a physical iris schedule for the numerical patent. A diagnostic radius of approximately 7.242902404 mm could force the selected finite-cone value, but that shrinking-iris schedule is unpublished and is not implemented.

Numerical rims are inferred modeling values. The adopted bounded exception uses a common 13.7 mm semi-diameter at surfaces 13–15, 15.0 mm at surfaces 18–19, and `gapSagFrac = 0.95`. It does not add a separately widened cement seam.

For the s15–s16 gap, R15 = +50.4880 mm, R16 = −2099.2589 mm, and axial spacing = 2.0585 mm. At the shared 13.7 mm rim:

- Exact spherical intrusion is 1.938999570 mm.
- Real air separation is **0.119500430 mm**.
- The required intrusion fraction is 0.941947812.
- The 0.95 policy leaves **0.016575430 mm** reserve.

Eight half-last-digit corner perturbations of those two radii and that gap retain at least 0.119448480 mm air with the rim fixed. This is a bounded source-rounding test, not a manufacturing tolerance. The 0.90 reserve permits only about 13.397045 mm radius; the earlier 13.3 mm candidate clipped the nominal close central marginal ray. The adopted exception resolves that modeled central clipping while preserving real air separation. At 13.75 mm, policy slack is only 0.002124270 mm; 13.8 mm exceeds the 0.95 policy despite positive air. The inferred 13.7 mm rim therefore cannot be treated as a dimensioned ±0.05 mm production guarantee.

Fresh five-state independent central-pupil sampling uses 101 meridional targets at each of focusT = 0, 0.25, 0.5, 0.75 and 1, for 505 samples. All pass; on-axis rotational symmetry applies. The minimum sampled radial margin is **0.040151062 mm** at s15. Earlier independent exact full-calibrated-iris endpoint rays gave close margins of 0.040151001 mm at s15 and 0.053747013 mm at s18; the tiny numerical difference is separate from the physical modeling uncertainty. The minimum element edge thickness is **0.221347480 mm**, and the maximum actual spherical rim angle is **40.0202365°**. These are nominal geometric and sampled-ray results, with no continuous-domain or production-tolerance certification.

## Vignetting and sidewall interpretation

**Full-field/full-pupil containment remains FAIL.** Significant wide-open corner vignetting is retained. Central-pupil acceptance and sampled corner-chief coverage do not establish a clear full format-corner pupil.

The dense native record contains 6,240 corner-boundary attempts and 53 first native cemented-joint clip labels: 49 at s14 and four at s6. Fresh 3D spherical-cap/vector-Snell rays and independent cylinder intersections classify all 53 nominal events as an exterior cylindrical-sidewall exit before the mathematically extended joint. The maximum difference from the native axial lead is 1.18 × 10⁻⁹ mm. The minimum lead is only **0.000065875576 mm**, about 0.0659 µm, and its ordering is source-rounding-sensitive. The original joint labels are retained alongside this physical interpretation.

The interpretation assumes the modeled common-radius cylindrical exterior; actual production bevels and mechanical edges are unpublished. It does not claim that all 53 classifications survive perturbation. Four s6 targets initially defeated direct Newton trial seeds; chief-ray continuation with validity-preserving backtracking solved them. Failed numerical seeds are not evidence of physically impossible rays. Similarly, unresolved outer stop-target aims and attempted-ray counts are not exhaustive no-root proofs or radiometric throughput percentages.

## Glass and production correlation

The patent supplies nd/vd coordinates, not supplier or melt identities. The earlier official-vendor review covered 239 HOYA, 147 OHARA S/L, 155 HIKARI, 127 SUMITA and 317 CDGM numeric entries within identified publications, plus four targeted SCHOTT sheets; its full SCHOTT catalogue request returned HTTP 403. Its limited coverage remains distinct from the fresh source-first review, which independently matched six first-party vendor catalogs and recorded its own coverage.

Fresh Stage 4 HOYA and OHARA downloads match the recorded primary-file hashes. Independent raw workbook XML and delimited-row reads reproduce all 16 selected element/plate spectral records and normalized ΔPgF values. The S-LAL14 nd difference of 0.000003 is the expected display-rounding residual. Relevant primary rows and source-file hashes support offline residual replay; full external catalogs remain identified dependencies where required.

HOYA FCD505/FCD515 use current vd = 68.62 and FC5 uses 70.44. The cover-plate pair 1.51633/64.14 is coordinate-compatible with OHARA S-BSL7; L-BSL7 has vd = 64.06 and is not silently substituted. Stored C/F/g line indices are catalog-derived, not patent-published. ΔPgF is normalized using PgF − (0.6438 − 0.001682 vd), rather than copying a vendor-specific normal-line deviation. Coordinate-compatible class labels remain explicit. Neither supplier/melt identity nor APO or measured chromatic performance is established.

Official Tamron product, specification, launch and owner-manual sources support the production metadata, including 15 elements in 12 groups, all-spherical construction and camera-dependent aperture display. Marketed 90 mm f/2.8, 0.23 m and 1:1 specifications remain distinct from the numerical embodiment. Correlation with Model F072 is supported but is not manufacturer confirmation that this is its factory prescription.

## Executed checks and integration coverage

The portable verifier directly parses the implemented data with a restricted literal lexer/parser. It rejects duplicate keys, expressions, unsupported literals and trailing code, then checks source equality, metadata, stop identity, endpoint fields, fixed iris and catalog proxies. Independent first-order and exact-ray calculations cover cardinals, element and cemented/group powers, motion, pupil positions, surface Petzval, spherical edge/gap geometry and sampled containment. Intentional radius and missing-stop controls are detected. Analysis checks cover the required sections, element lines, metadata, shared computed values and disclosures, supplemented by manual interpretation and citation review.

Actual targeted native execution uses Node v24.19.0 and 136 hash-verified modules from the pinned reference commit. The independently rerun all-mode candidate execution reproduces stable checkpoint fields exactly, including dense and source-rounding records. Its coverage is:

| Check or coverage | Observed result and boundary |
|---|---|
| Actual `buildLens` and `validateLensData` | PASS without overrides |
| Native sampled geometry and production-shape diagnostics | PASS; zero trims, invalid shapes, edge failures or gap-policy failures |
| Native physical central-pupil sampling | PASS; 650 samples across five focus states and two physical apertures |
| Native sampled format-corner chiefs | PASS; target image height 21.633 mm |
| Coarse native ray coverage | 3,510 rays including physical and separately labeled collimated-at-near diagnostic bundles |
| Dense corner-boundary coverage | 6,240 attempts; full-pupil clearance is not claimed |
| Whole field and whole pupil property | FAIL; retained as a nonclaimed raw property comparison |
| Production polygon visual comparison | Actual unchanged native shape points rasterized and compared with Figure 1 at both endpoints; no hidden trim, topology discrepancy or gross proportion error observed |

The native central samples use one center plus four pupil radii (0.25, 0.5, 0.75 and 0.999999), with sixteen azimuths at each radius, at five focus states and wide-open/F8-equivalent physical apertures. At finite focus, physical same-object rays use the explicit close endpoint or the calculated diagnostic intermediate conjugate. The viewer’s collimated-at-near diagram is recorded separately and is not substituted for the physical bundle.

The native shape comparison is not an application/browser render test. Loading TypeScript with stripped types is not semantic type checking or a formatting check. The following records remain **LENSVISUALIZER / NOT_RUN / required at integration**:

- `actual-typecheck`
- `actual-prettier`
- `runtime-glass-resolution`
- `full-batch-integration`
- `application-browser-render`

Native module execution is also not a full production build or corpus-wide integration. During portable Python replay, archived native observations are byte-checked; the external project modules are not silently rerun. A fresh native replay requires the identified source snapshot and Node dependency.

The corrected canonical verifier has actually executed the preserved fresh independent matrix/sequential, exact-ray and source-rounding programs after checking their embedded code/input hashes. All three frozen numerical result sets reproduce exactly. Fresh candidate calculations and the independent 3D sidewall program also reproduce their numerical results exactly from the actual parsed candidate data. Offline residual replay passes for all 16 retained primary spectral rows, including the plate. The earlier five-file numerical baseline calculation and uncertainty replays also pass. The recorded data, analysis and native-harness byte bindings remain unchanged. These are executed replay results, not acceptance of archived result text alone.

## Material correction history

The following corrections explain the current conclusions without leaving obsolete gate statements in force:

1. Paragraph 0064’s six-element G1 prose conflicts with the five numerical elements and Figure 1. Numeric topology controls; no element was added.
2. Paragraph 0066 calls the first G3 element biconvex; its −4147.1302/−42.1546 mm radii and Figure 1 establish a positive meniscus with a weakly concave object-side face. No radius was changed.
3. The printed close distance, magnification, finite F-number and four Table 1 summaries remain unreproduced as described above. Acceptance concerns the bounded modeled endpoint, aperture and explicit limitations; it does not repair those source claims.
4. An early native source probe omitted the final 1.0000 mm air transfer and labeled a cover-exit matrix as an image-plane matrix. That harness error was corrected; the corrected result agrees with independent source calculations. The failed observation and correction remain evidence.
5. The initial 13.3 mm middle-doublet rim under the default 0.90 reserve did not admit the close central marginal ray. The adopted 13.7 mm / 0.95 lens-specific exception has positive physical separation and no hidden trimming. Prior failed geometry is retained as a control, not presented as the current candidate.
6. Frozen-review G4 motion and nonconjugate-magnification annotations remain separate from the untouched original baseline. The candidate needs no optical correction for either annotation.
7. The Stage 4 negative control exposed an actual verifier exit defect. In an isolated clone, setting `nativeConstructionChecks.checks.nativeConstruction = FAIL` produced a recorded `native-nativeConstruction` check with scope `LENSVISUALIZER`, status `FAIL` and `requiredAt = stage2`, yet the portable process exited **0**, reported **READY_FOR_AUDIT**, and left `failedMandatory` empty. Its final selector considered only `CHAT_PREFLIGHT` failures. This is an implementation failure, not an accepted optical limitation.

The corrected selector makes every applicable failed mandatory check block readiness, including targeted native checks regardless of scope. Integration-only NOT_RUN records stay nonblocking at the dossier stage. The intentionally unclaimed whole-field/whole-pupil property remains a raw comparison FAIL outside mandatory acceptance. The corrected verifier must prove a nonzero exit for the isolated forced targeted-native-FAIL control, and the executed fixture now supplies that proof: **exit code 1**, with only **`native-nativeConstruction`** in `failedMandatory`. The seven raw scientific comparison FAILs remain unchanged: the published close conjugate, conditions 2, 3, 6, 8b and 9, and the whole-field/whole-pupil property. The exit-selection defect is corrected, its negative control passes, and the final manifest records the independent byte-bound disposition.

## Final Stage 4 evidence boundary

The final ten-file dossier retains the unchanged original patent and job card, the reviewed data/analysis pair, one canonical evidence/verifier/results/audit/manifest set, and the targeted native replay program. The consolidated candidate archive reviewed before final promotion has SHA-256 `4662b88855507d62d32b1190a98726c136721e2efc8e5be765dac96a31b68cbd`.

Final promotion changes only the current technical disposition, the review-binding check and readiness label, and the related evidence/results/manifest bindings. No numerical lens field, analysis claim or native-harness byte changes. Clean extraction verifies exact membership, original source bytes and all manifest hashes; portable replay writes outside the package and reproduces the stored results exactly. Every applicable mandatory check passes. The seven raw scientific comparison FAILs remain intact, and integration-only NOT_RUN checks remain explicitly deferred.

This approval binds the delivered files through the manifest inventory and applies to the stated numerical and sampled-geometry scope. It is not application integration or publication. Future changes invalidate the affected byte bindings and require renewed checks.

## Quantitative and interpretive claim map

All implemented-result pointers below bind to data SHA-256 `7763647039764047bca8ae84a9c5aa2d4f7b0c57f923c5923d473928db5995f7`. The source branch retains the original numerical table separately.

| Analysis or metadata claim | Reproducible fact/result pointer | Governing source or limitation |
|---|---|---|
| Lens identity, marketed specifications, applicant and inventor | `evidence.job`, `productCorrelation`, `patentNameNormalization`; `analysisVerification` | Original card/PDF and cited primary product/bibliographic records; product correlation is not factory-prescription confirmation |
| Fifteen elements, twelve components, five motion groups, spherical construction | `facts[physical-topology]`; `evidence.rawPrescription.elements/groups` | Numerical table pp12–13 and Figure 1 p19 |
| Native EFL and distinction from marketed 90 mm | `facts[source-native-efl]`; `implementedModel.states[].cardinal` | Table pp12–13; scale remains 1 |
| Individual element shapes, glass coordinates and isolated powers | `implementedModel.states[].elements`; `implementedModel.spectralProxies`; checks `analysis-element-lines` and `glass-coordinate-audit` | Current parsed surfaces/elements and embedded catalog rows; isolated-in-air powers do not describe in-situ cemented power |
| Cemented and functional group roles | `implementedModel.states[].doublets/groups`; `sourceModel.groupMovements` | Source group table and executed powers/travel; no unsupported aberration-design intent inferred |
| Physical length, plate and back focus | `sourceModel.states[].physicalTrackFirstToImageMm`; `implementedModel.states[].physicalTrackMm`; source/model equality checks | Physical original cover plate and printed gaps; no air-equivalent substitution |
| Calculated close-focus metadata and magnification | `sourceModel.approvedEndpoint`; `comparisons[MOD-published-conjugate/condition9]` | Unchanged MOD source geometry; calculated endpoint is not printed 227.4085 mm or exact 1:1 |
| Fixed iris and finite-cone aperture | `implementedModel.closeCone`; `evidence.approvedApertureModel`; fresh candidate reconciliation | Infinity calibration is an inference; original close Fno 5.8166 is unreproduced |
| Rim/gap reserve, edge thickness and central coverage | `implementedModel.states[].geometry/exactContainment`; `evidence.nativeConstructionChecks`; `independentBaseline.stage4` | Inferred 13.7 mm middle-doublet rim and 0.95 gap policy; nominal and sampled limits apply |
| Corner vignetting and sidewall classification | `comparisons[native-full-field-full-pupil-property]`; native dense records; fresh sidewall reconciliation | Raw FAIL retained; 53 nominal exterior exits, closest ordering source-rounding-sensitive |
| Table conditions | `sourceModel.conditionValues/conditionInequalities`; `comparisons[condition2/3/6/8b]` | Nine inequality bounds pass; four printed summaries do not |
| Catalog-derived spectral behavior and ΔPgF convention | `implementedModel.spectralProxies`; `independentBaseline.stage4.spectralResidualReplay` | Retained primary rows, original file hashes and declared d-line convention; class match is not supplier or APO proof |

Manual review covered third-person technical prose, shape/power terminology, finite-conjugate definitions, source-versus-calculated metadata, evidence-supported glass wording and the cited primary sources. Literal text matching supplements that review; it cannot establish the truth of interpretive optical prose by itself.

## Reproduction

Portable replay requires Python 3 standard-library modules only. Run from any working directory, giving the extracted dossier and an output path outside it:

`python TamronF07290mmf28DiIIIMacroVXD.verify.py --package-dir <extracted-dossier> --output <external-results.json>`

It reconstructs hash-verified independent numerical inputs/code in temporary directories, executes them and compares fresh outputs without changing packaged results. The isolated native-failure fixture is run automatically. `--fixture-run` is diagnostic-only, avoids recursive fixture execution, and never emits a readiness label. Source-comparison FAIL observations remain separate from mandatory checks.

Actual native replay additionally requires Node v24.19.0 and the declared public source snapshot at the pinned commit. The optional native program verifies its 136 module hashes before execution:

`node TamronF07290mmf28DiIIIMacroVXD.native.mjs --reference-root <public-source-snapshot> --out <external-native-results> --mode all`

Full shared catalogs and public project modules are identified dependencies, not hidden per-lens inputs. Portable replay uses retained primary spectral rows; it does not claim to re-download or reparse external catalogs.

## Public sources

1. Japan Patent Office, JP2026057675A, Example 1: paragraphs 0062–0079, PDF pages 11–13; Table 1: paragraph 0104, page 17; Figure 1: page 19; governing condition definitions: paragraphs 0025–0057. The unchanged supplied publication controls the prescription.
2. [Tamron F072 specifications](https://www.tamron.com/global/consumer/lenses/f072/spec.html).
3. [Tamron F072 launch announcement](https://www.tamron.com/global/news/detail/f072_20240926.html).
4. [Tamron F072 product description](https://www.tamron.com/global/consumer/lenses/f072/).
5. [Tamron F072 owner manual](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/inst/f072/f072_inst_2410_en.pdf), TLM-F072-EN-C/T-2410-02.
6. [HOYA optical glass data dated June 1, 2026](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx) and [HOYA value correction](https://www.hoya-opticalworld.com/japanese/datadownload/data_up2019.html).
7. [OHARA six-decimal S-series data dated April 2, 2026](https://www.ohara-inc.co.jp/wp-content/uploads/2022/02/OHARA_20260402_6.csv).
8. [Published bibliographic name corroboration](https://patents.google.com/patent/JP2024088344A/en), used only to normalize the same Japanese inventor name.

## 2026-10-06 — Patent-figure semi-diameter pass

Scope: semi-diameters only, against FIG. 1 of JP2026057675A (PDF page 19, Numerical Example 1). No radius, spacing, index, glass field, focus table, iris value, `gapSagFrac` or metadata field was touched. The data-file SHA-256 quoted in the earlier sections identifies the pre-pass bytes; this pass changes two `sd` values and the header comment.

### Figure and scale

FIG. 1 is embedded as one 1280 × 720 px bilevel raster at 203 dpi holding both panels. The INF panel (axis line on pixel row 210; top and bottom readings centre on 210.5) was measured in the native raster, not a resampled page render. Every surface vertex of the infinity prescription lands within 1 px of its drawn axis crossing. Surface 1 sits at x = 306 and surface 28 at x = 991, so 116.0428 mm spans 685 px and the scale is **0.16941 mm/px**; surface 1 to the image plane (138.9986 mm over 821 px) gives 0.16930 mm/px. The vertical scale agrees within about 2 %: the drawn stop ticks end 76 px from the axis (12.87 mm against the calibrated 12.981 mm iris) and the image-plane line is 130 px tall per side (22.0 mm against Y = 21.633 mm). The MOD panel shifts G2 by 79 px (13.38 mm; table 13.4002) and G4 by 88 px (14.91 mm; table 15.0002) and draws the same element outlines, so it corroborates the close-focus render and adds no rim information.

Half-heights are the mean of the top and bottom readings about the axis.

### Before and after

| Element (surfaces) | FIG. 1 outer rim | Stored before | After | Evidence and decision |
|---|---:|---:|---:|---|
| L1 (1, 2) | 109.5 px = 18.55 mm | 18.5 | 18.5 | Agrees; unchanged. |
| L2 (3, 4) | 101.5 px = 17.19 mm | 17.3 | 17.3 | Outer rim agrees. Surface 4's curve stops 81 px (13.7 mm) from the axis with a flat annulus outside; see the concave-face note. |
| D1 = L3 + L4 (5, 6, 7) | 95.5 px = 16.18 mm | 15.8 | 15.8 | 2.4 % under the drawing, which shows L3 with a knife edge. At 16.2 mm the validator reports L3 edge thickness −0.181 mm; at 16.0 mm only 0.02 mm remains. Unchanged. |
| L5 (8, 9) | 97.5 px = 16.52 mm | 16.5 | 16.5 | Agrees; unchanged. |
| L6 (10, 11) | 90 px = 15.25 mm | 15.2 | 15.2 | Outer rim agrees. Surface 11's curve stops at 81 px (13.7 mm). |
| D2 = L7 + L8 (13, 14, 15) | 83.5 px = 14.15 mm | 13.7 | 13.7 | 3.2 % under the drawing, which shows the surface 15 rim touching L9. At 14.1 mm the validator rejects the 15→16 gap (2.06 mm sag against 1.956 mm allowed). The documented common 13.7 mm rim stands. |
| L9 (16, 17) | 85.5 px = 14.48 mm | 15.1 | **14.5** | The drawing steps up gently from D2 through L9 to L10 (14.15 / 14.48 / 14.82 mm). The stored set made L9 the tallest of the three and left a 1.4 mm step above D2. Set to the drawn value. |
| L10 (18, 19) | 87.5 px = 14.82 mm | 15.0 | 15.0 | 1.2 % over the drawing. The close-focus axial marginal ray needs 14.946 mm at surface 18, so the drawn value would clip it. Unchanged. |
| D3 = L11 + L12 (20, 21, 22) | 79.5 px = 13.47 mm | 13.5 | 13.5 | Outer rim agrees. Surface 22's curve stops at 66 px (11.2 mm; 11.4 mm by its drawn sag). |
| L13 (23, 24) | 89 px = 15.08 mm | 15 | 15 | Agrees; unchanged. |
| L14 (25, 26) | 92.5 px = 15.67 mm | 15.7 | 15.7 | Outer rim agrees. Surface 25's curve stops at 81 px (13.7 mm; 14.2 mm by its drawn sag) and surface 26's at 84 px (14.2 mm). |
| L15 (27, 28) | 104.5 px = 17.70 mm | 17.7 | 17.7 | Agrees; unchanged. |

The pre-existing rims therefore already reproduce the drawing: counting each cemented doublet once, eight of twelve outer rims lie within 0.11 mm of the measured value and the other four within 4.3 %. The drawing does step G1 down from L1 to L6 (18.55 → 17.19 → 16.18 → 16.52 → 15.25 mm) in the same way as the stored values; G1 is not drawn at one height.

### Concave faces drawn with flat annuli — left at the element rim

The drawing ends five concave faces short of the element rim and closes each element with a flat annulus: surfaces 4, 11, 22, 25 and 26, at about 13.7, 13.7, 11.2–11.4, 13.7–14.2 and 14.2 mm. The stored values carry those curves to the rim (17.3, 15.2, 13.5, 15.7, 15.7 mm). Surface 4 differs by 21 % and surface 22 by 16 %, enough to qualify for a change, so a trial with surface 4 at 14.0 mm and surface 22 at 11.6 mm was validated, rendered and then withdrawn:

- The renderer joins the front and rear rim points of an element with a straight edge and cannot draw a flat annulus. With the reduced rear values L2 and L12 became sloped fins, further from the drawn flat-topped blocks than the stored outlines, whose only fault is a rear corner that runs 2.3 mm (L2) and 0.8 mm (L12) too far aft.
- The drawn curve ends sit at the infinity axial marginal heights (13.771 mm at surface 4, 11.394 mm at surface 22), so the smallest admissible values leave only 0.2 mm of on-axis margin.
- The trial made surfaces 4 and 22 the limiting rims at every field. The meridional fan pass fraction at infinity fell from 98.0 to 91.4 % at 3°, from 82.1 to 70.4 % at 9° and from 46.1 to 41.9 % at the 14.05° corner.

Surfaces 11, 25 and 26 differ by about 10–13 % and were not trialled. The measured curve ends are recorded here so that a renderer able to draw flat annuli could adopt them.

### Checks on the result

- Surface validator: no validation errors. Image-circle floor: 0 undersized. Traced field coverage: 100 %, 14.1° reaching 21.63 mm of 21.63 mm with the corner clear.
- Engine build: EFL 87.3062 mm, F/2.9093 and stop radius 12.981452 mm, all unchanged.
- Axial marginal ray through the fixed 12.981452 mm iris at focus 0, 0.25, 0.5, 0.75 and 1: no surface clips. The smallest margins remain 0.040 mm at surface 15 and 0.054 mm at surface 18, both at closest focus. L9 keeps 0.778 mm at surface 16 and 0.485 mm at surface 17.
- The s15→s16 statement is unaffected: both surfaces still share the 13.7 mm band, with 0.1195 mm of air and the 0.95 gap limit.
- The reduced L9 rim blocks nothing. It sits directly behind the 13.7 mm D2 rim. A three-dimensional skew-ray grid (121 × 121 pupil points, seven fields out to 15.6° or 24 mm object height, five focus states) found that rays clearing surfaces 1–15 reach at most 13.81 mm on surface 16 and 14.29 mm on surface 17. Meridional fan pass bands are identical before and after at infinity (fields from 2° to 14.05°) and at focus 0.25, 0.5, 0.75 and 1 for object heights up to 21.6 mm. The clearance trace's unvignetted full-field bundle heights at surfaces 16 and 17 (14.53 and 14.91 mm) exceed 14.5 mm only for rays that surface 15 has already stopped.
- Local page renders at infinity and at closest focus were compared with the INF and MOD panels. Element order, group positions and rim heights agree; G3 now rises from D2 through L9 to L10 as drawn.

### Open limitations

- The native dense corner-boundary sampling and clip-label counts recorded above were not re-run. They describe the pre-pass rims; the skew-ray bound and equal pass bands above are the evidence that the L9 change does not move them.
- Flat annuli on concave faces remain undrawn, so the rear corners of L2, L6, L12 and L14 overshoot the drawing, and the modeled mid-field vignetting is lighter than the drawn optical zones would give.
- D1 and D2 remain 0.4 mm below the drawing for the edge-thickness and gap reasons in the table.
- The exact meridional clearance trace used for this pass ignores `rearPlates`, so it reports 14.61° for a 21.6 mm image height where the patent gives 14.0522°. Its chief-ray heights are correspondingly conservative, and no decision here rests on them.
- At closest focus the viewer launches on-axis rays as fractions of its wide-open entrance-pupil estimate (45.44 mm diameter). The 0.83 ray therefore starts 18.9 mm from the axis, outside the 18.5 mm L1 rim, and is drawn clipped. The physical marginal ray through the fixed iris is 12.78 mm at surface 1, so no rim value would admit that display ray; this is a display convention, not a rim defect.

## 2026-10-06 — Integration glass and metadata pass

- **Catalog-copied spectral fields removed.** Every element and the camera cover plate carried `nC`, `nF`, `ng` and
  `dPgF` values copied from HOYA/OHARA catalogue rows (64 fields). The patent prints only Nd and the Abbe number, and
  complete authored line indices bypass the glass catalog as if they were source measurements. They were deleted so
  each element traces on the catalogue Sellmeier curve its proxy label resolves to. Stored nd, νd and glass labels are
  unchanged; the earlier sections' statements about stored C/F/g indices describe the pre-pass file.
- **Glass resolution.** The shared catalog gained the HOYA rows BACD5 (1.58913/61.25) and PCD51 (1.59349/67.00) from
  the HOYA 2026-07-07 AGF, and the `BACD5 → N-SK16` and `PCD51 → M-PCD51` aliases were retired. L2 now resolves to
  BACD5 (the old alias pointed at the 620/603 glass and failed the coordinate check) and L6 to PCD51 instead of
  M-PCD51 (Δnd −1.5e-3). All 15 elements resolve to a coordinate-compatible catalogue curve within 5e-6 in nd.
- **Analysis.** The two paragraphs under the proxy table and the table's last column heading were rewritten: the
  normalized ΔPgF column is now a catalogue reference value, not stored data.
- **Metadata.** Display name corrected from `DI III` to Tamron's `Di III` casing; run-together words in the header
  comment and `focusDescription` ("Fno5.8166") were separated. `lensMounts` (`sony-fe`, `nikon-z`) and `imageFormat`
  (`135-full-frame`) re-checked against Tamron's F072 product page and retained.

## 2026-10-06 — Final diagram, label and movement review

Scope: second and final comparison of the local lens page with FIG. 1 of JP2026057675A (PDF page 19, INF and MOD panels) and with the Example 1 text and tables (PDF pages 11–13). No radius, spacing, index, Abbe number, variable gap, iris value, `gapSagFrac` or semi-diameter changed. The pass changes two diagram labels and one group range, three element roles, the focus description, two run-together source strings, adds four inferred APD tags, and brings the header comment and analysis into step.

### Figure SD review

- **Compared.** Page renders at twice the device scale, at infinity and at closest focus, beside the native 1280 × 720 px, 203 dpi figure raster. Each element was checked for rim height, front/rear rim relationship, edge flat, corner position and spacing.
- **Scale re-derived.** The drawn vertex crossings of all 27 lens surfaces in the INF panel fall within 1 px of the prescription at 0.16941 mm/px (surface 16 by 1.4 px), with surface 1 at x = 306, surface 28 at 991 and the image plane at 1127. A radial check was added: the drawn curves of surfaces 9, 19, 23, 24, 26 and 27 were tracked row by row and fitted for a radial-to-axial scale ratio, giving 1.008, 0.999, 0.997, 0.980, 0.983 and 1.012. The figure is drawn isotropically within about 2 %, so heights read at the axial scale are valid.
- **Rims re-read.** L1 109.5 px (18.55 mm), L2 101.5 (17.19), D1 95.5 (16.18), L5 97.5 (16.52), L6 90 (15.25), D2 83.5 (14.15), L9 85.5 (14.48), L10 87.5 (14.82), D3 79.5 (13.47), L13 89 (15.08), L14 92.5 (15.67), L15 104.5 (17.70). These repeat the first pass's readings, and the MOD panel draws the same heights. Every element is drawn with a square outer edge, which the equal front and rear semi-diameters reproduce.
- **Edge flats.** Drawn against modeled edge thickness at the stored rim: L1 1.0 / 0.91 mm, L5 0.7 / 0.53, L9 1.2 / 1.12, L10 0.85 / 0.60, L13 0.85 / 0.60, L15 0.85 / 0.73. All agree within about 1.5 raster pixels.
- **No semi-diameter changed.** The three rims the first pass left short of the drawing were re-trialled, and each is held by a constraint:

| Item | Drawing | Stored | Finding |
|---|---:|---:|---|
| D1 (5, 6, 7) | 16.18 mm | 15.8 | The drawing ends L3 in a knife edge at the D1 rim. The prescription puts that crossing at 16.022 mm (94.6 px), one raster pixel below the drawn line, so 16.2 mm is not reachable: the validator reports −0.079 mm at 16.1 and −0.181 mm at 16.2. A 16.0 mm trial passes with 0.022 mm of edge, but it gains 0.2 mm (under one screen pixel) while cutting the smallest edge thickness of the model from 0.2213 to 0.0221 mm and moving the surface 6 rim that the cemented-joint sidewall record above depends on. Left at 15.8. |
| D2 (13, 14, 15) | 14.15 mm | 13.7 | The drawing closes surface 15 onto surface 16 at the rim; the two spheres meet at 14.108 mm. The 0.95 gap limit allows 13.757 mm, and the validator rejects a common 13.8 mm (1.97 mm of sag against 1.956 mm allowed). Raising only surfaces 13 and 14 to 14.1 passes the validator but slopes the top of L8 and widens the cement seam, which the adopted common-rim model and the surface 14 sidewall record rule out. Left at 13.7. |
| L10 (18, 19) | 14.82 mm | 15.0 | The close-focus axial marginal ray reaches 14.946 mm at surface 18; 14.9 clips it by 0.046 mm. Left at 15.0. |
| L2 (3, 4) | 17.19 mm | 17.3 | 0.11 mm over the drawing; unchanged. |

- **Flat annuli on concave faces.** The drawn annulus planes were located directly from the raster and compared with the modeled corners. Curve ends by drawn sag are 14.1 mm (surface 4), 13.8 (11), 11.5 (22), 13.95 (25) and 14.6 (26); by height they are 13.7, 13.7, 11.2, 13.7 and 14.2 mm. The modeled corners overshoot the annulus planes by 2.32 mm (L2 rear), 0.50 (L6 rear), 0.75 (L12 rear), 0.99 (L14 front) and 0.31 (L14 rear). The renderer joins front and rear rims with a straight edge, so the choice is between carrying the curve to the rim and cutting the rear rim to the curve end. Measured as outline area that differs from the drawing, per side: L2 3.5 mm² as stored against 11.7 mm² with surface 4 at 14.0; L12 0.7 against 5.6 mm² with surface 22 at 11.6; L14 1.0 mm² as stored against 8.8 mm² if both faces were cut to 14.3 mm, which would also drop the element 9 % below its drawn height. The stored values are the closer outline in every case and keep the square outer edges, so they stand. L14's drawn block is 6.27 mm thick against a modeled 7.56 mm edge.
- **Other visible differences, not defects.** The figure draws the cover glass CG; the page traces it as a rear plate and does not draw it. The drawn stop ticks begin 76 px (12.87 mm) from the axis against the 12.981 mm iris. At closest focus the modeled D3 rear corner stays 2.2 mm clear of L13's front face at the same height.
- **Check results.** Surface validator: no errors. Image-circle floor: 0 undersized. Traced field coverage: 100 %, 14.1° reaching 21.63 mm of 21.63 mm with the corner clear. Engine build: EFL 87.3062 mm, F/2.9093, stop radius 12.981452 mm, half-field estimate 15.524°, all unchanged. Axial marginal ray through the fixed iris at five focus states: no clip, smallest margins 0.040 mm at surface 15 and 0.054 mm at surface 18. The meridional clearance trace at the patent's 14.0522° reports only ordinary corner vignetting from surface 15 rearward and no axial clip or chief-ray block.

### Diagram labels and movement order

- **Group labels.** FIG. 1 prints G1, G2 (F1), G3 (P), G4 (F2) and G5, and brackets PN over the front cemented pair of G3. `groups[2].text` changed from `G3` to `G3 (P)`, and the doublet annotation on surfaces 13–15 from `D2` to `D2 (PN)`. The element `cemented` names stay D1–D3, so the inspector's doublet badge still matches.
- **G3 range.** Paragraph 0066 lists the aperture stop as the first member of G3, and the figure's G3 bracket starts ahead of the stop. `groups[2].fromSurface` changed from `13` to `STO`. The patent's group table gives 13–19 for the group focal length; the stop has no power, and the calculated +38.6247 mm is unaffected.
- **Roles.** L6, L11 and L12 now name the patent's focus groups F1 and F2 and the direction of travel. The other twelve roles were checked and left.
- **Focus description.** It gave the close-distance caveat but neither the moving groups nor their direction. It now opens with the mechanism: G2 (F1) and G4 (F2) both move toward the image, by 13.40 and 15.00 mm, with G1, the stop with G3 (P), and G5 fixed. The close-distance and iris statements are unchanged.
- **Source strings.** Run-together words separated in `rearPlates[0].source` ("paragraph 0076, surfaces 29–30") and `finiteConjugates[0].source` ("prints 227.4085 mm").
- **Table re-read.** All 30 rows of the lens-data table, the specification table, the variable-spacing table and the group table were compared with the data file from the PDF text layer and confirmed on the rendered pages. No row differs; no transcription correction was needed.
- **Verified and left.** Fifteen elements numbered 1–15. Types against the signed radii: L1, L3, L5, L10 and L13 biconvex; L2, L6, L8, L12 and L14 biconcave; L4 a negative meniscus concave to the object; L7, L9 and L11 positive menisci convex to the image; L15 a positive meniscus convex to the object. The two documented text conflicts stand (paragraph 0064's sixth G1 element and paragraph 0066's "biconvex" L7). No aspheric surface, empty `asph`, and no asphere marker. Cemented surfaces 6, 14 and 21 match D1 (5–7), D2 (13–15) and D3 (20–22). Group ranges 1–9, 10–11, 20–22 and 23–28 match the patent, with calculated focal lengths +47.3446, −52.6772, +38.6247, −42.2130 and +228.7999 mm against the printed 47.3434, −52.6768, 38.6246, −42.2133 and 228.7960. The stop is surface 12, 2.0000 mm ahead of surface 13. The rear plate is 2.5000 mm of 1.51633 / 64.14 with 19.4558 mm before it and 1.0000 mm after. `specs`, `subtitle` and the `D(9)`–`D(22)` gap labels match the source.
- **Focus direction and order.** The `var` arrays list infinity first and MOD second, matching the slider. Positions computed from the stored gaps:

| Group | Front vertex to image, infinity (mm) | At MOD (mm) | Travel | Patent |
|---|---:|---:|---|---|
| G1 | 138.9986 | 138.9982 | 0.0004 mm (rounding) | fixed |
| G2 (F1) | 109.7245 | 96.3239 | 13.4006 mm toward the image; 13.4002 from surface 1 | moves to the image side |
| G3 (P) | 88.2987 | 88.2984 | 0.0003 mm (rounding) | fixed |
| G4 (F2) | 71.6437 | 56.6431 | 15.0006 mm toward the image; 15.0002 from surface 1 | moves to the image side |
| G5 | 50.8931 | 50.8931 | 0 | fixed |

- **Gap pairs.** D(9) +13.4002 against D(11) −13.4003 mm, and D(19) +15.0003 against D(22) −15.0006 mm. The pairs are equal and opposite to 0.0001 and 0.0003 mm, which is the patent's own four-decimal rounding; nothing is mis-ordered.
- **Close distance.** Recomputed independently: the stored MOD gaps image an object 85.2374 mm ahead of surface 1 onto the fixed image plane, 224.2356 mm object to image at −0.99406×. The printed 227.4085 mm leaves best focus 2.900 mm ahead of the sensor at −0.9195×. `closeFocusM` and its "calculated" wording are correct. An exact −1.0× conjugate would need 224.00 mm object to sensor with 0.23 mm of defocus.
- **On the page.** The focus-movement overlay shows G2 (F1) and G4 (F2) running toward the image side with G1, G3 (P) and G5 stationary, and a 15.00 mm maximum travel. The patent-positions control offers the two published states, infinity and 22 cm, with gaps 15.50 / 5.13 / 17.10 / 2.65 mm and EFL 38.88 mm at the close state. The closest-focus render places G2 beside the stop and D3 beside L13 as in the MOD panel.

### Glass and color completeness

- **Resolution.** All 15 elements and the cover plate trace on a catalogue Sellmeier curve whose nd agrees with the stored value within 5e-6; the lens-level dispersion quality is `sellmeier`. The largest Abbe difference is 0.02 (FCD1, catalogue 81.59 against the patent's 81.61).
- **APD tags added.** The patent text contains no statement about anomalous or low dispersion, partial dispersion ratio or special glass, so no element is tagged `patent`. Four elements are now tagged `inferred`, each with a short `apdNote`: L3 and L5 (1.59282 / 68.62, FCD515 class), L7 (1.49700 / 81.61, FCD1 class) and L13 (1.43700 / 95.10, FCD100 class). Tamron's F072 product page states "four special glass LD (Low Dispersion) lens elements", which equals this count. Tamron's text does not say which elements they are, so the match is by number only.
- **Left untagged.** L6 (PCD51 class, catalogue ΔPgF about +0.005) and L15 (FC5 class, about +0.005) are not ED classes by the corpus convention; tagging either would also exceed Tamron's count. The dense flints L1, L8, L9 and L11 have positive catalogue ΔPgF but the patent says nothing about them.
- **Spectral fields.** The patent prints only Nd and the Abbe number. No `nC`, `nF`, `ng` or `dPgF` is authored, and none was added; the ΔPgF figures in the notes and analysis are prose references to the catalogue curves.

### Identity and metadata

- `patentNumber` JP 2026-57675 A (特開2026-57675, published 2026-04-03), `patentYear` 2026, sole inventor 小林 知広 as `Tomohiro Kobayashi`, applicant 株式会社タムロン as `Tamron Co., Ltd.`: confirmed on the front page and retained.
- Tamron's F072 specification page gives 90 mm, F/2.8, 15 elements in 12 groups, 0.23 m minimum object distance, 1:1, a 12-blade diaphragm, F16 minimum aperture and Sony E and Nikon Z mounts. `focalLengthMarketing`, `apertureMarketing`, `elementCount`, `groupCount`, `apertureBlades`, the f-stop series ending at 16, `lensMounts` and `imageFormat` agree. The display name `TAMRON 90mm f/2.8 Di III MACRO VXD` matches Tamron's product name.
- `focalLengthDesign` 87.3062 mm is the calculated value of the unchanged prescription (printed 87.3000), `apertureDesign` 2.9093 is the printed Fno, and `imageCircleMm` 43.266 is twice the printed image height 21.633 mm.
- `closeFocusM` 0.224236 m stays the calculated conjugate of the published MOD spacings. The patent prints 0.2274 m and Tamron publishes a rounded 0.23 m; neither is substituted.

### Open limitations

- The five flat annuli remain undrawn, D1 and D2 remain 0.4 mm below the drawing, and L10 remains 0.2 mm above it, for the reasons in the table.
- Which production elements Tamron counts as LD is not published in text, so the four inferred tags are a glass-class reading of the patent example, not a confirmed production map.
- The native dense corner-boundary sampling recorded in the earlier sections was not re-run; no semi-diameter changed in this pass.
