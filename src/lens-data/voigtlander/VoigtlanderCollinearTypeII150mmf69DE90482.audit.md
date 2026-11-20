# Voigtländer Collinear Type II 150mm f/6.9 (DE 90482 C) — audit log

Patent: DE 90482 C, sole numerical example (page 1)

## 2026-11-18 — Built from DE 90482 C (D.R.P. 90 482)

### Sources

- `patents/DE90482C.pdf`: three bilevel pages at a native 300 ppi, assembled from the Espacenet original-document page
  images. Rendered at 300 dpi and at 600 dpi (table and stamp crops, drawing sheet) and read on the image: page 1
  header, description, example and claim 1; page 2 claim 2; page 3 the drawing sheet.
- Google Patents DE90482C: citation number `DE:90482:C`, the kind code used in `patentNumber`, as in the corpus's other
  early German patents (DE 143889 C, DE 88505 C). Its text layer reads L1's nF as 1.57037 and drops r3 and D; the
  page image prints 1,57637, 21,95 and 10.
- Reference: the audited literature file `literature/VoigtlanderCollinearIIVonRohr1899` (von Rohr 1899, p. 385,
  Fig. 144; p. 386), used for the comparison below.

### Values read

| Patent | Printed | File |
|---|---|---|
| Header | Voigtländer & Sohn in Braunschweig; Photographisches Objektiv; Klasse 57: Photographie | `assignees`, title in the analysis |
| Dates | patentirt vom 22. Mai 1895 ab; stamp "ausgegeben den 29. Januar 1897"; stamp "Gelöscht" | `patentYear` 1897 |
| Inventor | none named ("nach Angabe des Erfinders" only) | `authors` [] |
| Ratings | Brennweite 150 mm, Oeffnung 28 mm | `focalLengthMm.design` 150; 28 mm read as lens diameter |
| r1, r2, r3, r4 | 49,4 mm, 16,7, 21,95, 62,2 (no signs) | 49.4, 16.7, 21.95, 62.2; rear −62.2, −21.95, −16.7, −49.4 |
| d1, d2, d3 | 2 mm, 2,7, 4,6 | same, both halves |
| Abstand der beiden Hälften | D = 10 mm | 5 before and 5 after STO |
| L1 nD / nF | 1,5682 / 1,57637 | L1, L6 |
| L2 nD / nF | 1,5262 / 1,53347 | L2, L5 |
| L3 nD / nF | 1,6112 / 1,61873 | L3, L4 |

The drawing labels the front half L1, L2, L3 from the outside and the rear half L3, L2, L1 from the centre, with r1–r4
mirrored, and draws every surface concave toward the centre; the text calls all three lenses menisci, L1 negative and
L2, L3 positive. That fixes r1–r4 positive and the rear half negative. The patent prints no stop position, relative
aperture, field angle, back focus, nC, glass name, example number or figure number.

### Scale and first-order check

- Native scale, no scaling. EFL 151.362 mm, 0.91 % above the stated 150 mm. Paraxial back focus 139.1994 mm, stored as
  the last gap rounded to 139.199. Vertex length 28.6 mm. Petzval sum 3.519 × 10⁻³ mm⁻¹ (radius 284.1 mm, 1.88 f).
  The engine build gives the same EFL, a stop radius of 10.034 mm and an entrance-pupil radius of 10.968 mm at f/6.9.
- Element focal lengths (thick, in air): L1 = L6 −45.4, L2 = L5 +112.7, L3 = L4 +53.2 mm; each half +276.9 mm.
- Longitudinal spherical aberration at f/6.9: +0.313 (pupil rim), −0.693 (0.85), −0.865 (0.7), −0.606 mm (0.5). A fine
  scan puts the zero crossing at an entrance height of 10.63 mm (1:7.12) and the deepest zone, −0.869 mm, at 8.0 mm
  (1:9.5); reduced to f = 100, −0.574 mm.

### Comparison with von Rohr's table

| Value | Patent × 100/151.362 | Patent × 100/150 | Von Rohr, Fig. 144 |
|---|---|---|---|
| r1, r2, r3, r4 | 32.637, 11.033, 14.502, 41.094 | 32.933, 11.133, 14.633, 41.467 | 32.6, 11.0, 14.5, 41.1 |
| d1, d2, d3 | 1.321, 1.784, 3.039 | 1.333, 1.800, 3.067 | 1.3, 1.8, 3.0 |
| b1 = b2 (D/2) | 3.303 | 3.333 | 3.3 |
| nD | 1.5682, 1.5262, 1.6112 | same | same |

Result: **von Rohr's table is this example reduced to f = 100 and rounded.** A single reduction factor with f between
151.30 and 151.52 mm reproduces all eight printed values; the traced 151.362 mm lies inside, and the stated 150 mm
misses r1, r2, r3, r4 and d3. His text (p. 386) gives spherical correction for about 1:7 and zones of about −0.6 mm;
the patent's values give 1:7.12 and −0.57 mm at his scale, where his rounded table gave 1:7.3 and −0.52 mm. The
printed nF values fit his ν̄: each nF − nD is 0.549–0.552 of the nG′ − nD his ν̄ implies (0.01487, 0.01322, 0.01364),
which confirms L1's 1,57637 against the text layer's 1.57037. No disagreement between the patent and von Rohr was
found.

### Aperture

The patent prints no relative aperture. Its 28 mm "Oeffnung" is read as the lens diameter: L2 runs out to an edge at
14.2 mm with the printed radii; the drawing ends both halves square at a semi-width of 14.7 mm on its axial scale with
L2 running out at the rim; von Rohr's Fig. 144 draws the cells at the reduced diameter and the entering beam at 1:6.9;
and a 28 mm entrance pupil (1:5.41) leaves the marginal ray at +9.506 mm. `fNumber.design` and `nominalFNumber` take
von Rohr's computation aperture, 6.9; the specs line marks it "(VON ROHR)".

### Rims

The drawing sheet carries one section, the double objective, drawn close to scale along the axis. At 600 dpi the
vertices lie at x = 1159.5, 1282, 1439, 1728 (front) and 2342, 2624, 2783, 2908.5 px (rear): 1749 px for the 28.6 mm
vertex length (61.15 px/mm), the halves 568.5 and 566.5 px for 9.3 mm, D 614 px for 10 mm. Spacings on that scale:
2.00, 2.57, 4.73, 10.04, 4.61, 2.60, 2.05 mm against 2, 2.7, 4.6, 10, 4.6, 2.7, 2. Circle fits to the traced curves
within 700 px of the axis give drawn radii of 49–54 mm (r1, printed 49.4), 17.8–18.4 (r2, 16.7), 23.2–24.6 (r3,
21.95) and 60–72 (r4, 62.2): r2 and r3 are drawn 7–12 % flatter. Both halves end square, the top and bottom edges at
902 px (front) and 903 px (rear) from the axis, 14.75 mm on the axial scale. r2 and r3 meet at the top edge (L2 runs
out there) and L3 keeps about 94 px (1.5 mm) at the rim.

| Surface | sd | Basis |
|---|---|---|
| 1–4 | 14.0 | printed 28 mm opening; drawing's square rim where L2 runs out |
| STO | engine (10.034) | derived from 1:6.9 |
| 5–8 | 14.0 | as 1–4 |

`source.sdSource` is `"figure-measured"`. The drawn 14.75 mm is 5 % above the chosen value and cannot be reached: with
the printed radii L2 runs out at 14.2 mm (edge 0.15 mm at 14.0, 0.00 at 14.2), which is where the drawing puts the rim.
At 14.0 mm L1 keeps an edge of 7.57 mm and L3 1.15 mm. The surface audit reports no validation errors, and the
aperture audit finds the f/6.9 station within 3 % of its stated f-number.

The clear-aperture probe at f/6.9 and ω = 30.5° shows no clipped axial beam and no blocked chief ray: axial heights
10.97 / 10.59 / 10.50 / 10.25 mm at r1–r4 and 9.93 / 10.04 / 10.06 / 10.19 mm at r5–r8, chief heights 6.91 / 5.86 /
4.96 / 3.32 mm mirrored about the stop. It flags 21 % one-sided vignetting at r8 and finds no lower-rim ray, as in the
literature audit; a separate meridional sphere trace with unlimited rims reaches the whole stop at 30.5°, so that is
the probe's search, not a blocked path. With the 14.0 mm rims that trace passes 97 % of the stop diameter at 20°, 88 %
at 25° and 75 % at 30.5°. The paraxial rim limit is 49.0° at r1 and r8.

### Model decisions

- `maker` "Voigtländer"; name `VOIGTLÄNDER COLLINEAR TYPE II 150mm f/6.9 (DE 90482 Design)`, the patent's focal length
  and von Rohr's aperture; key `voigtlander-collinear-ii-150mm-f69-de90482`. The subtitle and analysis say the type was
  never introduced and is not the Series II Collinear (which was the Type I design of patent 88 505).
- `authors` []: the document names no inventor; von Rohr's attribution to David Kaempfer stays in the analysis.
  `assignees` ["Voigtländer & Sohn"]: the patentee as printed, with no AG; von Rohr names the firm "Voigtländer &
  Sohn, Aktiengesellschaft" only when it let the patent lapse in 1898, so the name is kept apart from the corpus's
  later "Voigtländer & Sohn AG".
- `source.example` `{ label: "Sole example", id: null }`: the publication prints exactly one numerical example with no
  identifier (LENS_DATA_SPEC.md § The transcribed example), as for DE 143889 C.
- `indexReference` "D"; each element keeps the printed nF. No nC is printed, so no νD and no catalog proxy; the
  engine traces at nD alone. The glass names in the labels are von Rohr's (p. 386).
- Stop centred in D (the patent draws none; von Rohr's b1 = b2 and the symmetry put it there). Field limited to
  ω = 30.5°, von Rohr's computed half-field; the patent prints none. f-stops 6.9, 8, 11, 16; infinity only.
- No `lensMounts` or `imageFormat`: von Rohr knew of no introduction, and no product or fitting is tied to the example.

### Open limitations

- The model is monochromatic although the patent prints nF; the colour correction it aims at is not reproduced.
- The aperture is von Rohr's 1:6.9, not a patent value; the reading of the 28 mm opening as a lens diameter is an
  inference from the geometry, the drawing and von Rohr's figure.
- The stop position and the 30.5° field are not printed by the patent.
- "Voigtländer & Sohn" is a new assignee name in the corpus and has no corporate-history entry yet.
