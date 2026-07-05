# Audit Log - CANON NEW FD 100mm f/2

Patent: JP S53-133028, sole worked example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPA 1978133028-000000.pdf`. The patent publishes the normalized f = 1 prescription and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 supports the current SD progression: a large front positive singlet and front cemented group, a smaller isolated negative element before the stop, and a compact rear cemented group.
- Stored SDs match that hierarchy after 100x scaling: front group 25-26 mm, isolated negative element 17-17.5 mm, and rear group 15-15.5 mm.
- No SD values changed. Current values remain inferred from f/2 marginal geometry, reduced off-axis field, Fig. 1 proportions, the 52 mm production filter-thread bound, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
