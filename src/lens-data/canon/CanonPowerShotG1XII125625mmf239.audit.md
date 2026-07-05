# Audit Log - CANON POWERSHOT G1 X MARK II 12.5-62.5mm f/2.0-3.9

Patent: US 2015/0219882 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20150219882A1.pdf`. The patent supplies the worked prescription and a corresponding positive-lead six-group cross-section, but no clear-aperture or semi-diameter table.
- The figure shows the front B1 cemented group as the largest section, a smaller B2 variator, compact B3/B4/B5 groups through the stop and focus region, and a larger final positive B6 relay.
- Stored SDs already match that hierarchy: B1 starts at 20.0 mm, B2 stays near 9-10 mm, the central groups sit mostly near 7-9.6 mm, and B6 re-expands to 13.2 mm.
- No SD values changed. Current values remain inferred from multi-state marginal/chief-ray clearance and constrained by renderer safety, edge thickness, sd/|R|, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
