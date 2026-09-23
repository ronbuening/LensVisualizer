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
