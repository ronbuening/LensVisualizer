# Nikon AF Nikkor 28mm f/1.4D Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US5315441.pdf`, Embodiment 1 / Table 1 and FIGS. 1-4.

### Prescription, Focus, And Asphere

- The data file remains aligned to Embodiment 1: `f = 28.6208 mm`, `FNO = 1.41`, `2ω = 75.37°`, and the production-matching 11 element / 8 group layout.
- Table 1 confirms the stored floating-focus variables: `d2 = 13.9000 → 10.3752`, `d11 = 12.5500 → 12.1975`, `d16 = 0.5000 → 0.8525`, and `Bf = 38.1031 → 41.6279` for `β = -1/10`.
- The stop is not a separate patent surface. The current inserted `STO` position remains an estimate from FIG. 1 and the entrance-pupil geometry, consistent with the existing data-file note.
- Surface 16A remains the only asphere. The stored coefficients follow the patent's standard conic convention and no additional aspherical surfaces are published for Embodiment 1.

### Glass And APD

- Relabeled L4a from a generic phosphate crown to coefficient-backed `J-PKH1 (Hikari, 519699)`. The patent row is `nd=1.51860`, `νd=69.9`, matching the Hikari catalog entry within rounding.
- L4b (`nd=1.51454`, `νd=54.6`), L6a (`nd=1.74810`, `νd=52.3`), and L8b (`nd=1.86074`, `νd=23.0`) remain unresolved/current-catalog gaps after this pass. Their existing non-exact labels remain more accurate than forcing a near catalog glass.
- No APD row is introduced. The patent gives only `nd`/`νd` values and aspherical coefficients; it has no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` table.
- High-index status remains descriptive for the lanthanum and dense-flint rows; the only material flag in this file is ordinary `apd: false`.

### Semi-Diameters

- US 5,315,441 does not publish per-surface clear apertures or effective diameters for Embodiment 1.
- Current SDs remain documented renderer estimates. They make rational sense against FIG. 1: a large front retrofocus meniscus, broad G2 positive cell, a stop constrained near `sd = 13.6 mm`, and re-expansion through the aspherical G3/G4 rear groups without exceeding sag or edge-thickness limits.

### Verification

- Pending batch verification after the current Nikon audit pass.
