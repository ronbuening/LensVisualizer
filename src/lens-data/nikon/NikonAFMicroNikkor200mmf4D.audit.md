# Audit Log - Nikon AF MICRO-NIKKOR 200mm f/4D IF-ED

Patent: US 5,751,485, Ninth Embodiment / Table 9

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US5751485.pdf`. The brief-description text maps the Ninth Embodiment to FIG. 9 and Table 9.
- The patent includes effective-diameter variables for conditional expressions, but not a per-surface clear-aperture or semi-diameter table for Table 9.
- FIG. 9 shows large front floating groups, a smaller G2 before the stop, and the final GL/GLP group behind the stop. Stored SDs preserve that profile: 31.0-25.0 mm through G11/G12, 21.5-16.0 mm through G2, a 14.7416 mm stop, and about 15.8-18.2 mm through GL.
- No SD values changed. Current values remain inferred from FIG. 9, paraxial ray fans, edge-thickness limits, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
