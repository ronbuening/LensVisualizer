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

## 2026-08-21 — Hikari and near/close candidate review

- Added the first-party J-LAK02 curve for the existing explicit label and assigned J-PKH1 as a supplier-neutral
  spectral proxy for L8's `517699` phosphate-crown class.
- Patent coordinates, underwater geometry, and production-supplier attribution remain unchanged.

## 2026-11-03 — Image-plane consistency (structure)

The data file traced R1 from air although US 5,579,169 Example 1 evaluates the prescription with water
(n = 1.33306) ahead of the water-contact meniscus. Its 39.3394 mm final gap is the paraxial back focus of the
water-to-air trace, so in the air model the plane sat 1.153 mm (119 depths at F/2.87) behind paraxial focus.
Fixed the structure in the R-UW AF Zoom-Nikkor 20-35mm's style; no radius, thickness, index or gap changed.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| `media` | none | `m1`, nd 1.33306 | Patent object-side medium (Table 1 note) |
| Surface `WTR` | absent | flat, d 0.001, sd 50.0, medium `m1` | Zero-power plane that starts the water medium; not a patent surface |
| `groups` | G1–G7 | `WATER` group added for WTR | Diagram label, as on the 20-35mm |
| Final gap after R17 | 39.33944735429087 | unchanged | Already the water-trace paraxial back focus |

- Residual: −1.152700 → 0.000000 mm. Model EFL 15.348 → 12.400 mm (patent F = 12.32; independent water trace
  12.3995). Track 138.339 → 138.340 mm, including the 0.001 mm WTR gap. There is no focus travel and `closeFocusM` stays 0.15 m.
- Trace-safe half field 39.03° → 30.68° (in air). A flat air-to-water entry caps the in-water ray angle at 48.6°,
  so neither model traces the 85.3° underwater half field; the WTR plane's semi-diameter does not limit it.
- Aperture, image-circle and surface-probe audits are unchanged; field coverage still skips the fisheye projection.
- Evidence: patent Table 1 water index and the "first lens group in contact with water" statement; paraxial check of
  the edited file (offset 0.0000 mm).

Follow-ups: the full underwater fisheye field needs an object-space medium in the projection launch path
(`src/optics/projection.ts`); MTF still rejects the lens as an unsupported path.
