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

Validation: full suite 305 files / 2,864 tests; typecheck, format and lint required before commit.
