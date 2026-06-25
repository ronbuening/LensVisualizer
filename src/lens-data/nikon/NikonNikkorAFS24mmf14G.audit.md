# Nikon AF-S NIKKOR 24mm f/1.4G ED Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US8416512.pdf`, Example 3 and FIGS. 3, 7, 11A-11C, and 19A-21I.

### Prescription, Focus, And Aspheres

- The data file remains aligned to Example 3: `f = 24.68 mm`, `FNO = 1.43`, `2ω = 83.64°`, and the positive/positive two-group rear-focus architecture.
- The explicit patent cement media at surfaces 14/15 and 19/20 remain modeled as 0.010 mm optical layers with `nd=1.51400`, `νd=42.83`. They are patent prescription rows, not catalog glasses.
- The two aspheres remain surface 4A on L12 and surface 21A on L24b. The stored conic conversion (`K = epsilon - 1`) and polynomial coefficients remain consistent with the analysis.
- Focus remains Gr2 translation toward the object side, with `d8` decreasing and final BF increasing by the same travel.

### Glass And APD

- No data changes were made. The existing glass labels already encode the prior patent-code review and avoid over-specific catalog claims where the public coefficient set is missing.
- L21 and L25 remain `apd: "inferred"` because the patent gives `nd`/`νd` and Nikon's two-ED production count, but does not publish partial-dispersion or line-index rows. Their `dPgF`, `nC`, `nF`, and `ng` values are catalog-surrogate helper data.
- L23a (`606637 phosphate-crown class`) remains an Abbe-only catalog gap rather than being forced to a non-exact public glass.
- The two cement rows remain Abbe-only by design.

### Semi-Diameters

- US 8,416,512 does not publish per-surface clear apertures or effective diameters for Example 3.
- Current SDs remain documented renderer estimates. They make rational sense against FIG. 3: broad front Gr1A apertures, large front asphere, stop at `sd = 13.2 mm`, similar post-stop L24 block apertures, and a controlled final relay diameter.
- No SD values were changed in this pass.

### Verification

- Pending batch verification after the current Nikon audit pass.
