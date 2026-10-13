# Lens Patent — Nikon New Nikkor 20mm f/4 (US 3,549,241 Example 2) — Audit Log

The display name is NIKON NEW NIKKOR 20mm f/4 (set 2026-10-05; file stem and key unchanged). Semi-diameters and glass labels described in the earlier sections were superseded by the 2026-10-05 sections at the end of this log. The rear-group semi-diameters, the L6b glass label and the mount/format fields of those sections were in turn revised by the second review at the very end. Historical Stage1–3 construction records below are retained for provenance. The Stage4 correction register and final gate supersede their candidate readings and approvals.

## Job and reference versions
US3549241A, Example 2, exact stem NikonNikkor20mmf4. Original PDF and job card bytes are retained. The four-field selection was not changed. Current project references are pinned at 3d44a1be91db853725ac841b65a9e228f2c544ef; identities and byte hashes appear in manifest.references. Protocol and dossier contract CHAT-1.0 apply. Read relevant data/analysis specification sections, template, defaults, authoring/integration and glass guides, taxonomy, and formatting configuration. No existing lens prescription seeded extraction.

## Extraction and conventions
Original PDF is image-only. Text extraction returned only page breaks; OCR was used for navigation and followed by rendered inspection of PDF pages 2 and 7 and enlarged claim 2 on page 9. The full twenty-interface prescription is retained, including the two planar active refracting surfaces R11′ and R12′. Infinity symbols are not zero radii or dummy surfaces. D-line reference is explicitly defined at PDF page 7, printed column 3. No asphere or rear plate is published. Printed numbers have not been corrected.
The plane after R7 is R9, because the source excludes R8/d8/n5. Element counting is physical: eleven elements in nine air-separated groups, including two cemented pairs. The patent's L4 and L6 denote components, not individual elements.

## Model transformations
D1 uniformly scales the normalized f=100 prescription by 0.2. This is a similarity model near marketed 20 mm, not evidence of a production dimension. D2 maps plane radii to the project sentinel. D3 inserts a midpoint iris within the Figure 2 gap without changing any adjacent glass station. D4 retains the published d11′ endpoints and solves the paraxial near conjugates; no continuous mechanical focus law or production MFD is inferred.

## Glass review
Native nd/νd coordinates govern the model. Modern coordinate-compatible candidates were checked against the official OHARA product table, Hikari/Nikon 2023 catalog, SCHOTT index and retained HOYA official July 2026 AGF rows. Six project vendor shards served only as indexes. Sumita/CDGM direct primary coordinate coverage is unavailable. S/L prefix distinctions are preserved; no historical supplier/melt is inferred. Candidates and residuals are in evidence and rerun in results. Modern spectral rows are retained as candidate evidence, not transplanted into a historical element without support. Unmatched/class labels deliberately preserve patent-only spectral modeling.

## Numerical and geometry results
Original infinity EFL = 100.011184957477 normalized units; rear-vertex BFD = 170.536892825871; optical vertex track = 192.65. Source nominal EFL 100 and printed BFD 170.5 agree within explicitly recorded accumulated source-rounding bounds. Two separately coded first-order paths, matrix and sequential reduced-angle tracing, agree. A zero-thickness symmetric test gives the analytic 50-unit focal length. Per-surface Petzval terms, standalone element powers and air-separated cemented-group powers are recomputed rather than inferred from signs alone.
All four printed/preferred inequalities are evaluated. The close source state publishes d11′=1.57 and |magnification|=1/25; the remaining numerical conjugates are calculated and retain that distinction.
Physical stop radius and clear apertures are Stage 2 construction tasks. No exact f-number/field clearance is claimed at Stage 1.

## Correction and discrepancy register
OCR confused 12.93 with 12.98, 15.09 with 15.00, and several signs. These are OCR corrections established by rendered table and claim 2 agreement, not changes to the patent. Native source table values remain unchanged.
The selected Example 2 is a 90-degree design and is not explicitly tied to a 35mm production lens; the patent calls Examples III–V the 35mm embodiments. Nikon confirms Ikuo Mori's positive-first 20mm f/4 family but not this numerical table. The selected job label is preserved and this correlation remains unconfirmed.

## Independent review
Not performed here. Dual numerical implementations are author cross-checks, not a fresh Stage 4 source-first audit.

## Gate disposition
Stage 1: source extraction, conventions, dual first-order calculations, conditions, glass confidence limits and prescribed transformations pass CHAT_PREFLIGHT. Original input hashes and clean archive replay are checked by the packaging procedure. READY_FOR_DATA applies only to these bytes and disclosed limitations.

## Pending integration
Real LensDataInput type checking, Prettier, buildLens/validateLensData, project exact tracing, runtime catalog resolution and production render diagnostics are NOT_RUN. Full build, metadata generation, corpus sweeps, repository writes and publication were not performed.

## Stage 2 construction and aperture boundary
The implemented file has exactly one inferred iris, 20 active source interfaces and 11 physical elements / 9 groups. R11′/R12′ are preserved under labels 11p/12p. Surface 19 retains the printed scaled infinity image gap 34.1 mm rather than silently replacing it with the computed 34.107378565174 mm BFD. That rounding residual is not a source correction.
The physical stop semi-diameter is 4.013664640575499 mm. This was calibrated by exact axial tracing of the nominal entrance radius EFL/8. Exact axial F-number is 4.000000, whereas the separately calculated paraxial value is approximately 3.925996. Calibration is neither independent confirmation nor a claim about the production diaphragm. The final model nominalFno uses the exact axial calibrated value.
Clear apertures are inferred, tapered, and geometry-limited. The initial unapproved SD draft failed at R6 (cross-gap intrusion) and R16–R17 (negative edge thickness). R6 was reduced from 8.0 to 7.8 mm, and R16/R17 from 7.0 to 5.7 mm before Stage2 approval. This is a model-inference correction, not a patent correction. The final radii retain the field chief rays and permit realistic marginal vignetting.
Geometry is evaluated at five relative focus states, with exact sphere/vector-Snell 3D pupil grids at infinity, midpoint and the near finite conjugate; six field angles span 0–45 degrees. Every chief ray is transmitted, and sampled bundles are prohibited from first clipping at a cemented internal interface. Marginal clipping and unsuccessful extreme-pupil spherical branches are counted explicitly, not passed as clear rays. This establishes finite sampled containment and viable apertures, not an unvignetted full-field or manufacturing envelope. Exact finite object launches use the Gaussian conjugates for the same current geometry; no exact near aberration performance is certified.
The published 0.432→0.314 mm central split is retained. The calculated near rear gap is 34.908575762007075 mm; object-to-image distance is 566.9178814289962 mm. This is a paraxial endpoint construction using the source magnification, not the production 0.30 m focus specification. Between endpoints the file's slider is an explicitly unsupported-as-mechanism linear interpolation. Five sampled geometry states are checked; no optical-performance claim is made for the full continuum.
The data loader accepts only a strict JSON literal inside the exact TypeScript declaration/import/export wrapper. This supported grammar is intentionally narrower than TypeScript. Executed fixtures reject duplicate keys, an arithmetic expression and trailing executable content. An independently modified radius is detected by prescription comparison. No handwritten stub is described as the real LensDataInput compiler.

## Stage 2 gate disposition
Final parsed-file source transformation equality, structural metadata, element powers, model focus mapping, dual first-order paths, exact aperture calibration, geometry and sampled exact field checks pass. Stage2 package binds the exact data/evidence/verifier/results hashes after clean-extraction replay. READY_FOR_ANALYSIS is CHAT_PREFLIGHT only; repository-only checks remain pending.

## Stage 3 entry and quantitative claim map
The analysis was authored from the Stage2 parsed-file results. No data, prescription, aperture or focus value changed during analysis. The verifier was extended to expose front/rear functional-group matrices, paraxial entrance/exit pupil locations and radii, and explicit diagnostic output on fatal input errors. This invalidated the verifier fingerprint, so the exact same data/evidence revision passed a replacement Stage2 checkpoint before the Stage3 package. All relevant checks and clean extraction were rerun; the original Stage1 snapshot remains intact.

| Analysis or data claim | Executed support | Revision/source authority |
|---|---|---|
| Exact patent/date/inventor/assignee | metadata check and source title-page inspection | P1 p6; structured data |
| Marketing 20mm f/4 and 0.30 m | source fact, not calculated model result | M1 sections III–IV |
| Source f=100, BFD170.5, 90° and f/4 | F01 plus source-system comparison | P1 p7/p9 |
| Uniform scale 0.2; retained plane interfaces and image gap | prescription-fidelity check | D1/D2 and parsed data |
| 11 physical elements, 9 groups | structure check and F06.groups | Final parsed data |
| EFL/BFD/vertex track; retrofocus classification | F06 efl/bfd/track/bfd_over_efl, dual-method check | Final data hash in results |
| Each element first-line nd/νd and name/class | evidence native rows compared with data; F08 and manual prose review | P1 table and final elements |
| All eleven standalone element focal lengths | element-powers + analysis-quantities checks, F06.elements | Final parsed radii/thickness/indices |
| Cemented L4 and L6 net focal lengths | F06.groups (R7–R10, R13–R15) | Actual medium-after-surface indices |
| Glass table nd/νd and residuals | F05 and glass-coordinates | Cited modern vendor candidate rows, not historical identity |
| Petzval sum | F06.petzvalSum, surface-by-surface terms | All actual glass/air/glass changes |
| Published 2.16→1.57; scaled 0.432→0.314 | focus-mapping and source evidence | P1 Fig2(F), table and explanatory paragraph |
| Signed m=-0.04 and near object/image/total distances | F03 plus near-conjugate and focus-mapping | Code solve, explicit paraxial model, not production MFD |
| Iris radius, exact f/4, paraxial f-number | F07.rays[0], aperture-calibration | Inferred iris and exact/ABCD implementations separately |
| Four patent inequalities | F04, conditions check | Native source labels and source-length units |
| Geometric feasibility / chief-ray passage / marginal vignetting | F07.geometry, F07.rays and exact-field-rays | Finite states and pupil grids; not continuum/production assurance |
| Source design rationale | Manual primary-text review | P1 printed columns2–4; expressly not claimed as measured aberration contributions |

Manual interpretation/citation review: component-versus-element language was checked against Figure2 and the physical table. Negative standalone L4a is not misrepresented as the net positive L4 component. No assertion of supplier identity, APO/APD performance, exact continuous focus mechanism, measured distortion, or production coverage was introduced. Inline elemental values match the final data; optical scalar claims come from the final parsed-model computations or explicitly identified source values. Conventional patent/vendor URLs and page/table locators are usable outside the chat.

## Stage 3 disposition
The required all-spherical section sequence, metadata, numeric formatting and disclosures pass. READY_FOR_AUDIT applies only after final nine-file package hash checks and clean-extraction numerical replay. This document remains author construction evidence; the independent source-first Stage4 review has not yet occurred. INTEGRATION_PENDING remains unchanged.


## Stage 4 source-first audit

The independent reviewer completed PassA before receiving the Stage3 candidate path. Original supplied patent rendered pages and fresh numerical code supplied the baseline, not author arrays. Generic controlling references and generic glass catalogs were visible; no author lens files or conclusions were opened before freeze. The byte-level exposure statement, fresh inputs, fresh code, computed outputs, source review and independent vendor-coordinate scan remain under evidence.independentPass.artifacts. Their original freeze map is reproduced without alteration; aggregate fingerprint fae03d30b516aaa3aa3fb752a0c8ecedd97694f2c37000834fa68a58327b144d. Fingerprinting records byte integrity, not a proof of cognitive independence.

Original candidate archive SHA256 b9cd20f25eec5671562a4085234436c74a0b607eef4683b57d1c0656495d516f; original per-file hashes are retained in evidence.independentPass.candidateOriginalHashes. The baseline code is also retained verbatim in the final verifier and rerun in a temporary directory during each portable replay. Source-input equality and stable baseline result equality are verified, then fresh extracted radii/thicknesses/indices are compared with parsed final TypeScript. Baseline contents were not revised to mirror author conclusions.

### Corrections and effects

1. Preferred-condition denominator: candidate evidence/verifier/analysis read 0.8<R1/R3<1.2 and claimed success at1.174694. Enlarged original PDFp7 printedcol3 unmistakably prints R1/R2. Corrected extraction/result/prose gives0.442146698, outside0.8–1.2. The failed source comparison remains in results.comparisons. It is a textual preference, not principal claimed conditionsI/II; preserving the table and explicitly rejecting universal compliance resolves the limited discrepancy. No radii or other optical inputs changed.
2. Glass-confidence wording: candidate element4 called S-LAL12 coordinate compatible (Δνd−0.16); element5 S-BAM4(−0.20); element9 J-LASFH2(+0.58). Independently downloaded HOYA rows support closer alternatives LAC12(1.67790/55.52) and obsolete BAF4(1.605620/43.876260) for elements4/5. Those replace the weaker candidate class names. Element9 now explicitly remains unmatched at1.76684/46.2; J-LASFH2 is a rejected close-identity comparison, not a coordinate identity. Original candidates and residuals remain in evidence. No nd/νd or spectral values changed; historical suppliers remain unproved. The audited compatibility threshold is1e-4/0.15 for this comparison, distinct from broad runtime fallback tolerances.
3. Production correlation strengthened: Nikon Tale20 Fig2 visibly has an unsplit central positive lens and10 elements/8 groups, versus selected ExampleII11/9. The difference is stated in analysis/evidence. Nikon Tale86 explicitly dates the product to1974, replacing the less direct date inference. Job target and exact ExampleII remain unchanged. No mount/format fields were fabricated.
4. Verifier coverage strengthened: original material-coordinate checks were evidence-only. Final checks compare actual element nd/νd/index-reference/labels with source decisions, test var/base endpoint equality and nonnegative values, verify downstream cementedIDs and annotation references, and compare every element analysis first-line to final data. No production-runtime execution is implied.

### Independent numerical and geometry reconciliation

Fresh native source trace: EFL100.011184957477, BFD170.536892825871, vertex track192.65; scaled model20.002236991495,34.107378565174,38.53mm. Matrix/sequential agreement is below3e-14. Native published close split1.57 atβ=−0.04 gives scaled image gap34.908575762007mm and object/image distance566.917881428996mm. The final source arrays, all standalone powers, cemented net powers, principal planes, Petzval and finite conjugates agree with the frozen independent computation. Main conditionsI/II pass. Source-preference failure is separate and retained.

All spherical SDs remain unchanged. An additional independently written analytic geometry check evaluates endpoint extrema of spherical sag differences across each shared radial band; monotonicity makes these true extrema for these spherical pairs. It agrees with the author's dense radial checks. Minimum element thickness is0.055294691mm; largest actual spherical rim angle58.603043°, below default~64.2°. Five focus states preserve clearance and positive thickness. No zero-thickness cement layer, inactive plane omission or hidden aperture enlargement was introduced.

An independent angle-based Snell/sphere-intersection implementation and separate marginal-height solve recover entrance height2.500279623937mm and inferred exact f/4; its hit coordinates agree with the retained author's vector path within2.85e-14mm. This confirms the computation, not the physical iris size: SD4.013664640575499mm was intentionally calibrated. Paraxial f-number remains3.925996, explicitly distinguished. Physical stop position is inferred at gap midpoint and therefore pupil coordinates are conditional model outputs.

The retained exact 3D aiming code was inspected and rerun. At45° infinity/midpoint grids transmit15/25, clip9 and leave1 unsuccessful spherical branch; close transmits18, clips6 and leaves1 unsuccessful branch. All chiefs pass; no tested ray first clips a cemented internal interface. Through35° all25 sampled rays pass at all three tested focus states;40° gives23/25. This is sampled clearance with disclosed edge vignetting, not an unvignetted full-field assertion or production renderer validation. No published optical values changed.

### Final claim map and manual review

- Identity/correlation: sourceP1, NikonM1/M2 and independently viewed production Fig2; counts and different central split manually checked.
- Source and implemented EFL/BFD/track/powers/Petzval/cardinals: F02/F06 and independentBaseline.regenerated; exact final data hash in results.
- Near state and modeled distances: F03 plus frozen publishedNearGap; raw source endpoints retained, continuous interpolation explicitly unvalidated as a mechanism.
- Glass coordinates/class naming: F05 plus independent vendor rows in evidence; failed J-LASFH2 identity retained as comparison, unmatched disposition prevents spectral grafting.
- Main and preferred conditions: F04; corrected denominator and failure visible in results.comparisons and analysis.
- Aperture/pupils: F07 and independent F09; source-unpublished inferred radius and midpoint station explicitly disclosed.
- SD geometry/exact sampled field: geometry/exact-field-rays/independent-geometry-extrema and manual code review; actual runtime/render not claimed.

Manual third-person prose/citation review completed on the corrected pair. All mandatory CHAT_PREFLIGHT checks were rerun after the material wording/extraction changes. Stage2 construction and Stage3 analysis gates were reopened and passed on this final revision; earlier approvals were not silently transferred. Real TypeScript, Prettier, buildLens, validateLensData, runtime catalog resolution, production renderer and full build remain NOT_RUN at integration scope. No Git mutation, corpus sweep, build, integration or publication occurred.

### Final disposition

READY_FOR_BATCH for the exact final nine-file portable dossier, with INTEGRATION_PENDING. This means source/model/preflight readiness only. Remaining limitations: family-level production correlation, unmatched historical glass, unpublished iris/SDs, finite sampling and illustrative interpolation. The two explicit failed source/candidate comparisons have supported nonblocking resolutions; they have not been relabeled as numerical agreement.

## 2026-10-05 — Semi-diameter figure pass

Source: patents/US_3549241_A.pdf, PDF page 2 (drawing sheet 2), Fig. 2(A), the cross-section of Embodiment II. The scan is a 1-bit raster at about 281 dpi; it was measured on 300 and 600 dpi renders.

Scale derivation: the axis was located from the dash-dot line and the vertex crossings read beside it. R1 crosses at x = 824 px and R19 at x = 1689.5 px on the 300 dpi page, 865.5 px for the scaled 38.53 mm vertex track, giving 0.0445 mm per pixel (22.46 px/mm). Intermediate vertices predicted from the prescription land within 1–8 px of the drawn ones (R4 912 vs 911, R10 1338 vs 1339, R14 1565 vs 1565, R16 1627 vs 1625; R7 1140 vs 1147 is the worst), so the drawing is to scale along the axis. Rims were read as the mean of the upper and lower half of each element, excluding the group brackets, leader lines, the L2/L3 mounting flats and the stop bars.

| Surface(s) | Before (mm) | Figure (mm) | After (mm) | Evidence and reason |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 16.0 | 14.8 (height); about 16.3 from the drawn sag of R1 | 16.0 | Within 8% of the drawn height; the drawn sag and the thin edge support 16. The 45.5° chief ray needs 14.87 / 14.26 mm and the 47.6° chief ray 15.91 / 15.52 mm. Unchanged. |
| 3 (L2 front) | 14.5 | 12.1 | 12.8 | Figure, raised 0.7 mm so the chief ray clears to 47.6° (12.66 mm). |
| 4 (L2 rear) | 11.0 | 9.4 | 11.0 | Not moved: the 45.5° chief ray needs 9.64 mm, so the drawn rim would block the published field, and this surface sets the engine half-field (40.64°), which would shrink with any reduction. Remains 17% larger than drawn. |
| 5 (L3 front) | 10.5 | 8.7 | 9.0 | Figure; 47.6° chief ray needs 8.73 mm. |
| 6 (L3 rear) | 7.8 | 6.5 | 7.3 | Toward the figure; the 45.5° chief ray needs 6.59 mm and the paraxial half-field floor at 40.64° is 7.18 mm. |
| 7 (L4a front) | 8.2 | 6.4 | 6.6 | Figure. |
| 9 (L4 cement) | 8.2 | 5.5 | 5.7 | Figure (outer diameter of L4b where it meets L4a). |
| 10 (L4b rear) | 8.2 | 4.2 (4.4 upper, 3.6 lower, inside the chamfer) | 4.5 | Figure, floored above the 4.13 mm axial marginal ray. |
| 11, 11p, 12p, 12 (L5a, L5b) | 6.5 | 4.6 | 4.7 | Figure; axial marginal ray 4.20–4.26 mm. |
| STO | 4.0137 | about 4.2 (gap between the stop bars) | 4.0137 | Calibrated value kept; the drawing agrees. |
| 13, 14, 15 (L6) | 6.3 | 4.5 | 4.5 | Figure; axial marginal ray 3.90–4.08 mm. |
| 16, 17 (L7) | 5.7 | 4.9 | 4.9 | Figure; axial marginal ray 4.21–4.28 mm. |
| 18, 19 (L8) | 7.0 | 5.8 | 5.8 | Figure; axial marginal ray 4.32–4.37 mm. |

Results on the edited file:

- The repo surface validator reports no validation errors (the only focus-dependent lens gap lies between the two plane faces of L5, so the close state adds no rim or clearance case). EFL 20.0022 mm, BFD 34.1074 mm and every element focal length are identical before and after (the probe output is byte-identical); the engine still derives f/4 and a stop radius of 4.01366 mm.
- The engine half-field is unchanged at 40.64° (still set by surface 4).
- The image-circle and field-coverage audits skip this lens because it declares no image format. Run on scratch copies with a 40 mm image circle and with the 135 format, both audits report 100% coverage before and after (45.5° to 20.00 mm, and 47.6° to 21.65 mm, chief ray clear).
- The scratch clear-aperture probe's Newton intersection does not converge on the steep R4/R6 surfaces beyond about 42° for this lens (it reports no chief ray at 45° both before and after the change), so the full-field result comes from an exact analytic sphere-intersection trace instead. That trace finds no axial clipping and no blocked chief ray through 47.6°. Share of the stop height passing all rims at f/4, infinity, before → after: 10° 100% → 97%, 20° 100% → 87%, 30° 100% → 73%, 35° 100% → 63%, 40° 95% → 54%, 45° 63% → 40%, 45.5° (Y = 20.0 mm) 59% → 38%, 47.6° (Y = 21.65 mm) 41% → 23%. At the close state the 45° figure is 41%.
- The local render at infinity and at close focus now shows the drawn proportions: a tall L1, L2 and L3 stepping down, a compact L4 block tapering toward the stop, and L5–L8 only slightly larger than the axial beam.

Open limitations:

- The vignetting increase is a consequence of following the drawing; the patent publishes no clear apertures or illumination data, so neither the earlier ray-envelope sizes nor these figure sizes are confirmed.
- L1 and the rear of L2 remain larger than drawn (8% and 17%) for the chief-ray and half-field reasons above. The engine half-field (40.64°) is below the published 45° because the paraxial estimate is limited by surface 4, whose sd cannot exceed 0.9 R = 11.8 mm; declaring an image circle would let the analysis field follow the real chief ray, but the patent publishes an angle, not an image diameter, so none was added.
- The drawn step between L4a and L4b and the chamfers on L4b, L6a and the L2/L3 flats are not representable; the model shows tapered rims.
- 135-format coverage is not claimed: the chief ray reaches 21.65 mm at 47.6° with 23% of the stop height, and the patent's data stop at 45°. imageFormat and lensMounts remain omitted.

## 2026-10-05 — Glass labels, display name and presentation

- Glass labels: ten elements were relabelled from the forced-fallback wording to catalog-equivalent class labels; stored nd/νd are unchanged patent values. The resolver now selects J-SK16 (L1, Δνd −0.05), J-LAK14 (L2, L3, −0.08), LAC12 (L4a, +0.02), S-BAM4 (L4b, −0.19), J-F5 (L5a, L5b, +0.03), J-SF14 (L6a, +0.08), J-BK7A (L7, −0.07) and S-BAM12 (L8, −0.13); all are within 2e-6 in nd. L6b stays unmatched: J-LASFH2 matches nd but its νd is 46.78 against the patent's 46.2. Ten of eleven elements now use a catalog dispersion curve. The labels name coordinate classes; the historical supplier is unconfirmed. The earlier "Glass review" statement that unmatched labels were kept deliberately is superseded.
- Display name: NIKON NIKKOR 20mm f/4 became NIKON NEW NIKKOR 20mm f/4, after the 1974 production lens the patent family is correlated with. The caveat that Example 2 has 11 elements in 9 groups against the production lens's 10 in 8 is kept in the subtitle, header and analysis.
- Presentation: the data file was converted from a JSON-style literal to the house layout (boxed header with scaling, surface-label, stop, semi-diameter, correlation and glass notes; one surface per line). Float noise from the 0.2 scaling was trimmed (for example 31.900000000000002 → 31.9); a comparison of every R, d, nd, element nd/νd/fl, variable gap, closeFocusM and focalLengthDesign found no difference above 1e-9. The specs line, subtitle and focus description were rewritten as plain reader-facing statements.
- The prescription was not re-read row by row in this pass; the earlier audit's table check and the EFL/BFD agreement with the patent (100.011 and 170.537 native against the printed 100 and 170.5) stand.

## 2026-10-05 — Second review (site diagram, labels, travel, glass, metadata)

Independent second review of the lens as rendered on the local site against US 3,549,241 (image-only PDF; sheet 2 for Fig. 2(A)/(B)/(F), page 7 for the Embodiment II table and the close-range text).

### Is Fig. 2(A) to scale, and are its rims clear apertures?

The scaled prescription was overlaid on a 600 dpi crop of Fig. 2(A) at 44.95 px/mm (first vertex to last vertex, 38.53 mm), with a 0.73° scan skew removed. The overlaid spheres follow the drawn R1–R6, R9, R11–R15, R17 and R19 over their whole drawn height, and the drawn edge thicknesses of L5a, L5b and L8 agree with the prescription at the drawn heights (for example L5a 2.2 mm drawn against 2.1 mm computed). Vertex positions agree within 0.3 mm (L3 and L4 are drawn about 0.3 mm rearward). The figure is therefore a scale drawing of the surfaces, radially as well as axially.

Its rim heights are nevertheless not clear apertures behind L4a, for three reasons found in the patent itself:

| Test | Result |
|---|---|
| Drawn rear rims against the f/4 axial marginal ray | L4b rear 4.2 mm drawn / 4.13 mm ray; L5 4.6 / 4.20–4.26; L6 4.5 / 3.90–4.08; L7 4.9 / 4.21–4.28; L8 5.8 / 4.32–4.37. The axial beam passes, with only 2–14% margin from L4b to L7 (33% on L8). |
| Drawn rims against the 45° chief ray | Passes behind L3 (chief height below 4 mm in L5–L8). In front, the drawn L2 rear rim (9.4 mm) is below the 45.5° chief-ray height (9.64 mm) and the drawn L1 rim (14.8–15.0 mm) is at the chief-ray height (14.87 mm), so the drawn front rims would leave no bundle around the chief ray at the published field edge. |
| Drawn L1 edge | Drawn as a knife edge at 15.0 mm; the two prescription spheres meet at 17.3 mm and are still 0.85 mm apart at 15.0 mm. |
| Fig. 2(B) coma plot | The 35° and 45° coma curves are drawn from about −0.86 to +0.89 of the full-aperture abscissa. With the drawn rear rims the traced meridional pupil is only 63% at 35° and 40% at 45° (87% at 20°), which cannot carry those curves. |

Conclusion: the surfaces are to scale but the outlines are draughtsman's element outlines, and following them behind L4a cost real throughput that the patent's own aberration plot contradicts. The rear group was returned to ray-supported rims, keeping the drawn order of heights.

| Surface(s) | First pass (mm) | Now (mm) | f/4 axial ray (mm) | Full f/4 bundle at 30° (mm) | Reason |
|---|---:|---:|---:|---:|---|
| 1–7 (L1–L4a front) | 16.0, 16.0, 12.8, 11.0, 9.0, 7.3, 6.6 | unchanged | 2.4–3.2 | 11.7, 10.9, 10.0, 8.6, 7.6, 6.5, 6.4 | Figure-based values already pass the full bundle to 30°; kept. |
| 9 (L4 cement) | 5.7 | 6.3 | 3.42 | 6.22 | Keeps the drawn step down from L4a. |
| 10 (L4b rear) | 4.5 | 6.1 | 4.13 | 6.08 | Was 9% above the axial ray. |
| 11, 11p, 12p, 12 (L5a, L5b) | 4.7 | 6.0 | 4.20–4.26 | 5.97–5.15 | Drawn as one common height; kept common. |
| STO | 4.01366 | unchanged | 4.01 | — | Calibrated to f/4.000; the engine still derives f/4 and a 4.01366 mm stop radius. |
| 13, 14, 15 (L6) | 4.5 | 5.1 | 3.90–4.08 | 4.18–5.07 | Smallest group, as drawn. |
| 16, 17 (L7) | 4.9 | 5.4 | 4.21–4.28 | 5.34–5.41 | Edge thickness 0.17 mm at 5.4 mm; the pre-figure 5.7 mm left 0.06 mm. |
| 18, 19 (L8) | 5.8 | 6.2 | 4.32–4.37 | 5.88–6.01 | L8 above L7, as drawn. |

Results on the edited file: the surface validator reports no errors; an exact analytic meridional trace gives a meridional pupil of 100% through 30°, 89% at 35° (−0.84 to +0.93 of the stop height, close to the extent of the Fig. 2(B) curves), 71% at 40°, 50% at 45°, 47% at 45.5° (20.0 mm) and 30% at 47.6° (21.65 mm), with the chief ray clear throughout and the same figures at the close state (100% at 30°, 89% at 35°, 50% at 45°). The image-circle audit, now active because the format is declared, reports 100% (47.6° to 21.65 mm of 21.65 mm, corner clear) and the field-coverage audit reports the single station at ≥99%. The scratch clear-aperture probe still fails to find the chief ray beyond about 42° for this lens (solver limitation noted in the first pass); it flags no axial clipping. EFL 20.0022 mm, BFD 34.1074 mm and the element focal lengths are unchanged. The local render shows the tall L1, the L2/L3 steps and a compact L4–L8 block that tapers to the stop; L5–L8 are now visibly taller than the stop opening rather than nearly equal to it, which is the one intended departure from the drawing.

### Labels, travel and prescription

The Embodiment II table was re-read from a rendered page: all 18 radii, 18 thicknesses and 11 index/Abbe pairs equal the stored values after the 0.2 scale (n7 is printed with a damaged digit and equals n7′ = 1.60342). Element type strings agree with the radius signs and focal-length signs, the two cemented components are L4 (surfaces 7–10) and L6 (13–15), and the stop marker sits in the R12–R13 gap as drawn.

Focus: the patent states that the air space between the two halves of L5 "is shortened" as the lens is focused closer, and Fig. 2(F) gives d11′ = 1.57 at 1/25 against 2.16 at infinity. The stored rows are [infinity, close]: split gap 0.432 → 0.314 mm and image gap 34.1 → 34.9086 mm (growing, as for a lens moved forward). The probe finds that the close state focuses at 0.562 m object-to-image at magnification −0.0404 with the image plane held at the infinity offset, consistent with the paraxial 0.567 m at −0.04. No change to the travel.

### Glass

L6b (1.76684 / 46.2) was relabelled from the forced-fallback wording to the nearest catalog glass, J-LASFH2 (HIKARI, catalog 1.76684 / 46.78: nd equal to five decimals, Δνd +0.58), with the residual stated in the label and the analysis. It is a nearest-curve stand-in, not a coordinate identity. All eleven elements now resolve to a catalog dispersion curve. The HOYA (including obsolete) and Sumita vendor files hold nothing closer (nearest M-TAF101, 1.76802 / 49.24). The patent prints no partial-dispersion data.

### Metadata and name

| Field | Before | Now | Basis |
|---|---|---|---|
| name | NIKON NEW NIKKOR 20mm f/4 | unchanged | Nikon's Thousand and One Nights No. 86 names "the New Nikkor 20mm f/4 … in 1974"; No. 20 captions it "(new) Nikkor Auto 20mm f/4" and dates the Ai Nikkor re-issue to 1977. The lens barrel carries only "NIKKOR 20mm 1:4", which would not separate it from the Ai version or from other 20 mm Nikkors, and "Auto" appears only in the Tale 20 translation, so Nikon's Tale 86 form is the most accurate unambiguous one. |
| lensMounts, imageFormat | omitted | nikon-f, 135-full-frame | Production lens. The patent example publishes 90° (20.0 mm at this scale); the 135 corner needs about 94.5°, stated in the header and analysis. |
| maxFstop, fstopSeries | 16 (default), ends at 16 | 22, ends at 22 | Production minimum aperture f/22. Nikon's two Tales do not print the aperture range; f/22 is from the lens's aperture ring as described in secondary sources. |
| focalLengthDesign | 20.002236991495387 | 20.0022 | Float noise. |
| closeFocusM | 0.5669178814289962 | 0.567 | Float noise; calculated conjugate of the published 1/25 state. |
| var 19 close | 34.908575762007075 | 34.908576 | Float noise. |
| element fl | 14–17 digits | 3 decimals | Float noise; values agree with the recomputed thick-lens focal lengths. |

Not added: an image-circle value and a diaphragm blade count (Nikon's pages publish neither) and a teleconverter flag (the sibling K-era 28 mm entry carries none). Patent number, inventor, assignee (Nippon Kogaku K.K.), year 1970, 11 elements / 9 groups and the legend flags (no aspheres, no anomalous-dispersion claim) were checked and left as they were.

Open limits: the rear rims are ray-derived, not published; the choice of an unvignetted field of 30° is a modelling judgement anchored on Fig. 2(B). The engine's paraxial half-field estimate remains 40.64° (set by surface 4). The f/22 minimum aperture lacks a Nikon primary citation.
