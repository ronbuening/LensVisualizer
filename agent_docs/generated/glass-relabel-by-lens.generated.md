# Glass Relabels by Lens (auto-generated)

Per-lens work queue combining raw catalog mismatches with candidate relabel targets.
Use this when auditing a patent lens-by-lens: review all rows for a lens together,
then update the lens data, companion analysis/audit notes, and regenerate the glass reports.

**Regenerate this file** by running `npm test -- glassRelabelByLensScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **1** mismatched surfaces across **1** lens files
- **1** surfaces have at least one candidate
- **0** surfaces have high-confidence candidate ranking
- **0** surfaces have no catalog candidate and need patent review

## Relabels by Lens

### [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) - GB 1,050,055

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `SF8 class dense flint (patent e-line index stored)` | 1.69402 / 31.20 | N-SF8 (Δnd=-0.0051) | S-TIM35 (Δnd=+0.0049, Δvd=-1.07)<br>E-FD15 (Δnd=+0.0049, Δvd=-1.15) | Medium | Yes - choose candidate |
