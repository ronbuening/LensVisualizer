# Audit Log - Nikon AI-S Nikkor 50mm f/1.2

Patent: US 4,621,909, Example 3 / Table 3

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Table 3 against the current data file. No data changes were made in this pass.
- Retained L1 `Unmatched Nikon/Hikari lanthanum glass (797/455; J-LASF017 / TAF2 class)`. It is a high-index lanthanum class, but no exact coefficient-backed public catalog entry was verified for the patent pair.
- Retained L2 `Unmatched lanthanum dense flint (796/410; closest J-LASF02 / S-LAH52 class)` for the same reason.
- Retained the existing catalog/class labels for the remaining rows: `J-SF1 / E-FD1L`, `J-SF4 / N-SF4`, `J-LASF016 / TAF1`, and `S-LAM60 / J-LAF010 / NBF1`.

### Phase 2 - Geometry and SD review

- Confirmed the surface data and the three-unit floating short-distance variables match the patent model.
- The patent does not publish clear apertures. The current SDs remain estimates from the f/1.2 entrance pupil, 52 mm filter constraint, stop region, and rear group geometry.
- Retained the existing semi-diameters. They widen through the fast front positive pair, tighten around the stop, and remain plausible against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, partial-dispersion data, line-index table, or aspherical surface data was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
