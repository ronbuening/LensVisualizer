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
