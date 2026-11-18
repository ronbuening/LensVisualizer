# Von Höegh Four-Singlet Objective f/7.6 (von Rohr 1899, Fig. 147) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

Von Rohr (1899), printed p. 392 (e-rara PDF page 148 of the pp. 245–398 chapter file): table, Fig. 147, glass names
with ν̄ and the text results. Context from p. 319 (Fig. 120, Voigtländer's eight-surface scheme of 1879). The
definition of ν̄ as (nD − 1)/(nG′ − nD) on p. 339 is taken as settled for this batch. Bibliography p. 415 (e-rara
bibliography PDF page 18), entries von Höegh 9 and 10. Every value was read on page renders at 150 to 600 dpi; the
scan's native resolution is 161 ppi. The caption's pointer "s. Taf. II" (Plate II) was not consulted.

### Values read

| Item | Printed | File |
|---|---|---|
| Caption | E. von Höegh: Objektiv mit acht reflektirenden Flächen; Quelle: E. von Höegh 9 | name, `after` |
| Scale | reduced to fD = 100 mm | `focalLengthMm.design` 100 |
| Aperture, field | 1:7.6, ω = 30½° | f/7.6, field limit 30.5° |
| r1 = r8 | 24.4 | 24.4 / −24.4 |
| r2 = r7 | 53.8 | −53.8 / 53.8 |
| r3 = r6 | 36.6 | −36.6 / 36.6 |
| r4 = r5 | 29.6 | 29.6 / −29.6 |
| d1 = d4, d2 = d3 | 2.0, 0.9 | same |
| b1 = b4, b2 = b3 | 0.7, 2.5 | 0.7 after L1 and before L4; 2.5 on each side of STO |
| nD L1 = L4, L2 = L3 | 1.6112, 1.5356 | same |
| Glasses | Schwerstes Baryt-Crown, ν̄ 45.9; Borosilikat-Flint, ν̄ 39.1 | labels; ν̄ in the analysis only |
| Text results | zones at most −0.1 mm, correction at about 1:10; oblique pencils satisfactory to about 30°; astigmatism corrected at 28° | compared below |

The staged numbers all match the print; no transcription error was found. Von Rohr marks no value as assumed or
measured. The text dates the design to an English patent of 1898 and a German application made "with some
restrictions".

### Signs and their basis

Fig. 147 shows L1 and L4 biconvex and L2 and L3 biconcave, the halves mirrored about a central stop: r1 > 0, r2 < 0,
r3 < 0, r4 > 0 and the reverse behind the stop. The text ("two identical halves, each of one crown and one flint
lens") and the symmetric table agree. The figure is drawn to scale for the axial distances: at 600 dpi its vertex
positions give spacings of 1.87, 0.75, 0.96, 4.97, 1.00, 0.69 and 1.96 mm when scaled from the 12.2 mm total length
(24.55 px/mm), against the printed 2.0, 0.7, 0.9, 5.0, 0.9, 0.7 and 2.0 mm. The differences stay within one scan
pixel (0.15 mm at this scale). The stop is drawn midway between L2 and L3.

### First-order results

- EFL 100.818 mm against the printed 100 (+0.82 %, inside the 0.8–1.25 window). Paraxial back focus 95.1745 mm,
  stored as 95.175 (was 95.17451282047368). Total vertex length 12.2 mm. Petzval sum 0.00257 mm⁻¹ (radius 389 mm).
- f-number 7.600 from the stop: entrance-pupil radius 6.633 mm, stop radius 6.083 mm.
- Longitudinal spherical aberration at the f/7.6 pupil: +0.591 (rim), +0.190 (0.85), +0.011 (0.7), −0.049 mm (0.5).
  The marginal ray crosses zero near 1:11.1; the most negative value is −0.049 mm near 1:15.5. Von Rohr reports
  correction at about 1:10 and a zone of −0.1 mm.
- Astigmatism, by an independent Coddington trace along the chief ray: sagittal and tangential foci relative to the
  paraxial image plane are −0.99 / −0.51 mm at 20°, −0.19 / +0.87 mm at 28° and +0.76 / +0.72 mm at 30.5°; the
  astigmatic difference returns to zero at 30.45° and peaks at about +1.15 mm near 27°. Von Rohr reports strict
  correction at 28°. Distortion at 30.5° is +0.25 %.
- Rounding. Single half-digit changes (±0.05 mm) move the EFL between 99.84 mm (r1 = 24.35) and 101.81 mm
  (r1 = 24.45). The air space b1 = b4 is the most sensitive value: 0.75 gives EFL 99.94, correction at 1:9.2 and the
  anastigmatic point at 26.4°; 0.73 gives EFL 100.29, correction at 1:9.85, a zone of −0.08 mm and the anastigmatic
  point at 28.4°, matching all of von Rohr's statements. The residuals are therefore rounding, not a misprint, and
  the printed 0.7 is kept.
- Element focal lengths (thick, in air): L1 = L4 +27.7, L2 = L3 −30.4 mm; each half +184.9 mm.

### Rim decisions

Exact meridional trace at the printed ω = 30.5° and f/7.6: the axial beam reaches 6.63 / 6.56 / 6.42 / 6.22 mm at
r1–r4 and 6.09 / 6.19 / 6.29 / 6.34 mm at r5–r8 (rims 7.0), and the chief ray passes with heights 3.34 / 2.66 /
2.09 / 1.66 mm at r1–r4 (mirrored behind the stop). No on-axis clip and no blocked chief ray, so the rims stay as
staged. Oblique vignetting falls on the rear half (3 %, 23 %, 35 % and 36 % one-sided at r5–r8 at 30.5°). With the
7.0 mm rims a meridional trace transmits about 97 % of the stop diameter at 10°, 82 % at 20°, 67 % at 28°, 61 % at
30.5°, 47 % at 35° and 17 % at 40°. With unlimited rims about 7 % of the stop diameter still fails at 30.5°, by total
reflection at r6 at heights beyond 9.8 mm. The paraxial rim limit is 51.1°. The field limit stays at the printed
30.5°.

| Surface | sd before | sd after | Basis |
|---|---|---|---|
| 1, 2, 3, 4 | 7.0 | 7.0 | package estimate, kept |
| STO | engine (6.083) | engine (6.083) | derived from 1:7.6 |
| 5, 6, 7, 8 | 7.0 | 7.0 | package estimate, kept |

`source.sdSource` set to `"heuristic"`. Fig. 147 measured at 600 dpi: the rim lines lie 157.5 / 153 px from the axis
for the front half and 155 / 157 px for the rear half (above / below), a mean of 155.6 px or 6.3 mm, and the stop
marks end 149 / 146 px from the axis, about 6.0 mm, close to the model's 6.083 mm stop. All four lenses are drawn at
one height. That height is below the f/7.6 axial beam at r1–r3, so rims taken from the drawing would clip the printed
aperture; the drawing is not precise enough to set rims below the beam, and the 7.0 mm estimate is kept. With the
printed radii L1 has an edge of 0.52 mm at 7.0 mm and reaches a knife edge at about 8.1 mm; the L1–L2 air space is
0.48 mm thick at 7.0 mm.

### Structure fixes

- Header comment rewritten as a source and model-additions record.
- `subtitle` added; `source.sdSource` ("heuristic") and `source.literature.after` ("E. von Höegh") added. The locator
  "p. 392, Fig. 147" and e-rara page 148 were already correct.
- Element labels changed from "Source L1" to "Source L4" to von Rohr's glass names in English: heaviest baryta crown
  (L1, L4) and borosilicate flint (L2, L3).
- `glass` set to the nD-only string; `role` and computed `focalLengthMm` added to each element.
- `groups` FRONT HALF (1–4) and REAR HALF (5–8) added for von Rohr's two identical halves; no `doublets`, since all
  four lenses are air-spaced. Counts stay 4 elements / 4 groups.
- Last gap rounded to 0.001 mm; `maxFNumber` 16 added; focus description reworded. Aperture, f-stops and field limit
  kept.

### Patent check (D6)

Von Rohr names an English patent of 1898 and a German application but prints no number. His bibliography entry
von Höegh 9 (p. 415), listed under E. von Höegh and C. P. Goerz as "Objektiv mit 8 reflektirenden Flächen
(Zweilinsen-Objektiv)", gives the English patent as "E. P. . . . ." with the number blank and refers to "A new Goerz
lens", British Journal of Photography 45 (1898), No. 2000, pp. 570–571, and British Journal Almanac 1899,
pp. 813–815. Those notices were not consulted. One applicant query on Espacenet (Goerz, 1898–1899) returned HTTP 403,
and no further search was made, since no patent number is named. Result: **not determined** — the patent was not
located, so whether it prints a numerical table is unknown. The file was not converted to a patent lens.

### Open limitations

- The model keeps the rounded book table; its EFL is 0.82 % long, its spherical correction falls near 1:11.1 rather
  than 1:10 and its anastigmatic point at 30.45° rather than 28°, all within the rounding of the table.
- Rims are an estimate, about 0.7 mm larger than Fig. 147 draws them; the drawing itself is smaller than the printed
  f/7.6 beam.
- nD only; no chromatic behaviour is modelled.
- The English patent number, its text and the 1898 British Journal notice remain unchecked.
- `maker` stays null: the bibliography credits C. P. Goerz jointly with von Höegh, and Goerz is not a catalog maker.
