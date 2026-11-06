# Audit — KONICA HEXANON AR 57mm f/1.2

## 2026-11-03 — Whole-source hypothetical reconstruction

Source transport, complete originals, CRC/member sets and payload hashes were independently checked by the consuming worker before construction. Primary table/figure pixels were inspected locally. All literal radii, total intervals and glass coordinates remain unchanged; source-native scale, wavelength convention, computed image plane, inferred stop/caps and diagnostic field assumptions were frozen before MTF. (Closed 2026-11-06: the source-native f = 1 scale is replaced by a uniform ×57.0072 scale; see below.)

Normal geometry rejects and initial proposals are retained. No tolerance override, optical retuning or performance-based cap selection. The admitted branch has zero hidden render trim and positive full-operating-disk clearance. The numerical model preserves clipping and the full saved raw failure/aim-status overlap. (Closed 2026-11-06: S4/S5 rims raised for the F/1.2 axial beam with a lens-specific gapSagFrac 0.99; see below.)

The nominal27 sampled source/diagnostic-angle MTF cases converge by normal0.01 criteria at the unchanged design plane. Six frequencies only, scalar sheared-pupil estimation, no independent physical-OPL/continuum/factory claim. Every refinement and raw pupil archive is retained; saved-array reconciliation is separate from the native estimator. (Closed 2026-11-06: these figures belong to the f = 1 model and do not describe the scaled file.)

No numerical finite source state or continuous motion law is authored. Retail association and source-native dimensions remain distinct. No catalog image circle is authored; source41° and maker42° differ. The earlier computed-circle catalog interpretation is withdrawn, with its original record preserved. (Closed 2026-11-06: the file now carries `konica-ar` and `135-full-frame`; the projection keeps the patent's 41°.)

Compiled viewer, mobile/comparison, corpus tests, build and final custody require their own terminal receipts. Historical source nomination/pending statuses do not declare model completion. Original source and prior archives remain unchanged. (Closed 2026-11-06: superseded by the deployment fix below.)

## 2026-11-06 — Deployment fix and wording pass

The file was held from deployment because it kept the patent's f = 1 scale under the production name, building a lens about 1.5 mm long, and its public text used package vocabulary. This pass scales it to 57 mm, sets the production identity and rewrites the text.

Source re-read. JP S47-19025 Y1 (local PDF, seven scanned pages, no text layer) was rendered and read. Printed page 241 (PDF page 3) carries the single example, f = 1, 1:1.2: all 13 radii, 12 thicknesses, 7 indices and 7 Abbe numbers match the file, with t6 = 0.285 split around the stop. Front page (printed 239): application 実願昭43-45827 filed 1968-06-03, published 1972-06-29, inventor 木下三郎 (Saburo Kinoshita), applicant 小西六写真工業株式会社. The text places the diaphragm between L3 and L4 and says the indices are d-line. The Seidel table (printed 242) puts its stop at the first surface; ΣIV = 0.21020 against the model's 0.2104 normalized. Fig. 1 (printed 244) is the section; Figs. 2–4 are plotted at f = 100. The ten conditions are met; the description gives the r11 lower bound as 1.2 f (printed 240) where the later discussion and claim give f.

Scale. The f = 1 file traced to EFL 0.9998733019 (built.mjs). s = 57 / 0.9998733 = 57.007223, rounded to 57.0072, multiplies every R, d and sd and the back focus. R and d are exact products; sd is rounded to 0.01 mm and the back focus to 0.00001 mm. No aspheres.

First order, before → after (built.mjs / probe.mjs): EFL 0.99987 → 56.99998 mm against the patent's f = 1 (57 mm); F/1.2 → F/1.2 (audit:aperture traces f/1.20, iris-limited); paraxial back focus 0.59678 → 34.0209 mm; total length 1.5119 → 86.1881 mm; stop radius 0.26263 → 14.9716 mm; half-field 20.5° (projection, the patent's 41°) unchanged.

Rims. Fig. 1 measured at 300 dpi: the vertex crossings fix 950.7 px per f-unit and agree with the prescription within about 3 px. Drawn rims (f-units): L1 0.454, L2 front 0.394, L3 top edge 0.354 with its concave rear ending near 0.28, L4 front near 0.28, L4/L5 0.334, L6 0.322, L7 0.314. The scaled estimates (26.13, 22.63, 15.96, 18.81, 18.38, 17.96 mm) agree within about 1% and are kept. S4 and S5 clipped the F/1.2 axial beam (f/1.26 traced at f = 1); audit:aperture --raise gave S4 17.96 → 18.98 and S5 17.96 → 18.97 mm, applied. The two faces would touch at 19.13 mm across the 1.14 mm gap and Fig. 1 draws them meeting, so `checks.gapSagFrac` is 0.99 (intrusion 0.982 of the gap; 0.017–0.02 mm of air at the rim). Geometric transmission wide open: on axis 90.2% → 100%, 20.5° 40.3% → 40.5%.

Stop. Kept at the midpoint of t6, 8.123526 + 8.123526 mm, as an inference from the text's "between L3 and L4"; the radius follows from F/1.2, and the iris clears S6 and S7 by 1.10 and 2.80 mm.

Fields changed: key `konica-hexanon-ar-57mm-f12-native-f1` → `konica-hexanon-ar-57mm-f12`; subtitle; specs; `source.patentNumber` `JP S47-019025 Y1` → `JP S47-19025 Y1`; `catalog.lensMounts` `["konica-ar"]` and `imageFormat` `135-full-frame` added; `focalLengthMm` 1 → marketing 57 / design 57; `fNumber` marketing 1.2 added; all R, d, sd and element focal lengths scaled; S4/S5 sd raised; `checks.gapSagFrac` 0.99 added; `focus.closeFocusM` 1e15 → 0.45 (production figure; geometry static); focus description, element roles, group labels and doublet name rewritten; header comment and analysis rewritten.

Production evidence: buhla.de and allphotolenses.com give 7 elements / 6 groups, 0.45 m, f/1.2–16; buhla.de gives 42° and places the lens in the late 1960s. A Kamerastore listing gives 6 elements / 4 groups (seen in a search result; the page itself answered HTTP 429), against the other sources and the earlier-recorded 1980 Konica catalog. audit:surface OK; audit:aperture no rim limit; audit:image-circle 0 undersized; audit:field-coverage 97% (stopped by the declared 41° projection, corner 21.1° clear).

Open: the 1980 Konica catalog (cat. no. 703-212) was not re-read in this pass. Glass labels remain `Unmatched`; no catalog match was attempted. No source dates the lens's release precisely.

## 2026-11-06 — Semi-diameter pass against the patent figure

Source: JP S47-19025 Y1 (local PDF), PDF page 6 (printed 244), Fig. 1, the section of the sole example. The page is a 2912 × 3958 px bilevel scan that the PDF stretches to A4 (352 × 338 ppi), so it was measured in native scan pixels, not in a uniform-dpi render. No maker construction drawing was available, so none was compared; Fig. 1 shows seven elements in six groups with L4/L5 cemented, as the file has.

Scale. The drawn axis fits a line of slope 0.01377 (the scan is turned 0.79°; rms 0.5 px), and all heights are taken square to it. Along the axis, r1 at 966.2 px and r13 at 1988.8 px over the printed 0.9151 f give 1117 px per f-unit, and the other vertex crossings sit within about 3 px of the prescription. Across it, circle fits with the printed radii to r3, r6 and r7 (both halves, axis offset free) give 1104, 1099 and 1091 px per f-unit, and the axial positions of the r6 and r7 cap ends, which fix their heights through the sag alone (15.55 and 15.03 mm), give 1089 and 1085. The adopted height scale is 1094 ± 7 px per f-unit, so the drawing is close to isotropic in scan pixels. (A uniform 300-dpi render read with the axial scale, as in the deployment fix above, puts 1073 native px on an f-unit vertically and reads heights about 2% high.) The upper half reads 3–10 px taller than the lower, so each rim below is the mean of both halves, at the line centre.

Readings and values (mm at the model scale; "× 1.044" is the figure scaled by the median model-to-figure ratio of the five square-cut rims, 1.032–1.050):

| Surface | Before | Fig. 1 | Fig. 1 × 1.044 | After | Evidence |
| --- | --- | --- | --- | --- | --- |
| 1, 2 (L1) | 26.13 | 25.06 | 26.17 | 26.13 | kept; drawn proportion |
| 3 (L2 front) | 22.63 | 21.61 | 22.56 | 22.63 | kept; drawn proportion |
| 4 (L2 rear) | 18.98 | 20.69 | 21.60 | 21.6 | Fig. 1 draws L2's rear at 0.957 of its front; the file had 0.839 |
| 5 (L3 front) | 18.97 | 19.41 | 20.26 | 19.0 | F/1.2 axial beam 18.99 mm (clearap); the faces of r4 and r5 meet at 19.13 mm |
| 6 (L3 rear cap) | 15.96 | 15.48 | 16.16 | 15.8 | cap end kept ahead of the stop plane so the drawn land fits; axial beam 15.12 mm |
| 6 land (`rimExtensionSd`) | none | 16.57 | 17.30 | 17.3 | vertical land drawn on r6 |
| 7 (L4 front cap) | 15.96 | 14.90 | 15.56 | 15.6 | drawn cap end lower than L3's; axial beam 14.56 mm |
| 7 land (`rimExtensionSd`) | none | 16.15 | 16.86 | 16.9 | vertical land drawn on r7 |
| 8, 9 (L4/L5) | 18.81 | 18.23 | 19.03 | 18.81 | kept; drawn proportion |
| 10, 11 (L6) | 18.38 | 17.51 | 18.28 | 18.38 | kept; drawn proportion |
| 12, 13 (L7) | 17.96 | 17.21 | 17.97 | 17.96 | kept; drawn proportion |

The square-cut rims stand a uniform 3–5% above the figure's absolute heights and within 1.2% of its proportions, so they are kept; taking them to the absolute readings would cost up to 3.6 corner points (17.6°, rimcost.mjs). S4 follows the drawn rear-to-front ratio of L2, so L2 keeps the small step Fig. 1 draws instead of a 3.65 mm one; S4 then stands above L3's front rim, as drawn, and the validator compares the pair over the shared band only. Fig. 1 ends r6 and r7 in short square lands, then a chamfer up to each element's flat top; the lands are modeled with `rimExtensionSd` and the chamfer and flat top fall to the straight connecting edge. A land on r6 at 15.96 mm sat 0.196 mm past the stop plane (sag 8.320 against 8.124 mm) and the validator refused it; at 15.8 mm the cap ends 0.030 mm ahead of the plane. Fig. 1 also draws r7's cap ending 0.5 mm lower than r6's, which 15.6 mm keeps. `checks.gapSagFrac` stays 0.99 for the r4/r5 pair: at the shared 19.0 mm rim the intrusion is 0.985 of the 1.140 mm gap, 0.017 mm of air.

Clearance and engine results after the edit: audit:surface OK; audit:aperture f/1.20 within 3%, no rim limit; audit:image-circle 0 undersized; audit:field-coverage 97% (declared 20.5°, corner 21.1° clear); rim-cut probe none; clearap at F/1.2 shows no CLIPS-AXIAL or BLOCKS-CHIEF (axial marginal 19.00 at S4, 18.99 at S5, 15.12 at S6, 14.56 at S7). built.mjs: EFL 57.000 mm, F/1.2, half-field 20.5°, stop radius 14.97 mm, all unchanged. Geometric transmission wide open at 0 / 2.9 / 5.9 / 8.8 / 11.7 / 14.6 / 17.6 / 20.5°: 100 / 98.5 / 95.8 / 90.2 / 81.5 / 69.9 / 56.4 / 40.5% before and 100 / 98.6 / 96.0 / 90.4 / 81.7 / 69.9 / 56.4 / 40.5% after; rimcost.mjs against the starting rims loses nothing at any field, and restoring any one element wins nothing back. LSA as filed −0.022 mm at the full pupil (lsa.mjs), so no misprint is suspected. The page at focus 0 and 1 (static geometry) shows L2 near-square with a small rear step and L3 and L4 ending in lands at the iris, as Fig. 1 draws them.

Fan ends. Fig. 3 (printed 245, f = 100) ends its meridional fans at about +37.3/−37.8 (5°), +32.2/−32.7 (10°), +25.6/−25.3 (15°) and +16.6/−15.9 (20.5°) against a 41.7 full-aperture pupil radius. Traced in the model, the lower-end rays at 5°, 10° and 15° cross L1's front face at 24.2, 24.2 and 23.4 mm, and the upper-end rays reach 16.3–16.8 mm in L6 and L7; the model's own meridional fans run to +42.0/−39.2, +36.7/−36.2, +28.9/−30.4 and +17.2/−22.6. Those radii sit 3–7% under the figure's absolute heights, and the figure's proportions do not single out L1 or the rear group, so they are recorded and not applied.

Limitations: the model's heights stand about 4% above the drawing as a whole; L3's front face cannot reach its drawn 19.4 mm top edge because r4 and r5 meet at 19.13 mm; the flat tops and chamfers of L3 and L4/L5 are drawn as straight edges; the r6 land sits 0.34 mm behind its drawn axial position because its cap keeps the model's height scale.
