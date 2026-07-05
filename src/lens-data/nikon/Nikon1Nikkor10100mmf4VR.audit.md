# Audit Log - Nikon 1 NIKKOR VR 10-100mm f/4-5.6

Patent: US 2020/0348497 A1, Example 8 / Table 8

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20200348497A1.pdf`. The brief-description text maps Example 8 to FIGS. 18A-18C, with FIGS. 19A-19C as the corresponding aberration sheet.
- The patent publishes the Example 8 prescription, zoom data, and moving-group description, but no full per-surface clear-aperture or semi-diameter table.
- FIG. 18 shows a broad three-element G1, compact G2/G3 groups, and a dense rear G4/VR group. Stored SDs preserve that hierarchy: roughly 19.8-20.2 mm through G1, about 5.3-6.25 mm through the compact middle/rear moving groups, and a stop SD of 4.85 mm.
- No SD values changed. Current values remain figure-derived rendering estimates constrained by paraxial ray clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
