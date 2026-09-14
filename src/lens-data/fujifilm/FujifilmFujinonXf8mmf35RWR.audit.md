# FujifilmFujinonXf8mmf35RWR — patent and glass audit

## 2026-09-14 — Patent outlines, glass, and metadata

Source: `JP2023001878A.pdf, p. 38, Fig. 20; Example 7`.

600 dpi manual rim widths, excluding labels and motion brackets, imply approximately 10.5 mm at the plano L13 face and 8.0 mm at L15 (about 29 micrometers/pixel). L14 cannot reach the roughly 9.1 mm drawing rim without violating its preceding gap. The three changes improve the front-to-stop taper while preserving geometry limits.

| Surfaces | Previous SD (mm) | Revised SD (mm) | Reason |
|---|---|---|---|
| 5 / 6 | 7.4 / 6.5 | 10.5 / 9.2 | L13 optical outline; rear capped below the steep rim |
| 7 / 8 | 6.4 / 6.0 | 7.6 / 7.1 | L14 widened toward figure, limited by shared-gap clearance |
| 9A / 10A | 6.0 / 5.9 | 8.0 / 7.9 | L15 optical rims, excluding movement bracket |

At the revised heights the spherical-reference departures are -397.7 / -270.0 micrometers for 9A / 10A. The analysis values were updated. Other SDs were retained, including the steep front asphere.

Added the source-published CDGM H-TF5 curve for L17 (November 2021 catalog, printed p. 290), with code 654395 as published; the old 654396 class label was not an exact CDGM code. Removed catalog-derived nC/nF/ng from L13, L14, L21, L22, and L25. All twelve elements now use coefficient-backed curves while keeping patent-derived dPgF authoritative. Retained the patent-supported APD annotations for L22/L25; no production supplier is asserted.

Structured assignee spelling follows the current catalog canonical name `Fujifilm Corporation`; the publication capitalization remains a source spelling, not a separate entity.
