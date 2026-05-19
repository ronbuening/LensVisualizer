# Audit Log — Nikon AF-S NIKKOR 105mm f/1.4E ED

Patent: JPWO2019116563A1 / WO2019/116563 A1, Example 3

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / 6 | `glass` | `S-LAM2 equiv. (Ohara)` | `S-NBH8 (Ohara)` | Patent Example 3 row 6 lists nd=1.72047, vd=34.71, θgF=0.583; S-NBH8 is the sourced Ohara match. |
| L35 / 19 | `glass` | `S-LAM2 equiv. (Ohara)` | `S-NBH8 (Ohara)` | Patent Example 3 row 19 repeats nd=1.72047, vd=34.71, θgF=0.583; reused S-NBH8 consistently with L14. |
| L36 / 20 | `glass` | `S-LAH64 equiv. (Ohara)` | `S-LAH96 (Ohara)` | Patent Example 3 row 20 lists nd=1.76684, vd=46.78, θgF=0.558; S-LAH96 is the closest sourced Ohara match among the reviewed catalog candidates. |
| L37 / 22 | `glass` | `S-TIL26 (Ohara)` | `E-FL5 (HOYA)` | Patent Example 3 row 22 lists nd=1.58144, vd=40.98, θgF=0.576; Hoya E-FL5 is the exact sourced catalog match, so no generic code was used. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 3 rows against the extracted Japanese national-phase patent table; stored `nd`, `vd`, θgF, and element mapping already matched.
- No surface curvature, spacing, focus variable, stop, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-NBH8, S-LAH96, and E-FL5 already include manufacturer/refractiveindex.info-backed source data.
- No new catalog addition was required.

### Phase 4 — Analysis sync

- Updated L14, L35/L36, L37, glass-map summary, achromatization text, and source list.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
- `npm run lint` — passed.
- `npm run format:check` — passed.
- `git diff --check` — passed.
