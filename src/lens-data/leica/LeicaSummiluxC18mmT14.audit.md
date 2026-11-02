# Leica Summilux-C 18 mm: consolidated independent Stage 4 audit

## Disposition and exact revision

READY_FOR_BATCH is the final pre-integration gate, conditional on the accompanying successful exact-package clean replay receipt. Integration remains INTEGRATION_PENDING (closed 2026-10-13: files placed in src/lens-data/leica and independently validated; see the last section). This audit does not certify whole-application acceptance. The Stage 3 candidate, frozen parents and independent Pass A remain unchanged.

The reviewed source is EP2321688B1, first embodiment, Table 1/Figure 7, and the original 307-byte approved job card. The approval CSV's other publication is not substituted. The candidate data.ts remains byte-identical: SHA 256 87cef64e418e7e6805f0c720a025decfa1ea0e27576934bdbc1a0a2cec2ce3a1. Five analysis-only corrections are recorded below. No radius, thickness, gap, SD, asphere, dispersion field or calibrated aperture value was changed. Minor broken-word spacing in “abnormal-dispersion” was repaired without substantive effect.

## Source-first independence and preservation

Pass A was frozen before candidate exposure at 2026-10-12T18:51:42.149998Z. Fingerprint dc32446c844338574fe73a362d2756cb335a423de396a68865f67e183b8a3d12; archive SHA 256 ef153eb841d0db5321de2a506eb5d07362833686cf357048506a799dd3ea122f; result SHA 256 5f4527cc556b015d784724130ebf0fac9691e7193ddbbf78821d04f62c16aba0. The coordinator separately preserved/read back the baseline and reproduced it byte-for-byte before releasing the candidate. Final evidence embeds exact frozen input/catalog/context/report/manifest texts; the complete verifier embeds the unchanged source-first code. Every replay reconstructs and rehashes all frozen members and regenerates its results. Neither candidate agreement nor the later exception changes the frozen baseline.

One reviewer manually re-entered rendered source rows, spacing states, spectra, conditions and aspheres, and independently extracted original catalog coordinates. Fresh reduced-angle scalar tracing, separate physical-angle ABCD matrices, a separate exact meridional sag/Snell path and new full-conic geometry calculations formed Pass A. Pass B independently loads the actual final TypeScript AST, derives its spectral interpolation, and runs that frozen independent path on the parsed final values. The inherited author's calculation is also rerun for reconciliation, clearly distinct from the independent path. General project semantics were consulted; no author arrays, prior results, labels or candidate values were read before freezing. Incidental unrelated commit metadata and prior-folder filenames are disclosed in the frozen exposure record. Independence here describes actual source/method provenance, not perfect blindness beyond the stated context or independent experimental measurement.

Pinned runtime remains main 33ec433d56ed0044db432d6b0ff0395554d14696. Read-only main refresh at 2026-10-12T18:35:28Z returned the same SHA. 178 generic runtime files matched the pinned manifest. source_runtime_reference_verification.json contains a legacy relative recovery path; actual replay uses stage23_support/runtime/src. No engine edit or branch switch occurred.

## Authorized scope, applied only after freeze

<transcript_evidence>
Assistant Sentinel_85a565959efc8191b4b15ec1297c9e7d: “The Leica 18mm needs two narrowly scoped exceptions to continue validation:

• Use calculated f/1.320957 in the runtime metadata to preserve the patent’s 15.80 mm iris, while separately retaining its approximate f/1.4 and the marketed T1.4.
• Allow 97.05% gap-sag for this lens only. Its unchanged geometry measures 97.046686%, with 0.2723 mm physical clearance.

I recommend these exceptions, subject to the remaining independent audit. No printed optical values would change. May I proceed with both? [Verified checkpoint](https://drive.google.com/file/d/1-Szia9bbraBTaVMeZt___XpXBDO7uQxi/view)”
User Sentinel_04831649cad08191829e44a359fe8a74: “Yes”
</transcript_evidence>

The authority permits only C18 metadata/aperture sizing and gapSagFrac 0.9705. It does not change the printed prescription, waive other geometry, or create a general allowance above 97%. The original default 90% failure remains in independentBaseline. S8→S9 is 97.046685955% with 0.272295555 mm physical clearance; its allowance margin is 0.000305555 mm. The neighboring S10→S11 gap remains 95.097161711% with 0.207242974 mm clearance. Clearances, conic domains, edges, rims and all sampled states remain mandatory.

## Four-way reconciliation and independently checked results

Raw EP values, frozen source baseline, parsed native data and final prose are separate views. The raw source uses all 36 surfaces including optional L1 front filter; the native model removes S1/S2, retaining 34 surfaces, 18 powered elements in 15 groups, 3 cemented pairs and 2 aspheres. Native source labels, downstream cemented IDs, one STO, keyframes, all var/base-d values and asphere signs/exponents/units are verified. S6 and S32 retain 1+K convention and six even terms A4–A14 at scale 1. The raw source supports optional-filter omission; no rear plate or synthetic cement is introduced.

At the source catalog e-line 546.074 nm, independent F1/F2/F3 EFLs are 18.258674917,18.080845563,17.865989030 mm and infinity BFDs 44.827842551,44.864259771,44.904176233 mm. Source image gaps 44.800/45.699/46.577 mm are preserved; finite Gaussian best gaps 44.828175914/45.731196119/46.612983289 mm are not substituted. Source track is 193.273 mm from S1 to S37 and 188.273 mm from active S3. G1a/G1b/G2 e-line EFLs −179.998301315/+95.670625644/+41.477514062 mm reproduce printed rounded group powers. Combined G1 remains positive. First-order and exact checks, per-surface Petzval, standalone and cemented powers, principal planes and pupils are retained in replay results. Source e-line Petzval is +0.002638191554/mm; native d-line Petzval is +0.002667623619/mm. Native F1 BFD exceeds EFL, supporting retrofocus classification without confusing standalone and in-situ powers.

Aperture reconciliation is definitional, not an adjustment: source e-line Gaussian entrance diameter 14.200042521 mm gives f/1.285818327. Its entrance-pupil position is 37.867351309 mm from S1, exit-pupil position −285.006106199 mm from S36 and exit diameter 256.516758110 mm. Native d-line Gaussian entrance radius 7.084546103 mm gives f/1.288581805. The native exact d-line parallel ray with input height 6.910911547 mm reaches the printed 15.80 mm iris semi-diameter; 18.258034408/(2×6.910911547)=1.320957032. This is the actual runtime calibration definition, using the same unclipped sizing convention as the pinned function. Actual buildLens stopSD is 15.79999999999999 mm. No Gaussian result is forced to equal the finite-height parameter, approximate source f/1.4 or marketed T1.4. Source iris number is a semi-diameter, not a 31.6 mm-to-15.8 mm diameter conversion error.

Finite conjugates retain explicit reference planes. Removing 3 mm of S-BSL7 and 2 mm air uses the d-line air-equivalent prefix 2+3/n_d=3.978461251 mm, whereas the physical prefix is 5 mm. F2/F3 physical object-to-fixed-image labels 533.273/342.573 mm differ from native air-equivalent 532.251461251/341.551461251 mm. Runtime closeFocusM=.34155146125108476 is this equivalent coordinate, not a marketed physical MFD. G1b shifts +0/.699/1.657 mm and G2 + iris 0/−.899/−1.777 mm; variable-gap sum 57.489 mm and fixed image plane are conserved. F1 replaces the source 1000010 mm surrogate by true infinity. Two intermediate states are piecewise-linear estimates, not a recovered focus cam. No universal zero-focus-drift gate is imposed.

At verified source radii, S6 sag 5.931689670 mm, departure from same-radius sphere −6.570668949 mm and polynomial departure −7.477060002 mm are distinct. S32 sag −.173049177 mm and spherical departure +1.067740600 mm are retained. Maximum actual rim angle 53.648857652° is below the project limit; minimum sampled glass thickness 1.546 mm is positive. Independent shared-band sampling uses 1001 radii per element/gap; actual project geometry/domain/rim/render checks separately pass all 3 published and 2 justified midpoint states. Shape invariance within each piecewise-linear spacing segment and endpoint extrema bound intergroup gap changes. All 5 states yield 18 finite production shapes and zero hidden render trim. F1/F2/F3 SVG-derived PNGs were visually inspected. This does not claim a browser UI test.

The original six-maker catalog coordinate audit is independently repeated; OHARA named spectral coefficients reproduce all 18 native element fields. Wavelength nodes, d/e reference convention, OHARA S-family and derived νd/ΔPgF are explicit. Current named coordinates and Sellmeier coefficients do not establish historical melt identity, glass substitution or production-design certainty.

## Ray coverage and unresolved limits

The exact actual-runtime sample requests 750 targets: 5 states × 2 wavelengths × 3 field fractions × 25 pupil points. 724 solve; 480 transmit and 244 receive raw aperture classifications. 26 full-field launches remain unsolved. No denominator drops them and no area-weighted throughput is inferred. Seven STO classifications are numerical target overfill residuals 1.25e−9–9.76e−9 mm, not established physical blockage. Four sampled S31 cemented-interface clips remain disclosed. All 30 central chief combinations solve and transmit. Separately, the actual default off-axis display fan is 24 valid/1 F3 S36 clipped/0 numerical failures; dual axial bundles total 60 with 56 valid/4 F3 clips. The default sample has no cemented-interior clip. These are the required bounded coverage checks, not a promise of complete pupil acceptance.

All 26 terminal trials were perturbed at 9 y positions each. 234 trial launches hit an earlier aperture when clipping was enforced; 28 unclipped noBracket cases had no forward spherical-cap root inside the clear aperture on analytic checking. A clipped trial is not proof that its requested unsolved target is physically excluded. This bounded probe does not establish solver completeness. The current issue 779, “Intersection solvers miss a grazing chord shorter than one bracket-scan step” (https://github.com/ronbuening/LensVisualizer/issues/779), was read, but no actual candidate witness supports attribution to it. Neither the issue nor the permitted gap exception waives candidate checks.

## Source conflicts and product uncertainty

Preserve the literal 769 mmHg labeled standard pressure, Table 2 F3 relative-illumination 753, L19 biconcave prose versus printed biconvex/positive prescription, L14 meniscus prose versus vertex biconvex, L17 biconcave prose versus negative meniscus, and Figure 11a angle/prose conflict. No inferred 753→75.3 or pressure correction is applied. Table 2 distortion and twelve chief-field cases are independently reproduced within .006189023 percentage points; chief angles 38.037682248/37.675377729/37.124847082° give 2.399818055% breathing, distinct from 2.392218717% from rounded printed angles. Diffraction MTF and relative illumination are not reproduced.

The designer article supports similar 18 mm design, not exact sold production prescription. Current manufacturer web 0.45 m, sheet 0.5 m and historical chart 0.35 m focus figures are distinct. Marketing T1.4/33 mm circle/no breathing, patent approximately f/1.4/28 mm evaluated field/+2.4%, and physical 142 mm product length versus 193.273 mm optical track are not silently equated. Original downloads and provenance remain in authenticated support.

## Corrections and complete claim reconciliation

The earlier US/EP comparison is retained below as historical author/coordinator evidence, not reasserted as a fresh Stage 4 source finding. This reviewer did not inspect the US primary publication. The final clean analysis omits that ancillary count. All 170 inherited quantitative claim-map assertions are rerun from current inputs. Five additional correction-specific maps check required wording, prohibited stale wording, freshly computed numerical values and bounded diagnostic meaning. Source locations and downstream effects are retained in evidence.stage4Corrections; each revised claim has an identifiable replay path.

### C18-AUD-01

Old wording:

> Only EP2321688B1 Table 1 is transcribed. Related US8508864B2 is not an interchangeable coefficient source: five aspheric
> coefficients differ between the publications. The EP coefficients remain together without cross-family mixing. [1, Table
> 1]

New wording:

> Only EP2321688B1 Table 1 is transcribed. Its complete asphere coefficient sets are retained together, without
> substitution from another publication or embodiment. [1, Table 1]

Source/evidence: EP2321688B1 Table 1, pp. 6–7; complete EP asphere sets and unchanged source binding.

Reason: The specific count of differences from another publication lacked a retained primary-source comparison and was not needed to establish the selected EP source. Remove unsupported ancillary claim; no optical value changed.

Dependent checks: Analysis only; exact data.ts byte identity retained. Complete Stage 2/3 and independent Stage 4 calculation replay required.

### C18-AUD-02

Old wording:

> F1, followed by 37.68° and 37.13° at F2/F3; paragraph 0057 incorrectly associates 37.13° with Figure 11a. The earlier
> 38.044° reading is a transcription error, not an alternate design value. [1, Figures 11a–c; ¶0055–¶0057]

New wording:

> F1, followed by 37.68° and 37.13° at F2/F3; paragraph 0057 incorrectly associates 37.13° with Figure 11a. The printed
> figure values govern the reported source angles. [1, Figures 11a–c; ¶0055–¶0057]

Source/evidence: EP2321688B1 Figures 11a–c, pp. 34–36; paragraphs 0055–0057.

Reason: Keep editorial revision history in the audit, not clean technical analysis. Printed source conflict remains disclosed.

Dependent checks: Analysis only; exact data.ts byte identity retained. Complete Stage 2/3 and independent Stage 4 calculation replay required.

### C18-AUD-03

Old wording:

> The patent's diffraction MTF, distortion and relative-illumination plots remain source-reported performance, not
> independently reproduced simulation results here. Table 2's F3 relative-illumination entry at normalized height 0.65 is

New wording:

> An independent source-first exact trace reproduces Table 2 distortion across twelve nonzero field/state combinations
> within 0.006189 percentage points. Its solved full-field chief angles are 38.037682°, 37.675378° and 37.124847°, and
> the patent breathing formula gives +2.399818%. These checks use the raw plate-inclusive EP prescription and modern
> named-catalog e-line indices, separately from the native model and runtime pupil sample. The patent's diffraction MTF
> and relative illumination remain source-reported performance without independent reproduction here. Table 2's F3
> relative-illumination entry at normalized height 0.65 is

Source/evidence: EP2321688B1 Table 2 and Figures 11a–c; frozen independentBaseline.comparisons/sourceModel.sourceFieldChecks.

Reason: Frozen independent Pass A exact-source result supports distortion and chief/breathing claims; retain limits for uncomputed MTF/radiometry.

Dependent checks: Analysis only; exact data.ts byte identity retained. Complete Stage 2/3 and independent Stage 4 calculation replay required.

### C18-AUD-04

Old wording:

> At F1 the d-line Gaussian EFL/paraxial entrance-pupil diameter is 1.288581805, another distinct quantity. Exact
> image-space NA and finite-distance entrance-height ratios also have their own definitions.

New wording:

> At F1 the d-line Gaussian EFL/paraxial entrance-pupil diameter is 1.288581805, another distinct quantity. Exact
> image-space NA and finite-distance entrance-height ratios also have their own definitions. The independently solved d-line
> parallel input-ray height is 6.910911547 mm; EFL divided by twice that height gives the runtime f/1.320957 parameter.
> The raw source e-line Gaussian pupil calculation instead gives f/1.285818. Wavelength, reference model and finite-height
> versus paraxial pupil definitions are therefore kept separate.

Source/evidence: EP2321688B1 Table 1 S22; independentReview.irisDefinition and independentBaseline.states.F1.pupils.

Reason: Independent exact iris-sizing solve plus frozen Gaussian baseline reconciles the authorized metadata without forcing numerical equality.

Dependent checks: Analysis only; exact data.ts byte identity retained. Complete Stage 2/3 and independent Stage 4 calculation replay required.

### C18-AUD-05

Old wording:

> Source rims are not enlarged to eliminate that behavior.

New wording:

> Source rims are not enlarged to eliminate that behavior. A separate diagnostic perturbed the terminal trials of all 26 unsolved
> targets at nine positions each. All 234 trial launches encountered an earlier aperture when clipping was enforced.
> Twenty-eight unclipped trial traces returned noBracket; analytic checks found no forward spherical-cap root inside the
> clear aperture in those cases. This does not prove exclusion of the requested unsolved targets or establish global
> solver completeness, and no candidate failure is attributed to the separately reported grazing-sphere issue.

Source/evidence: Actual pinned runtime terminal-trial records, independentReview.runtimeWitness; not a source correction.

Reason: Actual pinned runtime witness probe, 234 trials; preserve distinction between clipped trial launch and unresolved requested target; no unsupported issue 779 attribution.

Dependent checks: Analysis only; exact data.ts byte identity retained. Complete Stage 2/3 and independent Stage 4 calculation replay required.

## Replay, checks and final packaging

The complete canonical verify.py reruns both independent and inherited paths, strict final-TS AST load and negative mutations, real LensDataInput typecheck and negative fixture, actual Prettier 3.6.2, actual validateLensData/buildLens/anchored glasses, runtime states/geometry/render diagnostics and exact rays. The final manifest/check table records executed statuses; the external clean-replay receipt binds exact archive and manifest hashes. Python 3.12.14 with numpy 2.3.5/scipy 1.17.0 and Node 24.19.0 are required. Authenticated official TypeScript 5.9.3 and esbuild 0.25.11 tarballs are extracted locally without lifecycle scripts or network. This is not a standard-library-only verifier. Required support is the unchanged Stage 2 support archive SHA 256 cf35e13e5a7ad3bbd7a184dc777138d6f45a4389cd64a896224a64ef4c4c89c0, reconstructed from its two declared <=25MiB byte-volume ZIPs. STAGE2_REPLAY_GUIDE.md remains controlling for the authenticated support layout; this audit supplies the final Stage 4 gate and additional Python dependencies. Legacy Stage 1 recovery references are historical.

Run: python LeicaSummiluxC18mmT14.verify.py --package-dir <canonical-folder> --support-dir <extracted-support>/stage23_support --output <external-results.json>. Expected exit 0 and READY_FOR_BATCH. Compare all content except the top-level environment.runUTC timestamp. Do not write the replay output into the immutable dossier. Source-only frozen Pass A replay remains separately available. No stored calculated answer is used as a numerical input; packaged result bytes are only integrity checked.

The canonical dossier has exactly 9 files: original PDF/card, clean data/analysis, evidence, complete verifier, results, audit and manifest. Exact membership, original identity, all member hashes/bytes and clean extraction/offline full replay are decisive final checks. The manifest's self-hash is intentionally in the external freeze receipt to avoid recursion. Full-corpus tests, metadata generation, full build/prerender and browser UI preview remain NOT_RUN at integration scope. READY_FOR_BATCH means this source/model/geometry/glass/analysis audit is earned within those explicit limits; integration remains pending (closed 2026-10-13; see the last section).

# Historical author audits, unchanged below

The following is preserved revision history. References to “current” or “not run” below describe their earlier stage, not the controlling Stage4 disposition above. The historical US/EP comparison was not independently re-established in this Stage4 review.

# Leica Summilux-C 18 mm: consolidated Stage 3 author audit

## Current disposition and scope

The unchanged final native candidate and same-stem analysis have passed Stage 3 consistency checks. The package gate is READY_FOR_AUDIT only upon the recorded successful clean replay. This is the authoring context, not independent Stage 4. Integration remains INTEGRATION_PENDING. No upload, shared queue/index edit, repository source edit, integration or publication has occurred.

Original authority remains the unchanged 307-byte reviewed card and EP2321688B1 first embodiment, Table 1 / Figure 7. The CSV's US8508864B2 was not substituted: five cross-publication asphere coefficients differ. The designer-supported similar-design correlation remains qualified; exact production identity is unconfirmed.

## History, entry gate and exact authority

The original frozen Stage 1 gate was null, expected exit 1 with construction_plan_resolved as its only mandatory failure. It remains byte-identical. Historical audit, results, evidence and verifier are retained in the separately declared support history, alongside the later authorized continuation. Nothing was retroactively relabeled.

The distinct stage1_continuation reran the complete source numerical core and the actual pinned runtime stop functions, verified exact user request/reply IDs and literal unchanged S8–S9 geometry, then earned READY_FOR_DATA. Its manifest SHA-256 is 968395e9672149057fd500d9fdee323c282e4190b44d80f6772ac8dc02ba553d. Original Stage 1 manifest SHA-256 is 3ad438d408983d6555273634ff5063ad8789c6cfba3ff1bf0c755b225c1574ae.

The two exceptions are exactly those approved in request Sentinel_85a565959efc8191b4b15ec1297c9e7d / reply Sentinel_04831649cad08191829e44a359fe8a74 (user: Yes):

- nominalFno = apertureDesign = 1.3209570317518873 preserves the printed 15.80 mm iris radius. Patent approximate f/1.4 and marketed T1.4 are separately disclosed. No transmission-derived f-number or apertureMarketing=1.4 is fabricated.
- C18-only gapSagFrac = 0.9705 covers literal fraction 0.9704668595500715 and positive 0.27229555494834123 mm physical clearance. The threshold margin is approximately 0.000305555 mm. All printed radii, spacings and clear radii remain unchanged.

Actual validateLensData contains no apertureDesign check. The separately inspected corpus metadata convention is checked by its ratio, 1.0, but repository-wide patentMetadata.test.ts was not run. No grandfathered offender list was edited.

## Current references and dependencies

Pinned main 33ec433d56ed0044db432d6b0ff0395554d14696, tree f8be39d5dc880508b0cf77e892b4db4ba3ef4f51, verified by the coordinator at 2026-10-12 17:34:19 UTC. Current data and analysis specifications, root template, taxonomy, defaults, shared workflow and relevant authoring/audit guidance are retained with exact hashes in support. No silent runtime switch occurred.

Numerical core: Python 3.12.14 standard library. Actual checks also require Node 24.19.0, TypeScript 5.9.3, Prettier 3.6.2 and esbuild 0.25.11. Official tarballs and reuse provenance are retained; no lifecycle scripts or replay network fetches are needed. This is not a Python-only replay. The host runUTC and orchestration clock differ by about four hours; stable replay excludes the isolated environment object only.

## Source-to-native transformations

The optional front filter L1/S1/S2 is omitted under the current dedicated front-filter contract. Paragraph 0042 says other embodiments can use “no such filter”; it is not a required rear drop-in plate. Source S3 becomes the first active vertex. Numeric surface numbers are retained, S6/S32 gain A suffixes, S22 becomes STO, and source L2–L19 retain those names while native IDs become 1–18. No dummy plane, synthetic cement or rear plate is inserted. The result is 18 powered elements / 15 air-separated groups, three cemented pairs, two aspheres.

The omitted 3 mm S-BSL7 plate plus 2 mm air prefix is represented in object coordinates by 2 + 3/n_d = 3.978461251085 mm. At F2/F3 the model's d-line air-equivalent object-to-fixed-image distances are 532.251461251085 / 341.551461251085 mm. Physical raw-source distances remain 533.273 / 342.573 mm. The equivalent first-surface distances are 343.978461251085 / 153.278461251085 mm, distinct from physical 345.000 / 154.300 mm. Only first-order equivalence is asserted; exact oblique and chromatic behavior of the omitted plate is not preserved.

Focus status is PUBLISHED. All three source gap rows are unchanged. focusPositions = [0, 0.6417107065300492, 1]; F2/F3 carry explicit source-derived, transformed finiteConjugates. G1a remains fixed; G1b shifts imageward 0 / 0.699 / 1.657 mm and G2 plus iris shifts objectward 0 / 0.899 / 1.777 mm. The image remains at 188.273 mm from S3. The F1 runtime endpoint uses true infinity instead of the raw source's 1000010 mm surrogate. Midpoint slider samples are estimates, not a cam reconstruction or marketed MFD. The physical raw-filter source branch remains separately reproducible.

Catalog-named nd/C/F/g values are full-precision current OHARA Sellmeier results, with derived νd and application-baseline ΔPgF. The patent's exact S-family names/codes are preserved. Modern properties are proxies for unavailable historical melts; six-maker residual evidence and S/L distinctions remain. All native calculations read the final TypeScript AST payload, never a second hard-coded application model.

Scale is 1. Standard (1+K) conic convention and all six even EP coefficients per asphere remain unchanged. Actual clear radii are copied literally. The 28 mm source evaluated image circle limits the optical model, while product Super 35/33 mm coverage is separately qualified.

## Final-native numerical results

Independent scalar reduced-angle and ABCD implementations agree within the declared 1e-11 numerical tolerance. The real buildLens EFL and Petzval sum independently match these final-native calculations. d-line Petzval sum is 0.002667623619 mm⁻¹. The table below refers to active S3–S36; BFD is Gaussian infinity focus for each geometry, whereas the last column compares the authored image gap with the appropriate modeled finite conjugate (infinity only at F1).

| State | EFL (mm) | Gaussian infinity BFD (mm) | Authored image gap (mm) | Authored minus conjugate Gaussian gap (mm) |
|---|---:|---:|---:|---:|
| F1 | 18.258034408 | 44.844480149 | 44.800000 | -0.044480149 |
| I12 | 18.169843032 | 44.862108164 | 45.249500 | 0.024301029 |
| F2 | 18.082247995 | 44.879660504 | 45.699000 | -0.047657478 |
| I23 | 17.975533648 | 44.898964447 | 46.138000 | 0.001819800 |
| F3 | 17.869684646 | 44.918187014 | 46.577000 | -0.050393192 |

All per-element standalone powers, cemented net powers, functional-group powers, principal planes, entrance/exit pupils and surface-by-surface Petzval terms are retained. Native d-line and actual runtime anchored e-line calculations are distinguished from the original plate-inclusive catalog e-line source branch. Element fl fields recompute from parsed source radii, thickness and nd. Standalone element power is not asserted to be the isolated in-situ contribution of a cemented interface.

The source's approximate f/1.4 does not become a reproduced Gaussian aperture: native F1 Gaussian EFL/paraxial pupil diameter is 1.288581805, while the actual prime-runtime parameter is 1.3209570317518873. Actual buildLens gives iris radius 15.79999999999999 mm. These definitions, image-space NA and T1.4 transmission remain separate.

## Geometry, rendering and exact-ray coverage

The real validateLensData and buildLens execute on the parsed native model. Source matching, mathematical conic domain/current positive-K rule, actual rim slopes, edge thickness and shared-band gap checks are supplemented by 1001 radial samples for each material/air boundary at F1/F2/F3 and two interpolation samples. This finite sampling is not a continuum proof. The current production render-diagnostics and SVG element-shape functions give 18 finite shapes and zero hidden trim at every tested state. No layout trick or aperture reshaping was used.

A separate browser pixel-preview attempt failed because the environment prevented Chromium's singleton socket. ImageMagick's SVG delegate was unavailable. Attempt logs are retained and browser visual preview is NOT_RUN, rather than inheriting the actual production geometry diagnostics' PASS. No bypass was attempted.

The 3D pupil target grid uses five states, two wavelengths (587.5618 and 546.074 nm), field fractions 0/0.6/1 of the explicitly recorded source diagnostic angles, and 25 pupil targets (center plus radius fractions 0.35/0.7/1 at eight azimuths). Finite launches share the source-derived equivalent object point. Stop aiming temporarily ignores apertures to solve the target; final runtime traces enforce every published clear radius and stop on the first clip. Exact project mtfTraceClassification is retained separately from the raw trace status.

| State | Requested | Solved launches | Transmitted | Raw project aperture clips | Unsolved launches |
|---|---:|---:|---:|---:|---:|
| F1 | 150 | 142 | 90 | 52 | 8 |
| I12 | 150 | 142 | 94 | 48 | 8 |
| F2 | 150 | 144 | 102 | 42 | 6 |
| I23 | 150 | 148 | 96 | 52 | 2 |
| F3 | 150 | 148 | 98 | 50 | 2 |

Total: 750 requested, 724 solved, 480 transmitted, 244 raw aperture clips and 26 unsolved launches; no solved-ray numerical failure. Seven stop-edge clips have only 1.25e-9–9.76e-9 mm aim-residual overfill and are explicitly numerical-boundary effects, not claimed material clipping. No percentage is an area-integrated transmission estimate. Every target/state/wavelength/field/pupil setting, residual and reason remains in results. All 26 unsolved targets are full-field samples at pupil radius 0.7 or 1, with no-decreasing-valid-step failures. They are unresolved targeting coverage, never successful rays or established aperture exclusion. No full-field/full-iris transmission or global solver-completeness claim relies on them; no blanket issue-779 attribution is made.

The wider-field sample includes four S31 cemented-interface aperture exclusions at F2 or I12; these source-rim limits remain disclosed. The actual default display path is tested separately with computeOffAxisTraceGeometry and adaptive conjugateK: 25 rays total across five states, 24 valid and one F3 exit-surface 36 clip, zero failures and no cemented-interior clipping. Axial display/source-distance fans each have six rays per state: 60 requested, 56 valid and four F3 clips, zero failures. Actual finiteObjectPoint resolves the F2/F3 authored conjugates. Adaptive diagram k and source-distance 1/D differ and remain separate diagnostics; no universal zero-Gaussian-defocus gate is invented.

## Source discrepancy and limitation register

All raw source-comparison failures remain in results.comparisons, not relabeled as matches. In particular: group G1a exceeds strict half-increment source rounding in the retained e-line catalog branch; approximate f/1.4 differs from Gaussian and NA definitions; authored finite-image gaps differ from Gaussian best focus; source stop-edge rays clip. Numerical mismatches have bounded interpretations, not silently widened tolerances.

Figure 11a is 38.04°, not the historical intake's 38.044 reading, and paragraph 0057's 37.13 assignment conflicts with its figure. Table 2's F3 illumination value is literal 753 without a decimal correction. L19's Table 1/Figure 7/claim-1 positive biconvex geometry conflicts with biconcave paragraph/claim-12 wording. Paragraph 0045 calls L14 a positive meniscus despite its retained biconvex vertex radii and L17 biconcave despite its negative-meniscus vertex radii/aspheric rear; the native types describe vertex geometry without changing any optical value. Source pressure remains 769 mm Hg. Source e-line evaluated apertures, approximate f/1.4, 28 mm field and +2.4% breathing remain distinct from marketed T1.4, 33 mm and no-breathing language. Manufacturer webpage 0.45 m versus data-sheet 0.5 m MFD disagreement remains; neither replaces the source finite states. No APO-performance, diffraction MTF, illumination or thermal simulation is claimed.

## Executed checks and mutation fixtures

- Original card/PDF hashes and exact four-field job binding.
- Full inherited source numerical core, original discrepancies and actual stop-function probe.
- Real TypeScript 5.9.3 strict literal AST parser; comments/signed-exponents/trailing commas accepted; duplicate keys, arithmetic, spreads, calls, computed keys, shorthand, methods, identifiers, sparse arrays and trailing statements rejected.
- Real strict noEmit LensDataInput program against the actual retained type dependencies, with invalid string nominalFno detected (TS2322).
- Actual Prettier 3.6.2 project-config check.
- Native source radius and asphere-sign mutations detected independently of parsing.
- Actual runtime gap cap mutation to 0.97 rejected while authorized 0.9705 passes.
- Actual taxonomy, build, validation, named-glass resolution, derived physical iris, prepared-state gaps, finite conjugates, rays, render trims and shape finiteness.
- Independent final-native first-order/group/element/pupil/Petzval/asphere recomputation and comparison against real runtime outputs.

No per-lens repository test or full build was authored or run. Full-corpus tests, metadata generation, full build/prerender and independent Stage 4 remain pending.

## Quantitative-claim and manual review map

| Claim family | Executed facts / authority |
|---|---|
| Native metadata, element/surface labels, counts and source optical fields | source_model_exact_mapping; facts.nativeLoader; evidence.stage2Construction |
| Element fl / group and cemented power / cardinal planes | implementedModel.statesByWavelength.*.*.standaloneElements, groups, cementedAssemblies and ABCD |
| EFL, BFD, image gap, conjugate residual and Petzval | implementedModel; runtime_numerical_roundtrip |
| Asphere coefficients/departures/rim slopes | implementedModel.aspheres; facts.asphereDepartures; exact source mapping |
| Aperture authorization and physical iris | evidence.continuationAuthority; facts.actualRuntimeApertureProbe; facts.nativeRuntime.build |
| Gap geometry and approval margin | facts.sourceGapPolicy; nativeRuntime.states.*.geometry |
| Glass coordinates and modern-melt limitation | facts.catalog; glassEvidence; facts.nativeRuntime.glasses |
| Focus positions and physical/equivalent distances | finite_conjugate_distances; focus_runtime_states; evidence.stage2Construction |
| Exact pupil counts and classifications | facts.nativeRuntime.rays, rayTotals, rayTotalsByState |
| Actual adaptive versus finite launches | facts.nativeRuntime.states; diagramRays; offAxisDiagramRays |
| Product/source discrepancies | evidence.productCorrelation, openIssues; unchanged original patent/manufacturer/designer files |

Manual source and interpretive review confirms that the construction ledger, optical metadata and limitations above distinguish source assertions, modern catalog results, calculated model facts and modeling inferences. This review is the author's work, not independent Stage 4. The Stage 3 analysis and its final numeric/metadata checks are recorded below.

## Stage 3 entry verification and unchanged data

The combined launcher's Stage 3 entry gate was executed before prose authoring. Every frozen Stage 2 member and checkpoint binding was hash-verified, and a complete offline verifier run reproduced all stable Stage 2 JSON exactly (only the isolated environment object is excluded). The entry receipt is retained in the declared history/replay archive.

Native data SHA-256 remained 87cef64e418e7e6805f0c720a025decfa1ea0e27576934bdbc1a0a2cec2ce3a1. There was no optical-payload edit, formatting change to data.ts, source switch, aperture/spacing/radius change, exception expansion or Stage 2 optical reopening. Three published states, the same two sampled intermediate states, all 26 unresolved full-field targets and complete denominators remain. Stage 3 adds interpretation, numeric-claim checking and packaging-metadata consistency, not new model authority.

### Historical disposition correction

The immutable Stage 2 manifest (SHA-256 23e9c8cfe1d26e274f0366b0278eba0afbd4fa0d80dfcda26317c2996de06f46) and the earlier continuation manifest inherited the old HOLD_PENDING_LENS_SPECIFIC_REPRESENTATION_AND_CONSTRUCTION_SCOPE disposition string while their actual gate/check fields correctly recorded earned READY gates. This was stale packaging text, not a source, optical or gate-computation defect. The old files remain unchanged as historical evidence.

The new Stage 3 manifest explicitly sets its current disposition equal to its earned gate and carries no unresolved blocker. The portable verifier now rejects any READY gate with a different disposition or nonempty blockers and rejects a null gate with a READY disposition. Three deliberately inconsistent negative fixtures and two consistent positive fixtures execute in every Stage 3 replay. This prevents a stale HOLD string from silently coexisting with READY again.

## Stage 3 analysis checks and editorial review

The final same-stem analysis follows the current required skeleton, metadata block, eighteen element sections, consolidated glass table, focusing/conjugate definitions, exact asphere equation and coefficients, bounded aperture/geometry discussion and primary-source references. Numerical values come from the parsed native model or explicitly named source-model branches. Vertex shape, standalone element power, assembled cemented power and in-situ aberration interpretation remain distinct.

Actual Prettier checks both the data and present analysis. The real TypeScript AST loader/typechecker, source-mutation fixtures, actual runtime functions and inherited numerical/geometry checks all rerun. Additional checks compare every element heading, its full first-line nd/νd/glass/focal-length tuple, patent metadata, required section order, optical classifications, current ray accounting, scalar rounding/claim map, mandatory disclosures and portable citations. Literal word-count claims also bind to explicitly checked numeric values. No simulated performance claim is established merely by matching text.

Manual review checked the source-to-production correlation, source locators, native element shapes, all polynomial coefficients, glass proxy limitations, physical versus equivalent coordinates, finite and adaptive ray distinctions, actual raw clipping and targeting residuals, and the source's contradictory shape/angle/illumination/pressure statements. Eight Markdown tables were structurally checked after formatting; all eighteen element headings remain present. No readiness badge or workflow narrative is placed in the analysis. This remains author review, not an independent audit.

A separate negative prose fixture replaced every 18.258034 EFL token with 18.358034 while retaining identical data bytes. The complete verifier exited 1 with analysis_quantitative_claims as the mandatory failure. The negative artifact/results and receipt are retained in unique work. The delivered analysis is the unmodified passing counterpart.

## Detailed analysis claim-to-result map

All paths below resolve during each portable execution, using the governing unchanged native-data fingerprint above. `native` means the final TypeScript AST payload; `implemented` means its freshly computed facts; `runtime` means actual executed project functions; `source` means the retained explicitly identified source-model calculation; `evidence` means raw primary-source facts; `computed` means the source numerical diagnostics computed in this run. The map verifies rounded tokens and, where the prose spells a number, its explicit expected numeric value. Element lines are additionally checked as whole tuples.

| Claim ID | Governing path | Published format | Explicit numeric value when spelled |
|---|---|---|---|
| element_count | native.elementCount | {} |  |
| group_count | native.groupCount | {} |  |
| baseline_efl | implemented.statesByWavelength.587.5618.F1.eflMm | {:.6f} |  |
| baseline_bfd | implemented.statesByWavelength.587.5618.F1.bfdMm | {:.6f} |  |
| baseline_image_gap | implemented.statesByWavelength.587.5618.F1.authoredImageGapMm | {:.3f} |  |
| active_track | implemented.statesByWavelength.587.5618.F1.trackToAuthoredImageMm | {:.3f} |  |
| group_G1a | implemented.statesByWavelength.587.5618.F1.groups.G1a.eflMm | {:+.3f} |  |
| group_G1b | implemented.statesByWavelength.587.5618.F1.groups.G1b.eflMm | {:+.3f} |  |
| group_G2 | implemented.statesByWavelength.587.5618.F1.groups.G2.eflMm | {:+.3f} |  |
| group_G1 | implemented.statesByWavelength.587.5618.F1.groups.G1.eflMm | {:+.3f} |  |
| L2_nd | native.elements.0.nd | {:.5f} |  |
| L2_vd | native.elements.0.vd | {:.2f} |  |
| L2_fl | native.elements.0.fl | {:+.2f} |  |
| L3_nd | native.elements.1.nd | {:.5f} |  |
| L3_vd | native.elements.1.vd | {:.2f} |  |
| L3_fl | native.elements.1.fl | {:+.2f} |  |
| L4_nd | native.elements.2.nd | {:.5f} |  |
| L4_vd | native.elements.2.vd | {:.2f} |  |
| L4_fl | native.elements.2.fl | {:+.2f} |  |
| L5_nd | native.elements.3.nd | {:.5f} |  |
| L5_vd | native.elements.3.vd | {:.2f} |  |
| L5_fl | native.elements.3.fl | {:+.2f} |  |
| L6_nd | native.elements.4.nd | {:.5f} |  |
| L6_vd | native.elements.4.vd | {:.2f} |  |
| L6_fl | native.elements.4.fl | {:+.2f} |  |
| L7_nd | native.elements.5.nd | {:.5f} |  |
| L7_vd | native.elements.5.vd | {:.2f} |  |
| L7_fl | native.elements.5.fl | {:+.2f} |  |
| L8_nd | native.elements.6.nd | {:.5f} |  |
| L8_vd | native.elements.6.vd | {:.2f} |  |
| L8_fl | native.elements.6.fl | {:+.2f} |  |
| L9_nd | native.elements.7.nd | {:.5f} |  |
| L9_vd | native.elements.7.vd | {:.2f} |  |
| L9_fl | native.elements.7.fl | {:+.2f} |  |
| L10_nd | native.elements.8.nd | {:.5f} |  |
| L10_vd | native.elements.8.vd | {:.2f} |  |
| L10_fl | native.elements.8.fl | {:+.2f} |  |
| L11_nd | native.elements.9.nd | {:.5f} |  |
| L11_vd | native.elements.9.vd | {:.2f} |  |
| L11_fl | native.elements.9.fl | {:+.2f} |  |
| L12_nd | native.elements.10.nd | {:.5f} |  |
| L12_vd | native.elements.10.vd | {:.2f} |  |
| L12_fl | native.elements.10.fl | {:+.2f} |  |
| L13_nd | native.elements.11.nd | {:.5f} |  |
| L13_vd | native.elements.11.vd | {:.2f} |  |
| L13_fl | native.elements.11.fl | {:+.2f} |  |
| L14_nd | native.elements.12.nd | {:.5f} |  |
| L14_vd | native.elements.12.vd | {:.2f} |  |
| L14_fl | native.elements.12.fl | {:+.2f} |  |
| L15_nd | native.elements.13.nd | {:.5f} |  |
| L15_vd | native.elements.13.vd | {:.2f} |  |
| L15_fl | native.elements.13.fl | {:+.2f} |  |
| L16_nd | native.elements.14.nd | {:.5f} |  |
| L16_vd | native.elements.14.vd | {:.2f} |  |
| L16_fl | native.elements.14.fl | {:+.2f} |  |
| L17_nd | native.elements.15.nd | {:.5f} |  |
| L17_vd | native.elements.15.vd | {:.2f} |  |
| L17_fl | native.elements.15.fl | {:+.2f} |  |
| L18_nd | native.elements.16.nd | {:.5f} |  |
| L18_vd | native.elements.16.vd | {:.2f} |  |
| L18_fl | native.elements.16.fl | {:+.2f} |  |
| L19_nd | native.elements.17.nd | {:.5f} |  |
| L19_vd | native.elements.17.vd | {:.2f} |  |
| L19_fl | native.elements.17.fl | {:+.2f} |  |
| doublet_0 | implemented.statesByWavelength.587.5618.F1.cementedAssemblies.0.eflMm | {:+.3f} |  |
| doublet_1 | implemented.statesByWavelength.587.5618.F1.cementedAssemblies.1.eflMm | {:+.3f} |  |
| doublet_2 | implemented.statesByWavelength.587.5618.F1.cementedAssemblies.2.eflMm | {:+.3f} |  |
| glass_dpg_0 | native.elements.0.dPgF | {:+.6f} |  |
| glass_dpg_1 | native.elements.1.dPgF | {:+.6f} |  |
| glass_dpg_2 | native.elements.2.dPgF | {:+.6f} |  |
| glass_dpg_3 | native.elements.3.dPgF | {:+.6f} |  |
| glass_dpg_4 | native.elements.4.dPgF | {:+.6f} |  |
| glass_dpg_5 | native.elements.5.dPgF | {:+.6f} |  |
| glass_dpg_6 | native.elements.6.dPgF | {:+.6f} |  |
| glass_dpg_8 | native.elements.8.dPgF | {:+.6f} |  |
| glass_dpg_9 | native.elements.9.dPgF | {:+.6f} |  |
| glass_dpg_13 | native.elements.13.dPgF | {:+.6f} |  |
| glass_dpg_16 | native.elements.16.dPgF | {:+.6f} |  |
| gap_F1_6A | native.var.6A.0 | {:.3f} |  |
| gap_F1_21 | native.var.21.0 | {:.3f} |  |
| gap_F1_36 | native.var.36.0 | {:.3f} |  |
| motion_F1_G1bMm | computed.focusMotion.0.G1bMm | {:+.3f} |  |
| motion_F1_G2Mm | computed.focusMotion.0.G2Mm | {:+.3f} |  |
| gap_F2_6A | native.var.6A.1 | {:.3f} |  |
| gap_F2_21 | native.var.21.1 | {:.3f} |  |
| gap_F2_36 | native.var.36.1 | {:.3f} |  |
| motion_F2_G1bMm | computed.focusMotion.1.G1bMm | {:+.3f} |  |
| motion_F2_G2Mm | computed.focusMotion.1.G2Mm | {:+.3f} |  |
| gap_F3_6A | native.var.6A.2 | {:.3f} |  |
| gap_F3_21 | native.var.21.2 | {:.3f} |  |
| gap_F3_36 | native.var.36.2 | {:.3f} |  |
| motion_F3_G1bMm | computed.focusMotion.2.G1bMm | {:+.3f} |  |
| motion_F3_G2Mm | computed.focusMotion.2.G2Mm | {:+.3f} |  |
| focus_track | implemented.statesByWavelength.587.5618.F1.trackToAuthoredImageMm | {:.3f} |  |
| equivalent_prefix | evidence.stage2Construction.frontAirEquivalentPrefixMm | {:.9f} |  |
| physical_F2 | evidence.stage2Construction.physicalImageDistancesMm.F2 | {:.3f} |  |
| equiv_F2 | evidence.stage2Construction.derivedEquivalentImageDistancesMm.F2 | {:.9f} |  |
| physical_F3 | evidence.stage2Construction.physicalImageDistancesMm.F3 | {:.3f} |  |
| equiv_F3 | evidence.stage2Construction.derivedEquivalentImageDistancesMm.F3 | {:.9f} |  |
| close_focus | native.closeFocusM | {:.12f} |  |
| focus_coordinate | native.focusPositions.1 | {:.12f} |  |
| focus_efl_F1 | implemented.statesByWavelength.587.5618.F1.eflMm | {:.6f} |  |
| focus_defocus_F1 | implemented.statesByWavelength.587.5618.F1.authoredMinusGaussianImageGapMm | {:+.6f} |  |
| focus_efl_F2 | implemented.statesByWavelength.587.5618.F2.eflMm | {:.6f} |  |
| focus_defocus_F2 | implemented.statesByWavelength.587.5618.F2.authoredMinusGaussianImageGapMm | {:+.6f} |  |
| focus_efl_F3 | implemented.statesByWavelength.587.5618.F3.eflMm | {:.6f} |  |
| focus_defocus_F3 | implemented.statesByWavelength.587.5618.F3.authoredMinusGaussianImageGapMm | {:+.6f} |  |
| asphere_6A_K | native.asph.6A.K | {:.4f} |  |
| asphere_32A_K | native.asph.32A.K | {:.4f} |  |
| asphere_6A_A4 | native.asph.6A.A4 | {:.3e} |  |
| asphere_32A_A4 | native.asph.32A.A4 | {:.3e} |  |
| asphere_6A_A6 | native.asph.6A.A6 | {:.3e} |  |
| asphere_32A_A6 | native.asph.32A.A6 | {:.3e} |  |
| asphere_6A_A8 | native.asph.6A.A8 | {:.3e} |  |
| asphere_32A_A8 | native.asph.32A.A8 | {:.3e} |  |
| asphere_6A_A10 | native.asph.6A.A10 | {:.3e} |  |
| asphere_32A_A10 | native.asph.32A.A10 | {:.5e} |  |
| asphere_6A_A12 | native.asph.6A.A12 | {:.3e} |  |
| asphere_32A_A12 | native.asph.32A.A12 | {:.3e} |  |
| asphere_6A_A14 | native.asph.6A.A14 | {:.3e} |  |
| asphere_32A_A14 | native.asph.32A.A14 | {:.3e} |  |
| asphere_metric_6A_publishedRadiusMm | implemented.aspheres.0.publishedRadiusMm | {:.2f} |  |
| asphere_metric_6A_sagMm | implemented.aspheres.0.sagMm | {:+.6f} |  |
| asphere_metric_6A_departureFromVertexSphereMm | implemented.aspheres.0.departureFromVertexSphereMm | {:+.6f} |  |
| asphere_metric_6A_rimAngleDeg | implemented.aspheres.0.rimAngleDeg | {:.6f} |  |
| asphere_metric_32A_publishedRadiusMm | implemented.aspheres.1.publishedRadiusMm | {:.2f} |  |
| asphere_metric_32A_sagMm | implemented.aspheres.1.sagMm | {:+.6f} |  |
| asphere_metric_32A_departureFromVertexSphereMm | implemented.aspheres.1.departureFromVertexSphereMm | {:+.6f} |  |
| asphere_metric_32A_rimAngleDeg | implemented.aspheres.1.rimAngleDeg | {:.6f} |  |
| iris_radius | native.surfaces.19.sd | {:.2f} |  |
| runtime_aperture | native.nominalFno | {} |  |
| gaussian_fno | implemented.statesByWavelength.587.5618.F1.pupils.gaussianEflOverPupilDiameter | {:.9f} |  |
| gap_allowance | native.gapSagFrac | {:.4f} |  |
| measured_gap | computed.sourceGapPolicy.literalFraction | {:.12f} |  |
| gap_clearance | computed.sourceGapPolicy.physicalClearanceMm | {:.9f} |  |
| ray_total_requested | runtime.rayTotals.requested | {} |  |
| ray_total_solvedLaunches | runtime.rayTotals.solvedLaunches | {} |  |
| ray_total_transmitted | runtime.rayTotals.transmitted | {} |  |
| ray_total_aperture-clipped | runtime.rayTotals.aperture-clipped | {} |  |
| ray_total_unsolved-launch | runtime.rayTotals.unsolved-launch | {} |  |
| breathing_printed | computed.breathingPrinted | {:.6f} |  |
| breathing_exact | computed.breathingExact | {:.6f} |  |
| petzval_sum | implemented.statesByWavelength.587.5618.F1.petzvalSumPerMm | {:.12f} |  |
| source_G1a_e_rounding | source.e_line_source_reference.F1.rawPlateInclusive.groups.G1a.eflMm | {:.4f} |  |
| source_G1a_printed | evidence.rawPrescription.systemQuantities.groupFocalLengths.G1a | {:.2f} |  |
| marketing_image_circle | evidence.productCorrelation.marketing.imageCircleMm | {} mm |  |
| marketing_mechanical_length | evidence.productCorrelation.marketing.mechanicalLengthMm | {} mm |  |
| marketing_web_mfd | evidence.productCorrelation.marketing.closeFocusCurrentWebM | {:.2f} m |  |
| marketing_sheet_mfd | evidence.productCorrelation.marketing.closeFocusPriorSheetM | {:.1f} m |  |
| source_environment_literal | evidence.rawPrescription.environment.pressureMmHg | {} mm Hg |  |
| source_illumination_literal | evidence.rawPrescription.performance.F3.relativeIlluminationPercent.2 | {} |  |
| source_field_F1 | computed.exactChiefs.0.publishedFieldFromAxisDeg | {:.2f}° |  |
| source_field_F2 | computed.exactChiefs.1.publishedFieldFromAxisDeg | {:.2f}° |  |
| source_field_F3 | computed.exactChiefs.2.publishedFieldFromAxisDeg | {:.2f}° |  |
| fresh_activeNamedGlassCount | implemented.analysisNumericalSummary.activeNamedGlassCount | eleven | 11 |
| fresh_fullPupilRequested | implemented.analysisNumericalSummary.fullPupilRequested | {} |  |
| fresh_fullPupilSolved | implemented.analysisNumericalSummary.fullPupilSolved | {} |  |
| fresh_fullPupilTransmitted | implemented.analysisNumericalSummary.fullPupilTransmitted | {} |  |
| fresh_fullPupilClipped | implemented.analysisNumericalSummary.fullPupilClipped | {} |  |
| fresh_fullPupilUnsolved | implemented.analysisNumericalSummary.fullPupilUnsolved | {} |  |
| fresh_stopBoundaryCount | implemented.analysisNumericalSummary.stopBoundaryCount | Seven | 7 |
| fresh_stopBoundaryMinOverfillMm | implemented.analysisNumericalSummary.stopBoundaryMinOverfillMm | {:.2e} |  |
| fresh_stopBoundaryMaxOverfillMm | implemented.analysisNumericalSummary.stopBoundaryMaxOverfillMm | {:.2e} |  |
| fresh_S31ClipCount | implemented.analysisNumericalSummary.S31ClipCount | Four | 4 |
| fresh_offAxisRequested | implemented.analysisNumericalSummary.offAxisRequested | {} |  |
| fresh_offAxisValid | implemented.analysisNumericalSummary.offAxisValid | {} |  |
| fresh_offAxisBlocked | implemented.analysisNumericalSummary.offAxisBlocked | one F3 | 1 |
| fresh_axialRequested | implemented.analysisNumericalSummary.axialRequested | {} |  |
| fresh_axialValid | implemented.analysisNumericalSummary.axialValid | {} |  |
| fresh_axialClipped | implemented.analysisNumericalSummary.axialClipped | four F3 | 4 |

## Full support, historical preservation and final replay

The canonical Stage 3 dossier has nine root files: original patent, original card, data, analysis, evidence, complete verifier, regenerated results, consolidated audit and manifest. All source-original bytes and the Stage 2 data fingerprint are unchanged. The Stage 2 checkpoint remains immutable and its hashes are carried forward explicitly.

The exact 34,205,865-byte runtime/source/reference support ZIP is reused, with SHA-256 cf35e13e5a7ad3bbd7a184dc777138d6f45a4389cd64a896224a64ef4c4c89c0. It is delivered through the coordinator's two unchanged byte-volume ZIPs, each below 25 MiB. Their explicit map verifies payload order, payload hashes and reconstructed archive hash before safe extraction. Neither individual payload is a standalone support ZIP. The support's Stage 2 guide and historical status wording remain historical; the current Stage 3 replay guide governs the final dossier.

A separate history/replay ZIP preserves the original Stage 1, authorized continuation and Stage 2 canonical checkpoints, authority and receipts, original support inventory, and the current reconstruction/replay program. The original Stage 1 support ZIP is also retained as an explicitly identified below-25-MiB historical artifact. Separate original/Stage 2 unique-work archives and the final Stage 3 unique-work archive preserve attempts and custom authoring work. No extra files are concealed in the nine-file canonical dossier.

Final replay starts from an empty directory, reconstructs support solely from the two delivery ZIP volumes, verifies its exact bytes and complete declared membership, extracts the canonical dossier safely, verifies all nine members and hashes, executes the portable verifier offline, and compares all stable results without modifying packaged results.json. Final manifest gate/disposition consistency is checked during that replay. The external freeze receipt records actual outcome and hashes. No unverified archive or stale-data approval is carried forward.

## Independent audit and integration (closed 2026-10-13)

Closed: the independent Stage 4 audit is at the top of this file and the deployment validation is in the last section. The original text follows.

STOP after this authoring package. Independent source-first Stage 4 must run in a fresh reviewer context. Full-corpus tests, generate:metadata, full build/prerender, repository integration and publication remain NOT_RUN/INTEGRATION_PENDING. The attempted browser pixel preview remains unavailable under the recorded socket restriction; actual production shape and trim diagnostics passed. No retry or alternate route bypassed that restriction.

## 2026-10-13 — Deployment validation and wording pass

Source re-read. EP 2 321 688 B1 Table 1 was read again from the PDF text layer and checked against 200–400 dpi renders of pages 7–8. 34 surfaces (radius, separation, clear half-diameter, glass name and code), 14 asphere values (K and A–F on S6 and S32) and 9 variable gaps (S6, S21 and S36 at F1/F2/F3) agree with the data file; there are no mismatches. The asphere equation is the standard (1+K) conic with R⁴ to R¹⁴ terms. The printed codes for S-LAL61 (741527) and S-PHM52 (618634) differ from the current catalog νd in the last digit; the file carries current OHARA catalog values. US 8,508,864 B2 carries the same Table 1 but, as read from its Google Patents text, prints five asphere coefficients differently (S6 A, C and E; S32 A and E). With those values the full-field chief ray traces to about 32.5° instead of the 38.04° of Figure 11a, so the EP values are the correct reading.

Patent versus model. Group focal lengths at 546.074 nm are −179.998 / +95.669 / +41.477 mm against the printed −179.99 / +95.67 / +41.48 mm. EFL is 18.258 mm at the d line (patent: “substantially 18mm”). The paraxial back focal distance is 44.844 mm against the printed 44.800 mm image gap. Track is 188.273 mm from S3 to the image and 193.273 mm from S1. Full-field chief-ray angles are 38.04° / 37.68° / 37.12° against 38.04° / 37.68° / 37.13° in Figures 11a–c, and the Table 2 distortion is reproduced at all twelve points within 0.01 percentage points. The F2 and F3 conjugates focus within 0.05 mm of the printed image gaps. The repository surface validator reports no errors, and field coverage is 100% at the 14.00 mm image height.

Aperture. The patent states only “approximately f/1.4”. The axial ray through the edge of the printed 15.80 mm stop half-diameter gives f/1.321. It exceeds the printed half-diameters of S17–S21 by 0.074–0.089 mm, and the largest axial beam clearing every printed aperture is f/1.328 (15.715 mm at the stop). Behind the stop that ray clears S23–S25 by 0.012–0.052 mm. An f/1.4 beam needs a 14.86 mm stop radius and clears every printed aperture.

Maker comparison. Leitz publishes no optical section or element count for the Summilux-C 18mm. Published product figures are T1.4, 142 mm length, 95 mm front diameter, 33 mm image circle and close focus of 0.45 m (web page), 0.5 m (data sheet) or 0.35 m (Panavision rental listing). The patent example measures 193.27 mm from the front filter to the image (142 mm plus the 52 mm PL flange depth is 194 mm), covers a 28 mm image diagonal, has its nearest printed state at 342.6 mm object to image and states +2.4% breathing. The patent has three embodiments (18, 40 and 100 mm), so no other example fits the 18 mm.

Fields changed in this pass. Data file: header comment, subtitle, specs, the four sourceErrata notes, label, role and apdNote on all 18 elements, and focusDescription. Shortly before this pass name was set to “LEICA SUMMILUX-C 18mm T1.4”, patentAuthors to “Iain A. Neil” and imageFormat to “35mm-cinema”. No radius, thickness, index, asphere coefficient, semi-diameter, variable gap, focus position or f-number field was changed: EFL 18.25803440789957 mm, the 15.8 mm stop radius, f/1.3209570317518873 and the three focus keyframes are identical before and after. Analysis: pipeline vocabulary removed, the section “Aperture and Verified Model Limits” renamed “Aperture and Model Limitations” and reduced to statements about the lens, the inventor line and a note on the L2–L19 numbering added, and one source (the Panavision listing) added. The “pending” statements in the Stage 3 text above are closed by this section.

Open: the choice between the printed-iris aperture (f/1.321, current) and the patent's stated f/1.4 is undecided.

Closed 2026-10-13: the two finiteConjugates source strings now read "EP 2 321 688 B1, Table 1, focus position F2 / F3: printed gaps; object distance with the optional front filter replaced by its air-equivalent thickness."

Closed 2026-10-13: L3, L6, L9, L13, L14 and L16 (¶0046: S-FPL51 and S-FPL53 named as abnormal-dispersion glasses) and L18 (claim 10; S-NPH1) now carry `apd: "patent"` with the paragraph or claim cited in `apdNote`, as the 40 mm and 100 mm sibling files do.

## 2026-10-13 — Semi-diameter pass against the patent figure

Result. No semi-diameter was changed. All 34 stored `sd` values equal the “Aperture Half Diameter” column of EP 2 321 688 B1 Table 1 (pages 7–8, typeset text, read from the text layer and from 170 dpi renders of both pages), including the 15.80 mm stop. Radius and separation were compared in the same pass and also agree on all 34 surfaces. The printed column governs over figure readings, so the figures were used to confirm the table and the rendered section, not to set values. The only file edit is a four-line semi-diameter note in the data-file header; the analysis is unchanged because no aspheric aperture moved (6A 26.45 mm, 32A 20.05 mm).

Figures used. `patents/EP2321688B1.pdf` page 31 (Figure 7, a 300 ppi bilevel raster printed sideways) and page 32 (Figures 8a–8c). Figure 7 is drawn at focus position F2, not at infinity: the drawn S6–S7 gap measures 8.7 mm (Table 1: 7.955 / 8.654 / 9.612 at F1 / F2 / F3), S21–S23 measures 7.3 mm (9.099 / 7.501 / 5.665) and S36 to the image measures 45.7 mm (44.800 / 45.699 / 46.577). It was therefore compared with the model at the middle keyframe, and Figures 8a and 8c with the infinity and nearest keyframes.

Scale. Figure 7 axial scale is 10.29 px/mm at 300 dpi: S1 vertex to the image plane is 1989.5 px for 193.273 mm, S7 to S36 is 1275 px for 123.873 mm (10.29) and S7 to S21 is 687 px for 66.934 mm (10.26); the sheet's 25.00 mm bar measures 259 px (10.36). The radial scale is 10.48 px/mm: the image line is 293 px long for the 28 mm image diagonal (10.46), and the S8 arc (R = 22.024 mm) read at 130, 150, 165 and 175 px off axis on both sides gives 10.55, 10.49, 10.51 and 10.47. The sheet is thus about 2% taller than wide and is sheared by about 0.7°; both were removed for the overlays. Figures 8a and 8c are 7.47 px/mm axially (S1 to image 1444.5 px and 1443 px) and about 7.4 px/mm radially (image line 208 px and 206 px for 28 mm); their “33.33 MM” bar measures 238 px (7.14 px/mm), 4.5% short of the prescription scale, so the bar was not used.

What the figure draws. Rim heights were read on both sides of the axis from the flat edge runs (±1 px, about ±0.1 mm; the radial scale adds about ±0.5%). Every element is drawn with a square-cut edge that stands 1.1–1.8 mm above the larger printed half-diameter of that element, a ratio of 1.05–1.07; where the two faces have different printed apertures the smaller face is stepped out to the edge with a flat annulus. Surface arcs coincide with the modeled surfaces out to the printed apertures in all three overlays, and the figure's marginal rays graze the printed rims. The excess is a mechanical edge allowance, which a per-surface clear aperture cannot carry and which would remove real vignetting if it were added to `sd`.

| Element | Surfaces | Printed = stored sd (mm) | Figure 7 edge (mm) | Edge − larger printed (mm) | Rim as drawn |
| ------- | -------- | ------------------------ | -----------------: | -------------------------: | ------------ |
| L2 | 3 / 4 | 38.13 / 37.07 | 39.9 | +1.8 | narrow cap |
| L3 | 5 / 6A | 30.10 / 26.45 | 31.7 | +1.6 | square block, flat annulus on 6A |
| L4 | 7 / 8 | 22.90 / 17.47 | 24.3 | +1.4 | square block, flat annulus on 8 |
| L5 | 9 / 10 | 17.47 / 17.51 | 18.8 | +1.3 | narrow cap |
| L6 | 11 / 12 | 17.48 / 18.79 | 20.1 | +1.3 | square block, flat annulus on 11 |
| L7 | 13 / 14 | 20.79 / 20.81 | 22.2 | +1.4 | narrow cap |
| L8 | 15 / 16 | 20.21 / 19.90 | 21.5 | +1.3 | narrow cap |
| L9 | 17 / 18 | 15.96 / 15.92 | 17.1 | +1.1 | narrow cap |
| L10 + L11 | 19 / 20 / 21 | 15.74 / 15.74 / 16.28 | 17.5 | +1.2 | one square top across the doublet |
| L12 | 23 / 24 | 15.73 / 16.57 | 17.8 | +1.2 | square block |
| L13 | 25 / 26 | 16.99 / 17.31 | 18.6 | +1.3 | narrow cap |
| L14 + L15 | 27 / 28 / 29 | 17.88 / 17.95 / 18.89 | 20.1 | +1.2 | one top across the doublet, chamfered at 29 |
| L16 | 30 / 31 | 17.91 / 17.78 | 19.2 | +1.3 | short step below L17 |
| L17 | 31 / 32A | 17.78 / 20.05 | 21.4 | +1.3 | square block, flat annulus on its front face |
| L18 | 33 / 34 | 20.42 / 20.75 | 22.0 | +1.3 | narrow cap |
| L19 | 35 / 36 | 21.27 / 21.41 | 22.7 | +1.3 | narrow cap |

The omitted filter L1 is drawn at 43.3 mm against its printed 41.46 mm. The order of heights between neighbours is the same in the figure and in the table for all 15 adjacent pairs (L2 > L3 > L4 > L5 < L6 < L7 > L8 > L9 < L10–L11 < L12 < L13 < L14–L15 > L16 < L17 < L18 < L19), and the L17-over-L16 step is 2.2 mm drawn against 2.14 mm printed, so no comparative step needed correcting.

Rendered section. The local page was captured at infinity, at the middle keyframe and at the nearest keyframe, and the element outlines were taken from the rendered diagram and laid over Figures 8a, 7 and 8c at matched scale. Vertices, curvatures and the three group positions coincide with the drawings within the line width; the image plane stays fixed while L4 moves 0.699 mm and 1.657 mm toward the image and L19 moves 0.899 mm and 1.777 mm toward the object. All 18 elements render at their full printed half-diameters in the three states (largest difference 0.0000 mm, no hidden trim). The remaining difference from the figure is the edge treatment: the diagram joins the two printed rims of an element with a straight edge, so L3, L4, L6, L12, L17 and the outer members of the doublets show a sloped rim where the figure shows a square block about 1.3 mm taller.

Clearance at the stored values. The image-circle check reports no undersized surface. The surface validator reports no errors at the file's `gapSagFrac` of 0.9705; the same data are rejected at 0.97 (S8–S9 sag 8.95 mm against 8.943 mm allowed) and at the default 0.90 (S8–S9 and S10–S11), so no printed rim is held below its value, and the smallest two-decimal setting that would admit them is 0.98. Field coverage is 100%: the chief ray reaches 14.00 mm at 38.04°, 37.67° and 37.12° for the three keyframes and stays inside every printed aperture (closest in proportion: 23.7–24.6 mm at S5 against 30.10 mm, and 29.6–30.6 mm at S3 against 38.13 mm). Aspheric surface 32A reverses slope near 15.3 mm, inside its printed 20.05 mm aperture; that is the printed design, not an extrapolation, and the value stays.

On-axis beam at the file's f/1.321. The axial ray through the edge of the 15.80 mm stop was traced at each keyframe. At infinity it exceeds the printed half-diameters of S17–S21 by 0.074, 0.082, 0.081, 0.083 and 0.089 mm and clears S23–S26 by 0.012–0.065 mm. At F2 with the object 532.3 mm from the image it fills S23–S26 to within 0.008 mm and exceeds none by more than 0.001 mm. At F3 with the object 341.6 mm from the image it exceeds S23–S36 by 0.005–0.141 mm, the most at S35. With a 14.86 mm stop radius (f/1.4 at infinity) the axial ray clears every printed aperture at all three keyframes by more than 0.1 mm. The repository's aperture audit asks for 16.04 / 16.01 / 15.83 / 15.83 / 16.37 mm on S17–S21 to pass the f/1.321 ray; those raises were not made because the printed apertures govern and the aperture basis is an open decision.

Unchanged engine values. EFL 18.258 mm, f/1.3210, stop radius 15.80 mm, half-field estimate 42.04° and traced corner field 38.0° are the same before and after, since no `sd` moved.

Maker comparison. No manufacturer diagram was viewed in this pass. The deployment validation section above records that Leitz publishes no optical section or element count for this lens, so the patent figure is the only drawing the section can be compared with.

Open limitations. The aperture basis (printed iris against the stated f/1.4) is still undecided, and the on-axis overfill listed above follows from it. The figure's mechanical edges and flat annuli are not represented. Figures 8a and 8c were overlaid but not measured element by element. The automatic figure screen was not run because Figure 7 carries ray bundles, leader lines and group boxes through every rim.

## 2026-10-13 — Glass fields

The 18 elements' `nC`, `nF` and `ng` were removed. They were copies of the current OHARA catalog values for the named glass (equal to the repository's catalog rows to 1e-15), so each element now traces on the same catalog curve directly instead of on three stored lines. Every `glass` label resolves to its named row (18 of 18), and `dPgF` is unchanged. Seven elements gained `apd: "patent"` as recorded above. No radius, thickness, index, Abbe number, semi-diameter or aperture value changed.

Open: at f/1.321 the stop-edge axial ray exceeds the printed half-diameters of S17–S21 by 0.074–0.089 mm at infinity and of S23–S36 by up to 0.141 mm at the nearest state; a 14.86 mm stop (f/1.4) clears every printed aperture at all three states. This follows from the undecided aperture basis above.

## 2026-10-13 — Second review: diagram, labels and movement

Scope. An independent second look at the lens as the local site shows it, against `patents/EP2321688B1.pdf`: Table 1 and its notes (pages 7–8), Table 2 (page 11), Figure 7 (page 31), Figures 8a–8c (page 32), Figures 9–10b (page 33), Figures 11a–11c (pages 34–36), paragraphs 0035–0058 and claims 1–12 (pages 22–23). No semi-diameter, group, doublet, element name, type, role, tag, variable-gap or focus-position entry was changed. The aperture basis, `gapSagFrac`, the omitted front filter and the display name were left as decided.

Changes made.

| File and place                              | Before                                                                                                           | After                                                                                                           | Evidence                                                                                                                                                                          |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data file, `focusDescription`               | Distances given only from object to image (341.6 mm and 532.3 mm)                                                | One sentence added: the patent text quotes the same two states from its first surface, as about 15 cm and 34 cm | Paragraph 0048 and Table 1 row S0: 340.000 mm (F2) and 149.300 mm (F3) to S1. Without it the site's nearest label, 34 cm to the image, reads like the patent's intermediate state |
| Data file, header comment                   | Named the Table 2 misprint 753 only                                                                              | Adds the second misprint (79.1) and the agreement of the printed apertures with Table 2's relative illumination | Traces below                                                                                                                                                                      |
| Analysis, glass codes                       | "Two printed codes differ from the current catalog"                                                              | All eleven printed codes are the current OHARA code numbers; four of them no longer round from today's νd       | OHARA AGF of July 2026, below                                                                                                                                                     |
| Analysis, source performance                | "MTF and relative illumination have not been recomputed"                                                         | Recomputed relative illumination, ray fans and MTF with the patent's figures beside them                        | Traces below                                                                                                                                                                      |
| Analysis, focus mechanism                   | No mention of the patent's own distance reference                                                                | One sentence on the 34 cm and 15 cm of paragraph 0048                                                           | Paragraph 0048                                                                                                                                                                    |
| Analysis, two cross-references and source 1 | "chromatic performance … has not been recomputed"; "No full-aperture, full-field transmission figure is claimed" | Point to the recomputed values; source 1 now lists Table 2, Figures 7–11c and claims 7–10                       | Same traces                                                                                                                                                                       |

Semi-diameters. The 34 stored `sd` values were compared once more with the "Aperture Half Diameter" column of Table 1, from the text layer of pages 7–8 and from 120 dpi renders of both pages: 34 of 34 agree, as do the 34 radii, the 34 separations, the nine variable gaps and the 18 glass names. The two filter rows (S1 41.46 mm, S2 40.23 mm) are the only printed rows not in the file. Nothing was changed.

Figure 7 was measured again without reference to the first pass. Vertex crossings beside the axis fix the axial scale at 10.30 px/mm at 300 dpi (S1 to the image plane 1990 px for 193.273 mm) and place S7 at 1319 px, which is the F2 gap (F1 would be 1312 px, F3 1329 px); the image line is 293 px for 28 mm, 10.46 px/mm radially. Flat rim runs on both sides of the axis give, in mm, L1 43.4, L2 40.0, L3 31.7, L4 24.3, L5 18.8, L6 20.1, L7 22.1, L8 21.5, L9 17.1, L10–L11 17.5, L12 17.8, L13 18.6, L14–L15 20.1, L16 19.2, L17 21.4, L18 22.0 and L19 22.7. Every value is within 0.1 mm of the first-pass table, and every element stands 1.1–1.9 mm above its larger printed half-diameter (the first pass read 1.1–1.8 mm). The printed column is the clear aperture "through which the radiation rays pass" (paragraph 0039); the drawing adds the mechanical edge.

Live diagram against Figures 7, 8a and 8c. The page was captured at infinity, at the middle keyframe and at the nearest keyframe and set beside Figure 8a, Figure 7 and Figure 8c. Element order, surface shapes, the stop position between L11 and L12, the three group positions and the fixed image plane agree. The order of heights between neighbours is the same in the diagram, the table and the figure (L2 > L3 > L4 > L5 < L6 < L7 > L8 > L9 < L10–L11 < L12 < L13 < L14–L15 > L16 < L17 < L18 < L19). The visible differences are all edge treatment:

| Element | Figure 7                                                               | Live diagram                                                                           |
| ------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| All     | Edge 1.1–1.9 mm (5–7%) above the larger printed aperture               | Ends at the printed apertures                                                          |
| L3      | Square top at 31.7 mm, flat annulus on S6                              | Rim slants from 30.10 mm (S5) to 26.45 mm (S6)                                         |
| L4      | Rectangular block 24.3 mm high; S8 is a bowl inside a flat rear face   | Rim slants from 22.90 mm (S7) to 17.47 mm (S8), the largest visible difference         |
| L6      | Rectangular block with a flat top                                      | Rim slants from 17.48 mm to 18.79 mm                                                   |
| L10–L11 | One flat top across the doublet                                        | L10 at 15.74 mm on both faces, L11 rising to 16.28 mm                                  |
| L12     | Square block                                                           | Rim slants from 15.73 mm to 16.57 mm                                                   |
| L14–L15 | One top across the doublet, chamfered at S29                           | 17.88, 17.95 and 18.89 mm joined by straight edges                                     |
| L16–L17 | L17 a square block that overhangs L16 by 2.2 mm from the cemented face | L17 a wedge rising from 17.78 mm at S31 to 20.05 mm at S32; the step at S32 is 2.14 mm |

Squaring was tried as a validator trial only and not applied, because it would overwrite printed apertures. S8 at 22.90 mm is beyond the hemisphere of its 22.024 mm radius. S31 at 20.05 mm exceeds the rim-slope limit (65.3° against 64.2°), and with S30 raised to match it L16 has an edge thickness of −0.18 mm. S11 at 18.79 mm passes the validator but would carry the rim of L6 0.9 mm in front of the rim of L5. S6 at 30.10 mm, S23 at 16.57 mm, S19 and S20 at 16.28 mm, and S27 and S28 at 18.89 mm pass the validator; each would replace a printed value, and the printed set as a whole is what reproduces Table 2's relative illumination below.

Maker comparison. No manufacturer diagram was viewed. The deployment section above records that "Leitz publishes no optical section or element count for the Summilux-C 18mm", so there is no maker drawing to compare counts, groupings or special-glass markings with; the patent figure governs.

Labels checked and found correct. Figures 7 and 8a–8c draw three boxes, G1a (703), G1b (704) and G2 (705), and no parent G1 box; Table 1's Group and Sub Group columns put L1–L3 in G1a, L4–L11 in G1b and the stop with L12–L19 in G2. The three `groups` entries bracket S3–S6A, S7–S21 and STO–S36 with the texts "G1a FIXED", "G1b FOCUS" and "G2 FOCUS". The three `doublets` bracket S19–S21 (L10+L11), S27–S29 (L14+L15) and S30–S32A (L16+L17), the only three places where Table 1 has glass on both sides of a surface; the patent does not name them, so D1–D3 stand. Element names L2–L19 are the patent's. The 18 `type` strings agree with the signs of the Table 1 radii and with the focal lengths; the three departures from the patent prose (L14, L17, L19) are the recorded ones. The 18 `role` texts are true as written (L7 at +51.88 mm is the strongest positive singlet of G1b; the 15.761 mm space behind L8 is the widest in G1b). Aspheric markers are on 6A and 32A only, with the note's K and A–F entered as A4–A14 under the printed equation, whose conic term is CURV·R²/(1 + (1 − (1 + K)·CURV²·R²)^½). The stop is drawn between L11 and L12 at the front of the G2 bracket, 4.734 mm behind S21 at infinity. `varLabels` read D(G1a–G1b), D(G1b–STO) and BF on the page and show 7.96 / 4.73 / 44.80, 8.65 / 3.14 / 45.70 and 9.61 / 1.30 / 46.58 at the three keyframes.

Tags. Paragraph 0046 names S-FPL51 and S-FPL53 as abnormal-dispersion glasses and assigns S-FPL51 to L3 and S-FPL53 to L6, L9, L13, L14 and L16; Table 1's glass column carries exactly those names on those six elements and on no other. Claims 7–9 repeat the designation by index and Abbe number (1.497 / 81.6 and 1.439 / 95.0). Claim 10 states that the object-side lens of the final pair of positive singlets, L18, "has abnormal partial dispersion", and paragraph 0046 and Table 1 give it S-NPH1; claim 1 gives 1.808 and 22.8. The seven `apd: "patent"` tags and their notes are therefore correct, and no other element qualifies. The element inspector was opened for L3, L6, L14, L17, L18 and L19 and shows the stored type, glass, focal length, tag, asphere line and role; it prints nd and νd at the stored full precision (for L6, 1.4387504366578638 and 94.94602453260312).

Focus movement. The `var` arrays list F1, F2, F3 in that order: 7.955 / 8.654 / 9.612 after S6, 4.734 / 3.136 / 1.300 after S21 and 44.800 / 45.699 / 46.577 after S36, as Table 1 prints them. G1b therefore moves 0.699 mm and 1.657 mm toward the image, and G2 with the iris 0.899 mm and 1.777 mm toward the object; the three gaps sum to 57.489 mm at each state, so the image plane is fixed, and G1a does not move. Paragraph 0048 and the arrows of Figures 8a–8c give the same directions ("the second sub-lens group moves from left to right … while the second lens group moves from right to left … with decreasing focus distance"). `focusPositions` [0, 0.6417107, 1] equal the ratio of the nearest object distance to each state's object distance, 341.5515 / 532.2515 = 0.641711. The focus control reads ∞ at one end and 34 cm at the other, and 53 cm at the middle keyframe; the patent-positions control offers ∞, 53 cm and 34 cm. The movement overlay draws G1a as a single point, G1b's end point on the image side of its start and G2's on the object side, with a largest travel of 1.78 mm. On captures at twice the page scale (6.3 px/mm) L4 sits 10 px nearer the image and the stop 11 px nearer the object at the nearest keyframe than at infinity, about 1.6 mm and 1.7 mm, while L2, L3 and the image line stay in place. The lens is a prime, so there is no zoom movement. No order or direction needed correcting.

Patent performance data against the model. An independent exact ray trace was written for this review (sequential surfaces, conic and even-polynomial sag, skew rays, every printed half-diameter a hard aperture) with indices from the Sellmeier rows of the OHARA AGF of July 2026; it reproduces the file's d-line EFL of 18.258034 mm and back focal distance of 44.844480 mm, and at 546.074 nm the group focal lengths −179.998, +95.671 and +41.478 mm against the printed −179.99, +95.67 and +41.48 mm.

Distortion, as the chief-ray height against the paraxial image height of the same object point, with the front filter in place at 546.074 nm, against Table 2:

| State              | 0.40           | 0.65           | 0.85           | 1.00           |
| ------------------ | -------------- | -------------- | -------------- | -------------- |
| F1 model / Table 2 | −0.693 / −0.69 | −1.497 / −1.50 | −2.008 / −2.01 | −1.984 / −1.99 |
| F2 model / Table 2 | −0.632 / −0.63 | −1.300 / −1.30 | −1.591 / −1.59 | −1.298 / −1.30 |
| F3 model / Table 2 | −0.543 / −0.54 | −1.014 / −1.02 | −0.998 / −1.00 | −0.345 / −0.35 |

The largest difference is 0.006 percentage points. The chief-ray angles are 17.164°, 26.840°, 33.630° and 38.038° at F1, the angles printed beside the fields of Figure 11a (17.16°, 26.84°, 33.63°, 38.04°); the figure's field labels 0.7 and 0.8 are therefore Table 2's heights 0.65 and 0.85. Full-field angles of 38.038°, 37.675° and 37.125° give 2.40% breathing against the stated +2.4%. For the model as published on the site (filter omitted, d line) the same calculation gives −0.688, −1.484, −1.991, −1.970 at F1, −0.641, −1.322, −1.629, −1.355 at F2 and −0.566, −1.071, −1.090, −0.469 at F3; the growing difference toward F3, 0.12 points at full field, is mostly the oblique path through the 3 mm filter, which the air-equivalent object distance does not carry.

Relative illumination, as the area of the transmitted bundle in image-space direction cosines relative to the axial bundle (0.05 mm pupil grid, filter in place, 546.074 nm, 15.80 mm stop), against Table 2:

| State              | 0.40        | 0.65        | 0.85        | 1.00        |
| ------------------ | ----------- | ----------- | ----------- | ----------- |
| F1 model / Table 2 | 83.7 / 83.8 | 70.6 / 70.6 | 56.6 / 56.6 | 44.8 / 45.0 |
| F2 model / Table 2 | 84.2 / 84.2 | 71.9 / 79.1 | 58.7 / 58.6 | 47.3 / 47.3 |
| F3 model / Table 2 | 86.6 / 86.7 | 75.1 / 753  | 62.6 / 62.7 | 51.4 / 51.5 |

Ten of the twelve entries agree within 0.2 points. The printed 753 is 75.3, as already supposed, and the printed 79.1 for F2 at 0.65 is a second misprint, presumably 71.9 with two digits exchanged; it is not in `sourceErrata`. The full-field beam on a plane 2.5 mm behind S36 is 41.8% of the axial beam at F1, the "around 42%" of paragraph 0051 and Figure 9. At full field the filter's front surface S1 is one of the surfaces that cut the bundle, with S8, S12, S13 and S17; with the filter omitted S3 takes its place and the values rise to 84.0, 70.8, 57.0 and 45.2% at F1, 47.7% at F2 and 51.6% at F3 (d line). With a 14.86 mm stop the same trace gives 78.3% and 49.8% at F1 for 0.65 and full field, 53.0% at F2 and 56.9% at F3 for full field, so Table 2 was computed for the printed 15.80 mm stop and not for a stop of f/1.4. With every printed aperture in place the axial cone is 1/(2 sin U′) = 1.326 at F1 and F2 and 1.340 at F3.

Ray fans (Figures 10a and 10b). At the printed image plane and the five printed wavelengths the on-axis fan stays within 9.1 µm over the inner 85% of the pupil and reaches 14.1 µm at the rim for 455 nm; the full-field tangential fan stays within 7.8 µm and reaches 14.8 µm, with the 455 nm chief ray 7.4 µm and the 643.8 nm chief ray 3.6 µm from the 546.1 nm one. Paragraph 0053 gives "around 0.01mm for all but the most extreme rays of the on-axis beam", and Figure 10a shows one curve, the solid line that its legend gives to 455 nm, offset by about 0.006 mm. Paraxial focus runs from 44.868 mm at C to 44.796 mm at F, so the agreement at the printed 44.800 mm plane comes from the zonal balance the fans show, not from a paraxial focus.

MTF (Figures 11a–11c). The polychromatic diffraction MTF was computed from the traced wavefront at the printed image plane, with the figures' wavelengths and weights (643.8 / 7, 587.6 / 8, 546.1 / 9, 486.1 / 7, 455.0 / 4), the filter in place and the 15.80 mm stop. The figures were read at 300 dpi against their own grid lines (128 px per 0.1 modulation); curves were matched as sets, since line styles cannot be told apart at that resolution.

| Figure 11a, F1                   | 20 c/mm     | 40 c/mm     | 60 c/mm     |
| -------------------------------- | ----------- | ----------- | ----------- |
| Model, radial curve at 0.4 field | 0.945       | 0.836       | 0.695       |
| Figure, highest curve            | 0.943       | 0.836       | 0.700       |
| Model, on axis                   | 0.935       | 0.803       | 0.655       |
| Figure, second curve             | 0.943       | 0.814       | 0.676       |
| Model, other seven curves        | 0.884–0.918 | 0.700–0.750 | 0.480–0.549 |
| Figure, remaining curves         | 0.891–0.911 | 0.702–0.749 | 0.482–0.543 |

At 20 cycles/mm the two highest curves of the figure are not separable. The eight off-axis curves agree within about 0.01 and the on-axis curve is 0.011 to 0.021 lower in the model at 40 to 60 cycles/mm; moving the image plane 1 µm changes the on-axis value at 60 cycles/mm by 0.022, so the difference is one micrometre of focus. At F2 the model gives 0.535–0.719 at 60 cycles/mm for its nine curves and Figure 11b shows 0.535–0.734; at F3 the model gives 0.501–0.673 and Figure 11c 0.495–0.670. An error in a radius, spacing, coefficient or glass large enough to matter would show in these curves, which makes this the most sensitive check on the Table 1 transcription so far.

The dotted diffraction-limit curve of each figure was fitted between 38 and 60 cycles/mm with the weighted five-wavelength limit of a circular pupil: f/1.311 for Figure 11a (449 points, 0.8 px rms), f/1.306 for Figure 11b and f/1.316 for Figure 11c. One pixel of reference error is 0.023 in f-number. An f/1.4 limit lies 3.7–4.2 px below the drawn curve in all three figures; f/1.321 lies within 0.7 px.

Bearing on the open aperture item. Three of the patent's own results depend on the axial beam size. Table 2's relative illumination and the diffraction-limit curves match the printed 15.80 mm stop with the printed apertures (about f/1.32–1.33) and exclude a 14.86 mm stop. The on-axis MTF curve of Figure 11a (0.814 and 0.676 at 40 and 60 cycles/mm) lies between the model at 15.80 mm (0.803, 0.655) and at 14.86 mm (0.812, 0.682), and is equally met by 1 µm of focus. The patent's "approximately f/1.4" is thus a nominal figure; the decision itself is left where it was.

Glass. All 18 `glass` labels resolve to their named OHARA rows; none is unmatched, and the stored nd and νd equal the Sellmeier values of the July 2026 AGF to 3e-15. Table 1 gives a name and a six-digit code for every element and nothing further: no extra line indices and no partial dispersions. The claims add 1.497 / 81.6 (S-FPL51), 1.439 / 95.0 (S-FPL53) and 1.808 / 22.8 (S-NPH1) at 587.56 nm. The eleven printed codes are identical to the code numbers the current AGF lists for the same names. Four no longer round from the current νd: S-LAL61 741527 (52.637), S-FPL51 497816 (81.546), S-FPL53 439950 (94.946) and S-PHM52 618634 (63.334); the deployment section above names only the first and last. No element should carry the code's values instead. A code holds nd to three decimals: entering the code values moves the d-line EFL to 18.2634 mm and the 546.074 nm focal length of G1b to +95.49 mm against the printed +95.67 mm, and lowers the 60 cycles/mm MTF to 0.54 on axis. Keeping the catalog nd and taking only νd from the codes moves the 546.074 nm focal length of G1b by 0.003 mm with all eleven glasses changed, and the on-axis MTF at 60 cycles/mm from 0.655 to 0.646 with the four glasses changed or to 0.631 with all eleven, where the full-field tangential curve falls from 0.514 to 0.476. The current catalog values are the ones that reproduce the patent, and the stored values stay.

What the site's analysis tabs show for this lens (engine behaviour, not changed here). The Distortion tab reads −1.97% at infinity, where Table 2 has −1.99%. At the middle and nearest keyframes it reads +0.03% and +3.00%, where Table 2 has −1.30% and −0.35%: the tab measures against the tangent of the object-space chief-ray angle, the patent against the paraxial image of the object point, and with the patent's definition the same model data give −1.355% and −0.469%. The Vignetting tab reads 101.1% geometric transmission and 38.9% relative illumination at 38.0°, where Table 2 has 45.0% and the pupil-integrated trace of the same data gives 45.2%; the tab uses a meridional fan and cos⁴ of the object angle. The Breathing tab reads −2.1% (EFL change) at the nearest keyframe, against the patent's +2.4% defined from chief-ray angles. The MTF tab opens with "The lens data places the image plane 0.04 mm in front of its own prescription's paraxial focus: the printed back focus, or its transcription, disagrees with the prescription" and shows curves refocused by +0.008 mm (on axis 0.986 and 0.940 at 10 and 30 lp/mm; at 14 mm 0.971 / 0.966 and 0.841 / 0.844). For this lens that inference does not hold: the printed plane is where the patent's MTF figures are reproduced, 0.044 mm inside the paraxial d-line focus of an f/1.32 beam. The tab also lists the four `sourceErrata` notes under "The source prescription contradicts itself and the cause is not isolated"; all four concern the prose, a figure label and Table 2, and none concerns a Table 1 value.

Unchanged engine values. EFL 18.25803 mm, f/1.32096, stop radius 15.80 mm, half-field estimate 42.04°, traced corner field 38.0° at 14.00 mm and the wide-open transmission curve (100.0% on axis, 96.8% at 11.7°, 101.1% at 38.0°) are the same before and after; the surface validator reports no errors, the image-circle check no undersized surface and field coverage 100%. The page was captured again at infinity, at the middle and nearest keyframes and with the movement overlay; the diagram is unchanged and the focus panel shows the added sentence.

Open limitations. The aperture basis is still the owner's open item, and with it the on-axis overfill: at f/1.321 the stop-edge ray exceeds the printed half-diameters of S17–S21 by 0.07–0.09 mm at infinity, and at the nearest keyframe the page draws the outermost on-axis ray pair ending at S17. The figure's mechanical edges and flat annuli are not represented. `sourceErrata` was not edited: the 79.1 misprint is recorded in the header comment and the analysis only. The review trace is separate from the site's engine; its relative-illumination values carry about ±0.1 point from the pupil grid, and the figure readings about ±0.005 in modulation.

Coordinator follow-up, same day — sourceErrata. The four `unresolved` entries (the shape wording of L14, L17 and L19 in the prose, the 37.13° / 38.04° caption and the 753 misprint in Table 2) were removed from the data file's `sourceErrata`. None of them concerns Table 1, which reproduces the patent's group focal lengths, field angles, distortion and relative illumination, yet the MTF tab reported them under "The source prescription contradicts itself and the cause is not isolated". They remain in the header comment, together with the 79.1 misprint found in this review, and in the analysis. Evidence gathered in this review on the open aperture question: the patent's own relative-illumination table and the diffraction limits drawn in its MTF figures fit the printed 15.80 mm iris (f/1.31 ± 0.03), not a 14.86 mm stop at f/1.4.

