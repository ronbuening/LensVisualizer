# Audit Log - Carl Zeiss Jena Pancolar 50mm f/2

Patent: GB 850,117, Claim 2
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and code-only source recheck

### Source Note

- The local GB patent PDF is image-only, so `pdftotext` produced a blank text file. This audit used the existing data transcription and public catalog searches for the two unresolved code families.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Claim 2 uses nd=1.66200, vd=56.1. Public catalog searches did not find a coefficient-backed exact match for code 662561. |
| L2 / 3 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Same crown glass as L1. |
| L3 / 4 | `glass` | `SF2 equivalent (Jena in-house, 672/323)` | `Dense flint (672/323, Jena in-house; no exact public catalog match)` | The old label falsely resolved to Schott SF2 in catalog mismatch reports. Public catalog searches did not find a coefficient-backed exact match for code 672323. |
| L4 / 6 | `glass` | `Special light flint (Jena in-house, 602/352)` | retained | Claim 2 uses nd=1.60156, vd=35.2. No coefficient-backed exact public match was found for code 602352. |
| L5 / 7 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Same crown glass as L1. |
| L6 / 9 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Same crown glass as L1. |

### Phase 2 - Retained-information audit

- Rechecked the current data file against the documented patent transcription and 0.5x scaling. Stored surface values and glass constants remain consistent with the Claim 2 layout notes.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.

### Phase 3 - Spectral / metadata enrichment

- No catalog additions or spectral fields were made for this lens.

### Phase 4 - Analysis sync

- Updated the Element III note to remove the overconfident SF2-equivalent wording and keep the 672/323 dense flint code unresolved.

### Verification

- `npm run generate:glass-reports` — passed; Pancolar remains in the six-digit missing-Sellmeier report for its Jena in-house code-only glasses, and the false SF2 catalog-resolution path is cleared.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed (131 files, 1666 tests; expected error-boundary console output only).
