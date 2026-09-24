# Canon EF 300mm f/2.8L IS USM — Audit Log

Patent: US 6,115,188 A, Numerical Example 1

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent R27 gap (68.641078902 mm) with the patent's rear stack, read from the rendered Numerical
  Example 1 continuation (PDF page 69, printed column 13): D27 = 8.00 mm, filter FL R28–R29 2.00 mm, nd 1.516330,
  νd 64.1, D29 = 0.00. D29 is a placeholder, not a back focus, so the 59.3221048 mm filter-to-image air is derived as
  68.641078902 − 8.00 − 2.00/1.51633 to keep the file's paraxial image plane. Labeled S-BSL7 (OHARA), a
  coordinate-compatible catalog match (catalog νd 64.14).
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and the reconstructed 2.5 m
  keyframe (worst difference 6×10⁻¹¹ mm). Physical track grows by 0.681 mm to 268.002 mm; the L2 close-focus travel
  was solved on the old air-equivalent track, so the same object now sits 2.500681 m from the image plane and
  `closeFocusM` keeps Canon's marketed 2.5 m.
