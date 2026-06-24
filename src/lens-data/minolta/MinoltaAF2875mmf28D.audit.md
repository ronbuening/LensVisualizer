# Audit Log - Minolta AF 28-75mm f/2.8 (D)

Patent: JP 2004-101739 A, sole numerical embodiment

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/JP2004101739A.pdf`.
- The numeric tables do not extract cleanly with `pdftotext`, so pages 8-9 were rendered locally for visual checking.
- The rendered tables confirm the key material rows:
  - `1.49700 / 81.6` appears on the low-dispersion positive elements L31, L33, and L42.
  - `1.48749 / 70.2` appears on the fluor-crown rows modeled as S-FSL5-class elements.
  - `1.53610 / 41.2` is used only by the thin hybrid aspheric resin layers.
  - Dense/high-index rows such as `1.84666 / 23.8`, `1.80400 / 46.6`, `1.80518 / 25.4`, `1.83400 / 37.2`, and `1.58144 / 40.8` match the existing data.

### Glass and APD disposition

- No data changes were made.
- The `S-FPL51 (OHARA) / FCD1 class` labels remain attached only to the patent's `1.49700 / 81.6` low-dispersion rows, not to the `1.48749 / 70.2` S-FSL5 rows.
- APD remains `inferred` for the low-dispersion rows because the patent lists nd/vd only and gives no partial-dispersion ratios.

### Semi-diameter disposition

- The patent includes condition text around front effective diameter and 67 mm-class sizing, but it does not publish a per-surface clear-aperture table.
- Existing SDs remain inferred from the 67 mm filter target, paraxial envelope, aspheric slope, edge thickness, and zoom/focus clearance constraints. No SD edits were made.

