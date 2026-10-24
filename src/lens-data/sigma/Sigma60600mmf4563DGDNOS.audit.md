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

## 2026-10-24 — Semi-diameter pass against the patent figure

Independent re-measurement of Figure 41 (PDF page 61, `patents/JP2023180574A.pdf`), the only cross-section the patent
gives for Example 5. It is a single wide-end panel (movement arrows below; no tele panel is drawn). The page carries a
299 ppi CCITT raster, so the silhouette was profiled at 300 dpi on the side without brackets for each group (bottom
for G1–G2 and the rear groups, both sides for G3–G8), with element tops checked on 600 dpi zooms.

Scale: the dash-dot axis is at row 2144.5. The near-axis profile places surface 1 at column 412.5 and surface 47 at
1687.5 against a 259.687 mm wide-end vertex span, giving 0.2037 mm/px. Two further spans check it: surface 11
(predicted 813.0, measured 812.5) and surface 39 (predicted 1608.2, measured 1606.5); the FL plate and image plane
fall at 1848.5 / 1858.5 / 1863.5 against predicted 1848.1 / 1858.4 / 1863.3.

| Element | Surfaces | Stored sd, mm | Figure, mm (top / bottom ink) | Ratio | Decision |
|---|---|---|---|---|---|
| L1, L2 | 1–3 | 48 | 46.6 (bottom) | 0.97 | Keep; noise |
| L3 | 4–5 | 48 | 45.6 (bottom) | 0.95 | Keep; noise |
| L4/L5 | 6–8 | 27 / 27 / 22 | 26.9 / 27.3 block; surface 8 curve ends at 23.3 | 1.00; 1.06 at 8 | Keep |
| L6 | 9–10 | 26 | 23.6 / 24.0 | 0.91 | Narrowed to 23.8 |
| L7/L8 | 11–13 | 17.6 | 17.1 / 17.5 | 0.98 | Keep |
| L9 | 14–15 | 17.6 | 16.5 / 16.7 | 0.94 | Keep; noise |
| L10–L12 | 16–20 | 15.7 / 14.17 / 14.3 / 16.3 | 15.7–16.5 | 0.87–1.01 | Keep; surfaces 17/18 cannot rise (faces cross near 16 mm) |
| L13 | 21–22 | 17.4 | 17.3 / 17.5 | 1.00 | Keep |
| L14/L15 | 23–25 | 17.4 | 17.1 / 17.3 | 0.99 | Keep |
| L16 | 27–28 | 17 | 16.3 / 16.5 | 0.96 | Keep |
| L17–L19 | 29–32 | 15.8 | 15.7 / 15.9 | 1.00 | Keep |
| L20 | 33–34 | 14.5 | 13.9 / 14.3 | 0.97 | Keep |
| L21 | 35–36 | 12.2 | 12.0 / 12.2 | 0.99 | Keep (earlier pass confirmed) |
| L22 | 37–38 | 11.8 | 11.6 / 11.8 | 0.99 | Keep (earlier pass confirmed) |
| L23 | 39–40 | 14.8 | 13.9 / 14.1 | 0.95 | Keep; noise |
| L24 | 41–42 | 14.8 | 14.5 / 14.9 | 0.99 | Keep |
| L25/L26 | 43–45 | 15.2 / 15.4 / 15.2 | 15.5 / 15.9 | 1.03 | Keep |
| L27 | 46–47 | 15.2 | 15.5 / 15.9 | 1.03 | Keep |

The earlier rim table gave 27.3 mm for all of L4–L6; at 600 dpi the drawing separates them clearly. The L4/L5 doublet
is a square block at about 27 mm whose concave rear face (surface 8) ends at about 23 mm, and L6 behind it is drawn
as a separate square-rimmed element about 23.8 mm high, a step the stored 26 mm did not show. L6 (surfaces 9 and 10)
was narrowed from 26 to 23.8 mm, both faces together.

Clearance after the change: the axial marginal ray needs 15.70 / 15.66 mm at surfaces 9 / 10 and the full-field
chief ray 20.58 / 20.16 mm (maxima over 201 stations), so both pass with more than 3 mm to spare. The real-ray
clearance trace (both root strategies) reports no axial clipping or chief-ray blocking; one-side clipping of the
widest bundle at L6 rises from 13% to 48%, but surface 8 at 22 mm already clips that bundle 80% of one side, so the
engine's vignetting curve is identical before and after at the wide, 0.3 and tele zoom positions (wide end 46.9%
transmission at 19.0°). Engine half-field 19.04°, f-number 4.64, stop radius 15.238 mm and EFL 61.9975 mm are
unchanged. The image-circle floor reports nothing undersized, the traced chief ray reaches the 21.65 mm corner at all
201 stations, and the surface validator is clean.

Rendered sections at 62, 190.2 and 580 mm (infinity and the duplicated focus=1 keyframe) show the G2 step and the
smaller G6 that Figure 41 draws. Open limitation: the patent draws only the wide end, so rim heights at the other
stations are not independently checked against a drawing.

## 2026-10-24 — Second review: diagram, labels and movement

The local page (wide, middle and tele zoom, infinity and the duplicated focus=1 keyframe, and the zoom-movement
overlay at both ends) was compared with Figure 41 (PDF page 61), re-rendered at 300 and 600 dpi, and with the
Example 5 text ¶0132–0143 and its group table (PDF pp.27–29).

### Silhouette

Differences seen on the page before this pass: G1 drew L3 as tall as the L1/L2 doublet with knife-edge rims (glass
edges 0.49 mm at L3 and 0.55 mm at L2), whereas Figure 41 draws L3 about 1 mm shorter than the doublet and both with
a visible edge land; the L4/L5 doublet shows a slanted top where the figure draws a square block; G3b shows bevels
at L10's rear and L11's front where the figure draws one square block about 16 mm high.

Re-measurement on both sides of the axis at 300 dpi (0.2037 mm/px, the first pass's scale) gives the L1/L2 doublet
228.5 / 229.5 px (46.5 / 46.7 mm) and L3 223.5 / 224.5 px (45.5 / 45.7 mm). At 600 dpi the drawn edge lands are
about 1.2 mm on L3 and 1–2 mm on L2, matching the model's 1.39 mm and 1.06 mm at the new heights.

| Surface | Before | After | Evidence |
|---|---|---|---|
| 1, 2, 3 (L1/L2 doublet) | 48 | 46.7 | Figure 41, both sides; tele axial need 44.60 / 43.98 / 43.92 mm |
| 4, 5 (L3) | 48 | 45.6 | Figure 41, both sides; drawn shorter than the doublet; tele axial need 43.60 / 43.31 mm |

Retained: the L4/L5 slant stays because surface 8 at the drawn 27 mm block height would cross L6's front face
(surface 8 sag 5.04 mm against L6's front at 4.80 mm already at 23.8 mm); the figure itself ends that curve near
23 mm. The G3b bevels stay because surfaces 17 and 18 meet at about 14.9 mm (sags 2.58 + 3.09 mm exceed the
5.61 mm gap at 15 mm) and the validator's cross-gap limit admits 14.17 / 14.3 mm. L23 (figure 13.9–14.1 mm against
14.8) and the remaining rims are within measurement noise, as the first pass found; L6 and G6 are confirmed.

Clearance with the new G1: the surface validator is clean, both real-ray clearance tracers report no axial clipping
or chief-ray blocking at any of the 201 stations, the image-circle floor reports nothing undersized and the traced
chief ray reaches the corner at all 201 stations. Engine half-field 19.04°, f-number 4.64, stop radius 15.238 mm and
EFL 61.9975 mm are unchanged. The engine vignetting curve is identical at the wide end (46.9% at 19.0°); at mid zoom
transmission at 5.3° / 6.3° goes from 88.3 / 62.8% to 84.0 / 58.5%, and at the tele end from 98.9 / 54.3% to
97.9 / 53.2% at 0.3° / 2.1°. That is the drawn front-group geometry and is kept. One-side clipping of the widest
bundle at surface 1 rises from 77% to 80%.

### Labels and brackets

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` | `G3` over surfaces 11–20 | `G3a` 11–15 and `G3b / OS` 16–20 | Figure 41 brackets G3a and G3b; group table starts G3a at 11 and G3b at 16; ¶0137 names G3b the stabilizing group |

Both subgroups stay fixed during zoom, so the movement overlay now lists nine groups with G3a and G3b stationary.
The figure's GR bracket (G5–G8) is not drawn because groups are the mechanical moving groups and cannot nest.
Checked and correct: element names L1–L27 follow ¶0135–0142; every `type` agrees with the signs of R; there are no
aspheric surfaces and no `A` markers; the stop is drawn between L15 and L16 as ¶0138 states; the seven cemented
brackets D1–D6 and T1 cover the right surfaces (27 elements less eight cemented joints gives 19 groups). Inspector
reads for L3 (APD patent, positive meniscus, +306.15 mm, FCD100 class) and L23 (APD inferred, negative meniscus,
−89.03 mm) match the data. `apd: "patent"` on L3 rests on condition 13, which the patent applies to G1's highest-Abbe
positive lens (0.5336 − 0.6483 + 0.0018 × 95.10 = 0.056); the patent text designates no other element, so L2, L14,
L23 and L25 remain inferred from Sigma's diagram as recorded above. Only the end stations are labelled, which the
schema requires (a "Middle" label on the printed 190.2 mm row is refused unless every station is labelled).

### Movement

Group vertex positions from the image plane, wide → middle → tele (mm): G1 −295.55 → −349.01 → −394.25 (98.70
objectward); G2 −268.77 → −238.13 → −233.13 (35.64 imageward); G3 −213.97 fixed; G4 −139.71 → −159.21 → −184.75; G5
−78.27 → −100.19 → −108.92; G6 −71.80 → −90.49 → −102.45; G7 −52.00 → −70.79 → −76.55 (all objectward); G8 −44.89
fixed. Every moving group is monotonic over the 201 stations, matching ¶0134 and the arrows under Figure 41; zoom
stations ascend 62 → 580 mm and every gap array follows that order. Focus: ¶0134 names G5 as the focusing group,
moving objectward for near focus, which the description states; both focus keyframes repeat the infinity gaps, the
slider's far end reads "Not modeled", and the movement drawer offers zoom only, which suits infinity-only data.
