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

## 2026-09-23 — Track-length discrepancy resolved (patent OAL definition)

- Re-read Tables 7 and 9 from the Google Patents text of US 2025/0231383 A1 (no local PDF). The data file's radii,
  thicknesses, indices and variable gaps match embodiment 100-3; this is the right table and embodiment. No data change.
- Table 9 OAL 157.349 / 160.886 / 175.144 mm equals Σd from surface 1 to surface 41 (the last lens vertex) exactly. It
  leaves out D41, the 2.5 mm plate and the 0.5 mm of air, although the text defines OAL as first lens to IMG. Embodiments
  100-1, 100-2 and 100-4 follow the same pattern, within 0.002 mm (Tables 1/3, 4/6, 10/12).
- Physical track to IMG (derived, with `rearPlates` expanded): 172.951 / 191.650 / 213.518 mm, focus-invariant because
  D31 + D33 is constant.
- The analysis had added the OAL row to the MOD D0 values and reported sensor-to-subject distances of 0.314 / 0.496 /
  0.810 m. With the physical track the distances are 0.330 / 0.527 / 0.849 m, which match the production 0.33 m / 0.85 m
  (FE) at wide and tele. Corrected in the analysis; the OAL definition is noted in the header.
