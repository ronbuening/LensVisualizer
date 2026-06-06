# Audit Log - Sigma 24mm F1.4 DG DN | Art

Patent: JP 2023-074094 A, Example 1 (`patents/JP2023074094A.pdf`)

## 2026-06-06 - APD flag correction

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1, L3-L10, L12-L13, L15-L17 | `apd` / `apdNote` | `apd: "patent"` and a patent deviation note on every element | APD fields removed; patent `dPgF` values retained | Example 1 publishes signed g-F partial-dispersion deviations for every glass, but that does not make every substrate an APD special element. APD highlighting is limited to the special-dispersion glasses supported by Sigma's production census and the patent's chromatic strategy. |
| L2, L14 | `apdNote` | Generic patent `ΔθgF` note | FLD-class fluorophosphate note with patent `ΔθgF` | These are the two FLD-class fluorophosphate elements matching Sigma's published special-element count. |
| L11 | `apdNote` | Generic patent `ΔθgF` note | SLD-class ED crown note with patent `ΔθgF` | This is the single SLD-class ED crown element matching Sigma's published special-element count. |

### Phase 2 - Retained-information audit

- Rechecked Example 1 surface table, focus-spacing table, and asphere table in the local patent PDF.
- No radius, spacing, index, Abbe number, focus variable, aspheric coefficient, or semi-diameter changes were made in this pass.

### Phase 3 - Spectral / metadata enrichment

- Retained the patent-published signed partial-dispersion-deviation values as per-element `dPgF` fields for chromatic tracing.
- No `nC`, `nF`, or `ng` line-index data were found in the patent text.

### Phase 4 - Analysis sync

- Updated the analysis to clarify that the patent deviation column is retained for all glasses, but APD designation/highlighting applies only to L2, L11, and L14.
- Removed repeated ordinary-glass `ΔθgF` callouts from the element-by-element first lines so the special FLD/SLD elements stand out.
