# Audit Log - Canon Serenar 28mm f/3.5

Patent: US 2,645,974

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US2645974.pdf`; local text confirms the repeated nd=1.62040, vd=60.30 rows.
- Updated both `SK14 (Schott)` rows to `N-SK16 (Schott)`.

## 2026-07-29 - Dispersion-coordinate follow-up

- Corrected L2 from `SK16 (Schott)` to `E-BAF8 (HOYA)`. E-BAF8 matches the patent's 1.62370 / 47.00 coordinate; N-SK16 has the same index region but νd = 60.32.
- Synchronized the L2 analysis text and glass table. The separate BaF3 row remains in the generated review queue because it has no exact catalog candidate.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked the worked prescription in local `patents/US2645974.pdf`; S6 remains 1.57850 / 41.70 and its R/d
  row is unchanged.
- S6 `BaF3 (Schott)` -> explicit unmatched 579417 vintage barium flint. The current public BaF3 row does not
  reproduce both patent coordinates, so the analysis now uses BaF3 only as a family comparison.

## 2026-07-30 - E-F8 catalog-equivalent recovery

- Rechecked the worked prescription on rendered US 2,645,974 page 3. L3 remains `nd=1.5955`, `νd=39.2`;
  the patent does not name a production glass vendor.
- Relabeled the unsupported `F7 (Schott)` claim to HOYA `E-F8` as a catalog equivalent. The official
  coefficient-backed row is `1.59551 / 39.22` with code `596392`, matching the patent's printed precision.
- Synchronized the L3 narrative and glass table. No prescription geometry changed.

## 2026-08-11 — Phase 92 HOYA FL4 recovery

- Visually rechecked US 2,645,974's worked prescription on rendered PDF page 3: L4 is `1.5785 / 41.7`.
- HOYA's official obsolete-inclusive catalog contains FL4 at `1.578447 / 41.707529` (code `578417`), compatible
  with the patent's rounded `579417` coordinate.
- Relabeled L4 as a supplier-neutral FL4 optical equivalent and synchronized the glass table. No prescription
  geometry changed.
