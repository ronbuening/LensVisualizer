# Audit Log — FUJIFILM FUJINON TELECONVERTER XF1.4X TC WR

## 2026-10-04 — Adapted from the reviewed master-plus-converter package

- Source: US 2017/0090163 A1, Example 1 (Tetsuya Ori / Fujifilm Corporation). The package modeled the complete
  published system, master lens plus converter, as one lens. This file keeps the converter only: Table 3 rows 41–50,
  relabelled 1–10, with the patent's designations RL11–RL32 in groups RG1–RG3.
- Dropped: the 23 master elements, the stop, the zoom tables, `nominalFno` and the other lens-only fields. The catalog
  host `fuji-xf-50140mm-f28` is the same patent's master lens and supplies them when the converter is mounted.
- Geometry: master back focus in air 26.4281 + 2.85 / 1.5168 + 1.10 = 29.4071 mm (Table 2 prints 29.41); the Table 3
  gap d40 = 2.5000 mm gives `masterImageDistanceMm` 26.9071. The last gap, 13.1685 mm, is the physical distance to
  optical member PP (2.85 mm, nd 1.5168, then 1.10 mm), which is listed in `rearPlates`.
- Semi-diameters as delivered were the package's inferred rims, not source values; see the 2026-10-04 figure audit
  below, which replaces them.
- Glass review: the patent prints nd/νd only and the package delivered `Unmatched (…)` labels. Every printed pair
  equals an Ohara catalog entry to the printed precision — S-LAH58 (1.88300 / 40.76, RL11, RL21, RL23), S-TIM25
  (1.67270 / 32.10), S-FTM16 (1.59270 / 35.31), S-LAM60 (1.74320 / 49.34) and S-NPH2 (1.92286 / 18.90) — so the
  elements are relabelled `<glass> (OHARA coordinate match; supplier unconfirmed)` and resolve to catalog Sellmeier
  data. Hoya TAFD30 (νd 40.80) and Hikari J-LASF08A (40.69) are near S-LAH58 but not equal, and CDGM H-ZF72A has
  S-NPH2's coordinates; the Ohara set is kept because it alone matches all five pairs.
- Source discrepancies carried without correction: the rounded prescription traces slightly off the printed summary
  (below), and the master's paraxial focus sits 0.03–0.05 mm short of its image plane, which the converter magnifies
  to about 0.1 mm at the combined image plane. The printed spacings are kept.
- Fit: `minHostFno: 2.8`, the speed of the patent master (f/2.88). This keeps the converter off the f/2 XF 200mm,
  which Fujifilm's compatibility chart for this converter marks "Not compatible" (fujifilm-x.com
  support pages, read 2026-10-04); that lens takes the XF1.4X TC F2 WR supplied with it.
- On the catalog host: junction gap 2.5000 mm, final gap 13.1685 mm, focal length 72.072 / 117.098 / 190.351 mm
  against the printed 72.10 / 117.14 / 190.30, f/4.03 at all three stations against 4.04 / 4.05 / 4.04, and the
  host's stop radius unchanged.
- `reference-xf-14x-teleconverter` in `lens-data/reference/` is the same prescription with its own estimated rims. It is
  a hidden engine test model and is not this converter's catalog entry.

## 2026-10-04 — Semi-diameters from the patent figure

- Why: the delivered rims were a lower bound. The package sized them about 1% over the corner chief ray of the master
  system and did not claim full-bundle illumination. On the patent's own master at 140 mm they passed 22% of the
  on-axis bundle at the format corner, less than the bare lens passes there (33%), where a 1.4× converter should
  brighten the corner.
- Evidence: FIG. 1 of US 2017/0090163 A1 (sheet 1), rendered at 600 dpi. The drawing is to scale: with one scale and
  one origin, every surface curve of the prescription lies on the drawn outlines. Element half-heights were read from
  the drawn glass edges and confirmed on the zoomed render. Fujifilm's published lens-construction diagram for the
  XF1.4X TC WR, measured the same way, gives 12.2 / 12.4–13.0 / 13.7–14.0 mm for the three groups.
- Rule: `sd` is 3% inside the drawn glass edge, rounded to 0.1 mm; a cemented junction takes the smaller neighbour.
  RL22's surfaces cross at 12.66 mm, so its junctions stop at 12.2 and 12.3 mm, leaving 0.45 mm of edge.

| Surface | Element | Delivered | Figure glass edge | New `sd` |
|---|---|---:|---:|---:|
| 1 | RL11 front | 7.89 | 12.35 | 12.0 |
| 2–3 | RL11/RL12 junction, RL12 rear | 7.80, 7.84 | 11.8 | 11.4 |
| 4–5 | RL21 front, RL21/RL22 junction | 8.06, 8.35 | 12.56 | 12.2 |
| 6 | RL22/RL23 junction | 9.13 | 12.66 (RL22 tip) | 12.3 |
| 7 | RL23 rear | 9.85 | 13.07 | 12.7 |
| 8–10 | RL31 front, junction, RL32 rear | 11.00, 11.21, 11.36 | 14.07 | 13.6 |

- Effect on the catalog host `fuji-xf-50140mm-f28`: first-order values, the junction and the host's stop are
  unchanged. Corner coverage stays at 100%, the composed half-field at the wide end rises from 11.81° to 13.61°, and
  the share of the on-axis bundle reaching the format corner at 140 mm rises from 22% to 58%.
- Not done: the figure is a patent drawing, not a dimensioned part, so the rims remain estimates good to about ±0.3
  mm.

## 2026-10-04 — Additional hosts

- Fujifilm's compatibility chart for this converter (fujifilm-x.com support pages, read 2026-10-04) lists the XF 80mm
  f/2.8 Macro, XF 70-300mm f/4-5.6 and XF 100-400mm f/4.5-5.6 alongside the XF 50-140mm f/2.8; those three now declare
  `acceptsTeleconverters`. The chart also lists the XF 400mm f/4.5, XF 500mm f/5.6 and XF 150-600mm f/5.6-8, which are
  not in the catalog.
- XF 80mm Macro: junction gap 3.39 mm, 110.4 mm f/4.03. XF 70-300mm: junction 2.34 mm, 101.0 / 179.0 / 407.9 mm at
  f/5.77 / 6.87 / 8.08. XF 100-400mm: junction 4.80 mm, 144.1 / 249.5 / 543.0 mm at f/6.46 / 6.70 / 8.11.
- On every host the stop radius is unchanged, the corner chief ray clears at each zoom station, and more of the axial
  bundle reaches the format corner than on the bare lens. On the Macro the close-focus axial cone stays limited by the
  lens's own stop through the whole focus range.
- These hosts were tested only after the rims were re-sized from the patent figure; with the delivered rims the two
  zooms reached 91% of the corner at the long end.
