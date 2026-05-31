# Audit Log - Hasselblad HC 150mm f/3.2

Patent: US 2002/0075570 A1, Embodiment 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S5 | `glass` | `Dense flint (689/312 code, uncertain)` | `E-FD8 (HOYA, 689312 code)` | Patent Embodiment 1 row 5 gives e-line Ne=1.69416 and vd=31.2; the stored d-line conversion is nd=1.68893. HOYA E-FD8 is a coefficient-backed 689312 code-family match. |
| L7 / S12 | `glass` | `Barium light flint (561/453 code, uncertain)` | `561453 - barium light flint (patent e-line Ne=1.56433, vd=45.3; no exact public catalog match)` | Patent Embodiment 1 row 12 gives e-line Ne=1.56433 and vd=45.3; no coefficient-backed public catalog row was found for 561453. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20020075570A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Embodiment 1 table row 5 for L3 and row 12 for L7. The patent table is e-line; the data file stores d-line conversions.
- No radius, spacing, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Used the existing coefficient-backed HOYA E-FD8 entry for L3.
- Checked the current runtime catalog and public exact-code searches for 561453; no defensible coefficient-backed match was found.

### Phase 4 - Analysis sync

- Updated the L3 narrative, glass table, and chromatic-strategy text for E-FD8.
- Updated L7 to keep an explicit unbroken 561453 unresolved token.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.

## 2026-05-31 - Catalog-mismatch second-batch recheck

Reviewed the local untracked file `patents/US20020075570A1.pdf`, Embodiment 1 / Table 1.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / S9 | `glass` | `Lanthanum crown (670/572 code, uncertain; cf. H-LAK6A, CDGM)` | `670572 - lanthanum crown...` | Embodiment 1 row 9 gives e-line Ne=1.67380 and vd=57.2; the data file stores the d-line conversion nd=1.67003. No exact coefficient-backed public catalog match was found, and the H-LAK6A hint caused a false catalog resolution, so the row is code-only. |

Figure / SD check:

- Rendered Figure 1 from the local PDF, page 1. Figure 1 is the matching Embodiment 1 cross-section.
- The patent does not publish semi-diameters. The stored SD profile visually matches the figure's medium-format telephoto envelope: large front group, smaller translating G2 doublet, stop gap, and a compact rear triplet. No SD edits were made.
