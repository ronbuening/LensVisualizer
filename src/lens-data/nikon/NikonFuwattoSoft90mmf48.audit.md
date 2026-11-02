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

## 2026-10-30 — F-mount shape and glass review

The October 30, 2026 review directly checked the selected second soft-focus configuration in US 5,796,530 Table 2 (PDF page 28), and Fig. 9 on PDF page 8. Table 2 explicitly gives FN = 4.95. The modeled full aperture and its first selectable stop now use that design value; the product name and catalog marketing value retain f/4.8. The stop remains 20.00004 mm ahead of the reversed doublet, with all powered curvatures, thicknesses, image gaps and focus travel unchanged. Every doublet face was inspected at 600 dpi from the native 300 ppi scan. Its curves reach the drawn rims; ray overlays and the cemented interface do not establish an additional independent concave-end land or cut, so the 14.5 mm glass caps remain.

Both source d-line pairs were checked afresh: L12 1.80384/33.89 and L11 1.62280/57.03. E-LAFH2 and S-BSM10 supply compatible catalog spectral curves, explicitly qualified as proxies. The former is available through a historical catalog entry; this is no evidence of a production supplier or melt. The source supplies no numeric per-glass partial dispersion or C/F/g indices. Source anchors and the existing coefficient curves remain unchanged.

All three source prescriptions pass canonical surface, image-circle and nominal-aperture audits. Fuwatto/Gugutto format corners pass the traced check; Gyogyotto is checked with the independent vector probes described above. All 27 actual SVG states are finite with zero hidden trim. Powered radii, thicknesses, air spacings, source glass coordinates, stop stations, focus travel and validation tolerances are retained.
