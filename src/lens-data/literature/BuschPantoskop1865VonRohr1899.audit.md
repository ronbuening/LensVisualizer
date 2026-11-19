# Busch Pantoskop f/30.4 (von Rohr 1899, Fig. 108) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

Von Rohr (1899), printed pp. 279–281, 288–289 and 319 (e-rara chapter PDF pages 35–37, 44–45 and 75): table and
Fig. 108 on p. 281, Busch's biography and the globe-lens background on pp. 279–281, the Periskop–Pantoskop rivalry
on pp. 288–289. Further sections of the same e-rara record: the Litteraturverzeichniss pp. 406 (E. Busch), 411
(J. M. Eder 1) and 433 (O. Voget) in PDF 4637806, pages 9, 14 and 36; the Bemerkungen zu den Figurentafeln (PDF
4637812, page 2), which state that the plate drawings are at natural size for f = 100, give the hatching legend
and the curve scales, and say the plates give the extreme h and ω more exactly than the text; and Tafel III (PDF
4637814, page 4), which redraws the lens as No. 108 with curves 108a and 108b. Every value was read on page renders
at 400–1200 dpi; the scans' native resolutions are 160 ppi (text) and 162 ppi (plate). The page prints no ν̄, so the
glass-table definition on p. 339 is not needed.

### Values read

| Item | Printed | File |
|---|---|---|
| Caption | E. Busch: Pantoskop; Quelle: J. M. Eder 1. 144; s. Taf. III | name, `after` "J. M. Eder" |
| Scale | reduced to fD = 100 mm | `focalLengthMm.design` 100 |
| Aperture, field | 1:30.4, ω = 49° | f/30.4, field limit 49° |
| r1 = r6 | 7.45 | 7.45 / −7.45 |
| r2 = r5 | 10.39 | 10.39 / −10.39 |
| r3 = r4 | 7.63 | 7.63 / −7.63 |
| d1 = d4, d2 = d3 | 1.74, 0.19 | same |
| b1 = b2 | 6.2 | 6.2 before and after STO |
| nD L1 = L4 | 1.5331, footnote: "Unter Verbesserung des a. a. O. offenbar bestehenden Druckfehlers" | 1.5331 |
| nD L2 = L3 | 1.6079 | same |
| Text results (p. 281) | spherical aberration −6.1 mm at 1:30.4 and fD = 100; astigmatism undercorrected with negative mean field curvature; a small change of spacing would bring the field much closer to anastigmatic flattening | compared below |
| Design date (p. 281) | 1865, after Eder 1. 144; first introduction not documented | key year, `**Design dated:**` |

The staged numbers all match the print; no transcription error was found. The crown index 1.5331 is von Rohr's own
corrected value for a misprint in Eder, so it is the source value and the file carries no `source.errata`; Eder's
misprinted figure is not in the held pages. The OCR text layer reads the caption as "E. Kusch" and the aperture in
the text as 1:80.4; the page image reads "E. Busch" and 1:30.4. Eder 1 is, by the bibliography (p. 411),
J. M. Eder, Die photographischen Objektive, ihre Eigenschaften und Prüfung (Halle: W. Knapp, 1891), which the
bibliography cites for E. Busch at p. 281. Von Rohr marks no value as assumed or measured.

### Signs and their basis

Signs follow Fig. 108, Tafel III and the symmetric pairing of the table: each cell is a thick outer meniscus
cemented to a thin inner meniscus, both convex toward the object in front and concave toward the central stop, so
r1, r2, r3 > 0; the rear cell mirrors the front. With these signs the centres of curvature of r1, r2 and r3 lie at
7.45, 12.13 and 9.56 mm behind the front vertex, around the stop at 8.13 mm, as both drawings show. Fig. 108 at
600 dpi, scaled from the 16.26 mm vertex length (24.20 px/mm), places the stop line 8.33 mm behind the front vertex;
Tafel III at 600 dpi (23.68 px/mm measured, 23.62 nominal for natural size) places it at 8.21 mm (printed 8.13). The reproduction
of the printed spherical aberration below also confirms the signs.

The hatching was checked by a diagonal autocorrelation of the hatch lines in rectangles inside the thick outer
lenses near the axis, on both sides of the axis, in both drawings: all eight show lines descending to the right,
the plate legend's old low-index crown. The 0.19 mm inner lenses cannot be read near the axis, and near the rim the
outlines dominate the correlation, so the flint label rests on the index and the achromatic pairing.

### First-order results

- EFL 100.2448 mm against the printed 100 (+0.245 %, inside the 0.8–1.25 window). Paraxial back focus 91.0704 mm,
  stored as the last gap 91.07 (was 91.07041616826949). Vertex length 16.26 mm, total track 107.33 mm. Petzval sum
  0.0000894 mm⁻¹.
- Cause of the EFL residual: rounding of the reduced table. A change of 0.005 mm gives EFL 99.375 / 101.129 (r1),
  100.191 / 100.299 (r2), 101.053 / 99.451 (r3), 100.504 / 99.987 (d1), 100.544 / 99.947 (d2); 0.05 mm on b gives
  100.212 / 100.278. r1 = 7.4486 alone would give 100.00.
- f-number 30.400 from the stop: entrance-pupil radius 1.649 mm, engine stop radius 1.441 mm.
- Longitudinal spherical aberration at the f/30.4 pupil (exact trace, from the paraxial focus): −6.149 (rim), −4.469
  (0.85), −3.046 (0.7), −1.562 mm (0.5). At the 1.645 mm height of 1:30.4 at exactly f = 100: −6.120 mm. Von Rohr:
  −6.1 mm. Curve 108a (1 mm height = 4 mm, 0.5 mm aberration = 10 mm on the plate) ends at −6.11 mm at an incidence
  height of about 1.67 mm.
- Coddington trace along the exact chief ray, foci from the paraxial plane (meridional / sagittal): 20° −2.07 /
  −0.72, 30° −4.65 / −1.61, 40° −8.27 / −2.82, 44.4° −10.22 / −3.45, 49° −12.49 / −4.17 mm. Curve 108b (5° = 12 mm,
  1 mm = 4 mm on the plate) has computed points at about 13.1, 20.4, 26.4, 33.5, 39.7 and 44.4°, reading −0.51 / −0.16,
  −1.71 / −0.42, −2.79 / −0.81, −4.24 / −1.03, −6.18 / −1.52 and −7.83 / −1.97 mm; the model gives −0.88 / −0.31,
  −2.15 / −0.75, −3.59 / −1.25, −5.80 / −2.00, −8.16 / −2.78 and −10.22 / −3.45 at the same angles. Same form (both
  images in front of the plane, meridional the larger), smaller on the plate. 0.05 mm on b moves the model at
  44.4° to −6.85 / −2.19 (b = 6.15) or −13.39 / −4.70 (b = 6.25) with the EFL within 0.03 mm, so the difference lies
  inside the rounding of the printed b. The same tracer reproduces the Coddington values recorded for another
  audited von Rohr file exactly, so the method is not the cause.
- Element focal lengths (thick, in air): L1 = L4 +41.0, L2 = L3 −48.5 mm; each cemented cell +175.3 mm. Real chief
  ray at 49° lands 115.277 mm from the axis against f·tan ω = 115.318 mm (−0.04 %).

### Rim decisions

Exact meridional trace at the printed ω = 49° and f/30.4, with the staged 6.0 mm rims: no on-axis clip (f/30.4
axial heights 1.65, 1.52, 1.50 mm in front and 1.38, 1.39, 1.49 mm behind the stop), but the chief ray crosses r1
and r6 at 6.376 mm and r2 and r5 at 6.159 mm, so it is blocked from 44.5°. The engine's own chief-ray solve and
exact trace agree (6.390 / 6.182 / 5.525 in front, its solve converging 0.044 mm from the stop centre) and report
the 49° chief ray clipped with 6.0 mm rims and clear with 6.4 mm; 6.38 / 6.16 mm would still clip in the engine.
The package's claim that 49° was not clipped is therefore wrong. Both drawings show the cells larger than the
chief-ray height, and the printed radii allow up to the 6.70 mm knife edge of L1 and L4, so the blocking rims were
raised to just above the chief-ray height. Each cell is drawn with one flat rim line across its three surfaces, so
all six surfaces take the same 6.4 mm. After the change the trace at 49° shows no axial clip and no blocked chief
ray. L1 and L4 keep a 0.309 mm edge (0.614 mm at 6.0); L2 and L3 are 1.461 mm thick at the rim.

| Surface | sd before | sd after | Axial f/30.4 | Chief 49° | Chief 44.5° | Fig. 108 | Tafel III |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 6 | 6.4 | 1.65 | 6.38 | 6.00 | 6.55 | 6.71 |
| 2 | 6 | 6.4 | 1.52 | 6.16 | 5.62 | 6.55 | 6.71 |
| 3 | 6 | 6.4 | 1.50 | 5.51 | 5.09 | 6.55 | 6.71 |
| STO | engine 1.441 | engine 1.441 | 1.44 | 0 | 0 | 1.59 | 1.50 |
| 4 | 6 | 6.4 | 1.38 | 5.51 | 5.09 | 6.53 | 6.68 |
| 5 | 6 | 6.4 | 1.39 | 6.16 | 5.62 | 6.53 | 6.68 |
| 6 | 6 | 6.4 | 1.49 | 6.38 | 6.00 | 6.53 | 6.68 |

The drawing columns are the cell rim lines (and the inner ends of the stop marks), measured on both sides of the
axis, averaged, and taken at the line centres. Fig. 108 draws the cells about 2.4 % larger than natural size and
Tafel III at natural size; the plate's rims coincide with the crowns' 6.70 mm knife edge.

Meridional transmission (share of the stop diameter, exact trace) with the 6.4 mm rims: 100 % up to 42°, 92 % at
43°, 79 % at 44°, 66 % at 45°, 52 % at 46°, 37 % at 47°, 21 % at 48° and 5 % at 49° (with 6.0 mm: 100 % to 36°,
97 % at 37°, 86 % at 38°, 74 % at 39°, 62 % at 40°, 49 % at 41°, 35 % at 42°, 21 % at 43°, 7 % at 44° and none
from 44.5°). The paraxial rim limit rises from 33.2° to 34.9° (r1, r6), and the engine's `tracingHalfField` with
it; the exact 49° chief ray passes. Real vignetting is kept and the field limit stays at the printed 49°.
`source.sdSource` is "heuristic": the 6.4 mm value is set by the chief ray, not measured from the drawings.

The clear-aperture probe finds no ray for this file without a scan range (the stop has no stored radius, which
leaves its default range undefined), and with `--scan 40` its surface intersection, started on the vertex plane,
does not converge for chief rays above 31° on the 7.45 mm front radius. At 30° it reports no flags. The 44.5–49°
checks above therefore come from the engine's chief-ray solve and exact trace and from an independent
analytic-sphere tracer, which agree within 0.025 mm at every surface; the difference is the engine solve's 0.044 mm
residual at the stop.

### Structure fixes

- Header comment rewritten as a source and model-additions record.
- `subtitle` added; `source.sdSource` "heuristic" added. The locator "p. 281, Fig. 108", e-rara page 37 and
  `after` "J. M. Eder" were already correct.
- Element labels "Front crown", "Front flint", "Rear flint" and "Rear crown" changed to "Old low-index crown" (L1,
  L4; the plate legend's hatching) and "Flint" (L2, L3).
- `glass` set to the nD-only string on all four elements (it was missing); `role` and computed `focalLengthMm` added.
- `cemented: "D1"` on L1–L2 and `"D2"` on L3–L4 with matching `doublets` (surfaces 1–3 and 4–6) and `groups` FRONT
  (1–3) and REAR (4–6) were already correct.
- Last gap rounded to 0.001 mm; rims 6.0 → 6.4 mm. Aperture (f/30.4, stops 30.4–40–56–64, `maxFNumber` 64) kept;
  focus description reworded.
- `projection.fullFieldDeg` 98 removed. The spec defines a rectilinear `fullFieldDeg` as the published full field;
  von Rohr prints a half-field for his computation, which `maxTraceFieldDeg` 49 carries. The engine reads
  `maxTraceFieldDeg` first, so the value changed nothing, and the other literature files declare only
  `maxTraceFieldDeg`.
- `key` and `name` kept. The key's 1865 is the design year von Rohr gives after Eder.

### Patent check (D6)

Von Rohr names no patent for the Pantoskop. Pages 280–281 and 288–289 cite only Eder's book (data and date) and
O. Voget's lecture in the Photographische Correspondenz 1866 (3, No. 19, pp. 24–26). The bibliography's Busch
entries (p. 406: the Universal-Triplet article in Ph. C. 1867, the obituary in Ph. M. 1888/89, and the index entry
"Konstruktion des Pantoskops. 281") and the Voget entry (p. 433) carry no patent. Result: **no patent named**, so no
table to compare and no patent office searched. The file was not converted to a patent lens.

### Open limitations

- The model keeps the rounded book table; its EFL is 0.245 % long.
- Curve 108b shows smaller astigmatism than the model (about −7.8 / −2.0 mm against −10.2 / −3.5 mm at 44.4°),
  inside the rounding of b but not reproduced by the printed values.
- The plate's computed astigmatism points end at about 44.4° on its ω scale, below the caption's 49°; the model
  keeps the printed 49° as its field limit. At 49° only 5 % of the meridional stop diameter passes the 6.4 mm rims.
- Rims are an estimate set by the 49° chief ray and smaller than both drawings.
- nD only; von Rohr prints no dispersion, so no chromatic behaviour is modelled. The flint label rests on the index.
- `maker` stays null: von Rohr credits Emil Busch of Rathenow, whose firm is not a catalog maker.

## 2026-11-18 — Maker set

- `maker` is now "Busch": the catalog added Busch as a maker after this audit, and von Rohr credits Emil Busch of Rathenow. The name keeps its maker prefix.
