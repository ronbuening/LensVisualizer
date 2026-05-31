# Audit Log — Canon Serenar 50mm f/1.8

Patent: US 2,681,594 C, Claim 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US2681594.pdf`.
- Claim 3 row confirmed L3 / surface 4 nd = 1.74000, vd = 28.2.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S4 | `NBFD3 (HOYA)` | `S-TIH3 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L3 glass match and summary prose.

## 2026-05-31 — BAFD7 catalog side-effect cleanup

### Context

- The Sigma 20mm F1.4 patent audit added coefficient-backed modern HOYA `BAFD7` to the glass catalog.
- Modern HOYA `BAFD7` is nd = 1.70154, vd = 41.15 (code 702412), not this Serenar patent row's nd = 1.6261, vd = 39.1.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `BAFD7 (HOYA)` | `Unmatched vintage barium dense flint (626391; not modern HOYA BAFD7 702412)` | Prevents a stale modern-catalog resolution after the BAFD7 catalog addition. |

### Analysis sync

- Updated the L2 prose and glass summary to treat the row as a vintage 626/391 barium-dense-flint class, not a modern HOYA BAFD7 match.
