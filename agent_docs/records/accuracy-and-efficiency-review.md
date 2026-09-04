# Optical accuracy and efficiency review

## Approved sequence

Approved 2026-09-04 on `ronbuening/AccuracyInCodeReview`. Work proceeds in order, with validation and a focused
commit between steps. A step is not complete merely because its implementation has started.

| Step | Deliverable | Status |
| --- | --- | --- |
| 1 | Physical reference fixtures, full-suite coverage gate, test and performance baselines | Complete |
| 2 | Consistent calculated current/infinity EFL and breathing; authored values remain metadata | Complete |
| 3 | Shared marked/geometric/working f-number and current-pupil aperture result | Complete |
| 4 | Two-dimensional pupil-area and sensor-irradiance integration with explicit convergence status | Pending |
| 5 | Source-backed spectral throughput, encounter-aware absorption and surface losses | Pending |
| 6 | Opt-in optical path, wavefront, scalar Huygens PSF; initially centered on-axis sequential refraction | Pending |
| 7 | MTF, explicit spectral weights, Image Quality tab and unavailable states | Pending |
| 8 | Reuse prepared states and first-order results, preserving bounded cache identity | Pending |
| 9 | Cancellable worker analysis with stale-result rejection and synchronous reference path | Pending |
| 10 | Shared zoom interpolation and intersection kernel, preserving traversal semantics | Pending |
| 11 | Separate glass report generation from meaningful regression assertions; one catalog inventory | Pending |

## Acceptance and limits

- Accuracy precedes performance and deletion. Independent analytic expectations supplement existing golden traces.
- Every implementation commit passes typecheck, format check, lint, tests, coverage, and staged diff checks.
- Build/SSR checks apply to UI, imports, metadata and workers. Regenerate affected documentation and authoring reports.
- Coverage thresholds are based on the measured starting tree and cannot be lowered to accommodate regressions.
- Compare performance on the same machine/scenarios; record raw benchmark artifacts. Do not claim unmeasured speedups.
- Preserve authored lens values and evidence. Missing coatings/sensor spectra remain unknown; do not infer production data.
- PSF/MTF is scalar diffraction, not electromagnetic, ghost, scatter, polarization or multi-order diffraction simulation.
- Folded, moved and diffractive wavefront modes remain unavailable until independently fixture-validated.
- Keep compatibility exports and distinct traversal paths where required. Preserve independent analytic, golden and
  catalog-validity tests when removing duplicate/report-only tests.

## Review evidence

- `eflAtFocus2` switches from authored/interpolated EFL near infinity to calculated paraxial EFL at finite focus.
- Viewer and Summary use different formulas under effective-f-number terminology. At close focus, the Nikon
  200 mm f/2 example returned approximately 2.50 and 1.41 respectively for the same wide-open state.
- Vignetting uses a meridional line sweep and object-angle cos-fourth weighting, not full pupil-area integration.
- Several first-order/chief-ray paths compile prepared state without the existing runtime cache.
- Three copies of zoom interpolation and separate runtime/engine intersection kernels remain.
- Eight glass scans generate files during tests; some report-only assertions cannot fail for incorrect classification.
- Coverage also tries to parse Markdown under broad source globs, then excludes it after parse warnings. Step 11 should
  restrict instrumentation to code extensions while proving the measured code coverage inventory stays unchanged.
- Initial targeted review: 4 suites / 49 tests passed. This was not a full-suite or coverage baseline.

## Validation history

Starting full suite: 294 files / 2738 tests, 33.44 s under coverage. Five independent first-order cases added:
thin/thick lensmaker power, finite 2f conjugates, air/glass optical invariant and inverted pupil magnification.
Normal suite with these references: 295 files / 2743 tests, 23.70 s.

Coverage floors (V8 global summary): statements 91.88%, branches 82.90%, functions 93.72%, lines 94.58%.
The quality workflow now runs the full coverage suite so these floors are enforced in CI as well as locally.
Analytic numeric assertions use twelve decimal places for the small, well-conditioned first-order fixtures;
existing real-ray fixtures retain their geometry-specific tolerances. Do not propagate this precision to patent data.

### Regression matrix

| Behavior | Reference and existing protection |
| --- | --- |
| Simple refractive optics | `physicalFirstOrderReferences`, Sonnar and `exactTraceGoldenValues` |
| Internal focus | Nikon Ai 200 mm f/2, `cardinalElements`, `optics` |
| Macro | Sony FE 90 mm macro cardinal-state checks and macro benchmark cases |
| Zoom and variable aperture | `zoomOptics`, standard/tele zoom benchmark cases |
| Fisheye | Fisheye chief-ray golden values and wide-field projection tests |
| Perspective control | `perspectiveAcceptanceMatrix`, moved chief rays and field analysis fixtures |
| Folded/annular | `mirrorOptics`, hidden reference cardinals and generalized exact-trace fixtures |
| Diffractive | Phase interaction analytic fixtures and folded phase-control golden values |

Step 1: typecheck, format check, lint, normal full suite and coverage full suite passed (295 files / 2743 tests).
Coverage remains at the starting floors. Benchmark completed without warnings:
`../benchmarks/runs/2026-09-04T21-52-59Z-16163231.json` (15 lenses, four scenarios, one warmup, three iterations).
Median cell times: build 0.47 ms, layout 1.00 ms, rays 1.60 ms, analysis 77.95 ms, SVG render 0.15 ms,
total warm 80.12 ms. This diagnostic run overlapped validation early on; it is not isolated performance evidence.
Rerun an isolated before/after pair when implementing step 8. The runner pruned its oldest record under its documented
retention policy. No production optical behavior changed in step 1.

### Step 2 — calculated focal length

- Both runtime entry points now use the same cardinal calculation at every focus/zoom/aberration state. The nullable
  prepared-state helper reports unavailable power; the numeric compatibility API uses NaN. No catalog fallback.
- Summary and breathing curves compare calculated states, including the same aberration setting. Authored labels remain
  catalog metadata. Shorter EFL now reads wider FOV, and longer EFL narrower FOV in both breathing displays.
- Added independent lensmaker, threshold continuity, free-space translation, folded cardinal and afocal regressions.
  UI tests cover field-of-view labels and unavailable output. Existing golden traces were not re-pinned.
- Full normal suite passed (297 files / 2752 tests), then the added unavailable-display regression passed separately;
  full coverage includes all 2753 tests. Coverage: statements 91.88%, branches 82.99%, functions 93.72%, lines 94.58%.
- Typecheck, format check and lint passed; build/SSR prerendered all 1243 routes, sitemap and feeds successfully.
  A final type/format/lint check also covers the last display guard and its regression test.
- Scope limit: this step does not change working-f-number semantics; that remains step 3.

### Step 3 — physical aperture and working f-number

- Added a shared physical-stop resolver and current-state paraxial aperture metrics. The image-side cone is solved from
  the physical stop rim and image-plane center, including image-medium index. Geometric f-number remains EFL/EP diameter.
- Viewer, comparison and Summary now use the same working-f-number calculation. The UI identifies it as paraxial;
  folded/degenerate cones return unavailable. Current EP/XP sizes are calculated rather than reusing infinity pupil ratios.
- Optional `wideOpenStopSemiDiameterMm` supports explicitly sourced iris schedules with positive, finite, bounded values
  and matching zoom-array lengths. No production prescription was given an inferred schedule; default mapping is retained.
- Independent tests cover infinity/1:1 thin-lens cones, immersion index, stop bounds, schedules and invalid/unsupported
  states. A production Nikon 200 mm rear-cone reference and a real hook/Summary comparison protect integration.
- Typecheck, format check, lint, normal tests, full coverage and production build passed. Both full suites: 298 files /
  2767 tests. Coverage: statements 91.94%, branches 83.08%, functions 93.75%, lines 94.61%. All 1243 routes prerendered.
- Remaining stages 4–11 are not implemented. A read-only reverse-order generalized-trace experiment succeeded for
  an ordinary refractive lens and can inform step 4; it does not yet constitute a validated radiometric implementation.
