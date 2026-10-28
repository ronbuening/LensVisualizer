# Audit Log — CANON EF-M 18-150mm f/3.5-6.3 IS STM

Patent: US 2018/0074300 A1 (Canon Inc.; inventors Yuichi Gyoda and Kohei Kimura; published 15 March 2018, filed
13 September 2017, priority JP 2016-179276), Numerical Value Data 2 (¶0087, printed pp. 7–8, PDF pp. 17–18) and its
cross-section Fig. 3 (PDF p. 4, sheet 3 of 9: (A) wide-angle end, (B) telephoto end). Scale 1. The patent prints
f = 18.56/48.87/145.41 mm, F3.60/5.56/6.49, image height 13.66 mm and total length 103.26/118.62/145.33 mm, and an
effective diameter for every surface including the stop (13.12 mm). Every stored `sd` is half the printed value.

## 2026-10-28 — Semi-diameter pass against the patent figure

### Figure and scale

- Fig. 3(A), the wide-angle infinity panel, measured at the sheet's native 300 dpi raster. The upper side was read
  inside the group-bracket limits; the lower side gave a second reading for B1–B6, where no leader line crosses. The
  L17 lower side carries the B8 leader, so L17 was read on the upper side only.
- The axis lies at row 1610 px. Vertex crossings: surface 1 at 1113.5 px, surface 31 at 1959.5 px, image plane at
  2056.5 px. Surface 1 to 31 is 92.61 mm at wide infinity, giving 9.135 px/mm; surface 1 to the image is 103.26 mm,
  giving 9.132 px/mm. Mean 9.133 px/mm (109.5 µm/px). Third check: surface 13 plus D13 (24.58 mm) puts the stop at
  1587 px, and the drawn SP line sits at 1585–1590 px.

### Figure against the printed effective diameters

Figure semi-heights are the mean of both sides where both were clean.

| Element | Surfaces | Stored sd (φ/2), mm | Fig. 3 semi-height, mm | Figure / stored |
|---|---|---|---|---|
| L1–L2 (D1) | 1 / 2 / 3 | 20.39 / 19.00 / 18.885 | 21.1 (one common edge) | 1.04 / 1.11 / 1.12 |
| L3 | 4 / 5 | 18.295 / 17.935 | 19.2 | 1.05 / 1.07 |
| L4 | 6 / 7 | 11.67 / 9.255 | 12.5 flange; concave rear ends at 9.2–9.5 | 1.07 / 1.00–1.03 |
| L5 | 8 / 9 | 8.995 / 8.875 | 9.7 | 1.08 / 1.10 |
| L6 | 10 / 11 | 8.89 / 8.56 | 9.7 | 1.09 / 1.13 |
| L7 | 12 / 13 | 8.475 / 8.245 | 9.2 | 1.09 / 1.12 |
| Stop | 14 | printed 6.56 (engine-derived) | 6.7 (drawn opening) | 1.02 |
| L8 | 15A / 16A | 6.87 / 6.58 | 7.6 | 1.10 / 1.15 |
| L9 | 17 / 18 | 6.105 / 5.685 | 6.8 | 1.12 / 1.20 |
| L10–L11 (B4) | 19 / 20 / 21 | 5.60 / 5.45 / 5.32 | 6.3 | 1.13 / 1.16 / 1.18 |
| L12–L13 (B5) | 22 / 23 / 24 | 5.525 / 5.70 / 5.945 | 6.7 | 1.21 / 1.17 / 1.12 |
| L14–L15 (B6) | 25 / 26 / 27 | 6.05 / 6.025 / 5.96 | 6.7 | 1.11 / 1.12 / 1.13 |
| L16 | 28A / 29A | 8.27 / 9.35 | 8.9–9.1 front face; 10.2 rear | 1.08–1.10 / 1.09 |
| L17 | 30 / 31 | 13.22 / 13.50 | 14.4 (upper side) | 1.09 / 1.06 |

The median figure/stored ratio is 1.11, and every row lies within 0.92–1.09 of it, so the drawing agrees with the
table in proportion. The stop opening and the end of L4's concave rear curve, which the sheet draws at optical size,
read 1.00–1.03; the element blanks are drawn about 11 % beyond the effective diameters. Fig. 3 draws one square-cut
edge on D1, L9, B4, B5 and B6 where the table steps between faces.

### Decision

No `sd` changed. The printed effective diameters govern (table truth beats diagram inference) and the figure
confirms their proportions. No aspheric `sd` moved, so the analysis prose needs no recomputation; `--scan` of 15A,
16A, 28A and 29A to the printed heights shows no slope turnover.

### Clearances

- The image-circle floor finds no undersized surface. Field coverage reaches 100 % of 13.66 mm, clear, at all 65
  stations: the corner chief ray leaves at 37.8° (18.56 mm), 15.3° (48.87 mm) and 5.3° (145.41 mm). The patent's
  36.35/15.62/5.37° are atan(Y/f). The surface validator reports no errors.
- Printed states, real meridional axial rays: at F3.60 wide the marginal ray fills 15A exactly (6.870 against 6.87) and
  crosses the stop at 6.558 mm, half the printed 13.12 mm. At F6.49 tele it fills surface 21 (5.318 against 5.32). At
  F5.56 middle it passes surface 21 by 0.003 mm, inside the 0.005 mm rounding of the printed 10.64 mm. The B3 and B4
  diameters are therefore the designer's axial-beam apertures at the wide and tele ends.
- No corner chief ray is blocked at any station, at infinity or at closest focus. At closest focus the pupil-nearest
  root trace solves every station; the plain trace locks onto a spurious root at the 19.12 mm inferred station there.
- Inferred stations: at all 31 stations between the middle and tele rows (50.29–139.49 mm) the axial beam at the
  interpolated f-number exceeds B4. Surface 21 is the binding rim, with 19 and 20 just behind it. The excess grows from
  0.013 mm at 50.29 mm to 0.121 mm at 88.7–95.2 mm, then falls to 0.023 mm at 139.49 mm. The f-numbers there are
  linear in station index between 5.56 and 6.49, which opens the real-ray stop to 6.29–6.30 mm mid-range, above both
  printed ends (6.207 and 6.265 mm).
- The slowest f-number change that clears the printed rims (rounded up to 0.001), station by station from 50.29 to
  139.49 mm: 5.603, 5.641, 5.679, 5.717, 5.754, 5.792, 5.829, 5.866, 5.903, 5.939, 5.975, 6.011, 6.046, 6.081, 6.115,
  6.148, 6.181, 6.213, 6.244, 6.274, 6.303, 6.331, 6.357, 6.382, 6.405, 6.425, 6.444, 6.460, 6.472, 6.482, 6.488,
  against the current 5.589–6.461. The largest raise is +0.133 at 91.89–95.20 mm (6.141 to 6.274). The real-ray stop
  radius then stays at 6.15–6.26 mm. With that schedule the real-ray check shows no clipped surface. The schedule was
  not applied, because f-numbers are outside a semi-diameter pass.
- The app's paraxial iris rule gives a smaller stop than the real-ray launch (6.205 against 6.292 mm at 91.89 mm), so
  the in-app overshoot at surface 21 is smaller, about 0.045 mm there.

### Maker diagram

The Canon Camera Museum construction image shows 17 elements in 13 groups, with UD glass on L2 (cemented in D1),
double-sided aspheres on L8 and L16, and the IS unit as cemented L10–L11 (B4). Element order, cemented pairs and
aspherical positions match the data file and Fig. 3. Its relative heights agree with the table: L3/L1 0.89 against
0.90, L4/L1 0.58 against 0.57, L8/L1 0.35 against 0.34. Like Fig. 3, it draws the B2 rear elements about 10 % beyond
their effective diameters. Patent ¶0083 states that the embodiments omit a vibration-reduction unit, so the model
leaves B4 centered.

### Open limitations

- The engine vignetting curve could not be compared: the scratch vignetting tool returned no samples for this lens
  and for an unrelated lens, a tool fault. No rim changed, so the engine values are unchanged: half-field 33.36°,
  f/3.600 and a 6.514 mm stop at wide.
- The inferred middle-to-tele f-number schedule remains as authored, with the B4 axial overshoot above. (Closed
  2026-10-28: replaced in the deployment pass below.)

## 2026-10-28 — Deployment validation and wording pass

### Source re-read

- Numerical Value Data 2 was read row by row from the rendered PDF pp. 17–18: 31 surfaces (R, d, nd, νd, effective
  diameter), the stop at surface 14, four cemented pairs, 19 aspheric values on surfaces 15, 16, 28 and 29 (K = 0 on
  all four; surface 28 prints no A10), seven variable gaps at three rows and BF 10.65 mm. No mismatch. The patent's
  sag equation uses 1 + √(1 − (1 + K)h²/R²), so its K is the repo's K.
- Element and unit focal lengths reproduce the printed single-lens and lens-unit data to 0.03 %. Table 1 (S-NPH4,
  θgF 0.6393; S-NBH51, θgF 0.5818) and the Table 2 NL shape factor 0.635 agree with the file.
- The other examples do not fit the product: Example 1 is a 36 mm macro, Example 3 a 24.8–68.0 mm F2.9 full-frame
  zoom and Example 4 an 11.3–21.8 mm APS-C zoom.

### First order, patent against model

- EFL 18.56 / 48.87 / 145.41 mm against 18.552 / 48.849 / 145.338 mm (−0.04 to −0.05 %). F3.60 / 5.56 / 6.49
  reproduced (the iris is sized from the station f-number). BF 10.65 mm against paraxial 10.637 / 10.615 / 10.598 mm.
  Total length 103.26 / 118.62 / 145.33 mm against 103.26 / 118.62 / 145.34 mm (sum of rounded values).
- The real chief ray to 13.66 mm leaves at 37.77 / 15.26 / 5.31°; the printed 36.35 / 15.62 / 5.37° are atan(Y/f).
- The patent prints no finite-focus rows. The calculated B6 travel reaches Canon's 0.25 m at wide and middle and
  0.45 m at tele, where the paraxial magnification is 0.312 against Canon's 0.31×. At the printed wide row the
  rounded infinity gaps leave a 0.013 mm residual (infinity focus at about 27 m), which is why a 32 m label there
  focuses at about 14.9 m; every finite keyframe matches its label.

### Maker data

- Canon Camera Museum (ef462): 17 elements in 13 groups, two aspherical elements, 0.25 m at 18 and 50 mm, 0.45 m at
  150 mm, 0.31×, seven blades, F22–40, November 2016. Reviews add one UD element. The diagram marks UD glass on L2,
  aspheres on L8 and L16 and the IS unit as B4 (L10–L11), matching Fig. 3 and the data element by element.
- Priority JP 2016-179276 (14 September 2016) is one day before the lens's announcement.

### Changes in this pass

- B6 law near wide. The station-by-station B6 solve first closed D24 from 1.40 to 1.323 mm (18.6–21.6 mm) before
  widening, a direction change ¶0073 does not allow. Stations 1–17 (19.20–30.87 mm) now carry a monotonic cubic D24
  from 1.40 mm with a smooth join at station 18 (31.81 mm), and B2 (D5 up, D13 down by the same amount) is solved for
  zero paraxial defocus: at most 0.266 mm imageward of its linear path, at 21.77 mm, then objectward, the locus convex
  to the image of ¶0072. The finite-focus B6 positions at those stations were re-solved for the same labelled
  distances, and their station focal lengths recomputed (for example 21.5589 → 21.7739 mm). Direction changes per
  gap, before → after: D5 0 → 0, D13 0 → 0, D18 1 → 1, D21 1 → 1, D24 2 → 1, D27 2 → 1, D29 0 → 0, which is what
  ¶0073 describes. The printed rows are unchanged; the largest paraxial defocus at a calculated station is 6 × 10⁻⁶ mm
  (rounding). B4 as the compensator was not used (rim collision with B3, as recorded in the analysis).
- F-numbers, stations 33–63 (50.29–139.49 mm): the linear interpolation is replaced by
  N = 5.56 + 0.93 g(u), g(u) = u + u(1 − u)(a + bu + (1 − a − b)u²), u = 0 at the middle row and 1 at tele, so the
  curve is monotonic, meets F5.56 and F6.49 exactly and flattens into tele. a and b were fitted to the minimal clearing
  schedule above and the values rounded up to 0.0001; every station is at or above that schedule, by at most 0.0092
  (56.6–60.1 mm). Old → new: 54.90 mm 5.676 → 5.725, 70.25 mm 5.909 → 6.017, 91.89 mm 6.141 → 6.276, 102.33 mm
  6.228 → 6.359, 123.68 mm 6.374 → 6.460. The engine stop radius at 91.89 mm falls from 6.203 to 6.069 mm. The
  real-ray axial check (pupil-nearest root) now finds no clipped surface at any station; the largest remaining
  overshoot is 0.003 mm at the printed middle row, inside the rounding of the printed 10.64 mm.
- Rounding: numeric literals with more than six decimals rounded to six (gaps, station focal lengths, f-numbers and
  close distances, dPgF 0.0298128 → 0.029813 and −0.0026254 → −0.002625); D21 and D27 written as 4.29 − D18 and
  13.79 − D24 so the coupled sums stay exact. Calculated station labels rounded to two decimals. A field-by-field
  comparison confirms every printed value is unchanged.
- Wording: header rewritten (spacing, the reconstruction and f-number rules, the IS unit); subtitle
  "US 2018/0074300 A1, Numerical Value Data 2 — strong production correlation"; specs in corpus form with
  "1 UD ELEMENT (MAKER)"; element labels "Element N"; specific roles in place of the boilerplate, with the IS mention
  moved from L14/L15 to L10/L11; glass strings in corpus form (resolution unchanged for all 17 elements); L14/L15
  apdNote reworded; `apd: "inferred"` on L2 (Canon's UD element; nd 1.49700 / νd 81.5 is the S-FPL51 class; the
  patent does not call it low-dispersion); focus description rewritten; B6 group label "B6 (focus)".
- Analysis: verification section renamed "Model Scope and Limitations" and reduced to model limits; process
  vocabulary removed; zoom-reconstruction, f-number and far-focus text rewritten for this pass; intermediate-zoom MTF
  figures from the old cam dropped.

### Results after this pass

- Engine at wide unchanged: EFL 18.5519 mm, F3.6, half-field 33.36°, stop 6.514 mm. Zoom arrays change only at
  stations 1–17 (EFL) and 33–63 (f-number and stop radius).
- Surface validator OK; image-circle floor 0 undersized; field coverage 100 % of 13.66 mm at all 65 stations;
  aperture audit 65 stations within 3 % of the stated f-number; real-ray clearance with no clipped axial beam and no
  blocked chief ray at infinity or at closest focus.

Open:

- The calculated zoom and focus states are first-order reconstructions, not Canon's cam; image quality between the
  printed rows was not re-measured after this pass.
- L16 (nd 1.53160, νd 55.8) matches no catalog material; its dispersion is estimated.
- The IS decenter of B4 is not modeled.
