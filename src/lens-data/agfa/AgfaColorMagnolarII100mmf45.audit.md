# Audit Log - AGFA COLOR-MAGNOLAR II 100mm f/4.5

Patent: GB 775,944, sole numerical example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/GB_775944_A.pdf`. The patent provides normalized radii, thicknesses, air spaces, refractive indices, and Abbe numbers, but no clear-aperture or semi-diameter table.
- The data file correctly records that the printed drawing is a 200 mm section while the prescription table is normalized to f = 1.00 and scaled to the 100 mm dataset.
- Figure review supports the current SD hierarchy: broad front cemented component, smaller biconcave central singlet, and a rear cemented component slightly smaller than the front component.
- No SD values changed. Current values remain inferred renderer estimates constrained by f/4.5 marginal geometry, edge thickness, rim slope, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
