# Audit Log - FUJIFILM GA645 Wide Professional 45mm f/4

Patent: US 5,621,575, Embodiment 6

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US5621575.pdf`. The patent publishes the normalized Embodiment 6 prescription and Fig. 11 section, but no clear-aperture or semi-diameter table.
- Fig. 11 shows a large front negative meniscus, a smaller middle cemented pair, a narrow stop-adjacent region, and a broad final rear meniscus.
- Stored SDs match that silhouette: L1 is 12.0-15.0 mm, the L2/L3 middle component is 9.2-11.5 mm, the stop-adjacent L4-L6 section stays near 8.0-11.25 mm, and final L7 returns to 12.0-15.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/4 stop geometry, ray-envelope clearance, edge thickness, and cross-gap sag limits.

### Verification

- `npm test -- elementRenderDiagnostics`
