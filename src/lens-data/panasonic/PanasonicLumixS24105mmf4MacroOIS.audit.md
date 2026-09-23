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
