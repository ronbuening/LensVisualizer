# Audit Log - ENNA MÜNCHEN LITHAGON 35mm f/3.5

Patent: US 2,821,112, sole numerical example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2821112.pdf`. The patent gives the normalized f = 1 prescription and Fig. 1 section, but no clear-aperture or semi-diameter column.
- Fig. 1 shows the four-member retrofocus form clearly: a very tall front negative meniscus separated by a long air gap from a compact triplet, with the center negative triplet member shorter than the two surrounding positive members.
- Stored SDs match that outline: L1 is much larger than the triplet at 19.5-20.0 mm, L2 and L4 are similar compact positive members at 8.3-9.0 mm, and L3 narrows to 6.2-6.5 mm around the stop-adjacent waist.
- No SD values changed. Current values remain inferred from the patent figure, marginal/chief-ray envelope, f/3.5 stop solution, and mechanical edge-clearance checks.

### Verification

- `npm test -- elementRenderDiagnostics`
