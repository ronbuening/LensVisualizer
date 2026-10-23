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
