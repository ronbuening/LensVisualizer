# Audit Log - Nikon AI Nikkor 45mm f/2.8

Patent: JP 2003-005030 A, Example 6

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Example 6 against the current data file. No data changes were made in this pass.
- Confirmed the four glass labels remain catalog-backed: `S-LAH59`, `S-TIM28`, `S-TIM28`, and `S-LAH58`.
- The existing line-index and partial-dispersion fields remain supported by the project data for these catalog glasses. The patent prescription itself does not require an unresolved six-digit row.

### Phase 2 - Geometry and SD review

- Confirmed the patent table includes the aperture stop as row 3 and that the data file correctly represents it as `STO`.
- The patent does not publish clear semi-diameters. The existing SDs remain ray-envelope estimates constrained by the patent f/2.88 aperture, field, edge thickness, and the compact Tessar layout.
- Retained the existing stop semi-diameter and lens SDs. Their proportions match the small front group, narrower stop, and larger rear cemented element shown by the patent drawing.

## 2026-10-30 — Fresh original-source shape and glass review

- Directly inspected local `patents/JP_2003005030_A.pdf`: exact Example 6 Table 6 / ¶0023 (PDF p. 5), Figure 11 (p. 7, 600 dpi crop), and ¶0026's plotted wavelength definitions (p. 5). All four glass bodies and the cemented boundary were checked. Native raster is 200 ppi (`pdfimages -list`), so the 600 dpi render is a 3× enlargement. The 0.45 prescription scale is retained.
- Figure 11 supports continuous full-height profiles on the first two bodies. Raise S2 8.6→10.1 mm and S4 7.8→8.2 mm to square those paired rims. S2's weak curve has no resolved curve/flat-stroke break, so it remains a continuous sphere rather than an invented land. All remaining convex, concave, and cemented faces were inspected and retained; no additional concave cut is supported.
- Fresh glass-only reinspection retains all four printed nd/νd pairs and the same compatible S-LAH59 / S-TIM28 (two bodies) / S-LAH58 catalog curves. Table 6 provides no element C/F/g line indices or partial-dispersion ratios; ¶0026 names the plotted aberration wavelengths, not those missing material data. Removed four catalog-derived `dPgF` values and twelve C/F/g overrides so the qualified catalog curves supply spectral response. All four media responses change accordingly; no source spectral datum is discarded. Labels now qualify production supplier uncertainty.
- Focused surface, image-circle, axial aperture, and field checks pass; nine actual focus/zoom SVG states were inspected with finite paths and zero hidden trim. Shared dispersion/resolver checks pass 93 tests, and the batch AST scan has zero duplicate properties or parse errors. Source R/d, nd/νd, stop, aperture, focus motion, and tolerances remain unchanged.
