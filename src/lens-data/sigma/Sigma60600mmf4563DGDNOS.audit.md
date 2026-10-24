# Audit Log — SIGMA 60-600mm f/4.5-6.3 DG DN OS | Sports

Patent: JP 2023-180574 A, Numerical Example 5 (`patents/JP2023180574A.pdf`)
Data file: `src/lens-data/sigma/Sigma60600mmf4563DGDNOS.data.ts`

## Historical audits prior to 2026-10-24

The lens arrived as an externally prepared package (first source-first audit 2026-10-04, V2 conversion 2026-10-18,
continuous-zoom revision 2026-10-23). Its findings that remain relevant are carried into the sections below. The
package made one rim correction: surface 44 (the L25/L26 cemented face) went from 15.2 to 15.4 mm because full-format
bundles at intermediate zoom first clipped at that interface (traced heights 15.206–15.212 mm). The 2026-10-23
revision replaced plain linear zoom interpolation, which left up to 32.02 mm of paraxial defocus between the middle
and tele stations, with the solved G6 path described below. Surfaces, glass and published spacings were unchanged
between the package versions.

## 2026-10-24 — Deployment validation and pre-deploy fixes

### Source identification

- Front page: JP 2023-180574 A, application JP 2022-093975, filed 2022-06-09, published 2023-12-21; applicant
  Sigma Corporation (株式会社シグマ); inventor Ryosuke Sato (佐藤 良祐); title 変倍結像光学系. Matches `source`.
- The PDF has an English abstract cover, so PDF pages run one ahead of printed pages. Example 5 text ¶0132–0143,
  table PDF pp.28–29; conditions table ¶0180, PDF p.38; Figure 41 PDF p.61.
- The patent holds eight numerical examples; only one PDF exists for this family in the package.

### Transcription check

- All 47 lens surfaces, the stop (surface 26, d 7.7345) and the plate (surfaces 48–49) compared with the printed
  table: every R, d, nd and νd agrees; zero mismatches. All surfaces are spherical; there is no aspheric table.
- Every element and plate `dPgF` equals the printed θgF − (0.6438 − 0.001682 νd) to 1e-6.
- Variable gaps d5, d10, d20, d32, d34, d38, d42 and BF at the three infinity rows agree exactly with the stations
  at indices 0, 100 and 200. Example 5 prints no finite-distance row.
- Element shapes agree with ¶0135–0142 (for example L8 image-convex negative meniscus, L16 image-convex positive
  meniscus, L22 object-convex negative meniscus, L23 image-convex negative meniscus).
- Example selection: Examples 1–4 have 25 or 26 elements, Example 6 has 28 (cemented G5, ¶0151), Example 7 is
  62–673 mm, and Example 8 uses 1.39395 / 106.47 glass at surfaces 2 and 39. Example 5 is the only 27-element,
  19-group example whose low-dispersion pattern matches Sigma's two FLD and three SLD elements.

### First-order comparison

| Quantity | Printed | Model |
|---|---|---|
| f (wide / mid / tele), mm | 62.00 / 190.20 / 580.00 | 61.9975 / 190.1802 / 579.8299 |
| Total length, mm | 295.55 / 349.01 / 394.25 | 295.5472 / 349.0129 / 394.2494 |
| F-number | 4.64 / 5.51 / 6.50 | 4.64 / 5.51 / 6.50 (iris derived from these) |
| Full field 2ω, ° | 38.05 / 12.64 / 4.16 | 38.04 / 12.64 / 4.16 at 21.63 mm |
| Paraxial defocus vs printed image plane, mm | — | 0.0042 / 0.0089 / 0.0291 |

The longitudinal-aberration misprint check gives at most 0.10 mm at full pupil at any station, so no sign or digit
misprint is indicated. Conditions 2–4, 6–8 and 11–14, recomputed from the group focal lengths, νd and θgF, match the
printed Example 5 column (for example condition 7: 67.00 − 28.43 = 38.57, printed 38.6; condition 13: 0.0565,
printed 0.056). Conditions 1, 5, 9 and 10 (magnification and exit-pupil ratios) rest on the package calculation,
which also matches the printed values.

### Product correlation

- Sigma specification page (S023): 27 elements in 19 groups, 2 FLD + 3 SLD, 39.6°–4.1°, 0.45–2.6 m minimum focus,
  105 mm filter, L-Mount and Sony E; announced 2023-01-12, after the 2022-06-09 filing.
- Sigma's construction diagram (viewed on the specification page, not downloaded) matches Example 5 element by
  element: L1/L2 doublet and L3 in G1; L14/L15 doublet ahead of the stop; L16 meniscus and the
  negative/positive/negative triplet behind it; single L20; L21/L22; image-convex L23 and L24; and the
  negative-meniscus/biconvex doublet plus biconcave L27 in G8 (Example 6's G8 differs). Its coloured elements fall
  at L2, L3, L14, L23 and L25, the positions of the 95.10-, 81.61- and 68.62-Abbe glasses.
- Mechanism categories agree: G5 single-lens rear focus (¶0134) with Sigma's HLA autofocus; G3b lateral
  stabilizer (¶0137) with Sigma's OS.
- Verdict: strong construction correlation; not a manufacturer-confirmed prescription.

### Zoom path (derived)

Stations 0, 100 and 200 are the printed rows; the 198 others carry `published: false`. Between printed rows, d5,
d10, d20, d32 and d42 are linear, and d34 / d38 are re-divided (their sum kept linear) so G6 holds the paraxial
image on the printed image plane, using the compensation role ¶0017 gives the groups behind G4. Checked at all 201
stations: G1 and G4–G7 move only objectward, G2 only imageward, G3 is fixed (0.0001 mm source rounding), G8 fixed;
smallest gap 0.15 mm; maximum |defocus| 0.0291 mm (the tele row's own residual). Largest departure from linear
spacing: d34 = 9.2257 mm at 337.70 mm against about 4.46 mm on a straight line.

### Rim sizing basis

The patent prints no effective diameters. Figure 41 was measured at 300 dpi (203.56 µm/px from the 260.15 mm glass
span; median figure/data ratio 1.005), with the contaminated rows (group brackets, the OIS and focus arrows) read by
eye. Results against the data:

| Element(s) | Data sd, mm | Figure, mm | Ratio | Decision |
|---|---|---|---|---|
| L1, L2 | 48 | 46.7 | 0.97 | Keep; noise |
| L3 | 48 | 45.7 | 0.95 | Keep; noise |
| L4–L6 | 27 / 22 / 26 | 27.3 | 1.01–1.05 | Keep |
| L7–L9 | 17.6 | 16.7–17.5 | 0.95–0.99 | Keep |
| L10–L12 | 15.7 / 14.17 / 14.3 / 16.3 | 15.9–16.4 | 0.87–1.0 | Keep; surfaces 17/18 cross at 16 mm (edge gap −0.87 mm) |
| L13–L19 | 17.4 / 17 / 15.8 | 15.9–17.7 | 0.97–1.02 | Keep |
| L20 | 14.5 | 14.1 | 0.98 | Keep |
| L21, L22 | 14.5 → 12.2 / 11.8 | 12.2 / 11.8 | 0.84 / 0.81 | Narrowed to the figure; see below |
| L23, L24 | 14.8 | 14.0 / 14.9 | 0.95 / 1.0 | Keep |
| L25–L27 | 15.2 / 15.4 / 15.2 | 15.9 | 1.03–1.05 | Keep |

G6 (L21/L22) was drawn 15–20% smaller than stored, and Sigma's diagram shows the same step (L21 about 0.87 of L20's
height). With two independent drawings agreeing, the rims follow them under the standing rule that rims match the
patent and maker diagrams and keep real vignetting:

| Surface | Before | After | Axial need (max over 201 stations) | Evidence |
|---|---|---|---|---|
| 35 (L21 front) | 14.5 | 12.2 | 9.08 | Figure 41 L21 ≈ 12.2 mm; Sigma diagram step |
| 36 (L21 rear) | 14.5 | 12.2 | 8.79 | Same element, square rim |
| 37 (L22 front) | 14.5 | 11.8 | 8.58 | Figure 41 L22 ≈ 11.8 mm |
| 38 (L22 rear) | 14.5 | 11.8 | 8.19 | Same element, square rim |

After the change, both real-ray clearance tracers report no axial clipping or chief-ray blocking at any of the 201
stations; the aperture audit keeps all 201 stations within 3% of the stated f-number; the traced chief ray still
reaches the format corner everywhere; the surface validator is clean; the engine's derived values (EFL, f-number,
half-fields, stop radius) are unchanged. Off-axis clipping at G6 rises from about 10% to 38% of one side of the
widest bundle, which is the drawn geometry and is kept.

Checks on the stored rims: image-circle floor reports nothing undersized; the traced chief ray reaches the 21.65 mm
corner at all 201 stations; all 201 stations are within 3% of the stated f-number (no rim clips the axial beam);
real-ray clearance shows no axial clipping or chief-ray blocking; thinnest glass edges are L3 0.49 mm and L2
0.55 mm at 48 mm; the surface validator reports no errors. The front-group vignetting of off-axis bundles
(up to 77% of one side at surface 1) is real and kept.

### Glass identification and apd

All 27 element labels and the plate's BSC7 label resolve in the glass catalog to entries with exact (nd, νd)
coordinates (Δnd ≤ 5e-6). No relabeling was needed.

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 | `apdNote` | Reference to ¶0062–0068 | Rewritten; `apd: "patent"` kept | ¶0062–0068 and condition 13 (value 0.056) require anomalous dispersion for G1's highest-Abbe positive lens |
| L2, L14 | `apd` | — | `"inferred"` | 1.49700 / 81.61 at Sigma's SLD positions |
| L25 | `apd` | — | `"inferred"` | 1.59282 / 68.62 at Sigma's third SLD position |
| L23 | `apd` | — | `"inferred"` | 1.43700 / 95.10 at Sigma's second FLD position |

### Fields changed in this pass

| Field | Before | After |
|---|---|---|
| `name` | `SIGMA 60-600mm f/4.5-6.3 DG DN OS Sports` | `SIGMA 60-600mm f/4.5-6.3 DG DN OS \| Sports` (matches the DG OS HSM entry) |
| `subtitle` | `JP 2023-180574 A; INFERRED continuous zoom path; native source knots preserved` | `JP 2023-180574 A, Numerical Example 5; construction correlation` |
| `catalog.specs` | `NATIVE 62.00–580.00 mm`, `DESIGN F4.64–6.50`, `THREE PUBLISHED INFINITY ZOOM STATES` | `DESIGN f = 62.00–580.00 mm`, `DESIGN F/4.64–6.50`, `ALL SPHERICAL`, `2 FLD + 3 SLD (INFERRED)` |
| `focus.description` | Process text ("INFERRED CONTINUOUS ZOOM CANDIDATE …") | Plain description of G5 focus, infinity-only data and the solved zoom path |
| Element `role` (27) | Terse group tags | Specific optical roles |
| Gap labels | `D5` … `D42` (collided with doublet labels D1–D6) | Patent's `d5` … `d42` |
| Header comment | Missing | Restored and updated for the solved zoom path, rims and glass |
| `sd` surfaces 35–38 | 14.5 | 12.2 / 12.2 / 11.8 / 11.8 (G6 narrowed to Figure 41) |
| Solved stations / gaps | 15-digit floats | Focal length and f-number to 4 decimals, solved gaps to 6 decimals (max gap change 5e-7 mm; EFL change ≤ 1e-4 mm; published rows untouched) |
| Formatting | Quoted JSON keys, 143 KB | Unquoted keys, Prettier, 79 KB |

Analysis: removed the process preamble and closing results paragraph; replaced the "Model Boundaries" section,
which described linear interpolation and said no solved path had been added, with "Model Scope and Zoom Path";
added the maker-diagram and other-examples evidence; corrected the dispersion-resolver paragraph (all labels now
resolve, including E-FD80, PCD51 and BSC7); removed internal status vocabulary; added the blank lines GFM needs
after tables.

### Open issues

- No finite-focus data in Example 5; focus is not modeled. Sigma's 0.45 m / 2.6 m minimum focus is context only.
- The zoom path between printed rows is a solved visualization path, not Sigma's cam; intermediate states have no
  published aberration data.
- Glass names are catalog-coordinate equivalents; Sigma's suppliers and melts are unknown.
