# Audit Log - Nikon AF DX Fisheye-Nikkor 10.5mm f/2.8G ED

Patent: US 7,161,746 B2, Example 9 / Table 9 / FIG. 17

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US7161746.pdf`. The patent text maps Example 9 to FIG. 17 and Table 9.
- The patent discusses front-lens diameter as a design constraint but does not publish full clear semi-diameters for Example 9.
- FIG. 17 labels seven lens components, with cemented components accounting for the data file's 10 glass elements / 7 groups. Stored SDs match the figure hierarchy: a very large front L1 at 18 mm, stepped-down front-group elements through 6.4-14.6 mm, a 6.0 mm stop, and a compact rear G2 expanding to 10.3 mm at the final element.
- No SD values changed. Current values remain inferred from FIG. 17 and constrained by the signed-sag and cross-gap checks documented in the data header.

### Verification

- `npm test -- elementRenderDiagnostics`
