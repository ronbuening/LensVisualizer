# Lens Patent — ZEISS Batis 2/40 CF — Stage 1

## Job and reference versions
The unchanged recovered canonical card fixes JP2019191502A, Example 1 and ZeissBatis240CF. Reacquired patent bytes match the retained original hash. The card was recovered from retained canonical text, with no prior per-card byte hash. Current project commit 5c25e4289c6e090eb44177e907d901dfe3cef76c and CHAT-1.0 control; exact reference hashes are in the manifest. No project file was changed.

## Extraction and conventions
Actual patent PDF pages 1, 10, 11, 17 and 18 and ZEISS datasheet page 1 were rendered and visually inspected. Original Japanese inventor text is on page 27; same-publication index confirms Naoyuki Sato romanization. Eighteen source planes include the neutral stop at row 9; there is no source-listed rear plate in this example. Nine glass elements form eight air-separated groups. Paragraph 0043 explicitly calls Nd/ABV d-line 587.6 nm. They are retained unchanged despite some e-like catalog coordinates.

The equation on page 10 places epsilon under the radical without a 1+ term: K=epsilon−1. Selected coefficient table supplies orders 4, 6, 8 and 10; general equation's quadratic term is absent from that table and is not invented. Six aspheres are on source surfaces 1, 2, 7, 8, 12 and 13. The flat stop's table radius zero is represented as an infinite radius, not a zero-radius refracting sphere.

## Model transformations
No scale or removed optical plane. The future model will preserve all source gaps and both published focus states. G2 (5–8) and G4 (12–13) move objectward; complementary variable-gap sums keep track constant. Stop diameter and semi-diameters are not published; their Stage 2 calibration/inference must be labeled and verified. No close-focus reconstruction is necessary.

## Glass review
Six authoritative contemporary catalogs were checked: OHARA, HOYA, SCHOTT, HIKARI, SUMITA and CDGM. Coordinate candidates, nearest rows, raw numeric excerpts, residuals and document identities are retained in evidence. None establishes supplier/melt identity. All model materials will retain Unmatched source-coordinate labels and no catalog-derived line indices. Modern catalog coverage cannot prove absence from historical or private melts.

## Numerical results
The self-contained verifier independently implements sequential reduced-angle tracing and ABCD multiplication, plus unit-determinant checks, individual thick-element powers, functional-group powers, pupil reference planes and every surface's phi/(n*nPrime) Petzval contribution. Source EFL is 41.1947540257 mm at infinity and 36.1160475174 mm at close, reproducing 41.1947 / 36.1160 within the documented 0.005 mm source-precision engineering bound. The group focal-length ratio is 1.25212921 versus the two-decimal table value 1.25. Source first-vertex-to-image track is 100.4477 mm in both states.

The source image plane is 17.5658 mm behind the final vertex at both states. Gaussian infinity BFD is 17.53364703 mm, leaving a +0.03215297 mm image-plane offset. Published close D0=134.5124 mm gives a Gaussian object-to-image B-matrix residual of 0.18400795 mm; zero-B Gaussian D0 would be 135.12889440 mm. These observations are retained without shifting the image plane or changing D0. An aberrated finite-aperture image plane need not equal Gaussian focus, but no claim is made that the patent's best-focus criterion has been recovered.

## Correction and discrepancy register
- No transcription correction to source optical numbers.
- Table 1 G1vd=20.8800 conflicts with paragraph 0048 front positive element vd=21.13. Both remain in evidence; Table 1's G1 spectral row is not transferred to that element. Both numerical values satisfy the coarse <=45 material condition. Claim 9 says <=45 while paragraph 0035 says <=46; no synthetic reconciliation is asserted.
- Table 1's dPgF normal-line convention is not defined sufficiently to import it as the engine's dPgF. Spectral condition reproduction is unavailable, not a pass.
- Manufacturer 40 mm, f/2, 0.24 m MFD, 1:3.3 close ratio and pupil position are production facts, distinct from exact patent values. Production attribution remains convergent research correlation, not manufacturer confirmation.

## Independent review
Not performed. This is author-side extraction and computation, not the fresh Stage 4 audit.

## Gate disposition
READY_FOR_DATA: source transcription, conventions, reproducible first-order calculation and non-destructive transformation plan are established. Stage 2 must establish source-calibrated apertures, geometry, exact appropriate ray containment and documented handling of published close aperture. No Stage 2 or Stage 3 gate is claimed here.

## Pending integration
Real project type checking, formatting, catalog-policy tests and corpus/build checks are not Stage 1 operations. No metadata generation, full-corpus sweep, build, integration or publication was performed.

## Quantitative claim map
EFL, Gaussian BFD, track, principal planes, element/group powers and Petzval → results.sourceModel and comparisons. Ratio → sourceModel.focusGroupRatio. Manufacturing values → evidence.productCorrelation + unchanged ZEISS datasheet p1. Raw prescription and table mismatch → evidence.rawPrescription and openIssues. Every claimed calculation is rerunnable from evidence using the packaged verifier.

## Stage 2 construction checkpoint
The actual completed TypeScript literal payload is parsed with a deliberately restricted JSON grammar inside the mandatory TypeScript wrapper. Duplicate keys, extra executable tails, unsupported values and an altered first radius are negative-tested. Its source-derived radii, spacings, indices, asphere conversion and focus endpoints are field-compared. Standalone focal lengths are recomputed and checked against each actual element entry. No separate intended data copy substitutes for the TS.

Semi-diameters are inferred from exact three-dimensional ray bundles and patent/manufacturer figure proportions. An initial uniform 10% full-field/full-pupil sizing trial failed positive-element edge thickness and was discarded; no tolerance was widened. Final modeled SDs allow the full axial pupil and default 0.60-field/0.75-pupil bundle through all five sampled focus positions. Some outer off-axis pupil rays vignette at exterior clear apertures; none of these first clips at a cemented junction. Inferred apertures do not certify the patent's full-field throughput or production dimensions. Actual-rim-slope, conic-domain, edge-thickness, shared-band gap and exact containment results are in results.

Real current-project buildLens/validateLensData and computeElementRenderDiagnosticsForState2 were executed with Node24.19.0 on the actual candidate at focus0,.25,.5,.75,1; maximum hidden trim is zero at every sampled state. Project source hashes and data/script fingerprints are bound in evidence.projectExecution and results.projectExecution. The packaged optional runtime-check.mjs accepts an explicit pinned-project path, never a hidden absolute runtime import. Full corpus tests, metadata generation and build were not run. TypeScript/Prettier packages are unavailable in the runtime; their genuine checks remain NOT_RUN at integration, not passed by a substitute.

### Aperture-convention discrepancy resolution
The source merely defines Fno as F-number (paragraph0043) and publishes no physical stop diameter or finite-conjugate convention. The modeled physical stop is inferred by exact infinity launch-height calibration at EFL/(2×2.0834). Each state reports Gaussian EFL/EP f-number, finite paraxial workingN, exact image-side sine workingN, tangent workingN and actual axial rim intercept separately. Printed closeFno2.3759 does not equal the exact fixed-iris close sine workingN≈2.264487; the failed diagnostic comparison remains in results.comparisons. It is not converted into a source typo or invented iris-motion law. The accepted limited model preserves published focus spacings and source image planes but makes no unique automatic reproduction claim for the underdetermined close aperture.

READY_FOR_ANALYSIS binds only the exact Stage2 data/evidence/verifier/results bytes recorded by this manifest. No analysis was authored before this checkpoint. Independent source-first Stage4 remains pending.

## Stage 3 entry and prose review
Incoming Stage2 inventory/hashes and exact replay were verified before authoring. Data bytes did not change. Evidence adds only this analysis review record and the prior checkpoint binding; source/model values and numerical algorithms are unchanged. The current verifier reruns all Stage2 requirements as part of the inherited gate before checking analysis.

Manual interpretive/citation review: PASS. No aberration allocation is inferred solely from glass class or power sign. Source patent rationale is explicitly distinguished from calculated group signs. Production correlation and all underdetermined aperture/spectral limits remain visible. Metadata, required section order, all element coordinates/focal lengths and shared optical summary values are machine-checked as well.

### Analysis quantitative claim map
Patent Reference: manufacturer counts/marketing values → evidence.productCorrelation and unchanged manufacturerPDFp1. Optical Architecture: functional net powers/EFL/BFD/track/Petzval → results.implementedModel[0]. Element subsections: each nd/vd/glass/type/standalonef → actual parsed elements and implementedModel.elements. Focus: endpointgaps → parsedvar/rawprescription; motion/gapconservation → source states and sourceModel track; source distance sum → sourceModel close finite.objectToImage_mm; Gaussian residual → sourceModel close finite. Aspheres: coefficient table → parsedasph/sourceepsilon transformation; modeled-rim departures → implementedModel[0].asphereDepartures. Conditions: focus ratio → sourceModel.focusGroupRatio, Table1 comparisons; materialconditions → actualelements plus raw source thresholds; no dPgF reproduction claim. Verification: aperture numbers → results.apertureConventions; geometry/rays → implementedModel.geometry/exactContainment; productiontrim → bound projectExecution.states.

READY_FOR_AUDIT is limited to the source, source-definition resolutions, numerical and geometry coverage actually recorded. No Stage4 independence or batch readiness is claimed.

Coverage clarification: exact default axial fractions ±0.17/±0.50/±0.83 and off-axis −0.75/−0.375/0/0.375/0.75 at 0.60 field are explicitly included through radial samples and azimuth90/270. Extra azimuths and full-pupil samples are additional coverage, not replacements. No data values changed.

Runtime/source field distinction: actual buildLens halfField is 26.606138285076 degrees and its default0.60field is 15.963682971046 degrees. The verifier explicitly tests that runtime angle as well as the separate patent-field fractions, at every listed state. No metadata projection override was used.

Runtime/source field distinction: actual buildLens halfField is 26.606138285076 degrees and its default0.60field is 15.963682971046 degrees. The verifier explicitly tests that runtime angle as well as the separate patent-field fractions, at every listed state. No metadata projection override was used.

### Final runtime launch and clipping disposition
Independent3D bundles are Newton-aimed at fractions of the physical stop. Their fraction magnitudes cover the same numeric default values, but they are not the same entrance-pupil launch convention as the UI. The actual UI launch formulas were therefore executed separately using current entrancePupilAtState, conjugateK, computeOffAxisTraceGeometry and public traceRay; normal density, wide-open, TRACKS FOCUS and ghost=true. Full ray points and clip-event sequences are retained in projectExecution.

Across55 actual UI rays at five focus states, five are clipped: atfocus0.75 the axial±0.83 rays clip atSTO; atfocus1 the axial±0.83 rays first clip at7A and then show8A/STO clipping in ghost continuation; atfocus1 the off-axis+0.75 ray first clips at exterior surface6, then at7A, with8A reporting noBracket during ghost continuation. These are not labeled zero-clip passes. No first clipping event is within a cemented interface. The current tracing/UI code explicitly returns and renders solid versus ghost clipped paths, while LENS_DATA_SPEC distinguishes exterior/air-gap clipping from invalid internal cemented clipping. No new validator exception is introduced. Real buildLens/validateLensData and material-render diagnostics still pass; physical stop-aimed full axial and required off-axis bundles separately pass. This bounded author gate does not certify unvignetted default UI rays throughout finite focus, source aperture variation, or production field performance; fresh Stage4 must reassess the limitation.

The engine's26.606138285076° half-field is a conservative estimate combining paraxial bounds and a fixed small-ray entrance-pupil extrapolation. There are no source-listed numerical rims in this example. An independently Newton-aimed source infinity chief ray at27.4433° passes all modeled rims (maximum normalized rim height0.943871781569). Therefore the differing field estimates do not establish that a source-backed rim clips the production format corner. One chief ray does not prove the full source bundle.

## Stage 4 — independent source-first audit and exact candidate reconciliation

The independent complete baseline was frozen before author exposure at fingerprint `7ca79ccde9355b9c88394e201bf2213f946efa968484e06df5a5dad768b8470d`. First candidate exposure occurred on 2026-10-03 at 17:48:44 UTC, in this order: authorized final data/analysis, then verifier/evidence/results/runtime method. The source-first pass freshly re-entered all 18 surfaces, six aspheres, source focus endpoints and conditions from the actual PDF, and independently searched all six raw manufacturer catalogs. Its code, exact original text artifacts, input records and results remain frozen inside independentPass and the consolidated verifier. It is reexecuted separately and compared exactly. This fingerprint establishes unchanged bytes, not blindness. Generic reviewer methods from other lenses were already known; new post-exposure vector-Snell geometry and exact-runtime checks are identified separately.

### Four-view result and corrections

The raw patent, frozen independent numerical baseline, actual TypeScript and analysis agree on the literal prescription, unscaled dimensions, generic stop-plane normalization, all asphere coefficients and K=epsilon−1 mapping. The data hash remains `866bb25ce7e03efea84eae2fb1d719cbb208f464ff9086b4a3f2f415e0658adb`. No radius, spacing, native glass coordinate, aperture or focus endpoint was changed.

The analysis was expanded from five clipping observations in 55 wide-open UI rays to nine in 440 physical UI rays across all eight authored apertures and five focus samples, with paired ghost traces. New events are close-focus axial stop clipping at f/2.8 and f/4. The old wide-open result remains correct at its original scope. The runtime diagram extent and actual analysis corner field are now distinguished, replacing a general statement about a smaller runtime field with their exact tested values. Abbe fallback and source-plane exact-ray context are clarified. A typo-like lack of spacing in the old UI paragraph was removed. Every changed numerical statement has executed support in the consolidated results.

### Independent quantitative checks

Infinity/close EFLs are 41.1947540257/36.1160475174 mm; source first-vertex-to-image track remains 100.4477 mm. Infinity BFD17.5336470319 mm is distinct from source final gap17.5658 mm; the near collimated BFD6.7860755472 mm is not the finite image distance. The independent physical-angle matrix and sequential reduced-angle calculations agree. All nine standalone powers, eight air-group powers including the cemented pair, five functional powers, pupil coordinates, surface Petzval sum0.00194826391371 mm⁻¹, focus ratio1.2521292067 and complementary gap motions agree. G2/G4 move−3.5169/−4.3500 mm; fixed groups/stop/image and overall track remain fixed. Linear intermediate spacings are diagnostic, not a production cam.

The finite source image-matrix B residual0.1840079462 mm remains a raw FAIL at the independent .01 mm comparison. That is not a source error proof because an ideal paraxial zero-B plane is not established as the source's image-selection rule. Frozen exact source-only axial bundles give near RMS focus shift−.0007092806 mm and infinity−.0308972543 mm. Neither source plane nor D0 is repaired. This resolves the significance, not the numerical failure. Likewise, the Table1 G1 Abbe20.88 versus main-table21.13 discrepancy remains visible; main-table coordinates govern. The normal-line definition for dPgF remains unestablished, so no source dPgF-to-runtime spectral transfer or APO claim is made.

The fixed exact-infinity iris is12.1591171026 mm in runtime, compared with stored12.15912 mm. The frozen baseline also retains a different, purely paraxial calibration11.2838841543 mm. Thus its near paraxial working f-number2.2271181891 and the candidate's2.0668061211 are different iris models, not inconsistent calculations. At the same stored exact-calibrated iris, independent exact sine/tangent values reproduce the author. Close sine value2.2644873674 still does not reproduce printed2.3759 under that assumed convention. No new iris law or source repair is introduced.

### Apertures, physical rays and real project execution

The source supplies no clear-aperture table. All stored SDs are labeled inferences; geometric boundaries and optical sections constrain them without claiming measured production apertures. Own sag/derivative calculations use1025 radial samples plus stationary-root bisection at five focus positions. Minimum sampled/stationary material thickness is0.0724860923 mm; maximum actual rim angle45.8802303132°. Conic policy and every shared-band air-gap intrusion pass. Actual current validateLensData/buildLens and production render diagnostics pass, with zero trim in all five states.

The independent three-dimensional physical tracer uses analytic sphere roots selected on the vertex sheet, exact asphere Newton intersections, vector Snell refraction, positive forward traversal and aperture checks. It compares all440 actual non-ghost UI launches with current runtime first events; outcomes and passing-ray slopes agree. Nine first clips are STO,7A or6, never cemented15. For the wide-open close off-axis ray the later8A ghost intersection failure follows an earlier surface6 clip; that later event is not the first physical failure. Runtime records preserve both modes. Current template guidance permits clipping at exterior edges/air or stop and forbids inside-cemented default-bundle first events; it does not demand zero vignetting at every UI sample.

Physical stop-target sampling covers9800 cases over five focus states, eight apertures, source fields0/30/60/100 percent plus state-aware UI field, radial fractions0/.17/.375/.5/.75/.83/1 and eight azimuths. All5920 full-axial/through0.75 off-axis pupil cases at the required0.60-or-smaller fields pass. The180 extra outer-pupil/full-field losses all have exterior first aperture clips. No unresolved aim result remains. Finite field slopes are referred to the first-vertex plane for these diagnostics; the source's finite-W reporting reference is not uniquely established. The actual UI convention is independently tested. Finite sampling is not a continuous-field/motion or image-quality certificate.

The first reviewer direct-Newton aiming experiment produced backward-surface/seed failures, and a forward-only continuation experiment could not aim some extreme targets. Both failed result sets and exact code remain in evidence. Safeguarded continuation resolves required targets. For extreme diagnostic targets, the auxiliary aiming calculation may extend profiles beyond apertures; the final physical ray is then independently retraced forward and ends at the first actual aperture. This identifies the originally unresolved paths as already-clipped exterior rays. No backward or ghost continuation is used to prove transmission. No tolerances, source fields or apertures were changed to remove failures.

Actual image-circle audit reports zero undersized surfaces. Actual format audit reports “ok”: exact corner27.4608069522°, 21.6499780564 mm of21.65 mm, no rim clips. Diagram/base half-field26.6061382851° is a different conservative extent. The source infinity chief27.4433° reaches21.6329176711 mm. None proves all-pupil edge throughput. Author physical-sampling metadata's constant buildLens half-field is preserved as an additional conservative sample; reviewer and actual UI records use state-aware fields.

### Glass, primary identity and provenance

All nine native d-line coordinates agree with the independent visual extraction and broad raw catalog search. No supplier/melt is established. No checked catalog falls within the normal runtime coordinate window of1.94136/21.13. Other pairs have alternatives; explicit Unmatched labels remain honest. The actual runtime uses Abbe-based dispersion for all nine labels and round-trips their d/Abbe coordinates; C/F/g are fallback estimates, not measured source values. Frozen catalog row residuals replay independently.

Patent metadata remains Tamron/Naoyuki Sato, filed2018-04-27, published2019-10-31. Official ZEISS09/18 datasheet independently supports9/8,40mmf/2, no OIS, close0.24m,43.3mm field, and the section topology. Correlation is supported, not manufacturer-confirmed. Canonical patent and manufacturer PDF hashes match retained prior hashes; recovered card text is authoritative but its lost pre-interruption byte identity is not claimed. All original packaged bytes remain unchanged.

### Gates, scope and portable reproduction

The revised Stage2/3 checks run against the unchanged data and updated final evidence/analysis, followed by the independent Stage4 checks. Strict literal-parser negative fixtures detect duplicate keys, unsupported values, trailing executable content and radius mutation; exact runtime-grid validation detects a removed ray. The verifier recomputes from actual TypeScript and separately reexecutes frozen code, with original baseline input/code/result hashes verified. Recorded real-project execution is bound to the exact data/script/project hashes. Portable replay does not pretend to reexecute a compiler, renderer or remote catalog download.

TypeScript/Prettier tooling checks and later corpus/catalog-policy/build integration remain NOT_RUN at integration scope. No observed applicable construction/render validator failure is deferred. Batch integration, metadata generation, Git changes, corpus sweeps and publication were not performed. Final gate is awarded only by the finalized manifest after clean extraction and exact stable replay. The canonical package has13 root files, preserving essential manufacturer PDF, author runtime reproducer, reviewer runtime reproducer and bound runtime result alongside the canonical dossier. No hidden per-lens numerical dependency is needed.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of JP 2019-191502 A Example 1: 18 of 18 surface rows, nine glass pairs, six aspheric surfaces with ε mapped to K = ε − 1, and four variable gaps agree; engine f 41.1948 mm and F/2.0834 as printed. The close state gives 0.235 m object to image against the 0.24 m on the ZEISS data sheet. The rendered section matches the data-sheet drawing: 9 elements in 8 groups with aspheres on elements 1, 4 and 6. ZEISS marks element 1 as aspherical only, while Example 1 gives it νd 81.61, so the production L1 glass may differ. The applicant is Tamron.

Changed at deployment: `maker` and display name aligned with the other Batis entries (Carl Zeiss Oberkochen; `ZEISS BATIS 40mm f/2 CF`).

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: `patents/JP2019191502A.pdf`, page 18, FIG. 1, upper panel (infinity focus), the section of Example 1. The sheet is a 400 dpi bilevel raster with the optical axis horizontal (page row 814.5). The patent prints no clear apertures, so every value below is an estimate from the drawing, floor-checked by real-ray trace.

Scale. Sixteen distinct vertex crossings were read in a narrow window beside the axis. Surface 1 sits at x = 427.5 px, surface 18 at 1355.5 px and the image plane at 1552.5 px: 928 px for 82.8819 mm and 1125 px for 100.4477 mm, both 11.20 px/mm (0.0893 mm/px). Every intermediate crossing falls within 1.1 px of the prescription position. The vertical scale was checked independently: the drawn stop opening reads 135.5 px, 12.10 mm, against the calibrated 12.159 mm, and the flat rims drawn on L2, L4, L6 and L7 are 2.3, 1.2–1.3, 1.5 and 3.5 mm thick against prescription edge thicknesses of 2.33, 1.32, 1.52 and 3.51 mm at the measured heights. The figure is a to-scale plot, so the reading error is about one line width (0.2 mm).

Rim heights are the outermost ink on both sides of the axis less half a line width; the two sides agree within 1 px.

| Element | Surfaces | Before | Figure | Figure / before | After | Basis |
|---|---|---:|---:|---:|---:|---|
| L1 | 1A, 2A | 19.2 | 19.6 | 1.02 | 19.2 | retained, within noise; drawn square-cut |
| L2 | 3, 4 | 18.0 | 16.0 | 0.89 | 16.0 | figure; edge thickness 2.33 mm as drawn |
| L3 | 5, 6 | 15.0 | 13.2 | 0.88 | 13.2 | figure; square-cut, one height |
| L4 | 7A, 8A | 16.1 | 14.7 | 0.91 | 14.7 | figure, and the close-focus axial floor 14.67 |
| L5 | 10, 11 | 13.3 | 12.6 | 0.95 | 13.3 | retained, within noise |
| L6 | 12A, 13A | 14.0 | 12.3 | 0.88 | 12.3 | figure; edge thickness 1.52 mm as drawn |
| L7 + L8 | 14, 15, 16 | 14.0 | 13.2 | 0.94 | 13.2 | figure, after the live check (below) |
| L9 front | 17 | 13.0 | 12.6 (curve end) | 0.97 | 13.0 | retained |
| L9 rear | 18 | 13.0 | 14.2 | 1.09 | 14.2 | figure; drawn stepped |

Twelve surface values changed on seven elements. L4's old 16.1 mm left a 0.07 mm knife edge and ran past the inflection of the 8A polynomial near 15 mm; the figure draws a 1.2 mm flat rim there. The doublet was inside the usual noise band on the first pass and was kept at 14.0; the rendered section then showed its rim level with L9 (14.0 against 14.2), where both the patent figure and the ZEISS drawing show L9 standing clearly above it, so it was set to the figure height. L9 is a strong meniscus whose front curve the figure ends at about 12.6 mm below a flat annulus, so only its rear face rises; both faces at 14.2 would also push the engine half-field to 28.7°, past the patent's field. The figure also draws flat annuli beyond the curve on the rear of L1 (curve ends near 16.7 mm), the front of L3 (12.2), the rear of L5 (11.3) and the rear of L8 (11.6). The renderer has no flange, and those elements are drawn square-cut, so both faces keep one height.

Clearance. The stop-filling axial ray needs, at the worse of infinity and the close endpoint, 12.24 mm on L2, 12.72 on L3, 14.67 on L4 (7A, close focus), 11.92 on L5, 11.88 on L6 and 10.18 on the doublet; every rim clears it at focus 0, 0.25, 0.5, 0.75 and 1, with the least margin 0.03 mm at 7A at close focus. The corner chief ray (ω 27.44°, Y 21.63 mm) needs 12.24 mm at 1A and 12.27 mm at 18 and is clear. The validator reports no errors, the image-circle check lists no undersized surface, traced field coverage stays 100 % (27.5°, 21.65 of 21.65 mm, no rim clip), the aperture census stays within 3 % of F/2.0834, and render trim is zero at all five focus samples. The engine half-field moves from 26.606° to 27.519° because surface 18 no longer limits it; f-number and stop are unchanged. The smallest edge thickness is now 1.32 mm (L4), up from 0.07 mm.

Vignetting. The smaller rims on L2, L3, L4 and L6 cut the off-axis bundle, which is the design's real behaviour rather than a side effect: the patent's transverse-aberration fans (FIG. 2B, page 18) end near −0.78/+0.65 of the pupil at 0.50 relative field, −0.69/+0.48 at 0.70, −0.61/+0.33 at 0.90 and −0.55/+0.25 at full field. The model passed −1.00/+0.86, −0.95/+0.72, −0.74/+0.43 and −0.63/+0.18 before, and passes −0.89/+0.73, −0.82/+0.57, −0.72/+0.40 and −0.63/+0.32 now. No rim was sized to these numbers; they are a consistency check, and the patent still vignettes slightly more than the model. In the default diagram the off-axis fan (now 16.51°) shows one of its five rays vignetted at infinity and two from focus 0.50 onward. Retracing the app's launch formulas over eight f-stops and five focus samples gives 16 first clipping events in 440 rays (9 before): five at 12A, three at 5, two at 7A, two at 6 and four at the stop, none at the cemented interface.

Analysis file. The aspheric departures quoted at the modeled rims were recomputed: 7A −0.600865 mm and 8A +0.528634 mm at 14.7 mm, 12A −0.073078 mm and 13A +0.032977 mm at 12.3 mm (1A and 2A unchanged). The paragraphs on rim derivation, the default-ray clipping census, the stop-aimed sampling and the diagram half-field were rewritten for the new rims; the Stage 2–4 sections above describe the as-authored rim set and are left as written.

Maker diagram. The ZEISS data-sheet section (09/18, page 1) shows 9 elements in 8 groups with L7 + L8 cemented, the same shapes as Example 1 including the concave-to-object L3. Its element heights relative to L1 read about 0.83, 0.72, 0.71, 0.57, 0.59, 0.62, 0.64 and 0.71 for L2 to L9; the patent figure gives 0.82, 0.67, 0.75, 0.64, 0.63, 0.67, 0.67 and 0.72, the old model 0.94, 0.78, 0.84, 0.69, 0.73, 0.73, 0.73 and 0.68, and the new one 0.83, 0.69, 0.77, 0.69, 0.64, 0.69, 0.69 and 0.74. Both drawings agree that L2 is well short of L1, that L6 is among the smallest and that L9 stands above the doublet. They differ in detail: ZEISS draws L3 as tall as L4, L5 and L6 smaller still, L8 a step above L7, and L9 without a flange; the patent figure of the modeled example governs. ZEISS marks L1 and L4 aspherical, L2, L3, L7 and L8 special glass, L6 special glass plus aspherical, and L5 and L9 unmarked.

Open limitations. The figure's flat mounting annuli cannot be drawn, so L1, L3, L5 and L8 show thicker rims than the patent (L1 8.7 mm against 7.1 mm drawn). L1 and L5 remain 2 % under and 6 % over their figure heights. FIG. 2B suggests the design's clear apertures are slightly smaller than the drawn blanks. The rims do not explain the printed close F-number 2.3759: that ray needs only 13.8 mm at 7A, so the stop-filling beam (sine F/2.264) still passes. Intermediate focus positions are interpolated, not published.

## 2026-10-08 — Integration: glass labels and metadata

- Index column. The patent heads the column Nd and states the d line, but five of the nine printed indices equal a catalog glass at the e line to all five decimals, each with that glass's exact νd: L1 HOYA FCD1 (1.49845 / 81.61), L3 HOYA FDS90-SG (1.85505 / 23.78), L4 HOYA M-PCD51 (1.59412 / 67.02), L6 HOYA M-FCD1 (1.49856 / 81.56) and L7 OHARA S-NBH56 (1.86290 / 24.80). L2, L5, L8 and L9 match no row of the HOYA (including obsolete), OHARA, Sumita or HIKARI catalogs, or of the site catalog, at either line.
- Disposition. The printed values stay d-referenced and every element stays Unmatched; the five labels now record the e-line identity, and each element carries an `indexReferenceNote`. Resolving the five on catalog curves was tried and withdrawn: catalog elements trace their green channel at the d line while Abbe-estimated e-referenced elements trace it at the stored e-line index, so the mixed lens put the red and blue foci 152 µm and 156 µm from green, against 25 µm and 16 µm as stored. The SAMYANG AF 35mm f/2.8 FE model records the same mixed column and takes the same disposition. All nine elements therefore remain on the Abbe estimate.
- `apd: "inferred"` added to L2, L3, L6, L7 and L8, the five elements ZEISS's data sheet draws as special glass.
- `specs` completed (design f = 41.19 mm, design F/2.08, 2ω = 54.9° from the printed 27.4433° half-field, six aspherical surfaces on three elements); the subtitle names the Tamron patent; `apertureBlades` 9 added.
- Display name, mount (`sony-fe`) and format reviewed and left as authored; the name follows the other two BATIS entries.

## 2026-10-08 — E-line reference and catalog names

- Supersedes the disposition in the entry above. All nine elements are now `indexReference: "e"` with the printed values unchanged. L1, L3, L4, L6 and L7 carry their catalog names (HOYA FCD1, FDS90-SG, M-PCD51 and M-FCD1; OHARA S-NBH56) and resolve to catalog dispersion; FDS90-SG resolves to the site catalog's FDS90 row. L2, L5, L8 and L9 stay Unmatched on the Abbe estimate. The `indexReferenceNote` on each element now says the column is traced at the e line with the printed d-line Abbe numbers.
- Basis. The dispersion engine traces every e-line element at C′, e, F′ and g on both the catalog and the Abbe tier and anchors catalog curves to the authored index, so a partly resolved e-line lens no longer mixes lines. Paraxial focus against the green channel is red +28 µm, blue +26 µm, violet +104 µm and reference 0 µm; the all-Abbe, d-referenced data gave +25, +16 and +98 µm.
- All nine change together. With only the five named elements e-referenced, the four others trace at C/F beside C′/F′: red +207 µm, blue +199 µm, violet +335 µm.
- The `vd` slot keeps the printed d-line Abbe number. Catalog νe for the five is 81.19, 23.60, 66.76, 81.16 and 24.61 against the printed 81.61, 23.78, 67.02, 81.56 and 24.80, inside the ±2 match window. The engine reads the slot as νe for the four Unmatched elements; lowering it by 0.2 moves no channel focus by more than 1 µm.
- Dependency. This needs the engine's e-line channel convention (C′/e/F′/g on every tier). On an engine without it the same data gives red −152 µm, blue −156 µm and reference −231 µm against green.

## 2026-10-08 — Second review: diagram, labels and movement

What was compared. The lens as drawn on the local site (infinity, the close endpoint, the focus-movement chart at both ends, and the element inspector for elements 1, 2, 3, 4, 6, 7, 8 and 9) against FIG. 1 on PDF page 18 of `patents/JP2019191502A.pdf` (both panels), the Example 1 text and tables (paragraphs 0047–0050, pages 10–11), claims 1, 9 and 10, Table 1 (page 17), the reference-sign list (page 17) and the ZEISS data-sheet section. Sections above this one use the former names: elements L1–L9 and groups G1–G5.

Scale, measured again from scratch on the native 400 dpi raster. The axis is row 814.5. Sixteen vertex crossings run from surface 1 at x = 427.5 px to surface 18 at 1355.5 px and the image plane at 1552.5 px: 1125 px for 100.4477 mm, 11.200 px/mm, with every intermediate crossing within 1 px of the prescription. Rim heights are half the distance between the top and bottom rim lines (line centres).

| Element | Surfaces | Figure outer rim (mm) | Figure curve end where a flat land is drawn (mm) | Before | After |
|---|---|---:|---:|---:|---:|
| E1 | 1A, 2A | 19.67 | rear 16.6 | 19.2 | 19.2 |
| E2 | 3, 4 | 16.12 | – | 16.0 | 16.0 |
| E3 | 5, 6 | 13.24 | front 12.0 | 13.2 | 13.2 |
| E4 | 7A, 8A | 14.73 | – | 14.7 | 14.7 |
| E5 | 10, 11 | 12.66 | rear 11.4 | 13.3 | 12.7 |
| E6 | 12A, 13A | 12.39 | – | 12.3 | 12.3 |
| E7 + E8 | 14, 15, 16 | 13.28 | rear 11.5 | 13.2 | 13.2 |
| E9 front | 17 | 14.29 | front 12.5 | 13.0 | 14.2 |
| E9 rear | 18 | 14.29 | – | 14.2 | 14.2 |

The first pass's readings are confirmed within 0.1 mm on every element. Seven of the nine were already on the drawing; two differed visibly on the page.

E5 (surfaces 10 and 11, 13.3 → 12.7). The page drew E5 level with E3 and the doublet (13.3 against 13.2 and 13.2). The figure draws it 0.6 mm below both (12.66 against 13.24 and 13.28), and the ZEISS section also draws it shorter than its neighbours. Every other fitted rim agrees with this figure within 0.1 mm, so 0.64 mm is a real difference although it is under 5 %. At 12.7 the rim thickness is 3.90 mm (4.22 before, 3.30 drawn). E5 sits 0.2 mm behind the stop, so the stop limits the beam there: the largest height any transmitted ray reaches is 11.92 mm on surface 10 and 11.28 mm on surface 11, at any field up to 27.44° and any focus position. The stop's drawn blade stubs now end at 12.7 mm instead of 13.3 mm; the figure extends its stop ticks to 14.7 mm, which the renderer does not follow.

E9 front (surface 17, 13.0 → 14.2). The page joined a 13.0 mm front rim to a 14.2 mm rear rim with a slanted edge. The figure draws a squared rim: a flat top at 14.29 mm between a cylindrical front edge and the rear curve, and the ZEISS section draws a flat top too. With both faces at 14.2 the top is flat, as drawn. The price is a front horn that follows the curve 1.2 mm further forward than the drawn land (rim length 3.7 mm against 2.5 mm drawn); its tip stays 1.5 mm behind the rear tip of E8. The first pass kept 13.0 because 14.2 raises the engine's half-field. That value is a paraxial estimate (27.519° with surface 17 limiting, 28.685° with surface 18 limiting), and no real ray changes: within the patent's 27.44° field the largest transmitted height on surface 17 is 12.60 mm, the figure's own curve end is 12.5 mm, and a 4001-ray meridional fan at each of six fields and five focus positions passes exactly the same rays with either value, also at 30° and 32°.

E1 stays at 19.2 mm, 2.4 % under the drawn 19.67 mm. Its rear rim already runs 1.8 mm beyond the drawn land (8.9 mm against 7.1 mm), and a taller rim would lengthen it further and admit off-axis rays the present rim stops. E3 and E8 keep one height on both faces; the flat lands drawn on the E1 rear, E3 front, E5 rear, E8 rear and E9 front cannot be rendered.

Clearance and engine values. The whole trial set passed the surface validator and the real-ray clearance trace before it was applied. Afterwards the validator reports no errors, the image-circle check lists no undersized surface, traced corner coverage is 100 % (27.5°, 21.65 of 21.65 mm, no rim clip), the aperture census stays within 3 % of F/2.0834 and render trim is zero at focus 0, 0.25, 0.5, 0.75 and 1. Focal length 41.1948 mm, F/2.0834 and stop radius 12.15912 mm are unchanged. The engine half-field moves from 27.519° to 28.685° and the default off-axis fan from 16.51° to 17.21°. The stop-filling axial ray still clears every rim (least margin 0.03 mm at 7A at the close endpoint), the corner chief ray needs 11.29 mm at surface 17 and 12.27 mm at surface 18, the tangential pupil ranges at 0.50, 0.70, 0.90 and full field are unchanged (−0.89/+0.73, −0.82/+0.57, −0.72/+0.40, −0.63/+0.32), and the default-ray census is unchanged at 16 first clips in 440 rays (five at 12A, three at 5, two at 7A, two at 6, four at the stop). No aspheric semi-diameter changed, so the departure table in the analysis stands.

Labels changed.

| Item | Before | After | Evidence |
|---|---|---|---|
| Group brackets | G1, G2 focus, G3, G4 focus, G5 | L1, L2 focus, L3, L4 focus, L5 | FIG. 1 brackets, paragraph 0047 and the reference-sign list name the five groups L1–L5 |
| Element `name` | L1 … L9 | E1 … E9 | The patent names no element, and an L-number is a group in this patent; the E-numbers follow the catalog's other L-grouped patents |
| Element `type` on E1, E4, E6 | no aspheric count | adds "(2× Asph)" | ASPH on surfaces 1, 2, 7, 8, 12 and 13 in the prescription table |
| Element `role` | none | one sentence per element | paragraph 0047, claims 9 and 10, the signs of R |
| `apd` on E2 and E3 | inferred | patent | below |
| `focusDescription` | G-names | L-names; names the moving elements and the fixed units | paragraph 0047, the variable-spacing table |

Anomalous-dispersion tags. Claims 9 and 10 define G1dPgF and G2dPgF as the g–F anomalous dispersion of the positive element ahead of the first focus group (E2) and of the negative element inside it (E3), and Table 1 fills both for Example 1: 0.0282 with νd 20.88, and 0.0137 with νd 23.78. The patent text therefore designates both elements, and their tags are now `patent`. Both rows equal HOYA catalog entries exactly (E-FDS1: νd 20.88, ΔPgF 0.0282; FDS90 and FDS90-SG: νd 23.78, ΔPgF 0.0137), so the deviations are on HOYA's own line and were not copied into `dPgF`. E6, E7 and E8 stay `inferred`: the patent says nothing about them and ZEISS draws them as special glass. E1, E4, E5 and E9 carry no tag, as on the ZEISS drawing.

Checked and left as authored.

- Bracket ranges: L1 = surfaces 1A–4, L2 = 5–8A, L3 = 10–11, L4 = 12A–13A, L5 = 14–18, as the figure brackets them. The figure's L3 bracket also spans the stop tick; the stop is surface 9, 0.2 mm ahead of E5 and fixed with it, and is drawn there between E4 and E5.
- Cemented bracket D1 = 14–16, the only cemented pair (surface 15 has glass on both sides).
- Element types against the signs of R: E1 biconcave (−1212.5 / +29.1), E2, E4 and E6 biconvex, E3 and E9 negative menisci concave to the object, E5 and E8 negative menisci convex to the object, E7 a positive meniscus convex to the object.
- Aspheres: 1A, 2A, 7A, 8A, 12A and 13A are the only `A` labels and `asph` entries; the inspector shows two aspheric faces on each of E1, E4 and E6.
- Gap labels D4, D8, D11 and D13 are the patent's own names for the four variable spacings.
- Front-page data: JP 2019-191502 A, published 2019-10-31, Tamron, inventor Naoyuki Sato (page 27).

Focus movement. The table gives D(4) 6.1277 → 2.6108, D(8) 2.7571 → 6.2740, D(11) 15.5621 → 11.2121 and D(13) 0.2000 → 4.5500 from infinity to the close state; each `var` pair holds infinity first. The sums D(4) + D(8) = 8.8848 mm and D(11) + D(13) = 15.7621 mm are constant, so L2 moves 3.5169 mm and L4 4.3500 mm toward the object while L1, the stop, L3, L5 and the image plane stay fixed, as claim 1 states and as the two F arrows under L2 and L4 point. The figure's close panel shows the same: the L2 vertices sit 39–40 px (3.5 mm) and the L4 vertices 49 px (4.4 mm) further left than in the infinity panel, and every other vertex is unmoved. On the page the movement chart lists five groups, three of them fixed; L2 moves from 69.6 to 73.1 mm and L4 from 41.3 to 45.6 mm ahead of the focal plane, with 4.35 mm maximum travel. At the far end the slider reads 23 cm and the readout shows D4 2.61, D8 6.27, D11 11.21, D13 4.55 and EFL 36.12 mm (patent 36.1160). There is no zoom.

Maker diagram. The ZEISS section agrees on 9 elements in 8 groups with E7 + E8 cemented, on the shape of every element, on E5 and E6 being the smallest and on E9 standing above the doublet with a flat top. It differs from the patent figure in drawing E3 as tall as E4, E8 a step above E7 and E9 without a land; the patent figure of the modeled example governs. ZEISS marks E1 and E4 aspherical, E2, E3, E7 and E8 special glass, E6 special glass plus aspherical, and E5 and E9 unmarked.

Open limitations, including fields outside this review's edit list.

- E2's glass label stays Unmatched. Table 1 treats the element as an E-FDS1-class glass (nd 1.92286, ne 1.93323, νd 20.88), which the printed 1.94136 and 21.13 do not reproduce; the same table row repeats for Example 4, whose prescription prints 1.94531 and 20.32. On the engine's line the tabulated deviation is about +0.030; no `dPgF` was entered.
- E1 is HOYA FCD1 in this example, a strongly anomalous glass, but ZEISS marks the production front element aspherical only, so it carries no tag.
- The engine's half-field estimate (28.685°) now exceeds the patent's 27.4433°; analyses follow the format-corner chief ray (27.46°), not this estimate.
- The flat mounting lands cannot be drawn, so E1, E5, E8 and E9 show longer rims than the figure.

## 2026-10-08 — Integration after the second review: E2 partial dispersion

The second review above renamed the elements E1–E9 (the patent calls its groups L1–L5) and found that the two Table 1 deviations equal HOYA catalog rows: νd 20.88 with ΔPgF 0.0282 is E-FDS1, and νd 23.78 with 0.0137 is FDS90. That fixes the line they are quoted on as HOYA's.

- E2 `dPgF` 0.0307 entered. Absolute P_g,F = 0.0282 + 0.6483 − 0.0018 × 20.88 = 0.6389; the engine's normal line at the printed νd 21.13 is 0.6083. E2 stays Unmatched on the Abbe estimate, where the value places its g-line index. Paraxial g-line focus against green moved from +104 µm to +31 µm; red and blue are unchanged at +28 µm and +26 µm.
- E3 needs no entry: it traces on the FDS90 catalog curve, whose own deviation is the 0.0137 the patent prints.
- The Table 1 row still pairs the deviation with νd 20.88 where the prescription prints 21.13 and an index E-FDS1 does not reproduce; that contradiction is in `apdNote` and the analysis.
