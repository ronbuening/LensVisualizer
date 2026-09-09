# Trace Model Improvement Plan

> **Status (2026-09-09):** status document, not an active checklist. The projection-aware field launch,
> vector-native exact tracing, and bounding-sphere launch phases all landed between 2026-05-20 and 2026-06-22
> (PRs 5–8, PR #506, PR #557). Current engine boundaries are documented in
> `agent_docs/architecture/optics-engine.md` and the standing rules in `agent_docs/gotchas.md`; this file keeps
> the rationale, the data contract that still constrains new code, the deferred items, and suggested next work.

## The trace model today

- Exact surface tracing is the only trace path. There is no legacy mode, rollout flag, or per-lens trace mode.
- Every analysis launch slope flows through `projectionLaunchSlopeForField` in `src/optics/projection.ts`. The
  shared constants live in `src/optics/field/projection.ts`: `MAX_FIELD_LAUNCH_DEG = 89`,
  `ABSOLUTE_HALF_FIELD_CEILING = 175`, `TRACING_SAFETY_FACTOR = 0.9`.
- Chief rays solve through `solveChiefRay` in `src/optics/fieldGeometry.ts`, which returns a typed
  `ChiefRaySolveResult` and dispatches on `launchSurfaceForFieldDeg(fieldDeg, projection)`: fisheye projections
  always take the bounding-sphere vector arm; rectilinear projections take the slope arm below 89° and the
  bounding-sphere arm at or above it.
- The exact tracer (`src/optics/internal/exactSurfaceTrace.ts`, `src/optics/internal/surfaceIntersection.ts`) is
  vector-native and accepts grazing and backward rays when the caller passes a finite `launchBoundT`.
- Fisheyes report the declared `projection.maxTraceFieldDeg` as `halfField` (capped by
  `ABSOLUTE_HALF_FIELD_CEILING`); `RuntimeLens.tracingHalfField` is the separate slope-safe field for diagram
  bundles, and diagram off-axis / chromatic rays promote to vector launch when the declared field exceeds it.
- Supported projection kinds: `rectilinear`, `fisheye-equidistant`, `fisheye-equisolid`.
- Heavy lenses (`isHeavyLensForRayWork` in `src/optics/raySampling.ts`) run at half analysis density, and analysis
  tabs hold last-settled values during slider drag (`src/components/layout/lensDiagram/AnalysisDrawerContent.tsx`).

## Why the model is projection-aware

Ordinary rectilinear tracing turns a field angle into `u = tan(theta)` and traces direction `[0, u, 1]`. That
breaks for fisheyes and ultra-wides because:

- `tan(theta)` is unbounded at 90°, and fields beyond 90° cannot be a forward `[ux, uy, 1]` slope at all.
- Fisheye image height is not `f * tan(theta)`; distortion must be the residual from the declared projection,
  otherwise the projection law itself is reported as "distortion".
- The first-order Gaussian EFL of a fisheye can sit far from the projection focal length, so aperture sizing uses
  the projection focal scale in `src/optics/buildLens.ts` instead.
- Unbounded chief-ray bisections and pupil sweeps on heavy bundles turn a bad launch into a UI stability problem.

The model therefore keeps these concepts distinct: object field angle, image radius under a projection law, the
launch ray (origin + unit direction), the chief ray through the stop, the surrounding pupil bundle, and the
distortion residual against the declared projection.

## Projection laws

| Kind | Image radius | Status |
|------|--------------|--------|
| `rectilinear` | `r = f * tan(theta)` | shipped |
| `fisheye-equidistant` | `r = f * theta` | shipped |
| `fisheye-equisolid` | `r = 2 * f * sin(theta / 2)` | shipped |
| stereographic | `r = 2 * f * tan(theta / 2)` | deferred; diverges at 180°, unsuitable for circular 180°+ images |
| orthographic | `r = f * sin(theta)` | deferred; inverse needs explicit range limits past 90° |
| polynomial / calibrated | `r = c1*theta + c3*theta^3 + ...` | deferred escape hatch for coefficient-only sources |

## Data contract that still constrains new code

The enforced rules are listed in `agent_docs/gotchas.md`; this section records the contract behind them.

1. **Projection model.** `src/optics/projection.ts` owns forward/inverse image-radius mapping, field-direction
   construction, projection labels, and domain checks. No analysis helper hand-rolls `f * tan(theta)` or
   `-Math.tan(theta)` as a private field model.
2. **Vector ray contract.** Vector trace inputs are `{ origin, direction (normalized), wavelength? }` and results
   carry a typed status plus points and final direction. Slope (`y/u`) outputs remain adapters and are valid only
   when `abs(direction.z)` is safely above epsilon.
3. **Launch surface.** `LaunchSurface = "object-plane" | "bounding-sphere"`. Bounding-sphere launches originate on
   a sphere around the entrance pupil and must pass `launchBoundT = 2 * launchRadiusMm` to the tracer; the
   z-projected bound stays primary for forward-cone rays because it is tighter.
4. **Chief-ray solve results.** Consumers inspect `solve.status` (`converged` / `paraxial-fallback` /
   `bracket-failed` / `out-of-domain`) and consume `solve.vectorLaunch` whenever the scalar slope is out of
   domain. The bounding-sphere arm never falls back to a paraxial `-epRatio * tan(theta)` chief ray, because that
   scalar is meaningless near or beyond 90°.
5. **Failure semantics.** Trace-heavy analysis returns typed statuses instead of `null` or throws, distinguishes
   physical blocking from numerical failure, bounds iteration counts, and prefers sparse charts over tab crashes.
   Prepared-state traces (`src/optics/trace/sequentialTrace.ts`, `src/optics/trace/generalizedTrace.ts`) stop on a
   missed surface and keep prior hits; the diagram path must not fabricate post-miss ghost geometry.
6. **Rectilinear bit-identity.** Only non-rectilinear `projection.kind` values activate projection-aware paths.
   Rectilinear lenses keep the slope fast path below the cap, `tracingHalfField === halfField`, and no safety
   factor.
7. **Per-view expectations.** Distortion compares to the declared projection and its field grid samples in angular
   space for fisheyes; vignetting, pupil aberration, off-axis, and bokeh launch from the shared chief-ray solve;
   the diagram may show a safe subset when the declared field exceeds the slope-trace domain.

## Deferred

- **Stereographic, orthographic, polynomial projections.** Add when a real catalog lens demands them.
- **`buildRayBundleForField()` shared bundle builder.** Vector-launch policy is still module-specific (bokeh,
  vignetting, pupil aberration, distortion grid, image height, visible and chromatic off-axis). Pupil-sampling
  shapes differ enough that unification is premature; revisit only if new work starts copying launch policy again.
- **Web Workers for analysis.** Solver memoization plus heavy-lens density LOD may make them unnecessary. Only
  worth the complexity if Nikon 6mm settled compute still exceeds ~100 ms after profiling.
- **Reverse trace from the image side.** Needed only if bounding-sphere launch cannot cover some extreme geometry.
  Defer until a concrete failure case surfaces.
- **Cached launch radius on `RuntimeLens`.** Bisection is ~30 iterations and the radius is O(N) over surfaces;
  cache it in `buildLens` only if profiling shows the recomputation.

## Suggested Next Work

New items here follow the Per-Item Template in `FEATURE_ADDITION_PLAN.md` (Files to touch / Reference to mimic /
Data-type contract / Steps / Gotchas / Verification / Out of scope / Rollback).

### Catalog chief-ray convergence audit (`scripts/auditChiefRays.mjs`)

- [ ] Effort: S-M · Developer-facing

What: build every visible catalog lens, sweep chief-ray solves across its half-field at a canonical state, and
write a per-lens convergence report so solver regressions (and lenses needing projection or annular attention)
surface without manual browser triage.

- **Files to touch.** New: `scripts/auditChiefRays.mjs`, `src/benchmarks/chiefRayAudit.ts`, generated
  `agent_docs/generated/chief-ray-audit.generated.md`. Modified: `package.json` (`"audit:chief-rays"`),
  `agent_docs/README.md` (generated-report index line).
- **Reference to mimic.** `scripts/benchmark-optics-rendering.mjs` is the required template: build the TS entry via
  Vite SSR into a temp dir, then dynamic-import the emitted JS. A plain `.mjs` import of the TypeScript engine fails
  because the catalog uses Vite glob imports.
- **Data-type contract.** `src/optics/chiefRayDiagnostics.ts` exports `getChiefRayDiagnostics()` (per-lens
  `Record<ChiefRayStatus, number>`) and `resetChiefRayDiagnostics()`; counters populate as a side effect of
  `solveChiefRay`. Sweep: reset; for each visible lens call `buildLens()` once, take
  `computeFieldGeometryAtState().halfFieldDeg` at `focusT = zoomT = aberrationT = 0`, and solve at field fractions
  `[0.25, 0.5, 0.75, 0.9, 1.0]`, skipping angles below 1°.
- **Output.** Deterministic markdown table sorted by lens key:
  `Lens key | Solves | Converged | Paraxial-fallback | Bracket-failed | Out-of-domain | Hard-fail % | Verdict`.
  FAIL when `(bracket-failed + out-of-domain) / solves > 0.05` (named constant); `paraxial-fallback` is reported
  but acceptable; a named allowlist exempts centrally obstructed reflex lenses (verdict `ALLOWLISTED`). Exit 0
  when every non-allowlisted lens passes, 1 otherwise (report still written). Not wired into build or test.
- **Steps.** Write the entry module exporting `runChiefRayAudit()` and `buildChiefRayAuditReport(rows)` (mirror
  `src/benchmarks/opticsRenderingBenchmark.tsx`); write the orchestrator; register the npm script and README
  line; run once and commit the report.
- **Gotchas** (all in `agent_docs/gotchas.md`): the blocked central chief ray on obstructed reflex lenses collapses
  field geometry, hence the allowlist; the solver memoizes per `RuntimeLens` via `WeakMap`, so build each lens
  exactly once per run or counts deflate; generated reports must carry no timestamps or machine info.
- **Verification.** `npm run audit:chief-rays` exits 0 and writes the report; a second run is byte-identical
  (`git diff --exit-code agent_docs/generated/chief-ray-audit.generated.md`); setting the threshold constant to 0
  temporarily makes it exit 1; the standard gate passes.
- **Out of scope.** Fixing flagged lenses; CI wiring; sweeping focus/zoom states beyond the canonical state.
- **Rollback.** Delete the two new files, the `package.json` line, the README line, and the generated report.

### Smaller follow-ups

- **Fisheye / ultra-wide classification audit.** Any catalog lens with `fullFieldDeg >= 100` should either declare
  a `projection.kind` or be explicitly documented as rectilinear/limited; flag lenses whose `focalLengthMm` is far
  below `EFL / tan(fullField / 2)`.
- **Browser smoke after trace-heavy changes.** Open the Nikon Fisheye-Nikkor 6mm and the Canon EF 8-15mm fisheye
  zoom; check diagram, distortion, vignette, pupils, and off-axis/chromatic rays for console `[chiefRaySolver]`
  warnings or nonsensical bundles. `getChiefRayDiagnostics()` should show only `converged` or
  `paraxial-fallback`.
- **Analytic grazing-ray test.** A synthetic one-surface sphere fixture at 89.5°, 90°, 95°, 100°, 110°, and 130°
  compared against closed-form intersections would validate the lifted forward-cone gates against the math rather
  than the algorithm's own self-consistency.
