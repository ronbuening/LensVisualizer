# Audit Log — Pentax HD D FA 21mm f/2.4 ED Limited

Patent: JP 2022-117775 A, Numerical Example 1

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/JP2022117775A.pdf`.
- Reviewed the first drawing sheet; it confirms the broad front group, stop region, rear ED/asphere region, and cover-glass omission convention used in the data file.

### Disposition

- Glass labels remain unchanged. The L2A `Unmatched (BAL/SK moldable crown...)` label remains unresolved because the stored nd = 1.58080, vd = 59.2 coordinate is close to but not identical with public S-BAL42/M-BACD12-type rows.
- APD/high-index status remains unchanged; the ED-role elements and the very high-index elements are consistent with the patent nd/vd values, but no new partial-dispersion constants were found.
- The patent does not publish clear-aperture or semi-diameter values. Existing conservative SD estimates remain unchanged after drawing review.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 and Table 3 on PDF page 15 at 160 dpi: surface 20 d = 38.340; surfaces 21–22 are one parallel
  plate CG, 1.500 mm, nd 1.51633, νd 64.1; surface 22 d is printed as "-". Table 3 BF 40.33 and L 115.34 are
  air-equivalent, giving 40.33 − 38.340 − 1.500/1.51633 = 1.00 mm from the plate to the image (Examples 2, 3, 4 and 9
  give the same 1.00 mm). The old header's arithmetic omitted that 1.00 mm; the stored 40.3293 already included it.
- Surface 20A now stores 38.340 mm, with `rearPlates` CG (S-BSL7, exact OHARA match) and gapAfter 1.00 mm. Paraxial
  check against the previous data: EFL identical; defocus changes by 0.00007 mm (rounding of the derived 1.00 mm gap).
  Physical track grows by 0.511 mm to 115.85 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 3 (PDF p. 15) prints w = 46.1° and Y = 21.64 mm for Example 1, the full-frame corner (21.65 mm). The L2A rear rim
(4A, 9.45 mm) clipped the real chief ray (solved through the stop centre) from 38.5° (16.84 mm, 78% of the corner), and
past 45.1° the chief-ray solve failed. At the corner (46.14°) the chief ray needs 3A ≥ 13.69 and 4A ≥ 11.49 mm, and
every other rim is clear. Fig. 1 (PDF p. 27, rendered at 600 dpi with the axis vertical; r1 to CG 113.35 mm = 2056.5
px, 0.0551 mm/px) draws L2A's object-side surface 3A ending at the vertical flange edge 288 px ≈ 15.9 mm from the axis
on both sides, and the image-side surface 4A ending at the flat top about 242 px ≈ 13.3 mm out: 37% and 41% above the
stored values, which the 2026-06-23 drawing review had left unchanged. L2A takes the drawn values, the larger of figure
and floor. Both surfaces are paraboloid-based aspheres (K = −1), so no conic domain limit applies; their slopes peak
near 13.9 mm (3A) and 12.4 mm (4A) and then fall, but neither turns over within 1.2× the new rims (scans to 19.08 and
15.96 mm).

| Surface | Before | After | Justification |
|---|---|---|---|
| 3A | 11.6 | 15.9 | Fig. 1 L2A object-side rim ≈ 15.9 mm; corner chief ray 13.69 mm |
| 4A | 9.45 | 13.3 | Fig. 1 L2A image-side rim ≈ 13.3 mm; corner chief ray 11.49 mm |

The validator accepts the values, the image-circle floor still reports nothing undersized, and the traced edge now
reaches the corner (46.1° → 21.65 mm, 100%) with every rim clear. The polynomial departures at the new rims are
−1.211 mm (3A) and −0.840 mm (4A), were −0.305 and −0.121 mm; `PentaxHDDFA21mmf24Limited.analysis.md` quotes them and
was updated.
