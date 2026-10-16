# Sigma 24-105mm F4 DG OS HSM Art: author construction audit

## Author Stage 2-3 scope and checkpoint history

The original job remains JP2015055858A, Numerical Example 2, stem Sigma24105mmf4DGOSHMA. The original card and controlling 28-page PDF are unchanged. The initial source-only Stage 1 blocked on two blank A10 cells; its frozen archive is Sigma24105mmf4DGOSHMA_stage1_blocked.zip, SHA256 ea8f460f413b41c51743d4a3bddad3cef53093713d74631bb4717b1dae535760. The user subsequently approved only the conditional degree-8 treatment at those cells (approval Sentinel_060051d42c608191a826d4eff69dad8e, exact scope in evidence.authorizedModelVariant). Source values remain null; modeled A10=0 is an explicit assumption, not an exact source value. No source-derived error bound exists. All finite-aperture calculations below depend on that assumption.

The resumed conditional Stage 1 archive SHA256 is 487a7444931c4c49d5cfa53d37c040fa703cfea7cd47c3a2c148af46acb235f4. It earned READY_FOR_DATA with zero mandatory failures and clean replay. The historical author sections below document Stage 2 construction and Stage 3 analysis; the independent Stage 4 review follows them. The source first-order computations and initial discrepancy history remain in evidence/results and the prior checkpoint.

## Authorizations and controlling references

The author checkpoint used reference pin 53470da5a5cbda1807d1e523fbc71963e5a1adc7. Shared specifications, defaults, taxonomy and actual runtime dependency bytes were reverified. The inferred zoom iris option is present in the controlling spec, type and public runtime. No branch-specific features are used. The original fixed job and explicitly approved conditional treatment are preserved.

## Source extraction and conventions

Controlling rendered PDF pp14-16, printed pp13-15, supplied every selected surface, spacing, glass coordinate, asphere and zoom value. PDF p11, printed p10, paragraphs0047-0056 supplied the native d-line 587.56 nm convention, millimetre units, the K equation and reference planes. PDF p20, printed p19, paragraph 0086 supplied all five Example 2 conditions. Manual numeric re-entry was checked against the complete text block; typography normalization of the minus sign is documented.

There are 34 surfaces, 19 physical glass elements, 14 air-separated groups and five cemented pairs. Source stop14 is STO; 6A, 13A, 28A and 29A preserve aspheric identity. Cemented junctions carry the downstream element's index/id. Object/image planes are reference planes rather than extra glass. No rear plate, resin layer, synthetic cement, scaling, index change or source spacing repair was introduced. BF remains the physical air gap from surface34 to the image. Track is first vertex to image and is not mechanical barrel length.

The original sag equation contains even A4/A6/A8/A10 and standard K. Original A10 on surfaces28/29 is blank. A second exact-A PDF p14 and same-application grant JP6125383B2 p14 independently reproduce those blanks; all 34 surface rows and nonblank aspheric coefficients agree. The grant front page identifies the same application and original publication, and its Figure11 p21 is legible. The grant supplies qualified diagram context only, never substituted numeric values. The approved model uses zero at these two A10 entries only. A12/A14 are zero because they are absent from the defining source equation, not because an unreported printed cell was repaired.

## Explicit transformations and qualifications

- Raw blank A10 values remain null. Modeled 28A/29A A10=0 is conditional degree-8 truncation with no source-derived error bound.
- All three infinity zoom stations remain 24.86, 50.58 and 101.70 mm. Every zoom-only gap repeats its value across the two required focus entries. No finite-focus spacings or continuous mechanical zoom law are invented.
- zoomApertureModel='from-nominal-fno' is the documented current-main inference, calibrated from native f-numbers 4.06/4.11/4.07. It is not a published physical iris schedule.
- Clear apertures are modeled inferences. The qualified grant Figure11 was rendered at 450 dpi; approximately 797 pixels from first vertex to image correspond to 151.90 mm. Figure estimates were bounded by exact geometry and traced clearance, not treated as published dimensions.
- Three initial SD choices failed unchanged shared-gap policy: source 7 became10.7 mm; source 12/13A became11.6 mm; source 32 became13.0 mm. G4 apertures were modestly enlarged after actual bundle checks, including 23 to 12.2 mm for internal cemented containment. The full before/after ledger is D07. No rim/gap policy was relaxed.
- Native nd/vd stay as printed, including source 17 nd 2.00100/vd29.13. HOYA coordinate-equivalent names and calculated nC/nF/ng are explicitly labeled catalogue proxies, not supplier/melt identifications.

## Final-file numerical verification

The portable verifier parses the actual final .data.ts through a deliberately restricted JSON literal grammar with an exact TypeScript wrapper. It rejects duplicate keys, arithmetic and trailing code; accepted and malformed fixtures execute on every replay. A deliberate final-literal nd mutation is detected by both source mapping and optical change. The earlier source mutation test also remains. Node TypeScript stripping is used for actual runtime execution and is never described as static type checking.

Every radius, spacing, native index, element boundary, var entry and coefficient in the parsed final file is checked against the raw source plus the explicit two-field transformation. First-order optics is recomputed from final data at all source states, including principal planes, standalone element powers, cemented net powers, functional groups, all per-surface Petzval contributions and the five conditions. Native first-order optics is independent of A4 and higher terms.

| State | EFL calculated mm | BFD calculated mm | Physical source track mm | Exact-ray-calibrated iris radius mm |
|---|---:|---:|---:|---:|
| wide | 24.861963 | 39.460965 | 151.8981 | 7.095169 |
| intermediate | 50.581376 | 59.126744 | 170.4742 | 8.893669 |
| tele | 101.709436 | 66.936026 | 198.2044 | 9.901120 |

Fixed source EFL/BFD tolerances are 0.01 mm and track tolerance 0.007 mm; original observations remain visible. Group G4B computes 416.886132 mm versus printed 416.90 mm and fails the fixed 0.01 mm comparison. Its separate local source-half-unit sensitivity assessment is approximately 0.095118 mm, which supports a source-rounding disposition without deleting the failed comparison or editing the source. These local sensitivity sums are not rigorous nonlinear interval bounds and do not bound the unknown A10 term. All five patent inequalities pass.

## Exact geometry and current-main runtime

Actual public buildLens, validateLensData, current-state off-axis UI launch helper, exact surface tracer, physical stop inference, field/chief-ray solvers and production render diagnostics were executed at the pinned main. All 152 source-only dependency files in the supplied expanded tree were rehashed against its source manifest; 135 modules were actually loaded by this lens harness. No adjacent-lens results were used. The data and harness hashes are bound into the actual runtime record.

The portable independent code implements Newton intersection with the explicit sag plus 3D vector Snell refraction. It starts from final parsed data, not copied runtime intercepts. It separately aims native-field chief rays and reproduces actual UI launches; agreement is numerical cross-check evidence, not an independent source-first audit.

Coverage: nine zoom samples, including all three published infinity stations and six explicitly non-source interpolation samples; 301 radial samples per shared-band edge/gap; 45 default UI rays; 45 freshly solved native chief rays; 1,125 circular entrance-pupil rays across five field fractions and three pupil radii with twelve nonzero-ring azimuths. All tested default UI rays and native chiefs transmit. The circular pupil pass has 886 transmitted rays, 239 first-event-vignetted rays and no internal cemented-interface clipping. One pre-entry noBracket result is retained as unadmitted; the independent tracer likewise does not transmit it. No clipped continuation is counted as a surviving physical ray.

Separate physical-iris targeting yielded 291 converged targets and 24 targets not bracketed within the finite pre-stop-clear-aperture scan. Those 24 are not called solved or transmitted; that is an explicit sampling limit. Of the 291 converged rays, 41 vignette at external element boundaries. No first-event clipping occurs at an internal cemented junction. Post-clip continuations are kept only as diagnostics and excluded from containment acceptance. The default UI launch, physical iris targeting and continuation meanings are not conflated.

The independent exact replay agrees with current-runtime transmitted skew hit radii to better than 2e-9 mm. Fresh native chief/UI hit residual is below 1.1e-7 mm; image-plane residual is below 3.1e-9 mm. Independently calibrated source-station iris radii agree to better than 8e-11 mm. These are numerical reproducibility residuals, not model-versus-production errors.

At the three native full-field endpoints, signed chief image heights are approximately -21.630596,-21.628740,-21.632404 mm, compared with source magnitude 21.63 mm. Intermediate angular samples are interpolated test angles, not a newly verified continuous zoom law. Interpolated cached entrance-pupil boundary rays can be stopped by the interpolated physical iris; this behavior is disclosed, while all actual default axial/UI rays remain inside the tested aperture. No ordinary stop was made embedded to bypass calibration.

The parsed geometry pass covers analytic conic domain and rim slope, element edge thickness, the current 3:1 SD-ratio sanity limit and sampled shared-band intrusion with gapSagFrac 0.9. No policy override is authored. Actual production render diagnostics show zero hidden trim at every tested state. The supplied SVG is a portable isotropic geometry plot and was visually inspected; it is not presented as a browser screenshot or a complete production-render test.

## Glass audit and manufacturer correlation

Every one of the 14 distinct glass coordinates was searched across the full official HOYA 20260707 including-obsolete catalogue; the entire catalogue hash was freshly verified. Relevant candidate rows and formula coefficients are retained. All selected candidates roundtrip their catalogue nd within 1e-4. The explicit line-index values in each final element are recomputed from the declared catalogue-equivalent candidate in the portable verifier. Small vd coordinate residuals and alternate candidates remain visible. Limited OHARA, Hikari, Schott and Sumita source checks are individually disclosed; CDGM was not checked and no cross-vendor uniqueness or OHARA-prefix equivalence is claimed.

Sigma's official product page and 2013-10-16 launch announcement support the production identity, 19/14 construction, full-frame format, marketed 24-105mm F4, 9 rounded blades and 45 cm minimum distance. Structural/material-position convergence supports a construction correlation; exact factory prescription is unconfirmed. Source design quantities are not rescaled to marketing. Sony A lacks OS. Modern manufacturer wording about focus/zoom barrel length is treated cautiously; it does not replace the source's increasing vertex-to-image track or establish internal zoom.

## Focus and spectral limits

NO_INTERNAL_RECONSTRUCTION remains in the data header, focusDescription and evidence. Patent G2 objectward focusing and lateral G4A stabilization are descriptive mechanisms; no quantitative near-focus or decentered state is modeled. Marketing closeFocusM 0.45 is a product field, not a certified finite-conjugate prescription. No finiteConjugates are authored. Repeated var focus endpoints do not simulate production close focusing, and no optical performance claim is made for those artificial control states.

Catalogue proxy spectra are better specified than an unspecified Abbe-only curve but still are not physical-glass proof. No APO, secondary-spectrum performance or factory MTF claim is made. All finite-aperture results remain conditional on the approved two missing-term assumptions.

## Discrepancy / correction register

- Preserved initial essential-source failure; resolved for the explicitly approved conditional model only.
- Preserved original blank cells, original signed radii, all native media and every published state.
- Retained G4B source-comparison FAIL and separate rounding-sensitive disposition.
- Corrected initial inferred SDs under unchanged geometric rules; no source-prescription change.
- Used current-main inferred zoom iris model instead of confusing fixed-iris behavior with source aperture variation.
- Corrected an early harness return-plane label: the low-level sequential tracer returns last-vertex coordinates; image-plane values now use the actual outgoing slope and physical final gap. No such diagnostic label survives in the final packet.
- Corrected the harness stopAt contract interpretation before accepting physical-iris results: the API traces count surfaces and projects to the next vertex. Final targeting verifies the returned stop vertex, rather than incorrectly requiring a hit on the stop.

## Claim map and pending review

| Claim family | Governing artifact/result |
|---|---|
| Original prescription and blank A10 | evidence.rawPrescription and unchanged PDFs |
| Authorized conditional treatment | evidence.authorizedModelVariant; D05; original raw null cells |
| Source/model equality | final-file-source-mapping |
| EFL, BFD, principal planes, elements/groups/Petzval/conditions | implementedModel.systems / standaloneElements / groupPowers / cementedPowers / petzval / conditions |
| Native chief image height | implementedModel.exactReplay source-station endpoints |
| Asphere departures and SD/rim/edge/gaps | implementedModel.geometry; parsed-exact-geometry |
| Glass names and spectra | implemented-spectral-proxies; glassEvidence |
| Runtime source and exact revision | current-runtime-fingerprints; runtime.json.loadedSources |
| Physical iris and current UI | independent-iris-calibration; independent-exact-ray-replay; physical-iris-containment |
| Circular skew sampling and vignetting | circular-pupil-skew-containment; actual runtime record |
| Render trimming | runtime-record-geometry; runtime states renderDiagnostics |
| Product features and correlation | evidence.sources.manufacturer/launch and productCorrelation |

Interpretive prose and citations were manually reviewed. The preceding sections record author verification. The source-first independent review and refreshed final contract are recorded below. The remaining repository-only static TypeScript/Prettier/full-corpus/build gates are NOT_RUN at integration scope. Actual runtime validation and render diagnostics are not those missing checks under a new name. No Git, branch, PR, desktop, IDE, full build, corpus sweep, integration, Library or Drive write occurred.

## Sources

- [Original JP2015055858A](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2015055858A), Example 2, pp11,14-16,20,22 of the supplied PDF.
- [Alternate exact-A PDF](https://patentimages.storage.googleapis.com/23/10/7c/6a5487c84cfcdb/JP2015055858A.pdf), p14.
- [Same-application grant](https://patentimages.storage.googleapis.com/81/06/33/c1db73497f8736/JP6125383B2.pdf), pp1,14,21, supporting clarification/diagram only.
- [Sigma product page](https://www.sigma-global.com/en/lenses/a013_24_105_4/).
- [Sigma announcement](https://press.sigmaphoto.com/product/10/sigma-corporation-announces-new-optically-stabilized-24-105mm-f4-dg-os-hsm-lens/).
- [Official HOYA catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).

## Stage 3 analysis and source-pattern correction

The complete 13-file Stage 2 checkpoint was hash-verified and independently replayed before analysis began. Its data SHA256 is cf7ab36c87ee27b4d848d31ca2f3a7c09b530d56a9e7e11d9a0993c9b229eb5d and archive SHA256 is 5ef6cded35a4db36231bc83d1d52960000fca267e44eae1c60ec5248a9f00795. The data, runtime harness, runtime record and geometry plot are unchanged during Stage 3. The verifier gains cross-file analysis checks; evidence adds a source-pattern clarification with no numerical transfer or prescription change. All inherited source/construction checks are rerun against the final bytes.

The author Stage3 packet asserted that Example4 surface22 had blank A8 but nonzero A10=-5.90440E-14. Independent PassB review disproved that column attribution: the value is under surface27, while surface22 A8 and A10 are both blank. The error is corrected in clean analysis/evidence; this paragraph preserves the correction history. No general blank=zero rule is adopted, and no other-example coefficient enters the selected model. Only selected Example2 surfaces28/29 use approved conditional A10=0, with source nulls and no source-derived error bound retained.

Manual prose review covered all 19 element shapes and roles against paragraphs 0064-0068, the distinction among physical/air-separated/functional groups, isolated versus cemented power, focus and stabilization limits, native versus marketed quantities, conditional asphere wording, catalogue-proxy spectral limits and source links. The analysis uses scholarly third-person prose and contains no readiness badge or workflow narrative. Link URLs were checked after line wrapping so long destinations remain unbroken. The native-field image heights use actual image-plane projection, not low-level return-vertex coordinates.

Analysis-to-fact mapping:

| Analysis section/claim | Governing final-data result/source |
|---|---|
| Patent Reference / Design Identification | final metadata, original card/PDF, productCorrelation, authorizedModelVariant, sourceClarification |
| Architecture group table | implementedModel.groupPowers; selected source subgroup boundaries |
| EFL/BFD/track table and reference-plane interpretation | implementedModel.systems; raw published expected values |
| Petzval and first-order classifications | implementedModel.petzval; implementedModel.systems |
| All 19 element first lines/shapes | parsed final elements; implementedModel.standaloneElements; source paragraphs 0064-0068 |
| Cemented and functional group distinctions | implementedModel.cementedPowers/groupPowers; final doublets/groups |
| Glass table / explicit proxy spectra | parsed final elements; implementedModel.spectralProxies; official catalogue coefficients |
| Focus / zoom intervals | parsed final var; source states; NO_INTERNAL_RECONSTRUCTION and source paragraph 0069 |
| Asphere coefficient / modeled-rim tables | parsed final asph/sd; implementedModel.geometry; original source unknowns and scoped conditional treatment |
| Conditions table / betaW345 | implementedModel.conditions/betaW345; source paragraph 0086 |
| Stabilization mechanism | source paragraph 0067; no authored decentered state |
| Iris / chief image-height table | implementedModel.systems.inferredPhysicalIrisRadiusMm; exactReplay source-station chiefs |
| Geometry/runtime/sampling qualifications | corresponding executed checks and actual runtime record; no full-domain claim |

The earlier Stage3 14-file archive preserved originals and supporting clarification PDFs. Its READY_FOR_AUDIT gate was conditional on the identified two A10 assumptions; it is not READY_FOR_BATCH, an independent audit approval, or integration. Integration remains INTEGRATION_PENDING.


## Independent Stage4 source-first audit and final disposition

PassA was completed before the candidate was opened. The exact frozen source evidence, code identity, comparisons, calculations and exposure record are embedded under evidence.independentPass and results.independentBaseline. The original seven-file checkpoint and original blocked author archive remain unchanged. Baseline fingerprint: b3efcc5bab9ea5b458d8569eaa343c99c36643eab41b611cc266bc95ab822e8a.

PassB independently mapped every final R/d/nd, source state and coefficient against that frozen extraction. Only the two approved A10 zeros differ from blank source cells; no selected numerical input changed during audit. Fresh matrix calculations reproduce the source-first EFL/BFD and physical source track at every station. All 19 standalone element powers, five cemented powers, seven functional/subgroup powers, principal/pupil references, movements, conditions and 34 Petzval terms were reconciled. The stricter PassA eight printed-digit FAIL comparisons remain intact; the author’s distinct original G4B FAIL remains too. Separate local rounding-sensitivity evidence supports a no-source-repair disposition, without claiming exact printed-value reproduction or a nonlinear error bound.

A separately written meridional angle-Snell/axial-Newton tracer checked 498 UI, axial, native-chief and physical-iris rays at 9 states: zero transmission-status disagreements, maximum intercept residual below 1.31e-9mm and image residual below 8.31e-10mm. Seventeen geometry states were checked using endpoints and derivative-root searches across 1000 radial intervals with 48 bisections. Rim/domain, shared-band edge/gap and current unchanged policy checks pass. This is denser finite checking, not a formal continuous-domain proof. The author’s separately implemented3D skew-ray replay also remains executable in the consolidated verifier.

All 152 declared exact-main source dependencies were rehashed. The original candidate actual-runtime replay was identical. The extended runtime harness now records real glass-alias resolution and actual C/d/F/g index evaluation; all 19 authored glass media use explicit lineIndices and reproduce stored indices exactly. Separate aliases PCD51→M-PCD51, TAF1→S-LAH66, LAF2→J-LAF2 are disclosed as inactive fallback mappings. The actual rectilinear projection, safe diagram/UI field versus full-format analysis field, inferred pupil/iris schedules and identical artificial focus-endpoint surfaces are recorded. No finite-focus or source-spectral identity is inferred from them.

The grant Figure11 and portable SVG were visually checked. They have compatible topology and qualified proportions; their absence of numerical aperture dimensions is preserved. The actual runtime production render diagnostics have zero hidden trim at the9tested states. No browser screenshot, static TypeScript check or Prettier run is claimed. Initial missing-module and reviewer-harness API failures are preserved in evidence as failed attempts, followed by successful corrected execution without project-code changes.

Manufacturer product and launch pages were independently reopened. The stated production metadata is supported; the prescription remains a correlation, not a confirmed factory design. The narrower optional preferred condition5 is not satisfied, although all five broad patent conditions are.

The old41-versus42-check replay discrepancy is resolved by regenerating canonical results after manifest preparation and retaining package-membership-hashes in both stored and clean-replayed results. Final packaging checks bind exact final bytes and require full portable result equality plus genuine runtime replay equality. No packaged result is overwritten by replay.

Final gate is READY_FOR_BATCH for the explicitly approved conditional A10 model only, after those final checks pass. This does not certify a complete exact patent prescription, factory performance, a source-derived error bound, continuous-domain coverage, integration or publication. INTEGRATION_PENDING remains. Actual static typecheck/Prettier/full corpus/full build are NOT_RUN at integration scope. No unrelated exception or geometry-policy waiver is used.


## Current-main refresh impact review

The original source-first pin and candidate checks at 53470da remain preserved as history. During final review, main advanced to 709dda72a0ddead8ee77b8306347429031f8b379 after the detachable-teleconverter and plate contract merged. All 250 current reference/source files were hashed against manifest125799312b757368f33b04ec5bfbe3f8299f3e750d3078d6e1c56c07c75c34f1. The changed LensDataSpec, template, AGENTS, types and TeleconverterDataSpec were read. The newer specific contract overrides stale generic filter wording in the unchanged integration handoff.

The selected example contains no filter or camera plate, no converter and no TC-prefixed authored surface. No acceptsTeleconverters compatibility or attachedTeleconverter descriptor is authored. Consequently the new plate distinction and converter schema require no prescription or metadata change. Actual current-main validation, plate-expansion identity, reserved-TC-prefix and boolean-flag rejection probes, public buildLens, field/pupil/alias helpers, exact rays and render diagnostics are rerun at the new pin. The new pin becomes the final contract only after replay passes; neither the frozen baseline nor earlier source evidence is relabeled as having used it.

The refreshed public-runtime replay passed on the independent 251-file closure (the shared 250-file snapshot plus one separately verified UI helper). All 136 loaded modules matched current709dda72 provenance. System quantities and every recorded ray/render state are identical to the preceding pin. The new validator rejected the two deliberate TC-schema mutations, plate expansion returned the unplated model unchanged, and no data bytes changed. The current-reference impact check is PASS.


## 2026-10-15 — Patent-rim, glass and release-metadata review

Patent: local `patents/JP2015055858A.pdf`, Numerical Example 2. Its damaged Figure 11 is supplemented only for geometry by local same-application grant `patents/JP6125383B2.pdf`, Figure 11, PDF p.21, as already established by the prior source comparison.

| Field | Before | After | Evidence |
|---|---|---|---|
| Display suffix | ART | Art | [Maker product page](https://www.sigma-global.com/en/lenses/a013_24_105_4/); consistent with the other Sigma Art entries. |
| Nineteen elements' nC/nF/ng | 57 catalog-computed anchors | Removed; shared catalog resolution | No patent spectral measurements support these fields; native nd/vd retained. |
| TAF1 / LAF2 resolution | OHARA S-LAH66 / Hikari J-LAF2 aliases | Actual HOYA TAF1 / LAF2 polynomials | Public HOYA 2026-07-07 including-obsolete NM/CD records, retaining published coefficients. |

The 600 dpi grant inspection confirms the inferred rim sequence, stepped 6A/7 element and cemented pairs. Group brackets contaminate automatic rear readings; manual optical rims, rather than those readings, agree with current radii. No SD changed. All 19 glasses use catalog spectra; source blank A10 values remain the existing conditional zero assumption, not a newly established source value.

The four native mounts, full-frame format, 19/14 counts and source-party metadata match the maker/source records. Sony A omits OS as already documented. Analysis synchronized with named HOYA curves and removal of synthetic line anchors.


## 2026-10-16 — Live diagram, glass-color and travel review

Rechecked the same-application Figure 11 (JP6125383B2.pdf p.21) at 600 dpi against local wide/tele sections. Retained the front square rims, 6A/7 step and cemented-pair rims; no SD change is justified. Wide-to-tele group coordinates all move objectward relative to the image, as the source states. Finite focus stays disabled; only the patent-described G2 objectward direction is explained. Added inferred APD colors to L8/L17 (FCD100) and L10/L11 (FCD515); the maker's construction graphic marks these FLD/SLD positions. The corresponding catalog ΔPgF values are about +0.04978/+0.01573. All nineteen curves and source nd/νd are unchanged. Sigma Corporation remains the single canonical Sigma assignee.

All six release lenses retain 81/81 catalog-backed elements; no additional curve is needed to fill a coverage gap. Surface, image-circle and aperture audits pass at all ten infinity/zoom stations. The sole field-coverage limitation is Miranda's explicitly declared 22.5° half-field (94% of the full-frame corner); no rim clips its corner chief ray. No new changelog entry was added.
