# Audit Log - Canon EF 200mm f/2L IS USM

Patent: JP 2008-145584 A, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/JP2008145584A.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The powered elements match the patent nd/vd table; the rear 2.00 mm plane-parallel filter plate remains omitted per project convention and folded into final BFD.
- High-index elements L7, L12, L15, and L16 remain correctly described by their dense-flint / dense-lanthanum glass labels and nd values.

### Phase 2 - Retained-information audit

- The text extraction did not expose a usable patent clear-aperture column for Numerical Example 1, so the existing SDs remain geometry estimates from the f/2.05 entrance pupil, drawing proportions, and renderer constraints.
- Retained the existing stop SD solution, which gives the documented entrance-pupil semi-diameter and design F-number.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 | `apd` / `apdNote` | omitted | `inferred` | Fluorite nd/vd signature and production special-glass count identify the anomalous-dispersion front element. |
| L3 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD-class element already has line-index fields; the badge metadata now matches the analysis. |
| L6 | `apd` / `apdNote` | omitted | `inferred` | Second S-FPL51 UD-class element in the front chromatic-correction doublet. |
