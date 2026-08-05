# VoigtlanderColorSkopar105mmf35 — Patent Figure SD Audit

## 2026-08-05 — Figure 1 silhouette pass

US 2,573,511 A Figure 1 was rendered at 600 dpi. The patent publishes no clear apertures. The 6×9 image-circle floor
reported no undersized surfaces, so the edits preserve that result while bringing the smaller members closer to the
relative heights in the section drawing.

| Surface | Before SD | After SD | Evidence and rationale |
|---|---:|---:|---|
| 2 | 16.2 mm | 18.0 mm | Reduced the unsupported taper across the front singlet. |
| 3 | 12.8 mm | 14.0 mm | Enlarged the separate negative member toward the drawing. |
| 4 | 12.5 mm | 14.0 mm | Gave the negative singlet a common rim envelope. |
| 5 | 13.0 mm | 15.5 mm | Enlarged the rear doublet's front rim. |
| 6 | 14.0 mm | 15.5 mm | Matched the cemented interface to the rear envelope. |
| 7 | 16.0 mm | 15.5 mm | Removed the slight unsupported flare at the final surface. |

`npm run audit:surface -- src/lens-data/voigtlander/VoigtlanderColorSkopar105mmf35.data.ts --sd 1=18.5 2=18 3=14 4=14 5=15.5 6=15.5 7=15.5` passed the local geometry checks.
`npm run audit:image-circle -- src/lens-data/voigtlander/VoigtlanderColorSkopar105mmf35.data.ts` reported no floor failures.
