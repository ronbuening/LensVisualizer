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

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate FL moved out of `rearPlates` into the drawn prescription: surfaces 28–29 and element
  16 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 22 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (20.90 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.
