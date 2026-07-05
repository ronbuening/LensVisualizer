# Audit Log - Rodenstock Sironar-N 100mm f/5.6

Patent: DE 27 29 831 B1, sole numerical example in Claim 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2729831_B1.pdf`. The drawing sheet shows the nearly symmetric Sironar section.
- The patent normalizes to f' = 100 and does not publish clear-aperture semi-diameters.
- The drawing shows broad outer elements, narrow inner groups near the aperture, and rear symmetry around the stop. Stored SDs follow that pattern: 12.15 mm at the outer surfaces, 6.9-7.7 mm through the inner groups, and a 6.933 mm stop.
- No SD values changed. Current values remain inferred from the patent drawing, the f' = 100 normalization, and renderer geometry checks.

### Verification

- `npm test -- elementRenderDiagnostics`
