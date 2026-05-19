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

## 2026-05-19 — Missing-Sellmeier queue follow-up

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G12 / S3 | `glass` | `806/333 (vendor uncertain)` | `NBFD15 (HOYA, 806333 code)` | Patent Example 1 row 3 gives nd=1.80610 and vd=33.3. HOYA NBFD15 is a coefficient-backed 806333 code-family match already present in the catalog. |
| G33 / S16 | `glass` | `806/333 (vendor uncertain)` | `NBFD15 (HOYA, 806333 code)` | Patent Example 1 row 16 repeats nd=1.80610 and vd=33.3, so the same NBFD15 catalog entry applies. |

### Phase 2 — Patent evidence

- Local patent file: `patents/US20060209426A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Reconfirmed Example 1 rows 3 and 16 for the repeated 806333 glass.
- No radius, spacing, focus, stop, mount, or format edits made.

### Phase 3 — Catalog-search disposition

- Used the existing HOYA NBFD15 catalog entry (`code6: "806333"`).
- This supersedes the earlier unresolved/vendor-uncertain interpretation for G12 and G33.

### Phase 4 — Analysis sync

- Updated G12/G33 narratives, the glass-identification table, and the glass-reuse summary.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.
