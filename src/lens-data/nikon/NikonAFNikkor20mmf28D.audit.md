# Nikon AF Nikkor 20mm f/2.8D Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US4690517.pdf`, Table 1 / First Embodiment.

### Prescription And Scaling

- The data file remains aligned to Table 1: normalized `f = 100`, `F-number = 2.8`, and `2ω = 94°`.
- The 0.2 production scaling is appropriate for the 20 mm class lens; the stored radii, gaps, and back focus are the patent values divided by 5.
- The patent places the stop in the L6-L7 airspace but does not tabulate a stop coordinate. The current even split around `STO` remains a reasonable diagram/tracing convention.

### Glass And APD

- Rechecked the patent glass rows against the stored `nd` / `νd` values. No transcription changes were found.
- `J-BAF3 (HIKARI / Nikon)` for L6 remains the one generated Sellmeier-coverage gap. It is a named class label, not a six-digit unresolved patent code, and this pass did not find a coefficient-backed public Sellmeier source to replace it.
- The patent publishes `nd` and Abbe number only. It does not publish `nC`, `nF`, `ng`, `θgF`, `Pg,F`, `dPgF`, ED, fluorite, or anomalous-partial-dispersion rows, so `apd: false` remains appropriate.
- High-index glass descriptions remain descriptive: L2/L7b dense flints and L4b/L7a lanthanum-flint-class members are supported by their patent `nd` values, but no new exact catalog replacements were verified.

### Semi-Diameters

- US 4,690,517 does not publish per-surface clear apertures or effective diameters for Table 1.
- Current SDs therefore remain visualization estimates derived from pupil/ray envelopes, edge-thickness sanity, adjacent-surface proportions, and cross-gap sag clearance.
- The SD progression is rational against the patent drawing: large front clear aperture for the 94° retrofocus front group, a narrowed stop region, and a modest re-expansion through the rear positive relay.

### Verification

- Pending batch verification after the current Nikon audit pass.
