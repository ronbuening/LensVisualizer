# Audit Log — P. Angénieux DEM 180mm f/2.3 APO

Patent: US 4,726,669 A, Example 1 / Figure 1.

## 2026-08-06 — New-lens patent-figure and glass audit

- Rendered the local patent and compared the stored section with the upper Figure 1 drawing on page 2. The measurable element envelopes remain within the patent-audit tolerance after scale normalization; the two thin rear rims are not reliable raster measurements. No semi-diameter change was justified.
- All stored SDs pass the image-circle floor and surface-geometry checks.
- Rechecked the patent glass coordinates. The new HIKARI additions do not uniquely identify the vintage `785259` or `772497` rows, so their vendor-neutral coordinate labels remain more defensible than a forced supplier assignment.
- Corrected the maker identity and route prefix to `P. Angénieux`; the display name is `P. ANGÉNIEUX DEM 180mm f/2.3 APO`.

## 2026-08-06 — Catalog-equivalent glass follow-up

- Rechecked Example 1's complete `nd` / `νd` table against first-party, discontinued-inclusive vendor catalogs. Compatible curves now cover all eight elements while retaining the patent coordinates and leaving every production supplier unspecified.
- Added Sumita K-SFLD11 for the exact `785259` family and Schott P-LASF47 for the exact `806409` family. Existing SK5, S-FPL51, S-LAH66, and S-TIH10 curves cover the remaining rows.
- Retained representative Schott P-LASF47 `nC`, `nF`, `ng`, and `ΔPgF = -0.0079` data on L5 as an inferred catalog-equivalent property, not a patent or production-melt claim.
- Strict and trusted chromatic coverage both rose from 4/8 to 8/8 elements. The display name and element labels were rechecked and require no further correction.

## 2026-08-06 — L5 APD evidence correction

- Re-read claim 6 and the Example 1 table. The patent requires an ED/APD positive element in Component II, which identifies L2; it publishes no partial-dispersion requirement or line indices for Component III element L5.
- Changed L5 from inferred P-LASF47 APD data to the coordinate-equivalent, normal-dispersion S-LAH53 curve. Removed the representative P-LASF47 `nC`, `nF`, `ng`, and `dPgF = -0.0079` fields and restored `apd: false`.
- Schott P-LASF47 remains a valid catalog entry and an `806409` coordinate alternative, but `nd` / `νd` alone cannot distinguish its anomalous curve from S-LAH53. Full 8/8 catalog coverage is retained without asserting unsupported L5 secondary-spectrum behavior.
