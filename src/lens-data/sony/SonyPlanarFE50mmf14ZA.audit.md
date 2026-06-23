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
