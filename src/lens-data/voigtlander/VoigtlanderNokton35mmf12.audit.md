# Audit Log - Voigtlander Nokton 35mm f/1.2 Aspherical

Patent: JP 2004-101880A

## 2026-06-23 - Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2004101880A.pdf` (untracked local file).
- Rendered and visually rechecked Example 2, Table 3. The stored prescription and aspheric coefficients match the patent table.
- Patent high-index condition for the cemented-doublet positive elements is satisfied by the nd=1.80420 elements; no high-index metadata changes were needed.
- Updated L3b from `S-TIF1 (OHARA)` to `E-FD2 (HOYA, patent nd/vd match) / S-TIM22 class` for the nd=1.64769, vd=33.8 row. Also synced the analysis-only L7 label to the current `S-TIL1` match.
- The patent does not list dPgF/APD rows or semidiameters. Existing APD false values and derived SDs remain appropriate.

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2004101880A.pdf`; local text confirms the queued nd/vd rows.
- Updated surface 3 to `S-TIL26 (OHARA)`, surface 12 to `S-TIH6 (OHARA)`, and surface 17 to `S-TIL1 (OHARA)`.
- One unrelated no-catalog row remains outside this relabel batch.
