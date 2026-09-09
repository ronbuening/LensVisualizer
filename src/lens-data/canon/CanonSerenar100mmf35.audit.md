# Audit Log - Canon Serenar 100mm f/3.5 I

Patent: DE 1,022,027 B

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/DE_1022027_B.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The vintage Schott/OHARA/HOYA class labels remain intentionally descriptive for older nd/vd-only materials.
- No element requires high-index status; all stored nd values are below 1.8.

### Phase 2 - Retained-information audit

- The patent does not publish clear apertures or a separate stop position. Existing SDs and the stop location remain conservative renderer-safe estimates.
- Retained the unscaled f=100 mm patent prescription and existing paraxial audit values in the file header.

## 2026-08-07 - Legacy CF2 catalog recovery

- Visually rechecked DE 1,022,027 B: Member III remains `nd=1.5263`, `νd=51.0`, code 526510.
- HOYA's obsolete CF2 row (`1.526296 / 51.046045`, rounded code 526511) supplies the coefficient-backed catalog
  equivalent. The production supplier remains unspecified.
- Strict and trusted catalog coverage are now complete at `5/5`; no geometry changed.
