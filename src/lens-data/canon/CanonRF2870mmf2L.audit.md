# Audit Log - Canon RF 28-70mm f/2L USM

Patent: JP 2020-118807 A, Example A

## 2026-05-19 - Glass relabel + catalog additions

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / S6A | `glass` | `S-LAM54 (OHARA)` | `769493 - MC-TAF101-100 (HOYA)` | Patent nd/vd is 1.76902 / 49.3; refractiveindex.info/HOYA gives exact code 769493. |
| L8 / S12 | `glass` | `S-LAH60 (OHARA)` | `TAFD30 (HOYA)` | Patent nd/vd is 1.88300 / 40.8; TAFD30 is exact. |
| L11 / S19 | `glass` | `S-NBH8 (OHARA)` | `S-NBH53V (OHARA)` | Patent nd/vd is 1.73800 / 32.3; S-NBH53V is catalog-consistent. |
| L16 / S27 | `glass` | `S-NBH56 (OHARA)` | `NBFD15 (HOYA)` | Patent nd/vd is 1.80610 / 33.3; refractiveindex.info/HOYA gives exact code 806333. |
| L17 / S29A | `glass` | `S-LAH66 (OHARA)` | `L-LAH85V (OHARA)` | Patent nd/vd is 1.85400 / 40.4; Ohara L-LAH85V is exact via refractiveindex.info. |
| L19 / S32 | `glass` | `S-NPH2 (OHARA)` | `TAFD55 (HOYA)` | Patent nd/vd is 2.00100 / 29.1; TAFD55 is exact. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example A; stored nd/vd values match the patent table.
- No radius, spacing, zoom, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- Added `MC-TAF101-100`, `NBFD15`, and `L-LAH85V` catalog entries so patent-code rows resolve via catalog data.

### Phase 4 - Analysis sync

- Updated the companion analysis glass table, asphere notes, and element narratives for the relabeled elements.

### Verification

- `npm test -- dispersion`
- `npm test -- glassRelabelByLensScan`

## 2026-05-31 — M-TAFD305 catalog side-effect cleanup

### Context

- The Sigma patent audit added coefficient-backed HOYA `M-TAFD305` to the glass catalog.
- This Canon L5 row is 764/485 and resolves exactly to OHARA `S-LAH96`; it is not the modern HOYA 851/401 `M-TAFD305` row.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L5 / S8 | `M-TAFD305 (HOYA)` | `S-LAH96 (OHARA, 764485)` | Exact catalog match for nd = 1.76385, vd = 48.5. |

### Analysis sync

- Updated the glass summary, D2 discussion, and correction note to use `S-LAH96`.
