# Audit Log - Canon RF 24-70mm f/2.8L IS USM

Patent: US 2019/0278068 A1, Numerical Example 5
Catalog version: ab3a508

## 2026-05-11 - Patent glass relabel and analysis sync

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L6 / S9 | `glass` | `S-NPH53 (OHARA)` | `S-NBH56 (OHARA)` | Patent [0100] row 9 lists nd=1.85478, vd=24.8; S-NBH56 round-trips to that pair in the current catalog. |
| L8 / S13 | `glass` | `S-TIM25 (OHARA)` | `S-FTM16 (OHARA)` | Patent [0100] row 13 lists nd=1.59270, vd=35.3; S-FTM16 matches, while S-TIM25 does not. |
| L10 / S17 | `glass` | `S-LAH59 (OHARA)` | `764485 - lanthanum crown (patent nd=1.76385, νd=48.5)` | Patent [0100] row 17 lists nd=1.76385, vd=48.5. No exact current catalog entry; retained as code-based patent glass. |
| L12 / S20 | `glass` | `S-NPH2 (OHARA)` | `TAFD40 (HOYA)` | Patent [0100] row 20 lists nd=2.00069, vd=25.5; TAFD40 round-trips to the patent pair. |
| L16 / S27 | `glass` | `S-NBH55 (OHARA)` | `738323 - niobium dense flint (patent nd=1.73800, νd=32.3)` | Patent [0100] row 27 lists nd=1.73800, vd=32.3. No exact current catalog entry; retained as code-based patent glass. |
| L18 / S30A | `glass` | `S-LAH65V (OHARA) - PGM` | `854404 - moldable high-index lanthanum glass (patent nd=1.85400, νd=40.4) - PGM` | Patent [0100] row 30 lists nd=1.85400, vd=40.4. No exact current catalog entry; retained as code-based patent glass with PGM role. |
| L19 / S32 | `glass` | `S-LAH51 (OHARA)` | `S-LAH65 (OHARA)` | Patent [0100] row 32 lists nd=1.80400, vd=46.6; S-LAH65 round-trips to that pair. |
| L21 / S36 | `glass` | `FDS30 (HOYA) or H-ZLaF92 (CDGM)` | `TAFD55 (HOYA) / S-LAH99 (OHARA)` | Patent [0100] row 36 lists nd=2.00100, vd=29.1; TAFD55 and S-LAH99 both match to patent precision and resolve in the current catalog. |

### Phase 2 - Retained-information audit

- Surface `R`, `d`, and `nd` values were checked against patent [0100] Numerical Example 5; no prescription values changed.
- Zoom positions and variable gaps `d5`, `d15`, `d21`, `d24`, `d31`, `d33`, and `d37` match the Example 5 wide / intermediate / telephoto table.
- Aspheric surfaces 22A, 30A, 31A, 34A, and 35A retain the patent coefficients and `K = 0` convention from [0093] and [0100].
- Semi-diameters remain the file's documented render clear-aperture estimates, derived from the patent effective-diameter column and Canon's construction diagram.

### Phase 3 - Spectral / metadata enrichment

- No `dPgF`, `nC`, `nF`, or `ng` values were added; the patent provides only nd/vd for Numerical Example 5.
- Existing metadata (`subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, mount, format, and focus description) was confirmed against the patent and production correlation.

### Phase 4 - Analysis sync

- Updated `CanonRF2470f28.analysis.md` glass names and glass-map table to match the relabeled data file.
- Synced the pre-existing S-LAL18 correction for Elements 3 and 7; the analysis still referred to S-LAL14.
- Reworded unsupported exact-catalog claims for patent-only code labels and updated the ultra-high-index / PGM discussion.

### Verification

- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test -- buildLens lensDataTyping` - passed, 2 files / 59 tests.
- Full `npm run test` and generated catalog scans were not run because those scanner tests rewrite global generated reports outside this lens audit's file scope.
