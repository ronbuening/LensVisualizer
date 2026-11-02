# Audit Log - Nikon Reflex-Nikkor 500mm f/8 New

Patent: US 4,666,259 A, Example 1 / Table 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Example 1 / Table 1 against the current data file. No data changes were made in this pass.
- Retained `BSC7 / N-BK7 class crown (patent 517/641)` for the BK7-class crown rows.
- Retained `E-C3 (HOYA) / S-NSL3 class crown (518/590)` for the rear positive crown row.
- Retained L6 `Unmatched (lanthanum dense flint, patent 796/410; nearest current class S-LAH52 / K-LaSFn3)`. No exact coefficient-backed public catalog entry was verified for the patent pair.
- The high-index dense flint status of L6 is already captured in the label; no new metadata field was required.

### Phase 2 - Folded geometry and SD review

- Rechecked the folded optical path and retained `opticalPath.surfaceOrder` as the explicit ray-hit sequence required for the mirror system.
- Retained the documented 41.50 mm `8->9` gap. The patent raster/table supports 41.50 mm, while text extraction can misread it as 4.50 mm; 41.50 mm is required to reproduce the published focal length and total length.
- The patent does not publish a clear-aperture table. Retained the current outer SDs, mirror `innerSd`, stop, and central obstruction estimates from the patent F/6.7 marginal ray geometry plus the production f/8 effective aperture.
- Confirmed the SD proportions remain rational for a compact catadioptric path: large front corrector and primary mirror clearances, central obstruction on the folded reflecting surface, and smaller rear refractive group clearances.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked US 4,666,259 A and assigned NBFD2 as a supplier-neutral spectral proxy for L23's `796410` class.
- No mirror path, obstruction, prescription coordinate, or geometry changed.

## 2026-10-30 — Fresh folded figure and glass reinspection

Direct source: `patents/US4666259.pdf`, PDF p.2 FIG.1 (600 dpi/native 300 dpi), p.10 Table 1 and first-embodiment focus text (600 dpi), p.11 repeated Claim 3 table. Reviewed every physical face, including repeated Mangin interactions and the rear correctors inside the primary opening.

Geometry retained: all exposed concave caps meet continuous source rims; no independently resolved new flat annuli/cap-end cuts. Printed primary13.7 mm thickness and source 7.5 mm S10→S11 interval are correctly represented by sums of interleaved physical rows; no false transcription correction. Source41.50 mm gap,8.05 mm front-unit travel,63.216 mm final gap, all R/d, primary hole and synthetic annulus remain unchanged. No source clear-aperture table is claimed.

All 6 media nd/ν pairs freshly match Table 1. Its index headings are n/ν, with d-line aberration convention stated on p.10; the d-line interpretation is qualified per element. No numeric partial/spectral rows or APD claim. Six resolver curves qualified: four N-BK7 crowns (catalogν64.17 versus source 64.12), E-C3 exact1.51823/58.96 and NBFD2 near proxy (source 1.79631/40.96; actual current catalog 1.797199/41.143795, Δnd+.000889/Δν+.183795). No exact historical glass or production supplier is asserted.

Canonical/full guard/surface pass; ordinary circle/aperture/field audits skip folded path correctly. Nine actual SVG states inspected with annular even-odd fill,zero trim. Generalized annular collimated samples96/96 axial at all three focus positions,91/96 at source±2.5° infinity/mid and 77/96 at the closest spacing (remaining rays atprimary/rear caps). Closest-spacing collimated samples validate traversal,not finite focusing accuracy; shared folded test separately checks tracked finite rays and the8.05 mm movement. Counts are not flux/production throughput. SourceF6.7/productionf8 and modeled obstruction-derived area equivalence stay explicitly distinct.
