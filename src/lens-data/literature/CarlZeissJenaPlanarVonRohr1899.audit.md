# Audit log — Carl Zeiss Jena Planar f/3.3 (von Rohr 1899, Fig. 146)

## 2026-11-18 — Literature reconstruction audit

### Book pages and figure used

Moritz von Rohr, *Theorie und Geschichte des photographischen Objektivs* (Berlin: Julius Springer, 1899). The table and
Fig. 146 are on printed p. 391 (e-rara chapter PDF 4637944, page 147); pp. 389–390 (pages 145–146) give the history
of the hyperchromatic lens and the Planar. Values were read on the page image (scan 161 ppi, rendered at 400–600 dpi),
not from the OCR layer. The caption reads "Fig. 146, s. Taf. I. P. Rudolph: Planar. Quelle: Angaben des Verfassers.
Reducirt auf fD = 100 mm. Durchgerechnet für 1 : 3.3 und ω = 25°."

Four further sections of the same e-rara record were consulted because the held source pages do not contain them:
the Litteraturverzeichniss p. 425 (PDF 4637806, page 28), which holds the Rudolph entries (the held bibliography pages
415 and 430 do not); the Berichtigung (PDF 4637810), whose only correction concerns p. 17; the Bemerkungen zu den
Figurentafeln (PDF 4637812, page 2), which define the hatching and the curve scales; and Tafel I (PDF 4637814,
page 2), which redraws the lens as No. 146 with curves 146a and 146b.

The scan of p. 391 carries a later reader's notes in ink and pencil: hand colouring of the six elements, surface
labels and a diameter sketch on the figure, a build-length note, and modern glass codes with νd values beside the
glass rows. None of it touches the printed digits, and none of it was used. The uncoloured Tafel I drawing matches
Fig. 146. The source line "Angaben des Verfassers" means von Rohr's own data, as the package stated.

### Values read

| Quantity | Printed | File | Match |
| --- | --- | --- | --- |
| r1 | 32.0 | +32 | yes |
| r2 = r9 | 144.1 | +144.1 / −144.1 | yes |
| r3 | 37.6 | +37.6 | yes |
| r4 = r7 | 45.5 | −45.5 / +45.5 | yes |
| r5 = r6 | 20.5 | +20.5 / −20.5 | yes |
| r8 | 32.6 | −32.6 | yes |
| r10 | 33.9 | −33.9 | yes |
| d1 = d6 | 5.0 | 5 / 5 | yes |
| d2 = d5 | 5.3 | 5.3 / 5.3 | yes |
| d3 = d4 | 2.7 | 2.7 / 2.7 | yes |
| b1 = b4 | 0.27 | 0.27 / 0.27 | yes |
| b2 = b3 | 5.9 | 5.9 (r5 to stop) / 5.9 (stop to r6) | yes |
| nD L1 = L6 | 1.56785 | 1.56785 | yes |
| nD L2 = L5 | 1.56768 | 1.56768 | yes |
| nD L3 = L4 | 1.57087 | 1.57087 | yes |
| fD, aperture, ω | 100 mm, 1:3.3, 25° | design 100, f/3.3, field limit 25° | yes |

The second subscript of "b1 = b4" is blurred on the scan; only b4 fits the table's layout and the figure. No value
differs from the print, so no erratum is needed. The asymmetric pairs (r1/r10, r3/r8) are printed as such.

### Signs and their basis

Fig. 146 and Tafel I: L1 has both faces bulging toward the object (r1, r2 positive); L2 is biconvex; the cemented
junction bulges toward the stop (r4 negative); the vertex of L3's rear face lies object-side of its rim (r5 positive,
concave toward the stop); the rear half mirrors the front. On Tafel I (326 dpi render, 13.24 px/mm from the
38.34 mm vertex length) every vertex sits within 0.3 mm of its table position, and the stop within 0.2 mm of the
midpoint of b2 + b3.

### First-order results

- EFL 99.545 mm (−0.455 % against fD = 100), back focus 80.532 mm (stored rounded from 80.5319), vertex length
  38.34 mm, Petzval sum 0.00220 mm⁻¹. The 0.8–1.25 window holds.
- Rounding: +0.05 mm on |r| changes the EFL by +0.215 (r1), +0.144 (r3), −0.376 (r5), −0.385 (r6), +0.199 (r8) and
  +0.198 mm (r10); the residual is about one standard deviation of 0.1 mm rounding. Making a pair symmetric gives EFL
  85.3 (r3 = 32.6), 120.4 (r8 = 37.6), 107.9 (r1 = 33.9) or 92.2 mm (r10 = 32.0), so the print is read correctly.
- f/3.3: entrance-pupil radius 15.083 mm, engine stop radius 11.470 mm.
- LSA at pupil 1 / 0.85 / 0.7 / 0.5: +0.008 / −0.237 / −0.272 / −0.188 mm.
- Curve 146a (Tafel I, 0.5 mm = 131 px, 1 mm height = 51.7 px at 326 dpi) at von Rohr's computed zones against the
  model scaled to f = 100: back focus −0.19 / −0.18 / +0.16 (model −0.23 / −0.25 / +0.05) and focal length
  −0.26 / −0.41 / −0.40 (model −0.28 / −0.46 / −0.49) at heights 8.8 / 12.6 / 15.3 mm. The solid curve crosses zero
  near 14.8 mm, the model near 15.1 mm. Same form; the 0.05–0.1 mm offset is inside the radius rounding (0.05 mm on
  one radius moves the marginal value by 0.08–0.23 mm).

### Rim decisions

The rims are not printed. Before the audit, r3 and r4 at 13.8 mm clipped the f/3.3 axial beam: the exact trace at the
f/3.3 pupil needs 14.17 and 14.08 mm there, and the engine's iris (11.47 mm) admits rays reaching 14.33 and 14.28 mm;
the aperture census traced the lens at f/3.43 (+3.8 %, rim-limited at r3) and proposed 14.4 / 14.3 with 14.4 for
both faces of L2. Both faces were raised to 14.4 mm. Tafel I draws L2 to a knife edge with L3's flat top at
14.26 mm, Fig. 146 at about 14.2 mm; the radii reach a knife edge at 14.52 mm, and L2 keeps a 0.09 mm edge at 14.4.

| Surface | Before | After | Axial ray at engine iris | Tafel I | Fig. 146 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1, 2 | 16 | 16 | 15.26, 14.89 | 16.05 | 15.9 |
| 3, 4 | 13.8 | 14.4 | 14.33, 14.28 | 14.26 | 14.2 |
| 5 | 13.8 | 13.8 | 11.69 | 12.13 (land to 14.26) | 12.2 |
| stop | 11.47 | 11.47 | 11.47 | 11.0 | 11.1 |
| 6 | 13.8 | 13.8 | 11.22 | 11.97 (land to 13.62) | 12.2 |
| 7, 8 | 13.8 | 13.8 | 12.56, 12.72 | 13.62 | 13.5 |
| 9, 10 | 16 | 16 | 12.80, 12.96 | 16.09 | 16.0 |

After the change the aperture census reports the lens iris-limited at f/3.30 with no rim limiter and no raise
proposal, the surface validator reports no errors, and the meridional trace at ω = 25° shows no axial clip and no
blocked chief ray (largest chief height 9.48 mm at r1; one-sided rim vignetting 33–52 %, largest at r4). The
paraxial rim limit is 38.3° (r1). The field limit stays at the printed 25°. All other rims are unchanged under the
least-change rule. `sdSource` is "heuristic": the 16 and 13.8 mm values are the package's estimates, and the
14.4 mm value is set by the axial beam, not measured.

### Structure fixes

- `cemented: "D1"` on L2/L3 and `"D2"` on L4/L5 with matching `doublets`; `groups` G1–G4 for the four air-separated
  groups; counts 6 / 4 unchanged.
- Element labels from the hatching legend of the plates: "New high-index crown" (L1, L2, L5, L6), "Flint" (L3, L4);
  glass string per the nD-only rule; computed focal lengths and roles added; type strings already matched the signs.
- `maxFNumber: 16` added to the 3.3–16 stop list; last gap rounded to 80.532; subtitle, `sdSource` and the header
  comment written; name, key, maker and citation kept as staged (locator p. 391, Fig. 146; page 147 link; no `after`,
  because the table is von Rohr's own data).

### Patent check (D6)

Von Rohr's bibliography (p. 425) lists the design as Rudolph (13.): Firma Carl Zeiss in Jena, D.R.P. 92 313 of
14 November 1896 "auf das Planar", reprinted in E. J. 1898 (vol. 12, pp. 79–85), with the English patent
E.P. 27 635 of 4 December 1896. The D.R.P. (DEPATISnet DE000000092313A, published 5 July 1897) prints two numerical
examples for f = 1. Beispiel 1 is a single member with front stop at 1:9; Beispiel 2 is a symmetric double objective
with central stop at relative aperture 0.25. Result: **table differs**. Beispiel 2 scaled to f = 100 gives radii
19.54, 43.70, 35.99, 154.24 and 31.47 (von Rohr 20.5, 45.5, 37.6/32.6, 144.1, 32.0/33.9), thicknesses 4.11
(negative lens), 5.14 and 3.08 (von Rohr 2.7, 5.3, 5.0), air 0.26 and stop distance 5.14 (0.27, 5.9), and two
glasses, nD 1.57631 and 1.57244, against von Rohr's three. E.P. 27 635 was not consulted.

### Open limitations

- nD only; von Rohr prints no dispersion for this lens, so chromatic results of the model carry no source meaning.
- The concave faces r5 and r6 stay at 13.8 mm where the drawing ends them at about 12.1 and 12.0 mm with a land, and
  L4/L5 at 13.8 mm against the drawn 13.6 mm (L5 edge 0.09 mm). A figure-fidelity pass could adopt the drawing; the
  full 25° pencil reaches 12.64 and 12.42 mm on r5 and r6, so that would add some off-axis vignetting.
- The model's zonal spherical aberration is 0.05–0.1 mm more undercorrected than curve 146a; attributed to rounding,
  not corrected. Curve 146b (astigmatism) was not compared numerically.
- The date of this particular computation and the production rating of the Series Ia lens are not printed on these
  pages; the key's 1896 is the year of the Planar type and its patent.
- No other 1896 Planar exists on this checkout; the open AddLens branches were not checked.
