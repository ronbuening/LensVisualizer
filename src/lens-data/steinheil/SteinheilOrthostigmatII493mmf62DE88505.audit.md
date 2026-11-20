# Steinheil Orthostigmat Type II 493mm f/6.2 (DE 88505 C) — audit log

Patent: DE 88505 C, the first of its two unnumbered numerical examples (page 1)

## 2026-11-18 — Built from DE 88505 C (D.R.P. 88 505)

### Sources

- DEPATISnet document DE000000088505A, five bilevel pages at a native 300 ppi, rendered at 300 dpi and read on the
  image: page 1 header, description and first example; page 2 second example and claim; page 3 the drawing sheet,
  rotated and reduced; pages 4–5 the same sheet unrotated at a larger scale, split across the two pages. The scan is
  the second edition ("2. Auflage, ausgegeben am 12. September 1899"); the first edition of 1896 was not seen.
- Google Patents DE88505C: citation number `DE:88505:C`, the kind code used in `patentNumber`, as in the corpus's
  other early German patents (DE 143889 C).
- Reference: the audited literature file `literature/SteinheilOrthostigmatIIUniversalVonRohr1899` (von Rohr 1899,
  p. 383, Fig. 143; p. 384; Tafel II curves 143a/143b), used for the comparison below.

### Values read

| Patent | Printed | File |
|---|---|---|
| Header | Dr. Rudolf Steinheil in München; Objectiv für photographische Zwecke; Klasse 57 | `authors`, title in the analysis |
| Dates | patentirt vom 28. November 1893 ab; ausgegeben den 4. September 1896 | `patentYear` 1896 |
| Ratings | Brennweite 493 mm, Oeffnungsverhältniss 1 : 6,2 | `focalLengthMm.design` 493, `fNumber.design` 6.2 |
| R0 = R14 | + 173,0 mm | r1 = 173, r8 = −173 |
| R2 = R12 | ± 139,66 | r2 = −139.66, r7 = 139.66 |
| R4 = R10 | ± 77,805 | r3 = −77.805, r6 = 77.805 |
| R6 = R8 | — 202,47 | r4 = 202.47, r5 = −202.47 |
| D1 = D13, D3 = D11, D5 = D9 | 20 mm, 25, 4 | same |
| Abstand D7 | 50 | 25 before and 25 after STO |
| nD / nF (D1, D13) | 1,61003 / 1,61759 | L1, L6 |
| nD / nF (D3, D11) | 1,51874 / 1,52561 | L2, L5 |
| nD / nF (D5, D9) | 1,56370 / 1,57160 | L3, L4 |

The patent marks the outer faces +, the faces toward the centre − and the cemented faces ±. The claim (a positive
lens enclosed by a biconvex and a biconcave lens, both more strongly refracting) and the drawing fix the signs in the
file column. The patent prints no stop position, field angle, back focus, clear diameter, nC, glass name, example
number or figure number. The second example (476 mm, 1:4) prints X0 = 59,5 and other radii and glasses; it was not
transcribed.

### Scale and first-order check

- Native scale, no scaling. EFL 494.149 mm, 0.23 % above the stated 493 mm. Paraxial back focus 424.962 mm, stored
  as the last gap (computed 424.96248). Vertex length 148 mm. Petzval sum 8.673 × 10⁻⁴ mm⁻¹ (radius 1153 mm, 2.33 f).
  The engine build gives the same EFL, a stop radius of 33.823 mm and an entrance-pupil radius of 39.851 mm at f/6.2.
- Element focal lengths (thick, in air): L1 = L6 +129.8, L2 = L5 +297.6, L3 = L4 −99.2 mm; each half +838.8 mm.
- Longitudinal spherical aberration at f/6.2: −0.438 (pupil rim), −2.147 (0.85), −2.285 (0.7), −1.527 mm (0.5),
  confirmed by an independent real-ray trace.

### Comparison with von Rohr's table

| Value | Patent × 100/494.149 | Patent × 100/493 | Von Rohr, Fig. 143 |
|---|---|---|---|
| r1, r2, r3, r4 | 35.010, 28.263, 15.745, 40.974 | 35.091, 28.329, 15.782, 41.069 | 35.0, 28.3, 15.8, 41.0 |
| d1, d2, d3 | 4.047, 5.059, 0.809 | 4.057, 5.071, 0.811 | 4.1, 5.1, 0.8 |
| b1 = b2 | 5.059 | 5.071 | 5.06 |
| nD | 1.61003, 1.51874, 1.56370 | same | same |

Result: **von Rohr's table is this example reduced to f = 100 and rounded.** A single reduction factor between
0.202500 and 0.202599 (f between 493.59 and 493.83 mm) reproduces all eight printed values. The traced EFL misses
r3 (15.745) and d1 (4.047), each within 0.005 mm of the rounding boundary; the stated 493 mm misses r1, r4 and b.
Tafel II curve 143a, read in the literature audit at reduced heights 8.30, 6.76 and 4.81 mm as about +0.05, −0.42
and −0.40 mm (minimum about −0.48 mm near 5.9 mm), compares with +0.042, −0.445 and −0.396 mm from this file at the
same heights (×4.9415: 41.01, 33.40, 23.77 mm), minimum −0.472 mm at 5.91 mm. No disagreement between the patent
and von Rohr was found.

### Rims

The drawing sheet carries two unnumbered sections. The left one is this example: the outer silhouette fits drawn
radii of 181.5 mm (R0, printed 173.0) and 207.6 mm (R6, printed 202.47) on the front half and 182.6 and 146.6 mm on
the rear half (printed 202.47 and 173.0), where the second example prints R0 = 229 and R6 = 490.196. It is close to
scale along the axis: vertex length 1190 px for 148 mm (8.04 px/mm), the halves 389 and 401 px for 49 mm, the air
space 400 px for 50 mm. Both halves end square, at 412 px left and 424–428 px right of the drawn axis line, a
semi-width of 419 px: 52.1 mm on the vertex-length scale, 52.8 and 51.0 mm on the scales of the front and rear half.

| Surface | sd | Basis |
|---|---|---|
| 1–4 | 52 | patent drawing, left section, square rim |
| STO | engine (33.823) | derived from 1:6.2 |
| 5–8 | 52 | patent drawing, left section, square rim |

`source.sdSource` is `"figure-measured"`. On von Rohr's f = 100 scale the rim is 10.52 mm; his Fig. 143 draws
10.0–10.2 mm and the literature file kept 10 mm (49.4 mm at this scale), 5 % inside the patent drawing. At 52 mm
L1 keeps an edge of 1.96 mm, L2 15.1 mm and L3 30.7 mm. The clear-aperture probe at f/6.2 and ω = 28° shows no
clipped axial beam and no blocked chief ray: axial heights 39.85 / 38.98 / 36.56 / 35.05 mm at r1–r4 and
32.98 / 33.40 / 34.38 / 34.72 mm at r5–r8, chief heights 36.43 / 31.38 / 19.58 / 16.52 mm mirrored about the stop.
Rim vignetting at 28° cuts 44 %, 46 % and 22 % of one half of the meridional beam at r1, r2 and r3. The paraxial
rim limit is 36.9° at r1 and r8. The surface audit reports no validation errors, and the aperture audit finds the
f/6.2 station within 3 % of its stated f-number.

The right section of the sheet is drawn wider (semi-width about 533 px, 66 mm) with drawn radii of about 193.5 mm
(R0) and 221.5 mm (R6), so it does not reproduce the second example's printed R0 = 229 or R6 = 490.196 to scale.

### Model decisions

- `maker` "Steinheil"; name `STEINHEIL ORTHOSTIGMAT TYPE II 493mm f/6.2 (DE 88505 Design)`, the example's own
  ratings; key `steinheil-orthostigmat-ii-493mm-f62-de88505`, distinct from the second example's 476 mm f/4.
- `authors` ["Rudolf Steinheil"]: the document names him as patentee and names no firm, so `assignees` is [].
- `source.example` is left out. The patent prints its two examples without numbers ("Bei einer Brennweite von
  493 mm ..." and "während bei einer Brennweite von 476 mm ...") and the drawing sheet numbers no figure, so neither a
  numbered label nor "Sole example" records what the publication prints (LENS_DATA_SPEC.md § The transcribed
  example). The subtitle and the analysis identify the example as the first, on page 1.
- `indexReference` "D"; each element keeps the printed nF. No nC is printed, so no νD and no catalog proxy; the
  engine traces at nD alone. The glass names in the labels are von Rohr's (p. 384).
- Stop centred in D7 (the patent gives none; von Rohr's b1 = b2 and the symmetry put it there). Field limited to
  ω = 28°, von Rohr's computed half-field; the patent prints none. f-stops 6.2, 8, 11, 16; infinity only.
- No `lensMounts` or `imageFormat`: the commercial Type II series von Rohr lists were rated 1:6.8, 1:8 and 1:10, and
  no product or fitting is tied to this 1:6.2 example.

### Open limitations

- `source.example` is absent, and the corpus sweep requires one for every patent-backed lens outside its closed
  queue; the file needs a queue entry or a maintainer decision on a label for ordered, unnumbered examples.
- The model is monochromatic although the patent prints nF; the chromatic correction it claims is not reproduced.
- Rims rest on a drawing whose halves differ by 3 % in axial scale and whose rear radii are drawn 10–15 % steep;
  the measured semi-width spans 51.0–52.8 mm across the scale choices.
- The stop position and the 28° field are not printed by the patent.
- Only the 1899 second edition was read; the English patent abstract von Rohr used (B. J. 1896) was not seen.
