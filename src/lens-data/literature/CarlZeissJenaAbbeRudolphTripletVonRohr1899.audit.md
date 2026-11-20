# Audit log — Carl Zeiss Jena Abbe–Rudolph Triplet f/7.2 (von Rohr 1899, Fig. 125)

## 2026-11-18 — Literature reconstruction audit

### Book pages and figure

Moritz von Rohr, *Theorie und Geschichte des photographischen Objektivs* (Berlin: Julius Springer, 1899). The table and
Fig. 125 are on printed p. 357 (e-rara chapter PDF page 113); pp. 356 and 358 supply the history, the reception and the
astigmatism statement; p. 339 defines von Rohr's ν̄. All values were read from the page image, not from the OCR layer.
The caption reads "E. Abbe und P. Rudolph: Symmetrisches Triplet (achromatisch)", "Quelle: Angaben des Verfassers",
"Reducirt auf fD = 100 mm", "Durchgerechnet für 1 : 7.2 und ω = 26½°". Fig. 125 also refers to Plate II, which was not
available and was not consulted.

### Values read

| Quantity | Printed | File | Match |
| --- | --- | --- | --- |
| r1 = r8 | 26.2 | +26.2 / −26.2 | yes |
| r2 = r7 | 39.2 | +39.2 / −39.2 | yes |
| r3 = r6 | 235 | +235 / −235 | yes |
| r4 = r5 | 14.0 | +14 / −14 | yes |
| d1 = d5 | 3.4 | 3.4 / 3.4 | yes |
| d2 = d4 | 1.1 | 1.1 / 1.1 | yes |
| d3 | 5.7 | 5.7 | yes |
| b1 | 4.3 | 4.3 (surface 2 to 3) | yes |
| b2 | 0.8 | 0.8 (surface 6 to stop) | yes |
| b3 | 3.5 | 3.5 (stop to surface 7) | yes |
| nD L1 = L5 | 1.51660 | 1.5166 | yes |
| nD L2 = L4 | 1.56760 | 1.5676 | yes |
| nD L3 | 1.50846 | 1.50846 | yes |
| Focal length | fD = 100 mm | design 100 | yes |
| Aperture | 1:7.2 | nominal f/7.2 | yes |
| Half-field | ω = 26½° | maxTraceFieldDeg 26.5 | yes |

No transcription error was found and no value was changed. Von Rohr marks no value as assumed or measured from a
drawing, and prints no glass names and no ν̄ for this lens. The printed b1 = b2 + b3 places the stop 0.8 mm behind the
cemented group, not midway; Fig. 125 draws it there too (about 1.2 mm and 3.3 mm on the drawing's scale).

### Radius signs

Read from Fig. 125: L1 is a meniscus convex to the object (r1, r2 positive); the cemented middle lens is a square
block with a biconvex core (r3, r4 positive, r5, r6 negative); L5 is a meniscus convex to the image (r7, r8 negative).
The signs agree with the symmetric r1 = r8 … notation and with both of von Rohr's aberration statements below.

### First-order and aberration results

| Quantity | Result |
| --- | --- |
| EFL | 100.536 mm, +0.54 % against fD = 100; inside the 0.8–1.25 window |
| Rounding check | ±0.05 mm on r1 = r8 moves EFL by ±0.68 mm; r2 = r7 ±0.29, r4 = r5 ±0.25; r1 = r8 = 26.16 alone gives 99.99 |
| Back focus | 90.2377 mm paraxial; last gap set to 90.238 (was 90.23774390530268) |
| F-number | f/7.20 from the engine stop radius 6.239 mm; exact marginal ray at the stop 6.288 mm |
| LSA (pupil 1 / 0.85 / 0.7 / 0.5) | −0.134 / −0.288 / −0.290 / −0.192 mm; von Rohr: not beyond −0.4 mm |
| Astigmatism (Coddington, real chief ray) | xs −6.32, xt −0.51, difference 5.8 mm at 26°; 6.2 mm at 26.5°; von Rohr: nearly 6 mm at about 26°, concave field |
| Petzval sum | 0.00813 mm⁻¹ (radius about 123 mm) |
| Chief ray at 26.5° | image height 50.14 mm, passes all rims |

Both of von Rohr's performance statements are reproduced, which supports the transcription, the signs and the stop
position together.

### Rims

Fig. 125 was profiled at 300 dpi (source scan about 163 ppi). Scale from the 23.3 mm vertex length (265 px):
11.37 px/mm. Drawn half-heights: L1 about 11.9 mm, cemented block about 8.55 mm, L5 about 11.9 mm. The incoming axial
beam is drawn at a half-height of 7.0 mm, matching the 6.98 mm entrance-pupil radius of 1:7.2. The drawn stop opening
(about 4.35 mm) is smaller than the 1:7.2 stop and is treated as schematic. L3's two r = 14 faces meet at 8.47 mm with
d3 = 5.7, the height at which the drawing closes the core.

Exact meridional trace at f/7.2 and ω = 26.5° with the staged rims: no axial clip, no blocked chief ray; ordinary
vignetting 41 % one side at surface 1, 22 % at surface 2, 23 % at surface 3, 2 % at surface 4. Under the least-change
rule the staged rims were kept; they are narrower than the drawing, so the model vignettes more than the figure
implies.

| Surface | Before | After | Basis |
| --- | --- | --- | --- |
| 1, 2 | 10 | 10 | heuristic (drawing about 11.9) |
| 3–6 | 8 | 8 | heuristic (drawing about 8.55) |
| STO | derived | derived (6.24) | 1:7.2 |
| 7, 8 | 10 | 10 | heuristic (drawing about 11.9) |

`source.sdSource` set to `"heuristic"`. Field kept at the printed ω = 26.5°; no cap below it was needed. The
geometry validator reports no errors with these rims, and the aperture audit finds the stated f-number within 3 %.

### Structure and identity fixes

- Cemented middle lens labelled: `cemented: "D1"` on L2, L3 and L4 and a `doublets` entry for surfaces 3–6.
- `groups` added for the three air-separated groups: G1 (+) surfaces 1–2, G2 (−) 3–6, G3 (+) 7–8.
- Element labels "Source L1" … replaced by role labels taken from von Rohr's description (front and rear collective
  lens, middle-lens shells and core), since the book prints no glass names; L3 type "Biconvex" → "Biconvex Positive".
- Every element given `glass: "Unmatched (historical nD only, no dispersion published)"`, computed thick-lens focal
  lengths and a short role; `indexReference: "D"` kept, no `vd`.
- `aperture.maxFNumber: 16` written out; f-stops 7.2, 8, 11, 16 kept. Focus description rewritten.
- `subtitle` added; `source.sdSource` added; literature locator "p. 357, Fig. 125" and page-113 URL confirmed; no
  `after`, since the data are von Rohr's own.
- Staging header replaced by a source and model-additions comment.
- Key left as staged. It has no design year; with von Rohr's dating it would read
  `carl-zeiss-jena-abbe-rudolph-triplet-1888-von-rohr-1899` (proposed, not applied).

### Maker and dating

Von Rohr places the design at the Zeiss workshop in Jena: Abbe's idea, Rudolph's computation, prepared in 1888/89. He
says practice made little use of the new instrument and that users noticed its axial sharpness, so the lens reached
photographers. `maker: "Carl Zeiss Jena"` is kept on that basis. He gives no production figures, dates or catalog name.

### Patent check (D6)

Von Rohr names no patent for this design on pp. 356–358. The text cites a bibliography entry "E. Abbe (3.)" at the
point where Abbe proposes the triplet; the held bibliography pages (pp. 415 and 430) carry the von Höegh and Steinheil
entries, not Abbe's, and the e-rara viewer returned a browser-verification page instead of the bibliography, so that
entry was not read. With no patent named, there is no patent table to compare.

### Open limitations

- Rims are heuristic and narrower than Fig. 125; off-axis vignetting is larger than the drawing implies.
- Monochromatic model: no dispersion is printed, so color behavior is not modeled; the apochromatic variant von Rohr
  mentions has no data.
- Plate II (referred to by Fig. 125; contents not seen) and the bibliography entry "E. Abbe (3.)" were not
  consulted.
- The +0.54 % focal-length residual is left as printed rounding.
