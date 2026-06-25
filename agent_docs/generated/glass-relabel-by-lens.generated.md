# Glass Relabels by Lens (auto-generated)

Per-lens work queue combining raw catalog mismatches with candidate relabel targets.
Use this when auditing a patent lens-by-lens: review all rows for a lens together,
then update the lens data, companion analysis/audit notes, and regenerate the glass reports.

**Regenerate this file** by running `npm test -- glassRelabelByLensScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **2** mismatched surfaces across **1** lens files
- **1** surfaces have at least one candidate
- **0** surfaces have high-confidence candidate ranking
- **1** surfaces have no catalog candidate and need patent review

## Relabels by Lens

### [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) - DE 26

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `SF10 class (Schott legacy; stored patent n_e)` | 1.73430 / 28.47 | SF10 (Δnd=-0.0060) | No catalog candidate | Patent review | Yes - no catalog match |
| 7 | `SF18 / S-TIH18 class (stored patent n_e)` | 1.72730 / 29.02 | S-TIH18 (Δnd=-0.0058) | S-TIH10 (Δnd=+0.0009, Δvd=-0.56)<br>E-FD10 (Δnd=+0.0009, Δvd=-0.70)<br>H-ZF4A (Δnd=+0.0010, Δvd=-0.70) | Choose by context | Yes - choose candidate |

