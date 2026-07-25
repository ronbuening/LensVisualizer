# Audit Log — FUJIFILM FUJINON GF 250mm f/4 R LM OIS WR

Patent: US 2019/0094496 A1, Example 1 (Tables 1-2; Figure 1)

## 2026-07-24 — Patent-figure, glass, and metadata audit

The Figure 1 section was registered to the prescription's glass vertex span. The original front and middle groups were already close to the drawing, but the rear G4 element blanks were consistently undersized. The final G4 values follow the measured rim envelope while retaining the exact patent radii and spacings.

| Surfaces | Before `sd` | After `sd` | Figure comparison |
|---|---:|---:|---|
| S21-S22 (L41 front/shared interface) | 13.2 | 16.4 | L41 now measures 0.996× the Figure 1 rim; L42 remains within 3.1% |
| S23 (L42 rear) | 13.7 | 15.5 | Matches the illustrated L42 rear rim |
| S24-S25 (L43) | 16.7 | 19.5 | L43 now measures 1.001× the figure |
| S26-S27 (L44) | 15.7 | 20.0 | L44 now measures 1.001× the figure |

The surface validator reports no edge-thickness, rim-slope, gap-intrusion, asphere-domain, or ray-containment errors. The image-circle floor audit reports no undersized surfaces.

### Glass and APD disposition

- Added coefficient-backed catalog entries for J-LAK7R, N-LASF46B, S-LAL19, and H-ZBAF52. This raises strict Sellmeier coverage for the lens from 12/16 to 16/16 elements.
- Retained the patent-derived `dPgF` value on every glass row.
- Corrected the UI APD classification: the patent's publication of `θgF` for every element does not make every element anomalous. Only the production-correlated ED elements L12/L15 and Super ED element L22 retain `apd: "patent"`; the thirteen other rows, including the high-`θgF` chromatic partners L33 and L41, now use `apd: false`.
- Normalized the CDGM catalog spelling to `H-ZBAF52`.

No radius, thickness, index, focus motion, stop size, element count, group count, or production display name was changed.
