# Audit Log — FUJIFILM FUJINON TELECONVERTER XF2X TC WR

## 2026-10-04 — Adapted from the reviewed master-plus-converter package

- Source: JP 2017-173692 A, Example 1 (Tetsuya Ori, Michio Cho / Fujifilm Corporation; filed 25 March 2016, published
  28 September 2017). The package modeled the complete published system, master lens plus converter, as one lens.
  This file keeps the converter only: the bold-framed Table 3 rows 41–54, relabelled 1–14.
- Designations are the patent's: RL11–RL42 in groups RG1–RG4 (¶0018, ¶0021–¶0030, reference signs ¶0091, FIG. 1,
  FIG. 5) and optical member PP for the plane member of rows 55–56 (¶0060, ¶0063, FIG. 5). Element roles restate
  ¶0018–¶0030, the Table 11 ratio f3/f3a = 0.080 and the element focal lengths; no aberration share was computed.
- Dropped: the 23 master elements, the stop, the zoom tables, `nominalFno` and the other lens-only fields. The catalog
  host `fuji-xf-50140mm-f28` supplies them when the converter is mounted. That file is authored from
  US 2017/0090163 A1; its 40 surfaces, glass values and zoom gaps are identical to Table 3 rows 1–40 here.
- Geometry: `masterImageDistanceMm` 26.91 is the master back focus in air that Table 2 prints, 29.41 mm, minus the
  Table 3 gap d40 = 2.500 mm. The last gap, 23.596 mm, is the physical distance to PP (2.85 mm, nd 1.5168, then
  0.001 mm), which is listed in `rearPlates`; in air that is 25.476 mm, where Table 4 prints 25.47.
- Semi-diameters as delivered were the package's inferred rims, not source values; see the 2026-10-04 figure audit
  below, which replaces them.
- Glass review: the patent prints nd/νd only and the package delivered `Unmatched (…)` labels. Seven printed pairs
  equal Ohara catalog entries to the printed precision — S-LAH58 (1.88300 / 40.76, RL11, RL21, RL31), S-TIM2 (1.62004
  / 36.26), S-TIH13 (1.74077 / 27.79), S-TIL27 (1.57501 / 41.50) and S-NBH52 (1.67300 / 38.15). Ohara has no glass at
  RL33's 1.90043 / 37.37 or RL42's 2.00069 / 25.46; those equal Hoya TAFD37 (TAFD37A has the same coordinates) and
  Hoya TAFD40 (Hikari J-LASFH17 has the same coordinates), with Hoya kept for both. All nine are relabelled `<glass>
  (<vendor> coordinate match; supplier unconfirmed)` and resolve to catalog Sellmeier data. RL31's νd is 40.76 as
  Table 3 row 47 prints it (an earlier package transcription read 40.00).
- Source discrepancies carried without correction:
  - Master back focus: the rear rows of Table 1 (26.389 + 2.850 / 1.51633 + 3.617) sum to 31.8855 mm in air against
    the 29.41 mm of Table 2. 29.41 is used; the master rows trace to a paraxial back focus of 29.36–29.37 mm.
  - Plate glass: Table 1 gives nd 1.51633, νd 64.14 behind the master alone; Table 3 gives PP as nd 1.51680,
    νd 64.20, which `rearPlates` follows.
  - Focus: the master's paraxial focus sits 0.04–0.05 mm short of its image plane and the converter magnifies that
    about four times, so a virtual object at `masterImageDistanceMm` images 0.159 mm beyond the printed 25.476 mm.
    The printed spacings are kept.
  - Focal length: with the printed 2.500 mm gap the prescription traces to 102.924 / 167.215 / 271.909 mm,
    0.07–0.11 mm from Table 4.
  - Lettering: FIG. 1 marks the fourth group "RG41"; the description, the reference signs and FIG. 5 give RG4.
- Fit: `minHostFno: 2.8`, the speed of the patent master (f/2.88). This keeps the converter off the f/2 XF 200mm,
  which Fujifilm's compatibility chart for this converter
  marks "Not compatible" (fujifilm-x.com support pages, read 2026-10-04).
- On the catalog host `fuji-xf-50140mm-f28`: junction gap 2.4971 mm (patent 2.500; the host's back focus in air is
  29.4071 mm), focal length 102.939 / 167.239 / 271.947 mm against the printed 102.997 / 167.327 / 271.837 (host
  alone 51.505 / 83.685 / 135.982), f/5.756 / 5.755 / 5.760 against 5.76 / 5.80 / 5.76, host stop radius unchanged.

## 2026-10-04 — Semi-diameters from the patent figure

- Why: the delivered rims were a lower bound. The package sized them about 1% over the source-field chief rays of the
  master system and did not claim full-bundle illumination. On the patent's own master at 140 mm they passed 34% of
  the on-axis bundle at the format corner, about what the bare lens passes there (33%), where a 2× converter should
  brighten the corner considerably.
- Evidence: 図1 (FIG. 1, Example 1) of JP 2017-173692 A, rendered at 600 dpi. The drawing is to scale: with one scale
  and one origin, every surface curve of the prescription lies on the drawn outlines. Element half-heights were read
  from the drawn glass edges and confirmed on the zoomed render; RL21 and RL31 are drawn with a bevel on the front
  surface and RL33's front surface ends where it meets the cylindrical edge. Fujifilm's published lens-construction
  diagram for the XF2X TC WR, measured the same way, agrees within 0.4 mm on every element.
- Rule: `sd` is 3% inside the drawn glass edge, rounded to 0.1 mm; a cemented junction takes the smaller neighbour.

| Surface | Element | Delivered | Figure glass edge | New `sd` |
|---|---|---:|---:|---:|
| 1 | RL11 front | 6.47 | 10.74 | 10.4 |
| 2–3 | RL11/RL12 junction, RL12 rear | 6.34, 6.24 | 9.73 | 9.4 |
| 4 | RL21 front (bevelled) | 5.80 | 9.2 | 8.9 |
| 5–6 | RL21/RL22 junction, RL22 rear | 5.79, 6.09 | 9.45 | 9.2 |
| 7 | RL31 front (bevelled) | 6.39 | 9.5 | 9.2 |
| 8–9 | RL31/RL32 junction, RL32 rear | 6.78, 7.67 | 10.74 | 10.4 |
| 10 | RL33 front | 7.73 | 10.0 | 9.7 |
| 11 | RL33 rear | 8.23 | 11.78 | 11.4 |
| 12–13 | RL41 front, RL41/RL42 junction | 9.02, 9.53 | 12.54 | 12.2 |
| 14 | RL42 rear | 9.90 | 13.55 | 13.1 |

- Effect on the catalog host `fuji-xf-50140mm-f28`: first-order values, the junction and the host's stop are
  unchanged. Corner coverage stays at 100%, the composed half-field at the wide end rises from 8.31° to 10.44°, and
  the share of the on-axis bundle reaching the format corner at 140 mm rises from 34% to 76%.
- Not done: the figure is a patent drawing, not a dimensioned part, so the rims remain estimates good to about ±0.3
  mm.

## 2026-10-04 — Additional hosts

- Fujifilm's compatibility chart for this converter (fujifilm-x.com support pages, read 2026-10-04) lists the XF 80mm
  f/2.8 Macro, XF 70-300mm f/4-5.6 and XF 100-400mm f/4.5-5.6 alongside the XF 50-140mm f/2.8; those three now declare
  `acceptsTeleconverters`. The chart also lists the XF 400mm f/4.5, XF 500mm f/5.6 and XF 150-600mm f/5.6-8, which are
  not in the catalog.
- XF 80mm Macro: junction gap 3.39 mm, 157.8 mm f/5.77. XF 70-300mm: junction 2.34 mm, 144.3 / 255.9 / 583.1 mm at
  f/8.25 / 9.81 / 11.56. XF 100-400mm: junction 4.80 mm, 205.9 / 356.6 / 775.8 mm at f/9.24 / 9.58 / 11.59.
- On every host the stop radius is unchanged, the corner chief ray clears at each zoom station, and more of the axial
  bundle reaches the format corner than on the bare lens. On the Macro the close-focus axial cone stays limited by the
  lens's own stop through the whole focus range.
- These hosts were tested only after the rims were re-sized from the patent figure; with the delivered rims the two
  zooms reached 94% of the corner at the long end.
