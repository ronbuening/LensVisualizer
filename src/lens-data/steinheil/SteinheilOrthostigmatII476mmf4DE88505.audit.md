# Steinheil Orthostigmat Type II 476mm f/4 (DE 88505 C) — audit log

Patent: DE 88505 C, the second of its two unnumbered numerical examples (page 2)

## 2026-11-18 — Built from DE 88505 C (D.R.P. 88 505)

### Sources

- DEPATISnet document DE000000088505A, taken page by page from the DEPATISnet viewer (five single-page PDFs, each a
  150 ppi grayscale page image), rendered at 300 dpi and read on the image: page 1 header, description and first
  example; page 2 second example and claim; page 3 the drawing sheet, rotated and reduced; pages 4–5 the same sheet
  unrotated at a larger scale, split across the two pages. The scan is the second edition ("2. Auflage, ausgegeben am
  12. September 1899"); the first edition of 1896 was not seen. The full-document download is CAPTCHA-gated and was
  not used.
- Google Patents DE88505C (the same document, no scan): the kind code used in `patentNumber`, as in the corpus's
  other early German patents and in the first example's file.
- Reference: the audited literature file `literature/SteinheilOrthostigmatIIFastVonRohr1899` (von Rohr 1899, p. 383,
  Fig. 142; pp. 382 and 384; Tafel I curves 142a/142b), used for the comparison below.

### Values read

| Patent | Printed | File |
|---|---|---|
| Header | Dr. Rudolf Steinheil in München; Objectiv für photographische Zwecke; Klasse 57 | `authors`, title in the analysis |
| Dates | patentirt vom 28. November 1893 ab; ausgegeben den 4. September 1896 | `patentYear` 1896 |
| Ratings | Brennweite 476 mm, Oeffnungsverhältniss 1 : 4 | `focalLengthMm.design` 476, `fNumber.design` 4 |
| X0 | 59,5 | entrance-pupil radius; `nominalFNumber` 4.02 = 478.384 / 119 |
| R0 = R14 | + 229 mm | r1 = 229, r8 = −229 |
| R2 = R12 | ± 562,95 | r2 = −562.95, r7 = 562.95 |
| R4 = R10 | ± 142,03 | r3 = −142.03, r6 = 142.03 |
| R6 = R8 | — 490,196 | r4 = 490.196, r5 = −490.196 |
| D1 = D13, D3 = D11, D5 = D9 | 20, 25, 4 | same |
| Abstand D7 | 50 | 25 before and 25 after STO |
| nD / nF (D1, D13) | 1,62356 / 1,63498 | L1, L6 |
| nD / nF (D3, D11) | 1,50786 / 1,51351 | L2, L5 |
| nD / nF (D5, D9) | 1,60304 / 1,61428 | L3, L4 |

The patent marks the outer faces +, the faces toward the centre − and the cemented faces ±. The claim (a positive
lens enclosed by a biconvex and a biconcave lens, both more strongly refracting) and the drawing fix the signs in the
file column. The patent prints no stop position, field angle, back focus, clear diameter, nC, glass name, example
number or figure number. X0 is printed for this example only; 476 / 8 = 59.5 exactly.

### Scale and first-order check

- Native scale, no scaling. EFL 478.384 mm, 0.50 % above the stated 476 mm. Paraxial back focus 412.923 mm, stored
  as the last gap (computed 412.9234). Vertex length 148 mm. Petzval sum 1.4329 × 10⁻³ mm⁻¹ (radius 697.9 mm,
  1.46 f). The engine build gives the same EFL and a stop radius of 52.519 mm for an entrance-pupil radius of
  59.500 mm at f/4.02, the printed X0.
- Element focal lengths (thick, in air): L1 = L6 +263.6, L2 = L5 +366.7, L3 = L4 −182.2 mm; each half +844.5 mm.
- Longitudinal spherical aberration at f/4.02: +1.815 (pupil rim), −0.045 (0.85), −0.663 (0.7), −0.620 mm (0.5),
  zero at an incidence height of 50.93 mm (1:4.70), confirmed by an independent real-ray trace.
- With the printed nF alone the paraxial F-line focal length is 477.094 mm and the back focus 1.242 mm shorter than
  at D. Not used by the model (no nC), recorded only.

### Comparison with von Rohr's table

| Value | Patent × 100/478.384 | Patent × 100/476 | Von Rohr, Fig. 142 |
|---|---|---|---|
| r1, r2, r3, r4 | 47.869, 117.677, 29.690, 102.469 | 48.109, 118.267, 29.838, 102.982 | 47.9, 117.6, 29.7, 102.4 |
| d1, d2, d3 | 4.181, 5.226, 0.836 | 4.202, 5.252, 0.840 | 4.2, 5.2, 0.8 |
| b1 = b2 | 5.226 | 5.252 | 5.2 |
| nD | 1.62356, 1.50786, 1.60304 | same | same |
| X0 | 12.438 | 12.500 | 1:4.02 |

Result: **von Rohr's table is this example reduced to f = 100 and rounded.** A single reduction factor with f
between 478.50 and 478.58 mm reproduces all eight printed values. The traced EFL rounds r2 to 117.7 and r4 to 102.5
(0.077 and 0.069 mm from his 117.6 and 102.4) and matches the rest; the stated 476 mm misses all four radii. His
1:4.02 is the patent's X0 at the traced focal length. Tafel I curve 142a, read in the literature audit at reduced
heights 12.43, 10.13 and 7.13 mm (59.46, 48.46, 34.11 mm here), gives +0.36, −0.14, −0.15 (back focus) and +0.15,
−0.25, −0.21 mm (focal length); this file gives +0.377, −0.057, −0.146 and +0.142, −0.191, −0.204 mm. The outer and
inner points agree within 0.02 mm; the middle point differs by 0.06–0.08 mm in both curves, as the literature audit
found with the same unrounded values, so the cause is not rounding and was not found. Curve 142b was not compared.

### Rims

The drawing sheet carries two unnumbered sections. The right one is this example: its deep junction r3 is drawn near
the printed 142.03 mm, where the left section, the first example, draws the 77.8 mm junction. On pages 4–5 it is close
to scale along the axis: vertex length 1189 px for 148 mm (8.03 px/mm), the halves 393 and 401 px for 49 mm, the
air space 395 px for 50 mm. The outer face and r3 come within about 20 % of the printed curves (R0 fits about
190–210 mm against 229), but r2 and the inner faces are drawn about twice as deep as printed (sags of about 8.6,
9.5 and 8.6 mm at the rim against 3.8, 4.3 and 4.3 mm), so the section is used for its rim height only. The scan is
turned about 0.8° (the axis line runs from x = 596 to 576 px down the page); measured square to that axis, both
halves end square at a semi-width of 524–528 px (front) and 520–522 px (rear): 65.4 and 64.9 mm on the vertex-length
scale. The rotated reproduction on page 3 gives 360 px for an 840 px vertex length, 63.4 mm.

| Surface | sd | Basis |
|---|---|---|
| 1–4 | 65 | patent drawing, right section, square rim |
| STO | engine (52.519) | derived from 1:4.02 |
| 5–8 | 65 | patent drawing, right section, square rim |

`source.sdSource` is `"figure-measured"`. On von Rohr's f = 100 scale the rim is 13.59 mm; his Fig. 142 and Tafel I
draw 13.3–13.6 mm, and the literature file kept 14 mm (67.0 mm at this scale), 3 % outside the patent drawing. At
65 mm L1 keeps an edge of 6.82 mm (knife edge at 79.7 mm), L2 13.02 mm and L3 24.08 mm. The clear-aperture probe at
f/4.02 and ω = 29° shows no clipped axial beam and no blocked chief ray: axial heights 59.50 / 58.57 / 56.64 /
55.05 mm at r1–r4 and 52.11 / 52.09 / 52.51 / 52.68 mm at r5–r8, chief heights 35.45 / 29.08 / 18.62 / 16.49 mm
mirrored about the stop. Rim vignetting at 29° cuts 38 %, 35 %, 26 % and 3 % of one half of the meridional beam at
r1–r4 and 19 %, 29 % and 34 % at r6–r8. The paraxial rim limit is 44.8° at r1 and r8. The surface audit reports no
validation errors, and the aperture audit finds the f/4.02 station within 3 % of its stated f-number.

### Model decisions

- `maker` "Steinheil"; name `STEINHEIL ORTHOSTIGMAT TYPE II 476mm f/4 (DE 88505 Design)`, the example's own
  ratings, in the first example's pattern; key `steinheil-orthostigmat-ii-476mm-f4-de88505`, distinct from the first
  example's 493 mm f/6.2.
- `authors` ["Rudolf Steinheil"]: the document names him as patentee and names no firm, so `assignees` is [].
- `source.example` is left out. The patent prints its two examples without numbers ("Bei einer Brennweite von
  493 mm ..." and "während bei einer Brennweite von 476 mm ...") and the drawing sheet numbers no figure, so neither a
  numbered label nor "Sole example" records what the publication prints (LENS_DATA_SPEC.md § The transcribed
  example). The subtitle and the analysis identify the example as the second, on page 2.
- `indexReference` "D"; each element keeps the printed nF. No nC is printed, so no νD and no catalog proxy; the
  engine traces at nD alone. The glass names in the labels are von Rohr's (p. 383).
- `catalog.fNumber.design` 4 and `focalLengthMm.design` 476 are the printed ratings; the stop opens to f/4.02, the
  printed X0 at the traced focal length, which is slower than 4 and so within the design-aperture rule.
- Stop centred in D7 (the patent gives none; von Rohr's b1 = b2 and the symmetry put it there). Field limited to
  ω = 29°, von Rohr's computed half-field; the patent prints none. f-stops 4.02, 4.5, 5.6, 8, 11, 16; infinity only.
- No `lensMounts` or `imageFormat`: von Rohr knows of commercial series only for the slower form (1:6.8, 1:8, 1:10),
  and no product or fitting is tied to this 1:4 example.

### Open limitations

- `source.example` is absent, and the corpus sweep requires one for every patent-backed lens outside its closed
  queue; the file needs a queue entry or a maintainer decision on a label for ordered, unnumbered examples.
- The model is monochromatic although the patent prints nF; the chromatic correction it claims is not reproduced.
- Rims rest on a drawing whose weak curves are not to scale; the measured semi-width spans 63.4–65.4 mm across the
  two scans of the sheet.
- The stop position and the 29° field are not printed by the patent.
- The middle-zone difference from curve 142a (0.06–0.08 mm) is unexplained.
- Only the 1899 second edition was read; the English patent abstract von Rohr used (B. J. 1896) was not seen.
