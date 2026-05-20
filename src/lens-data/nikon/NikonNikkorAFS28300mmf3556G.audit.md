# Audit Log — Nikon AF-S NIKKOR 28-300mm f/3.5-5.6G ED VR

Patent: US 2010/0220400 A1, Example 2 / Table 2

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L54 / S34 | `glass` | `Unmatched (patent glass 821/426; no public HIKARI/OHARA match found)` | `821426 — patent dense flint (nd=1.82080, νd=42.64; no public HIKARI/OHARA match found)` | Local patent `patents/US20100220400A1.pdf`, Table 2 row 34 lists nd=1.82080 and νd=42.64. The data values match the patent row. |

### Catalog-search disposition

- Searched public manufacturer/refractiveindex.info-style sources for `821426` and the exact 1.82080 / 42.64 pair.
- No coefficient-backed Hikari, OHARA, HOYA, Schott, or CDGM match was found. The label now preserves the unbroken code for future auto-upgrade.

### Analysis sync

- Updated the L54 text and glass map from `821/426` to `821426`.
