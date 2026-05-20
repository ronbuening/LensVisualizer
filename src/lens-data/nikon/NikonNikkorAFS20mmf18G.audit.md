# Audit Log — Nikon AF-S NIKKOR 20mm f/1.8G ED

Patent: JP 2016-021011 A, Example 4

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12r / S4 | `glass` | `Patent UV-cure resin (514/530)` | `514530 — patent UV-cure resin (nd=1.51380, νd=53.0)` | Local patent `patents/JP2016021011A.pdf`, Example 4 row 4 lists nd=1.51380 and νd=53.0. No public glass-catalog coefficient row was found for this UV-cure resin, so the unbroken code is retained for future auto-upgrade. |
| C1 / S9 | `glass` | `Patent cement layer (514/428)` | `514428 — patent cement layer (nd=1.51400, νd=42.8)` | Example 4 row 9 lists nd=1.51400 and νd=42.8. Public catalog search found no coefficient-backed optical cement match. |
| C2 / S19 | `glass` | `Patent cement layer (514/428)` | `514428 — patent cement layer (nd=1.51400, νd=42.8)` | Example 4 row 19 repeats the same 0.01 mm cement medium. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `514530`, `514428`, and the exact nd/νd pairs; results were non-optical or did not provide defensible coefficients.
- No catalog entries were added.

### Analysis sync

- Updated the analysis text to cite `514530` and `514428` as future-upgrade code labels.
