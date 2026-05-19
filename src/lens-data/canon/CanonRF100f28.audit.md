# Audit Log - Canon RF 100mm f/2.8 L Macro IS USM

Patent: JP2021-47297A, Numerical Example 1 (Canon / Taki, Mori, Nakahara)
Catalog version: 952b877

## 2026-05-10 - Glass relabel + patent prescription audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / surface 2 | `glass` | `S-TIH18 (OHARA)` | `S-TIH14 (OHARA)` | Patent Numerical Example 1 row 2 lists nd=1.76182, vd=26.5. Catalog S-TIH14 round-trips this pair; S-TIH18 is nd=1.72151. |
| L6 / surface 10 | `glass` | `S-LAH79 (OHARA)` | `S-LAH99 (OHARA)` | Patent row 10 lists nd=2.00100, vd=29.1. Catalog S-LAH99 round-trips this pair; S-LAH79 is nd=2.00330, vd=28.27. |
| L7 / surface 11 | `glass` | `S-LAM54 (OHARA)` | `S-LAH66 (OHARA)` | Patent row 11 lists nd=1.77250, vd=49.6. Catalog S-LAH66 round-trips this pair; S-LAM54 is nd=1.756998. |
| L8 / surface 13 | `glass` | `S-LAL9 (OHARA)` | `S-LAL18 (OHARA)` | Patent row 13 lists nd=1.72916, vd=54.7. Catalog S-LAL18 round-trips this pair; S-LAL9 is nd=1.691002. |
| L9 / surface 16 | `glass` | `S-LAM51 (OHARA)` | `S-LAL59 (OHARA)` | Patent row 16 lists nd=1.73400, vd=51.5. Catalog S-LAL59 round-trips this pair; S-LAM51 is nd=1.699998. |
| L10 / surface 18 | `glass` | `S-LAM54 (OHARA)` | `S-LAH66 (OHARA)` | Patent row 18 repeats the same nd/vd pair as L7; same S-LAH66 relabel rationale. |
| L11 / surface 19 | `glass` | `S-NPH4 (OHARA)` | `946180 — ultra-high-index dense flint (nd=1.94595, νd=18.0)` | Patent row 19 lists nd=1.94595, vd=18.0. No current catalog entry matches; S-NPH4 is nd=1.89286, so a code-based label avoids a false Sellmeier match. |
| L12 / surface 21 | `glass` | `E-LAF8 (Hikari)` | `764485 — Hikari/CDGM lanthanum flint class (nd=1.76385, νd=48.5)` | Patent row 21 lists nd=1.76385, vd=48.5. No current catalog entry matches; the code-based label preserves the Hikari/CDGM attribution while leaving a future catalog upgrade path. |
| L13 / surface 23 | `glass` | `S-LAL9 (OHARA)` | `S-LAL18 (OHARA)` | Patent row 23 repeats the same nd/vd pair as L8; same S-LAL18 relabel rationale. |
| L14 / surface 24 | `glass` | `S-LAH78 (OHARA)` | `TAFD40 (HOYA)` | Patent row 24 lists nd=2.00069, vd=25.5. Catalog TAFD40 round-trips this pair; S-LAH78 is not currently catalog-resolved. |
| L16 / surface 28 | `glass` | `S-TIM28 (OHARA)` | `S-TIM25 (OHARA)` | Patent row 28 lists nd=1.67270, vd=32.1. Catalog S-TIM25 round-trips this pair; S-TIM28 is nd=1.68893. |

### Phase 2 - Retained-information audit

- Confirmed surface prescription rows 1-31 against JP2021-47297A Numerical Example 1: all stored `R`, infinity-position `d`, and element `nd` values match the patent table. No numeric prescription fields changed.
- Confirmed aperture stop row 15 and variable gaps `d15`, `d20`, `d25`, and `d29`. The project stores the infinity-to-1.4x endpoints: `d15` 3.10 -> 27.41, `d20` 27.41 -> 3.10, `d25` 4.17 -> 29.50, and `d29` 26.63 -> 1.30.
- Confirmed patent-reported design values already in the file: focal length 100.81 mm, F-number 2.92, image height 21.64 mm, total optical length 162.37 mm, and BF 14.66 mm.
- Confirmed single-lens focal lengths L1-L17 match the patent single-lens data table.
- Confirmed Example 1 has no aspherical coefficient table; retained `asph: {}`.
- Semi-diameters remain the existing render-tuned values derived from the patent effective-diameter table and Canon construction diagram matching.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes nd/vd only; no `dPgF`, `nC`, `nF`, or `ng` values were found, so no per-element spectral fields were added.
- Catalog relabeling upgrades Sellmeier resolution for L2, L6, L7, L8, L9, L10, L13, L14, and L16.
- Existing metadata (`subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `maker`, and `focusDescription`) already matched the patent and was retained.

### Phase 4 - Analysis sync

- Updated `CanonRF100f28.analysis.md` element narratives, D2/D3/D4 prose, glass map, repeated-glass summary, and anomalous glass-power pairing notes for the corrected labels.
- Regenerated `agent_docs/generated/catalog-mismatches.generated.md` and `agent_docs/generated/glass-relabel-candidates.generated.md`; this lens no longer appears in either report.
- Regenerated `agent_docs/generated/unresolved-glass.generated.md`; only the intentional 946180 and 764485 code-based labels remain for this lens.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed.
- `npm test -- unresolvedGlassScan` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (120 files, 1566 tests; expected error-boundary console traces were emitted by tests).
