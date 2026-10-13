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

Open: the two finiteConjugates source strings still carry the earlier wording.

Open: ¶0046 names the glass of L3, L6, L9, L13, L14 and L16 as abnormal-dispersion and claim 10 does the same for L18, but no element carries an apd tag; the 40 mm and 100 mm sibling files tag theirs “patent”.
