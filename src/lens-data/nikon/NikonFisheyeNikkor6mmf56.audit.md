# Audit Log — Nikon Fisheye-Nikkor 6mm f/5.6

Patent: US 3,524,697, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L8 / S11 | `glass` | `Unmatched (lanthanum flint, 768/465 patent melt)` | `768465 — lanthanum flint patent melt (nd=1.76764, νd=46.5; no exact public catalog match)` | Local patent `patents/US3524697.pdf`, Example 1 row for r13 lists nd=1.76764 and νd=46.5. The stored values match. |

### Catalog-search disposition

- Searched public manufacturer/refractiveindex.info-style sources for `768465` and the exact 1.76764 / 46.5 pair.
- No defensible coefficient-backed catalog match was found; prior NBFD3-style interpretation remains rejected because it belongs to a different code family.

### Analysis sync

- Updated the L8 text and table from `768/465` to `768465`, preserving the unresolved disposition.
