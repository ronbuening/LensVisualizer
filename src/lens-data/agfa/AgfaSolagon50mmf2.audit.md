# Audit Log - AGFA SOLAGON 50mm f/2

Patent: US 2,745,315, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2745315.pdf`. The patent publishes the f = 100 mm Example 1 prescription and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 confirms the disturbed-symmetry double-Gauss layout: tall outer positive singlets, two negative cemented menisci facing the central stop, and a rear singlet of similar height to the rear meniscus group.
- Stored SDs preserve that broad f/2 silhouette while respecting the tight spherical-rim limit at the stop-facing R5 surface and the narrow rear L5-L6 air gap.
- No SD values changed. Current values remain inferred from paraxial marginal/chief-ray traces, figure proportions, edge-thickness checks, spherical-rim limits, and same-element diameter constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
