# SamyangAF85mmf14 audit

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read WO 2021/085655 A1 Example 3 Table 5 and Table 6 from the Google Patents table images (no local PDF): surface 20
  d = 14.678; surfaces 21–22 are a filter plate, 2.5 mm, nd 1.5168, νd 64.2, then 0.5 mm air and D3 = 0.03 / 0.033 mm
  to the image; `in Air` BFD 16.854 / 17.045 mm; OAL 116 / 116.003 mm. The plate is stored as N-BK7 (1.51680 / 64.2
  class) with gapAfter 0.53 mm (0.5 + infinity D3).
- Surface 20 now stores 14.678 mm at infinity. The printed close-focus D3 (+0.003 mm) contradicts the `in Air` row
  (+0.191 mm), and the legacy file followed the `in Air` row, so the close-focus gap is 14.678 + 0.191 = 14.869 mm
  (derived, not printed) to keep that image plane.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.0022 mm at both focus positions
  (rounding between the printed 14.678 mm gap and the printed 16.854 mm `in Air` BFD). Physical track grows by 0.854 mm
  and now reaches 115.998 mm at infinity, matching Table 6 OAL = 116 mm.
