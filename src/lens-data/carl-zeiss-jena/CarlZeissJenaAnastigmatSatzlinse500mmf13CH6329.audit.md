# Carl Zeiss Jena Anastigmat-Satzlinse 500mm f/13 (CH 6329) — audit log

Patent: CH 6329, Beispiel 2 (page 2), drawn as Fig. 2

## 2026-11-19 — Built from CH 6329

### Sources

- The original-document scan of CH 6329 A from Espacenet: four bilevel pages, 2592 × 3508 px (300 ppi on A4), read
  on the page images, not on OCR. Page 1: header and description; page 2: description, Beispiel 1 and Beispiel 2;
  page 3: uses of the lens and the patent claim; page 4: drawing sheet with Figs. 1 and 2. The family holds no other
  member.
- Von Rohr's citation: British patent 4692 of 22 April 1893 (bibliography p. 424, Rudolph entry 6, "auf Ser. VI").
  Google Patents and Espacenet have no record of GB189304692A; DEPATISnet holds the number with no pages. The Swiss
  patent, by the same inventor for the same two lens forms, is the one examined.
- Reference: the audited literature file `literature/CarlZeissJenaAnastigmatSatzlinseVonRohr1899` (von Rohr 1899,
  p. 374, Fig. 137; glass names and ν̄ on p. 373; history pp. 373–379), used for the comparison below and removed by
  this change.

### Values read

| Patent | Printed | File |
|---|---|---|
| Header | Patent Nr. 6329; 15. Februar 1893, 7 Uhr, p.; Klasse 49; Dr. Paul Rudolph, in Jena (Deutschland); Dreifache Linse für photographische Objektive | `patentNumber` "CH 6329", `authors`, title in the analysis |
| Publication | 15 August 1893 (Espacenet bibliographic data; not printed on the scan) | `patentYear` 1893 |
| Agent | Vertreter: E. Blum & Cie., in Zürich | analysis only |
| Units | "ausgedrückt durch die Brennweite des ganzen Objektivs als Einheit" | scaled ×500 |
| Ratings (Beispiel 2) | Fig. 2, "für die Brennweite 500 mm"; größte wirksame Öffnung 0.077 (1 : 13); Gesichtsfeldwinkel zirka 90° | `focalLengthMm.design` 500, `fNumber.design` 13, field 45° |
| r1, r2, r3, r4 | − 0.1423, − 0.0547, + 0.2073, − 0.1260 | −71.15, −27.35, 103.65, −63.00 |
| d1, d2, d3 | 0.0167, 0.0052, 0.0139 | 8.35, 2.60, 6.95 |
| b (Blendenabstand) | 0.0104 | 5.20, stop to r1 |
| nD / nG₁ L1 | 1.52246 / 1.53373 | nd 1.52246; nG₁ in a comment |
| nD / nG₁ L2 | 1.56724 / 1.58092 | nd 1.56724; nG₁ in a comment |
| nD / nG₁ L3 | 1.61120 / 1.62483 | nd 1.6112; nG₁ in a comment |
| Index lines | Fraunhofer line D (n D); line H1 γ of the hydrogen spectrum (n G1) | `indexReference` "D"; G₁ = Hγ |

The column head for Beispiel 2's second index is printed nG¹ and its third row L³, typographic slips for nG₁ and L₃
as printed in Beispiel 1. The radii are signed, and the signs match Fig. 2: stop at the left, r1 and r2 concave toward
it, r3 convex toward it, r4 convex toward the image. Beispiel 1 (r = −0.1058, +0.1210, −0.0496, −0.1043;
d = 0.0060, 0.0145, 0.0091; b = 0.0091; nD 1.51510, 1.57180, 1.62350; 1:16) is the patent's other form and is not
transcribed here. The patent prints no back focus, aberration figures, nC, nF or glass names.

### Scale and first-order check

- Scale ×500, the focal length the patent states for the example. EFL 500.251 mm, 0.05 % above 500. Paraxial back
  focus 546.460 mm, stored as the last gap. Vertex length 17.90 mm. Petzval sum 6.799 × 10⁻⁴ mm⁻¹ (radius 1471 mm,
  2.94 f). The engine build gives the same EFL and a stop (entrance-pupil) radius of 19.240 mm at f/13.
- Element focal lengths (thick, in air): L1 +79.8, L2 −37.9, L3 +65.1 mm.
- Longitudinal spherical aberration at f/13 (engine trace): +3.001 (pupil rim), −4.428 (0.85), −5.674 (0.7),
  −3.971 mm (0.5); zero crossing near 1:13.55; deepest zone −5.70 mm at 13.85 mm height.
- Coddington astigmatism along the exact chief ray, from the paraxial image plane (+ away from the lens): 20°
  T −4.33 / S −7.92; 27° −1.54 / −11.63; 34° +11.72 / −12.25 (difference 23.97 mm, mean −0.27); 45° +79.15 / +4.35.
- Chief-ray image height 317.26 mm at 34° and 440.43 mm at 45° (f·tan ω 337.42 and 500.25).

### Comparison with von Rohr's table

| Value | Patent ×100 | Von Rohr, Fig. 137 |
|---|---|---|
| r1, r2, r3, r4 (magnitudes) | 14.23, 5.47, 20.73, 12.60 | 14.2, 5.5, 20.7, 12.6 |
| d1, d2, d3 | 1.67, 0.52, 1.39 | 1.7, 0.5, 1.4 |
| b1 | 1.04 | 1.0 |
| nD | 1.52246, 1.56724, 1.61120 | same |

Result: **von Rohr's table is Beispiel 2 ×100 rounded to 0.1, every value.** The L2 index he footnotes as a misprint
in the *British Journal of Photography* is printed correctly here. His ν̄ (46.4, 41.5, 44.8) is (nD − 1)/(nG − nD)
from the patent's pairs (46.36, 41.46, 44.84). Reduced to f = 100, this file gives a zone of −1.14 mm and an astigmatic
difference of 4.79 mm at 34°, against his "about −1.1 mm" and "about 4.8 mm"; the literature file, traced from his
rounded table, gave −1.30 and 5.2 mm. His aperture of corrected margin, "about 1:12.5", is not reproduced: the
patent table corrects the margin near 1:13.55. He computes for 1:14.4 and ω = 34°; the patent rates the lens 1:13 and
about 90°.

### Rims

Fig. 2 is measured on page 4 at 300 ppi. The diaphragm is drawn as a vertical line at x ≈ 1145–1151 px with a gap
around the axis for the "b" label; the lens outline puts r1's vertex at x 1190 and r4's at 1326, about 136 px for the
0.0358 f vertex length (about 3800 px per f). The stop line lies about 43 px in front of r1, 0.011 f against the
printed 0.0104. r1 is drawn at its printed curvature (sag 10 px at 108 px height, 31 px at 186 px, against 10.8 and
32.7 computed); r4 is drawn flatter (16 px at 180 px against 34.9). The cemented lens is drawn square-ended, its top
and bottom edges at y 1792.5 and 2158.5 px: 366 px tall, a semi-height of 183 px, 0.048 f or 24.1 mm at f = 500. L1 and
L3 run out at the top and bottom edges.

At the printed radii L1 reaches a knife edge at 22.68 mm and L3 at 23.03 mm, so the drawn height cannot be reached.

| Surface | sd | Basis |
|---|---|---|
| STO | engine (19.240) | derived from 1:13 |
| 1–4 | 22.5 | Fig. 2 drawn semi-height (24.1 mm), capped inside the L1 knife edge |

`source.sdSource` is `"figure-measured"`. At 22.5 mm L1 keeps an edge of 0.200 mm, L2 16.87 mm and L3 0.324 mm. The
literature file's 4.0 mm on every face (from von Rohr's 33-pixel figure) is 20.0 mm at this scale; the patent drawing
makes the rims 12.5 % larger. The clear-aperture probe at f/13 shows the axial beam at 19.24 / 19.51 / 21.06 /
21.18 mm on r1–r4, inside the rims. At ω = 45° the chief ray passes at 5.02 / 8.99 / 11.67 / 14.17 mm; an exact
meridional trace passes 91.8 % of the stop-filling beam at 20°, 82.3 % at 34° and 73.3 % at 45° (75.1 % and 66.1 %
with the old 20.0 mm rims). The paraxial rim limit is 52.6°, at r4. The surface and aperture audits report no
errors.

### Model decisions

- `maker` "Carl Zeiss Jena" (D3: the works von Rohr credits, which issued the type as Series VI); file in
  `carl-zeiss-jena/`. Name `CARL ZEISS JENA ANASTIGMAT-SATZLINSE 500mm f/13 (CH 6329 Design)`, the example's own
  ratings; key `carl-zeiss-jena-anastigmat-satzlinse-500mm-f13-ch6329`.
- `patentNumber` "CH 6329": the document prints no kind code, and the corpus's other Swiss patents are cited without
  one (CH 314381). `patentYear` 1893.
- `authors` ["Paul Rudolph"], `assignees` []: Rudolph is the patentee in his own name; E. Blum & Cie. is the agent.
- `source.example` `{ label: "Example 2", id: "2" }`, from "Beispiel 2".
- `indexReference` "D"; nG₁ (Hγ, about 434.0 nm) is not the schema's g line and no nC or nF is printed, so each
  element keeps nD only, with nG₁ in a comment, and no catalog proxy. The glass names in the labels are von Rohr's
  (p. 373).
- Stop 5.20 mm in front of r1, as printed. Field limited to ω = 45°, half the printed field angle. f-stops 13, 16, 22;
  infinity only.
- No `lensMounts` or `imageFormat`: the example's 500 mm and 1:13 are not a catalogued Series VI lens (rated 1:14.5).

### Open limitations

- The model is monochromatic although the patent prints nG₁.
- The rims are capped inside the knife edges; Fig. 2 draws the lens 1.6 mm taller, with r4 flatter than printed.
- The British patent 4692 of 1893 and its *British Journal of Photography* reprint were not seen.
