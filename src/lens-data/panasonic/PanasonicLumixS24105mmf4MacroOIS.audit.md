# PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S. Audit

## 2026-07-31 — Patent-figure SD, glass, and identity pass

**Source:** JP 2020-118738 A, Numerical Example 1, Figure 1.

### Semi-diameters

- Compared the wide-state section with the clean lens rims in Figure 1 at 600 dpi and checked the full-frame
  image-circle floor.
- Retained the submitted SDs. The trustworthy measurements do not show a greater-than-25% mismatch; several apparent
  outliers are neighboring rims or leader-line intersections rather than independent lens edges.

### Glass

- Reviewed all 16 glass elements. Fifteen already resolve to coefficient-backed curves.
- Retained L8 (`1.6882 / 31.1`) as an explicit unmatched M-FD80 / S-TIM28 / J-SF8-class row. Its patent coordinate does
  not uniquely establish one catalog curve, so forcing the nearest name would overstate the available evidence.

### Identity

- Confirmed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S.` is correct and was retained.
- Romanized the inventor names and normalized the assignee to the existing
  `Panasonic Intellectual Property Management Co., Ltd.` catalog identity.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent d33 (25.113494 / 44.081494 / 49.713494 mm) with Numerical Example 1's physical rear stack
  (Table 1 surfaces 34–35 on PDF p. 20, Table 3A variable gaps on p. 21, confirmed on the rendered pages): d33 =
  21.029 / 39.997 / 45.629 mm, then `rearPlates` P 2.1 mm, nd 1.51680, νd 64.2 (N-BK7), and 2.7 mm to the image plane.
  The var label now reads D33.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst difference 1e-10 mm) at every
  zoom station and focus keyframe, because the legacy fold used the exact 2.1 / 1.5168 + 2.7 mm. Physical track grows
  by 0.715506 mm and now equals the patent's printed total lengths of 136.501 / 148.530 / 180.790 mm; conditions (1)
  and (2) re-evaluate to 0.182034 and 0.142087 (patent 0.182 / 0.142).
- `closeFocusM` stays at the source-quoted 0.300 m. The reconstructed close-focus G4 gaps were solved on the earlier
  air-equivalent track and were not re-solved, so the 300 mm object now sits 0.715506 mm closer to the front vertex.

## 2026-09-23 — Close-focus gaps re-solved on the physical track

- Re-solved the reconstructed G4 close-focus gaps so the 300 mm object is measured from the stored image plane on the
  physical track through plate P. D27 close 3.394493514 / 7.221740926 / 15.469690819 → 3.400517907 / 7.239460293 /
  15.52269395 mm; D29 close 14.530506486 / 9.953259074 / 15.970309181 → 14.524482093 / 9.935539707 / 15.91730605 mm.
  G4 travel is now 1.600518 / 4.619460 / 13.722694 mm. These remain reconstructions, not patent values.
- Method: paraxial y–u trace of the `expandRearPlates` surfaces from an axial object 300 mm before the image plane,
  bisecting G4 travel with d27 + d29 conserved and the infinity gaps untouched. The old gaps left that object's paraxial
  image 0.012 / 0.048 / 0.174 mm off the image plane (wide / middle / tele).
- Close-focus defocus is now at most 4.4e-10 mm; infinity EFL (25.002987 / 50.142962 / 100.568809 mm) and the infinity
  state are unchanged. Tele magnification is 0.494313× (was 0.492597×) and condition (5) 0.136451. Surface and
  image-circle audits pass.
