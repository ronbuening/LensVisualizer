# Carl Zeiss Jena PI-Flektogon 30mm f/2.8 — Printed 1975 Prescription (e-line reconstruction)

## Job and reference versions

The active Job_Card_Index.json and CURRENT_PROCESSING_AUTHORIZATION.txt control this narrow manufacturer-sheet exception. The original modified card is unchanged; its older pending-authorization sentence is superseded only for processing this 30 mm model. No 35 mm lens is included. No repository integration or publication is authorized. The pinned project revision is 5c25e4289c6e090eb44177e907d901dfe3cef76c. The manifest fingerprints the current controlling references. CHAT-1.0 governs stage gates; current project specifications govern the runtime fields. The supplied JPG replaces the otherwise mandatory patent PDF only under the explicit source exception.

## Extraction and conventions

The actual original JPG was inspected in full and the glass row enlarged. Printed radius magnitudes and spacings were re-entered. Signs come from the Symbild and lower-left optical section, not from the unsigned radius numbers. Seven source n_e values are used unchanged. Blue handwritten geometry is a separate, unmodeled revision state; no hand-edited value replaces the printed model. The sheet is dated 23 September 1975 and states Rechnung vom 4.8.1975.

The first physical surface vertex is z=0; propagation is to positive z. Radius centers toward the image are positive. The printed sum of composite axial thicknesses is 24.32 mm. Source rows freier Ø, 2h für Achsenbüschel, n_e, ν_e, f_e, and f_eGr are kept distinct. Optical clear diameters are not replaced with mechanical Linsen Ø values.

The source says gerechnet für C′, whereas the supplied material constants are n_e/ν_e. This intentionally limited reconstruction evaluates the printed geometry at n_e only. Source labels f_m and S′_m are retained literally without defining the subscript. Original source system quantities are not relabeled as measurements at e.

## Model transformations

- Unknown 0.01 mm cement layers in parts 003.00 and 005.00 are collapsed to direct glass interfaces, retaining the printed composite thicknesses of 0.80 and 5.40 mm. The notes split them as 0.79+0.01 and 5.39+0.01 mm; the glue constants and exact layer geometry are unavailable.
- Lage der EP=0 and Ø EP=10.60 are interpreted as a neutral front stop at z=0 of radius 5.30 mm. This is the explicitly approved interpretation, not a recovered patent stop position.
- The image plane is the calculated e-line paraxial focus. No fit is made to S′F′=26.82 or S′m=26.72.
- All surfaces are spherical. There are no omitted source plates, asphere conversions, scaling, zoom states, or internal focus reconstruction.
- The parent explicitly authorized the established closeFocusM=1e15 numerical infinity-only UI sentinel with empty var, NO_INTERNAL_RECONSTRUCTION, and a non-MFD disclosure. Current source-only corpus instances and runtime behavior were checked. This is not a manufacturer minimum focus distance.

## Glass review

Original supplied primary catalog bytes for OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA were parsed afresh. Relevant nearest-per-vendor rows and coefficient/cell provenance are consolidated in evidence.json. Supported AGF equations were first checked at their native d-line coordinate, then evaluated at the pinned project's e/C′/F′ lines. HIKARI supplies explicit e-line coordinates. Unsupported AGF formula 3 entries were excluded and counts recorded.

Modern coordinate proximity is not historic melt identity. No catalog glass is adopted. The ν_e row has overwritten digits in parts 003, 005, and 007; their apparent printed readings are tentative documentary records, never spectral-model inputs. All candidate elements will use historical Unmatched labels, indexReference:e, and omit vd and spectral fields so the runtime cannot invent an Abbe dispersion curve.

## Numerical and geometry results

The source model is recomputed using separately implemented sequential reduced-angle tracing and ABCD multiplication. Unit determinant, analytic thin-lens and free-space cases, and both small-ray exact sphere/Snell basis columns are tested. The implemented verifier has no hidden dependencies.

- EFL 30.015109346412 mm; e-line BFD 26.831280852257 mm from surface 12.
- Front focal point z=-11.763109955287 mm; paraxial image z=51.151280852257 mm.
- All seven standalone element f_e values and both cemented-group focal lengths reproduce printed values within half the 0.01 mm output unit.
- Surface-by-surface Petzval contributions sum to 0.005068249374 mm^-1. This alone does not predict off-axis field curvature.
- Paraxial entrance diameter 10.60 mm gives f/2.831614089284. Product designation remains f/2.8.
- Exit pupil diameter 27.047282587796 mm versus printed 27.42 mm: -0.372717412204 mm, -1.359290%. The discrepancy is unresolved.
- The exact axial-bundle diameter maximum residual is 0.028970601466 mm. It exceeds rounding-only matching at some rows and is not called an exact reproduction.
- At 27° half-field the calculated chief intercept is 14.764109206437 mm and rectilinear distortion is -3.461301777860%. This is a model result, not measured performance.
- A 5,000-point equal-area pupil sample yields 75.06% geometrical survival at 27°. First clipping is retained separately from subsequent unphysical ghost failure. This is not transmission or relative illumination.

Dense source-aperture sampling already finds some first clipping at cemented interfaces 4 and 7. Construction must inspect the actual current runtime default fan, iris, half-field, physical clipping and render geometry. Stage1 does not approve that construction gate and does not shrink a published aperture.

## Correction and discrepancy register

The BFD, front-focal and pupil comparisons are retained as FAIL observations against half of the printed 0.01 mm output unit; tolerances are not widened to call them reproduced. The limited-model disposition is supported by the explicit user-approved n_e/direct-contact reconstruction and original C′ label, not by an assertion that these assumptions quantitatively explain the exit-pupil residual. No source correction is proposed.

Source inspection preceded fresh calculation; the original modified card was read first, and contains contextual old results. This is author construction verification, not a fresh Stage4 baseline. Earlier independent review inside the research ZIP was not adopted as pipeline approval.

## Quantitative claim map

| Claim | Recomputed record |
|---|---|
| EFL, BFD, focal/principal planes, track | results.sourceModel; F-EFL_mm, F-BFD_mm, other stable F-* facts |
| Seven elements and five groups | rawPrescription boundaries, sourceModel elementPowers/groupCount |
| Element and group focal lengths | elementSourceComparisons, groupSourceComparisons |
| Surface powers and Petzval | sourceModel.petzval, petzvalSum_inv_mm |
| Entrance/exit pupil and f-number | sourceModel.pupils; comparisons |
| Axial-bundle diameters | axialBundleComparison, axialMaxResidual_mm |
| Field chief height and distortion | edgeChief |
| Geometric pupil survival / clipping | sourceApertureSampling |
| Source identity, dates, literal labels | original M1 JPG; evidence.rawPrescription/source records |

## Independent review

Stage4 has not been performed. A fresh source-first reviewer must freeze their own extraction and code before candidate exposure. This audit is the author's consolidated record only.

## Gate disposition

Stage1 is READY_FOR_DATA for the explicitly qualified reconstruction. Stop interpretation, unknown cement constants, source-line mismatch, spectral limitation, unresolved pupil residual, patent-equivalence uncertainty and separate handwritten revision travel with the model. Stage2 actual model/parser, geometry, default-ray containment, render diagnostics, and real runtime checks remain required.

## Pending integration

INTEGRATION_PENDING. No Git writes, candidate integration, metadata generation, full-corpus sweep, full build, external upload or publication was performed. Real TypeScript compilation, Prettier and full-corpus policy/build checks cannot be claimed from Python literal parsing or targeted Node execution.

## Stage2 construction checkpoint

The exact root-level data file uses the approved title, literal-only payload and current LensDataInput wrapper. Seven e-line element records carry historical Unmatched labels and omit vd and line indices. The actual compiled runtime reports only air/constant dispersion; all R/G/B/V values equal the original n_e values. Identical color-channel outputs are a limitation, not evidence of chromatic correction. Unsupported patent fields are omitted as permitted for non-patent reference sources. The source image circle is retained independently of unknown mount/format.

Actual buildLens/validateLensData passes. Native state render diagnostics report 0.0 mm hidden trim at focusT=0,0.5,1. Empty var preserves every surface vertex; conjugateK remains zero at all three states with the disclosed1e15 infinity-only UI sentinel. The portable verifier loads the actual final data file, rejects duplicate keys/arithmetic/unparsed tail, detects an intentional radius mutation, and recomputes its quantities.

The actual runtime half-field is28.474511570558°, and its default60% off-axis field is17.084706942335°. This runtime heuristic is not a replacement for the source's54° full-field statement. At the actual5.3 mm iris, all six default axial fractions and all five off-axis fractions [-0.75,-0.375,0,0.375,0.75] complete the physical surfaces without clipping. A201-point full meridional pupil diagnostic reveals actual first clipping at cemented surface4 for fractions−0.81,−0.80,−0.79,−0.78,−0.77. Their physical ray terminates there with medium1.73516 and reason semi-diameter. Ghost continuation is stored separately and is never counted as transmitted. All151 meridional samples within the default off-axis fan extent±0.75 are clear.

The failed outer-pupil observation is retained in runtime-results.denseMeridionalAtDefaultField with status FAIL. It is outside the prescribed normal off-axis pupil fan, not outside its field angle. The controlling parent clarification binds the mandatory gate to the actual current default-ray domain rather than an invented all-pupil/all-field requirement. This does not resolve or hide broader-pupil clipping: no source SD, stop, aperture or field was altered. Stage4 must independently review this precise scope. No general assertion that all rays pass is made.

Stage2 is READY_FOR_ANALYSIS for this bounded, disclosed model. The manifest's checkpoint binds the exact data/evidence/verifier/results hashes. Actual TypeScript compilation, Prettier and forbidden repository-wide policy/build checks remain NOT_RUN at integration.

## Stage3 analysis and unchanged-data verification

The Stage3 analysis was authored only after the complete Stage2 checkpoint passed and clean replay matched. Its data SHA256 remains47ce5d27ff870c2ad2e9fa40eb948009dd70f52a249339261376b34a779eb969. No prescription, pupil, aperture, focus, glass, title, or source input changed. Stage3 only adds the analysis and its manual-review record and extends the verifier with analysis/metadata checks. Inherited Stage2 numerical/runtime checks are rerun against the same data. The Stage3 manifest preserves the original checkpoint and explicitly binds the final revalidation to its current evidence/verifier/results.

The analysis uses source-native metadata labels (manufacturer/source date/calculation date) under the approved non-patent source exception. The metadata explicitly identifies DD301976A7 as unverified association only. Inventor, applicant, patent publication and embodiment fields are not fabricated. It starts with the exact approved display title and places the patent/production uncertainty and model restrictions prominently in the identification section.

Manual review checked source citations, third-person tone, seven element shapes and isolated powers, the difference between individual/group/in-situ power, restricted constant-index behavior, undefined S′m/f_m, and all mandatory limitations. No intent or aberration-correction claim is inferred solely from sign or glass class. The six-vendor catalog review remains evidence context, not a substitution recommendation.

### Stage3 quantitative-claim map

| Analysis location / claim | Executed fact/result or primary-source record | Governing revision |
|---|---|---|
| Identification: dates, printed state, unknown cement | M1 JPG; evidence.rawPrescription and D1–D6 | Unchanged original source SHA256 |
| Architecture: element/group count; group signs | sourceModel.elementPowers/cementedGroupPowers; parsed implementedModel | Final unchanged data |
| Architecture: EFL, BFD, vertex/image track, f-number, track ratios | F-EFL_mm, F-BFD_mm, F-vertexTrack_mm, F-imageZ_mm, implementedModel.pupils/TL_over_EFL/BFD_over_EFL | Final unchanged data |
| Every element: shape, n_e, glass label, signed f_e | Parsed data.elements and recomputed implementedModel.elementPowers; analysis-element-fields check | Final unchanged data |
| D1/D2 group EFL | implementedModel.cementedGroupPowers and groupSourceComparisons | Final unchanged data |
| Glass table ν_e readings | Original M1 glass row, tentative overwritten values explicitly marked; not used for model dispersion | Source only |
| Constant n_e across runtime channels | runtime-results.compiledSurfaceDispersion; runtime-monochromatic-index | Exact candidate runtime hash |
| Focus sentinel and0/0.5/1 invariance | runtime-results.states and focus-sentinel-invariance | Exact candidate runtime hash |
| Source-system discrepancies, pupil residual | comparisons; implementedModel.pupils | Final unchanged data versus preserved source |
| Axial-bundle residual, chief height/distortion,5000-point75.06% survival | axialBundleComparison/axialMaxResidual_mm, edgeChief, sourceApertureSampling (actual parsed data branch) | Final unchanged data |
| Petzval sum | implementedModel.petzval, petzvalSum_inv_mm | Final unchanged data |
| Runtime field/default fractions/iris/render trim | runtime-results.runtime and states | Exact pinned runtime |
| Outer-pupil first-clip failures and151 interior samples | runtime-results.denseMeridionalAtDefaultField; failed observation retained | Exact pinned runtime |

Stage3 disposition: READY_FOR_AUDIT for the stated bounded model. Stage4 has not been performed. INTEGRATION_PENDING.


## Stage4 independent source-first review

Pass A was frozen at 2026-10-03T18:40:53Z before opening this candidate. Its complete input,
code, result, provenance and exposure inventory fingerprint is
0d910ae153f376fcdb143fb4d8b06210349a3fdad6b9ed20e2abe6124b86c367.
Exact frozen UTF-8 payloads remain in evidence.independentPass. This is fresh source re-entry
and separately written computation, not numerical blindness: the required modified card and
latest authorization themselves contained prior numerical results. No prior ZIP, audit,
prescriptions.json, author script or prepared candidate was consulted before the freeze.

The original manufacturer JPG was independently read for signed geometry via Symbild,
all physical clear apertures, native n_e, component identities, source system/pupil values,
cement notes and printed/handwritten distinction. Fresh physical-angle ABCD multiplication,
a separate reduced-angle recurrence and analytic sphere/vector-Snell tracing reproduce the
candidate's e-line system, element and cemented-group powers. All twelve source radii,
intervals, indices and clear diameters match; the neutral front stop and derived image plane
match the explicitly disclosed interpretation. The original composite thicknesses remain.
The exact approved title and manufacturer-only provenance are retained. No patent identity,
mount, format, dispersion or production reconstruction is invented.

Fresh exit-pupil calculation gives 27.047282588 mm versus printed 27.42 mm. The −1.359290%
residual remains unresolved. A summed local half-last-digit sensitivity is about 0.121 mm
for pupil diameter and does not eliminate the residual. The individual source system
comparisons remain failed where they exceed ±0.005 mm printed-output rounding. One analysis
sentence was clarified to identify this output-rounding basis explicitly; its earlier
“exceed rounding-only agreement” wording could be read too broadly. Propagation of rounded
prescription inputs is a separate question. No number, tolerance or optical model changed.

Current native buildLens/validateLensData and state-native rendering were re-executed.
A separately written runtime probe uses the actual 5.3 mm calibrated iris, current defaults,
current half-field and both signs of the display field. All 48 default rays at focus states
0, 0.5 and 1 pass; maximum hidden trim is zero. An 802-ray ±field meridional diagnostic
at 0.005 pupil-fraction steps retains 20 first physical clips at cemented interface 4, all
outside ±0.75. All 602 samples inside that normal fan extent pass. Outer status remains
FAIL, with ghost continuation separately stored. The mandatory gate uses the documented
actual default-ray domain; it does not certify full-pupil or all-field containment. Neither
source apertures nor stop/field values are changed. Runtime dispersion is exclusively air/
constant source n_e in all channels; equal channels are not physical achromatism evidence.

A separate post-freeze 3D sphere/Snell implementation repeats the 5,000-point source-field
pupil sample: 3,753 rays survive, 75.06%. A 20,000-point sensitivity sample gives 74.975%.
These are geometric sample fractions, not transmission or an error-bound guarantee. First
clip tallies retain interface 4/7 clipping. This post-freeze extension is explicitly separate
from the frozen baseline and its full code is preserved; the packaged independent companion
re-executes it. The author's 42 modern catalog context rows were checked directly against
raw AGF records or HIKARI workbook cells/hashes. None is adopted as a historical glass.

Data SHA256 remains 47ce5d27ff870c2ad2e9fa40eb948009dd70f52a249339261376b34a779eb969.
Only the analysis comparison-basis sentence changed. The complete source/model, bounded
construction, revised prose and independent results are revalidated in the final portable
replay. The unchanged source JPG, original modified card and latest authorization are all
included under the narrow 30 mm manufacturer-source exception. No 35 mm scope is implied.

READY_FOR_BATCH is conditional on the final inventory/hash/clean-ZIP replay record and
means preintegration readiness for this qualified research model only. Integration, corpus
policy, actual TypeScript compilation and publication remain separately pending.


Post-freeze documentary annotation: a native-resolution reread corrected an unused mechanical
surface-2 thickness tolerance in the reviewer's frozen notes from ±0.001 to ±0.01 mm. The
frozen payload is preserved unchanged, with the correction separately recorded in evidence.
Overprinted mechanical tolerances at surfaces 3/4 are not treated as verified values. None
of these mechanical tolerances enters the optical source, candidate, ray trace or reported
half-last-digit sensitivity; no optical data/result correction follows.


## V2 conversion — 2026-10-18

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. The earlier full-catalog test attempt on a prior revision was resource-killed and is not a pass; no full-catalog pass is claimed here. This format conversion is not deployment or complete optical acceptance.

Retained package status: Qualified READY_FOR_BATCH historical monochromatic e-line/direct-contact research reconstruction. Printed 1975 manufacturer source; DD301976A7 Table 3 / Fig 2 equivalence unverified. Previously selected Oct 11 (Six prime perspectives) but not integrated.

## Deployment review — 2026-10-18

Inspected the unchanged manufacturer sheet extracted from Original_V1_Package.zip and its
public archival hosting context. All twelve signed radii, thicknesses, seven n_e values,
and twelve clear diameters agree with the selected printed state; handwritten alternatives
remain excluded. The section agrees on seven elements, two doublets, and the enlarged rear
components. No patent PDF is present in this package, and DD301976A7 equivalence remains
unverified. The source JPG is retained locally in patents/ as a manufacturer document.

Fresh checkout checks: surface validation and image-circle audit pass; aperture census is
within 3% of the modeled f/2.831614; exact chief coverage reaches the 14.75 mm image-circle
radius near 27°. Render diagnostics show zero hidden material trim. Computed EFL is
30.0151093464 mm. No numerical prescription or clear aperture was changed for integration.
The display title follows the repository capitalization convention while retaining its
printed-1975/e-line reconstruction scope.

Accepted only as the explicitly titled monochromatic research reconstruction after the
current user allowed clearly qualified research entries. The unknown cement constants,
C′ versus e-line distinction, unresolved exit-pupil residual, and full-pupil clipping remain
limitations. No production equivalence, broadband correction, patent inventor, assignee,
mount, or image-format identity is asserted. Metadata checks now honor the data specification's
non-patent-source contract rather than requiring invented patent fields.

Public source context: https://zeissikonveb.de/start/objektive/sonstige_objektive/zeiss-sonderobjektive.html

## Source-rim, metadata and glass audit — 2026-10-18 UTC

Reinspected the actual `patents/PI-Flektogon_30mm_datasheet.jpg`, including its printed
`freier Ø` row and small lower-left optical section. All twelve authored SDs equal the
printed clear diameter divided by two: 5.30, 5.05, 5.10, 4.90, 5.20, 5.70, 7.75, 8.65,
10.30, 10.85, 11.70, 11.90 mm. Retained every one; mechanical blank diameters and the
handwritten revision do not override this printed prescription. The stepped cemented
pairs match the source and have zero hidden render trim.

Added the printed 54° rectilinear full field / 27° tracing half-field. Catalog design EFL
now records the printed 30.02 mm; computed EFL remains 30.0151093464 mm. Shortened the
display title while retaining the 1975/e-line research qualification. Simplified focus
and doublet text to remove implementation details from the public controls. Mount and
format remain unassigned because a 29.5 mm image circle does not establish either.
No patent party or production identity was invented.

Seven native e-line indices remain deliberately monochromatic. Missing/overwritten
historical dispersion and the chosen source scope do not justify borrowing modern
curves by a shared name. No catalog row or reference index was changed. The earlier
cement, pupil, C′/e-line and outer-pupil qualifications remain.

Surface validation, image-circle check, exact corner-chief coverage and aperture census
pass. Current render diagnostics report zero hidden trim. Browser review confirms the
source silhouette, shortened research title and disabled focus control.

Final local verification for this audit: metadata generation, `assertCatalogConsistent`,
all eight glass-report suites (9 checks), typecheck, format check, lint, and all 5,125
tests across 301 files passed. Production build prerendered 1,687 routes. All six axial
and five off-axis default rays complete the physical prescription without clipping;
render diagnostics report zero hidden trim. Exact field coverage passes independently
of the retained heuristic/aperture limitations above. Changelog entries use 2026-10-18
UTC. Source PDFs/JPG and scratch renders are excluded from the commit.

## Second live-site review — 2026-10-18 UTC

Recompared the local site's normal/color section with the actual manufacturer sheet.
All twelve source clear apertures remain exact and the two stepped cemented pairs
remain faithful to the printed construction. L4's inspector identifies native ne,
historical SF10, and D2; no Abbe badge or APD tag was invented. The near-zero color
readout was misleading: the model applies its source index to every spectral channel.
The shared diagram now suppresses quantitative color metrics when any medium has no
dispersion data, and says “No dispersion data” instead. The inspector labels an absent
Abbe number “not supplied” and does not present fixed fallback values as spectral indices.
The source-only monochromatic model and the visible overlapping rays remain intact.

A fresh e-line catalog candidate scan using the clearly printed coordinates finds
BACD2/N-SK2 near L1 and SF10/J-SF10/S-TIH10 near L4. No compatible entry exists for
L2 or L6 at their printed ne/ve pairs; L3/L5/L7 retain overwritten/uncertain ve readings.
These isolated modern analogues do not establish a coherent seven-element historical
spectrum. No reference-line conversion, unverified historical coefficients or partial
broadband reconstruction was introduced to improve a coverage percentage.

This is a prime, with no zoom travel. The source provides an infinity state only.
The focus slider is disabled, and current layout is identical at normalized focus and
zoom values 0, 0.5 and 1. No unproved near-focus direction is drawn. All eleven default
rays traverse the physical prescription without clipping; exact corner coverage passes
and render diagnostics have zero hidden trim. No patent assignee was inferred from the
manufacturer sheet. No additional changelog entry was added.

Second-pass final local gates: typecheck, format check, lint, 5,131 tests across 301 files,
eight glass-report suites (9 checks), and production build (1,687 prerendered routes)
passed. Source limitations above remain qualified; no heuristic failure was relabeled
as a pass. Existing UTC changelog entries are unchanged. No patent or scratch file is staged.
