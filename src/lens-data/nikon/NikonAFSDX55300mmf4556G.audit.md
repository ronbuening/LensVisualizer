# Nikon AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR Patent Audit

## 2026-06-24 Source Availability Recheck

The data file cites `US 2011/0102905 A1`, Example 1 / Table 1. I checked the local untracked `patents/` folder for `US20110102905A1`, `20110102905`, and `0102905` filename forms, and no matching PDF is present.

### Outcome

- No data changes were made in this pass.
- The generated coverage report currently flags L21's `S-LAL61 class` row as Abbe-only. That row should be rechecked against the patent table once the local PDF is available.
- Current semi-diameters remain documented ray-trace estimates constrained by the DX image circle and production geometry.

## 2026-10-29 — Fresh source, shape and glass reinspection

- The local `patents/US_2011102905_A1.pdf` is now available. Directly viewed Example 1 Table 1 and d-line definition on PDF page 42, with material descriptions on page 41; Figure 1 on page 2 inspected at 600 dpi. All 17 nd/νd pairs agree with the stored source values. All 17 catalog curves resolve, including S-LAL61 at source 1.74100/52.67; its former rounding hypothesis is removed. Labels now name the actual selected proxies, including FCD1, J-LAK14 and TAFD40, with suppliers unproven. The two high-νd ED positions are explicitly inferred. No C/F/g or partial-dispersion values are published or authored.
- Corrected `zoom.stations[0..2].nominalFNumber` 4.5/5.0/5.6→4.63/4.91/5.88 from the printed FNO row; added `catalog.fNumber` marketing 4.5/design4.63. Commercial name and useful stop choices remain. No source prescription or close-focus reconstruction changed.
- Inspected every exposed and cemented face. Small G1/G2 shoulders are cemented steps; no exposed concave cap-end land is independently resolved. No cuts/extensions or SD changes are adopted. The original S8/S9 SD 11.3 mm clear the corrected source beam; the baseline 11.4 mm raise proposed for the faster marketed setting is no longer required.
- Surface/image-circle checks pass. All three nominal aperture states are iris-limited at f/4.630,4.910,5.880; --raise proposes none. Nine actual SVG focus/zoom states have 17 finite paths and zero trim diagnostics; raster inspected. Source-coordinate/catalog-consistency checks and shared focused glass tests pass.
