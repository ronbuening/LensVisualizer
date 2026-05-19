# Audit Log - Canon RF 24-240mm F4-6.3 IS USM

Patent: US 2020/0142167 A1, Numerical Data 1
Catalog version: 5c81522

## 2026-05-04 - Patent row audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / 6 | `glass` | `S-LAH66 type (852/408)` | `S-LAH89 (OHARA)` | Patent row 6 lists nd=1.85150, vd=40.8; project catalog S-LAH89 round-trips this pair, while S-LAH66 is nd=1.77250. |
| L5 / 8 | `glass` | `S-LAH66 type (852/408)` | `S-LAH89 (OHARA)` | Patent row 8 lists the same nd=1.85150, vd=40.8 glass as L4. |
| L8 / 15 | `glass` | `S-TIH6 type (762/265)` | `S-TIH14 (OHARA)` | Patent row 15 lists nd=1.76182, vd=26.5; catalog S-TIH14 matches this pair, while S-TIH6 is nd=1.80518. |
| L9 / 17 | `glass` | `S-BAM4 type (581/408)` | `581408 - barium crown (patent nd=1.58144, vd=40.8)` | Patent row 17 lists nd=1.58144, vd=40.8; no current catalog entry round-trips code 581408. |
| L10 / 18 | `glass` | `S-NPH2 type (001/291)` | `001291 - ultra-high-index dense flint (patent nd=2.00100, vd=29.1)` | Patent row 18 lists nd=2.00100, vd=29.1; project S-NPH2 is nd=1.92286, so the old label resolved incorrectly. |
| L11 / 20 | `glass` | `S-NPH1 type (001/255)` | `001255 - ultra-high-index dense flint (patent nd=2.00069, vd=25.5)` | Patent row 20 lists nd=2.00069, vd=25.5; project S-NPH1 is nd=1.80809. |
| L13 / 23 | `glass` | `S-NPH2 type (001/291)` | `001291 - ultra-high-index dense flint (patent nd=2.00100, vd=29.1)` | Patent row 23 repeats the L10 glass; same non-resolving code annotation used. |
| L14 / 25 | `glass` | `S-BAL42 type (531/559)` | `531559 - moldable barium light crown (patent nd=1.53110, vd=55.9)` | Patent row 25 lists nd=1.53110, vd=55.9; project S-BAL42 is nd=1.58313. |
| L16 / 28 | `glass` | `S-BSM81 type (593/686)` | `Unmatched (593686 borosilicate crown; catalog S-BSM81 does not round-trip patent nd=1.59282, vd=68.6)` | Patent row 28 lists nd=1.59282, vd=68.6. The current S-BSM81 catalog entry has a conflicting nd value, so `Unmatched` prevents a wrong Sellmeier resolution pending catalog source repair. |
| L19 / 33 | `glass` | `S-BSM14 type (639/554)` | `S-BSM18 (OHARA)` | Patent row 33 lists nd=1.63854, vd=55.4; catalog S-BSM18 round-trips this pair. |
| L21 / 36 | `glass` | `S-TIH14 type (847/238)` | `S-TIH53 (OHARA)` | Patent row 36 lists nd=1.84666, vd=23.8; catalog S-TIH53 round-trips this pair, while S-TIH14 is nd=1.76182. |

### Phase 2 - Retained-information audit

- Surface rows 1-37 were checked against Numerical Data 1: `R`, `d`, `nd`, and the image-side variable-gap labels match the patent table.
- Zoom variable gaps `d5`, `d13`, `d24`, `d31`, `d34`, and `d37/BF` match the wide/intermediate/telephoto table; surface `d` values match the wide-angle column.
- Patent effective diameters were rechecked against stored semi-diameters. The stored values are effective diameter / 2 except for the existing small rendering adjustments noted in the file header.
- Aspheric surfaces 25 and 26 were rechecked against the patent aspheric table. `K`, `A4`, `A6`, `A8`, `A10`, and `A12` match; `A14` remains zero-filled because the patent table stops at `A12`.

### Phase 3 - Spectral / metadata enrichment

- No line-index or partial-dispersion columns are published in Numerical Data 1, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Existing metadata already captures the patent reference, 2020 publication year, 21 elements / 15 groups, design focal lengths, design aperture, zoom positions, and rear inner-focus description.
- Left L16 as `Unmatched` rather than a six-digit token because the current catalog maps code 593686 to S-BSM81 with conflicting optical constants.

### Phase 4 - Analysis sync

- Updated the element-by-element narrative and glass summary table to match the corrected labels.
- Removed unsupported catalog names from L9, L10, L11, L13, L14, and L16 prose where no current entry round-trips the patent values.
- Updated L1 prose from S-LAH79 to S-LAH95; L7 from S-LAL54 to S-LAH66; L19 from S-BSM14 to S-BSM18; and L21 from S-TIH14 to S-TIH53.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed; Canon RF 24-240 no longer appears in either generated report.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (116 test files, 1507 tests).

## 2026-05-19 - Code-only glass source recheck

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / surface 25 | `glass` | `531559 - moldable barium light crown (patent nd=1.53110, vd=55.9)` | retained | US 2020/0142167 A1 Numerical Data 1 row 25 lists nd=1.53110, vd=55.9. Searches for code 531559 and the exact nd/vd pair did not find a public manufacturer or refractiveindex.info catalog entry with usable coefficients. |

### Phase 2 - Retained-information audit

- Rechecked Numerical Data 1 row 25 and aspherical rows 25/26 in the local patent PDF; the data file remains consistent with the existing 2026-05-04 full audit.

### Phase 3 - Spectral / metadata enrichment

- No C/F/g line-index or partial-dispersion columns are published in Numerical Data 1, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.

### Phase 4 - Analysis sync

- No analysis changes were needed; the existing L14 prose already identifies 531559 as a no-current-catalog-match moldable barium light crown.

### Verification

- `npm run generate:glass-reports` - passed; the 531559 row remains in `six-digit-glass-codes-missing-sellmeier.generated.md` because no coefficient-backed public catalog match was found.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
