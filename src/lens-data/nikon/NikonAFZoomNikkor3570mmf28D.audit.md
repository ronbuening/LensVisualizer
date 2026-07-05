# Audit Log - Nikon AF Zoom-Nikkor 35-70mm f/2.8D

Patent: US 6,320,698 B1, Example 3 / Table 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US6320698.pdf`. Example 3 maps to FIG. 7 and Table 3.
- The patent uses effective-diameter quantities in conditions and discusses the flare stop, but it does not publish a full per-surface clear-aperture table.
- FIG. 7 shows a large G1, a substantial G2, a smaller stop-adjacent G3/VR group, and a larger rear G4. Stored SDs follow that figure: roughly 30.0-21.5 mm in G1, 17.2-20.8 mm in G2, 12.3-12.8 mm around G3, and 15.5-18.4 mm through G4.
- No SD values changed. Current values remain inferred from FIG. 7, the split stop/flare-stop rendering model, and ray-clearance constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
