# Audit Log - Sigma 10-18mm F2.8 DC DN | Contemporary

Patent: JP 2024-104911 A, Numerical Example 2

## 2026-06-13 - New lens patent audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1, L2, L4-L8, L11, L13 | `apd` | `patent` | `false` | Patent Example 2 publishes theta_gF for every element, but those rows are not all special APD glasses. |
| L10 | `apdNote` | `inferred SLD-class element` | `strongest non-FLD SLD candidate` | Keeps the APD highlight on the patent-listed dPgF = +0.0210 row while making the Sigma SLD placement explicit as an inference. |

L3, L9, and L12 remain patent-tagged APD rows because their nd/vd and dPgF match the three FLD-class elements. L10 remains patent-tagged as the strongest non-FLD SLD candidate. All elements retain their patent-derived `dPgF` values for chromatic tracing.

### Phase 2 - Retained-information audit

- Surface rows 1-24, the stop position, and the wide-end base spacings match JP 2024-104911 A Example 2.
- Variable spacings d7, d12, d18, d20, and BF match the wide / middle / telephoto table.
- Aspherical surfaces 1, 3, 17, 18, 23, and 24 match the patent coefficients. Surface 4 remains the documented even-order refit of the patent's odd-plus-even polynomial form.
- Semi-diameters are inferred because the patent publishes no clear-aperture radii. They were visually checked against Figure 8 and pass renderer diagnostics with no trim above 0.25 mm at wide or telephoto.

### Phase 3 - Spectral / metadata enrichment

- Patent theta_gF-derived dPgF values were retained on all thirteen elements.
- No new top-level metadata was required; patent, element/group count, zoom positions, focus description, mount metadata, and format metadata were already present.

### Phase 4 - Analysis sync

- Updated the glass-identification discussion and verification summary to clarify that APD display tags are limited to L3, L9, L10, and L12 even though the patent publishes theta_gF for every element.
