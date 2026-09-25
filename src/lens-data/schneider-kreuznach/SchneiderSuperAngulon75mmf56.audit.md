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

- L4 / 561453 and L6 / 614563 remain intentional code-only Abbe rows pending public coefficient data.

### Phase 4 - Analysis sync

- Updated the analysis file's glass-identification sections and glass table to match the resolver-aware labels and remaining code-only rows.

## 2026-07-30 SUMITA LLF4 coefficient recovery

- SUMITA's discontinued-inclusive LLF4 vendor polynomial resolves L4 at the exact `1.56138 / 45.3` coordinate.
- Relabeled L4 as an LLF4 optical equivalent while leaving Schneider's production supplier unspecified.
- L6 (`614563`) remains unresolved; no prescription or semi-diameter values changed.

## 2026-08-07 — BACD6 catalog recovery

- Visually rechecked Table I in local `patents/US3376091.pdf`; L6 remains `1.61375 / 56.3`, rounded code 614563.
- HOYA's 2026-07-07 catalog publishes BACD6 at `1.613753 / 56.377856`, inside both runtime tolerances, with a vendor polynomial.
- Relabeled L6 as a BACD6 catalog equivalent while leaving Schneider's production supplier unspecified. This supersedes the earlier no-match disposition; no geometry changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

US 3,376,091 states that Tables I and II define an f/5.6 objective of f = 100 with an effective field angle of 100°
(col. 3, ll. 10–16; PDF p. 3). The data file declares Schneider's 198 mm image circle (105° at f/22), so the traced
corner is Y = 99 mm at 52.7°, past both the patent's 50° half-field and the 4x5 corner (81.3 mm, 47.3°). The estimated
rims were sized for a 30° chief ray: rim 12 stopped the real chief ray (solved through the stop centre) at 45.2° (76% of
the corner). The corner chief ray (52.72°) crosses surface 1 at 25.63, 2 at 16.40 and 12 at 22.17 mm, and clears
surfaces 10 (12.51 mm) and 11 (15.44 mm). For comparison, the patent's 50° field needs surface 1 ≥ 24.05 and 12 ≥ 20.80
mm, and the 4x5 corner needs 12 ≥ 19.49 mm. The validator accepts the 198 mm target, so the new values cover it: each is
the corner height + ~0.5 mm, rounded up. Neither partner follows its outer surface. Scaling surface 2 with 1 (to 18.2
mm) gives a 72° rim slope against the 64.2° limit (17.21 mm), and surface 11 (R −19.49) cannot pass 17.54 mm. Both
elements are strong menisci, so each partner keeps its own value. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 23.0 | 26.2 | 198 mm corner chief ray 25.63 mm + clearance (patent 50° field: 24.05 mm) |
| 2 | 16.0 | 17.0 | 198 mm corner chief ray 16.40 mm + clearance; rim slope 62.8°, so not scaled with surface 1 |
| 12 | 18.5 | 22.7 | 198 mm corner chief ray 22.17 mm + clearance (50°: 20.80; 4x5: 19.49 mm); surface 11 unchanged |

The validator accepts the new values, the traced edge now reaches the 99 mm corner at 52.7° with every rim clear, and
no render trim or gap overlap appears. The image-circle floor still lists surfaces 10–12 (sd-audit queue Section A)
through its wide-angle exit-pupil proxy (floors 15.81, 27.72 and 31.94 mm); the exact chief ray to the same corner
clears all three, so 10 and 11 are unchanged. Surface 2 now has the lens's largest rim angle (62.8°). The analysis
quotes none of these rims and is unchanged.
