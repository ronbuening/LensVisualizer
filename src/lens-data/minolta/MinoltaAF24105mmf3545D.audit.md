# Audit Log - Minolta AF 24-105mm f/3.5-4.5 (D)

Patent: JP 2000-187161 A, Example 3 (Minolta Co., Ltd.; Mamoru Terada)

## 2026-11-07 — Package history

- Source: JP 2000-187161 A, Example 3 (Fig. 3), read from the J-PlatPat publication images; Google Patents has no PDF
  for this publication.
- Printed and transcribed as printed: all 25 surfaces (R, d, N, ν), the stop r15 with d15 = 0.900 mm, the 0.010 mm
  cement layer between L1 and L2 (N 1.51400, ν 42.83), the aspheric coefficients of r7, r24 and r25 (ε = 1, K = 0),
  and d6, d14 and d21 at the three printed focal lengths. No scaling.
- Derived, not printed: the back focus. The patent prints no d25 or image distance for any example; the package set BF
  to the paraxial image distance, 36.5014 / 53.6671 / 63.9098 mm.
- Stop radius: derived by the engine from the printed F-number at each station; no diameter is printed.
- Semi-diameters: inferred from Fig. 3 proportions and ray clearance. S8 was reduced from a 10.4 mm figure reading to
  10.0 mm so that the deep L4 rear face keeps an air-gap margin to L5 at the rim. L1's front face beyond the cemented
  interface and L4's oblique edge between its 13.8 mm and 10.0 mm faces were left as drawn, with no added lands or rim
  extensions.
- Sony SAL24105 service-manual iris dimensions (16.5 mm and 16.6 mm, which disagree with each other) were not used.
- Glass: all 13 media were kept as Unmatched (nd/νd) with dispersion estimated from νd.
- Focus: infinity-only. The patent prints no close-focus spacing; both focus rows repeat the infinity spacings and
  closeFocusM is a far placeholder distance.
- The package's own traces found no failed chief or pupil rays at the three stations, and a sampled corner
  transmission at the 21.6 mm image height of about 61 % / 96 % / 70 % (wide / mid / tele).
- Open at hand-over: the link to the production lens was a qualified correlation, not a proven factory prescription;
  physical edge closures and glass dispersion are not known from the source.

## 2026-11-08 — Deployment validation and production cleanup

### Source re-read

- Re-read the Example 3 construction table images (r1–r25, d1–d24, N1–N13 / ν1–ν13), the stop row r15 = ∞(S) with
  d15 = 0.900, the variable gaps d6 = 1.900 / 14.386 / 34.324, d14 = 15.728 / 6.432 / 0.800 and d21 = 5.723 / 1.701 /
  0.900, and f = 24.71 / 50.00 / 102.50, FNO 3.60 / 4.10 / 4.60. Every value matches the data file.
- Aspheric data ¶0050–¶0052 (r7: A4–A12; r24 and r25: A4–A8; ε = 1.0000 on all three) match the file. Example 1 and 2
  coefficients (¶0040, ¶0045) differ, so the file holds Example 3's.
- Front page: application JP H10-367570 filed 1998-12-24, published 2000-07-04, applicant Minolta Co., Ltd., inventor
  寺田 守 (Mamoru Terada), 6 claims, examination not requested at publication. ¶0010, ¶0023 and ¶0034 and claim 6 give
  focusing by Gr2; ¶0012 has all groups moving toward the object from wide to tele with the stop moving with Gr3.
- Mismatches: none.

### Patent against model

- EFL: 24.71 / 50.00 / 102.50 printed; 24.706 / 50.000 / 102.511 mm traced.
- F-number: the iris is sized from the printed 3.6 / 4.1 / 4.6; stop radius 7.121 / 8.274 / 8.514 mm.
- BF: 36.5014 / 53.6671 / 63.9098 mm (paraxial); total length 109.003 / 125.337 / 149.085 mm.
- Table 1 conditions, printed against model (Y′ = 21.633 mm): TLW/Y′ 5.039 / 5.0388; fW/Y′ 1.142 / 1.1420;
  f4/fW 1.9687 / 1.9688; f1/fW 3.5605 / 3.5604; β2T −0.515 / −0.5151; X1/fW 1.6222 / 1.6224; f4/f3 1.2292 / 1.2293.
  Group focal lengths +87.96 / −15.59 / +39.57 / +48.64 mm; Gr1 travel 40.081 mm.
- The ten (P4) values for r24 in ¶0053 are reproduced from the file's coefficients within 0.03 %.
- Full-aperture LSA −0.169 / −0.083 / −0.155 mm, so there is no sign of a misprinted sign.
- Real chief ray to the 21.63 mm corner: 42.0° / 22.9° / 11.5°, about −2.8 % / +2.6 % / +3.6 % distortion. Engine
  half-fields 36.2° / 30.1° / 13.4°.
- Paraxial Gr2 solve for a 0.5 m object-to-image distance (not modeled): d6 changes by −1.153 / −1.756 / −4.216 mm and
  d14 by the opposite amount; 0.184× at tele.

### Product correlation and maker diagram

- Sony Japan's SAL24105 specification: 11 groups / 12 elements, 0.5 m, 0.18×, 62 mm filter, 7 blades. mhohner.de:
  12 / 11, internal focus, 0.5 m and 1:5.49, length 69.0–108.0 mm, released 2000; its Sony SAL24105 page says the
  design is the same as the Minolta version. Imaging Resource: 12 / 11.
- Examples 1–3 have the 12 / 11 layout; Example 4 has 13 elements. Example 3 fits the barrel best: its 40.1 mm Gr1
  travel is closest to the 39 mm barrel extension, and its 109.0 mm wide length less the 44.5 mm A-mount flange
  distance puts the front vertex 4.5 mm inside the 69 mm barrel (Examples 1 and 2: about 15.5 and 13.6 mm).
- No Minolta or Sony construction diagram was found; the Sony Japan pages show product photographs only. The page's
  cross-section was compared with patent Fig. 3 instead: same element order and shapes, the cemented Gr1 doublet, the
  large Gr1 diameter against the compact rear groups, and the stop between Gr2 and Gr3.

### Fields changed

- `key` → `minolta-af-24-105mm-f3-5-4-5-d`; `name` → `MINOLTA AF 24-105mm f/3.5-4.5 (D)`; `subtitle` →
  `JP 2000-187161 A, Example 3 — qualified production correlation`.
- `catalog`: added `lensMounts: ["sony-a"]`, `focalLengthMm.marketing` [24, 105], `fNumber.marketing` 3.5 and
  `closeFocusM.marketing` 0.5; replaced the nine specs lines with "12 ELEMENTS / 11 GROUPS", "DESIGN f = 24.71–102.5
  mm", "DESIGN F/3.6–4.6", "3 ASPHERICAL SURFACES / 2 ELEMENTS" and "INNER FOCUS".
- Header comment rewritten in the house form.
- Elements: names L1–L12 and C1, labels "Element 1"–"Element 12" and "Cement layer", shape types from the signs of R,
  specific roles, standalone focal lengths, and `diagramLabel` on every entry so the drawing matches the labels. Ids,
  nd, νd and media are unchanged.
- Glass: L2 → PCD4, L5 → TAF1, L8 and L11 → BSC7, L9 → E-C3, L10 → E-FD4 (Hoya, coordinate equivalents). Each resolves
  with nd equal to five decimals and Δνd +0.01 / −0.15 / 0.00 / 0.00 / +0.02. L3 (1.69680 / 56.47) stays Unmatched:
  the nearest catalog glass, CDGM H-LaK12, is 0.29 lower in νd. L1, L4, L6, L7, L12 and the cement have no catalog
  match.
- Surface labels 7, 24 and 25 → 7A, 24A and 25A, with the BF gap key and the group ends updated; gap labels → D6, D14,
  D21 and BF; doublet text → D1; focus description rewritten (inner focus by Gr2, infinity-only).
- Cement layer: the requested change to an undrawn `media` entry was not made. That form keeps the 0.010 mm thickness
  and the d-line first-order values, but a medium carries no νd, so the dispersion engine would rate the whole lens
  "constant" and switch off chromatic ray display and polychromatic MTF (the Panasonic 12-32mm records the same
  effect). The drawn element was kept as C1, as the Nikon AF-S 20mm f/1.8G and Hasselblad XCD 25mm do.
- Analysis rewritten to the analysis-spec skeleton; this log condensed.
- No R, d, nd, νd, asphere, stop or semi-diameter value changed. Before and after the edits the engine values are
  identical (EFL, FOPEN, half-fields, stop radii, BFD at all three stations).

### Checks

- Surface audit: OK. Aperture audit: all three stations within 3 % of the stated F-number, no rim, trace or iris
  limits. Image-circle audit: not undersized.

### Open

- Closed 2026-11-08 (second review): the 24A front face of L12 turns back toward the object beyond about h = 8.1 mm,
  inside its 10.6 mm semi-diameter, and the patent's (P4) table runs to y = 9.708 mm. Fig. 3 draws L12 at 10.6 mm
  (10.59 mm measured) with the front face bending back near its rim, and cutting both faces to 9.71 mm would cost
  7.6 points of corner light at the wide end, so the 10.6 mm rim stays.
- Close focus: Gr2 rows for 0.5 m could be added as calculated (not published) states from the solve above.
- Closed 2026-11-08 (third review): cement layer form. The owner's decision for these branches keeps a printed cement
  layer as a drawn element, so C1 stays (νd 42.83, dispersion estimated from νd, so no medium is constant).

## 2026-11-08 — Second review: diagram, labels and movement

### What was compared

- The live page (infinity at 24.71, 50 and 102.5 mm, the focus control, both movement overlays and the element
  inspector) against patent Fig. 3, which the brief description of the drawings names as the construction of
  Example 3, drawn at the wide end with W→T arrows. The aberration curves of Fig. 7 were compared with traced values.
- Figure scale: a least-squares fit of 18 vertex crossings (r1 to r25 at the wide spacing, 72.502 mm) gives
  0.0854 mm per pixel at 600 dpi, with every vertex within 0.19 mm. The vertical scale is the same: the r2 arc
  (R 89.123 mm) drawn at that scale lands within about 1.5 px of the figure out to h = 27 mm. The drawn axis is
  tilted by about 0.5°, so each rim is the mean of its top and bottom reading about the local axis.
- An overlay of the model outline on the figure at matched scale shows every element on the drawn lines.

### Rims

| Element (faces) | Fig. 3 (mm)       | Baseline (mm) | Final (mm)  | Verdict                         |
| --------------- | ----------------- | ------------- | ----------- | ------------------------------- |
| L1 (1, 2)       | 28.74, square-cut | 28.8 / 26.8   | 28.8 / 28.8 | r2 raised to square L1; 0.0 pts |
| L2 (3, 4)       | 26.82             | 26.8          | 26.8        | kept                            |
| L3 (5, 6)       | 24.77             | 24.8          | 24.8        | kept                            |
| L4 (7A, 8)      | 13.80 / 10.3–10.5 | 13.8 / 10.0   | 13.8 / 10.0 | kept; S8 held for the gap to L5 |
| L5 (9, 10)      | 10.55             | 10.5          | 10.5        | kept                            |
| L6 (11, 12)     | 9.29              | 9.2           | 9.2         | kept                            |
| L7 (13, 14)     | 9.14              | 8.8           | 8.8         | kept (3.8 % low, order right)   |
| L8 (16, 17)     | 10.10             | 10.0          | 10.0        | kept                            |
| L9 (18, 19)     | 10.04             | 9.9           | 9.9         | kept                            |
| L10 (20, 21)    | 9.65              | 9.7           | 9.7         | kept                            |
| L11 (22, 23)    | 10.93             | 11.0          | 11.0        | kept                            |
| L12 (24A, 25A)  | 10.61             | 10.6          | 10.6        | kept                            |

- Cuts and lands: none. No face ends below its baseline value, and the file has no `rimExtensionSd`,
  `rimCutDepthMm` or `checks.gapSagFrac`. The r2 raise changes no transmitted light: against the baseline rims the
  worst loss is 0.0 points at every field sample of the three printed stations and of nine zoom fractions from wide
  to tele. Engine half-field 36.21° and FOPEN 3.6 are unchanged; wide-open corner transmission stays 60.2 / 95.9 /
  70.0 % at 42.0° / 22.9° / 11.5°. The surface, aperture and image-circle audits pass with no rim limit, and the
  traced corner reaches 21.63 mm at every station.
- At 10.0 mm the L4 rear face clears L5 by 0.69 mm at the rim; at the figure's 10.4 mm the gap would close to
  0.15 mm. The figure draws the faces meeting, so the 3–5 % difference is kept.
- Fig. 3 draws the iris bars with their inner ends about 8.6 mm from the axis, against the engine's 7.12 mm wide-open
  stop sized from F/3.6; the stop was not touched and the tick was not used for scale.

### Labels and tags

- The doublet bracket read "D1", the form the D6 / D14 / D21 gap labels use for spacings, and the cement layer
  already carries the "C1" label, so the bracket and the `cemented` name of L1 and L2 are now "L1+L2".
- C1 carried `cemented: "D1"` with L1 and L2, so the inspector showed "TRIPLET D1" on all three. C1 no longer
  carries the field; L1 and L2 show "DOUBLET L1+L2" and C1's inspector shows FL = — with no badge.
- Names and diagram labels agree (L1–L12, C1). Every type agrees with the signs of R; roles are correct. Aspheric
  labels are on 7A, 24A and 25A only, the patent's starred r7, r24 and r25. The stop sits between L7 and L8 as
  r15(S) does. Group brackets Gr1–Gr4 span surfaces 1–6, 7A–14, 16–21 and 22–25A, as the figure's groups do. No
  element carries an `apd` tag and the patent names no special glass. The inspectors of L4, L12 and the six
  Hoya-labelled elements show the expected type, focal length, glass and asphere lines.
- Glass: the seven Unmatched media (L1 1.83350/21.00, cement 1.51400/42.83, L3 1.69680/56.47, L4 1.85000/40.04,
  L6 1.75000/25.14, L7 1.75450/51.57, L12 1.77450/44.46) each recur unchanged in Examples 1, 2 and 4, so they are
  real glasses, not optimizer values. The patent prints only Nd and νd (¶0037); no glass name, line index or partial
  dispersion. The Hoya labels sit within 0.15 of the printed νd.

### Movement

- Zoom stations ascend 24.71 → 50 → 102.5 mm and each gap lists them in that order, as the table prints them.
- With the image plane fixed, every group moves toward the object, monotonically, as ¶0012 and the Fig. 3 arrows
  show: Gr1 16.33 + 23.75 = 40.08 mm, Gr2 3.85 + 3.81 = 7.66 mm, Gr3 (with the stop) 13.14 + 9.44 = 22.59 mm and
  Gr4 17.17 + 10.24 = 27.41 mm (wide→mid + mid→tele). The zoom overlay shows the same, with a 40.08 mm maximum.
- Focus is infinity-only by design: both focus rows repeat the infinity spacings, the focus control reads "Not
  modeled" and the focus overlay is disabled. The description's Gr2 inner focus toward the object matches ¶0023
  and ¶0034.

### Aberrations against Fig. 7

- Distortion at Y′ = 21.6 mm: Fig. 7 reads about −3.5 % / +2.7 % / +3.7 % (W / M / T), the model gives −2.74 % /
  +2.6 % / +3.6 %. The wide curve also bottoms out lower in the figure, about −4.3 % near 84 % height against the
  model's −3.8 %.
- Astigmatism agrees in form at all three stations. At the wide end the meridional curve breaks far negative at the
  corner while the sagittal stays near +0.4 mm; the app's real-ray curves, which stop at its 36.2° half-field, end at
  T −1.36 / S +0.38 mm. At mid both curves stay within about 0.2 mm of the image plane. At tele the meridional curve
  dips slightly and then rises to about +0.4 mm at the corner, as the app's tangential curve does.
- Colour: relative to the d-line paraxial focus, the patent's C-line curve starts at about +0.10 / +0.10 / +0.12 mm
  and the model's at +0.097 / +0.120 / +0.132 mm; at the wide end both end near −0.09 mm. The g-line curve starts at
  about −0.10 / −0.07 / +0.06 mm in the figure but at −0.048 / +0.078 / +0.256 mm in the model, 0.05 / 0.15 /
  0.20 mm farther from the lens. A partial-dispersion excess of +0.02 on L6 (Unmatched 1.75000/25.14, traced on
  the normal line) alone moves the model's g focus to −0.083 / −0.020 / +0.070 mm.

### L6 and L4 glass labels

| Station | Line | Fig. 7        | νd estimate     | L6 FF8          | L6 FF8 + L4 M-TAFD305 |
| ------- | ---- | ------------- | --------------- | --------------- | --------------------- |
| Wide    | C    | +0.10 / −0.09 | +0.097 / −0.089 | +0.095 / −0.091 | +0.094 / −0.092       |
| Wide    | g    | −0.10 / −0.13 | −0.048 / −0.055 | −0.099 / −0.105 | −0.104 / −0.110       |
| Mid     | C    | +0.10 / +0.03 | +0.120 / +0.020 | +0.114 / +0.014 | +0.112 / +0.012       |
| Mid     | g    | −0.07 / +0.24 | +0.078 / +0.397 | −0.066 / +0.247 | −0.080 / +0.232       |
| Tele    | C    | +0.12 / +0.05 | +0.132 / +0.026 | +0.121 / +0.015 | +0.116 / +0.010       |
| Tele    | g    | +0.06 / +0.20 | +0.256 / +0.391 | −0.018 / +0.107 | −0.048 / +0.077       |

- Values are the paraxial / full-aperture marginal on-axis focus in mm from the d-line paraxial focus. The catalog
  curves are anchored on the printed nd, so no first-order value changes.
- HOYA FF8 (1.75211/25.05, PgF 0.6192, about +0.018 above the engine's normal line) on L6 brings the g line within
  about 0.02 mm of the figure at wide and mid and leaves it 0.08–0.09 mm short at tele, where the νd estimate ran
  0.05–0.20 mm long; C stays within 0.02 mm paraxially at every station. L6 keeps FF8, which resolves (Δnd 0.0021,
  Δνd −0.09).
- HOYA M-TAFD305 on L4, added to FF8, changes wide and mid by 0.015 mm or less but moves the tele g focus a further
  0.03 mm short of the figure, so L4 keeps "Unmatched (1.85000/40.04)". No `dPgF` is set on any element.

### Open

- Open (updated 2026-11-08): with HOYA FF8 on L6 the g-line focus follows Fig. 7 within about 0.02 mm at wide and
  mid; at tele it sits about 0.08 mm short (paraxial −0.018 mm against the figure's +0.06 mm), where the νd estimate
  ran 0.20 mm long. No single label tested here removes the tele residual. Third review: a partial-dispersion
  excess of +0.02 / +0.03 on L1 (Unmatched 1.83350/21.00), usual for dense flints near νd 21, moves the tele g focus
  to +0.033 / +0.058 mm and keeps wide and mid within about 0.02 mm of the figure; the patent prints no θgF and no
  catalog glass lies within the window, so no `dPgF` is set.
- Closed 2026-11-08 (third review): wide-end distortion. The W and M distortion panels print their left end tick as
  "−6.0", but the zero line sits midway between the end ticks, as on the T panel printed −5.0 / 5.0, so every panel
  spans ±5 %. Read that way, Fig. 7 gives −2.9 % / +2.5 % / +3.8 % at the corner and a wide-end minimum of −3.9 %
  near 83 % height; an independent real-ray trace gives −2.78 % / +2.55 % / +3.65 % and −3.81 %. The wide gaps and
  the r7, r24 and r25 coefficients match the table on publication page (11).

## 2026-11-08 — Third review: diagram, labels and movement

### What was compared

- The live page at 24.71, 50 and 102.5 mm, both movement overlays and the inspectors of L1, C1, L2, L4, L6 and L12,
  against Fig. 3 read at its native 200 dpi. Scale re-proven: 20 vertex crossings fit 0.2549 mm per native pixel
  (the second review's 0.0854 mm per 600-dpi pixel), every vertex within 0.25 mm; the r2 and r5 arcs give the same
  vertical scale within about 1 %.

### Change

| Item                          | Before         | After | Fig. 3 reading                                      | Verdict            |
| ----------------------------- | -------------- | ----- | --------------------------------------------------- | ------------------ |
| S8 `rimExtensionSd` (L4 edge) | none           | 13.8  | edge flat at 13.4 / 13.9 mm for 3 mm, then a step   | land kept; 0.0 pts |
| `checks.gapSagFrac`           | 0.90 (default) | 0.93  | —                                                   | needed by the land |

- The page drew L4 as a 46° bevel from the 13.8 mm front rim straight to the 10.0 mm rear rim, about 2.8 mm below
  the figure's edge 3 mm behind the front rim. Fig. 3 draws a cylindrical edge at about 13.7 mm, then a step down
  to the rear face near z = 18.9–19.3 mm (r7 vertex at 15.11 mm); the land draws that step at the r8 rim sag,
  z = 19.90 mm. Both `sd` values are unchanged.
- The land takes 5.954 mm of the 6.433 mm d8 and clears the L5 rim by 0.48 mm. The validator refuses it at 0.92
  (allowed 5.918 mm) and passes it at 0.93.
- Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points at the three stations and at
  nine zoom fractions, and the new land alone costs 0.0 points. Engine half-field 36.21° and FOPEN 3.6 are
  unchanged.

### Re-checked and found correct

- Every type agrees with the signs of R, and the twelve standalone focal lengths recompute to the file's values.
  C1 shows FL = — (its own focal length would be about 4.6 km) and no badge; L1 and L2 show DOUBLET L1+L2; no
  TRIPLET appears. Brackets, the stop between L7 and L8, and the A markers on 7A, 24A and 25A are as drawn. Slider
  ends read 24.71 / 102.5 mm, f/3.6 / f/22 and ∞ / "Not modeled".
- Movement overlay: all four groups move toward the object from wide to tele, Gr1 by 40.08 mm.
- Glass: the five Unmatched glasses and the cement recur in Examples 1, 2 and 4 (the patent has four examples); the
  patent prints Nd and νd only (¶0037). In the resolver window only L4 has candidates: M-TAFD305, already traced,
  and Hikari Q-LASFH58S (1.85108/40.12), which moves the tele g focus to −0.057 mm, further from Fig. 7's +0.06 mm,
  so L4 stays Unmatched. The local HOYA, OHARA and Sumita catalogs hold nothing else in the window.
- Colour: every medium has a dispersion curve (seven catalog Sellmeier, six νd estimates including C1); none is
  constant. Fig. 7's C and g starting points re-read as the second review gives them.
- Assignee: the front page prints ミノルタ株式会社 (applicant 000006079), "Minolta Co., Ltd.", the spelling the other
  four Minolta Co., Ltd. files use; no variant in the catalog.
- Open lines left: the tele g residual (updated above) and the unmodelled close focus.
