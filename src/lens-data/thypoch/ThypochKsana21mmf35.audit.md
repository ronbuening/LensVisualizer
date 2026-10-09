# Thypoch Ksana 21mm f/3.5 — consolidated audit

## Job and reference versions

CN118534627A, Example 1 (Tables 1a–1g; Figures 1–7), exact stem
ThypochKsana21mmf35. Original PDF and card are unchanged. The card's historical
approval-pending status is retained in its original bytes; subsequent owner approval
authorized processing, not source replacement, repository integration or deployment.
CHAT-1.0 protocol and dossier contract govern staging. Main was freshly read as
cb944bb436fe091c4dad3df64119f0b61636f5fe on 2026-10-08; recovered reference bytes
are hash-identified in the manifest and full authoring archive.

Current AGENTS, LENS_DATA_SPEC, LENS_ANALYSIS_SPEC, template, defaults, taxonomy,
adding-a-lens guide and integration handoff were consulted. The current rearPlates
contract supersedes the older prompt's cover-plate omission wording. Camera-side
CG is retained with its physical thickness/index/Abbe and trailing gap. No gap is
hand-folded into air. This is an explicit reference-version impact decision.

## Extraction and conventions

Original PDF pp8–10 were rendered and visually checked, including radius signs,
all coefficients and the equation. The raw evidence preserves 17 source interfaces,
object and image planes, eight powered elements and camera CG. Table 1a is not
mixed with Examples 2 or 3. S8 maps to STO; S14/S15 will map to 14A/15A. Index
reference is d; all source dimensions are millimetres and scale is exactly one.
Equation ¶0096 uses 1+k, so model K equals the patent k. A4 through A16 are retained,
including printed zero A14/A16. S15 K=+7.19 has a finite radial domain; no conic
sign change or polynomial refit is permitted.

## Model transformations

Only label normalization, the current rearPlates representation, and later documented
aperture inference are needed. D15 is the physical gap from S15 to CG, not to IMAGE.
Infinity BFL source distance is 16.71 + 0.85 + 0.50 = 18.06 mm. All eight powered
elements and STO move together by 0.96 mm objectward relative to the fixed camera.
CG remains camera-side. Source D0 is object-to-first-vertex, distinct from the
manufacturer's 0.5 m sensor-plane distance. No focus optimization is performed.

## Glass review

Eight distinct native coordinates, including CG, were screened against authoritative
HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalogs. Original catalog provenance
and byte hashes are retained in the supporting archive; matching relevant rows and
residuals are in evidence.json. Two-decimal nd and νd do not identify a commercial
glass. Candidate compatibility is not identity evidence. Conservative Unmatched
class labels preserve the literal native coordinates, with no copied proxy spectral
indices. The product's ED-colored L6 is not permission to replace 1.73/54.68.

## Numerical and geometry results

Independently coded scalar geometric-angle propagation and reduced-angle ABCD agree
at both published states. Analytic singlet and determinant checks pass. Executed
literal EFL is 21.726120732331 mm, physical paraxial BFD including CG is
18.287262751071 mm, first-to-image track is 52.84 mm, and G1/G2 standalone EFLs
are +209.300667899124/+29.517655381366 mm. G1 is weakly positive. Eight element
standalone EFLs and per-surface Petzval sums are calculated in results.json.

The source image lies 0.227262751071 mm before infinity paraxial focus and
0.219432431746 mm before focus for the published 500-mm-first-vertex near state.
The literal near image has a different exact paraxial conjugate of approximately
648.45765 mm from the first vertex. This is a diagnostic, not a replacement for
published D0=500 mm. Summary EFL, BFL and group EFL comparisons fail at their
printed last-digit precision and remain FAIL observations in the results. Local
source-digit sensitivity exceeds EFL/BFD residuals, consistent with coarse nd
precision; it neither proves hidden values nor certifies patent aberration plots.

All four patent inequality ranges pass from literal values. The printed ratios
need not match their last digit. Stop diameter and clear SDs are unpublished and
remain Stage 2 construction tasks. No geometry gate has been claimed at Stage 1.

## Correction and discrepancy register

1. Paragraph ¶0091 describes D15 loosely as the gap to IMAGE and refers to D11.
   The explicit Table 1a/1b sequence controls: no S11 motion or plate omission.
2. Table 1f prints L8 negative. Unchanged Table 1a gives a positive standalone
   meniscus (+179.280914296377 mm). The numeric model and sign discrepancy remain
   visible; no radius, index, coefficient or source text is edited.
3. Two-decimal source data do not reproduce all precise summary and focus claims.
   The package models the literal publication and retains residual defocus.
4. Manufacturer ED labeling, production MFD reference and numerical prescription
   are not asserted to be identical to the patent. Construction correlation is
   strong but not a manufacturer-confirmed production prescription.

## Independent review

Source-first review is in progress with a separate reviewer. Stage 1 author
cross-checks are not claimed as a completed Stage 4 audit. Frozen independent
inputs/results and exposure will be appended before any final approval.

## Gate disposition

Stage 1: READY_FOR_DATA for the literal-source model. Original hashes, raw
extraction, source-method checks, conditions, catalog screening and discrepancy
disclosure pass. Stop/SD inference and current native geometry are subsequent gates.
No data or analysis pair is approved by this Stage 1 record.

## Pending integration

Integration remains INTEGRATION_PENDING. No repository writes, metadata generation,
full-corpus sweep, build, publication, deployment or local-computer action was run.
Targeted current-code checks will be recorded separately from full integration.

## Stage 2 construction checkpoint

The current native schema and actual TypeScript 5.9.3 types pass, with Prettier
3.8.1 using the recorded main configuration. No stub schema is substituted.
All 242 recovered project reference files match their recorded hashes and the
freshly identified main commit. Source round-trip is exact, including both rear
plate interfaces, both focus states and every coefficient. A deliberately altered
radius is rejected; bounded literal parser malformed fixtures are rejected.

No gap-sag, slope, conic or render exception is used. Figure 1 supplies approximate
shape proportions, then exact traces constrain inferred rims. The first front SD
was enlarged from 9.5 to 11.6 mm because the original estimate clipped the source
45.31° chief. Its rear remains 9.5 mm to respect the 10.57-mm sphere. Source figure
proportions do not override radii. L3 front/junction were reduced from 7.3 to 7.2 mm:
the former exceeded default 90% intrusion at S4→S5; the latter passes and both
source and format chiefs transmit. L8 SDs are 7.7 mm, below both conic policy
and slope-reversal boundaries. Full geometry samples 1,001 radii per shared band.

The physical iris radius is 3.873496827440 mm, calibrated through the actual
native f/3.50 entrance-pupil calculation. The paraxial first guess was
3.806443966302 mm. Stored and runtime stop radii are identical. This agreement is
calibration, not an independent published iris measurement.

Actual main buildLens, validateLensData and production element-render diagnostics
pass. Hidden trim is zero at five focus samples. A 3,075-ray current-engine audit
at f/3.5, f/4 and f/8 reports 2,714 transmitted and 361 aperture-clipped rays, zero
failed rays, and zero sampled side-wall violations. Source/full-format infinity
chiefs pass. Finite-focus generic UI launches are separately disclosed: the near
generic launch has a first-vertex object distance of about 494.019809 mm, not
the certified source 500 mm.

An independent source-conjugate check uses actual mtfFiniteConjugate,
mtfFiniteObjectPoint and traceEngineRay2. All 976 rays at f/3.5, f/4, f/8 and f/22
start on z = −500 mm, with 101-point glass-segment containment checks. No ray
fails and no side-wall violation occurs. Both source 45.31° and exact 21.6-mm
image-height chiefs transmit. Near exact-format chief angle is 44.0490597532°;
the source 45.31° chief reaches 22.6740656066 mm. These finite-source checks are
distinct from the generic UI ray audit. Neither audit claims uniform pupil
weights, unvignetted full aperture or a continuum proof.

Stage 2: READY_FOR_ANALYSIS for the exact checkpoint bytes. Source-limited literal
optics, all mandatory construction checks and current targeted native checks pass.
Full repository integration remains pending. Portable replay checks hash-bound
native receipts; executing the native scripts separately requires the identified
current project sources and Node 24.

## Stage 3 analysis and quantitative claim map

The clean analysis was authored only after the complete Stage 2 checkpoint was
sealed and clean-replayed. Data bytes did not change during analysis authoring.
Analysis first-line element quantities, coefficients, focus references, patent
metadata and construction counts agree with the actual parsed data. Interpretive
prose was reviewed against patent ¶0083–0086/0094 and the rendered Figure 1;
isolated power is not used as proof of an individual aberration contribution.
Catalog names in the analysis are explicitly compatibility examples, not model
labels or selected spectral curves. The runtime's generic “no coordinate-compatible
candidate” diagnostic is not interpreted as proof that no catalog candidates exist:
Unmatched intentionally opts out of identity resolution.

| Analysis location or claim | Executed fact/result | Governing source/model |
|---|---|---|
| Identification, eight/six, doublets, special-element positions | evidence productCorrelation, rawPrescription and manufacturer source-facts | Original patent pp7–10/17 and official product page/image |
| Marketing, mount, image circle, aperture blades and MFD reference | evidence productCorrelation.marketing | Official specifications, 2026-10-08 archive |
| EFL/BFD/track and G1/G2 powers, architecture ratios | first_order; implementedModel.infinity | Parsed final .data.ts with physical rearPlates |
| D1/D2 powers and all eight signed element focal lengths | first_order; implementedModel.infinity.cemented/elements | Standalone thick blocks; air-normalized boundaries |
| Element shape, glass strings, nd/νd, role strings | source_exact_data; source_roundtrip | Actual data and source Table 1a |
| Catalog candidate table and unresolved identity | glassEvidence, catalog-audit and runtime-glass-audit | Eight native coordinates across six vendors |
| D15 endpoints, unit travel, D0 and closeFocusM | focus_roundtrip; sourceModel and finiteSourceSummary | Tables 1a/1b, exact source first-vertex reference |
| Infinity/near residuals and diagnostic conjugate | sourceModel.infinity.infinityDefocusMm; sourceModel.near500.sourceObjectDefocusMm/objectFromFirstMm | Literal source plane retained |
| Conic equation and A4–A16 schedule | asphere_roundtrip and analysis_coefficients | Original equation p8, Table 1c p9 |
| Asphere sag, spherical departure, actual slope and domain | geometry.surfaces | Parsed coefficients evaluated at inferred 7.7-mm SDs |
| Four conditional inequalities and rounded values | conditions; raw source comparisons | Source bounds p2 and Table 1e |
| Surface-by-surface Petzval | first_order; petzvalBySurface/petzvalSumInvMm | φ/(n n′) on actual refracting interfaces |
| Stop radius and f/3.50 | nativeSummary.firstOrder; stop_calibration | Native exact iris calibration, not independent physical evidence |
| 21.6-mm/source-angle chiefs at infinity | native receipt rays with focusT0/ring0 | Exact main trace plus source-defined field and image radius |
| Near chiefs and 976 source rays | finiteSourceSummary and finite.json | Reviewer source500-mm common-object-plane trace |
| 3,075 rays, clipping/containment and zero trim | nativeSummary, native.json, geometry | Five generic-state samples; finite-source test distinct |

The portable verifier checks rounded quantitative text against these computations
and source/data coefficients, and records the actual final analysis hash. The map
does not replace manual semantic/citation review. Stage 3 awaits exact-pair independent
review and final clean packaging; no repository acceptance is implied.

## Stage 4 independent reconciliation

The reviewer re-entered the complete selected source and wrote separate matrix,
scalar, glass, precision and geometry calculations before opening author artifacts.
Original job-card conclusions and current project specifications/methods were visible;
the claim is source-and-method independence, not complete contextual blindness.
The baseline was frozen at 2026-10-08T00:59:39Z with fingerprint
e517a292c61bd614cfa1f9cefa27f5c8e7d5a80cfb4af65a239af41660896350.
Full extraction, original code, results and exposure records remain unchanged.

The consolidated evidence carries exact frozen source/code/result text. Portable
replay verifies fixed source, code and baseline hashes, writes the unmodified
reviewer code and its source input into a new temporary directory, executes it,
and compares the output to the frozen baseline at 1e-12 absolute/relative tolerance.
It then reconciles the independent EFL with the final parsed model. No stored
calculated answer is used as an input to that calculation.

Thirty-five independent source/geometry reconciliation checks pass. The reviewer
separately solved stop-centered rays from the actual source 500-mm object plane,
closing the finite-source coverage gap in the initial generic UI audit. Both native
scripts were also independently re-executed from a clean Stage 3 extraction and
reproduced stable results. Original PDF/card hashes and all 13 archive members
were checked independently. The source L8 sign contradiction, summary precision,
physical plate sequence, material uncertainty, iris calibration and aperture
clipping are explicitly retained. No prescription correction or geometry-policy
exception was required.

The exact pair/prose review and subsequent source-link-only revision review are
hash-bound in evidence.independentPass.finalPairReview. Final archive approval is
separately recorded after clean extraction and replay. Final disposition is
READY_FOR_BATCH only when the complete manifest/results show that gate; integration
remains INTEGRATION_PENDING. The approval covers these exact files and the stated
scope, not an integrated application or an unchanged production prescription.

## 2026-10-09 — Deployment validation

- Independent comparison against the CN 118534627 A page images (PDF pages 8-9): 17 rows, both aspheres and the D15 focus values agree with the data file. An independent paraxial trace gives EFL 21.726 mm against the printed 21.64 mm; the difference follows from the two-decimal indices in Table 1a.
- Thypoch's construction diagram matches Figure 1 in order and shape. It marks L1 and L6 as ED; the patent's L6 is 1.73/54.68, which the analysis already records.
- Metadata: inventors romanized.

## 2026-10-09 — Semi-diameter pass against the patent figure

Source: `patents/CN118534627A.pdf`, PDF page 17, Figure 1 (Example 1, the modeled example; drawn without rays). The embedded raster is 150 ppi; it was profiled at 300 dpi on the lower, leader-free side of the axis (the STOP leader is clear of every element).

Scale: vertex crossings at x = 752 (S1), 1148 (S7), 1261 (S9) and 1465.5 px (S14). S1→S14 is 32.73 mm over 713.5 px = 0.04587 mm/px; S1→S7 is 18.16 mm over 396 px = 0.04586 mm/px; S9→S14 is 9.40 mm over 204.5 px = 0.04597 mm/px. 0.0459 mm/px was used. The last vertex to the image line reads 18.1 mm against the 18.06 mm source back distance.

| Surface | Before | Figure | After | Evidence |
|---|---|---|---|---|
| 1 | 11.6 | 11.6 (254 px, outer corner of L1) | 11.6 | agrees |
| 2 | 9.5 | 8.8 (inner end of L1's rear flat, 190–191 px both sides) | 9.5 | 8 % over; retained, see below |
| 3 / 4 | 8.1 | 8.1 (176 px, square rim) | 8.1 | agrees |
| 5 | 7.2 | 7.4 (161 px, L3 block) | 7.2 | within 3 %; 7.3 was earlier refused at the S4→S5 gap |
| 6 | 7.2 | 5.4 (L4 height 117–118 px; L3's rear flat at z = 16.3 mm is where an R = 12.22 junction of 5.4 mm semi-height ends) | 5.5 | changed, −24 % |
| 7 | 5.5 | 5.4 (117–118 px) | 5.5 | agrees |
| 9 / 10 | 5.2 | 5.05 (110 px) | 5.2 | within 3 % |
| 11 | 6.2 | 6.1 (133 px) | 6.2 | agrees |
| 12 / 13 | 6.5 | 6.1 junction, 6.65 L7 block (145 px) | 6.5 | within 6 % |
| 14A / 15A | 7.7 | 7.7 (168 px) | 7.7 | agrees; aspheres untouched |

One surface changed. Figure 1 draws L4 as a small square-rimmed lens of 5.4 mm semi-height set into the rear of a 7.4 mm L3 block. The earlier 7.2 mm junction drew L4 as a wedge as tall as L3 with no step between them. The junction now takes 5.5 mm, the value surface 7 already carried, so L4 is square-cut at one height as drawn. The renderer has no flat annulus, so L3's rear face is drawn as a taper from 7.2 mm to 5.5 mm instead of the figure's rectangular block; L3 cannot be square while L4 is, because they share the junction.

Retained: surface 2 at 9.5 mm although the figure's concave face ends at 8.8 mm. The difference is close to measurement noise, and surface 2 is the rim that sets the engine's paraxial half-field (40.23°); lowering it would shrink that field. All other rims agree with the figure within 6 %.

Clearance after the change, with the patent's 21.60 mm half image height: the validator reports no errors; no surface clips the f/3.5 axial ray (surface 6: marginal 3.84 mm, full-field chief 3.00 mm at infinity and 2.92 mm at the near station, against 5.5 mm); the full-field chief ray reaches 21.60 mm at 45.39° at infinity and 44.38° at the near station; image-circle floor 0 undersized; traced corner coverage 100 % (44.4°, clear). Engine half-field 40.23° and f/3.50 are unchanged. Rear-group one-sided vignetting of the full-field bundle (surfaces 9–13 and 15A, 14–33 %) is unchanged and kept.

Open limitations: the scratch trace does not resolve the lower full-field ray through the front group, so the extra oblique-bundle trimming at the smaller junction (it now equals surface 7, where the chief ray is 0.8 mm closer to the axis) is not quantified. The asphere sag and departure figures in the analysis are still at 7.7 mm and need no change. The page was viewed at infinity and at the near station after the edit.

## 2026-10-09 — Integration: glass labels and metadata

- Glass: all eight elements stay Unmatched. Table 1a prints nd to two decimals, and a named catalog curve would trace the colour channels at the catalog index (for example 1.883 against the printed 1.88) while the reference trace keeps the printed value, separating green from the reference focus. Abbe-number-exact candidates, recorded for a later reader only: H-ZLaF90 (2.00/25.43), FF8 (1.75/25.05), H-ZLaF68N (1.88/39.22), S-LAL18 class (1.73/54.68), E-FD15 class (1.70/30.05), BACD5 class (1.59/61.25), FCD1 / H-FK61 class (1.50/81.6).
- L1 tagged `apd: "inferred"` (ED class from 1.50/81.60 and the maker's ED marking). The maker's second ED marking at L6 is not tagged: the patent glass there is 1.73/54.68.
- Metadata: `specs` put in catalog form.
