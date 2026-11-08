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

- The 24A front face of L12 turns back toward the object beyond about h = 8.1 mm, inside its 10.6 mm semi-diameter.
  The patent's own (P4) table runs to y = 9.708 mm, past that point. No rim limit is reported, so the rim was not
  changed in this pass.
- Close focus: Gr2 rows for 0.5 m could be added as calculated (not published) states from the solve above.
- Cement layer form: drawn element kept for chromatic support; revisit if undrawn media gain a dispersion field.
