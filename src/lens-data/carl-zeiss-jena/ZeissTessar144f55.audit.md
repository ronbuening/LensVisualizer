# Audit Log - Carl Zeiss Jena Tessar 144mm f/5.5

Patent: US 721,240
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - Patent and rendering recheck

### Source Note

- Rechecked the local patent PDF text/table and drawing against the current scaled prescription.
- The patent gives radii/thicknesses normalized to EFL = 1 and lists nD, nF, and nG' values, but does not publish nC or clear apertures.

### Phase 1 - Glass / APD / high-index status

| Element / surface | Field | Result | Justification |
|---|---|---|---|
| L1 | `glass`, APD status | retained dense barium crown annotation, `apd: false` | Patent line-index data lacks nC, so no standard Abbe/APD derivation was added. The analysis already notes the anomalous P_G'F behavior. |
| L2 | `glass` | retained dense flint annotation | Patent nD/nF/nG' values support a high-dispersion negative singlet, but no coefficient-backed exact catalog match is available. |
| L3 | `glass` | retained light crown / light flint annotation | The nD match remains family-level and unresolved. |
| L4 | `glass`, high-index status | retained dense barium crown / barium flint annotation | The rear positive element remains a high-index catalog-family inference only. |

### Phase 2 - Prescription and SD review

- Rechecked the normalized patent table against the stored 144mm scale. Current radii, thicknesses, air spaces, and back focus match the scaled values.
- Confirmed the front surface sign is positive from the drawing and element shape.
- The patent drawing does not publish numeric semi-diameters. Existing SDs remain rational against the drawing, f/5.5 aperture, and 60-degree patent field note; runtime element-render diagnostics showed no hidden trim warnings.

### Verification

- Temporary Zeiss Jena diagnostic test - passed; runtime trim diagnostics empty for this lens.
