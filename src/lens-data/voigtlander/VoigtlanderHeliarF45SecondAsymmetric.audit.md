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

## 2026-08-05 — Rendered-state follow-up

A direct comparison of the viewer render with the same 600 dpi drawing showed that enlarging only the central group
left the front and center visibly taller than the edge-thickness-limited rear doublet. Because the drawing presents
the three group envelopes at nearly equal height, the follow-up reduced the front and central groups instead of
forcing the rear group beyond the published geometry.

| Surface | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 1 | 14.0 mm | 12.7 mm | Removed the front surface's unsupported flare and matched the rest of D1. |
| 4 | 14.0 mm | 12.5 mm | Reduced the central singlet toward the drawing's common group envelope. |
| 5 | 14.0 mm | 12.5 mm | Kept the central singlet at a common clear envelope. |

The rear group remains at 11.5 mm because larger trials make the positive element cross at the rim. The final
`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderHeliarF45SecondAsymmetric.data.ts --sd 1=12.7 2=12.7 3=12.7 4=12.5 5=12.5 6=11.5 7=11.5 8=11.5`
trial passed. Exact-ray comparison before and after the edit retained all five on-axis default rays, four of five
default rays at the viewer's 60% field, and two of five at the patent's full field.
