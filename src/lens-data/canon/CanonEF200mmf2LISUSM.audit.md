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

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 1 (Table 1, PDF page 9) at 160 dpi: surface 28 D = 3.27; surfaces 29–30 are the plane drop-in
  filter F (designated `F` in the patent's reference list), 2.00 mm, nd 1.51633, νd 64.1; surface 30 → image 60.36.
  Only the infinity table is printed, so the last gap is not variable.
- Surface 28 now stores the patent's 3.27 mm, with `rearPlates` F (S-BSL7, resolver-compatible) and gapAfter 60.36 mm.
  Paraxial check against the previous data: EFL identical; defocus unchanged at both focus keyframes (worst difference
  1e-7 mm, since the old 64.948974 fold was exact). Physical track grows by 0.681 mm and now equals the 231.47 mm
  first-surface-to-image sum already quoted in the analysis.
