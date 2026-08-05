# VoigtlanderHeliarF45SecondAsymmetric — Patent Figure SD Audit

## 2026-08-05 — Drawing-sheet silhouette pass

DE 143889 C page 3 was rendered at 600 dpi. The patent publishes no clear apertures, and the file has no image format,
so the image-circle-floor audit skips it. The drawing nevertheless gives clear relative evidence that the central and
rear groups should be taller than the draft rendering.

| Surface | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 4 | 9.8 mm | 14.0 mm | Enlarged the central singlet to the drawing's group height. |
| 5 | 9.8 mm | 14.0 mm | Kept the thin central member at a common rim. |
| 6 | 10.8 mm | 11.5 mm | Enlarged the rear doublet's front surface. |
| 7 | 10.8 mm | 11.5 mm | Matched the cemented interface to the rear envelope. |
| 8 | 10.8 mm | 11.5 mm | Kept the rear member at a common rim. |

A 14 mm rear-group trial failed the positive element's edge-thickness check. The final
`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderHeliarF45SecondAsymmetric.data.ts --sd 1=14 2=12.7 3=12.7 4=14 5=14 6=11.5 7=11.5 8=11.5` trial passed.
