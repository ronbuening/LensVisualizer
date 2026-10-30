# Nikon AF Nikkor 20mm f/2.8D Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US4690517.pdf`, Table 1 / First Embodiment.

### Prescription And Scaling

- The data file remains aligned to Table 1: normalized `f = 100`, `F-number = 2.8`, and `2ω = 94°`.
- The 0.2 production scaling is appropriate for the 20 mm class lens; the stored radii, gaps, and back focus are the patent values divided by 5.
- The patent places the stop in the L6-L7 airspace but does not tabulate a stop coordinate. The current even split around `STO` remains a reasonable diagram/tracing convention.

### Glass And APD

- Rechecked the patent glass rows against the stored `nd` / `νd` values. No transcription changes were found.
- `J-BAF3 (HIKARI / Nikon)` for L6 remains the one generated Sellmeier-coverage gap. It is a named class label, not a six-digit unresolved patent code, and this pass did not find a coefficient-backed public Sellmeier source to replace it.
- The patent publishes `nd` and Abbe number only. It does not publish `nC`, `nF`, `ng`, `θgF`, `Pg,F`, `dPgF`, ED, fluorite, or anomalous-partial-dispersion rows, so `apd: false` remains appropriate.
- High-index glass descriptions remain descriptive: L2/L7b dense flints and L4b/L7a lanthanum-flint-class members are supported by their patent `nd` values, but no new exact catalog replacements were verified.

### Semi-Diameters

- US 4,690,517 does not publish per-surface clear apertures or effective diameters for Table 1.
- Current SDs therefore remain visualization estimates derived from pupil/ray envelopes, edge-thickness sanity, adjacent-surface proportions, and cross-gap sag clearance.
- The SD progression is rational against the patent drawing: large front clear aperture for the 94° retrofocus front group, a narrowed stop region, and a modest re-expansion through the rear positive relay.

## 2026-07-30 Hikari Catalog Recovery

- Added Hikari's official 2023 J-BAF3 power-series row for L6. The catalog publishes nd = 1.582670,
  νd = 46.48, and d-code 583465, matching the patent coordinate.
- Kept the existing lens annotation and analysis prose; they now resolve to the coefficient-backed row.

## 2026-09-24 — Semi-diameters raised to the traced format corner

US 4,690,517 Table 1 (First Embodiment, cols. 5–6, PDF p. 6) prints f = 100, F 2.8 and an angle of view 2ω = 94°
(ω = 47°, f·tanω = 21.45 mm after the ×0.2 scaling), matching the production lens's 94° FX field, so the design
covers the format corner. The estimated front rims clipped the real chief ray (solved through the stop centre) from
43.95°, leaving the analysis field at 86% of the 21.65 mm corner. The traced corner chief ray (47.86°) needs surface
2 ≥ 17.75, surface 3 ≥ 13.31, surface 4 ≥ 9.43 and surface 5 ≥ 8.92 mm; values are floor + ~0.5 mm rounded up, with L1
scaled as one element (surface 1 carries that chief ray at 19.40 mm). No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 19.6 | 20.9 | L1 scaled with surface 2 (×1.064); corner chief ray 19.40 mm |
| 2 | 17.2 | 18.3 | corner chief ray 17.75 mm + clearance |
| 3 | 11.7 | 13.9 | corner chief ray 13.31 mm + clearance; surface 4 is set by its own need |
| 4 | 9.4 | 9.7 | corner chief ray 9.43 mm; capped by the 64.2° rim-slope limit (reached at 9.75 mm) |
| 5 | 8.9 | 9.5 | corner chief ray 8.92 mm + clearance; surface 6 (strong-meniscus rear, chief ray 7.41 mm) unchanged |

The validator accepts the new values, the traced edge now reaches 21.65 mm at 47.86° with every rim clear (100%), and
the image-circle floor still reports nothing undersized. The lens is all-spherical. The analysis's maximum sd/|R|
moved from 0.868 to 0.896 (surface 4); its thinnest edge (L8, 1.006 mm) and largest cross-gap intrusion (surfaces
17→18, 0.834) are unchanged.

## 2026-10-29 — F-mount shape and fresh glass review

Re-read local `patents/US4690517.pdf`, Fig.1 on PDF p2 and First Embodiment/Table1 with its d-line definition on p6. Native300 ppi figure scale is about 14.9 px/mm from the ~711 px S1–S21 vertex span /47.7204 mm. Both halves show vertical exposed seats on S4 and S6. Preserved their 9.7/7.8 mm clear caps and added opaque extensions to 13.9/9.5 mm, matching the opposite faces. Source q≈.66/.82 at edge radii≈225/150 native pixels gives one-pixel bands±.0074/±.0121. Adopted cap/rim ratios.698/.821 retain the previously established field-clearance caps. S2 instead has continuous curvature, so raised its clear SD18.3→20.9 mm to the common L1 rim; no opaque break is invented there. Other source curves, ray crossings, brackets and leaders do not justify further cap-end lands.

Freshly verified all 12 stored media (eight distinct nd/νd pairs) against Table1, retaining the native d-line convention and coordinates. All12 resolve to compatible catalog curves, including the recovered official J-BAF3 row. Qualified L6's label explicitly as a Hikari catalog spectral proxy with unproven production supplier. The source gives no named glass, C/F/g indices or partial-dispersion measurements; no new spectral or APD claim is inferred.

Surface, image-circle and infinity aperture checks pass; the full nominal f/2.8 axial beam clears. Nine actual renderer states are finite with zero hidden trim. Source R/d, inferred stop split, focus behavior and check tolerances are unchanged.
