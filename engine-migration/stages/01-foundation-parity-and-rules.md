# Stage 01: Foundation, Parity, And Rules

Use this stage to make the rewrite safe before new optical math exists.

## /goal Prompt

```text
/goal Implement Optics 2 Stage 01 from engine-migration/stages/01-foundation-parity-and-rules.md: establish migration rules, add the parity fixture matrix and benchmark harness scaffolding, keep production on src/optics, and verify with focused typecheck/tests. Do not switch UI imports.
```

## Scope

This stage covers Phase 0 and Phase 1:

- Establish migration policy.
- Define the representative lens matrix.
- Add parity and benchmark scaffolding.
- Keep the existing engine as the production engine.

No engine behavior should change in this stage.

## Goals

- Create a narrow, repeatable way to compare `src/optics` and future `src/optics-2` behavior.
- Capture old-engine behavior at the right boundaries before callers move.
- Make benchmark output available without turning it into a CI failure yet.
- Make parity tolerances explicit and named.

## Non-Goals

- Do not create a user-facing engine selector.
- Do not switch React hooks or UI imports.
- Do not change lens files.
- Do not implement new tracing or math yet.
- Do not delete or move old engine files.

## Required Files

Add these only as needed by the first implementation pass:

- `__tests__/optics-2/parity/parityFixtures.ts`
- `__tests__/optics-2/parity/tolerances.ts`
- `__tests__/optics-2/parity/buildLensParity.test.ts`
- `__tests__/optics-2/parity/layoutParity.test.ts`
- `__tests__/optics-2/parity/rayTraceParity.test.ts`
- `__tests__/optics-2/parity/foldedTraceParity.test.ts`
- `__tests__/optics-2/parity/analysisParity.test.ts`
- `src/optics-2/testing/benchmarkHarness.ts`
- Optional: `scripts/benchmark-optics-2.ts`

Parity tests may be skipped or partially pending before an `optics-2` function exists, but each skip must name the
specific missing function.

## Migration Rules To Lock

- `src/optics-2` is additive until final migration.
- `src/optics` remains the parity reference.
- The lens-data authoring contract remains `LensDataInput`.
- Exact surface tracing remains the only trace path.
- No `mode`, `traceMode`, or per-lens rollout field is introduced.
- Any engine selector is internal and temporary.
- Tests compare behavior before app callers move.

## Representative Lens Matrix

Use this matrix for parity fixtures and benchmarks:

- Ordinary prime: `nikkor-z-50f18s`.
- Fast/aspheric prime: `nikon-z-58f095-s-noct`, or the closest available high-aperture aspheric lens.
- Rectilinear zoom: a 24-70 style zoom available in the catalog.
- Fisheye zoom or prime: `canon-ef-8-15mm-f4l-fisheye-usm` and/or `nikon-fisheye-nikkor-6mm-f28`.
- Perspective-control lens: `nikon-pc-nikkor-19mm-f4e-ed`.
- Aberration-control lens: `varisoft-rokkor-85f28`.
- Glass coverage: at least one Sellmeier lens, one line-index lens, one Abbe fallback lens, and one constant fallback
  surface.
- Folded coverage: all hidden `src/lens-data/reference/*.data.ts` fixtures.

For each ordinary fixture, include at least:

- Infinity focus.
- Close focus.
- Wide open aperture.
- Stopped-down aperture.
- Center field.
- Off-axis field.

For zoom fixtures, include wide, middle, and tele zoom states.

## Tolerance Policy

Create named tolerance groups instead of inline numbers:

- Surface sag, slope, and normal: strict absolute tolerance first, typically `1e-10` to `1e-8`.
- Ray points and image heights: tight tolerance for ordinary finite rays, looser only near clipping or root-solve
  boundaries.
- Folded traces: compare status, hit labels, terminal surface, final medium, and image-plane reachability before numeric
  coordinates.
- Analysis samples: compare sample counts, field positions, statuses, and bounded values.
- Fisheye/vector launches: compare semantic launch kind and bounded numeric output.

Any tolerance above ordinary floating-point noise must include a named reason such as:

- `iterative-root-solve`.
- `clip-boundary`.
- `projection-inversion`.
- `old-engine-bug-compatibility`.

## Parity Outputs To Capture

The scaffold should be ready to compare:

- `buildLens` constants.
- `doLayout`, `thick`, z positions, and image-plane positions.
- Surface sag, slope, normal, and render trim diagnostics.
- On-axis ray fans.
- Off-axis true-angle and edge-mode ray fans.
- Skew rays.
- Chromatic ray fans and LCA/TCA spread.
- Chief-ray statuses and launch kinds.
- Distortion, vignetting, pupil aberration, bokeh, coma, field curvature, and spherical aberration samples.
- Folded hit order, clip diagnostics, final medium, terminal surface, and image-plane reachability.

Prefer dynamic old-versus-new comparisons while `src/optics` exists. Commit fixed golden JSON only when needed to retain
the assertion after old internals are removed.

## Benchmark Harness Requirements

The benchmark harness should run both engines through the same input shape once `optics-2` exists. Keep it informational
until Stage 05.

Required benchmark cases:

- 1,000 sequential on-axis traces.
- 1,000 skew traces.
- Off-axis display ray fan.
- Chromatic fan.
- Distortion grid.
- Vignetting curve.
- Bokeh point cloud or spot grid.
- Folded fixture trace.

Record:

- Case name.
- Lens key.
- Slider state.
- Old median time.
- New median time.
- Worst time.
- Successful trace count.
- Clipped trace count.
- Failed trace count.

## Verification

Documentation-only edits require no runtime test. If this stage adds TypeScript helpers or tests, run focused checks such
as:

```bash
npm run typecheck
npm run test -- --run __tests__/optics-2/parity
```

If the focused test command is not supported by the current test setup, run the nearest focused Vitest command and note
the exact command used.

## Exit Gate

Stage 01 is complete when:

- The parity fixture matrix exists and is importable.
- Named tolerance groups exist.
- Benchmark scaffolding can be called without mutating lens data or generated metadata.
- No production app code has switched engines.
- Any skipped parity test points to a specific missing `optics-2` function.

