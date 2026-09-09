# Audit Log - Canon EF-M 28mm f/3.5 Macro IS STM

Patent: US 2016/0313535 A1, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20160313535A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The OHARA-equivalent labels match the patent nd/vd table to the precision used in the source.
- High-index and ultra-high-index elements 102, 104, 106, 109a, and 109b remain correctly documented by their nd values and roles.

### Phase 2 - Retained-information audit

- The patent does not publish clear-aperture semi-diameters. Existing SDs remain inferred from paraxial marginal/chief-ray envelopes, edge/slope checks, and cross-gap clearance.
- Retained the project-convention omission of the image-side 1.00 mm plane-parallel plate, with its air-equivalent optical path folded into BFD.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| 107 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate element matching Canon's one-UD production claim and the analysis text. |
