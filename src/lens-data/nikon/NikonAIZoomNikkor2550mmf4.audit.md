# Audit Log — Nikon AI Zoom-Nikkor 25-50mm f/4

Patent: US 4,189,212, Example 8 / Claim 20.

## 2026-06-24 — Patent recheck, code-only glass rows, and SD provenance

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L6 / surface 12 | `glass` | `K10 class (501/565)` | unchanged | Patent Example 8 confirms `nd=1.50137`, `νd=56.5`. No coefficient-backed exact public catalog match was verified for `501565`; the same glass is repeated on L7 and L9b. |
| L7 / surface 14 | `glass` | `K10 class (501/565)` | unchanged | Same patent glass row as L6; retained as code-family `501565`. |
| L9a / surface 18 | `glass` | `Unmatched 465/658 (FK/phosphate crown class)` | unchanged | Patent Example 8 confirms `nd=1.46450`, `νd=65.8`. No exact coefficient-backed public catalog source was verified for `465658`. |
| L9b / surface 20 | `glass` | `K10 class (501/565)` | unchanged | Same patent glass row as L6/L7; retained as code-family `501565`. |

### Phase 2 — Retained-information audit

- Rechecked local `patents/US4189212.pdf` against the data file and companion analysis sidecar.
- Confirmed the data file's patent erratum: Example 8 prints `r11 = +219.5`, but Claim 20 repeats the same prescription with `r11 = -219.5`; the negative sign is required to reproduce the patent `f=25.50` wide-end focal length.
- Confirmed the three zoom spacings for `d8` and back-focus values used by the data file. The inserted `STO` split inside `d8` remains a modeling convenience because the patent describes a zoom-cammed diaphragm but does not publish a separate stop row.
- The patent does not publish per-surface clear apertures or semi-diameters. Added a data-header note documenting that current `sd` values are visualization estimates from marginal/chief ray envelopes and renderer clearance constraints.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, `θgF`, `Pg,F`, or `dPgF` rows were found in the extracted local patent text.
- APD status remains absent/false for all elements. High-index status remains descriptive for the dense lanthanum/flint members; the patent does not identify anomalous partial dispersion.

### Phase 4 — Analysis sync

- Current analysis sidecar already matches the audited data: it documents the r11 sign correction, the zoom-cammed aperture approximation, code-only glass status, and SD-estimate provenance.

### Verification

- Pending batch verification after the Nikon audit pass.
