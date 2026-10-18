# Current HC35 qualified restricted-aperture revision

Disposition: USER_APPROVED_QUALIFIED_DELIVERY_RESTRICTED_LITERAL_APERTURE. Standard last gate remains READY_FOR_DATA. Native-aperture-transmission and source-native-axial-forward remain FAIL. This is a qualified analysis of the literal source and a restricted inferred aperture model, not a verified physical f/3.6 construction or a finding about production-lens conformity. The revised bytes have completed source-first independent qualified review; the Stage4 section below records its evidence. Earlier construction records remain historical.

## HC-specific user permission

Assistant Sentinel_b3e04a2a91b88191a7464b1ae85ed860: "GF32–90: a required ray still clips an internal cemented surface after the clearance adjustment... Best route: investigate that specific ray before changing any aperture. Hasselblad HC35: the literal rounded prescription has a tiny physical conflict, about0.0047mm, at the claimed f/3.6 aperture... Best route: retain the hold, or explicitly model the literal prescription with its narrower effective aperture near f/3.83. I wouldn’t silently substitute the optimized witness."

User Sentinel_f63629b10ac48191b2b686f54b470b85: "Move forward with the32-90 and HC35 as accurately as possible. I assume cipa allows for that aperture rounding?"

Assistant Sentinel_40f5c7cdd7fc8191b64feede1f05375c: "I’ll move both forward as source-faithful, qualified models, keeping the unresolved aperture and ray limitations explicit. I’ll also check the applicable CIPA wording; I wouldn’t use a marketing-aperture tolerance to justify changing a patent prescription or hiding a physical conflict."

The HC portion supports this restricted literal-aperture analysis. It does not approve an optimized witness, changed source radii/gaps/indices, a policy-margin exception, physical f/3.6 certification or a production-lens defect claim. The exact context is embedded in evidence.qualifiedDelivery. The S3 inference correction below was separately proposed with numerical checks and authorized by the parent as an ordinary unpublished-aperture correction within this scope, conditional on preserving the axial guidance margin and all hard geometry rules.

## Exact data delta and source preservation

The prior held data SHA-256 is 1aa8ff541fcb0aa64f21461e8d1e2908262efa222e2f92a3d1a8e194f045e13f. A comment-only revision, SHA-256 9685befd15869e9d6025975b9e76c37ebb03dc6ae7f9cd27ff7a26c37bd5a0bc, clarified that real iris calibration fails and the runtime uses a paraxial fallback. Its parsed object was identical to the prior data, canonical payload hash 65eb7b5c07131391c8e86a9cba297157b7f71f669c957da414b33c5fd0cb4a71.

The final data SHA-256 is 3afd539909105dff2618ea3d9e82aabb3b8399ebb0150aa347e0cdcda094a3a3. Its only executable difference from the earlier data is S3.sd: 19 → 21.5 mm. Reversing that one documented inference reproduces the prior canonical executable payload exactly. Source radii, spacings, nd/vd, phi17/2 = 16.182, stop position, runtime iris, nominalFno, source/marketing fields and the 0.90 policy are unchanged. No finite-focus law is added.

Original selected A1 and card remain unchanged, as do the complete US grant/correction and official Japanese family PDFs. The filing-date correction and attribution distinctions from the reviewed metadata revision remain intact. The original stage2.zip and stage2_metadata_revision.zip are preserved. The latter is the direct package parent, SHA-256 18da1415c8ee643ac06de29c384308d15fefff5f02d3791da0ed1cccedb76f27.

## Bounded physical-chief finding and S3 inference

The added standard-library analytic sphere/sag-branch/vector-Snell routine aims a chief at the actual modeled STO, retaining the existing inferred stop location. At 44.35°, the independent author solve reaches the source image at radius 34.522028376 mm with an explicit zero-height STO hit. It respects the source-backed S17. The only former modeled aperture violation is S3: required height 21.260273043 mm versus the earlier inferred 19 mm.

The same bounded method finds the 645 corner at angle 44.591673419° with required S3 height 21.413371790 mm. The corrected 21.5 mm radius leaves 0.404552% chief headroom. This is not described as an 8% margin around every chief. At the nominal axial launch, S3 height is 4.680937385 mm, giving 359.309712% axial radial clearance; the actually transmitted axial boundary gives 388.204365%. The applicable axial sizing guidance is therefore satisfied by a wide margin, despite the separate later native-aperture failure.

The source Fig.1 outline supports the direction of this larger L2 front envelope but is not treated as metric proof. The exact required rays govern the inference. S3 rim slope is 25.125821°, minimum sampled element thickness 2.44 mm and front/rear SD ratio 1.131579. The preceding gap has zero intrusion against 0.135 mm allowance. The following shared band has 5.987496 mm intrusion against 6.039 mm allowance. Actual rendering requires zero hidden trim. Only an unpublished SD changed; no new policy exception was introduced.

After refinement the actual source chief and format corner transmit through the unchanged pinned runtime. The full engine trace records the actual STO surface hit, with source/corner residuals within 1e-7 mm; this avoids partial-trace stop-count ambiguity. All 11 current default rays pass, including the recalculated off-axis field 24.282341752°. Restoring only S3.sd = 19 in a temporary runtime object reproduces the old source-chief failure. That negative control, the complete prior coverage record, old data fingerprints and proposal are retained in evidence/runtime.

## Helper endpoint and preserved failure classifications

The current diagram/aperture-derived half-field from computeFieldGeometryAtState is 40.470569586°. The format-aware computeAnalysisFieldGeometryAtState bound is 44.591616942°. At the actual approximate endpoint, physical image radius is 34.849922749 mm, only 0.000077251 mm below the 34.85 mm corner. This is inside the documented ANALYSIS_FIELD_CORNER_TOLERANCE_MM = 1e-4 in the pinned chiefRay.ts.

Using that approximately converged endpoint as a strict inverse-search upper bracket returns null. It is retained as a harness bracket-reuse observation, not source failure or physical clipping. A separately declared 45° search bracket yields angle 44.591674805° and physical radius 34.850001897 mm through the unchanged runtime. It changes only the diagnostic bracket, never a source or application field. Both image height and explicit full-stack STO hit are checked.

The old 19 mm inference's source-angle solver was bracket-failed; its S3 clip belonged to a fallback ray. The new analytic source chief established what was actually missing. Historical field failures remain raw records; current required source/format chief checks pass for the supported correction. Neither statement establishes full-pupil illumination over the full field.

## Remaining aperture restriction and standards context

The source table nominal 3.6 and figure 3.59 remain separate from the actual transmitted entrance-equivalent 3.826611355 and image-sine 3.822960921. Real calibration is nonfinite and the runtime uses the same 9.574055511 mm paraxial-fallback iris. At the source target, the S10/S11 same-height intrusion is 0.184683310 mm against the literal 0.18 mm gap; the physical excess is 0.004683310 mm. The actual forward physical S11 branch lies behind the prior hit. Source geometry is unchanged.

The earlier source-rounding witness and unsuccessful tighter-target search remain diagnostic history in the embedded independent review. No optimized witness is adopted. The separate author EFL-rounding witness remains executable in the verifier. The added analytic physical-branch and gap calculation is adapted after exposure to the reviewer's independent implementation and is labeled author replay, not newly independent work.

The short standards qualification cites the consulted public ISO 517:2008 Table 2 and official status page. The preview is not included in the ZIP. The current CIPA full text was not accepted/read. Arithmetic comparisons are executed in results.apertureMarkingContext and make no production-lens measurement or historical conformance claim.

## Analysis checks and quantitative claim map

- Metadata/correction/family roles → evidence.metadataProvenance and the three included patent PDFs; original US assignment instrument remains unretrieved.
- Product correlation, native/marketed labels, MFD and crop-angle distinctions → evidence.productCorrelation and manufacturer sources.
- Architecture and all element/group/cemented powers → results.implementedModel, recomputed from final parsed data; source equality remains checked.
- Glass coordinates, unmatched labeling and spectral limitations → final elements, source table and retained six-vendor catalog comparison. No supplier or spectrum inferred from proximity.
- Focus scope and all-spherical construction → source ¶0013–0020/0040/0045/0047, final empty var and 1e15 sentinel.
- Conditions/EFL/BFD/Petzval and source-rounding residual → results.checks/comparisons/sourceModel/implementedModel; raw mismatch remains visible.
- Literal aperture conflict → results.literalNativeGeometry, with exact analytic hits and backward physical branch.
- Physical transmitted aperture and alternative non-adopted caps → runtime.apertureProbeRecord and results.apertureInvestigation, freshly generated by the packaged probe script.
- Source/corner chief paths and separate axial/chief margins → results.sourceChiefInvestigation and inferredS3Validation.
- Actual source/corner/default/rim/trim checks, negative control and endpoint classification → runtime.states, inferredS3NegativeControl and results.requiredChiefCoverage/helperEndpointDiagnostic.
- ISO arithmetic percentages and scope → results.apertureMarkingContext and cited preview/status URLs.

Manual prose review checked element roles, source conditions, absence of aspheres, focus descriptions, primary citations and all qualifications. Numerical Stage3 checks bind element first lines, group powers, glass table, all ten conditions, EFL/BFD/Petzval, literal gap, actual aperture, actual source/corner field values and distinct clearance percentages. The standard last gate is unchanged; qualifiedAnalysisPreflight is separate from the verifier's failed native-aperture checks.

## Portable package and completed qualified review

The 14-file package consolidates the former standalone aperture-probe.json into runtime.json as apertureProbeRecord. Runtime replay freshly executes the packaged aperture-probe.mjs into temporary storage and embeds the result; no hidden per-lens input is introduced. The independent author source-chief and literal-sphere calculations are included directly in verify.py and run on the final parsed data. Required dependencies are Python standard library, Node 24 and the explicitly pinned public runtime; no network fetch occurs during replay.

Clean extraction and hash verification must preserve all three PDFs/card, reproduce numerical results exactly with expected nonzero exit for the two aperture failures, and reproduce the actual runtime/probe outputs. No application edit, new iris law, compiler/corpus/build, metadata generation, publication, upload or Drive operation occurred. INTEGRATION_PENDING. Exact-byte independent qualified review is complete; the standard native-aperture failures remain unresolved.

## Prior held and metadata audits retained as history

The records below describe earlier revisions. Their old delivery and field-scope statements are superseded by the explicit current authorization and evidence above; their raw numerical failures and prior source observations remain preserved.

# Metadata-only family-source revision

CURRENT DISPOSITION: Stage2 remains blocked, with last valid gate READY_FOR_DATA. No Stage3 analysis or qualified delivery is approved. This update changes filing-date metadata and adds primary family attribution evidence only. The previous audit follows unchanged as history; its statement that the original cover date governs is superseded by the official correction described here.

## Official filing-date correction

The selected US2004/0136095A1 cover prints December 24, 2003. That raw observation remains in evidence.metadataProvenance and in the unchanged selected PDF. The newly included US6894847B2 facsimile contains a USPTO Certificate of Correction on PDF page 13, signed and sealed August 19, 2008. It directs field (22) to read December 29, 2003. The grant cover identifies the same US application 10/743,824 and prior publication US2004/0136095A1. The corrected dossier filing date is therefore 2003-12-29. This is supported by the actual certificate, beyond the earlier secondary-index discrepancy. It corrects no optical parameter.

## Attribution sources and limits

The US grant cover, PDF page 1 field (73), names Fujinon Corporation, Saitama (JP). The official Japanese family publication cover, PDF page 1 field (71), names 富士写真光機株式会社, rendered as Fuji Photo Optical Co., Ltd. These are direct primary grant-assignee and Japanese-applicant evidence, respectively. They are not a substitute for the original US assignment instrument 014849/0528, which remains unretrieved. They do not independently establish the exact corporate succession or production HC35 prescription identity. The existing data file's historical assignee string is unchanged and remains accompanied by its secondary same-US-application assignment-index provenance.

Both primary family PDFs are included complete and unchanged. The US grant/certificate is an official-issued facsimile obtained from the Google patent-image mirror, not a newly retrieved USPTO-hosted file. The JP PDF was downloaded from official J-PlatPat. Stable record URLs, source origins, locators, lengths and hashes are recorded in evidence. The bounded family precision report is an external research reference, explicitly marked not packaged and identified by SHA-256 84bf54a41713053949853e3f4934d94ee1633acba2aaac48cc55313a9c6e94a2. Its reported US/JP comparison found no extra optical precision. DE102004001767A1 remains unexamined; there is no exhaustive worldwide family or prosecution-file claim.

## Unchanged optical state and verification

The selected original A1 and card are retained byte-for-byte. Data SHA-256 remains 1aa8ff541fcb0aa64f21461e8d1e2908262efa222e2f92a3d1a8e194f045e13f. No radius, spacing, index, SD, stop, f-number, field, focus law or model annotation changed. Both runtime scripts and their prior executed records are unchanged and remain hash-bound to the identical candidate. No new runtime execution is needed for this metadata-only change; clean numerical replay checks the bindings and reproduces the existing native-aperture failure. New primary PDF hash checks and metadata-scope checks are performed by the verifier.

The prior Stage2 archive remains unchanged. The new manifest binds this distinct 14-file revision, the added primary documents and refreshed results. All native-aperture failures, raw numerical mismatches and source/model qualifications remain. INTEGRATION_PENDING; no repository, publication, upload or Drive action occurred. Fresh review must inspect these exact revised bytes.

## Metadata claim map

Corrected date → evidence.metadataProvenance.filingDate.officiallyCorrected → US6894847B2.pdf page 13. Original printed date → rawSelectedA1Cover → US20040136095A1.pdf page 1. Grant attribution → attribution[0] → US6894847B2.pdf page 1 field 73. Japanese applicant → attribution[1] → JP2004219610A_official.pdf page 1 field 71. Unretrieved US instrument → attribution[2] and assignment-index source. These facts are copied into results.metadataProvenance; unchanged optical claims retain their previous calculation map below.

## Prior audit preserved as historical record

# Hasselblad HC 3.5 35 (Fujinon): consolidated audit

CURRENT DISPOSITION: Stage2 BLOCKED; last valid gate READY_FOR_DATA. The preliminary Stage2 readiness below is historical and INVALIDATED by the native-aperture investigation. No Stage3 analysis has been authored.

## Job and reference versions
Original job: US2004136095A1, Example 1, HasselbladHC3535Fujinon. The source cover is US 2004/0136095 A1; its zero-padded filename is an alias, not a patent substitution. Original PDF and card remain unmodified, with identities bound in evidence/manifest. CHAT-1.0 (2026-09-11) and current project commit 5c25e4289c6e090eb44177e907d901dfe3cef76c control. The exact document hashes are in the manifest. Shared references are not packaged dependencies of the offline numerical replay.

## Extraction and conventions
The original cover, Fig.1, Table1 and condition equations were visually inspected, not accepted solely from OCR. Table1 occupies PDF p8/printed p3; definitions and conditions occupy p7; p2 is the optical figure. All 21 source refracting surfaces are preserved. D21 is blank but fB=61.0 supplies its image distance. Blank index cells mean air. R5=50.584, R12=199.466, N13=1.51742, and separate 23.8/23.9 Abbe values are confirmed. Surface17's 32.364 value is a diameter; source-backed SD=16.182 mm. d-line is explicit in ¶0049. No plates, dummy planes or aspheric terms are published.

## Model transformations
No scaling. A single infinity state is published. G2B/L8–L11 rear focusing is identified in ¶0015,0045,0047, but travel and finite-state gaps are not. Stage2 shall use NO_INTERNAL_RECONSTRUCTION, closeFocusM=1e15 and empty var with an explicit sentinel/non-MFD disclaimer. Stop lies between surfaces12 and13; exact coordinate and diameter are not published. Stop split/diameter and non-published apertures remain defined Stage2 tasks.

## Glass review
All six requested vendor catalogs were reparsed from their actual retained primary files: OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA. Evidence records file identities, native rows/cells, compatible candidates and nearest-per-vendor residuals. OHARA S/L prefixes stay distinct. No vendor/melt identity or spectrum follows from proximity. Final labels will explicitly retain unconfirmed catalog identity, with patent nd/vd only. The patent's qualitative discussion of anomalous dispersion is not a quantitative APO verification.

## Numerical and geometry results
Two newly implemented first-order paths, sequential reduced-angle rays and ABCD products, agree to floating-point precision. Analytic zero-thickness reference exposes power/sign mistakes. EFL=35.7815204092 mm, BFD=61.0179823306 mm. Surface powers/Petzval contributions, standalone element powers, functional group powers, principal planes and track are in results. All ten condition inequalities pass using the published source diameter. Geometry and exact default bundle checks belong to Stage2, not this source gate.

## Correction and discrepancy register
The raw EFL comparison with printed35.76 remains FAIL: +0.0215204092 mm exceeds the initially declared0.015 mm engineering bound. It has not been widened or erased. A separate source-precision compatibility computation constructs a diagnostic prescription inside every displayed source half-last-digit interval. It reaches35.76 mm; maximum normalized perturbation=0.998601324 and BFD=60.979390474 mm, compatible with printed61.0. This establishes that table quantization can explain the discrepancy, not that its cause has been proven. None of these witness perturbations enters the production prescription. Computed design metadata must use35.7815204092, with printed35.76 separately disclosed. Source radii/indices/spacings are not corrected.

The cover filing date is24December2003; the Google index displays29December2003. The cover governs this dossier. Cover lists inventor only. Same-application assignment events show Fuji Photo Optical Co., Ltd. on24December2003, before publication; later Fujinon Corporation name change is23November2004. This supports the historical assignee field, with the event source and dates disclosed.

## Independent review
Not performed. A fresh source-first Stage4 reviewer must independently re-extract and compute before seeing/reconciling this candidate.

## Gate disposition
READY_FOR_DATA. Stage2 must earn aperture/geometry/runtime approval, preserve source-backed surface17 SD, use the default gapSagFrac0.90, classify first physical clips and retain diagnostics. No final data or analysis is included at this checkpoint.

## Pending integration
INTEGRATION_PENDING. No repository edits, metadata generation, corpus sweeps, full build, publication or Drive mutation occurred. Runtime/model checks in later stages do not imply integration.

## Quantitative claim map
Source EFL/BFD and condition comparisons → results.comparisons. Independent system/element/group/Petzval results → results.sourceModel. Rounding disposition → results.sourceModel.roundingCompatibility. Catalog residuals → results.glassCoordinateComparisons. Product facts/correlation limits → evidence.productCorrelation and manufacturer sources. No analysis exists yet.

## Stage2 construction and executed geometry
The actual literal-only .data.ts was parsed from disk and compared field-by-field to source plus the explicit split of D12 into3.15mm+5.00mm. The inferred iris position follows the cover/Fig1 schematic and is not metrically published. SourceSD17=16.182mm remains unchanged. Initial aperture estimates failed real validation at6→7 and10→11; the failed messages and exact old/new inferred values remain in evidence. The revised shared bands at7=13.9mm,10=8.8mm and11=8.8mm satisfy the unmodified gapSagFrac0.90 and actual rim/edge checks. These are source-figure-informed modeled envelopes, not published mechanical dimensions.

Real pinned-project buildLens/validateLensData and render diagnostics pass; maximum hidden trim is0mm. Actual shared defaults were used: six on-axis fractions±0.83,±0.5,±0.17, and five off-axis fractions−0.75,−0.375,0,0.375,0.75 at22.6992728573°. All11 required default rays transmit. Their launch coordinates, calibrated iris, solid points, ghost points and first clip metadata are preserved in runtime.json. Default rays have no first clipping at the L8/L9 cemented junction.

The actual runtime uses stopSD9.5740555112mm, entranceSD4.9696556124mm, with targetf/3.6. The real full-pupil stop probe is non-finite because an exterior aperture clips it, so this is the engine's paraxial fallback branch, not successful exact real-ray calibration or a measured iris. The authored stop retains that actual runtime radius. Default-fraction success does not establish the full aperture. The two±1 on-axis diagnostic rays first clip10; all seven source44.35° full-half-field diagnostic rays clip exterior surfaces, including an intersection/noBracket atsurface3. Those are retained as limited-model diagnostics, not hidden, reclassified as transmitted, or promoted to blanket exceptions. Runtime inferred halfField=37.832121429°, so full patent field reproduction is explicitly not claimed.

The actual current runtime resolves the generic Unmatched labels through Abbe-only dispersion, with no claimed catalog spectrum. Source nd/vd and differing23.8/23.9 pairs remain intact. No nC,nF,ng or dPgF is invented. Root template shape/type import/default export, source metadata, counts and singletonSTO pass portable structure/source checks. Intentional duplicate-key/trailing-code/undefined fixtures are rejected, and a1mm radius mutation is caught. Genuine TypeScript/Prettier executables were unavailable; full type/lint/style/corpus/build remain integration checks. Targeted runtime imports and execution are genuine project checks, not substitutes for unavailable compiler checks.

Stage2 gate: READY_FOR_ANALYSIS, conditional only on this exact packaged revision and disclosed scope. Data-source numeric semantics remain unchanged; new parameters are explicitly inferred apertures/stop and infinity-only sentinel. Stage4 remains unperformed. Quantitative claim facts are generated from this final parsed data.


## Native-aperture investigation and invalidation
Default-ray pass was insufficient. Surface10SD is inferred, not published. At the actual final candidate the transmitted on-axis launch radius is4.675353346154991mm, equivalent f/3.8266113553352725. Exact bisection treats first physical clipping as terminal and does not count ghost continuation. Raising both10/11 to the maximum allowed shared aperture8.82621043209922mm gives radius4.688748187140113mm and equivalentf/3.815679471478264. At9mm the real validator fails the0.90 shared-band gap constraint. SourceFig1's schematic rim estimate is about9.6–9.8mm, beyond this allowable shared aperture; figure inference is not permission to relax geometry.

The exact nominalf/3.6 ray was also probed with all semi-diameter checks disabled. It reaches source10 atheight9.379608469410769mm, then fails intersection at11 with noBracket. Thus the original table's rounded geometry itself prevents the runtime calibration path, independently of the8.8mm aperture choice. No source correction or explanation is asserted. The actual runtime iris is a paraxial fallback; it cannot substantiate a faithfulf/3.6 model. The previous “READY_FOR_ANALYSIS” checkpoint is invalid. Source-onlyStage1 remains valid; Stage2 stays blocked with candidate and diagnostic files preserved for independent review. Changing f-number, gaps/radii or gapSagFrac to make it pass is not authorized.

Portable replay is expected to return a nonzero exit code with native-aperture and essential-source-issue failures. A successful reproduction of this blocker is not a construction pass. The canonical blocked package contains no final analysis and claims no Stage3 gate.


## Exact image-space sine F-number cross-check
The exact transmitted marginal ray was also evaluated using1/(2sin|u_image|), independently ofEFL/entrance-diameter labeling. It gives3.8229609213 at the current inferred8.8mm shared aperture, and3.8121141696 at the maximum permissible8.8262104321mm. This convention change does not reconcile the modeled native aperture withsourcef/3.6. The source table and candidate data remain unchanged. Only the probe coverage and this diagnostic record were extended.

## Independent Stage 4 restricted-literal review

The original source-first baseline is preserved byte-for-byte under fingerprint `4ad616f3c92604ebc9d4759f29c7a344b1d276cec0e7c943f8387a224fa4c407`. Its independently re-entered source, conventions, glass review, calculation code, original results, exposure note and inventory are embedded under `evidence.independentPass.frozenBaseline`. The original selected A1 PDF and card are shared unchanged files. The consolidated verifier contains the independent programs, restores their hash-checked files, and re-executes the calculations without hidden source inputs. A fingerprint records provenance; it does not prove blindness.

The original baseline preceded author candidate access. This final review continues after the earlier source, literal-aperture, rounding and metadata reviews. Parent/author-reported S3 heights were visible before the new angular calculation, but did not seed it. The reviewer extended their own earlier analytic sphere/vector-Snell implementation and used a uniform launch search on the immutable previous candidate before opening the new author package. The author subsequently adapted earlier reviewer code; agreement of those descendants is not represented as a second independent extraction. Actual LensVisualizer execution remains a separate form of evidence.

The reviewed Stage3 archive is `a83e9ec5cbb45d4c9f988aed95a27950f77a19ff529c16dac3115303ca434fd3`. Final data stays `3afd539909105dff2618ea3d9e82aabb3b8399ebb0150aa347e0cdcda094a3a3`. The only executable change from the previously reviewed `1aa8ff54…` data is the expressly approved, unpublished S3 semi-diameter from 19 to 21.5 mm. Reversing that field makes the parsed objects identical. The outer comment accurately distinguishes failed real iris calibration, paraxial fallback and restricted aperture. The intermediate comment-only hash and in-memory proposal remain explicitly historical, not final-byte identities. No optical repair was self-authored and then claimed independently reviewed.

### Source, metadata and analysis fidelity

Independent baseline replay reproduces all first-order results, source precision, eleven standalone powers, functional and cemented group powers, principal planes, pupils, Petzval terms and all ten inequalities. Final-model comparison retains every source R/d/index/Abbe value, the physical 61.0 mm image gap and the unscaled spherical construction. The inferred stop split remains 3.15 + 5.00 = 8.15 mm. Source phi17/2 remains exactly 16.182 mm. There are no omitted plates, finite-focus tables, aspheres, OIS mechanisms or reconstructed focus laws. The infinity-only sentinel is not the product MFD.

The new analysis was checked against the final data and independent numerical baseline. Element shapes and the source's bounded distortion/chromatic/focus objectives were checked against rendered original paragraphs 0013–0049. All element/group powers, metadata, counts, reference planes and source-condition distinctions are consistent. Identical nd/vd coordinates do not establish suppliers or spectra; generic Unmatched labels and Abbe-only runtime behavior are accurately qualified. The six raw catalog searches remain preserved as compatibility evidence, with no unsupported supplier, melt, secondary-spectrum or APO claim.

The prior metadata attestation remains valid: the same-application B2 Certificate of Correction changes filing item (22) to December 29, 2003, while original covers print December 24. The certificate is dated August 19, 2008 and changes no optics. The B2 grant assignee, Japanese applicant and unretrieved US assignment instrument are distinct evidence roles. Complete selected A1, B2/certificate and official JP PDFs are unchanged. No added precision was recovered from the inspected family prescriptions, and no exhaustive family/prosecution search is claimed.

The official Hasselblad product page and manufacturer-authored HC35 V3 UK datasheet were rechecked. Their 89° general field and 82° 37×49-crop specification are not conflated. Eleven elements/ten groups, 35.8 mm, 0.50 m and 1:9.6 support the stated probable product correlation, not exact production prescription identity. The public ISO 517:2008 preview confirms the cited full-aperture tolerance and infinity-focus scope. The brief arithmetic discussion is appropriately separate from current CIPA full text, production measurement, historical conformity and prescription geometry. The preview is not redistributed.

### Literal aperture and source precision remain unresolved

The independent analytic sphere/vector-Snell calculation is freshly executed on the final data. It reproduces entrance-equivalent f/3.826611356 and image-sine f/3.822960884, within the recorded numerical solver differences from the actual-runtime values. The nominal f/3.6 ray reaches S10 at y = 9.379608469 mm, then has no forward S11 vertex-sag branch. Same-height intrusion is 0.184683310 mm across the unchanged 0.18 mm gap, an excess of 0.004683310 mm. The separate hard 0.90 policy allows 0.162 mm intrusion. The maximum policy-compatible shared-radius diagnostic, 8.826210442 mm, is not adopted and does not reproduce f/3.6.

The preserved bounded rounding witness is also re-evaluated from its explicit diagnostic inputs. Every change stays within the printed half-last-digit intervals; the resulting EFL is 35.76 mm and BFD is 60.982837900 mm, with an aperture-unchecked f/3.6 path through the geometry. The historical tighter Fig.4 target search remains inconclusive. Its optional SciPy optimization record/code is retained but not rerun or claimed solved by portable replay. No witness replaces the literal prescription, inferred clear apertures or source target. This supports the precision qualification, not a finding that the published underlying design or manufactured lens is defective.

The two standard requirements `native-aperture-transmission` and `source-native-axial-forward` remain **FAIL**. Raw EFL and native-aperture comparisons remain visible. The new S3 clearance does not change the axial failure or the fallback iris. Passing default rays or source chiefs does not certify physical f/3.6 operation.

### Independent field validation and negative control

The independently bracketed source chief at 44.35° has first-vertex-plane launch y = 35.525851298869 mm, explicit STO residual 1.4e−12 mm and physical image y = −34.522028376150 mm. Its S3 height is 21.260273042976 mm. The separate bounded format solve reaches radius 34.85 mm at approximately 44.591673418°, requiring S3 height 21.413371789445 mm. These computations inherit the disclosed inferred stop position; they do not establish a newly published stop location. The format angle is a diagnostic beyond the native source half-field, not a changed source claim.

Fresh independent execution of the actual pinned runtime confirms the final source and format chiefs, real full-stack STO hits, all six default axial and five default off-axis rays, unchanged 0.90 geometry acceptance and zero hidden trim. Extra ±0.9/±0.95/±1 diagnostics remain recorded separately, including physical clips and later ghost paths. In an in-memory negative control, reversing only S3 to 19 restores the bracket-failed source chief and lack of a physically transmitted format chief. The inverse helper can return a numeric corner angle despite its subsequent chief being bracket-failed and clipped; angle existence alone is not coverage. The independent check uses actual transmission and STO attainment as its criterion.

The current approximate analysis endpoint misses radius 34.85 by 0.000077251 mm, within the unchanged helper's documented 0.0001 mm convergence tolerance. Its reuse as a strict inverse-search upper endpoint returns null. A separate 45° bracket reaches a physically transmitted corner at radius 34.850001897 mm, with STO residual about 4.8e−8 mm. The null is retained as a diagnostic of bracket reuse, not hidden as a physical pass or promoted to a source failure. No application code, geometry policy, source angle or sampling fraction changed.

S3 has about 0.405% radial headroom beyond the corner chief. Its nominal axial footprint is 4.680937385 mm, so the axial clearance is about 359.31%. These are different measures; no new 8% requirement around every chief or policy exception is invented. The geometry and render checks validate the specific supported inference, not continuous full-pupil illumination across every field.

### Final disposition, claim map and replay

Independent qualified review is complete. The separate disposition is **USER_APPROVED_QUALIFIED_DELIVERY_RESTRICTED_LITERAL_APERTURE**; the standard last gate remains **READY_FOR_DATA**. Both native-aperture failures remain in results and the required manifest blockers. Source, metadata, geometry, glass honesty and analysis were checked independently of the user's permission to deliver a restricted model. No READY_FOR_BATCH or integration acceptance is claimed, and no exception transfers to another lens. `integrationStatus` stays **INTEGRATION_PENDING**.

The complete canonical package has 14 files. All current review-status fields agree across manifest, evidence, results and audit; previous Stage2/Stage3 hashes are labeled historical. The author aperture probe record is embedded in runtime.json and is regenerated by its included Node program during runtime replay. It is actual project evidence; the separate analytical functions and frozen reviewer calculations remain labeled source/model computations. There is no hidden per-lens dependency or nested archive.

The claim map extends the author map: source quantities/powers/conditions/precision → `independentBaseline.freshResults`; exact source and restriction → `independentBaseline.literalNativeAndApertureReplay`; source/corner geometry → `independentBaseline.fieldReplay`; S3-only executable delta → `independent-only-approved-S3-delta`; actual default/source/corner/negative-control behavior → preserved `runtime_final.json` under independentPass plus current runtime.json; witness scope → `independentBaseline.roundingWitnessReplay`; date/attribution → embedded metadata primary check and the three included original PDFs. Manual source interpretation and citation review are described above.

Portable replay: `python <stem>.verify.py --package-dir <extracted-directory> --output <external-results.json>`. It requires Python standard library, restores hash-bound independent code and inputs into temporary directories, recomputes the baseline, literal rays, chief solutions and bounded witness, and returns expected exit 1 for the retained native failures. This is a reproducible qualified failure set, not a normal gate pass.

Adding `--independent-runtime-root <pinned-project>` executes the preserved independent JavaScript against Node and the separately supplied unmodified public commit `5c25e4289c6e090eb44177e907d901dfe3cef76c`, including its S3-only negative control. The normal offline invocation authenticates the actual-runtime record rather than pretending to run that external project. Full compiler, Prettier, corpus, build, metadata generation, integration and publication remain NOT_RUN at integration scope.


## V2 conversion — 2026-10-18

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. The earlier full-catalog test attempt on a prior revision was resource-killed and is not a pass; no full-catalog pass is claimed here. This format conversion is not deployment or complete optical acceptance.

Retained package status: Qualified restricted literal-aperture delivery. Standard gate READY_FOR_DATA; native aperture/axial-forward checks remain FAIL. Model is restricted around f/3.83 rather than verified source f/3.6.

## Integration decision — 2026-10-18

The current user explicitly requested integration after disclosure of the approximately
f/3.83 transmitted aperture and the nominal f/3.6 marginal-ray intersection failure.
The user considers source rounding a likely explanation. The existing rounding-compatible
diagnostics support that possibility but do not establish it as the cause of the retained
literal-model aperture limitation. Earlier permission text inside the dossier is provenance;
the current direct request authorizes this integration.

The supplied V2 numerical prescription, inferred apertures and nominal source target remain
unchanged. The A1, supporting B2/certificate, and official Japanese family PDF are archived
in patents/. Source and manufacturer diagrams were checked during the deployment review.
The source and format chiefs pass; the aperture census still reports approximately f/3.83,
and native-aperture-transmission/source-native-axial-forward remain qualified failures.
Integration is as an infinity-only research reconstruction, not proof of production identity
or an assertion that the rounding explanation has been confirmed.

Integration checks passed: metadata generation, TypeScript typecheck, format check, lint,
all 4,983 tests across 301 files, and the production build with 1,687 prerendered routes.
Surface and image-circle audits pass. The aperture census still reports the disclosed
+6.3% difference (f/3.60 target to approximately f/3.83 transmitted); no optical value or
validation threshold was changed. Source moves were verified against the retained V2 ZIP.

## Source-rim, metadata and glass audit — 2026-10-18 UTC

Reinspected Fig. 1 of exact local `patents/US20040136095A1.pdf`, PDF p2, and the 600-dpi
rotated figure screening. Leader lines corrupt several automated envelope readings;
these are screening only, not dimensional evidence. Preserved the published S17 radius
16.182 mm and the source/format-chief-supported S3 radius 21.5 mm.

| Surfaces | Before SD (mm) | After SD (mm) | Reason |
|---|---|---|---|
| 1 / 2 | 31 / 31 | 30 / 30 | Slightly smaller common front rim, closer to Fig. 1 |
| 7 / 8 | 13.9 / 15 | 13.9 / 13.9 | Square optical rim on L4 |

A proposed S4=20.5 mm exceeded the rim-slope limit; a proposed common L4=14.5 mm
exceeded the S6→S7 gap allowance. Both were rejected without changing policies.
Final surface validation, image-circle and exact 645 corner-chief coverage pass; render
diagnostics show zero hidden trim. The existing S10/S11 axial restriction remains:
nominal f/3.6 still transmits near f/3.83. Source rounding remains a possibility, not an
established correction. No source radius, thickness, index, Abbe number or stop changed.

The eleven blanket Unmatched labels unnecessarily disabled existing compatible curves.
Replaced them with explicitly qualified spectral proxies:

| Elements | Catalog proxy | Native nd / νd |
|---|---|---|
| L1 | HOYA NBF1 | 1.74330 / 49.2 |
| L2 | HIKARI J-SF03 | 1.84666 / 23.8 |
| L3, L8 | HOYA NBFD10 | 1.83400 / 37.3 |
| L4, L11 | SCHOTT N-FK5 | 1.48749 / 70.4 |
| L5 | OHARA S-LAL8 | 1.71300 / 53.9 |
| L6 | OHARA S-TIH6 | 1.80518 / 25.4 |
| L7 | HIKARI J-KF6 | 1.51742 / 52.2 |
| L9 | OHARA S-FPL51 | 1.49700 / 81.5 |
| L10 | OHARA S-NPH53 | 1.84666 / 23.9 |

Maximum reference residuals are 0.0000052 in index and 0.046 in Abbe number. All eleven
resolve under unchanged guards; `assertCatalogConsistent()` passes. L9's low-dispersion
badge is explicitly inferred from the S-FPL51 proxy, not a historical APD identification.
No measured spectral indices or dPgF were invented. Existing entries cover all eleven,
so no duplicate catalog types were needed. Strict catalog coverage rises by eleven
non-air surfaces, from 10060/10843 (92.8%) to 10071/10843 (92.9%); trusted chromatic
coverage rises from 10073/10843 (92.9%) to 10084/10843 (93.0%).

Retained the normalized Hasselblad HC display name, H mount and 645 format. Catalog
design EFL now records printed 35.76 mm; computed EFL remains 35.7815204092 mm. Public
header text now discloses approximately f/3.83 transmission. Removed internal focus
sentinels, dossier paths, pinned application revisions and gate terminology from public
analysis while preserving source limitations. Browser review confirms the silhouette,
qualification, disabled focus and L9 inspector's proxy/inferred wording.

Final local verification for this audit: metadata generation, `assertCatalogConsistent`,
all eight glass-report suites (9 checks), typecheck, format check, lint, and all 5,125
tests across 301 files passed. Production build prerendered 1,687 routes. All six axial
and five off-axis default rays complete the physical prescription without clipping;
render diagnostics report zero hidden trim. Exact field coverage passes independently
of the retained heuristic/aperture limitations above. Changelog entries use 2026-10-18
UTC. Source PDFs/JPG and scratch renders are excluded from the commit.

## Second live-site review — 2026-10-18 UTC

Recompared the actual normal/color diagram against local Fig. 1, confirming L1–L11,
G1/G2A/G2B, the D1 doublet boundary on L8/L9 only, and L9's explicitly inferred APD
badge. L10 has no doublet or APD badge. Native indices and Abbe numbers remain distinct
from qualified spectral proxies, and the legend/inspectors distinguish Sellmeier from
catalog-polynomial curves. All eleven elements retain trusted catalog curves, with no
remaining spectrum backfill justified for this model. No additional SD change is needed:
source S17=16.182 mm and the source-chief-supported S3=21.5 mm remain, as do the
geometry-limited S10/S11 rims. Full-aperture f/3.6 transmission remains unresolved.

All eleven default rays transmit with zero hidden trim; exact corner coverage passes.
The infinity-only model is a prime. Source ¶0015 and Fig. 1 identify rear group G2B
(L8–L11) as movable, with a double-headed arrow, but provide no close-focus prescription
or a near/infinity endpoint ordering. No travel vector or enabled focus control was
invented. Layout is identical at normalized focus and zoom values 0, 0.5 and 1.

Reviewed the complete 76-name assignee inventory. There is no active spelling duplicate
requiring a source-party rewrite. Fuji Photo Optical Co., Ltd. is the historical entity
for this 2004 source attribution; Fujinon Corporation and Fujifilm Corporation remain
separate source-era names linked by the existing dated corporate lineage. Added guards
against uppercase-only FUJINON CORPORATION / FUJI PHOTO OPTICAL CO., LTD. splits, and a
shared regression retaining Fuji Photo Film as its own historical party. Manufacturer
annual-report text corroborates the October 2004 rename; direct PDF retrieval currently
returns 404, so no newly downloaded report is claimed. The original source attribution
and its primary/secondary-evidence qualification remain unchanged. No additional
changelog entry was added.

Second-pass final local gates: typecheck, format check, lint, 5,131 tests across 301 files,
eight glass-report suites (9 checks), and production build (1,687 prerendered routes)
passed. Source limitations above remain qualified; no heuristic failure was relabeled
as a pass. Existing UTC changelog entries are unchanged. No patent or scratch file is staged.
