# Canon EF 75-300mm f/4-5.6 IS USM — extraction and construction audit

## Job and reference versions
JPH0862541A, Numerical Example 2. Original card and PDF are retained unchanged. Workflow CHAT-1.0, 2026-09-11. Current LensVisualizer main 14da71d94ed3ab6ccf7aef70066f1e49670440ed was read at the start of this job; 248 reused reference/module files were verified against its fresh Git tree. No repository publication is authorized. The private evidence archive preserves these references.

## Extraction and conventions
R1–R20 are on PDF p.8; R21–R26 and Table 3 are on p.9. Rendered Table 3 was read directly, together with the conditional-value image below it. Figures 11/13/15 on pp.15–17 give f/4.1, f/4.7 and f/5.8. All-spherical, millimetres, object-left/image-right, positive radius imageward. The source does not explicitly define the index line; d-line is supported by its catalog coordinates and d/g aberration plots. R16 is the printed stop, 3.0 mm behind R15; its following gap varies.

## Model transformations
Only the approved rounded image gaps 41.50/52.17/62.10 mm replace an otherwise absent terminal spacing. R16 becomes STO. No rescaling, missing glass, front filter, focus law or IS decentering is invented. The next stage must infer physical iris and clear radii with source-section/ray support. Duplicate infinity focus vectors are bookkeeping, not finite-conjugate data.

## Glass review
Authoritative HOYA, OHARA, Schott, Hikari, Sumita and CDGM sources were checked for all seven coordinates. Complete sources and retrieval hashes are retained privately. The evidence retains eight nearest catalog candidates per coordinate. Multiple manufacturers share these coordinates; any chosen catalog class is an optical proxy, not supplier or melt identification. OHARA legacy/S-/L- prefixes remain distinct. No APD or APO assertion is justified from these source coordinates alone.

## Numerical and geometry results
Separate scalar reduced-angle recursion and ABCD multiplication reproduce EFL 76.117479834/135.026498831/291.499147204 mm and air BFD 41.502097479/52.167597638/62.099074639 mm. The approved rounded image gaps differ by less than 0.0025 mm. Functional group focal lengths are +133.7430, -40.9760, +59.9435, -410.9720, +69.1522 and -58.0423 mm. Fifteen elements form ten air-separated components, including five cemented doublets. Geometry is a Stage 2 task, not yet declared passed.

## Correction and discrepancy register
The printed |fa/sqrt(fW fT)| = 0.275 reproduces as 0.275086. The literal definitions in paragraphs 33–35 yield |foW/frW| = 1.979514 and |foT/frT| = 0.637265, not printed 0.335 and 1.068. These failed comparisons remain visible. They do not determine any missing essential prescription quantity; the complete literal centered prescription reproduces all three EFLs and the approved BFDs. No conditional-value correction or IS-performance certification is asserted. Manufacturer marketing 75–300mm f/4–5.6 remains separate from native patent design values.

## Independent review
Not performed at the authoring gate. A separate source-first reviewer is working from originals and current references; its frozen baseline will be retained before reconciliation.

## Gate disposition
Stage 1 READY_FOR_DATA: literal source model verified. Stage 2 must derive and test clear apertures and iris, validate actual final data, and disclose interpolation limitations.

## Pending integration
(Closed 2026-10-14: integrated into the repository; see the final section.) Per-lens chat readiness never implies integration. No whole-corpus sweep, metadata generation, production build, repository write, commit, push or PR was performed.

## Stage 2 construction checkpoint
The literal final TypeScript candidate is parsed both by TypeScript 5.9.3 and the restricted portable grammar; parsed values agree. Real `LensDataInput` targeted strict typecheck, `validateLensData()` and `buildLens()` pass against frozen main 14da71d94. Every loaded production module matches the fresh Git tree. Formatting uses Prettier 3.8.1 and the actual project configuration.

All clear radii are explicitly estimated. Front radius 28 mm is slightly above the tele axial entrance radius 25.129 mm, inside the manufacturer 58 mm filter dimension. That filter is a mechanical plausibility bound, not a measured optical aperture. R7's 13.7 mm radius fits the R7/R8 shared-band gap at the default 90% allowance; no override is needed. Other radii combine the axial envelope, representative field rays and the manufacturer's section proportions. No off-axis throughput is promised. Exact on-axis iris calibration yields 12.909889366/12.898942265/12.740409069 mm; the paraxial calibration differs and remains separately recorded.

Current-project tracing sampled 41,634 rays across nine zoom values, three aperture fractions and six field fractions. All three native full-aperture axial bundles fit. Off-axis clipping is retained; 142 raw noBracket outcomes are geometrically proven aperture misses by the real classifier, with zero unclassified failures. These fractions refer to the modeled full-frame diagonal, not to source-published coverage: the patent plots cover only image heights ±15 mm. Nine state render diagnostics return exactly zero trim; generated production element paths were visually inspected. These are actual shape/trace checks, not a browser UI or a full production build.

Linear interpolation is illustrative: at zoomT=0.75 the authored image gap is 12.191 mm shorter than the computed paraxial BFD. Only the three printed infinity stations support quantitative interpretation. There is no attempt to optimize intermediate spacings or invent a cam law. Geometry nevertheless remains valid in the sampled intervening states.

The source's generic N/ν leaves the wavelength unstated. Every element therefore carries an explicit Unmatched disposition and indexReferenceNote. Its direct C/F/g indices are disclosed OHARA legacy catalog-class polynomial proxies; the source N/ν are preserved. These approximations are not melt identification, source-published spectra, or an APO claim.

## Stage 3 claim map and consistency review
Stage 2's data fingerprint is e40b6c58bae8cbee09d9498bbe0dee94f41147c04f775c01c5d48e70ddb3bab6. Stage 3 leaves those data bytes unchanged. The verifier gained group/image reference-plane and track/EFL calculations before the replacement Stage 2 checkpoint; its updated checkpoint was sealed and replayed before analysis authoring.

| Analysis claim | Executed result / source | Governing revision |
|---|---|---|
| Patent attribution and dates | Original PDF cover; family metadata only for inventor romanization | Original source hash in evidence |
| Product counts, timing, filter, motor, MFD | Canon official page and section | Manufacturer hashes in evidence |
| Native focal lengths and back focus | sourceModel.states[].source, implementedModel.states | Final data fingerprint above |
| Six functional-group powers | sourceModel.states[].groups | Literal source and final mapping |
| Image-fixed positions | sourceModel.states[].groupFrontPositionsImageFixed | Final approved image gaps |
| Track/EFL and telephoto qualification | sourceModel.states[].trackEflRatio | Final data and approved image gaps |
| Element and doublet powers | sourceModel.elements / cemented; implementedModel.elements | Final parsed elements and surfaces |
| Glass line proxies | implementedModel.spectral, evidence.glassEvidence.selections | Archived actual catalog coefficients |
| Exact iris calibration | implementedModel.exactAxis; runtimeRecord.zoomStopSDs | Final data + actual engine |
| Rims/clearance/render trim | implementedModel.states[].geometry, runtimeRecord | Final data + actual engine |
| Intermediate defocus | implementedModel.states[6].imageDefocus | Final zoom interpolation |
| Two failed conditional ratios | results.comparisons, sourceModel.states[].conditions | Unchanged source definition |
| Source h=±15 mm field extent | Original PDF pp.15–17 figures | Source image review |
| Full-frame diagnostic diagonal | Runtime thetaMax uses hypot(18,12) | Current engine test script |
| Absence of focus and IS reconstruction | Repeated var entries, no finiteConjugates/decenter schema | Final data structure |

Interpretive prose was reviewed against the final data, the source figures and the manufacturer page. Individual aberration contributions are not invented from power signs; statements about conventional crown/flint pairing are explicitly interpretations. All spherical types, shared interfaces, generic source N/ν and modeled spectral caveats agree. The 249-line analysis is deliberately concise for this all-spherical historical zoom; it does not pad absent focus, asphere or performance evidence. Source-based marketing facts remain distinct from computed model results.

### Post-freeze reviewer correction
The reviewer requested that the actual inequality bounds appear alongside the ratios: 0.15 < |fa/sqrt(fW fT)| < 0.50, 0.20 < |foW/frW| < 1.50 and 0.80 < |foT/frT| < 6.0. The first is satisfied; the other two fail under their literal source definition. These bounds were added to the analysis and raw evidence without changing data. The separate condition-discrepancy-resolution check now explicitly evaluates the supported limited scope and reproduced literal construction instead of only checking that a disclosure marker exists. Raw comparison failures remain unchanged. The Stage 4 independent baseline is retained separately and is not rewritten to agree.

## Stage 4 independent source-first review
The independent reviewer read/rendered the original JP PDF and job card, consulted current shared references, then froze fresh input/code/results before opening the candidate. Exposure was limited to job identity and the separately authorized approximate derived BFD values; this is source/method independence, not absolute contextual blindness. The frozen original inputs, code, results, fingerprint and exposure are preserved unchanged in the essential independent-review JSON.

Fresh calculations reproduce EFL, BFD, group/element powers, pupils, Petzval and the same contradictory condition assertions. A later independently written vector-Snell path reproduces the exact iris calibration, and a fresh 4,680-ray grid across nine zoom states has zero unclassified failures with complete native axial containment. The independent geometry check gives minimum glass edge 0.340627 mm and maximum air-gap intrusion 0.876799 at R7/R8, below 0.90. The reviewer also repeated the actual-project checks and confirmed zero trim and no unclassified ray failures.

The review requested only: (1) adding the actual condition-inequality bounds to analysis; (2) making the supported limited-model discrepancy resolution an explicit gate; and (3) ensuring that a missing resolution record fails rather than silently omitting that gate. Both author and reviewer ran the deletion mutation and observed the intended nonzero failure. All requests are verified resolved. Data SHA256 remains e40b6c58bae8cbee09d9498bbe0dee94f41147c04f775c01c5d48e70ddb3bab6; final analysis SHA256 is b5bc7c1b39b9b7d9dbf1d5d9b227a24082d71085bf555452d9137c9179b12da6.

The separately named stage4_* functions in the consolidated verifier are the reviewer's integration fragment, not a rewrite of the author's calculations. Clean replay runs both implementations. Only the returned runtime package path is normalized to '.' for location-independent result comparison; numerical results and frozen baseline are not modified. The original source comparison failures remain intact, while the scoped discrepancy treatment passes on its documented grounds.

## Final gate and limits
READY_FOR_BATCH after the final manifest/archive hash checks and clean-extraction replay. This means an independently reviewed centered, three-infinity-station patent model with inferred apertures, source-line/candidate-glass uncertainty and disclosed conditional-value contradictions. Intermediate zoom configurations are illustrative. Integration remains INTEGRATION_PENDING; no CSV edits or repository publication were performed. (Closed 2026-10-14: integrated; intermediate zoom stations were later solved, see below.)

## 2026-10-14 — Deployment validation and wording pass

Source re-read: all 26 surfaces (R, D, N, ν) of JP H08-062541 A Numerical Example 2 were checked against the page images (pp. 8–9), together with the five Table 3 variable gaps at all three stations, the stop position (R16, 3.0 mm behind R15) and the five cemented pairs. No mismatches were found. The front page (filed 24 Aug 1994 as JP 6-222443, published 8 Mar 1996, applicant Canon Inc., inventor Shingo Hayakawa) agrees with the bibliographic fields.

First order, patent against model: EFL 76.12 / 135.00 / 291.49 against 76.117 / 135.026 / 291.499 mm. The entrance-pupil radii of 9.283 and 25.129 mm agree with the 9.28 and 25.13 mm axial ray heights on the F4.1 and F5.8 aberration plots, and the fa/sqrt(fW·fT) condition reproduces 0.275. With the printed gaps, D10 + D16 = 35.30 mm at all three stations and the G4-to-image distance is 103.70 / 103.72 / 103.69 mm, consistent with ¶0026 (G2 and G4 fixed). The wide-end track is 182.5 mm, consistent with the 138.2 mm barrel plus the 44 mm EF flange distance.

Maker diagram: Canon Camera Museum ef330 (global.canon/ja/c-museum/wp-content/uploads/2015/05/ef330-lens-construction.gif) shows 15 elements in 10 groups in the Fig. 4 arrangement, with the stop behind the third group and the second group as the IS group. Example 1 (15 elements, 11 groups, five zoom groups) and US 2001/0030809 A1 Examples 4–7 (six zoom groups, 24–25 surfaces) fit the product less well.

Zoom stations: neither the JP publication nor US 2001/0030809 A1 Example 9 prints more than the three Table 3 rows. With three stations only, linear interpolation left up to 12.74 mm of paraxial defocus (zoomT 0.80). Thirteen solved stations were added at EFL 85.11, 95.16, 105.16, 120.11, 147.88, 161.72, 175.56, 189.41, 204.27, 219.18, 236.15, 254.25 and 272.52 mm. G2 and G4 are fixed. D5, D10 and D18 follow quadratics in s = ln(f/fW)/ln(fT/fW) through the printed rows, D16 = 35.30 − D10, and D23 with the image gap is solved for paraxial focus at the fixed image plane, with D18 + D23 + image gap held at its printed-station value. The worst defocus across zoomT in 0.05 steps is now 0.130 mm (0.138 mm at 0.0025 steps). The group paths are smooth, G1, G3 and G6 move monotonically, and G5 reverses near 162 mm as the printed D18 values require. nominalFno at the solved stations (4.23 to 5.66) holds the iris radius on a straight line between the printed-station radii 12.910 / 12.899 / 12.740 mm. `publishedStations.zoom` is [0, 5, 15]. The tabulated stations are unchanged: EFL, entrance pupil, stop radius, f-number and back focus there are identical before and after. audit:surface, audit:image-circle, audit:field-coverage (16 stations at 100 %) and the real-ray clearance check at Y = 21.63 mm report no defects.

Fields changed in this pass: header comment, `subtitle`, `specs`, `patentNumber` (six-digit serial form), L10 `role`, `varLabels` (image gap now "Back focus (computed)"), `focusDescription`, `zoomLabels` (Wide / Tele), and `var`, `zoomPositions`, `nominalFno` and `publishedStations` for the solved stations. In the analysis, process vocabulary was removed, the verification summary became "Model Scope and Limitations", and the zoom-kinematics and aperture text now describe the solved stations.

Open: the printed fo/fr condition values (0.335 / 1.068) still do not reproduce from the literal ¶0033–0035 definitions (see sourceErrata).


## 2026-10-14 — Patent-rim, dispersion and metadata audit

Source: Figure 4, PDF page 11; Numerical Example 2, Table 3.

| Field | Before | After | Evidence |
|---|---|---|---|
| L1–L15 dispersion | Catalog-derived nC/nF/ng with Unmatched labels | Compatible catalog curves, no direct line fields | Proxy line indices were not source measurements and bypassed catalog resolution. |

Source N/ν and all geometry stay unchanged. S-TIH6, S-BSL7, LAH66, S-TIH53, S-BSM14, S-FSL5 and S-LAH60 are explicitly qualified spectral proxies. The source wavelength remains unspecified; d-line tracing remains inferred from the plotted d/g labels and coordinates.

The wide panel's leader lines contaminate automated envelopes. A separate comparison using the printed 135 mm spacing and the clean middle panel gives figure/data ratios 0.86–0.96 with relative shape deviations within about 6%; these do not justify SD changes. The optical rims, excluding leaders and group brackets, were inspected at 600 dpi. Canon EF/full-frame, the display name, counts and inventor/assignee fields are complete.


## 2026-10-14 — Local-viewer review

The local viewer was compared at the three published infinity stations with JPH0862541A Figure 4 (PDF page 11), using the 135 mm panel for the clean optical outline. The inferred rims and six functional-group boundaries are retained. G2 IS and G4 remain fixed relative to the image plane; G5 reverses along the calculated zoom path. Focus remains unavailable because the source supplies no near-focus spacings.

The prior pass activated catalog curves despite the unspecified reference line. That classification is corrected: all 15 glasses are explicitly Unmatched, with source N/ν labels and approximate Abbe dispersion in the inspector. The possible d-line catalog classes remain annotations, with no direct catalog-derived C/F/g indices. The repeat in US 2001/0030809 A1 Example 9 also leaves the reference unnamed. No supplier or melt is identified. Canon Inc. is already the canonical source assignee.
