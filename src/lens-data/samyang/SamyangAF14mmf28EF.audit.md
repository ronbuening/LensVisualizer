# Audit — Samyang AF 14mm F2.8 EF

## Current disposition and revision

Date: 2026-10-08. Current earned gate: READY_FOR_BATCH. Integration status: INTEGRATION_PENDING.

This is KR101918210B1 Example 3, Tables 7–9, Figure 7, output stem SamyangAF14mmf28EF. No alternative example, scaling, shared engine/specification change or repository publication is part of this work. The original card and PDF remain byte-identical. The former Stage1 hold remains preserved separately; it was reopened only after the explicit owner/maintainer exception below.

Current data SHA256: 6903decf5245499f283ba1a673b069ff2ca92b8ffb103f91a646bc18706e6fd7.

## Source extraction, convention and authority

Original B PDF SHA256: 4ee7eb1bb37c39968354cc8ae8210524e9cb8965666335ffa9c35a0c7a673028. Original card SHA256: 3319016fa766dcca8739cc4a4ab18fa8e724f153edcc8d0eef7319ca060152d0. Source A/B Tables 7–9 have the same 47 selected numerical rows; this is bounded table equality, not complete-document identity. B pages 12, 16–17 and 24 were rendered and inspected. The sibling formula was independently downloaded and visually checked.

All 29 source rows remain in evidence, including ST18, OD3 plate 27–28, IMG29 and signed D5. Camera-side plate thickness 2.500 mm, nd 1.51680 and Vd 64.20 are retained in rearPlates; it is traced but excluded from the manufacturer's 15 lenses/10 components. No drop-in filter or physical plate motion is inferred. Source light travels object-left to image-right; positive R has its center to the right; nd/Vd are d-line coordinates. The ray-fan third wavelength is 479.9100 nm, not canonical F486.13 nm.

Equation 6 is blank in controlling A/B. The separately approved mapping uses KR101933088B1, page 11 Equation 5: standard conic K plus A..F multiplying Y4..Y14. All four original coefficient columns and signs are unchanged. This is explicitly authorized extrapolation, not recovery of the missing controlling equation and not two sourceErrata evidence kinds.

## Fixed image-reference exception

Request Sentinel_d57fafda4980819193f6be2b0bb04a0a asked for a narrow exception using fixed D4+D5 = 0.500000 mm after the plate, retaining raw distances and defocus. After clarification that the plate does not move, Ron replied in Sentinel_578e9665416c81918eeee705c4b6cfdd: “I guess we will approve that treatment then with the defocus notes.” The exact request/reply and scope are in evidence.scopedAuthorization.

This authorizes a limited model, not a patent correction. Literal D4 remains 0.495503/0.514995/0.572628 mm and D5 remains +0.004497/−0.014995/−0.072628 mm. Plate vertices remain z127.097060/129.597060 mm from S1. The modeled reference is z130.097060 mm. Negative D5 is not propagated as physical air, and D3 stays 36.200000 mm.

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

No generate:metadata, full-corpus sweep, full build/prerender, browser/UI test, Git write, public push, PR or deployment was performed. Those remain integration tasks. Source-comparison failures and unestablished finite F-number correspondence remain visible in comparisons; they are not renamed successful reproductions.

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

The reviewer freshly rechecked the official EF product table and optical section, reviewed the full analysis and source exceptions, and found no essential undisclosed discrepancy. Main-verifier and independent-verifier outputs are reproducible from the final 14-file dossier. Per-lens readiness does not grant repository integration or publication.
