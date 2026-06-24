# Audit Log - Nikon NIKKOR Z 24-50mm f/4-6.3

Patent: JP 2021-189377 A, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2c / 11 | `glass` | `NBFD12 (HOYA)` | `BAFD7 (HOYA) / S-BAH27 / NBFD12 class` | Example 1 publishes `nd = 1.70154`, `vd = 41.15`; BAFD7/S-BAH27 are resolver-backed catalog equivalents for this barium-flint class, while NBFD12 remains the historical class reference. |
| L2a / 7 | `apd` | `false` | `"inferred"` | FCD1/S-FPL51 is an ED fluorophosphate class, but the patent gives no partial-dispersion table. |
| L2b / 9 | `apd` | `false` | `"inferred"` | Same ED-class glass and same source limitation as L2a. |

- Retained L1a `Unmatched barium crown (patent nd=1.69680, vd=55.46...)` because the prior S-BSM10 label did not match and no exact coefficient-backed current public catalog entry was verified.
- Retained `M-BACD12 (HOYA)` as an Abbe-only property-class label. The nearest resolver-backed Hikari Q-SK52S shares the same rounded six-digit class, but its `nd` does not match the patent row closely enough to replace the label.
- Retained COP resin and UV-cure adhesive rows as non-catalog material rows.

### Phase 2 - Geometry and SD review

- Rechecked the Example 1 radii, thicknesses, variable gaps, and aspherical coefficients against the local patent text.
- Retained the existing errata notes for the surface 14 `A6` coefficient, surface 20 `A8` exponent, and the shifted L3b asphere surface numbers.
- The patent does not publish clear apertures. Retained the existing SDs as ray-envelope estimates; their small stop, compact internal groups, and larger rear image-side clearances remain plausible against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives `nd`/`vd`, aspherical coefficients, and variable gaps, but no line-index table or partial-dispersion table.
- APD status for the two ED elements is therefore recorded as inferred from the glass class rather than patent-measured partial dispersion.

### Phase 4 - Analysis sync

- Updated `NikonNikkorZ2450mmf463.analysis.md` to describe the BAFD7/S-BAH27/NBFD12 relabel, the M-BACD12 property-class limitation, and the inferred APD status of the two ED elements.

### Verification

- Pending full Nikon batch verification.
