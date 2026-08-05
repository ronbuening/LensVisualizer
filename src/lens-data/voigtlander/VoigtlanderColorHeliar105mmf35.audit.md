# VoigtlanderColorHeliar105mmf35 — Patent Figure SD Audit

## 2026-08-05 — Figure 2 silhouette pass

US 2,645,156 A Figure 2 was rendered at 600 dpi. The patent publishes no clear apertures, so the drawing was used only
for relative element heights after confirming that the 6×9 image-circle floor reported no undersized surfaces. The
automated crop was affected by drawing annotations; the final decision came from the high-resolution visual comparison.

| Surface | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 5 | 13.2 mm | 15.3 mm | Matched the central singlet's two rims to the figure. |
| 6 | 14.8 mm | 15.5 mm | Opened the plane front of the rear doublet to the figure envelope. |
| 7 | 17.1 mm | 15.5 mm | Removed an unsupported rear-doublet flare. |
| 8 | 17.1 mm | 15.5 mm | Kept the cemented rear member at a common clear envelope. |

`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderColorHeliar105mmf35.data.ts --sd 4=15.3 5=15.3 6=15.5 7=15.5 8=15.5` passed the surface-domain, edge-thickness, rim-slope, and shared-gap checks.
`npm run audit:image-circle -- src/lens-data/voigtlander/VoigtlanderColorHeliar105mmf35.data.ts` reported no floor failures.
