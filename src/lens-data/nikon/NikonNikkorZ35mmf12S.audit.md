# Audit Log - Nikon NIKKOR Z 35mm f/1.2 S

Patent: JP 2025-052870 A, Example 1

## 2026-05-20 - Six-digit missing-Sellmeier code review

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L42 / S29 | `glass` | `S-NPH7 (946180, OHARA S-NPH7)` | `FDS18 / H-ZF75A family (946180)` | Local patent `patents/JP2025052870A.pdf`, Example 1 row 29 lists nd=1.94594, vd=17.98, and theta_gF=0.6546. Public HOYA FDS18 has coefficient-backed code `946180` and nd=1.94595 / vd=17.98; public cross-tables also map `946180` to FDS18/H-ZF75A rather than a current OHARA S-NPH entry. |
| L44 / S32 | `glass` | `Barium crown / LaK family (624584, no exact catalog match)` | unchanged | Local patent row 32 lists nd=1.62372 and vd=58.4. Public catalog search found no coefficient-backed exact match for `624584`, so the existing unbroken code label remains. |

### Catalog-search disposition

- Confirmed `946180` against HOYA FDS18 / NHG H-ZF75A public data; no new catalog entry was needed because FDS18 is already present.
- Searched public catalog/refractiveindex.info-style sources for `624584` and the exact 1.62372 / 58.4 pair; no defensible coefficient-backed match was found.

### Phase 4 - Analysis sync

- Updated the L42 analysis from OHARA S-NPH7 wording to the FDS18/H-ZF75A property-family interpretation.

## 2026-05-19 - Glass relabel + patent-code fallback

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L13 / S5 | `glass` | `Ultra-high-index dense flint (921240...)` | `FDS24 (HOYA)` | Patent nd/vd is 1.92119 / 24.0; refractiveindex.info/HOYA gives exact code 921240. |
| L14 / S7 | `glass` | `S-NBH52 (738323...)` | `J-KZFH9 (Hikari)` | Patent nd/vd is 1.73800 / 32.3; J-KZFH9 is the exact d-code target. |
| L15 / S9 | `glass` | `S-LAH79 (954323...)` | `S-LAH98 (OHARA)` | Patent nd/vd is 1.95375 / 32.3; S-LAH98 is exact. |
| L19 / S16 | `glass` | `S-NBH52 (738323...)` | `J-KZFH9 (Hikari)` | Same patent glass as L14; retained patent theta note. |
| L21 / S19 | `glass` | `S-NBH55 (720347...)` | `N-KZFS8 (Schott)` | Patent nd/vd is 1.72047 / 34.7; N-KZFS8 is exact. |
| L43 / S30 | `glass` | `S-NBH56 (789284...)` | `789284 - dense flint (no exact public catalog match)` | Patent nd/vd is 1.78880 / 28.4; refractiveindex.info search found no exact catalog glass, so this remains a future-upgrade code fallback. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example 1; stored nd/vd values match the patent table.
- No radius, spacing, focus-variable, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- Added `FDS24` from refractiveindex.info's HOYA Zemax source.
- Left `789284` unresolved by design; nearest public catalog rows were not exact enough to claim.

### Phase 4 - Analysis sync

- Updated the companion analysis names for L13, L14, L15, L19, L21, and L43.

### Verification

- `npm test -- dispersion`
- `npm test -- glassRelabelByLensScan`
