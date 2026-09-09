# Audit Log - Carl Zeiss Olympia-Sonnar 180mm f/2.8

Patent: DE 1,268,404 B, Example 2 / Table II  
Catalog version: local working tree, 2026-06-25

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["zeiss-contarex"]` and `imageFormat: "135-full-frame"`.
- The data file header identifies the design as a Contarex SLR telephoto Sonnar, and Contarex lens references list the 180 mm f/2.8 Olympia-Sonnar in the Contarex bayonet system.

### Sources

- DE 1,268,404 B, Example 2 / Table II.
- Contarex lens overview, https://en.wikipedia.org/wiki/Contarex_lenses

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | DE 1,268,404 Table II lists the four `nd`/`vd` pairs, and all four rows already resolve to trusted catalog/Sellmeier coverage in the generated reports. No glass relabel was needed. |

### Phase 2 - Retained-information audit

- Rechecked Table II after x180 scaling. Radii, thicknesses, glass constants, and the split of the post-L3 air space around the stop remain consistent with the patent.
- Confirmed the patent does not publish clear apertures. Stored SDs remain inferred from the f/2.8 marginal ray, drawing proportions, and 67 mm filter-thread clearance.
- The fixed unit-focus model remains appropriate; the patent does not publish internal focusing data.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate. The patent provides no partial-dispersion data.
- High-index/high-dispersion status for SF56A/SF11 and SF4 is already represented in glass names and element roles.
