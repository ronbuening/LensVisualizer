# Patent and glass audit

## 2026-09-23

Source: local `patents/US2165328.pdf`, p. 1 (Fig. 2 section and Example 2 table, 300 dpi native CCITT scan). A quick
sanity re-read of the table confirmed every stored R, t/S, ND and ν value at the documented uniform 0.5 scale. The
printed prescription computes to 103.20 mm against the nominal F = 100, so the stored EFL is 51.60 mm. This is a patent
discrepancy, not a transcription error, and it is retained. The patent gives no stop, clear apertures, image row or
focus data, and the header treatment of these is unchanged.

Figure scale: Fig. 2 is drawn to scale axially. At 300 dpi the R1 vertex is at x≈850 px and the R7 vertex at
x≈1221 px. That 371 px span equals the 15.19 mm scaled vertex track, about 0.041 mm/px. Each intermediate vertex falls
within ~3 px of the position the prescription predicts. Rims were measured above and below the axis with a silhouette
profile, excluding R-label leaders and element-number leaders; the lower rim reads ~5–15 px lower than the upper, and
the two were averaged.

| Surfaces | Before SD (mm) | After SD (mm) | Evidence |
| --- | --- | --- | --- |
| 1 / 2 | 9.25 / 9.25 | 7.8 / 7.8 | Fig. 2 element I rim 194/179 px (≈7.9/7.3 mm); drawn edge ≈1.4 mm, model edge 1.26 mm at 7.8 |
| 3 / 4 | 7.78 / 7.78 | 6.7 / 6.7 | Element II rim 164/155 px (≈6.7/6.3 mm); S3 axial marginal 6.51 mm |
| STO | 6.0096 | 6.0096 | Unchanged paraxial f/3.5 calibration |
| 5 / 6 / 7 | 8.4 / 8.4 / 9.25 | 6.4 / 6.4 / 6.4 | III+IV flat-topped rim 155/149 px (≈6.35/6.1 mm); S5 axial marginal 6.24 mm; cemented rim shared |

The previous values were ray-containment SDs for an unvignetted 24×36 mm corner. They drew the doublet 26–45 % and
element I 19 % larger than the patent section. At the new values the f/3.5 axial beam passes every surface, with the
tightest margin 0.16 mm at S5, and the full-field chief ray is unobstructed. The corner bundle is partly clipped (about
24 % of the bundle's width at S1 and 42 % at S7), as the drawing implies. Edge thicknesses are 1.26, 3.58, 1.82 and
2.26 mm for I–IV. The surface validator and the image-circle check pass. The engine's paraxial half-field estimate is
38.5°. Local viewer review, both on-axis and off-axis, shows element I as the tallest component and II and III+IV
slightly shorter, matching Fig. 2. The console showed no errors.

Glass (stored nd/νd unchanged; labels now resolve to trusted Sellmeier data where justified):

| Element | Patent nd/νd | Before label | After label |
| --- | --- | --- | --- |
| I | 1.620/60.4 | 620604 SK16/BACD16/S-BSM16 class | N-SK16 (SCHOTT) 1.62041/60.32, catalog equivalent |
| II | 1.605/38.2 | 605382 flint class, nearest F5/S-TIM5 | F15 (HOYA) 1.60565/37.90, catalog proxy (F5 Δnd −0.0016 too far) |
| III | 1.639/55.5 | 639555 SK18/S-BSM18 class | K-SK18 (SUMITA) 1.63854/55.50, catalog equivalent |
| IV | 1.523/58.4 | 523584 crown class, H-K51/NSL51 | C12 (HOYA, obsolete) 1.523073/58.64, catalog proxy (Δnd +0.0001, Δνd +0.24) |

Catalog-dispersion coverage rises from 0/4 trusted resolutions (class labels, one hit only through incidental names) to
4/4 explicit equivalents or proxies once HOYA C12 is registered in the catalog. The C12 entry uses HOYA's vendor
polynomial from the 2026-07-07 catalog, which includes obsolete glasses.

Open limitations: the production correlation to the Ektra/Retina Ektar remains research-grade; the stop position and
diameter, the image plane and the focus are modeled or derived, not patent data; all four glass labels are modern catalog equivalents or proxies, not the historical Kodak glasses.

## 2026-09-23 — Live diagram review

Source: local `patents/US2165328.pdf`, p. 1, Fig. 2 (the render made in the first pass), compared with the local
viewer's SVG at a 1400×900 viewport. The Browser pane was hidden, so the geometry was read from the rendered SVG
(element bounding boxes, stop blade positions, hover cards) rather than from screenshots.

Silhouette: the rendered heights of I : II : III+IV are 163 : 140 : 133 px, or 1 : 0.86 : 0.82. Fig. 2 draws them at
about 370 : 318 : 305 px, which is also 1 : 0.86 : 0.82. The overall width-to-height ratio (front vertex to rear rim
over element I's height) is 0.98 in the viewer against about 1.0 in the figure. The flat-topped III+IV edge with one
shared cemented rim matches the drawing. The first pass's semi-diameters are retained.

Stop: the modeled STO sat 1.72 mm behind the R4 vertex, but the concave R4 surface has 1.96 mm of sag at element II's
6.7 mm rim. The diaphragm plane therefore cut through II's glass edge above about 6.3 mm, and the viewer drew the
stop blades inside II's rim. The stop was moved rearward inside the same S2 air space and its semi-diameter was
re-solved paraxially for f/3.5. The patent gives no stop station, so both positions are model choices.

| Item | Before | After | Evidence |
| --- | --- | --- | --- |
| R4 → STO gap | 1.72 mm | 2.05 mm | R4 rim sag 1.96 mm at sd 6.7; new plane clears II's rim by 0.09 mm |
| STO → R5 gap | 1.71 mm | 1.38 mm | Sum kept at the patent's scaled S2 = 3.43 mm; R5 rim (sag 0.56 mm) is 0.82 mm behind the stop |
| STO sd | 6.009623068241 | 6.031744102409 | Paraxial marginal height at the new plane for EP radius 7.3717 mm (f/3.5) |

Checks on the result: EFL 51.602 mm, BFD 41.781 mm and paraxial f/3.5 are unchanged. The f/3.5 axial beam still
passes every surface, with the tightest margin 0.16 mm at S5, and the chief ray is not blocked. The corner bundle is
clipped by about 26% of its width at S1 and 37% at S7 (previously 24% and 42%). The surface validator and the
image-circle check pass, and the engine's paraxial half-field estimate is 39.1°. In the viewer the stop blades now sit
between element II's rim and element III. The off-axis fan launches at 23.5°, and the chromatic readout is 167 µm
LoCA. The console showed no errors.

Retained after review: element types agree with the R signs (I positive meniscus, II biconcave, III biconvex, IV
negative meniscus concave to the front). Roman numerals I–IV follow the patent. The glass labels, nd/νd and `apd:
false` are as listed in the first pass; all four hover cards report Sellmeier dispersion (N-SK16, F15, K-SK18, C12).
The group and doublet ranges, subtitle, specs and `NO_INTERNAL_RECONSTRUCTION` focus text are correct. The focus
slider shows "Not modeled" and there are no zoom stations, so there is no travel direction to check. There are no
aspheric markers, and the design is all-spherical.

Open limitations: unchanged from the first pass.
