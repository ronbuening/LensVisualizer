# Testing Architecture

Read this for test layout, coverage expectations, shared helpers, the per-lens test retention policy, and where to add
focused regression coverage.

## Test Stack

- Vitest
- `@testing-library/react`
- TypeScript test files under `__tests__/`, with source-facing tests mirrored under `__tests__/src/`
- V8 coverage via `npm run test:coverage`

## Coverage Scope

Coverage configuration lives in `vite.config.js` and includes:

- `src/optics/**`
- `src/utils/**`
- `src/pages/**`
- `src/routes/**`
- `src/components/**`
- `src/comparison/**`

## Test Layout

Most tests mirror the files they cover:

- `src/components/display/analysis/AberrationsPanel.tsx` -> `__tests__/src/components/display/analysis/AberrationsPanel.test.tsx`
- `src/optics/internal/exactSurfaceTrace.ts` -> `__tests__/src/optics/internal/exactSurfaceTrace.test.ts`
- `src/pages/lensIndex/catalog.ts` -> `__tests__/src/pages/lensIndex/lensIndexCatalog.test.ts`

Keep tests that cover generated metadata, build scripts, or public assets in the matching top-level test area:

- `__tests__/src/generated/`
- `__tests__/scripts/`
- `__tests__/public/`

`__tests__/src/lens-data/` holds only corpus-wide data-contract sweeps that walk every catalog lens. It has no
per-maker subfolders and no per-lens files; see the retention policy below.

## Per-Lens And Audit Test Retention

Tests written while authoring, auditing, or batch-importing lens data are temporary by default. The corpus sweeps listed
under "What Tests Cover" already build, validate, trace, and policy-check every catalog lens, so a new or re-audited lens
needs no test of its own.

- Do not commit per-lens or per-batch test files that restate audited data: display names, resolved glass names,
  semi-diameters, group and element labels, movement shifts, focus directions, spacing endpoints, or coefficient
  departures. Restating a transcription in a test does not verify it against the source; it only freezes it and adds
  a second place to edit on every correction.
- Verify a batch with the existing tools instead: `npm run test` for the corpus sweeps, `npm run audit:image-circle`,
  `npm run audit:patent-figure`, `npm run audit:surface`, and `npm run generate:glass-reports`. Record sources,
  calculations, results, and limitations in the companion `*.audit.md` and the task record. Historical test counts in
  audit logs describe the checks run at that time.
- Keep a test only when it guards shared engine, UI, or data-contract behavior that existing suites cannot cover. Add
  the smallest case to the matching subsystem suite, prefer a synthetic prescription from
  `__tests__/src/optics/testLensFixtures.ts` over patent constants, and say in a comment why it must remain. A real lens
  may serve as the fixture for a general behavior when no synthetic input can (the diffractive and aberration-control
  suites do this); the test name and assertions then describe the behavior, not the lens.
- A new corpus-wide contract belongs in `__tests__/src/lens-data/` as an offender-collecting sweep over `LENS_CATALOG`,
  never as a file scoped to one maker or one lens.
- Remove temporary verification tests before committing.

## Shared Test Helpers

Shared browser/router helpers remain at `__tests__/testUtils.tsx`. They cover:

- Router mounting (`renderWithRouter`).
- Page rendering under `HelmetProvider` + router (`renderPage`).
- Lens-context rendering (`renderWithLensContext`).
- Full lens state built on the real reducer defaults with per-slice overrides (`makeTestLensState`).
- A frozen complete dark `Theme` (`mockTheme`).
- Mock-module shapes for the eight LensDiagramPanel hooks (`mockLensDiagramHooks` plus the
  `makeLensComputationResult` / `makeRayTracingResult` / `makeViewBoxZoomResult` builders); `vi.mock` factories are
  hoisted, so consume these via `await import("../../testUtils.js")` inside an async factory.
- `matchMedia` mocking.
- localStorage seeding.
- `history.replaceState` mocking.

Optics tests share `__tests__/src/optics/testLensFixtures.ts`: the canonical `build()` wrapper, `apertureAt()`, six
lazily memoized production lenses, and synthetic single-element fixtures for layout, keyframe, TIR, ghost, and miss cases.

## What Tests Cover

Existing tests cover:

- Pure optics functions and edge cases.
- Lens build and data validation.
- Corpus sweeps over every catalog lens: the full-catalog `validateLensData` pass (`validateLensData.test.ts`), render
  trim and cross-gap diagnostics (`elementRenderDiagnostics.test.ts`), finite/unclipped representative rays
  (`exactTraceCatalog.test.ts`), catalog and summary invariants under `__tests__/src/utils/catalog/`, and the
  data-contract sweeps under `__tests__/src/lens-data/`: structured patent metadata (`patentMetadata.test.ts`), the
  analysis-file metadata/section floor (`analysisFiles.test.ts`), exact focus-keyframe reproduction
  (`focusKeyframes.test.ts`), and shared-prescription parity across switchable configuration groups
  (`opticalConfigurationParity.test.ts`, which requires a contract entry for every `opticalConfiguration` group).
- Golden-value trace regressions (`exactTraceGoldenValues.test.ts`): pinned EFL, image-plane, marginal/skew ray, fisheye
  chief-ray, and folded-fixture values for reference designs, plus Schott datasheet anchors for N-BK7/SF6 in
  `dispersion.test.ts`. These complement the finite/unclipped catalog smoke test — if a pin moves, absolute trace or
  catalog behavior changed; investigate before re-pinning.
- Mirror/folded optics fixtures: first-surface reflection, annular clipping/rendering, second-surface repeated hit order,
  automatic Newtonian path resolution, side/front/back image-plane termination, second-surface coating accents, folded
  analysis guardrails, off-axis chief-ray/image-plane accuracy, meridional symmetry, and analytic focal/back-focus
  anchors.
- Diffractive phase surfaces: the analytic folded plate fixture (`foldedDiffractiveTrace.test.ts`) and the sequential
  engine contracts on the production Phase Fresnel design (`diffractiveTrace.test.ts`).
- The aberration-control ring (`aberrationControl.test.ts`): two-position and centered thickness resolution, and the
  ring reaching spherical, field, coma, bokeh, pupil, and chromatic analysis paths.
- Aberration, distortion, vignetting, pupil aberration, bokeh, and diagram geometry.
- Catalog/metadata utilities.
- Reducer, preferences, URL sync, feature flags, and page-theme hooks.
- Component smoke tests for pages, controls, display panels, analysis drawer, and comparison layout.
- Script regressions for metadata, route sync, lens-data helpers, sitemap/prerender support.
- Generated authoring reports, including glass queues and the hidden mirror fixture report.
- Benchmark report aggregation helpers. The expensive optics/rendering benchmark itself is manual-only and is not part of
  the normal Vitest suite.

## Refactor Test Expectations

When refactoring:

- Add pure-function tests for shared math helpers before swapping multiple callers.
- Add component smoke tests when extracting shared UI wrappers or markdown renderers.
- Add equality tests when adding optional precomputed inputs to optics helpers.
- Add reducer guard tests when tightening string state into literal unions.
- Add script helper tests when changing metadata generation, route expansion, or git freshness lookup.
- Add fixture-backed optics tests whenever changing `SurfaceData.interaction`, `innerSd`, `opticalPath`, generalized
  stop tracing, generalized image-plane intersection, obstruction-aware sampling, or folded analysis gating. Prefer
  hidden reference fixtures under `src/lens-data/reference/` for canonical mirror/telescope behavior.
- For folded off-axis changes, include chief-ray reachability, image-height magnitude against the expected small-field
  reference, positive/negative field symmetry, and a representative non-folded refractive snapshot so ordinary
  sequential behavior does not drift.

Run the normal gate before committing:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

## Benchmark Verification

The optics/rendering benchmark command is intentionally opt-in:

```bash
npm run benchmark:optics-rendering
```

Use `npm run benchmark:optics-rendering -- --dry-run` when changing benchmark code and you only need to validate module
loading, schema construction, and default lens keys. Use `--report-only` after changing report formatting so the
Markdown report is regenerated from existing run JSON without creating another benchmark record.
