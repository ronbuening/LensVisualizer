# Audit Log - Laowa 15mm f/2 Zero-D

Patent: US 2018/0149842 A1, Example 1

## 2026-06-24 - Full local patent audit

### Phase 1 - Glass, APD, and high-index status

- Reopened local `patents/US20180149842A1.pdf` and checked Example 1 against the data file. The patent table text layer is usable for the prescription values.
- Stored glass nd/vd rows match the patent table. No catalog relabels were made.
- Updated L5, L9, and L11 from `apd: false` to `apd: "inferred"` with a note that the 1.49700 / 81.61 ED assignment is a fluorophosphate-class inference only. The patent publishes no partial-dispersion values, so no dPgF or line-index constants were added.
- The inferred APD marking does not change the lens claim to APO; it records the ED glass class used by the chromatic correction strategy.

### Phase 2 - Prescription and SD check

- Checked Example 1 at f = 15.5 mm, Fno = 2.06, half-field = 54.7 deg. Stored radii, thicknesses, nd/vd rows, double-sided aspheres, and the published infinity / 0.020x focus interval match the patent source.
- Confirmed the intentional modeling reductions: the patent image-side cover plate is excluded from the surface list and folded into the air-equivalent back-focus spacing; the zero-thickness contact around the front fixed group is kept condensed in the data file.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry. The large front meniscus, reduced waist through the ultra-wide front group, stop size, and moderate rear-group opening are visually rational for the 109.4 deg full-field patent design. No SD values were changed.

### Phase 4 - Analysis sync

- Updated `Laowa15mmf2ZeroD.analysis.md` to state that the three 1.49700 / 81.61 ED elements are marked as inferred APD while the patent itself provides only nd/vd.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 in local `patents/US20180149842A1.pdf` (table on PDF pp. 7–8, continued variable-gap table rendered on
  p. 8): surfaces 24–25 are an unlabeled plane-parallel plate, 2.0000 mm, nd 1.51680, νd 64.20; D(23) = 15.6837 /
  15.9816 mm (infinity / 0.020x); D(25) = 1.0000 mm in both states.
- Surface 23A and its `var` row now store the physical D(23) values; `rearPlates` carries the plate as N-BK7 (exact
  1.51680 / 64.2 catalog match) with gapAfter 1.0 mm. Paraxial check against the previous folded data: EFL identical
  and defocus unchanged at both focus keyframes (the old 18.00227 / 18.30017 values were exact folds).
- Physical track grows by 0.681 mm, the plate's t(1 − 1/n).

## 2026-09-24 — Semi-diameters raised to the traced format corner

Patent Example 1 prints f = 15.5, Fno = 2.06 and half angle of view ω = 54.7° (¶0033, PDF p. 7), and FIG. 2 (sheet 2,
PDF p. 3) labels its image-height axis 21.63 mm, 99.9% of the full-frame corner (21.65 mm), so the design covers the
format. The estimated rear rim of L12 (surface 23A, 9.0 mm) clipped the real chief ray (solved through the stop centre)
from 50.7°, leaving the analysis field at 90% of the corner. The traced corner chief ray (53.44°) needs surface
23A ≥ 9.53 mm; the value is floor + ~0.5 mm. Surface 22A, L12's front, was not scaled with it: the corner chief ray
crosses it at 8.11 mm, inside its 9.0 mm rim, and its conic (K = 1.1397) ends at 9.61 mm, so the validator rejects the
scaled 10.1 mm (conic height and rim slope). The next-tightest rims at the corner, 3A (9.76 mm vs 10.0) and 4A
(8.07 mm vs 8.3), clear and are unchanged. Scanned to 12.1 mm (1.2× the new sd), 23A's slope never changes sign; its
departure at the new rim is 1.08 mm. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 23A | 9.0 | 10.1 | corner chief ray 9.53 mm + clearance; aspheric, no turnover within 12.1 mm |

The validator accepts the new value, the traced edge now reaches 21.65 mm at 53.4° with every rim clear (100%), and the
image-circle floor still reports nothing undersized. The analysis quotes no semi-diameters, rim angles or rim
departures, so it needs no change.
