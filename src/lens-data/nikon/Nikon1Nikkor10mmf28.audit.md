# Nikon 1 NIKKOR 10mm f/2.8 Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/JP2011248340A.pdf`, Example 1.

### Prescription, Focus, And Aspheres

- The data file remains aligned to Example 1: `f = 10.30 mm`, `FNO = 2.92`, `2ω = 78.61°`, `Y = 8.20 mm`, and the six-element / five-group prescription.
- The patent close-focus table is for the 0.50 m state; the current variable gaps preserve that patent-published state rather than extrapolating to Nikon's 0.20 m production MFD.
- The filter/sensor stack remains excluded per corpus convention, with its optical path folded into the final air-equivalent BFD after surface 14A.
- The two aspherical surfaces remain correctly transcribed at surfaces 4A and 14A. The patent's `κ` convention is still correctly converted to renderer `K = κ - 1`.

### Glass And APD

- No glass relabels were needed. The generated Sellmeier report already shows full coverage for all six elements.
- The L25 `apd: "inferred"` note remains appropriate as a catalog/material-class inference for HOYA M-PCD51; the patent itself gives no partial-dispersion table.
- The patent publishes `nd`/`νd` and aspherical coefficients, but no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` rows for Example 1. Any line-index fields in the data file are catalog-backed helper values, not patent-published measurements.

### Semi-Diameters

- JP 2011-248340 A does not publish per-surface clear apertures or effective diameters for Example 1.
- Current SDs remain documented renderer estimates. They make rational sense against the patent drawing: compact front G1, tight powered G2 with a small stop at `sd = 2.23036 mm`, and a conservative cap on the steep aspherical surface 4A.

### Verification

- Pending batch verification after the current Nikon audit pass.
