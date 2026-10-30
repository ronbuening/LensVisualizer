# Nikon AF-I NIKKOR 400mm f/2.8D IF-ED Patent Audit

Patent: US 5,438,455 A, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US_5438455_A.pdf`; Figure 1 on PDF page 2 is the controlling optical section.
- The original rear two-thirds of the model were visibly too narrow relative to the fixed front collector. SDs were refined against the figure while preserving all source prescription values.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 7 / 8 / 9 | 39.8 / 38.6 / 34.4 | 49.0 / 47.5 / 43.0 |
| 10 / 11 | 32.0 / 31.0 | 37.0 / 36.0 |
| 12 / 13 / 14 | 28.6 / 28.6 / 27.8 | 35.0 / 35.0 / 34.0 |
| 15 / 16 / 17 | 27.8 / 27.3 / 27.2 | 30.5 / 30.0 / 30.0 |

- The rear cemented group cannot be enlarged to the schematic's full apparent outline without violating the physical shared-gap geometry; its final values are the validator-safe compromise.
- Added Hikari `J-LLF6` to the catalog from the retained first-party Nikon/Hikari workbook. Its vendor coefficients resolve L22b here and the same named glass in the existing Nikon AF-P DX 10–20mm record.
- Normalized the display name to `NIKON AF-I NIKKOR 400mm f/2.8D IF-ED`.

## 2026-08-18 — Screenshot follow-up

- Rechecked the supplied rendering against Figure 1. The revised G2/G3 diameter ladder is the closest validator-safe match; no further SD change was supported.
- Confirmed the published focus order: G2 moves `+17.8317mm` imageward while G1 and G3 remain fixed.
- Corrected L3b's displayed type to `Negative Meniscus`, marked L11/L12/L3a as the three inferred ED positions, and retained the source subgroup labels without inventing additional product claims.

## 2026-09-23 — Rear filter modeled as `rearPlates`

- Read Table 1 on PDF page 8 at 200 dpi: s17 d = 46.34; surfaces 18–19 are a 2.00 mm plane-parallel plate, ν 64.1,
  n 1.51680; Bf = 104.5069 at both infinity and the β = −0.1446 close state. Figure 1 labels the plate FILTER.
- The STO row (modeled 23.7 mm behind s17) now stores the physical 22.64 mm gap to the filter instead of the folded
  128.4654654 mm; `rearPlates` FILTER is J-BK7A (Hikari, as the elements; resolves for 1.51680 / 64.1) with
  gapAfter 104.5069 mm. Paraxial check against the previous data: EFL identical and defocus unchanged at both focus
  states (worst difference 2e-14 mm). Physical track grows by 0.681 mm to 374.228 mm.

## 2026-10-04 — Slip-in filter drawn as an element

- The rear slip-in filter plate F moved out of `rearPlates` into the drawn prescription: surfaces 18–19 and element 11
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 24 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (22.45 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-29 — Fresh shape and glass reinspection

- Directly viewed local `patents/US_5438455_A.pdf`: Figure 1 on PDF page 2 at 600 dpi and Embodiment 1 / Table 1 plus the d-line definition on page 8. Inspected all 17 powered faces, including cemented boundaries, and the rear filter. The S8 shoulder is cemented; no independently resolved exposed concave cap-end land supports a cut or extension. Existing geometry constraints still limit the rear group below the schematic outline; no forced diagram fit is adopted.
- Rechecked all 10 lens media and the rear filter against printed nd/νd. Removed 40 catalog-derived nC/nF/ng/dPgF fields from the lens elements because the patent does not publish them. Every source nd/νd remains unchanged; compatible catalog dispersion curves remain available through the resolver. J-LLF6 is explicitly qualified: source νd=49.1 versus current catalog 48.78, with no production-supplier claim. Qualified the filter's J-BK7A label. No source APD measurement is asserted.
- Surface and image-circle audits pass; the infinity aperture remains iris-limited at f/2.880000. Actual renderer output at 3 focus x 3 secondary-control states has 11 finite element paths and zero trim diagnostics per state; inspected the SVG raster. Four cardinal full-iris rays pass at infinity but retain baseline S1 clipping at the published close object distance. Source prescription, focus motion, and inferred iris station remain unchanged.
- Shared dispersion, glass-resolution-parity, and partial-dispersion tests pass (3 files / 94 tests for this triad); catalog consistency passes. The retained finite-conjugate clipping is not described as full-iris clearance across the focus range.
