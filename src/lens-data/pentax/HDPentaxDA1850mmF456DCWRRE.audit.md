# Audit Log — HD PENTAX-DA 18-50mm f/4-5.6 DC WR RE

Patent: JP 2016-6455 A, Numerical Example 2, Figure 10 and Tables 5–8

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| Hybrid L12, 3–5A | 10.5 / 10.0 / 9.8 mm | 12.5 / 12.0 / 11.8 mm | Figure 10 shows the hybrid member substantially larger than the previous envelope and only moderately smaller than L11. |
| L13, 6–7 | 10.0 / 9.8 mm | 12.0 / 11.8 mm | Figure 10 gives L13 nearly the same rim height as hybrid L12. |

The revised surface 5A polynomial departure and total sag were recomputed at the new 11.8 mm modeled aperture. The remaining group shapes agree with Figure 10 within the drawing's measurement uncertainty.

### Labels and glass

- Removed the decimal point from the internal lens key, fixing schema validation.
- Romanized inventor 古賀 知也 as Tomoya Koga and corrected the displayed model name to Ricoh's `HD PENTAX-DA` styling.
- Matched Ricoh's anomalous-dispersion marking to patent L41, added its inferred APD tag and the official special-glass count, and retained 618634 as a vendor-neutral coordinate.
- Added the patent power signs to the four functional-group diagram labels.
- Identified S-NSL5 and S-NBH55 as source-precision catalog equivalents for patent coordinates 522598 and 800299. The production suppliers remain unspecified, and the bonded resin remains unmatched.

### Motion

- Rechecked wide/middle/tele order and all published 300 mm focus rows. G1b moves objectward at every station: D2 decreases and D7 increases by the same amount. The infinity and close arrays remain correctly ordered `[infinity, close]`.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno` | `[4.001065, 4.596028, 5.73828]` | `[3.98, 4.6, 5.74]` | Table 6 (表6), PDF p. 14, ¶0056, infinity rows (無限遠物体合焦時): FNO. 3.98 / 4.60 / 5.74 in the short, middle, and long focal-length columns. |
| `apertureDesign` | 4.001065 | 3.98 | Table 6, PDF p. 14, FNO. in the short-focal-length-end column. |
| `fstopSeries` first entry | 4 | 3.98 | Follows the wide `nominalFno`; the entry stood for the wide-open value, and the remaining entries are as they were. |

The earlier `nominalFno` values were the paraxial f-numbers of the `STO` row's 5.31736 mm semi-diameter, not patent figures: the wide value sat 0.53 % above the printed 3.98 and outside its print rounding, while the middle and tele values rounded to the printed 4.60 and 5.74.

### Stop model

- `zoomApertureModel: "fixed-iris"` is kept. Traced with a real marginal ray, the printed 3.98 / 4.60 / 5.74 need stop radii of 5.4161 / 5.4119 / 5.4144 mm, a 0.08 % spread, and one radius between 5.4097 and 5.4178 mm reproduces all three within print rounding. The paraxial radii, 5.3455 / 5.3128 / 5.3158 mm, do not share one radius (0.38 % gap).
- The fixed iris is the radius traced from the wide value, 5.4161 mm. It gives f/3.980 / f/4.596 / f/5.738 at wide, middle, and tele; stated against traced is -0.0 % / -0.1 % / -0.0 %, and the iris is the limiting aperture at all three stations. No rim clips the axial beam.
- The patent says nothing about the stop diameter. Table 5 (PDF p. 14) lists surface 13 (絞) with R = ∞ and d = 1.500 only, and no table carries an effective-diameter column.

### Confirmed unchanged

- Example identity: all 21 surface rows of Table 5 (PDF p. 14) and the Table 7 coefficients for surface 5 (PDF p. 15) match the file.
- Focal lengths: Table 6 prints f = 18.500 / 31.893 / 48.601; the prescription computes 18.5006 / 31.8946 / 48.6052 mm.
- Variable gaps: d2, d7, d12, d16, and fB match Table 6 at all three stations, for both the infinity and the 300 mm rows (PDF pp. 14–15).
- Stop position: 1.500 mm ahead of surface 14, between d12 and G3.
- No semi-diameter was changed, including the `STO` row's 5.31736 mm.

### Open

- The `STO` row's authored 5.31736 mm is the mean of six paraxial radii from the infinity and 300 mm FNO rows and is about 1.8 % smaller than the 5.4161 mm iris the runtime traces from `nominalFno`. Whether to move it to the real-ray radius is left to the maintainer.
- The 300 mm FNO row (3.99 / 4.61 / 5.76, PDF p. 14) was not tested against the single radius; the iris check covers the infinity stations only.
