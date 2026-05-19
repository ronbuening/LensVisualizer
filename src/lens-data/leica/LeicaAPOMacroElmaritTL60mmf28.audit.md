# Audit Log — Leica APO-Macro-Elmarit-TL 60mm f/2.8 ASPH

Patent: JP 2016-090725 A, Example 9

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / 3A | `glass` | `S-BAL35 (OHARA)` | `S-BAL42 (OHARA)` | Patent Example 9 row 3 lists nd=1.58313 and vd=59.38; S-BAL42 is the matching Ohara/refractiveindex.info catalog glass. |
| L22 / 10 | `glass` | `S-TIH14 (OHARA)` | `NBFD15 (HOYA)` | Patent Example 9 row 10 lists nd=1.80610 and vd=33.27; Hoya NBFD15 round-trips the pair, so a generic code was avoided. |
| L23 / 12A | `glass` | `S-BAL35 (OHARA)` | `S-BAL42 (OHARA)` | Patent Example 9 row 12 repeats nd=1.58313 and vd=59.38; reused S-BAL42 consistently with L12. |
| L31 / 14 | `glass` | `S-LAH79 (OHARA)` | `TAFD35 (HOYA)` | Patent Example 9 row 14 lists nd=1.91082 and vd=35.25; Hoya TAFD35 is the sourced exact catalog match. |

### Phase 2 — Retained-information audit

- Checked Example 9 rows 3, 10, 12, and 14 against the patent table; stored `nd`, `vd`, and asphere-bearing element mapping already matched.
- No curvature, thickness, asphere coefficient, focus-gap, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-BAL42, NBFD15, and TAFD35 already include manufacturer/refractiveindex.info-backed source data.
- No new catalog entry was required.

### Phase 4 — Analysis sync

- Updated Example-selection prose, L12/L22/L23/L31 element notes, glass summary, asphere-substrate text, and source list.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
- `npm run lint` — passed.
- `npm run format:check` — passed.
- `git diff --check` — passed.
