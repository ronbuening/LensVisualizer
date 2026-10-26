# Yashica Samurai Z — source-first authoring record

## Job and reference versions

JP2706781B2, Sole unnumbered embodiment. Original four-field card retained unchanged. Current read-only ClearedWork.csv SHA256 dc08b28cb653ebc2b2b1ebc8b2575dbb2e050b258d749cebb77a8a281dd3456b explicitly approves processing and supersedes the historical card-release-only limit. It fixes endpoint-only scope and retention of d23=41.4/62.7 mm. The publication-specific unnumbered-field exception is not a global format change.

CHAT-1.0 four-stage workflow; current repository main 14da71d94ed3ab6ccf7aef70066f1e49670440ed verified through connector and recursive tree. All 248 reused reference/runtime blobs match current Git object IDs. Read current data/analysis specs, template/defaults, authoring and integration guides, taxonomy and formatter. No repository writes or integration.

## Extraction and conventions

B2 rendered pp.2–3 directly transcribed: all 23 source rows, twelve glass entries, two cemented junctions, plane stop S13, three changing gaps. Original B2 five pages; earlier A four pages retained as explicit reading witness. A p.3 confirms d-line header where B2 prints nb beside νd; all numerical cells agree. Native mm, positive curvature center imageward, medium after surface. Source infinity becomes 1e15 only at stop. No aspheres, plates or omitted optical surfaces.

Manufacturer manual PDF p.45/printed44 confirms 17×24mm, 25–75 F4–5.6,12/10, autofocus range1.0m wide/0.7m tele. October1989 Yashica/Contax News No.28 p.2 supplies production section. Full manuals/newsletter archived in supporting evidence. Optical correlation remains inferred.

## Numerical and discrepancy register

Two independent author implementations (scalar reduced-angle rays, ABCD) reproduce one another. Wide/tele EFL25.8206077934/73.0639406054mm versus printed25.78/73.05. The residuals0.0406077934/0.0139406054 exceed half the final printed focal digit; no fictitious exact reproduction is claimed. Paraxial BFD41.5664649454/62.7794639516mm versus printed41.4/62.7; source image planes are0.1664649454/0.0794639516mm before paraxial focus. Retention is expressly approved; no radii, gaps, indices or scale changed. These are qualified literal-source comparisons, not repaired values or performance claims.

G1/G2/G3 powers correspond to51.2143615974/-13.3848116231/22.9526878003mm. Conditions |f2/f1|=.2613487937, n8=1.60342, d18/f3=.2614072937 satisfy all three claims. d5+d12=13.767mm at both endpoints; first-to-last vertex distance52.237mm is conserved. Authored tracks93.637/114.937mm. Source-image anchoring gives G1/G3 objectward21.3mm and G2 objectward9.521mm. No curve between those endpoints is recovered.

Surface-by-surface Petzval sum+.00356246477090841/mm. Standalone element and cemented powers use each part isolated in air, not in-situ group behavior. The G2 doublet is net positive while the complete G2 is negative.

## Glass review

Nine distinct nd/νd coordinates compared anew against complete retained OHARA, HOYA, SCHOTT, HIKARI, SUMITA and CDGM catalogs, with all candidate residuals preserved. Catalog bytes were recovered/fetched in the preceding job on October8; this job reuses and hashes them and does not claim a fresh network retrieval. OHARA S-/legacy distinctions retained. Coordinates alone establish equivalence classes, never actual supplier or melt. Stage1 creates no spectra in application data.

## Model transformations and Stage2 tasks

No finite-focus positions were reconstructed. Patent says G3 moves imageward for near focus but gives no quantitative finite state. Manufacturer MFD does not authorize invented travel. Exactly two source zoom control rows only; intermediate numerical claims prohibited. Stop diameter and clear radii are absent; infer them from source f-numbers/ray geometry and manufacturer proportions, explicitly label estimates and run current exact ray/geometry/render checks before advancing. Source film frame is17×24mm; taxonomy is half-frame135 (18×24mm nominal), so do not silently claim exact frame dimensions from taxonomy.

## Gate disposition

Stage1 portable verifier passed15 checks; original hashes, two mathematical methods, source-discrepancy resolution, claim conditions, conserved gap and glass evidence passed. Construction/geometry and independent candidate reconciliation were closed by the later reviews below.

## Integration status at authoring

Full corpus, metadata generation, production build, repository publication and deployment were not run at authoring. Local deployment checks are recorded below; full integration and publication remain outside this wording pass.

## Stage2 construction and qualified aperture

Actual data has only two source zoom rows, publishedStations=[0,1], zoomStep=1 and repeated infinity focus entries. No finiteConjugates. The engine inherently supports arbitrary interpolation, but that is outside the numerical/source scope. Production autofocus distance0.7m is required scalar metadata; the wide1.0m limit is disclosed in prose, not invented focus geometry. The canonical half-frame taxonomy is18×24mm; source format remains17×24mm. Both source and nominal-taxonomy field bounds were tested separately.

Clear radii were inferred, not recovered manufacturing dimensions. First-doublet common radius14.5mm and front singlet12.5mm are guided by the large-front/smaller-middle proportions of the manufacturer section and fit behind the43mm filter opening. S6=7.5mm gives field-bundle room; S7=6.4mm respects its curved air gap. G2 cemented radii6.4mm are common. S11=5.5mm respects the thin S10–11 gap. Rear clearances use S14–16=6.2mm, S17–18=5.43mm, S19=5.5mm, S20–21=6.8mm and S22–23=8mm. Early provisional7/6.5mm radii failed four gaps; those actual failed results remain in supporting evidence. S6 was refined7→7.5mm and first doublet14→14.5mm during field checks, before Stage2 binding. No published radius or axial interval changed, and no gap override was used.

S17–18 is the binding0.5mm air gap. To pass the full native tele pupil requires radius5.644065728mm and intrusion97.1479742%, above the permitted97% cap. The default90% policy permits5.434296909mm. The authored5.43mm leaves positive clearance and no hidden material trim. At native F4/F5.6 labels, a thin outer axial pupil annulus is clipped. Exact Snell/bisection yields effective axial f/4.082932144 and f/5.805239942, with lost geometrical circular entrance-pupil areas4.0211243% and6.9458589%. These are modeled rim effects, not T-stop loss, measured production transmission or full-pupil reproduction. The raw nominal-pupil containment comparison still fails in results; the separate limited-aperture resolution passes under the current spec's explicit allowance for slower traced aperture when rims clip. Independent reviewer separately confirmed positive physical gap and this limited-scope interpretation.

Current real validateLensData/buildLens, strict LensDataInput typecheck, TypeScript AST/literal-parser comparison, malformed mutation fixtures and production element diagnostics pass. No hidden trim (0mm).18,504 exact project ray attempts cover2 zoom endpoints ×2 frame bounds ×6 field fractions ×3 aperture scales ×257 polar samples. Chief rays transmit at every sampled field of both17×24mm and18×24mm frames. Blocked off-axis/axial rays are retained as blocked; no clipping at cemented interior S2/S9 and no unclassified numerical trace failure. Sampled surviving rays are physically valid; sample transmission counts are not equal-area photometry. Loaded production modules are hash-verified at the pinned current commit. The SVG paths generated by real computeElementShapes were visually checked against the manufacturer section; this is a production-shape check, not browser/UI integration.

Direct C/F/g indices use independently audited catalog-equivalent classes: SUMITA K-SFLD6, LLF6, LASFN14, F5, SFLDN3 and K7; OHARA legacy FSL5; HIKARI E-F16 and E-BAK4. Exact source d-line indices/Abbe values remain unchanged. Runtime uses direct lineIndices for all twelve glass elements; most class labels do not resolve by name in the narrower built-in catalog. F5 additionally resolves to a compatible Schott class but direct supplied SUMITA spectral anchors take priority. No engine/catalog changes or supplier attribution.

All46 mandatory construction checks pass with the reduced-aperture resolution; the Stage2 manifest binds the final data/evidence/verifier/results bytes. Raw source and full-pupil discrepancies remain visible. Whole-corpus/build/integration were not run at that stage.

## Stage3 analysis and claim mapping

The analysis was written only after the verified Stage2 checkpoint. Data bytes did not change during Stage3. Forty-nine checks pass after cross-file comparison. Publication metadata, all12 element headings, native glass coordinates, standalone powers and model qualifications agree with the parsed data. Interpretive prose and citations were manually reviewed; no per-element aberration allocation is inferred from glass/power sign alone.

| Analysis claim | Executed result/source |
|---|---|
| Patent/author/date/embodiment | evidence.authority.metadata; original B2 cover; unchanged card |
| Manufacturer12/10,17×24mm,25–75F4–5.6,MFD | complete manufacturer manual p.45/printed44; newsletter No.28 p.2 |
| All23 source rows/d-line witness | evidence.rawPrescription/conventions; rendered B2pp.2–3 and A p.3 |
| EFL,BFD,authored track,residual defocus | results.sourceModel[0/1].system and imageDefocus/authoredTrack; implementedModel states |
| Group51.214/−13.385/+22.953mm | sourceModel[0].groups; actual parsed data recomputation |
| Standalone element focal lengths | implementedModel.elements and sourceModel[0].elements |
| Cemented pair+136.657/+46.328mm | sourceModel[0].cemented; isolated in air |
| Gap13.767mm conservation,52.237mm track | raw zoom gaps; gap-conservation check; system.trackToLast |
| Retrofocus wide,not telephoto by track | compared sourceModel.system.efl/bfd and authoredTrack; no unsupported class label |
| Conditions.261348794,1.60342,.261407294 | sourceModel.conditions, passed inequalities |
| Petzval+.003562464771/mm | per-surface sourceModel.system.path.petzval and sum |
| Catalog classes,C/F/g spectra | evidence.glassEvidence.selections; per-element coefficients and residual checks; actual lineIndices runtime |
| f/4.082932144,f/5.805239942,4.0211243%/6.9458589% pupil loss | implementedModel.states[].aperture; exact Snell bisection and101 retained-pupil radial samples |
| 97.1479742% full tele pupil requirement | independent gap_assessment plus author source exact marginal heights and sag calculation; supporting evidence |
| Chief coverage and no interior cement clipping | evidence.runtimeRecord.samples; actual project trace classifier at both frame bounds |
| No hidden trim | runtimeRecord.maxRenderTrim=0; actual computeElementRenderDiagnostics |

The final prose does not contain readiness badges or a workflow history. Source assumptions and measured/computed/inferred distinctions remain explicit. This review was limited to the stated source-endpoint, inferred-aperture model, not integration or complete production-pupil performance.

## Stage4 independent source-first review

A separate reviewer visually re-entered the original B2 source rows and wrote fresh scalar/matrix calculations before opening the candidate. The frozen canonical baseline fingerprint is0a10334e39643d4f3d8756ca9f11aaa570dfad7f78fb521d7a1a3ea100378567. The reviewer had read clearance scope and approximate historical EFL/BFL/gap sum, so headline-result blindness is expressly not claimed. Original baseline content is unchanged and carried as an essential final artifact.

The reviewer then parsed the actual TypeScript with an independently written literal parser and used analytical quadratic sphere intersections plus vector Snell refraction, distinct from the author's Newton-intersection routine.120 independent checks pass, including source matching, powers, spectral proxies, geometry and surviving axial pupil. Baseline iris radii5.526765243/5.420424533mm are paraxial calibrations; the independent exact calibration5.589093875/5.508996825mm agrees with actual runtime. Neither is a printed diaphragm dimension.

Fresh independent catalog parsing checked2059 entries across five retained AGFs and matched all12 adopted coefficient rows without initializing from author labels. The reviewer did not independently repeat the CDGM PDF search; the author six-catalog comparison and the reviewer five-AGF comparison remain distinct. Both the full original sources and catalog coefficients are retained in supporting evidence.

Actual validator/build, strict TypeScript and18,504-ray execution were repeated by the reviewer using the inspected author runtime harness. That is an independent re-execution of the same production implementation, not a new project tracer. Six raw surface-miss results are positively classified as blocked aperture misses; zero unclassified failures, zero hidden trim, all sampled chiefs transmit. Source17×24 and nominal-taxonomy18×24 coverage are separately recorded.

No optical-data correction was required. The only final analysis changes were numeral/condition typography and addition of the recovered complete multilingual X3 manual citation. PDFp.36/printed57 independently verifies14/13 and F3.5–4.3, supporting the already-present exclusion. Data remains SHA256d320dea2489b4b41fa51c4d0e5272cdbc42e1f48d80d3e9126084b462f8d7524. Final analysis SHA2560254782e175f2e0e231e8cc434ecd9df0facff3e03248ad6e64b846e1d1fcdda. Original candidate and final approval hashes are retained in the immutable final review JSON, including the full review text. That review accepted the exact pair as a limited endpoint model.

The main verifier now checks the frozen-baseline fingerprint and reviewer-artifact hashes, then loads the declared same-folder independent Python helper and reruns its120 checks. All custom numerical code and inputs needed for portable replay are inside the13-file dossier. Actual TypeScript/project-runtime evidence is separately byte-bound to the reviewed data and current code; Python-only clean replay does not pretend to rerun Node/TypeScript/project code. Original baseline-generation code, reviewer catalog audit, production harness and full runtime records remain in supporting evidence.

Current main was checked again at finalization and is unchanged at14da71d94ed3ab6ccf7aef70066f1e49670440ed. That review covered source endpoints with inferred clear radii and disclosed aperture loss. Native full-pupil containment remains a failed comparison, resolved as limited modeled aperture rather than erased. No repository integration, publication or deployment is claimed.


## V2 conversion — 2026-10-17

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main a85b198951829c52c07bfd83840331363a040449. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog testing was resource-killed and is not a pass. This format conversion is not deployment or complete optical acceptance.

Historical scope: JP2706781B2 sole embodiment; two endpoints, reduced axial aperture. Full tele aperture would exceed97% cap. Inventor romanizations corroborated by related Kyocera patent indexes on 2026-10-18; optical/source holds unchanged.


## Continuous infinity-path reconstruction, 2026-10-23
This addendum supersedes the earlier endpoint-step limitation only. JP2706781B2 claim 1 and description (PDF pages 1–2) state that G1 and G3 move together objectward, while G2 moves independently objectward. The two source endpoint configurations have D5+D12=13.767 mm and first-to-last optical spacing52.237 mm.

The candidate uses D5 as a piecewise-linear control coordinate and keeps D12 complementary. The rear image gap is computed from first-order focus while preserving the interpolated, unmodified native endpoint residual (.1664649454 to .0794639516 mm). This yields a constrained visualization motion, not recovered factory cam measurements. Both end prescriptions remain exact. Every intermediate station is marked unpublished. G1/G3 coupling, both objectward travel directions and positive gaps are verified. No radius, glass, aperture, fixed thickness, source stop, source spectral anchor or source image-gap endpoint is changed. No MTF optimization or geometry allowance override is used.

The original source-to-production correlation remains inferred, not manufacturer-confirmed. Finite focus remains unmodeled despite production close-focus metadata. Aperture variation is an interpolation assumption, not a factory shutter law. Source-class spectral proxies and inferred clear apertures remain subject to the original limitations. The pending independent lens validation was closed on 2026-10-26; publication is outside this pass.

## 2026-10-26 — Deployment validation and wording pass

The independent validation report re-read B2 PDF pages 2–3: all 23 rows (22 refracting surfaces and stop S13), twelve nd/Abbe pairs, zero aspheric coefficients and three variable gaps at both printed endpoints. No transcription mismatches or numerical corrections were found. The A publication confirms that the B2 header “nb” denotes nd. Patent Figure 1 agrees with twelve elements in ten groups, cemented L1/L2 and L5/L6, spherical shapes and the stop position.

Wide/tele printed focal lengths 25.78/73.05 mm give calculated EFL 25.820607793/73.063940605 mm. Printed image gaps 41.4/62.7 mm remain unchanged versus paraxial BFD 41.566464945/62.779463952 mm, leaving −0.166464945/−0.079463952 mm defocus. Summed first-surface-to-image tracks are 93.637/114.937 mm; the patent does not separately tabulate total track. Figure half-fields 30.5°/11.1° compare with source-frame chief-ray solutions 30.503°/11.118°. The claim conditions reproduce 0.261349, 1.60342 and 0.261407.

The maker evidence is the Samurai Z/Z-L instruction manual: 25–75 mm f/4–5.6, twelve elements in ten groups, 17 × 24 mm frame, fixed lens, and 1 m wide/0.7 m tele close focus. The 1989 release follows the 1988 filing. No independently accessible Z construction diagram was available for a new maker-diagram comparison; the historical newsletter comparison is retained above as history, not proof of manufacturing dimensions. The accessible X3.0 brochure depicts a different 14/13, f/3.5–4.3 lens. Z-L remains equally compatible; Z2 is not a better-established match. Product association remains plausible, not proof of an identical production prescription, special glass or aspheres.

The current model includes 199 unpublished intermediate zoom positions, with D5+D12 = 13.767 mm, coupled G1/G3, all groups moving objectward and no turns. Interior defocus reaches 0.16603 mm in magnitude; 152/199 positions exceed 0.1 mm. Around 49 mm, interpolated aperture scheduling gives F5.043 versus the patent plot's F4.8. No quantitative finite-focus state is printed or modeled. These limitations were retained in the public text.

The supplied report records zero undersized image circles, 98.1% nominal 18 × 24 mm wide coverage and transmission of all 201 chief rays for the maker's 17 × 24 mm frame. The clearance helper's wide-field inversion produced spurious chief warnings resolved by native-engine rechecks. S17/S18 axial clipping gives effective F4.083/F5.805. Longitudinal spherical aberration spans −0.193 to +0.146 mm, and one S19 tele clip occurred among 55 default rays. These remain inferred-aperture limitations.

This wording pass changed only the subtitle, catalog specs, focus description and unresolved errata note in the data file. The analysis removes four private Drive links, process terminology and the obsolete endpoint-only/addendum narrative; it retains bibliographic citations and technical limitations, explains the interpolated path, corrects spacing and distinguishes manual evidence from unconfirmed construction dimensions. Historical audit records are preserved, obsolete pending review lines are closed, and status tokens are replaced with prose.

The before/after engine summaries and all 402 probe rows (201 zoom positions × two repeated focus keyframes, 0 and 1) are byte-identical. Wide/tele EFL stays 25.8206/73.0639 mm, FOPEN 4/5.6, engine halfField 28.0231°/18.3529°, stop radius 5.5891/5.5090 mm and BFD 41.5665/62.7795 mm. The engine halfField is a model field value, distinct from the source-frame chief-ray angles above. The surface audit reports “OK — no validation errors.” No optical numbers, bibliography fields or production metadata changed. Full tests, typecheck, lint, build, generation, browser screenshots, server changes, downloads and git mutations were not performed in this wording-only pass.

Open: refine inferred cam and iris scheduling without changing printed endpoints; resolve retained defocus and rear-rim aperture loss; establish production prescription and manufacturing apertures from stronger maker evidence. Finite-focus travel and exact production glass remain unknown.
