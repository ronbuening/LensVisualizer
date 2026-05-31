# Audit Log - Leica Summicron-R 50mm f/2

Patent: US 4,123,144, Example 8

## 2026-05-31 - Catalog-mismatch review

### Phase 1 - Glass corrections

| Element / surface | Before | After | Justification |
|---|---|---|---|
| L1 / S1 | `SF10 (Schott; patent ne/ve values stored as nd/vd)` | `Unmatched (Schott SF10 e-line constants...)` | Patent Example 8 gives ne=1.73430, ve=28.19. The Schott catalog entry is d-line SF10 (nd=1.72825), so resolver use would apply the wrong reference-line constants. |
| L3 / S4 | `SF11 (Schott; patent ne/ve values stored as nd/vd)` | `Unmatched (Schott SF11 e-line constants...)` | Patent Example 8 gives ne=1.79190, ve=25.55. Public SF11 d-line nd=1.78472, causing the generated mismatch. |
| L4 / S7 | `SF2 (Schott; patent ne/ve values stored as nd/vd)` | `Unmatched (Schott SF2 e-line constants...)` | This row was just under the generated mismatch threshold, but it has the same e-line/d-line convention issue. Marking it unmatched prevents a silent d-line Sellmeier application to e-line patent data. |

No new catalog entries were added. The issue is reference-line convention, not missing Sellmeier data for SF10/SF11/SF2.

### Phase 2 - Retained-information audit

- Patent Example 8 table confirms the e-line constants used in the data file.
- Patent Fig. 2 was checked against the stored SD profile. The patent omits clear apertures; the data-file estimates preserve the visible tall front meniscus, smaller stop, and slightly re-expanding rear pair.

### Phase 4 - Analysis sync

- Added an analysis note that the e-line Schott rows are resolver-unmatched solely to avoid applying d-line catalog constants.
