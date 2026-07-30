# Audit Log - Nikon R-UW AF Zoom-Nikkor 20-35mm f/2.8

Patent: US 5,490,012, First Embodiment / Table 1

## 2026-07-30 - High-frequency glass-code review

- Rechecked the L2 patent coordinate at `nd = 1.79668`, `vd = 45.4`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.09`).
- Relabeled L2 as a J-LASF017 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no underwater prescription geometry, zoom spacing, stop, focus, or semi-diameter values changed.

## 2026-07-30 - `748523` family review

- Rechecked L9 at `nd = 1.74810`, `vd = 52.30`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. The closest
  plausible rows are around `1.741 / 52.6` or `1.755 / 52.3`, outside the accepted d-line residual.
- Retained the explicit unmatched `748523` annotation without a supplier or APD claim. No underwater prescription
  geometry, zoom spacing, stop, focus, or semi-diameter values changed.
