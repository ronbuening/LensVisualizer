# Sigma 24mm F3.5 DG DN — consolidated audit

The sections through the Stage 3 disposition below are the inherited historical author record. Their reference pins and unfinished Stage 4 statements describe that earlier checkpoint. The final Stage 4 record at the end supersedes those readiness statements without erasing the construction history.

## Job and reference versions
Original job card fixes JP2022067328A, Numerical Example 1, Sigma 24mm F3.5 DG DN | Contemporary, output stem Sigma24mmf35DGDN. Original 32-page PDF includes a PAJ cover; PDF page is one greater than printed patent page. No substitution of embodiment, family, source bytes, or production variant.

Current LensVisualizer reference pin is 25bfb7566f748a75e59647d433da51bdd198a4ff, checked 2026-10-05. All 150 shared source/reference files are hash-verified. Workflow ZIP SHA256 ef9a25e06642c717e3cf4e8da327c3669260036082fdd5f5ef7d5631416b0224 contains CHAT-1.0 protocol/contract and stage launchers. Current data specification governs schema. The old launcher exclusion wording for rear sensor plates is superseded by current rearPlates schema; this example contains no plates so no model consequence. Protocol supplier-evidence requirements override the data specification's country/brand preference heuristic.

## Extraction and conventions
Patent surface/asphere tables directly transcribed from PDF pp.10–11 (printed pp.9–10), then visually checked on rendered pages. Equation ¶0053 directly uses (1+K), so no conic offset. Surface 14 K=−1; all published A4–A20 retained in evidence. Sign conventions: z object to image, positive R center toward image, mm, d-line 587.56 nm, medium after surface. Element descriptions in ¶0059–0062 and Fig.1 are consistent with 10 elements, 8 air-separated groups and 3 functional groups. No source rear plates or inactive planes. Original source not seeded from another data/analysis file.

## Model transformations
M1 maps stop surface 10 to STO and starred labels to A suffixes, preserving all active source planes. M2 is identity scaling. M3 retains both published focus states; intermediate motion is interpolation, not source-published. M4 converts source ΔPgF to the runtime normal line. M5 resolves only a source naming conflict; no physical source number changes.

## Glass review
All nine distinct coordinates audited. Primary HOYA AGF (2026-07-07) and Excel (2026-06-01), plus independently checked CDGM PDF rows, are preserved as relevant excerpts with authentic provenance/hashes. Catalog polynomial spectra are recomputed offline. They remain candidate spectra, not measured patent glass. Eight coordinates have exact HOYA matches; FDS16-W differs by −0.00001 in nd. MC/MP-PCD51-70 preform matches must not be silently replaced by finished M-PCD51. Supplier-neutral class labels are planned, retaining source nd/vd and published partial dispersion support. No glass supplier or production melt is established. Catalogs postdate filing, limiting historical attribution.

## Numerical results
Executed sequential height/angle and separate reduced-angle ABCD checks agree to <1e-10. Infinity EFL 23.9959556317 mm, collimated BFD 19.6937679512 mm, source image gap 19.6941 mm, track 65.2198 mm. Close EFL 19.4487138478 mm; source d0=40.0680 mm yields magnification −0.4999912634 and best-image shift −0.0003980934 mm. Source object-to-image distance is 105.2878 mm. Close collimated BFD is not the finite-conjugate image gap and is not compared as if it were.

G1/G2/G3 powers, standalone elements, cemented powers, per-surface Petzval, pupil matrices and all seven patent conditions are computed by the portable verifier. G2 moves objectward 3.8358 mm; G1, stop, G3 and image are fixed. d10+d15 remains 8.5307 mm. Source precision, units and reference planes appear in results.

## Correction and discrepancy register
- No transcription corrections, scale changes, invented spacings, or source-fit adjustments.
- Source L12 ΔPgF=.0469 is defined relative to .64833−.0018νd. Absolute PgF=.665566; current runtime normal line .6438−.001682νd requires model dPgF=.04948536. This is convention conversion, not a patent correction.
- ¶0060 assigns L1m to L11 (νd66.97), while printed condition values νd1m16.48/ΔPgF1m.0469 describe L12. ¶0023 requires a qualifying negative within G1; table values verify L12. Preserve the contradictory notation; do not claim L11 meets those bounds.
- Printed weak G1 EFL340.56 vs calculated340.572151 mm: source-precision-aware tolerance .02 mm records the residual, with no fitted adjustment.
- HOYA FDS16-W XLSX ΔPgF.0469 differs from AGF ED.0470; neither overwrites source or converted runtime value.
- Product correlation is research inference. Patent F3.62/full-field81.27°/105.2878-mm close distance differ from marketed F3.5/84.1°/108mm. Shared architecture, counts, timing and 1:2 magnification support correlation, not exact production identity.

## Independent review
Stage 4 has not been performed. The author reviewed source pages and implemented two numerical methods. Separate primary-source research checked manufacturer/catalog facts; this is not a fresh Stage 4 optical audit.

## Gate disposition
Stage 1: READY_FOR_DATA after mandatory source, convention and applicable first-order checks passed. Stop diameter and clear semi-diameters are not published and remain explicit Stage 2 tasks. Exact off-axis and production rendering are construction tasks, not claimed Stage 1 results.

## Quantitative claim map
Source/system values and all optical audit claims above map to results.sourceModel, results.comparisons and results.facts. Vendor spectrum claims map to evidence.glassEvidence and catalog_polynomial checks. Production claims map to evidence.productCorrelation.manufacturer and official source URLs. Later analysis must map to exact final data revision.

## Pending integration
INTEGRATION_PENDING. Static typecheck/full corpus/production build are not run. Private package only; independent Stage 4 remains required.

## Stage 2 construction checkpoint
Data reads the verified source extraction and keeps all 19 active planes, all source R/d/nd, both focus endpoints, all nonzero high-order aspheres, and exact conic mapping. Physical iris radius 4.1960048572 mm is inferred by exact Snell transfer of the nominal infinity entrance-pupil edge; the native builder independently reproduces it. closeFocusM=.1052878 uses source object-to-image reference, with finiteConjugates retaining 40.0680 mm from first surface. Native canonical mounts are l-mount and sony-fe. No rearPlates, folds, zoom, or reconstruction are invented.

Figure 1 apertures are explicitly inferred, not manufactured clear diameters. An initial trial failed: guessed mount id leica-l was not canonical; L12 SD9.0 and surface17 SD10.9 caused excessive cross-gap intrusion. Full raw failure is retained in evidence.constructionTrials. Source geometry was untouched; source table and optical curve extents support revised inferred L12 SD8.8 and surface17 SD9.4. The latter avoids reading the drawing's flat blank rim as the optical extent. Other inferred apertures follow Figure 1. This is source-and-ray constrained aperture construction, not a prescription fit.

The first portable exact solver also failed several full-field aim seeds because its unconstrained Newton seed fell outside a spherical sag domain. It was repaired with analytic spherical intersections. Original failed checks are retained; all current full-field chiefs and defined bundles are now computed, with native source-field agreement. No optical input changed for this verifier repair.

Mandatory geometry checks pass at focusT=0,.25,.5,.75,1: actual rim slope, conic domain, 257-sample element thickness and shared-band gap checks, source equality and source coefficients. Native buildLens/validateLensData and production element-render diagnostics were executed from the pinned project modules with Node24.19.0 (138 modules loaded); zero hidden trim at all five states. This is actual project execution, not a handwritten type stub; static TypeScript checking and full project integration remain NOT_RUN.

Exact finite-object/infinity stop-aimed axial bundles transmit; 60%-source-field bundles transmit. Published full-field chiefs reproduce |Y|=21.63097mm at infinity and21.63098mm at close. Selected full-field marginal rays vignette at external faces11,13,17A; none first clips at cemented junction8 or12. Clipping is recorded, not counted as transmission. Native diagrams and trace result bytes are bundled.

Current runtime UI behavior is retained honestly: default on-axis ±.83 rays clip STO at focusT=.75 and1, while native true finite-object stop-aimed rays transmit. Extreme UI ±1 samples also clip the stop. The UI uses a paraxial pupil/focus launch approximation; no source values, iris calibration, ray fractions or field fractions were changed to hide it. results.comparisons.native_ui_default_fan_transmission remains FAIL as an observed diagnostic; the supported construction-resolution check passes against physical source-conjugate launches. This is not a failed schema/geometry validator being deferred. Native baseline field-helper half-field38.79568° also differs from source40.635°; direct source-angle chief tracing succeeds. No projection override was added.

Stage 2 gate: READY_FOR_ANALYSIS for exact checkpoint bytes. Stage 3 must retain data identity or reopen this gate. Native input hashes and replay checks bind this disposition. Current-state UI limitations remain visible for later integration review.

## Stage 3 analysis and claim map
Analysis was authored only after the complete Stage 2 checkpoint passed and clean-replayed. The 346-line companion follows the six-section skeleton and adds the relevant condition/limitations/source sections. Data remains SHA256 21fb42547aa59b79f4c6ad411805a54de3042a06c0026d168a7acf9e1d5b044e. Evidence and data did not change during Stage 3; the verifier was extended to check the analysis, and results were regenerated from the same data. No semantic optical correction was required.

Claim-to-evidence map, governing the exact data revision above:
- Identification block, dates, inventor, applicant and embodiment: evidence.rawPrescription.metadata and original card/PDF pp.1–2; analysis.metadata check.
- Production names, mounts, date, marketing F-number/field/MFD and motor: evidence.productCorrelation.manufacturer, evidence.sources official Sigma links. They are source claims, not optical calculation results.
- Counts and architecture: results.facts.counts; source element boundaries and patent paragraphs0058–0062. Functional/air-separated group distinctions manually checked.
- Group and cemented EFL table: results.facts.groupPowers and implementedModel.0.groupEflMm/cementedEflMm; isolated-air interpretation manually checked.
- Every element first line and data fl/nd/vd: results.facts.elementPowers, element_fields and analysis.element checks. Shape/orientation and interpretive role prose checked directly against source paragraph and surface signs. No isolated aberration attribution asserted.
- Glass coordinate table/candidate residuals and spectra limits: evidence.glassEvidence.glass_coordinate_audit and authentic vendor excerpts; catalog_polynomial checks replay coefficients. No unsupported supplier or APO claim. HOYA/CDGM are the primary catalogs rechecked; other vendors were not independently reverified for this package.
- L12 partial dispersion: results.facts.L12dispersion; spectral_conversion and analysis disclosures checks. Original .0469 remains distinct from .04948536 runtime convention.
- Focus table, displacement, conserved gaps and object-to-image plane: results.sourceModel, facts.focusMotion and facts.construction; source states/var mapping checked. Finite image residual and magnification are directly computed.
- Full asphere coefficient table: evidence.rawPrescription.aspheres, parsed data.asph, aspheres and analysis.asphere checks. Rim contribution/slope table: results.facts.aspheres; polynomial contribution explicitly uses the respective conic base.
- All seven conditions: implementedModel.0.conditions, condition comparisons and bounds; analysis.condition checks; source nomenclature discrepancy manually reconciled without modifying optical data.
- Verification EFL/BFD/Petzval, source-corner heights, inferred iris and clear apertures: implementedModel.0/.1/geometry/exactRaySampling; facts.nativeScope/physicalSourceFields/construction; native render/trace artifact. Geometry is sampled at five states, never claimed continuous.
- Current UI default-ray failures and field-helper discrepancy: results.comparisons.native_ui_default_fan_transmission and facts.uiLimitations; exact physical stop-aimed resolution retained. No ghost ray is treated as transmitted.

Manual prose/citation review completed: scholarly third-person tone, all element orientations/power distinctions checked, aperture and production correlation caveats explicit, and primary-source URLs usable outside this conversation. Source-asphere signs/exponents were visually checked against PDF pages10–11. Native SVG silhouette was rasterized with installed Inkscape and visually inspected against Figure1; source arrangement and moving-group behavior agree. No image-generation or data-fitting was used.

Stage 3 disposition: READY_FOR_AUDIT after all mandatory current checks and clean extracted replay pass. Stage 4 must be a fresh source-first review. Static TypeScript and Prettier checks were not available in the scoped runtime and remain explicitly NOT_RUN alongside full-corpus/build integration checks.


## Stage 4 independent review and final disposition

### Scope, source freeze and provenance

A fresh reviewer opened only the original patent/card and shared controlling references before candidate reconciliation. The first extraction was re-entered from rendered PDF pages 9–11, 20 and 21, with conventions/condition text checked directly. No candidate prescription, author glass selections, results or audit had been opened. Neutral shared project glass names were visible while locating vendor URLs; that exposure is disclosed in the frozen record. The reviewer independently downloaded the complete official HOYA July 2026 catalog and ranked candidates from native source coordinates, rather than starting with author labels.

The pre-reconciliation fingerprint is 95856952debd9a023f04469adf5b9d792ae8c1b7cdff6e71cc4faed768eb8d58. Frozen source inputs, scalar sequential and separate NumPy ABCD implementations, vector-Snell probe, catalog code and calculated records are preserved in evidence.independentPass and the consolidated verifier. The exact original source-only program is embedded as a fixed constant and re-executed by verify.py. Its SHA256 is b88afe401fc5539517413285e2d8c8427c7ae0ec111f96922d0a1cd36549e803. JSON key canonicalization was needed when comparing the original Python integer asphere keys with serialized records; the initial two false comparison failures and repair are retained. Neither baseline code nor baseline values were rewritten after exposure.

Original candidate ZIP SHA256: 99e467938874b4128c962e5eafd2410d35f60194ecc584299b01055434d7e16f. Original candidate manifest SHA256: 5128c1dc5178e2f4c8941f35b58429fe021cda664767dda712829fb4e22a4166. Original data SHA256: 21fb42547aa59b79f4c6ad411805a54de3042a06c0026d168a7acf9e1d5b044e. These identify the actual 12-member Stage 3 dossier opened after the freeze.

### Current-reference impact and native execution

The initial reference was 25bfb7566f748a75e59647d433da51bdd198a4ff. Current Stage 4 reference is 3f00f21094afdbee2e1b8551b96d2734b7f0d0f1, with 151 files independently byte-verified against reference-manifest SHA256 248fb6bfb3fad7f19beaca5486513cafe7a718bd6c97f7c13219378fbf40b705. The five changed runtime files implement authored-asphere-cap intersection handling; data/analysis specifications, template, defaults and taxonomy are unchanged. No stale native acceptance was transferred.

The packaged adapter executes actual project buildLens/validateLensData, dispersion, exact ray tracing and production element-shape/render diagnostics. It loads 137 project modules plus the data file under Node 24.19.0. It is a TypeScript-stripping runtime loader, not static TypeScript checking. All loaded project module hashes are bound to the current manifest. The preceding-pin native JSON is retained unchanged in the additional previous-native artifact, and the prior adapter source remains in evidence.

Both source endpoints and mechanical interpolation states focusT=0.25,0.5,0.75 were tested. For intermediate native physical bundles, independently solved Gaussian object distances from the first vertex are 183.5238326, 87.2938236 and 55.6119157 mm. These are calculated diagnostics, not additional patent states or authored finiteConjugates. No source spacing or focus law was fitted. The portable inherited trace path also retains its separately disclosed inverse-distance intermediate sampling.

### Corrections and rechecks

1. L23 glass class wording changed from `Unmatched (high-index crown coordinate class; supplier unassigned)` to `Unmatched (high-index flint coordinate class; supplier unassigned)` in data and analysis. The source coordinates nd=1.85135/νd=40.10 and independently verified HOYA TAFD305-family candidates support the flint class; HOYA's type-designation page defines TAFD as dense tantalum flint. This does not identify the actual supplier, composition or melt. All numerical optical input values are unchanged. Native resolver still selects no catalog spectrum for any element.
2. Three analysis tables had an empty line between the Markdown header/separator and first data row. Those lines were removed so the asphere coefficients, rim values and condition tables render as complete GFM tables. Numerical table contents are unchanged.
3. Intermediate native sampling was strengthened to use independently solved Gaussian object planes. The analysis now distinguishes these diagnostic states from published endpoints. This is a checker clarification, not a data focus reconstruction.
4. The native adapter/reference identity was updated to the new current pin and records actual C/d/F/g runtime values. L12 reproduces absolute PgF=0.665566 from stored dPgF=0.04948536; source ΔPgF=.0469 remains separately preserved. No catalog partial-dispersion curve is substituted.

Every inherited Stage 2/3 check and the added Stage 4 checks was rerun on the corrected pair. Correction-validation independence is limited honestly: after the freeze, reconciliation reused the author literal parser, inherited verifier and actual project engine. Fresh source extraction, fresh scalar/ABCD/Snell calculations and primary-catalog recheck remain independent; native application execution is distinct evidence.

### Independent numerical and geometry results

The fresh computation confirms infinity EFL 23.9959556317 mm, BFD 19.6937679512 mm, total track 65.2198 mm, close EFL 19.4487138478 mm, close magnification −0.4999912634, and source-conjugate image shift −0.0003980934 mm. Source d0+track=105.2878 mm remains distinct from the marketed 108 mm. Functional-group, standalone-element, cemented-pair powers, principal planes, pupils, surface-by-surface Petzval sum 0.003105479116 mm⁻¹, and all numerical conditions agree with the independent path.

The frozen preliminary aperture radius 4.1579825674 mm was explicitly paraxial-calibrated. The implemented radius 4.1960048572 mm uses exact transfer of the same EFL/(2×3.62) entrance-pupil edge. A fresh vector-Snell calculation independently reproduces the implemented exact calibration. Neither is an independent physical iris measurement. The patent's close F-number 3.92 is retained as a source claim; finite-cone and pupil conventions are not silently equated.

Fresh full-polynomial rim values at stored SDs agree with the final analysis. Current native construction and five-state render diagnostics pass with zero hidden trim. Source-conjugate/diagnostic stop-aimed axial and 60%-source-field bundles transmit. Full-field chiefs at both published endpoints reach |Y|=21.6309705 and 21.6309824 mm. Some marginal full-field rays vignette at exterior faces; none of the tested bundles first clips at cemented surfaces 8 or 12. These are finite sampled results, not a continuum proof. Rendered current-native silhouettes were inspected against source Figure 1; inferred unequal front/rear clear apertures do not represent source-published manufactured blank rims.

### Raw discrepancies retained and bounded resolutions

- Native default axial ±0.83 samples at focusT=.75 and1 still clip at STO. The `native_ui_default_fan_transmission` raw comparison remains FAIL. True finite-object stop-aimed bundles pass. This isolates a default UI launch approximation; ghost continuation is never transmission. No source parameter, iris, default fraction or field fraction was changed to conceal it. Full UI integration acceptance is not claimed.
- Native baseline half-field helper gives 38.7956775° versus source 40.635°. This raw comparison remains FAIL. Exact source-angle chief tracing independently reproduces the source image height; no projection override was introduced.
- Literal paragraph0060 L1m=L11 would fail νd1m<25 because L11 has νd66.97. The raw comparison remains FAIL. General paragraph0023 requires a qualifying negative lens in G1; the numerical material row and condition table identify L12, with νd16.48 and source ΔPgF.0469. This supports a notation resolution, not a false claim that L11 passes.
- Strict displayed-output comparisons give FAIL for G1 340.572151 vs340.56 mm at a .005-mm half-rounding interval and infinity BFD19.69376795 vs19.6941 mm at .00005 mm. They remain in results.comparisons. Independently perturbing each rounded source input by its half last digit gives local summed one-variable sensitivity envelopes about .3128043 mm for G1 and .00377822 mm for BFD, greater than those residuals. This diagnoses input-rounding sensitivity; it is not a rigorous joint-error bound, a fitted correction, or a widened acceptance tolerance. Source optical numbers remain unchanged.
- Earlier author constructor failures and portable spherical-intersection failures remain in evidence.constructionTrials with their historical input hashes and scopes.

No genuine current schema, geometry, asphere-domain, cemented-clearance or mandatory source/analysis error is waived.

### Primary-source and quantitative claim review

The reviewer freshly downloaded official HOYA AGF/XLSX and CDGM PDF; their hashes match the author source registry. Fifty coordinate-ranked HOYA rows and their coefficients were independently recomputed. FDS16-W workbook sheet20260601data_table1 row59 verifies nd1.98612, νd16.48, PgF.6656 and ΔPgF.0469; source patent nd differs by .00001. CDGM alternative rows were checked against the fresh official PDF. No OHARA/HIKARI/Sumita/SCHOTT supplier identity is asserted or purportedly fully re-audited.

Sigma's original C021 product page, 1 December2020 announcement and Sigma-authored Japanese release were independently opened. Product counts, full-frame format, L/Sony mounts, 1:2 magnification, 108-mm MFD, 84.1° field, seven blades, F22 minimum aperture, stepping motor and 22 January2021 release are supported. Production correlation remains an inference with the source/marketing differences disclosed.

The inherited claim map is retained. Stage4.fresh_numeric, fresh_power, fresh_petzval, fresh_rim, fresh_catalog_replay and native_dispersion_conversion checks add independent support for all shared numerical model claims. Patent metadata, optical descriptions, source nomenclature, third-person prose, catalog uncertainty and citation destinations were manually reviewed. The final glass wording and repaired tables are checked on the final pair.

### Final file identities and replay

Final data SHA256: fdc08318ca8aee01be10b90ebd74c9a1bdb0663ececaed1a4389896c961d4b9f
Final analysis SHA256: ef3fb7ced048a043bc8d172d24d6e6680305a5f5af19ef8bc3b9f97614095b4b
Final verifier SHA256: fe9f2fe88d8714f2b9c3d8b09809940499b9aaed6e20ab316c869c82aff63345
Final evidence SHA256: fa692454135e04b223e9c68b4bd9e33fdf37493798bf0d916b8169b7b275915b

The portable command is `python Sigma24mmf35DGDN.verify.py --package-dir <directory> --output <external-results.json>`. It requires Python3, NumPy and SciPy; exact installed versions are in results.environment. It fetches no network data. Native replay separately uses Node24.19 with the recorded current source snapshot and packaged runtime.mjs; the shared sources are not duplicated in this lens dossier. Portable replay verifies native receipts, not a new application run.

The final dossier has 13 root-level members: the canonical nine files, native adapter, current native JSON, previous native JSON and essential current native SVG. Originals are unchanged. Inventory/hash/clean-extraction and external-output replay checks are mandatory packaging gates. Full static typecheck, Prettier, full-corpus tests, metadata generation, production build, Git writes and integration were not run. Those remain pending integration scope, not falsely reported passes.

Final per-lens disposition: READY_FOR_BATCH after all mandatory source/model/geometry/glass/analysis/review checks and clean package replay pass. INTEGRATION_PENDING. The disclosed default-UI launch and field-helper diagnostic failures remain for integration review.

## 2026-10-06 — Semi-diameter pass against the patent figure

Source: `patents/JP2022067328A.pdf`, PDF p. 21 (printed p. 20), 【図１】, the infinity-focus section of
Numerical Example 1. The figure is a 300 ppi one-bit raster (1500 × 814 px) and was measured at that
resolution on the rendered page. It carries no ray bundles. The upper side is clean apart from the "S"
label over the stop gap; the lower side carries the L1m / L2m / L1p leaders and the focus bracket, which
hides the lower rims of G2, so the upper side is the primary reading and the lower side a second reading
for G1 and G3.

Scale: the dash-dot axis is the row y = 759 px. All eighteen glass vertices cross it within 1 px of the
prescription at the infinity spacings: surface 1 at x = 458.5 and surface 19 at x = 1331.5 give 873 px for
45.5257 mm, or 19.176 px/mm (0.05215 mm/px); surface 3 to surface 13 gives 426.5 px for 22.2129 mm, or
19.20 px/mm. The stop ticks sit at x = 829.5 (19.35 mm against 19.40 mm). Heights use the same scale; it
is confirmed by sag, since the drawn rear annulus of L11 lies 5.5 mm behind the surface 2 vertex, which
is the R = 10.3967 sphere at 9.2 mm, the height where that annulus starts. Rim readings are the outermost
ink less 1 px for half of the 3 px stroke; ±1 px is ±0.05 mm.

| Surfaces | Stored `sd` | Drawn, px above / below the axis | Drawn mm | Drawn ÷ stored | Decision |
|---|---|---|---|---|---|
| 1A (L11 front) | 12.1 | 231 / 230 | 12.0 | 0.99 | Retained. |
| 2 (L11 rear) | 9.3 | Bowl ends at 177 / 176 under a flat annulus to the 12.0 mm rim | 9.2 | 0.99 | Retained. The engine's field estimate reaches this rim at 40.8°. |
| 3, 4 (L12) | 8.8 | 171 / 171; the front bowl ends about 161 under an 11 px annulus | 8.9 (front bowl 8.4) | 1.01 (0.95) | Retained. |
| 5, 6 (L13) | 9.0 | 170 / 169 | 8.85 | 0.98 | Retained. |
| 7, 8 (L14, junction) | 7.3 | 139 / 139 | 7.25 | 0.99 | Retained. |
| 9 (L15 rear) | 7.3 → 5.2 | Bowl ends at 95–96 / 95 under a flat annulus to the 7.25 mm rim; the annulus plane is 16.5 px behind the vertex | 4.95–5.06 | 0.68 before, 0.96 after | Changed. See below. |
| STO | 4.196 | Ticks from 82 to 97 px | 4.28 to 5.06 | 1.02 | Not edited. |
| 11, 12, 13 (L21 + L22) | 8.1 | 154 / hidden | 8.03 | 0.99 | Retained. |
| 14A, 15A (L23) | 10.5 | 199 / hidden | 10.4 | 0.99 | Retained. The drawn rear corner lies 3.16 mm ahead of the 15A vertex against 3.19 mm computed. |
| 16 (L31 front) | 10.9 | 207 / 206 | 10.8 | 0.99 | Retained. |
| 17A (L31 rear) | 9.4 | Curves of 17 and 18 merge at about 187–192 / 185–188 and continue as one flat line | 9.7–10.0 | 1.03–1.06 | Retained at the limit. See below. |
| 18 (L32 front) | 11.9 | Bowl ends at the same merge point; flat annulus to the 11.8 mm rim | 9.7–10.0 (rim 11.8) | 0.82–0.84 (0.99) | Retained. See below. |
| 19 (L32 rear) | 11.9 | 227 / 226 | 11.8 | 0.99 | Retained. |

Surface 9. The figure draws the rear of the D1 doublet as a shallow bowl that stops at about 5.0 mm, with
a flat annulus from there to the 7.25 mm rim. At the stored 7.3 mm the R = 15.3402 bowl was 1.85 mm deep
instead of the drawn 0.86 mm, so the rim of L15 reached 1.0 mm closer to the stop than the drawing shows
and the stop housing, which the viewer sizes from the smaller neighbouring rim, was drawn out to 7.3 mm
against drawn ticks ending at 5.06 mm. The corner reading is 4.95–5.0 mm and the sag reading 5.06 mm. The
value used is 5.2 mm: the stop-edge ray of the bundle at 60% of the source field (24.38°) crosses surface 9
at 5.12 mm at infinity, and the analysis states that this bundle transmits, so 5.2 mm is the smallest
0.1 mm step that keeps it whole. Surfaces 7 and 8 stay at 7.3 mm; glass meets glass across the whole
junction in the drawing.

Surface 17A. The two faces of the L31–L32 air space cross at 9.92 mm in the prescription, and the figure
draws edge contact there. The surface validator keeps a tenth of the 3.2592 mm vertex gap open: 9.46 mm
passes and 9.48 mm is rejected (combined sag 2.94 mm against 2.933 mm allowed). The corner chief ray needs
9.37 mm. The stored 9.4 mm is the only 0.1 mm value between the two and is retained.

Surface 18. Following the bowl end (9.8 mm) with the rear at 11.9 mm was tried on the local page: the
renderer joins unequal rims with a straight line, so L32 lost its flat top and became a 41° wedge. The
stored 11.9 mm keeps the drawn flat top; its front corner sits 0.7 mm ahead of the drawn annulus plane.
Rays arriving at surface 18 are already limited by 17A at 9.4 mm, so the choice has no effect on
transmission. Lowering surface 18 below 17A would lift the cross-gap cap but block the corner chief ray,
which needs 9.52 mm there.

One `sd` value changed. The stop semi-diameter and the four aspheric rims are untouched, so the polynomial
contributions and rim slopes tabulated in the analysis stand.

Clearance on the edited file, exact meridional trace at F/3.62. The solved half-field for 21.63 mm is
40.63° at infinity, equal to the patent's 40.635°. The axial marginal ray needs 4.53 mm on surface 7
(stored 7.3), 4.22 mm on surface 9 (5.2) at infinity and 4.08 mm on surface 9 at the −0.5× state traced
from the finite object at d0 = 40.068 mm. The corner chief ray needs 8.62 mm on 1A, 7.11 mm on surface 2,
9.37 mm on 17A, 9.52 mm on surface 18 and 10.47 mm on surface 19 at infinity, and 8.27, 6.88, 7.81, 8.38
and 9.31 mm at −0.5×. No axial bundle is clipped and no chief ray is blocked at either state.

Meridional share of the stop diameter that passes every rim, before and after the change. Infinity: 100%
at 10.9 mm image height, 89% at 15 mm, 56% at 18 mm and 15% at 21.63 mm, identical before and after.
−0.5×: 99%, 100% and 59% at 11.3, 15 and 21.63 mm, identical; 97% before and 96% after at 18 mm. At the
figure-literal 5.0 mm the infinity values would have been 98%, 86%, 56% and 15%.

Engine values are identical before and after: EFL 23.9960 mm, open aperture F/3.62, stop radius
4.1960 mm, half-field estimate 38.80°, limited by 17A. The drawn stop housing radius falls from 7.3 to
5.2 mm. The surface validator reports no validation errors, the image-circle check 0 undersized, and the
traced field-coverage check 100% (40.6° reaching 21.63 of 21.63 mm). Renderer diagnostics give no hidden
trim. The local page was viewed at infinity and at the closest focus endpoint.

Open limitations. One `sd` per surface cannot carry a flat mounting annulus, so the faces the figure draws
with one appear differently: the rear rims of L11, L15 and L31 are chamfers where the figure has square
shoulders, and L32 keeps a forward-pointing front rim. The 17A cap leaves the modeled corner bundle
narrower than the drawing implies: on that side of the chief ray the pass is 0.04 mm of stop height at
infinity, and the meridional share at 21.63 mm is 15% where a trial 9.75 mm gives 23% and the 9.9 mm
edge-contact height 26% (63% against 56% at 18 mm for 9.75 mm). Those trial values fail the surface
validator and were not applied. The engine half-field estimate stays 1.8° short of the source angle for
the same reason, as already disclosed above. The viewer's default near-focus fan still ends at the stop,
as before.

## 2026-10-06 — Glass labels, display tag and metadata

Glass labels. All ten elements carried `Unmatched (… coordinate class; supplier unassigned)` labels, which keep an
element on the Abbe approximation by design, although the Stage 4 review had already found a HOYA catalog row at
every coordinate. The labels now name those rows as coordinate equivalents, so each element traces on a published
dispersion curve:

| Elements | Patent nd / νd | Label | Catalog nd / νd |
|---|---|---|---|
| L11 | 1.59271 / 66.97 | MP-PCD51-70 | 1.59271 / 66.97 |
| L12 | 1.98613 / 16.48 | FDS16-W | 1.98612 / 16.48 |
| L13, L14 | 2.05090 / 26.94 | TAFD65 | 2.05090 / 26.94 |
| L15 | 1.54072 / 47.20 | E-FEL2 | 1.54072 / 47.20 |
| L21 | 1.49700 / 81.61 | FCD1 | 1.49700 / 81.59 |
| L22 | 1.84666 / 23.78 | FDS90 | 1.84666 / 23.78 |
| L23 | 1.85135 / 40.10 | M-TAFD305 | 1.85135 / 40.10 |
| L31 | 1.69350 / 53.20 | M-LAC130 | 1.69350 / 53.20 |
| L32 | 1.51680 / 64.20 | BSC7 | 1.51680 / 64.20 |

E-FEL2 was added to the project catalog from the HOYA AGF of 2026-07-07 for this purpose (formula-1 polynomial;
product code 541-472 left off because OHARA S-TIL2 already holds it); the other rows were present. The labels do not
assert a supplier, melt or forming process. Stored nd and νd are unchanged. L12's source-derived `dPgF` of
0.04948536 stays authoritative at the g line; the catalog curve supplies only its C/d/F dispersion.

Display tag. L21 (FCD1 class, νd 81.61, catalog ΔPgF +0.031 against the engine normal line) now carries
`apd: "inferred"` as the position corresponding to Sigma's single SLD element. The patent does not designate it.
L12 keeps its patent tag.

Metadata. `focalLengthDesign: 24.0` was missing and was added from the source focal length (the model computes
23.996 mm). `specs` now uses the catalog's usual form and gives four aspherical surfaces on three elements and the
inferred SLD element. Display name, mounts (L-Mount, Sony E), format and the 43.26 mm image circle were reviewed
and left as authored.

## 2026-10-06 — Second review: diagram, labels and movement

An independent second look at the lens as the local site draws it. The page was captured at infinity and at the
closest focus endpoint, with the focus-movement overlay at both ends and the element inspector for L11, L12, L13,
L21, L23 and L31, and set beside `patents/JP2022067328A.pdf`: Figure 1 (PDF page 21), the Example 1 text
¶0058–0062 and tables (PDF pages 9–11), the condition text ¶0023–0032 (PDF pages 6–7), the condition table and
reference signs ¶0095–0096 (PDF page 20) and the front page.

Silhouette. Figure 1 was measured again from the 300 dpi raster without reusing the earlier readings. The axis is
row 759; the vertex crossings are at x = 458.5, 482, 634.5, 649.5, 652.5, 704.5, 708, 750.5, 766, 964.5, 1045.5,
1061, 1086, 1186.5, 1215.5, 1238.5, 1300.5 and 1331.5 px, which is 19.176 px/mm over the 45.5257 mm from surface 1
to surface 19 and puts every vertex within 1 px of the infinity spacings (surface 15 to 16 is 29 px, 1.51 mm). Line
centres read L11 12.0 mm, L12 8.9, L13 8.85 (upper) and 8.8 (lower), the L14–L15 pair 7.25, the L21–L22 pair 8.0,
L23 10.4, L31 10.8 and L32 11.8 mm. The vertical lands end at 9.2 mm on the rear of L11, at 4.95–5.1 mm on the rear
of L15 and at 9.7–9.8 mm where surfaces 17 and 18 meet; L12 has 0.6 mm lands on both faces above 8.4 mm. The stop
ticks run from 4.2 to 5.1 mm against the modelled iris radius of 4.196 mm and the 5.2 mm housing the page draws.
Every reading agrees with the earlier pass to 0.1 mm.

| Field | Before | After | Evidence |
|---|---|---|---|
| `sd` of surfaces 5 and 6 (L13) | 9.0 | 8.8 | The figure draws L12 and L13 level, L12 one to two pixels the taller (172 and 172 px outer ink against 171 and 170 px). The page drew L13 0.2 mm taller than L12. L12 cannot rise: 8.9 mm is rejected by the air-gap rule behind L11 (combined sag 7.25 mm against 7.213 mm allowed). L13 at 8.8 mm is 0.05 mm under its drawn height where 9.0 mm was 0.15 mm over it; its flat top is 1.18 mm wide against about 1.15 mm drawn (1.11 mm before). |
| L11 `role` | Object-facing negative meniscus in fixed G1 … | adds "Patent's negative lens L1m (Figure 1)" | ¶0060 and the Figure 1 leader. |
| L12 `role` | Negative lens in fixed G1 carrying the published anomalous partial dispersion coordinate. | Names it the patent's negative lens L2m and the lens whose νd and ΔPgF the patent lists for conditions (2) and (3). | ¶0060, the Figure 1 leader, the ΔPgF column of the surface table and the ¶0095 table. |
| L13 `role` | Positive high-index meniscus in fixed G1; satisfies the source index condition. | Names it the patent's positive lens L1p and quotes condition (4), NdL1p > 1.85, against nd 2.0509. | ¶0027, ¶0060 and the Figure 1 leader. |
| `focusDescription` | Quoted the field name `closeFocusM=0.1052878`. | Says the 0.105 m close limit is the patent's object-to-image distance, d0 40.068 mm plus the 65.22 mm track. | Readability on the page; the numbers are unchanged. |

The analysis was brought into line: the L11, L12 and L13 notes and the conditional-expression paragraph now give
the three designations, the reconstruction paragraph records the L13 rim, and the sentence saying most elements
trace on an Abbe approximation was replaced, because all ten glass labels now resolve to catalog curves.

Places where page and figure still differ, each tried again and left as the earlier pass set it:

- L11 rear. The figure has a flat top 2.7 mm wide and a vertical land down to 9.2 mm; the page joins 12.1 mm to
  9.3 mm with a straight edge. Surface 2 cannot go higher: 9.4 mm is rejected for rim slope (64.7° against 64.2°).
- L15 rear. Restoring surface 9 to 7.3 mm squares the pair and passes the validator, but the rim of the pair then
  spans 3.43 mm along the axis against 2.45 mm drawn, the rear bowl is 1.85 mm deep against 0.86 mm, and the stop
  housing is drawn out to 7.3 mm against ticks that end at 5.1 mm. At 5.2 mm the rim spans 2.49 mm, the bowl depth
  and the stop ticks match, and only the corner is cut. 5.2 mm is kept.
- L31 rear and L32 front. Surface 17A at 9.5 mm is rejected by the air-gap rule (2.96 mm against 2.933 mm), so the
  9.4 mm value and the forward-pointing front rim of L32 stay as described in the semi-diameter section.

Checked and found correct, nothing changed:

- Group brackets G1, G2 and G3 are the patent's notation and cover surfaces 1–9, 11–15 and 16–19, the start
  surfaces of the patent's group table (1, 11, 16); the signs in the bracket text agree with the printed group
  focal lengths +340.56, +17.20 and −30.27 mm. The stop sits outside the brackets, between L15 and L21, as source
  surface 10.
- Brackets D1 (surfaces 7–9) and D2 (11–13) cover the two cemented pairs of ¶0059 and ¶0061, and the four
  elements carry the matching `cemented` value.
- Element names L11–L15, L21–L23, L31 and L32 are the designations of ¶0059–0062. Figure 1 prints only the claim
  designations L1m, L2m and L1p, which now appear in the three roles. Every `type` string agrees with the signs of
  the radii and with the patent's wording, and the aspheric counts are 1, 2 and 1.
- The aspheric suffix and an `asph` entry are on surfaces 1, 14, 15 and 17, the four starred rows, and on no other.
- L12 keeps `apd: "patent"`: the surface table gives it the only ΔPgF entry (0.0469), which ¶0050 and ¶0023 call
  anomalous dispersion. In all six examples the surface-3 lens is the only one with that entry, so the symbols
  νd1m and ΔPgF1m describe the lens ¶0060 calls L2m; the earlier notes on this conflict name L1m and L11 only.
- L21 keeps `apd: "inferred"`. Sigma's product page lists 10 elements in 8 groups with one SLD and three
  aspherical lenses. L21 (νd 81.61) is the only glass in the example above νd 67. The construction drawing on that
  page could not be read in this review, so the position rests on the coordinates.
- `varLabels` D10 and D15 are the patent's names. The focus slider ends at 11 cm against 0.1053 m.
- Front page: JP 2022-067328 A, published 6 May 2022, application 2020-175981, inventor Daichi Tanoue, applicant
  Sigma Corporation.

Focus travel. Index 0 of each `var` pair is the patent's INF column and index 1 its −0.5× column: D10 7.0307 to
3.1949 mm and D15 1.5000 to 5.3358 mm, a sum of 8.5307 mm at both ends. The front vertex of G2 goes from 26.4307 to
22.5949 mm behind surface 1, 3.8358 mm toward the object, as ¶0058 states and as the arrow under the G2 bracket in
Figure 1 points. G1, the stop and G3 do not move. The page's focus overlay shows only G2 moving, away from the image
plane, with a largest travel of 3.84 mm; the near state reads D10 3.19, D15 5.34 and EFL 19.45 mm against the
patent's 19.45 mm.

Results on the edited file: the surface validator reports no errors, the image-circle audit no undersized surface,
and the traced corner coverage is 21.63 of 21.63 mm at 40.6°. The real-ray trace is unchanged apart from the two
stored values: half-field 40.63° at infinity, no on-axis clipping and no blocked chief ray at either focus state;
surfaces 5 and 6 need 4.21 and 4.48 mm for the axial bundle and 4.15 and 3.77 mm for the corner chief ray. The
meridional share of the stop that passes every rim is the same before and after at every sampled height (100%,
89%, 56% and 15% at 10.9, 15, 18 and 21.63 mm at infinity; 99%, 100%, 96% and 59% at 11.3, 15, 18 and 21.63 mm at
−0.5×). Engine values are identical: EFL 23.9960 mm, F/3.62, stop radius 4.1960 mm, half-field estimate 38.80°.
The page was captured again at infinity and at closest focus: L12 and L13 now end level, and the inspector shows
the three new roles.

Open limitations. The engine half-field estimate stays 1.8° under the patent's 40.635°; it is a paraxial estimate
limited by surface 17A, which would need about 10.0 mm to reach the patent angle against the 9.46 mm the air-gap
rule allows. The corner chief ray itself clears 17A (9.37 mm needed). The aperture read-out stays F/3.62 at the
near end, where the patent prints 3.92. The three chamfers listed above remain.
