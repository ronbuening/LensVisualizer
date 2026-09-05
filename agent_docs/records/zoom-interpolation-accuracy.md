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

## Stage 2 — shared inferred zoom motion

Implemented prepared-state reconstruction for centered zooms, preserving exact source stations and fixed groups.
The solver targets interpolated source EFL and source infinity-focus residual, with active air-gap constraints across
all authored focus stations. It retains existing source residuals and relative focus strokes. Layout, tracing and
analysis share this geometry; source/reconstructed/unavailable status is explicit in single and comparison controls.
The correction is cached by immutable lens identity and zoom, avoiding repeat solves for focus or aperture changes.

This estimates intermediate motion. It does not recover a manufacturer's cam curve, optimize aberrations, or validate
intermediate close-focus distances. Folded/tilted/aberration-controlled cases remain guarded. No lens prescription,
source zoom station, physical iris schedule or trace exception was added. The Konica 35–70 narrative/test now distinguish
source-station travel from inferred between-station reversals.

Validation: `npm run audit:zoom` checked 225 zoom models / 30,681 intermediate positions, all authored focus stations,
rigid spacing, sampled rim-clearance floors and neighboring zoom continuity. Zero audit failures. Maximum additional
focus error 6.55e-8 mm; EFL error 9.23e-8 mm. These are numerical constraint residuals, not production-lens accuracy.
The Konica screenshot position (zoom 0.428) changes from 12.04 mm added paraxial defocus to approximately zero, with
calculated EFL 131.76 mm and working aperture about f/4.12 using the same iris (previously f/4.52).

Typecheck, format, lint and full coverage tests passed: 308 files / 2,898 tests. Coverage: statements 92.35%, branches
83.91%, functions 94.03%, lines 94.99%, above unchanged thresholds. Production build/prerender passed (1,251 routes).

Next aperture finding: the legacy unscheduled-iris mapping uses the wide-end nominal f-number at every zoom. A six-point
scan finds >1% unintended iris reduction in 105 of 225 zooms. The next stage corrects that shared mapping and records
source/trace limitations exposed by opening the full modeled iris, without manufacturing a replacement cone value.

## Stage 3 — current-zoom wide-open iris

`resolveApertureStop` now scales the physical stop from the current zoom's wide-open marking. Variable-aperture zooms
keep the full modeled iris when their wide-open f-number rises toward telephoto; explicit source-backed iris schedules
remain authoritative. Viewer, comparison, Summary, benchmark and test helpers use the shared mapping. Removed the
duplicate aperture helper from analysis-display tests. Existing prime and constant-aperture mappings remain unchanged.

The catalog working-aperture audit passed: 666 non-folded models / 34,624 states, zero execution errors, shared-report
regressions, threshold discontinuities or wide-open mapping violations. It separately reported 438 failed, 172 degenerate
and 224 unsupported states. These are optical availability diagnostics, not passing performance estimates. A before/after
six-position zoom scan found eight models where opening the previously reduced iris exposes an untraceable outer ray;
those report unavailable rather than a substituted f-number. Surface/rim source review remains a separate data task.

Typecheck, format, lint and full coverage passed: 308 files / 2,901 tests; coverage thresholds unchanged and passing.
Live local-browser checks confirmed the Konica intermediate readouts and the Nikon AF-S 28–300 at telephoto:
calculated 290 mm, selected design f/5.96, real working f/5.93, full modeled stop diameter 20.05 mm, with modeled rim
clipping explicitly reported.

## Stage 4 — preserve nearly fixed groups

Final browser review exposed a numerical modeling issue: tiny source back-focus normalization drift made nearly fixed
groups eligible for the same correction magnitude as large-travel variators. The shared solver now weights incremental
motion by each group's source travel. Exact stationary groups remain fixed; nearly stationary groups receive a strong
motion constraint. This is an explicit inference from the source positions, with no lens-name exception or mechanical
cam claim. A regression protects the Konica front/rear assemblies from amplified normalization drift. The Nikon 80–200
source test pins the published middle position and reversal rather than assuming it is the exact maximum of an
unpublished continuous cam curve.

Final catalog checks: 225 zooms / 30,681 intermediate positions, zero reconstruction/clearance/continuity errors;
maximum added focus error 3.75e-8 mm and EFL error 5.05e-8 mm. Working-aperture audit: 666 non-folded prescriptions /
34,624 states, zero execution or shared-contract regressions (33,802 available, 438 failed, 160 degenerate, 224
unsupported; 2,227 available reports separately identify rim clipping).

Final quality gates: 308 files / 2,902 tests passed; typecheck, format and lint passed. Coverage: statements 92.31%,
branches 83.90%, functions 94.02%, lines 94.93%, above the unchanged thresholds. Build and prerender passed for
1,251 routes. Live local-browser verification of the original Konica zoom 0.428 case: slider 132 mm, calculated
131.76 mm, selected f/4.0, working f/4.02, unchanged physical stop diameter 31.42 mm; reconstructed-motion note visible.

Personal smoke checks:

1. Konica UC 80–200 at infinity, approximately 132 mm: calculated EFL about 131.76 mm, working aperture about f/4.02.
   Turning on the effective-focal-length display should not introduce a second focal value at infinity.
2. Sweep several zooms through source and intermediate positions. Source positions stay exact; intermediate positions
   show the reconstruction note. Watch the diagram and Motion plot for jumps or amplified motion in nearly fixed groups.
3. Nikon AF-S 28–300 at telephoto, wide open: selected design f/5.96 and working about f/5.93, with a full modeled
   20.05 mm stop diameter. Modeled surface clipping remains explicitly reported.
4. On variable-aperture zooms, sweep wide open from wide to tele, then select a smaller aperture. Wide-open changes
   should not themselves close the iris; stopping down should reduce it. Check single and comparison views.
5. Move focus away from infinity and back. Calculated breathing can appear at close focus and should disappear at
   infinity. Working f-number can differ from the selected design setting; unsupported or failed rays remain unavailable.
