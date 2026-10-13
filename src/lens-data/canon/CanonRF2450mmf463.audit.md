# Audit Log — Canon RF 24-50mm F4.5-6.3 IS STM

Patent: US 2023/0213739 A1, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US20230213739A1.pdf`.
- Example 1 row confirmed G1 / surface 1 nd = 1.63854, vd = 55.4.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| G1 / S1 | `S-BSL7 (OHARA 639/554)` | `S-BSM18 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the G1 glass identification and table label.

## 2026-09-23 — First-added diagram audit, lens 79

Source: local `patents/US20230213739A1.pdf` (image-only 300 dpi scan, no text layer). Front page p. 1 (bibliography
and the enlarged FIG. 1 drawing, axis horizontal, object on the left); FIG. 1 / FIG. 2A p. 2; ¶0058–¶0072 p. 19
(movement loci, focus, IS); ¶0078 aspheric formula and Numerical Example 1 surface data p. 20; Example 1 various data
and unit data, and Examples 2–3 for identity, p. 21. Every row was read on the rendered page.

### Retained after re-reading the source

- Identity: Example 1 (f = 24.71 / 35.01 / 48.53, FNO 4.63 / 5.66 / 6.48, 8 elements) is the FIG. 1 and front-page
  embodiment. Examples 2 and 3 share the eight-element layout (24.72–48.52 mm), so the production match cannot be
  narrowed further from the patent. Example 1 is kept. Inventors (Makoto Nakahara, Shinya Okuoka), assignee, number
  and year are correct.
- All 18 rows (R, d, nd, νd, diaphragm at 13, flare stop FP at 14) and the three aspheres (K and A4–A12) match. The
  formula (¶0078) uses the (1 + K) conic form and every K is 0, so no conversion applies. No filter or cover plate is
  listed, and d18 equals the BF row, so the last gap is stored as published.
- All three zoom stations are tabulated (the wide column header is misprinted "1.96"). No interpolated stations are
  stored. Paraxial EFL is 24.706 / 35.013 / 48.529 mm and infinity defocus −0.008 / +0.000 / −0.012 mm. Unit focal
  lengths −40.14 / 39.51 / 62.75 / −185.51 are reproduced, and every element `fl` matches its thick-lens value.
- Element types agree with the R signs. `elementCount` 8 and `groupCount` 8 (all air-spaced) are correct, as are
  `specs` f, F and 2ω (2 × 36.23° / 23.08°). Seven of eight glass labels resolve to exact OHARA coordinates.
- Rims kept (within about 15 % of FIG. 1): S2 14.4 (curve end 14.8), G2 14.0 / 14.2 (15.0), L1P 13.2 / 12.7 (14.3),
  S9 / S11 / S12 5.8 / 5.8 / 5.2 (L2b/L2c 5.4–5.5), LP 8.6 / 9.0 (9.4), and L4 11.8 / 12.5. For L4, the 17A curve ends
  at 12.1 mm with a flat flange out to 13.5 mm; the drawn corner offset matches the 17A sag, −2.9 mm at that height.
  The 18A curve reaches about 13.4 mm. FP (S14) stays 6.5 mm: FIG. 1 draws its opening at about 4.3 mm, which would
  clip the f/4.63 axial beam (4.41 mm), so the drawing is treated as a symbol.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Header motion note | "No reversing groups — all movements monotonic"; d14/d16 listed as focus-only gaps | L1 follows a path convex toward the image and reverses near the middle; L2 and L4 locked; LP floats | ¶0070 and the gap table. Derived from the image plane: L1 front vertex 105.60 → 98.52 → 99.03 mm; stop 50.82 → 59.73 → 71.07; L4 rear 16.94 → 25.84 → 37.19; d14 + d16 = 21.28 mm at every station |
| Close-focus `var` d14 / d16 | 8.04 / 13.24, 8.88 / 12.41, 8.80 / 12.48 ("estimates", LP 2.0 / 1.5 / 1.5 mm) | 6.77 / 14.51, 5.59 / 15.70, 3.42 / 17.86 | The old pairs actually focused at 0.44 / 0.85 / 1.28 m object-to-image, not the 0.30 m label. New values are the calculated paraxial LP travel (3.27 / 4.79 / 6.88 mm toward the object) for Canon's 0.30 m (24 mm) and 0.35 m (50 mm) MFD, with 0.32 m interpolated at 35 mm. The patent gives the direction only (abstract, ¶0067). β = −0.116 / −0.151 / −0.195 against Canon's 0.11× / 0.19× |
| `zoomCloseFocusM` | absent | [0.30, 0.32, 0.35] | Station-dependent near conjugates for the calculated pairs |
| `zoomApertureModel` | absent (fixed iris) | `"from-nominal-fno"` | Stop rides in L2 (¶0066), and no iris diameters are published. A fixed iris gave f/5.43 at the middle station against the source f/5.66. Inferred radii are 4.58 / 4.40 / 4.58 mm; FIG. 1 draws the SP opening at about 4.4 mm |
| STO `sd` | 4.9 | 4.6 | Records the largest inferred iris radius (4.58) |
| `fstopSeries`, `maxFstop` | starts 4.5; default 16 with f/22 in the series | starts 4.63; 22 | f/4.5 is not reachable at the source f/4.63, and f/22 was unreachable at the default maximum. The production minimum aperture was not verified in this audit |
| S1 `sd` | 16.0 | 18.8 | FIG. 1 G1 front rim at 282–283 px on both sides of the axis, × 0.0666 mm/px (scale 15.02 px/mm from the 1332 px S1–S18 span = 88.66 mm; the IP line then lands at BF 16.9 mm). The old rim was 17.5 % smaller and cut 41 % of one side of the ω = 36.23° bundle |
| S7 / S8 `sd` | 8.0 / 7.5 | 6.4 / 6.4 | FIG. 1 L2a rim 94.5–97 px = 6.3–6.5 mm (old values 25 % / 19 % larger). The axial beam needs 5.48 / 5.28 mm |
| S10 `sd` | 4.7 | 4.9 | `CLIPS-AXIAL`: the f/4.63 marginal ray needs 4.72 mm. S10/S11 sag intrusion at 4.9 is 0.306 mm against a 0.333 mm limit |
| G2, L4 `glass` | `COP resin / ZEONEX E48R (531/559)` | `531559 — optical resin coordinate (…material not named)` | The patent names no material. ¶0062 only allows resin for G2. The trade-name attribution was unsupported; the code form keeps the resolver fallback unchanged |
| `specs`, element labels | "(2 PMo)", "PMo" | "(G2, L4)", "Asph." | PMo is not a patent term |
| L4 role | "departures >2 mm" | about −1.8 mm at the rims | 17A −1.84 mm at 11.8 mm; 18A −1.75 mm at 12.5 mm |
| Analysis | zoom motion ("rear group near-rigid", L1 simply image-ward, barrel claims); close-focus estimate note; S-TIH6 / S-LAH55V / S-TIH53 / TAFD5 / S-LAH53 / TAFD25 names; 3A "flatter than base sphere"; "barrel distortion pushes content outward"; PMo/ZEONEX material claims; "three of eight surfaces" | Corrected | L1P, L2a, L2b and L2c now name the stored S-TIM35 / S-LAH95 / S-NPH53 / S-LAH66. The positive 3A departure steepens the convex surface. The real chief ray at 36.23° lands at 15.8 mm (about −13 %, FIG. 2A). Resin is inferred |

### Checks on the result

- Surface validator: no errors. Image-circle check: 0 undersized.
- Exact trace at the patent angles (36.23 / 29.55 / 23.08°): no axial clipping and no chief-ray blocking at
  infinity or at the calculated close focus. Real chief heights at the image are 15.80 / 18.45 / 19.86 mm. Y = 18.10 mm
  takes ω = 41.3° at wide, and no ray reaches 21.6 mm at 24 mm (the trace tops out near 20.6 mm). At Y = 21.6 mm the
  middle (34.3°) and tele (25.0°) chief rays pass every rim; 18A has 0.08 mm spare at tele, with 96 % one-side
  corner-bundle clipping there.
- Engine: FOPEN 4.63 / 5.66 / 6.48 with stop radii 4.581 / 4.401 / 4.582 mm. The paraxial wide half-field estimate is
  33.9° (limited by S2, unchanged), below the patent's paraxial 36.23°.
- Paraxial close-focus conjugates from the stored pairs: 299.9 / 320.0 / 349.9 mm object-to-image.
- Glass: 6 of 8 labels OK-compatible; G2 and L4 use the code fallback (no catalog resin).
- Live check (headless renders): production wide infinity as the baseline, then local wide infinity (taller G1 front
  than G2, as in FIG. 1; smaller L2a), tele closest focus (LP advanced, D14 3.42, label 35 cm), and the zoom-movement
  overlay at 35 mm (L1 image-ward, L2 and LR object-ward, 20.25 mm maximum travel). The aperture slider runs f/4.63 to
  f/22. Off-axis rays were not toggled (needs a click).

### Open limitations

- Close-focus LP positions are calculated from Canon's published MFD, not patent data. The 35 mm near distance
  (0.32 m) is interpolated.
- Iris radii are inferred from the FNO schedule. FP's physical diameter is unknown.
- The G2 and L4 material is not stated; resin is inferred from the 1.5311 / 55.9 coordinate. No catalog resin entry
  exists for 531559.
- The engine's paraxial wide half-field (33.9°) stays below the patent's 36.23°. The wide end relies on digital
  distortion correction to fill the frame.
- Rims other than S1, L2a and S10 remain estimates within about 15 % of FIG. 1. No effective diameters are published.
