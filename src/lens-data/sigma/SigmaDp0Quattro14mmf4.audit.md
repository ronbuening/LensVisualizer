# Audit Log — Sigma dp0 Quattro 14mm f/4

Patent: JP 2016-139087 A, Example 2

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2016139087A.pdf`.
- Example 2 rows confirmed L3d nd = 1.83481, vd = 42.72 and L3h nd = 1.80610, vd = 40.73.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3d / S12 | `TAFD25 (HOYA) / S-LAH55 (OHARA)` | `S-LAH55V (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |
| L3h / S18 | `E-FDS1 (HOYA) / S-TIH6 (OHARA)` | `NBFD13 (HOYA)` | Public HOYA catalog row matches the patent nd/vd pair. |
| L3a / S7 | `M-TAC80 (HOYA)` | `FCD515 (HOYA)` | Local patent Example 2 row 8 lists nd=1.59282, vd=68.62. The real M-TAC80 catalog row is nd=1.72903, so the FCD515 code family is the resolver-safe SLD match. |

### Analysis sync

- Updated the L3d/L3h descriptions and table labels.
