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

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.33 → 0.331 m, with per-station `closeFocusM` 0.331 / 0.528 / 0.848 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 156.9 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed close rows already reach 0.33 m at wide; per-station values record them.

Text sync: analysis: per-station closeFocusM values are the printed close rows (0.331 m at wide, matching the FE figure).

## 2026-11-14 — Published finite conjugates

Patent: US 2025/0231383 A1. PDF pages below use the one-based PDF page index.

| State (zoom/keyframe) | Field | Before | After | Source and paraxial residual |
| --- | --- | --- | --- | --- |
| 0/1 | `focus.conjugates` | Absent | 157 mm, `first-surface` | PDF p. 25, Embodiment 3 (100-3), TABLE 9, MOD Wide column; D5=1.200 mm, D12=9.037 mm, D18=23.915 mm, D31=6.792 mm, D33=6.648 mm, D41=12.602 mm. Offset +0.020252108 mm (+4.307122 diffraction depths); `consistent`. |
| 1/1 | `focus.conjugates` | Absent | 334.99 mm, `first-surface` | PDF p. 25, Embodiment 3 (100-3), TABLE 9, MOD Middle column; D5=23.041 mm, D12=4.826 mm, D18=10.809 mm, D31=7.233 mm, D33=5.220 mm, D41=27.764 mm. Offset +0.038662007 mm (+5.145926 diffraction depths); `consistent`. |
| 2/1 | `focus.conjugates` | Absent | 635 mm, `first-surface` | PDF p. 25, Embodiment 3 (100-3), TABLE 9, MOD Tele column; D5=49.374 mm, D12=1.849 mm, D18=1.700 mm, D31=8.764 mm, D33=3.700 mm, D41=35.374 mm. Offset -0.022134272 mm (-2.281553 diffraction depths); `consistent`. |

TABLE 7: "Object" row has D0 in Thickness, immediately before surface 1 (PDF p. 25, printed p. 7); ¶0082 specifies thickness and intervals in millimeters. This defines the declared distance from the object plane to the first surface.

The published flags already include the declared keyframes. All gap values, surfaces, image-plane settings and existing focus controls are retained.
