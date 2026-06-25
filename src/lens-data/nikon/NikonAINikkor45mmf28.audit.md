# Audit Log - Nikon AI Nikkor 45mm f/2.8

Patent: JP 2003-005030 A, Example 6

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Example 6 against the current data file. No data changes were made in this pass.
- Confirmed the four glass labels remain catalog-backed: `S-LAH59`, `S-TIM28`, `S-TIM28`, and `S-LAH58`.
- The existing line-index and partial-dispersion fields remain supported by the project data for these catalog glasses. The patent prescription itself does not require an unresolved six-digit row.

### Phase 2 - Geometry and SD review

- Confirmed the patent table includes the aperture stop as row 3 and that the data file correctly represents it as `STO`.
- The patent does not publish clear semi-diameters. The existing SDs remain ray-envelope estimates constrained by the patent f/2.88 aperture, field, edge thickness, and the compact Tessar layout.
- Retained the existing stop semi-diameter and lens SDs. Their proportions match the small front group, narrower stop, and larger rear cemented element shown by the patent drawing.

### Phase 3 - Spectral / APD review

- No ED/APD claim, aspherical surface, or special anomalous-partial-dispersion source was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
