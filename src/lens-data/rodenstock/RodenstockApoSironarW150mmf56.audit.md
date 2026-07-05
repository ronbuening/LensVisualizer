# Audit Log - Rodenstock Apo-Sironar-W 150mm f/5.6

Patent: DE 3907928 A1, Table 5

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_3907928_A1.pdf`. The drawing sheet shows FIG. 1 for the wide-aperture Apo-Sironar family.
- The data file already documents that Table 5 is internally inconsistent and that this is an EFL-reconciled reconstruction. The patent omits clear-aperture semi-diameters.
- FIG. 1 shows a broad front half, stop close to the first rear surface, and a broad rear half of comparable scale. Stored SDs follow that drawing: about 15.0-12.0 mm before the stop, a 10.992 mm stop, and about 12.0-14.0 mm through the rear reconstruction.
- No SD values changed. Current values remain inferred from the patent figure, the reconstructed Table 5 model, and renderer sag/edge constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
