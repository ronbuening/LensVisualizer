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
- Strict and trusted chromatic coverage both rose from 4/8 to 8/8 elements. The display name and inspector metadata were rechecked and remain source-consistent.

## 2026-08-06 — L5 APD evidence correction

- Re-read claim 6 and the Example 1 table. The patent requires an ED/APD positive element in Component II, which identifies L2; it publishes no partial-dispersion requirement or line indices for Component III element L5.
- Changed L5 from inferred P-LASF47 APD data to the coordinate-equivalent, normal-dispersion S-LAH53 curve. Removed the representative P-LASF47 `nC`, `nF`, `ng`, and `dPgF = -0.0079` fields and restored `apd: false`.
- Schott P-LASF47 remains a valid catalog entry and an `806409` coordinate alternative, but `nd` / `νd` alone cannot distinguish its anomalous curve from S-LAH53. Full 8/8 catalog coverage is retained without asserting unsupported L5 secondary-spectrum behavior.

## 2026-08-06 — Screenshot display and element-label audit

- Rechecked the supplied viewer screenshot against Example 1 / Figure 1a. The eight surface forms, two cemented junctions, all-spherical flag, and stored semi-diameters match the source drawing within the documented raster limits; both focused geometry audits pass.
- Added the patent identifiers `L1` through `L8` to the diagram. Removed the source-foreign displayed `D1` / `D2` cemented-pair shorthands; inspector badges identify the pairs as `L5/L6` and `L7/L8`, while the patent's published spacing symbols `D2`, `D6`, and `D11` remain unchanged.
- Reconfirmed `P. ANGÉNIEUX DEM 180mm f/2.3 APO`, the romanized inventor name `Pierre Angénieux`, and L2 as the only patent-supported APD element.

## 2026-09-25 — MTF image-plane census

Visually checked `patents/US4726669.pdf`, Example 1 on PDF p. 7 (column 3). All 14 radii, thicknesses/gaps and eight refractive indices/Abbe values match after uniform ×1.8 scaling, except the already documented and supported V1 emendation: Example 1 prints 6.12, Example 2 prints 61.2 for the same n=1.589. Retain 61.2; it does not affect the reference-index paraxial focus. No aspheres or rear plate.

Infinity D2=1.67, D6=14.99, D11=9.99; close values 0.24/16.41/0.32 are also correctly scaled. The inferred stop splits D8=6.11×1.8=10.998 into equal air gaps without changing first-order propagation. Printed BF=44.79 scales to 80.622; ΣD=61.41 scales to 110.538. Every scaled source dimension agrees, including weak rear R14=−376.983×1.8=−678.5694.

Independent native EFL=99.959463939 and BFL=44.708683191 versus F=100/BF=44.79. Scaled EFL=179.927035090, BFL=80.475629744, offset −0.146370256. Rounded nd values may contribute, but no single supported misprint or alternative plate path resolves the discrepancy.

**Cause/action:** source inconsistency; retain published BF and prescription. Offset **−0.146370 → −0.146370 mm**; Section E row deleted. No numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-10-30 — Fresh F-mount source, rim and glass review

- Reopened original `patents/US4726669.pdf`: PDF p.2 Figures 1a/1b, p.7 Example 1 and condition (6), p.8 claim 6. All eight medium coordinates agree; retain the documented V1=6.12→61.2 emendation supported by Example 2, the ×1.8 scale, inferred midpoint stop and published two-state focus/BF limitations. The source uses the d-line/Abbe convention and publishes no individual C/F/g indices. Condition (6) states only a >0.02 deviation above 0.6438−0.001682 Vd, with explicit special ED material evidence in Component II; retain L2 `apd: patent`, remove its three catalog-only indices and exact catalog-derived dPgF. All eight compatible coefficient curves remain qualified spectral proxies, supplier/melt unspecified.
- Native and 600 dpi Figures 1a/1b show L2's weak concave rear cap continuing to its full body. Restore S4 from 32 to 38.5 mm; this is a continuous cap, not a flat land. Common L3 rims S5/S6 grow from 32 to 32.6 mm, retaining square connectivity and the native f/2.3 beam. Other visible outer corners are oblique bevels, which do not establish flat lands or axial cut depths; no such fields are added.
- All R/d, source media, stop, focus/aperture controls and tolerances remain unchanged. Canonical validation and the full inferred-cut guard pass. Actual buildLens/computeElementShapes SVGs inspected at nine focus/zoom samples have finite paths and zero hidden trim. Image-circle: zero undersized; format-corner chief clears; exact native f/2.3 is iris-limited.
- Matched 16-point stop-lattice samples at focus/zoom 0/.5/1 and five common field fractions retain 7,746 previous passing samples, lose zero and gain 240. These sampled counts are not flux. Printed BF residual, rounded coordinate residual and inferred stop split remain limitations; the model is not factory-glass identification.
