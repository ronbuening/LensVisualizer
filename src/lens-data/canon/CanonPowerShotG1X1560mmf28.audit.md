# Audit Log - CANON POWERSHOT G1 X 15.1-60.4mm f/2.8-5.8

Patent: US 2013/0176385 A1, Numerical Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20130176385A1.pdf`. The patent publishes the Example 4 prescription and Fig. 7 cross-section, but no clear-aperture or semi-diameter table.
- Fig. 7 shows a large positive first unit, a smaller negative second unit, a compact third unit around the stop/flare stop, and a larger single rear-focus fourth unit.
- Stored SDs follow that silhouette: the first unit starts at 20.0 mm and settles around 16 mm, the variator/third-unit surfaces remain in the 4.3-12.9 mm range around the stop, and the rear-focus element re-expands to about 13 mm.
- No SD values changed. Current values remain inferred from zoom-state marginal/chief-ray envelopes and constrained by edge thickness, rim slope, element SD ratio, and cross-gap sag clearance.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent BF fold with Numerical Example 4's physical rear stack (p. 10 surface table, p. 11
  variable data; digits confirmed on the rendered pages): d22 = 6.82 / 5.36 mm at wide / middle, then block G as
  `rearPlates` (1.56 mm, nd 1.51633, νd 64.1, S-BSL7 class) and 1.56 mm air to the image plane.
- At telephoto, printed d22 5.00 and printed BF 7.58 disagree by 0.0088 mm through rounding (5.00 + 1.56/1.51633 + 1.56
  = 7.589). The file keeps the printed-BF image plane with d22 = 4.9912 mm; both printed values fit a true d22 near
  4.995 mm, and the independent paraxial BFD (7.576) sits closer to 7.58.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.0012 mm at wide and middle (rounding in
  the old 9.41 / 7.95 BF) and 0 at telephoto. Physical track grows by 1.56 × (1 − 1/1.51633) = 0.531 mm.
