# Audit Log — Nikon AI Nikkor 135mm f/2.8

Patent: US 4,057,330, Example 2

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `S-BSM18 (OHARA)` | `S-BSM16 (OHARA)` | Patent Example 2 row L1 lists nd=1.62041 and vd=60.3; S-BSM16 is the sourced Ohara match. |
| L2 / 3 | `glass` | `S-BSM18 (OHARA)` | `S-BSM16 (OHARA)` | Patent Example 2 row L2 repeats nd=1.62041 and vd=60.3; reused S-BSM16 consistently with L1. |
| L3 / 5 | `glass` | `S-TIH14 (OHARA)` | `S-TIH23 (OHARA)` | Patent Example 2 row L3 lists nd=1.78470 and vd=26.1; S-TIH23 round-trips the pair in the Ohara catalog source. |
| L4 / 6 | `glass` | `S-TIH4 (OHARA)` | `S-TIH13 (OHARA)` | Patent Example 2 row L4 lists nd=1.74000 and vd=28.2; S-TIH13 is the sourced Ohara match. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 2 rows against the patent table; stored `nd`, `vd`, and element mapping already matched.
- No curvature, spacing, scale factor, stop-placement, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-BSM16, S-TIH23, and S-TIH13 already include manufacturer/refractiveindex.info-backed source data.
- No generic code fallback or new catalog addition was required.

### Phase 4 — Analysis sync

- Updated L1/L2/L3/L4 prose, glass summary, and glass-selection discussion.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
- `npm run lint` — passed.
- `npm run format:check` — passed.
- `git diff --check` — passed.
