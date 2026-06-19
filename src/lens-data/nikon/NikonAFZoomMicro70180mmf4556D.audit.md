# Audit Log — Nikon AF Zoom-Micro Nikkor ED 70-180mm f/4.5-5.6D

Patent: US 5,717,527, seventh embodiment, Table 8.

## 2026-06-19 — Glass mismatch cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / surface 1 | `glass` | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | `861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)` | Patent Table 8 lists `νd=23.01`, `nd=1.86074`; the old label resolved to HOYA TAFD25 at `nd=1.90366`, so the safety net correctly rejected it. |
| L2 / surface 3 | `glass` | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | `861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)` | Same Table 8 row values as L1. The generated relabel candidate `S-NPH5` is numerically close but not source-backed for patent code 861/230. |

### Phase 2 — Retained-information audit

- Confirmed the affected stored values against local `patents/US5717527.pdf`: L1 and L2 remain `nd=1.86074`, `νd=23.01`.
- No radius, spacing, semi-diameter, or variable-gap changes were made in this pass.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, or `dPgF` rows were found for these elements in the extracted local patent text. The elements remain on the Abbe path until a coefficient-backed 861230 catalog source is found.

### Phase 4 — Analysis sync

- Updated the L1/L2 descriptions and glass-identification table to remove the misleading TAFD25/J-LASFH13HS class wording.

### Verification

- `npm run generate:glass-reports` — passed; catalog mismatches dropped to zero.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed.
- `npm run lint` — passed.
