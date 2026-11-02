# Audit Log — Nikon AI Nikkor 28mm f/3.5

Patent: US 4,099,850, Example 5

## 2026-06-24 — Patent glass and retained-data audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `J-BAF8 (HIKARI)` | `E-BAF8 (Hikari) / J-BAF8 class` | Example 5 publishes `nd = 1.62374`, `vd = 47.0`; catalog E-BAF8 matches the pair and keeps the Nikon/Hikari class identity. |
| L2 / 3 | `glass` | `J-SK16 (HIKARI)` | `N-SK16 / S-BSM16 / J-SK16 class` | Example 5 publishes `nd = 1.62041`, `vd = 60.3`; public N-SK16 and S-BSM16 catalog entries provide matching Sellmeier data. |
| L3 / 5 | `glass` | `J-BASF7 (HIKARI)` | `BAFD7 (HOYA) / S-BAH27 / J-BASF7 class` | Example 5 publishes `nd = 1.70154`, `vd = 41.1`; BAFD7 and S-BAH27 are the closest resolver-backed catalog equivalents for this barium-flint class. |
| L4 / 7 | `glass` | `J-SF4 (HIKARI)` | `E-FD4 (HOYA) / H-ZF6 / J-SF4 class` | Example 5 publishes `nd = 1.7552`, `vd = 27.5`; E-FD4/H-ZF6 match the dense-flint pair. |
| L5 / 9 | `glass` | `J-SK16 (HIKARI)` | `N-SK16 / S-BSM16 / J-SK16 class` | Same patent glass as L2 (`nd = 1.62041`, `vd = 60.3`). |
| L6 / 11 | `glass` | `J-SK5 (HIKARI)` | `N-SK5 / S-BAL35 / J-SK5 class` | Example 5 publishes `nd = 1.58913`, `vd = 61.2`; N-SK5 and S-BAL35 are resolver-backed catalog equivalents. |

### Phase 2 — Retained-information audit

- Rechecked Example 5 radii, thicknesses, and air spaces against the local patent text extracted from `patents/US4099850.pdf`; the existing scaled surface data matches the published `f = 100` prescription at the documented `0.28x` scale.
- Confirmed the patent places the diaphragm between the third and fourth lens components but does not publish an exact stop station or clear-aperture/semi-diameter table.
- Retained the midpoint stop placement and the existing semi-diameters. The file already documents these as conservative rendering apertures, and their proportions remain rational against Fig. 1 and the tight rear-surface curvature of L2.

### Phase 3 — Spectral / metadata enrichment

- The patent provides only `nd` and Abbe number for each glass; no line indices, partial-dispersion values, ED/APD claims, or aspherical coefficients are available.
- No APD flags were added.

### Phase 4 — Analysis sync

- Updated `NikonAI28mmf35.analysis.md` to use the catalog-equivalent glass labels and to remove the outdated claim that Hikari entries alone were the active resolver labels.

## 2026-10-30 — Fresh original-source shape and glass review

- Directly inspected local `patents/US4099850.pdf`: common Figure 1 (PDF p. 2, 600 dpi crop) and the complete Example 5 prescription (p. 7). Native raster is 300 ppi (`pdfimages -list`), so the render is 2×. All twelve convex/concave faces were inspected; the figure is a common schematic, not a printed clear-aperture drawing for Example 5. The existing 0.28 scale is retained.
- L2 rear S4 clearly has a vertical outer stroke before a modest corner bevel. Keep the established 13.5 mm clear cap and extend its drawn rim to 16.8 mm. Figure q ≈ 0.73, edge ≈ 308 native px, one-pixel q band ±0.0056, with separate ink/end ambiguity about ±0.02. The first-to-last vertex span gives approximately 18.3 native px per model mm. Adopted q = 0.80357 preserves the existing beam cap rather than claiming exact source aperture dimensions. No inferred optical cut is added.
- Continuous full-height source profiles support square rims for L1/L3/L5/L6: S2 18→21.5, S6 8.3→9.2, S9 6.4→8, S11 8.2→9.8 mm. No artificial flat land is added to shallow continuous curves. L3's positive computed edge is only 0.076627 mm: this is a bounded drawing aperture, not a manufacturing assertion. L4's 7 mm square rear candidate fails its unchanged gap policy (intrusion 1.003231 > 0.969192 mm of the source 1.07688 mm gap); retained S8 = 6.4 mm. Its apparent front bevel is not modeled as an optical land, and no additional distinct rear stroke supports an inferred cut.
- Fresh glass-only reinspection: all six printed nd/νd pairs retained; the source uses d subscripts. E-BAF8, J-SK16 (L2/L5), BAFD7, E-FD4 and J-SK5 remain compatible coefficient-backed spectral proxies. Qualified labels now name the actual selected curve without asserting historical suppliers or chemistry. The source supplies no additional C/F/g indices or element-specific partial ratios here; no such fields or patent APD claims are added. All resolver selections and RGB/V responses are unchanged.
- Source R/d, stop, aperture, unit-focus motion and tolerances are unchanged. Focused surface/image-circle/aperture/field checks and actual nine-state SVG review are recorded with this batch; finite paths and zero hidden trim. Shared dispersion/resolver checks pass; no shared catalog or engine edits.
