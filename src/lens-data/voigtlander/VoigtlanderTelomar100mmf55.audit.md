# VoigtlanderTelomar100mmf55 — Patent Figure SD Audit

## 2026-08-05 — Figure 3 silhouette pass

US 2,662,446 A Figure 3 was rendered at 600 dpi. The draft already tracked the patent section closely; only the rear
doublet's slight rim flare needed correction. The full-frame image-circle-floor audit reported no undersized surfaces.

| Surface | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 7 | 10.5 mm | 11.0 mm | Opened the rear doublet front rim to the figure envelope. |
| 9 | 11.5 mm | 11.0 mm | Removed the unsupported flare at the final surface. |

`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderTelomar100mmf55.data.ts --sd 1=10.3 2=10.3 3=10.3 4=10.3 5=10 6=10 7=11 8=11 9=11` passed the local geometry checks.
`npm run audit:image-circle -- src/lens-data/voigtlander/VoigtlanderTelomar100mmf55.data.ts` reported no floor failures.
