# ZeissCY70210mmf35 construction and validation audit

## Current disposition

Qualified Stage 4 model, READY_FOR_BATCH / INTEGRATION_PENDING (historical; closed by deployment validation on 2026-10-23). The independent exact-input and archive review is embedded; final private readback is separately recorded. This was not an integration or publication approval. The model is infinity-only, has a reconstructed continuous zoom and a fixed inferred iris. Applicable full-pupil and source-point failures below remain FAIL. Integration was NOT_RUN / INTEGRATION_PENDING (closed 2026-10-23).

The unchanged scientific pair is data e8b25d9dee1d398649a6d446ca196aea37b5a9340a0276d01905dab351573be2 and analysis fb8917412401c8b0b7cf01d61347263eab3b4b4cbdee590c7f77ed6e957df66d. A qualified model does not certify an exact factory prescription, full nominal aperture, all fields, or manufacturer MTF reproduction.

## Source custody and literal construction

The complete six-page US4303312A original, four-page manufacturer Cat.104728 sheet, and exact selected intake card are included. Original description and repeated claim values are separately preserved in the fresh independent source baseline. Every physical radius, thickness, three paired zoom rows, ordered medium, and explicit d-line coordinate is unchanged. The distinct 1.80517 and 1.80518 indices are not harmonized. Fifteen glass elements, twelve air-separated groups, three cemented shared interfaces, and four functional cells are retained. No glass equivalent is substituted for a printed index/Abbe pair.

Source/model distinctions are explicit: actual source focal lengths are approximately 72.15–203.20 mm, not a forced 70–210 normalization. The authored final gap remains 49.18 mm despite literal Gaussian residuals +0.059323234, −0.004812378 and −0.031162952 mm. The printed total 227.87 mm differs from literal vertex span plus image distance, 227.806 mm. Maker telephoto principal-plane reference and the literal first-vertex result disagree. These are recorded conflicts, not repaired cells.

## Continuous zoom and focus scope

CamReconstruction.py derives a positive two-mover branch with fixed variable-gap sum 53.926 mm and fixed front/rear cells. Target EFL and Gaussian BFD are piecewise linear between the calculated literal source stations. A quadratic elimination solves the intervening mechanical positions. The other root is retained as an inadmissible alternative. There are 257 nodes, only three marked published. Stages 3, 5, 9, 17, 33, 65, 129 and 257 demonstrate convergence. Maximum sampled/native interpolation errors are approximately 0.000357406 mm EFL and 0.000245953 mm BFD. Fixed-image-plane defocus is not eliminated and reaches approximately 0.059346 mm.

The independently derived quadratic, 4,097 samples, and outward-rounded full-interval Gaussian-pole exclusion are separately executable. The slight initial d14 rise is retained: native node maximum 17.060002894 mm versus wide 17.054 mm. This conflicts with strict largest-at-wide prose while agreeing qualitatively with Figure 2. The cam is a disclosed reconstruction, not a recovered factory mechanism or a claim of smooth velocity.

The maker's front-element focusing wording is genuine but does not uniquely identify which front assembly moves. No cemented interface is split. Required focus rows remain identical, no finite conjugate is published, and finite MTF guards refuse. The maker's 1.8 m normal focus and separate 0.3 m macro procedure are not modeled movement laws.

## Iris and geometry revisions

The maker exit-pupil position gives an inferred Gaussian stop location 2.002843210663496 mm after R21, followed by 25.997156789336504 mm before R22. The fixed rear cell and constant maker exit-pupil diameter support a fixed physical iris. Explicit zoom.apertureModel is fixed-iris; no STO.sd is authored. Native wide calibration gives radius 17.416188031646918 mm. Its independently traced physical f-number varies from 3.500000 to about 3.511884 while the native FOPEN helper remains nominal 3.5. This does not prove an exact factory f/3.5 iris. The maker-derived 27 mm exit diameter and reconstructed approximately 28.866326 mm diameter remain distinct.

Initial clear-aperture guesses and their failed geometry are preserved, not overwritten. Initial R7/R8 16 mm violated the default gap-sag rule. Figure-consistent 15.4 mm avoids an override. The initial 8 mm rear meniscus estimate was a mistaken drawing interpretation; original Figure 1, scaled only as a schematic estimate against the published 56 mm front envelope, supports about 13 mm. Other rear-cell caps are disclosed drawing-informed hypotheses. The published front 28 mm semi-envelope was not enlarged to force nominal-beam transmission. No gap-sag override is used: maximum 0.8938093524 remains below 0.9. Native rendering has no hidden trim. Independent analytic solid-pair geometry includes all 105 pairs and between-knot affine separation reasoning.

## Aperture, field and failure scope

Nominal per-f-stop marginal-calibrated launch disks, actual viewer helper pupils/quick-select iris settings, and ordinary normal-density display fans are separate tests. A chief-centered diagnostic disk is not called an ordinary viewer fan. Ghost display continuation is not treated as physical transmission. Actual quick-select uses the logarithmic slider mapping and fNumberAtStopdown. For this specific candidate the executed FOPEN stays 3.5, so the earlier raw-3.5 scaling concern was a conditional diagnostic, not an observed numerical over-opening.

Applicable full nominal f/3.5 axial transmission FAILS. Independently checked actual-helper full-radius axial bundles FAIL at all 198 tested zoom/aperture combinations, including marginal iris clips when stopped down. Nominal independently calibrated stopped-down beams pass their separate tests. These are disclosed physical clipping results, not N/A and not internal tracing failures.

Source/maker endpoint, exact 36×24 mm format, native rounded 43.3 mm diagonal, and heuristic fields are labeled separately. Strict all-tested coverage FAILS at three unclaimed heuristic boundary/aperture combinations. Required declared source/product/format bundles retain nonzero sampled coverage. Exact tele maker 6° reaches about 22.072451545 mm, beyond the unmodified 21.65 mm analysis reference. Public computeMtf at fraction 1.0195127734 refuses with invalid-input and no fields. A separately labeled diagnostic expands only prepared-state source.imageCircleMm to that target. Optical arrays, tracing, candidate metadata and original public refusal remain unchanged.

All historical raw native failed/noBracket events remain visible. Complete independent boundary tests exclude both signed caps and the finite straight rim join: 577 nominal and 535 actual-helper failures after STO miss the entire next glass solid in air; 6,981 and 7,660 respectively miss the entire first solid. They are not admitted internal tracing defects, and are not relabeled successful rays. Surviving material checks include intended and unintended solids, incoming air and image-side air in the actual-helper audit. No zero-vignetting condition is imposed.

Reference MTF convergence is a numerical property of the sampled model, not manufacturer-curve agreement. The author chain contains 234 reference fields; the independent chain contains 40 reference fields and four maker-endpoint diagnostics. Photopic support is unavailable because the high-Abbe material lacks required partial dispersion. Finite focus support is also unavailable. Neither refusal is counted as a converged field.

## Independent review provenance and corrections

A separate reviewer froze original-only extraction and calculations at 23:18:02 UTC before candidate exposure. Exact frozen baseline SHA-256 is 8c5f9c430cc29448a5a0f61097419d64004a4235945ee773830aba12da721f68. The consolidated evidence retains all 44 inventoried artifacts, their exact byte hashes, original code, raw initial outputs, source observations and the complete replay contract. Large artifacts use lossless zlib/base64 encoding. Original PDFs and the unchanged candidate are references to identical flat package files, not omitted evidence.

The mandatory verifier re-executes the unchanged fresh-source extraction, first-order calculation, current-data source/cam/control/geometry adapter and twelve real mutation fixtures. It does not accept a saved PASS flag as proof. IndependentNativeReplay.py loads the actual exported TypeScript and verifies its exact JSON bytes against the independently reviewed parsed object, then executes six unchanged native scripts sequentially and compares every scientific output field exactly. The independent reviewer's initial assumption that runtime FOPEN would equal the physically traced f-number is preserved with its failed draft and correction; no optical data was edited for that correction.

Earlier author source/geometry guesses, the initial functional-group calculation error, and provisional front-cap-only failure interpretation remain in versioned private checkpoints and/or consolidated historical records. The final complete-solid classification is a stricter executed test, not a retrospective assertion that the earlier incomplete classification passed.

## stage3_v001 sealing record

The full clean-input executable closure passed with unchanged pair and scientific inputs. Historical pending-classifier outputs remain intact. Final payload CRC/hashes and final portable replay are checked by the sealing script; external independent archive binding and private readback are preserved separately.

## stage4_v001 sealing record

The full clean-input executable closure passed with unchanged pair and scientific inputs. Historical pending-classifier outputs remain intact. Final payload CRC/hashes and final portable replay are checked by the sealing script; external independent archive binding and private readback are preserved separately.

## 2026-10-23 — Semi-diameter pass against the patent figure

Source: `patents/US4303312A.pdf`, PDF page 2 (sheet 1 of 2), Fig. 1, the patent's only cross-section. The sheet is a 300 dpi bilevel scan with the axis vertical and the object at the bottom of the page. Fig. 1 is drawn at the middle published position, not at the wide end: the measured variable gaps are d5 31.2, d11 7.7 and d14 13.2 mm, against 31.370 / 9.145 / 13.411 mm at 130.17 mm (wide is 1.2 / 35.672 / 17.054 mm, tele 48.326 / 2.4 / 3.2 mm).

Scale: the r1 to r27 vertex span is 1687.5 px for 178.626 mm. That span does not change with zoom, because the three variable gaps always sum to 53.926 mm, so the scale is 0.1059 mm/px. Group D (r15 to r27, 792 px for 83.9 mm) gives 0.1059 mm/px and group A (r1 to r5, 180 px for 18.7 mm) gives 0.1039 mm/px. Each rim is half the distance between the drawn rim lines on the two sides of the axis, which cancels the scan's 0.15° axis tilt. The drawing is hand-drafted: d11 is drawn about 1.4 mm short and the r12 curve is drawn shallower than R = −66.834 mm.

Ray floor: the stated on-axis beam is the maker's entrance pupil from Cat. 104728: 19.9 mm at f = 72.0 mm and 56.0 mm at f = 203.0 mm. It is traced as a fixed-iris beam of about f/3.615 to f/3.629 across all 257 nodes, giving entrance pupils of 19.96 mm at the short end and 56.00 mm at the long end, so both maker values are covered. Only surfaces that clip this beam were raised, each by the least amount at 0.1 mm precision. Elements that the figure draws square-cut keep equal faces.

| Surface | Before (mm) | Fig. 1 (mm) | Maker-beam ray (mm) | f/3.5 ray (mm) | After (mm) | Evidence |
|---|---|---|---|---|---|---|
| R1 / R2 / R3 | 28 / 28 / 28 | 28.1 (square block) | 28.00 / 27.04 / 26.89 | 29.03 / 28.00 / 27.87 | unchanged | printed 56 mm front diameter, figure agrees |
| R4 / R5 (L3) | 26 / 26 | 26.6 (square) | 26.80 / 26.51 | 27.77 / 27.52 | 26.8 / 26.8 | maker-beam clip, figure +2% |
| R6 / R7 (L4) | 16 / 15.4 | 16.5 rim; R7 curve ends at 14.9 before a bevel | 15.33 / 14.68 | 15.91 / 15.20 | unchanged | within noise |
| R8 / R9 (L5) | 15.4 / 16 | R8 curve ends at 14.6 before a bevel; rim 15.9 | 14.85 / 15.49 | 15.32 / 16.01 | unchanged | within noise |
| R10 / R11 (L6) | 16.5 / 16.5 | 17.1 (knife edge) | 16.62 / 16.70 | 17.27 / 17.34 | 16.8 / 16.8 | maker-beam clip, figure +2% |
| R12–R14 (L7/L8) | 18 | 18.2 (square block) | 16.74 / 17.67 / 17.86 | 17.37 / 18.40 / 18.56 | unchanged | within noise |
| R15 / R16 (L9) | 19.3 | 19.6 (knife edge) | 18.97 / 19.10 | 19.72 / 19.83 | unchanged | within noise |
| R17 / R18 (L10) | 19.3 | 19.3 | 19.09 / 18.91 | 19.81 / 19.65 | unchanged | figure agrees |
| R19–R21 (L11/L12) | 18 | 18.6 (square block) | 18.26 / 17.81 / 16.95 | 18.91 / 18.53 / 17.60 | 18.3 | maker-beam clip at R19, square block |
| R22 / R23 (L13) | 13 | 13.0 | 12.24 / 11.66 | 12.67 / 12.07 | unchanged | figure agrees |
| R24 / R25 (L14) | 14.5 | about 15.3 | 8.32 / 7.87 | 8.60 / 8.13 | unchanged | +5%, nothing clips |
| R26 / R27 (L15) | 14.5 | 15.2 | 7.10 / 6.90 | 7.34 / 7.14 | unchanged | +5%, nothing clips |

Retained values: every unchanged rim is within about 6% of Fig. 1, and the figure's step order between neighbouring elements and faces is the same as the stored order. L14 and L15 read about 5% larger in the figure, but nothing clips there, so they stay at 14.5 mm. Fig. 1 draws bevels on the facing concave surfaces R7 and R8. Their curves end near 14.9 and 14.6 mm, and the outer rims of L4 and L5 are 16.5 and 15.9 mm. The stored 15.4 mm caps lie between those readings and are kept, which also keeps R7/R8 under the default gap-sag limit.

Clearance results after the edit: the maker beam passes every surface at all 257 nodes. The nominal f/3.5 beam still clips 14 surfaces, and passing it would need R1 29.03, R4 27.77, R5 27.52, R9 16.01, R10 17.27, R11 17.34, R13 18.40, R14 18.56, R15 19.72, R16 19.83, R17 19.81, R18 19.65, R19 18.91 and R20 18.53 mm. That residual is consistent with the maker pupils and is retained. With the engine's fixed 17.416 mm iris, the traced wide-open axial beam improved from f/3.668 at the short end and f/3.741 at the long end to f/3.606 and f/3.629. The pupil area relative to nominal f/3.5 rose from 87.5–91.1% to 93.0–94.2%; R19 limits the beam at the sampled nodes from 72.15 to 166.69 mm, and R1 limits it at the long end. The engine half-field (19.20°, 11.49° and 7.62° at short, middle and long), FOPEN 3.5 and the stop radius are unchanged. Corner chief-ray coverage stays at 100% at all 257 nodes, and the image-circle check finds no undersized surface. The surface validator reports no errors at the default 0.9 gap-sag limit. The largest shared-band fraction is still 0.894 at R7/R8, and the thinnest shared-band edge is still L8 at 1.335 mm (L6 is now 1.40 mm). The engine's vignetting curves are normalized to the on-axis beam, and they fall 1 to 1.5 points at the field edge (long end, 5.9°: 43.3% to 41.8%) because the on-axis reference now passes more light. No rim was reduced, so absolute transmission did not fall.

Maker diagram (Cat. 104728 page 1, drawn at the short end): the coordinator's notes are confirmed by a local render. The diagram shows 15 elements in 12 groups in the same arrangement: the front cemented pair, a meniscus and three negative-group elements; the cemented negative doublet; four positive elements with the iris marks behind them; the meniscus; and the rear pair. The sketch draws L4 relatively taller than Fig. 1 does (about 0.73 of the front element against 0.59), which is stylization; the patent figure of the modeled example governs. No special glass or aspherical surface is marked, and the prescription is all-spherical. The sheet's 178.6 mm first-to-last vertex distance matches the 178.626 mm prescription span.

Open limitations: the rims are drawing estimates, not factory free diameters. The R7/R8 readings depend on reading the drawn bevels as the end of the optical surface. The overlay of the model outlines on Fig. 1 is kept as a scratch file outside the repository.

## 2026-10-23 — Deployment validation and wording pass

The deployment source review was re-read against the rendered US 4,303,312 A tables on PDF pages 4–6 and the current prescription: 27 radii, 26 intersurface intervals, 15 d-line nd/νd pairs, all three paired zoom rows (nine variable-gap values), and the 49.18 mm image interval have zero transcription mismatches. All surfaces are spherical, so there are no aspheric coefficients. The inferred iris still divides the printed 28.0 mm interval into 2.002843210663496 and 25.997156789336504 mm. The three variable-gap arrays retain 257 nodes with identical optical spacings at both focus keyframes.

The patent's 72.15 / 130.17 / 203.20 mm focal labels reproduce as 72.151124925 / 130.169756058 / 203.200283239 mm. Gaussian BFD is 49.239323234 / 49.175187622 / 49.148837048 mm against the printed 49.18 mm plane, preserving residuals +0.059323234 / −0.004812378 / −0.031162952 mm. The nominal FOPEN remains 3.5, the stop radius 17.416188031646918 mm, and the wide/middle/tele half-fields 19.2041° / 11.4949° / 7.6171°. Complete built and probe outputs before and after this wording pass are identical, including all zoom nodes and focus keyframes; the surface audit reports OK.

The maker sheet Cat. No. 10 47 28 shows the corresponding 15-element, 12-group arrangement, three cemented pairs and iris in the fixed rear group. Its rounded 178.6 mm vertex span agrees with the prescription's 178.626 mm. The preceding separate semi-diameter review governs the rim estimates; this wording pass changes no rim. Fig. 1 represents the middle zoom position, with rim agreement within about 6%; the maker sketch is more stylized at L4. The patent's 56 mm front-lens diameter is distinct from the sheet's 56.0 mm tele entrance-pupil diameter. The retained rims transmit about f/3.606 wide and f/3.629 tele, consistent with the maker pupils, while the nominal f/3.5 beam still clips 14 surfaces.

Changes in this pass are confined to the header, subtitle, four concise specs, all element labels and roles, and the focus description in the data file; the coordinator's name, key, visibility and catalog-equivalent glass labels are retained. The analysis now names those equivalents, leaves production melts unidentified, and removes package-process language, obsolete hidden status, test counts and the superseded claim that catalog glasses were not adopted. The historical assertion that L11 necessarily prevents multicolor calculation no longer describes the catalog-labeled model; catalog dispersion remains a qualified estimate. The audit closes the historical integration-pending status and removes replay/archive instructions for files outside this repository, preserving optical findings.

Open: production melts and suppliers, exact factory free diameters and iris, the factory zoom cam, front-focus assembly identity and travel, and the separate macro movement law remain unidentified. Source image-plane residuals, the d14 prose/figure conflict, the 227.87 versus 227.806 mm total, and the maker's tele principal-plane reference conflict remain documented. Historical interpolation extrema, diagnostic field limits and MTF convergence statements are retained as qualified model results and were not recomputed in this wording-only pass. Page viewing is reserved for the coordinator under the sandbox-specific instructions.

## 2026-10-23 — Second review: diagram, labels and movement

Independent comparison: newly rendered local page at 130.17 mm/infinity against a fresh 300 dpi rendering of US4303312A PDF page 2, Fig. 1, rotated object-left. The same numerical construction is drawn at the middle zoom position. PDF pages 4–6 were viewed for the prescription, paired zoom rows, group assignments and claims; page 3 supplies Fig. 2. The first-pass measurements and overlays were not used as measurement inputs. Scratch evidence is outside the repository in `scratchpad/r2/zeiss/review` and `scratchpad/r2/zeiss/renderq` under the assigned task directory.

Independent scale and silhouette readings: the first/last vertex crossings are approximately y = 2845/1157 px in the unrotated 300 dpi image, giving 178.626 / 1688 = 0.10582 mm/px. The rear-cell span is approximately 792 px for 83.9 mm, giving 0.10593 mm/px; the front-cell span is approximately 177 px for 18.7 mm, giving 0.10565 mm/px. The axis is near x = 1174–1176 px. Rim-line runs were located afresh on both sides, excluding leaders and brackets by eye. The table gives approximate ink-centerline readings rather than factory free diameters; drafting, line thickness and bevel endpoints contribute about 0.3–0.5 mm uncertainty.

| Element(s) | Stored sd, unchanged (mm) | Independent Fig. 1 rim estimate (mm) | Live comparison and decision |
|---|---|---|---|
| I / II | 28 throughout | 27.9, approximately 28.2 at outer ink edges | Tallest front square block; correct ordering above III |
| III | 26.8 / 26.8 | 26.3–26.7 | Square rim retained, slightly below I/II |
| IV | 16 / 15.4 | Outer rim about 16.3–16.7 | Rear face has a drawn bevel; unequal optical caps retained |
| V | 15.4 / 16 | Outer rim about 15.7–16.2 | Front face has a drawn bevel; unequal optical caps retained |
| VI | 16.8 / 16.8 | About 16.7–17.2 near the thin edge | Slightly taller than IV/V; no material silhouette defect |
| VII / VIII | 18 throughout | About 18.0–18.4 | Square cemented block retained; the drawing's R12 bowl is shallower than the numerical prescription |
| IX | 19.3 / 19.3 | About 19.3–19.7 | Tall front of D, near knife edge, retained |
| X | 19.3 / 19.3 | About 19.0–19.4 | Near IX height, retained |
| XI / XII | 18.3 throughout | About 18.4–18.8 | Square cemented block below IX/X, retained |
| XIII | 13 / 13 | About 12.8–13.2 | Small meniscus behind iris, retained |
| XIV | 14.5 / 14.5 | About 14.8–15.3 | Slightly shorter on site, within drawing uncertainty; no clip justifies widening |
| XV | 14.5 / 14.5 | About 15.1–15.4 | Slightly shorter on site, about 4–6%; retained without churn |

Visible differences are confined to the small rear-pair height difference, the curved-versus-bevel treatment of the facing IV/V edges, the drawn shallower R12 bowl, and Fig. 1's schematic variable-gap widths. No unintended neighbour wrapping or element overlap was visible. Equal-height square blocks already have equal face caps. In particular, IV/V are not squared by enlarging R7/R8: the figure actually draws bevels there. No semi-diameter, stop, engine field or policy field was changed. The current surface validator accepts the existing geometry without a policy override; no new `gapSagFrac` or rim-angle override is requested.

Changes are limited to source identifiers and missing annotations:

| Field | Before | After | Evidence |
|---|---|---|---|
| Element 1 label / diagramLabel | Element 1 / absent | Lens I / I | Fig. 1 and PDF p. 5: elements numbered I–XV |
| Element 2 label / diagramLabel | Element 2 / absent | Lens II / II | Same |
| Element 3 label / diagramLabel | Element 3 / absent | Lens III / III | Same |
| Element 4 label / diagramLabel | Element 4 / absent | Lens IV / IV | Same |
| Element 5 label / diagramLabel | Element 5 / absent | Lens V / V | Same |
| Element 6 label / diagramLabel | Element 6 / absent | Lens VI / VI | Same |
| Element 7 label / diagramLabel | Element 7 / absent | Lens VII / VII | Same |
| Element 8 label / diagramLabel | Element 8 / absent | Lens VIII / VIII | Same |
| Element 9 label / diagramLabel | Element 9 / absent | Lens IX / IX | Same |
| Element 10 label / diagramLabel | Element 10 / absent | Lens X / X | Same |
| Element 11 label / diagramLabel | Element 11 / absent | Lens XI / XI | Same |
| Element 12 label / diagramLabel | Element 12 / absent | Lens XII / XII | Same |
| Element 13 label / diagramLabel | Element 13 / absent | Lens XIII / XIII | Same |
| Element 14 label / diagramLabel | Element 14 / absent | Lens XIV / XIV | Same |
| Element 15 label / diagramLabel | Element 15 / absent | Lens XV / XV | Same |
| groups A | Absent | R1–R5 | Fig. 1, group table on p. 5 and claim table pp. 5–6 |
| groups B | Absent | R6–R11 | Same |
| groups C | Absent | R12–R14 | Same |
| groups D | Absent | R15–R27, including STO | Same |
| doublets D1 | Absent | R1–R3 | Shared R2, I/II; existing cemented D1 retained |
| doublets D2 | Absent | R12–R14 | Shared R13, VII/VIII; existing cemented D2 retained |
| doublets D3 | Absent | R19–R21 | Shared R20, XI/XII; existing cemented D3 retained |
| Analysis notation paragraph | Absent | Roman/Arabic correspondence and all annotation spans | Keeps prose consistent with the displayed labels |

Element names L1–L15 are retained because the patent's group table on PDF p. 5 also uses L1–L15. Roman diagram/inspector labels match Fig. 1. D1–D3 are consistent model identifiers for cemented components, not patent functional-group names. All fifteen type strings agree with the radius signs: I/II/VIII/XIII/XV are menisci; III/VI/IX/X/XI/XIV are biconvex; IV/V/VII/XII are biconcave. All surfaces are spherical, with no aspheric coefficients or A suffixes. Roles agree with fixed A/D, moving B/C and the patent's weak divergent XIII after the iris. No APD tag is authored or warranted by the patent. The source's high Abbe value for XI alone does not establish anomalous partial dispersion. The stop is correctly between XII and XIII, inside the printed 28 mm d21 interval; its numerical split remains a maker-pupil inference, not a printed patent stop coordinate. Gap labels d5/d11/d14 and Wide/Tele zoom labels are readable and correspond to the source.

Movement was checked against the paired table on PDF p. 5 with the table in view. The published rows are exactly:

| f label (mm) | d5 (mm) | d11 (mm) | d14 (mm) | B displacement from wide (mm, imageward positive) | C displacement from wide (mm, imageward positive) |
|---|---|---|---|---|---|
| 72.15 | 1.200 | 35.672 | 17.054 | 0 | 0 |
| 130.17 | 31.370 | 9.145 | 13.411 | +30.170 | +3.643 |
| 203.20 | 48.326 | 2.400 | 3.200 | +47.126 | +13.854 |

All 257 focal stations ascend wide to tele; gap rows follow the same order. A and D stay fixed: the three gaps sum to 53.926 mm at every node, with maximum floating-point deviation 7.11e-15 mm. B is strictly imageward. C moves objectward by 0.006002894 mm at first, reaching the sampled d14 maximum 17.060002894 mm at f = 73.963125 mm, then moves strictly imageward. This is qualitatively consistent with Fig. 2 on PDF p. 3 and preserves the already disclosed conflict with the strict largest-at-wide language on p. 4 and claim 1 on p. 5. The reversal between published stations is reconstructed, not a separately tabulated factory cam. No ordering or direction edit was justified.

Every focus pair is identical at indices 0 and 1: no optical group moves in focus. The source does not publish a finite-focus travel table. The existing description correctly qualifies maker front-element focusing to 1.8 m and the separate macro mode as unmodeled. The live near-end label says `Not modeled`, while the distance remains infinity even with `focus=1`; it does not claim a modeled 1.8 m conjugate. Both `mv=focus` requests, at focus 0 and 1, open the movement drawer in Zoom mode with Focus disabled. This UI fallback is outside these three files' authorized fields. Zoom overlays at wide and tele show four named groups and a maximum travel of 47.13 mm, with A/D stationary and B/C ending imageward. The probe's focus-1 best-image-plane adjustment is an infinity best-focus helper, not physical group travel or a finite conjugate.

Maker-diagram comparison is inherited explicitly, not a new image viewing: the preceding first pass records, “The diagram shows 15 elements in 12 groups in the same arrangement” and “No special glass or aspherical surface is marked, and the prescription is all-spherical.” Its recorded L4 proportion difference is retained. No maker image was downloaded, rendered or viewed in this second review.

Numerical checks before/after: the surface audit reports `OK — no validation errors`; the image-circle audit reports 1 lens, 0 undersized and 0 skipped; traced field coverage reports all 257 stations clear at the format corner. Built summaries before and after are identical, with no exception. At the three published nodes, engine half-fields are unchanged at 19.204106° / 11.494895° / 7.617122°, nominal FOPEN is unchanged at 3.5 throughout, and fixed stop radius is unchanged at 17.416188032 mm. The numerical optical-input hash remains `7fbc181802956091564287686afd2f6ad8349757359e3559a4f43254906659f6` across this pass.

The corner clearance probe at Y = 21.65 mm yields half-angles 16.86° / 9.23° / 5.89° at the published nodes, rather than applying the wide angle at tele. No `BLOCKS-CHIEF` remains at these traced corner angles across all 257 nodes, at either focus index. An explicit-omega cross-check of the three published nodes uses 16.5° / 9.23° / 6.0°: only the endpoints are maker field references, and 9.23° is a corner diagnostic, not a patent field claim. Nominal f/3.5 still produces `CLIPS-AXIAL` at R1, R4, R5, R9, R10, R11, R13, R14, R15, R16, R17, R18, R19 and R20. Required nominal maxima remain 29.03, 27.77, 27.52, 16.01, 17.27, 17.34, 18.40, 18.56, 19.72, 19.83, 19.81, 19.65, 18.91 and 18.53 mm respectively. This is the pre-existing aperture limitation, not a fully passing nominal-beam audit. In particular, enlarging the front rim to 29.03 mm would conflict with the patent's stated 56 mm front diameter on PDF p. 4. No rim was enlarged to improve aperture or off-axis transmission.

Wide-open engine vignetting curves, before → after, are identical; each list is field angle in degrees followed by geometric transmission percent, normalized by the on-axis reference:

- Wide: 0.0:100.0, 2.8:98.9, 5.6:95.2, 8.4:91.4, 11.2:78.5, 14.0:62.9, 16.9:41.9 → identical.
- Middle: 0.0:100.0, 1.5:99.5, 3.1:95.2, 4.6:91.4, 6.2:78.0, 7.7:64.0, 9.2:45.7 → identical.
- Tele: 0.0:100.0, 1.0:94.6, 2.0:84.8, 2.9:75.5, 3.9:65.8, 4.9:56.5, 5.9:41.8 → identical.

Live after-edit review covered wide/middle/tele infinity, middle focus 1, wide/tele zoom overlays, both focus-overlay URLs and inspectors I, IV, XI and XIII. Roman labels pack into staggered rows without overlap at those stations; A–D and D1–D3 are visible and attached to the correct components. Inspectors show the expected type, coordinates, catalog-equivalent glass and role. Every inspected focal-length line shows `FL = —`, because all fifteen elements lack the optional `focalLengthMm` field. The numerical isolated powers are available in the analysis and probe, but that field is outside this review's edit list. This is missing inspector information, not evidence that any radius or group power is wrong.

Glass review: every element resolves through the current coordinate-compatible catalog resolver; there are no `Unmatched` or unresolved elements. Resolutions are I/XII → SF6, II → N-BK7, III → N-KF9, IV/V/VII → N-LAK9, VI → SF5, VIII → E-FD8, IX → BACD4, X → N-PSK3, XI → N-FK5, XIII/XIV → LLF1 and XV → K-SSK4. These are qualified coordinate equivalents, not demonstrated production glasses. PDF pp. 4–6 publish only d-line nd/νd pairs: no named glass, extra spectral-line index or partial-dispersion coordinate for any element. In particular, KF9, SF8, SK4 and SSK4 are not printed names in those tables; the four glass strings and corresponding analysis phrases saying “printed ... coordinate” must not be read as a patent-named-glass identification. No glass string was edited. No wrong APD assignment or incompatible resolver result was found.

Open limitations retained: figure-derived free rims; 14 nominal axial clips; inferred iris location; static finite focus; reconstructed interstation cam and its disclosed d14 prose conflict; schematic R12 curvature versus the numerical table; and prior source-plane/total-length/cardinal-reference residuals. The glass wording ambiguity, missing inspector focal lengths and focus-overlay fallback are reported for coordination. Only the three assigned lens files were edited; no forbidden tests, generators, build or server operation was run.

## 2026-10-23 — Coordinator follow-up to the second review

Added element `focalLengthMm` values (in-air thick-lens focal length from each element's own faces) so the element inspector shows them; optics unchanged.

The Zeiss glass labels for elements 3, 8, 9 and 15 now say the printed nd/νd equal legacy Schott KF9 / SF8 / SK4 / SSK4 (the patent prints coordinates only, no glass names); resolution unchanged.
