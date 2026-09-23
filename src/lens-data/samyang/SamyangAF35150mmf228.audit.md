# Audit Log - Samyang AF 35-150mm f/2-2.8 FE / L

Patent: US 2025/0231383 A1, embodiment 100-3

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the BFE-in-air final gap (14.749 / 29.911 / 37.521 mm) with the physical rear stack, read from the Google
  Patents text of US 2025/0231383 A1 (no local PDF): Table 9 D41 = 12.602 / 27.764 / 35.374 mm (fixed during focus),
  then Table 7 surface 42 plate 2.5 mm, nd 1.5168, νd 64.1973, and surfaces 43–44 of 0.5031 and −0.0031 mm to IMG,
  stored as one 0.5 mm `gapAfterMm`. The patent prints no plate designation, so `label` is omitted.
- Glass N-BK7 (Schott 1.51680 / 64.17; `resolveCompatibleGlass` passes). The `varLabels` entry for 41A now reads
  D41 instead of BF.
- Paraxial check against the previous data: EFL identical at all three zoom stations; defocus changes by 0.0012 mm at
  every zoom and focus state (rounding in the patent's printed BFE-in-air row). Physical track grows by 0.853 mm
  (predicted 2.5 × (1 − 1/1.5168) = 0.852 mm).
