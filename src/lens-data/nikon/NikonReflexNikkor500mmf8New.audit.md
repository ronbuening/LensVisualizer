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

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
