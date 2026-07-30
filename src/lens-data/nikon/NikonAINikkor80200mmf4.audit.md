# Audit Log — NIKON AI ZOOM-NIKKOR 80-200mm f/4

Patent: US 4,452,513, Embodiment 1, FIG. 3

## 2026-07-25 — Patent-figure SD, display-name, and glass-coverage audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L42 / 17 | `glass` | `795286 — dense flint class` | `J-LAFH3 (HIKARI; 795287 match to patent 795286 class)` | The historical Nikon/Hikari power-series row reproduces `nd = 1.795040`; its `νd = 28.692` agrees with the patent's one-decimal 28.6 class. |

J-LAFH3 was added to the reusable Hikari catalog with its published formula-3 power series. L41 (`670576`) and L43
(`797455`) remain unresolved because no coefficient-backed exact match was established. Strict Sellmeier coverage
increased from 10/13 to 11/13 elements.

### Phase 2 — Retained-information and semi-diameter audit

The patent does not publish clear apertures. FIG. 3 was measured after a 300 dpi render, rotated to a horizontal
optical axis, and normalized by the median height of G2-G4.

| Surfaces | Before SD (mm) | After SD (mm) | Justification |
|---|---:|---:|---|
| 1 / 2 / 3 | 29.5 / 29.5 / 28.5 | 23.5 / 23.5 / 23.0 | The L11 component was oversized relative to G2-G4 in the normalized FIG. 3 profile. |
| 4 / 5 | 27.5 / 27.0 | 18.5 / 18.5 | FIG. 3 draws L12 distinctly smaller than L11; the original data made them nearly equal. |

The stop and surfaces 6-22 were retained. The corrected values pass the trial surface validator.

The visible display name was corrected from `NIKON AI ZOOM-NIKKOR 80-200mm f/4 S` to
`NIKON AI ZOOM-NIKKOR 80-200mm f/4`, matching Nikon's manual and product nomenclature.

### Phase 3 — Spectral / metadata enrichment

- Added the coefficient-backed J-LAFH3 catalog row with `nd = 1.795040`, `νd = 28.692277`, code `795287`, and the
  historical Nikon/Hikari formula-3 coefficients.
- No patent line-index or anomalous-partial-dispersion values were fabricated.

### Phase 4 — Analysis sync

- Removed the erroneous `S` suffix from the visible lens name.
- Updated the L42 narrative, glass table, coverage disclosure, FIG. 3 SD notes, and catalog source.

### Verification

- `npm run audit:surface -- ./src/lens-data/nikon/NikonAINikkor80200mmf4.data.ts` — passed.
- `npm run audit:image-circle -- ./src/lens-data/nikon/NikonAINikkor80200mmf4.data.ts` — 0 undersized.
- `npm run audit:patent-figure -- ... US4452513.pdf 3 ... --rot90 --dpi=300` — rerun after the SD correction.
- `npm test -- dispersion.test.ts` — passed (47 tests).
- `npm run generate:glass-reports` — passed (7 report scans).
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed with 3 pre-existing warnings.
- `npm run test` — passed (207 files, 2440 tests).
- `npm run build` — passed (942 routes prerendered).

## 2026-07-30 - Patent 670576 catalog-equivalent recovery

- Rechecked L41 against the patent row `nd = 1.67025`, `vd = 57.6`.
- Discontinued OHARA S-LAL52 (`1.669999 / 57.327972`, code `670573`) is the closest coefficient-backed row and
  is inside the runtime d-line safety window.
- Relabeled L41 as the S-LAL52 optical equivalent while leaving the production supplier unspecified.
  L43 remains unresolved; no prescription, zoom, or semi-diameter values changed.
