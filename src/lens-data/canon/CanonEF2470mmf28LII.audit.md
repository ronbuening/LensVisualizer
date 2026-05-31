# Audit Log - Canon EF 24-70mm f/2.8L II USM

Patent: US 8,736,971 B2, Numerical Example 3

## 2026-05-31 - Catalog-mismatch review

### Phase 1 - Glass corrections

| Element / surface | Before | After | Justification |
|---|---|---|---|
| L7 / S11 | `S-TIM2 (OHARA; titanium flint)` | `S-FTM16 (OHARA; titanium flint, code 593353)` | Patent Numerical Example 3 row 11 gives nd=1.59270, vd=35.3. S-TIM2 resolves to nd=1.62004; S-FTM16 round-trips the patent row. |
| L13 / S23 | `S-NBH5 (OHARA; niobium flint / KZFS-family equivalent)` | `N-KZFS8 (Schott; S-NBH8-equivalent KZFS-family glass, code 720347)` | Patent row 23 gives nd=1.72047, vd=34.7. S-NBH5 resolves to nd=1.65412; N-KZFS8 is an exact catalog-backed match. |

No new catalog entries were needed. Both replacement glasses were already present in the catalog with verified coefficients.

### Phase 2 - Retained-information audit

- Patent Fig. 3 was checked against the stored SD profile. The data-file SDs remain presentation estimates because the patent does not publish clear apertures; the broad front unit, compact second unit, stop-adjacent middle groups, and rear relay proportions match the figure.

### Phase 4 - Analysis sync

- Updated the analysis element text, glass table, chromatic-strategy paragraph, and source note for S-FTM16 and N-KZFS8 / S-NBH8.
