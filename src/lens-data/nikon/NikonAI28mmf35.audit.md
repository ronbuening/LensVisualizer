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

### Verification

- Pending full Nikon batch verification.
