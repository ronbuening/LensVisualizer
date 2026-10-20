# Lens Patent — Sony Vario-Tessar T* FE 24–70mm F4 ZA OSS — Stage 4 diagnostic audit

## Current disposition

**AUDITED_DIAGNOSTIC_ONLY. Ordinary readiness gate: null.** The user-authorized literal diagnostic model has been independently audited within the stated limits. It remains **not a verified production-lens model**. The six literal printed EFL/BF comparisons and the unresolved Stage1 source-discrepancy check remain FAIL. The explicit diagnostic exception does not make those comparisons pass, establish a patent correction, prove a production defect or earn READY_FOR_BATCH. Integration remains INTEGRATION_PENDING. _(Closed 2026-10-20: superseded by the deployment validation at the end of this file; the BF difference is explained there.)_

The exact original candidate archive SHA-256 is `3b80ab2fd612443c447e1f4868596c6ce30760bc3d4675084c930bb0b2a0d1c0`. All manifest member hashes were verified. Final data bytes remain unchanged at `ddeb0a0ac413f84d74b0b4c6f792ed7cb774acdd0a48ede7efeb787bbfbc2209`. Analysis, evidence, verifier, results, audit and manifest were consolidated for this diagnostic audit.

## Independent baseline and exposure

PASS A was source-only. Before candidate access, this reviewer directly read the original image-only PDF at high resolution and re-entered every Table7 plane, Table8 coefficient, Table9 state and Table10 condition. It inspected the definitions/equation, Fig.13 and attribution. The reviewer had no Sony authored numerical result, model, glass label or prior review content in context. A directory inventory exposed unrelated unopened artifact filenames only. After the freeze, the candidate and author evidence/code became available. This actual exposure is preserved, not replaced by an assertion of perfect blindness.

Frozen baseline fingerprint: `7824c7f34f671f58222f0c400789c9e5bbc07282fe4f5d88cf2d1409e2156290`.

The original baseline folder remains unchanged. All original baseline text bytes, the source transcription, primary-catalog excerpts, results and full fresh calculation path are retained inside evidence.independentPass. Original PDF/card bytes are the two canonical source members. The consolidated verifier reconstructs the original file hashes and fingerprint, reruns the frozen code, and compares stable results. The hash binds bytes; it cannot cryptographically prove reviewer independence.

Fresh baseline scalar reduced-angle tracing and independently multiplied ABCD matrices agreed. Pass B additionally uses a separately formulated theta-angle matrix, a fresh vector-Snell exact trace with independently solved stop launch points, and a new shared-band geometry implementation. The retained author verifier is identified as such; reusing it alone would not constitute independent audit. Shared project runtime execution is a third evidence stream, not a second independent source extraction.

## Source, model and numerical reconciliation

All 23 source planes, twelve native nd/νd pairs, nine asphere rows, five variable gaps at all three states, direct K convention and published image planes match the final parsed TypeScript. Surface23 is L12's plane refracting exit and is preserved. Cemented junctions correctly assign the downstream element. No scaling, synthetic cement, dummy-plane deletion, invented filter stack or finite-focus reconstruction was found.

Independent computed EFL: 24.712006381 / 46.988490287 / 67.858339220mm. Computed BFD from surface23: 22.065574663 / 35.911967258 / 45.746766169mm. Printed BF remains21.95/35.79/45.74mm; the mismatch is intentionally operational in the diagnostic model. Printed optical track111.21/124.84/140.08mm is not product mechanical length.

Group and standalone element powers, cemented-unit powers, cardinal planes, pupils, per-surface Petzval, motion reversal, gap conservation and conditions are independently recomputed. The Petzval sum is +0.001782350117mm⁻¹. The weak negative G5 gives β5w=1.019000700; G4 shape factor=1.446428571. The0.01mm discrepancy in G3/G5 bridge spacing is retained. A three-station cam interpolation is a modeled path, not a published continuous motion law.

The source-first baseline's paraxial iris radii differ from the candidate's exact-ray radii. The candidate explicitly uses exact on-axis trace calibration, which the independent exact calculation reproduces:5.611382511/7.158931518/8.251085818mm. This is dependent F/4.10 calibration, not evidence of published or measured physical diameters. Intermediate iris interpolation makes no constant-f-number claim.

The bounded source-rounding optimizer is retained as a diagnostic calculation only. A failed local fit is neither an infeasibility proof nor permission to change the source. No source radius, distance, index, Abbe number, image plane, asphere, modeled aperture or runtime glass annotation changed during this audit.

## Geometry, rays and real project scope

Seventeen sampled zoom states include all three source stations plus fourteen explicit intermediate samples. The fresh geometry path samples1201 heights on each shared band and brackets derivative sign changes to evaluate interior extrema. It checks material thickness, 3× SD ratio, actual rim slope, positive-conic98% domain margin and90%-of-gap intrusion, including the physical air gap spanning the stop.

Minimum shared-band element thickness:0.374243952mm. Minimum remaining90%-gap intrusion margin:0.214736352mm. Maximum actual rim angle:61.180566381°. All tested geometry checks pass. Finite sampling and bracketed extrema are stated methods, not proof for arbitrary untested models.

Independent exact3D tests cover1275 cases:17 zoom states; source-half-field fractions0/.6/1; pupil radii0/.5/.75/1;8 azimuths for nonzero radii. Results:1160 transmit through all23 planes,110 first clip at outer material boundaries,5 peripheral aims remain unavailable. All field<=.6/pupil<=.75 bundles and all full-source-field chief rays pass. No first clip is inside a cemented interface. Restricting the fresh sample to the author's nine states independently reproduces613/58/4 out of675.

Each available independently aimed launch was then sent through actual traceEngineRay2. Surface-hit radii agree within9.73e-10mm. Successful terminal rays were explicitly propagated to the retained printed image plane; image coordinates agree within1.20e-9mm. No prescription refocus was applied.

Actual buildLens/validateLensData, runtime iris/zoom/image coordinates, runtime glass resolution, production render diagnostics, focused real TypeScript compilation and Prettier checks pass. Hidden material trim is exactly0mm at all17 states; duplicate focus endpoints preserve identical optical geometry. Production SVG outlines at wide/middle/tele were rasterized with Inkscape and inspected: coherent visible surfaces and source image planes, with no hidden geometry failure masked by layout.

The142 transitive source files used by the targeted imports independently match Git blob identities at both controlling pin3d44a1be91db853725ac841b65a9e228f2c544ef and execution pin66b394809241620190908def6caf9a81d3f3a6f5. Full hashes are retained. The compiler used real LensDataInput through an in-memory virtual module; no repository file was created. No npm lifecycle hooks, Git writes, metadata generation, integration, full corpus, full build or publication ran.

## Glass, production metadata and interpretation

Before candidate access, five complete current manufacturer catalogs were freshly scanned: OHARA, HOYA, Schott, HIKARI and Sumita. Relevant raw rows and source hashes are retained. CDGM's official catalog download returned a missing-file response. Runtime H-FK61 remains a pinned spectral proxy rather than freshly confirmed primary material evidence. All runtime glass resolution results were reproduced; no proxy is attributed as the original supplier/melt.

The apparent L4/L7-L11 vd distinction is supported as a plausible historical catalog distinction, not silently harmonized: HOYA's2019 change notice records TAF1 49.62→49.63 and M-TAF1/MC-TAF1 49.47→49.46. OHARA L- and S-prefixes remain distinct. Source nd/νd do not establish APO performance or manufacturing method.

Sony's specifications and original2013-10-16 announcement were independently rechecked. Counts, marketed range/aperture, full-frame E mount, OSS,0.4m MFD,0.20× magnification and January2014 Asia-Pacific availability are supported. They remain separate from patent design values and do not confirm Example3 as a production prescription. No finite conjugate is inferred from the MFD.

Interpretive prose was reviewed manually: isolated powers are not in-situ contributions, term signs are not proof of aberration allocation, modeled diameters are not published, and sampled transmission is not unvignetted production coverage. The centered model does not implement stabilization movement or a focus actuator.

## Corrections and downstream recheck

1. **S4-RECEIPT-IMAGE:** The author real-engine receipt used “reached image” wording, but the sequential trace API ends at surface23 and unconditionally leaves reachedImagePlane=false. Corrected receipt/analysis distinguishes complete surface tracing from separately executed forward image-plane transfer. The new transfer agrees with fresh independent intersections. This is a receipt-semantic correction, not an engine failure or model mutation.
2. **S4-GLASS-COVERAGE:** Analysis's partial-primary-access statement was updated to the source-first reviewer's fresh five-catalog scan, preserving the unavailable CDGM download and proxy limits. No material label or optical data changed.
3. **S4-COVERAGE:** Review coverage expanded from9/675 to17/1275 states/rays, with exact old-sample reproduction and new peripheral limits disclosed. No finite sample is promoted to a continuum claim.

All dependent analysis checks and the final consolidated portable verifier are rerun. Corrections are validated by the fresh reviewer calculations and actual pinned runtime; there is no claim of a second independent person re-reviewing the reviewer's edits.

## Quantitative claim map for final revision

- Attribution/counts/source values → sealed independent source, final data, original PDF1/14/26/27/30/31.
- Architecture/group powers and cemented signs → independentBaseline.results.groups/cementedGroups; facts.groups/cementedUnits.
- Every element's nd/νd/class/fl → parsed final data.elements, sealed source.elements and independentBaseline.results.elementsStandalone.
- EFL/BFD/track/cardinal planes/pupils/Petzval → independentBaseline.results.states/petzval; independent theta-matrix candidateAudit.states.
- Motion reversal and0.01mm integral-motion discrepancy → independentBaseline.results.movement, raw Table9.
- Aspheric coefficients → final data.asph versus sealed Table8; modeled departures → independentBaseline.asphereDepartures and facts.asphereDepartures.
- Exact iris calibration → independentBaseline.candidateAudit.irisExactMm and data-bound actual runtime receipt; baseline paraxial iris explicitly separate.
- Conditions → independentBaseline.results.conditions, raw Table10; no source-gap resolution implied.
-1275case summary/representatives → independentBaseline.candidateAudit.rays/counts/requiredFailures; actual runtime receipt records independent launch comparison.
- Geometry minima/rim angle → independentBaseline.candidateAudit.states[].geometry and facts.independentDiagnosticSummary.
- Zero hidden trim/source-image retention → evidence.diagnosticProjectExecution.states, actual targeted execution bound to unchanged data hash.
- Product/catalog and historical glass statements → cited Sony/HOYA primary sources plus independentPass.glassSources/support; runtime proxy table → fresh actual resolver record.

## Final replay and pending integration

The final dossier has exactly nine canonical root files. Execute:

`OPENBLAS_NUM_THREADS=1 python SonyVarioTessarTFE2470mmF4ZAOSS.verify.py --package-dir <directory> --output <external-results.json>`

The verifier contains the complete author branch, unchanged frozen independent code and fresh reviewer candidate code. It reads actual final TypeScript through a tested closed literal grammar; a separate real Node/TypeScript load was checked during this audit. Python3.12, NumPy and SciPy are declared dependencies. Offline replay recomputes optics and checks the recorded real-project receipt; it does not masquerade as a fresh project/compiler/render execution.

For the explicitly authorized diagnostic scope, expected exit status is0 and disposition AUDITED_DIAGNOSTIC_ONLY_PRODUCTION_GATE_BLOCKED. The inherited source-discrepancy FAIL is marked nonmandatory only for this explicit diagnostic exception. Any other mandatory failure still returns nonzero. Raw source comparisons are never erased. Clean archive extraction/member/hash/original checks and external-output numerical replay are recorded in the final manifest and packaging receipt.

Full corpus, full build and application-browser smoke are NOT_RUN at integration scope. They are not authorized by this per-lens diagnostic audit. No ordinary readiness or verified-production claim is made.

---

# Retained historical authoring/extraction record

The following prior stages are retained for provenance. Their older “current”, pending-audit, exit-status and file-count statements describe their historical checkpoints and are superseded by the Stage4 diagnostic disposition above. Source failures remain unresolved throughout.

# Diagnostic-only authoring record — current disposition

The user explicitly approved a literal-source diagnostic model after the Stage 1
source-reproduction block. The original seven-file blocked checkpoint is preserved
unchanged. This dossier keeps that unresolved source observation and adds a usable,
clearly labeled **DIAGNOSTIC_ONLY** candidate. It is **not a verified production-lens
model**. No READY_FOR_DATA, READY_FOR_ANALYSIS, READY_FOR_AUDIT or READY_FOR_BATCH gate
is inferred from the diagnostic exception.

## Exception authorization

The proposal was: “Produce clearly labeled diagnostic models from the literal
tables, accepting that they won’t qualify as verified production-lens models.”
The user replied: “Lets move forward with 2”. The exact message references and scope
are retained in evidence.diagnosticAuthorization. This authorizes source-faithful
exploration; it does not correct the patent, prove a production defect or authorize
integration/publication.

## Diagnostic construction and actual validation

The final TypeScript payload retains all 23 Table 7 rows, every Table 8 asphere,
every Table 9 gap, all three zoom stations, native d-line coordinates and printed
image planes. No plate, mechanical part, artificial cement or finite-focus state
was added. The payload is literal-only and loads through the strict portable
lexer/parser. Nine malformed parser fixtures and seven source/geometry mutations
are rejected. Final TypeScript is checked with real TypeScript 5.9.3 against the
actual LensDataInput type, through an in-memory root-level file, without modifying
the repository. The actual Prettier check passes with the current configuration.

Source semi-diameters are absent. The modeled radii begin from aperture-ray
footprints and the qualitative Fig. 13 silhouette, then enforce physically valid
surfaces, edge thickness and material gaps. They do not identify production clear
apertures. Nine zoom states include all three published stations and six explicit
piecewise-linear interpolation samples. Each material boundary/gap is sampled at
401 radial positions; conic domain and actual rim slope are checked separately.
The smallest modeled element thickness is 0.374243952 mm and largest actual rim
angle is 61.180566381 degrees. No source-backed radius is changed.

The L8 entrance radius is 8.5 mm, with its cemented interface and L9 exit radius
9.6 mm. An earlier unapproved aperture trial admitted peripheral rays that first
clipped at the internal junction; the final outer aperture places those limits at
the material entrance. All required bundles still pass. This is a disclosed
aperture inference, not a patented diameter or a hidden render trim.

The physical iris schedule is calibrated from the source F/4.10 through an exact
on-axis entrance-pupil trace: 5.611382511, 7.158931518 and 8.251085818 mm radii.
This is dependent calibration, not independent measurement of the source stop.
The application uses the same schedule and reports F/4.10 at the three stations.
Intermediate iris radii are interpolated; intermediate f-number constancy is not
assumed.

Exact 3D conic/polynomial intersections and vector Snell refraction cover 675
cases: nine zoom states; field fractions 0, 0.6 and 1 of the source half-field;
pupil radii 0, 0.5, 0.75 and 1, with eight azimuths for nonzero radii. The required
coverage is field <=0.6 at pupil <=0.75 and the chief ray at each full source field.
All of those pass. There are 613 transmitted cases, 58 outer-boundary clips and
4 peripheral aiming failures. No sampled first clip occurs at a cemented internal
interface. This is finite sampled coverage, not a continuum or unvignetted-field
proof. The exact production ray engine independently reproduces these outcomes
using the recorded launches.

Actual buildLens()/validateLensData() passes. Actual production
computeElementRenderDiagnosticsForState2 reports 0 mm maximum hidden trim over
all nine states. Production computeElementShapesForState2 outlines at wide,
middle and tele were rasterized with Inkscape and visually inspected: coherent
silhouettes, no visible cross-gap overlap and distinct printed image-plane lines.
This is a targeted production shape/diagnostic test, not a full app-browser smoke
or corpus/build result.

The prepared runtime retains the source image plane: 111.21 / 124.84 / 140.08 mm
from the first vertex, with the original 21.95 / 35.79 / 45.74 mm final gaps. It
has not automatically substituted the computed paraxial focus. The discrepancy
therefore remains operationally present and is disclosed in the candidate and
analysis. NO_INTERNAL_RECONSTRUCTION is unchanged; focus columns repeat the same
geometry, while 0.4 m remains marketed MFD only.

Runtime glass resolution was executed for all coordinate-class labels. The
selected catalog curves are numerical proxies; they are not newly established
supplier/melt identities. No direct C/F/g indices, dPgF or APO assertions were
invented. Selected candidates and resolver residuals are retained in evidence.

## Reference impact check

A fresh main check at 20:19 UTC returned
66b394809241620190908def6caf9a81d3f3a6f5. The only changes from the previous pin were
ThemedMarkdown.tsx and its test, for article-to-lens referrer policy. All controlling
reference, optics, type, taxonomy and package bytes used here were unchanged.
The existing engine-byte verification thus remains applicable. No shared reference
or repository file was modified.

## Historical Stage 1 extraction and unresolved source comparison

The following retained record describes the original source-first extraction.
Its Stage 1 block remains valid for production readiness; only the explicitly
approved diagnostic scope above proceeds.

# Lens Patent — Sony Vario-Tessar T* FE 24–70mm F4 ZA OSS — Stage 1 Extraction

## Disposition

**Stage 1 is blocked. No readiness gate has been earned.**
The original Example 3 prescription is legible and reproducibly transcribed,
but its first-order focal and back-focus quantities do not reproduce all of the
printed system values at their stated precision. No source quantity has been
altered to force agreement. Stages 2 and 3 are not approved or packaged.

This is an authoring/extraction record. A fresh Stage 4 source-first audit has
not been performed and no independence claim is made.

## Job and reference versions

- Card patent: `US2015085165A1`; official publication: **US 2015/0085165 A1**.
- Selected embodiment: **Example 3**, the third embodiment only.
- Exact output stem: `SonyVarioTessarTFE2470mmF4ZAOSS`.
- Original PDF: `US_2015085165_A1.pdf`, SHA-256
  `d035ded5fc0b0f7235b295e7d179bc098bdd9842b5b4a5eb80ecb08b881285da`.
- Original job card SHA-256:
  `86a850aab1bb62ffb964df0f620ef41d2893d1db55d11d2e5e7f7f0cab0c0083`.
- Controlling repository: `ronbuening/LensVisualizer`, main freshly resolved
  on 2026-10-02 at approximately 19:15 UTC to
  `3d44a1be91db853725ac841b65a9e228f2c544ef`.
- The recursive tree and all 26 supplied controlling reference Git blob hashes
  matched. The local reference SHA-256 hashes also matched their manifest.
- Retained CHAT-1.0 protocol, dossier contract and Stage 1–3 prompts govern
  portable handoffs. Current project specifications take precedence on schema,
  rear plates and geometry; this example contains no rear plate.
- No Git writes, integration, publication, generated metadata, corpus tests,
  full build, repository edits, or npm lifecycle hooks were performed.

The actual targeted project code was read from the available checkout whose
HEAD was `8d169a816c403e4e2ff20678299df2ed77957efb`. Despite that different HEAD,
all 1,220 checked files (`src/**/*.ts`, package.json and package-lock.json) had
Git blob hashes identical to the current pinned tree. The targeted source
paraxial function is consequently byte-current; this is not a claim that an
entire checkout or application build was validated.

## Extraction and conventions

The supplied 36-page PDF is image-only: `pdftotext -layout` returned no source
text beyond page separators. Pages were rendered and inspected directly.
OCR was used as a locating aid; the rendered originals govern the values.

Source locations:

- PDF p1: title, applicant, inventor order, filing/publication/priority dates.
- PDF p14, drawing sheet 13: **Fig. 13**, selected optical section and movement.
- PDF p26, printed p6, ¶0133–0136: surface/index/Abbe/spacing conventions.
- PDF p27, printed p7, ¶0137–0139, Numerical Expression 1: asphere definition.
- PDF p30, printed p10, ¶0184–0199, **Table 7**: all 23 source surfaces.
- PDF p31, printed p11, **Tables 8–10**: all nine aspheres, three zoom states,
  published system quantities and conditional expressions.
- PDF pp15–17, Figs. 14–16: aberration plots inspected during discrepancy
  investigation. Their plotted zero/reference does not establish the cause
  of the source-table residual.

The 23 source rows include the aperture plane at row 10 and the last plane
surface at row 23. Blank medium entries at glass exits are air; blank entries
are preserved in raw transcription and are not interpreted as zero index.
`BF` is the physical source distance after row 23 to the selected image plane.
Infinity radii are preserved as null with an explicit convention, and are
represented numerically by zero curvature / a 1e15 mm flat sentinel.

The source uses the d line (¶0133: 587.6 nm; aberration discussion: 587.56 nm).
The axis runs object-left to image-right, with a positive radius having its
center on the image side. Equation 1 contains `1 + kappa`, so **K = kappa**;
there is no minus-one conversion. Terms are C4, C6, C8 and C10, in
mm^(1−order). No rescaling is proposed.

## Model transformations and focus scope

There are 12 physical elements, 10 air-separated components and five moving
functional groups with signs positive–negative–positive–negative–negative.
The two cemented units span rows 1–3 and 15–17. Nine aspheric surfaces occupy
five elements: L3, L6, L7, L10 and L11. Labels would preserve source numbers,
append A to aspheres, and rename row 10 STO.

No Table 7 surface is a sensor plate or an inactive dummy plane. Generic
patent prose permitting a cover/filter does not supply dimensions and is
not used to invent one. There is no gap combination, scale change, glass
index change or source-radius correction.

Focus status is **NO_INTERNAL_RECONSTRUCTION**. Paragraph 0189 identifies G4
(L11) as the axial focus group. Tables 7–9 contain only infinity-focus zoom
states and do not provide near-focus travel or finite conjugates. The
manufacturer's 0.4 m MFD is marketing metadata, not a focus-law constraint
sufficient to invent source states. Any later authorized limited model must
repeat infinity spacings rather than fabricate internal motion.

## First-order numerical results

Lengths below are in mm, d-line, infinity focus. BFD is from the last vertex;
track is first vertex to the **printed** image plane.

| State | Printed f | Computed EFL | EFL residual | Printed BF | Computed paraxial BFD | BFD residual | Printed-plane track |
|---|---:|---:|---:|---:|---:|---:|---:|
| Wide | 24.72 | 24.712006381 | −0.007993619 | 21.95 | 22.065574663 | +0.115574663 | 111.210 |
| Middle | 47.00 | 46.988490287 | −0.011509713 | 35.79 | 35.911967258 | +0.121967258 | 124.840 |
| Tele | 67.90 | 67.858339220 | −0.041660780 | 45.74 | 45.746766169 | +0.006766169 | 140.080 |

The verifier uses a reduced-angle sequential trace and a separately written
2×2 matrix product. Their residuals and unit determinants are checked.
An analytic zero-thickness biconvex n=1.5, R=±100 mm lens supplies a 100 mm
reference. Surface-by-surface Petzval contributions retain the correct
`phi/(n*nPrime)` factor. Principal planes, standalone element focal lengths,
cemented powers, functional group powers, track and physical zoom positions
are computed from the same preserved source rows.

The five functional group focal lengths are approximately +110.600,
−27.393, +23.821, −38.918 and −1232.066 mm. These are isolated group powers,
not a decomposition of their in-situ contributions. Table 10's G5 wide
magnification computes as 1.019000700, and the G4 curvature shape factor as
1.446428571; both satisfy the stated inequalities. No unsupported telephoto
or retrofocus designation is asserted.

Zoom movement is evaluated relative to the fixed source image plane.
G2 reverses direction between the three published stations. The G3-to-G5
bridge differs by 0.01 mm at the middle station, consistent with the two
independently rounded gap entries; the raw values are retained. This is
separate from the unresolved BFD discrepancy.

The physical stop diameter and semi-diameters are not published. Independent
pupil/f-number and aperture containment verification are therefore not
claimed at Stage 1. A later construction stage would need a clearly inferred
F/4.10-calibrated aperture schedule and source/geometry-derived clear radii.

## Discrepancy register and investigation

1. **EFL/BFD reproduction remains unresolved and blocks construction.**
   The six comparisons use half a last printed hundredth (0.005 mm) as their
   literal publication-precision threshold. Failed comparisons remain FAIL;
   the gate does not erase them or silently relax their tolerance.
2. Reinspection of the original table found no transcription correction.
   The granted family member [US9042030B2](https://patents.google.com/patent/US9042030B2/en),
   Tables 7 and 9, repeats the same prescription and BF values. It was used
   only for this contradiction check, not as a substitute source example.
3. Finite-difference sensitivity envelopes of individual quantities can span
   the residuals when literal printed index precision is used. **That does
   not establish simultaneous consistency.** A stronger bounded diagnostic
   varies all finite R and fixed d within ±0.005 mm, each variable gap within
   ±0.005 mm, and indices within either ±0.000005 or half the literal printed
   last place. It attempts to fit the six printed EFL/BF targets together.
   Both attempts failed to establish a resolution: maximum remaining
   residuals were about 0.04423 and 0.03744 mm, respectively. This is a local
   optimization diagnostic, not a mathematical proof of infeasibility.
   Complete executable code and the rerun values are in the verifier/results.
4. Exact meridional source-ray exploration found aperture-dependent
   longitudinal focus, as expected for a real aspheric design. This cannot
   establish which reference the table intended; it is not accepted as a
   source correction or a reason to pass the gate.
5. The actual pinned LensVisualizer `runtimeLens.paraxialTrace` corroborated
   the Python EFL/BFD results to numerical precision. Its source-built input,
   command/script, Node version and observed values are retained in evidence.
   This targeted call did **not** run `buildLens`, `validateLensData`, a final
   TypeScript candidate, runtime glass resolution or render diagnostics.

A change to source radii, indices, source spacings, or nominal image-plane
positions would require an independently justified correction. A limited
literal-prescription model could instead be explicitly authorized as a
scope decision, preserving residual defocus and narrowing fidelity claims;
no such decision is assumed here.

## Glass review

Each of ten distinct d-line coordinates was compared against six pinned
project vendor tables (OHARA, HOYA, Schott, HIKARI, CDGM, Sumita). These code
rows supply candidates only. The evidence records exact candidate residuals
and distinguishes them from fresh primary checks.

Fresh primary coverage included OHARA S-TIH/S-NPH and S-FPL tables, L-LAM69
page/datasheet, HOYA news and 2019 catalog-change rows, and the HIKARI catalog
J-LASF016 row. Schott N-PSK53A and CDGM H-QK3L primary indexed extracts were
available, while their full PDF fetches failed. The Sumita 2024-07 indexed
catalog excerpt was available but the full PDF exceeded the retrieval limit.
The HOYA AGF endpoint was located through its current download page but its
binary content type was unsupported. No exhaustive vendor exclusion is
claimed.

Examples of supported candidates are OHARA S-TIH53 (1.84666/23.78), Schott
N-PSK53A (1.61800/63.39), HIKARI J-LASF016 (1.772500/49.62), and HOYA FDS18
(1.94595/17.98). HOYA's 2019 revision explicitly changes M-TAF1 νd from 49.47
to 49.46; this supports a historical coordinate candidate for L7/L11 without
identifying a supplier. L-LAM69's primary webpage and pinned catalog values
are not identical; the difference remains visible. OHARA S- and L-prefixes
are never interchanged.

No patent glass trade name or melt identity is supplied. Honest coordinate
classes are planned; no supplier is inferred from Sony's brand. Candidate
C/F/g indices are recorded as candidate data only and are not assigned as
measured element spectra. No APO or anomalous-dispersion performance claim
is made. This limited glass disposition is distinct from the BFD blocker.

## Product correlation

The manufacturer specifies 12 elements in 10 groups, five aspheric elements,
one ED element, full-frame Sony E mount, 24–70 mm F4 and Optical SteadyShot.
The 2013-10-16 launch announcement identifies January 2014 Asia-Pacific
availability. The patent priority date 2013-09-25, selected layout, counts,
low-dispersion L9 and L7 blur-correction mechanism are convergent evidence.
The patent does not name SEL2470Z. The correlation remains an inference;
24.72–67.90 mm F/4.10 are design quantities, distinct from 24–70 mm F4.

Sources:

- [Sony SEL2470Z specifications and features](https://www.sony.com.sg/electronics/camera-lenses/sel2470z/specifications).
- [Sony launch announcement, 2013-10-16](https://www.sony-asia.com/corporate/resources/en_AP/pdf/AP(16October13)-SonyDebutsFirstFull-FrameE-mountLenses.pdf), pp1,3,6.
- [Original selected patent publication](https://patents.google.com/patent/US20150085165A1/en), Tables 7–10, ¶0184–0208; supplied PDF governs exact transcription.
- [OHARA S-TIH/S-NPH](https://oharacorp.com/glass-type/s-tih-s-nph/), [S-FPL](https://oharacorp.com/glass-type/s-fpl/), [L-LAM69](https://oharacorp.com/glass/l-lam69/).
- [HOYA data downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html), [2019 changes](https://www.hoya-opticalworld.com/chinese/datadownload/data_up2019.html), [news](https://www.hoya-opticalworld.com/japanese/news/index.html).
- [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), PDF p145, J-LASF016.

## Claim-to-result map and manual review

- Numerical table above → `sourceModel[0..2]`, Tables 7/9.
- Cardinal planes and Petzval → `sourceModel[].H1FromFirstVertex`,
  `H2FromRearVertex`, `petzvalSurfaces`, `petzvalSum`.
- Element, functional-group and cemented-unit powers → `facts.elements`,
  `facts.groups`, `facts.cementedUnits`.
- G5 and G4 inequalities → `facts.conditions`, Table 10.
- Zoom reversal/bridge → `facts.zoomMovement`, Table 9/¶0188.
- Simultaneous precision diagnostic → `facts.roundingDiagnostic`.
- Patent attribution, asphere count, product and glass statements → cited
  original pages and specific evidence sections above.
- No Stage 3 analysis exists. Any later analysis must be authored only after
  a final data revision passes the construction gate.

Interpretive prose and citations were manually checked. No claim of
manufacturer-confirmed correlation, measured stop size, reconstructed focus,
known melt identity, exact production rendering or independent Stage 4
approval is implied.

## Reproduction, packaging and pending integration

Run:

`OPENBLAS_NUM_THREADS=1 python SonyVarioTessarTFE2470mmF4ZAOSS.verify.py --package-dir <directory> --output <external-results.json>`

Python 3.12, NumPy and SciPy are required for the bounded rounding diagnostic;
the optical traces, matrix code and strict literal parser are self-contained.
The exact runtime versions are recorded in results. Expected exit status is
**1**, because the substantive source-discrepancy check intentionally fails.
The archive contains seven canonical files, including both unchanged
originals. Clean extraction/hash/replay checks establish integrity and
reproducibility of this **blocked** dossier, not package approval or readiness.

Integration remains **INTEGRATION_PENDING** _(closed 2026-10-20: integrated as a visible lens)_. Final candidate type checking,
project validation, exact off-axis containment, production render trim,
runtime glass resolution, corpus checks and full build remain unperformed.


## Stage 3 diagnostic analysis and claim map

The complete eight-file Stage 2 diagnostic checkpoint was clean-extracted and
replayed before analysis authoring. Its data SHA-256 is
`ddeb0a0ac413f84d74b0b4c6f792ed7cb774acdd0a48ede7efeb787bbfbc2209`.
The data, evidence and verifier did not change during Stage 3. Analysis describes
that exact revision, with source failures and the diagnostic-only scope retained.

Claim map for the current analysis:

- Patent Reference metadata: data.patentNumber, patentAuthors, patentAssignees,
  patentYear and evidence.rawPrescription.attribution; original PDF p1.
- Correlation: evidence.productCorrelation and cited Sony specifications, launch
  announcement. This remains an inference.
- Architecture group table: results.facts.groups; cemented sign discussion:
  results.facts.cementedUnits.
- Zoom movement and reversal: results.facts.zoomMovement, Table 9/paragraph0188.
- Every element's name, nd, νd, glass annotation and standalone focal length:
  parsed data.elements and results.facts.elements. Element paragraphs were checked
  against source paragraphs0190–0194, with performance inferences qualified.
- Runtime spectral proxy table: evidence.diagnosticProjectExecution.glassResolution;
  distinction from manufacturer identity is explicit.
- Focus limitation: data.focusDescription, duplicate var vectors and source¶0189;
  marketed0.4m/0.20× are not claimed implemented conjugates.
- Asphere coefficients: data.asph and raw Table8; all36 nonzero coefficients are
  text-checked at source precision. Rim departures: results.facts.asphereDepartures
  at data.surfaces.sd, explicitly modeled rather than source-listed apertures.
- Conditions: results.facts.conditions and Table10.
- Numerical Diagnostic table: results.sourceModel and independently parsed
  implementedModel; all9 EFL/BFD/track values checked at six decimal places.
- Image-plane behavior: recorded actual prepared states in
  evidence.diagnosticProjectExecution.imagePlanes; no source BF adjustment.
- Petzval: results.sourceModel[].petzvalSurfaces and petzvalSum.
- Iris: implementedModel.diagnosticOptics.iris and actual project schedule.
-675 ray outcomes: implementedModel.diagnosticOptics.rays plus actual production
  trace receipt;613 pass,58outer-boundaryclips,4peripheral aiming unavailable.
- Type/schema/render claims: data-bound actual project receipt; no full build,
  corpus, application-browser smoke or independent final review is claimed.

Required section order, metadata, element labels, coordinates, material labels,
standalone focal lengths, source coefficients, shared headline numbers and all
major limitations are verified programmatically. Interpretive statements and
external citations were also manually reviewed; text matching alone is not used
as proof of optical explanation. No new numerical quantity was authored without
an existing executed result or an explicit published-source identity.

Tool versions: Python and NumPy/SciPy in results.environment; Node24.19.0,
TypeScript5.9.3, Prettier3.8.1, Inkscape1.4. Prettier was applied only to the
candidate files with the verified project configuration.

Current disposition: DIAGNOSTIC_AUTHORING_COMPLETE_AWAITING_INDEPENDENT_AUDIT.
The normal production-readiness gate is null. The next reviewer must conduct a
fresh source-first audit of the diagnostic candidate; the earlier two-source
block review was not such an audit. Integration remains INTEGRATION_PENDING.
_(Closed 2026-10-20: the independent audit and integration are recorded below.)_

## 2026-10-20 — Deployment validation and wording pass

Source re-read from the US 2015/0085165 A1 page images (the PDF has no text layer):
Table 7 (23 surfaces, R/d/nd/νd), Table 8 (9 aspheres, κ and C4–C10) and Table 9
(d3, d9, d19, d21 and Bf at wide/middle/tele) agree with the data file with no
mismatches. Numerical Expression 1 uses (1 + κ), so K = κ. Fig. 13 confirms 12
elements, the L1/L2 and L8/L9 cemented pairs and the stop between G2 and G3.

First order, patent vs model: f 24.72 / 47.00 / 67.90 vs EFL 24.712 / 46.988 /
67.858 mm; Bf 21.95 / 35.79 / 45.74 vs paraxial BFD 22.066 / 35.912 / 45.747 mm;
F/4.10 at all three states through the inferred iris schedule. A single-slip search
(sign, any single digit, adjacent transposition and ×10 / ×0.1 on every R, d, n and
zoom gap) finds no misprint that removes the BF differences; the best candidate
(d22 2.00 → 2.10) halves them. A real-ray on-axis d-line trace at F/4.10 places the
minimum-RMS focus −0.121 / −0.112 / −0.075 mm from paraxial, which matches the
printed Bf at wide and middle. Example 1 of the same patent shows the same pattern
(BF differences +0.053 / −0.007 / −0.107 mm; tele EFL 67.858 vs printed 67.90), so
the printed Bf is read as the patent's best-focus plane and kept. The traced
spherical aberration (−0.17 / −0.20 / −0.10 mm at full aperture) and distortion
(−7.7 / +5.5 / +6.2 % at the printed half-fields) agree with Figs. 14–16. Google
Patents lists the granted US9042030B2 as the only family publication.

Maker comparison: Sony lists 12 elements / 10 groups, five aspherical elements, one
ED element, 0.4 m MFD and 0.20× magnification. Example 3 has 12 / 10, aspheres on
L3, L6, L7, L10 and L11, and L9 (1.497 / 81.61) as the ED-class element. Sony's
construction diagram (https://www.sony.jp/products/picture/y_SEL2470Z_comosition.jpg)
is consistent.

Changed in this pass: key (diagnostic suffix dropped), name, subtitle, specs,
`visible: true`; close focus reconstructed by moving G4 imageward 0.943 / 1.860 /
2.793 mm with d19 + d21 conserved and BF fixed, reaching 0.4 m from the printed
image plane (magnification 0.078 / 0.144 / 0.205×); 4A semi-diameter 15.3 → 15.65 mm,
the smallest value passing the full-frame corner chief ray at wide at both focus
ends (Fig. 13 draws L3 taller than this); L9 tagged `apd: "inferred"`; header,
element roles, focus description and analysis prose rewritten in plain language.
The surface audit, image-circle audit and field coverage (all three stations ≥ 99 %)
pass.

Open: the close-focus travel is a paraxial reconstruction, not Sony's focus cam.

## 2026-10-20 — Second review: diagram, labels and movement

Compared the local page (infinity, close focus, 24.72 / 47 / 67.9 mm, both movement
overlays, inspectors for L1, L3, L8, L9 and L11) with Fig. 13 (PDF p. 14, wide end) and
the Example 3 text (¶0184–0199, PDF pp. 30–31). Figure scale from the vertex crossings:
S1 to the image plane is 1359 px for 111.21 mm at 310 dpi (12.22 px/mm); S1–S9 gives
12.18 and S11–S23 12.14 px/mm. A model outline drawn over the figure crop was used to
read each rim; the clean top side was cross-checked at 620 dpi.

| Surfaces | Before | After | Fig. 13 | Evidence |
| --- | ---: | ---: | ---: | --- |
| 11A / 12A (L6) | 9.7 | 10.5 | 10.9 | L6 drawn taller than L7 (10.5 drawn, 10.2 modeled); the model had the order reversed. Held at 10.5 because the 12A polynomial slope peaks near 10.3 mm and its departure accelerates beyond (−147 µm at 10.9 mm). Edge 0.7 mm. |
| 15 (L8 front) | 8.5 | 9.6 | 10.2 | Fig. 13 draws L8/L9 as one square-cut block; the stepped front showed as a bevel. 9.6 matches 16/17, which L9's edge thickness caps near 9.8 mm. |
| 22 / 23 (L12) | 13.0 | 14.6 | 14.6 | L12 drawn as a plate clearly taller than L11 (12.2 drawn); 12 % under before. |

Kept, with reasons. L1/L2 (28.0; drawn 29.9, 6.5 %, within reading noise). L3 4A 15.65
(decided today; the 19.6 mm outer block in the figure is a flat land on the nearly flat
front face). L7, L10, L11 agree within 5 %. L4 and L5 are drawn 15.1 and 14.6 mm tall
against 12.8 modeled, but cannot rise: with the true 5A asphere, L3's concave rear face
crosses L4's front near 13.6 mm (the figure draws that concave shallower than the
prescription), the cross-gap rule caps L4 at 12.9 while 5A stays at 15.3, and the
figure-faithful set (5A 12.9, L4 15.1, L5 14.6) passed the validator and the ray checks
but cut the engine half-field from 41.37 to 37.7 degrees through the paraxial height
model at 5A (the real full-frame corner chief ray there is only 12.0 mm). L3's rear rim
therefore still wraps around L4 on the page, as before.

Clearance after the change: surface audit clean, image circle 0 undersized, field
coverage at least 99 % at all three stations, no axial clip or chief-ray block at either
focus end (Y = 21.63 mm). Engine half-field 41.37 → 41.75 degrees (now limited by 4A
instead of L12); F/4.10 unchanged at all stations. Engine meridional transmission at
wide is unchanged through 40.8 degrees (81.3 %); at 43.7 degrees it rises from 35.4 to
42.7 % because the L12 rim was the limiting surface there. Middle and tele curves change
by under 1.5 points. These are meridional figures only.

Found correct. Groups G1–G5 bracket L1–L2, L3–L5, L6–L10, L11 and L12 as Fig. 13
labels them; the stop sits between G2 and G3 (¶0196). Cemented brackets D1 (1–3) and D2
(15–17) do not collide with the gap labels d3, d9, d19, d21, BF. Element names follow the
patent's L1–L12; element types match the signs of R; the nine aspheric surfaces carry
the A suffix exactly as Table 7 stars them. L7 as the blur-correction element (¶0197)
and L12 moving with G3 (¶0188) are right. L9's inferred ED tag stands: the patent names
no special glass, and 1.497 / 81.61 is the FCD1 / S-FPL51 coordinate. Table 7 indices
are d-line (¶0133 defines ni at 587.6 nm; S-TIH53 and FCD1 match nd exactly, not ne).
Every element resolves to a catalog glass, so diagram colors are complete.

Movement. Zoom stations ascend 24.72 → 47 → 67.9 mm. Measured from the image plane,
G1 moves objectward 111.21 → 124.84 → 140.08; G2 (surface 4) goes 98.68 → 97.42 →
102.19, imageward then objectward, matching the curved Fig. 13 arrow; G3 and G5 move
together objectward by 13.83 / 23.79 mm (¶0188); G4 moves objectward 30.33 → 46.43 →
57.98. All match the Fig. 13 arrows and ¶0187. Focus keyframe 0 is infinity; only G4
moves, imageward by 0.94 / 1.86 / 2.79 mm (reconstruction, see above); the slider's far
end reads 40 cm.

Aberrations against Figs. 14–16 (engine field-curvature trace, referred to the on-axis
paraxial focus): sagittal / tangential at the field edge −0.28 / −0.14 mm at wide
(figure −0.27 / −0.13), −0.27 / −0.49 at middle (−0.26 / −0.44), −0.08 / −0.27 at tele
(−0.07 / −0.25), including the positive tangential bulge near half field at tele
(+0.10 vs +0.11). The engine samples the wide edge at 43.7 degrees, the full-frame
corner, against the patent's 42.42.

Open: L4/L5 stay about 15 % shorter than drawn and L3 still wraps L4 (see above).
