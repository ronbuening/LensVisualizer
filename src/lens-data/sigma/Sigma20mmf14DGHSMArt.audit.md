# Audit Log - Sigma 20mm F1.4 DG HSM | Art

Patent: JP 2019-117419 A, Numerical Example 1

## 2026-05-31 - Sigma last-commit patent glass audit

### Patent evidence

- Reviewed ignored local file `patents/JP2019117419A.pdf`.
- Example 1 table lists 15 glass elements with `nd` and `vd`; it does not publish `PgF`, `theta_gF`, or line-index data for the glass rows.
- Figure 1 shows the large retrofocus L1 front stack, a smaller floating L2, and a compact L3 rear imaging group.

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| E2 / S3A | `glass` | `M-LAC130 (Hoya)` | `M-LAC130 (HOYA)` | Added coefficient-backed HOYA `M-LAC130` catalog entry for patent nd/vd = 1.69350 / 53.20. |
| E14 / S24 | `glass` | `BAFD7 (Hoya)` | `BAFD7 (HOYA)` | Added coefficient-backed modern HOYA `BAFD7` entry for patent nd/vd = 1.70154 / 41.15. |
| E15 / S26A | `glass` | `Unmatched (764/491; probable Hoya M-TAF101 moldable lanthanum, non-unique)` | `764491 - L-LAM69 / moldable lanthanum-crown class (patent nd=1.76450, vd=49.10; no public Sellmeier match)` | Preserves the patent code and moldable-asphere class without asserting a non-unique catalog glass. |

### Spectral / metadata disposition

- No `dPgF` fields were added because the patent table only publishes `nd` and `vd`.
- E15 intentionally remains Abbe/code-based pending a coefficient-backed public match for 764491.

### Cross-section review

- Reviewed patent Figure 1 against the current semi-diameter progression. No SD edits were needed; the current file already shows the large L1 retrofocus front group and smaller L2/L3 groups.

### Analysis sync

- Updated E2/E14 labels to the catalog-backed HOYA names.
- Reworded E15 from a probable M-TAF101 claim to a code-preserving moldable lanthanum-crown class.

### Verification

- `npm test -- dispersion.test.ts` - passed.
- `npm run generate:glass-reports` - passed; this lens is now 14/15 Sellmeier-covered, with only E15 / 764491 unresolved by design.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.
