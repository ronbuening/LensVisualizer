# Audit Log — Sony Planar T* FE 50mm F1.4 ZA

Patent: WO 2017/138250 A1, Example 2

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local equivalent patent file `patents/JPWO2017138250A1.pdf`.
- Example 2 row confirmed Ln2 / surface 6 nd = 1.71735, vd = 29.5.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| Ln2 / S6 | `S-TIM27 (OHARA)` | `S-TIH1 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the Ln2 element paragraph and glass table.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/JPWO2017138250A1.pdf` and the current analysis sidecar against the data file.
- Existing R/d/nd/vd, high-index labels, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- Updated Lp3 from `apd: false` to `apd: "inferred"` to match its existing fluorophosphate positive-delta-PgF note. The patent does not publish spectral partial dispersion data.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-30 — 995293 source review

### Patent evidence

- Rendered physical page 15 of local `patents/JPWO2017138250A1.pdf` and visually checked Example 2 / Table 6.
- Surface 12, the front surface of L21, prints `R = -243.918`, `D = 1.800`, `nd = 1.99502`, and `νd = 29.3`, matching the data file.
- Text and table review found no published `nC`, `nF`, `ng`, partial-dispersion value, glass name, composition, or supplier for this row.

### Catalog review

- Rechecked current and discontinued-inclusive first-party coefficient data from OHARA, HOYA, Hikari, and SUMITA, plus the project catalog.
- The nearest plausible public rows are OHARA S-LAH99/S-LAH99W (`2.001000 / 29.139473`), HOYA TAFD55/TAFD55-W (`2.00100 / 29.13`), and Hikari J-LASFH16/J-LASFH16HS (`2.001 / 29.12`).
- Each misses the patent d-line index by about `+0.00598`, outside the resolver's `±0.003` safety window. None can be assigned as a coefficient-backed equivalent.
- The previous tentative CDGM H-ZLaF92 attribution was coordinate-incompatible (`1.92286 / 20.88`) and was removed.

### Disposition

- L21 remains on the patent Abbe fallback with an explicit unmatched `995293` annotation.
- Removed the unsupported lanthanum-niobium composition and vendor-class claims from the data and analysis files.
