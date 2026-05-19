# Audit Log - Canon RF24-105mm F2.8 L IS USM Z

Patent: US 2024/0192474 A1, Numerical Example 4
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Source Note

- The local patent PDF is image-only, so `pdftotext` produced a blank text file. This audit used rendered pages from the local PDF for the Numerical Example 4 tables, with public catalog lookups used only for glass identification.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `Lanthanum dense flint (900/374)` | `TAFD37A (HOYA)` | Example 4 row 1 lists nd=1.90043, vd=37.4; catalog TAFD37A carries code 900374. |
| L2 / 3 | `glass` | `Phosphate crown (538/747)` | `S-FPM3 (OHARA)` | Example 4 row 3 lists nd=1.53775, vd=74.7; catalog S-FPM3 matches and is now code-tagged as 538747. |
| L3 / 5 | `glass` | `Lanthanum crown (729/547)` | `S-LAL18 (OHARA)` | Example 4 row 5 lists nd=1.72916, vd=54.7; catalog S-LAL18 carries code 729547. |
| L4 / 7 | `glass` | `Lanthanum crown (729/547)` | `S-LAL18 (OHARA)` | Row 7 repeats the L3 nd/vd pair. |
| L5 / 9 | `glass` | `Dense lanthanum flint (883/408)` | `S-LAH58 (OHARA)` | Example 4 row 9 lists nd=1.88300, vd=40.8; catalog S-LAH58 carries code 883408. |
| L6 / 11 | `glass` | `Barium crown (595/677)` | `S-FPM2 (OHARA)` | Example 4 row 11 lists nd=1.59522, vd=67.7; catalog S-FPM2 carries code 595677. |
| L7 / 13 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Example 4 row 13 lists nd=1.49700, vd=81.5. S-FPL51/FCD1-class public data matches within patent rounding; this is one of the four UD elements. |
| L8 / 14 | `glass` | `Heavy flint (770/297)` | retained | Example 4 row 14 lists nd=1.77047, vd=29.7. Checked public catalog sources did not provide a coefficient-backed exact match for code 770297. |
| L9 / 17 | `glass` | `Very heavy flint (847/238)` | `S-TIH53 (OHARA)` | Example 4 row 17 lists nd=1.84666, vd=23.8; catalog S-TIH53 carries code 847238. |
| L10 / 19 | `glass` | `Extreme dense flint - OHARA S-NPH4 (001/291)` | `S-LAH99 (OHARA)` | Example 4 row 19 lists nd=2.00100, vd=29.1. The old label resolved to S-NPH4, whose catalog constants do not match; S-LAH99 carries code 001291. |
| L11 / 20 | `glass` | `Borosilicate crown (517/524)` | `S-NSL36 (OHARA)` | Example 4 row 20 lists nd=1.51742, vd=52.4; catalog S-NSL36 carries code 517524. |
| L13 / 23 | `glass` | `Lanthanum crown (773/496)` | `S-LAH66 (OHARA)` | Example 4 row 23 lists nd=1.77250, vd=49.6; catalog S-LAH66 carries code 773496. |
| L14 / 25 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Same S-FPL51/FCD1-class match as L7. |
| L15 / 26 | `glass` | `Lanthanum dense flint (900/374)` | `TAFD37A (HOYA)` | Row 26 repeats the L1 nd/vd pair. |
| L16 / 28 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Same S-FPL51/FCD1-class match as L7. |
| L17 / 30 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Same S-FPL51/FCD1-class match as L7. |
| L18 / 32A | `glass` | `OHARA L-LAH86 PGM glass (854/404)` | `L-LAH85V (OHARA)` | The aspherical glass layer uses nd=1.85400, vd=40.4. OHARA L-LAH85V publishes code 854404 and matches the row; the old L-LAH86 wording pointed at a different high-index PGM family. |
| L19 / 33 | `glass` | `Barium crown (603/606)` | `N-SK14 (Schott)` | Example 4 row 33 lists nd=1.60311, vd=60.6; catalog N-SK14 carries code 603606. |
| L20 / 35 | `glass` | `Lanthanum crown (729/547)` | `S-LAL18 (OHARA)` | Row 35 repeats the L3/L4 nd/vd pair. |
| L22 / 39 | `glass` | `Heavy flint (805/254)` | `S-TIH6 (OHARA)` | Example 4 row 39 lists nd=1.80518, vd=25.4; catalog S-TIH6 carries code 805254. |
| L23 / 40 | `glass` | `Fluorocrown (487/702)` | `S-FSL5 (OHARA)` | Example 4 row 40 lists nd=1.48749, vd=70.2; catalog S-FSL5 carries code 487702. |
| L24 / 42 | `glass` | `Extreme dense flint - OHARA S-NPH3 (001/255)` | `TAFD40 (HOYA)` | Example 4 row 42 lists nd=2.00069, vd=25.5. The old label resolved to S-NPH3, whose catalog constants do not match; TAFD40 carries code 001255. |

### Phase 2 - Retained-information audit

- Rechecked Example 4 surface rows 1-43 from the rendered local patent pages. Stored `R`, `d`, `nd`, `vd`, zoom variable gaps, and aspherical coefficients for surfaces 22, 32, and 37 match the patent table.
- Confirmed the file's note that no close-focus spacing data is published for this example; existing close-focus `var` values intentionally mirror infinity.

### Phase 3 - Spectral / metadata enrichment

- No C/F/g line-index or partial-dispersion columns are published in Numerical Example 4, so no element-level spectral fields were added.
- Added catalog `code6` metadata for S-FPM3 so future 538747 rows can resolve by code.

### Phase 4 - Analysis sync

- Updated the element narratives and glass-budget note for the newly resolved catalog labels.
- Left the L8 / 770297 row code-only in both data and analysis because no coefficient-backed public match was found.

### Verification

- `npm run generate:glass-reports` — passed; RF24-105 remains in the six-digit missing-Sellmeier report only for L8 / 770297, with the corrected catalog rows cleared.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed (131 files, 1666 tests; expected error-boundary console output only).
