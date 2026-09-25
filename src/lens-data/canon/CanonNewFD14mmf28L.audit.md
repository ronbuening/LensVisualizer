# Audit Log - CANON NEW FD 14mm f/2.8 L

Patent: JP S57-64716 A, sole numerical example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPA 1982064716-000000.pdf`. The patent publishes the ultra-wide prescription and Fig. 1 cross-section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a large retrofocus front group tapering through multiple negative menisci toward a tight stop region, followed by compact post-stop doublets and a modest final field group.
- Stored SDs follow that envelope: S1 begins at 27.5 mm, the front group steps down toward the stop at 7.5-8 mm, and the rear groups re-expand only to about 10.5 mm.
- No SD values changed. Current values remain inferred from marginal/chief-ray envelopes and constrained by edge thickness, signed cross-gap sag, rim slope, and element SD-ratio checks.

## 2026-09-24 — Semi-diameters raised to the traced format corner

The patent states 画角 114° (p. 2) and its aberration plots (第2図, p. 4) run to W = 57°, which the data declares as
`maxTraceFieldDeg`; the unclipped chief ray at 57° reaches 21.22 mm (98% of the 21.65 mm corner, reached at 57.5°). The
inferred rims clipped the real chief ray (solved through the stop centre) at surface 4 from 49.5° (15.94 mm, 74% of the
corner), and surfaces 1, 3A and 4 blocked the solve from about 52°. At 57° the chief ray crosses surface 1 at 31.08, 2
at 23.80, 3A at 21.87, 4 at 19.47 and 5 at 17.16 mm; every other rim already clears it. New values are those heights
plus ~0.5 mm, with L2 scaled as one element from surface 4's floor; L1 and L3 are strong menisci and keep their own
floors (surface 6, 14.0 mm, already clears its 13.20 mm chief ray and sits at its 0.9|R| cap). 第1図 (p. 4), scaled on the
84.21 mm surface 1–24 track, draws L1 ≈ 33 mm and L2 ≈ 24 mm, consistent with the new values; it was a cross-check only.
Surface 2, the steep rear of the L1 meniscus, needs 23.80 mm, past the default 64.2° rim-slope limit (sd ≤ 0.9|R| =
23.05 mm on R 25.616). As on the EF 11-24mm f/4L, the file raises `maxRimAngleDeg` to 72, and surface 2 takes its floor
+ ~0.5 mm, 24.3 mm, a 71.6° rim. The chief ray now solves at the declared 57° and clears every rim there and at the
57.5° corner.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 27.5 | 31.6 | chief ray 31.08 mm at 57° + clearance (第1図 ≈ 33) |
| 2 | 22.8 | 24.3 | chief ray 23.80 mm + clearance; 71.6° rim under the lens-level 72° limit |
| 3A | 18.2 | 24.0 | L2 scaled with surface 4 (chief ray 21.87 mm; 第1図 ≈ 24); the asphere's slope rises monotonically to 28.8 mm (54.4° at the rim) |
| 4 | 15.2 | 20.0 | chief ray 19.47 mm + clearance |
| 5 | 15.0 | 17.7 | chief ray 17.16 mm + clearance; surface 6 unchanged |

The validator accepts the new values and the image-circle floor still reports nothing undersized. The field-coverage
audit reads 98%: the declared 57° field ends at 21.22 mm, and barrel distortion puts the corner at 57.5°. The analysis
note quotes no semi-diameter values, so it is unchanged.
