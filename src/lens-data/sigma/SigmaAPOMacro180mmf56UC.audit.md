# Sigma APO MACRO 180mm F5.6 UC: consolidated Stage 1–4 audit

The opening sections preserve the author's historical Stage 1–3 record. The Stage 4 section below governs the final corrected revision and independent-review disposition.

## Job and reference versions

- Controlling job: JPH04110811A, Example 3, exact stem SigmaAPOMacro180mmf56UC.
- Original job card: 138 bytes; SHA-256 a55707a549364bc90edc64602eaa29521edf56f4370c68dea30d227962b91d4a.
- Original patent: 252691 bytes, six pages; SHA-256 344f708b29692802f5a484eda95a3b5d5e2901aa433aeb0345db036d2f194bcd.
- The October 10, 2026 approval queue authorizes processing. Older research-only/processing-pending notes do not revoke that approval.
- Current project main was retrieved through the GitHub connector at commit 79899f4d8c703bd3e4a2cd0b8bd4f04428700664.
  Fourteen current governing/reference files plus current runtimeLens, validateLensData and dispersion sources were fetched at that exact commit, with Git blob identity and SHA-256 checks. Exact identities appear in the manifest.
- Shared chat protocol and dossier contract CHAT-1.0 (2026-09-11), plus Stage 1–3 prompts, govern portable packaging and stage gates.
- Task-specific workspace path replaces the suggested /mnt/data location. No mounted project, Mac workbench, Git write, build, integration or publication is claimed.

## Extraction and conventions

The original patent is image-only. Text extraction returned six formfeeds and no text. All six pages were rendered and inspected. The complete Example 3 transcription was frozen before opening the earlier correlation review; its frozen SHA-256 is de034f7de88dba83dabcad65fa3c2e65624c86c39e5fa76a2b546eb647bbd3bb. This is a source-first author extraction, not an independent Stage 4 audit.

PDF page 1 (printed 85) identifies the filing as August 31, 1990, publication April 13, 1992, inventor 小山武久 (Takehisa Koyama), and applicant 株式会社シグマ (Sigma Corporation). The romanization is corroborated by the same publication's public bibliographic record. No duplicate assignee entity is inferred from the provider's alternative names.

PDF page 4 (printed 88) contains all 16 Example 3 rows, the macro spacing table and summary. Row 9 has r=0.0 and the explicit iris label 絞り; it is a plane, not a zero-radius sphere. Figure 5 on PDF page 6 (printed 90) is the matching optical section. Source rows 3/4/5, 6/7/8 and 10/11/12 form three cemented pairs. There are nine elements, six air-separated components and four functional motion groups. No asphere or rear plate is published.

The independent high-resolution re-read confirms macro d5=23.66, d8=3.32, d9=3.38, d12=41.7. The d5 glyph was read against other source glyphs; no thickness was changed on grounds of plausibility. All source signs, spacings and native d-line indices remain unchanged. PDF page 3 (printed 87) explicitly defines the object distance from object to first surface and omega as full field. It defines f at infinity, fb as back focus, and the close F-number as effective F-number at 0.5×.

## Model transformations

1. Interpret the explicitly labeled source stop row as flat. There is no stop-location inference.
2. Keep raw terminal row 16 d=0.0. For both source computation and the implemented model, append the separately published fb=40.08 mm in air as the infinity image gap. No plate correction or scaling is applied.
3. Preserve native design f=174.86 and marketed 180 mm separately.
4. Preserve both published focus configurations unchanged in data.ts. No focus law has been reconstructed.
5. Do not add an unprescribed thin front component visible in the manufacturer section. Its material, thickness and counting convention are unknown.
6. Infer one fixed iris radius by current-runtime exact entrance-beam calibration at source infinity f/5.71; retain the older paraxial radius as a comparison only. No physical diameter is claimed as published.

## Manufacturer correlation

The complete manufacturer-authored catalogue archived as LensCatalogue1995.pdf was downloaded afresh. Its SHA-256 c65a0d2d1d8a1ffc442d05208895a372e035080439dfdd0681f06dde2f3912f4 agrees with the earlier preserved original. PDF pages 13 and 16 were rendered and reviewed directly.

Page 13 names APO MACRO 180mm F5.6 UC, identifies two front SLD elements, floating internal focus, and infinity-to-1:2 reproduction. It lists Sigma, Minolta, Nikon and Canon AF mount variants. Page 16 gives 9 elements / 6 groups, 13.7° coverage, 55 cm minimum focus measured from the film plane, 1:2, 52 mm filter, 69.5×103 mm and 433 g; its note assigns dimension/weight figures to the Nikon mount. Canonical proposed mount IDs are sigma-sa, sony-a (the shared Minolta/Sony A taxonomy), nikon-f and canon-ef. This is a strong correlation with the selected published powered design, not manufacturer confirmation of the patent or proof of an identical production prescription. Filename 1995 is not a verified catalogue imprint or product release year.

The source arithmetic 403.0 + 103.29 + 40.08 = 546.37 mm is compatible with the catalogue's rounded 55 cm film-plane figure, but does not independently prove that the printed optical state focuses at that image plane.

## Glass review

Seven distinct native coordinates were audited against official OHARA, HOYA, HIKARI, SCHOTT, CDGM and SUMITA catalogs. Complete original catalog bytes are retained in the separate authoring-evidence archive. Relevant source rows and HOYA dispersion coefficients are embedded in evidence.json for offline residual/spectral replay.

| Native nd / νd | Close HOYA coordinate candidate | Interpretation |
|---|---|---|
| 1.497000 / 81.6 | FCD1, 1.49700 / 81.61 | Low-dispersion crown coordinate; supplier unproved |
| 1.834000 / 37.3 | NBFD10, 1.83400 / 37.34 | High-index flint coordinate |
| 1.846660 / 23.8 | FDS90-SG, 1.84666 / 23.78 | Dense flint coordinate; other historical/current candidates retained |
| 1.785900 / 43.9 | NBFD11, 1.78590 / 43.94 | High-index flint coordinate |
| 1.755200 / 27.5 | E-FD4L, 1.75520 / 27.53 | Dense flint coordinate |
| 1.487490 / 70.4 | FC5, 1.48749 / 70.44 | Low-index crown coordinate |
| 1.713000 / 53.9 | LAC8, 1.71300 / 53.94 | Lanthanum crown coordinate |

These are candidates, not final application labels or historical melt identifications. Other vendors are not collapsed into the HOYA names. OHARA S-FPL51 (νd81.54) is distinct from S-FPL51Y (81.14); S- and L-family prefixes remain intact. Candidate spectral indices from official formula-1 polynomials round-trip against vendor coordinates; the native patent supplies no nC/nF/ng/dPgF. The product word APO is not treated as a numerical performance result.

## Numerical and geometry results

The portable program independently implements ABCD matrices and sequential height/reduced-angle recurrence. Analytic thin-power and plane-slab tests, a deliberate radius mutation, determinant checks, and a separate exact sphere/vector-Snell probe are included. All derived quantities use source evidence, not the stored results.

Infinity: EFL 174.8640623 mm, BFD 40.0805050 mm. They reproduce 174.86 and 40.08 to the printed last digit. Vertex track is 103.29 mm; source first-vertex-to-image length is 143.37 mm, giving TL/EFL=0.8198940. Thus the infinity configuration has verified telephoto geometry. Principal planes relative to first/last vertices are retained in results.

The published gap changes move G2 +11.18 mm imageward and G3 −8.25 mm objectward. G1, G4 and the stop remain stationary to numerical precision. Standalone group focal lengths are +68.02418, −54.36498, +91.63449 and −79.02324 mm. Standalone element powers, cemented net powers, and in-situ group magnifications are calculated separately. The surface-by-surface Petzval sum is +0.000571594738 mm⁻¹.

All six claimed inequalities pass. The computed ratios/magnifications are 0.3890118, 4.8758591, 0.3108985, 1.3725450, 0.4519124 and 1.5672266 in source order. The printed coarse beta2=4.8 and beta4=1.5 do not match ordinary one-decimal rounding of the calculations. Those observations remain FAIL comparisons; no tolerance was widened to label them reproduced. They are consistent with truncation, but truncation is not assumed as a general source convention. The actual inequalities remain satisfied with ample margin.

No SDs are published. They were a future task at the original diagnostic stage; the Stage 2 section below records the now-executed final-data geometry and containment checks. Production render/trim remains an integration check. No gap-sag override was used.

## Correction and discrepancy register

### ISSUE-MACRO-CONJUGATE: unresolved, construction blocker (closed 2026-10-11: spherical aberration at 1:2, see the deployment validation section)

At the printed 403.0 mm object-to-first-surface distance and unchanged macro gaps, the Gaussian image distance is 40.3683418043 mm behind the last glass vertex. Retaining the source infinity image gap gives a +0.2883418043 mm residual. The magnification at Gaussian focus is −0.499274705, close to the printed magnitude 0.5. The diagnostic object distance giving focus at exactly 40.08 mm would be 404.1639105 mm. That solved distance is **not** substituted for the source's 403.0 mm.

The source does **not** print a separate macro BF=40.08 cell. The comparison follows the explicit claims/description that G4 is fixed relative to the image plane, combined with the unchanged rear-group location under the printed gaps. Consequently it is a contradiction under the ordinary fixed-plane paraxial interpretation, not a claim that two explicit macro BF numbers disagree. A different design-image or aberration-reference convention has not been established by the source. Figure 6 supplies aberration plots but no independently specified absolute axial reference that resolves the gap. Its zero-centered curves cannot simply be read as a new absolute image distance.

The full-source round-to-nearest test allows each R/d/nd ±half its last displayed digit, macro gap d12 ±0.05 mm, other macro gaps ±0.005 mm, and object distance ±0.05 mm. A complete 512-box partition of d5/d12/object distance, with 60-digit outward-rounded interval arithmetic and conservative dependency loss, encloses the image distance within [40.1392933687, 40.5984530949] mm. This is disjoint from [40.075,40.085] mm for the printed BF. Ordinary displayed-digit rounding therefore cannot by itself explain the discrepancy under that interpretation. Neither an assumed truncation convention nor a preferred substitute gap is adopted.

No source erratum has been isolated with two independent kinds of internal evidence. No source prescription, selected example, near distance, image plane, or stop diameter has been changed to force agreement. The original diagnostic paused Stage 2 at this issue. The revised gate section below records the later accepted-deviation scope; no source correction is inferred from that decision.

### ISSUE-MACRO-APERTURE: conditional fixed-iris discrepancy

Calibrating the infinity pupil to f/5.71 gives a paraxial iris radius of 9.0489290 mm, or 9.1943879 mm when the same infinity input ray is traced with exact spheres. At macro, the respective working f-numbers are 6.1531740 (paraxial slope) and 6.1666185 (exact sine NA); the exact tangent-cone definition gives 6.1463147. None equals the source effective f/5.98. The small choice between slope, tangent and sine definitions does not close the difference.

However, the physical iris diameter and its focus dependence are not printed. The fixed-diameter premise is a modeling assumption, so this result is a conditional limitation, not independent proof of a source error. A focus-dependent diameter must not be invented merely to reproduce the printed number. Pupil positions, conditional radii, intrinsic f-number and fixed-image cone f-number are separately recorded in results.json.

## Quantitative claim map

| Audit claim | Reproducible result |
|---|---|
| Infinity EFL/BFD/track/principal planes | sourceModel.states.infinity; facts F-EFL/F-BFD/F-TRACK |
| Telephoto ratio | facts F-TELEPHOTO-RATIO |
| Native versus marketing quantity | facts F-NATIVE-MARKETING; PATENT p4 and SIGMA p13/p16 |
| Focus movement and preserved track | sourceModel.focusMotionMm; gap-conservation check |
| Element/group/net cemented powers | sourceModel.elements/functionalGroups/cementedGroups |
| Petzval sum | sourceModel.petzval.surfaces and sumPerMm |
| Six conditions and coarse summary mismatches | sourceModel.conditions; comparisons summary-C1 through C6 |
| Macro distance/magnification and solved-object diagnostic | sourceModel.states.macro |
| Full rounding enclosure | sourceModel.roundingEnclosure |
| Conditional iris/pupil/F-number values | sourceModel.apertureProbes and pupils |
| Catalog residuals and candidate spectral values | sourceModel.glassAudit |
| Product topology/specs | evidence.productCorrelation; directly read SIGMA p13/p16 |

Manual source/citation review completed for this diagnostic record. At the original diagnostic stage there was no analysis.md; the completed Stage 3 record below supersedes that stage inventory. Exact source locators distinguish source fact, inference and computation.

## Independent review

Not performed at this stage (closed: superseded by the Stage 4 review below and by the 2026-10-11 deployment validation). This author has seen the historical correlation review after freezing a fresh extraction. That review is not a fresh independent optical audit of this diagnostic. Any later independent reviewer must freeze its own source extraction and code baseline before opening the author's numerical conclusions.

## Revised gate disposition (2026-10-10)

The historical diagnostic remains frozen under the original stage1 directory and ZIP. The latest user decision supersedes the brief infinity-only scope and accepts approximately +0.288 mm macro defocus. The retained model includes both published configurations, object distance 403.0 mm from the first vertex, and the fixed image gap 40.080 mm inferred from the explicitly fixed rear-group/image-plane mechanism. The source does not separately print a macro BF cell.

This is an accepted modeling deviation, not a corrected patent or reproduced macro conjugate. The source comparison remains FAIL. `sourceErrata: [{status: "unresolved", note: ...}]` preserves the unresolved cause; the current finiteConjugates contract allows evaluation at the authored image plane and separately reports best-focus displacement. Primary source mechanisms plus executed calculations establish the representation, while the user authorizes its retained limitation. No source field is changed. The 0.288 mm residual is not attributed to ordinary last-digit rounding, which the conservative interval calculation excludes under this interpretation.

The revised Stage 1 earned READY_FOR_DATA after replay. Its construction tasks are completed below; every geometry, aperture, containment, structure and numerical requirement retains its own executed check. The exact ray-derived runtime iris is the modeled aperture; its infinity F-number is calibration, not independent physical-diameter evidence. The conditional macro f-number comparison remains failed and is not covered by the defocus approval; no source physical iris law exists to reproduce. The data discloses that unavailable aperture behavior rather than assert 5.98 agreement or vary the iris.

## Pending integration (closed 2026-10-11)

Integration was pending when this was written (closed 2026-10-11: the files are in the repository; see the deployment validation section). At that time real LensVisualizer TypeScript, buildLens/validateLensData, production render/trim and exact project ray checks, runtime glass resolution, formatter/lint, corpus tests and build had not been run. These are distinct from the executed chat numerical diagnostic. No deployment or publication occurred.

## Primary references

- JPH04110811A, original supplied JPO six-page PDF; especially pp1–4 and Figures 5–6 on p6. [Public bibliographic record](https://patents.google.com/patent/JPH04110811A/en).
- Sigma, historical lens catalogue, PDF pp13 and16. [Archived manufacturer file](https://web.archive.org/web/20121030010747id_/http://www.sigmauser.co.uk/images/stories/museum/LensCatalogue1995.pdf).
- Official OHARA, HOYA, HIKARI, SCHOTT, CDGM and SUMITA originals are identified by URL, version, byte size and SHA-256 in evidence.sources.
- Current LensVisualizer controlling documents are pinned and hashed in manifest.references.

## Stage 2 construction and final-file verification

The revised Stage 1 ZIP passed seven-file clean replay before construction. Current main was refreshed to the same pinned commit. This Stage 2 payload preserves every source R, d, nd, vd and both printed focus states. All geometry/numerical computation consumes the actual strict-literal data.ts. Generic parser infrastructure was reused with provenance, not lens-specific source or optical conclusions; independent Stage 4 remains outstanding.

The source's native 403.0 mm object-to-first-surface reference becomes a finiteConjugates entry. The display endpoint is 0.54637 m, the source arithmetic object-to-fixed-image distance, while Sigma's catalogue gives rounded 0.55 m. The 40.080 mm terminal air gap never varies; neither image plane nor printed object distance was solved away. `sourceErrata.status = unresolved` retains the unresolved cause. Acceptance permits this retained defocus only.

Physical stop radius is inferred at 9.1943879049 mm, obtained by exact tracing of EFL/(2×5.71) to the source row9 stop, matching current runtimeLens convention. Paraxial calibration alone would give 9.048929 mm and is not the geometry aperture. The current runtime keeps the inferred iris with focus. At macro the exact sine-NA working F-number remains about 6.1666 versus printed5.98. This is a disclosed conditional fixed-iris approximation because the patent publishes no physical iris diameter/law. It is not a new corrected source value, and near-iris adjustment is prohibited.

Figure5's optical rims were measured on the original 300dpi source crop: first-to-last vertex span approximately826px represents103.29mm; component half-heights approximately158/143/110/89/110/126px. Estimated clear radii were conservatively rounded to20/18/14/11.3/14/16mm (11.3 superseded: surfaces 10–12 are 11.31 mm). Three cemented pairs share a common radius. Native-scale plotted shapes and positions were visually compared against Figure5 and the Sigma catalogue; proportional agreement is good within drawing-estimate precision. Small mechanical bevels are not modeled. A thin leading catalogue-drawing component lacks patent dimensions/material and is not invented.

The default gapSagFrac0.90 passes; no override was used. Twenty-one focus samples establish positive edge thickness, actual spherical rim slopes and mathematical domains, with257 radial samples on every shared band. Sphere-sag differences are monotone here, so radial endpoint checks also locate extrema. The minimum element thickness is0.597492mm and maximum rim slope22.905553°. Both source endpoints and intermediate gaps remain physically separated; maximum checked gap intrusion fraction is0.291902.

Exact three-dimensional vector/Snell rays use the current runtime-equivalent stop. Five focus samples (0,.25,.5,.75,1), four aperture labels (5.71,8,16,22), three field fractions (0,.6,1), five pupil radii and32 azimuths yield7740 rays. All center beams and edge chief rays clear;7572 rays transmit. First clipping occurs at air/glass component boundaries or component exits, never initially at a cemented interface. Uncut corner bundles are not falsely declared fully transmitted. Intermediate object distances are control-label inverse-distance estimates for diagnostics, not source-certified or solved focus states. Maximum transmitted sag residual is1.23e-13mm; aiming residual is1.38e-10mm. This is finite d-line sampling, not continuum proof or production tracing.

On every element the source nd/vd remain native. Named HOYA equivalents carry explicit C/F/g indices and dPgF from official formula1 coefficients, with the current engine baseline0.6438−0.001682×νd. These are spectral proxies, not historically identified melts. Raw six-vendor candidate residuals remain in the audit evidence; no APO performance is inferred.

Negative controls reject duplicate/expression/nonfinite/trailing literal syntax, a changed macro gap, an altered first radius and a deliberately undersized on-axis first rim. Source and implemented ABCD/sequential branches agree. The 2D and3D exact stop computations agree, and an oblique parallel slab preserves direction analytically.

Mandatory chat checks pass after manual source/figure review and clean replay. READY_FOR_ANALYSIS binds to the hashes in the Stage 2 checkpoint; real TypeScript, Prettier, LensVisualizer buildLens/validator, production render/trim, runtime glass resolution and batch-wide checks remain NOT_RUN at integration scope (closed 2026-10-11). No application or repository integration is claimed.

### Verification refinement before analysis acceptance

Data bytes are unchanged from the initial Stage 2 checkpoint. Final coverage was strengthened to bind the manual silhouette review to the exact data SHA-256, check each element's native nd/vd against its own source entry surface, recompute the source image-circle and distance-reference conversions, and compare the exact full field to the printed full-angle value. This changes evidence/verifier/results hashes, so a replacement Stage 2 checkpoint is run and preserved before the analysis gate. The original Stage 2 ZIP and receipt remain in the authoring archive. No prescription, glass, radius, iris, image-plane or focus-state change occurred.

## Stage 3 claim map and interpretive review

The actual Stage 2 package inventory and checkpoint hashes were checked before analysis. A fresh verifier run from the Stage 3 directory matched the Stage 2 full results byte-for-byte before analysis was written. The subsequent coverage refinement produced a replacement Stage 2 checkpoint with the same data bytes; the analysis gate binds to that refreshed verifier/evidence revision. The application data SHA-256 remains 9d1fd2047b090e221026373b7eba4752fcce11c342df2cdbdb565130c02f9e81 throughout Stage 3.

| Analysis section / quantitative claim | Executed fact/result or primary source | Final-model connection |
|---|---|---|
| Identity, embodiment, dates, inventor, applicant | evidence.job; PATENT p1/p4; F-FINAL-METADATA | Parsed patentNumber/authors/assignees/year/name |
| 9 elements / 6 air groups / 4 functional groups / 3 cemented pairs; no aspheres/plates | structure-topology; F-COUNT; original table/Figure5 | Final surface medium transitions, elemId, groups/doublets/asph; no rearPlates |
| 174.86 vs180,5.71 vs5.6,0.54637 vs0.55,1:2, image height21.6 and circle43.2 | raw system values; Sigma p13/p16; F-NATIVE-MARKETING; finite-distance-reference-conversion; element-coordinates-and-image-circle | Actual design/marketing/finiteConjugates/closeFocusM/imageCircle fields; source arithmetic executed |
| Group focal lengths and signs | implementedModel.states.infinity.functionalGroups | Independently recomputed from parsed final groups and spans |
| EFL174.864,BFD40.0805,track103.29,first-image143.37,TL/EFL0.8199 | F-IMPLEMENTED-STATES.infinity; F-TELEPHOTO-RATIO | Final-data ABCD plus separately coded reduced-angle recurrence |
| Each L1–L9 heading,nd,νd,type,glass and signed f | implementedModel.states.infinity.elements; element-powers; implemented-glass-proxies | Exact final element metadata; standalone thick-lens-in-air power, not in-situ allocation |
| D1+243.902,D2−54.365,D3+91.634 net powers | implementedModel.states.infinity.cementedGroups | Actual final cemented annotations and source medium junctions |
| Seven glass rows and catalog coordinate residuals | sourceModel.glassAudit; evidence.glassEvidence; implementedModel.glassProxies | Selected equivalent labels and direct C/F/g/dPgF fields recomputed from official HOYA coefficients |
| C/d/F/g wavelengths and normal-line conversion | glass_audit() and implemented-glass-proxies functions | Fixed coefficient formula and current dispersion.ts normalLinePgF; native nd/vd unchanged |
| G2+11.18,G3−8.25,fixedG1/G4/STO, all four gap pairs | F-MOTION; sourceModel.focusMotionMm; implemented-source-preservation | Parsed var endpoints; source-to-model values checked exactly |
| Macro403.0,fixed40.080,best40.368342,residual+0.288342,magnification−0.499275 | F-IMPLEMENTED-STATES.macro; raw failed macro-image-fixed-plane comparison; accepted-deviation-boundaries | Unchanged data finiteConjugates and terminal d; no refocus. BF is explicitly infinity summary, macro reuse follows fixed rear/image mechanism |
| Interval40.139293…40.598453 vs40.075…40.085 | sourceModel.roundingEnclosure | Same raw source values verified against final data; Decimal60 outward intervals,512 subdivisions |
| Macro configuration EFL93.490 | F-IMPLEMENTED-STATES.macro.eflMm | Collimated Gaussian configuration metric, explicitly not finite-object image distance |
| Six inequalities and coarse summary failures | implementedModel.patentConditions; sourceModel.conditions; comparisons summary-C1…C6 | Final group powers/magnifications calculated; raw4.8/1.5 discrepancies retained |
| Petzval+0.00057159mm^-1 | implementedModel.states.infinity.petzval | Each actual refracting interface phi/(n*nPrime); no implied measured field curvature |
| Iris9.194388 vspara9.048929 | F-STOP-RUNTIME; sourceModel.apertureProbes; runtime-stop-calibration | Current exact nominal entrance-beam convention; explicit calibration, not independent stop evidence |
| Macroexact6.1666,tangent6.1463,para6.0558 vsprinted5.98 | F-IMPLEMENTED-STATES.macro.exactAperture and paraxialWorkingFnumber; raw source comparison | All modeled values use same exact-calibrated physical iris; older source probe6.153174 used a separate paraxial-calibrated iris and is never substituted |
| Default90%,edge0.597492,rim22.905553 | geometry-all-states; F-GEOMETRY | Actual final SDs with current runtime stop over21focus and257radial samples |
|7740tested,7572transmit,center/corner clear,no initial cemented clip | implementedModel.rayChecks | Exact3D final-data calculations; fivefocus,fourapertures,threefields,fivepupilradii,32azimuths |

Manual interpretive and citation review: completed. The prose distinguishes patent fact, selected production correlation, catalog-equivalent proxy and modeled inference. It does not attribute a particular aberration correction to glass or power sign alone, does not claim production APO performance, and does not claim source agreement for the retained failed macro comparisons. Element shapes were checked against the signed radii. All group and standalone powers are distinguished. The source's full-angle convention and first-surface object-distance definition remain explicit. All citations are conventional primary URLs and PDF/figure locators, not conversation-only tokens.

No data change was made during Stage 3. Evidence/verifier coverage refinements reopened and reran Stage 2 as documented above. All mandatory analysis structure, metadata, numeric/rounding, label, disclosure and citation checks must pass before the final READY_FOR_AUDIT handoff. Independent source-first Stage 4 has not been performed. Integration remains pending, with actual application typechecking/formatting/validation/render/runtime checks clearly NOT_RUN. (Both closed: Stage 4 follows below; integration closed 2026-10-11.)

# Stage 4: source-first independent audit and correction

## Scope, sequence and actual exposure

The preceding Stage 1–3 record is preserved historical author evidence. Its statements that independent review was outstanding, its 11.30 mm G3 geometry, and its 7,740-ray coverage do not describe the final Stage 4 revision. This section controls the current audit; final byte identities and earned disposition are in the manifest and replay receipt.

Pass A was performed from original rendered JPH04110811A Example 3 (PDF p4, printed p88; definitions p3; Figure 5 and the state plots p6), the original four-field card, primary manufacturer catalog pages 13/16, and freshly obtained supplier catalogs. The initial task disclosed job identity, source hashes, reference pin and that Stage 3 had finished. No candidate prescription arrays, author calculations, labels, audits or derived correlation tables were inspected before freeze. An incidental unrequested review search snippet was not used. The reviewer initially missed the faint minus on r12 at a 2,000-pixel full-page rendering; the parent's request to examine an original-resolution crop supplied no replacement value. Repeated 400-dpi examination of the full row margin and comparable minus signs established printed -40.2000 before freeze. This was a corrected reviewer reading, not a patent erratum. The wrong-positive branch is retained as a negative control.

The frozen source inputs, separate reduced-angle ABCD and physical-angle sequential methods, exact probes, source diagnostics, glass search and exposure record were frozen at 2026-10-11T00:05:04.823163Z. Baseline fingerprint: 2ff218f23be791ca527b1d875cd0b908cb5eaca0a7b29103bf499cbf3a58406c. Pass A ZIP: 2ca2ecd615225990ae9269756832c054886670c9ac9586961672b302dfce6e1d. The complete text baseline is embedded verbatim in evidence.independentPass.frozenTextFiles; unmodified originals and original baseline manifest are preserved in the separate evidence volume. No guarantee of cognitive blindness is asserted.

Only after that checkpoint was candidate archive cedd1e88473df78828b9b3161ca3ebbda9d4e1fdbf24065326a6dc19192fd2bf opened. Its nine-file membership, manifest hashes and original-source identities were verified before reconciliation. Candidate data SHA-256 was 9d1fd2047b090e221026373b7eba4752fcce11c342df2cdbdb565130c02f9e81. All candidate identities are retained in evidence.independentPass.candidate. Pass B uses the actual final TypeScript through a separately implemented restricted JSON-literal loader, fresh matrix/physical-angle methods and a fresh three-dimensional vector Snell tracer with central-difference Newton stop aiming. It does not call author numerical functions. The author path is retained and rerun in the same complete verifier.

## Reconciliation: raw source, frozen calculation, implementation and prose

Native d-line radii, thicknesses, spacings, indices and Abbe values remain unscaled and unmodified. The source's flat stop r9 = 0 maps to the project flat sentinel 1e15; the table's terminal spacing is replaced by the printed infinity BFD 40.08 as an explicitly inferred fixed image gap. The patent describes G4 fixed relative to the image; it does not separately print macro BFD 40.08. The near 403.0 mm object reference is the first surface, while marketed 0.55 m is the film plane.

Independent infinity EFL 174.864062303 mm and BFD 40.080505026 mm agree with printed 174.86/40.08. The physical vertex track is 103.29 mm; first vertex to implemented image is 143.370 mm. H1 is -151.253596499 mm from the first vertex and H2 -134.783557278 mm from the last. Functional-group focal lengths are +68.024184347, -54.364980123, +91.634494869 and -79.023237461 mm. All nine standalone thick-lens powers are recomputed separately from cemented/in-situ powers. The per-interface Petzval sum is +0.000571594738 mm^-1. Infinity telephoto ratio is approximately 0.819894 and BFD/EFL 0.229210; neither result implies a retrofocus construction. The macro configuration's collimated EFL 93.490135097 mm and BFD -6.308917818 mm are not its finite-object image distance.

At printed 403.0 mm, the source calculation gives image 40.368341804 mm and magnification -0.499274705. The +0.288341804 mm mismatch at the fixed printed 40.080 mm reference remains a raw FAIL. The user expressly accepted retaining that state; this supports a source-preserving limited model, not a numerical match or a waiver of geometry. The current finiteConjugates and unresolved sourceErrata representation allows the state to remain at its authored plane without refocus. The author interval calculation was inspected and re-executed: outward-rounded 60-digit arithmetic over 512 boxes gives 40.139293…40.598453 mm, excluding 40.075…40.085 mm. The cause is unresolved; no source number is repaired. (Closed 2026-10-11: the offset is the design's spherical aberration at 1:2; see the deployment validation section.)

The frozen baseline deliberately used the *computed* infinity image 40.080505026 mm to solve a finite conjugate object 404.161859304 mm. Its condition beta3 ratio 1.365436794 and conditional aperture values belong to that solved conjugate. The actual fixed printed 40.080 model solves 404.163911 mm; the implemented published state remains 403.0 mm and gives beta3 ratio 1.372544991. These are different reference problems. All six inequalities pass at the published state; the coarse beta2 = 4.8 and beta4 = 1.5 comparisons still fail normal printed-digit rounding. The baseline is not overwritten to match author answers.

The current runtime-equivalent stop is calibrated by tracing an on-axis entrance ray of height EFL/(2×5.71), giving iris radius 9.194387904869 mm. The stored 9.1943879049 mm differs by 3.1e-11 mm. This agreement is calibration, not independently published diameter evidence. No physical iris dimension or focus-dependent iris schedule exists in the source. At 403.0 mm, the same inferred iris gives exact sine-NA working F 6.166618540, tangent-cone F 6.1463147 and paraxial F 6.0558, not the printed 5.98. These failed conditional comparisons remain visible. The user accepted only defocus; this other mismatch is retained as an underdetermined reconstruction limit, not treated as separately accepted or repaired. No unproved iris law is invented.

The four printed variable gaps conserve 72.06 mm. G2 moves +11.18 mm and G3 -8.25 mm; G1, G4 and iris remain fixed. Linear interpolation is only a modeling control between two source endpoints, not a published cam law. The tiny leading component visible in the manufacturer's section has no supported patent prescription and is not invented as a plate. Production correlation, patent authority and measured product performance remain distinct. The catalog filename 1995 does not establish an edition or launch date. The primary source supports 9/6, 1:2, 52 mm filter and listed mounts, but not historical glass supplier or melt.

## Mandatory failure, minimal correction and reopened gates

The original candidate's equal G3 radii 11.30 mm passed its image-height-selected field of approximately 6.994831° at infinity but failed the directly printed 7° bundle. The upper full-aperture marginal ray has heights S10=11.135134878 mm, S11=11.300870318 mm and S12=11.459611780 mm. Its first rejected interface was cemented S11, exceeding the stored radius by0.000870318 mm. That was a real mandatory aperture failure and blocked the uncorrected candidate. Retained pre-correction code/results/data reproduce it; the final verifier also replays an 11.30 mm negative control.

The prose also names 22.905553° a rim angle rather than a rim slope; the number is unchanged.

Correction S4-D01 changes only inferred clear semidiameters of S10/S11/S12 from 11.30 to 11.31 mm. This is the smallest 0.01 mm authoring increment that contains the measured cemented-interface bundle, keeping the three cemented rims square. Printed prescription, wavelengths, fixed image plane, iris, object state and focus gaps are unchanged. An exit-edge S12 vignette remains; it is not hidden by moving the stop or shrinking the field. No gap-sag override is used: default 0.90 remains in force.

All inherited Stage 2/3 source, schema, powers, spectrum, analysis and geometry gates are reopened and rerun on the corrected file. Author geometry covers 21 focus states and 257 radial positions. Independent geometry uses 41 focus states and exact spherical center/rim extrema; for fixed spherical radii, the signed-sag difference has no nonzero stationary point unless the radii coincide, and linear gap minima are at endpoints. Conic domain, actual rim slope, edge thickness, adjacent shared-band gaps and combined across-stop gaps pass. No asphere, synthetic cement, omitted active lens, hidden plate, or layout-based geometry exemption is introduced.

The independent image-height grid has nine focus states, four apertures, eleven field fractions through 21.6 mm, five pupil rings and 24 azimuths, with a separate directly published7° infinity bundle: 38,800 rays,38,256 transmitted. Every required center and chief ray transmits; there is no first cemented-interior rejection or reversed travel before aperture rejection. First-hit outer-edge vignetting is explicitly tabulated. Uncut mathematical continuation after an already rejected ray may later reverse through overlapping extrapolated spheres; that continuation is diagnostic and never counted as physical transmission. Exact hit sag residuals remain below 1.4e-13 mm.

An additional angular sweep of 0…7° across the same nine focus states tested 38,412 rays, of which 37,743 transmit, with no sampled first cemented-interior rejection. It is retained separately in results.independentAngularFieldAudit. Infinity uses parallel incidence. At finite distance it means atan(abs(object height)/first-surface distance); it does not mean parallel input rays in a macro configuration. The source 14° is an infinity specification, and finite-angle samples outside the 43.2 mm image circle are labeled diagnostic rather than silently expanding supported format. All angles within the required field remain mandatory. Finite pupil/field ray sampling is not a continuum proof.

The native-scale corrected portable section was visually compared with original Figure5 and the primary catalog. Surface signs, element silhouettes, group movement, fixed iris and fixed image reference agree at the supported schematic level. This is not a LensVisualizer renderer result. The reviewer made and rechecked the correction, with both inherited author code and separate reviewer code; no third blind reviewer or application execution is claimed.

## Independent glasses and pre-delivery reference refresh

Seven native nd/vd coordinates were independently searched across OHARA 433, HOYA 435, SCHOTT 366, SUMITA 433, HIKARI 155 and CDGM 267 entries using newly retrieved authoritative whole-catalog material, before author names were seen. Top candidates and residuals, including incompatible second choices, raw catalog rows, formulas, page/line locators, wavelengths, URLs and hashes remain in the frozen evidence. Legacy OHARA FPL51 is not silently equated with current S-FPL51. The final HOYA-equivalent choices FCD1, NBFD10, FDS90-SG, NBFD11, E-FD4L, FC5 and LAC8 independently agree at the coordinate/proxy level. Explicit nC/nF/ng are recalculated from primary formula 1 coefficients, with maximum stored residual below 5e-11; dPgF is relative to the project's 0.6438-0.001682×native-vd normal line and agrees within 5e-9. Native patent nd/vd are retained. Equivalent selection does not identify original supplier/melt or establish APO performance.

The original frozen reference pin 79899f4d8c703bd3e4a2cd0b8bd4f04428700664 is retained. Pre-delivery main refresh d8b406ce112931ab0b2988b87acbd13b0b663c7e has complete untruncated tree88c28fd08095a773a51ee7bbdb304cf4153e7bc2 with 4,121 entries. All 14 manifest-pinned governing blobs are identical; geometry/schema/runtime conventions are unchanged. New HOYA M-FDS910(1.82115/24.06/PgF0.6237) and SCHOTT N-LAF35(1.7433/49.4/PgF0.5523) fall outside even the broad nd/vd compatibility window for every native coordinate. No selected spectrum or resolution statement changes; real runtime matching remains NOT_RUN. The output stem is absent from that tree. Refresh records and exact comparisons are in evidence.preDeliveryReferenceRefresh and the full evidence volume.

## Final quantitative claim map and manual interpretation

The historical Stage3 claim map remains valid for unchanged claims, except its coverage/radii row is superseded here:

| Current claim | Executed independent result | Binding input |
|---|---|---|
| Source transcription, stop/terminal mapping, every state | independentFinal.sourceMap, gapSourceMatch | Frozen nativeInput versus actual final TypeScript |
| EFL/BFD/principal planes/track/telephoto, element/group/cemented powers, pupils/Petzval | independentFinal.states; independentBaselineReplay | Final surfaces and element/group spans; separate matrix/physical-angle methods |
|403.0 mm near state,+0.288342 mm discrepancy and magnification | independentFinal.states[1]; raw comparisons | Source403.0, unchanged40.080 fixed gap, specific accepted-deviation scope |
| Six conditions, source coarse-summary failures | independentFinal.conditionsAtPrintedObjectDistance; comparisons | Source group conditions; printed-object ray rather than solved-baseline reference |
| Iris9.194388 and conditional F-numbers | independentFinal.runtimeEquivalentStopRadius/states | Actual nominalFno, source surfaces, current runtime calibration convention |
| Inferred11.31 mm G3 rims | independentCorrectionControl and independentFinal.geometry/rays | Corrected final data SHA; original11.30 negative control retained |
|38,800/38,256 image-grid rays; explicit angular audit | independentFinal.rays; independentAngularFieldAudit | Final aperture, geometry, finite reference and declared sampling |
| Nine chosen glass spectra and seven native coordinates | independentGlassReplay | Frozen independent authoritative coefficients versus final element values |
| Production/name/counts/format/mounts and interpretation | Primary patent/catalog locators and manual review | Native prescription versus separately identified marketed lens |

Manual interpretive and citation review: completed again in Stage4. The final prose uses third-person technical language and the required section order; all nine element shapes and signed standalone powers agree with source geometry. Net cemented powers are not assigned to individual elements. Described positive/negative functional roles do not claim unique aberration intent. Product marketing, primary patent values, proxy glass dispersion and modeled geometry remain separately labeled. No unsupported APO, launch-year, physical-iris or measured-performance claim is made. Citations identify original primary documents and exact pages; the Google Patents primary metadata index independently supports the Takehisa Koyama transliteration, while the actual optical evidence is the supplied original scan.

## Gate and integration

The final gate is earned only after the complete consolidated verifier runs against these actual files and a clean extracted replay matches the stored results. Raw failed source comparisons remain visible even when their supported discrepancy treatment passes. The canonical dossier contains nine files; frozen independent text and its code are embedded in evidence rather than supplied as an alternative editable model. Full original/review/author evidence is separately archived. Package hashes, exact gate, replay outcome and preservation receipts bind this audit to delivered bytes.

Real TypeScript, Prettier, buildLens, validateLensData, production render diagnostics, runtime glass resolution, lint, corpus tests and production build remain NOT_RUN at integration scope. The portable parser/style/geometry/ray checks are not substitutes. No repository integration, Git operation, application build, publication or merge was performed. Integration status was pending at that time (closed 2026-10-11; see the deployment validation section).

## 2026-10-11 — Semi-diameter pass against the patent figure

Scope: `sd` values only, following `agent_docs/patent-figure-sd-audit-procedure.md`. No `sd` value changed: every stored rim is within 3 % of the drawing, inside the ±8 % reading noise of a hand-drawn figure. No `R`, `d`, `nd`, glass, focus gap or `STO` value was touched. The only edit is the wording of the data-file header note on semi-diameters.

### Which values are current

The data file carries 20 / 20 mm (L1, surfaces 1–2), 18 / 18 / 18 mm (L2+L3, surfaces 3–5), 14 / 14 / 14 mm (L4+L5, surfaces 6–8), 11.31 / 11.31 / 11.31 mm (L6+L7, surfaces 10–12), 14 / 14 mm (L8, surfaces 13–14) and 16 / 16 mm (L9, surfaces 15–16), with the iris at 9.1943879049 mm from F/5.71. The "11.3 mm" G3 rims in the Stage 2 record above, and the "11.30 mm" candidate that the Stage 4 section describes, are the package's pre-correction values and are superseded: Stage 4 correction S4-D01 raised surfaces 10–12 to 11.31 mm, and this pass keeps 11.31 mm.

### Source and scale

- Figure: `patents/JPH04110811A.pdf`, a six-page image-only scan (each page a 1-bit 2912 × 3958 px raster at 352 × 353 ppi). The drawing caption on PDF page 5 (printed 89) assigns 第1図, 第3図 and 第5図 to the lens sections of Examples 1, 2 and 3, and 第2図, 第4図 and 第6図 to their aberration plots at infinity and 0.5×. Only 第5図 on PDF page 6 (printed 90) was measured, at the native 352 dpi. The optical axis is horizontal on the page.
- Vertex crossings, read in a band 9–27 px below the axis: S1 1697, S2/S3 1755 (merged), S4 1827.5, S5 1844.5, S6 1964, S7 1990.5, S8 2005.5, iris 2145, S10 2250.5, S11 2269, S12 2302, S13 2617, S14 2631.5, S15 2645 and S16 2666.5 px.
- Scale: S1→S16 is 969.5 px for the tabulated 103.29 mm, 0.10654 mm/px. Two-span check: S1→S12 gives 0.10651 mm/px (605 px for 64.44 mm) and S12→S16 gives 0.10658 mm/px (364.5 px for 38.85 mm).
- Drawn state: the four variable gaps measure 12.7 / 14.9 / 11.2 / 33.6 mm against the infinity values 12.48 / 14.50 / 11.63 / 33.45 mm (0.5× would be 23.66 / 3.32 / 3.38 / 41.7 mm), so the figure is the infinity section. Every vertex lies within 5 px (0.5 mm) of the place the prescription predicts at this scale.
- The axis row drifts from 1214.5 px at the front to 1210.5 px at the rear (about 0.26°), so each rim below is the mean of the upper and lower silhouette. The outline is about 3 px (0.3 mm) wide.
- The arrowheads marking the iris end 88.5 px above and 90.5 px below the axis, 9.4 and 9.6 mm, against the 9.194 mm iris derived from F/5.71. They are schematic marks and were not used.

### What the figure shows

| Element | Surfaces | Stored (mm) | Figure upper / lower (px) | Figure (mm) | Figure / stored | Decision |
|---|---|---:|---:|---:|---:|---|
| L1 | 1, 2 | 20 | 185 / 187 | 19.82 | 0.99 | retained |
| L2+L3 | 3, 4, 5 | 18 | 168 / 168.5 | 17.93 | 1.00 | retained |
| L4 | 6, 7 | 14 | 128 / 127.5 | 13.61 | 0.97 | retained |
| L5 | 8 | 14 | 129.5 / 131.7 | 13.91 | 0.99 | retained |
| L6+L7 | 10, 11, 12 | 11.31 | 106 / 104.5 | 11.21 | 0.99 | retained |
| L8 | 13, 14 | 14 | 132 / 131 | 14.01 | 1.00 | retained |
| L9 | 15, 16 | 16 | 152 / 144.7 | 15.80 | 0.99 | retained |

The repository's automatic figure screen on the same panel agrees: all nine elements are bracketed consistently by its envelope and edge readings, figure / stored runs from 0.955 to 1.012 with a median of 0.984, and the per-element shape mismatch is 0.97–1.03.

Drawn edge thicknesses also match the prescription at the stored rims: L1 about 1.9 mm drawn against 1.92 mm, L9 about 1.3 mm against 1.14 mm, and L4 runs out to a near knife edge at 13.6 mm where the model leaves 0.597 mm at 14 mm.

### Values retained and why

- **L4+L5 (surfaces 6–8), 14 mm.** The drawn 13.6–13.9 mm is 1–3 % smaller. The outer ray of the corner bundle at infinity reaches 13.97 mm on surface 6, so 14 mm passes the whole corner bundle through G2 and the figure cannot separate the two values.
- **L6+L7 (surfaces 10–12), 11.31 mm.** The drawn rim is 11.21 mm with a square cut and a small notch at the junction. 11.31 mm is the Stage 4 value that contains the 7° marginal ray at the cemented interface (11.30 mm); the difference from the drawing is 0.1 mm, one third of a line width.
- **Bevels on L5 and L8.** The figure chamfers the front corner of L5 from about 12.1 mm up to its flat rim, and the front corner of L8 from about 12.3 mm (114.6 px above, 115.4 px below the local axis) up to its 14.0 mm flat rim. Both elements stay square at the drawn outer rim. For L8 the outer rim, where the rear face ends, reads 14.01 mm; the renderer joins unequal face rims with one straight line, so 12.3 / 14.0 mm would slant the whole edge where the figure keeps about 2.8 mm of its 4.6 mm edge flat; the outer ray of the corner bundle at infinity reaches 12.61 mm on surface 13, so 12.3 mm would add a clip that the drawn outer rim does not show; and the bevel start is one hand-drawn corner, 12 % inside the rim. L5's front face is the cemented junction, on which L4 continues to its 13.6 mm tip.

### Clearance and model consequences

- Validator: no errors with the stored set at the default 0.90 gap fraction. Image-circle floor: 0 undersized. Traced field coverage: the corner chief ray reaches 21.60 mm of 21.60 mm at 7.0°, clear. The stated-beam check is within 3 % of F/5.71. Engine values are unchanged because no rim moved: EFL 174.864 mm, F/5.71, iris radius 9.194388 mm, half-field estimate 9.906°.
- Infinity, exact meridional trace at F/5.71 and Y = 21.6 mm (ω = 6.99°; the patent prints a 14.0° full field). On-axis marginal heights 15.31 / 15.08 (L1), 14.49 / 13.67 / 13.14 (L2+L3), 10.41 / 10.23 / 9.74 (L4+L5), 8.71 / 8.64 / 8.59 (L6+L7), 3.79 / 3.73 (L8) and 3.67 / 3.53 mm (L9). The chief ray is highest at surface 16, 10.45 mm. The unvignetted corner bundle would need 24.77 / 24.85, 21.32 / 21.64 / 19.93, 13.97 / 13.81 / 12.29, 11.13 / 11.30 / 11.46, 12.61 / 13.34 and 14.16 / 14.28 mm, so L1 cuts 32 % and 31 % of one side of the corner bundle, L2+L3 cut 27 / 26 / 15 %, surface 12 cuts 2 %, and G2 and G4 cut nothing.
- 0.5× (printed gaps, object 403.0 mm from S1, object height 43.03 mm reaching Y = 21.6 mm, iris fixed at 9.194 mm), exact finite-object meridional trace. On-axis marginal heights 16.35 / 16.22, 15.66 / 15.01 / 14.48, 9.83 / 9.65 / 9.25, 9.10 / 9.04 / 9.02, 3.51 / 3.45 and 3.39 / 3.27 mm. The chief ray is highest at surface 16, 10.28 mm. The corner bundle would need 23.85 / 23.83, 21.27 / 21.51 / 20.10, 10.83 / 10.51 / 9.65, 9.78 / 9.94 / 10.16, 12.22 / 12.93 and 13.74 / 13.87 mm: L1 cuts 25 / 24 %, L2+L3 cut 24 / 23 / 15 %, and nothing else clips.
- Eleven focus states from infinity to 0.5× (linear gap interpolation, object at the paraxial conjugate of the fixed image plane, 403.0 mm at the printed end): no on-axis clip and no chief-ray block at any state. Smallest on-axis margins are 3.65 mm on surface 1 and 2.34 mm on surface 3 (both at 0.5×), 3.59 mm on surface 6 (infinity) and 2.21 mm on surface 10 (0.5×). Corner vignetting stays in the fixed front group (L1 24–32 %, L2+L3 15–27 % of one side) plus at most 2 % at surface 12 near infinity.
- The collimated clearance probe is not the 0.5× state, and at infinity its first root for the lower rim ray is a spurious far-off-axis ray (42.5 mm on surface 1). The figures above use the nearest-root variant, which the finite-object trace reproduces to 0.01 mm at infinity.

### Neighbouring elements at both focus states

- The renderer applies no hidden trim at focus fractions 0, 0.25, 0.5, 0.75 and 1.
- At 0.5× the focusing groups close on the iris from both sides (d8 = 3.32 mm, d9 = 3.38 mm). The rear rim of L5 at 14 mm has a sag of 2.281 mm and stops 1.04 mm short of the iris plane; it would reach that plane only at 16.8 mm. The front rim of L6 lies 3.63 mm behind the iris plane. The air between surfaces 8 and 10 is 6.70 mm on the axis and 5.47 mm at 11.31 mm.
- The other gaps open outward: 5.29 mm between surfaces 2 and 3 at 18 mm against 0.26 mm on the axis, and 2.19 mm between surfaces 14 and 15 at 14 mm against 1.19 mm.
- The local page was compared with 第5図 at infinity and at closest focus. At infinity the proportions follow the drawing: L1 tallest, the cemented front pair one step lower, L4 ending in a near point against L5, the square G3 pair the smallest component, and L9 standing above L8. At closest focus G2 and G3 sit on either side of the iris without touching it or each other.

### Maker diagram

No maker image was supplied or viewed in this pass. The manufacturer correlation recorded above is the package author's reading of the Sigma catalogue: 9 elements in 6 groups, two front SLD elements, floating internal focus and infinity to 1:2. 第5図 agrees in count and grouping (L1; L2+L3; L4+L5; iris; L6+L7; L8; L9, with G2 and G3 as the two moving groups), and the two SLD positions correspond to L1 and L2, the two nd 1.497 / νd 81.6 elements. The patent has no aspherical surface. The thin leading component that record notes in the catalogue section has no patent counterpart and stays unmodeled. The patent figure of Example 3 governs the rims.

### Limits

- The figure is hand-drawn and gives one infinity state. Rims are good to about ±8 %; the 0.5× statements above come from the prescription and the traced rays, not from a drawing.
- The L5 and L8 bevels are not modeled, and the 1.04 mm between L5's rear rim and the iris plane at 0.5× follows from the printed d8 and the drawn rim height; it says nothing about the real barrel.
- No clear diameter, filter-thread or barrel dimension entered any value.

## 2026-10-11 — Deployment validation and wording pass

**Source re-read.** `patents/JPH04110811A.pdf` is an image-only scan, so PDF page 4 (printed 88) was rendered at 300 and 600 dpi and Example 3 was read from the images: 16 radii, 16 spacings, 9 nd, 9 νd, the stop row (row 9, r = 0.0, 絞り) and the four variable gaps at both states (infinity d5 / d8 / d9 / d12 = 12.48 / 14.50 / 11.63 / 33.45 mm; 0.5× = 23.66 / 3.32 / 3.38 / 41.7 mm; both sets sum to 72.06 mm). Mismatches against the data file: none. The patent has three examples: Example 1 (f 174.16, F5.68, 11 elements / 8 groups), Example 2 (f 174.54, F5.74, 10 / 7) and Example 3 (f 174.86, F5.71, 9 / 6). Example 3 is the only 9 / 6 design and no Example 1 or 2 value appears in the file. The patent works in millimetres and the file is unscaled. Front page: 特開平4-110811, filed 31 August 1990, published 13 April 1992, inventor 小山武久, applicant 株式会社シグマ; the file's patent fields match.

**First-order values, patent against model.** f 174.86 against 174.864 mm; F-number 5.71 against 5.71 (the iris is calibrated to it; the same iris gives 5.62 paraxially); back focus 40.08 against 40.0805 mm; full field 14.0° (the patent defines ω as the full angle) against a chief ray that reaches 21.6 mm at 6.99°; total length 143.37 mm, which the patent does not print. f1/f, |f2/f|, |f4/f| and β3∞/β3MOD compute to 0.389, 0.311, 0.452 and 1.3725 against the printed 0.39, 0.31, 0.45 and 1.37. β2 and β4 compute to 4.876 and 1.567 against the printed 4.8 and 1.5; Example 1's summary values round normally (0.426, 2.553, 0.445, 0.218, 1.764 and 2.69 against printed 0.43, 2.6, 0.45, 0.22, 1.76 and 2.7), so the two Example 3 values look truncated or misprinted. They stay recorded in `sourceErrata`.

**The 0.5× state.** With the printed gaps and the object 403.0 mm from surface 1, the paraxial image is 40.368 mm behind surface 16, 0.288 mm behind the fixed 40.08 mm plane, at magnification −0.4993; a paraxial focus on the plane would need 404.16 mm. This is not a transcription error, not rounding and not a source erratum. First-order last-digit rounding of every printed value moves the paraxial image by at most ±0.17 mm, and Example 1, printed to four decimals, shows the same offset (+0.18 mm at its printed 369.6 mm). Exact rays from the axial object point cross the axis at 40.29 mm (0.3 zone), 40.19 (0.5), 40.11 (0.65), 40.07 (0.8), 40.09 (0.9) and 40.16 mm (full aperture, iris 9.194 mm). The on-axis RMS spot radius is 3.2 µm at the 40.08 mm plane and 14.9 µm at the paraxial plane; it is smallest, 2.6 µm, 0.034 mm behind the 40.08 mm plane. 第6図 plots the same undercorrected spherical aberration of about −0.3 mm at 0.5×, and a small positive bulge at infinity, where the trace gives +0.13 mm. The printed state is therefore in real best focus on the fixed image plane; ISSUE-MACRO-CONJUGATE is closed, and the earlier "unresolved" and "retained defocus" wording was wrong. With the iris fixed at 9.194 mm the 0.5× effective F-number is 6.17 against the printed 5.98 (the computed ratio between the two states is 1.08, the printed ratio 1.047); that difference remains as a `sourceErrata` note.

**Checks on the file.** The repo surface validator reports no errors; the image-circle check finds nothing undersized; traced field coverage is 100 % (21.60 mm at 7.0°); the real-ray clearance probe shows no on-axis clip and no chief-ray block at either state; a 7° meridional fan at infinity passes 85 % of the on-axis width. Eight of the nine glass labels resolved in the repo catalogue; L6's "E-FD4L" did not, and was changed to "E-FD4 / E-FD4L equivalent (HOYA)" before this pass.

**Maker diagram.** No maker cross-section was viewed. The archived Sigma catalogue this record cites (section on p13, specifications on p16) could not be opened in this pass, and no other published section of the lens was found, so the two-SLD reading and the thin leading component in the sketch remain the package author's readings. Published specifications from two other pages (a phillipreeve.net review of the manual-focus Contax/Yashica version and a camerareviews.com listing) give 9 elements / 6 groups, 0.55 m minimum focus at 1:2, a 52 mm filter, f/22 minimum aperture, a 1990 introduction, internal focusing with two moving groups, and Nikon F, Sony A, Canon EF and Sigma SA versions. All agree with 第5図 (L1; L2+L3; L4+L5; iris; L6+L7; L8; L9) and with the file. The patent's stated application is an AF telephoto macro lens focusing from infinity to 0.5× at about F5.6 and a 14° field, with back focus kept for an SLR mirror; 40.08 mm is consistent with that.

**Fields changed in this pass.** Data file: `subtitle`; `specs`; `sourceErrata` (the macro-defocus entry is replaced by two notes, one on the printed β2 / β4 summary values and one on the 0.5× effective F-number); `focusDescription`; the header comment (0.5× focus statement, iris wording, the β2 / β4 note); the `role` of all nine elements; `apdNote` reworded on L1 and L2 and removed from L3–L9, with `apd: "inferred"` on L1 and L2 only. Analysis: the catalogue-section paragraph, the 0.5× focus paragraphs, the note on the printed β2 / β4 values, the aperture and geometry section (ray-count text removed), the L6 glass label and one added source. This log: stale pending lines closed in place and one message token deleted. No `R`, `d`, `nd`, `vd`, `sd`, `var` value, glass string, spectral index, mount, format, f-number field or `closeFocusM` changed. Engine values are identical before and after: EFL 174.864062 mm, F/5.71, iris radius 9.194388 mm, half-field estimate 9.9055°, back focus 40.0805 mm, and the same 0.5× keyframe.

Open:

- `finiteConjugates[0].source` still reads "approximately +0.288 mm paraxial defocus; no automatic refocus". It is true as a paraxial statement and is shown on the MTF tab; it was outside the fields this pass could edit. (Closed: the field now says the printed state is in best focus on the fixed image plane with the paraxial image about 0.288 mm behind it; see the second review below.)
- The Sigma catalogue section has not been compared independently with 第5図.
- Manual-focus mount versions are not listed in `lensMounts`.
- Type check, formatting, lint and the corpus tests were not run in this pass.

## 2026-10-11 — Second review: diagram, labels and movement

Independent second look at the lens as the local page draws it. Element names in this section are the current E1–E9; the sections above use the earlier L1–L9, and element Ln there is En now.

### What was compared

- The local page at infinity and at 0.5×, the focus-movement overlay at both ends of the slider, the two-station patent-positions view and the inspectors of all nine elements.
- `patents/JPH04110811A.pdf`: 第5図 on PDF page 6 (printed 90), the Example 3 table and its 0.5× gap rows on PDF page 4 (printed 88), the claims on PDF page 1 (printed 85), the summary and the discussion of the conditions on PDF pages 2–3 (printed 86–87) and the drawing description on PDF page 5 (printed 89). The scan has no text layer; all six pages were read from 160–220 dpi renders, with native 352 dpi crops of claim 1, the Example 3 table and 第5図.
- No maker image was supplied or viewed. The manufacturer record above (Sigma catalogue, read by the package author) gives 9 elements in 6 groups, two front SLD elements, floating internal focus and infinity to 1:2; nothing in this review contradicts it.

### Silhouette against 第5図

第5図 was measured again from the native raster without the first pass's readings. Vertex crossings on the page (px): surface 1 at 1695, 2/3 merged at 1753, 4 at 1826.5, 5 at 1842, 6 at 1964, 7 at 1990, 8 at 2004.5, iris 2145, 10 at 2250.5, 11 at 2268.5, 12 at 2302.5, 13 at 2617, 14 at 2631.5, 15 at 2644, 16 at 2666. Surface 1 to surface 16 is 971 px for 103.29 mm, 0.10637 mm/px; surface 1 to 12 gives 0.10607 and surface 12 to 16 gives 0.10688. Every vertex lies within 5 px (0.5 mm) of its tabulated place. The four variable gaps measure 13.0 / 14.9 / 11.2 / 33.5 mm, so the drawing is the infinity state (12.48 / 14.50 / 11.63 / 33.45 mm; 0.5× would be 23.66 / 3.32 / 3.38 / 41.7 mm). The axis row falls from 1214.4 px at the front group to 1210.3 px at the rear group, and each height below is the mean of the upper and lower rim, read at the centre of the 3–4 px outline and at its outer edge.

| Element | Surfaces | Stored (mm) | Upper / lower (px, stroke centre) | Figure, stroke centre – outer edge (mm) | Figure / stored | Decision |
|---|---|---:|---:|---:|---:|---|
| E1 | 1, 2 | 20 | 184.9 / 184.1 | 19.63 – 19.84 | 0.98 – 0.99 | kept |
| E2 + E3 | 3, 4, 5 | 18 | 167.7 / 166.1 | 17.75 – 17.92 | 0.99 – 1.00 | kept |
| E4 (tip) | 6, 7 | 14 | 127.0 / 126.0 | 13.46 – 13.56 | 0.96 – 0.97 | kept |
| E5 (flat rim) | 8 | 14 | 128.5 / 130.0 | 13.75 – 13.93 | 0.98 – 1.00 | kept |
| E6 | 10, 11 | 11.31 | 103.0 / 106.0 | 11.12 – 11.28 | 0.98 – 1.00 | kept |
| E7 | 12 | 11.31 | 103.2 / 104.0 | 11.02 – 11.17 | 0.97 – 0.99 | kept |
| E8 (flat rim) | 13, 14 | 14 | 127.8 / 131.7 | 13.80 – 13.99 | 0.99 – 1.00 | kept |
| E9 | 15, 16 | 16 | 147.3 / 145.7 | 15.58 – 15.80 | 0.97 – 0.99 | kept |

No semi-diameter was changed. The outer-edge readings agree with the first pass to 0.05 mm, every stored rim is within 4 % of the drawing, and the drawn order of heights (E1, then E2 + E3, E9, E8 level with E5, E4, and the E6 + E7 pair smallest) is the order on the page. The iris arrowheads end 88.5 px above and 90.5 px below the axis (9.4 and 9.6 mm) against the 9.194 mm iris; they are schematic and the iris was not touched.

Places where the page and the drawing visibly differ, each checked:

- **Front corners of E5 and E8.** The figure chamfers both. On E5 the chamfer leaves the cemented curve 110.5 px above and 112.5 px below the axis (11.8 and 12.0 mm) and meets the flat rim about 2 mm further back, leaving a V-shaped notch between it and the tip of E4, which runs on to 13.5 mm. On E8 it leaves surface 13 at 116.3 and 115.7 px (12.4 and 12.3 mm) and meets the flat rim 1.7 mm further back, with 2.7 mm of flat rim behind it. The page draws both elements square at the outer rim. The renderer joins the two rim points of an element with one straight line, so the only way to show a chamfer is to lower one face, and both trials were run. Surface 13 at 12.3 mm passes the validator but slants the whole 4.8 mm edge of E8 where the drawing keeps most of it flat, cuts 8 % of one side of the corner bundle at a surface that now cuts nothing, and lowers the 7° transmission from 83.9 % to 81.3 %. Surface 7 at 11.9 mm passes the validator but removes the drawn tip of E4 above 11.9 mm, turns the top of E5 into a 6 mm slope and cuts 18 % of one side of the corner bundle at surface 7. Neither was applied; square at the drawn outer rim is the closer picture, as the first pass concluded.
- **Small step at the E6 / E7 junction.** The top line dips 4 px (0.4 mm) where the cemented curve arrives; the bottom rims of E6 and E7 differ by 2 px. Both faces stay at 11.31 mm.
- **Drawn edge thicknesses.** E1 1.6–1.8 mm against 1.92 mm in the model, E9 1.2 against 1.14 mm, E3 5.1 against 4.76 mm, E8 4.4 against 4.80 mm and E7 1.7 against 1.37 mm are within 0.4 mm (4 px) of the model. E2 is drawn 1.1 mm thick at the rim against 1.70 mm, and E6 1.6 mm against 2.25 mm because the drawing puts surface 11 about 0.5 mm further back and draws it flatter than its 64.43 mm radius. These are freehand curvature differences that no rim value changes.

At 0.5× the page shows E4 + E5 and E6 + E7 on either side of the iris without touching it or each other, as the first pass recorded.

### Labels: what changed

| Field | Before | After | Evidence |
|---|---|---|---|
| Element `name`, all nine | L1 … L9 | E1 … E9 | Claims 1–4 (PDF page 1) and the summary (PDF page 2) write the four lens groups as L1 to L4: 第1レンズ群 L1, 第2レンズ群 L2, 第3レンズ群 L3, 第4レンズ群 L4. The model's L2 was an element of the patent's L1 and its L4 an element of the patent's L2. The patent gives no designation to any single element in the text or in 第5図, so the neutral sequential E-names are used. |
| Data-file header | no note on designations; "bevels … on L5 and L8" | designation note added; "on E5 and E8" | as above |
| Analysis | L1 … L9 in the architecture table, the nine element headings and paragraphs and the glass table | E1 … E9 throughout; one paragraph in Optical Architecture stating the patent's L1–L4 and 第1群–第4群 group notation and that E1–E9 are model names; one sentence in Focus Mechanism citing claim 1 and 第5図 for the directions | as above |

Kept as they were: `label` "Element 1" to "Element 9", and no `diagramLabel`, so the diagram prints the element numbers 1–9. Printing L1…L9 under the elements was considered and rejected, because L1–L4 are the patent's groups and the figure numbers no elements. The inspector heads now read "Element 1 E1" to "Element 9 E9".

### Labels and tags found correct

- **Group brackets.** G1 covers surfaces 1–5 (E1, E2 + E3), G2 6–8 (E4 + E5), G3 10–12 (E6 + E7) and G4 13–16 (E8, E9). These are the extents 第5図 brackets as 第1群, 第2群, 第3群 and 第4群, and the iris stands alone between G2 and G3. The bracket text stays G1–G4, the figure's ordinal group labels; the claims' own symbols for the same groups are L1–L4.
- **Cemented brackets.** D1 (surfaces 3–5), D2 (6–8) and D3 (10–12) are the three places where the table lists two consecutive glasses, and each is drawn as one cemented pair in 第5図.
- **Stop.** Row 9 of the table is the iris (r = 0.0, 絞り), 14.50 mm behind surface 8 and 11.63 mm ahead of surface 10 at infinity; the figure labels it 開口絞り between the second and third groups, and the page draws it there.
- **Element types against the signs of R.** E1 (+81.37 / −114.7), E2 (+46.72 / −87.92) and E7 (+64.43 / −40.2) are biconvex; E3 (−87.92 / +270.4), E5 (−39.26 / +44.1) and E8 (−35.97 / +210.03) are biconcave; E4 (−411.0 / −39.26) is a positive meniscus concave to the object; E6 (+258.5 / +64.43) is a negative meniscus convex to the object; E9 (+67.68 / +366.0) is a positive meniscus convex to the object. All nine `type` strings and focal-length signs agree, and every `role` states the right group and motion.
- **Aspheres.** The patent has none and the file marks none.
- **Special-glass tags.** The patent text names no glass and no anomalous or low-dispersion class anywhere; it gives only nd and νd. `apd: "inferred"` on E1 and E2 (1.49700 / 81.6) therefore stays inferred, resting on the glass coordinates and on the two front SLD elements of the manufacturer record. No other element has an extra-low-dispersion coordinate; E7 (1.48749 / 70.4) is an ordinary fluor crown and is correctly untagged.
- **Inspectors.** All nine were opened on the page; type, nd, νd, focal length, glass, cemented badge (D1 on E2 and E3, D2 on E4 and E5, D3 on E6 and E7), the "APD (INFERRED)" badge on E1 and E2 only, and the role text match the file.
- **Variable-gap labels.** D5, D8, D9 and D12 are the patent's d5, d8, d9 and d12, and the page lists 12.48 / 14.50 / 11.63 / 33.45 at infinity and 23.66 / 3.32 / 3.38 / 41.70 at 0.5×.
- **Prescription.** All 16 radii, 15 thicknesses and spacings, nine nd and νd pairs and the four 0.5× gaps were read again from the native render of PDF page 4 and match the file.

### Focus movement

| Gap | Infinity | 0.5× | Change | Meaning |
|---|---:|---:|---:|---|
| d5 (G1 to G2) | 12.48 | 23.66 | +11.18 | G2 moves 11.18 mm toward the image |
| d8 (G2 to iris) | 14.50 | 3.32 | −11.18 | the iris does not move |
| d9 (iris to G3) | 11.63 | 3.38 | −8.25 | G3 moves 8.25 mm toward the object |
| d12 (G3 to G4) | 33.45 | 41.7 | +8.25 | G4 does not move |

Both columns sum to 72.06 mm. Claim 1 states the same thing in words: the first and fourth groups are fixed relative to the image plane, the second moves toward the image and the third toward the object when focusing from infinity to a near object. 第5図 puts a bracket and an arrow under the second and third groups only, the two arrows leaning toward each other. In the file each of the four `var` entries lists infinity first and 0.5× second, in surface order 5, 8, STO, 12. The overlay shows G1 and G4 as single dots, G2 running from −112.8 to −101.6 mm from the image plane and G3 from −81.7 to −89.9 mm, with a maximum travel of 11.18 mm; the hollow start marker is at the infinity end in both rows. The slider reads ∞ at one end and 55 cm at the other (0.54637 m, object to image), 1.09 m at mid-travel, and the patent-positions view offers exactly the two printed states. Direction, amounts and order are all correct; nothing was reordered.

The numbers in `focusDescription` were recomputed with a separate spherical ray trace written for this review: focal length 174.864 mm and back focus 40.0805 mm at infinity; at the printed 0.5× state the paraxial image is 40.368 mm behind surface 16 at magnification −0.4993; rays through the 0.3, 0.5, 0.65, 0.8, 0.9 and 1.0 zones of the 9.194 mm iris cross the axis at 40.29, 40.19, 40.11, 40.07, 40.09 and 40.16 mm; the effective F-number there is 6.17.

### Model values before and after

No optical value changed. Before and after: focal length 174.864 mm, F/5.71, iris radius 9.194388 mm, engine half-field 9.9055°. The surface validator reports no errors, the image-circle check finds nothing undersized, the corner chief ray reaches 21.60 mm of 21.60 mm at 7.0°, and the real-ray clearance probe shows no on-axis clip and no chief-ray block. Wide-open geometric transmission at infinity is 100 / 99.5 / 99.5 / 99.5 / 94.8 / 89.6 / 83.9 % at 0 / 1.2 / 2.3 / 3.5 / 4.7 / 5.8 / 7.0°, the same before and after. The page was shot again after the edits at infinity, at 0.5×, with the overlay at both ends and with every inspector open; the four diagram and overlay images are identical byte for byte to those taken before, and the inspectors differ only in the element name.

### Limits

- The bracket text follows the figure (第1群–第4群 as G1–G4). Other files in the catalogue carry L-numbered brackets where L1, L2 … are the patent's group symbols; here the figure prints only the ordinal labels and the claims and summary alone use L1–L4, which the data-file header and the analysis record.
- The chamfers on E5 and E8 and the notch between E4 and E5 cannot be drawn by a single straight rim line and remain unmodeled.
- The analysis text is not displayed on the local page in its current configuration, so the reworded prose was checked in the file only.
- The manufacturer's section has still not been compared independently with 第5図, and manual-focus mount versions are still not in `lensMounts`; both were outside this review's fields.
