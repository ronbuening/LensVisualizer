# Audit Log - Fujifilm XF 60mmF2.4 R Macro

Patent: US 2014/0247506 A1, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / S6 | `glass` | `Dense flint (unidentified; nd/vd = 667/311)` | `667311 - dense flint (patent nd=1.66680, vd=31.1; no exact public catalog match)` | Patent Example 1 / Table 1 gives nd=1.66680 and vd=31.1. No exact coefficient-backed public match was found, so the unbroken code is retained. |
| L17 / S12A | `glass` | `Lanthanum heavy flint (PGM, unidentified; nd/vd = 803/404)` | `803404 - PGM lanthanum heavy flint (patent nd=1.80348, vd=40.4; no exact public catalog match)` | Patent Example 1 / Table 1 gives nd=1.80348 and vd=40.4. Nearby LAH glasses are not exact coefficient-backed matches for 803404. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20140247506A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Table 1 row 6 for L14 (nd=1.66680, vd=31.1) and row 12A for L17 (nd=1.80348, vd=40.4).
- No radius, spacing, asphere, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Checked the current runtime catalog and public exact-code searches for 667311 and 803404.
- No catalog entry or alias was added because no public coefficient-backed row matched either patent code.

### Phase 4 - Analysis sync

- Updated the L14/L17 glass-identification rows to use unbroken six-digit tokens and unresolved status.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.

## 2026-05-31 - Catalog-mismatch second-batch recheck

Reviewed the local untracked file `patents/US20140247506A1.pdf`, Example 1.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L15 / S9 | `glass` | `S-TIL27 (OHARA) - probable...` | `Unmatched (patent nd=1.51742, listed vd=48.8; Table 17 implies vd~52.4; no resolver-safe catalog match)` | Table 1 row 9 lists nd=1.51742 and vd=48.8. Table 17's Example 1 conditional value implies the listed vd is likely a typo near 52.4, but the stored patent row should not resolve to the current S-TIL27 catalog entry. The label is intentionally unmatched until a coefficient-backed exact row is available. |

Figure / SD check:

- Rendered Figure 1 from the local PDF, page 1. Figure 1 is the matching Example 1 cross-section at infinity and close-focus positions.
- The patent does not publish semi-diameters. The stored SD profile visually matches the figure: moderate front group diameters, a stop neck before L15/L16, and a smaller rear group with the cover glass excluded as documented. No SD edits were made.
