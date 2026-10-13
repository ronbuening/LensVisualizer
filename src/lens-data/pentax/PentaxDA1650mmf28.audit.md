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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 6 (PDF p. 22) prints half-angles W = 42.0° / 26.7° / 16.2° for Embodiment 6 and no image height; at those angles
the traced chief ray lands beyond the APS-C corner (14.175 mm), so the design covers it. The estimated rims clipped the
real chief ray (solved through the stop centre) first: at wide the L21 resin layer and its junction (6A/7, 10.6 mm)
stopped the field at 35.5° (11.42 mm, 81% of the corner), and at middle and tele surface 1 (25.7 mm) stopped it at
25.5° and 15.4° (95% and 96%). As the maximum over stations, the corner chief ray needs surface 1 ≥ 27.18 (middle), 2 ≥
25.97, 3 ≥ 25.38 and 5 ≥ 23.10 (tele), and 6A ≥ 12.95 and 7 ≥ 12.87 mm (wide). Values are floor + ~0.5 mm; the front
rim stays well inside the 77 mm filter thread (front sd under ~36 mm). No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 25.7 | 27.7 | middle corner chief ray 27.18 mm + clearance |
| 2 | 25.3 | 26.5 | tele corner chief ray 25.97 mm + clearance (L11/L12 cemented junction) |
| 3 | 24.4 | 25.9 | tele corner chief ray 25.38 mm + clearance |
| 4 | 24.4 | 25.0 | L13 scaled with surface 5 (own tele chief ray 23.95 mm) |
| 5 | 23.0 | 23.6 | tele corner chief ray 23.10 mm + clearance |
| 6A | 10.6 | 13.5 | wide corner chief ray 12.95 mm + clearance; scan to 16.2 mm shows no turnover |
| 7 | 10.6 | 13.5 | wide corner chief ray 12.87 mm; kept equal to the resin layer it carries |

The validator accepts the values, the image-circle floor still reports nothing undersized, and all three stations now
reach the corner (41.2° / 26.6° / 16.1°, 100%) with every rim clear. Surface 8 (L21 glass rear, R 13.792) passes the
wide corner chief ray at 9.86 mm inside its 10.0 mm rim and is unchanged, since L21 is a strong meniscus. The resin
layer's rim thickness falls from 0.206 mm at 10.6 mm to 0.075 mm at 13.5 mm, and the 6A rim departure is now +533.9 µm
(was +203.1 µm); the analysis file quotes neither, nor any other changed rim.
