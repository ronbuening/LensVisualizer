# Audit Log — Canon RF 85mm f/1.2L USM

Patent: US 2020/0012073 A1, Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L10 / 16 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent table row 16 lists nd=1.95375, vd=32.3; S-LAH98 matches the Ohara-family code 954323. |
| L11 / 18 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent table row 18 repeats nd=1.95375, vd=32.3; same catalog match as L10. |
| L12 / 19 | `glass` | `S-TIM22 (OHARA)` | `S-TIM2 (OHARA)` | Patent table row 19 lists nd=1.62004, vd=36.3; S-TIM2 round-trips this pair. |
| L13 / 21 | `glass` | `S-TIM27 (OHARA)` | `S-TIM28 (OHARA)` | Patent table row 21 lists nd=1.68893, vd=31.1; S-TIM28 is the Ohara-family match. |
| L14 / 23 | `glass` | `S-LAH64 (OHARA)` | `TAFD37A (HOYA)` | Patent table row 23 lists nd=1.90043, vd=37.4; TAFD37A has the matching 900374 code-family catalog entry. |

### Phase 2 — Retained-information audit

- Checked the flagged prescription rows against the patent table; stored surface values match the published rows.
- No geometry, asphere, variable-gap, or metadata edits made.

### Phase 3 — Spectral / metadata enrichment

- No additional line-index data found for the relabeled rows.

### Phase 4 — Analysis sync

- Updated the complete glass table and L13 prose to match the relabeled elements.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.

## 2026-05-19 - Code-only glass source recheck

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / 2 | `glass` | `S-NBF1 or S-LAF2 (OHARA)` | `N-KZFS8 (Schott)` | Patent Example 1 row 2 lists nd=1.72047, vd=34.7. Schott N-KZFS8 publishes glass code 720347 and matches the row exactly. |
| L5 / 8A | `glass` | `855/248 - high-index dense flint` | `S-NBH56 (OHARA)` | Patent Example 1 row 8 lists nd=1.85478, vd=24.8. OHARA S-NBH56 round-trips the 855248 optical constants and is now code-tagged in the catalog. |
| L6 / 11 | `glass` | `855/248 - high-index dense flint` | `S-NBH56 (OHARA)` | Patent Example 1 row 11 repeats nd=1.85478, vd=24.8. Same public catalog match as L5. |
| L8 / 14 | `glass` | `541/472 - likely custom BR carrier` | `S-TIL2 (OHARA)` | Patent Example 1 row 14 lists nd=1.54072, vd=47.2. OHARA S-TIL2 publishes code 541472 and matches the row. |

### Phase 2 - Retained-information audit

- Rechecked the code-only rows and the surrounding BR triplet rows in the local patent PDF. Stored `R`, `d`, `nd`, `vd`, effective-diameter-derived `sd`, and the existing aspherical surface 8 coefficients remain consistent with Example 1.
- Confirmed the existing variable focus gaps `d3` and `d17` match the infinity table values in Example 1.

### Phase 3 - Spectral / metadata enrichment

- Added no element-level spectral fields; the relabeled rows now resolve to catalog Sellmeier data.

### Phase 4 - Analysis sync

- Updated the glass table and BR carrier prose for N-KZFS8, S-NBH56, and S-TIL2.

### Verification

- `npm run generate:glass-reports` — passed; RF85 is absent from the current six-digit missing-Sellmeier, unresolved-glass, catalog-mismatch, and relabel-by-lens queues for the corrected rows.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed (131 files, 1666 tests; expected error-boundary console output only).

## 2026-06-04 - Sweep 3 patent dPgF backfill

Local patent source: `patents/US20200012073A1.pdf` (untracked local file).

### Phase 3 - Spectral / metadata enrichment

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / 5 | `dPgF` | absent | `0.008` | Patent Table 1 lists anomalous partial dispersibility `ΔθgF1 = 0.008`; this is the project's `dPgF` quantity. |
| L9 / 15 | `dPgF` | absent | `0.092` | Patent Table 1 lists anomalous partial dispersibility `ΔθgF2 = 0.092` for the BR positive element. |

No `nC`, `nF`, or `ng` rows were found in the extracted local patent text.
