# Continuous-zoom review, 2026-10-23

Status: closed 2026-11-01, integrated after the deployment validation in the last section. Not manufacturer-validated.

JP2011248219A Example1, claim5 and ¶0014–0017 explicitly describe two turning points in G2 motion (the patent defines its term by changing trajectory tangent direction). Keep G1/G3/G4 piecewise-linear in the fixed-image frame and solve the paired D5/D14 G2 translation. Result has the required imageward/objectward/imageward phases. The independent six-station movement table discrepancy remains unresolved and is not substituted for direct-gap source data (closed 2026-11-01: the table is now used; see the last section). Infinity only.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

# Tamron B008 Example 1: authoring audit

## Job and reference versions

Fixed job: Tamron 18–270mm F/3.5–6.3 Di II VC PZD (B008), JP2011248219A Example 1. Original 15-page PDF and unmodified original card retain the indexed byte hashes. The later 2026-10-08 clearance row is READY and explicitly authorizes standard-conic interpretation. The older card and index SOURCE_HELD wording is preserved as history, not silently edited.

Current project: main 14da71d94ed3ab6ccf7aef70066f1e49670440ed. All 248 reused project blobs were compared with Git blob identities. The data/analysis specifications, template, defaults, taxonomy, authoring guide and integration handoff are identified in the manifest. No publication, engine edit, full build or corpus sweep is performed.

## Extraction and conventions

The author inspected the native numerical pages, malformed equation and Figure 1. All 31 printed surfaces, 17 material intervals (16 physical bodies plus the explicit 0.2000 resin), four aspheres and three direct-gap infinity states are retained. Nd establishes the d-line index; lengths are interpreted contextually as mm without claiming an explicit table unit declaration. Blank medium columns are modeled as air. Stop 15 retains the fixed 1.0000 air gap to G3. No rear plate exists in the source.

## Model transformations

The approved standard conic retains K and A2 through A12; A2 is zero throughout. This is an interpretation of malformed typography, not a verbatim rewrite. Direct D5/D14/D25/D31 values control. Surface 15 becomes STO with the schema plane sentinel. No numerical prescription correction, scaling, intermediate cam law or finite-focus reconstruction is performed.

## Glass review

Fifteen unique coordinates were newly compared against complete retained OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalog sources. Catalog bytes and retrieval provenance remain in supporting evidence. The resin coordinate has no compatible ordinary-glass match. Near/exact coordinate matches for the other media establish classes, not production supplier or melt identity. Stage 2 will retain relevant spectral evidence only when supported.

## Numerical and geometry results

Sequential reduced-angle recursion and separate ABCD multiplication agree. EFL is 18.5004644732 / 71.0046357080 / 291.2169605941; printed EFL is 18.5000 / 71.000 / 291.2015. BFD is 39.0562482510 / 82.0325205086 / 91.8718094663; printed D31 is 39.0550 / 82.0274 / 91.8692. These are not exact reproductions to the printed output digit. Residuals fall inside conservative input half-last-digit sensitivity budgets. Source rounding is plausible, not proven; no number is changed to force agreement.

Direct image-plane tracks are 133.0049 / 181.1375 / 214.9387. Native condition 1 gives 8.449787; combined G2–G4 EFL ratio gives −0.164206, agreeing with the two-decimal conditions. The malformed inequality glyph remains explicit. Full per-surface Petzval, group/material/cemented powers and pupil calculations are in results. Iris calibration is an inference, not a measured physical stop.

## Correction and discrepancy register

- Approved equation interpretation: unsquared y and trailing squared parenthesis in the facsimile are not silently reproduced as valid sag.
- Direct-gap versus movement-table axial offsets are retained: 0.0266 at middle and 0.0598 at tele in G4. No image-plane-drift explanation is asserted. (Closed 2026-11-01: a rigid offset of all four groups, D31 only; see the last section.)
- Native tele 291.2015 exceeds marketed 270 by 7.85%. This research-correlated prescription is not production-exact.
- Brochure publication date is not established; the 2010 page label and 2011 award/issue clues conflict.
- Independent source review has begun separately, but no Stage 4 approval is claimed here.

## Gate disposition

Stage 1: READY_FOR_DATA. Complete source extraction and mandatory first-order checks pass within the explicit precision-qualified treatment. Stage 2 tasks remain: measured/inferred aperture choices, exact full-pupil and off-axis checks, rim/edge/shared-band geometry, actual current-project schema/build/type/render checks and control-scope validation.

## Pending integration

INTEGRATION_PENDING. No repository write or publication. Whole-corpus validation and production build remain integration checks. (Closed 2026-11-01: integrated.)

## Stage 2 construction checkpoint

The final candidate retains every native source row/coefficient and all three station gaps. The first candidate's oversized estimated rims failed edge/slope/gap geometry. These failures were corrected by changing inferred radii only; the numerical prescription was never modified. Square rims were retained where practical, notably the hybrid body at 13.5 mm radius and the rear negative/positive pair at 8.4 mm. The resin's minimum thickness is positive. Default gapSagFrac 0.90 is sufficient; no override was used. (Superseded 2026-11-01: rims and gapSagFrac follow the last section.)

The standalone portable verifier passes 59 checks. Its asphere derivative/critical-point geometry sampling is complemented by the actual current-project validator and production shape diagnostics. All three stations pass validateLensData/buildLens, strict real LensDataInput TypeScript compilation, AST/literal value agreement and malformed-parser fixtures. Actual rendering reports zero hidden trim. Maximum computed air-gap intrusion is 0.889485; minimum sampled shared-band separation is 0.074086 mm.

Actual current-project ray checks cover 27,756 rays: three native zoom stations, source fields and APS-C corner framing, six field fractions, three pupil scales, 257 rays per bundle. Every full-open axial pupil sample transmits at every station. All sampled chief rays reach the image. Off-axis rays can be blocked by external rims or the iris; no sampled clipping occurs at the hybrid/cemented internal junctions. There are 106 raw noBracket events: 96 misses of S1 at telephoto and 10 misses of S9 at wide native full field. The project classifier and a separate reviewer line/sphere intersection calculation confirm bounded optical-cap misses. They remain blocked, not successful rays or unclassified solver failures. Raw counts remain preserved. The earlier Stage 2 checkpoint prose named the telephoto subset only; this wording correction does not alter its complete raw results.

The source supplies no stop diameter. Exact current-runtime calibration gives station radii 8.1766887875 / 7.9718085534 / 8.1722614382 mm, separately calibrated to f/3.44 / 6.03 / 6.50. These are not the paraxial calibration radii and do not independently establish the production iris schedule. All sixteen named solid-glass intervals resolve to compatible catalog classes; resin remains Unmatched. The TAF1 display class resolves through the current OHARA S-LAH66 alias, disclosed rather than represented as supplier evidence.

Stage 2 gate: READY_FOR_ANALYSIS. Quantitative optical scope is restricted to the three native infinity stations. The step-0.5 control selects these stations; arbitrary externally supplied intermediate states remain illustrative and unvalidated. No UI integration or complete continuous-law claim is made.


## Stage 3 analysis and quantitative claim map

The analysis was written from the actual formatted data revision bdb67f44a5452cf59623b01b1cc3b9ea7689bb3a13486f27f92f759888aac461 and executed results. Source facts, catalog classes and inferred geometry are explicitly separated. The author reviewed the element roles, group architecture, source references and numerical comparisons. No attribution of a particular aberration budget to individual elements, production supplier identity, APO performance or continuous focus law is invented.

- Identification/counts/special-body positions: evidence.productCorrelation plus complete manufacturer sources and independent source review.
- Group powers, tracks, BFD/EFL and architecture labels: results.sourceModel.states[*].groups/system/authoredTrack.
- Individual material-in-air powers and coordinates: parsed final data elements, checked against results.sourceModel.states[0].materials.
- Glass table and TAF1/S-LAH66 alias: evidence.glassEvidence and runtimeRecord.glass/spectral.
- Zoom movement and retained offsets: results.sourceModel.movement; original paragraph 0026.
- Asphere coefficients/departures: actual data.asph and results.implementedModel.states[0].geometry.asphereDepartures.
- Conditions/Petzval: results.sourceModel.conditions and system.petzval with per-surface contributions.
- Geometry limits: results.implementedModel.states[*].geometry, corroborated by real runtime validation/shape diagnostics.
- Exact-ray counts/stop calibration: evidence.runtimeRecord; complete raw runtime output preserved in supporting evidence. Sampled transmission counts are not integrated photometric throughput.

Stage 3 gate: READY_FOR_AUDIT, after clean replay and cross-file checks. Independent final approval is still pending.


## Stage 4 independent audit and disposition

A separate reviewer re-entered the original numerical pages and coded scalar-angle and ABCD calculations before seeing the author candidate/calculations. The baseline was frozen at 2026-10-09 01:20:26 UTC. Its exposure record acknowledges the fixed job card, workflow and equation-clearance context; it does not claim complete informational blindness. Frozen inputs/results and the original code hashes remain unchanged in evidence.independentPass. The portable verifier contains the reviewer's independently entered baseline and calculation body in a separately scoped function; only output-file writes became returned objects.

The reviewer then checked the actual final pair, all source mappings, material powers, conditions, movements, geometry and aspheric departures. A separate 10,001-radius geometry sample found minimum material thickness 0.1060010694 mm, maximum rim angle 63.20597135 degrees and maximum air-gap intrusion 0.8894841967. Independent line/sphere roots proved all 106 raw cap misses are blocked. The reviewer independently scanned 2,059 AGF rows across five vendors; CDGM was included in the author's six-vendor audit but not independently parsed. Both scopes are explicit. All 248 current-tree reference blobs and actual loaded-module identities match.

Exact technical pair approval is preserved as pair_approval.json, hash 5993f8593597d958c01abcecb79149ac0bd1d387230328d7a9eb004c40a3f4f1, including the exact data and final analysis hashes. Changes required by review were prose/evidence clarifications only: the S9 subset of raw aperture misses; preceding D12 rather than a small rear gap for L7; unambiguous semi-diameter wording; and direct primary B003 variant support. No source prescription, coefficient, gap or catalog coordinate was corrected. Final analysis punctuation/copyedit does not alter the approved data.

The canonical dossier contains nine root files, with unchanged original patent and card. Finalization includes exact membership and SHA-256 checking, clean extraction and external-output replay without overwriting packaged results. A post-seal independent acceptance receipt binds the exact archive hash separately, avoiding a circular archive/self hash. Final technical disposition: READY_FOR_BATCH within the three-native-infinity-station, approved-equation scope, subject to that exact sealed-archive acceptance. Integration remains INTEGRATION_PENDING (closed 2026-11-01: integrated); no CSV/index, engine, repository or published site was modified.


## V2 conversion — 2026-10-17

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main a85b198951829c52c07bfd83840331363a040449. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog testing was resource-killed and is not a pass. This format conversion is not deployment or complete optical acceptance.

Retained package status: QUALIFIED_SOURCE_STATIONS: JP2011248219A Example 1; approved asphere interpretation; native291.2015mm tele state retained, distinct deployedB003.

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 30 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.44306619720865115mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.

## 2026-11-01 — Deployment validation and fix pass

Source re-read. The 15-page JP 2011-248219 A was read from page images and its text layer: 31 surface rows (92 R, d, nd and νd values), 28 asphere values and 12 gap values at the ¶0024 states, no mismatches. The front page gives filing on 2010-05-28, publication on 2011-12-08 and Tamron as applicant; the inventor is 李大勇, "Dayong Li" on the US family and "Yi Tae-Yong" on the PAJ page. The patent heads this design 第１実施形態, so `source.example` now reads Embodiment 1.

First-order values, patent against model. EFL 18.5 / 71.0 / 291.2015 against 18.5005 / 71.0046 / 291.2170 mm. Back focus 39.0550 / 82.0274 / 91.8692 against 39.0562 / 82.0325 / 91.8718 mm. Full field 79.46° / 22.47° / 5.57° against 79.48° / 22.47° / 5.57° at Y = 14.5 mm. Condition (1) 8.45 against 8.4498, condition (2) −0.16 against −0.1642. Track, not printed, 133.0049 / 181.1375 / 214.9387 mm. Full-pupil LSA −0.05 / +0.12 / −0.03 mm, consistent with Figures 3, 5 and 7.

Focal length and embodiment choice. 291.2 mm is a printed design state, not an artefact: ¶0021, ¶0024, ¶0026, the US family, the 5.57° field and condition (1) all agree. It is 7.85% above the marketed 270 mm. Embodiment 2 traces to 272.120 mm (printed 272.113) with the same 16/13 construction, but its L9 is 1.48749/70.44, one LD-class element against the two on Tamron's drawing, its 14.7× misses the patent's 15× aim, and its printed 2ω and conditions (22.13°, 5.55°, 8.79, −0.18) disagree with its own prescription (22.41°, 5.94°, 8.755, −0.148).

Asphere equation. ¶0019 prints y without its exponent under the radical and a squared parenthesis after the denominator. K (−8.6353, S27 only) is legible, so this is typesetting, not a sign or digit question. LSA at wide/middle/tele: standard conic −0.05/+0.12/−0.03 mm; unsquared y +0.9/+6.8/+9.3; K read as κ +5/+35/+51; sign of K flipped −8/−33/−42. A trailing square on the denominator gives EFL 41.9/−327/−626 mm. Only the standard reading fits, and the first erratum is closed because no printed number contradicts another.

Reference line and B003. The header prints Nd; all 16 glass elements hit d-line catalog coordinates and none hits an e-line one. The model shares no radius with the B003, has 31 surfaces against 35, and comes from a different patent.

Zoom cam. The package cam used only the three ¶0024 states and missed ¶0026 by up to 2.79 mm in G1 and 2.57 mm in G4, with G2 peaking 2.2 mm above any printed value. ¶0026 is an ordinary state table: on the wide gaps it reproduces ¶0024's D5, D14 and D25 to 0.001 mm and traces to the printed focal lengths. The 0.0266/0.0598 offset is common to all four groups, so it lies in D31 alone, and the second erratum is closed. The cam now has 118 stations with all six printed states published. At the three ¶0026 states D5, D14 and D25 come from the table; D31 is computed BFD plus the interpolated ¶0024 residual, because the table value corrected for the offset still leaves 0.03 / 0.08 / 0.01 mm of defocus; and the f-numbers are interpolated because ¶0026 prints none. Model minus ¶0026 is rigid across the four groups: 0 / −0.034 / −0.100 / −0.027 / −0.054 / −0.060 mm from wide to tele. G3 and G4 are monotone curves in log f with G1 and G2 solved for EFL and focus, because interpolating the gaps directly reversed G3 and G4 near 100 mm. G2 turns only at 20.85 and 93.16 mm. Defocus peaks at 0.0051 mm at stations and 0.0092 mm between them. The iris runs 8.112 / 7.876 / 8.121 mm with one turn, at 71 mm. The computed EFL at the 140.001 mm state is 140.016 mm, from the table's 0.001 mm rounding.

Drawing comparison. As read from Tamron's SVG by the reviewer coordinating this pass: 16 elements; LD on the large G1 biconvex and on one element behind the stop; AD on the G1 meniscus behind it; hybrid aspherical on the first G2 element; two molded aspherical elements in the rear group. These read as L2, L9, L3, L4 with L4r, and L12 and L14. `apd: "inferred"` is set on L2, L9 and L3; the catalog equivalents give ΔPgF ≈ +0.032 (FCD1) and +0.003 (PCD4).

Fields changed in this pass: `source.example`; `source.errata` removed; `subtitle`; `catalog.specs`; element labels, roles and glass strings; `apd` and `apdNote` on three elements; `cemented` and doublet text (D1, H1, D3, D4 to C1–C4); `focus.description`; the BF gap label; spacing in six station labels; a new header comment. The analysis lost its opening block, stale iris radii and process text, and the S-LAH66 alias note was stale because TAF1 resolves directly. Prescription, rims and station values are unchanged. Glass resolved stays at 16 of 17, with the resin Unmatched.

Closed 2026-11-01: the rims had their figure-land pass against Figure 1; see the section below.

## 2026-11-01 — Semi-diameter pass against the patent figure

Source and scale. JP 2011-248219 A, page 11, Figure 1, wide state at infinity, read from the native 839 × 1206 px, 1-bit, 300 ppi raster. The sheet is tilted 0.14°, corrected from a line fit to the dash-dot axis. Eighteen vertex crossings against the prescription give 7.034 px/mm along the axis, rms 0.40 px, and predict the image plane 0.9 px from where it is drawn. Arc fits on the seven best-conditioned surfaces (S4, S8, S11, S13, S24, S26, S29) give 7.00–7.16 px/mm across the axis, mean 7.12, so the sheet is stretched about 1.2 % across the axis, and every rim below is divided by 7.12. Rim heights are line centres, the mean of both sides. One native pixel is 0.14 mm; a reading is good to about 0.1 mm.

Second reading. Figures 2, 4 and 6 are the coma plots at 18.5, 71 and 291.2 mm. Their fans stop short of the full pupil, which gives the design's own limits as pupil fractions. Tracing the model at the fan ends gives the height on each surface there.

| Surface | Before | Figure 1 | After | Evidence |
| ------- | -----: | ---------: | -----: | -------- |
| S1 | 27.5 | 26.16 | 26.2 | L1 flat rim |
| S2 | 27.5 | 26.51 | 26.5 | L2 tip |
| S3 | 27.5 | 26.51 | 26.5 | L2 tip; edge 0.83 mm, drawn 0.85 mm |
| S8 | 13.5 | cap 9.9–10.1, land to 13.59 | 9.9, land to 13.5 | Cap end by sag and by height; lower fan ends at 18.5 mm sit at 9.95 and 9.83 mm here |
| S9 | 9.7 | 10.81 | 10.8 | L5 flat rim |
| S10 | 9.7 | cap 8.7–9.4, land to 10.81 | 9.7, land to 10.8 | Land drawn; cap retained, see below |
| S11, S12 | 10 | 10.29 | 10.3 | L6 tip; step over L7 |
| S13 | 9.2 | curve merges with S12 by 9.7, edge 10.01 | 9.6, land to 10.0 | Faces would meet at 9.7 mm |
| S14 | 9.2 | 10.01 | 10 | L7 square rim |
| S28 | 8.4 | 9.87 | 9.9 | L15 square rim |
| S29 | 8.4 | cap 8.38, land to 9.87 | 8.4, land to 9.9 | Cap as stored; land drawn |
| S30, S31 | 8.4 | 9.90 | 9.9 | L16 flat rim |

Retained. S4 and S5 at 25.5 (figure 25.39), S6A and S7 at 13.5 (13.59), S16 and S17 at 10 (9.59), S18 and S19 at 10 (9.66), S20 and S21 at 9.8 (9.45), S22 at 9.8 (9.23), S23A, S24 and S25 at 9.5 (8.81), S26A and S27A at 10.5 (9.97). G3 and L14 run 3–8 % over the figure, inside the noise band, with their step order right, and moving them would repaint the group. L12/L13 is the nearest to the bar at 7.8 %. Setting G3 and L14 to the figure changes no corner value below; fields inside the corner were not compared. L1 and L2 sit under the bar at 4–5 %; they moved because L2's tip stands above L1 in the figure and stood level with it, and because 27.5 mm left L2 a 0.28 mm edge against the 0.85 mm drawn. The move also takes L1 and L2 toward the fan limit below. (Superseded 2026-11-01: G3 and L14 now follow the figure at no cost in light; see the second review.)

Lands. S8 sat on a 13.5 mm cap, which carried its rim back to z = 25.06 mm, around L5 and past L6's front vertex; the figure ends the cap at about z = 20.5 mm on a land square to the axis. `rimExtensionSd` keeps the cap at its figure end. A cut would have to clear the 10.87 mm beam on S8, which puts its land at about z = 21.4 mm, behind L5's 20.56 mm front rim, so no cut was used. S10's cap is unresolved between 8.7 and 9.4 mm because the curve leaves the land at a shallow angle, and the lower fan ends read 9.40 and 9.39 mm there. Stored 9.7 mm is retained: its land sits 1.2 px from the drawn one, and 9.4 mm would take the 21.477 mm corner from 77.2 % to 74.0 %. The S12 and S13 curves meet at 9.7 mm and are under one pixel apart from about 8.7 mm, so the S13 cap end is not readable; 9.6 mm is the largest cap that the gap limit admits, with 0.016 mm of air at its edge.

Gap limit. `checks.gapSagFrac` 0.98 is the smallest two-decimal value that admits the set: 0.97 refuses S8/S9 at 5.18 mm of the 5.305 mm gap, and S12/S13 needs 0.976. Neither pair crosses. The figure draws L5's front corner touching L4's land, and the model leaves 0.12 mm.

Clearance. The largest heights over all 118 stations, against the final rims: S1 axial 22.40, chief 23.29; S2 22.15, 21.85; S3 22.13, 20.98; S8 6.38, 9.45; S9 6.80, 8.98; S10 7.10, 8.61; S11 7.32, 8.57; S12 7.56, 8.17; S13 7.54, 7.95; S14 7.81, 7.69; S28 7.37, 5.35; S29 7.07, 5.40; S30 7.10, 5.76; S31 7.10, 6.08 mm. There is no axial clip and no chief block at Y = 14.5 mm, the traced corner chief ray reaches the format at all 118 stations, and all 118 stations stay within 3 % of the stated f-number. No clip needed raising, so no rim rose for rays. The asphere rims did not move, so the departures in the analysis stand.

| State (mm) | Corner field | Before | After | Engine half-field before | After |
| ---------: | -----------: | -----: | ----: | -----------------------: | ----: |
| 18.5 | 39.1° | 44.1 % | 48.3 % | 39.21° | 34.25° |
| 21.477 | 34.5° | 70.5 % | 77.2 % | 37.20° | 34.59° |
| 36.181 | 20.9° | 88.4 % | 91.2 % | 23.43° | 23.76° |
| 71 | 11.0° | 94.8 % | 97.0 % | 17.04° | 16.95° |
| 140.001 | 5.6° | 73.6 % | 70.9 % | 7.27° | 7.21° |
| 291.2 | 2.7° | 61.0 % | 62.2 % | 4.21° | 4.21° |

Corner values are the engine's full-pupil curve, wide open at infinity. Five states gain because the G2 and G4 rims rose to the figure. The 140 mm state nets −2.7 points: L1 and L2 cost it 5.0, and 27.5 mm on S1, S2 and S3 would give 75.9 %. The f-numbers and stop radii are unchanged.

Engine half-field. This is the paraxial chief-ray estimate, which the engine never raises above its paraxial value. It falls by up to 5.03° across the eight stations from 18.5 to 22.9 mm, where S8 now limits it. The estimate puts the chief ray at 12.1 mm on S8 at 39.7°, where the real chief ray crosses at 9.45 mm, inside the 9.9 mm cap, so the traced field does not shrink. It drops below the corner field only from 18.5 to about 22 mm, and it sets the display field for off-axis rays and the aberration tabs there. (Corrected 2026-11-01: the aberration tabs use the real-chief-ray field, not this estimate, and the crossover is at 20.85 mm; see the second review.) No rim inside the figure restores it: 39.2° needs S8 at 11.9 mm, and that face would then cross L5's 10.8 mm rim. A `maxTraceFieldDeg` is one number for the whole zoom, so it does not fit either. The lower S1 also takes up to 0.64° off the 55 stations from 71 to 205 mm, where the estimate stays above the corner field. Thirty-three stations gain, by up to 0.46°.

Fan limits left in this log. The figure does not back these, or the model cannot carry them. Patent ends are read against each plot's full span, to about 0.01; model ends are stop heights over the stop radius, traced to the final rims.

| State (mm) | Side | Patent fan ends, Y = 14.5 / 13.05 / 10.15 / 7.25 | Model ends |
| ---------: | ---- | ------------------------------------------------ | ---------- |
| 18.5 | + | 0.62 / 0.69 / 0.83 / 0.93 | 0.565 / 0.650 / 0.825 / 1.00 |
| 18.5 | − | 0.29 / 0.55 / 1.00 / 1.00 | 0.260 / 0.585 / 1.00 / 1.00 |
| 71 | + | 0.85 / 0.88 / 0.91 / 0.96 | 0.895 / 0.925 / 0.990 / 1.00 |
| 291.2 | + | 0.83 / 0.86 / 0.90 / 0.93 | 0.915 / 0.940 / 0.995 / 1.00 |
| 291.2 | − | 0.29 / 0.37 / 0.51 / 0.66 | 0.370 / 0.445 / 0.600 / 0.760 |

- The lower rays at 291.2 mm end at 23.84 / 23.97 / 23.74 / 23.57 mm on S2. Figure 1 ends the cemented zone at 23.6 mm, where L1's flat rear land meets S2, on both sides. The fans alone do not separate S2 from S4 or S5, which spread as little, but the figure draws a land only at S2. S2 at 23.7 mm would give corners of 86.3 % at 36.181 mm, 59.4 % at 140 mm and 55.0 % at 291.2 mm. It is not applied: a cemented junction takes neither a cut nor an extension, and the app draws a straight edge between rim points, so it would turn L1's square rim into a long chamfer. The drawn land stays unmodeled and the lower tele fan stays about 0.09 wider than the patent's.
- The upper rays at 71 and 291.2 mm, and at Y = 7.25 mm at 18.5 mm, end at 7.90–8.02 mm on S25. The figure cannot show a land there, since S25's sag changes 0.11 mm between 7.95 and 8.8 mm, under one pixel, and it draws L12/L13 to 8.81 mm.
- The upper rays at 18.5 mm end at 9.12 / 9.13 / 9.13 mm on S26A. The figure runs S26A to the 9.97 mm edge with no land.

Maker drawing. Tamron's construction drawing, viewed locally, shows the same 16 elements in the same order, with LD on L2 and L9, AD on L3, the hybrid on L4 and molded aspheres on L12 and L14. It agrees with Figure 1 on every land above: L1's rear step, L4's rear land with L5 seated on it, L5's square rim, L6's tip with L7 against it, and L15's rear land. It draws L14, L15 and L16 level and G3 lower, as Figure 1 does. Two differences: it chamfers L7's rear corners, and it draws L13 about 8 % lower than L12, where Figure 1 gives them one flat rim. The patent figure governs, and no rim was set from the drawing.

Limitations. L14 stands 0.6 mm above L15 and L16, against 0.1 mm in the figure, a result of keeping it inside the noise band. (Closed 2026-11-01: L14 now stands 0.1 mm above them; see the second review.) Focus is infinity only, so `focus=1` draws the same section. Figure 1 is the wide state; the other five printed states were checked against the rendered section only.

## 2026-11-01 — Second review: diagram, labels and movement

Compared. The live page at all six printed states, `focus=1` and both `mv` overlays, against JP 2011-248219 A page 11, Figure 1, read again from the native raster. Scale is 7.036 px/mm along the axis from 18 vertices plus the image plane (rms 0.45 px) and 7.13 px/mm across it from the S2 and S4 arcs (7.10–7.22 on the four sides), which agrees with the first pass. Rims below are line centres, the mean of both sides, good to about 0.1 mm. Tamron's construction drawing was viewed locally as a check on order, proportions and special-glass positions; no rim was set from it.

Silhouette. G2, L15 and L16 sit on the ink and did not move. G1 reads 26.16 / 26.50 / 25.40 mm, and the zoom-node budget below holds S1–S3 0.35–0.39 mm above that. Two proportions were still off: L14 stood 0.6 mm above L15 and L16 against 0.1 mm drawn, and all of G3 ran 0.3–0.7 mm tall, so L8 and L9 stood level where L9 is drawn higher, and the step from L10's tip to L11's rim was missing. L14 could not come down alone, because L8 and L9 at 10.0 mm would then stand level with it where the figure draws them 0.4 mm lower. Moving all twelve faces costs no light at any field of any printed state, so they now follow the figure. The drawing shows the same order, with L14 level with L15 and L16 and G3 lower than both.

Every cut and land against the package baseline. Light is points lost at the worst field of the printed states, from `rimcost.mjs --loo`.

| Face | Kind | Figure 1 | Baseline | Final | Light | Verdict |
| ---- | ---- | -------: | -------: | ----: | ----: | ------- |
| S1 | cut | 26.16 | 27.5 | 26.55 | 3.0 with S2, S3; lens nets 0.7 | partly raised, 0.39 above the figure |
| S2, S3 | cut | 26.50 | 27.5 | 26.85 | with S1 | partly raised, 0.35 above the figure |
| S8 | cut and land | cap 9.9–10.1, edge 13.60 | 13.5 | 9.9, land to 13.5 | 0.0 | keep: slight and spacing |
| S10 | land | cap 8.7–9.4, edge 10.80 | 9.7 | 9.7, land to 10.8 | 0.0 | keep: slight, redraws the rim |
| S13 | land | edge 10.06 | 9.2 | 9.6, land to 10.0 | 0.0 | keep: improved, cap above baseline |
| S16, S17 | new cut | 9.57 | 10 | 9.6 | 0.0 | keep: slight |
| S18, S19 | new cut | 9.68 | 10 | 9.7 | 0.0 | keep: slight |
| S20, S21 | new cut | 9.43 | 9.8 | 9.4 | 0.0 | keep: slight |
| S22 | new cut | 9.26 | 9.8 | 9.3 | 0.0 | keep: slight |
| S23A, S24, S25 | new cut | 8.84 | 9.5 | 8.8 | 0.0 | keep: slight |
| S26A, S27A | new cut | 10.03 | 10.5 | 10 | 0.0 | keep: slight |
| S29 | land | cap 8.38, edge 9.89 | 8.4 | 8.4, land to 9.9 | 0.0 | keep: slight, redraws the rim |

The budget was applied at all 118 zoom nodes, not only at printed states, because the slider passes through them. The final worst loss over all nodes is 2.7 points, at 7.5° at 104.3 mm, and the worst gain is 7.6 points. At the printed states the worst loss is 0.7 points, at 5.6° at 140.001 mm; printed losses appear only at 4.7° and 5.6° at 140 mm (0.2, 0.7), and every other printed sample gains or holds. No land or cut was removed. The S8 cut costs nothing, since 13.5 mm gives the same curve at every state, and it is also needed for spacing: with L5 at its drawn 10.8 mm, 13.5 mm is refused at 6.03 mm of sag against 5.199 mm allowed and 9.95 mm at 5.22 mm, so no value above 9.9 mm passes. `checks.gapSagFrac` stays 0.98, because 0.97 refuses S8/S9 at 5.18 mm against 5.146 mm and 0.977 is the lowest that passes. Rims above baseline at S9, S11, S12, S14, S28, S30 and S31 keep their figure support from the first pass.

| State (mm) | Corner field | Baseline | First pass | Final |
| ---------: | -----------: | -------: | ---------: | ----: |
| 18.5 | 39.1° | 44.1 % | 48.3 % | 48.3 % |
| 21.477 | 34.5° | 70.5 % | 77.2 % | 77.2 % |
| 36.181 | 20.9° | 88.4 % | 91.2 % | 91.2 % |
| 71 | 11.0° | 94.8 % | 97.0 % | 97.0 % |
| 140.001 | 5.6° | 73.6 % | 70.9 % | 72.9 % |
| 291.2 | 2.7° | 61.0 % | 62.2 % | 63.1 % |

Zoom nodes. At S1 26.2 and S2–S3 26.5 mm the loss met the budget at the printed states but reached 4.2 at 97.5 mm, 4.8 at 109.2 mm and 4.1 at 122.2 mm. S1 26.55 and S2–S3 26.85 mm bring every node inside 3 points. All of the remaining loss comes from these three faces, since restoring them gives 0.0 at 24 nodes sampled across the range.

Clearance and rays. The validator passes, the traced corner reaches the format at all 118 stations and there is no axial clip or chief block. The closest axial floors on the moved faces are 8.65 mm on S17, 8.78 mm on S18, 8.57 mm on S20, 8.28 mm on S22, 8.00 mm on S23A and 7.96 mm on S26A. `stopHousingSD` follows L8 from 10.0 to 9.6 mm, against the stop tick drawn to about 9.8 mm.

| State (mm) | Raw half-field, baseline | Raw, final | Analysis field, baseline and final |
| ---------: | -----------------------: | ---------: | ---------------------------------: |
| 18.5 | 39.21° | 34.25° | 39.13° |
| 21.477 | 37.20° | 34.59° | 34.47° |
| 36.181 | 23.43° | 23.76° | 20.85° |
| 71 | 17.04° | 17.17° | 11.00° |
| 140.001 | 7.27° | 7.27° | 5.62° |
| 291.2 | 4.21° | 4.21° | 2.73° |

Engine half-field. The raw estimate is still 34.25° at wide, and this review did not move it. It is not a defect. `computeAnalysisFieldGeometry` follows the real chief ray to the format corner, so the tabs that use it reach 39.13° at wide with or without the S8 cut, and the analysis field is identical to baseline at all six states. The raw value sits below the analysis field only at the five stations from 18.5 to 20.85 mm. What it changes there is the diagram's off-axis fan, which draws at 0.6 of the raw value, 20.6° against 23.5° at wide, and the legend figure beside it. The MTF field starts from it and refines by tracing. F-numbers 3.44 / 3.683 / 4.516 / 6.03 / 6.288 / 6.50 and stop radii 8.112 / 8.063 / 7.936 / 7.876 / 7.932 / 8.121 mm are unchanged.

Labels and tags. Found correct: G1–G4 and C1–C4 brackets and ranges, with the hybrid as doublet C2; the patent has no element signs, so L1–L16 are sequential, with L4r for the resin; every `type` against the signs of R; aspheric marks on S6, S23, S26 and S27 only, as ¶0022 prints them; the stop between L7 and L8, 1.0 mm before L8; gap labels D5, D14, D25 and BF; `focalLengthMm` on all 17 entries, shown in the inspector with no blank. `apd: "inferred"` on L2, L9 and L3 matches the grey LD and orange AD elements on the drawing, and the blue hybrid and brown molded elements fall on L4 and on L12 and L14. Patent Positions mode offers the six printed states. One change: the L12 `role`, the header and the analysis stated L12/L13 as the subgroup claim 3 shifts. Claim 3 and ¶0012 name no elements, and S20–S25 is negative too (−52.7 mm against −28.9 mm for S23–S25), so the wording now says that this is a reading. Departures in the analysis are recomputed at 8.80 and 10.00 mm.

Movement. Stations ascend wide to tele and all four gap columns follow that order. Figure 1's four arrows end at the TELE column on the object side, with G2's as the S-curve. ¶0026 counts + toward the object. Model displacement from wide, in mm, and model minus ¶0026:

| State (mm) | G1 | G2 | G3 | G4 | Model − ¶0026, all four groups |
| ---------: | -: | -: | -: | -: | -----------------------------: |
| 21.477 | 0.901 | −0.400 | 3.337 | 4.452 | −0.033 to −0.034 |
| 36.181 | 17.831 | 3.741 | 15.186 | 18.451 | −0.100 to −0.101 |
| 71 | 48.133 | 19.658 | 37.718 | 42.972 | −0.026 to −0.027 |
| 140.001 | 71.359 | 19.691 | 41.637 | 47.470 | −0.054 to −0.055 |
| 291.2 | 81.934 | 17.063 | 46.300 | 52.814 | −0.060 |

G1, G3 and G4 run monotonically objectward. G2 turns twice, at 20.85 and 93.16 mm, and the printed values need both turns: −0.366 then +3.842, and 19.746 then 17.123. The second peak is 20.25 mm from wide, 0.51 mm above any printed value, and its position is inferred. No gap column turns. The model's offset from ¶0026 is the same for all four groups at each state, so it is the rigid offset recorded above, not a shape error.

Focus. Not modeled, and every gap pair holds the same value twice. The patent's only focus wording is the state name 無限遠合焦状態 in ¶0018 and ¶0027; "フォーカス" appears only inside "バックフォーカス". No group, direction or near-focus spacing is printed, so `focus.description` is right. The slider's far end reads "Not modeled".

Glass. L4r is the only `Unmatched` entry. ¶0022 on page 6 gives it nd 1.51460 and νd 49.96 and nothing else, with no name, further line index or partial dispersion.

Limitations. L1's flat rear land at 23.6 mm stays unmodeled, because a cemented junction takes no land, so L1 keeps a 0.3 mm slant to L2's tip. S10's land sits about 1.2 px, 0.17 mm, behind the drawn one, because moving it means cutting a cap that carries light. L11's rim slants 0.1 mm to carry L10's tip, where the figure draws a step of 0.17 mm. Figure 1 is the wide state, so the other five states rest on the rendered section and the movement table.
