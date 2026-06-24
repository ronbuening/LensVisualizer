# Nikon AF-S NIKKOR 24-120mm f/4G ED VR Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US20100220400A1.pdf`, Example 1 / Table 1 and FIGS. 1-3.

### Prescription, Zoom, Focus, And VR

- The data file remains aligned to Example 1: `f = 24.70 / 45.75 / 116.39 mm`, `FNO = 4.12 / 4.13 / 4.14`, `IH = 21.6 mm`, and the 17 element / 13 group layout.
- The stored infinity zoom gaps and patent close-range gaps are consistent with the Table 1 values already described in the analysis.
- The patent states G2 focusing and decentering of the cemented negative component in G4 for vibration reduction; the current grouping and notes remain appropriate.

### Glass And APD

- No glass relabels were needed. The generated Sellmeier report already shows 17/17 trusted and 17/17 Sellmeier coverage for this data file.
- L12 and L34 remain correctly marked `apd: "inferred"` with HIKARI J-PSKH1 catalog line-index fields. This APD status is catalog/product-count inference, not a patent-published partial-dispersion table.
- The patent prescription itself publishes `nd` and Abbe number only. It does not publish `nC`, `nF`, `ng`, `θgF`, `Pg,F`, or `dPgF` rows for Example 1.
- The FK5-class rows L33 and L52 have high Abbe numbers, but the analysis correctly keeps Nikon's two ED elements on the J-PSKH1/S-FPM2-class L12 and L34 rows because those are the anomalous-dispersion catalog matches.

### Semi-Diameters

- US 2010/0220400 A1 does not publish per-surface clear-aperture radii for Example 1.
- Current SDs remain reconstructed rendering apertures constrained by ray envelopes, FIG. 1 proportions, the 77 mm filter limit, edge-thickness checks, `sd/|R| < 0.90`, and cross-gap sag clearance.
- The proportions are rational for the drawing: broad front collector, tightened variator/stop region, and moderate rear re-expansion through the positive imaging group.

### Verification

- Pending batch verification after the current Nikon audit pass.
