# Audit Log - FUJIFILM FUJINON XF16-55mmF2.8 R LM WR

Patent: US 2016/0154221 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20160154221A1.pdf`. The patent publishes Example 1 prescription, zoom data, focus assumptions, and Fig. 1 wide/intermediate/tele sections, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a very large front G1 across the zoom range, while G2 through G5 remain much smaller around the stop and image-side groups.
- Stored SDs match that outline: G1 starts at 21.7-25.2 mm, G2-G5 stay mostly in the 8.8-11.4 mm range, and the stop is 9.1 mm.
- No SD values changed. Current values remain inferred from the patent figure, infinity zoom-state ray envelopes, f/2.8 stop geometry, edge thickness, and cross-gap sag clearance.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Example 1 in local `patents/US20160154221A1.pdf`; S13A remains 1.68458 / 30.88 and its R/d/asphere
  values are unchanged.
- S13A `Near OHARA L-TIM28 (685309)` -> code-first `685309 — dense flint (patent coordinate; vendor
  unresolved)`. L-TIM28 misses the stored index by about 0.0044 and is retained only as a comparison.
- Synchronized the L31 glass row and catalog-confidence summary.

## 2026-07-30 - Remaining 685309 source audit

- Rechecked the full coefficient-backed catalog after the legacy additions; no row is inside the runtime
  `|delta nd| <= 0.003` and `|delta vd| <= 2` safety window.
- OHARA S-TIM28 / HOYA E-FD8 remain index-near comparisons at about `delta nd = +0.00435`, outside the guard.
- Reworded L31 as explicit unmatched `685309`; no prescription, asphere, zoom, or semi-diameter values changed.

## 2026-09-23 — First-added diagram audit, lens 75

Source: local `patents/US20160154221A1.pdf` (300 dpi raster scan). Table 1–4 p. 15–16 (printed pp. 6–7), Fig. 1
(Example 1 wide/intermediate/tele sections) p. 2, Fig. 4 movement trajectories p. 5, ¶[0078], [0084], [0088].
Production specifications: Fujifilm's XF16-55mmF2.8 R LM WR specification page (macro-range MFD 0.30 m wide /
0.40 m tele, 0.16× maximum at tele, F22 minimum aperture).

### Retained after re-reading the source

- All 30 lens rows (R, d, nd, νd), the stop at surface 15, the four Table 3 zoom gaps and the six Table 4 aspheres
  (KA → K = KA − 1, every odd/even A3–A16 term) match the stored values. Example 1 is stored; Examples 2 and 3 share
  the same end focal lengths, and the 17/12 construction with three aspheric and three ED elements matches production.
- Back focus: patent surfaces 31–33 (2.15 mm n 1.54763 and 0.70 mm n 1.49784 plates, 0.513 mm air) are excluded;
  the stored 21.999 mm last gap is the air-equivalent 19.630 + t/n + 0.513. Paraxial BFD 21.995 / 21.999 / 22.001 mm
  against the patent Bf 22.000; defocus ≤ 0.004 mm.
- Paraxial EFL 16.492 / 31.063 / 53.447 mm against 16.492 / 31.059 / 53.436. Every stored element `fl` agrees with
  the thick-lens value to 0.1 mm. Native scale retained (patent already at production focal lengths).
- Group motion: Fig. 4 shows G1, G3 and G4 moving monotonically objectward, G2 reversing (imageward to mid, then
  back) and G5 fixed. The stored gaps reproduce this: G2 rear vertex 84.8 → 79.6 → 82.6 mm from the image (air-
  equivalent back focus). All four gaps change monotonically. The analysis motion table was already correct; the
  data header's "all four trajectories are monotonic" wording was clarified.
- Glass labels all resolve within catalog tolerance; L31 remains the documented unmatched 685309.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| S1 / S2 / S3 `sd` | 25.2 / 24.8 / 23.6 | 28.5 / 26.8 / 26.6 | Fig. 1 wide section, bottom side at 600 dpi: L11 rim 433 px, L12 rim 405 px × 0.0658 mm/px (scale from S1 to the cover-plate front, 118.74 mm = 902 px at 300 dpi). The old S1 blocked the exact chief ray at the wide end (25.50 mm needed at Y = 14.1 mm; 26.6 mm at the patent ω = 43.5°). |
| S4 / S5 `sd` | 23.6 / 21.7 | 25.7 / 25.7 | Fig. 1 L13 rim 390 px on both faces; S5 was 18 % under the figure. |
| 6A / 7A `sd` | 11.5 / 10.8 | 17.4 / 11.3 | Fig. 1: L21 front face runs to the flange at 17.4 mm; the concave rear ends at 11.3 mm before a flat annulus. The old 6A blocked the wide chief ray (14.8 mm at Y = 14.1 mm, 15.25 mm at ω = 43.5°). 7A needs 10.9 mm; slope at 11.3 mm is 51.7°, no turnover. |
| S8 / S9 `sd` | 9.8 / 9.9 | 10.5 / 10.5 | Chief ray at ω = 43.5° reaches 9.95 mm on S8. Fig. 1 draws the L22/L23 block at 11.7 mm, but S10/S11 intersect near 10.8 mm, so S10–S12 were left at 10.2–10.3 mm. |
| S29 / S30 `sd` | 11.1 / 11.1 | 13.8 / 13.8 | Fig. 1 L51 rim 210–212 px = 13.8–13.9 mm (20 % larger). The old S30 blocked the full-field chief ray at the mid/tele stations (11.14 mm at Y = 14.1; 11.39 mm at the patent ω). Edge thickness 1.5 mm. |
| STO `sd` | 9.1 | 9.7 | Records the largest inferred iris (tele), matching the engine's inferred 9.73 mm radius. |
| `nominalFno`, `zoomApertureModel` | 2.8 scalar, fixed iris | `[2.88, 2.74, 2.89]`, `"from-nominal-fno"` | Table 2 F-numbers; ¶[0088] variable stop, no published diameters. The old fixed 7.38 mm iris gave about f/3.6 at tele. Inferred radii 7.16 / 8.99 / 9.73 mm. |
| `fstopSeries`, `maxFstop` | starts 2.8; max 16 | starts 2.74; 22 | f/2.8 is not the source f-number at wide or tele; the production minimum aperture is F22. |
| `zoomCloseFocusM`, tele close gaps | 0.30 m at every station; D23/D28 11.805 / 9.848 | `[0.3, 0.3, 0.4]`; 10.418 / 11.235 | Fujifilm publishes a 0.40 m tele MFD. The paraxial G4 solve for 0.40 m gives 3.16 mm of travel and 0.154× (published 0.16×); 0.30 m at tele gave 0.217×. Wide/mid rows retained (they focus at 299.7 / 299.1 mm object-to-image). Mid 0.30 m is an assumption. |
| L12, L13 `type` | Biconvex Positive | Positive Meniscus | R = +54.35/+139.31 and +53.19/+200.57 mm; Fig. 1 draws menisci. |
| L31 `type` | Pos. Meniscus (2× Asph) | Biconvex Pos. (2× Asph) | R = +27.67 / −787.33 mm. |
| L33A `type` | Positive Meniscus | Biconvex Positive | R = +396.52 / −39.58 mm. |
| `varLabels` S28 | "BF" | "D28" | Surface 28 is the G4→G5 gap; the back focus behind fixed G5 is constant. |
| `specs` 2ω | "87.0° – 28.8° (PATENT, PARAXIAL)" | "87.0° – 48.6° – 28.8° (PATENT)" | Table 2 angles are real field angles, not paraxial. |
| Analysis | L23 "S-LAH58 (exact)"; ±10 % distortion claim; 0.30 m tele MFD; 4.55 mm tele travel; iris 7.0/8.5/9.1 | S-LAH95; traced distortion; 0.40 m tele; 3.16 mm; inferred 7.2/9.0/9.7 | Synced to the data file and the checks below. |

G3 and G4 rims were retained. Fig. 1 reads L31 11.5, L32 12.0 (front) / 10.0 (rear), L33 10.0–10.4, L34 10.9–11.0,
L41 10.9 and L42/L43 9.9 mm, all within about 15 % of the stored values. No stored value clips an axial beam.

### Checks on the result

- Repo surface validator: no errors. Image-circle floor: 0 undersized.
- Exact meridional trace, Y = 14.1 mm (X-Trans half-diagonal): no clipped axial beam or blocked chief ray at any
  station, at infinity or at closest focus. Y = 14.1 mm is reached at ω = 42.8° / 23.8° / 14.1°. The patent ω values
  (43.5° / 24.3° / 14.4°) land at 14.48 / 14.47 / 14.43 mm, so the patent evidently uses an image height of about
  14.45 mm. Chief rays at those angles pass every new rim. The shared Newton tracer loses the wide-end chief ray
  above about 42.8°; the robust marching tracer was used there.
- Traced chief-ray height against f·tanω: about −7.5 % at wide, +3 % at mid and +5 % at tele (calculated). The
  analysis's earlier "−10 %, tele essentially undistorted" estimate was replaced.
- Asphere rim departures for the analysis: 6A +264.6 µm at 17.4 mm; 7A −533.9 µm at 11.3 mm.
- Close focus: object-to-image 299.70 / 299.07 / 399.97 mm; magnification 0.080 / 0.141 / 0.154×.
- Engine: FOPEN 2.88 / 2.74 / 2.89; the paraxial half-field estimate rises from 35.1° to 36.5° at wide, limited by 7A.
- Live: production baseline at wide infinity compared with local wide infinity, tele at 0.40 m and the zoom
  group-movement overlay. The overlay matches Fig. 4, with G1 travelling 23.8 mm and G2 reversing. The wide section
  now shows the large G1 and L21 of Fig. 1. The aperture reads f/2.88 at wide and f/2.89 at tele. Off-axis bundles
  were not inspected, because the headless renderer cannot toggle them.

### Open limitations

- The patent publishes no clear apertures or iris diameters. Rims are figure measurements or ray-envelope estimates,
  and the iris schedule is inferred from the F-numbers.
- The mid-zoom MFD is not published; 0.30 m is assumed. All close-focus gaps are calculated, not patent values.
- The viewer's paraxial half-field at wide (36.5°) is below the patent's 43.5° because the estimate overstates
  chief-ray heights on 7A.
- L33 image-stabilization decentering (¶[0081]) is not modeled. The production XF16-55 mm Mark I has no OIS.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with the patent's physical optical member PP (Table 1, p. 15, surfaces 30–33, read
  on the rendered page): surface 30 now stores 19.630 mm to the first plate, then two cemented plates, 2.15 mm nd
  1.54763 / νd 54.98 (N-BALF5, resolves within catalog tolerance) and 0.70 mm nd 1.49784 / νd 54.98 (no catalog
  match, Abbe estimate), with 0.513 mm of air to the image. The patent prints no θgF for the plates. Traced by every
  analysis, not drawn.
- Paraxial check against the previous data: EFL identical at all three stations; defocus changes by +0.00056 mm at
  every station and close-focus keyframe, the rounding in the old 21.999 mm (exact fold 21.99956 mm). Physical track
  grows by 2.15 × (1 − 1/1.54763) + 0.70 × (1 − 1/1.49784) = 0.993 mm to 122.10 / 128.37 / 145.93 mm, the
  physical values the analysis already quoted.
- The derived close-focus gaps and Fujifilm's 0.30 / 0.40 m MFD are unchanged. The gaps were solved on the folded
  track, so the physical object-to-image distance at close focus is about 1 mm longer (about 300.7 / 300.1 / 401.0 mm).
