# Audit Log — Nikon Fisheye-Nikkor 6mm f/2.8

Patent: US 3,737,214, Example I

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / S15 | `glass` | `Unmatched crown (534/554; no current HIKARI catalog match)` | `534554 — crown glass (patent nd=1.53375, νd=55.4; no current HIKARI catalog match)` | Local patent `patents/US3737214.pdf`, Example I row for R15 lists nd=1.53375 and νd=55.4. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `534554` and the exact 1.53375 / 55.4 pair.
- No coefficient-backed match was found in current public Hikari/OHARA/HOYA/Schott-style data. The label now uses an unbroken code instead of a slash.

### Analysis sync

- Updated the L7 text and glass table from `534/554` to `534554`.
