# Audit Log - Schneider-Kreuznach Super-Symmar XL 110mm f/5.6 Aspheric

Patent: US 5,870,234, Example 2 / Claim 3 (Ebbesmeier nee Schitthof)

## 2026-06-23 - E-line glass handling and SD sanity audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `KF9 (Schott)` | `Unmatched (Schott KF9; patent e-line ne=1.52583, ve=51.25 stored as nd/vd)` | US 5,870,234 Example 2 tabulates e-line values. The file intentionally stores ne/ve in `nd`/`vd`; explicit unmatched prevents future d-line catalog coefficients from being applied to e-line geometry. |
| L2 / S3 | `glass` | `N-LAK33B (Schott)` | `Unmatched (Schott N-LAK33B; patent e-line ne=1.75844, ve=52.09 stored as nd/vd)` | Same e-line convention. This remains the high-index lanthanum-crown assignment in prose, but d-line Sellmeier is suppressed. |
| L3 / S5 | `glass` | `N-LAK33B (Schott)` | `Unmatched (Schott N-LAK33B; patent e-line ne=1.75844, ve=52.09 stored as nd/vd)` | Same e-line convention and high-index lanthanum-crown assignment as L2. |
| L4a / S7 | `glass` | `N-SK5 (Schott)` | `Unmatched (Schott N-SK5; patent e-line ne=1.59142, ve=61.03 stored as nd/vd)` | Same e-line convention; prevents the d-line N-SK5 catalog row from being mixed with patent e-line data. |
| L4b / S8 | `glass` | `F2 class (Schott, Delta ne = +0.001 vs. catalog)` | `Unmatched (Schott F2-class; patent e-line ne=1.62408, ve=36.12 stored as nd/vd)` | Same e-line convention; the patent row is close to F2 but not a d-line runtime Sellmeier row. |
| L5 / S10 | `glass` | `K10 (Schott)` | `Unmatched (Schott K10; patent e-line ne=1.50349, ve=56.13 stored as nd/vd)` | Same e-line convention; K10 identity remains in prose without implying local Sellmeier coverage. |

APD status remains `false` for all elements. The patent describes low-refractivity crowns, high-refractivity crowns, and a near-index/far-dispersion cemented achromat; it does not claim anomalous partial dispersion glass. High-index status remains descriptive for L2/L3 N-LAK33B in the role text.

### Phase 2 - Retained-information audit

- R, d, ne, and ve values were checked against US 5,870,234 Example 2 / Claim 3.
- The patent marks r9 as aspherical but does not publish K or polynomial coefficients; the current zero-coefficient placeholder remains the correct non-fabricated representation.
- The patent does not publish semi-diameters. Rendered page 2 confirms the current SD proportions: largest front member, taper toward the stop, and a smaller rear group. No SD values were changed.

### Phase 3 - Spectral / metadata enrichment

- The patent does not publish nC, nF, ng, PgF, theta-gF, or dPgF tables. No line-index enrichment was added.
- `npm run generate:glass-reports` now reports this lens at 0/6 trusted Sellmeier rows by design; all six glass rows are Abbe-backed because the stored prescription is e-line patent data.

### Phase 4 - Analysis sync

- Updated the spectral-convention notes to explain why the data file suppresses d-line Sellmeier resolution even where Schott family assignments are known.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.

