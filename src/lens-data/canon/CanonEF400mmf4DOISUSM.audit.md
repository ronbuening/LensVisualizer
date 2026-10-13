# Canon EF 400mm f/4 DO IS USM — Audit Log

Patent: US 2002/0015231 A1, Numerical Example 1

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-27 gap (65.507775640 mm) with the patent's image-side stack, read from the
  rendered Numerical Example 1 table (PDF page 17, ¶0104): d27 = 0.72 mm, plate r28–r29 2.20 mm, n16 1.51633,
  ν16 64.1. The table ends at r29 = ∞ with no d29 or back focus, so the 63.3369041 mm plate-to-image air is derived as
  65.507775640 − 0.72 − 2.20/1.51633 to keep the file's paraxial image plane. The patent prints no designation, so the
  plate carries no label; the 52 mm drop-in filter association stays a modeling inference. Labeled S-BSL7, a
  coordinate-compatible catalog match (catalog νd 64.14).
- Paraxial check against the previous data: EFL identical and defocus unchanged at the single infinity state (worst
  difference 2.7×10⁻⁸ mm, the rounding of the derived gap). Physical track grows by 2.20 × (1 − 1/1.51633) = 0.749 mm
  to 256.337 mm. `closeFocusM` keeps Canon's quoted 3.5 m; no focus motion is reconstructed.

## 2026-10-04 — Rear plate drawn as an element

- The image-side plate F moved out of `rearPlates` into the drawn prescription: surfaces 28–29 and element 16
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The patent prescription is computed with the
  plate in place and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 18.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (17.25 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.
