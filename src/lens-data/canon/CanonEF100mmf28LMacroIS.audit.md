# Audit Log - Canon EF 100mm f/2.8L Macro IS USM

Patent: US 7,864,451 B2, First Numerical Example
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L13 / surface 5 | `glass` | `Dense lanthanum flint (801/350, unmatched in public OHARA catalog)` | `S-LAM66 (OHARA)` | Patent row 5 lists nd=1.801, vd=35.0. OHARA S-LAM66 publishes code 801350, nd=1.800999, vd=34.97. |
| L21 / surface 9 | `glass` | `S-TIH11 (OHARA)` | `S-NBH8 (OHARA)` | Patent row 9 lists nd=1.72047, vd=34.7. OHARA S-NBH8 round-trips the code 720347 optical constants, nd=1.720467, vd=34.71; S-TIH11 is nd=1.65613. |
| L22 / surface 11 | `glass` | `S-TIL27 (OHARA)` | `S-TIL6 (OHARA)` | Patent row 11 lists nd=1.53172, vd=48.8. OHARA S-TIL6 publishes code 532489, nd=1.531717, vd=48.84; S-TIL27 is nd=1.57501. |
| L31 / surface 16 | `glass` | `Dense lanthanum flint (801/350, unmatched in public OHARA catalog)` | `S-LAM66 (OHARA)` | Patent row 16 repeats the same nd=1.801, vd=35.0 glass as L13. |
| L5b2 / surface 28 | `glass` | `S-LAM66 (OHARA)` | `S-LAM60 (OHARA)` | Patent row 28 lists nd=1.7432, vd=49.3. OHARA S-LAM60 publishes code 743493, nd=1.74320, vd=49.34; S-LAM66 is nd=1.80100. |

### Phase 2 - Retained-information audit

- Checked First Numerical Example surface rows 1-29 against the data file. Stored `R`, `d`, `nd`, and variable gap labels match the patent table, with the existing `1e15` representation for patent infinity/stop rows.
- Confirmed effective diameters in the patent table are stored as semi-diameters (`sd = effective diameter / 2`), matching the file header note.
- Confirmed variable gaps `d8`, `d13`, `d17`, `d22`, `d25`, and `d29` match the infinity and -1x columns used by `var`.
- Confirmed the patent publishes no aspherical coefficient table for this embodiment; `asph: {}` is retained.

### Phase 3 - Spectral / metadata enrichment

- No C/F/g line-index or partial-dispersion columns are published in the patent table, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Existing metadata already records the patent reference, publication year, design focal length/aperture, 15 elements / 12 groups, Canon maker, EF mount, and full-frame format.

### Phase 4 - Analysis sync

- Updated the element-by-element narrative for E3, E5, E6, E8, and E15.
- Updated the glass identification table and source list so E3/E8 are S-LAM66, E5 is S-NBH8, E6 is S-TIL6, and E15 is S-LAM60.
- Removed the outdated claim that the 801/350 glass was unmatched in public OHARA data.

### Verification

- `npm run generate:glass-reports` - passed; the Canon EF 100mm f/2.8L Macro IS USM rows cleared from `six-digit-glass-codes-missing-sellmeier.generated.md`.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
