# Audit Log - Carl Zeiss Jena Biogon 35mm f/2.8 (pre-war)

Patent: US 2,084,309, single worked example
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - Patent and rendering recheck

### Source Note

- Rechecked the local patent PDF table against the current scaled prescription. The patent example computes to f = 100.239088608 mm and the data file correctly scales radii, thicknesses, air spaces, back focus, and authored SDs by 35 / 100.239088608.
- The patent lists no semi-diameters or aspherical coefficients. The drawing is schematic and does not support numeric aperture derivation beyond the existing conservative layout estimates.

### Phase 1 - Glass / APD / high-index status

| Element / surface | Field | Result | Justification |
|---|---|---|---|
| L1, L2, L6 | `glass` | retained `Unmatched vintage Zeiss/Schott 672/472` | Patent lists nd=1.6716, vd=47.2. No coefficient-backed public match was identified; the explicit unmatched label avoids speculative catalog resolution. |
| L3, L5 | `glass`, APD fields | retained FK3 with inferred APD line indices | Patent lists nd=1.4645, vd=65.7. This matches FK3 and the file already carries FK3 inquiry-glass line indices and ΔPg,F. |
| L4 | `glass`, high-index status | retained SF8 / N-SF8 equivalent | Patent lists nd=1.6890, vd=31.0. N-SF8 is a tight coefficient-backed dense-flint equivalent and remains appropriate. |
| L7 | `glass` | retained `Unmatched vintage Zeiss/Schott 533/489` | Patent lists nd=1.5333, vd=48.9. No coefficient-backed public match was identified. |

### Phase 2 - Prescription and SD review

- Verified the stored scaled prescription against the patent table, including the large L6 thickness and the final L7 meniscus.
- Rechecked the diagram proportions against the patent drawing: the conservative front/rear SD taper and inferred mid-gap stop remain visually rational.
- Runtime element-render diagnostics showed no hidden trim warnings over the infinity layout, so no SD changes were made.

### Verification

- Temporary Zeiss Jena diagnostic test - passed; runtime trim diagnostics empty for this lens.
