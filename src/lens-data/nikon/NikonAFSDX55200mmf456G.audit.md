# Nikon AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II Patent Audit

## 2026-06-24 Source Availability Recheck

The data file cites `JPWO2015/141574A1`, Example 2. I checked the local untracked `patents/` folder for `2015141574`, `141574`, `JPWO2015141574`, and `WO2015141574` filename forms, and no matching PDF is present.

### Outcome

- No data changes were made in this pass.
- The generated coverage report shows several Hikari J-series Abbe-only rows, so this lens should be revisited once the cited patent PDF is available and the glass table can be checked directly.
- Current semi-diameters remain documented estimates because the data header already notes that the patent table omits clear apertures.

## 2026-08-11 — Phase 94 Hikari catalog completion

- Added the first-party Hikari J-SK14 (`603607`) and J-LASF02 (`800421`) nine-term power-series rows from the
  retained Nikon/Hikari optical-glass workbook.
- Their coefficients reproduce the workbook's d/e indices (`1.603110 / 1.605480` and `1.799520 / 1.804034`) and
  resolve the already authored L31 and L35 names without changing the patent prescription.
- The lens moves from 11/13 to 13/13 strict Sellmeier coverage. No geometry, movement, or source indices changed.

## 2026-10-29 — Fresh source, shape and glass reinspection

- The local `patents/WO_2015141574_A1.pdf` is now available. Directly viewed Example 2 Table 2 on PDF pages 25–26, d-line 587.6 nm definition on page 19, and Figure 4A on page 56 at 600 dpi. Rechecked all 13 nd/νd rows, retaining every source coordinate. All 13 compatible catalog curves resolve; labels now qualify the actual selected curves with supplier and melt identity unproven. No source C/F/g indices or partial-dispersion measurements are supplied or authored; the high-νd ED position remains inferred.
- Corrected `zoom.stations[0].nominalFNumber` 4→4.12 and `[2]` 5.6→5.78; middle 4.94 stays. Added `catalog.fNumber` marketing 4/design4.12. Table 2's FNO row is the source; marketed name and useful stop choices remain. No source radii, spacings, glasses or movement changed.
- Inspected every exposed and cemented face. Figure 4A shoulders at S4/S7 belong to cemented boundaries; exposed concave arcs have no independently resolved further cap-end stroke. No cut, extension or SD change is justified. The compact G2 taper remains constrained by the literal gap geometry, without invented flat lands.
- Surface/image-circle audits pass. All three corrected infinity stations are iris-limited (f/4.120,4.933,5.768; within 0.21% of source), and --raise proposes none. Nine actual SVG focus/zoom states have 13 finite paths with zero trim diagnostics; raster inspected. Source-coordinate/catalog-consistency checks pass; shared dispersion/parity/partial tests pass for this triad.
