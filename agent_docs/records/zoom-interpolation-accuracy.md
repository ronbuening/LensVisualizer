# Catalog-wide zoom interpolation accuracy

Approved scope: correct calculated infinity references, intermediate zoom focus, and aperture diagnostics across the
catalog, retaining published states and distinguishing reconstructed motion from source data.

## Stage 1 — calculated focal-length readouts

Single-view controls and comparison A/B readouts now use the calculated infinity focal length at the current zoom,
matching the current-focus calculation. Compact headers use the same calculated infinity reference. Shared dual-zoom
position remains an explicitly labeled reference coordinate; URL/slider coordinates are unchanged.

Checks: typecheck, format, lint, full tests (306 files / 2,883 tests). The Konica screenshot regression verifies that
endpoint interpolation error is no longer displayed as focus breathing at infinity.

## Baseline audit

A read-only audit of 225 non-folded zooms sampled interval quarters, midpoints and three-quarter positions. It measured
paraxial focus displacement relative to linear interpolation of the stored states' own residuals, separating authored
baseline errors from new interpolation error. 224 models exceeded 0.1 mm; 167 exceeded 1 mm. This is a geometric model
consistency diagnostic, not a claim about measured production performance.

Next: shared prepared-state reconstruction and explicit status for unsupported/unsolved cases; catalog-wide rerun,
physical clearance/anchor preservation tests, aperture audit, coverage and build. No per-lens trace exceptions or
blanket clamping of calculated focal length or working aperture.
