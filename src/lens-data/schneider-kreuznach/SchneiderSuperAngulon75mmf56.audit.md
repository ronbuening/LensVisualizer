# Audit Log - Schneider-Kreuznach Super-Angulon 75mm f/5.6

Patent: US 3,376,091, Table I (Wagner & Macher / Schneider)

## 2026-06-23 - Glass relabel and SD sanity audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3 | `glass` | `LaF3 (Schott)` | `LaF3 (Schott 717479) / S-LAM3 optical equivalent` | Patent Table I gives nd=1.71700, vd=47.9. The historical Schott LaF3 assignment remains the design context; local catalog coverage comes from the coefficient-backed S-LAM3 optical equivalent. |
| L3 / S4 | `glass` | `SSK class (614/551, Schott - probable discontinued formulation)` | `614551 - SSK-class dense barium crown (Schott historical; Hikari SK9 optical equivalent)` | Patent Table I gives nd=1.61405, vd=55.1. Code 614551 resolves to coefficient-backed SK9, but the 1960s Schneider context is still documented as historical Schott SSK-class. |
| L4 / S5 | `glass` | `BaLF class (561/453, Schott - uncertain identification)` | `561453 - BaLF-class barium light flint (Schott historical; no exact public Sellmeier)` | Patent Table I gives nd=1.56138, vd=45.3. No exact coefficient-backed public catalog row is present; kept as an unbroken future-upgrade code. |
| L5 / S7 | `glass` | `BaK4 (Schott)` | `BaK4 (Schott) / S-BAL14 optical equivalent` | Patent Table I gives nd=1.56883, vd=56.0. S-BAL14 is the local coefficient-backed barium-crown optical equivalent while preserving the historical Schott BaK4 assignment. |
| L6 / S8 | `glass` | `SSK class (614/563, Schott - probable discontinued formulation)` | `614563 - SSK-class dense barium crown (Schott historical; no exact public Sellmeier)` | Patent Table I gives nd=1.61375, vd=56.3. No exact coefficient-backed public catalog row is present; kept as an unbroken future-upgrade code. |
| L7 / S9 | `glass` | `BaSF class (702/411, Schott - probable discontinued formulation)` | `BaSF-class barium dense flint (Schott 702411; S-BAH27 / BAFD7 optical equivalent)` | Patent Table I gives nd=1.70181, vd=41.1. The historical BaSF-family assignment is retained; S-BAH27 / BAFD7 provide coefficient-backed local equivalents. |
| L8 / S11 | `glass` | `K/BK class (520/636, Schott - uncertain identification)` | `BK7G18 optical match (Schott 520636; K/BK crown class)` | Patent Table I gives nd=1.52015, vd=63.6. BK7G18 is the local coefficient-backed optical match. |

APD status remains `false` for all elements. The patent describes ordinary wide-angle chromatic balancing, not anomalous partial dispersion glass. High-index status is descriptive only in this schema; L2 and L7 remain documented as the high-index outer negative elements in their triplets.

### Phase 2 - Retained-information audit

- R, d, nd, and vd values were checked against US 3,376,091 Table I, with the file's stated 0.75 scale factor from f=100 to the 75 mm representative.
- The patent does not publish semi-diameters. Rendered page 1 confirms the current broad SD pattern: largest outer menisci, smaller cemented-triplet rims, and a tight central stop region. No SD values were changed.
- Stop placement remains the equal split of the patent diaphragm gap d6.

### Phase 3 - Spectral / metadata enrichment

- `npm run generate:glass-reports` now reports this lens at 6/8 trusted Sellmeier rows.
- L4 / 561453 and L6 / 614563 remain intentional code-only Abbe rows pending public coefficient data.

### Phase 4 - Analysis sync

- Updated the analysis file's glass-identification sections and glass table to match the resolver-aware labels and remaining code-only rows.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.

