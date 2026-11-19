# Dallmeyer Rapid Landscape f/11 (von Rohr 1899, Fig. 77) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

Von Rohr (1899), printed p. 178: table, caption and Fig. 77. The held page extract is the same scan as e-rara PDF
4637858 ("C. Die englisch-amerikanische Optik", printed pp. 143–246), page 37: the embedded JPEG images are
byte-identical (1000 × 1533 px, 161 ppi). From the same PDF: pp. 177 (Ross doublet, page 36), 189 (Dallmeyer and
A. Ross, page 48), 191 and 192 (distortion dispute, the rapid landscape lens, pages 50 and 51). The held extract of
p. 94 (Fig. 54, French landscape lens) for von Rohr's comparison. Further sections of the same e-rara record: the
Litteraturverzeichniss pp. 408, 409, 414 and 419 (PDF 4637806, pages 11, 12, 17 and 22: J. H. Dallmeyer 1–5,
Th. Grubb 17, D. van Monckhoven 1); the Bemerkungen zu den Figurentafeln (PDF 4637812, page 2: plate drawings at
natural size for f = 100, curve scales, hatching legend); the Berichtigung (PDF 4637810, page 2), whose only erratum
concerns p. 17; and Tafel IV (PDF 4637814, page 5, 141 ppi), which redraws the lens as No. 77 with curves 77a and
77b. Every value was read on page renders at 130–1288 dpi. The page prints no ν̄.

### Values read

| Item | Printed | File |
|---|---|---|
| Caption | J. H. Dallmeyer: Rapid landscape lens; Quelle: D. van Monckhoven 1. 126 | name, `after` "D. van Monckhoven" |
| Scale | reduced to fD = 100 mm | `focalLengthMm.design` 100 |
| Aperture, field | computed for 1:11.0 and ω = 34° | f/11 (was 11.04); field limit 34° (was 20°) |
| b1 | 10.0 (italic) | STO gap 10 |
| r1 / r2 / r3 / r4 | 60.4 / 17.3 / 48.1 / 25.6 | −60.4 / −17.3 / −48.1 / −25.6 |
| d1 / d2 / d3 | 3.0 / 1.0 / 1.5 (italic) | same |
| nD L1 / L2 / L3 | 1.521 / 1.581 / 1.514 | same |
| Note | "Der Abstand und die Dicken sind aus der Zeichnung entnommen." | analysis |
| Text (p. 178) | brought out early 1865 as Dallmeyer's triple landscape lens, later known as the rapid landscape lens; Grubb's aplanatic type with the front crown split into two menisci enclosing the flint; smaller stop distance than the French landscape lens, so a larger field; about −3.1 mm spherical aberration at 1:11.04; at 34° astigmatic difference about 6.6 mm, negative field curvature about 5 mm | analysis |

The staged numbers all match the print; no transcription error was found. Von Rohr marks the stop distance and the
three thicknesses as taken from the drawing (set in italics); radii and indices are not marked. The OCR layer
misreads the source ("D. VAN .Monckhovf .n 1. m"), the aperture ("i : n . o") and two indices ("1 . 5«",
"i . 5' 4"); the image reads "D. van Monckhoven 1. 126", "1 : 11.0", "1.521" and "1.514". Van Monckhoven 1 is, by the
bibliography (p. 419), *Optique photographique*, cited after the German edition *Photographische Optik*, translated
by A. Martin (Vienna: Oscar Kramer, 1866). Van Monckhoven's page was not consulted.

### Signs and their basis

Fig. 77 and Tafel IV draw one cemented meniscus behind a front stop, every face concave toward the stop: on Fig. 77
at 644 dpi the front face meets the rim 26–28 px (1.0–1.1 mm) ahead of its vertex and the rear face 56–60 px
(2.2–2.4 mm) ahead of its vertex, against sags of 1.01 and 2.48 mm at 11 mm with the printed radii. Hence all four
radii are negative. Both drawings are to scale. Fig. 77 at 644 dpi (nominal natural size 25.35 px/mm): stop line to
front vertex 256 px (10.10 mm), vertex length 140 px (5.52 mm), stop to rear vertex 396 px (15.62 mm against 15.5,
25.55 px/mm); the axial thicknesses at 1288 dpi read 2.94, 1.08 and 1.38 mm. Tafel IV at 423 dpi (16.65 px/mm):
169.5 px (10.18 mm) to the front vertex, then 50, 17.5 and 26 px (3.00, 1.05, 1.56 mm), stop to rear vertex 263 px
(15.80 mm, 16.97 px/mm). In both drawings L1 and L3 carry the descending hatching that the plate legend assigns to
old low-index crown and L2 the rising hatching of flint, agreeing with the text's crown and flint.

### First-order results

- EFL 99.3866 mm against the printed 100 (−0.613 %, inside the 0.8–1.25 window). Paraxial back focus 102.8976 mm,
  stored as the last gap 102.898 (was 102.89762259426269). Vertex length 5.5 mm, total track 118.398 mm; rear
  principal plane 3.51 mm behind r4. Petzval sum 0.006730 mm⁻¹.
- f-number 11.000 from the stop, which is the entrance pupil (radius 4.5176 mm). Element focal lengths (thick, in
  air) +45.45, −47.06 and +104.12 mm.
- Cause of the EFL residual: rounding. A change of 0.05 mm in |r| gives 99.45 / 99.32 (r1 60.35 / 60.45), 99.48 /
  99.29 (r2), 99.37 / 99.40 (r3) and 98.99 / 99.79 (r4 25.55 / 25.65); 0.0005 in nD moves it by 0.1–0.2 %, 0.05 mm
  in a thickness by 0.05–0.08 %.
- Longitudinal spherical aberration at the f/11 pupil: −3.076 (rim), −2.221 (0.85), −1.506 (0.7), −0.768 mm (0.5);
  −3.091 mm at h = 4.529, the 1:11.04 height at f = 100, against the printed "about −3.1".
- Real chief ray at 34° lands 62.828 mm from the axis against f·tan ω = 67.037 mm (−6.28 %).
- Curve 77a, read at 423 dpi (abscissa 337 px per mm, nominal 333; ordinate 66.5 px per mm of height, nominal 66.6;
  computed heights at 1.50, 3.02 and 4.49 mm), against the model's exact trace, back focus / focal length:

| Height | 77a | Model |
|---|---|---|
| 1.5 | −0.34 / −0.28 | −0.34 / −0.26 |
| 3.0 | −1.41 / −1.12 | −1.36 / −1.05 |
| 4.5 | −3.09 / −2.35 | −3.05 / −2.36 |

- Coddington trace along the exact chief ray against curve 77b (sagittal solid, meridional dashed, from the
  paraxial focus), read at 423 dpi (abscissa 66.1 px per mm, nominal 66.6; ordinate 39.5 px per degree, nominal
  40.0; computed rows at 19.7°, 27.6° and 34.1°):

| ω | 77b sag / mer | Model sag / mer |
|---|---|---|
| 19.7° | −3.04 / −1.36 | −3.06 / −1.35 |
| 27.6° | −5.66 / −1.94 | −5.77 / −1.92 |
| 34.1° | −8.34 / −1.72 | −8.42 / −1.71 |

  At 34° the model gives an astigmatic difference of 6.68 mm and a mean focus 5.05 mm short of the focal plane
  (printed: about 6.6 and about 5 mm). The rounded table reproduces the printed results and both curves within about
  0.1 mm.

### Rim decisions

Exact meridional trace at the printed ω = 34° and f/11 with the staged 10 mm rims: no on-axis clip (axial heights
4.52, 4.58, 4.63 and 4.67 mm) and no blocked chief ray (6.51, 7.29, 8.14 and 8.49 mm). The engine's own chief-ray
solve agrees: converged and unclipped to 39.5°, clipped at r4 from 40°; the exact chief ray reaches 10 mm at r4 at
about 39.7°. The staged 20° field limit therefore had no basis, and the expected need for about 10.5 mm rims at 34°
is not borne out. The field limit is set to the printed 34° and no rim is changed.

| Surface | sd before | sd after | Axial f/11 | Chief 34° | Upper rim ray 34° | Fig. 77 | Tafel IV |
|---|---:|---:|---:|---:|---:|---:|---:|
| STO | engine 4.501 | engine 4.518 | 4.52 | 0 | 4.52 | 4.42–4.46 | 4.33–4.50 |
| 1 | 10 | 10 | 4.52 | 6.51 | 10.63 (15 %) | 10.86–10.96 | 10.70–11.08 |
| 2 | 10 | 10 | 4.58 | 7.29 | 10.73 (21 %) | 10.86–10.96 | 10.70–11.08 |
| 3 | 10 | 10 | 4.63 | 8.14 | 12.26 (55 %) | 10.86–10.96 | 10.70–11.08 |
| 4 | 10 | 10 | 4.67 | 8.49 | 12.25 (60 %) | 10.86–10.96 | 10.70–11.08 |

The engine stop moves only with the aperture change from 11.04 to 11. The percentages are the share of one half of
the 34° meridional pencil cut at that surface. The drawing columns are the rim line centres above and below the axis
(the lens is edged square, one height for all four faces), on the page scale and on the vertex-length scale; the
stop row is the incident axial beam, which both drawings carry to the stop opening. Outer edges of the rim lines
reach 11.2 mm. With the printed radii L1 reaches a knife edge at 11.10 mm, where both drawings end the lens; at 10 mm
the edges are 0.65, 3.13 and 0.52 mm thick.

Meridional transmission (share of the stop diameter, exact trace) with the 10 mm rims: 100 % to about 23°, 99 % at
24°, 96 % at 25°, 93 % at 26°, 88 % at 28°, 82 % at 30°, 76 % at 32°, 70 % at 34°. The paraxial rim limit is 35.6°
(r4); the engine's `tracingHalfField` stays at 35.62°. Rims at the drawn 10.9 mm would give 94 % at 30° and 82 % at
34°; not applied, since nothing clips at 10 mm. `source.sdSource` is "heuristic".

### Structure fixes

- Header comment rewritten as a source and model-additions record.
- `subtitle` added (book's term and date); `source.sdSource` "heuristic" added; `url` set to e-rara PDF 4637858,
  page 37; locator "p. 178, Fig. 77" and `after` "D. van Monckhoven" kept.
- Element labels "Crown1", "Flint", "Crown2" changed to the text's and plate legend's names: "Old low-index crown",
  "Flint", "Old low-index crown"; `glass` set to the nD-only string; `role` and computed `focalLengthMm` added.
- Aperture 11.04 → 11 (`catalog.fNumber.design`, `nominalFNumber`, first f-stop), the caption's 1:11.0; 11.04 is
  the text's aperture for the spherical-aberration figure. Stops 11–16–22–32–45, `maxFNumber` 45.
- Field limit 20° → 34°; last gap rounded to 0.001 mm; focus description rewritten.
- `cemented: "T1"` on all three elements with the `doublets` entry T1 (1–4) and one group, matching 3 elements /
  1 group.
- `key`, `name` and `maker: null` kept. The book's own term for Fig. 77 is "Rapid landscape lens" (caption, Tafel IV
  and margin note), and its text dates the lens to early 1865 as Dallmeyer's triple landscape lens, "later known as
  the rapid landscape lens"; key and name follow that pairing. Dallmeyer's 1865 paper, as listed on p. 408, is
  titled "On a new form of landscape lens, including a large angle of view".

### Patent check (D6)

Von Rohr names J. H. Dallmeyer 3, "Improvements in the construction of lenses, which improvements are especially
applicable to lenses for photographic purposes", English patent 2539 of 14 October 1864 "auf die dreifache
Landschaftslinse" (bibliography p. 408, cited for p. 192). DEPATISnet holds the record GB000186402539A with no page
images (0 pages); Google Patents has no record (GB186402539A); Espacenet refused the request (403). Result: **not
checked**, no facsimile reachable, so whether the patent prints a numerical table is unknown. Von Rohr's numbers
come from van Monckhoven, not from the patent.

### Open limitations

- The model keeps the rounded table: EFL 0.61 % short; the 77a mid-zone values differ by 0.05–0.07 mm.
- The stop distance and thicknesses are von Rohr's measurements from a drawing; the text figure reads d3 as 1.38 mm
  against the printed 1.5.
- The 10 mm rims are an estimate 0.7–1.1 mm inside the drawn lens edge, so the model vignettes more at 34° (70 %
  against about 82 % meridional transmission).
- nD only: the colour correction of the crown–flint–crown triplet is not modelled.
- Van Monckhoven's p. 126 and the 1864 patent were not seen.
- `maker` stays null. Von Rohr credits J. H. Dallmeyer, London, as designer and maker.
