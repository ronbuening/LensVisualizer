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

Retained. S4 and S5 at 25.5 (figure 25.39), S6A and S7 at 13.5 (13.59), S16 and S17 at 10 (9.59), S18 and S19 at 10 (9.66), S20 and S21 at 9.8 (9.45), S22 at 9.8 (9.23), S23A, S24 and S25 at 9.5 (8.81), S26A and S27A at 10.5 (9.97). G3 and L14 run 3–8 % over the figure, inside the noise band, with their step order right, and moving them would repaint the group. L12/L13 is the nearest to the bar at 7.8 %. Setting G3 and L14 to the figure changes no corner value below; fields inside the corner were not compared. L1 and L2 sit under the bar at 4–5 %; they moved because L2's tip stands above L1 in the figure and stood level with it, and because 27.5 mm left L2 a 0.28 mm edge against the 0.85 mm drawn. The move also takes L1 and L2 toward the fan limit below.

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

Engine half-field. This is the paraxial chief-ray estimate, which the engine never raises above its paraxial value. It falls by up to 5.03° across the eight stations from 18.5 to 22.9 mm, where S8 now limits it. The estimate puts the chief ray at 12.1 mm on S8 at 39.7°, where the real chief ray crosses at 9.45 mm, inside the 9.9 mm cap, so the traced field does not shrink. It drops below the corner field only from 18.5 to about 22 mm, and it sets the display field for off-axis rays and the aberration tabs there. No rim inside the figure restores it: 39.2° needs S8 at 11.9 mm, and that face would then cross L5's 10.8 mm rim. A `maxTraceFieldDeg` is one number for the whole zoom, so it does not fit either. The lower S1 also takes up to 0.64° off the 55 stations from 71 to 205 mm, where the estimate stays above the corner field. Thirty-three stations gain, by up to 0.46°.

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

Limitations. L14 stands 0.6 mm above L15 and L16, against 0.1 mm in the figure, a result of keeping it inside the noise band. Focus is infinity only, so `focus=1` draws the same section. Figure 1 is the wide state; the other five printed states were checked against the rendered section only.
