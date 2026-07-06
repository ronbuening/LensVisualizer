# Audit Log - AGFA COLOR-MAGNOLAR II 100mm f/4.5

Patent: GB 775,944, sole numerical example

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["enlarging-lens"]`.
- The data file and patent-linked analysis identify this as an Agfa Color-Magnolar II enlarger objective, so it belongs in the existing enlarging-lens taxonomy bucket rather than a camera mount.
- `imageFormat` remains unset because the reviewed sources do not bind this scaled 100 mm dataset to one canonical negative format.

### Sources

- GB 775,944, Agfa Camera-Werk AG, sole numerical example.
- Data-file context: Heliar-type enlarger objective.

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/GB_775944_A.pdf`. The patent provides normalized radii, thicknesses, air spaces, refractive indices, and Abbe numbers, but no clear-aperture or semi-diameter table.
- The data file correctly records that the printed drawing is a 200 mm section while the prescription table is normalized to f = 1.00 and scaled to the 100 mm dataset.
- Figure review supports the current SD hierarchy: broad front cemented component, smaller biconcave central singlet, and a rear cemented component slightly smaller than the front component.
- No SD values changed. Current values remain inferred renderer estimates constrained by f/4.5 marginal geometry, edge thickness, rim slope, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
