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
