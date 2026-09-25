# Audit Log — CANON EF 14mm f/2.8 L USM

Patent: JP H05-034592 A, Numerical Example 2

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 2 prints f = 14.2 mm (table p. 6) and w = 56.72° at the edge of the aberration plots (Fig. 5, p. 10), and the
data file declares that field as `maxTraceFieldDeg`. The estimated rims were sized for the 0.6 × 56.72° display field
and clipped the real chief ray (solved through the stop centre) at surface 1 from 41.8°, so the chief-ray solve failed
at the declared edge. At 56.72° the unclipped chief ray reaches 21.08 mm (97.4% of the 21.65 mm corner; barrel
distortion puts the corner itself at 57.4°) and crosses surfaces 1–9 and 23–25 above their rims. New values are those
chief-ray heights plus ~0.5 mm; L2 and L14 were scaled as elements, while the strong menisci L1, L3 and L4 and the
cemented partners of surfaces 9 and 23 keep their own floors. Fig. 4 (p. 7), scaled on the 128.36 mm track, draws
surface 1 ≈ 33, surface 2 ≈ 25, L2 ≈ 23.6, L3 ≈ 19.6 and L4 ≈ 14.7 mm, consistent with the new values; it was a
cross-check only. Surface 2, the steep rear of the L1 meniscus, needs 23.88 mm, past the default 64.2° rim-slope limit
(sd ≤ 0.9|R| = 23.39 mm on R 25.992). As on the EF 11-24mm f/4L, the file raises `maxRimAngleDeg` to 72, and surface 2
takes its floor + ~0.5 mm, 24.4 mm, a 69.8° rim that Fig. 4's ≈ 25 mm drawing supports. The chief ray now solves at the
declared 56.72° and clears every rim there and at the 57.4° corner.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 22.0 | 31.9 | chief ray 31.32 mm at 56.72° + clearance (Fig. 4 ≈ 33) |
| 2 | 20.5 | 24.4 | chief ray 23.88 mm + clearance; 69.8° rim under the lens-level 72° limit (Fig. 4 ≈ 25) |
| 3A | 16.0 | 22.5 | chief ray 21.92 mm + clearance; the asphere's slope rises monotonically to 27 mm (45.1° at the rim) |
| 4 | 15.0 | 21.1 | L2 scaled with surface 3A (chief ray 19.39 mm) |
| 5 | 13.8 | 18.4 | chief ray 17.86 mm + clearance |
| 6 | 12.5 | 14.6 | chief ray 14.06 mm + clearance; strong meniscus, not scaled |
| 7 | 11.0 | 13.6 | chief ray 13.01 mm + clearance |
| 8 | 10.2 | 12.0 | chief ray 11.43 mm + clearance; strong meniscus, not scaled |
| 9 | 9.2 | 9.8 | chief ray 9.21 mm + clearance; cemented junction 10 (chief ray 8.24 mm, sd 8.8) unchanged |
| 23 | 7.5 | 8.4 | chief ray 7.83 mm + clearance; cemented junction 22 unchanged |
| 24 | 8.0 | 9.9 | L14 scaled with surface 25 (chief ray 9.01 mm) |
| 25 | 8.2 | 10.1 | chief ray 9.55 mm + clearance |

The validator accepts the new values and the image-circle floor still reports nothing undersized. The field-coverage
audit reads 97%: the declared 56.72° field ends at 21.08 mm, and barrel distortion puts the corner at 57.4°. The
analysis note's surface 3A rim departure (now +2.794651 mm at 22.5 mm), its semi-diameter paragraph and its
geometry-check table were recomputed at the new values.
