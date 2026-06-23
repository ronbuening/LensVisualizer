# Audit Log - SIGMA 50mm F1.4 DG DN Art

Patent: JP 2023-183894 A, Example 1

## 2026-05-19 - Glass relabel + catalog-backed patent codes

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `S-NPH53 (OHARA)` | `E-FDS1 (HOYA)` | Patent nd/vd is 1.92286 / 20.88; exact catalog match is HOYA E-FDS1. |
| L2 / S3 | `glass` | `S-TIL25 (OHARA)` | `E-CF6 (HOYA)` | Patent nd/vd is 1.51742 / 52.15; refractiveindex.info/HOYA data gives exact E-CF6. |
| L5 / S9 | `glass` | `K-VC89 (Sumita) / FCD515 class` | `FCD515 (HOYA)` | Patent nd/vd is 1.59282 / 68.62; FCD515 is the exact SLD catalog match. |
| L6 / S10 | `glass` | `S-TIH11 (OHARA)` | `E-FD15 (HOYA)` | Patent nd/vd is 1.69895 / 30.05; E-FD15 is exact. |
| L11 / S20 | `glass` | `TAFD65 (Hoya)` | `TAFD55 (HOYA)` | Patent nd/vd is 2.00100 / 29.13; TAFD55 is exact. |
| L13 / S23 | `glass` | `S-TIM22 (OHARA)` | `S-TIM2 (OHARA)` | Patent nd/vd is 1.62004 / 36.30; S-TIM2 is the catalog-consistent target. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against the patent prescription table; stored nd/vd values match Example 1.
- No radius, spacing, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- Added catalog entry `E-CF6` from refractiveindex.info's HOYA Zemax source so S3 resolves via Sellmeier/polynomial data instead of Abbe fallback.

### Phase 4 - Analysis sync

- Updated the companion analysis glass names and reference list for L1, L2, L5, L6, L11, and L13.

### Verification

- `npm test -- dispersion`
- `npm test -- glassRelabelByLensScan`

## 2026-06-23 - Sigma-folder patent glass sweep

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / S7A | `glass` | `Aspherical mold glass (764/491)` | `764491 — aspherical mold glass (no exact public catalog match; patent nd=1.76450, νd=49.10)` | Patent Example 1 stores nd/vd = 1.76450 / 49.10. No exact public catalog entry was found, so the unbroken six-digit token preserves a future auto-upgrade path. |
| L9 / S15 | `glass` | `Lanthanum crown (755/523)` | `J-LASKH2 (Hikari, 755523 lanthanum crown)` | Patent nd/vd = 1.75500 / 52.32; generated six-digit report resolves the row to Hikari J-LASKH2. |
| L12 / S21 | `glass` | `Ultra-dispersive flint (946/180)` | `FDS18 (HOYA, ultra-dispersive flint)` | Patent nd/vd = 1.94595 / 17.98; HOYA FDS18 is the catalog-backed match. |

### Phase 2 - Retained-information audit

- Re-checked the text-extracted JP 2023-183894 A Example 1 prescription; surface radii, spacings, focus variables, and asphere coefficients were retained.
- The patent does not publish clear apertures, so existing semi-diameter estimates remain unchanged.

### Phase 3 - Spectral / metadata enrichment

- No APD flag changes were made. L12 is an ultra-dispersive high-index flint by nd/vd, but the patent pass did not provide anomalous partial-dispersion data requiring an `apd` annotation.
- L4 remains a deliberate Abbe fallback until a coefficient-backed 764491 catalog entry is available.

### Phase 4 - Analysis sync

- Updated the companion analysis prose and glass table for L4, L9, and L12.

### Verification

- `npm run generate:glass-reports`
