# Audit Log - Ricoh GR IV 18.3mm f/2.8

Patent: JP2025-069516A

## 2026-06-23 - Source gap and catalog correction pass

- The data file cites JP2025-069516A Example 2, but the local untracked `patents/` folder does not contain that PDF.
- Searched the local patent text cache and the available 2025 patent PDFs for exact GR IV prescription values (`13.353`, `11.258`, `-15.696`, `-13.531`, `8.82985`, `1.80139`, `M-TAF101`). No local source matched JP2025-069516A or the data file prescription.
- Because the cited patent was unavailable locally, surface radii, spacings, aspherical coefficients, Pg,F/APD status, and patent-derived semi-diameters could not be independently verified in this pass.

| Element | Stored nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L23 | 1.76802 / 49.24 | Analysis described this row as S-LAH53 after rejecting the patent's printed S-TIM35 name | `MC-TAF101-100 (HOYA) / M-TAF101 class` | Local OHARA S-LAH53 is 1.80610/40.93 and does not match. The closest coefficient-backed local match is Hoya MC-TAF101-100 / M-TAF101 class. |
| L31 | 1.80139 / 45.45 | `M-TAF101 (HOYA)` | `M-TAF31 (HOYA; PGM, 801455)` | Exact local Hoya catalog/code match for the stored values; confirms high-index PGM status for the final double-asphere element. |

- No APD or dPgF values were added because the patent Pg,F column could not be checked from a local source.
- Existing SDs remain estimates and are not claimed as patent-derived. They are geometrically plausible for rendering: front group largest, reduced stop, compact cemented doublets, larger L23/L31 aspheric apertures, and no obvious disproportion relative to the stored drawing model.
- Data and companion analysis were updated to remove the stale S-LAH53/M-TAF101 claims and to document the remaining source gap.
