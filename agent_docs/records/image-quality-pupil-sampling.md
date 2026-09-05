# Image quality pupil and sampling follow-up

## Stage 1 — transmitting pupil boundary (2026-09-05)

The Nikkor Z MC 105mm at infinity failed during the fixed pupil-rim scan, before quadrature or convergence checks.
Transmitting probes were followed by aperture-blocked probes; a farther probe missed a surface (`noBracket`), aborting
an otherwise usable pupil. Only those outer intersection misses after an established blocker are now excluded.
The scan continues to detect disconnected transmitting regions. Inner misses, boundary-refinement failures and
missing transmission evidence remain unavailable. No lens prescription or aperture geometry changed.

Failure messages now distinguish a calculation failure from unconverged sampling and report the actual failed
coarse/refined wavefront. Regression cases cover wide open, f/4, f/8, inner failures, disconnected pupils and missing evidence.

Direct MC 105mm, infinity, f/2.89, ideal d-line, automatic sensor spacing:
- 32 radial / 64 angular / 41 base window: converged; pupil 2.1755%, window 2.0727%, sensor 0.02034%.
- 128 radial / 64 angular / 65 base window: converged; pupil 0.3301%, window 0.9110%, sensor 0.00354%.

Validation passed: full suite 305 files / 2,864 tests, typecheck, format and lint. Commit: `c2af1c6e`.

## Stage 2 — sampling controls, guidance and reuse (2026-09-05)

- Base radial samples now reach 512 (previously 128). Angular sampling is selectable from 32–256 (previously fixed
  at 64 in the UI). Base windows now reach 129 samples (previously 65). Internal refinement supports 1,024 radial,
  512 angular and 513 × 513 sensor samples. Defaults and the 3% / 0.25-wave convergence limits are unchanged.
- Unconverged results identify the failing pupil, window, sensor-grid or phase-step check and its relevant control.
  The output shows the base and refined sensor spacing, including when automatic spacing is selected.
- For the validated axial equal-angle pupil, reflection/quarter-turn symmetry reuses equivalent sensor pixels.
  Arbitrary public wavelet inputs retain the full point evaluation by default. Aligned coarse sensor grids and
  smaller windows reuse exact samples from the refined grid, preserving the independent convergence comparisons.
- PSF display now reduces its peak instead of spreading hundreds of thousands of pixel values into function arguments.
- Calculations remain in the cancellable worker. Maximum combinations can take minutes; each expanded limit is tested
  through refinement independently, and browser cancellation is checked with all maximum settings selected.

Validation evidence:
- Independent point integration matches the symmetric staggered/aberrated pupil grid within 1e-8. Arbitrary asymmetric
  pupils retain their independent-reference regression. Refined PSF/grid reuse and the MC 105mm pre-optimization
  convergence figures are covered by tests.
- MC 105mm actual UI wide open f/2.8, infinity, default sampling, ideal d-line: converged in both engine and browser;
  pupil 2.1531%, window 1.9390%, sensor 0.01996%, phase 0.01753 waves. PSF and MTF both displayed.
- APO-Lanthar 50mm f/2 at widest aperture and infinity: default sampling undersampled (pupil 4.94%, window 10.56%);
  256 radial / 128 angular / 97 window converged (pupil 0.5511%, window 1.6417%, sensor 0.00360%).
- Plena at default sampling remains undersampled with specific pupil/window/phase guidance. Centered GF 30mm T/S
  remains unsupported by the scalar wavefront model; Sonnar 50mm f/2 remains untraceable wide open. Increased sampling
  is not used to conceal these geometry/model limitations.
- Local before/after MC 105mm f/2.89 runs: default 6.69 s → 0.75 s; former maximum radial/window settings
  92.51 s → 6.94 s. Convergence differences agree within 1e-13. These are local timings, not a cross-device guarantee.
- Browser: maximum control selection, stale-result removal and cancellation verified. No full maximum-combination
  convergence run was claimed.

Final gates passed: typecheck, format, lint, full coverage suite (305 files / 2,877 tests) and production build.
Coverage: 92.27% statements, 83.83% branches, 93.96% functions, 94.93% lines. Thresholds remain unchanged;
production build prerenders 1,243 routes. Existing chunk-size warnings remain. The public changelog's existing scalar
PSF/MTF feature entry is unchanged; a follow-up entry can be added at merge per the changelog workflow.
