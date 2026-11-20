# French Landscape f/12.1 (von Rohr 1899, Fig. 54) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

Von Rohr (1899), e-rara chapter PDF 4637856 ("B. Die französisch-italienische Optik", printed pp. 93–143, PDF page =
printed page − 91): the text on pp. 93–97, the table, caption and Fig. 54 on p. 94 (PDF page 3). The held page
extract is byte-identical to that e-rara file (9 502 002 bytes, confirmed against the e-rara server's file length and
name). Further sections of the same e-rara record: Tafel IV (PDF 4637814, page 5), which redraws the lens at natural
size as No. 54 with the curves 54a and 54b; the Bemerkungen zu den Figurentafeln (PDF 4637812, page 2: drawings at
natural size for f = 100; curve scales 4 mm per mm of incidence height, 10 mm per 0.5 mm of spherical aberration,
12 mm per 5° and 4 mm per mm of focus shift; flint hatched rising, old crown descending); the Berichtigung (PDF
4637810, page 2: one correction, for p. 17 only); the bibliography pp. 410–411 (PDF 4637806, pages 13–14). Values
were read on renders at 150–500 dpi; the drawing and curve measurements used 600 dpi renders of the 160 ppi (text)
and 141 ppi (plate) scans. Eder's own description was read only in the OCR text of the CNUM digitization of his
Handbuch (8 KE 362.1.2, pp. 56–57), which the evidence archive holds; its page image was not seen.

### Values read

| Item | Printed | File |
|---|---|---|
| Caption | Französische Landschaftslinse (nach É. Français); Fig. 54, s. Taf. IV | name, subtitle |
| Source | Quelle: J. M. Eder 1. 57 (bibliography p. 411: cited after Die photographischen Objektive, Halle 1891) | `after` "J. M. Eder" |
| Scale, aperture, field | reduced to fD = 100 mm; computed for 1:12.1 and ω = 27½° | `focalLengthMm.design` 100, f/12.1, 27.5° |
| b1 | 18.1, footnote 1: "In Rücksicht auf das Gesichtsfeld hier etwas verringert" | STO d 18.1 |
| r1, r2, r3 | 80.3, 77.2, 28.0 | −80.3, 77.2, −28 |
| d1, d2 | 1.3, 3.1, footnote 2: "Aus der Figur entnommen" | same |
| nD | L1 = 1.613, L2 = 1.516, footnote 3: "Nach der Angabe des specifischen Gewichts ungefähr geschätzt" | same |
| Text (p. 94) | longitudinal SA about −1.9 mm at 1:14; astigmatic difference over 10 mm at 25°; small field | compared below |
| Text (p. 94) | glasses chosen from the old silicate series by specific gravity | element labels |

All eight staged numbers match the print; no transcription error was found. Von Rohr prints no dispersion figure for
this lens. Eder (OCR): lens diameter 40 mm, stop 45 mm from the glass, focus 180 mm, densities 3.56 (flint) and
2.52 (crown), radii crown 54 and 149, flint 149 and 155 mm, figure at natural size for 13 × 18 cm plates.

### Signs and their basis

Von Rohr's text (p. 93): a biconcave flint cemented to a biconvex crown, the flint in front and turning its weaker
face to the front stop. Fig. 54 and No. 54 on Tafel IV show the same: r1 concave toward the stop, the junction bowed
toward the image, r3 strongly convex toward the image, both elements square-edged at one rim line. That gives r1 and
r3 negative and r2 positive. The plate hatching agrees (L1 rising, flint; L2 descending, old crown). Both drawings are
to the table's scale. Fig. 54 at 600 dpi (stop line 1286 px, r1 1718.5, junction 1750.5, r3 1823.5; 23.89 px/mm from
the 22.5 mm stop-to-r3 distance) reads d1 1.34, d2 3.06 and b1 18.10 mm; No. 54 (stop 413.5, r1 848.5, junction
880.5, r3 955; 24.07 px/mm, 1.9 % above natural size) reads 1.33, 3.10 and 18.07 mm.

### First-order results

- EFL 100.209 mm against the printed 100 (+0.21 %). Paraxial back focus 102.64843 mm, stored as the last gap
  rounded to 102.648 (was 102.64842671081). Vertex length 4.4 mm, total track 125.148 mm.
- The residual lies within the table's rounding: r3 = 27.95 or 28.05 gives 99.871 or 100.548; r1 ± 0.05 moves the
  EFL by 0.046, r2 ± 0.05 by 0.008, nD of L2 + 0.0005 gives 99.964. Eder's radii are von Rohr's times 1.9303, 1.9301
  and 1.9286; divided by 1.9303 they give 100.044. With von Rohr's indices and thicknesses scaled back, Eder's lens
  has f = 193.1 mm, the reduction factor 1.931, against Eder's stated focus of 180 mm.
- f-number 12.100 from the stop: the stop is the entrance pupil, radius 4.141 mm.
- Longitudinal spherical aberration (exact trace, from the paraxial focus): −2.545 (rim of the f/12.1 pupil), −1.838
  (0.85), −1.246 (0.7), −0.636 mm (0.5); −1.901 at f/14 (printed about −1.9), −1.455 at f/16, −0.769 at f/22,
  −0.364 at f/32. Curve 54a: the solid curve ends 1206 px left of zero at 472 px per mm, −2.56 mm, on its top line at
  an incidence height of about 4.1–4.2 mm; the model gives −2.545 at 4.141 and −2.569 at 4.16 mm.
- Third-order SA contributions of the marginal ray: r1 −4.6e−7, r2 −7.7e−7, r3 +3.08e−5; the front face and junction
  offset 4.0 % of the rear face.
- Coddington trace along the exact chief ray (sagittal / meridional, mm from the paraxial image plane): 5° −0.11 /
  +0.20, 10° −0.44 / +0.83, 15° −0.98 / +2.06, 20° −1.69 / +4.22, 25° −2.55 / +7.98, 27.5° −3.02 / +10.88. Curve 54b
  (0 to +11 mm over 1038 px, 94.4 px per mm; the axis-end label reads +11): 20° −1.65 / +3.87, top line −3.18 /
  +10.57. The 25° separation, 10.5 mm, matches the printed "over 10 mm".
- Element focal lengths (thick, in air): L1 −64.01, L2 +40.22 mm. Petzval sum 0.00691 mm⁻¹. Principal planes 0.77
  and 2.44 mm behind r3; exit pupil 27.86 mm in front of r3. Chief-ray image height against f·tan ω: −1.57 % at 20°,
  −2.44 % at 25°, −2.94 % at 27.5°.

### Rim decisions

Exact meridional trace at f/12.1 with the staged 10.0 mm rims: no on-axis clip (axial heights 4.14, 4.17, 4.24 mm),
but at the printed 27.5° the chief ray meets r1 at 9.150, r2 at 10.020 and r3 at 10.220 mm, so it is blocked from
about 26.9°. The engine's chief-ray solve and exact trace give the same heights and report the ray clipped with 10.0
mm rims and clear with 10.25 mm. The 2026-11-16 validation note (blocked at 27.5°, drawing about 10.7) is confirmed;
the package README's claim that chief rays from 0° to 30° pass is wrong.

Both drawings show the doublet larger than the chief-ray height. Measured on both sides of the axis at the rim-line
centres: Fig. 54 256 px above and 260.5 px below (10.72 / 10.90 mm), No. 54 257 and 259.5 px (10.68 / 10.78 mm).
The crown reaches a knife edge at 11.1 mm, so the drawn rim is a real glass edge (0.18 mm thick at 10.8 mm). Two
outside figures agree in size: Eder's 40 mm lens scales by 1.931 to a 10.36 mm radius, and the Chevalier lens
Daguerre describes (81 mm at f = 380 mm, p. 94) to 10.66 mm. The blocking rims were raised to just above the
chief-ray height, and r1 with them, because each element is drawn with one rim line across its faces.

| Surface | sd before | sd after | Axial f/12.1 | Chief 27.5° | Fig. 54 | Tafel IV |
|---|---:|---:|---:|---:|---:|---:|
| STO | engine 4.141 | engine 4.141 | 4.14 | 0 | 4.14 (beam lines) | 4.11 (beam lines) |
| 1 | 10 | 10.25 | 4.14 | 9.15 | 10.72–10.90 | 10.68–10.78 |
| 2 | 10 | 10.25 | 4.17 | 10.02 | 10.72–10.90 | 10.68–10.78 |
| 3 | 10 | 10.25 | 4.24 | 10.22 | 10.72–10.90 | 10.68–10.78 |

Edge thickness at the rim: L1 2.576 → 2.640 mm, L2 0.602 → 0.473 mm. Meridional transmission (share of the stop
diameter, exact trace) with 10.25 mm rims: 100 % to 17°, 96 % at 18°, 87 % at 20°, 77 % at 22°, 68 % at 24°, 63 % at
25°, 53 % at 27° and 50 % at 27.5° (with 10.0 mm: 97 % at 17°, 83 % at 20°, 60 % at 25°, 47 % at 27.5° with the
chief ray lost). The chief ray now passes to about 27.6°; at 28° r3 blocks it again. The clear-aperture probe at
27.5° shows no axial clip and no blocked chief ray (one-sided vignetting 72 %, 95 % and 99 % on r1–r3). The paraxial
rim limit rises from 25.1° to 25.6° (r3), and the engine's `tracingHalfField` with it. `source.sdSource` is
"heuristic": 10.25 mm is set by the chief ray, 0.5 mm inside the drawn rim, not measured from the drawings.

### Field limit

`projection.maxTraceFieldDeg` 15 → 27.5, the printed ω. The 15° was the package's display cap.

### Structure fixes

- Header comment rewritten as a source and model-additions record.
- `name` kept: it already follows the spec's literature pattern (and is the spec's own example). `subtitle` added.
- `source.literature.after` "E. Français" → "J. M. Eder": the caption's "nach É. Français" names the lens's maker,
  "Quelle:" names Eder. `url` added: the page is outside pp. 245–398, but its own chapter PDF is on e-rara and was
  confirmed. `locator` "p. 94, Fig. 54" kept. `source.sdSource` added.
- Element labels "Estimated flint" / "Estimated crown" → "Old silicate flint" / "Old silicate crown", von Rohr's terms
  (p. 94) and the plate hatching. `glass` set to the nD-only string; `role` and computed `focalLengthMm` added.
- Kept: `cemented: "D1"` on both elements with its `doublets` entry, the `groups` entry for the one cemented group,
  counts 2 elements in 1 group, catalog specs, aperture f/12.1 with f-stops 12.1–32 and `maxFNumber` 32. Focus
  description rewritten in plain words.

### Maker and design date

Von Rohr credits the lens to É. Français of Paris ("die von É. Français ausgeführte Einzellinse"); Eder writes
"Français in Paris". Français is not in the maker registry, so `maker` stays null for the coordinator's decision. The
type is the achromatized single lens that the Chevalier workshop (V. and Ch. Chevalier) supplied for Daguerre's first
cameras of 1839; von Rohr says Ch. Chevalier's share cannot be established and that the construction of that lens is
only imperfectly known. Français's lens itself is undated: Eder calls it "a good newer form", and it was in print by
1891. No design year is established, so no key change is proposed.

### Patent check (D6)

Von Rohr names no patent for this lens or for the Chevalier lens (pp. 93–97, caption, footnotes). The bibliography
lists Eder's book (entry 1) and Eder's 1883 article on Français's Rectilinear objective (entry 2, a different lens).
Result: **no patent named; nothing to compare**.

### Open limitations

- Both indices are von Rohr's estimates from density, both thicknesses come from a drawing, and the stop distance
  is his reduced value (Eder's 45 mm would be 23.3 mm at this scale).
- Eder's figures were read from OCR only.
- The prescription is Français's undated lens, not the 1839 Chevalier lens; the name says "French landscape" in
  von Rohr's sense of the type.
- Rims are set by the chief ray, about 0.5 mm inside the drawn rim.
- nD only; no chromatic behaviour is modelled.
