# Yashica Auto Yashinon-DS 20mm f/3.3 — technical dossier

## Job and reference versions
US3856386A, Example 1, exact stem YashicaAutoYashinonDS20mmf33.
Controlling project reference pin: 3d44a1be91db853725ac841b65a9e228f2c544ef.
All accessible reference bytes and workflow bytes are individually hashed in the manifest.
No existing lens data or prior conclusions were read before fresh Table I transcription.
This is author-side verification, not Stage 4 independence.

## Extraction and conventions
Original PDF pages 10–11, Table I; Fig. 1; columns 3–6 explanatory text.
PDF contains image pages, no extracted text. Pages were rendered and visually inspected; OCR was not the controlling source.
Radii, thicknesses, gaps, indices and Abbe values retain literal precision in evidence.
The selected example contains 11 glass elements, 9 air-separated groups and four patent functional groups.
Medium indices refer to the d-line. Light travels left to right; radius signs follow centres of curvature.
Table I gives f=99.8, bf=185.2, front pair f=-183.7, f/3.3 and 94.5° field.
No numerical semi-diameters, stop diameter, exact stop station, focus motion or aspheres are published.

## Model transformations
Uniform scale 20/99.8 is authorized as an explicit construction choice, not a revision of Table I.
The final image gap will use computed paraxial BFD, with rounded published bf retained separately.
Stop region is published between groups III and IV; exact midpoint placement and f-number calibration are inferences.
No plates, inactive planes or synthetic cement layers are added or removed.
NO_INTERNAL_RECONSTRUCTION: no finite-focus/internal-motion law will be invented.

## Glass review
OHARA current 2023 rows and archival BAM23 furnish coordinate analogues for all distinct coordinates.
SCHOTT alternatives, HOYA cross-reference, HIKARI/SUMITA portals and targeted CDGM search were checked to the recorded extent.
This is not an exhaustive six-vendor sweep. Residuals and missing catalog coverage remain explicit.
S- and L- OHARA prefixes are not interchangeable. Current S- equivalents do not prove historical supplier identity.
Candidate spectral values are retained in evidence but not assigned as measurements of the patent glasses.
Unmatched coordinate labels will avoid accidental spectral supplier claims in the model.

## Numerical and geometry results
Two distinct first-order implementations agree: sequential height/reduced-angle and ABCD matrix composition.
Native EFL 99.8161885304632 mm; BFD 185.24894899678756 mm; vertex track 302.82 mm.
Printed values are reproduced within declared source-precision-aware tolerances; actual residuals are retained.
Surface Petzval and normalized Table II comparison, all standalone powers, cemented powers, functional powers,
and all five applicable inequalities are computed by the executable verifier.
Stage 1 aperture geometry remains a Stage 2 task, not a claimed pass.

## Correction/discrepancy register
No proposed patent correction. Table I's f=99.8 is retained rather than replaced with f=100 from sibling examples.
No sibling example has been substituted. Source printed bf differs from calculation by its expected rounding.
The manufacturer brochure supports counts, aperture, view angle, mount and MFD; it does not name the patent.
DS/DS-M variant identity and launch date remain unconfirmed.

## Quantitative claim map
Stage 1 published values -> evidence.rawPrescription.systemValues -> patent Table I.
Calculated cardinal values -> results.sourceModel -> raw Table I plus executable code.
Element/cemented/functional powers -> results.sourceModel.*EFL_mm -> corresponding surface ranges.
Five inequalities -> results.sourceModel.conditions -> cols3–6, equation normalization retained.
Catalog residuals -> evidence.glassEvidence.entries -> cited vendor rows, recalculated in verifier.

## Gate disposition
Stage 1 source extraction and first-order checks passed. READY_FOR_DATA.
Stage 2 must earn geometry, exact ray, pupil, final-data loader, mutation, and source/model gates.

## Pending integration
buildLens, validateLensData, real TS typecheck, Prettier, runtime glass resolution, production-render diagnostics,
and whole-project integration remain NOT_RUN / INTEGRATION_PENDING. No full build or metadata generation performed.
(Closed 2026-10-13 for this lens: the engine builds it, the surface validator reports no errors, the render diagnostic
trims nothing and all eleven glass labels resolve to catalog dispersion curves; see the dated sections at the end.)

## Stage 2 construction and finite verification scope
The data file is the sole implemented-model input. The JSON-subset TypeScript loader rejects duplicate keys,
spread expressions and trailing code; a 1% radius mutation is detected against transformed source data.
The inferred stop sits at the midpoint of the III–IV air gap and is calibrated to the published aperture.
Exact 3D spherical intersection/vector Snell and nonlinear pupil aiming generated radial pupil rings at
0, 0.25, 0.5, 0.75 and 1, twelve azimuths each, at six fields through 47.25°.
Full sampled pupil clearance is earned through 30° semi-field. At 40° there are 41 transmitted,
5 clipped and 3 unavailable samples; at 47.25° there are 28 transmitted, 8 clipped and 13 unavailable.
The unavailable states are failed nonlinear stop aims, not a claim of physical vignetting or proof of missing solutions.
They remain visible in results and exclude any assertion of validated full-field coverage.
The complete centered construction nevertheless has exact on-axis/default-field clearance and valid spherical geometry;
outer-field performance is a disclosed model limitation, not a converted pass.
Rims derive from successful exact-ray envelope plus 10%, then geometric clearance caps. No layout override hides overlap.
All air gaps, including the complete gap containing STO, retain >10% clearance at their shared radial bands.
The real production render test remains unperformed; these analytic computations are not named after project functions.
Data fields carry no internal motion and no catalog-guessed spectral lines. Marketing MFD is explicitly unverified optically.

Stage 2 gate requires parsed source/model agreement, one STO, element powers and IDs, geometry, all declared clear-field
samples, aperture calibration, image focus, strict-loader mutation detection, and source checks.
No conclusion about full-field image quality, relative illumination, distortion, chromatic correction or production fit is made.

## Stage 3 analysis verification and claim map

Stage 2 entry manifest and all member hashes were checked before writing analysis, then the verifier was rerun.
The data bytes did not change during Stage 3; SHA256 aa4f9471846d4e0fdfc149e6e6b5efd25be4097cd18346bb0a076b711c0f011a.
Only the analysis claim map and manual-review record were added to evidence. Stage 2 source extraction, optical
transformations and finite-clearance scope remain unchanged. The original Stage 2 checkpoint is preserved separately.
No prose calls the unavailable outer-field aims successful or conflates source viewing angle with verified clearance.
Manual citation/interpretation review: all element roles correspond to Fig.1 / cols.3–6; the original brochure supports
production facts but does not assert patent identity. The no-reconstruction, inferred stop/SD and catalog limits are explicit.

| Analysis quantitative claim | Executed fact path | Rounded text |
|---|---|---|
| Model/element/condition | `facts.modelOptics.EFL_mm` | 20.003 |
| Model/element/condition | `facts.modelOptics.BFD_mm` | 37.124 |
| Model/element/condition | `facts.modelOptics.BFD_over_EFL` | 1.8559 |
| Model/element/condition | `facts.modelOptics.vertexTrack_mm` | 60.685 |
| Model/element/condition | `facts.modelOptics.totalTrackToFocus_mm` | 97.809 |
| Model/element/condition | `facts.modelOptics.H1_fromFirstVertex_mm` | 36.000 |
| Model/element/condition | `facts.modelOptics.H2_fromLastVertex_mm` | 17.121 |
| Model/element/condition | `facts.modelOptics.pupils.stopSD_mm` | 4.922 |
| Model/element/condition | `facts.modelOptics.pupils.entrancePupilSD_mm` | 3.031 |
| Model/element/condition | `facts.elements.0.nd` | 1.72000 |
| Model/element/condition | `facts.elements.0.vd` | 50.3 |
| Model/element/condition | `facts.elements.0.fl` | -77.43 |
| Model/element/condition | `facts.elements.1.nd` | 1.71700 |
| Model/element/condition | `facts.elements.1.vd` | 47.9 |
| Model/element/condition | `facts.elements.1.fl` | -75.26 |
| Model/element/condition | `facts.elements.2.nd` | 1.69680 |
| Model/element/condition | `facts.elements.2.vd` | 55.6 |
| Model/element/condition | `facts.elements.2.fl` | +49.48 |
| Model/element/condition | `facts.elements.3.nd` | 1.72000 |
| Model/element/condition | `facts.elements.3.vd` | 50.3 |
| Model/element/condition | `facts.elements.3.fl` | -31.64 |
| Model/element/condition | `facts.elements.4.nd` | 1.70154 |
| Model/element/condition | `facts.elements.4.vd` | 41.1 |
| Model/element/condition | `facts.elements.4.fl` | -15.38 |
| Model/element/condition | `facts.elements.5.nd` | 1.67270 |
| Model/element/condition | `facts.elements.5.vd` | 32.2 |
| Model/element/condition | `facts.elements.5.fl` | +16.56 |
| Model/element/condition | `facts.elements.6.nd` | 1.60717 |
| Model/element/condition | `facts.elements.6.vd` | 40.2 |
| Model/element/condition | `facts.elements.6.fl` | +20.80 |
| Model/element/condition | `facts.elements.7.nd` | 1.74000 |
| Model/element/condition | `facts.elements.7.vd` | 28.2 |
| Model/element/condition | `facts.elements.7.fl` | -9.52 |
| Model/element/condition | `facts.elements.8.nd` | 1.58144 |
| Model/element/condition | `facts.elements.8.vd` | 40.8 |
| Model/element/condition | `facts.elements.8.fl` | +24.67 |
| Model/element/condition | `facts.elements.9.nd` | 1.69100 |
| Model/element/condition | `facts.elements.9.vd` | 54.8 |
| Model/element/condition | `facts.elements.9.fl` | +34.70 |
| Model/element/condition | `facts.elements.10.nd` | 1.64000 |
| Model/element/condition | `facts.elements.10.vd` | 60.2 |
| Model/element/condition | `facts.elements.10.fl` | +39.89 |
| Model/element/condition | `facts.modelOptics.petzvalSum_per_mm` | 0.005672 |
| Model/element/condition | `facts.patentConditions.1` | 1.8403 |
| Model/element/condition | `facts.patentConditions.2` | -0.0018804 |
| Model/element/condition | `facts.patentConditions.3` | 0.04784 |
| Model/element/condition | `facts.patentConditions.4` | 0.53438 |
| Model/element/condition | `facts.patentConditions.5` | 0.19426 |

Additional source claims: metadata dates/names -> patent cover; 11/9 counts -> parsed elements/element boundaries;
20 mm/f3.3/94.5°/M42/0.3 m -> manufacturer excerpt and evidence.productCorrelation;
scale20/99.8 -> evidence.conventions plus source-model mapping; all glass coordinates/candidate table ->
evidence.glassEvidence with executed residual checks; pupil sampling field limits -> results.implementedModel.rays
and mandatory exact-rays clear-field check. No new optical performance metrics are inferred from that sampling.

Stage 3 gate: READY_FOR_AUDIT, subject to final clean archive replay. Fresh Stage 4 review has not been performed.

## Stage 4 independent source-first audit

### Exposure, source and method independence
Fresh reviewer context contained only the job selection, original-source paths, current shared-reference paths and the
instruction that author work was underway. No candidate, author evidence/results, prior lens audit or existing repository
lens results were opened before the baseline checkpoint. Rendered original PDF pages 2, 10 and 11 governed manual
re-entry; text/OCR was navigation support. Shared catalog definitions were discovery aids, not prior lens labels.
Independent scalar reduced-angle propagation and explicit 2x2 matrix multiplication were written and executed before
candidate exposure. Relevant primary OHARA rows were independently consulted; selective vendor coverage is disclosed.

The checkpoint fingerprint is a9971525d61c11a64386c4940b95519450a0fc9ddfd4ef326e42e01114afb9db.
The original five baseline files are preserved byte-exact as strings under evidence.independentPass.frozenFiles, with
canonical fingerprint verification. This hash establishes content identity, not psychological or cryptographic proof
of independence. Frozen code is physically embedded in verify.py as independent_frozen_compute; file output/print
statements alone are replaced by returning inputs/results. The original code bytes remain in evidence.

### Four-view reconciliation
The fresh Table I arrays exactly match the author raw evidence and the final transformed model, including all20 radii,
19 inter-surface spacings,11 glass index/Abbe pairs,cemented interfaces and signs. Frozen source EFL99.8161885304632mm,
BFD185.24894899678756mm and track302.82mm reproduce the rounded source summaries. Source R19=-3491mm is retained.
The baseline's optional scale0.2 illustration is unchanged. The author instead explicitly chose20/99.8, a valid disclosed
uniform scale; this is a transformation distinction, not a source transcription discrepancy. The reconciled model gives
EFL20.003244194481596mm,BFD37.124037875107724mm,track60.68537074148297mm.
Independent standalone-element, four functional-group and surface Petzval checks agree, as do midpoint pupil reference
planes and calibrated stop diameter. No stop-size independence is claimed: the diameter is solved from f/3.3.
No finite-focus mechanism, asphere, spectral line assignment or source radius is invented or altered.

### Corrections and downstream revalidation
C1: The old analysis said exact DS/DS-M production variant identity was unconfirmed. A freshly retrieved Yashica
TL-ELECTRO manufacturer brochure, https://www.pacificrimcamera.com/rl/04058/04058.pdf, PDFp3 lower-right table,
visually identifies Auto Yashinon-DS20mm f/3.3-f/22 with11/9 construction,94°30′ field,0.3m MFD,72mm filter and320g.
The wording now distinguishes verified DS product metadata from still-unconfirmed exact patent/production optical identity.
Release year and supplier remain unconfirmed. Source PDF SHA256:
8d28f50d735fe7d1d118a8364f9d11f460590d2887f593f21b0fa3c67dc9f6d2.
This is a prose/source correction only; the optical data bytes are unchanged.

C2: Removed the blank line between the glass-table delimiter and the first data row, restoring a contiguous Markdown
table. No glass identity, coordinate, or modeled spectral value changed. OHARA S-TIL25 in the candidate was rechecked
against2023 catalog PDFp38, printedp36. The frozen PBL25Y alternative remains preserved as a separate historical
coordinate comparison. All public model labels remain Unmatched, a defensible conservative treatment.

The Stage4 reviewer performed these corrections and revalidation; there is no claim of a second independent human
approval of the corrected prose. All affected source/prose/claim/hash checks rerun on final bytes.

### Geometry and independently repeated exact rays
A second exact tracer was developed after baseline freeze. It uses explicit forward vertex-cap intersection and scalar
Cartesian tangent-vector Snell refraction, unlike the author's NumPy normal-vector implementation. On common launches,
maximum intersection-height disagreement is below4e-13mm. Its own field-continuation aiming uses a fixed-step central
difference Jacobian. An initial solver trial with SciPy's relative Jacobian stalled at near-zero meridional coordinates
for six skew samples per nonzero field; this numerical aiming defect was fixed without changing lens data or lowering
clearance requirements. The initial diagnostic remains in work records; it was never treated as a geometry pass.

The final independent sample includes0,5,10,15,20,25degrees,the canonical135-format default0.6-field angle,30,40 and47.25degrees;
49 pupil points per field. All392 samples at the eight fields through30degrees pass. At40degrees the results remain
41PASS/5CLIPPED/3UNAVAILABLE; at47.25degrees28PASS/8CLIPPED/13UNAVAILABLE. These outer unavailable stop aims are not
claimed to prove absence of physical rays; no full-field clearance conclusion is earned. The author’s original outer
sample failures remain in implementedModel.rays and independent repeats remain in independentExactRays.
The mandatory central-clearance gate is fixed to the author’s declared30degrees and cannot pass vacuously by changing
evidence order or lowering the limit. Finite samples still do not prove the continuous field/pupil domain.

Independent analytic endpoint checks establish shared-band spherical edge/gap extrema: the difference of two spherical
sag functions has no nonzero interior stationary point for distinct radii. This supplements the author's201 radial samples.
Maximum stored rim slope55.23509degrees is below the current slope threshold; minimum glass edge thickness0.397783mm;
maximum shared-band gap intrusion0.88 satisfies the0.90 contract. Cross-stop gap is recombined against its optical
boundaries; no fictitious glass is introduced at STO. The real renderer's hidden-trim check remains NOT_RUN.

### Schema, interpretations and final claim map
Manual schema review checked current pinned data/analysis specifications, template,defaults,taxonomy and handoff:
exactly one STO; downstream cemented elemIds6/9;11 physical elements/9 air groups; no dummy plate/var/keyframe fiction;
M42 and135-full-frame canonical IDs;d-line conventions;no APO claims; all-spherical shapes and computed sign labels.
The existing analysis numeric claim map was rerun against actual final TypeScript values. Patent dates/names are checked
against original cover; elemental roles are bounded interpretations of patent columns3–6, not numerical aberration claims.
New DS wording maps to source yashicaDStlElectro. Shared computed values map additionally to independentBaseline.results
and stage4 independent-cardinal/element-power/functional-power/pupil-reference/Petzval checks. Optical data SHA256 remains
aa4f9471846d4e0fdfc149e6e6b5efd25be4097cd18346bb0a076b711c0f011a.

### Stage 4 gate and limits
READY_FOR_BATCH means this source/model/prose dossier's bounded portable chat audit passes, not full-field image quality,
production reconstruction or application acceptance. The retained outer-field failures are outside the already-disclosed
central-clearance claim; no applicable mandatory failure is recategorized to advance. Source raw values and independent
baseline are immutable. Clean ZIP membership/hash/original-byte checks and extracted verifier replay bind approval to the
final nine-file package. INTEGRATION_PENDING: actual buildLens,validateLensData,TypeScript,Prettier,runtime glass resolution,
production render trim and final integration remain NOT_RUN. Shared references are a document snapshot, not an executable
project engine; no Git write,metadata generation,full-corpus run,full build,integration or publication was attempted.

### Targeted runtime checks became available after the portable review
The preceding NOT_RUN statements are stage-history, superseded only for checks listed here. A real checkout at the
same pinned revision became accessible. Its src/optics, src/types and defaults working tree was verified clean.
A scratch-only Rolldown bundle invoked real withLensDefaults, validateLensData, buildLens, doLayout and
computeElementRenderDiagnostics. Validation returned no errors; maximum material trim is exactly 0 mm.
A targeted real TypeScript invocation also exited 0 against the actual LensDataInput, with only the scratch copy's
relative type import mapped to the unchanged checkout. No handwritten type stub was used.
Runtime observation, driver source, code hashes, dependency versions and exact original data hash are preserved under
evidence.targetedRuntime. Offline replay validates their data binding and repeats portable checks; it does not pretend
to execute absent repository code. This is limited project acceptance, not integration or full build acceptance.

C3: Real runtime iris calibration differs from the portable paraxial calibration. Runtime computes physical stop SD
4.9696239565 mm with exact marginal tracing; authored SD is 4.9219323278 mm. Neither is source-published. Runtime EFL
20.0032441945 mm, FOPEN 3.3, chief-ray-derived half-field 38.6586048179 degrees and default field 23.1951628907 degrees
are separate, recorded quantities. The clean analysis now explicitly distinguishes both aperture conventions.
An additional mandatory independent portable exact trace tests the runtime-calibrated iris at 0 degrees, its actual
default field, 30, 40 and 47.25 degrees. Its counts remain separate from author-iris results and any outer failures remain
visible. The data prescription is unchanged; this correction improves the runtime disclosure and its validation scope.

Final pending integration checks: full project/corpus acceptance, Prettier project formatting, runtime catalog policy
and broad spectral resolution, full build and publication. No such checks are inferred from the targeted successes.
(Closed 2026-10-13 for the lens-level items, as noted under "Pending integration" above; the repository-wide gate is
run at integration and is not logged here.)
Final analysis runtime numerics map to evidence.targetedRuntime.results and facts.runtime; they are checked for exact
rounding/presence by the quantitative claim map, in addition to manual physical-meaning review.
Runtime-iris repeat outcome: all 147 samples at 0/default/30 degrees pass. At 40 degrees the repeat retains
41 clear, 5 clipped and 3 unavailable samples; at 47.25 degrees it retains 28 clear, 8 clipped and 13 unavailable.
No broadening of the published-field clearance claim follows from the real engine's narrower inferred field bound.

## 2026-10-13 — Semi-diameter pass against the patent figure

The rim statistics, envelope-plus-10% rule and sampled-clearance counts in the stage records above describe the
ray-envelope rims this pass replaces; the numbers below describe the file as it now stands.

### Source and scale

- Figure: FIG. 1 of US 3,856,386 (Example 1, Table I), read on two copies of the same drawing in the local
  `patents/US3856386.pdf`: the front page (PDF page 1) and drawing sheet 1 (PDF page 2). `patents/US_3856386_A.pdf`
  holds the same 2320 × 3408 raster but embeds it at 281 × 291 ppi; the other file embeds it at an isotropic 300 ppi,
  so it was measured at native resolution.
- Front-page copy: first vertex at x = 606 px, last vertex at x = 1524 px, 918 px for the 60.685 mm scaled track,
  0.0661 mm/px. Sub-spans agree: surfaces 1–8 give 0.0658, 8–20 give 0.0663, 5–13 give 0.0666 mm/px. Every vertex
  lies within 13 px (0.86 mm) of its Table I position; the worst is the rear cemented interface, because the
  figure draws element 8 about 0.6 mm thinner on axis than the table. Sheet-1 copy: 686 px, 0.0885 mm/px.
- The drawing has no axis line. Heights are half the distance between the centres of an element's top and bottom rim
  lines, so they do not depend on an axis estimate. The vertical scale was checked against the horizontal one: rim
  corners predicted from Table I radii and the measured heights fall within 2–5 px of the drawn corners on surfaces
  2, 10, 12, 13, 17, 18 and 20.
- Reading quality: 1 px is 0.066 mm (front page) or 0.088 mm (sheet 1), lines are 4–6 px wide, and the two copies
  agree within 0.1 mm on every element, so a height is good to about 0.15 mm. The upper half of the drawing is free
  of leader lines over the front group; the rear group was read between leaders on both sides.

### Before and after

| Surface | Before (mm) | Figure, front page / sheet 1 (mm) | After (mm) | Evidence |
|---|---|---|---|---|
| 1 | 23.832 | 23.09 / 23.11 | 23.832 | kept; 3% above the drawing, inside reading noise |
| 2 | 17.085 | 17.71 / 17.69 | 17.085 | kept; 3.5% below; the drawn extent differs top to bottom (17.3 and 18.1) |
| 3 | 17.085 | 17.48 / 17.43 | 17.085 | kept; 2% below |
| 4 | 15.674 | 14.77–14.87 / 14.73 | 14.8 | drawn rear face of element 2 ends just below element 3's rim; corner chief ray 14.34 |
| 5 | 15.674 | 15.10 / 15.04 | 15.1 | square-cut rim of element 3 |
| 6 | 14.137 | 15.10 / 15.04 | 15.1 | square-cut rim; the old value tapered the rear by 1.5 mm |
| 7 | 11.264 | 10.41 / 10.39 | 10.4 | 8% above the drawing on both copies |
| 8 | 8.375 | 8.96 / 8.76; 8.42 from the drawn sag | 8.375 | kept; the three readings bracket it |
| 9 | 8.375 | 8.59 / 8.54 | 8.4 | square-cut cemented pair, one value on all three faces |
| 10 | 8.928 | 8.59 / 8.54 | 8.4 | the old junction stood 0.5 mm proud of both outer faces |
| 11 | 8.439 | 8.59 / 8.54 | 8.4 | as surface 9 |
| 12 | 8.285 | 6.25 / 6.19 | 6.3 | square-cut element 7; axial ray 5.25 |
| 13 | 7.252 | 6.25 / 6.19 | 6.3 | axial ray 5.35 |
| 14 | 5.776 | 4.92 at the chamfer, 5.25 from the drawn sag | 5.1 | chamfered front of element 8; axial ray 4.83 |
| 15 | 7.746 | 5.93 / 5.90 | 5.9 | flat top of the rear cemented pair; axial ray 5.12 |
| 16 | 7.361 | 5.93 / 5.90 | 5.9 | axial ray 5.33 |
| 17 | 7.361 | 6.64 / 6.63 | 6.6 | square-cut element 10; axial ray 5.42 |
| 18 | 8.903 | 6.64 / 6.63 | 6.6 | axial ray 5.78 |
| 19 | 10.921 | 8.39 / 8.36 | 8.4 | square-cut element 11; axial ray 5.78 |
| 20 | 11.206 | 8.39 / 8.36 | 8.4 | axial ray 5.79; corner chief ray 6.24 |

The stop is not drawn in the figure and its semi-diameter was not touched. Sixteen surfaces changed. The largest
changes are the rear group (surfaces 15–20, 10–26% smaller) and element 7 (13–24% smaller); the old values there were
unvignetted oblique-bundle heights, which the drawing does not show.

### Choices that need a reason

- Surfaces 4–6. The old file gave the rear of element 2 and the front of element 3 one height and the rear of
  element 3 a lower one. The figure draws element 3 square at 15.1 and the curved rear face of element 2 ending
  0.25–0.35 mm lower, at 14.8. Surface 4 is 5.5% from the drawing, inside the usual noise band, and moved only so
  that the step between the two elements keeps the drawn order.
- Surfaces 9–11. The drawn height is 8.6; 8.4 was used. The figure draws the rear rim of element 4 meeting the front
  corner of the cemented pair, and surface 8 stays at 8.375, so 8.4 keeps that meeting and sits within 0.2 mm of the
  reading. No `gapSagFrac` change is needed for the values chosen. For the record, raising surface 8 to its drawn 8.8
  together with a pair at 8.6 would put 4.22 mm of sag into the 4.493 mm gap and would need `gapSagFrac` 0.94.
- Surface 14. The figure chamfers the concave front of element 8. The chamfer starts at 4.92 by direct height and at
  5.25 by the drawn sag; 5.1 lies between them, above the 4.83 axial ray and the 4.970 engine iris.
- Surfaces 1, 2 and 3 already agree with the drawing within 2–3.5%, and surface 8 lies between its sag-derived
  reading and 4.4–6.5% below its two direct ones; all four keep the drawn order with their neighbours, so they were
  not repainted. Surface 2 was not raised toward its drawn 17.7 although that would widen the engine's
  field estimate; a rim is not widened to improve a number.

### Clearance results

- On axis at f/3.3 no rim is closer to the marginal ray than 0.27 mm (surface 14); the next smallest margins are
  0.57 mm at surface 16 and 0.78 mm at surface 15. The longitudinal spherical aberration of the prescription is
  0.084, −0.155, −0.194 and −0.135 mm at pupil fractions 1, 0.85, 0.7 and 0.5, so nothing suggests a misprinted
  radius.
- The chief ray reaches 21.035 mm at the patent's 47.25° and the 21.63 mm corner of the 135 format at 48.02°. At the
  corner it passes surface 2 at 16.92 (rim 17.085), surface 4 at 14.34 (rim 14.8), surface 7 at 9.42 (rim 10.4),
  surface 8 at 7.86 (rim 8.375) and surface 20 at 6.24 (rim 8.4). It is clear at every surface, before and after.
- The scratch clearance probe that iterates on surface sag cannot follow this lens's chief ray past 43.15°, because
  its intersection search fails on the nearly hemispherical surface 2; it reports no clipped axial ray and no blocked
  chief ray up to that angle. The corner was therefore traced twice, with a marching-bracket tracer and with a
  closed-form sphere-intersection tracer; the two agree to 0.001 mm in image height.
- Meridional stop-height span that passes every rim, as a fraction of the 4.970 mm iris, before and after: 100% and
  94% at 20°, 100% and 80% at 30°, 94% and 72% at 35°, 82% and 63% at 40°, 68% and 47% at 45°, 55% and 33% at
  47.25°, 50% and 27% at 48.02°. The upper side is cut by surfaces 15, 16 and 18, the lower side by surface 12 at
  intermediate fields, surface 8 near 40° and surface 2 near the corner. The four front-group changes (surfaces
  4–7) alter none of these fractions.
- Engine values are identical before and after: EFL 20.0032 mm, f/3.3, iris semi-diameter 4.9696 mm, chief-ray
  half-field estimate 38.66° (still set by surface 2). The traced corner coverage is 100% to 21.65 mm at 48.0°, the
  image-circle floor check lists nothing, the surface validator reports no errors, and the render diagnostic trims
  no surface by more than 0.02 mm.

### Rendered comparison and limits

- The local page was captured at infinity after the edit and laid over the front-page figure at a common scale. The
  square rims of elements 3, 5–6, 7, 10 and 11, the chamfered front of element 8 and the step order of every
  neighbouring pair match the drawing. The focus slider is not modeled for this lens, so the closest-focus capture is
  identical to the infinity one; there are no zoom stations.
- The renderer joins unequal front and rear rims with a straight chord. The flat-topped flanges the figure draws on
  elements 1, 2 and 4 therefore appear as slanted edges; that is a drawing convention, not a rim error.
- No manufacturer cross-section was supplied or viewed in this pass. The only maker evidence in this file is the
  TL-ELECTRO brochure table quoted above, which gives 11 elements in 9 groups; the patent figure shows the same
  count, with cemented pairs at elements 5–6 and 8–9. Neither source marks a special-glass or aspherical element.
- The vignetting fractions are meridional only and follow figure-derived rims; they are not measured production
  vignetting.

## 2026-10-13 — Glass labels, metadata and wording pass

### Glass labels

All eleven `glass` labels now name a catalog glass and resolve to its dispersion curve; none is a bare coordinate
label any more. Each label reads "<glass> (<vendor>; modern coordinate equivalent of the 1974 patent glass; supplier
unconfirmed)".

| Elements | Patent nd / νd | Label | Catalog nd / νd | Δnd | Δνd |
|---|---|---|---|---|---|
| 1, 4 | 1.72000 / 50.3 | K-LaK10 (SUMITA) | 1.72000 / 50.30 | 0 | 0.00 |
| 2 | 1.71700 / 47.9 | S-LAM3 (OHARA) | 1.717004 / 47.93 | 4e-6 | +0.03 |
| 3 | 1.69680 / 55.6 | K-LaK14 (SUMITA) | 1.69680 / 55.60 | 0 | 0.00 |
| 5 | 1.70154 / 41.1 | BASF7 (SUMITA) | 1.70154 / 41.10 | 0 | 0.00 |
| 6 | 1.67270 / 32.2 | SF5 (SCHOTT) | 1.67270 / 32.21 | 0 | +0.01 |
| 7 | 1.60717 / 40.2 | BASF3 (SUMITA) | 1.60717 / 40.20 | 0 | 0.00 |
| 8 | 1.74000 / 28.2 | FD3 (HOYA) | 1.739999 / 28.25 | −1e-6 | +0.05 |
| 9 | 1.58144 / 40.8 | S-TIL25 (OHARA) | 1.581439 / 40.75 | −1e-6 | −0.05 |
| 10 | 1.69100 / 54.8 | K-LaK9 (SUMITA) | 1.69100 / 54.80 | 0 | 0.00 |
| 11 | 1.64000 / 60.2 | LACL60 (HOYA) | 1.64000 / 60.20 | 0 | 0.00 |

- Basis: the patent's one-decimal Abbe numbers equal the legacy Japanese catalog values that SUMITA's all-glass
  catalog of 2025-11-07, which includes discontinued glasses, still lists. Every row is inside the repository catalog
  tolerance of 1e-4 in nd and 0.15 in νd; six of the ten distinct glasses match exactly and the largest residual is
  0.05 in νd.
- Two catalog rows, BASF3 and K-LaK10, were added to the repository catalog for this lens.
- The labels are modern coordinate equivalents that select a dispersion curve. They do not identify the 1974
  supplier. No element carries an anomalous-dispersion flag, a partial-dispersion value or authored line indices.
- The statements earlier in this log that the labels stay Unmatched and that no catalog spectral data is assigned
  (the glass review, the Stage 2 data-field note and correction C2) describe the state this pass replaces. The OHARA
  analogues found in that review are kept in the analysis as other equivalents.

### Fields changed

- Set by the integrator before this pass and left as found: `subtitle`, from "US 3,856,386 A — Example 1; production
  correlation unconfirmed" to "US 3,856,386 A, Example 1 — production correlation unconfirmed"; a five-line `specs`
  block; the eleven `glass` labels. `name` is unchanged. `patentAssignees` stays "Yashica Co., Ltd.", the corpus
  spelling; the front page prints "Kabushiki Kaisha Yashica", and the analysis shows both.
- Data file, this pass: the header comment was rewritten in plain terms with the same facts plus the glass-label rule;
  each of the eleven elements gained a `role` (none had one) naming its place in the patent's four functional groups;
  `focusDescription` keeps its leading keyword and now says in plain sentences that the patent has no focusing data
  and that 0.3 m is the marketed minimum focus distance. Element `label` values already read "Element N".
- Analysis: the per-element glass lines and the glass section now state the catalog equivalents, with a table of the
  glass used and the other equivalent; the architecture, focus and several element paragraphs were reworded in plain
  terms; the section headed "Targeted Runtime Verification" was removed and its two statements about the model (the
  4.970 mm iris against the paraxial 4.922 mm, and the 38.66° half-field estimate) moved into "Aperture Geometry and
  Model Limits"; two catalog sources were added.
- No radius, thickness, index, Abbe number, semi-diameter, stop value, glass string or layout field changed in this
  pass.

### Optics before and after

The engine values are identical before and after the edits: EFL 20.0032 mm, back focal distance 37.1240 mm, vertex
track 60.6854 mm, f/3.3, iris semi-diameter 4.9696 mm, half-field estimate 38.66°, and the same two focus keyframes.
In the patent's units the model gives a focal length of 99.816 against the printed 99.8 and a back focus of 185.249
against the printed 185.2. The surface validator reports no errors.

Open: none. The 1974 glass supplier and the identity of the production prescription remain unconfirmed; both are
stated in the data file and the analysis and are limits of the sources, not pending work.

## 2026-10-13 — Second review: diagram, labels and movement

### What was compared

- The local page at infinity, at the far end of the focus slider and with the movement overlay open, against FIG. 1,
  Table I, Table II and FIGS. 1B–1E of US 3,856,386. Both local scans were read: `patents/US3856386.pdf` (isotropic
  300 ppi) and `patents/US_3856386_A.pdf` (the same 2320 × 3408 raster embedded at 281 × 291 ppi).
- No manufacturer cross-section was supplied or viewed. The maker evidence is still the brochure table quoted above
  (11 elements in 9 groups); neither it nor the patent marks a special-glass or aspherical element.
- The rims were re-measured independently on both copies of FIG. 1, and every optical check below was made with a
  separately written closed-form sphere tracer, not with the first pass's tools.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` | absent; the diagram drew no group labels | I (−) surfaces 1–8, II (−) 9–11, III (+) 12–13, IV (+) 14–20 | FIG. 1 braces I–IV over lenses IA–ID, IIA–IIB, IIIA, IVA–IVD; cols. 3–4. Group focal lengths −24.34, −510.0, +20.80 and +74.88 mm |
| `doublets` | absent; the diagram drew no cemented-pair labels | D1 surfaces 9–11, D2 surfaces 14–16 | Table I gives no air space after t5 and t8 (it has no d5 or d8); FIG. 1 draws elements 5–6 and 8–9 in contact. The elements already carried `cemented` D1 and D2 |
| `role`, all eleven elements | functional-group wording only | the same wording led by the patent's lens name (IA … IVD); element 1 now names both sides of Requirement 1, element 11 its meniscus form | cols. 3–4 name the lenses; col. 4 lines 1–10 tie the first pair to distortion, coma and the back focus |
| Header comment | no note on numbering, Table II, the undrawn stop or the flanges | adds those four notes | this section |
| Analysis | no numbering or bracket note; said the Seidel analysis was not reproduced | numbering and bracket paragraph; Table II pupil note; Table II and FIGS. 1B–1D comparison; flange paragraph; whole-pupil clipping shares | this section |

No semi-diameter, radius, spacing, index, glass label, stop value or focus field changed.

### Rims: independent reading

Scale on the front-page copy: first vertex at x = 46 px and last at 962.5 px of the crop, 916.5 px for 60.685 mm,
0.0662 mm/px. On sheet 1: 686 px, 0.0885 mm/px. Heights are half the distance between the centres of the top and
bottom rim lines.

| Surfaces | Stored (mm) | Front page / sheet 1 (mm) | Verdict |
|---|---|---|---|
| 1 | 23.832 | 23.14 / 23.11 | kept, 3% above the drawing |
| 2 | 17.085 | curve end 17.5 top and 18.5 bottom / 17.4 and 18.4; 17.2–17.5 by the drawn sag | kept; see below |
| 3 | 17.085 | 17.51 / 17.43 | kept, 2% below |
| 4 | 14.8 | curve end 14.96 / 14.73 | agrees |
| 5, 6 | 15.1 | 15.11 / 15.04 | agrees |
| 7 | 10.4 | 10.43 / 10.37 | agrees |
| 8 | 8.375 | curve end 8.81 / 8.85 | kept, 5% below; see below |
| 9, 10, 11 | 8.4 | 8.61 / 8.58 | kept, 2% below |
| 12, 13 | 6.3 | 6.26 / 6.21 | agrees |
| 14 | 5.1 | chamfer starts at 5.07 | agrees |
| 15, 16 | 5.9 | 5.94 / 5.90 | agrees |
| 17, 18 | 6.6 | 6.65 / 6.63 | agrees |
| 19, 20 | 8.4 | 8.39 / 8.34 | agrees |

The rim-height readings are within 0.1 mm of the first pass's and the three curve ends (surfaces 2, 4 and 8) within
0.3 mm. The first pass has the rims right and nothing was changed.

The three flanges. FIG. 1 draws elements 1, 2 and 4 with a flat land and a cylinder beyond the end of the rear
face; the renderer joins the front and rear rim points with a straight chord.

- Element 1. A square rim would need surface 2 at the flange height of 23.1 mm, above its radius of 20.80 mm. The
  validator reports a rim slope of 90° at 23.1 and 84.4° at 20.7 against the 64.2° limit. No policy value admits it.
  Raising surface 2 only to its drawn curve end, with surface 3 at 17.5, puts 5.11 mm of sag into the 5.351 mm gap
  and would need `gapSagFrac` 0.96 (0.95 fails). It was not requested: by the drawn sag the curve end is 17.2–17.5,
  1–2% from the stored value, and the two spheres of Table I meet at 17.7.
- Element 2. Surface 4 at 17.085, equal to surface 3, passes the validator with no policy change. The corner chief
  ray is unaffected (margin 0.167 mm at surface 2) and the whole-pupil clipping shares are unchanged at every field
  angle. It was not applied: the figure ends the rear face at 14.7–15.0, level with the rim of element 3, and a
  trial render shows the squared rear face reaching 1.4 mm behind the front corner of element 3 and 2 mm above its
  rim, a lip the figure does not draw.
- Element 4. Surface 8 at 10.4, equal to surface 7, has a rim slope of 64.9° and passes only with
  `maxRimAngleDeg` 64.9 (64.8 fails); nothing else objects. It is not recommended: the squared face would reach
  2.4 mm behind the front corner of the cemented pair, which the figure draws meeting the rear rim of element 4, and
  it changes the clipping (whole pupil at 45° from 37.7% to 39.6%). Raising surface 8 only to its drawn 8.8 with the
  pair at 8.6 would need `gapSagFrac` 0.94, as the first pass recorded.

### Checked and found correct

- Numbering. FIG. 1 puts the numerals 1–11 under the elements and Table I heads the same numbers "Lens". The
  diagram prints 1–11 (no `diagramLabel` is set, so it prints the element id), the inspector shows "Element n" with
  the short name Ln, and the analysis uses L1–L11. The three agree with the figure. The patent text's own names
  (IA … IVD) are now in each role and in the analysis.
- Element types against the signs of R: 1, 2 and 4 are negative menisci convex to the object (both radii positive,
  rear shorter); 3, 6, 7 and 9 are biconvex; 5 and 8 are biconcave; 10 and 11 are positive menisci convex to the
  image (both radii negative, rear shorter). All eleven `type` strings agree. There are no aspheric surfaces, no
  `asph` entries and no `A` label suffixes.
- Tags. No element carries `apd`; Table I prints only n and ν, and the text names no glass and no anomalous
  dispersion. All eleven `glass` labels resolve.
- Table I digits. Every radius, thickness, spacing, index and Abbe number was re-read on both scans; the two scans
  agree on every digit and the file equals the print times 20/99.8.
- Table II. Third-order coefficients computed from Table I as printed match 98 of the 100 surface entries of Table II
  to the last printed digit, with the entrance pupil 123.0 normalized units behind r1. One entry (surface 19, coma)
  differs by one unit in the fifth decimal. The other (surface 16, coma) is printed −0.38712 against a computed
  −0.38742; the printed column sum 0.06336 agrees with the computed entry, so it is a misprint in Table II. The
  spherical and Petzval columns do not depend on the pupil, so no radius, spacing or index has a wrong sign or digit.
  A reversed sign on r6, r9 or r19 would each move a Petzval entry by 0.02 to 0.15.
- Aberration plots, patent units in brackets. Spherical aberration: model +0.084 mm at f/3.3 and −0.194 mm at f/4.7
  (+0.42 and −0.97); FIG. 1B reads +0.5 and −1.0. Astigmatism: the model's tangential curve crosses zero at 28.0° and
  the sagittal at 43.7°; FIG. 1C crosses at 27.6° and 43.9°. The model reaches −1.60 tangential at 44° and −0.78
  sagittal at 33°; the figure reads −2.7 and −1.07. Distortion: model −2.99% near 42° and −2.79% at 47.25°; FIG. 1D
  reads −3.4% and −3.1%. Signs and shapes agree throughout; the drawn astigmatism is 1.4 to 1.8 times larger.
- Stop. FIG. 1 does not draw it and Table I does not list it; col. 6 lines 48–53 say only that the diaphragm is taken
  to lie between groups III and IV. The file puts it at the middle of that 3.818 mm air space, 1.909 mm behind r13,
  between elements 7 and 8, and the header says how the position and the size were set. The engine opens the iris to
  4.970 mm, which clears r13 and r14 at that station.
- Focus and movement. The patent has no focusing spacings, the file has no `var` entries, the slider reads "Not
  modeled", the far end of the slider draws the same section as infinity, and the movement overlay reports four
  groups with no modeled movement. FIG. 1E plots astigmatism for object heights of 3760 and 5410 units, an object
  about 50 focal lengths away, without spacings. A trace with the whole lens moved 0.40 mm forward gives the same
  pattern as that figure (sagittal negative at 37°, both curves positive at the edge), so the figure is consistent
  with whole-lens focusing and adds no spacing data.
- Bibliographic data on the front page: Yoshisato Fujioka; Kabushiki Kaisha Yashica; filed 8 May 1973; granted
  24 December 1974. The file's fields agree.

### Clipping and engine values

- Whole-pupil sweep with the independent tracer (0.04 mm grid over the pupil defined by the 4.970 mm iris; share
  of the stop area that passes every rim): 100% at 10°, 95.8% at 20°, 80.7% at 30°, 70.4% at 35°, 57.8% at 40°,
  37.7% at 45°, 26.2% at 47.25° and 20.4% at 48.02°. The meridional shares are 94.1%, 80.3%, 71.8%, 61.4%, 42.3%,
  31.8% and 26.6% from 20° on. Surface 12 and the rear group cut the pupil at 20–30°, surface 8 joins from 35° and
  surface 7 at 40°, and surface 2 takes 34–39% from 45° outward.
- On axis the f/3.3 marginal ray clears every rim; the smallest margins are 0.27 mm at surface 14 and 0.57 mm at
  surface 16. The chief ray reaches 21.035 mm at 47.25° and 21.630 mm at 48.02°; at the corner its smallest margins
  are 0.167 mm at surface 2, 0.462 mm at surface 4 and 0.516 mm at surface 8.
- No rim changed, so the clipping is unchanged by construction; the engine's own vignetting curve is identical
  before and after the edits. Engine values are also identical: EFL 20.0032 mm, f/3.3, iris 4.9696 mm, half-field
  estimate 38.66°. The surface validator reports no errors, the image-circle check lists nothing, and the traced
  corner coverage is 100% to 21.65 mm at 48.0°.

### Open

- Stop station. Three indications disagree and none is a published position. Table II's pupil of 123.0 units
  corresponds to a paraxial stop plane 20.95 units behind r13, 1.90 units past the vertex of r14 and outside the
  19.05-unit air space. The magnitudes of FIG. 1C are matched best by a stop 1.25 mm behind r13 (tangential −2.71 at
  44°), but that moves the zero crossings to 21° and 45°. The drawn zero crossings are matched by the mid-gap
  station in the file. The station is left as it is; moving it would change `d` on two rows, which this review does
  not edit.
- The renderer cannot draw a stepped flange, so elements 1, 2 and 4 keep their slanted edges.
- The clipping shares follow figure-derived rims and are not measured production vignetting.
