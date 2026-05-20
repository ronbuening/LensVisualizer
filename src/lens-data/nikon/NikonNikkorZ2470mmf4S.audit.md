# Audit Log — NIKON NIKKOR Z 24-70mm f/4 S

Patent: JP WO2019/049372 A1, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S4 | `glass` | `Uncertain (glass code 744495, no exact catalog match; PGM low-Tg lanthanum crown)` | `744495 — PGM low-Tg lanthanum crown (patent nd=1.74353, νd=49.5; no exact public catalog match)` | Local patent `patents/JPWO2019049372A1.pdf`, Example 1 row 4 lists nd=1.74353 and νd=49.5. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `744495` and the exact 1.74353 / 49.5 pair.
- No coefficient-backed exact match was found. This agrees with the earlier Nikon Z 24-70/2.8 and AF-S 24-70/2.8E dispositions for the same code family.

### Analysis sync

- Updated the L21 wording to use the code-led label and avoid an unnecessary proprietary marker.
