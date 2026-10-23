# Lens Patent — Sigma 24-70mm F2.8 DG OS HSM | Art — 4 Audit

## Gate disposition

**QUALIFIED ACCEPTANCE: continuous zoom retained with known S24 representative-ray clipping.** The user explicitly chose continuous zoom and acceptance of this documented limitation. `gate` is `READY_FOR_BATCH`, `readinessType` is `QUALIFIED`, and `numericalContainmentStatus` remains `FAIL`. This is pre-integration acceptance under a narrow qualification, not a numerical containment pass. Historical `integrationStatus`: `INTEGRATION_PENDING` (closed by deployment validation, 2026-10-23).

The prescribed source, physical iris schedule, default ray fan, original linear interpolation, nominalFno=2.93 and approved 0.92 gap-intrusion setting are unchanged. Genuine pinned runtime execution and an independent exact tracer reproduce first clipping at S24. The wider characterization also identifies the same ray family at f/3.0 through the tele endpoint. Every raw failure is retained. The selected patent does not contain enough cam data to replace the interpolation defensibly; none was invented.

This is a limitation of the continuous visualization model and its sampled apertures. It does not establish a defect in the commercial lens or an error in the published prescription. No three-preset representation, hidden companion files or reconstructed cam was adopted.

## Job and exact revisions

Original card: JP2017156719A, Numerical Example 1, output stem `Sigma2470mmf28DGOSHSMArt`. Original PDF and card are byte-identical to the supplied originals.

- PDF SHA-256: `89044cf4e0e4c054d97cb4f26305ab0f0cac41dba3bce0e03842a94e965aa2ce`
- Card SHA-256: `44da229b248172d0f6ae874f01ec3624f3fd221b86bcdd4f1e63e39a11d9d4b1`
- Candidate Stage 3 ZIP SHA-256: `bb28dee15ba8f8ca93da48f7ca5484fe9f71607f848991b8d9302e68c186e4da`
- Candidate manifest SHA-256: `f51d2a4c0919d7104262bbe055a5249089055ba16cd08495dd1f997bed50e4cc`
- Candidate data SHA-256: `44feedb01d602f5f095a3856980cb7d2d0cba4bd9f5898d1b61caf4f7913bfa1`
- Candidate analysis SHA-256: `1c5386f566b1c5fced7a5be64382f05b7ca832810b562c48c7892b8e7235f3da`

## Independent baseline and exposure

The independent numerical baseline was frozen before the candidate pair or author calculations were opened. Its fingerprint is `427fd9f88ec1ce8dd076498e9a3f050e78ce30e63b499dbc4401fb687035606a`; original baseline manifest SHA-256 is `283fbc52ac255020c734898cbc6fa75dcd3ae052839a6bb4805348772d482c8c`.

Initial material consisted of the original card/PDF, source identity information and pinned shared references. The original card contained only four selection fields. Adjacent examples on shared patent pages were incidentally visible; no other example supplied numerical inputs. A general completeness reminder concerning maximum effective diameters and physical-versus-policy clearance supplied no candidate values. Pass B subsequently opened the exact candidate and its qualifications. This describes actual exposure rather than claiming complete contextual blindness.

Fresh source inputs, baseline numerical results, original code identities, and the fingerprint are retained under `evidence.independentPass` and `results.independentBaseline`. The independent calculation functions are mechanically renamed `ib_*` in the consolidated verifier so they remain separate from the author's calculation path. The frozen baseline is not retroactively rewritten to agree with the candidate.

## Extraction, conventions and source reconciliation

The supplied PDF has a PAJ cover, so Japanese printed pages are one less than PDF page numbers. Numerical Example 1 is ¶0131, PDF pp17–19; the equation/definitions are ¶0122–0130, PDF pp16–17; conditions are ¶0139, PDF p29; Figure 1 is PDF p30. Source metadata, all 34 surfaces, seven aspheres, all three zoom stations and four inter-group gaps plus BF were independently re-entered from rendered source pages.

The source uses millimetres and d-line indices at 587.56 nm. Positive z is imageward; positive R means the curvature center is imageward. The medium follows each surface. Source K maps directly to the application K, with every K=0; the polynomial ends at A12, and required A14 is zero. No rescaling, radius/index repair, plate omission, synthetic cement or source-example substitution is present.

All candidate radii, thicknesses, source nd/vd, surface aperture values, aspheric coefficients and three spacing keyframes agree with the independent input. The surface-data effective diameters are maximum full diameters over zoom and are correctly halved. Stop surface 15 has separate station diameters 19.31/23.87/25.99 mm, correctly represented by the existing `zoomStopSemiDiameters` field rather than inferred from marketed f/2.8.

There are 19 physical elements, 14 air-separated groups, five functional groups, five cemented pairs and seven aspheric surfaces on four elements. Downstream cemented element ownership, one STO, labels, annotations and variable-gap base values are consistent. No finite-distance gap schedule is supplied; repeated focus endpoints create no internal reconstruction. Source G4a lateral offsets 0.15/0.21/0.30 mm in Figure 4's definition were visually confirmed on PDF p5 and remain unmodeled IS context.

## Numerical and source-precision results

Independent sequential/ABCD EFLs are 24.8382336973 / 45.0086488557 / 67.5536424095 mm. BFDs from surface 34 are 38.5598529991 / 54.8136874342 / 60.7304586962 mm. Source first-vertex-to-image lengths are 149.7327 / 163.7170 / 180.7328 mm. All cardinal planes, pupils, 19 standalone powers, cemented and functional-group net powers, and surface-wise Petzval contributions remain available in results.

The Petzval sum is +0.00189499251986 mm⁻¹. Wide/middle satisfy BFD>EFL; tele does not. No station has first-vertex-to-image track/EFL<1. All sampled functional-group fronts move objectward in fixed-image coordinates; no reversal is established by the three source stations.

Exact axial source-stop solves produce f/2.9268624664, f/2.9267961515 and f/2.9276548939. Paraxial-pupil estimates differ, and are not used to replace the physical source iris. Agreement with the printed f/2.93 is independent of nominal-stop calibration.

Raw strict-precision residuals from the independent baseline are preserved, including BF differences exceeding a four-decimal half unit and G5/G4a group-power differences slightly exceeding a two-decimal half unit. They are compatible with rounded source-input sensitivity; they are not asserted to reproduce undisclosed design digits. The author comparison tolerances remain visible beside the tighter baseline observations.

All six patent condition inequalities hold. Source condition detail rows have additional digits in FNO and vd, so the raw rounded prescription, independently computed exact-aperture condition (1), and higher-precision detail-row calculations are explicitly distinct. Condition (6)'s printed 19.957 versus 42.722−22.764=19.958 remains a small source-rounding observation, not a silently repaired typo.

Linear gap interpolation is not a cam reconstruction. The two interval midpoint image-gap-minus-paraxial-BFD differences remain +1.790225 and −0.064555 mm. Nothing in this audit certifies continuous parfocality.

## Geometry and the authorized gap-policy treatment

Published source diameters have valid conic domains, positive sampled glass thickness and positive physical air clearance. Maximum rim angle is 48.367809°, below the approximately 64.158067° default. S7–S8 has the limiting shared-band sag intrusion: 7.8936067724 mm across an 8.6668 mm gap at shared radius 11.91 mm, leaving +0.7731932276 mm clearance. The ratio 0.9107867693 fails the historical default 0.90 policy.

The user expressly approved the existing lens-wide `gapSagFrac=0.92` with all source dimensions retained. The 0.92 allowance is 7.973456 mm and clears the observed intrusion by 0.0798492276 mm. The original 0.90 FAIL remains recorded, while the explicitly authorized 0.92 check passes. The actual pinned validator also returns no schema/geometry errors. This approval does not cover ray-containment failures or any additional source/fan/aperture change.

No renderer-layout adjustment was introduced to conceal geometry. Actual production SVG render-trim diagnostics were not run.

## Actual off-axis launch and independently reproduced blocker

The author's 105-ray diagnostic targets fixed fractions of physical stop coordinates. Its limited five-fraction, 60%-source-field subset does not first clip at cemented interfaces, but it is **not** the application display fan. Its broader failures and two unresolved wide/full-field aiming samples are retained; unresolved aims are not presented as physical clips.

Pinned launch semantics were checked through:

- `src/components/hooks/useLensComputation.ts`: current entrance-pupil radius derives from `entrancePupilAtState`, with aperture scaling.
- `src/components/hooks/offAxisRayUtils.ts`: runtime field geometry and the rectilinear tracing-field clamp.
- `src/components/hooks/useOffAxisRays.ts`: scalar launch `yChief + fraction × currentEPSD`, using the common field slope.
- `src/optics/aberration/offAxis.ts` and `src/optics/field/chiefRay.ts`: state-aware field calculation and solved chief ray.
- `src/optics/trace/rayAdapters.ts`: genuine exact meridional trace.

Genuine pinned modules were executed under Node v24.19.0 with its built-in TypeScript stripping and a `.js`→`.ts` resolution hook. No package install, compiler, source modification, full build or corpus command was used. Real `validateLensData`, the direct default constructor in `runtimeLens.ts`, field/launch/tracing and glass-resolution functions ran against the exact final data file. The public compatibility facade was not separately executed.

The actual fan check uses nine zoom nodes 0:0.125:1, apertures f/2.93, f/5.6, f/22, and fractions −0.75/−0.375/0/+0.375/+0.75, for 135 rays at infinity. All launches resolve. One first clip occurs at a cemented interface:

| Quantity | Value |
|---|---:|
| zoomT | 0.875 |
| Aperture | f/2.93 |
| Pupil fraction | −0.75 |
| Runtime half-field | 21.4058754588° |
| Actual off-axis angle | 12.8435252753° |
| Entrance-pupil SD | 10.8264208707 mm |
| Chief launch y | 18.7916342875 mm |
| Ray launch y | 10.6718186345 mm |
| Ray launch slope | −0.227993434786 |
| First clipped surface | 24, L13→L14 cemented interface |
| Ray height at surface 24 | −12.578873771925 mm |
| Source clear radius | 12.395 mm |
| Overshoot | 0.183873771925 mm |

The independent exact tracer, using that identical launch, obtains −12.578873771706 mm: a 2.2×10⁻¹⁰ mm difference. The independent launch-reconstruction path also reproduces the same first clip and all 135 runtime first-clip classifications, within 1e−5 mm launch tolerance. Other sampled first clips occur at air/glass boundaries.

The current template's representative off-axis guideline requires first clipping at element edges or air gaps, never inside cemented groups. The raw numerical result therefore remains FAIL. It is not relabeled PASS, downgraded to a missing integration test, or excused by the separately approved gap policy. The later explicit user acceptance addresses only the identified S24 representative-ray family in this unchanged model; all other applicable failures remain blocking.

## User-accepted qualification and denser aperture characterization

After the source-cam and alternatives investigation, the user rejected discrete presets and expressly required continuous zoom with the clipped ray documented. The acceptance is recorded as a lens-specific qualification, not a global permission to ignore clipping. Scope was accurately expanded to include the same S24 representative-ray family at slightly stopped-down apertures, including tele f/3.0.

The exact final data bytes were rerun through genuine pinned modules for 401 zoom nodes at increments of 0.0025, nine apertures [2.93,3.0,3.2,4,5.6,8,11,16,22] and the five unchanged default fractions: 18,045 traces. The consolidated portable verifier independently recomputes the same grid.

| Aperture | S24 first-clip count | Observed sampled zoomT range | Maximum sampled overshoot |
|---|---:|---|---:|
| f/2.93 | 73 | 0.7800–0.9600 | 0.343459797 mm |
| f/3.0 | 38 | 0.9075–1.0000 | 0.168031114 mm |
| f/3.2, 4, 5.6, 8, 11, 16, 22 | 0 | None in grid | None |

All 111 observed first cemented-interface clips are the same −0.75 representative ray at S24. No other cemented interface, unresolved trace, or additional mandatory failure was found in this grid. These are finite samples, not exact continuous region boundaries or a proof for untested apertures, fields, skew rays or pupil densities.

At tele f/3.0, the source zoom spacings are published, but the aperture is a modeled stopped-down setting. The exact runtime launch y=9.848081574087 mm and slope −0.199249772744 produce S24 y=−12.563031113529 mm versus the unchanged SD=12.395 mm. The independent same-launch trace gives −12.563031113644 mm, differing by 1.16×10⁻¹⁰ mm. Stopping down changes the sampled pupil ray so that it can clear the earlier air/glass aperture and first meet the cemented-interface rim. This explains the first-clip location change without inventing production behavior.

The acceptance is tied to the canonical hash of the unchanged optical object and the explicitly recorded S24/−0.75 zoom/aperture family. The verifier retains numerical FAIL checks, separately evaluates `qualified-continuous-acceptance`, and blocks any unaccepted mandatory failure or changed optical object. The raw historical 0.90 gap-policy failure remains separately qualified by the earlier 0.92 approval. Wider stop-target diagnostic failures remain distinct observations; there is no claim that every ray transmits.

## Bounded search for an axial cam remedy

The original fixed patent was checked for sufficient interior cam data: Example 1 construction ¶0057–0065, definitions ¶0122–0130, numerical ¶0131, conditions ¶0139, the selected figure and Figure 1–4 descriptions, plus a bounded full-text search for cam/trajectory/intermediate/variable-spacing/focus terms.

Only the three infinity spacing stations are supplied. Paragraph 0065 and Figure 1 establish directions but not a numerical interior path. Lateral IS offsets do not provide axial cam positions. No sufficient source-backed remedy was found. No family member, alternate example, artistic arrow measurement, or inferred close-focus state was substituted.

The alternatives review tested smooth interpolation, focus-compensated and multi-group reconstructions without establishing a defensible cure. A fixed-station selector was explored but rejected by the user. The authorized route is now the original continuous model with the narrowly documented clipping acceptance. No alternate cam, source edit, fan change, physical iris change or hidden configuration file is part of this package.

## Glass and production review

The independent HOYA coordinate matching and primary OHARA S-NBH56 comparison agree with the candidate's qualified equivalent labels. Chosen formula round trips pass. Primary [OHARA 25-04 S-NBH56 data](https://oharacorp.com/wp-content/uploads/2025/04/esnbh56.pdf), [Sigma specifications](https://www.sigma-global.com/en/lenses/a017_24_70_28/) and [June 23, 2017 shipping announcement](https://press.sigmaphoto.com/corporate/06/sigma-begins-shipping-its-14mm-f1-8-dg-hsm-and-24-70mm-f2-8-dg-os-hsm-art-lenses/) were rechecked. Native mounts, format, MFD, diaphragm and mechanical length reference agree with the analysis. Production-to-patent attribution remains architectural correlation.

The actual resolver accepts all 19 glass entries. M-NBFD130 resolves to NBFD13 through an alias; this is documented without conflating manufacturing families. The chromatic G-channel uses catalog-derived d-line indices, differing from stored nd by up to 6.792×10⁻⁶ in this set. Ordinary monochromatic/source calculations retain the printed nd. Catalog spectra are proxies, not source-measured melt properties; no APO or supplier identity claim is made. Complete recorded resolver outputs are in the targeted-runtime evidence.

## Corrections and validation independence

1. Renamed the author's “default display fan” coverage as a stop-coordinate-target diagnostic. Added actual entrance-pupil-fan execution and an independent replay. No source or fan settings changed.
2. Added the exact interpolated-state blocker to the model header and analysis, withdrawing continuous construction approval. Data-object parsed values remain identical to the received candidate.
3. Replaced speculative runtime-resolution wording with observed proxy/alias/source-index behavior. Glass annotations remain unchanged.
4. Replaced the validator's retrieved copy with exact pinned bytes after identifying a single extra trailing blank line, then reran target checks. No source logic changed.
5. Changed the acceptance disposition from hold to explicit user-qualified continuous acceptance; documented the dense zoom/aperture S24 family and tele f/3.0 case. Raw failing tests remain FAIL and source/fan/iris/interpolation values are unchanged. No discrete preset proposal was adopted.

Manual interpretive review: PASS

This means the corrected prose was read against the source, calculations, explicit acceptance and execution scope. It does not mean numerical containment passed. Source-only independence was established before these corrections; correction validation necessarily knows the candidate and is not a second blind review.

## Quantitative-claim map and portable replay

The complete per-claim map remains in `results.facts.analysisClaimMap`: patent metadata; nineteen element headings/coordinates/glasses/isolated powers; seven group powers; five cemented powers; system/pupil/aperture tables; zoom gaps/motion; all asphere coefficients and departures; six conditions; Petzval; interpolation; boundary diagnostics and source IS context.

New claims map to `results.independentReconciliation.actualFan`, `sameLaunchWitness`, `runtimeComparison`, `sourceCamSearch`, `results.acceptedClipping`, and `facts.acceptedS24Clipping`, with the exact final data/analysis hashes in `inputHashes`. The archived genuine module execution, runner/loader source and pinned dependency identities are in `targeted-runtime.json`. Portable Python replay independently computes the ray failure; it does not claim to rerun unbundled project modules.

Final disposition: READY_FOR_BATCH with USER_ACCEPTED_KNOWN_S24_CLIPPING; readinessType QUALIFIED; numericalContainmentStatus FAIL; INTEGRATION_PENDING (closed by deployment validation, 2026-10-23). This historical disposition is bound only to the final hashes and recorded scope, not to arbitrary later lens edits or future clipping.


## V2 conversion — 2026-10-18

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. The earlier full-catalog test attempt on a prior revision was resource-killed and is not a pass; no full-catalog pass is claimed here. This format conversion is not deployment or complete optical acceptance.

Retained package status: QUALIFIED READY_FOR_BATCH; user-accepted known S24 clipping. Numerical containment remains FAIL. Retain 0.92 historical gap allowance and continuous-zoom qualification.

## 2026-10-23 — Semi-diameter pass against the patent figure

Source: `patents/JP2017156719A.pdf` (JP 2017-156719 A, Sigma Corp., inventor Ryo Shioda, published 2017-09-07). Numerical Example 1 tables on PDF pp. 17–18; Figure 1 on PDF p. 30, a 399 ppi raster drawn at the wide infinity state.

**Printed values.** All 33 surface semi-diameters in the data file equal the printed effective diameters divided by two, digit for digit (checked against the text layer of PDF pp. 17–18), and the three iris radii equal the printed stop diameters 19.31, 23.87 and 25.99 mm divided by two. No `sd` was changed.

**Scale.** At 400 dpi the dash-dot axis is row 300 of the figure crop. Twenty-nine vertex crossings along the axis, from S1 to the image plane, fit the wide-state prescription at 4.70113 px/mm (0.21271 mm/px) with 0.34 px rms and 0.78 px maximum residual. Two spans agree: S1 to image 0.21269 mm/px, S8 to S28 0.21253 mm/px. The drawn iris ticks start 46 px from the axis (9.78 mm) against the printed wide iris radius of 9.655 mm.

**Figure against the stored rims.** Each element's outermost drawn edge was measured on a side free of leader lines and brackets (top for G1, bottom for G2, both sides elsewhere):

| Element | Surfaces | Stored sd, mm (printed) | Figure radius, mm | Figure / larger sd | Shape (÷ median 1.087) |
|---|---|---:|---:|---:|---:|
| L1 | 1–2 | 34.825 / 33.430 | 37.01 | 1.063 | 0.98 |
| L2 | 2–3 | 33.430 / 32.935 | 37.01 | 1.107 | 1.02 |
| L3 | 4–5 | 29.435 / 28.755 | 31.48 | 1.070 | 0.98 |
| L4 | 6A–7A | 16.415 / 12.180 | 17.66 | 1.076 | 0.99 |
| L5 | 8–9 | 11.910 / 11.655 | 12.98 | 1.089 | 1.00 |
| L6 | 9–10 | 11.655 / 11.535 | 12.98 | 1.113 | 1.02 |
| L7 | 11–12 | 11.445 / 11.515 | 12.98 | 1.127 | 1.04 |
| L8 | 13–14 | 11.445 / 11.860 | 12.98 | 1.094 | 1.01 |
| L9 | 16A–17A | 14.280 / 14.305 | 15.53 | 1.086 | 1.00 |
| L10 | 18–19 | 14.275 / 14.220 | 15.53 | 1.088 | 1.00 |
| L11 | 20–21 | 13.875 / 13.350 | 15.10 | 1.088 | 1.00 |
| L12 | 21–22 | 13.350 / 13.290 | 15.10 | 1.131 | 1.04 |
| L13 | 23A–24 | 12.365 / 12.395 | 13.40 | 1.081 | 0.99 |
| L14 | 24–25 | 12.395 / 12.390 | 13.40 | 1.081 | 0.99 |
| L15 | 26–27 | 12.760 / 12.730 | 13.83 | 1.084 | 1.00 |
| L16 | 28–29 | 12.935 / 12.985 | 14.04 | 1.081 | 0.99 |
| L17 | 30–31 | 12.915 / 12.865 | 14.04 | 1.087 | 1.00 |
| L18 | 31–32 | 12.865 / 12.975 | 14.04 | 1.082 | 1.00 |
| L19 | 33A–34A | 13.220 / 13.505 | 14.68 | 1.087 | 1.00 |

The figure draws every element 6–13 % beyond its printed effective radius, a near-constant 1.1–2.2 mm mounting margin, with the same element-to-element shape (all shape ratios 0.98–1.04). An overlay of the stored profile on Figure 1 shows the model outline nesting just inside every drawn element, the L4 flange outside 6A's printed rim, and the model's wide iris on the drawn iris ticks. Printed values govern; nothing was raised or lowered.

**Clearance.** Exact meridional trace at f/2.93 and Y = 21.63 mm reports no clipped axial beam and no blocked chief ray at any station; the tightest axial margin is S24 (12.30 mm against 12.395 mm). The image-circle floor reports nothing undersized, and traced corner coverage is 100 % at every station.

## 2026-10-23 — Solved intermediate zoom stations

The three printed infinity stations were joined only by linear gap interpolation, which defocused the model by up to +1.81 mm between wide and middle (+1.790 mm at zoomT 0.25) and put the focal-length readout up to 2.54 mm off the traced EFL. With explicit permission for this lens, 18 unpublished stations were added, nine inside each printed interval, and the three printed rows were kept byte-identical and marked `published: true`.

Method. Target focal lengths are evenly spaced in f: 26.857 to 42.993 mm in steps of 2.017 mm, and 47.264 to 65.296 mm in steps of 2.254 mm. G1, G2, G4 and G5 each move, in image-fixed coordinates, on one quadratic through their three printed positions in a parameter u whose printed nodes sit at u = ln(f/24.84)/ln(67.55/24.84) = 0, 0.5942 and 1. G3 is the compensator: at each station u and G3's departure from its own quadratic are solved together (2-D Newton, paraxial trace) for the target EFL and zero paraxial defocus. All five gaps, back focus included, are then rounded to 0.0001 mm, the source's precision; the rounded rows keep paraxial defocus below 0.0002 mm. Other choices were tried and rejected. With these nodes, back focus alone (a rigid shift of the whole lens, up to 1.36 mm) reversed G2, G4 and G5 inside a printed interval; G2 or G5 as compensator reversed itself (by 0.41 and 0.09 mm); G4 avoided reversal but departed 1.96 mm from its quadratic. With evenly spaced nodes (u = zoomT), G3 was the only reversal-free compensator. G3 departs from its quadratic by at most 1.30 mm, and every group moves objectward at each of the 20 steps (smallest step G2, 0.030 mm). D22 stays within 0.03 mm of 4.79 mm from 34.9 to 45.0 mm, a flat spot rather than a reversal of any group.

Iris radii at the solved stations are the engine's f/2.93 axial-marginal stop radius times the printed-radius ratio (1.00111, 1.00118, 1.00089 at the three printed stations), interpolated quadratically in u. A plain quadratic in the radii would have left the 28.874 mm station 0.92 % below the f/2.93 radius.

Results, all on the edited file:

- Printed stations: EFL 24.8382 / 45.0086 / 67.5536 mm, BFD 38.5599 / 54.8137 / 60.7305 mm, total length 149.7327 / 163.7170 / 180.7328 mm, unchanged from before. They sit at zoomT 0, 0.5 and 1 as before, and the published-stations helper returns exactly those three.
- Paraxial defocus at every one of the 21 stations is at most 0.00024 mm (printed tele; solved stations at most 0.00016 mm). Between adjacent stations (quarter, half and three-quarter points) it is at most 0.047 mm (24.84–26.86 mm), against 1.81 mm before. The EFL readout stays within 0.035 mm of the traced EFL.
- The surface validator passes with the existing 0.92 gap allowance. With the default 0.90, only the source-backed 7A→8 gap exceeds the limit, as before. The image-circle floor finds nothing undersized, traced corner coverage is 100 % at all 21 stations, and the exact trace at f/2.93 shows no clipped axial beam or blocked chief ray. Engine half-field and f-number at the printed stations are unchanged (38.08°, 28.58°, 18.78°; f/2.93).
- S24 representative ray (app fan, 401 zoom positions, f/2.93 and f/3.0, pupil fraction −0.75). Before: 73 first clips at S24 over zoomT 0.78–0.96, max overshoot 0.343460 mm at f/2.93; 38 over 0.9075–1.0, max 0.168031 mm at f/3.0. After: 91 over 0.7125–0.9375 (about 54.6–64.7 mm), max 0.349798 mm at f/2.93; 59 over 0.855–1.0, max 0.168031 mm (printed tele) at f/3.0. No other cemented first clip appears, and none at f/3.2 through f/22.

Limitation. Holding focus did not remove the S24 clip. The middle-to-tele interval was already within 0.08 mm of focus under linear interpolation. The clip comes from the printed G4a rims (23A 12.365 mm, 24 12.395 mm): at the printed tele state the same ray overruns S24 by 0.417 mm at f/2.93 after first meeting surface 23A. The existing qualified acceptance of the S24 family still applies, with the new ranges recorded in the data-file header and the analysis. The solved path is a smooth, focus-holding visualization path, not the factory cam.

## 2026-10-23 — Deployment validation and wording pass

The deployment validation reported for this date is complete. The wording pass re-read Numerical Example 1 in `patents/JP2017156719A.pdf`, PDF pp. 17–19: 34 surface rows including the stop, 19 printed nd/νd pairs, seven asphere sets (42 printed K and A4–A12 cells, including zeros), and five variable gaps at three published infinity stations (15 values). There were zero transcription mismatches. All 33 refracting-surface semi-diameters remain the printed effective diameters divided by two; the published iris radii remain 9.655 / 11.935 / 12.995 mm. The 18 solved intermediate stations and both repeated focus endpoints are unchanged.

The patent states f = 24.84 / 45.01 / 67.55 mm and F2.93. The model gives EFL = 24.838234 / 45.008649 / 67.553642 mm, BFD = 38.559853 / 54.813687 / 60.730459 mm, and nominal FOPEN = 2.93 at all stations. Exact physical-stop f-numbers recorded above are 2.926862 / 2.926796 / 2.927655. The engine half-fields at the printed stations are 38.0839° / 28.5762° / 18.7810°; these are state-derived angles, distinct from the patent's printed half-fields of 41.88° / 25.325° / 17.29°.

Sigma's A017 specification was re-read: 19 elements / 14 groups, three SLD elements and four aspherical elements agree with the model. The completed diagram comparison identifies SLD positions L12, L16 and L17 and aspherical positions L4, L9, L13 and L19. L12's 1.49700/81.61 and L16/L17's 1.59282/68.62 support inferred low-dispersion tags; the patent does not explicitly designate anomalous dispersion. The prior patent-figure comparison found the drawn rims 6–13% larger than the printed effective rims, with the same shape; no semi-diameter was changed. The maker's diagram image could not be fetched during this wording pass, so its position comparison is retained from the completed semi-diameter review.

Data changes are limited to the header comment, subtitle, DESIGN specification wording, element roles, inferred apd/apdNote on L12/L16/L17, and the focus description. The existing name, key and catalog-equivalent glass labels are retained. The analysis now uses the same name and plain technical wording for the glass proxies, infinity-only focus model, solved zoom path and source-rim clipping; approval history, runtime-test narration and package vocabulary were removed. Historical audit findings are retained; obsolete archive-binding paragraphs were removed and integration-pending labels closed in place. Before/after engine and focus-probe outputs were byte-identical across all 21 stations and both focus keyframes. The surface audit returned "OK — no validation errors" with the existing 0.92 gap allowance. Detailed dispersion, alternative cam-solve and ray-sampling figures are retained from the earlier audits rather than independently recalculated in this wording pass.

Open: The factory cam, finite-distance focus travel, production prescription, melts and suppliers remain unidentified. The printed G4a rims still clip the −0.75 representative ray at S24: maximum sampled overshoot 0.349798 mm at f/2.93 over zoomT 0.7125–0.9375, and 0.168031 mm at f/3.0 over 0.855–1.0. At printed tele f/2.93 the same ray overruns S24 by 0.417 mm after first meeting 23A. These are model limitations, not established production-lens vignetting. Page review remains with the coordinator under the Codex-run instructions.
