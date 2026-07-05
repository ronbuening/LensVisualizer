# Audit Log - CANON RF 20mm f/1.4 L VCM

Patent: US 2025/0389929 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US-20250389929-A1.pdf`. The Numerical Example 2 table publishes only surface number, radius, thickness, refractive index, and Abbe number; it does not include clear apertures or effective diameters.
- Fig. 3 shows the corresponding fast wide-angle section: a large three-negative front portion within L1, a stop near the middle of L1, a moving positive L2 focus group, and a smaller negative rear L3 group.
- Stored SDs follow that envelope: L1 stays broad at roughly 13.4-15.5 mm before the stop, the stop is 13 mm, L2 re-expands through 15-18 mm, and the final L3 doublet remains in the 16.8-18.4 mm range.
- No SD values changed. Current values remain renderer-conservative inferred apertures constrained by sd/|R|, aspherical slope, element SD ratio, edge thickness, and signed cross-gap sag intrusion.

### Verification

- `npm test -- elementRenderDiagnostics`
