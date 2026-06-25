# Audit Log - Fujifilm XF 16-80mm f/4 R OIS WR

Patent: US 2020/0166735 A1, Example 11

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S6A | `glass` | `PGM lanthanum dense flint (808409)` | `808409 - PGM lanthanum dense flint (patent nd=1.80780, vd=40.89)` | Patent Example 11 / Table 31 gives nd=1.80780 and vd=40.89. Sweep 2 resolves the code through public HOYA MC-NBFD135 coefficients. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20200166735A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Example 11 Table 31 row 6A for L21: nd=1.80780, vd=40.89.
- No radius, spacing, semi-diameter, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Checked the current runtime catalog and public exact-code searches for 808409 / nd=1.80780 / vd=40.89. Sweep 2 later found the public HOYA MC-NBFD135 coefficient row for this code.
- Nearby lanthanum dense-flint glasses do not round-trip the patent code with coefficient-backed evidence, so no catalog entry or alias was added.

### Phase 4 - Analysis sync

- Updated the glass-identification table to mark L21 with an explicit unbroken 808409 token. That token now resolves through the Sweep 2 catalog entry.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.

## 2026-06-25 - Catalog backfill follow-up

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `Dense short flint (847238; OHARA S-NBH53 family)` | `S-TIH53 (OHARA, 847/238 dense short flint)` | US 2020/0166735 A1 Table 31 lists nd=1.84666, vd=23.78, OgF=0.62054; the current catalog S-TIH53 entry has code6 `847238`, nd=1.84666, and vd=23.7779. |
| L22 / S8 | `glass` | `Light phosphate crown (618634; OHARA S-PHM52)` | `S-PHM52 (OHARA, 618/634 light phosphate crown)` | Table 31 row 8 lists nd=1.61800, vd=63.39, OgF=0.54015; the current catalog S-PHM52 entry has code6 `618634`. |
| L24 / S12 | `glass` | `Dense short flint (847238; same family as L11)` | `S-TIH53 (OHARA, 847/238 dense short flint)` | Table 31 row 12 lists the same 847/238 dense-short-flint pair as L11. |
| L32 / S17 | `glass` | `Dense short flint (847238; same as L11/L24)` | `S-TIH53 (OHARA, 847/238 dense short flint)` | Table 31 row 17 lists the same 847/238 dense-short-flint pair as L11/L24. |
| L33 / S18 | `glass` | `Light phosphate crown (618634; same as L22)` | `S-PHM52 (OHARA, 618/634 light phosphate crown)` | Table 31 row 18 repeats the 618/634 phosphate-crown pair from L22. |
| L42 / S23 | `glass` | `Lanthanum flint (804396)` | `S-LAH63 (OHARA, 804/396 lanthanum flint)` | Table 31 row 23 lists nd=1.80440, vd=39.59, OgF=0.57297; current catalog S-LAH63 has code6 `804396`, nd=1.804398, and vd=39.5862. |

### Notes

- No surface, spacing, APD, or semi-diameter edits were made. This patent example does not publish ED/clear-aperture columns.
- Updated [FujifilmXF1680mmf4.analysis.md](FujifilmXF1680mmf4.analysis.md) to promote the affected rows from family/code descriptions to catalog-backed names.
