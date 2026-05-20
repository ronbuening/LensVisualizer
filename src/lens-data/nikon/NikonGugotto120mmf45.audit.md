# Audit Log — Nikon Gugutto Macro 120mm f/4.5

Patent: US 5,764,425, Example 4 / Table 4

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S2 | `glass` | `Unmatched (804/339 dense flint; exact public catalog match not identified)` | `804339 — dense flint (patent nd=1.80384, νd=33.89; exact public catalog match not identified)` | Local patent `patents/US5764425.pdf`, Table 4 row 2 lists nd=1.80384 and νd=33.89. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `804339` and the exact 1.80384 / 33.89 pair.
- No coefficient-backed exact match was found. Hikari E-LAFH2-class historical context remains plausible but not a current coefficient-backed assignment for this file.

### Analysis sync

- Updated the L2 narrative and glass table to use the unbroken `804339` code label.
