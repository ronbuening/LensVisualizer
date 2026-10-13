# Lens Patent — Canon EF85mm f/1.8 USM — 3 Analysis

## Current gate and immutable model

READY_FOR_AUDIT. The final data is byte-identical to the coordinator-accepted Stage2 revision: cb629c1d9af94ffa3437378c2b35a58fda95b56c6c5f6276a2c62976b6ec9903. No upstream optical correction, new focus keyframe, extra group motion, scaling change, index substitution or image-plane adjustment was made during Stage3. The preceding Stage2 package/manifest/evidence/verifier/results hashes and coordinator receipt are recorded in evidence.stage3Entry.

All prior canonical file hashes were checked, and the Stage2 portable verifier was rerun before analysis authoring. Its complete stable result matched the preceding executed result except executedUTC. All14 current controlling references were rehashed against their manifest at the unchanged d8b406ce112931ab0b2988b87acbd13b0b663c7e pin. No newer reference was silently substituted.

## Analysis scope and manual review

The analysis has the specification's metadata block, required section order and nine front-to-rear element subsections. The all-spherical design omits a separate asphere section. Conditional air-lens, aberration, patent-condition and model-verification sections are supported by the selected source and executed model.

The manual interpretive review checked each group/element role against the cited source paragraphs. Standalone element powers are distinguished from complete cemented/group powers and from in-situ aberration contributions. The patent's front-group gradual convergence, air-lens correction argument and rear-group chromatic/distortion discussion remain source-attributed explanations, not newly calculated isolated aberration budgets. The paragraph0011 sign inconsistency remains explicit. No design heritage, supplier procurement, chemical composition, ED or APO performance was invented.

The source N/nu convention remains unestablished. The mandated nd/νd presentation is explicitly described as schema notation for the native source numbers under a limited approximate d-line interpretation. Seven glass pairs and representative candidate names were cross-checked with final data and the complete authoritative catalog evidence. The analysis preserves the L6 index difference from N-BK7 and the conditional L8 candidate distinction. Candidate catalog spectral fields were not imported.

The 0.8m patent plot label remains separate from the reconstructed850mm object-to-fixed-image endpoint. The native fixed-stop table convention and the permitted alternative prose are both explained. The derived travel, predicted magnification, two-keyframe interpolation, estimated intermediate labels and actual adaptive tracking-focus launch remain distinct. The article does not infer displayed blur from the label-based Gaussian mismatch, certify derived states as published finiteConjugates, or claim finite MTF.

Manufacturer correlation is explicitly selected and unconfirmed. Canon's marketed month, construction, MFD/magnification, EF/full-frame taxonomy and rear-focus/ring-USM evidence are individually sourced. The non-rotating front-group statement is not misread as evidence of no axial travel. Patent bibliography rests on the original PDF; the accessible Google display supplies a conventional record link and Romanization only.

All12 source links are conventional external URLs. The SUMITA download landing page is cited because its preserved binary download is POST-based. No chat-only citation tokens, private workspace paths or readiness/workflow narrative appear in the analysis itself. This is author consistency review; a fresh independent Stage4 source-first review has not occurred.

## Quantitative claim map

Every item below is tied to the unchanged final data revision identified above, or explicitly to native source or catalog evidence. Computed quantities are obtained from the running verifier and bound actual Stage2 runtime receipts; no saved result is reused as a substitute numerical prescription.

| Analysis section / claim | Fact or executable result | Authority / qualification |
|---|---|---|
| Patent metadata block, dates and Example1 | evidence.sources[P1]; data.patentNumber/patentAuthors/patentAssignees/patentYear | Original PDF p1 fields21/22/43/54/71/72; ¶0024 |
| Production correlation list and marketed85mm/f1.8,9/7,July1992,0.85m,0.13× | productCorrelation.manufacturerClaims M01–M12 | Canon primary sources; correlation is not confirmed |
| Architecture9 elements,7 assemblies,3 functional groups,16 interfaces,one stop | F03/F04; rawPrescription; parsed data.surfaces/elements | Source table and Fig1, not a marketing-to-patent proof |
| All-spherical/no rear plates; unchanged source scale | F04; data.asph; source rearPlates/dummyPlanes; final_payload_source_mapping | No omitted optical plane or synthetic cover glass |
| Native and derived focus gaps and reference convention | F06/F07; finiteFocusVerification.endpoint; data.var | Only850mm image-plane reconstruction is adopted; alternatives remain diagnostic |
| Conditions inequalities and printed4.18/0.70/0.91 | rawPrescription.conditions; sourceModel.conditions/comparisons | Original first-summary mismatch retained, separate rounding disposition |
| Glass table7 pairs and listed analogs | glassEvidence.portableCandidates/relevantSourceExcerpts; analysis_glass_table_catalog_candidates | Conditional d-line coordinate screen, not supplier identity |
| Aperture15.0/15.5mm and other inferred rims | actual data.surfaces.sd; stage2GeometryAdjustments | Inferred clear radii; no source dimension claim |
| Small finite ray and conjugate residual statement | finite_paraxial_exact_control; finiteFocusVerification.endpoint | Independent exact ray versus fixed Gaussian image, not full-aperture focus perfection |
| Full finite aperture/geometry/render claims | actual_runtime_*; whole_motion_geometry; unequal_rim_full_rotational_clearance | Actual finite rays/production paths; finite sampling limits explicit |
| Element L1: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[0]; parsedPayloadOpticalDiagnostics.standaloneElements[0]; analysis_elements_labels_glass_powers | ¶0010–0011; front positive sequence; no isolated aberration sign inferred from power |
| Element L2: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[1]; parsedPayloadOpticalDiagnostics.standaloneElements[1]; analysis_elements_labels_glass_powers | ¶0010; positive meniscus; no isolated aberration sign inferred from power |
| Element L3: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[2]; parsedPayloadOpticalDiagnostics.standaloneElements[2]; analysis_elements_labels_glass_powers | ¶0012; adjacent air-lens role; no isolated aberration sign inferred from power |
| Element L4: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[3]; parsedPayloadOpticalDiagnostics.standaloneElements[3]; analysis_elements_labels_glass_powers | ¶0010–0012; negative meniscus and wording conflict; no isolated aberration sign inferred from power |
| Element L5: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[4]; parsedPayloadOpticalDiagnostics.standaloneElements[4]; analysis_elements_labels_glass_powers | ¶0024/Fig1; moving cemented group; no isolated aberration sign inferred from power |
| Element L6: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[5]; parsedPayloadOpticalDiagnostics.standaloneElements[5]; analysis_elements_labels_glass_powers | ¶0009/0020/0024; negative focus group; no isolated aberration sign inferred from power |
| Element L7: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[6]; parsedPayloadOpticalDiagnostics.standaloneElements[6]; analysis_elements_labels_glass_powers | ¶0013; rear chromatic pair; no isolated aberration sign inferred from power |
| Element L8: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[7]; parsedPayloadOpticalDiagnostics.standaloneElements[7]; analysis_elements_labels_glass_powers | ¶0013; weak-positive rear doublet; no isolated aberration sign inferred from power |
| Element L9: first-line native coordinates, Unmatched label and signed standalone focal length; interpretive role | data.elements[8]; parsedPayloadOpticalDiagnostics.standaloneElements[8]; analysis_elements_labels_glass_powers | ¶0013; final positive singlet; no isolated aberration sign inferred from power |
| Quantitative token `84.997673` | A01: implementedModel.cardinal.EFL_mm; native infinity, literal source indices | Recomputed value 84.99767305681792; format `.6f` |
| Quantitative token `73.520000` | A02: implementedModel.cardinal.vertexTrack_mm; native infinity, literal source indices | Recomputed value 73.52; format `.6f` |
| Quantitative token `38.905092` | A03: implementedModel.cardinal.BFD_mm; native infinity, literal source indices | Recomputed value 38.9050921339573; format `.6f` |
| Quantitative token `112.425092` | A04: implementedModel.cardinal.firstVertexToGaussianImage_mm; native infinity, literal source indices | Recomputed value 112.42509213395729; format `.6f` |
| Quantitative token `1.322684` | A05: implementedModel.cardinal.TL_over_EFL; native infinity, literal source indices | Recomputed value 1.3226843522975638; format `.6f` |
| Quantitative token `+82.211212 mm` | A06_G1: sourceModel.groupPowers[0]; independently duplicated from parsedPayloadOpticalDiagnostics | Recomputed value 82.21121189007258; format `+.6f` |
| Quantitative token `-59.521301 mm` | A06_G2: sourceModel.groupPowers[1]; independently duplicated from parsedPayloadOpticalDiagnostics | Recomputed value -59.521301175597; format `+.6f` |
| Quantitative token `+53.873495 mm` | A06_G3: sourceModel.groupPowers[2]; independently duplicated from parsedPayloadOpticalDiagnostics | Recomputed value 53.87349494471732; format `+.6f` |
| Quantitative token `+354.119303 mm` | A07: sourceModel.G1G2_EFL_mm, native infinity | Recomputed value 354.1193028807166; format `+.6f` |
| Quantitative token `-59.521301 mm` | A08_L5-L6: sourceModel.cementedPowers[0], complete assembly in air | Recomputed value -59.521301175597; format `+.6f` |
| Quantitative token `+527.257551 mm` | A08_L7-L8: sourceModel.cementedPowers[1], complete assembly in air | Recomputed value 527.2575513467962; format `+.6f` |
| Quantitative token `11.190563 mm` | A09: finiteFocusVerification.endpoint.admissibleRoots[0].delta_mm | Recomputed value 11.19056260413962; format `.6f` |
| Quantitative token `14.780563 mm` | A10_D9: same solved root D9_mm | Recomputed value 14.78056260413962; format `.6f` |
| Quantitative token `5.109437 mm` | A10_D12: same solved root D12_mm | Recomputed value 5.109437395860381; format `.6f` |
| Quantitative token `-0.127006` | A11: same root magnification, prediction not fit | Recomputed value -0.1270055436346283; format `.6f` |
| Quantitative token `87.176243 mm` | A12: parsedPayloadOpticalDiagnostics.states[2].cardinal.EFL_mm, derived endpoint | Recomputed value 87.17624333334346; format `.6f` |
| Quantitative token `1488.011 mm` | A13_MID: bound actual displayConjugate.states adaptive distance, pure public runtime execution | Recomputed value 1488.0113422937368; format `.3f` |
| Quantitative token `+0.001346 mm` | A14_MID: bound actual display diagnostic axial crossing minus fixed imageZ; 0.001 paraxial EP fraction | Recomputed value 0.0013458936406891553; format `+.6f` |
| Quantitative token `0.048817 mm` | A15_MID: bound display diagnostic transmitted axial sample max-min, not RMS/MTF | Recomputed value 0.04881720572702619; format `.6f` |
| Quantitative token `849.820 mm` | A13_NEAR: bound actual displayConjugate.states adaptive distance, pure public runtime execution | Recomputed value 849.8203273909124; format `.3f` |
| Quantitative token `+0.002898 mm` | A14_NEAR: bound actual display diagnostic axial crossing minus fixed imageZ; 0.001 paraxial EP fraction | Recomputed value 0.002898420236419952; format `+.6f` |
| Quantitative token `0.080605 mm` | A15_NEAR: bound display diagnostic transmitted axial sample max-min, not RMS/MTF | Recomputed value 0.08060527853182542; format `.6f` |
| Quantitative token `0.774688 mm` | A16: finiteFocusVerification.linearSliderConjugateDiagnostics maximum absolute Gaussian shift | Recomputed value 0.7746877602055529; format `.6f` |
| Quantitative token `+0.002143551 mm⁻¹` | A17: surface-by-surface phi/(n*nPrime) sum | Recomputed value 0.0021435510361374984; format `+.9f` |
| Quantitative token `466.516 mm` | A18: reciprocal Petzval sum, not astigmatic field surface | Recomputed value 466.51560104765093; format `.3f` |
| Quantitative token `4.166223` | A19_1: sourceModel.conditions[0], native infinity | Recomputed value 4.166223499365688; format `.6f` |
| Quantitative token `0.700270` | A19_2: sourceModel.conditions[1], native infinity | Recomputed value 0.7002697725125855; format `.6f` |
| Quantitative token `0.905113` | A19_3: sourceModel.conditions[2], native infinity | Recomputed value 0.905112856753286; format `.6f` |
| Quantitative token `23.610465 mm` | A20_EP: exact native nominal pupil f/(2FNO) | Recomputed value 23.610464738004975; format `.6f` |
| Quantitative token `14.995052 mm` | A20_IRIS: exact axial nominal ray intercept at native STO | Recomputed value 14.99505235655693; format `.6f` |
| Quantitative token `14.593623 mm` | A20_PARA: paraxial stop calibration only | Recomputed value 14.593622749321646; format `.6f` |
| Quantitative token `21.377161 mm` | A21: native 14.3deg exact source-index chief at fixed Gaussian plane | Recomputed value 21.377160813471235; format `.6f` |
| Quantitative token `21.633308 mm` | A22_CORNER: actual runtime format corner radius | Recomputed value 21.633307652783937; format `.6f` |
| Quantitative token `14.472310°` | A22_ANGLE: actual runtime native corner chief angle | Recomputed value 14.472309517417045; format `.6f` |
| Quantitative token `0.00047` | A24_NBK7_DELTA: sourceModel.glassResiduals SCHOTT N-BK7 minus literal L6 index | Recomputed value 0.00046999999999997044; format `.5f` |
| Quantitative token `1.51680` | A24_NBK7_N: catalog N-BK7 index from verified residual plus parsed L6 native N | Recomputed value 1.5168; format `.5f` |
| Quantitative token `3.590000 mm` | A23_STO: parsed actual native var[STO][0] | Recomputed value 3.59; format `.6f` |
| Quantitative token `16.300000 mm` | A23_12: parsed actual native var[12][0] | Recomputed value 16.3; format `.6f` |

## Stage3 checks and disclosure

The portable checker reads the actual final data and analysis. It checks metadata, section order, all nine element indices/Abbe/glass/power lines, seven glass-pair rows, conditional catalog candidates, source condition rows, quantitative rounding, required uncertainty disclosures and portable citations. It detects an intentionally changed EFL in temporary analysis text. Manual interpretive review is separately bound to the exact analysis and data hashes.

All142 checks currently comprise138 PASS and4 integration-only NOT_RUN. The four unperformed checks are the actual TypeScript compiler, Prettier, browser acceptance and full build. Stage2 real buildLens/validator/exact tracer/render and adaptive launch execution are retained as byte-bound prior evidence, not falsely reported as new Stage3 executions. Stage3 reruns the portable numerical code and analysis gates only.

The canonical package is ten files, including the original patent/card, unchanged data, new analysis, evidence/verifier/results/audit/manifest and the compact actual-runtime receipt. Complete source/catalog/runtime/trial evidence remains in the three previously verified support volumes, referenced by exact hashes; no catalog binary or runtime tree was recopied for Stage3. A small new support volume retains Stage3 authoring scripts and entry/final replay records.

All files must pass exact membership, SHA256, CRC, safe extraction and a small clean canonical replay before the handoff. No Stage4, repository, integration, Drive, index or publication action is performed by this author.

## Historical Stage2 construction audit

### Prior Stage2 construction record

## READY_FOR_ANALYSIS — Stage 2 only

The user approved the previously bounded 850 mm object-to-fixed-image near-focus reconstruction, moving only G2 and labeling it derived. The preceding native checkpoint and original source bytes were hash-checked before resumption. Stage 1 remains independently coordinator verified. This checkpoint passes required construction, mechanism, numerical, finite-ray and geometry checks; Stage 3 and Stage 4 have not begun. TypeScript compiler, Prettier, browser acceptance and full build remain NOT_RUN / INTEGRATION_PENDING, distinct from the actual targeted Node runtime execution.

## Source preservation and derived focus

JPH05157964A, Example 1 is unchanged: every R, native internal d, N and nu remains literal, with scale 1. The original card and patent are byte-identical. There is one STO; its fixed position follows the selected literal table convention, with D8=8.82 mm constant. The prose permits fixed/moving variants and the schematic bracket is ambiguous; it does not override this approved table convention. G1, stop, G3 and the separately derived Gaussian infinity image plane remain fixed.

Native EFL is 84.997673056818 mm; derived BFD is 38.905092133957 mm and first-vertex-to-image distance is 112.425092133957 mm. These are calculated, not patent-published. The source 4.18 condition summary remains a literal mismatch against 4.166223499366; its separately documented rounding compatibility does not correct the source. The paragraph 0011 wording contradiction is retained. No source erratum is silently changed.

The only unknown is imageward G2 translation delta. The approved observable is 850 mm axial object-to-fixed-image distance, so the object is at z=-737.574907866043 mm. The object-to-image ABCD B term is quadratic in delta. Its roots are 11.190562604140 and 241.935089891809 mm; only the first satisfies source direction, positive axial gaps and full geometric checks. Adopted D9=14.780562604140 mm and D12=5.109437395860 mm. The conjugate B residual is 3.35e-12 mm; predicted magnification is -0.127005543635. Marketing 0.13x is not a fitted observable. The endpoint EFL is 87.1762433333 mm.

The source's 0.8 m aberration-plot label remains 0.8 m with undefined origin. Alternative 800 mm image-plane, 800 mm first-vertex and 850 mm first-vertex solutions are preserved only as rejected reference alternatives, not implemented states. The selected 850 mm origin is an approved model convention, not newly recovered source fact. There are exactly two focus keyframes; no added intermediate keyframes or extra group motion.

`finiteConjugates` is deliberately absent: the current schema treats those entries as published configurations and source-certified finite MTF. A calculated endpoint cannot be relabeled as published. Finite MTF remains unavailable for this derived state; its geometry and real finite-object rays are independently checked here.

## Aperture, cemented admission and production geometry

All clear semi-diameters are inferred. The native iris radius is 14.995052356557 mm, calibrated with the exact native f/1.8 entrance-pupil ray. Reproducing that f-number is a calibration check, not independent evidence of physical iris diameter. The source N/nu line reference remains unspecified; every glass is Unmatched with indexReferenceNote, and no supplier identity or direct spectral values are invented.

Previously verified unequal R7/R8 rims 20.4/19.6 mm preserve full axial admission while keeping the entire L4 outline 0.111076238466 mm before the fixed stop plane. The inferred R13 front rim remains 15 mm, versus R14/R15 at17 mm. Source Fig1 qualitatively supports a stepped rear-doublet front silhouette, without providing dimensions.

Finite-state checks with the prior inferred R10=15.5 mm found four first clips at cemented R11: one at focusT=.75/source14.3 degrees, and three at focusT=1/format-corner12.726984 degrees. Exact ring, azimuth and R10/R11 hit coordinates are preserved in evidence and full trial output. R10 hit radii were 15.378952–15.465980 mm, with shared R11 hits15.540754–15.622066 mm. Reducing only the air-facing inferred R10 clear radius to15.0 mm intercepts these rays before the shared interface; R11/R12 stay15.5 mm. Native axial R10 maximum14.233019932 mm is retained, so the published native f/1.8 beam is not narrowed. The original Fig1 G2 outline is schematic and does not establish this0.5 mm reduction: it is an explicit conservative aperture model, not recovered manufacturing geometry. No published source number changed and no aperture was enlarged to force beam passage.

The final payload passes actual buildLens and validateLensData. Independent checks evaluate101 focus positions and257 shared-band radial samples, with positive solid thickness/domain/rim slope checks. Solid shapes are fixed; each moving air-gap separation is affine and its extrema occur at the endpoints, giving a full-motion non-collision bound beyond the sample grid. Maximum sampled cross-gap intrusion fraction is 0.701142454854, below the retained0.9 default. No gap-sag override was needed.

Actual production render diagnostics at21 states report zero hidden trim. Actual production element paths at infinity, midpoint and near focus were rendered and visually inspected alongside original Fig1. This verifies the production geometry implementation, not browser acceptance.

## Real finite rays and physical endpoint controls

The actual pinned public exact tracer evaluated 27,792 incoming-plane pupil-disk samples over eight focus positions, six fields (including the source14.3-degree field and separately solved full-frame corner) and f/1.8, f/4, f/16 iris settings. Real rims and iris remain active; tracing stops at clipping, without ghost continuation. There are no intersection failures, first clips at shared R11/R14, fallback intersections or transmitted-glass containment violations. Each transmitted material segment is sampled at33 points against its actual rotational outline, including unequal-rim edge connections. Full physical iris admission on axis and all sampled source/format chiefs pass. These finite samples are not a proof of continuous pupil transmission or photometric illumination.

The near full-frame corner is reached by a finite-object chief at 12.726984420937 degrees, separately from the source14.3-degree angular diagnostic. Near full-iris axial image intercepts span [-0.05342080816126149, 0.05342080816130945] mm at the unchanged image plane. This finite spherical-aberration spread is reported, not corrected with image motion. An independently traced0.001 mm finite axial launch intersects the axis at112.425092133056 mm, agreeing with the fixed Gaussian endpoint; full-height rays retain their physical aberrations.

The portable verifier independently traces2,646 finite-rim bundle rays using analytic sphere intersections and vector Snell law, alongside chiefs and axial controls. Its chiefs agree with the pinned public tracer within1e-6 mm. Final-file source mapping, sequential/matrix first-order quantities, powers, pupils, Petzval and source conditions are recalculated from the actual parsed payload. The literal parser rejects seven malformed syntax fixtures; a source-radius mutation and impossible-SD runtime mutation are detected.

## Slider labels versus actual tracking-focus fan

The approved two-keyframe motion linearly interpolates the two G2 gaps. The runtime distance label is estimated as850/focusT mm. Direct finite-object checking against that label gives a maximum Gaussian image shift magnitude 0.774687760206 mm over100 sampled nonzero slider positions, including -0.772995236060 mm at focusT=.5. The original two-endpoint diagnostic is preserved. This label-derived discrepancy is not assigned to the displayed tracking fan and is not used as an invented universal zero-focus gate.

Actual `conjugateK2` computes a current-state exact-ray sensitivity at0.1 of the paraxial entrance pupil and subtracts the infinity baseline. The verified on-axis hook arithmetic launches u=h*focusK; off-axis adds this correction to the public solved-chief slope. These pure runtime functions and launch arithmetic were executed; React hooks and browser were not.

At focusT=.5, adaptive object-to-image distance is1488.011342294 mm versus the1700 mm label. The +0.001-pupil-fraction ray has +0.001345894 mm axial shift, while the sampled transmitted displayed axial fan spans0.048817206 mm. At focusT=1, adaptive distance is849.820327391 mm versus850 mm, the same small fraction shifts+0.002898420 mm, and the fan spans0.080605279 mm. These fan widths include residual spherical aberration. Some extreme UI pupil samples clip because its state pupil estimate is paraxial; those clipped rays and ghost outputs are retained in the display diagnostic and excluded from transmitted width. No change to source, group motion or image plane was made to suppress any effect.

The parent confirmed retention of the approved two endpoints after reviewing these measured distinctions. No intermediate reconstructed states were inserted.

## Provenance, trials and replay

Full original/catalog/manufacturer evidence and175 exact pinned runtime-source hashes are retained through the explicitly hashed reusable prior support archives. The new support volume holds all unique completion scripts, full ray outputs, display diagnostics, figures and trials. The initial exploratory stop-target method and an off-by-one stop-count checker defect are preserved and explicitly invalidated; the corrected checker uses stopAt9, matching the actual API's surface count. No lens alteration was based on invalid trial02 output.

The canonical dossier has nine root files. Its manifest binds final data, evidence, verifier, results and compact actual-runtime receipts. Safe exact-member extraction, CRC and SHA-256 checks plus independent clean portable/runtime/catalog replays are required before handoff. Outputs go outside extracted canonical files. All source/runtime dependency bytes are verified before replay. No uploads, repository edits, integration, publication, Stage3 or Stage4 were performed.

## Historical Stage 1 source audit

### Original extraction record

## Job and reference versions

- Fixed authority: JPH05157964A, Numerical Example 1. Output stem: `CanonEF85mmf18USM`.
- Original card retained byte-for-byte with its original filename `CanonEF85mmf18USM.txt` (125 bytes; SHA-256 e65c6fd589a0b460b2cc05e7522e012e325011df28fa6f588fcbac620a5a2889).
- Original supplied PDF retained byte-for-byte as JPH05157964A.pdf (74,665 bytes; SHA-256 443d9ee13723935e41b456253d30b96fdcb1239dda7baa13e06acb7f4f0a5a85).
- CHAT-1.0 protocol, dossier contract and Stage 1 extraction prompt control this handoff. Fourteen current reference files and their Git blob/SHA-256/byte counts were independently verified against the supplied manifest at public commit d8b406ce112931ab0b2988b87acbd13b0b663c7e. Exact identities are in manifest.references and evidence.referenceReview.
- The older project authoring guides mention integration/build commands. The per-lens protocol takes precedence: no repository edits, metadata generation, full-corpus tests/builds, upload, publication or deployment occurred.
- Outputs use the authorized workspace. No nonexistent /mnt/data, /mnt/project or /mnt/user-data mount is claimed.

## Extraction and conventions

The supplied file contains unembedded HeiseiMin-W3-UniJIS-UCS2-H fonts. Direct rendering with PyMuPDF 1.26.6 / MuPDF 1.26.11 successfully rendered the unmodified original, including Japanese text, numerical tables, the condition table and original figures. All nine pages were visually inspected. This is genuine PDF rendering using the renderer's font fallback, not a recreated table from text extraction. No alternate publication or Optical Bench prescription was substituted. Render hashes and complete supporting images are retained outside the seven-file canonical dossier.

Primary locators: page 1 bibliographic front page; page 2 paragraphs 0007-0012; page 3 paragraphs 0013-0024 and Example 1 R1-R11; page 4 Example 1 R12-R17; page 5 Table 1 and Figure 1; page 7 Figure 4(A)/(B). Sibling examples and figures were read only to ensure completeness and prevent table mixing. The literal selected readings include R13=-9058.59, R14=+41.85 and D14=12.40. They remain unchanged.

There are 17 source planes: 16 glass interfaces and the native iris at R9, nine physical glass elements, seven air-separated assemblies, and three functional groups. The two cemented interfaces are R11 and R14. There are no supplied rear plates, inactive dummy planes, aspherical coefficients or asphere-convention conversion. Coordinates are in mm, z grows object-to-image, the first vertex is z=0, and positive radius means the curvature center lies imageward.

The table labels refractive index/Abbe number N and nu without d/e subscripts. Figure 4 labels d- and g-line curves, which supports a d-line interpretation but does not explicitly define the numerical N column. Monochromatic calculations use literal N. Catalog comparisons are conditional d-line comparisons. A subsequent data author must retain source-index uncertainty and Unmatched/indexReferenceNote unless primary evidence resolves it; no catalog spectral values are assigned to patent media here.

The source publishes F=85.0, FNO=1:1.8 and 2ω=28.6°. It does not publish an image height, physical stop diameter, surface semi-diameters or BFD. R17 has no D17. The initial D9=3.59 and D12=16.3 values correspond to the tabulated infinity configuration; the variable symbols contain no close-focus endpoints. Figure 4(B) is labeled at object distance 0.8 m, with no defined distance reference or finite prescription.

## Model transformations and focus disposition

Every R, d and N remains literal. No scaling, source-value repair, omitted plane, combined gap, plate conversion or glass substitution was performed. A proposed active-model normalization is identity at infinity. The computed Gaussian distance is a derived diagnostic and is never inserted into rawPrescription as a patent value.

Focus status is NO_INTERNAL_RECONSTRUCTION. Paragraph 0009 moves G2 (L5-L6, R10-R12) imageward for near focus. The numerical table fixes D8=8.82 while D9/D12 vary; its literal fixed-stop variant has D9=3.59+delta and D12=16.3-delta, keeping 19.89 mm total gap and rigid G2 internal dimensions. Figure 1's lower bracket appears to include SP with G2, while paragraph 0022 explicitly permits fixed and moving-stop variants. The infinity station is unambiguous; no unique finite stop trajectory is inferred from the drawing.

If later authorized to reconstruct, choose and disclose a table-compatible/prose-permitted stop variant and a defined object-distance reference, solve the actual one-degree-of-freedom mechanism independently, and verify conjugate, physical optics, clearance and runtime interpolation. Do not fit both marketed 0.85 m and 0.13x by adding extra motion. Solved states must remain CONSTRAINED_RECONSTRUCTION, not PUBLISHED. Stage 1 does not solve or author them.

## Glass review

All six requested suppliers were screened against every distinct native pair: OHARA 433, HOYA 435, HIKARI 155, Schott 368, CDGM 352 and Sumita 433 records, totaling 2,176. Seven native pairs represent nine elements. The helper independently re-extracted verified same-day authoritative catalog bytes, and the author reran the offline source checker. Source provenance explicitly records reuse rather than falsely claiming fresh downloads.

The supporting verifier checks 47 source hashes, seven original-archive member identities, 833 exact workbook cell values and XML lexemes, 204 coordinate headers, 157 AGF lines/tokens, 140 candidate residual pairs and 67 deliverable hashes. Relevant source rows, wavelength labels and exact candidate coordinates are embedded in evidence for portable residual replay; complete originals remain in support volumes.

One-decimal nu is kept as source precision. Conditional nearest-rounding bins are a screening convention, not measured tolerance or proof of material identity. Prefixes and historical variants remain distinct. L6 N=1.51633 must not be replaced by N-BK7/BSC7/H-K9L at 1.51680. Historical OHARA BSL7/BSL7Y are conditional analogs. For L8, J-LASF03 and H-ZLaF52A fit conditional bins, while historical LAH53 is just outside. Supplier identity, melt identity, procurement and patent spectral-line identity remain unestablished. Candidate nC/nF/ng/dPgF values belong only to named catalogs, not the patent elements.

## Manufacturer correlation

Canon primary sources verify EF mount, full-frame format, July 1992 introduction, 85 mm f/1.8, nine elements/seven groups, 0.85 m closest focus, 0.13x maximum magnification, rear focusing, ring-type USM and full-time manual focus. The native patent application (1991-12-06) predates the product; publication is 1993-06-25. Inventor is Hiroshi Endo; applicant Canon Inc.

Convergence supports the user-selected correlation but does not establish manufacturer-confirmed attribution of this exact patent example. Canon's generic rear-focusing description places the focus group behind the diaphragm, without identifying this lens's numbered moving elements. Patent 0.8 m and marketed 0.85 m remain separate. Complete original Canon HTML/PDF/diagram sources and retrieval hashes are preserved.

- [Canon Museum](https://global.canon/en/c-museum/product/ef313.html)
- [Canon USA specifications](https://www.usa.canon.com/support/p/ef-85mm-f-1-8-usm)
- [Canon 2018 EF catalogue](https://asia.canon/media/document/2023/08/25/ac24e05e0718479ea233d5c19cb197c6_Canon_EF_Lens_Catalogue_2018.pdf)

## Numerical and geometry results

These are literal-source monochromatic calculations at infinity. Sequential height/reduced-angle updates and separately implemented ABCD multiplication agree. Isolated element powers also agree with the thick-lens formula. Vector-Snell exact sphere tracing passes plane-refraction and small-ray Gaussian controls.

| Quantity | Computed result | Reference |
|---|---:|---|
| EFL | 84.997673057 mm | Literal N; source 85.0 mm |
| Gaussian BFD | 38.905092134 mm | From R17; derived, not published |
| First-to-last vertex track | 73.52000 mm | Sum D1-D16 |
| First vertex to Gaussian image | 112.425092134 mm | Derived |
| Front principal plane | 57.047359122 mm | From first vertex |
| Rear principal plane | 27.427419077 mm | From first vertex |
| TL/EFL | 1.322684352 | Geometric telephoto criterion not met |
| BFD/EFL | 0.457719497 | Not retrofocus by BFD>EFL |
| G1 EFL | 82.211211890 mm | R1-R8 isolated in air |
| G2 EFL | -59.521301176 mm | R10-R12 isolated in air |
| G3 EFL | 53.873494945 mm | R13-R17 isolated in air |
| G1+G2 EFL | 354.119302881 mm | R1-R12 |
| Petzval sum | 0.002143551036 /mm | Sum phi/(n*nPrime), all interfaces |

The title's “telephoto” wording remains a source title/focal-length-class description; it is not used to override the numerical TL/EFL criterion. The prescription's first-vertex-to-image length is distinct from Canon's external barrel length.

Calculated f12/f=4.166223499, |f2|/f=0.700269773, and f3/|f2|=0.905112857. All three claimed inequalities pass. The printed summary 4.18 is not reproduced at its own two-decimal precision; its raw comparison remains FAIL in results.comparisons. No correction was made. A systematic exact 3x3 perturbation grid strictly within the printed D5/D6 hundredth-mm rounding bins spans 4.149244781 to 4.183341307, while all grid EFL values still round to 85.0. This gives a defensible conditional rounding-compatibility disposition, not recovered original unrounded inputs. The literal model remains 4.166223499. The full independent sensitivity record is retained.

The entrance pupil is at z=35.464349247 mm, with stop-image magnification 1.617861798; the exit pupil is at z=-1.501310098 mm from the first vertex, with magnification 2.168496705. Both conjugate B=0 equations pass. A paraxial f/1.8-calibrated stop radius is 14.593622749 mm. This is calibration, not independent aperture evidence.

Exact pupil aberration is material to Stage 2: that paraxial stop intercept corresponds to an incoming axial radius 23.011038815 mm, whereas EFL/(2*1.8) is 23.610464738 mm and reaches the stop at 14.995052357 mm. These alternatives are diagnostics, not two source stops. No final iris convention was chosen.

At the derived Gaussian image plane the sampled exact axial marginal-ray longitudinal departure is -0.034531385 mm, and the 0.75 pupil sample departs by -0.056426124 mm. These are spherical-aberration diagnostics, not a zero-Gaussian-focus rule or a reason to move the image plane. The exact 14.3-degree chief reaches 21.377160813 mm versus f*tan(14.3)=21.665635189 mm (-1.331484%); no source image-height or digitized aberration curve is claimed.

Source geometry feasibility was tested using the exact nominal-pupil axial ray and chief rays at 0, 7.15 and 14.3 degrees, equalizing square-cut assembly rims. The resulting lower-bound diagnostic geometry has minimum edge thickness 1.452379282 mm, maximum rim angle 48.365948 degrees and maximum shared-band intrusion fraction 0.656240231, at R6/R7. No gap-sag override was necessary. These are not final authored SDs, tolerance margins or production-render approval.

Unrimmed exploratory stop-pupil samples trace 49/49 at 0 and 7.15 degrees, and 38/49 at 14.3 degrees. At full field, eight samples reach non-forward R17 spherical extensions and three reach non-forward R6 extensions. These explicit diagnostic failures are retained; they do not certify a clear full-field aperture. A real finite-rim model must clip such rays before invalid material traversal and validate actual containment/vignetting. Full-field aperture containment remains NOT_RUN at Stage 2, rather than being declared passed from the chief ray alone.

## Correction and discrepancy register

1. No source numerical correction, rescale, glass-coordinate replacement or image-plane adjustment.
2. The blank-render report was a renderer/font problem: the unchanged supplied PDF rendered correctly with MuPDF. No source substitution.
3. Table 1 4.18 versus literal 4.166223499 is preserved and conditionally precision-compatible; not claimed exactly reproduced.
4. Table/figure stop-motion ambiguity affects possible finite reconstruction, not the unambiguous infinity station. No finite stop law authored.
5. Source paragraph 0011 literally describes positive spherical aberration balancing positive spherical aberration. No silent prose-sign repair and no computed aberration role inferred from it.
6. N/nu spectral reference is not explicitly named. Conditional catalog matches are not promoted to material identities.
7. Physical iris and SDs absent; exact versus paraxial aperture calibration and full-field vignetting remain construction tasks.

## Quantitative-claim map and prose review

| Audit claim | Executed/source record | Governing input |
|---|---|---|
| EFL, BFD, track, principal planes, geometric ratios | sourceModel.cardinal; facts F01/F02/F05 | Literal evidence.rawPrescription |
| Element and cemented powers | sourceModel.standaloneElements/cementedPowers | Literal source R/d/N; air isolation disclosed |
| Group powers and conditions | sourceModel.groupPowers/G1G2_EFL_mm/conditions; comparisons | Source groups, conditions and table |
| Petzval | sourceModel.petzval.surfaces/sum_per_mm | Every applicable source interface |
| Pupils and calibrated aperture | sourceModel.pupils/apertureDiagnostic | Source R9 station and FNO; diameter inferred |
| Exact rays and geometry | sourceModel.axialRayDiagnostics/chiefRays/geometryDiagnostic/unrimmedExploratoryBundles | Literal source plus explicitly diagnostic aperture inputs |
| Counts/aspheres/focus status | facts F03/F04/F06/F07; rawPrescription/focus | Full rendered patent |
| Glass coordinates/spectral limitations | evidence.glassEvidence; sourceModel.glassResiduals | Authoritative preserved catalog cells/AGF records |
| Product specs/timing/correlation | evidence.productCorrelation.manufacturerClaims; fact F08 | Preserved primary Canon sources |

Manual prose review checked the distinctions between marketed versus design quantities, seven optical assemblies versus three functional groups, standalone versus cemented powers, published versus derived values, and source assertion versus inference. No analysis.md or metadata strings for a production data file exist yet.

## Independent review

Stage 1 source author made a fresh extraction and independent numerical formulations. This is not a Stage 4 independent audit. No prior Canon optical model or prior derived focus values were used. Manufacturer/catalog helpers were source-only; no parallel lens authors. The coordinator must check this frozen handoff before authorizing Stage 2. No independentPass baseline is fabricated.

## Gate disposition

Author Stage 1 gate: READY_FOR_DATA, limited to sufficient primary-source extraction, established literal monochromatic conventions and a reproducible infinity first-order model. The raw summary comparison FAIL is preserved with a separately supported precision disposition. There is no essential unresolved infinity-prescription ambiguity.

Stage 2 tasks: aperture/SD inference and exact clipping; if requested, independently solved mechanism-constrained finite focus with stated reference and stop variant; final source-index labels; actual buildLens/validator/render checks on the eventual data bytes. Repository-only typecheck/browser/build checks remain NOT_RUN with integration requirements. No data.ts, analysis.md or Stage 4 work is authorized in this handoff.

## Pending integration and reproducibility

Integration status: INTEGRATION_PENDING (closed 2026-10-12: deployed to `src/lens-data/canon/`). Canonical numerical replay requires Python 3 standard library only. It reads the extracted evidence/verifier/originals, writes outside the dossier and does not read stored results as calculation inputs. The catalog support verifier is also read-only Python standard library. PDF re-rendering additionally requires the recorded PyMuPDF/MuPDF pair, but that is not a hidden numerical replay dependency.

Exact archive membership, byte hashes, UTF-8/JSON validity, ZIP CRC, safe extraction and clean replay are checked in the external package receipt. Numerical replay comparisons exclude only environment/run-time metadata and otherwise compare the complete output. Manifest/archive hashes are external to avoid circular hashing.


---

# Lens Patent — Canon EF85mm f/1.8 USM — Independent Pass A

## Job and controlling references

The original card fixes JPH05157964A, Numerical Example 1, Canon EF85mm f/1.8 USM, and output stem `CanonEF85mmf18USM`. The original PDF and card are included without byte changes. Shared CHAT-1.0 protocol/dossier/Stage 4 instructions and the supplied LensVisualizer references at commit `d8b406ce112931ab0b2988b87acbd13b0b663c7e` govern this checkpoint. Their exact hashes and the complete source-support archive are identified in the manifest. This is cloud-only source research, not repository integration.

## Exposure and independence

This reviewer began at 2026-10-11 11:41:06 UTC. Before this checkpoint, only the explicitly isolated `independent_review_inputs` and shared workflow documents were read as task sources. The reviewer was told the job identity, current reference pin, the authorized derived 850 mm object-to-image endpoint, and general cautions about estimated distance labels versus actual tracking-focus behavior. No candidate numeric prescription, author glass choices, earlier optical results, author audit, candidate analysis, or prior lens conversations were read. Names of withheld directories did not supply inputs.

The original patent was freshly rendered with Poppler. Selected prescription rows, conditions, mechanical text, and bibliographic data were manually re-entered from pages 1–5 and Figure 4 on page 7. A source-only catalog helper parsed the raw catalog bytes independently under the same boundary, receiving only the freshly transcribed n/ν pairs. The main optical verifier was written afresh for this review. Scalar reduced-angle stepping, separately constructed 2×2 matrices, and an exact meridional Snell trace are different numerical paths. The digest freezes artifacts; it cannot prove independence by itself.

## Extraction and conventions

The source gives 17 numbered entries: 16 refracting spherical surfaces and R9, the stop. Nine glass elements form seven air-separated components and three functional groups. G1 is R1–R8 (E1–E4); G2 is R10–R12 (cemented E5/E6); G3 is R13–R17 (cemented E7/E8 plus E9). The complete literal prescription, including trailing zeros, blank fields, variable-spacing symbols, and signed R13 = −9058.59 mm, is preserved in evidence.

Lengths are interpreted in millimeters, consistent with the stated 85 mm design. Light advances toward increasing z; positive radii have imageward centers of curvature. The native N/ν table does not print a wavelength subscript. Figure 4 labels d- and g-line aberrations, and the catalog-coordinate pattern supports the conventional d-line interpretation. This inference is disclosed rather than represented as a verbatim wavelength declaration. Air is modeled as n = 1. No scale transform, asphere conversion, plate omission, or dummy-plane combination is applied. No physical semi-diameter or stop radius is published. R17's missing following distance is not zero; the image gap is derived from infinity focus.

The source first-page metadata gives applicant キヤノン株式会社 (Canon Inc.), inventor 遠藤 宏志, application 特願平3-349692, filing 1991-12-06, and publication 1993-06-25. A Latin-script inventor spelling has not been inferred from the Japanese name.

## Fresh numerical baseline

All quantities below are calculated from the untouched source table; see `results.sourceModel`.

| Quantity | Independent result | Reference |
|---|---:|---|
| Infinity EFL | 84.9976730568 mm | Principal-plane focal length in air |
| Infinity BFD | 38.9050921340 mm | R17 vertex to paraxial image |
| Vertex track | 73.5200000000 mm | R1 vertex to R17 vertex |
| Infinity total track | 112.4250921340 mm | R1 vertex to image |
| TL/EFL | 1.3226843523 | Includes BFD |
| BFD/EFL | 0.4577194967 | Same infinity state |
| G1 / G2 / G3 EFL | +82.2112118901 / −59.5213011756 / +53.8734949447 mm | Isolated functional groups in air |
| G1+G2 EFL | +354.1193028807 mm | Actual infinity separation |
| E7/E8 cemented net EFL | +527.2575513468 mm | Weak positive doublet |
| Petzval sum | +0.00214355103614 mm⁻¹ | Sum of φ/(n·n′) over every refracting surface |

“Medium telephoto” may describe the production focal-length class and patent title. A compact telephoto claim under TL/EFL < 1 is unsupported at the identified planes. The system is also not retrofocus under BFD > EFL.

Standalone element EFLs are +199.0171, +135.7942, +54.5670, −40.8960, +134.2826, −41.4971, −51.7319, +47.6996, and +59.8839 mm in E1–E9 order. These hypothetical air-isolated powers must not be confused with cemented net power or in-situ contributions. The first member of negative G2 is itself a positive meniscus; the compound G2 is negative.

The inferred paraxial physical stop radius is 14.5936227493 mm, calibrated through G1 from computed EFL and the source's f/1.8. The associated paraxial entrance-pupil radius is 23.6104647380 mm, at z = +35.4643492474 mm from R1. This f-number agreement is calibration, not independent evidence of a published diaphragm dimension. The exact ray launched at that paraxial entrance radius reaches the stop at 14.9950523566 mm, exposing pupil aberration and the distinction between paraxial and finite-ray aperture conventions. The exact trace is diagnostic and has no candidate rims to test yet.

## Conditions and retained discrepancy

The independently recomputed ratios are:

1. f12/f = 4.1662234994; 2.2 < ratio < 4.5 passes.
2. |f2|/f = 0.7002697725; 0.55 < ratio < 0.85 passes; Table 1's 0.70 agrees at its precision.
3. f3/|f2| = 0.9051128568; 0.75 < ratio < 1.15 passes; Table 1's 0.91 agrees at its precision.

Table 1 prints 4.18 for the first ratio. A strict half-last-place comparison fails: 4.1662234994 does not round to 4.18. That failed observation is retained in results.comparisons and the initial failed diagnostic is preserved in the diagnostic record. It is not replaced with a false PASS.

A separately labeled source-precision diagnostic uses D6 = 0.1555 mm, inside the rounding cell of the printed 0.16 mm, solely as a sensitivity witness. It gives f12/f = 4.1755728258 and EFL = 84.9969134524 mm, both compatible with the independent printed summary precisions. This does not establish the unpublished design values. It supports preserving the source table intact and explaining the nominal summary discrepancy as compatible with source rounding. The baseline and any production candidate must retain D6 = 0.16 mm. No source correction is authorized or applied.

## Approved near-focus reconstruction

Paragraph 0009 moves G2 imageward from infinity to close objects. The Example 1 table fixes D8 and marks D9 and D12 variable, so this baseline preserves a fixed table stop, G1, G3, and image plane:

- D9 = 3.59 + x mm
- D12 = 16.3 − x mm
- D9 + D12 = 19.89 mm
- All group-internal thicknesses, radii, indices and element shapes stay fixed

Paragraph 0022 permits a fixed stop and recommends moving-stop alternatives. Those alternatives are not silently substituted for the explicit Example 1 spacing designations. The figure's bracket/arrow is not used to override the numerical table.

The only approved derived state is the marketed 850 mm object-to-image endpoint. With the fixed image at the source-derived infinity BFD, object-to-first-vertex distance is 737.5749078660 mm. Fresh sequential bisection and a separately evaluated ABCD conjugate yield:

- Imageward G2 displacement: 11.1905626041 mm
- D9: 14.7805626041 mm
- D12: 5.1094373959 mm
- Signed paraxial magnification: −0.1270055436
- Finite image gap: 38.9050921340 mm, equal to the fixed image gap within numerical tolerance
- Current-configuration EFL: 87.1762433333 mm

The focus residual is quadratic in x. Its real roots are approximately 11.19056 and 241.93509 mm; only the first lies in the physical 0 ≤ x < 16.3 mm positive-gap interval. Its derivative does not reverse sign there, supporting uniqueness of the physical solution. The source's Figure 4(B) describes a 0.8 m object state but provides no matching spacing prescription or explicit distance reference; it is not reconstructed in this task. No additional keyframe or cam law is authored. The derived endpoint must not be labeled source-published or certified through `finiteConjugates`/`publishedStations`.

The `sourceOpticsAtNear.bfdMm` value is the infinite-conjugate BFD of the moved optical configuration, not the finite image gap. Its `totalTrackMm` likewise refers to its infinite-conjugate focal plane. The actual modeled finite image remains fixed; `fixedFirstVertexToImageMm` identifies that plane.

## Glass-coordinate review

All six supplier catalogs were scanned afresh from raw authoritative files: OHARA, HOYA, Schott, HIKARI, CDGM and Sumita. The separate compact catalog evidence contains source hashes, native worksheet/cell or AGF-line locators, literal excerpts, spectral convention support, candidate residuals, and the complete seven-coordinate matching results. The raw sources are in the separately identified source-support archive. The catalog parser's clean replay and actual Python/dependency versions are retained.

Matches use explicit rounding-interval compatibility as a precision screen, not the runtime resolver's much wider acceptance window and not proof of supplier identity. Broad near alternatives are retained separately. Modern prefixes are not erased: E6's historical unprefixed OHARA BSL7/BSL7Y matches are distinct from S-BSL 7 and L-BSL 7. The former BSL7 is explicitly discontinued. E3's historical LAL8 differs from modern S-LAL 8. Several coordinate groups have competing cross-vendor matches. No production glass label or spectral proxy is selected in this source-only pass.

Available catalog nC/nF/ng/PgF values are captured as catalog evidence. Blank source cells stay blank. Native dPgF is not assumed to use the project's normal line, and historical AGF-only matches do not acquire invented tabulated C/F/g indices. APO or special-dispersion performance is not inferred from these coordinate matches.

## Product correlation

Canon's museum and support sources establish the marketed 85 mm f/1.8 lens: July 1992 release, 9 elements in 7 groups, 0.85 m minimum focus, 0.13× maximum magnification, 8 blades, f/22 minimum aperture, 58 mm filter, 75 × 71.5 mm maximum diameter/length, and 425 g mass. The manufacturer calls its mechanism rear focusing with USM; the patent specifies internal G2 movement. The 2018 Canon catalog identifies ring-type USM. Canon's optical block diagram supports broad structural comparison but not exact radii or cam travel. The job-card correlation is selected, not manufacturer-confirmed.

## Quantitative claim map

- Prescription/metadata/conditions: evidence.rawPrescription, rendered original PDF pp1–5 and p7.
- EFL/BFD/track/cardinal planes/pupils: results.sourceModel.infinity, recalculated by two methods.
- Group powers and f12: results.sourceModel.functionalGroups and G1G2combined.
- Isolated element powers: results.sourceModel.elements; separate thick-lens and ABCD comparison.
- Petzval: results.sourceModel.petzval.surfaces and sumPerMm.
- Near travel, uniqueness, gaps, magnification and image plane: results.sourceModel.derivedNear.
- Strict source comparisons and discrepancy treatment: results.comparisons and sourceModel.condition1RoundingSensitivity.
- Catalog coordinates/spectral excerpts: catalog_evidence.json; independent residual checks in results.sourceModel.glassCoordinates.
- Manufacturer quantities: unmodified Canon source bytes in source support, source URL/hash list in evidence.

## Checks, limitations and disposition

The source baseline passes its numerical, analytical fixture, method agreement, original-byte, card/structure, finite-root, and catalog-excerpt consistency checks. An intentionally sign-flipped R8 produces a failed source-EFL diagnostic. Full raw-catalog replay and clean-extracted optical replay are verified separately from source truth.

No candidate was available within the source-only boundary. Candidate reconciliation, authored semi-diameter geometry, exact containment with those rims, schema/type checks, actual buildLens/validateLensData, production render-trim, runtime glass resolution, actual tracking-focus launches, and candidate analysis consistency remain unperformed. No portable calculation is labeled a production-engine test. Full integration/build/corpus gates remain integration work and are not run here.

**Disposition: Pass A independent source baseline complete; candidate release required. No READY_FOR_BATCH claim. Integration status: INTEGRATION_PENDING (closed 2026-10-12).**


---

# Stage 4 final reconciliation and earned gate

This section is the current disposition. Earlier construction, diagnostic and Pass A sections above are retained historical evidence; their then-pending states are not the final gate.

## Release and candidate identity

The coordinator released the candidate at 2026-10-11 12:00:49 UTC after verifying and preserving Pass A. Its Stage 3 archive SHA-256 is `b004248b99fd36edd59272ea9548dd232fb388b37afe581d235f0a16c7b5753a`. The unchanged data SHA-256 is `cb629c1d9af94ffa3437378c2b35a58fda95b56c6c5f6276a2c62976b6ec9903`; unchanged analysis SHA-256 is `c6d1542afa902b1cccf2b0986e48a118697687bc3ffd90a13ec243d42a33a328`. Every candidate archive member and manifest hash was checked before reconciliation.

The independent pre-release fingerprint remains `8c78b6c363937e9468968a6fe72b15ebe0d59665ea05f7d92e938e839b61fa70`. Its exact inputs, code, results, exposure record, manifest and failed diagnostics remain immutable in the standalone baseline and extracted Stage 4 support. The final evidence contains its original evidence unchanged; the consolidated verifier embeds and executes the exact original independent source code, checks its hash, and independently recomputes the candidate using those methods. Stage 2/3 author checks are retained and rerun, explicitly distinct from this review.

## Four-way reconciliation

- Raw patent, frozen baseline, actual final data and analysis agree on every radius, native spacing, N/ν value, element count, surface order, cemented ownership, group mechanism and source condition. R13 remains −9058.59 mm. No source value was modified.
- The missing source terminal distance remains null in source evidence. The implemented 38.9050921339573 mm gap is the independently derived infinity BFD.
- The baseline paraxial stop diagnostic, 14.5936227493 mm, is not the adopted physical iris. The baseline independently found the exact stop height 14.9950523566 mm for the nominal entrance ray. Current pinned `runtimeLens.ts` explicitly uses that exact calibration and overrides ordinary authored stop SD accordingly; the candidate intentionally stores the same value. This is a justified, disclosed modeling convention, not a recovered diaphragm dimension or independent proof of f/1.8.
- The frozen baseline considered d-line interpretation supported by the d/g figure and coordinate pattern. The candidate retains stronger uncertainty because the table itself omits an explicit reference. The current project contract supports its Unmatched/indexReferenceNote treatment. That conservative choice remains unchanged; none of the conditional catalog candidates supplies invented production spectra.
- G2-only travel, complementary gap changes and the fixed source-derived image agree with the independent 850 mm solution within numerical rounding. There are no extra authored finite states, cam law or source-certified finiteConjugates.
- The strict nominal f12/f comparison remains a FAIL observation. Both authors' and fresh review calculations support only a separate rounding-compatible disposition; no transcription change or exact summary reproduction is claimed.
- The Romanized inventor name Hiroshi Endo was independently checked against the same-publication bibliographic record during Pass B. The primary PDF remains the prescription authority. The literal Japanese positive/positive spherical-aberration wording in paragraph 0011 remains disclosed as a textual inconsistency.

No correction to the data or analysis was needed. The inherited author-only “no Stage 4 in author context” guard becomes inapplicable in this separate fresh reviewer; its original Stage 3 PASS and the initial final-verifier scope diagnostic are retained. Source, geometry and runtime gates are not waived. Only the dossier's independent evidence, code, results, audit and manifest were extended. No inherited byte approval is transferred to a modified optical pair.

## Fresh bounded actual-project execution

Before execution, all 175 public source blobs in the reusable runtime closure were checked anew against SHA-256, Git blob SHA-1, size and the pinned Git tree at `d8b406ce112931ab0b2988b87acbd13b0b663c7e`. Actual targeted entry points and their imported dependencies were executed with Node v24.19.0 using TypeScript transformation. Verifying 175 blobs does not claim that every module was exercised.

The fresh harness executes actual `buildLens`, `validateLensData`, default merging, prepared states, geometry, chief solving, exact vector surface tracing, `conjugateK2`, `traceRay2`, glass resolution, production element shapes and render diagnostics. It does not run the author's scripts to establish independent validation. Original author execution and portable replay are separately retained for continuity.

Results from the independent harness:

- 41 focus samples: only R10–R12 move; G1/stop/G3/image stay fixed.
- Positive shared-rim element thickness, with minimum approximately 0.813832 mm; full unequal-rim rotational solids are nonnegative including zero-thickness rim endpoints.
- Maximum actual rim slope approximately 47.914299°; spherical domains pass.
- Maximum shared-band intrusion fraction approximately 0.701142, below the default 0.90. No gap-sag override is needed.
- Minimum full rotational neighboring-assembly clearance approximately 0.047817 mm, including the straight connections between unequal rims.
- Actual production render diagnostics show zero hidden trim at all 41 states, below the 0.25 mm material-trim policy threshold.
- 11,616 finite-rim pupil samples across eight existing-motion samples, four fields (including independently solved full-frame corners), and three apertures produce no intersection failure, fallback, invalid residual, first clipping at shared R11/R14, or completed-glass-segment escape. Ordinary external-surface/stop vignetting is preserved.
- Material containment is tested on every completed glass segment, including segments of rays later clipped elsewhere, rather than only fully transmitted rays.
- The full axial physical iris passes 65 spokes/radii per focus state, including near-rim probes.
- The deliberately impossible R5 SD mutation is rejected by the actual validator.
- All nine explicit Unmatched labels resolve to no catalog glass as intended; no unsupported spectral import occurs.

The actual rendered SVG outlines for infinity, the midpoint and the derived near endpoint were rasterized and visually compared with the original patent and manufacturer section. The source drawings are qualitative, not numerical aperture measurements. The R7/R8, R10/R11 and R13/R14 unequal rims are disclosed modeling choices. In particular, R10 = 15.0 mm is an inferred air-facing aperture that prevents a ray first being clipped at a cemented interface; it still passes the full stated native axial beam and sampled finite physical iris. The scope does not establish production vignetting or illumination.

## Tracking focus, labels and finite conjugates

The actual public runtime computes a focus-curvature correction from exact-ray sensitivity relative to infinity. It does not simply launch from the inverse-distance label. The fresh ghost-disabled run reproduces the unchanged analysis's approximately 1488.011 mm adaptive object-to-image distance at the midpoint and 849.820 mm at the derived near endpoint. The respective sampled axial fan widths are 0.048817 mm and 0.080605 mm; the small-ray axial shifts are +0.001346 mm and +0.002898 mm. These remain sampled ray ranges, not RMS spots or MTF.

The independent parsed-model recomputation separately checks 100 nonzero existing interpolation samples and reproduces the approximately 0.774688 mm maximum Gaussian mismatch at estimated labels. That observation is not a universal failure gate for a different adaptive ray launch. It remains fully disclosed. No image plane, source prescription, nominal focus law or added keyframe was changed to suppress it.

## Claim verification and manual review

The inherited quantitative claim map remains valid because the pair bytes did not change. The consolidated verifier rechecks every Stage 3 numerical token and every quoted standalone element power. Independent source/candidate comparisons cover EFL, BFD, vertex/image tracks, cardinal planes, group/cemented powers, per-surface Petzval, pupils and exact iris calibration, near-focus solution and uniqueness, source conditions and all shared reference planes. Additional runtime claim-to-result mappings are in `results.independentReconciliation.runtimeAnalysisClaims`.

Manual review covered all required analysis sections, source bibliographic facts, the selected-but-unconfirmed production correlation, third-person interpretive prose, source paragraph explanations, the incomplete spectral authority, inference labels, the separate source-angle/full-frame-corner distinction, manufacturer feature references, and the preserved source-summary/textual discrepancies. Google Patents was consulted for the same-publication Romanization only. Canon's 2018 catalog product block directly supports ring-type USM and full-time manual operation.

## Reproduction, gates and limitations

The final <=14-file canonical dossier contains the original sources and unchanged pair, one consolidated evidence/verifier/results/audit/manifest set, the earlier data-bound execution receipt, the independent execution receipt, and the compact fresh catalog evidence. Runtime harnesses, source-closure verification, frozen baseline, original candidate history and additional retained diagnostics are in the separately identified Stage 4 support archive. Raw catalog/manufacturer/project sources use the identified shared support archives; complete archive/member hashes and replay instructions are in the manifest and support README.

The existing private `stage1_catalog_support` file is an exact-byte alias of local `CanonEF85mmf18USM_stage2_catalog_support.zip` (SHA-256 `d9922262a6421b91a06e25255f6ec862158d8fb1a360888ccdf15f90aaac9f3d`); it may satisfy that shared dependency without another upload. No external delivery, index update, repository edit, integration, commit or publication was performed by this reviewer.

The portable verifier's default Python run recomputes source/model/analysis checks and verifies exact-data-bound runtime receipts. Actual Node execution requires the declared source closure and documented independent harness; it is rerun from a clean source-support extraction before final handoff. Runtime checking is not a real TypeScript compiler invocation. Prettier, full project typecheck, browser acceptance, corpus-wide policy/test sweeps and production build remain NOT_RUN at integration scope. Sampling is bounded evidence, not proof over every possible ray in a continuum.

Final package approval requires exact inventory and member hashes, unmodified originals, fresh canonical numerical replay outside the package, and stable-output comparison. The final receipt records those completed checks. All mandatory source/model/geometry/glass/analysis/source-first and bounded actual-runtime requirements pass, with the observed printed-summary mismatch retained and defensibly disclosed.

**READY_FOR_BATCH — INTEGRATION_PENDING.** Optical work stops after the verified final handoff. (Closed 2026-10-12: deployed to `src/lens-data/canon/`; see the section below.)

## 2026-10-12 — Deployment validation and wording pass

Source re-read. JP H05-157964 A was read again from `patents/JPH05157964A.pdf`, with pages 3–4 rendered at 220 dpi. For Example 1, 16 radii plus the stop, 16 thicknesses and gaps, and nine N/ν pairs were compared with the data file: no mismatches. The example has no aspherical surface. The patent prints only the infinity values of the two variable gaps (D9 = 3.59, D12 = 16.3, blank after the tilde) and no close-focus gaps, back focus, magnification or image height. Front page: 特開平5-157964, published 25 June 1993, application 特願平3-349692 filed 6 December 1991, applicant Canon Inc., inventor Hiroshi Endo (遠藤宏志). The data file's patent fields agree.

First-order values, patent / model. Focal length 85.0 / 84.998 mm. F-number 1.8 / 1.80. The 14.3° chief ray lands at 21.38 mm with −1.33 % distortion, against about −1.2 % in Fig. 4(A). Back focus and total length are not printed; the model gives 38.905 mm and 112.425 mm. Conditions: f12/f 4.18 / 4.166, |f2|/f 0.70 / 0.700, f3/|f2| 0.91 / 0.905. Axial spherical aberration at infinity is −0.035 mm at the margin and −0.056 mm at the 0.85 zone.

Close focus. An independent paraxial solve for 850 mm object-to-image distance gives a G2 shift of 11.190563 mm (D9 14.780563, D12 5.109437), magnification −0.1270 against Canon's published 0.13×, and an image on the fixed plane to better than 1e-12 mm. A real f/1.8 marginal ray crosses the axis 0.215 mm short of that plane, and the rim clearance between R12 and R13 is 1.63 mm. As a cross-check of the mechanism, the same G2-only, fixed-stop motion solved for 0.8 m gives d-line spherical aberration of −0.19 to −0.24 mm and distortion of +1.9 to +2.6 % (the range covers measuring 0.8 m from the first vertex or from the image plane), against about −0.22 mm and +2.1 % read from Fig. 4(B). A stop travelling with G2 would give about −0.05 mm at full aperture, which does not match the plot.

Repo checks on the deployed file. The surface audit reports no errors, the image-circle audit reports no undersized circle, and field coverage is 100 % (14.5° reaches 21.65 mm). A real-ray clearance trace at 21.63 mm image height shows no clipped axial beam and no blocked chief ray at infinity or at 0.85 m. The meridional fan at the corner is 41 % of the axial width at f/1.8.

Maker diagram. Canon Camera Museum lists the EF85mm f/1.8 USM as marketed July 1992 with 9 elements in 7 groups, 0.85 m closest focus, 0.13× magnification, f/22 minimum aperture and a 58 mm filter. Its construction diagram shows four singlets, the stop, a cemented doublet, a thick cemented doublet and a biconvex rear element, which is the layout of patent Fig. 1. The thick rear doublet fits Example 1 (D14 = 12.40) better than Examples 2 and 3 (D14 = 7.00). The correlation is strong but not manufacturer-confirmed.

Fields changed in this pass. No R, d, nd, νd, semi-diameter or variable-gap value changed. EFL 84.99767305681792, stop radius 14.995052356556943, half-field and both focus states are identical before and after, and the surface audit still reports no errors.

- Glass. Fig. 4 plots the d and g lines and every printed index equals a catalog d-line index to five decimals, so the per-element `indexReferenceNote` was removed and eight `Unmatched` labels were replaced by catalog names in the form `<name> (coordinate equivalent; supplier unconfirmed)`. Where several catalogs carry the pair, the smallest residual was taken. Resolved labels, with catalog nd / νd and the νd residual: L1 N-LAK7 (SCHOTT, 1.65160 / 58.52, +0.02); L2 and L9 S-LAH66 (OHARA, 1.772499 / 49.60, −0.00); L3 N-LAK8 (SCHOTT, 1.71300 / 53.83, +0.03); L4 SF1 (SCHOTT, 1.71736 / 29.51, +0.01); L5 and L7 S-TIH6 (OHARA, 1.805181 / 25.43, +0.03); L8 H-ZLaF52A (CDGM, 1.80610 / 41.02, +0.02). These eight elements now trace on catalog dispersion formulas instead of the Abbe-number estimate. L6 (1.51633 / 64.2) stays `Unmatched`: S-BSL7 has the index but νd 64.14, which is at the 0.06 tolerance and is flagged by the residual check. This supersedes the earlier statements in this log that all nine elements are Unmatched and carry an index-reference note.
- Data file text. `subtitle` rewritten, `specs` added (9 elements / 7 groups, design f = 85.0 mm, design F/1.8, all spherical), `focusDescription` and the header comment rewritten in plain terms.
- Analysis. Glass lines, the glass table and the spectral-reference statements were updated to match the data file; process wording was removed from the focus and limitations sections; the limitations heading was renamed.

Closed the same day: L6 is labelled S-BSL7 (1.51633 / 64.14). Its νd is 0.06 below the one-decimal printed 64.2, inside the catalog's 0.15 compatibility tolerance; 0.06 was the residual check's flag level, not a catalog rule. All nine elements now trace on catalog dispersion formulas.

Closed 2026-10-12 (see "Glass labels: OHARA period set" below): L8 is labelled LAH53, the historical OHARA glass OHARA lists under code 806410.

Open: whether the production lens moves its stop with the focus group is not established; the model follows the patent table's fixed stop.

## 2026-10-12 — Semi-diameter pass against the patent figure

Source and figure. `patents/JPH05157964A.pdf`, page 5, Fig. 1 (the lens section of Numerical Example 1, the example this file models), with the front-page copy of the same drawing on page 1 as a second, independently scanned reading. Both are 200 ppi bilevel rasters and were measured on 400 dpi renders. The drawing shows the infinity state only. Its axis runs horizontally and is tilted about 0.5° on both scans, so every height below is half the distance between an element's upper and lower rim lines, taken at the line centres.

Scale. Vertex crossings were read in a strip 20–40 px off the axis. On page 5, R1 sits at x = 476.5 px and R17 at 1371.5 px: 895 px for the 73.52 mm vertex track, 12.17 px/mm. The spans R1–R8, R8–R13 and R13–R17 give 12.25, 12.26 and 11.95 px/mm, and 12.2 px/mm (0.082 mm/px) was used. On page 1, R1 sits at 1865.5 px and R17 at 2784.5 px: 919 px, 12.50 px/mm, with the same three spans at 12.59, 12.57 and 12.30; 12.5 px/mm (0.080 mm/px) was used. Every drawn vertex lies within about 3 px of the prescription. The vertical scale was checked on two arcs: 57 px behind its vertex the R8 arc has a half-chord of 183.5 px against 183.4 px for R = 26.41 mm, and 28.5 px behind its vertex the R14 arc reads 168.2 px against 168.2 px for R = 41.85 mm. The stop ticks end 14.8 and 14.9 mm from the axis, against the model's 14.995 mm. Fig. 1 is therefore a scaled drawing, not a schematic; its line weight is 5–6 px (about 0.45 mm), and the two scans agree to 0.13 mm or better on every element, so a reading is good to about ±0.2 mm. This supersedes the earlier statements in this log that the figure is qualitative and gives no dimensions.

Before and after. Heights in mm; "figure" is page 5 / page 1.

| Surfaces | Before | Figure | Figure ÷ before | After | Evidence |
|---|---:|---:|---:|---:|---|
| R1, R2 (L1) | 25.5 | 26.84 / 26.86 | 1.053 | 26.9 | Figure height; restores the drawn step above L2 |
| R3, R4 (L2) | 24.8 | 24.02 / 24.12 | 0.971 | 24.1 | Figure height |
| R5, R6 (L3) | 22.4 | 21.25 / 21.20 | 0.948 | 21.2 | Figure height, supported by the drawn edge thickness; axial-ray floor 20.728 |
| R7 (L4 front) | 20.4 | 20.27 / 20.28 | 0.994 | 20.4 | Retained; this is the height of the drawn L4 cylinder |
| R8 (L4 rear) | 19.6 | 16.11 / 15.98 | 0.819 | 16.1 | Figure: the concave arc ends here and a flat annulus continues to the cylinder; axial-ray floor 16.002 |
| R10 (L5 front) | 15.0 | 14.65 / 14.64 | 0.977 | 15.0 | Retained |
| R11, R12 (L5–L6 junction, L6 rear) | 15.5 | 14.65 / 14.64 | 0.945 | 15.0 | Figure draws the doublet square-cut; brought to R10's height |
| R13 (L7 front) | 15.0 | 15.04 / 14.98 | 1.001 | 15.0 | Retained |
| R14, R15 (L7–L8 junction, L8 rear) | 17 | 17.62 / 17.62 | 1.036 | 17 | Retained |
| R16, R17 (L9) | 17.5 | 19.02 / 19.04 | 1.087 | 19.0 | Figure height, supported by the drawn edge thickness |

Reasons for the changes.

- L1, L2 and L3. Each stored height was within 6 % of the figure, but the errors ran in opposite directions and flattened the drawn profile: the figure steps down 2.8 mm from L1 to L2, 2.85 mm from L2 to L3 and 0.9 mm from L3 to the L4 cylinder, where the stored values gave 0.7, 2.4 and 2.0 mm. Because the two scans agree to 0.13 mm, those differences are real, and the three elements take the figure's heights; the steps are now 2.8, 2.9 and 0.8 mm. All three stay square-cut. Edge thickness goes from 1.88 to 1.59 mm on L1, 1.54 to 1.72 mm on L2 and 0.81 to 1.71 mm on L3, whose drawn edge is about 1.5 mm. No value had to be moved off the figure reading: the surface audit accepts the set with the default gap limit, and the tightest ray margin is L3's 0.47 mm over the axial ray on R5.
- R8. The figure ends L4's concave face 16.0–16.1 mm from the axis, which is the height the f/1.8 marginal ray reaches there (16.002 mm), and continues the element as a flat annulus out to the 20.3 mm cylinder. The stored 19.6 mm carried the curve 3.5 mm higher and brought the rim to 0.11 mm from the stop plane; the figure leaves about 3.0 mm between the L4 rim and the stop, and the model now leaves 3.35 mm. R7 keeps 20.4 mm because the figure draws the front face to the full cylinder height. The model cannot draw the annulus: it joins the R7 rim (20.4 mm, 18.46 mm behind R1) to the R8 rim (16.1 mm, 26.38 mm behind R1) with a straight edge.
- R11 and R12. The figure draws the moving doublet with one rim height on all three surfaces. The stored values stepped L5 from 15.0 to 15.5 mm so that no ray first met a rim at the cemented interface; that step is not in the drawing. Both surfaces drop 0.5 mm to R10's value, which is also nearer the figure's 14.65 mm. This supersedes the earlier sections that describe the 15.0 / 15.5 mm step.
- R16 and R17. L9 is drawn 19.0 mm high on both scans, 1.4 mm above L8, with a flat edge about 12 px (1.0 mm) wide. At 17.5 mm the model's edge was 2.01 mm thick and L9 stood 0.5 mm above L8; at 19.0 mm the edge is 1.40 mm. The departure (8.7 %) is the smallest that was acted on, and the edge thickness is what decided it.

Values retained. R7, R10, R13 and L8 are within 4 % of the figure and were left alone. The R13/R14 step (15.0 / 17) stays: the figure draws L7 square-cut at 15.0 mm with L8 stepping out to 17.6 mm at the junction, the shared surface can carry only one height, and giving it L8's keeps the larger element square.

Clearance, as traced on the edited file. At infinity the f/1.8 axial marginal ray (entrance-pupil radius 23.610 mm, stop height 14.995 mm) reaches 23.611, 23.497, 22.882, 22.426, 20.728, 19.786, 19.739 and 16.002 mm on R1–R8 and 14.233, 14.097, 13.128, 12.372, 12.258, 11.948, 11.845 and 11.395 mm on R10–R17; every rim is above it, the tightest being R8 with 0.098 mm, and the front group clears it by 3.29 mm on R1, 1.22 mm on R3 and 0.47 mm on R5. At 0.85 m (object 737.57 mm ahead of R1, ray through the stop edge) the axial heights are lower on every surface: 15.856 mm on R8 and 11.552 mm on R10. The chief ray to a 21.6 mm image height is at 14.45° at infinity (the patent's 14.3° lands at 21.38 mm) and comes from a 166.3 mm object height at 0.85 m; its largest heights are 16.04 mm on R17, 14.66 mm on R15 and 10.96 mm on R13 at infinity and 13.90, 12.58 and 8.81 mm at 0.85 m, so no rim blocks it. The repo's surface audit reports no errors with the default gap limit, the image-circle audit reports none undersized, field coverage is 100 % (14.5° reaches 21.65 mm), and the aperture census finds no rim below the stated on-axis ray.

Vignetting and field. The share of the stop diameter that the meridional fan fills at 21.6 mm image height goes from 37.6 % to 44.6 % at infinity and from 57.8 % to 65.3 % at 0.85 m. L9 accounts for the rise to 41.8 % and 63.3 %, moving the upper edge from R17 to R15; the front group accounts for the rest, the taller L1 passing more of the lower fan until the smaller L2 (R3) stops it where R1 did before. At 18 mm the share goes from 56.6 % to 61.2 % at infinity and from 75.2 % to 79.6 % at 0.85 m, and at 12 mm from 82.4 % to 83.4 % and from 97.0 % to 97.3 %. The smaller L3 costs 0.3 % at 6 mm at infinity (98.8 % to 98.5 %, R5 the lower limit). The R11/R12 and R8 edits change the fan by 0.3 % or less at every image height tried (3 to 21.6 mm, both focus states). The engine's half-field estimate rises from 15.18° to 15.92°, with R15 now the first limit at 18.0° where R17 was at 17.4°. Focal length (84.9977 mm), the stop radius (14.995052 mm) and the f/1.8 opening are unchanged. The L4 rim now stands 3.35 mm ahead of the stop (0.11 mm before), and at 0.85 m the R12 rim is 1.86 mm ahead of R13 (1.63 mm before).

Render check. The local page was captured at infinity and 0.85 m before the edit and at infinity, mid travel and 0.85 m after it, and compared with Fig. 1. The front group now steps down from L1 through L2 to L3 as drawn, with L3 showing a flat edge just above the L4 cylinder; the L4 horns that reached the stop are gone, G2 is a square-cut doublet, and L9 stands above L8 as drawn. All three on-axis rays per side still pass at both ends of the focus travel.

Maker diagram. No manufacturer image was viewed in this pass. The deployment section above records that Canon's construction diagram shows four singlets, the stop, a cemented doublet, a thick cemented doublet and a biconvex rear element, with 9 elements in 7 groups, which is the count and grouping of Fig. 1; it records no aspherical or special-glass element.

Analysis. The semi-diameter paragraph in the limitations section was rewritten to describe the figure-based values. No aspherical surface exists, so no departure figures were affected.

Open limitations.

- L4 is drawn with a straight bevel between unequal rims where the figure has a cylinder and a flat annulus.
- L7 is drawn tapering up to L8's height where the figure has a square plate and a step.
- The patent has no close-focus panel, so the 0.85 m state was checked for clearance only.

## 2026-10-12 — Second review: diagram, labels and movement

What was compared. The local lens page (infinity, mid travel and 0.85 m, the focus-movement overlay at both ends, and the inspector of all nine elements) against `patents/JPH05157964A.pdf`: Fig. 1 on page 5 and its second scan on page 1, the text of ¶0008–0014 and ¶0022, the Example 1 table on pages 3–4 and Fig. 4 on page 7. The figure was measured again from scratch with a separate pixel-run script on 400 dpi renders of both scans, and the outlines the page draws were laid over the page-5 figure at a common scale (first vertex and axis aligned, the scan's 0.53° tilt removed).

Scale, measured independently. Page 5: R1 to R17 is 896 px for 73.52 mm, 12.19 px/mm (spans R1–R8, R8–R13 and R13–R17: 12.29, 12.24 and 12.00). Page 1: 919.5 px, 12.51 px/mm. Heights use the same scale: the R8 arc has a half-chord of 150.3 px where R = 26.41 mm predicts 150.0 px, and 183.5 px where it predicts 183.1 px. The first pass's scale and its statement that Fig. 1 is drawn to scale are confirmed.

Semi-diameters: no value changed. Heights in mm, page 5 / page 1.

| Surfaces | Stored | This review | First pass | Stored ÷ figure |
|---|---:|---:|---:|---:|
| R1, R2 (L1) | 26.9 | 26.84 / 26.87 | 26.84 / 26.86 | 1.002 |
| R3, R4 (L2) | 24.1 | 24.02 / 24.12 | 24.02 / 24.12 | 1.001 |
| R5, R6 (L3) | 21.2 | 21.23 / 21.20 | 21.25 / 21.20 | 0.999 |
| R7 (L4 cylinder) | 20.4 | 20.29 / 20.28 | 20.27 / 20.28 | 1.006 |
| R8 (end of the concave arc) | 16.1 | 16.35 / 16.30 | 16.11 / 15.98 | 0.986 |
| R10–R12 (G2 doublet) | 15.0 | 14.72 / 14.63 | 14.65 / 14.64 | 1.022 |
| R13 (L7) | 15.0 | 15.06 / 14.96 | 15.04 / 14.98 | 0.999 |
| R14, R15 (L8) | 17 | 17.62 / 17.60 | 17.62 / 17.62 | 0.965 |
| R16, R17 (L9) | 19.0 | 19.02 / 19.04 | 19.02 / 19.04 | 0.998 |

The two readings of R8 differ by 0.3 mm because the arc runs into the 0.45 mm wide annulus line; this review took the crossing of the two line centres. Either reading is within 0.3 mm of the stored 16.1 mm, which stays 0.098 mm above the f/1.8 axial ray. On the overlay L1, L2, L3, the L4 front face, L9 and the ends of every arc lie on the drawn lines. Three places still differ to the eye, and each was tried before being left:

- L4 has a sloping top where the figure has a square block with a step. Carrying R8 to the block height of 20.4 mm gives the concave face a sag of 9.64 mm, more than the 8.82 mm to the stop plane, so the glass would pass through the diaphragm although the surface audit accepts the value; the figure ends the arc at 16.1–16.4 mm and leaves about 3 mm before the stop. The curve-end value stays.
- L7 tapers from 15.0 mm up to L8's 17 mm where the figure has a square plate and a step. Squaring L7 at 17 mm passes the surface audit but removes the drawn step and raises the engine's meridional wide-open transmission at 4.8° and 7.2° from 96.9 % and 88.5 % to 97.9 % and 91.1 %, so R13 is a real vignetting rim at the drawn height and stays. Lowering the cemented surface to 15.0 mm instead would slope the whole 12 mm of L8.
- L8 is 0.6 mm (3.5 %) lower than drawn on both scans, so L9 stands 2.0 mm above it where the figure has 1.4 mm. The drawn order L7 < L8 < L9 is kept and the difference is inside the tolerance used for this batch; 17.6 mm would raise the same transmission curve at 12.1° and 14.5° from 64.6 % and 47.9 % to 67.7 % and 50.5 %, and a rim is not widened on that evidence.

With no rim changed, the engine values are the same before and after: focal length 84.9977 mm, stop radius 14.995052 mm, f/1.8, half-field estimate 15.92° (R15 the first limit at 18.0°), and the meridional transmission curve 100.0, 99.5, 96.9, 88.5, 78.6, 64.6 and 47.9 % at 0, 2.4, 4.8, 7.2, 9.7, 12.1 and 14.5°. The surface audit reports no errors, the image-circle audit none undersized, field coverage is 100 % (14.5° reaches 21.65 mm), and the clearance trace shows no clipped axial beam and no blocked chief ray at infinity or at 0.85 m. The patent's 14.3° chief ray lands at 21.377 mm.

Changes to labels and text.

| Field | Before | After | Evidence |
|---|---|---|---|
| `diagramLabel`, elements 1–9 | absent; the diagram printed 1 … 9 | L1 … L9, the same strings as `name` | Fig. 1 and ¶0008 use the bare numerals 1, 2 and 3 for the three groups and give the elements no reference signs (¶0010 only counts the first to fourth lens of group 1). The diagram's bare 1, 2, 3 under the first three elements read as the patent's group numbers, while the cemented brackets above them, the focus text beside them and the inspector already said L5–L6 and L7–L8. The row now reads L1 L2 L3 L4, L5 L6, L7 L8 L9 with no collision. |
| `role`, elements 1–9 | absent; the inspector showed type, glass and focal length only | one sentence each | ¶0010–0013: three positive lenses converging the axial beam in stages, L2 and L3 convex to the object, the negative air lens between L3 and L4, the concave rear face of L4 as the spherical-aberration balance, the high-dispersion negative and lower-dispersion positive members of the weakly positive G3 doublet (calculated +527.26 mm), and the rear biconvex lens carrying most of G3's power and offsetting positive distortion. Shapes are stated from the signs of R. |
| `varLabels` | D9 (derived G2), D12 (derived G2) | D9 (STO–G2), D12 (G2–G3) | D9 and D12 are the patent's own names for the two variable gaps (page 3–4 table). Both labels carried the same bracket, which did not say which gap was which, and at infinity it stood beside 3.59 and 16.30, the two values the patent does print. That the 0.85 m values are derived stays in the focus text directly above them. |
| Header comment | — | note on group numerals, SP and the L1–L9 choice | as above |

Checked and found correct.

- Group brackets. G1 (+) covers surfaces 1–8, G2 (-) 10–12 and G3 (+) 13–17: the extents Fig. 1 brackets as 1, 2 and 3, which ¶0008 defines as the positive first, negative second and positive third groups. The figure's upper bracket 2 begins 0.6 mm behind the stop tick, so the stop belongs to no group, as on the page. The page's STO is the patent's SP, drawn between L4 and L5 at table surface 9.
- Cemented brackets. L5-L6 on surfaces 10–12 and L7-L8 on 13–15, one per cemented component, equal to the `cemented` tags and the inspector badges. Neither text can be mistaken for the gap labels D9 and D12.
- Types against the signs of R. L1 +185.36 / −427.66 biconvex; L2 +63.58 / +156.32 and L3 +33.99 / +241.98 positive menisci convex to the object; L4 +278.09 / +26.41 negative meniscus concave to the image; L5 −101.48 / −52.90 positive meniscus concave to the object; L6 −52.90 / +36.36 biconcave; L7 −9058.59 / +41.85 biconcave, nearly plano-concave; L8 +41.85 / −410.77 and L9 +73.06 / −122.05 biconvex. All nine `type` strings and the nine focal lengths (recomputed independently) agree.
- No aspherical surface and no `apd` tag. ¶0013 calls the G3 doublet's glasses high-dispersion and low-dispersion relative to each other (νd 25.4 and 41.0); nothing in the text designates anomalous or extra-low dispersion.
- Front page: 特開平5-157964, published 25 June 1993, applicant Canon Inc., inventor Hiroshi Endo. The data file's patent fields agree.

Movement. ¶0009 moves the second group toward the image from infinity to close focus, and the arrow under Fig. 1 points to the image. In the file both `var` pairs list infinity first: D9 3.59 → 14.7806 and D12 16.3 → 5.1094, sum 19.89 mm in both states, so G2 moves 11.19 mm toward the image and G1, the stop, G3 and the image plane do not move. An independent paraxial solve for 850 mm from object to image gives the same 11.190563 mm and magnification −0.12701. The overlay shows G1 and G3 as single dots at −102.0 and −48.9 mm from the image plane and G2 running from −77.2 mm (open start marker, infinity) to −66.0 mm, maximum travel 11.19 mm; the slider runs from ∞ to 85 cm and reads 1.70 m at mid travel with D9 9.19 and D12 10.70.

The stop. The lower bracket that carries the focus arrow in Fig. 1 starts about 1 mm ahead of the stop tick (0.98 mm on page 5, 1.2 mm on page 1) and so embraces SP together with group 2, and ¶0022 says the stop may be fixed between groups 1 and 2 but is better moved with group 2. The Example 1 table nevertheless holds D8 at 8.82 and makes D9 variable, which is a fixed stop. Recomputed here with an independent exact trace for 0.8 m: with the stop fixed the d-line spherical aberration is −0.19 to −0.24 mm at full aperture and about the same at the 0.85 zone, and distortion is +1.9 to +2.7 % (the ranges cover measuring 0.8 m from the first vertex or from the image plane); with the stop riding on G2 the full-aperture value falls to −0.05 mm while the 0.7 zone stays near −0.2 mm. Fig. 4(B), read on a 300 dpi render, shows the d line at about −0.21 mm at full aperture with no return toward zero, and distortion of about +2.2 %, so the fixed-stop reading of the table is the one the patent's own plot supports. At infinity the same trace gives −0.035 mm at the margin and −0.056 mm at the 0.85 zone.

Analysis. One sentence was added to the architecture paragraph saying which patent numerals G1–G3 and SP stand for and that L1–L9 are sequential. Three statements left over from before L6 was given a catalog name were corrected: the L6 glass line now names OHARA like the other eight, the L6 row of the glass table no longer lists S-BSL7 as its own analog, and the remark that L6 is traced on an Abbe-number estimate was removed (all nine labels resolve to catalog formulas).

Maker diagram. No manufacturer image was viewed. The deployment section above records that Canon's construction diagram shows four singlets, the stop, a cemented doublet, a thick cemented doublet and a biconvex rear element, 9 elements in 7 groups, which is the layout of Fig. 1 and of the page; it records no aspherical or special-glass marking.

Open.

- Glass labels were not touched. The patent gives no glass names, no further line indices and no partial dispersion. All seven printed pairs equal the six-digit codes of OHARA's discontinued pre-"S-" types in the local OHARA catalog file: LAL7 652585, LAH66 773496, LAL8 713538, PBH1 717295, PBH6 805254, BSL7 516642 and LAH53 806410. For L8 this bears on the open label: LAH53's formula νd is 40.9485, a hair under the rounding boundary, but OHARA's own code rounds it to 41.0, the printed value, so the analysis sentence that puts historical LAH53 "just outside" the rounding interval is narrower than the catalog's own rounding, and a single-vendor reading of the whole table would name L8 by LAH53 / S-LAH53 rather than a CDGM glass. The same reading would name L1, L3 and L4 by LAL7, LAL8 and PBH1 where the file has SCHOTT equivalents.
- L4's bevel, L7's taper and L8's 0.6 mm shortfall, as listed above.
- Whether the production lens moves its stop with the focus group is still not established.

## 2026-10-12 — Glass labels: OHARA period set

- Finding (second review). All seven printed N / ν pairs equal glasses OHARA has since discontinued, as listed in
  OHARA's all-products catalog file of 2026-07-01: LAL7 (1.651597 / 58.52), LAH66 (1.772499 / 49.60), LAL8
  (1.712995 / 53.85), PBH1 (1.717362 / 29.51), PBH6 (1.805177 / 25.44), BSL7 (1.516330 / 64.15) and LAH53
  (1.806098 / 40.95, catalog code 806410). The 1.51633 crown index is not in the SCHOTT, HOYA or CDGM lists. One
  supplier's period catalog explains every pair; the earlier labels mixed SCHOTT, OHARA and CDGM rows chosen by
  index residual, including a CDGM glass for a 1991 design.
- Catalog. LAL7, LAL8, PBH1, PBH6, LAH66 and LAH53 were added from that file without six-digit codes, so
  code-only labels elsewhere keep their rows. BSL7 remains an alias of S-BSL7.
- Labels before → after: L1 N-LAK7 → LAL7; L2, L9 S-LAH66 → LAH66; L3 N-LAK8 → LAL8; L4 SF1 → PBH1; L5, L7 S-TIH6 →
  PBH6; L6 S-BSL7 → BSL7 (still traced on S-BSL7); L8 H-ZLaF52A → LAH53. Printed N and ν are unchanged; every label
  resolves, with index residuals of 3e-6 or less and Abbe residuals of 0.05 or less.
- Effect. L5 and L7 now follow the lead-flint PBH6 curve (θgF 0.610) in place of the titanium-flint S-TIH6 curve
  (0.616): ng is lower by 2.3e-4, the largest change. L8 moves by up to 4.7e-5 at g; the other elements move by
  about 1e-5 or less at C, F and g.
- Supplier and melt remain unconfirmed; the labels say so.

