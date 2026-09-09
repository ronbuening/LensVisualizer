# Audit Log - Canon EF 100mm f/2.8L Macro IS USM

Patent: US 7,864,451 B2, First Numerical Example

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US7864451.pdf` and the existing analysis sidecar against the data file.
- No glass label changes were needed. The stored nd/vd pairs match the patent table and the OHARA-equivalent labels remain plausible catalog matches.
- High-index dense-flint and lanthanum rows (notably E3, E7, E8, E11, and E12) are already represented by their nd/vd values and roles; no separate high-index schema field exists.

### Phase 2 - Retained-information audit

- Confirmed the source note: the patent table prints full effective diameters, so the stored `sd` values are one half of the patent values.
- Retained the documented renderer guardrail reductions on surfaces 5 and 10; these do not change the optical prescription.
- Retained SP2 at surface 14 and the main aperture stop at surface 15.

### Phase 3 - Spectral / metadata enrichment

- No new patent line-index or partial-dispersion table was found.
- E4 remains `apd: "inferred"` from the S-FPL51 catalog material and Canon's one-UD production description.
