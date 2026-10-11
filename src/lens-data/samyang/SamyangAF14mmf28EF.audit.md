# Audit — Samyang AF 14mm F2.8 EF

## Current disposition and revision

Date: 2026-10-08. Package status at hand-off: ready for the batch, integration pending (closed: since integrated into `src/lens-data/samyang/`; see the dated sections at the end).

This is KR101918210B1 Example 3, Tables 7–9, Figure 7, output stem SamyangAF14mmf28EF. No alternative example, scaling, shared engine/specification change or repository publication is part of this work. The original card and PDF remain byte-identical. The former Stage1 hold remains preserved separately; it was reopened only after the explicit owner/maintainer exception below.

Data SHA256 of the package as delivered on 2026-10-08 (the file has been edited since): 6903decf5245499f283ba1a673b069ff2ca92b8ffb103f91a646bc18706e6fd7.

## Source extraction, convention and authority

Original B PDF SHA256: 4ee7eb1bb37c39968354cc8ae8210524e9cb8965666335ffa9c35a0c7a673028. Original card SHA256: 3319016fa766dcca8739cc4a4ab18fa8e724f153edcc8d0eef7319ca060152d0. Source A/B Tables 7–9 have the same 47 selected numerical rows; this is bounded table equality, not complete-document identity. B pages 12, 16–17 and 24 were rendered and inspected. The sibling formula was independently downloaded and visually checked.

All 29 source rows remain in evidence, including ST18, OD3 plate 27–28, IMG29 and signed D5. Camera-side plate thickness 2.500 mm, nd 1.51680 and Vd 64.20 are retained in rearPlates; it is traced but excluded from the manufacturer's 15 lenses/10 components. No drop-in filter or physical plate motion is inferred. Source light travels object-left to image-right; positive R has its center to the right; nd/Vd are d-line coordinates. The ray-fan third wavelength is 479.9100 nm, not canonical F486.13 nm.

Equation 6 is blank in controlling A/B. The separately approved mapping uses KR101933088B1, page 11 Equation 5: standard conic K plus A..F multiplying Y4..Y14. All four original coefficient columns and signs are unchanged. This is explicitly authorized extrapolation, not recovery of the missing controlling equation and not two sourceErrata evidence kinds.

## Fixed image-reference exception

Modelling decision recorded 2026-10-08: the image plane is placed at the fixed D4+D5 = 0.500000 mm behind the plate, with the printed D4/D5 distances and the resulting defocus kept on record. The plate does not move.

The decision covers a limited model, not a patent correction. Literal D4 remains 0.495503/0.514995/0.572628 mm and D5 remains +0.004497/−0.014995/−0.072628 mm. Plate vertices remain z127.097060/129.597060 mm from S1. The modeled reference is z130.097060 mm. Negative D5 is not propagated as physical air, and D3 stays 36.200000 mm.

| State | Literal IMG z (mm) | Model z (mm) | Gaussian defocus to model (mm) |
|---|---:|---:|---:|
| infinity | 130.092563 | 130.097060 | -0.019252870 |
| MGA=-1/30 | 130.112055 | 130.097060 | +0.003863574 |
| TL=0.2m | 130.169688 | 130.097060 | +0.075972691 |

## Numerical reconstruction and source discrepancies

Independent scalar reduced-angle and ABCD computations agree, and a small exact ray approaches the Gaussian result. Infinity EFL is 14.1907821471 mm versus printed 14.194604 mm. The −0.0038218529 mm difference remains visible: the printed six-decimal result is not reproduced. A separate rounded-source consistency check uses 0.007 mm, based on summed half-last-digit sensitivity 0.006576 mm. No prescription value was fitted.

The bare-lens BFD is 38.3289538814 mm from S26. With the source plate, the Gaussian physical BFD is 39.1807471304 mm from S26. S1–S26 track is 90.897060 mm, and the approved total reference track is 130.097060 mm. Surface Petzval sum is +0.00518138510909 mm^-1. The full per-interface and cardinal results remain executable in results.

Unresolved source statements are retained, not repaired:
- G1=S1–13 computes positive +25.111991061 mm, contrary to the generic negative-power description.
- Table10 f1st345.936 computes348.460392178; fAF99.513 computes98.643520496; fG3 118.196 computes115.047351021 mm. Their differences exceed source rounding.
- Equation5's Table10 D/y=12.08/21.7=0.556682 falls outside0.65–0.75. The published S7 radius would give a passing ratio, but has not been substituted for Table10.
- The unpublished draft extraction bounds for Eq1 and Eq2 were corrected to3–6.5 and0.15–0.4 after re-reading the original. These are author transcription corrections, not source corrections.

## Focus and aperture

All three source focus states are retained: D1/D2=5.334159/2.254901,4.640341/2.948719,2.107898/5.481162 mm. Their sum remains7.589060 mm. The cemented triplet L8–L10 moves3.226261 mm objectward at the near state. The original first-surface object distances405.430516 and69.902940 mm are explicitly supplied as finiteConjugates. The middle normalized keyframe is0.3734634946231042, measured against the approved fixed-reference object distance0.535527576 m. Interpolated gaps and sampled intermediate fields are illustrative, not a published mechanical law or certified intermediate MTF state.

Only infinity Fno2.851 calibrates the inferred physical iris. Exact entrance radius2.48873766172 mm maps to stop radius7.18892986451 mm. This agreement is calibration, not independent evidence of a physical diaphragm diameter. Native finite Fno2.853/2.938 remain in evidence and analysis. Their convention and any iris schedule are not established. The separate exact image-space 1/(2sin u) and finite incoming-radius ratios are not substituted for those labels. Full-stop on-axis rays at each native object distance clear the modeled rims.

## Semi-diameters, geometry and field checks

Only S7/S8 radii15.06/12.31 mm are published. All others are labeled inferred, using exact ray clearance and broad Figure7/manufacturer-section proportions. Initial diagram estimates that violated sphere slopes or inter-element clearance were rejected, without changing published apertures. The final asymmetric front negative rims reflect mathematical limits and ray needs, not measured bevel dimensions. No default rule was relaxed: gapSagFrac remains0.90.

Portable validation checks all shared radial bands with1001 samples at34 focus positions, including native states. An independent reviewer additionally used derivative-root extrema over42 focus samples. Every glass thickness stays positive, conic domains are valid, actual rim slopes remain below the current limit, and all air bands satisfy the default intrusion fraction. The tightest band is S6–S7, with intrusion89.5143% and clearance0.454869 mm. Maximum rim angle is62.9964°. Minimum shared-band glass thickness is0.700000 mm.

Two separately implemented exact 3D tracers, portable vector Snell/analytic sphere/conic Newton and actual project helpers, agree on all30 state/field sample classifications (7710 rays). Every sampled chief ray clears the native field. All sampled bundles through75% of each state's native half-field clear. At the outermost field,12/257 rays clip at infinity,8/257 at the native middle, and0/257 at near; intermediate states have10/257 and1/257 clipped. These are finite disk samples, not radiometric throughput measurements. Small edge vignetting at inferred S6/S9 is retained; full-field bundle containment and continuum coverage are not claimed. No real ray intersection/TIR failure occurred.

The source infinity half-field57.871° is distinct from the runtime tracing-half-field safety clamp used for diagram bundles. Source-field tests used the actual projection/chief-ray interfaces independently of the diagram clamp. The actual production element-path silhouette was rendered and inspected; the element sequence and moving-triplet topology agree with the primary section. Maximum hidden production render trim is0 mm at the six tested focus states. This is actual geometry/render-path verification, not a browser/UI test.

## Glass and spectral provenance

Fourteen unique nd/Vd coordinates were searched against freshly retrieved HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM sources. The reviewed manufacturer bytes and candidate residuals are retained. Thirteen physical lens elements have selected HOYA-equivalent nC/nF/ng anchors evaluated from primary AGF coefficients; each anchor is independently reproduced to5e-12. They are catalog approximations, not patent-published lines or measured production melts. They also cover FD110, absent from the frozen runtime catalog. No shared catalog was edited.

L4 nd1.77271/Vd49.70 and L13 nd1.55352/Vd71.5 remain explicitly Unmatched at source precision and use Abbe approximation. TAF1 differs−0.00021/−0.07 and MP/MC-FCD500-20 differs0/+0.22 respectively; neither is silently assigned as an exact identity. The plate uses a BSC7 coordinate-compatible catalog path. No APO or measured chromatic/MTF performance claim is made.

## Actual project checks and limits

Fresh main remains b7deb22166991aacdbdcae249f67f4932cb28b6b, includingPR770. The executed runtime loaded136 unchanged engine/reference modules, verified against current Git blob identities. Actual buildLens, validateLensData, focused LensDataInput type checking with TypeScript5.9.3, TypeScript AST/malformed-fixture checking, Prettier3.8.1 formatting, runtime glass-quality inspection and production render diagnostics were run. Execution reports bind the exact current data SHA256. Python replay does not pretend to re-execute those tools; it separately reproduces the source/model numerics, geometry and3D ray samples.

No generate:metadata, full-corpus sweep, full build/prerender, browser/UI test, Git write, public push, PR or deployment was performed. Those remain integration tasks (closed: the package has since been integrated into the repository, where those checks run). Source-comparison failures and unestablished finite F-number correspondence remain visible in comparisons; they are not renamed successful reproductions.

## Independent baseline and final audit

The original independent source baseline remains byte-identical, fingerprint899c6670286e0d14e6119e8be0a19b07a089e7067b0bff2200d7437f09708e9d. Its exposure statement is preserved. The reviewer independently rechecked the candidate's source mapping, continuous radial extrema, spectral anchors and meridional chief/full-stop rays before analysis. Final Stage4 reconciliation binds the final data and analysis hashes in evidence.finalIndependentReview. The independent portable reviewer has 21 passing controls, and its fresh numerical output is re-executed by the main verifier. No earlier source-only review is presented as a finished model audit.

## Quantitative claim map

- EFL/cardinals/BFD/Petzval: results.sourceModel.states and implementedModel.states; original Table7.
- Per-element powers and signs: implementedModel.states[0].standaloneElements; original boundaries retained.
- Focus motion and reference-plane statements: sourceModel.focusMotion, sourceModel.states, implementedModel.states; Tables7/9 and explicit exception.
- Conditions: sourceModel.conditions and results.comparisons; Equations1–5 andTable10.
- Glass properties: evidence.spectralSelections and implementedModel.spectralChecks; primary AGF rows.
- Aspheric equation/coefficients and apertures: evidence.conventions/rawPrescription; approved sibling formula and source Table8/H-Ape.
- Geometry/field claims: implementedModel.geometry/rays, runtimeEvidence and independent candidate checks.
- Metadata/product correlation: evidence.productCorrelation, official EF product technical table/section. Production association is inferred, not exact-prescription confirmation.

## Portable replay

Run python SamyangAF14mmf28EF.verify.py --package-dir <directory> --output <external-results.json>. The verifier reads the actual TypeScript, refuses unsupported or malformed literal syntax, replays unchanged independent source code, and tests intentional wrong-sign and gap-collapse mutations. Required check failures return nonzero. Clean extraction must reproduce stable results without overwriting packaged results. See the manifest for exact members, hashes, checkpoints and pending integration.

## Final independent corrections and acceptance

The final reviewer corrected three analysis statements without changing numerical data: L14 standalone power depends on its curvatures and thickness, not its conjugate position; L2's inferred dimensions are clear semi-diameters, not curvature radii; and the old-card revision history was removed from the clean L1 discussion. The original analysis candidate is retained in supporting evidence, and its hash is recorded in evidence.originalStage3Candidate. The corrected pair was rechecked before Stage4.

Final data SHA256: 6903decf5245499f283ba1a673b069ff2ca92b8ffb103f91a646bc18706e6fd7.
Final analysis SHA256: dd47ec5eaf256b92991d35f47d6e73ce85fbad156d37406a9e2ab79c112cd5b6.
Independent reviewer code SHA256: 27dcd8fa2e03c6abec7fb5fd668db5c286909d7cbb5dfa8de59e726e16ee787a.
Independent reviewer results SHA256: 1f20bb9277c4aa7a7b0ee9b8ae4ac85fc226a94cca449dd5a7d18ed69158a127.

The reviewer freshly rechecked the official EF product table and optical section, reviewed the full analysis and source exceptions, and found no essential undisclosed discrepancy. Main-verifier and independent-verifier outputs are reproducible from the final 14-file dossier. Per-lens readiness does not grant repository integration or publication (closed: integration followed; see the dated sections below).

## 2026-10-11 — Semi-diameter pass against the patent figure

Source: `patents/KR101918210B1.pdf`, PDF page 24, 도면7 (system 100-3, Example 3): upper panel infinity, lower panel near. The sheet is a bilevel raster of about 366 ppi with the axis horizontal (page rows 1204 and 2358.5 at 366 dpi). Table 7 (page 16) prints apertures for S7 and S8 only (H-Ape 15.06 / 12.31); every other value is an estimate. Tables 7–9 were re-read against the data file while locating the sheet and agree.

Axial scale. Twenty-four vertex crossings were read beside the axis. S1 sits at x = 506.5 px, S13 at 1172.5 and S26 at 1618.0: 1111.5 px for 90.897 mm, 12.228 px/mm (S1–S13 12.21, S13–S26 12.26). Every vertex falls within 6 px (0.5 mm) of the prescription, and the lower panel shows G2 displaced 42 px (3.4 mm) for the 3.226 mm of Table 9.

Transverse scale. The sheet is drawn about 5 % tighter across the axis than along it, so heights are not read with the axial scale. Three independent readings agree:

- Least-squares fits of the drawn spherical profiles to their radii, axial scale fixed: S4 11.55, S5 11.49, S6 11.7, S10 11.9, S15 11.4, S16 11.8, S20 12.0, S25 11.6 px/mm, mean 11.7.
- The published S7 height 15.06 mm is drawn at 175 px: 11.62 px/mm.
- Rim corners located by sag alone, which needs only the axial scale: S4 ends at 19.10 mm where it is drawn at 222 px, S6 at 15.35 mm (179 px), S10 and S11 at 12.9 and 13.1 mm (151 px): 11.5–11.7 px/mm.

Heights below use 11.62 px/mm (0.0861 mm/px), that is, the published S7 height as the ruler. Read with the axial scale every rim would come out 5 % lower and L1 (36.2 mm) would sit below the 36.71 mm the full-field chief ray needs at S1.

Rim heights are the outermost ink less half of the 4–5 px line width, taken on the four half-panels (both sides of both panels); the clean readings agree within 1 px. G2 is read on the upper panel, because the focus-travel lines cross it in the lower one.

| Element | Surfaces | Stored | Figure (px) | Figure (mm) | Stored / figure | Disposition |
|---|---|---:|---:|---:|---:|---|
| L1 | 1, 2 | 39 | 442.5 | 38.1 | 1.02 | retained; square-cut as drawn |
| L2 front | 3 | 24.5 | 282 | 24.3 | 1.01 | retained |
| L2 rear | 4 | 19.9 | 222 (curve end) | 19.1 | 1.04 | retained, within noise |
| L3 front | 5 | 18.8 | 219 | 18.8 | 1.00 | retained |
| L3 rear | 6 | 15.03 | 179 (curve end) | 15.4 | 0.98 | retained; 15.03 is the most the default cross-gap rule admits against S7 |
| L4 front | 7A | 15.06 | 175 | 15.06 | — | published; the ruler |
| L4 rear | 8A | 12.31 | curve carried to the L4 rim | — | — | published; the sheet shows no step at 12.31 |
| L5 front | 9 | 11.8 | 151 | 13.0 | 0.91 | retained; capped by the cross-gap rule (below) |
| L5–L6 junction, L6 rear | 10, 11 | 12.2 | 151 | 13.0 | 0.94 | retained, within noise, kept with S9 |
| L7 | 12, 13 | 10.2 | 114.5 | 9.85 | 1.04 | retained |
| L8–L10 | 14–17 | 9 | 104 | 8.95 | 1.01 | retained |
| L11–L12 | 19–21 | 7.8 | 93.5 | 8.05 | 0.97 | retained |
| L13 | 22A, 23A | 7.8 | 89.5 | 7.70 | 1.01 | retained |
| L14 | 24, 25 | 8.5 | 97.5 | 8.39 | 1.01 | retained |
| L15 rear | 26 | 9.2 | 110.5 | 9.51 | 0.97 | retained |

No surface value changed. Thirteen of the fifteen elements sit within 4 % of the drawing, inside the 5–8 % measurement noise, and the stored set already carries the drawn step pattern (L2 above L3 above L4 above the doublet, L15 above L14). The iris ticks open to 80.7 px, 6.95 mm on this scale, against the calibrated 7.189 mm; the stop was not touched.

The L5–L6 doublet is the one departure. The sheet draws both elements square-cut at 13.0 mm, 0.863 of the L4 height whichever scale is used, with L6's edge about 1.6–1.8 mm thick; the model has 11.8 / 12.2 / 12.2 and a 2.94 mm edge. S9 cannot rise under the default rule: against S8 the validator accepts 11.8 (combined sag 7.61 of 8.555 mm, 88.9 %) and refuses 11.9 (90.2 %), and from 12.31 upward the shared band is fixed by S8's published aperture at 8.17 mm, 95.5 % of the gap. The faces do not cross inside that band (0.38 mm apart at 12.31 mm). `gapSagFrac` was left at 0.90; 0.96 is the smallest two-decimal value that admits S9 at 12.31 mm or more (0.95 admits 12.2 and refuses 12.6), and with it S9 = S10 = S11 = 13.0 builds cleanly and passes every other check. Raising S10 and S11 alone was rejected because it would taper an element the sheet draws square. The drawn L5 corner lies on the continuation of the S8 curve; the real asphere, carried past its published aperture, would meet S9 at 12.65 mm, so 13.0 mm is a rim outside S8's optical zone, not a clear-aperture claim.

Clearance. Exact meridional rays were traced at the three published conjugates with the rear plate and the modeled image plane. The chief ray reaching 21.7 mm leaves the object at 57.870°, 57.490° and 55.950° (Table 9: 57.871, 57.495, 55.966) and clears every rim; the smallest margin is at S6 in each state, 0.47, 0.56 and 0.89 mm. At infinity it needs 36.71 mm at S1, 23.41 at S3, 18.64 at S4, 17.91 at S5, 14.56 at S6, 13.97 at S7, 11.36 at S8 and 10.89 at S9. The ray from the axial object point through the edge of the fixed 7.189 mm iris needs at most 9.04 and 9.07 mm on L7 and 8.71 mm on S14 (both at the near state), 7.43 and 7.52 mm on S22 and S23; the smallest margin is 0.28 mm at S23 in all three states. The image-circle floor reports nothing undersized, the traced field coverage is 100 % (57.8°, 21.65 of 21.65 mm), the built half-field is 57.871° and the design aperture f/2.851, all as before.

Vignetting. On the app's definition (pupil offsets of one on-axis entrance-pupil semi-diameter about the solved chief ray) the meridional fan passes whole to 54.9° and 90.8 % at 57.8° at infinity, and whole at the near state. A fan that fills the iris instead is cut much earlier: 93 % of the iris diameter at 20°, 79 % at 34.7°, 68 % at 43.4°, 57 % at 50° and 29 % at 57.87°, limited below by L7 alone through 43° and increasingly by S9, S6 and the front menisci beyond, and above by L13 and the rear doublets. The sheet draws L7 and L13 no larger than stored, so this is kept as the design's behaviour.

Live check. The section was rendered at infinity and at closest focus and compared with both panels: element order, the stepped front group, the square L1, L7 and G2 blocks and the 3.23 mm objectward travel of G2 match. Two differences follow from how rims are drawn, not from the values: front and rear edges are joined by a straight line, so L2, L3 and L4 show slanted rims where the sheet draws square shoulders, and L15 shows a slant where the sheet carries S25 up to the L15 height. At closest focus the outermost drawn on-axis ray ends on the L7 rim. That ray is launched at 0.83 of the entrance-pupil radius measured at the S1 vertex plane (2.19 mm); with the pupil about 24 mm behind S1 and the object 69.9 mm in front, the ray through the iris edge enters S1 at only 1.92 mm, so the drawn ray overshoots the iris, which is the real limit (9.04 mm at S12 against 10.2).

Maker diagram (coordinator-viewed; no maker image was opened in this pass). Samyang's section shows 15 elements in 10 groups: three front negative menisci, an aspherical 4th element, a cemented HR-negative and positive pair, a separated positive singlet, a cemented triplet, a cemented pair with an HR element, an aspherical biconvex singlet and a final cemented pair whose rear positive element is ED. That agrees with 도면7 in count, grouping and order; the patent's own L1 is meniscus-shaped but computes weakly positive. No proportion was taken from it.

Open limitations. The scratch clearance probe that starts its surface search on the vertex plane cannot follow rays past about 48° on this lens (the start point lies outside the steep front spheres), so corner evidence comes from a marching tracer and the engine's field-coverage trace. The transverse scale rests on one published height and on sag fits that scatter by ±0.3 px/mm, about 3 %. The L5–L6 doublet stays 6–9 % under its drawn height until the cross-gap fraction is revisited.

## 2026-10-11 — Deployment validation and wording pass

Source re-read. `patents/KR101918210B1.pdf`, Example 3. Table 7 (26 lens surfaces, stop row, plate rows 27–28), Table 8 (K and A–F for surfaces 7, 8, 22, 23) and Table 9 (D0–D5, f, MAG, Fno, HFOV at three states) were read from the page-16/17 images and compared with the data file; the PDF text layer agrees with the images. 142 values were compared (R, d and nd on 26 surfaces, 15 νd, 28 asphere values, D1 and D2 at three states, D3, plate thickness, nd and νd) with no mismatch. The front page gives registration 10-1918210 (registered 2018-11-07, published 2018-11-14), application 10-2017-0053558 filed 2017-04-26, Samyang Optics, and inventors 유재명, 이해진, 이정두. 도면7 shows 15 elements in 10 groups with cemented interfaces at S10, S15/S16, S20 and S25 and the stop at row 18, as the file has them.

Asphere convention. ¶0096 names K the conic constant, c = 1/R and A–F the aspheric coefficients; the Equation 6 area on page 12 is blank. Page 11 of the sibling `patents/KR101933088B1.pdf` (application 10-2017-0053557, same filing date) was viewed: its ¶0080 has the same wording and its Equation 5 prints Z = cY²/(1+√(1−(1+K)c²Y²)) + AY⁴ + BY⁶ + CY⁸ + DY¹⁰ + EY¹² + FY¹⁴. An independent exact ray trace of the printed table tested the two readings at the d line and f/2.851. With K as the standard conic constant the on-axis RMS spot radius is 10.5 µm, the meridional fan stays within ±4 µm to 0.9 of the pupil and reaches +20 µm at the rim as the patent's Figure 8 draws it, and the 57.871° chief ray lands at 21.700 mm (Table 10 y = 21.7). The figure's 0.35, 0.60 and 0.80 field angles (28.49°, 43.36°, 51.93°) land at 7.60, 13.00 and 17.40 mm against 7.595, 13.02 and 17.36 mm, and the bundle passed by the modelled rims has an RMS radius of 5–7 µm from 28° to 58°. With the printed value read as 1+K the on-axis RMS is 213 µm and the 57.871° chief ray lands at 32.2 mm. The standard reading is kept.

First-order values, patent against model: f 14.194604 against 14.190782 mm (−0.027 %); Fno 2.851 against 2.851, the iris radius 7.18893 mm being set from it; half-field 57.871° against 57.871° (declared through `projection`; the chief ray reaching 21.7 mm leaves at 57.870°); S1 to IMG 130.092563 mm, or 130.097060 mm with D5, against 130.097060 mm; S26 to image 39.1955 against 39.200 mm, which puts the rear vertex 4.8 mm behind a 44 mm Canon EF flange; in-air paraxial back focus 38.3290 mm. At the two finite states the paraxial magnifications are −0.033324 and −0.157330 against the printed 0.033333 and 0.157378, the near object-to-image distance is 200.000000 mm, and the chief ray reaching 21.7 mm leaves at 57.490° and 55.9° against 57.495° and 55.966°. The printed Fno 2.853 and 2.938 are not reproduced with the iris fixed: the paraxial working values are 2.852 and 2.856, and 1/(2 sin u) gives 2.861 and 2.860.

Image plane. Table 9 prints D4 0.495503/0.514995/0.572628 and D5 +0.004497/−0.014995/−0.072628; the file uses their sum, 0.5 mm, as the sibling FE file does. The on-axis RMS spot radius at that plane is 10.5, 10.0 and 9.7 µm at the three states against 10.9, 8.9 and 10.0 µm at the printed D4, so the choice costs nothing visible.

Table 10. The focal lengths it prints differ from the tabulated prescriptions in all three examples, not in Example 3 alone: f1st 249.572/290.051/345.936 against computed 251.22/292.16/348.46 mm, fAF 26.354/107.443/99.513 against 26.55/106.65/98.64 mm, fG3 80.565/99.725/118.196 against 78.88/97.57/115.05 mm, offsets of 0.7–2.7 %. The first group computes −12.10 mm in Example 1 and +28.04 and +25.11 mm in Examples 2 and 3, so the "negative first group" wording fails for Example 2 as well. The two `sourceErrata` notes now say so.

Maker comparison. Samyang's product page (lksamyang.com, product 147) lists 15 elements in 10 groups with 2 aspherical, 4 HR and 1 ED element, F2.8–22, seven blades, 0.20 m minimum focus in its table (0.35 m in a feature caption), ×0.15 and 116.6°; LensTip dates the announcement 2018-01-08. Example 3 is the only 15-element / 10-group example (Example 1 is 13/10, Example 2 is 14/10), has two double-sided aspherical elements, four elements with nd above 1.9 (L5, L10, L11, L14) and L15 at 1.49700/81.61 in the ED position. The maker's section was viewed by the coordinator, not in this pass, and is recorded in the section above. The file is not a duplicate of the FE model, which follows KR 10-1933088 B1 Example 1 (14 elements, D3 22.66 mm).

Repo checks: the surface validator reports no errors, the image-circle check reports nothing undersized and the field-coverage trace reports 100 % (57.8°, 21.65 of 21.65 mm). The scratch clearance probe cannot solve the chief ray past about 48° on this lens, as noted above; the independent trace finds no axial clipping (smallest margin 0.28 mm at S23) and a full-field chief margin of 0.47 mm at S6.

Changed in this pass, text and tags only. Data file: header comment (asphere convention, image plane, focus, source inconsistencies and glass notes reworded; the semi-diameter note kept, with "Table 7" and "Figure 7" spaced); `sourceErrata` reduced from three notes to two (the D4/D5 note removed as a modelling choice, now stated in the header and `focusDescription`; the other two shortened and corrected for Examples 1 and 2); `subtitle`; `specs`; `focusDescription`; every element `role`; `apd: "inferred"` with an `apdNote` on L15 (FCD1; the stored catalog lines give P_g,F 0.5389, 0.032 above the normal line). Analysis: metadata block (patent number, romanized inventors), identification list with the maker comparison, the group-power, L3, L12 and L15 paragraphs, the glass, focus, iris and asphere wording, the conditions section, "Verification and Model Limits" replaced by "Model Scope and Limitations", and two source captions. This log: the request identifiers and quoted reply replaced by a statement of the modelling decision, and stale pending lines closed in place. The package hashes in the sections above describe the files as delivered on 2026-10-08. Engine values are identical before and after: EFL 14.190782147 mm, f/2.851, half-field 57.871°, stop radius 7.188929864 mm, paraxial back focus 38.3290 mm and focus keyframes 0, 0.37346 and 1.

Closed 2026-10-11: the cemented L5–L6 pair is drawn square at about 13.0 mm in 도면7 against the then-stored 11.8/12.2/12.2 mm; the section below applies it with `gapSagFrac` 0.96.

## 2026-10-11 — L5–L6 rim and gap allowance

The cemented L5–L6 pair (surfaces 9, 10 and 11) is 13.0 mm on all three faces, the height read for it in 도면7 in the semi-diameter pass above (151 px at 11.62 px/mm), where the drawing shows the pair square-cut with its front corner against the rear rim of L4. It was 11.8 / 12.2 / 12.2 mm.

`gapSagFrac` is 0.96 for this lens. The cross-gap rule tests surfaces 8A and 9 at the smaller of their two heights, the published 12.31 mm of S8: the aspheric sag of S8 there is 7.180 mm and S9 (R = −76.693 mm) reaches 0.994 mm toward it, 8.174 mm of the 8.555 mm vertex gap, or 95.55%. The default 0.90 refused any S9 height above 11.8 mm; 0.95 still refuses 13.0 mm and 0.96 admits it. The faces do not cross: 0.381 mm of air remains at 12.31 mm. No other gap in the lens exceeds 90% (S6–S7 is 89.5%).

Edge thickness of L6 at 13.0 mm is 1.785 mm (10.000 − 6.081 − 2.134 mm); L5 is biconcave and thickens toward the rim. The surface validator reports no errors, the image-circle check reports nothing undersized and the field-coverage trace is unchanged at 100%. Engine values are unchanged: EFL 14.190782 mm, f/2.851, stop radius 7.188930 mm, declared half-field 57.871°. The axial marginal ray needs 4.45, 4.67 and 6.28 mm at surfaces 9, 10 and 11, so the raise does not affect the on-axis beam. The wide-open vignetting curve at infinity changes only at its last field sample: geometric transmission at 57.8° is 92.7% against 90.6% with the 11.8 / 12.2 mm rims, and 100% at every sample out to 54.9° in both cases.

The live page at infinity shows the L5–L6 block level with the rear rim of L4, as in 도면7.

The data-file header no longer says that the app's glass catalog lacks FD110; the catalog has the HOYA row and L12 resolves to it.

Glass. L4 (1.77271 / 49.70) and L13 (1.55352 / 71.50) stay `Unmatched`. The local HOYA, OHARA and Sumita catalog files have no row within 1.5e-5 and 0.03 of either pair. For L13, MP-FCD500-20 and MC-FCD500-20 match nd exactly and differ by +0.22 in νd, outside the 0.15 catalog tolerance; for L4 the nearest rows are TAF1 and M-TAF105 at 1.77250.

## 2026-10-11 — Second review: diagram, labels and movement

Independent second look at the lens as the local site draws it. Compared: the live page at infinity, at the middle published state and at closest focus, the focus-movement overlay, the patent-positions mode and the inspectors of elements 1, 4, 6, 8, 9, 13 and 15, against 도면7 of `patents/KR101918210B1.pdf` (PDF page 24, upper panel infinity, lower panel 지근거리), Tables 7–9 (PDF pages 16–17) and ¶0068–0070 and ¶0100 of the description. The figure outline was also laid over the render at a common scale. No semi-diameter changed; three bracket texts, four cemented-group labels, the focus description and three sentences of the analysis changed.

### Silhouette

Scale, measured again from the 366 dpi raster. The axes are rows 1204 and 2358. Twenty-three vertex crossings were read beside the upper axis: S1 at x = 506.5 px and S26 at 1617.75 px give 12.225 px/mm, and every crossing lies within 5.2 px (0.42 mm) of the prescription. The transverse scale was fitted from the drawn profiles of the surfaces with the deepest sag, the axial scale held fixed: S1 11.43, S3 11.59, S4 11.62, S5 11.46, S6 11.75, S7 11.35, S8 11.77 and S10 11.80 px/mm (S2, a shallower arc, 12.07), sag-weighted mean 11.64 px/mm. The published S7 height, 15.06 mm, is drawn at 175.5 px on both sides of the axis, 11.65 px/mm. The sheet is therefore 4.7 % tighter across the axis than along it, as the first pass found, and heights are read at 11.65 px/mm.

Rim heights, taken to the centre of the outline stroke on both sides of the upper panel:

| Element | Surfaces | Figure (px, above / below) | Figure (mm) | Stored (mm) | Stored / figure |
|---|---|---:|---:|---:|---:|
| L1 | 1, 2 | 443.5 / 443.5 | 38.07 | 39 | 1.02 |
| L2 front | 3 | 282.5 / 283.5 | 24.29 | 24.5 | 1.01 |
| L2 rear, end of the curve | 4 | located by sag | 19.11 | 19.9 | 1.04 |
| L3 front | 5 | 219.5 / 220.0 | 18.86 | 18.8 | 1.00 |
| L3 rear, end of the curve | 6 | located by sag | 15.34 | 15.03 | 0.98 |
| L4 | 7A | 175.5 / 175.5 | 15.06 | 15.06 | published |
| L5–L6 | 9, 10, 11 | 151.5 / 151.5 | 13.00 | 13 | 1.00 |
| L7 | 12, 13 | 114.5 / 115.5 | 9.87 | 10.2 | 1.03 |
| L8–L10 | 14–17 | 104.5 / 104.5 | 8.97 | 9 | 1.00 |
| L11–L12 | 19–21 | 93.5 / 94.5 | 8.07 | 7.8 | 0.97 |
| L13 | 22A, 23A | 89.5 / 90.5 | 7.73 | 7.8 | 1.01 |
| L14 | 24, 25 | 97.5 / 97.0 | 8.35 | 8.5 | 1.02 |
| L15 rear | 26 | 110.5 / 111.5 | 9.53 | 9.2 | 0.97 |

Every stored value is within 4.2 % of the sheet, inside the measurement noise, and the drawn order of heights between neighbours is kept. The iris ticks open to 80.7 px (6.93 mm) at x = 1359 px, 69.7 mm from S1 against 69.575 mm in the table; the stop was not touched.

L5–L6 pair. The top and bottom edges of the pair are at 151.5 px, 0.863 of the L4 height, which is 13.00 mm. Located by sag alone, S10 reaches that edge at 12.8 mm and S11 at 13.1 mm. The pair is drawn square, so 13.0 mm on surfaces 9, 10 and 11 is right. Against L4: the sheet carries the rear face of L4 through the front corner of L5 and on to the full L4 height. The model ends S8 at its published 12.31 mm, where 0.381 mm of air remains, and the front corner of L5 (13.0 mm) sits 0.27 mm behind and 0.69 mm above the rear rim of L4; carried past its published aperture S8 would meet S9 at 12.65 mm. On the page the L5 corner meets the rear rim tip of L4 without overlap, which is the drawn relationship. 0.96 is confirmed as the smallest two-decimal `gapSagFrac` that admits it (the two sags take 95.55 % of the gap at 12.31 mm).

Where the two silhouettes still differ, none of it a semi-diameter error:

- L2, L3 and L4 have square shoulders on the sheet (a cylindrical edge, then a flat annulus down to the end of the rear curve). The site joins the front and rear rim points with a straight edge. The rear faces cannot take the front heights: the radii of S4 and S6 (22.335 and 18.6 mm) are smaller than 24.5 and 18.8 mm, and S8 has a published aperture.
- The rear tip of L2 at 19.9 mm lies 1.1 mm behind the front corner of L3; the sheet ends that curve at 19.1 mm, 0.3 mm in front of it. The difference is 4 %, and S4 sets the 46.48° tracing half-field, so it was left.
- L15: the sheet carries the cemented face S25 up to the L15 height and draws a flat top; S25 has one height for both elements (8.5 mm, the square L14 block), so L15 shows a slanted top from 8.5 to 9.2 mm.
- The sheet draws small flat lands on the rear rim of L5 (S10 ends at about 11.9 mm on the L5 side), of L8 and of L11, and on the front of L11. One height per cemented surface cannot show them.

Clearance, from an independent exact meridional trace with the rear plate. The chief ray reaching 21.7 mm leaves at 57.870°, 57.490° and 55.950° (Table 9: 57.871, 57.495, 55.966) and clears every rim; the smallest margin is at S6, 0.47, 0.56 and 0.89 mm, and at infinity it needs 36.71, 23.41, 18.64, 17.91, 14.56, 13.97, 11.36 and 10.89 mm on surfaces 1, 3, 4, 5, 6, 7, 8 and 9. The axial ray through the edge of the fixed iris needs at most 9.04 and 9.07 mm on L7 and 8.71 mm on S14 (closest focus) and 7.43 and 7.52 mm on S22 and S23; the smallest margin is 0.28 mm at S23. Engine values before and after this review are identical: EFL 14.190782 mm, f/2.851, declared half-field 57.871°, tracing half-field 46.48°, stop radius 7.188930 mm, traced field coverage 100 % (57.8°, 21.65 of 21.65 mm), no surface under the image-circle floor, no surface-validator error, and wide-open geometric transmission 100 % to 54.9° and 92.7 % at 57.8°. Substituting the old 11.8 / 12.2 / 12.2 mm pair with 0.90 gives 90.6 % at 57.8°, as recorded above.

### Labels, brackets and tags

Changed, with the reason:

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` text | FIXED G1, FOCUS G2, FIXED G3 | G13 (FIXED), G23 (FOCUS), G33 (FIXED) | 도면7 and ¶0068 name the groups G13, G23 and G33; the Note column of Table 7 marks them fixed, focusing and fixed. The element labels already carry the same embodiment suffix. No power sign is given because G13 computes positive against the patent's wording. |
| `doublets` text and `cemented` | D1, T1, D2, D3 | C1, C2, C3, C4 | Table 9 uses D0–D5 for air distances, and `varLabels` shows D1 and D2 beside the focus slider; the same strings marked two cemented pairs. The surface ranges were already right. |
| `focusDescription` | "L8–L10 (G2)"; "G1 and G3 stay fixed" | "L8–L10 (group G23; L83–L103 in the patent figure)"; "G13 and G33 stay fixed" | follows the bracket texts |
| Data-file header | "only G2 moves"; "G1 (S1-13)" | "only G23 moves"; "G13 (S1-13)"; a LABELS note added | follows the bracket texts |

Checked and found correct:

- Bracket ranges. G13 is surfaces 1–13, G23 14–17 and G33 19–26, with the stop row in the fixed third group as Table 7 notes it. The four cemented components are surfaces 9–11 (L5+L6), 14–17 (L8+L9+L10), 19–21 (L11+L12) and 24–26 (L14+L15), as ¶0068–0070 state; with the five singlets that is 10 groups.
- Element labels. `diagramLabel` runs L13, L23, … L153 on elements 1–15 in order, the reference signs of 도면7. At this point `name` was still the sequential L1–L15, so the inspector showed "L13" for the thirteenth element while the diagram label L13 is the first; the element-names paragraph at the end of this section removes that clash.
- Element types against the signs of R and ¶0068–0070: L1–L4 menisci convex to the object (L1 positive), L5 biconcave, L6 and L7 biconvex, L8 negative with a convex object-side face, L9 biconvex, L10 a meniscus concave to the object, L11 biconcave, L12 and L13 positive, L14 a meniscus, L15 biconvex. Every `role` sentence is true.
- Aspheric markers. Table 7 stars surfaces 7, 8, 22 and 23 and Table 8 lists the same four; the file marks 7A, 8A, 22A and 23A and no others, and the page shows four A marks.
- Stop: surface row ST between 17 and 19, drawn between L103 and L113.
- Tags. The description names no anomalous-dispersion, low-dispersion or special glass anywhere, so no element carries the patent tag. L15 keeps the inferred tag for the maker's ED position (1.49700 / 81.61).
- `varLabels` D1 and D2 are the patent's symbols for the two variable gaps.

Maker diagram. No maker image was opened in this review. The record above stands: Samyang's section, viewed by the coordinator, shows 15 elements in 10 groups with an aspherical 4th element, an aspherical biconvex 13th and an ED rear element in the final cemented pair, and the product page lists 2 aspherical, 4 HR and 1 ED element.

### Focus movement

Table 9 against the file: D1 5.334159 / 4.640341 / 2.107898 mm and D2 2.254901 / 2.948719 / 5.481162 mm, infinity first and the 0.2 m state last in both `var` arrays, with `focusPositions` 0, 0.37346 and 1. D1 falls and D2 rises by the same 3.226261 mm, so G23 moves toward the object and G13 and G33 stay fixed. Its front vertex sits 59.880, 59.186 and 56.654 mm from S1. A paraxial trace through the rear plate puts the image 0.019 mm in front of, and 0.004 and 0.076 mm behind, the model plane for object distances of infinity, 405.430516 and 69.90294 mm, with magnifications −0.033324 and −0.157330 (printed 0.033333 and 0.157378) and object-to-image distances of 535.53 and 200.000 mm. The lower panel of 도면7 shows G23 displaced 41–42 px toward the object, 3.4 mm at the axial scale. On the page the slider reads ∞, 54 cm and 20 cm at the three states, the gap readout shows D1 5.33 / 4.64 / 2.11 and D2 2.25 / 2.95 / 5.48, the movement overlay shows G23 travelling 3.23 mm toward the object with the other two groups still, and at closest focus the rendered G23 falls on the lower-panel outline.

### Analysis

Three sentences changed: the group paragraph now gives the patent's G13, G23 and G33 before the short forms, the element section opens by relating the sequential names to the diagram labels, and the L12 paragraph no longer says that the app's glass catalog lacks FD110.

### Open limitations

- The scratch clearance probe stops at 48.3° on this lens and returns no chief ray for the 21.7 mm image height; the corner was checked with the marching trace above and the engine's field-coverage trace.
- At closest focus the outermost drawn on-axis ray ends on the L7 rim. A ray aimed 2.19 mm high at the S1 vertex plane reaches 10.57 mm at S12 and 8.27 mm at the stop plane, outside the 7.19 mm iris; the ray through the iris edge enters at 1.92 mm and needs 9.03 mm on L7. L7 is already 3 % above its drawn height.
- The automatic figure screen is unusable on this sheet: leader lines cross the rear groups, and it applies the axial scale to heights.
- Table 7 gives nd and νd only. The patent has no glass name, no further line index and no partial dispersion for L4 or L13; the νd of L13 is printed to one decimal, 71.5.
- The diagram labels L13 and L23 sit 3 px apart at the default size.

### Element names

Follow-up decision of the same day: each element's `name` is now its patent reference sign, the same string as its `diagramLabel`, so the diagram, the inspector, the Abbe diagram and the element table name an element the same way, as in the Samyang 100mm Macro file of this batch. The tens digits count the elements front to rear and the trailing 3 marks Example 3. Ids, `label` (Element 1 to Element 15) and every optical value are unchanged.

| Element | Before | After | Element | Before | After | Element | Before | After |
|---:|---|---|---:|---|---|---:|---|---|
| 1 | L1 | L13 | 6 | L6 | L63 | 11 | L11 | L113 |
| 2 | L2 | L23 | 7 | L7 | L73 | 12 | L12 | L123 |
| 3 | L3 | L33 | 8 | L8 | L83 | 13 | L13 | L133 |
| 4 | L4 | L43 | 9 | L9 | L93 | 14 | L14 | L143 |
| 5 | L5 | L53 | 10 | L10 | L103 | 15 | L15 | L153 |

The strings that named elements by the old form were remapped by element id: five `role` texts, `focusDescription` (now "the cemented triplet L83–L103 (group G23)"), three passages of the data-file header (the names note, the L53–L63 rim line and the L43 / L133 glass line), and in the analysis the fifteen element headings (now "L13 (element 1)" to "L153 (element 15)"), the group and glass tables and sixteen passages of prose. The analysis states the convention once, in its first section. `sourceErrata`, `apdNote`, the `finiteConjugates` and `rearPlates` sources and the bracket texts held no element name. After the change the only strings matching a sequential name in either file are L13 where the first element is meant.

From this point the log names elements by the patent's signs. Everything above this paragraph, including the earlier parts of this section and all earlier sections, uses the sequential L1–L15: "L13" there is the thirteenth element (the aspherical biconvex singlet, now L133), and "L5–L6", "L7" and "L8–L10" there are now L53–L63, L73 and L83–L103.

On the page after the change: the first element is labelled L13 on the diagram and its inspector reads "Element 1 L13", Positive Meniscus, NBFD15, "Weak positive front meniscus of the fixed first group"; the thirteenth is labelled L133 and its inspector reads "Element 13 L133", Biconvex Positive (2× Asph), "Separated double-sided aspherical biconvex element of the rear group"; element 8 reads "L83, TRIPLET C2 … cemented focusing triplet L83–L103", and the Abbe diagram markers carry the same signs. The engine builds the lens without error, the surface validator reports none and the engine values are unchanged (EFL 14.190782 mm, f/2.851, half-field 57.871°).
