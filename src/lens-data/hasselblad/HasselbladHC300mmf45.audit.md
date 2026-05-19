# Audit Log — Hasselblad HC 4.5/300

Patent: US 2006/0209426 A1, Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G13 / 5 | `glass` | `S-FPL51 (OHARA)` | `S-FPL53 (OHARA)` | Patent Example 1 row 5 lists nd=1.43875 and vd=95.0; S-FPL53 is the sourced Ohara fluorophosphate match for this ultra-low-dispersion pair. |
| G21 / 9 | `glass` | `S-TIH53 (OHARA)` | `S-TIH6 (OHARA)` | Patent Example 1 row 9 lists nd=1.80518 and vd=25.5; S-TIH6 round-trips the patent pair in the Ohara catalog source. |
| G31 / 13 | `glass` | `S-LAL14 (OHARA)` | `S-LAM60 (OHARA)` | Patent Example 1 row 13 lists nd=1.74320 and vd=49.3; S-LAM60 is the matching Ohara/refractiveindex.info catalog glass. |
| G32 / 15 | `glass` | `S-TIH53 (OHARA)` | `S-TIH6 (OHARA)` | Patent Example 1 row 15 repeats nd=1.80518 and vd=25.5; reused S-TIH6 consistently with G21. |

### Phase 2 — Retained-information audit

- Checked the flagged rows against the OCR-extracted table; the patent extraction is degraded but preserves the relevant nd/vd pairs for rows 5, 9, 13, and 15.
- No surface curvature, spacing, focus, stop, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-FPL53, S-TIH6, and S-LAM60 already include manufacturer/refractiveindex.info-backed source data.
- No generic code fallback or new catalog addition was required.

### Phase 4 — Analysis sync

- Updated G13, G21, G31, G32, source notes, and the glass selection summary.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
- `npm run lint` — passed.
- `npm run format:check` — passed.
- `git diff --check` — passed.
