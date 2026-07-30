# Audit Log - Pentax-DA* 16-50mm f/2.8 ED AL[IF] SDM

Patent: US 7,301,711 B2

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US7301711.pdf`; local OCR is rough but the queued patent rows match the stored nd/vd values in the data file.
- Updated surface 2 glass to `S-LAL8 (OHARA)` for nd=1.71300, vd=53.90.
- Updated surface 4 glass to `S-LAH66 (OHARA)` for nd=1.77250, vd=49.60.
- Updated surface 11 glass to `S-TIM22 (OHARA)` for nd=1.64769, vd=33.80.

## 2026-06-23 - Pentax folder patent audit

- Rechecked local patent file `patents/US7301711.pdf` and reviewed the first drawing sheet.
- Left the two `BSM-class (586/609, vendor uncertain)` rows unchanged; no exact current public catalog match was identified for the stored patent coordinate.
- Left the hybrid UV-cure aspherical resin layer uncataloged, consistent with the patent hybrid-asphere construction.
- APD status remains `false`; the patent relies on high-Abbe ED-like glasses by nd/vd but does not provide partial-dispersion data.
- No patent clear-aperture or semi-diameter table was found. Existing zoom-state SD estimates remain unchanged and remain consistent with the broad front group, central stop, and relay-group drawing.

## 2026-07-30 - 586609 coefficient backfill

### Patent evidence

- Rendered physical page 22 of local `patents/US7301711.pdf` and visually checked Embodiment 6 / Table 6.
- Surface 18 (L32) and surface 27 (L44) both print `nd = 1.58636` and `νd = 60.9`, matching the data file.
- The patent supplies no `nC`, `nF`, `ng`, partial-dispersion value, glass name, or supplier for either row.

### Catalog evidence

- SUMITA's first-party 2025-11-07 all-glass Zemax catalog publishes a distinct K-SKLD5(M) molding-state row at `1.58606 / 61.0` with a formula-1 coefficient polynomial.
- The row differs from the patent coordinate by `Δnd = -0.00030` and `Δνd = +0.1`, well inside the runtime `±0.003 / ±2` safety window.
- The coefficient polynomial round-trips to `nd = 1.586058` and `νd = 60.9773`. The `(M)` molding designation is consistent with both elements carrying aspherical surfaces, but does not prove the production supplier.
- SUMITA reuses base-glass product code `589612` for K-SKLD5(M), even though the molding-state coordinate differs from the base K-SKLD5 row. The catalog entry therefore omits `code6`; only the explicit normalized name `K-SKLD5-M` can resolve it.

### Disposition

- Added the coefficient-backed SUMITA row as `K-SKLD5-M` and relabeled L32/L44 as catalog equivalents with the production supplier unspecified.
- Both elements now use strict Sellmeier dispersion instead of the patent Abbe fallback.
