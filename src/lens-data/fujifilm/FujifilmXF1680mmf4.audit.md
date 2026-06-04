# Audit Log - Fujifilm XF 16-80mm f/4 R OIS WR

Patent: US 2020/0166735 A1, Example 11

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S6A | `glass` | `PGM lanthanum dense flint (808409)` | `808409 - PGM lanthanum dense flint (patent nd=1.80780, vd=40.89)` | Patent Example 11 / Table 31 gives nd=1.80780 and vd=40.89. Sweep 2 resolves the code through public HOYA MC-NBFD135 coefficients. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20200166735A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Example 11 Table 31 row 6A for L21: nd=1.80780, vd=40.89.
- No radius, spacing, semi-diameter, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Checked the current runtime catalog and public exact-code searches for 808409 / nd=1.80780 / vd=40.89. Sweep 2 later found the public HOYA MC-NBFD135 coefficient row for this code.
- Nearby lanthanum dense-flint glasses do not round-trip the patent code with coefficient-backed evidence, so no catalog entry or alias was added.

### Phase 4 - Analysis sync

- Updated the glass-identification table to mark L21 with an explicit unbroken 808409 token. That token now resolves through the Sweep 2 catalog entry.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.
