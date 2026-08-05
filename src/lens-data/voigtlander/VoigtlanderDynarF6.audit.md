# VoigtlanderDynarF6 — Patent Figure SD Audit

## 2026-08-05 — Patent drawing silhouette pass

US 765,006 A page 1 was rendered at 600 dpi. The drawing shows three groups with nearly equal heights, unlike the
strong central and rear taper in the draft. The file has no image format, so the image-circle-floor audit correctly
skips it; this pass is figure evidence constrained by the local geometry validator.

| Surface | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 1 | 10.1 mm | 10.0 mm | Rounded the front envelope to the drawing-supported common height. |
| 2 | 9.55 mm | 10.0 mm | Removed taper within the front cemented doublet. |
| 3 | 9.25 mm | 10.0 mm | Kept the front doublet at a common rim. |
| 4 | 8.2 mm | 10.0 mm | Enlarged the central singlet to match the drawing. |
| 5 | 8.05 mm | 10.0 mm | Matched the second central rim. |
| 6 | 8.2 mm | 9.8 mm | Enlarged the rear member within its edge-thickness limit. |
| 7 | 8.9 mm | 9.0 mm | Removed the remaining internal taper. |

An all-10 mm rear trial failed the L5 edge-thickness check. The final
`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderDynarF6.data.ts --sd 1=10 2=10 3=10 4=10 5=10 6=9.8 7=9 8=9` trial passed every local check.
