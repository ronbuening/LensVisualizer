# Audit Log - Canon FD 35mm f/2 S.S.C. (I)

Patent: US 3,748,022, single numerical embodiment
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / surface 7 | `glass` | `LaK (700480, S-LAL7 family)` | `S-LAM51 (OHARA)` | Patent row R7 lists N=1.700, V=48.0. OHARA S-LAM51 publishes nd=1.70000, vd=48.08 and code 700481, while current S-LAL7 is nd=1.65160, vd=58.55. |
| L5 / surface 9 | `glass` | `LaK (774492, probable thoriated)` | retained | Patent row R9 lists N=1.7737, V=49.2. Searches for code 774492 and the exact nd/vd pair did not find a public manufacturer or refractiveindex.info catalog entry with coefficients. |
| L8 / surface 14 | `glass` | `LaK (774492, probable thoriated)` | retained | Patent row R14 repeats N=1.7737, V=49.2. The repeated pair is kept as probable thoriated dense lanthanum crown rather than forced to a modern catalog approximation. |

### Phase 2 - Retained-information audit

- Checked the patent's normalized surface rows against the data file after the documented 35x scale factor. Stored radii, thicknesses, glass nd/vd values, and back focus match to patent rounding.
- Confirmed the floating-focus variable interval D is split into `10` and `STO` around the inferred stop, consistent with the data file note; the patent itself does not publish a stop surface.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes only N/V glass constants, not C/F/g line indices or partial-dispersion values, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Existing metadata already records the patent reference, 1973 publication year, Canon maker, FD mount, full-frame format, and 9 elements / 8 groups.

### Phase 4 - Analysis sync

- Updated the E4 glass-identification prose and glass summary table from S-LAL7/N-LAK22 speculation to S-LAM51.
- Retained the E5/E8 thoriated-glass discussion for the unresolved 774492 pair.

### Verification

- `npm run generate:glass-reports` - passed; the S-LAM51 relabel removed the former 700480-family row, while the unresolved 774492 rows remain in `six-digit-glass-codes-missing-sellmeier.generated.md`.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
