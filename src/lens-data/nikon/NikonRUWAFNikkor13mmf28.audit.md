# Audit Log - Nikon R-UW AF Fisheye-Nikkor 13mm f/2.8

Patent: US 5,579,169, Example 1 / Table 1

## 2026-07-29 - `796409` coefficient-source review

- Rendered and visually checked the prescription. Example 1 row 10 confirms L6 at
  `R = 77.9174`, `d = 1.5`, `nd = 1.79631`, and `vd = 40.9`, matching the stored row.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  Nearby named high-index flints do not reproduce both coordinates and do not establish a supplier.
- Retained L6's explicit unmatched `796409` annotation. No catalog model, underwater prescription
  geometry, aperture, or projection metadata changed.

## 2026-07-30 - `797454` catalog-equivalent review

- Rechecked L3 at `nd = 1.79668`, `vd = 45.4`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.09`).
- Relabeled L3 as a J-LASF017 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no underwater prescription geometry, aperture, projection, or semi-diameter values changed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked US 5,579,169 Table 1: L6 is `1.79631 / 40.9`.
- Added the official legacy HOYA NBFD2 row (`1.797199 / 41.143795`) to the shared catalog and used it for L6 as a
  coefficient-backed optical equivalent inside runtime tolerance.
- The production supplier remains unspecified. No underwater prescription geometry, aperture, projection, or
  semi-diameter values changed.
