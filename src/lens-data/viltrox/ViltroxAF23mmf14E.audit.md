# Viltrox AF 23mm F1.4 E — Literal-Source Diagnostic Dossier

## Job, authorization and reference versions

The fixed job is CN211826700U, Example 1, stem `ViltroxAF23mmf14E`. Supplied patent and job-card bytes remain unchanged.
The original seven-file Stage 1 archive remains untouched: SHA-256
`38e578ca63b436cd5838f6ba905be501c2d64e71fc56750b370691dc394c7898`.
It correctly retains `gate: null` and two mandatory source-resolution failures.

On 2026-10-02 the user accepted option 2: “Produce clearly labeled diagnostic models from the literal tables,
accepting that they won’t qualify as verified production-lens models.” The recorded reply was “Lets move forward with 2”.
The exact message references are retained in `evidence.diagnosticAuthorization`. This is a **DIAGNOSTIC_ONLY** scope
exception, not a source correction or permission to describe the model as verified production optics.

All 26 controlling project references match pinned commit `3d44a1be91db853725ac841b65a9e228f2c544ef`.
Targeted runtime execution uses checkout `8d169a816c403e4e2ff20678299df2ed77957efb`.
The transitive runtime/type-check dependency record contains 224 file fingerprints, including installed TypeScript
compiler/standard libraries. Every repository dependency in that record matches the pinned commit; the newer checkout
has no relevant dependency difference. Full builds, corpus tests, metadata generation, integration and publication were not run.

## Extraction and conventions

Tables 1–2 on supplied PDF pages 7–8, Table 9 on page 15 and Figure 1 on page 16 were directly rendered and reviewed.
Text extraction supplied the metadata and prose. The disclosure is all-spherical, d-line, unscaled, with 11 lens
elements in 10 air-separated groups, one cemented interface at surface 13, four functional groups, a printed STP
location and a physical rear GL plate. Index/Abbe blanks mean air; infinity radius is zero curvature, not zero radius.
Raw strings, null non-finite values and precise locations remain in the evidence.

The raw source contains both infinity and closest rows. D1 changes 1.00→3.76 mm and D2 changes 4.43→1.88 mm.
The source's 0.3 m object-distance reference plane is unspecified. Both first-vertex and image-plane interpretations
are evaluated in the source diagnostic branch. Neither is promoted to a certified finite conjugate.

## Model transformations and consumer safeguards

Every authored radius, base axial gap, index and Abbe number is literal. Source STP is renamed STO for the schema.
The physical GL values are mapped into `rearPlates`: last-lens gap 14.29 mm, plate thickness 2.00 mm, nd 1.52,
νd 64.20, final gap 1.00 mm. This follows the newer controlling specification, which supersedes the older prompt's
rear-plate omission language. The separate source `t/n` calculation is diagnostic only; no plate is replaced in the model.

The candidate is static at the source-labeled infinity/base spacing. Its `var` and `varLabels` are empty and
`closeFocusM` is `1e15`, explicitly an infinity-only UI sentinel rather than a measured or marketed MFD.
No finite-conjugate certification or operational focus law is authored. The raw closest row and its calculations are
retained in evidence/results and discussed separately in analysis.

This choice follows inspection of the actual `DiagramControls.tsx`: the control hardcodes FOCUS and distance labels,
while `focusDescription` is collapsible. A moving 0.3 m diagnostic slider could therefore appear unqualified.
The actual `getGroupMovementAvailability()` result is `{focus:false, zoom:false, combined:false}`; the control binds
that false value to `disabled` and shows “Not modeled”. The title, subtitle and specs also say DIAGNOSTIC ONLY,
and `visible:false` prevents ordinary catalog visibility. This is a code-level control-state check, not a full browser UI test.

Physical semi-diameters are unpublished. Modeled SDs start from Figure 1 proportions and are constrained by actual
ray and material geometry. Surface 9's entry aperture was enlarged to pass the axial pupil. Around the cemented pair,
surface 12 is 8.9 mm and surfaces 13/14 are 11.5 mm; these unequal inferred apertures prevent accepted sampled rays
from clipping inside the cemented group while retaining positive edge thickness. No source R/d/nd/νd was altered.
The final data file is the only hand-authored production-shaped object; the evidence stores a transformation ledger.

The paraxial inferred iris, 8.84439049584496 mm, was replaced with the actual runtime f/1.4 calibration,
8.735156477829351 mm. The final runtime returns 8.735156477831213 mm, a 1.86×10⁻¹² mm difference.
This is calibration to a source f-number, not independent evidence for an unpublished physical diaphragm.

## Glass review

The six pinned OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA shards were screened. Relevant coordinate rows and
residuals are retained, explicitly marked as project-catalog excerpts. Selected OHARA, HOYA, SCHOTT, CDGM and
Nikon/Hikari primary coordinates were rechecked; SUMITA's portal was checked but an exact relevant primary row
was not retrieved. Full vendor-catalog revalidation is not claimed.

All implemented lens glasses are explicitly `Unmatched` at the patent's coarse coordinates. No supplier, melt,
unique correction, nC/nF/ng or dPgF is invented. OHARA S-/L-prefixes remain distinct. HOYA TAFD34's 2023
introduction excludes using its coordinate similarity as proof of a 2020 material identity. The actual runtime
reports `abbe` dispersion quality, consistent with the disclosed limitation.

## Numerical and geometry results

The verifier reads the actual `.data.ts` using a fail-closed token parser for the exact import/const/satisfies/export
module and literal payload grammar. It rejects duplicate keys, spreads, computed keys, calls, functions, arithmetic,
non-finite numbers and trailing content. Accepted comments, trailing commas and negative exponent literals are tested.
A radius-sign mutation is detected by source comparison. Actual TypeScript 5.9.3 also checks the isolated candidate
against the real `LensDataInput` and its type dependencies, with zero diagnostics. Only the root draft's type-import
resolution is mapped to the real project file; no stub schema is used.

The source and implemented branches independently form their inputs. Sequential reduced-angle and separately
composed ABCD methods agree. Standalone element powers are recalculated from parsed surfaces and checked against
actual `fl` metadata. Per-surface Petzval terms use `(n′−n)/(R n n′)`. The base candidate gives EFL 23.377873 mm,
air-equivalent BFD 15.733217 mm from surface 22, and physical first-vertex-to-source-image track 85.780000 mm.
The 16.605789 mm reduced rear chain leaves the axial infinity best focus 0.872572 mm before the source image.
These diagnostics are not changed to obtain an EFL or focus match.

Portable geometry checks test the actual spherical domain, actual rim angle, 129-point shared-band edge thickness,
SD ratio and shared-band air-gap intrusion. The independent exact meridional tracer tests 105 parallel-bundle rays:
21 pupil fractions at 0°, ±19.02° and ±31.7°. All 21 axial samples pass. At each ±19.02° field, 16/21 pass; at each
±31.7° field, 7/21 pass. Remaining rays are explicitly vignetted. No nonphysical intersection/TIR failure or internal
cemented-interface clipping occurs in this sample. Portable iris calibration differs by about 1.44×10⁻¹⁰ mm.

The actual project executes `buildLens`, `validateLensData`, exact 3D sphere/plane tracing, runtime dispersion lookup,
focus-availability calculation and production `computeElementRenderDiagnosticsForState2`. Five control positions
0/.25/.5/.75/1 confirm the same static prescription; they are not five physical focus states. At each position,
25 circular-pupil points at five fields produce 125 exact geometry probes, 625 total. All 25 axial pupil samples
pass. At each ±19.02° field, 15/25 pass; at each ±31.7° field, 5/25 pass. Clipped rays terminate at exposed entry
surfaces 1, 3, 15 or 17, not inside the cemented group. These 2D/3D sample counts use different pupil grids and are
not throughput percentages. All five production geometry reports show exactly zero hidden trim.

Eleven actual production element paths were generated and rasterized for visual inspection. The source layout is
recognizable; unequal inferred clear apertures are explicitly distinguishable from the patent's schematic rim drawing.
This checks shape generation, not the full web application or physical production outline.

## Correction and discrepancy register

- **F01 remains FAIL:** D1+D2 changes 5.43→5.64 mm. The 0.21 mm increase exceeds the 0.02 mm maximum sum-difference
  rounding bound and contradicts stationary G1/G2/G4 around a rigidly moving G3. No spacing is corrected.
- **N01 remains FAIL:** Literal EFLs are 23.377873/22.905770 mm versus 23.44/22.95 mm. The closest-row conjugate is
  160.954974 mm object-to-first-vertex or 246.944974 mm object-to-image, not a certified 300 mm conjugate. This row
  is a separate raw-source diagnostic, never an operational candidate state.
- **Condition (1):** literal F1/F = 1.879483 fails the stated lower bound 1.9 and differs from Table 9's 1.93.
- **Condition (4):** Table 9 labels Vd3=28.30, while the defining inequality uses Nd3. Literal Nd3=1.75 satisfies
  that inequality. Raw table wording remains preserved; no dimensional comparison treats 28.30 as an index.
- **Reference policy:** `rearPlates` replaces the older prompt's omission instruction; no physical gap alteration.
- **Authored metadata correction during construction:** Sony E's canonical taxonomy id is `sony-fe`, including APS-C
  E lenses. The rejected initial `sony-e` trial was corrected before checkpointing, with actual validation rerun.
- **Inferred aperture revisions:** source-unpublished SDs and iris were refined before the checkpoint as described
  above. These are modeled geometry choices, not corrections to patent optical numbers.

The likely parallel invention application CN111474691A and grant CN111474691B were downloaded and their selected
Table 1/2 pages rendered. Both repeat the inspected original values; neither resolves F01/N01. No other embodiment
or glass reconstruction was substituted.

## Independent review

No independent audit of this candidate has been performed. Author method cross-checks and executed project code
are separate evidence, not a fresh independent extraction. A fresh auditor should examine the diagnostic pair and
its authorization boundary after this authoring handoff. The unchanged original blocked checkpoint remains available.

## Quantitative claim map and manual prose review

| Claim class                                             | Governing evidence/result                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Patent identity, element labels/counts, raw closest row | Raw Tables 1/2, Fig.1, fixed card; `sourceModel`                                     |
| Candidate EFL/BFD/track/principal planes/Petzval        | `implementedModel.staticBase`, final parsed data hash                                |
| Each element's first-line nd/νd/fl                      | `implementedModel.actualElements`, parsed elements, source coordinate comparison     |
| Functional-group and cemented-net power                 | `sourceModel.functionalGroupsAndCementedNet`; implemented base source-equality check |
| Focus conflict and unreproduced closest conjugate       | `comparisons`, `sourceModel.states`, raw Table 2                                     |
| Inferred SD/iris and geometry                           | `implementedModel.geometry`, `implementedModel.exactRayGeometry`                     |
| Runtime iris, 3D sampling, trim, disabled focus         | `implementedModel.recordedRuntime`; byte-bound `applicationExecution`                |
| Catalog coordinate cautions                             | `glassEvidence` primary rows and candidate residuals                                 |

The Stage 3 claim check extends the verifier with explicit per-element nd/νd/glass/fl rounding, eight cardinal/conjugate numbers, all group EFLs, condition ratios and runtime sample-count checks. The diagnostic Stage 2 checkpoint was refreshed for this verification-only extension; data and evidence bytes did not change. Manual review checks wording and citations in addition to numeric/structural tests. Glass/power sign is not used as
proof of a specific aberration contribution. Source claims, manufacturer product facts, inferred apertures and
computed diagnostics remain distinguishable. No production MFD, APO performance, exact full-field clearance or
physical focus-law validation is asserted.

## Gate disposition

**DIAGNOSTIC_ONLY. Normal gate remains null.** Source-resolution FAIL observations remain FAIL, so the standard
verifier deliberately returns exit 1 even when `diagnosticQuality` is PASS. A diagnostic-quality pass means the
literal static artifact is faithfully transcribed, structurally valid and functions within its declared geometry
scope; it does not mean `READY_FOR_DATA`, `READY_FOR_ANALYSIS`, `READY_FOR_AUDIT` or `READY_FOR_BATCH` under the
ordinary verified-production workflow. Diagnostic stage checkpoints are recorded separately in the manifest.

Default portable replay needs only Python standard library. Optional `--engine-root` rechecks recorded dependency
fingerprints and reruns actual runtime tests and isolated TypeScript validation. Clean extraction writes regenerated
results outside the archive; byte-identical diagnostics and the expected exit 1 are integrity evidence, not a removed blocker.

## Pending integration

`INTEGRATION_PENDING`. No repository changes, Git writes, metadata generation, full build, corpus sweep,
integration or publication was performed. The Stage 3 authoring checkpoint stopped before the independent candidate audit recorded below.

## Independent source-first audit: diagnostic scope only

The independent reviewer froze Pass A before opening the author candidate. Frozen fingerprint:
`3e89609da3c2431018772105d77120254a6c9798717ec67dc6df9acda4d06fa4`.
The baseline's actual exposure statement, raw independent transcription, exact code, results, primary HOYA catalog
and source checks are retained without alteration under `evidence.independentPass` and the consolidated verifier's
`FROZEN_PASS_A_SOURCE` constant. Canonical original PDF/card bytes supply the baseline's identical originals.
The portable verifier re-materializes those exact baseline files, checks every byte hash and the frozen fingerprint,
re-executes the original independent code, and verifies stable numerical equality. Its expected exit 2 still records
failed source checks. The fingerprint establishes retained bytes, not an unsupported claim of complete blindness.

The author candidate was first opened after that freeze, under the user's explicit diagnostic-only authorization.
The supplied Stage 3 archive SHA-256 was
`8ab19a8b5adc9296428a70ff0a448c6fcbf9fd6a353a99f6ba83d62f46d3c992`.
Its exact data SHA-256 was, and remains,
`88f6abfafdec3defd8902b42c2060bbf0baf2975501e730fabd687474c0ce02c`.
All nine Stage 3 member bytes and manifest hashes were checked before reconciliation. Every candidate base radius,
spacing, index and Abbe value agrees with the independent source transcription. The two raw focus rows also agree.
The stop rename and rearPlates mapping are explicit schema transformations. No optical data correction was required.

Independent source-only and candidate calculations reproduce the same EFL, BFD, element/group powers, Petzval,
cardinal planes, literal conjugates and unresolved source failures. The final verifier adds an explicit failed
source-G1 inequality check (F1/F 1.879482849896 versus lower limit 1.9), instead of leaving this only under a global
source-resolution failure. This strengthens visibility of the failure without changing any threshold or source value.

### Independent candidate geometry and actual engine reruns

Fresh code independently implements raw-angle ABCD propagation, exact spherical shared-band geometry and a 3D
intersection/vector-Snell path. The inspected author literal parser is shared as an input reader; the actual
TypeScript compiler independently type-checks the candidate, and the actual engine executes the module. These
shared components are disclosed rather than described as independent implementations.

For spherical surfaces the signed sag derivatives are ordered by curvature on the shared radial domain, so the
shared-band sag-difference extrema occur at its axis or outer endpoint. The fresh analytic endpoint calculation
therefore supplements the author's 129-point scans. Minimum modeled shared-band element thickness is
0.124406667864 mm; the minimum shared-band gap-policy margin is 0.090000000000 mm. Actual production element
render diagnostics return zero hidden trim for all eleven lens elements. Fresh actual engine shape paths were
rasterized and visually reviewed. The architecture is recognizable; unequal inferred rims remain visible rather
than being hidden by layout. This is not a browser-wide UI or production-manufacturing validation.

A dense grid has 161 pupil points per field (center plus five radial rings with 32 angles), at 0°, ±19.02°, ±31.7°.
The fresh portable path and an independently executed engine harness both return 161/161 clear on axis,
98/161 clear at each ±19.02° field and 47/161 at each ±31.7° field. Neither run has a nonphysical intersection/TIR
failure or internal cemented-group clipping. The denser grid also clips at exposed surface 4 for ±19.02°, in addition
to surfaces seen by the smaller author grid. This does not contradict the explicitly finite author sample, but is
now disclosed in the analysis. Sample counts are not measured transmission percentages or a continuum guarantee.

The independent runtime inspection verifies that every powered surface and the synthetic rear plate retain their
literal d-line index exactly; each glass uses Abbe fallback and has no selected catalog supplier. Runtime iris is
8.735156477831213 mm versus authored 8.735156477829351 mm. The fresh exact calibration differs from the authored
iris by −1.4427×10^-10 mm. The frozen paraxial calibration remains a separately labeled approximation, not an error
that was retrospectively rewritten. All five control-position station/media/aperture arrays and image planes are
identical; focus availability is false. Direct control-code inspection confirms disabled focus and “Not modeled”.

### Current reference and dependency impact

The current controlling pin is `66b394809241620190908def6caf9a81d3f3a6f5`. A fresh official compare response from
`3d44a1be91db853725ac841b65a9e228f2c544ef` shows only article-link referrer handling in ThemedMarkdown.tsx and its
test changed. No optical or retained controlling-reference file changed. A fresh official recursive tree of the new
pin was then compared with all 224 executed dependency fingerprints: 155 repository files have matching Git blob
SHA-1 and SHA-256; 69 installed-tool files retain their recorded SHA-256. No differences were found. The actual
execution checkout remains `8d169a816c403e4e2ff20678299df2ed77957efb`; it is not falsely labeled as the newer checkout.
The observed targeted dependencies are identical to the new controlling pin. The complete comparison and dependency
records are embedded in the evidence. Both targeted runtime harnesses and actual TypeScript checking were rerun.

### Correction and clarification register

- AUDIT-C01: replaced an indexed-only product citation with the independently directly retrieved official Viltrox
  comparison page. Its E-mount column is explicitly distinguished from the X-mount page title. No product facts changed.
- AUDIT-C02: made the 0.02 mm nearest-rounding assumption explicit; the patent's quantization method is not stated.
  This does not resolve or waive the 0.21 mm conservation conflict.
- AUDIT-C03: added independent dense-grid results and their additional surface-4 clipping. Source values and apertures
  are unchanged. All clearance claims remain bounded to stated tests.
- AUDIT-C04: added the explicit source-G1-condition FAIL check. Source consistency remains blocked.

The analysis/evidence/verifier/results were therefore revised and their dependent Stage 2/3 diagnostic checks rerun.
The optical data bytes were unchanged. Final approval applies to the new manifest's exact hashes, not an earlier
analysis revision. No baseline correction was needed; frozen source inputs/results have not been rewritten.

### Independent quantitative claim map

| Final claim                                                | Independent executed support                                                                  | Scope                                           |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Base EFL, BFD, physical track, principal planes            | `independentReview.freshCandidateCardinals`; frozen baseline states                           | Literal static model                            |
| Standalone element focal lengths                           | `independentReview.elementPowers`; author parsed-data power equality                          | Standalone elements in air                      |
| Group/cemented net powers, Petzval, source near conjugate  | Re-executed `independentBaseline.sourceBaseline`                                              | Raw published states; not UI focus states       |
| Literal source preservation and repeated glass coordinates | `independentReview.candidateSourceErrors` and `authorEvidenceVsFreshSourceErrors`, both empty | No optical corrections                          |
| Modeled thickness/gap margins                              | `independentReview.geometry`                                                                  | Exact shared spherical radial band              |
| 161-point field counts                                     | `independentReview.exactRays` and real-runtime comparison                                     | Five sampled fields, inferred aperture          |
| Physical iris and unchanged d-line media                   | `independentPass.reconciliation.runtime.observations`                                         | Actual engine calibration/fallback              |
| Disabled static focus                                      | `independent-static-diagnostic-safeguards` and `independent-runtime-static-control`           | Operational focus omitted                       |
| Manufacturer specifications                                | Direct official page, explicit E-mount column                                                 | Production claims only; correlation unconfirmed |

The complete analysis was manually reviewed for metadata, third-person technical prose, source/patent versus computed
claims, counts, plane definitions, scope of geometry samples, asphere absence, glass uncertainty and citation support.
The parallel application/grant Table 1–2 pages were independently re-rendered after freeze and contain the same
selected values. Primary HOYA chronology and selected OHARA/SCHOTT/CDGM/Hikari coordinates were checked; no catalog
coordinate is promoted to a source material identity. SUMITA's exact-row limitation remains explicit.

## Final diagnostic disposition

**DIAGNOSTIC_AUDIT_COMPLETE; diagnosticQuality PASS; normal gate null.** The final nine-file dossier is a reviewed,
portable, source-literal static diagnostic. The source focus-conservation, numerical/conjugate and first-group
condition checks remain FAIL; the canonical verifier deliberately exits 1. Successful clean replay means those
same results were reproduced, not that the source contradictions were fixed. No ordinary READY_FOR_BATCH or verified
production-lens claim is made. `INTEGRATION_PENDING` remains in force. Full build, corpus tests, integration,
metadata generation, Git writes, publication and uploads were not performed.
