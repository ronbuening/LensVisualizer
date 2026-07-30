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

## 2026-07-30 SUMITA BALK3 coefficient recovery

- SUMITA's discontinued-inclusive BALK3 polynomial shares L9's exact `nd = 1.51835` and reproduces its independent
  `ng = 1.52897` anchor; `vd = 60.3` agrees with the patent-rounded `60.23`.
- Relabeled L9 as a BALK3 optical equivalent while leaving the production supplier unspecified.
- No prescription, zoom, focus, or semi-diameter values changed.

## 2026-07-30 - S-LAL52 catalog-equivalent recovery

- Re-rendered local `patents/US6320698.pdf`, PDF page 16. Table 3 defines `n(D)` and `ν` at the d line and lists L2/L3 at nd = 1.67025, νd = 57.53, n(G) = 1.68466.
- Discontinued OHARA S-LAL52 evaluates to nd = 1.67000, νd = 57.328, n(g) = 1.68449, reproducing all three patent coordinates within the project safety window.
- Relabeled L2 and L3 as S-LAL52 catalog equivalents while leaving the production supplier unspecified. No prescription data changed.
