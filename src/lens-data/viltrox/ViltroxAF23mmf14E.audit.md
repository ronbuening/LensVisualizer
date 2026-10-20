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
`closeFocusM` is `1e15`, explicitly an infinity-only placeholder rather than a measured or marketed MFD.
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

Closed 2026-10-20: integrated into the repository (see the final section). No repository changes, Git writes,
metadata generation, full build, corpus sweep, integration or publication was performed. The Stage 3 authoring checkpoint stopped before the independent candidate audit recorded below.

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
production-lens claim is made. Integration remained pending (closed 2026-10-20; see below). Full build, corpus tests, integration,
metadata generation, Git writes, publication and uploads were not performed.

## 2026-10-20 — Deployment validation and wording pass

Source re-read: all 24 rows of Example 1 Table 1 (R, d, nd, νd, the STP row and the GL plate) and both Table 2
states (D1, D2, printed EFL) were checked against 200 dpi renders of PDF pp. 7–8. The design is all-spherical, so
there are no coefficients. The previous file matched the print on every row.

Source erratum, corrected: L12 nd (surface 3) 1.85 → 1.83, evidence sibling-example, claims and aberration-figure.
νd 42.72 is the 1.83481 class (HOYA TAFD5G 1.83481/42.72; OHARA S-LAH55V 1.83481/42.73), and Example 3 Table 5
prints that pair as 1.83/42.72. The values below are before → after.

- Infinity EFL: 23.378 → 23.350 mm (printed 23.44).
- Infinity paraxial focus in front of the printed image plane: 0.873 → 0.125 mm. Fig. 2 plots d-line spherical
  aberration within about ±0.1 mm of the plane on a ±0.2 mm scale.
- F1/F: 1.879 → 1.968 (claim 1 range 1.9–2.2; Table 9 prints 1.93). F2/F 1.445 → 1.447 (1.44); F4/F 1.637 → 1.639 (1.63).
- 0.3 m state, object measured from the image plane: image 0.72 mm → 0.00 mm from the printed plane;
  β −0.1015; EFL 22.906 → 22.907 mm (printed 22.95).

A single-value search over every R, d and nd of Example 1 found several R or d digit changes that also null the
infinity defocus. None has a second kind of source evidence; L12's index is the only change supported by more than
one kind. The remaining −0.38% EFL and 0.125 mm offsets fit the two-decimal indices: plausible catalog indices for
the identified glass classes give 23.416 mm and 0.044 mm.

Source erratum, unresolved: D1 + D2 is 5.43 mm at infinity and 5.64 mm at 0.3 m, although only G3 moves. Examples 2
and 3 keep the sum within 0.01 mm. Neither D1 nor D2 can be isolated, so the printed values are kept.

First order (model / patent): EFL 23.350 / 23.44 mm; f/1.4 / 1.4; half-field at a 14.2 mm image height 31.6° / 31.7°;
first vertex to image 85.78 mm (printed chain); close state 22.907 / 22.95 mm. audit:surface, audit:image-circle,
audit:field-coverage (100% at 14.18 mm) and real-ray clearance at both focus states report no defects.

Maker comparison: Viltrox lists 11 elements / 10 groups, 2 ED and 2 high-index elements, internal focus, 0.3 m and
0.1× for the E, X, M and Z versions. The example matches the count, the single cemented pair, the two low-dispersion
elements of ¶0028 (L14, L15) and the 0.3 m state. Viltrox publishes no construction diagram.

Fields changed in this pass: L12 nd and its element focal length; Table 2 focus restored (D1/D2 gaps, closeFocusM
0.3, published close state, focus description); key `viltrox-af-23mm-f14`, name "VILTROX AF 23mm f/1.4", subtitle,
specs, lensMounts (sony-fe, fujifilm-x, canon-ef-m, nikon-z), design focal length 23.44, catalog visibility; source
errata; element labels and roles; apd `inferred` with notes on L14 and L15; group names; rear-plate source line; the
header comment. The analysis was rewritten to describe the corrected model, and the romanized inventor and
assignee names were applied.

Closed the same day: L12's glass string now says the printed 1.85 was corrected to 1.83, the doublet carries `cemented: "C1"`,
and the D1 + D2 entry is queued in Section G of `agent_docs/sd-audit-queue.md`. Open: glass labels remain `Unmatched` (two-decimal indices).

## 2026-10-20 — Second review: diagram, labels and movement

Compared: the local page (infinity, 0.3 m, the focus movement overlay and the inspector for elements 2, 4, 6, 7 and
9) against Fig. 1 on PDF p. 16 and the text of ¶0026–0028, ¶0060–0076 and Tables 1–2 (pp. 7–8). This was the first
figure-measured semi-diameter pass; the earlier values came from the package author.

Fig. 1 is drawn to scale. At 300 dpi the vertex crossings give 18.42 px/mm from surface 1 to the image plane
(1580 px for 85.78 mm); surface 1 to 22 gives 18.43 and the GL plate 18.0 px/mm. Rim sags check the scale: surface
3 at 12.92 mm measures 1.22 mm against 1.23 computed, and the L11 and L15 sags fit to within one pixel. Rims were read
on the lower side, which has no labels; the G3 arrow hides only the lower edge of L31, and its upper edge was used.

| Element (surfaces) | Stored sd   | Fig. 1 rim                                | f/1.4 marginal floor, ∞ / 0.3 m | Result      |
| ------------------ | ----------- | ----------------------------------------- | ------------------------------- | ----------- |
| L11 (1, 2)         | 15.7 / 15.7 | 15.6 block; concave face ends at 14.0     | 8.34 / 7.64                     | kept        |
| L12 (3, 4)         | 14.4 / 14.4 | 13.5 / 13.5                               | 13.01 / 12.58                   | kept (+7%)  |
| L13 (5, 6)         | 13.95 / 13.5 | 12.9 / 12.9                              | 12.73 / 12.41                   | kept (+5–8%) |
| L14 (7, 8)         | 13.2 / 13.0 | 12.2 / 12.2                               | 12.07 / 11.74                   | kept (+7–9%) |
| L15 (9, 10)        | 11.2 / 10.1 | 10.1 block; concave face ends at 9.1      | 10.24 / 10.12                   | 9: 11.2 → 10.4 |
| L21 (12, 13)       | 8.9 / 11.5  | front face ends at 8.3; block 10.4        | 8.43, 9.91 / 8.51, 10.14        | 13: 11.5 → 10.7 |
| L22 (13, 14)       | 11.5 / 11.5 | 10.4 / 10.4                               | 9.91, 10.40 / 10.14, 10.59      | 14: 11.5 → 10.7 |
| L23 (15, 16)       | 11.3 / 11.3 | 11.2 / 11.2                               | 10.61 / 10.94                   | kept        |
| L31 (17, 18)       | 10.0 / 10.0 | 9.9 / 9.9                                 | 9.51 / 8.97                     | kept        |
| L41, L42 (19–22)   | 12.8        | 12.7                                      | 8.54 / 8.34                     | kept        |

The 0.3 m floors come from a scratch exact trace from an axial object 227.0 mm ahead of surface 1, with the stop at
its engine radius of 8.84 mm. That trace reproduces the infinity floors from the clearance probe to 0.01 mm.

Reasons. L15's front face was 11% above the figure; it now sits 0.16 mm above the infinity marginal ray, and with the
rear face kept at 10.1 the element is nearly square-cut, as drawn. The cemented pair was 10% above the figure and
rendered taller than L23, while Fig. 1 draws L23 taller. Its rear faces now sit at 10.7, where the 0.3 m marginal ray
needs 10.59 at surface 14, so L23 is the taller element again. Surface 12 stays at 8.9: Fig. 1 ends L21's concave
face at about 8.3 and adds a flat land out to the block, and a full-height concave face would swing back toward the
stop. L12–L14 are 5–9% above the figure, within the change threshold, and stay. L11 keeps both faces at the outer
block height, so it renders square-cut as Fig. 1 draws it.

Results after the change: the surface validator reports no errors; the image-circle check passes; field coverage is
100% at 14.18 mm (31.6°). The clearance probe shows no on-axis clip or chief-ray block at either focus state. Engine
half-field (33.43°), f-number (1.400), EFL (23.350 mm) and stop radius (8.839 mm) are unchanged. The meridional
geometric-transmission curve at infinity is unchanged except at 5.7°, where it falls from 96.9% to 96.4%; at 0.3 m
it falls only at 5.6°, from 99.0% to 98.4%. These are meridional numbers only.

Labels. The `doublets` bracket read "L21/L22" while both elements carry `cemented: "C1"`; the bracket now reads "C1",
which matches the cemented id. A "D1" label would clash with the patent's D1/D2 focus gaps beside the slider. The
group brackets G1 (1–10), G2 (12–16), G3 (17–18) and G4 (19–22) match Fig. 1's brackets and ¶0060–0073. The stop
lies between L15 and L21, as the STP row of Table 1 places it. Element names are the patent's L11–L42 and agree with
the inspector. Every element type agrees with the signs of R, and there are no aspheric surfaces or markers. The
inspector shows "DOUBLET C1" on elements 6 and 7, with no bonded-layer entry.

Tags. L14 and L15 carry `apd: "inferred"`. ¶0028 states that the fourth and fifth lenses of G1 use ultra-low-dispersion
material, and ¶0026/¶0065 call both low-dispersion lenses with νd above 50. That is patent-text designation; the tags
were left as placed today and the point is reported to the coordinator.

Movement. Table 2 index 0 is infinity and index 1 is 0.3 m, and the slider's far end reads 30 cm. G3 moves toward the
image, as Fig. 1's arrow and ¶0007/¶0060 state: D1 1.00 → 3.76 mm and D2 4.43 → 1.88 mm. The overlay shows G3
travelling 2.55 mm toward the image plane. Because D1 + D2 grows by 0.21 mm, G1 and G2 sit 0.21 mm farther from the
image at 0.3 m, against ¶0060's statement that G1, G2 and G4 are fixed. That follows from the recorded unresolved
erratum, and the printed spacings stay. The lens has no zoom.

Aberration plots. Distortion agrees with Fig. 4: the model reaches −1.55% barrel near 85% of the field, and Fig. 4
shows about −1.5%. The spherical-aberration shape agrees with Fig. 2: the d-line curve swings one way in the zone
and back at the rim, within a few hundredths of a millimetre. Sagittal field curvature follows Fig. 3's shape but
runs deeper: about −0.22 mm relative to the axis at 27.7° against about −0.10 mm. Tangential field curvature does
not agree: the model falls to −0.74 mm at 31.6°, while Fig. 3 keeps T within about ±0.03 mm. Six-digit catalog
indices for the identified glass classes improve it only to about −0.5 mm, so the two-decimal indices do not explain
the gap. The cause is open.

Glass recurrence across Examples 1–4 (Tables 1, 3, 5, 7):

- Real materials that recur: 1.85/23.78 and 1.93/20.88 in all four examples, 1.83/42.72 in Example 3, and the L14 glass
  as 1.51/81.60 in Examples 2–4.
- Example 1 only: 1.88/40.79, 1.85/36.59, 1.48/70.44 and 1.73/54.67.
- L31 keeps nd 1.75 while νd changes in every example (28.30, 27.55, 25.46, 26.20), which looks optimizer-floated.
- The patent prints no glass names, extra line indices or partial dispersions, so all labels stay `Unmatched`.

Coordinator follow-up, same day: L14 and L15 `apd` "inferred" → "patent". ¶0028 specifies ultra-low-dispersion
material (超低色散材料) for the fourth and fifth lenses of G1, and ¶0026/¶0065 call both low-dispersion lenses. Open:
the model's tangential field at the edge (−0.74 mm) does not match Fig. 3 (within about ±0.03 mm); six-digit catalog
indices reduce it only to about −0.5 mm, so another source inconsistency may remain.

## 2026-10-20 — Tangential field-curve source check

Question: why the model's tangential field curve departs from Fig. 3 (PDF p. 17), when distortion (Fig. 4) and
spherical aberration (Fig. 2) agree. Outcome: no single source value is isolated. The printed table is kept, and an
`unresolved` entry is added to `source.errata`.

Method. A scratch exact chief-ray trace with Coddington tangential and sagittal foci reproduces the engine to 0.01
mm. Fig. 3 was digitised at 300 dpi: 0.1 mm is 161.5 px, and the field axis runs linearly from 0° to 31.7°. Fig. 6,
the 0.3 m state on p. 20, was digitised the same way. Values below are focus minus axial focus in mm; the axial
focus itself is given against the printed image plane.

| Field fraction           | 0.5    | 0.7    | 0.8    | 0.9    | 1.0    | Axial focus |
| ------------------------ | ------ | ------ | ------ | ------ | ------ | ----------- |
| Fig. 3, T                | −0.01  | −0.02  | −0.03  | −0.04  | −0.10  | +0.027      |
| Fig. 3, S                | −0.08  | −0.12  | −0.12  | −0.08  | +0.03  |             |
| Printed table, L12 1.85, T | −0.18 | −0.42 | −0.63 | −0.98 | −1.63  | −0.873      |
| Model, L12 1.83, T       | −0.09  | −0.21  | −0.31  | −0.47  | −0.75  | −0.125      |
| Model, L12 1.83, S       | −0.11  | −0.19  | −0.22  | −0.21  | −0.14  |             |

At 0.3 m, Fig. 6 reaches −0.29 at 0.78 of the field in T; the model reaches −0.51.

Single-value search. Every printed R, d and nd of Table 1 and the four Table 2 spacings were tried with:
- a sign flip, a swap of adjacent digits, and every single-digit change;
- multiplication or division by 10;
- a swap with the same column of the next row.

That makes 1,646 traced variants. Each was scored on the Fig. 3 shape, the axial focus against Fig. 3's +0.027 mm,
EFL against 23.44 mm, F1/F, F2/F and F4/F against Table 9, and the 0.3 m state (object-to-image 300 mm, EFL 22.95 mm).
νd variants were not traced, because they cannot move d-line field curves. The best single changes, with L12 at 1.83:

| Change                 | Fig. 3 rms | T at edge | Axial focus | EFL    | 0.3 m conjugate | Fig. 6 rms | Examples 2/3/4 print |
| ---------------------- | ---------: | --------: | ----------: | -----: | --------------: | ---------: | -------------------- |
| none                   | 273 µm     | −0.755    | −0.125      | 23.350 | 300.2 mm        | 100 µm     |                      |
| d4 0.10 → 0.70         | 36 µm      | −0.069    | −0.144      | 23.423 | 300.1 mm        | 7 µm       | 0.10 / 0.22 / 2.00   |
| d7 2.31 → 2.71         | 35 µm      | −0.160    | −0.221      | 23.464 | 293.9 mm        | 6 µm       | 2.35 / 3.67 / 2.18   |
| R20 −27.00 → −27.60    | 32 µm      | −0.093    | +0.073      | 23.608 | 321.0 mm        | 33 µm      | −26.01 / −25.23 / −24.51 |
| R21 −25.97 → −25.37    | 29 µm      | −0.026    | +0.100      | 23.660 | 324.1 mm        | 22 µm      | −24.58 / −23.59 / −23.40 |
| R2 22.41 → 22.11       | 23 µm      | −0.029    | +0.161      | 23.206 | 327.7 mm        | 4 µm       | 23.51 / 23.43 / 25.34 |
| d6 3.54 → 3.84         | 39 µm      | −0.144    | −0.282      | 23.502 | 289.3 mm        | 5 µm       | 3.62 / 3.52 / 3.47   |

Two-change combinations among the top 37 single changes did not beat d4 0.70 alone; the best pair was R4 −61.07 with
d6 3.74, with 53 µm rms.

Why no change qualifies:
- Several unrelated cells repair the curve about equally. Only d4 0.70 also keeps the 0.3 m conjugate at 300 mm, but
  it leaves the axial focus 0.17 mm from Fig. 3's.
- No sibling example prints a replacement value or a consistent form for any candidate cell.
- Table 9 cannot arbitrate. Its F1/F differs from every example's own trace by +0.04 to +0.18 even with catalog
  indices, so it is looser than the effects being tested.
- The ranking moves with the unprinted index decimals. With six-digit catalog indices for the identified glass
  classes, the best single change becomes d7 2.31 → 2.61, and d4's best value becomes 0.50.
- Index changes alone can reproduce Fig. 3. With every printed R and d kept and each nd allowed to move by 0.01 or
  less, a fit reaches 16 µm rms, an axial focus of +0.037 mm and an EFL of 23.438 mm. The patent's printed indices
  are known to be off by that much: L14 prints 1.51 for a νd 81.6 glass that is 1.497 in every catalog, L23 prints
  1.93 for the 1.92286 class, and L15 prints 1.48 for 1.48749. A 0.01 change in any single index moves the
  tangential edge focus by 0.1–0.4 mm.
- Examples 2 and 4, traced as printed, miss their own printed EFLs (23.59 and 23.88 against 23.45) and focus
  1.8 mm and 1.6 mm behind the image plane, so the tables are imprecise throughout.

Evidence kinds. Fig. 3 and Fig. 6 are one kind (aberration-figure). No second kind exists for any candidate. The
same-filing invention application CN 111474691 A and grant CN 111474691 B are the only related publications on
Google Patents. Their text there carries the tables only as images, and the earlier dossier records that their
Tables 1–2 repeat the utility model's values.

Changed: a second `unresolved` entry in `source.errata`, a FIELD CURVES header note, and an analysis paragraph in
Model Scope and Limitations. No optical value changed. The `/* ── Published internal-focus spacings ── */` comment
above `gaps` was removed: the lens-data round-trip converter drops comments in that position, and the header's FOCUS
note already cites Table 2. The L12 correction stands; its claims and sibling-example evidence are not affected.
