# Audit Log - Panasonic Leica DG Summilux 12mm f/1.4 ASPH

Patent: JP 2017-167327 A, Numerical Example 1

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Re-extracted `patents/JP2017167327A.pdf` and checked Numerical Example 1 surface data, aspheres, focus variables, group focal lengths, and conditional-expression table.
- The patent publishes effective diameters. The data file uses those values divided by two as semi-diameters, with the patent filter plate omitted and folded into the final air-equivalent BFD.

### Disposition

| Area | Disposition |
|---|---|
| Prescription | No numeric changes. Current data matches the patent table and existing analysis verification. |
| Glass labels | No changes. The Hoya-equivalent labels remain supported by nd/vd and line-index fields already stored in data. |
| APD | FCD100 and FCD705 rows remain catalog-inferred APD; the patent table does not itself publish dPgF, but the data includes catalog line-index equivalents. |
| High-index status | TAFD5F, TAFD25, NBFD15, and FDS90 roles remain supported by the patent nd values. |
| SDs | No changes. Patent effective diameters are already used as semi-diameters, giving proportions that align with the published cross-section and 62 mm filter-thread scale. |
