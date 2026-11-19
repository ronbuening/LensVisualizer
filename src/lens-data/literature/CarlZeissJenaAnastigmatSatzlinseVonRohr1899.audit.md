# Audit Log - CARL ZEISS JENA ANASTIGMAT-SATZLINSE f/14.4 (von Rohr 1899, Fig. 137)

Source: Moritz von Rohr, *Theorie und Geschichte des photographischen Objektivs* (Berlin: Julius Springer, 1899),
p. 374, Fig. 137; after P. Rudolph, British patent 4692 of 1893.

## 2026-11-18 — Literature reconstruction audit

### Book pages and figure used

- p. 374 (e-rara chapter PDF page 130): the Fig. 137 table, caption and drawing, and the text on its correction.
- p. 373 (page 129): glass names and von Rohr's barred ν̄ for the three glasses; the "2aα" classification.
- pp. 372, 376–379 (pages 128, 132–135): the derivation scheme, priority account, Series VI and VIa, Figs. 139–141.
- Bibliography pp. 424–425 (e-rara Litteraturverzeichniss PDF pages 27–28): the Rudolph entries. The bibliography pages
  in the held source pages (pp. 415 and 430) are the von Höegh and Steinheil entries and do not cover Rudolph.
- The native scan of p. 374 is 164 ppi; Fig. 137 is about 33 scan pixels tall, so one scan pixel is about 0.15 mm at
  the drawing's vertex-spacing scale.

### Values read from the page

| Item | Printed | Staged file | Result |
| --- | --- | --- | --- |
| b1 (stop to r1) | 1.0 | 1.0 | match |
| r1 / d1 | 14.2 / 1.7 | −14.2 / 1.7 | match |
| r2 / d2 | 5.5 / 0.5 | −5.5 / 0.5 | match |
| r3 / d3 | 20.7 / 1.4 | +20.7 / 1.4 | match |
| r4 | 12.6 | −12.6 | match |
| nD L1 / L2 / L3 | 1.52246 / 1.56724¹ / 1.61120 | 1.52246 / 1.56724 / 1.6112 | match |
| Glasses (p. 373) | ordinary silicate crown, ν̄ 46.4; baryta light flint, ν̄ 41.5; heaviest baryta crown, ν̄ 44.8 | placeholder labels | labels set |
| Reduced focal length | fD = 100 mm | 100 | match |
| Aperture, field | 1:14.4, ω = 34° | f/14.4, field cap 34° | match |
| Stop position | front stop, drawn left of the lens | STO first, d 1.0 | match |
| Source credit | "Quelle: P. Rudolph. 1." | none | see below |

¹ Footnote: "Druckfehler im B. J. verbessert" (misprint in the British Journal corrected). The corrected value is kept.

No transcription error was found. Von Rohr marks no value as assumed or measured from a drawing; nothing needed
`source.errata`.

Source credit: bibliography entry Rudolph 1 is D.R.P. 56109 of 3 April 1890 (the Anastigmat doublet, cited pp. 360–362),
which predates the end-1891 design. Entry Rudolph 6 is E.P. 4692 of 22 April 1893 "auf Ser. VI", cited pp. 373/374 and
377, with the B.J. 1893 reprint (No. 1725, pp. 331–332) that the table's footnote refers to; the text on p. 373 cites
"(6.)" for these single lenses. The caption's "1" is read as a misprint for 6, and `source.literature.after` names the
British patent. This reading is an inference from the book's cross-references.

### Radius signs

Read from Fig. 137 (light from the left, stop at the left): r1 concave toward the stop (rim left of vertex), r2 deeply
concave toward the stop, r3 weakly convex toward the stop, r4 convex toward the image. Measured sags at 3.5 mm height
on the drawing: r2 about 1.5 mm (computed 1.26), r3 0.24 mm (0.30), r4 0.55 mm (0.50). Element types follow: L1
positive meniscus, L2 biconcave negative, L3 biconvex positive. The traced spherical aberration and astigmatism below
agree with von Rohr's text, which confirms the signs.

### First-order and aberration results

| Quantity | Printed | Model |
| --- | --- | --- |
| EFL | fD = 100 | 100.127 (+0.13 %, inside the 0.8–1.25 window) |
| f-number | 1:14.4 | 14.40; stop radius 3.477 |
| Back focus | not printed | 109.4304 computed; stored 109.430 (staged 109.43039198086672) |
| LSA | zonal about −1.1 at about 1:12.5 with margin corrected | −0.873 at f/14.4 rim; −1.301 at 0.85 pupil; zonal peak −1.30 near f/17.6; margin zero near f/13.1 |
| Astigmatism at 34° | about 4.8, field flattened | 5.2 along the axis; sagittal −2.26, tangential +2.94 about the paraxial plane |
| Element focal lengths | not printed | +16.10 / −7.61 / +13.02 (thick, in air) |
| Petzval sum | not printed | 0.00337 mm⁻¹ (radius about 297 mm) |

Rounding check: ±0.05 mm on r4 moves the EFL by ±2.1 mm (r4 = 12.603 gives 100.0); ±0.05 mm on r2 moves the zonal
peak to −0.98 / −1.65 and the margin zero to about f/14.1 / f/12.4. The residuals are within the one-decimal rounding of
the printed radii.

### Rims

Exact meridional trace at the printed ω = 34° and f/14.4 with the staged 4.0 mm rims: axial marginal heights 3.48 /
3.55 / 3.78 / 3.82 on r1–r4, chief-ray heights 0.66 / 1.31 / 1.61 / 2.07; no on-axis clip and no chief-ray block.
One-sided vignetting 1 % at r2 and 41–42 % at r3–r4, kept as ordinary vignetting. Paraxial rim limit 49.6° (r4).

Fig. 137 measurement (600 dpi render of the 164 ppi scan): front vertex to rear vertex 89 px for 3.6 mm, 24.7 px/mm.
The cemented block is drawn square with one height for all four faces; edge-line centres 95 and 98.5 px from the axis,
mean 96.75 px, 3.92 mm (±0.15 mm per scan pixel). The stop's drawn opening, 80 px or 3.25 mm, is consistent with the
3.48 mm stop radius at this resolution. The drawing's stop-to-lens spacing is not to the same scale (39.5 px for 1.0 mm).

| Surface | Staged sd | Figure | Final sd |
| --- | --- | --- | --- |
| r1 | 4.0 | 3.92 | 4.0 |
| r2 | 4.0 | 3.92 | 4.0 |
| r3 | 4.0 | 3.92 | 4.0 |
| r4 | 4.0 | 3.92 | 4.0 |

Decision: keep 4.0 on all faces (agrees with the figure within one scan pixel; no clip or block to fix); field cap
stays at the printed 34°; `source.sdSource` set to "figure-measured". Edge thicknesses at 4.0 mm: L1 0.55, L2 2.62,
L3 0.36.

### Structure and identity fixes

- Added `cemented: "T1"` on all three elements, `doublets` T1 (surfaces 1–4) and one `groups` entry (1–4).
- Element labels from von Rohr's glass names: "Ordinary silicate crown", "Baryta light flint", "Heaviest baryta
  crown"; added computed element focal lengths, roles and the D5 glass string. Indices stay nD only.
- Added `subtitle`; `locator` "p. 374, Fig. 137"; `url` to the e-rara page; `after` "P. Rudolph, British patent 4692
  (1893)".
- Last gap rounded to 109.43; focus description rewritten. Aperture unchanged: f/14.4, 16, 22, maximum 22.
- Key and name kept as staged. The key omits the design year; per the key pattern it would read
  `carl-zeiss-jena-anastigmat-satzlinse-1891-von-rohr-1899` (proposed, not applied).
- Maker: von Rohr credits Paul Rudolph and the Jena works (p. 374), which issued the type as Anastigmat-Satzlinse
  Series VI at 1:14.5 in 1893 (pp. 377, 379); `maker` stays Carl Zeiss Jena.

### Patent check (D6)

Von Rohr's bibliography names E.P. 4692 of 1893 (Rudolph 6) for Series VI. Google Patents has no record of
GB189304692A; DEPATISnet holds the number with no pages and empty bibliographic fields; Espacenet (checked in a
browser, 2026-11-19) has no record either.

Espacenet does hold the Swiss patent of the same invention with page images: CH 6329 A, Dr. Paul Rudolph, Jena,
"Dreifache Linse für photographische Objektive", filed 15 February 1893, published 15 August 1893 (4 pages; no other
family member). It prints two examples in units of the focal length. Beispiel 2, the type with a negative middle lens
(Fig. 2), is this table: r1 = −0.1423, r2 = −0.0547, r3 = +0.2073, r4 = −0.1260; d1 = 0.0167, d2 = 0.0052,
d3 = 0.0139, b = 0.0104; nD 1.52246, 1.56724, 1.61120, with nG₁ (Hγ) 1.53373, 1.58092, 1.62483. Every value von Rohr
prints is that table ×100, rounded to 0.1, and the patent's signs are the model's. L2 = 1.56724 is printed there
without the misprint von Rohr's footnote corrects in the British Journal of Photography. The patent gives 1:13
(opening 0.077) and a field angle of about 90°, where von Rohr computes 1:14.4 and ω = 34°.

Result: **identical table found** (Swiss counterpart, CH 6329 A, Beispiel 2). Under D6 the lens qualifies for
re-filing as a patent lens; not yet done.

### Open limitations

- Plate IV (aberration curves for Fig. 137) was not consulted.
- The British patent and the B.J. 1893 reprint were not seen; the Swiss counterpart CH 6329 A was compared.
- The model is monochromatic (nD only); von Rohr's ν̄ is not an Abbe number.
- Rims rest on a 33-pixel-tall drawing; the figure's stop spacing is not drawn to scale.
