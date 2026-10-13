# SamyangAF18mmf28 audit

## 2026-09-23 — Rear plate modeled as `rearPlates`

- No local PDF of WO 2021/246545 A1; read the same publication's text on Google Patents. Example 1 Table 1: surface 18
  d = 22.444; surfaces 19–20 "Filter", 2.5 mm, nd 1.5168, νd 64.1973; surface 20 → 21 prints 2.5 mm. Table 3 gives
  in-air BF 24.59 mm and OAL 70.7079 mm (constant over focus); Table 16 gives f_Back 25.444 mm. The printed 2.5 mm
  trailing row conflicts with both Table 3 and Table 16, which imply about 0.5 mm. The trailing gap is therefore
  derived, not printed: 24.59 − 22.444 − 2.5/1.5168 = 0.498 mm, which keeps the previous image plane.
- Surface 18 now stores 22.444 mm. `rearPlates` holds one unlabeled plate (the patent prints no designation), 2.5 mm,
  N-BK7 (1.5168 / 64.1973 resolves to N-BK7), gapAfter 0.498 mm. Paraxial check against the previous data: EFL
  identical; defocus changes by 0.0002 mm at infinity and close focus (rounding of the derived 0.498).
- Physical track grows by 0.852 mm to 71.206 mm. The distance from the front vertex to the plate's rear face is
  70.708 mm, which matches the printed OAL.
