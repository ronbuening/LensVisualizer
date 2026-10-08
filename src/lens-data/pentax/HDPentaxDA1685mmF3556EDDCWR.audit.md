# Audit Log — HD PENTAX-DA 16-85mm f/3.5-5.6 ED DC WR

Patent: JP 2016-114800 A, Numerical Example 1, Figure 1 and Tables 1–4

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L13, 4–5 | 28.0 mm | 24.0 mm | Figure 1 narrows the third front element relative to L11/L12; the previous equal-height front block hid that taper. |
| Hybrid L21, 6A–8 | 9.75 mm | 11.0 mm | Figure 1 draws L21 larger than the following G2 elements. The figure suggests a slightly larger rim, but surface 8's 12.493 mm radius makes 11.0 mm the validator-safe limit. |
| L41, 24–25A | 12.0 mm | 10.0 mm | The rear group begins smaller than the previous uniform envelope. |
| L42/L43, 26–28 | 12.0 mm | 10.5 mm | The central rear pair follows the gradual Figure 1 flare rather than a constant 12 mm block. |
| L44, 29–30 | 12.75 mm | 11.0 mm | The final element remains the largest member of G4 without exceeding the figure silhouette. |

All revised asphere diagnostics were recomputed at the new modeled apertures. The stop and prescription dimensions remain unchanged.

### Labels and glass

- Romanized inventor 能村 洋一 as Yoichi Nomura and normalized the assignee spelling.
- Corrected the displayed model name to Ricoh's `HD PENTAX-DA` styling.
- Added patent APD tags to L41 and L44, which the patent explicitly calls anomalous-dispersion materials; Ricoh's production construction diagram independently marks the corresponding final L44 position as the product's one ED element. No line indices, dPgF, or production supplier were inferred.
- All 16 physical glass elements retain coordinate-compatible Sellmeier coverage. The explicitly synthetic L21 resin remains unmatched because the patent does not identify its chemistry.

### Motion

- Rechecked the wide/middle/tele sequence and four zoom spacings. The 16.48 / 35.00 / 82.45 mm ordering is correct; all four functional groups move objectward overall, while G2 retains the patent's small imageward wide-to-mid reversal before moving objectward to tele. No close-focus motion is authored because the source publishes none.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 2 (PDF p. 10) prints Y = 14.24 mm at every zoom state (half field 42.1° / 21.8° / 9.6°), just past the APS-C
corner (14.175 mm). At wide, the L21 resin layer and its glass junction (surfaces 6A/7, both 11.0 mm) clipped the real
chief ray (solved through the stop centre) from 37.8° (12.26 mm, 86% of the corner); middle and tele already reached
the corner. At the patent Y (42.12°) the wide chief ray needs 6A ≥ 12.59 and 7 ≥ 12.50 mm, and surface 8 only 9.47 mm.
Both clipping surfaces take floor + ~0.5 mm and stay equal, because the resin layer cannot overhang the glass it sits
on. Surface 8 stays at 11.0 mm: the 2026-08-14 entry capped it at its 12.493 mm radius, and L21 is a strong meniscus,
so it was not scaled with surface 7. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 6A | 11.0 | 13.1 | wide chief ray to Y 12.59 mm + clearance; scan to 15.72 mm shows no turnover |
| 7 | 11.0 | 13.1 | wide chief ray to Y 12.50 mm; kept equal to the resin layer it carries |

The validator accepts the values, the image-circle floor still reports nothing undersized, and all three stations now
reach the corner (42.0° / 21.7° / 9.6° → 14.17–14.18 mm, 100%) with every rim clear. The resin layer's rim thickness
falls to 0.0994 mm at 13.1 mm (was 0.1766 mm at 11.0 mm), and the 6A rim departure is now +332.2 µm (was +184.2 µm).
`HDPentaxDA1685mmF3556EDDCWR.analysis.md` quotes both and was updated; the same sentence's maximum rim slope, still
51.301° from the pre-2026-08-14 rims, now reads the stored 61.702° (surface 8), and a sentence notes that the chief
ray is no longer clipped.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

The file keeps `zoomApertureModel: "fixed-iris"`: one wide-open iris radius, sized by a real marginal ray from the wide
`nominalFno`, held at every station. The patent prints FNO 3.6 / 4.4 / 5.8 to one decimal and no stop diameter. By real
marginal ray those three values need 6.9734 / 7.0953 / 7.0128 mm, and a single radius gives all three within print
rounding anywhere from 7.0156 to 7.0716 mm (midpoint 7.0436 mm). The earlier values were the paraxial f-numbers of a
6.95 mm stop; the engine sized the iris from the first of them by real ray, 7.0025 mm, which is 0.013 mm below that
interval and traced f/4.457 at 35 mm, rounding to 4.5 against the printed 4.4. The wide value is set so the iris sits
at the interval midpoint, and the other two stations state what that iris gives.

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno[0]` (16.48 mm) | 3.585229851 | 3.5647 | Table 2 (PDF p. 10), FNO. row, short-focal-length column: 3.6. f/3.5647 traces a 7.0435 mm iris, the midpoint of the real-ray interval consistent with the printed 3.6 / 4.4 / 5.8 |
| `nominalFno[1]` (35 mm) | 4.435970318 | 4.432 | Table 2 (PDF p. 10), FNO. row, intermediate column: 4.4. f-number the 7.0435 mm iris gives at this station |
| `nominalFno[2]` (82.45 mm) | 5.763925078 | 5.776 | Table 2 (PDF p. 10), FNO. row, long-focal-length column: 5.8. f-number the 7.0435 mm iris gives at this station |
| `specs[2]` | `modeled f/3.585-5.764` | `modeled f/3.565-5.776` | Follows `nominalFno` |

- The wide-open iris the engine traces is 7.0435 mm (was 7.0025 mm). With it the three stations trace on axis at
  f/3.565 / f/4.432 / f/5.776, each within 0.02 % of its stated value and each limited by the iris; no rim clips the
  axial beam.
- Station 2 lies on a rounding edge: the iris gives f/4.4315, stored as 4.432 (0.011 % from the traced value).
- Example identity confirmed against Table 1 (PDF pp. 9–10): all 30 rows of R, d, N(d) and ν(d) match the file,
  including 15 (−65.048 / d15), 16 stop (∞ / 0.800, no diameter) and 17 (30.478 / 4.950 / 1.51633 / 64.1).
- Focal lengths confirmed: Table 2 prints f 16.48 / 35.00 / 82.45; the prescription computes 16.4801 / 34.9988 /
  82.4420 mm.
- Variable gaps and back focus confirmed against Table 2: d5 2.523 / 22.037 / 44.543, d15 25.030 / 10.550 / 1.825,
  d23 7.451 / 3.240 / 1.500, fB 38.99 / 57.54 / 83.47.
- Stop position confirmed: ¶0039 (PDF p. 9) places stop S between G2 and G3, directly in front of G3, moving as one
  with G3; the file's `STO` row sits between surfaces 15 and 17 with the fixed 0.800 mm gap behind it.
- No semi-diameter changed. The `STO` row keeps its authored 6.95 mm, which the builder replaces with the traced
  radius; the header and the analysis note state the 7.0435 mm iris.
- Open: the patent gives no stop diameter, so the midpoint of the rounding interval is a modeling choice, not a source
  value. Any radius in 7.0156–7.0716 mm is equally consistent with Table 2.
- `apertureDesign` is not set. `nominalFno[0]` 3.5647 is 0.98 % faster than the printed 3.6: inside the one-decimal
  print band (3.55–3.65), outside the 0.5 % the design-f-number sweep treats as the same aperture.
