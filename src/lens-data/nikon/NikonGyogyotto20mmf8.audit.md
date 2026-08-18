# Audit Log — Nikon Gyogyotto 20mm f/8

Patent: US 5,949,588, eighth embodiment / Table 8

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S4 | `glass` | `Unmatched (Nikon patent glass, code 670/575; no current public OHARA/SCHOTT catalog match within tolerance)` | `670575 — Nikon patent glass (nd=1.67025, νd=57.53; no current public OHARA/SCHOTT catalog match within tolerance)` | Local patent `patents/US5949588.pdf`, Table 8 row 4 lists nd=1.67025 and νd=57.53. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `670575` and the exact 1.67025 / 57.53 pair.
- No coefficient-backed exact match was found; S-LAL12 / LaK-style near labels remain too far away in nd.

### Analysis sync

- Updated the L3 text and glass table from `670/575` to `670575`.

## 2026-08-18 — S-LAL52 equivalent backfill

- Re-rendered `patents/US5949588.pdf`, PDF page 42. Eighth embodiment / Table 8 row 4 confirms
  `nd = 1.67025` and `νd = 57.53`.
- Assigned the existing OHARA S-LAL52 curve as an optical equivalent. Its catalog coordinate differs by
  `Δnd = -0.000251` and `Δνd = -0.202`, inside the runtime consistency window. This supersedes the older
  S-LAL12 comparison; the production supplier remains unspecified.
