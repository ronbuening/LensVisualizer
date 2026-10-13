# Audit Log — Leica APO-Summicron-M 35mm f/2 ASPH.

Patent: US 2022/0066176 A1, Example 1

## 2026-06-24 — Folder audit

- Rechecked local `patents/US20220066176A1.pdf` OCR for Example 1 surface data and partial-dispersion notes.
- Retained all current glass assignments. The patent nd/vd table supports the high-index L1/L4/L8 rows and the FPL51/KZFS-style APO correction palette already in the data file.
- Rechecked APD status: L5 and L7 retain patent-stated positive `dPgF = +0.031`; the KZFS-type APD flints retain the documented negative `dPgF ≈ -0.004` annotations used for secondary-spectrum correction.
- No patent clear-aperture or semi-diameter table was found. Current SDs remain inferred from f/2 ray envelopes, stop size, drawing proportions, and edge-thickness constraints.

## 2026-09-21 — First-added diagram audit, lens 53

Source: local `patents/US20220066176A1.pdf` (11 pages; CCITT scans at 300 dpi with an OCR text layer). Pages used: 1
(front page), 2–3 (FIGS. 1–2 at 300 dpi), 7 ([0064]–[0078]), 8 (surface table, D/d_M and d_M/d_r table), 9 (asphere
equation and coefficient table, subgroup focal-length table, [0100] general data). All numbers were confirmed against the
rendered page images, not the OCR layer.

### Re-verified and retained

- Front page: US 2022/0066176 A1, inventors Stefan Roth and Kathrin Keller (Lahnau), applicant Leica Camera AG
  (Wetzlar), published 2022-03-03, PCT/EP2019/085673, priority DE 10 2018 132 472.3. Metadata fields already matched.
- Prescription: all 16 rows of r and d_M reproduce the file (×35) exactly; stop at surface 7; asphere surfaces 1, 12,
  15, 16 with k = 0; all 14 printed a_n coefficients reproduce the stored A4…A12 through A_{2n} = a_n / 35^(2n−1).
- General data: relative aperture 1:2.0, 2ω = 62.2°, SO'/f = 1.85, SO'/YB = 3.08, S'O'/f = 0.43; subgroup table
  G1 48.07, G2 2.47, G3 3.34, G4 2.04, G5 −3.29, VG 2.52, MG 3.34, HG 3.87 (computed at the stored e-line values:
  44.2 / 2.47 / 3.36 / 2.04 / −3.29 / 2.51 / 3.36 / 3.86 — G1 is near-afocal and rounding-sensitive).
- Focus mechanism ([0091]): rear group HG floats in the same direction as VG + BL + MG with a shorter travel; no
  spacing table for the close setting exists (FIG. 2 only). The inferred 0.70 floating ratio was retained and
  relabelled as an assumption.
- Aperture: nominal f/2, f-stop series from f/2, default f/16 minimum; STO sd 8.75 vs engine iris 8.31.
- Group/doublet annotations, element types versus radius signs, mount and format ids.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Index reference | catalog d-line nd/νd (1.8515/40.78, 1.65412/39.70, 1.883/40.76, 1.497/81.61, 1.58313/59.37) | patent native n_e/ν_e (1.855/40, 1.658/39, 1.888/41, 1.498/81, 1.583/59) with `indexReference: "e"` | [0094] defines the table at the Fraunhofer e line; repo spec supports native e-line rows; EFL now 34.99 (patent 1.00 × 35) instead of 34.75 |
| Glass labels | vendor names only | same equivalents worded as catalog equivalents with their e-line coordinates; L10 as "L-BAL42 class" | all five round-trip at C′/e/F′: Δn ≤ 0.0025, Δν ≤ 0.6; only S-LAH89 is patent-named ([0071]); no catalog glass gives 1.583/59 at e (nearest 1.5855/59.1) |
| L4 glass name in analysis | S-LAH79 | S-LAH58 | S-LAH79 is nd 2.003/28; S-LAH58 (nd 1.883/40.77, ne 1.8882/40.5) is the 1.888/41 row; data file already said S-LAH58 |
| apd on L2/L3/L6/L9 | "inferred" | "patent" (ΔPgF = −0.004) | the ΔPgF column is printed in the patent's surface table |
| d16 / BF∞ | 14.39 (d-line paraxial BFD) | 14.62 (e-line paraxial BFD; defocus 0.004 mm) | probe: BFD 14.616 at the stored indices |
| Close-focus gaps | D11 2.51, BF 19.44 | D11 2.55, BF 19.76 (δ_front 7.34, δ_HG 5.14) | recomputed at e-line so that object-to-image = 300.0 mm (magnification −0.17); ratio 0.70 unchanged and labelled as assumed |
| sd 1A, 2 | 12.0 | 12.5 | patent ratio table: L2 D/d_M = 23.9 → D = 25.1 mm; L1 d_M/d_r = 9.1 → edge 0.65 mm → h = 12.4–12.6 with the stored surfaces |
| sd 12A, 13, 14 | 11.0 | 12.2 | L8 d_M/d_r = 6.2 → edge 1.24 mm → h = 12.1; L9 D/d_M = 23.9 → 12.55; FIG. 1 rim ratio G4/G1 = 0.94 → 11.75 |
| Element fl | d-line thick-lens values | e-line values (19.0, −17.9, −18.6, 16.6, 53.3, −19.5, 26.0, 15.4, −16.7, −115.1) | probe --elements |
| specs / focalLengthDesign | "f ≈ 34.8 mm (d-line)", 34.8 | "f = 35.0 mm (e-line)", 35.0 | computed EFL 34.99 |
| Header and analysis | d-line conversion, "front element SD 15.0 mm", KZFS/FPL51 named as if patent glass | e-line notes, patent-derived sd basis, asphere caveat, unnamed-glass wording | see above |

Unchanged with reasons: sd 3 (10.0; FIG. 1 shows L2's rear face ending at ≈ 0.75 of the G1 rim, ≈ 9.4 mm at
12.5-mm scale; rays need 8.0), sd 4–6 (9.0; FIG. 1 ratio 0.75 → 9.4, rays need 8.6), sd 8–11 (9.5–10.8; FIG. 1
ratios 9.4 / 9.9 / 10.1, L6 D/d_M → 9.45, f/2 bundle 9.0–11.9), sd 15A/16A (10.5; L10 D/d_M = 20.0 → 21.0 mm; the
FIG. 1 rim would give 12.5 but the figure is schematic and the table wins). Asphere coefficients unchanged (see
below). The ratio-table rows labelled 6 (12.9) and 11 (96.4) could not be assigned consistently (12.9 would make L3
27 mm in diameter against a 25-mm front group) and were not used.

### Checks on the result

- Paraxial: EFL 34.987 mm, BFD 14.616 mm (stored 14.62), total track 64.32 mm, Fno from the stop sd 1.94; close
  keyframe focuses at 228 mm from S1, object-to-image 300.0 mm, magnification −0.17.
- Engine: FOPEN 2, iris radius 8.31 mm, half-field 27.7° (limited by 16A), image-circle audit passes, surface audit
  "no validation errors" (edge thickness, slopes, gap intrusion) at the new sd set.
- Real-ray clear apertures at Y = 21.6 mm: field angle 29.1° (patent 31.1° for YB = 21.0 — see the asphere caveat);
  no surface clips the f/2 axial ray (largest 8.75 mm at 1A vs sd 12.5) and no surface blocks the chief ray
  (largest 10.14 mm at 16A vs sd 10.5); corner-bundle vignetting 13–27 % at 10–13 and 70–78 % at L10. At the
  close keyframe the corner field is 26.2° with the same clearances.
- Glass round-trip at the e-line (indexReference-aware check): S-LAH89 Δn 0.0015 / Δν 0.5; N-KZFS5 / S-NBH5
  0.00003 / 0.4; S-LAH58 0.0001 / 0.5; S-FPL51 0.0005 / 0.2; L-BAL42 0.0025 / 0.1. The shared scratch
  `glasscheck.mjs` compares at the d-line only and therefore reports MISMATCH on the e-line rows — expected.
- Asphere scans at the stored sd: 1A departure −132 µm at 12.5 mm (slope 10°); 12A −33 µm at 12.2 mm (25°); 15A
  +915 µm at 10.5 mm with turnover at 8.4 mm; 16A +935 µm at 10.5 mm (26°).
- Prettier: all three files pass at width 120.

### Open limitations / source conflicts

- The printed asphere table, read by the patent's own sag equation and scaled uniformly, does not describe a
  corrected lens: the spherical base prescription has −5.9 mm of marginal spherical aberration at f/2 and the
  literal h⁶ terms on surfaces 1 and 12 recover only 0.9 mm of it; the h⁶/h¹⁰ terms on surfaces 15/16 reverse the
  L10 curvature beyond h ≈ 8.4 mm so that the 31.1° chief ray lands at 28 mm instead of ≈ 21 mm (distortion
  −0.3 % at 10°, +2 % at 25°, +34 % at 31.1°; with all polynomials removed: −2.6 % at 31.1° but the spherical
  aberration stays). Alternative readings were tested (even-index columns as production-scale mm coefficients,
  every coefficient shifted one power of h, the h⁶ terms rescaled by powers of 35) and none gives both a corrected
  axis and a sane field; a control run on the Nikon Z 35/1.8 S data with the same probe shows LA' within ±0.02 mm,
  so the probe is not the problem. The coefficients are therefore kept exactly as printed, and the rendered f/2
  axial bundle and outer-field rays through L10 should not be read as the production lens. The base spherical
  prescription, group powers, glass palette and diameters are unaffected. If a DE/WO family member with a legible
  or differently printed coefficient table becomes available, this is the first thing to recheck.
- The patent's d16 = 0.36 (12.6 mm) is 2.0 mm short of the paraxial image distance implied by its own SO'/f = 1.85
  and S'O'/f = 0.43 (≈ 15.0 mm) and of the computed 14.62 mm; the computed value is stored. S'O'/f computes to
  0.418 against the printed 0.43.
- Close-focus spacings are calculated with an assumed 0.70 floating ratio; the patent gives only the direction and
  "shorter travel". FIG. 2 vs FIG. 1 shows the MG–HG gap opening by roughly 2–4 mm, but the figures' axial scale
  is not uniform (local scale varies 490–1550 px per normalized unit), so this only corroborates the magnitude.
- L1/L8 (1.855/40) and L10 (1.583/59) have no exact catalog match at the e-line; the labels are the nearest
  compatible catalog glasses (S-LAH89 is patent-named as an example for L1's hardness). The L10 row's 1.583 equals
  the d-line index of the L-BAL42 class, so it may be a d-line slip in the patent's table.
- D/d_M-derived diameters inherit the ±0.005 rounding of the normalized thicknesses (±17 % for 0.03 rows); the G1
  value is corroborated independently by the L1 edge-thickness ratio, the G4 value by the L8 ratio.
