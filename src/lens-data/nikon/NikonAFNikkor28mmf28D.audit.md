# Nikon AF Nikkor 28mm f/2.8D Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US5557473.pdf`, Third Embodiment / Table 5 and FIG. 3.

### Prescription And Focus Model

- The data file remains aligned to Table 5: `f = 28.6 mm`, `F = 2.86`, and `2ω = 75.4°`.
- The tabulated radii, center thicknesses, air spaces, fixed stop `S1`, aperture stop `STO`, and back focus match the patent example.
- The patent does not publish close-focus spacing tables. The current final-gap unit-extension model remains a visualization aid tied to Nikon's published 0.18x maximum reproduction, not a patent-derived focus cam.

### Glass And APD

- Rechecked all six patent glass rows. No `nd` / `νd` transcription changes were found.
- Updated L3 from a prose-only unmatched label to explicit `797454`, matching the project convention for unresolved patent glass rows and the same nd/vd family already audited on the Nikon 28Ti.
- No coefficient-backed exact public catalog match was verified for L3 (`nd=1.79668`, `νd=45.4`), so it remains a code-only/high-index lanthanum-dense-flint annotation.
- L1 remains a softened SF2-class label rather than an exact catalog assertion because the patent row `nd=1.64831`, `νd=33.8` does not round-trip exactly to current SCHOTT/OHARA data.
- The patent publishes `nd` and Abbe number only. It does not publish `nC`, `nF`, `ng`, `θgF`, `Pg,F`, `dPgF`, ED, fluorite, or anomalous-partial-dispersion rows; no APD fields were added.

### Semi-Diameters

- US 5,557,473 does not publish per-surface clear apertures or effective diameters for Table 5.
- Current SDs remain derived visualization estimates. They are consistent with the patent layout: the front biconvex element carries the widest field bundles, the aperture region narrows around `STO`, and the rear positive elements re-open without exceeding the tight L4/L5 air-lens sag clearance noted in the data header.

### Verification

- Pending batch verification after the current Nikon audit pass.
