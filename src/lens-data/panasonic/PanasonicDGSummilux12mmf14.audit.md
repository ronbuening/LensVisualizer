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

## 2026-10-08 - dPgF moved to the engine's normal line

### Patent evidence

- `patents/JP2017167327A.pdf` (JP 2017-167327 A, 22 pages) prints no partial dispersion and defines no normal line: no PgF / θgF column, no ΔPgF, no anomalous-dispersion condition on any page. ¶0057 (PDF p. 9) defines the surface-data columns as r, d, nd, νd and effective diameter, and the Numerical Example 1 table (PDF pp. 10–11) prints exactly those. Conditions (1)–(6) do not involve partial dispersion.
- The stored `dPgF` values were therefore not patent figures. All fifteen equalled, to four decimals, the HOYA catalog ΔPgF of the labelled glass (checked against the ΔPgF field of the local `tmp/pdfs/HOYA20260707_include_obsolete.agf`). HOYA measures that deviation from its own normal line through C7 and F2; evaluating those two entries of the same AGF gives PgF = 0.64842 − 0.001802·νd, i.e. ≈ 0.6483 − 0.0018·νd, not the engine's 0.6438 − 0.001682·νd.

### Change

Every element authors nC, nF and ng, so the trace uses those indices and `dPgF` is an annotation. With no patent PgF to recover, each value is now the PgF of the element's own line indices minus the engine line at the stored νd, to six decimals. No nd, νd, line index, glass label or `apd` tag changed.

| Element | Glass | νd | Source figure: PgF of authored nC/nF/ng | Stored before (HOYA catalog ΔPgF) | Stored after |
|---|---|---:|---:|---:|---:|
| L1 | BSC7 | 64.20 | 0.534161 | +0.0016 | −0.001654 |
| L2 | BAFD7 | 41.15 | 0.576540 | +0.0028 | +0.001954 |
| L3 | M-BACD5N | 61.25 | 0.537422 | −0.0007 | −0.003355 |
| L4 | FCD100 | 95.10 | 0.532609 | +0.0564 | +0.048767 |
| L5 | NBFD15 | 33.27 | 0.588114 | 0 | 0 (unchanged) |
| L6 | E-F5 | 38.01 | 0.582494 | +0.0029 | +0.0029 (unchanged) |
| L7 | TAFD5F | 42.72 | 0.564995 | −0.0062 | −0.006950 |
| L8 | E-FD13 | 27.76 | 0.607344 | +0.0093 | +0.010236 |
| L9 | FCD100 | 95.10 | 0.532609 | +0.0564 | +0.048767 |
| L10 | TAFD25 | 31.32 | 0.594595 | +0.0028 | +0.003475 |
| L11 | M-BACD5N | 61.25 | 0.537422 | −0.0007 | −0.003355 |
| L12 | FC5 | 70.45 | 0.530347 | +0.0092 | +0.005044 |
| L13 | NBFD15 | 33.27 | 0.588114 | 0 | 0 (unchanged) |
| L14 | FCD705 | 75.50 | 0.540466 | +0.0277 | +0.023657 |
| L15 | FDS90 | 23.78 | 0.619101 | +0.0137 | +0.015299 |

- `apdNote` on L4, L9 and L14 now quotes the line-index PgF, HOYA's catalog ΔPgF labelled as HOYA's, and the runtime value. The header box gained a partial-dispersion note.
- Analysis: a note under the glass table and source 4 now say the θgF / ΔPgF columns are HOYA catalog figures on HOYA's line and that the data file stores the engine-line value.

### Left

- L5 and L13 (NBFD15) and L6 (E-F5): the engine-line value from their own line indices is +0.000274 and +0.002627. The stored 0 and +0.0029 are within 0.0003 of those and stay exactly as they were, although by origin they are the same catalog figures.
- The five-decimal line indices fix PgF only to about ±0.003 for FCD100 (nF − nC = 0.00460), ±0.002 for the other crowns and ±0.001 or better for the flints, so the new figures agree with the repo's catalog curves to that precision rather than exactly (FCD100: line indices +0.048767, catalog curve +0.049777). The line-index value is kept because it is what the trace computes.
