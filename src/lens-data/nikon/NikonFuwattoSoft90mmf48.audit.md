# Audit Log - Nikon Fuwatto Soft 90mm f/4.8

Patent: US 5,796,530, Example Embodiment 2, second soft-focus configuration

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked the second soft-focus configuration against the current data file. No data changes were made in this pass.
- Retained `E-LAFH2 (HIKARI, historical/obsolete; 804/339)` for the high-index flint element. The project catalog has a historical Hikari class for this row.
- Retained `S-BSM10 (OHARA; 623/570)` for the barium crown element.
- No additional high-index or anomalous-dispersion metadata was required beyond the existing labels and APD flags.

### Phase 2 - Geometry and SD review

- Confirmed the data represents only the reversed cemented doublet used in the Fuwatto soft-focus state, with the parent sharp-focus rear group intentionally excluded per the lens-data comments.
- The patent gives infinity data only and does not publish clear apertures. The current unit-extension focus model and estimated SDs remain appropriate for the visualization.
- Retained the existing semi-diameters. The stop-to-doublet spacing, f/4.8 entrance pupil, and reversed doublet proportions remain rational against the patent drawing and the documented 1.2x scaling.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, aspherical data, line-index table, or partial-dispersion table was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
