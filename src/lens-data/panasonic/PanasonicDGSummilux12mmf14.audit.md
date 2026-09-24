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

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 1 on PDF pp. 10–11: surface 29 d = 11.9400, surfaces 30–31 optical filter F (¶0071) t = 4.2000, nd 1.51680, νd 64.20, and BF = 0.9999 / 1.0000 / 0.9999 at INF / 40× / 0.2 m. The legacy fold 11.9400 + 4.2000/1.51680 + 0.9999 = 15.7089 is reproduced exactly; surface 29 now stores 11.94 and the filter is one `rearPlates` entry (label F, gapAfter 0.9999, the stored INF and 0.2 m value).
- Glass label BSC7 (Hoya), matching the Hoya-equivalent labels used for the elements (L1 has the same 1.51680 / 64.20 pair); catalog resolution confirmed.
- Plate check against the previous data: EFL identical and paraxial defocus unchanged at both focus keyframes (worst difference 2e-16 mm). Physical track grows by t(1 − 1/n) = 1.4310 mm and now equals the patent's printed 89.00 mm total length.
