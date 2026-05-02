# Audit Log - NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S

Patent: JP2022-92388A, Example 1 (Numerical Example 1), Table 1.

## 2026-05-02 - Patent prescription and glass relabel audit

### Phase 1 - Glass corrections

The patent lists d-line refractive indices only; vd values remain catalog/code inferences. Exact catalog relabels were used where the stored nd/vd pair round-trips to the current Sellmeier catalog. Otherwise, a six-digit nd/vd code annotation preserves the inferred glass without resolving to an incorrect catalog entry.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L6 / 10 | `glass` | `S-LAL18 (OHARA)` | `720502 - lanthanum crown (nd=1.720467, vd~50.2)` | Patent Table 1 row 10 gives nd=1.720467; S-LAL18 catalog nd=1.729157, so the old label resolved to the wrong glass. |
| L9 / 14 | `glass` | `S-LAH65V (OHARA)` | `855399 - high-index lanthanum (nd=1.854505, vd~39.9)` | Patent Table 1 row 14 gives nd=1.854505; S-LAH65V catalog nd=1.803999. |
| L10 / 16 | `glass` | `S-LAM60 (OHARA) \u2020` | `S-LAH97 (OHARA)` | Patent Table 1 row 16 gives nd=1.755000; current S-LAH97 catalog entry matches nd=1.755000 and vd=52.32. |
| L15 / 27 | `glass` | `S-LAH51 (OHARA)` | `S-NPH1 (OHARA)` | Patent Table 1 row 27 gives nd=1.808090; current S-NPH1 catalog entry matches nd=1.808095 and vd=22.76. |
| L16 / 29 | `glass` | `S-NPH2 (OHARA)` | `001255 - ultra-high-index dense flint (nd=2.00069, vd~25.5)` | Patent Table 1 row 29 gives nd=2.000690; S-NPH2 catalog nd=1.92286, so the old label resolved incorrectly. |
| L17 / 31 | `glass` | `S-BSM14 (OHARA)` | `553555 - borosilicate crown (nd=1.552981, vd~55.5)` | Patent Table 1 row 31 gives nd=1.552981; S-BSM14 catalog nd=1.603112. |
| L19 / 34 | `glass` | `S-PHM52 (OHARA)` | `603564 - medium crown (nd=1.60342, vd~56.4)` | Patent Table 1 row 34 gives nd=1.603420; S-PHM52 catalog nd=1.618000. |
| L20 / 36 | `glass` | `S-LAH58 (OHARA) \u2020` | `850323 - high-index lanthanum (nd=1.85026, vd~32.3)` | Patent Table 1 row 36 gives nd=1.850260; S-LAH58 catalog nd=1.882997. |
| L21 / 37 | `glass` | `S-LAM54 (OHARA)` | `S-LAL18 (OHARA)` | Patent Table 1 row 37 gives nd=1.729160; current S-LAL18 catalog entry matches nd=1.729157 and vd=54.68. |
| L22 / 39 | `glass` | `S-BSM71 (OHARA) \u2020` | `S-NBH5 (OHARA)` | Patent Table 1 row 39 gives nd=1.654115; current S-NBH5 catalog entry matches nd=1.654115 and vd=39.68. |
| L23 / 41 | `glass` | `S-LAH97 (OHARA)` | `903354 - ultra-high-index lanthanum (nd=1.90265, vd~35.4)` | Patent Table 1 row 41 gives nd=1.902650; current S-LAH97 catalog nd=1.755000, so the old label resolved incorrectly. |
| L25 / 45 | `glass` | `S-LAH63 (OHARA) \u2020` | `738493 - lanthanum crown (nd=1.738, vd~49.3)` | Patent Table 1 row 45 gives nd=1.738000; S-LAH63 catalog nd=1.804398. |

### Phase 2 - Retained-information audit

- Surfaces 1-48 were checked against JP2022-92388A Table 1; stored `R`, `d`, `nd`, and cemented/air `elemId` assignments match the patent table, with variable gaps represented by the corresponding `var` entries.
- Table 1 provides no semi-diameters; existing `sd` values remain geometric estimates as documented in the file header.
- `zoomPositions`, `focalLengthDesign`, `apertureDesign`, group focal lengths, and variable gaps match Table 1. The data file stores each `var` entry as `[wide, tele]` rows with `[infinity, close]` pairs, matching the renderer convention.
- Example 1 has no aspherical coefficient table; `asph: {}` remains correct.

### Phase 3 - Spectral / metadata enrichment

- No patent spectral line-index, vd, or partial-dispersion data was available to add.
- Existing top-level metadata already covered patent year, design focal lengths, design aperture, element/group counts, maker, and focus description.
- Regenerated catalog mismatch reports after relabeling; the lens no longer appears in `agent_docs/catalog-mismatches.generated.md`.

### Phase 4 - Analysis sync

- Updated `NikonNikkorZ100400f4556.analysis.md` to replace stale S-FPL53 ED labels with S-FPL51.
- Updated the standard-glass table for L4, L6, L9, L10, L14-L17, L19-L23, and L25 so the prose matches the audited data file.
- Corrected the companion data-file reference in the analysis header.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (116 files, 1507 tests).
