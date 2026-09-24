# Audit Log — RICOH LENS A16 24-85mm F3.5-5.5

Patent: US 2012/0307375 A1, Embodiment 3 / Figure 9.

## 2026-08-08 — Patent-figure SD, diagram-label, name, and glass audit

- Compared all three zoom-state sections with Figure 9 on patent page 8. The original rear Group IV/V envelopes were
  visibly undersized at the wide endpoint. Surfaces 17, 18A–19A, and 20–21 were enlarged from `6.92`, `8.84 / 8.96`,
  and `8.8 / 8.6 mm` to `9.0`, `10.8 / 10.8`, and `9.2 / 9.2 mm`, respectively. The revised taper follows L9–L11 in
  the figure without changing prescription power or spacing.
- The remaining front and center groups agree with Figure 9 within the drawing's measurement tolerance and were retained.
- Added L1–L11 source labels and corrected the title to Ricoh's official `RICOH LENS A16 24-85mm F3.5-5.5` product name;
  the GXR camera-unit relationship remains in the subtitle.
- Rechecked all six asphere markers, all rounded `νd` badges, and every glass assignment. All eleven elements use
  coefficient-backed catalog curves. Coordinate-class labels remain intentionally vendor-neutral where the patent does
  not name a supplier.

## 2026-09-23 — Rear plates modeled as `rearPlates`

- Replaced the air-equivalent surface-21 spacing with the physical stack from the Embodiment 3 table and Table 3 (PDF
  p. 38): E = 27.38221 / 39.66109 / 51.81615 mm, then plate F 0.70 mm nd 1.53770 νd 66.60, 1.50 mm air, and plate F
  0.70 mm nd 1.50000 νd 64.00. No catalog glass matches either plate (nearest S-FPM3 at νd 74.70 and BK4 at nd
  1.50048), so `glass` is omitted and both use the Abbe estimate.
- The patent prints no surface-25 distance to FP. The 0.500027 mm trailing gap is derived, not printed: it is the old
  wide-end value minus E minus Σt/n. The old per-station derived gaps were 0.500027 / 0.500056 / 0.500106 mm, so mid
  and tele E are stored as 39.661119 / 51.816229 (+0.00003 / +0.00008 mm) to keep the previous Gaussian image plane.
- Paraxial check against the previous data: EFL identical, and defocus unchanged within 5e-7 mm at every zoom and focus
  state. Physical track grows by 0.478 mm, Σt(1 − 1/n) for the two plates.
