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
- `src/optics/trace/geometry.ts` and traversal -> `__tests__/src/optics/trace/geometryTraversal.test.ts`, `__tests__/src/optics/productionTraceVector.test.ts`, `__tests__/src/optics/mirrorOptics.test.ts`
- `src/optics/geometry/intersect.ts` -> `__tests__/src/optics/geometry/traversalIntersection.test.ts`, `__tests__/src/optics/intersectionContract.test.ts`, `__tests__/src/optics/intersectionFixtures.test.ts`
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

Optics tests share `__tests__/src/optics/testLensFixtures.ts`: the canonical `build()` wrapper, `apertureAt()`,
request helpers `analysisRequestForLens`, `analysisRequestAt` and `mtfInputs`, six
lazily memoized production lenses, and synthetic single-element fixtures for layout, keyframe, TIR, ghost, and miss cases.

## What Tests Cover

Existing tests cover:

- Pure optics functions and edge cases.
- Lens build and data validation.
- Corpus sweeps over every catalog lens: the full-catalog `validateLensData` pass (`validateLensData.test.ts`), render
  trim and cross-gap diagnostics (`elementRenderDiagnostics.test.ts`), finite/unclipped representative rays
  (`exactTraceCatalog.test.ts`), catalog and summary invariants under `__tests__/src/utils/catalog/`, and the
  data-contract sweeps under `__tests__/src/lens-data/`: cross-lens patent spelling and name order, reference
  fixtures without patent metadata, converter publication formatting and the design f-number ratchet
  (`patentMetadata.test.ts`; per-lens patent rules are the validator's, `validate/patent.ts`), the
  analysis-file metadata/section floor (`analysisFiles.test.ts`), exact focus-keyframe reproduction
  (`focusKeyframes.test.ts`), fixed-iris declarations that match their stated station f-numbers
  (`zoomApertureModel.test.ts`), `dPgF` stored against the engine's normal line
  (`partialDispersionLine.test.ts`), and shared-prescription parity across switchable configuration groups
  (`opticalConfigurationParity.test.ts`, which requires a contract entry for every `opticalConfiguration` group).
- Canonical prescription and V2 ingest (`prescription/canonical.test.ts`, `ingestV2.test.ts`): immutable input,
  defaults/provenance, authority rules, unreadable-shape and authored-path refusals, plus permanent V1/V2 converter
  fixture pairs. Conversion produces the same canonical prescription; runtime numeric fields agree exactly when
  built through canonical input. App ingest and build reject V1 with a path and conversion command. The detailed
  refusal inventory is in `src/lens-data/LENS_DATA_SPEC.md` (Validation Rules).
- The V2 view and source paths (`__tests__/src/optics/prescription/toLensDataV2.test.ts`): path spelling, source paths
  recorded on request without changing the result, each fixture pair written by the V2 view from either side and
  ingested back to its prescription, the V2 field order, the relations `v2SourceMap` composes, and
  `prescriptionDifference`.
- Teleconverters, which never enter `LENS_CATALOG` (`teleconverterCompatibility.test.ts`): every converter validates;
  every converter–host pair the fit predicate allows composes, builds, passes the axial beam, keeps the host's stop
  and, at every zoom station, reaches as much of the format corner as the bare lens; and a synthetic universal
  converter is composed onto every catalog lens to hold the stop-preservation invariant across zoom tables, embedded
  stops, rear plates and drop-in filters. Tests that need a real pair take it from `ALL_TELECONVERTER_KEYS` and
  `resolveTeleconverterKey()` so they hold while the only converter is a hidden test model; page and search tests add
  one synthetic published summary to the generated JSON.
- Golden-value trace regressions (`exactTraceGoldenValues.test.ts`): pinned EFL, image-plane, marginal/skew ray, fisheye
  chief-ray, and folded-fixture values for reference designs, plus Schott datasheet anchors for N-BK7/SF6 in
  `dispersion.test.ts`. These complement the finite/unclipped catalog smoke test — if a pin moves, absolute trace or
  catalog behavior changed; investigate before re-pinning.
- High-precision intersection fixtures (`intersectionFixtures.test.ts`): both entries to the intersection kernel are
  held to the documented contract on sphere, conic and asphere roots computed outside the engine, for the exact
  float64 inputs the entries receive. `__tests__/src/optics/fixtures/generateIntersectionFixtures.ts` holds the case
  table and writes `__tests__/src/optics/fixtures/intersectionFixtures.json` with 60 decimals, on the BigInt
  fixed-point arithmetic in `__tests__/src/optics/fixtures/fixedPoint.ts`. After editing the table, regenerate by
  running the generator through the import hook (`node --import ./scripts/ts-js-specifier-hook-register.mjs <generator
  path>`); the test fails while the committed file is stale. Every float64 the generator writes comes from correctly
  rounded IEEE 754 operations, not from `Math.hypot` or another function the language leaves to the JavaScript
  runtime, so the file regenerates to the same bytes on any machine. A fixture either entry fails stays in the file
  and is listed in the test's expected-findings table, which asserts the failure until the engine change that fixes it
  removes the entry. The table is empty.
  `geometry/intersectConic.test.ts` reads the same file to hold which path answered each sphere and conic solve: the
  closed form from one profile evaluation, or the iterative path with the reason for the fallback.
  `geometry/intersect.test.ts` reads it to hold which path answers each asphere fixture: the conic-seeded route, by
  the profile evaluations a counting profile sees, or the iterative path with the same result as an explicit budget.
- Planar pupil re-derivation (`planarPupilReference.test.ts`): the five Zeiss Planar build constants pinned in
  `mirrorOptics.test.ts` (half field, tracing half field, entrance- and exit-pupil position, exit-pupil semi-diameter)
  are held to values re-derived at 50 and 80 decimals by
  `__tests__/src/optics/fixtures/generatePlanarPupilReference.ts`, which writes
  `__tests__/src/optics/fixtures/planarPupilReference.json`; regenerate it through the import hook, like the
  intersection fixtures. This is a re-derivation written after the pins were set. It is not the high-precision evidence
  cited when they were set, which was never committed. The half-field pins are endpoints of a 40-step float64
  bisection, so the file holds the exact angle the bisection closes on and the generator exports the exact
  pass-or-clip decision for any field angle; the test replays the bisection on the engine's tracer and requires every
  decision to match the exact one. The engine's float64 trace agrees with the exact clearance only to about 2e-13 mm,
  so the test also holds every step's clearance above 1e-12 mm; when that check fails, a prescription change has put a
  bisection step where float64 and exact arithmetic may decide differently. The generator evaluates tangents and
  arctangents as fixed-point series, because the last bit of `Math.tan` and `Math.atan` can differ between CPU
  architectures and the committed file must not depend on the machine that wrote it.
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
- The glass-report helper library (`__tests__/reports/glassScanLib.test.ts`), the MTF chart report's helpers
  (`__tests__/reports/mtfChartLib.test.ts`) and the glass-resolution parity sweep
  (`__tests__/src/lens-data/glassResolutionParity.test.ts`); the reports themselves are generated outside the suite (see
  "Reports and Tooling Tests").
- The structure of `src/optics/` itself: import cycles, the outside-import seam, and module-level caches (see
  "Architecture Guards").

## Architecture Guards

`__tests__/src/optics/opticsArchitecture.test.ts` scans source text, as `__tests__/docDrift.test.ts` does, and holds
three guards over `src/optics/`:

- **Import cycles.** The runtime import graph has no strongly connected component larger than one module and no
  self-import. An edge is a static import, a re-export or an `import()` that carries at least one value; type-only
  declarations add none.
- **Seam.** An import into `src/optics/` from the rest of `src/`, from `scripts/` or from `reports/` targets a
  registered module. Type-only imports count, and so do the path strings that scripts load. Tests are not importers,
  because they follow the internals they test, and targets under `src/optics/mount/` are skipped.
  `REPORT_INTERNAL_IMPORTS` is empty; reports use the public seam too. A registry entry's `importers` is an exact
  file list: unlisted importers and stale entries both fail. `lensDataConversion.ts` admits only
  `scripts/lens-data-convert/load.mjs`; that loader admits only the converter's `cli.mjs` and `convert.mjs`.
  The organizer reaches it through the converter runner; build metadata uses V2 ingest. No optics module outside
  `prescription/v1/` and `lensDataConversion.ts` may reference `/v1/`, and no runtime seam may reach it.
  Synthetic self-tests require a forbidden importer, stale entry and direct `/v1/` import to fail.
- **Caches.** Every module-level `Map`, `WeakMap`, `Set` or `WeakSet` is registered as a constant lookup table, a
  bounded cache, or a `WeakMap` keyed by its owner whose per-owner value cannot grow without bound.

All legacy lists and the report-import exception list are empty and locked empty by a guard.
Each guard's lists are data at the top of the test, and come in two kinds:

- The **legacy lists** admit no violations. Fix violations in code; the cycle guard has no registry.
- A **registry** holds the modules and containers that meet the rule by design. Add an entry only when it passes the
  guard's admission rule, which the guard checks:
  - Seam: a top-level `src/optics/*.ts` file that holds only imports, re-exports, type declarations and aliases of
    imported bindings. `src/optics/prescription/teleconverterCompatibility.ts` is the one permanent exception, because
    `scripts/generate-build-metadata.mjs` loads it by path under plain Node; the guard checks that the script still
    names the path and that the module still imports nothing at runtime.
  - Caches: a constant is never written by its module; a bounded cache records its owner, key and capacity, and
    names the module constant that holds the capacity; an owner-keyed `WeakMap` records its owner, its key and what
    one owner holds.

The cache scan reads declarations. A per-owner `Map` or `Set` needs a registry capacity and limit constant; the
recorded capacity is checked against the code. Stores behind type aliases and eviction logic itself need review.
Each failure message names the entry and the rule it violates.

The guards read source text, not a syntax tree. The comment on each scan function in the test lists the forms it does
not see, such as an `import.meta.glob` pattern for the seam or a container nested in another value for caches.

`__tests__/scripts/scriptImports.test.ts` additionally parses scripts, reports and benchmarks to resolve module
paths on disk, including loader helper call sites, computed URL constants, bundle entries and eager globs. It reads
the seam registry above and rejects missing paths, internal optics targets and unknown computed inputs. Catalog
walks expand to current files; generated bundles are checked at their source entries. There are no historical-candidate exemptions. Broken-path and internal-import self-tests hold the scanner's failure behavior.

## Reports and Tooling Tests

`npm run test` runs only product, data-contract, and build-pipeline tests. Two kinds of Vitest files stay out of it:

- **Report generators** in `reports/*.report.ts` rewrite the committed files under `agent_docs/generated/`. They use
  `import.meta.glob`, so they run under Vitest through `vitest.reports.config.js`: `npm run generate:reports` (all), or
  `generate:glass-reports`, `generate:mirror-reports`, `generate:mount-svgs`, or `npm run generate:reports -- <name>`.
  An invariant a report depends on belongs in the suite as its own test, not as an `expect` inside the generator.
- **Tooling tests** for manual-only dev tools (the benchmark harness and its drivers, and the audit-script npm entries) are listed in `TOOLING_TESTS` in `vite.config.js` and run with
  `npm run test:tooling`. CI runs both suites in one job and calls Vitest directly for this one
  (`npx vitest run --config vitest.tooling.config.js`), so the metadata `npm run test` just generated is not generated
  again. Add a file there only when it guards a tool that neither the build nor the app uses. The one exception is the
  converter's corpus sweep (`__tests__/scripts/convertLensDataCorpus.test.ts`), which converts every catalog file both
  ways and is listed there so `npm run test` stays fast.

## Refactor Test Expectations

When refactoring:

- Add pure-function tests for shared math helpers before swapping multiple callers.
- Add component smoke tests when extracting shared UI wrappers or markdown renderers.
- Add equality tests when adding optional precomputed inputs to optics helpers.
- Add reducer guard tests when tightening string state into literal unions.
- Add script helper tests when changing metadata generation, route expansion, or git freshness lookup.
  `__tests__/scripts/lensDataV2Readers.test.ts` holds the AST reader to both versions and the metadata readers to V2: the AST reader against
  every catalog module, identity, summaries and converter fit from V2 twins, the organizer's V2 import, and page dates
  that skip conversion commits. `lensDataScripts.test.ts` also checks conversion on arrival, refusals without source
  changes, V2 no-ops, and metadata rejection before writes. `__tests__/src/lens-data/schemaVersion.test.ts` requires
  every catalog lens and teleconverter, including hidden fixtures, to be V2 through the engine's version rule.
  `__tests__/scripts/auditImageCircle.test.ts`, in the tooling suite, runs each audit that reads a lens file on a V2
  fixture through its npm entry and checks that V1 is rejected with conversion guidance. `__tests__/scripts/convertLensData.test.ts` holds the converter
  library to synthetic source-text fixtures (`convertLensDataFixtures.ts`, strings so `format:check` never reaches
  them): each fixture pair converted and ingested back, pinned outputs and reports, a V2 source given back as written,
  one refusal of each kind, a run under plain Node, and the V1 direction (each pair's V2 side to V1 and back, the V1
  print order on a maximal lens, the stop radius V1's type requires, comments V1 has no node for, banners and the
  converter's own notes, and a V1 prime and zoom in the template's sections going V1 → V2 → V1 with every banner back
  on the member it led). `convertLensDataCli.test.ts` runs the command line on synthetic files in a temp directory:
  arguments and exit codes, the three modes, each kind of refusal, collisions, `--output`, interrupted writes and
  signals through an injected file system and signal source, line endings, the type-check where a file will be
  written, and V2 → V1 → V2 over the fixture pairs.
  `convertLensDataCorpus.test.ts`, in the tooling suite, sweeps the catalog through the command line: every file to
  the other version and back, each leg's prescription equal to the source's, every comment carried once, and a second
  round trip byte-identical in both versions; it fails with every case it found. Run it alone with
  `npx vitest run --config vitest.tooling.config.js __tests__/scripts/convertLensDataCorpus.test.ts`.
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

Also run `npm run test:tooling` when changing `scripts/`, `src/benchmarks/`, the audit tooling, or anything the
converter's corpus sweep reads: `src/optics/prescription/`, `src/optics/lensDataConversion.ts` or `src/lens-data/`.

## Benchmark Verification

The optics/rendering benchmark command is intentionally opt-in:

```bash
npm run benchmark:optics-rendering
```

Use `npm run benchmark:optics-rendering -- --dry-run` when changing benchmark code and you only need to validate module
loading, schema construction, and default lens keys. Use `--report-only` after changing report formatting so the
Markdown report is regenerated from existing run JSON without creating another benchmark record.

`--heavy` runs seven representative expensive cells; `--memory` runs lens switches and control sweeps in a
single-commit child process with forced GC. Both write under `sessions/` rather than the full-matrix trend.
[Benchmarks](../benchmarks/README.md) describes the workloads and retention policy. Numerical refactors keep the
golden values, full suite and generated-report byte-diffs required by [Decisions](../decisions.md).
