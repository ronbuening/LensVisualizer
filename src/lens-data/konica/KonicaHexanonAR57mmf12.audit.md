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
