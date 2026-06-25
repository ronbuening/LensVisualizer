# Audit Log - RODENSTOCK RODAGON-WA 80mm f/4

Patent: DE 2818435 B1, sole worked example.

## 2026-06-25 - SD silhouette and APD classification pass

### Semi-diameter review

- Rechecked the rendered section against the patent drawing sheet in `patents/DE_2818435_B1.pdf`.
- Retuned the estimated semi-diameters so the outer cemented doublets, stop-adjacent singlets, and rear doublet shoulders better match the patent figure while preserving validation-safe cross-gap clearances. The final clear-aperture estimates are mirror-paired around the stop where the Rodagon-WA section supports quasi-symmetry.
- The aperture-stop semi-diameter was left at the computed f/4 physical value; only glass clear-aperture estimates were adjusted.

### Glass classification

| Element | Before | After | Justification |
|---|---|---|---|
| L1 | `apd: "inferred"` | `apd: false` | N-LAK9 dPgF/line-index metadata is catalog-derived; the patent does not claim an APD role. |
| L2 | `apd: "inferred"` | `apd: false` | N-KZFS4 is a plausible Schott-class short flint, but the patent table does not publish partial-dispersion data or an APO/APD condition. |
| L3 | `apd: "inferred"` | `apd: false` | N-SK16 is ordinary dense crown metadata here. |
| L4 | `apd: "inferred"` | `apd: false` | Same N-SK16 reasoning as L3. |
| L5 | `apd: "inferred"` | `apd: false` | Same N-KZFS4 reasoning as L2. |
| L6 | `apd: "inferred"` | `apd: false` | Same N-SK16 reasoning as L3. |

The structured `dPgF`, `nC`, `nF`, and `ng` values remain in the data file to preserve chromatic interpolation quality. The change only removes misleading APD badges from the UI.
