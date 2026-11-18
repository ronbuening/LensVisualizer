# Von Höegh Doppel-Anastigmat f/8 (von Rohr 1899, Fig. 138) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

Von Rohr (1899), printed pp. 375–377 (e-rara PDF pages 131–133): table and Fig. 138 on p. 376, glass names and ν̄
on p. 375, priority and production history on pp. 376–377, the Ross & Co. licence carried over to p. 378. The
glass-table definition of ν̄ as (nD − 1)/(nG′ − nD) was checked on p. 339, and the bibliography entry von Höegh 2 on
p. 415. Every value was read on page renders at up to 800 dpi; the scan's native resolution is 164 ppi.

### Values read

| Item | Printed | File |
|---|---|---|
| Caption | E. von Höegh: Doppel-Anastigmat; Quelle: E. von Höegh 2 | name, `after` |
| Scale | reduced to fD = 100 mm | `focalLengthMm.design` 100 |
| Aperture, field | 1:8.0, ω = 36° | f/8, field limit 36° |
| r1 = r8 | 19.1 | 19.1 / −19.1 |
| r2 = r7 | 22.7 | −22.7 / 22.7 |
| r3 = r6 | 8.3 | 8.3 / −8.3 |
| r4 = r5 | 20.5 | 20.5 / −20.5 |
| d1 = d6, d2 = d5, d3 = d4 | 3.1, 0.8, 1.9 | same |
| b1 = b2 | 2.3 | 2.3 before and after STO |
| nD L1 = L6, L2 = L5, L3 = L4 | 1.61310, 1.56804, 1.51497 | same |
| Glasses (p. 375) | Schweres Barium-Silikat-Crown H, ν̄ 44.7; Baryt-Leichtflint M, ν̄ 41.2; Weiches Silikat-Crown N, ν̄ 44.2 | labels; ν̄ in the analysis only |
| Text results (p. 376) | spherical correction complete at about 1:7.8; zone not quite −1.0 mm; astigmatism corrected at ω = 30° | compared below |

The staged numbers all match the print; no transcription error was found. The second digit of r2 is blurred in
the scan and reads 2, not the descending old-style 3. Von Rohr marks no value as assumed or measured.

### Signs and their basis

Signs follow Fig. 138 and the text of p. 375, which describes the adopted cell as a negative medium-index middle lens
between a weakly refracting collective meniscus and a high-index biconvex lens. L1 biconvex needs r1 > 0 and r2 < 0;
L2 negative then needs r3 > 0; L3 is a meniscus convex toward L2 and concave toward the stop (r4 > 0). Fig. 138
shows the concave inner faces and the convex outer faces, and is drawn to scale: its vertex spacings, scaled from the
16.2 mm total length, read 2.91, 0.80, 2.05, 4.61, 1.98, 0.80 and 3.06 mm against the printed 3.1, 0.8, 1.9, 4.6,
1.9, 0.8 and 3.1 mm. The rear cell mirrors the front.

### First-order results

- EFL 98.442 mm against the printed 100 (−1.56 %, inside the 0.8–1.25 window). Paraxial back focus 91.289 mm, stored
  as the last gap (was 91.28936108120946). Total vertex length 16.2 mm. Petzval sum 0.00282 mm⁻¹.
- f-number 8.000 from the stop: entrance-pupil radius 6.153 mm, stop radius 5.367 mm.
- Longitudinal spherical aberration at the f/8 pupil: −0.605 (rim), −1.074 (0.85), −1.008 (0.7), −0.634 mm (0.5);
  the marginal ray crosses zero near 1:7.45, against von Rohr's 1:7.8, and the zone reaches about −1.1 mm against
  his "not quite −1.0".
- Cause: rounding of the reduced table to 0.1 mm. The system is very sensitive to its radii (±0.1 mm on r4
  moves the EFL about 1.8 %, on r3 about 1.2 %, on r1 about 3 %). The patent example divided by 2.4 (from its text
  layer, see below) traces to EFL 100.10 mm, zero spherical aberration near 1:7.96 and a zone of −0.90 mm, matching
  von Rohr's statements. No single-digit misreading of the print reproduces both the focal length and the
  spherical-aberration statements better than the rounding explanation.
- Element focal lengths (thick, in air): L1 = L6 +17.4, L2 = L5 −10.6, L3 = L4 +25.7 mm; each cemented cell
  +171.8 mm.

### Rim decisions

Exact meridional trace at the printed ω = 36° and f/8: the axial beam reaches 6.15 mm at r1 and 5.77 mm at r8 (rims
6.2), and the chief ray passes with heights 4.93 / 3.81 / 2.90 / 2.06 mm at r1–r4 (mirrored behind the stop). No
on-axis clip and no blocked chief ray, so the rims stay as staged. The clear-aperture probe reports no full-bundle
edge rays at 36°: even with unlimited rims about 19 % of the meridional stop diameter finds no valid path through the
cell (a sphere miss or total reflection). With the 6.2 mm rims a meridional trace transmits about 66 % of the stop
diameter at 20°, 42 % at 30°, 25 % at 36°, and nothing beyond about 41°. The paraxial rim limit is 40.9°. The field limit stays at the
printed 36°.

| Surface | sd before | sd after | Basis |
|---|---|---|---|
| 1, 2, 3, 4 | 6.2 | 6.2 | package estimate, kept |
| STO | engine (5.367) | engine (5.367) | derived from 1:8 |
| 5, 6, 7, 8 | 6.2 | 6.2 | package estimate, kept |

`source.sdSource` set to `"heuristic"`. Fig. 138 measured at 600 dpi: the outer rim line lies 178.5 px above the
axis and 174.5 px below it at 23.2 px/mm, about 7.6 mm. L1 tapers nearly to an edge there (with the printed radii L1
reaches a knife edge at 7.86 mm), and the inner menisci end in an edge below the rim (L3 and L4 reach a knife edge at
6.29 mm with the printed radii; edge thickness at 6.2 mm is 0.078 mm). The patent's stated free lens opening of 36 mm
at f = 240 mm corresponds to 7.5 mm. Raising surfaces 1, 2, 7 and 8 to 7.6 mm would raise the 36° meridional
transmission from about 25 % to 54 %; not applied, since nothing is clipped at 6.2 mm.

### Structure fixes

- Header comment rewritten as a source and model-additions record.
- `subtitle` added; `source.sdSource` and `source.literature.after` ("E. von Höegh, D.R.P. 74 437 (1892)") added.
  The locator "p. 376, Fig. 138" and e-rara page 132 were already correct.
- Element labels changed from "Baryta crown1", "Baryta light flint2", "Silicate crown3" and their mirrors to von
  Rohr's glass names in English: heavy barium silicate crown, baryta light flint, soft silicate crown. The staged
  "Baryta crown" label for H was not von Rohr's name.
- `glass` set to the nD-only string, `role` and computed `focalLengthMm` added to each element.
- `cemented: "T1"` on L1–L3 and `"T2"` on L4–L6, with matching `doublets`; `groups` FRONT (1–4) and REAR (5–8).
- Last gap rounded to 0.001 mm. Aperture, f-stops (8, 11, 16, 22, `maxFNumber` 22) and focus kept.

### Patent check (D6)

Von Rohr's source "E. von Höegh 2" is, by his bibliography on p. 415, D.R.P. 74 437 of 20 December 1892, granted to
C. P. Goerz in Schoeneberg bei Berlin ("Sphärisch, chromatisch und astigmatisch corrigirtes Objectiv"). The patent
prints a numerical table. Its Google Patents text layer (DE 74437 C) gives radii 45.835, 54.324, 19.853 and
49.088 mm, thicknesses 7.334, 1.833 and 4.584 mm, an 11.00 mm air space, nD with nG′ for each glass, f = 240 mm,
a largest effective aperture of 30 mm, and axial ray foci at three heights in two colours. Result: **table differs
only by scale and rounding.** Von Rohr's table is this example divided by 2.4 and rounded to 0.1 mm, with one
exception: r2 = r7 reduces to 22.64 mm, where he prints 22.7. The paraxial back focus of the patent example
(223.26 mm) agrees with the patent's central-ray focus (223.275 mm), which supports the text-layer digits. Its
nG′ − nD values reproduce von Rohr's ν̄ (44.7, 41.2, 44.2). The patent scan itself was not compared digit by digit,
and the file was not converted to a patent lens.

### Open limitations

- The model keeps the rounded book table; its EFL is 1.56 % short and its spherical correction is shifted from
  1:7.8 to about 1:7.45 for that reason.
- r2 = 22.7 differs from the patent's reduced 22.64 mm; it is kept as printed (effect on EFL about +0.1 %), pending
  a reading of the patent scan.
- Rims are an estimate, smaller on the outer surfaces than Fig. 138 and the patent's free opening; oblique beams are
  more strongly vignetted than in the drawn lens.
- nD only; no chromatic behaviour is modelled although the patent prints nG′.
- `maker` stays null: von Rohr credits Optische Anstalt C. P. Goerz, which is not a catalog maker.
