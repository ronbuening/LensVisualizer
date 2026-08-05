# VoigtlanderNokton50mmf15 — Patent Figure SD Audit

## 2026-08-05 — Figure 2 silhouette pass

US 2,646,721 Figure 2 was rendered at 600 dpi. The patent publishes no clear apertures. The draft made the two
pre-stop members nearly as tall as the very large front doublet; the drawing instead shows a pronounced reduction.
The full-frame image-circle-floor audit reported no undersized surfaces before or after the change.

| Surfaces | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 4 | 15.0 mm | 11.5 mm | Restored the scale break after the front doublet. |
| 5 | 14.2 mm | 11.5 mm | Kept L3 at a common drawing-derived envelope. |
| 6 | 13.8 mm | 11.5 mm | Matched L4 to the pre-stop envelope. |
| 8 | 10.05 mm | 11.5 mm | Opened the rear doublet front rim to the drawing. |
| 9–10 | 11.515 mm | 11.5 mm | Normalized the cemented pair's envelope. |

Larger early trials failed positive edge-thickness and rim-slope checks. The final
`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderNokton50mmf15.data.ts --sd 1=17.2 2=16.15 3=16.1 4=11.5 5=11.5 6=11.5 7=10.25 8=11.5 9=11.5 10=11.5 11=11.9 12=11.9`
trial passed every local geometry check.
