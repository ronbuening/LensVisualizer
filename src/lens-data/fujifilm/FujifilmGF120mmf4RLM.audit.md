# Audit Log — Fujifilm Fujinon GF 120mm f/4 R LM OIS WR Macro

Patent: US 2018/0059384 A1, Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L13 / 4 | `glass` | `S-TIH4 (OHARA)` | `S-NBH51 (OHARA)` | Patent Example 1 lists nd=1.74950, vd=35.28, θgF=0.58704; S-NBH51 is the matching Ohara/refractiveindex.info catalog glass. |
| L22 / 10 | `glass` | `S-TIL25 (OHARA)` | `S-NSL36 (OHARA)` | Patent Example 1 lists nd=1.51742, vd=52.43, θgF=0.55649; S-NSL36 matches the pair in the Ohara catalog source. |
| L32 / 15 | `glass` | `S-LAM51 (OHARA)` | `S-LAM52 (OHARA)` | Patent Example 1 lists nd=1.72000, vd=43.69, θgF=0.56995; S-LAM52 round-trips the patent pair. |
| L43 / 20 | `glass` | `S-NBH52V (OHARA)` | `E-F1 (HOYA)` | Patent Example 1 lists nd=1.62588, vd=35.70, θgF=0.58935; Hoya E-F1 is the exact sourced catalog match, so no generic code was used. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 1 rows against the extracted patent table; stored `nd`, `vd`, and element mapping already matched the patent values.
- No surface curvature, spacing, asphere, focus-gap, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-NBH51, S-NSL36, S-LAM52, and E-F1 already include manufacturer/refractiveindex.info-backed source data.
- No new Sellmeier or line-index catalog entry was required.

### Phase 4 — Analysis sync

- Updated the element prose and glass selection summary for L13, L22, L32, and L43.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
- `npm run lint` — passed.
- `npm run format:check` — passed.
- `git diff --check` — passed.
