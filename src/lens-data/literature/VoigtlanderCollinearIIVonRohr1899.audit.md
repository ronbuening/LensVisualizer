# Voigtländer Collinear Type II f/6.9 (von Rohr 1899, Fig. 144) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

Von Rohr (1899), printed pp. 385–386 (e-rara PDF pages 141–142): table, caption and Fig. 144 on p. 385, glass names,
ν̄ values and text results on p. 386. Context read on p. 384 (Collinear, Typus I and its sales series) and p. 354
(David Kaempfer at Voigtländer & Sohn), and the bibliography entries Kaempfer 2 and 3 on p. 416 of the separate
Litteraturverzeichniss scan. Values were read on page renders at 500–600 dpi; the scan's native resolution is
165 ppi. Fig. 144 also carries the note "s. Taf. II" (a plate), which was not examined.

### Values read

| Item | Printed | File |
|---|---|---|
| Caption | D. Kaempfer: Collinear, Typus II; Quelle: D. Kaempfer 2 | name, `after` |
| Scale | reduced to fD = 100 mm | `focalLengthMm.design` 100 |
| Aperture, field | 1:6.9, ω = 30½° | f/6.9, field limit 30.5° |
| r1 = r8 | 32.6 | 32.6 / −32.6 |
| r2 = r7 | 11.0 | 11 / −11 |
| r3 = r6 | 14.5 | 14.5 / −14.5 |
| r4 = r5 | 41.1 | 41.1 / −41.1 |
| d1 = d6, d2 = d5, d3 = d4 | 1.3, 1.8, 3.0 | same |
| b1 = b2 | 3.3 | 3.3 before and after STO |
| nD L1 = L6, L2 = L5, L3 = L4 | 1.5682, 1.5262, 1.6112 | same |
| Glasses (p. 386) | Schwerstes Baryt-Crown H, ν̄ 44.8; Crown mit hoher Dispersion N, ν̄ 39.8; Baryt-Leichtflint M, ν̄ 38.2 | labels; ν̄ in the analysis only |
| Cell type (p. 385) | +H ∓N −M, ν̄H > ν̄N > ν̄M, case 1aβ | analysis |
| Text results (p. 386) | spherical correction for about 1:7; zones about −0.6 mm; field curvature unfavourable | compared below |

The staged numbers all match the print; no transcription error was found. Von Rohr marks no value as assumed or
measured. The glass assignment checks against the type line: H = 1.6112 sits next to the stop (L3, L4), M = 1.5682
outside (L1, L6).

### Signs and their basis

Fig. 144 draws each cell as three menisci, all convex toward the outside and concave toward the central stop, so
r1–r4 are positive and r5–r8 negative. With these signs L1 is a negative meniscus and L2 and L3 positive menisci,
which matches the type line +H ∓N −M and the patent text (a positive middle meniscus enclosed by a positive and a
negative meniscus of higher index). The figure is drawn to scale: measured at 600 dpi (23.46 px/mm from the 18.8 mm
vertex length), its spacings read 1.19, 1.90, 2.94, 6.76, 2.79, 1.96 and 1.26 mm against the printed 1.3, 1.8, 3.0,
6.6, 3.0, 1.8 and 1.3 mm, with the stop at the midpoint of the air space.

### First-order results

- EFL 99.885 mm against the printed 100 (−0.11 %, inside the 0.8–1.25 window). Paraxial back focus 91.88983 mm,
  stored as the last gap rounded to 91.890 (was 91.88982563193497). Total vertex length 18.8 mm. Petzval sum
  0.00535 mm⁻¹ (Petzval radius about 187 mm).
- f-number 6.900 from the stop: entrance-pupil radius 7.238 mm, stop radius 6.625 mm.
- Longitudinal spherical aberration at the f/6.9 pupil: +0.351 (rim), −0.371 (0.85), −0.519 (0.7), −0.376 mm (0.5).
  A fine scan puts the zero crossing near 1:7.3 (entrance height 6.85 mm) and the deepest zone, −0.52 mm, near 1:9.8.
  Von Rohr reports about 1:7 and about −0.6 mm. The table rounding covers the difference: r2 = r7 = 11.05 instead of
  11.0 gives +0.063 at the rim (zero near 1:7.0) and −0.609 at 0.7, with EFL 99.58.
- Element focal lengths (thick, in air): L1 = L6 −29.9, L2 = L5 +73.6, L3 = L4 +35.2 mm; each cemented cell
  +182.9 mm.

### Rim decisions

Exact meridional trace at the printed ω = 30.5° and f/6.9: the axial beam reaches 7.24 mm at r1 and 6.73 mm at r8
(rims 8.0), and the chief ray passes with heights 4.54 / 3.86 / 3.26 / 2.19 mm at r1–r4 (mirrored behind the stop).
No on-axis clip and no blocked chief ray, so the rims stay as staged. The clear-aperture probe flags only rear-cell
vignetting at 30.5° (3 %, 11 %, 15 % and 41 % one-sided at r5–r8) and finds no edge ray for one rim of the bundle.
An independent sphere trace with unlimited rims reaches every stop height at 30.5° (the stop-edge ray meets r1 at
10.9 mm), so that report reflects the probe's search, not a blocked path. A separate meridional sphere trace with the 8.0 mm rims transmits about 97 % of the stop diameter at
10°, 78 % at 20°, 68 % at 25° and 55 % at 30.5°. The paraxial rim limit is 45.0° (r1 and r8). The field limit stays at
the printed 30.5°.

| Surface | sd before | sd after | Basis |
|---|---|---|---|
| 1, 2, 3, 4 | 8.0 | 8.0 | package estimate, kept |
| STO | engine (6.625) | engine (6.625) | derived from 1:6.9 |
| 5, 6, 7, 8 | 8.0 | 8.0 | package estimate, kept |

`source.sdSource` set to `"heuristic"`. Fig. 144 measured at 600 dpi: the cell rim lines lie 215.5 / 216 px (front
cell) and 211.5 / 219 px (rear cell) above and below the axis, about 9.2 mm; L2 nearly runs out to an edge there
(with the printed radii it reaches a knife edge at 9.37 mm; edge thickness 0.12 mm at 9.2 mm). The stop bars leave an
opening of about 7.0 mm radius against the model's 6.625 mm. The two horizontal beam lines in front of the lens sit
171 px (7.3 mm) from the axis, the 1:6.9 entrance-pupil radius, which confirms the scale. Rims of 9.2 mm on every
surface would raise the 30.5° meridional transmission from about 55 % to 75 %; not applied, since nothing is clipped
at 8.0 mm.

### Structure fixes

- Header comment rewritten as a source and model-additions record.
- `name` corrected from "COLLINEAR SERIES II" to "COLLINEAR TYPE II": von Rohr prints "Collinear, Typus II", and on
  p. 384 the Collinear sold as Series II (1:6.3) is the Typus I design.
- `subtitle` added; `source.sdSource` and `source.literature.after` ("D. Kaempfer", the caption's source line)
  added. The locator "p. 385, Fig. 144" and e-rara page 141 were already correct.
- Element labels changed from "Source L1" to "Source L6" to von Rohr's glass names in English: baryta light flint,
  high-dispersion crown, heaviest baryta crown.
- `glass` set to the nD-only string, `role` and computed `focalLengthMm` added to each element.
- `cemented: "T1"` on L1–L3 and `"T2"` on L4–L6, with matching `doublets`; `groups` FRONT (1–4) and REAR (5–8).
- Last gap rounded to 0.001 mm. `maxFNumber` 16 added; aperture, f-stops (6.9, 8, 11, 16) and focus kept.

### Patent check (D6)

Von Rohr's source "D. Kaempfer 2" is, by his bibliography on p. 416, D.R.P. 90 482 of 22 May 1895, granted to
Voigtländer & Sohn in Braunschweig "auf das Collinear, Typus II"; entry 3 is the additional patent D.R.P. 91 883 of
the same date (a combination of halves of Collinear I and II). The Collinear, Typus I was protected by Steinheil's
patent 88 505 (p. 384), not by a Voigtländer patent. The Google Patents text layer of DE 90482 C prints one numerical
example in the description: a double objective of f = 150 mm and 28 mm opening, radii r1 = 49.4, r2 = 16.7,
r4 = 62.2 mm, glass thicknesses 2, 2.7 and 4.6 mm, the distance between the halves, nD 1.5682, 1.5262 and 1.6112,
and nF values read as 1.57037, 1.53347 and 1.61873. The text layer drops r3 and the distance between the halves.
Result: **table differs by scale and rounding.** The legible radii and thicknesses divided by about 1.515 give von
Rohr's values (49.4/32.6 = 1.515, 16.7/11.0 = 1.518, 62.2/41.1 = 1.513; 2/1.3, 2.7/1.8, 4.6/3.0), and the nD values
are identical; the scale factor implies a patent EFL of about 151.5 mm rather than the stated 150. The first nF
value gives nF − nD = 0.0022, implausible for a flint, and is probably an OCR error. The patent scan was not compared
digit by digit, and the file was not converted to a patent lens.

### Open limitations

- The model keeps the rounded book table; its spherical correction falls near 1:7.3 instead of von Rohr's 1:7 for
  that reason.
- Rims are an estimate, smaller than the 9.2 mm Fig. 144 draws; oblique beams are more strongly vignetted than in the
  drawn lens.
- nD only; no chromatic behaviour is modelled although the patent prints nF beside nD.
- `maker` stays Voigtländer: von Rohr credits Voigtländer & Sohn as the patent holder, but knew of no introduction of
  the lens.
- Proposed key with the design year: `voigtlander-collinear-ii-1895-von-rohr-1899` (not applied).
