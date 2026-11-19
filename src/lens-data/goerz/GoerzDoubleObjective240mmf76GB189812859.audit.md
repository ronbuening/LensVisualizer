# Goerz Double Objective 240mm f/7.6 (GB 1898/12,859) — audit log

Patent: GB 1898/12,859, its sole numerical example (page 2), drawn as Figs. 1 and 3

## 2026-11-19 — Built from GB 1898/12,859

### Sources

- The original-document scan of GB189812859A from Espacenet: five bilevel pages (about 2100 × 3300 px), read on the
  page images, not on OCR. Page 1: header and description; page 2: description, the example's table, glass data and
  ratings; page 3: comparison with the three-lens system and the claim; page 4: end of the claim and agents; page 5:
  drawing sheet with Figs. 1–6, marked "a reproduction of the original on a reduced scale".
- Located by an Espacenet applicant search (Goerz, 1897–1900). Von Rohr's bibliography (p. 415, von Höegh 9) gives
  the English patent of 1898 with its number blank; this is the only 1898 Goerz–von Höegh lens patent in the results
  (the others are GB 1897/13,904, a five-lens cemented objective, and GB 1899/2,854, von Rohr's von Höegh 10).
  Espacenet also lists CH 17174 "Zweilinsensystem für photographische Zwecke" (Goerz, filed 27 June 1898), not
  examined.
- Reference: the audited literature file `literature/HoeghFourSingletVonRohr1899` (von Rohr 1899, p. 392, Fig. 147;
  glass names and ν̄ on p. 392), used for the comparison below and removed by this change.

### Values read

| Patent | Printed | File |
|---|---|---|
| Header | No 12,859, A.D. 1898; Date of Application, 8th June, 1898 — Accepted, 6th Aug., 1898; Complete Specification | `patentNumber` "GB 1898/12,859", `patentYear` 1898 |
| Applicants | Carl Paul Goerz and Emil von Hoegh, both of 45/46 Rheinstrasse, Friedenau, near Berlin, Opticians | `authors` |
| Title | Improved Double Objective for Photographic and the like purposes | analysis |
| R1, R2, R3, R4 | 71·973, 88·944, 130·924, 59·309 | r4/r5 ±71.973, r3/r6 ∓88.944, r2/r7 ∓130.924, r1/r8 ±59.309 |
| d1, d2, d3 | 2·246 (thickness of L1), 1·813 (air space of both lenses), 4·934 (thickness of L2) | same |
| Δ | 12·043, air space between both single systems | 6.0215 before and after STO |
| nD | L1 1·5356, L2 1·6112 ("refractive index for line D") | nd, `indexReference` "D" |
| γ = (nD − 1)/(nC − nF) | L1 50·8, L2 58·6 | vd |
| Ratings | focal length 240 mm, effective aperture 32 mm, effective angle of the image over 80° | `focalLengthMm.design` 240, f/7.6, field 40° |
| Test angle | principal ray at 32° | analysis |
| Index steps | cemented triplet Z 0·06, S 0·10; two-lens system Z 0·53, S 0·61 | analysis |

The text labels the first thickness "Thickness of the lense L." without the superscript; with d3 "Thickness of the
lense L²" it is L1's. The radii are printed unsigned. The claim (biconcave low-index lens, biconvex high-index lens,
the biconcave lens's facing surface the more curved), Fig. 1 (stop, L1 "1,53", L2 "1,61") and Fig. 3 (two halves,
biconcave lenses toward the central diaphragm) fix the signs. R2 = 88.944 < R3 = 130.924 confirms the claim's
curvature condition. The patent prints no stop position, back focus, f-number or example number.

### Scale and first-order check

- Native scale, no scaling. EFL 243.032 mm, 1.26 % above the stated 240 mm. Paraxial back focus 229.115 mm, stored as
  the last gap. Vertex length 30.029 mm. Petzval sum 1.0519 × 10⁻³ mm⁻¹ (radius 951 mm, 3.91 f). Each half
  +444.6 mm.
- f-number: the 32 mm effective aperture at the traced EFL is f/7.595; the file uses f/7.6. The engine gives an
  entrance-pupil radius of 15.989 mm and a stop radius of 14.624 mm.
- Element focal lengths (thick, in air): crown +67.45, flint −73.92 mm.
- Longitudinal spherical aberration at f/7.6: +0.881 (pupil rim), +0.117 (0.85), −0.179 (0.7), −0.211 mm (0.5); zero
  near 1:9.40; deepest zone −0.228 mm at 9.32 mm.
- Exact chief-ray trace (meridional, rays aimed at the stop centre): image heights 88.53 / 129.49 / 152.37 /
  206.51 mm at 20 / 28 / 32 / 40° (f·tan ω 88.46 / 129.22 / 151.86 / 203.93). At 38° and 40° two launch heights
  reach the stop centre (40°: −15.09 and −18.73 mm at the first vertex); the figures above use the branch continuous
  with the smaller angles. The clear-aperture probe's engine solve at 40° takes the other branch (chief heights
  16.04 / 14.94 / 9.02 / 7.02 mm, image 210.15 mm); both pass the rims.
- Coddington astigmatism along the chief ray, from the paraxial image plane (+ away from the lens): 20° T −1.88 /
  S −2.48; 28° −0.87 / −0.72; 30.5° −3.15 / +1.48; 32° −7.40 / +3.49 mm.

### Comparison with von Rohr's table

| Value | Patent ÷ 2.4303 (traced EFL) | Von Rohr, Fig. 147 |
|---|---|---|
| r1, r2, r3, r4 (R4, R3, R2, R1) | 24.404, 53.871, 36.598, 29.615 | 24.4, 53.8, 36.6, 29.6 |
| d1 (L2), d2 (L1) | 2.030, 0.924 | 2.0, 0.9 |
| b1 (d2), b2 (Δ/2) | 0.746, 2.478 | 0.7, 2.5 |
| nD | 1.6112, 1.5356 | same |

Result: **von Rohr's table is this example reduced to f = 100 and rounded to 0.1, listed from the front.** Every value
agrees at the traced-EFL factor except r2, where 53.871 would round to 53.9; any factor from 2.4313 to 2.4335 (a focal
length of 243.13–243.35 mm) reproduces all eight values, so he reduced by his own computed focal length. The stated
240 mm would give 24.7, 54.6, 37.1 and 30.0 and does not fit. Reduced to f = 100 this file gives a zone of −0.094 mm
with correction near 1:9.4 and the astigmatic images nearly coincident at 28°, against his "at most −0.1 mm", "about
1:10" and "strictly corrected at 28°". The literature file, traced from his rounded table, gave correction near 1:11.1
and coincidence at 30.45°. His ν̄ values (45.9, 39.1) use nG′ and are not the patent's νD.

### Rims

Fig. 3 measured on page 5 (crop origin x 600, y 1500 px). The axis falls 0.0262 px per px (about 1.5°). Outline
crossings 8–14 px from the axis put the vertices at x 297, 349, 369, 398.5 (front half) and 576.5, 609, 628.5, 693 px
(rear half). The rear half is drawn close to the table: flint 32.5 px, air 19.5 px, crown 64.5 px, 116.5 px for
8.993 mm (12.95 px/mm), giving 2.51, 1.51 and 4.98 mm for 2.246, 1.813 and 4.934. The front half is drawn smaller:
crown 52 px, air 20 px, flint 29.5 px (101.5 px, 0.87 of the rear half), and its flint's flat top and bottom edges
are 379 px apart (rows 150 and 529) against 461 px for the rear flint (rows 104 and 565), 0.82. The diaphragm line has
a gap from row 167 to 503 (336 px, a radius of 12.97 mm at the rear scale), and Δ is drawn 178 px (13.7 mm against
12.043).

| Surface | sd | Basis |
|---|---|---|
| 1–4 | 17.8 | Fig. 3 rear half, 230.5 px semi-height at 12.95 px/mm; the halves are equal in the table |
| STO | engine (14.624) | derived from the 32 mm aperture |
| 5–8 | 17.8 | Fig. 3 rear half, as measured |

`source.sdSource` is `"figure-measured"`. The front half's drawn height, 14.6 mm at the rear scale (16.8 mm at its
own axial scale), would clip the 32 mm aperture at r1 (15.99 mm), so it is not used. At 17.8 mm the crown keeps an
edge of 0.984 mm (knife edge 19.85 mm), the flint 6.281 mm and the air lens 1.229 mm. The literature file's 7.0 mm
heuristic corresponds to 17.0 mm here. The clear-aperture probe at f/7.6 shows the axial beam at 15.99 / 15.80 /
15.44 / 14.95 mm on r1–r4 and 14.63 / 14.88 / 15.13 / 15.25 mm on r5–r8. A meridional trace passes 86.7 % of the
stop-filling beam at 20°, 71.4 % at 28°, 65.1 % at 30.5°, 60.5 % at 32°, 30.2 % at 38° and 15.9 % at 40°. The paraxial
rim limit is 52.0°, at r1 and r8. The surface and aperture audits report no errors.

### Glass check

The patent defines its dispersion figure across C and F, so `vd` is stored with `indexReference` "D" per
LENS_DATA_SPEC.md § Index reference. Against the catalogs at the helium d line the nearest glasses are BACD4 (Hoya)
1.61272/58.58 for 1.6112/58.6 and K26R-25 1.53501/55.63 or PBL6Y (Ohara) 1.53172/48.96 for 1.5356/50.8; none lies
within |Δn| ≤ 6e-5, so the d-line reading fails and the glasses stay unmatched.

### Model decisions

- `maker` "Goerz": the firm that made von Höegh's designs and holds the patent with him; file in `goerz/`. Name `GOERZ DOUBLE OBJECTIVE 240mm f/7.6 (GB 1898/12,859 Design)`, the
  patent's title, stated focal length and the f-number of its stated aperture; key
  `goerz-double-objective-240mm-f76-gb189812859`.
- `patentNumber` "GB 1898/12,859": British numbers restarted each year until 1916, so the year is part of the number,
  written as for US application publications; the link builder turns it into GB189812859, which Espacenet resolves.
  No kind code is printed.
- `authors` ["Carl Paul Goerz", "Emil von Höegh"] in the patent's order; both are named as the inventing applicants.
  "Hoegh" is printed without the umlaut; the corpus spells him Emil von Höegh. `assignees` []: no organization is
  named.
- `source.example` `{ label: "Sole example", id: null }`.
- The front half is the patent's half reversed; the surface comments map each surface to the patent's R1–R4.
- Stop centred in Δ, as Fig. 3 draws it. f-stops 7.6, 11, 16, 22; infinity only. Field limited to ω = 40°, half the
  printed "over 80°".
- No `lensMounts` or `imageFormat`: the patent ties the 240 mm example to no product, camera or plate.

### Open limitations

- The rims rest on the rear half of a drawing whose front half is drawn about 0.82–0.87 of the rear.
- The chief-ray solution at 38–40° has two branches; the engine and this audit's trace take different ones at 40°.
- CH 17174 and any German publication of the design were not examined.
