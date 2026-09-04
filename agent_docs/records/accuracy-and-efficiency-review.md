# Optical accuracy and efficiency review

## Approved sequence

Approved 2026-09-04 on `ronbuening/AccuracyInCodeReview`. Work proceeds in order, with validation and a focused
commit between steps. A step is not complete merely because its implementation has started.

| Step | Deliverable | Status |
| --- | --- | --- |
| 1 | Physical reference fixtures, full-suite coverage gate, test and performance baselines | Complete |
| 2 | Consistent calculated current/infinity EFL and breathing; authored values remain metadata | Complete |
| 3 | Shared marked/geometric/working f-number and current-pupil aperture result | Complete |
| 4 | Two-dimensional pupil-area and sensor-irradiance integration with explicit convergence status | Complete |
| 5 | Source-backed spectral throughput, encounter-aware absorption and surface losses | Complete |
| 6 | Opt-in optical path, wavefront, scalar Huygens PSF; initially centered on-axis sequential refraction | Complete |
| 7 | MTF, explicit spectral weights, Image Quality tab and unavailable states | Complete |
| 8 | Reuse prepared states and first-order results, preserving bounded cache identity | Complete |
| 9 | Cancellable worker analysis with stale-result rejection and synchronous reference path | Complete |
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

### Step 4 — pupil area and sensor illumination

- Replaced the meridional line sweep with equal-area disk quadrature and exact skew/vector rays. The shared sampler
  also serves the existing perspective adapter. Retained cos-fourth values only as an explicitly labelled estimate.
- Added reciprocal sensor radiometry for uniform external radiance with ideal interfaces in air. Its actual solid-angle
  integral includes sensor obliquity and pupil geometry, with two-dimensional refinement and explicit unavailable/zero
  sample/convergence states. Zero or failed axis references cannot be normalized to unity.
- Independent fixtures cover disk-area moments, analytic disk irradiance at low/high NA, the far-field cos-fourth limit,
  scale/rotation invariance, stopdown, failed integration and skew-ray reciprocity through refraction. UI tests distinguish
  physical results, provisional sampling and fallback estimates. Existing production regression assertions remain.
- Reverse intersection failure can expose surface/stop ordering geometry; Sonnar reverse rays provide a regression that
  such failures remain unavailable instead of being counted as zero flux. Folded, phase, annular, one-sided, immersion
  and tilted-sensor paths remain outside this new integral's validated scope. Active movement keeps its separate adapter.
- Typecheck, format, lint, full tests and coverage passed: 300 files / 2780 tests. Final guard coverage: statements 92.01%,
  branches 83.19%, functions 93.75%, lines 94.67%. Production build/SSR prerendered all 1243 routes. The final annular and
  one-sided guards were additionally covered by the full coverage run; no UI/import behavior changed after the build.
- Steps 5–11 remain pending. No spectral losses or wave optics are claimed by the ideal sensor result.

### Step 5 — sourced spectral throughput and encounter media

- Added opt-in sourced absorption spectra and wavelength/angle/incident-side interface tables. Validation requires
  provenance, physical values, ordered axes and matching dimensions. Interpolation does not extrapolate or substitute
  scalar absorption when a supplied spectrum is out of range. No production glass/coating identity was inferred.
- Added ideal, illustrative uncoated dielectric, and authored direct-path power models. Authored totals remain nullable
  with missing surface/material identifiers; the known-factor product is separately named. Metallic mirror reflection
  requires authored evidence and phase-surface efficiency remains unsupported. UI controls for these modes are part of
  step 7; no production PSF/MTF display exists yet.
- Shared encounter-side medium ownership now handles reverse refraction and retains the material on reflection.
  Known bulk-loss weights reach existing meridional/skew/vector/chromatic/perspective adapters at the selected wavelength.
  Legacy partial folded hit records without directions retain their compatibility behavior; complete physical status
  comes from the new throughput API. Real folded traces now support authored absorption and repeated traversals.
- Follow-up integration correction: ordinary exact traces return at the last surface vertex. Spectral throughput now
  projects the remaining distance to the actual image plane, and the step 4 field samples use sensor chief-ray height
  rather than last-vertex height. Dedicated ordinary-trace and chart-wiring regressions protect both contracts.
- Independent checks cover Fresnel normal/Brewster/TIR limits, oblique Beer-Lambert distance, both slab interfaces,
  cemented glass-to-glass loss, double-pass absorbing glass plus mirror, missing angular/spectral/reverse-side evidence,
  and wavelength propagation through public ray shapes. Full coverage: 301 files / 2793 tests; statements 92.07%, branches
  83.44%, functions 93.78%, lines 94.72%. Typecheck, format and lint passed. The full normal suite passed before the final
  two integration regressions, which are included in the final coverage run. Build/SSR prerendered all 1243 routes.
- Steps 6–11 remain pending. Scalar diffraction is not yet implemented.

### Step 6 — optical path, wavefront and scalar diffraction

- Added opt-in OPL postprocessing from exact physical hits, including refractive indices, repeated passes and the actual
  final sensor segment. Ordinary diagram tracing does not acquire OPL overhead. Phase-surface delay remains unsupported.
- Added axial sequential wavefront preparation with explicit finite/infinite source distance, actual transmitted pupil
  rim, exit-plane ray-tube area/amplitude transformation, sourced or ideal throughput, reference OPD and piston-removed RMS.
  Shared conservative surface bounds now serve both radiometry and wavefront preparation. Local phase steps above a
  quarter wavelength are marked undersampled, not silently accepted as convergence.
- Added scalar Huygens-Kirchhoff quadrature and PSF grids. A fixed zero-OPD peak reference preserves window energy and
  retains incident-field intensity scale for later spectral sums. No crop is forced to unit energy. Center Strehl refers
  to the current sensor plane and the same weighted pupil; no automatic best-focus optimization is implied.
- Independent tests cover Airy/Bessel intensity and first zero, quadratic defocus, piston invariance, amplitude-squared
  intensity, captured-window energy, explicit source changes, sequential sensor transfer and double-pass OPL.
  Moved/folded/annular/phase/immersion and unresolved image-space caustic wavefront modes remain unavailable.
- Typecheck, format, lint, full normal tests, full coverage and build passed: 302 files / 2800 tests. Coverage statements
  92.07%, branches 83.47%, functions 93.80%, lines 94.76%. Production SSR prerendered all 1243 routes.
- Steps 7–11 remain pending; the PSF/MTF UI, performance optimization and worker path are not yet implemented.

### Step 7 — spectral PSF, MTF and Image Quality controls

- Added incoherent spectral intensity sums on a common physical sensor grid with explicit C/d/F/g incident-intensity
  weights and preserved wavelength/throughput scale. No illuminant or sensor-response spectrum is inferred.
- Added horizontal/vertical Fourier slices in cycles/mm. MTF is published only after pupil refinement, expanded-window
  energy/MTF and sensor-grid energy/MTF differences are at most 3%, with radial phase steps below one quarter wave.
  Agreement is a numerical estimate, not a rigorous error bound. Unconverged PSFs remain explicitly provisional.
- Registered the Image Quality tab, source-distance and transmission controls, sampling controls, SVG PSF/MTF output,
  and movement/folded availability guards. Changing state/settings suppresses previous results; execution is explicit.
  The temporary synchronous UI runner is replaced by the cancellable worker in step 9.
- Independent tests cover Gaussian and circular-pupil MTF, DC/translation invariance, physical frequency units,
  spectral intensity scaling, a fully converged refractive fixture and deliberate undersampling. Component tests cover
  controls, unavailable states, stale-result suppression, unmount cancellation and exhaustive tab routing.
- Live localhost smoke check verified the Nikon AI 50 mm tab, URL registration, explicit source controls and sourced
  transmission returning unavailable instead of silently assuming coatings. The converged analytic pipeline currently
  takes approximately 14.3 seconds in an isolated node probe; optimize and measure in step 8.
- Typecheck, format, lint, full tests, coverage and production build passed: 304 files / 2812 tests. Coverage statements
  92.14%, branches 83.58%, functions 93.86%, lines 94.83%. SSR prerendered all 1243 routes. Steps 8–11 remain pending.

### Step 8 — bounded state reuse and measured arithmetic reduction

- Moved runtime prepared-state ownership into one module, shared by tracing, chief-ray solves, diagram adapters,
  vignetting and first-order entry points. Retains the last-input fast path, normalized exact control keys and a 96-state
  LRU per runtime lens identity. Trace-option retention is also bounded. First-order system matrices are frozen and
  reused per immutable prepared state; no UI-dependent state is moved into lens construction.
- Huygens grids now prepare reference distances and axial separations once per pupil wavelet and use a guarded direct
  Euclidean norm. The original point evaluator remains the reference, with asymmetric-pupil equivalence tests.
  No angular symmetry approximation or weaker convergence threshold is introduced.
- Isolated pre-change rendering benchmark: `runs/2026-09-04T23-33-48Z-150d961b.json`, clean step-seven tree, no warnings.
  Median analysis 93.82 ms; median total warm 95.19 ms. No simultaneous test or build job ran during measurement.
- `scalar-psf-2026-09-04.json` records reference medians 375.14 ms versus optimized 169.73 ms (approximately 2.21×)
  for the same 65-square grid and 2048 wavelets. Maximum absolute normalized-intensity disagreement was 1.36e-11.
  This is a kernel measurement, not an end-to-end PSF or UI speed claim.
- Full normal tests and coverage passed: 305 files / 2815 tests; statements 92.18%, branches 83.59%, functions 93.91%,
  lines 94.87%. Typecheck, format and lint passed after removing an unused facade import. Production build/SSR
  prerendered all 1243 routes. The after-change rendering benchmark is running separately from these gates.
- After-change rendering benchmark: `runs/2026-09-04T23-43-02Z-150d961b.json`, no warnings. Median warm workload
  94.79 ms versus 95.19 ms before (0.4% lower); analysis 93.06 versus 93.82 ms. These small differences do not establish
  an overall viewer speedup. The supported gain is the isolated PSF kernel; cache consolidation also bounds retention
  and removes duplicated preparation. Steps 9–11 remain pending.

### Step 9 — cancellable module-worker diffraction

- Moved Image Quality execution to a browser module worker. The structured-clone job carries source lens data, exact
  focus/zoom/aberration values and all diffraction options; it rebuilds the prepared state and invokes the same pure
  synchronous implementation used by reference tests. No prepared-state closures are sent across the worker boundary.
- Input changes, cancellation and unmount terminate the worker. Request identity, monotonic ids and active-job guards
  reject late replies and mismatched ids. Startup/runtime errors return explicit unavailable states. SSR does not create
  workers, and browsers unable to start one do not silently run expensive work on the main thread.
- Added protocol/reference equality, serialization, cancellation, stale-message, wrong-id, unmount and failure tests.
  Updated the component tests to exercise worker delivery and retained explicit spectral/source/control assertions.
- Live localhost check on Leica Summicron-R 50 mm at f/16 verified that a heavy job enters Computing and can be cancelled
  back to idle. Nikon AI 50 mm wavefront failure remains explicitly unavailable instead of publishing invalid MTF.
- The live Leica job also completed and displayed a provisional PSF with 1.04% pupil, 4.46% window and 0.08% sensor-grid
  differences; MTF was correctly withheld because the window check failed. Visually inspected the SVG/labels.
- Typecheck, format, lint, full tests, coverage and build passed: 307 files / 2819 tests. Coverage statements 92.19%,
  branches 83.60%, functions 93.90%, lines 94.87%. The production worker asset was emitted and all 1243 routes
  prerendered. Steps 10–11 remain pending.
