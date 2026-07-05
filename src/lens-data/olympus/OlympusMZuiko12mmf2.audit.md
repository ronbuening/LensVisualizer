# Audit Log - Olympus M.Zuiko Digital ED 12mm f/2.0

Patent: US 8,248,716 B2, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8248716.pdf`. Numerical Example 1 maps to FIG. 1.
- The patent publishes prescription and aspherical data, but no full per-surface clear-aperture table. The data file intentionally omits the sensor-side cover-glass stack from the rendered prescription.
- FIG. 1 shows a tapered front group, a smaller stop waist, and a rear group that widens toward the final relay element. Stored SDs follow that silhouette: 10.4-6.4 mm through the front/middle run, a 4.564608 mm stop, and 6.1-8.7 mm through the rear group.
- No SD values changed. Current values remain inferred from the patent figure, marginal/chief ray envelopes, and renderer geometry constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
