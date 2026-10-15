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
  (`focusKeyframes.test.ts`), fixed-iris declarations that match their stated station f-numbers
  (`zoomApertureModel.test.ts`), `dPgF` stored against the engine's normal line
  (`partialDispersionLine.test.ts`), and shared-prescription parity across switchable configuration groups
  (`opticalConfigurationParity.test.ts`, which requires a contract entry for every `opticalConfiguration` group).
- The canonical prescription (`__tests__/src/optics/prescription/canonical.test.ts`): every catalog lens and
  teleconverter round-trips V1 → canonical → V1 view exactly, ingest neither writes to nor shares objects with its
  input, every schema default applies exactly where a file leaves the field out, the stop-radius authority matches
  what `buildLens` does on every catalog lens, and each spelling the canonical form holds as one and each refusal
  ingest makes has a synthetic case.
- V2 ingest (`__tests__/src/optics/prescription/ingestV2.test.ts`): one V1/V2 fixture pair per feature family
  (`ingestV2Fixtures.ts`), each sharing one prescription and semantic fingerprint, each of the 18 lens pairs building
  to the same harness build record and the converter pair giving the same V1 view; dispatch on `schema`; V2
  defaults; a case for each V2 refusal the plan's S2.P2.T1 lists. An offender-collecting sweep removes the
  authored `sd` of every catalog stop whose radius is derived or scheduled and requires every catalog lens's Tier P
  build and layout records to stay bit-identical.
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
- The glass-report helper library (`__tests__/reports/glassScanLib.test.ts`) and the glass-resolution parity sweep
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
- **Caches.** Every module-level `Map`, `WeakMap`, `Set` or `WeakSet` is registered as a constant lookup table, a
  bounded cache, or a `WeakMap` keyed by its owner whose per-owner value cannot grow without bound.

Each guard's lists are data at the top of the test, and come in two kinds:

- A **legacy list** holds the violations that exist today, and only shrinks. The guard fails for a violation that is
  not listed and for a listed entry that no longer violates, so a fix and the removal of its entry land together.
  Never add an entry; fix the code. The cycle guard has only this list.
- A **registry** holds the modules and containers that meet the rule by design. Add an entry only when it passes the
  guard's admission rule, which the guard checks:
  - Seam: a top-level `src/optics/*.ts` file that holds only imports, re-exports, type declarations and aliases of
    imported bindings. `src/optics/prescription/teleconverterCompatibility.ts` is the one permanent exception, because
    `scripts/generate-build-metadata.mjs` loads it by path under plain Node; the guard checks that the script still
    names the path and that the module still imports nothing at runtime.
  - Caches: a constant is never written by its module; a bounded cache records its owner, key and capacity, and
    names the module constant that holds the capacity; an owner-keyed `WeakMap` records its owner, its key and what
    one owner holds.

Moving an entry from a legacy list to its registry counts as a removal. The cache scan reads declarations: a legacy
entry is stale once its container is gone or is never written, and a legacy `WeakMap` once it no longer shows a `Map`
or `Set` per owner, in its own declaration or in the module type its record names as `storeType`. A cap shows in no
declaration, so bounding a legacy cache means moving its entry to the registry by hand, where the recorded capacity
is checked against the code. Each failure message names the entry and the list to change.

The guards read source text, not a syntax tree. The comment on each scan function in the test lists the forms it does
not see, such as an `import.meta.glob` pattern for the seam or a container nested in another value for caches.

## Reports and Tooling Tests

`npm run test` runs only product, data-contract, and build-pipeline tests. Two kinds of Vitest files stay out of it:

- **Report generators** in `reports/*.report.ts` rewrite the committed files under `agent_docs/generated/`. They use
  `import.meta.glob`, so they run under Vitest through `vitest.reports.config.js`: `npm run generate:reports` (all), or
  `generate:glass-reports`, `generate:mirror-reports`, `generate:mount-svgs`, or `npm run generate:reports -- <name>`.
  An invariant a report depends on belongs in the suite as its own test, not as an `expect` inside the generator.
- **Tooling tests** for manual-only dev tools (the benchmark harness, the engine differential harness and its driver,
  and the audit-script npm entries) are listed in `TOOLING_TESTS` in `vite.config.js` and run with
  `npm run test:tooling`. CI runs both suites in one job and calls Vitest directly for this one
  (`npx vitest run --config vitest.tooling.config.js`), so the metadata `npm run test` just generated is not generated
  again. Add a file there only when it guards a tool that neither the build nor the app uses.

## Engine Differential Harness

`src/benchmarks/engineDiff/` turns what the optics engine returns into normalized payload records and compares the
records of two engine revisions value by value. `scripts/engine-diff.mjs` drives it. The app does not import it. The
folder is self-contained: its files import only each other, so it can be copied into a checkout of another revision
and bundled there.

- `captureEntry.ts` is the entry the driver bundles once per revision. It exports that revision's catalog as
  serialized prescriptions (hosts and teleconverters apart, plus the permitted pairs), and it evaluates the serialized
  prescriptions it is handed, so one revision's data can run on the other's engine. It returns one record per
  request, each `{ lens, state, request, payload }`, with a `variant` as well where the request named one. A
  computation that throws is recorded as an outcome, never dropped. It answers which pairs its engine's fit predicate
  permits for a catalog it is handed, and which of some pairs its engine cannot compose and build. It also
  re-exports the comparison, which the driver calls from the built bundle.
- `seamAdapter.ts` is the only file that names engine modules. It reaches each through an eager `import.meta.glob`,
  which yields nothing for a file a revision lacks, and resolves every capability from an ordered list of candidate
  exports. A change that renames or moves a seam export adds the new name to that list in the same change. A few
  capabilities are optional, so a revision that lacks one still resolves its seam and reports the capability as
  `absent`. Canonical ingest, which the fingerprint needs, is one of them and is asked of the head's bundle alone. The
  catalog merge is another: each bundle merges a host as its own catalog does, by spreading its V1 defaults object at
  a ref before S2.P1.T2, and by ingest and the V1 view at a later one (`catalogLensData` in `captureEntry.ts`).
- `requests.ts` defines a tier as a deterministic list of lens × state × request family, and cuts a list into
  shards. The three tiers are described under "Tiers" below.
- `payload.ts` holds the encoding (JSON that round-trips under `Object.is`, with tags for -0, NaN, and the
  infinities), the digests that stand in for the per-ray traces and pupil bundles nested in perspective results
  (two hashes, the largest residual share and the largest effective tolerance, described under "Change Classes and
  Budgets"), and the semantic fingerprint: a hash of the canonical prescription the head's engine ingests a file to
  (`src/optics/prescription/`), with -0 as 0. A file the engine refuses gets a fingerprint of its refusal and data,
  so it reads as a semantic change. A payload that hands authored data back (the `data` and `elements` of a built
  lens, the composed prescription of a pair, the conjugate an MTF result reports) is written through
  `normalizeAuthoredData`, which applies the spellings the canonical prescription holds as one, so a respelling the
  fingerprint ignores does not change a record. A test holds each of its rules, and the projection of a build
  record's `elements`, to hiding nothing else: values other than the defaults, a conjugate off its station, a rear
  plate's and a read stop's `sd`, a `var` that holds a gap, and label pairs in the order given. The echo runs on
  both engines, so it restates the inline schema defaults in `ECHO_DEFAULTS`, which a test holds equal to
  `src/optics/prescription/defaults.ts`. An engine back-pointer is skipped by member name and leaves a marker in the
  payload.
- `budgets.ts` holds the quantity classes and the table that gives a numeric payload path one of them. A class says
  how two values are compared and how far they may differ under C1. The table's rows are path patterns, and the
  first row that matches decides.
- `compare.ts` pairs the records of two captures one lens at a time, judges each difference under the declared change
  class, and keeps totals, the largest difference per quantity and a bounded sample of findings. A lens with many
  records may be handed over in consecutive parts and is reported as one lens. It also sorts a catalog's changes into
  format-only and semantic, judges a semantic one path by path, sets the two engines' permitted pairs side by side,
  reads the declared exceptions and the declared transitions, and writes the reports.

The build record holds every field of the built lens. Each surface of `S` keeps every member the engine holds for it,
its inner radius, stop placement, interaction and diffractive phase among them, with a flat radius written as the
fingerprint's marker. The analysis record holds every job of the analysis context and, beside them, the readouts the
viewer computes outside it, each asked as its component asks: the working f-number, the chromatic tab's field-focus
summary, the diagram's LoCA readout with the bars of its inset, and the aspheric overlay's departure at a click.

The traces record holds, beside its fans, two near-axis probe rays on each tracer: a marginal ray 1e-4 mm off the
axis and a chief ray through the first vertex at a slope of 1e-4. The engine builds its pupil constants from two such
rays. When one of them fails, it takes another value and no payload says so: the paraxial ratio, the other tracer's
quotient or the constant of the infinity-focus build, and some of those are within rounding of the real one, where no
budget shows the switch. A probe that stops returning is a status instead.

- On the prepared tracer the probes are the engine's own rays. The launch is copied from
  `computeFieldGeometryAtState2` (`src/optics/field/chiefRay.ts`): the same origin, direction and `stopAt`. Each
  probe records its status, its failure reason and its height at the stop as the engine reads it, which is not a
  number once the trace has failed. That height over 1e-4 is the state geometry's `yRatio` or `b` bit for bit.
- On the RuntimeLens stack tracer the probes are not the engine's launches. Those are internal:
  `traceExactSurfaceStack` with `stopAt` or `skipLastTransfer`, in `src/optics/runtimeLens.ts` and
  `src/optics/pupilAberration.ts`, started at that tracer's inferred lead with the rim checks off. The seam reaches
  that tracer through `rayTrace.traceRay` alone, which fixes where a ray starts and which options it takes, and the
  architecture guard's seam lists take no new implementation module of the engine (`opticsArchitecture.test.ts`).
  - The probes there are the same two lines, started one ray lead ahead of the first vertex and run through every
    surface with the rim checks on. One trace crosses the surfaces the entrance-pupil rays cross and those the
    exit-pupil rays add.
  - Each records its clip flag, its failure reason and whether it returned: no failure, and a finite height and
    slope.
  - They show the stack tracer failing a near-axis ray. They do not show a basis ray that fails only from the
    engine's own start point, or only with the rim checks off. Off infinity focus the engine then takes the prepared
    tracer's quotients, which are within rounding of its own, and a run does not see the switch.
- Each tracer's two probes are an outcome of their own, `{ ok, value }` or `{ ok, error }`. The prepared launch reads
  a prepared state's members directly, so an engine change can make it throw on one engine. That fails as the
  outcome of those probes, and the record's rays and the other tracer's probes are still compared. A launch that
  throws alike on both engines compares equal, as a job that throws on both does: the tests hold the fixture lenses'
  probes to `ok`.
- A folded lens has no probe, and its record says `applicable: false`. The engine finds a folded lens's stop by
  scanning a generalized trace for a hit on it, with the rim checks off, and the seam lists that search for neither
  tracer.
- The probes are traced at the record's state. The build traces its own basis rays at the authored spacings and, for
  a zoom, at each station focused at infinity. Those stations are states of the first row of every tier: the first
  and last in Tier P, every one in Tiers S and F. A basis ray that fails at a middle station alone therefore first
  shows at a stage gate.

Three parts of `src/optics/` are outside the harness, and their unit suites cover them: diagram geometry in
`src/optics/diagram/` (`diagramGeometry.test.ts`, `elementRenderDiagnostics.test.ts`), the lens-movement transform
(`lensMovement.test.ts`) and the perspective diagram fan (`perspective/diagramFan.test.ts`).

### Tiers

A tier's list is built from the head's prescriptions and handed to both engines. Requests are grouped by lens,
lenses in code-unit order of their id, and a converter pair is a lens of its own, named `host+converter`. The pairs a
tier chooses from are every pair that either engine's fit predicate permits for those prescriptions.

- **Tier P**, the pull-request tier. Every catalog lens, hidden ones included, at the first and last zoom station,
  focused at infinity and wide open, is asked for build constants, layout, ray fans with full hits, field geometry,
  and chief-ray solves. The benchmark lenses and one representative per engine feature are asked for every analysis
  job and a small geometric MTF, at the default state and at the state that puts the feature to work. One
  representative is a converter pair. It is the only pair in the tier, so it is also asked for its composition and
  for the first row's requests at the default state. A lens named as changed is asked for the analysis jobs and MTF
  too, so a lens whose data moved goes through every request of the tier. A pair is changed when its host or its
  converter is: every permitted pair of a changed or new host or converter is asked what the representative pair is.
- **Tier S**, the stage tier, has three rows of its own and holds Tier P's second row whole. Its first row holds
  every request of Tier P's first, so every request of Tier P, of a changed lens or pair as well, is a request of
  Tier S.
  - Every catalog lens is asked for Tier P's first-row requests at every authored zoom × focus station, wide open
    and at one stopped-down aperture: the aperture-slider position of the rendering benchmark's stopped scenario. A
    lens with an aberration-control ring is asked at each end of the ring as well as at its corrected setting. Every
    permitted converter pair is asked the same at every station of its host, and for its composition.
  - A stratified part of the catalog is asked for every analysis job at its authored stations, wide open. It holds
    one lens per declared projection kind, every folded lens, every perspective-control lens, every diffractive and
    every absorbing lens, one lens per maker among those with rear plates, every converter pair, every lens Tier P
    analyses (the benchmark lenses and the feature representatives), and ten more drawn by a fixed seed from the
    lenses none of those names. "One per" is the first in key order. The draw scores each key by a seeded hash and
    takes the lowest scores, so a lens added to the catalog changes it only by scoring among the lowest itself. A
    perspective-control lens is analysed centered and in the rendering benchmark's moved pose.
  - The MTF benchmark's lenses are asked for MTF by each method at each spectrum, refined up to the grid the
    viewer's MTF tab opens with, at their authored stations. These six requests are the `mtf` family's variants.
  - Tier P's second row adds what the rows above leave out of it: each representative's feature state, and the
    small geometric MTF at the states Tier P asks it.
- **Tier F**, the full tier, is Tier S with its second row widened: every catalog lens and every pair is asked for
  every analysis job at every authored station, wide open and stopped down.

`shardRequests` cuts a list into `n` parts by lens: the lens ids are put in code-unit order and dealt out in turn, so
a lens's records never straddle two shards, the shards share no lens, and together they hold the list.

### What a Run Compares

A run takes a base ref and the working tree, which is the head. Nothing is skipped silently.

1. **Engine drift.** Every head prescription is evaluated on the base engine and on the head engine, and the two
   sets of records are compared under the change class. Two outcomes that no number of a record would show are in
   it as discrete fields: what happened inside each trace nested in an analysis result, as the outcome hash of its
   digest, and whether two near-axis rays returned on each tracer, as the probes of the traces record. On the
   prepared tracer those are the engine's own basis rays; on the stack tracer they are the same two lines launched
   as that tracer's public entry launches a ray.
2. **Format-only data change.** A lens whose serialized prescription differs from the base's while its semantic
   fingerprint does not: the base and head prescriptions are evaluated on the head engine and must be bit-identical
   in every class. Prescriptions are compared as evaluated data, so an edit to comments or layout is no change.
3. **Semantic data change or new lens.** The same pair becomes an impact report, written to `data-impact.md`. A
   changed lens is judged path by path (`judgeDataChange` in `compare.ts`). It blocks only on these, each at a path
   both sides have:
   - A status that is no failure on the base data and a failure on the head data. A status is a string the engine
     wrote in a member named `status`, and a failure is a status that says `failed`. The engine writes three:
     `failed` for a traced ray, `bracket-failed` for a chief-ray solve, and `evaluation-failed` for a root solve or
     a sensor lock. Every other status is an outcome a prescription can move between, and a change to one is listed
     and does not block: `clipped`, `missed-sensor`, `chief-unreachable`, `unbracketed`, `iteration-limit`,
     `paraxial-fallback`, `unconverged`, `unavailable` and the out-of-domain statuses.
     - A ray's change to `failed` does not block when its own head-data `diagnostics.clipEvents` show a clip
       whose reason is not `intersection-failure` before the intersection failure. The events give path order;
       surface indexes need not increase on a folded path. Once clipped, a ray carries no result, so a later
       intersection failure is a continuation diagnostic. This applies to every full-hit fan of a traces record:
       `onAxis`, `offAxis`, `skew`, and each channel of `chromatic.rays` (B, V, R).
     - A failure that is the first clip event, or lacks clip events to prove the order, still blocks. Nested
       trace digests and near-axis probes carry no clip events; the legacy fan has no status. Chief-ray solves,
       root solves and sensor locks (`bracket-failed`, `evaluation-failed`) are unchanged. The base status need
       only be no failure, so `clipped` to `failed` without ordered evidence and `unbracketed` to
       `evaluation-failed` still block. The report marks failures after the ray's first clip as non-blocking.
   - A number the engine computed that is finite on the base data and not on the head data.
   - An outcome that is true on the base data and false on the head data. An outcome is a boolean in a member named
     `ok`: that of the record itself, of an analysis job and of a tracer's near-axis probes, each of which returned
     and now throws. A lens that no longer builds shows as every one of its records doing so. The fit predicate's
     answer in a composition record is such a member too. The composer applies that predicate, so a pair it
     refuses throws as its record does.

   What the prescription hands back is no part of the rule: a status or a non-finite number at a path the budget
   table marks as authored. The `status` of a source erratum says `corrected` or `unresolved` of the source, and
   the focal length of a plane element was authored as infinite.

   What only one side has at a path is counted and blocks nothing, the failures in it too. On the head side it is
   work the base data never did: a sample that missed the sensor and is usable now has its rays traced for the
   first time, and a ray that fails among them is no regression. On the base side it is work no longer done. Where
   that work stopped because a solve above it failed, the solve's status is at a path both sides have and blocks by
   the first rule. A perspective sample's own status is never a failure: one that stopped being usable says
   `missed-sensor`, `clipped` or `chief-unreachable`, so the work lost under it blocks nothing, and the report
   lists the change.
   - **Paths.** An array that changed length is paired by index: its first elements are at paths both sides have,
     and the rest are the longer side's alone. So a status that turned to a failure in a fan that also grew at its
     end blocks, whatever happened to the record's count of failed statuses. A member one side lacks, a value that
     is a container on one side only, and a status or a number set against a value of another type, `null` among
     them, are one side's alone.
     - Pairing by index sets the same things side by side only where the longer side's extra elements are at its
       end. Where an element was put in or taken out ahead of others, an index holds two different things: a status
       that turned to a failure can count as the longer side's alone and pass, and one that did not can block. The
       verdict stands as the paths give it. The report counts, for each lens, the arrays that changed length and
       hold what the rule reads (a status, an outcome or a computed number that is not finite), and lists the first
       ten with their paths and lengths, for a reader to check the pairing.
   - **Digests.** The digest of a nested trace is an object at a path both sides have, and its members are read
     like any others. Its `status` is a status. Its hit count, largest residual share and largest effective
     tolerance are numbers, so a share that turned infinite blocks. Its `hash` and `outcome` are neither: a change
     inside the trace that the other members do not show is a difference to review. A ray that fails inside a pupil
     bundle, whose digest has no status, is therefore outside the rule.
   - **Report.** `data-impact.md` gives for each changed lens:
     - every blocker with its whole path and its two values, each value on one line and cut at 80 characters, the
       first ten of each of the three kinds, under the count of all of them;
     - how many statuses turned to a failure and from one, including a separate count of failures after a ray's
       first clip within the total turned to a failure, how many numbers turned non-finite and finite, and how
       many outcomes turned to a throw and from one;
     - the statuses, the failures among them and the computed non-finite numbers at paths only the head data has,
       and the same at paths only the base data has;
     - the arrays paired by index, as under "Paths";
     - every status change as `base -> head` with the number of paths that show it and whether it blocks, `absent`
       standing for a side with no status there. Failures after the ray's first clip have their own row with a
       non-blocking gate and its reason; for a change with both kinds of path, the rows sum to its total. A run
       keeps the first 64 distinct changes of a lens and counts the rest together, separating these gates there too.
       `summary.json` keeps the same totals in `paths.statuses.toFailure` and `paths.statusChanges`, with the
       non-blocking subsets in `paths.statuses.afterFirstClip` and `paths.statusChangesAfterFirstClip`.

     `summary.md` has one row of those counts per changed lens, the blocked lenses first and at most 40 of them,
     and the first 40 blockers of the run with their paths. The verdict reads the counts, and no list: a list that
     is cut never passes a change.
   - **New lenses.** A new lens has no base data and blocks only by not building. With no path to pair, the failed
     statuses and computed non-finite numbers in its records gate nothing: the report gives both counts for each of
     its records, for review.
   - **Teleconverters.** A teleconverter is no lens of a run: a changed or new one is compared through the pairs it
     forms, and the report lists it with them.
4. **Uncompared lenses.** A lens the base engine cannot build is not compared. The uncompared lenses must be exactly
   the declared exceptions: one bullet per lens, its id in backticks, under a heading `## Engine-diff exceptions` in
   the pull request description. A converter pair is named `host+converter`.
5. **Records that throw on both engines.** The harness runs on both sides, so a defect in a capture throws alike on
   both, and two equal failures would otherwise pass as a comparison. Each such record of a compared lens fails the
   run in every class. The exception is a lens that builds on neither engine and whose data is new, or changed from
   a prescription that built: rule 3 blocks that one. A job that throws inside an analysis record, such as a section
   that is unavailable while the lens is moved, is an outcome of the job and is compared like any other value.
6. **Converter pairs.** The fit predicate is engine code. Both engines are asked which pairs they permit for the
   head's prescriptions, and a difference fails the run and names the pairs, under every class but C3, which reports
   it. Requests are built from the pairs either engine permits, so a pair one engine lost is still asked of both and
   that engine throws on it.
   - A pair is set aside from that comparison exactly when the base engine cannot compose and build it from the
     head's prescriptions while the head engine can. Each engine is asked for the build record of every pair either
     predicate permits, once, before any lens is captured, and asking never ends the run. The answer is the pair's
     own: a host that does not build alone is an uncompared lens by rule 4 and says nothing of its pairs, and a pair
     that does not build says nothing of its converter's other pairs.
   - A pair set aside is an uncompared lens, and that one answer stands everywhere: in the pair comparison, in a run
     that meets the pair, and in a narrowed run or a shard that does not. It is listed with the uncompared lenses in
     every run of the tier and held to the declared exceptions as rule 4 holds a lens, so one list of exceptions
     holds for all of them.
   - A pair both engines build and only one predicate permits is still a difference between the engines. The
     engine's composer applies the fit predicate, so a pair that the base engine's predicate refuses is one the base
     engine cannot compose: a pair only the head engine permits is set aside and has to be declared, and a pair
     only the base engine permits fails as a pair the head engine lost.
   - The head engine is asked about the base's prescriptions as well, and a pair the data gained or lost is listed
     in `data-impact.md`. A pair that only the head's prescriptions permit is compared as a new lens: it has
     nothing to compare against on the base data, so it blocks only by not building, and the report counts what
     its records hold as it does for a new lens.
   - A pair the head's prescriptions no longer permit is not requested and does not block. Rule 3 gates a data
     change only on a status that turned to a failure, a number that turned non-finite or a lens that no longer
     builds, and a converter that fits nothing is none of these. A changed host or converter that lost every pair
     it had with the base data is therefore named in a warning, with the pairs it lost: among the failure lines at
     the top of `summary.md`, and on stderr. Nothing in the run evaluated such a converter, and the run does not
     fail on it.

### Change Classes and Budgets

- **C0** (the default): every number bit-identical under `Object.is` and every other field equal. The encoded
  records are compared as text, and only a pair that differs is walked to find where. A C0 change declares no
  transition: a description that declares one fails the run.
- **C1 and C2**: each number within its class's budget. A status, count, label, sample position, a missing member or
  a changed array length is a discrete transition. Every one is listed, and fails the run unless the pull request
  declares its unit (see "Declared Transitions"). C2 uses the C1 budgets: the C2 criteria of the quantity table in
  `OPTICS_ENGINE_REWRITE_SPEC.md` carry a solver tolerance through a derivative, which two payloads cannot supply.
- **C3**: engine drift is reported and does not fail, and declared transitions are matched and reported. Rules 2, 4
  and 5 above still fail.

The classes in `budgets.ts`:

- The rows of that quantity table keep its values: unclipped hits and image-plane landings 1e-9 mm, clipped,
  exterior or diagnostic hits 1e-7 mm (or 1e-12 of the point's own size where that is more, which it is beyond 100 m
  from the lens, where a ghost path that has left the lens puts its points), direction cosines 1e-10, first-order
  scalars 1e-12 relative, chief-ray launch heights 1e-9 mm, field angles from an image height 1e-10°, analysis
  lengths 1e-8 mm (or 1e-10 of the length's own size where that is more, which it is beyond 100 mm, where nearly
  parallel rays cross), percentages 1e-8 points, MTF modulation 1e-7, the weighted bin statistics of a bokeh
  profile 1e-10 relative, and a ratio of two analysis lengths 1e-8 relative.
- A hit's coordinates, and a ray's terminal values, are budgeted as unclipped only when the clip flag or status
  beside them says so on both sides. A flag that differs is a transition of its own.
- After a legacy fan ray's first missed surface, its substitute ghost points and the clipped `y` projected from
  them have the `legacyMissTail` class: presence, count and finiteness only above C0. The comparator reads the first
  `intersection-failure` in each ray's `diagnostics.clipEvents`, without another trace or an added record member.
  On both sides, a ghost qualifies when its hit-position lower bound `pts.length - 1 + ghostIndex` is at or after
  the first miss's position in `diagnostics.hitSurfaceIndexes`. `rayTrace.ts` adds the launch point, appends hits in
  order, and drops non-finite drawn points while the stack diagnostics retain every hit index; dropped points can
  only move a ghost later in the hit list, so the lower bound remains safe without complete alignment.
  The `y` exemption requires both rays to be clipped and both to have an intersection failure. A rim clip alone
  does not qualify. Earlier ghosts, `pts`, `u`, diagnostics, failure and clip reasons keep their existing rules.
  C0 stays bit-exact. These off-ray substitutes are unused by the app's prepared tracer fans, which stop at a miss,
  and the legacy tracer is removed in Stage 4. This is S3.P2.T1's deferred Tier S settlement.
- A relative budget is `|a − b| ≤ budget · max(|a|, |b|)`, and no less than the class's floor where it has one. A
  floor is an absolute bound in the class's unit.
  - A class whose values may be zero has one: a first-order length, a layout length and a best-fit radius are
    never held tighter than 1e-12 mm, and a smooth ratio, which is a fraction, than 1e-10.
  - So has a class whose budget is an absolute one and can be a share of the value only far from the lens. The
    floor is its whole budget up to the size where the share is more: 1e-7 mm up to 100 m for a clipped or
    diagnostic point, 1e-8 mm up to 100 mm for an analysis length. A report gives the measure of such a class as
    a share, of the value or of that size for a smaller one, against the relative budget: for an analysis length
    under 100 mm it is the distance in mm over 100, against 1e-10.
  - A class whose fields are no lengths and never near zero has no floor and is plainly relative, so only zero
    agrees with zero: refractive indices, and the f-numbers, ray-height ratios, Petzval sum and drawing scales.
    So are a weighted bin statistic and a ratio of two analysis lengths, which are zero only where they are
    exactly zero on both sides: an empty bin, a footprint with no rays. A prescription the engine hands back is
    plainly relative too: its values have no one unit, and an asphere coefficient is far smaller than any floor
    of a length.
- An analysis length is held to 1e-8 mm, and to 1e-10 of its own size where that is more, which it is beyond
  100 mm. Under C0 it is bit-exact, as every number is.
  - A focus position, an axial intercept or a traced pupil position is where two rays cross, or where one crosses
    the axis: a height over a slope. Where the rays are nearly parallel the slope is small and the crossing is far
    from the lens, and rounding that moves the slope by some part of itself moves the crossing by the same part of
    its distance. No absolute bound holds such a length. An off-axis ray that leaves a teleconverter pair nearly
    parallel to the axis crosses it 23 m away, and the traced exit pupil of a near-telecentric field is 44 m away:
    a change that moved no hit by more than 1.2e-11 mm moved those by 5.7e-8 mm and 5e-7 mm, 2.5e-12 and 1.1e-11
    of themselves. It is the far point of the clipped-hit row again, for a length an analysis reports.
  - The share reaches some hundreds of metres and no farther. Rounding moves a slope by an amount that does not
    depend on where the ray crosses, so a crossing z = −y/u moves by z²·δu/y: by the square of its distance, and
    by a share of its distance that grows with the distance. On the two lenses that failed, S3.P2.T2 moved the
    traced exit pupils and the fan's crossings by up to 7.3e-16 mm per mm² of distance: the 44 m one by 2.6e-16
    and the 23 m one by 1.1e-16. A fixed 1e-10 of the distance holds that rounding out to 136 m, 388 m and 900 m.
    The engine reports crossings far beyond that, since a traced exit pupil needs only an exit slope over 1e-9. A
    crossing past that reach that fails by a few times its budget, on a step that moved hits by rounding alone, is
    this limit and no regression, and it is the plan's to settle. The tests hold the limit: the 44 m sample put
    ten times as far out, with the same rounding of its slope, fails at 1.14 times its budget.
  - The size is the length's own, in mm. A member that restates a length in another unit is divided by the scale
    of its row before it is compared, its value as well as the difference: 1000 for a micrometre twin, 201 px per
    mm for a bar of the LoCA inset. The floor ends at 100 mm of length whichever unit holds it, and the bound is
    one physical bound. A bar of the inset never reaches that length: the engine clamps it to half the inset's
    width, some 0.2 mm of shift, so its bound is always the floor.
  - The rule goes by the value of a member that is a crossing of rays, or a shift, a span or the largest of such
    crossings. A position along the axis is counted from the first vertex, so the focus positions and axial
    intercepts of a lens more than 100 mm long are past the floor by their coordinate alone: at 250 mm the bound
    is 2.5e-8 mm. No row tells those from a crossing that is far, because one member holds both. Most have a twin
    in the same record that keeps the floor, the shift of the same focus from the image plane.
  - A member that reaches 100 mm and is no crossing takes no share. The Petzval focus position of a field,
    `petzvalBestFocusZ`, is the one such member, and has a class of its own at a plain 1e-8 mm. It is the image
    plane's z plus the sag of the Petzval sphere at the chief ray's image height: 256 mm from the first vertex on
    a long lens, with no small slope under it. A new member of that kind needs a row of its own ahead of the rows
    by name, which would hand it the share for its name alone.
  - Tangential parabasal foci and their shifts, differences and spans use `tangentialParabasalFocus`: a
    1e-7 mm floor, and the same 1e-10 share of each value's own size above 1 m. Nearly parallel parabasal rays
    amplify last-surface height and slope rounding by about 1/|dU|, roughly 100 times the focal length in mm.
    On lenses from 800 mm up the anchor itself misses an exact crossing by up to 2.28e-8 mm. This is
    S3.P2.T1's deferred Tier S settlement, scoped by job ahead of both generic analysis-length rows:
    - `computeFieldCurvature` and `computeFieldCurvatureBundle.{fieldCurvature,chromaticFieldCurvature}`:
      `{fields,curveFields}[].{tangentialBestFocusZ,tangentialShiftMm,astigmaticDifferenceMm,astigmaticDifferenceUm}`,
      their `chromaticFieldShifts[].tangentialShiftMm`, and
      `{maxAstigmaticDifferenceMm,maxAstigmaticDifferenceUm,edgeTangentialShiftMm,sharedFocusShiftHalfRangeMm,chromaticFocusSpreadMm}`.
    - `chromaticFieldFocusSummary`: `fields[].tangential.{minShiftMm,maxShiftMm,spreadMm,spreadUm}`,
      `fields[].{maxFocusSpreadMm,maxFocusSpreadUm}` and
      `{maxTangentialSpreadMm,maxFocusSpreadMm,edgeFocusSpreadMm}`.
    Micrometre twins use scale 1000 for the same physical bound. Sagittal, full-fan diagnostic and Petzval
    members keep their existing classes. `computePerspectiveFieldAberrations` is a different computation and
    is excluded. C0 stays bit-exact.
  - The MTF best-focus shift is a solver's output of a fraction of a millimetre, and keeps a plain 1e-8 mm.
- The exit pupil that a pupil-aberration profile gives for each field is an analysis length: `xpZRelLastSurf` in
  the `samples[]` of a profile, which is `xp.samples[]` of `computeBothPupilAberrationProfiles`. The engine traces
  the solved chief ray of that field through the lens and puts the pupil where the ray crosses the axis, its
  height at the last surface over its slope there. `xpShiftMm` beside it is the same crossing less the paraxial
  position.
  - The row goes by the sample and not by the job. In an analysis result the engine gives that name to nothing
    but a field's traced position, and the exit-pupil profile computed alone, which no job captures today, holds
    the same samples with no `xp` above them.
  - The paraxial pupil positions stay first-order scalars: `paraxialXpZRelLastSurf` and `paraxialEpZRelStop` of the
    same record, the `intrinsic` pupils of the posed lens, and the build's pupil constants. A member named
    `xpZRelLastSurf` anywhere but in a profile's samples is taken as paraxial.
  - The sample on the axis, and one whose chief ray gives no crossing, repeat the profile's paraxial position.
    The first-order row holds that position beside the samples.
  - Nothing else in a sample moved. Its `fieldFrac` is a sample position, exact, and its `fieldDeg` a fraction of
    the analysis half-field. A sample of the entrance-pupil profile holds no position: its `chiefRayCorrection`
    is a smooth ratio and its `epShiftMm` an analysis length.
- NaN and the infinities are compared with `Object.is` in every class.
- An intersection residual is not differenced. Each side must lie within the effective tolerance recorded with it.
- The effective tolerance itself is held to 1e-12 relative, with no floor. It is the engine's 1e-12 mm target
  except at a stalled root, where it is a computed float: the larger of that target and a roundoff envelope over
  the ray's operands, whose last bits move when arithmetic is reordered. Under C0 it is bit-exact, as every number
  is. A relaxed tolerance, twice the target or more, is far outside the budget and fails.
  - Which of the two a hit was accepted under is a branch of the root finder. A tolerance that is the raw target on
    one side and anything else on the other is therefore a discrete transition and not a number beyond budget: the
    hit stalled on one engine and converged on the other, each residual still held to its own tolerance, or the
    tolerance was relaxed from the target. `budgets.ts` keeps a copy of the engine's `INTERSECTION_TOLERANCE` for
    this, and the tests hold the copy to the constant.
- What a solve reports of its own convergence is the same kind of contract check: each side must lie within the
  tolerance the solve accepts a residual under, and the two sides are not differenced.
  - The posed chief-ray solve's residual is held to 1e-7 mm: `DEFAULT_RESIDUAL_TOLERANCE_MM` in
    `src/optics/perspective/chiefRay.ts`, which the solve hands to `solveScalarRoot` as its residual tolerance.
  - The stop residual beside that solve is the same miss measured in the stop plane, larger by one over the cosine
    of the field angle, and no tolerance of the engine's names it. It is held to a bound of its own, 1e-6 mm on each
    side: ten times the solve's tolerance, which covers that growth for fields up to 84°. A report gives the field's
    share of that bound. It also answers through the residual its solve accepted, and fails where that one is
    outside the solve's tolerance.
  - The sensor lock's residual, both components of its miss on the sensor and the scalar root's own, is held to
    1e-5 mm: `SENSOR_LOCK_RESIDUAL_TOLERANCE_MM` in `src/optics/perspective/sensorTarget.ts`.
  - A solve accepted its residual only where its status says `converged`. One that ended any other way returned
    the miss of its nearest sample, which is a diagnostic and takes the clipped-hit budget, 1e-7 mm.
- Slopes are compared as direction cosines.
- Counts, indices, sample positions, request echoes and count ratios are exact.
- The statistics of a bokeh footprint's radial profile go by what the footprint's rays weigh: a bin's `density`
  and `energyFraction`, the profile's `centerDensity` and `rimDensity`, and the footprint's `centerToRimRatio`. A
  footprint weighs each ray by its transmission and sums the weights into the bins, and its record holds the
  weights beside the profile, as `points[].weight`.
  - Where every point of a footprint has one and the same weight, on both sides, the statistics are functions of
    the counts in the bins and stay exact as count ratios. That is every lens with no absorbing element. A
    difference is a ray that changed bin: a discrete transition, declared like any other.
  - Where the weights differ, within a side or between the two, the statistics are sums of transmissions through
    an absorbing element, whose last bits move when a hit moves inside its tolerance. They are held to 1e-10
    relative, with no floor. The weights are never negative, so nothing cancels in a sum of them: a faint bin
    moves by no more of itself than a full one, and a bin that is zero on one side alone has gained a ray. Under
    C0 they are bit-exact, as every number is.
  - A ray that changes bin in such a footprint moves a share by its whole weight. It fails as a number beyond
    budget, which no transition line declares: that is the limit of this rule.
  - A profile with no points beside it does not say what its rays weigh, and is held as a weighted one.
  - The blur character of spherical aberration (`computeSphericalAberrationBlurCharacter`) fills the same kind of
    profile with rays of one weight: the engine multiplies no transmission into it, and its record holds no
    points. Its statistics are functions of counts on every lens, and the table keeps them exact as count ratios
    by the job's name. The tests hold that to the engine: with the absorption taken out of an absorbing lens's
    prescription, its blur character is the same to the bit.
- A ratio of two analysis lengths is held to 1e-8 relative, with no floor: `tailSkewRatio`, the longer extent of a
  spot from its centroid over the shorter, and `sagittalToTangentialRatio`, one span of a spot over the other.
  - Each length is allowed 1e-8 mm and a sharp spot is some thousandths of a millimetre across, so the 1e-10 of a
    fraction cannot hold such a ratio: rounding that moves an extent by 1e-13 mm moves it by 1e-10 of itself.
  - 1e-8 relative is a fixed bound. For a spot under a millimetre across it is far tighter than the one the
    lengths' own budget implies. A spot may be tens of millimetres across, and there the lengths' own rows are the
    tighter ones: the spans, and the offsets and centroid the extents are taken from, are in the same record as
    analysis lengths.
  - A pupil footprint's `catEyeAspect` and `shiftRadius` are measured in fractions of the pupil and stay smooth
    ratios.
- Two smooth ratios are held tighter than their parts imply, and the ratio of two analysis lengths does not name
  them. A failure on either alone may be rounding inside the budgets of its lengths, and loosening either is the
  plan's to settle.
  - `chiefRayCorrection` is a solved chief-ray launch height over the paraxial one. Its 1e-10 is less than the
    launch height's own 1e-9 mm implies wherever the paraxial height is under 10 mm: at the 0.23 mm of a wide
    lens's innermost sample that is 4e-9 of the ratio.
  - `mag` of the LoCA inset is a ratio of two drawing scales. Where the bars are clamped to the inset it is a
    constant over the largest focus shift, and 1e-10 of it is 3e-11 mm of a 0.3 mm shift, against the 1e-8 mm of
    an analysis length.
- Layout lengths, refractive indices, the scalars that are no lengths and a prescription handed back take the
  first-order relative budget. Smooth ratios take 1e-10.
- The pupil positions and sizes the engine builds from its two near-axis rays keep 1e-12 relative, or 1e-10 of
  the compared member's own size when the pupil is more than 100 mm from the lens, whichever is more, with no
  absolute floor. A position's distance is its own magnitude; a size reads its pupil's sibling position at the
  same zoom station (`EP.epSD` reads `epZRelStop`, `xpSD` reads `xpZRelLastSurf`, and `zoomXpSDs[]` reads
  `zoomXpZRelLastSurfs[]`), taking the larger distance of the two sides. `zoomEPs[]`, the nominal entrance-pupil
  radius (focal length over twice the f-number), is no crossing and stays a first-order scalar. Under C0 all remain bit-exact. The budget is not divided by the 1e-4 of those rays: both rays' slopes
  scale with it, and the quotient removes it. What no budget shows is a basis ray that failed, and the probes of the traces record show that. The exit pupil a
  pupil-aberration profile traces for one field is no such constant, and is an analysis length.
- The output of a fixed-step bisection or a bracketed search is held to the quantity table's row for its kind: a
  half-field is a field angle (1e-10°), the MTF best-focus shift an analysis length under 100 mm (1e-8 mm), and
  the best-fit sphere radius takes the first-order relative budget. Such an output moves by a whole step of its
  solver when one comparison inside the solver falls the other way. The class records that step, the solver's
  quantum, for the report alone: when such a field fails, `summary.md` names the solver and its quantum and gives
  the difference in quanta, so a boundary transition (about a whole quantum) can be told from drift (a small part
  of one).
- Solver iteration and evaluation counts are exact under C0. Above it a change is reported as a histogram.
- A trace nested in an analysis result is in the record as a digest of six members: its status, its hit count, a
  hash, an outcome hash, its largest residual share and its largest effective tolerance. So are a posed pair of
  traces and a pupil bundle, which has no status of its own. Under C0 each member is compared like any field, so a
  changed hash fails. Above C0 the rule is "contract and flags only":
  - The status and the hit count are exact.
  - The outcome hash is exact, below C3. It is a hash of the same content with every budgeted number masked, so it
    changes exactly when something discrete does: a flag, a status, a reason or a label; a count, a surface index or
    the pupil position of a bundle's sample; a value that became or stopped being NaN, infinite or null; a member
    that came or went; an array that changed length. A difference is a discrete transition at the digest's
    `outcome`. It says that something discrete changed inside the trace and not what, since no record holds the
    content.
  - The largest residual share is a contract check: the largest |residual| / effective tolerance of any hit inside,
    each hit against its own tolerance, and null when no hit carries both. Where the two sides differ, the head's
    value must be at most 1.
    - A finite breach the base alone carries is not one the change made, and does not fail. That is less than is
      asked of a hit the comparison can read, whose residual is held on both sides.
    - An infinite share, from a residual that is not finite or has no positive tolerance to meet, is compared
      exactly on either side, as every non-finite value is. A share on one side against none on the other is a
      discrete difference. Each of those changes the outcome as well.
  - The largest effective tolerance of any hit inside is held as the tolerance of a hit in a full trace is: 1e-12
    relative, and a discrete transition where one side is the raw target and the other is not. It is null when no
    hit carries a tolerance. A share is of the tolerance its own hit recorded, and the outcome masks that tolerance
    as a budgeted number, so without this member a head could meet its contract by relaxing it.
  - A hash that changed while those hold is counted and does not fail. How far the coordinates, directions and
    other numbers inside the trace moved is held to no budget: that is the accepted limit of the rule. One number
    stands for every hit of a carrier, so the limit takes in an effective tolerance that moved, or was relaxed,
    below the largest in its trace or bundle; the base has to hold a stalled hit there already. A C1 or C2 run in
    which a digest changed says so where it cannot be missed. `summary.md` opens with a "Not budgeted" section that
    says what was judged and what was not, counts the changed digests per record family and names the lenses, and
    the driver prints a warning to stderr.
  - The numbers the outcome keeps are listed in `payload.ts` by member name, because the budget table is keyed by a
    record's path and a digest's content has none. The tests hold that list to the table's exact rows in both
    directions.

A class is required of a number only above C0, and only where it differs. Under C1 or C2 a number that moves and has
no class fails the run, and `summary.md` lists its path under "Numbers with no quantity class". Under C0 no budget is
read: a number with no class is compared bit for bit like any other, and a difference in one fails as any C0
difference does; the report lists it under that same heading. Nothing holds the table to every path a payload has, so
a new payload member needs its row when a C1 or C2 run first finds it moved, and not before.

### Declared Transitions

Above C0 a discrete or shape difference of the engine comparison fails the run unless the pull request declares it,
and a declaration that is not what the run found fails it too. The declarations are bullets under a heading
`## Engine-diff transitions` in the pull request description, beside the exceptions. The driver reads both headings
from the one file it is given as `--exceptions`.

- **Unit.** A difference belongs to the unit its path names through its first array index, with any index directly
  behind it: one ray of a fan, one solve, one field sample. `offAxis.rays[4].hits.columns.clipped[7]` is in
  `offAxis.rays[4]`, and a member under `grid.rows[2][5]` in `grid.rows[2][5]`. A path with no index is its own unit.
- **Line.** One bullet declares one unit of one record:

  ```text
  - `<lens id>` `<state id>` `<request>` `<path>`: `<base>` -> `<head>`; digest `<digest>`[, numbers]. <reason>
  ```

  - The request is the record's family, followed by its variant where it has one: `traces`, `mtf geometric/cdf`.
  - The path and the two values are those of one discrete or shape difference of the unit. The harness chooses it,
    so two runs name the same one: the unit's `status` where that changed, and otherwise the first difference in
    code-unit order of the paths.
  - A value is written as JSON, or as `absent`, `object` or `array of N`. A number set against a value of another
    type is written `number`, so its digits are no part of the line, and a backtick is written `\u0060`.
  - The digest is the first 12 hex digits of the SHA-256 of every discrete and shape difference of the unit, each as
    its path, kind and two values, in path order and with none left out. One more flag flipped in the ray gives
    another digest. The differences of the hits both sides have behind a hit column that changed length are among
    them (see "Common hits").
  - `numbers` is optional and is described below.
  - The reason is the rest of the line: why this transition is expected.

  Every bullet under the heading is a declaration. One that does not read as such a line, or that has no reason,
  stops the run with a message that quotes it.
- **Where the lines come from.** A run above C0 writes `transitions.md` in its `reports` folder. Its first section
  is the line of every unit that a line could declare and none matches, without a reason, under the heading.
  `summary.md` shows the first 40. The author pastes them into the description, writes a reason after each full
  stop, and runs the job again. The file says how many characters the lines take: a pull request description holds
  65,536, and the driver warns when the lines alone are more.
- **What a line excuses.** The discrete and shape differences of its unit, when the line names the difference the
  harness names and carries the digest the run computes.
  - With `numbers` it also excuses, in that unit alone, a number beyond budget in a field of a traced ray that has
    no counterpart once the ray ends on another surface or stops: `terminalPoint`, `terminalDirection`,
    `imagePoint`, `x`, `y`, `ux` and `uy`; the medium the ray ended in (`finalMedium`, on the ray and in its
    `diagnostics`); and the stack tracer's `pts`, `ghostPts`, `y`, `u` and `transmission`.
  - `numbers` is honoured only where the unit's own discrete and shape differences show that the ray did end
    elsewhere (`ENDED_ELSEWHERE` in `compare.ts`): its `status`, `clipped`, `failureReason`, `reachedImagePlane`,
    `terminalSurfaceIndex` or `returnVertexIndex`; its hit count, or a hit's surface index or clip, fallback or
    failure flag; the stack tracer's `pts` or `ghostPts` changing length; the same members of its `diagnostics`,
    its `hitSurfaceIndexes` and anything of its `clipEvents`. A unit in which only a label, a tolerance, an input
    or the presence of a hit column differs keeps every number on its budget, with `numbers` or without, and the
    line a run writes for it does not say `numbers`.
  - `numbers` permits and does not assert: a line that says it is as good where no number is beyond budget, so one
    line holds for a pull-request run and for a stage run with another base.
  - A line never excuses a number in any other field, an aggregate the transition moved, a non-finite mismatch, a
    number with no class, or a residual outside its tolerance.
- **Common hits.** The paired walk reports a hit column that changed length once and does not enter it. In every
  unit with such a column, the hits both sides still have are compared as in a ray that kept its length: the rows
  from the first, for as long as both sides' `surfaceIndex` columns name the same surface. A discrete difference of
  one, a clip flag for instance, is a difference of the unit and is in its digest. A coordinate, radius or direction
  cosine beyond its budget, a residual outside its tolerance on either side, a non-finite mismatch or a number with
  no class is what no line excuses. Past the first row where the two sides name different surfaces nothing is
  paired, because a row there holds two different hits.
- **The head side of a unit.** A hit the head engine gained is paired with nothing, and a solve that now converges
  sets its residual against the null of one that did not. So the head side of every unit that holds a discrete or
  shape difference answers alone. Each hit's residual must lie within the effective tolerance recorded beside it.
  Each residual of a solve whose head status is `converged` must lie within its class's tolerance: the posed
  chief-ray solve's, the stop residual beside it, and the sensor lock's scalar root and both components of its miss.
  Every other number must be finite unless the base side holds the same non-finite value at the same place.
- **What no line excuses.** A unit that fails the common-hits or the head-side check cannot be declared. The run
  writes no line for it, since the next run could only refuse that line. It lists the unit with the first thing it
  found, in `summary.md` and in `transitions.md` under "Units that no line can declare", and a line declared for
  such a unit is refused with the same sentence. The unit's differences fail.
- **What cannot be declared.** A record or an analysis job that starts or stops throwing, which is its `ok` and the
  `value` and `error` that come and go with it; and any discrete or shape difference in a build, composition or
  layout record. These fail under C1 and C2 whatever is declared, and a run writes no line for them.
- **Both directions.** A C1 or C2 run fails on each of these:
  - a discrete or shape difference in a unit that no line declares;
  - a line whose named difference or digest is not what the run found in its unit;
  - a line for a unit in which the run found no discrete or shape difference, in a record it compared;
  - a line for a unit that holds what no line excuses, a line for what cannot be declared, and a line for a lens
    the base engine could not evaluate;
  - a line whose lens id is neither in the head catalog nor a requested converter pair.

  A line for a record the run did not ask for is listed as not judged and fails nothing: a lens of another shard,
  a lens a narrowed run left out, or a state or request the tier does not hold.
- **Classes.** A description with any line fails a C0 run, and no line is matched. Under C3 the lines are matched
  and reported and gate nothing, like the rest of the engine comparison.
- **The engine comparison only.** A line excuses nothing in the format-only comparison, in the data-impact report,
  for a record that throws on both engines, or in the pair lists.
- **What a matched line covers.** `transitions.md` lists, for each matched line, every difference its digest
  covers, as path, kind and the two values, so a reviewer of the one difference a line names can read what else it
  vouches for. A run keeps the first 200 of a line's differences and says how many there are. `summary.md` gives
  the counts and points there.
- **Bounded memory.** A run holds the discrete and shape differences of one record at a time, at most 20,000 of
  them. A record with more is matched against no line: every one of those differences fails, and the run names the
  record. The driver writes at most 4 MiB of lines to `transitions.md` and counts the rest. The run has counted
  their units by then, and fails on each whether its line is written or not. The units that no line can declare are
  counted, and the first 200 are kept.
- **Capacity.** A pull request description holds 65,536 characters, and the inputs of one stage dispatch 65,535
  together. A line is 160 to 190 characters before its reason, so one description declares about 250 units. One
  event is often several units: an on-axis ray is traced by the surface tracer and again by the stack tracer
  (`onAxis` and `legacy`), and a chromatic ray once for each of four channels. The harness has no other place to
  declare from: a step with more undeclared units than one description holds cannot pass C1 or C2 as one pull
  request.
- **Not covered.**
  - What lies behind a changed array length, or in a member one side lacks, is compared with nothing beyond the
    common hits and the head-side check, and is in the digest only as its type and length. That holds for the stack
    tracer's `pts` and `ghostPts`, which have no surface index to pair by, and for a ray whose hit table is under no
    array index. `summary.md` says of each matched line how many of its differences are such shapes.
  - A trace nested in an analysis result shows only what its digest keeps readable.
  - What a transition does to a number computed from many rays (a relative illumination, an RMS, a best focus) is
    outside every line, and fails on its own budget.
  - A solve that fails on one side and converges on the other holds NaN on one side only, which fails as a
    non-finite mismatch and cannot be declared.

### Running It

```bash
node scripts/engine-diff.mjs --base "$(git merge-base origin/engine-next HEAD)"
node scripts/engine-diff.mjs --base origin/main --class c1 --lens canon-serenar-50f18 --out tmp/engine-diff
```

`--tier` is `p`, `s` or `f`, and `p` unless given; `--class` is `c0` unless given. `--shard i/n` runs part `i` of the
tier cut into `n`, counted from 1, so `n` runs with the same base, tier and class are one comparison of the tier.
`--lens` narrows the run to one lens id, and `--exceptions` names a file in the form of a pull request description,
which declares the exceptions and the transitions under a heading each. A shard, like a single lens, is part of a
tier, so a declared exception that the run never meets does not fail it, and a declared transition whose record it
did not ask for is listed as not judged. The
driver adds a detached worktree of the base in the system temp directory, copies the working tree's harness into it,
bundles the capture entry once per side with no config file, and removes the worktree when it ends. It needs no
`src/generated/` and no `node_modules` in the base. It captures, compares and writes one lens at a time, and a few
requests of a lens at once, so memory does not grow with a tier or with a lens's station count.

On SIGINT or SIGTERM the driver removes its base worktree and its temporary directories before it exits, with the
status a shell gives a signal (130 or 143). A capture is synchronous, so it acts on the signal when the capture in
hand returns, which can take some seconds. A driver that is killed outright leaves its worktree registered. The next
run warns about every registered `engine-diff-base-*` worktree it finds and removes none of them, since another run
may be using one: remove a stale one with `git worktree remove --force <path>`.

```bash
node scripts/engine-diff.mjs --base optics-rewrite/s1 --tier s
node scripts/engine-diff.mjs --base optics-rewrite/s1 --tier f --shard 3/32
```

Its output goes under `--out`, or under a new directory in the system temp directory that it names when it ends:
gzip NDJSON payloads in a `payloads` folder, and the small files in a `reports` folder beside it (`summary.json`,
`summary.md`, `data-impact.md`, `uncompared.json`, the failing record pairs and, above C0, `transitions.md`). Nothing
it writes is committed. It exits non-zero when a comparison fails, when the uncompared lenses differ from the
declared exceptions in either direction, or when the transitions it found differ from the declared ones. It reads
the declared transitions before it adds its base worktree, so a bullet it cannot read stops it at once, with the
bullet on stderr and in the job summary.

### CI

The `engine-diff` job in `.github/workflows/quality.yml` runs on pull requests only, and `build` does not wait for it.
Its first step compares the pull request with its merge-base on the branch it targets and skips the rest unless a
path changed under `src/optics/`, `src/types/`, `src/utils/catalog/` or `src/lens-data/` (Markdown aside), in
`src/utils/featureFlags.ts`, which the engine reads a flag from, or in the harness, its driver or its workflows.
Otherwise it runs Tier P against that merge-base, with the pull request description as the declared exceptions and
transitions, adds `summary.md` to the job summary and uploads the `reports` folder as the `engine-diff-tier-p`
artifact.

The change class comes from the pull request's labels, read when the job runs: `engine-diff:c1`, `engine-diff:c2` or
`engine-diff:c3`, and C0 with none. Two class labels fail the job. A label or description changed after a run takes
effect when the job is re-run.

Tiers S and F run in `.github/workflows/engine-diff-stage.yml`, which nothing starts by itself. Its `plan` job turns
a shard count into a list, a matrix of `shard` jobs runs one `--shard i/n` each and uploads its `reports` folder, and
one `result` job writes the tier, base and outcome to the run summary. A failed shard does not cancel the others. The
head is the ref the run is started on.

A shard is part of a tier, so it lets a declared exception that it never met pass and lists it in its `summary.json`.
The `result` job downloads the shards' reports and is green only when every shard passed and every declared
exception was met by some shard. Above C0 it also lists each declared transition that no shard judged, which names a
record the tier does not ask for, and does not fail on it. Under C0 no shard judges any line and each fails on a
description that declares one, and the job says that instead.

- **A stage run** is dispatched by hand, from the Actions tab or with `gh`. Its inputs are the base ref (the current
  anchor tag or a commit), the tier, the change class, the number of shards, which is 8 for Tier S and 32 for Tier F
  when left empty, and the declared exceptions: the ids of the lenses the base engine cannot build, separated by
  spaces, a pair as `host+converter`. Each shard writes them to a file in the form the driver reads.

  ```bash
  gh workflow run engine-diff-stage.yml --ref <head> -f base=<anchor> -f tier=s -f class=c0
  gh workflow run engine-diff-stage.yml --ref <head> -f base=<anchor> -f exceptions="<lens id> <host>+<converter>"
  ```

  A stage run above C0 takes its declared transitions through the `transitions` input: the bullets alone, one per
  line, each with its reason. The maintainer assembles them by hand from the descriptions of the pull requests merged
  since the base, and each shard writes them under the heading in the same file. The `plan` job refuses an input
  that holds any line but a bullet, before a shard starts: a heading among the bullets would end the section the
  driver reads, and the bullets behind it would declare nothing.

  A line that passed its pull request does not always pass a stage run, which has another base:
  - A stage run meets states no pull-request run asked, and a unit that two steps changed in turn has another digest
    than either step declared. A first run therefore usually ends with lines of its own in each shard's
    `transitions.md`, to add or to put in place of the ones it found mismatched.
  - A line for a lens the stage's base cannot build, which is one of the run's declared exceptions, fails as "the
    lens was not compared". Leave it out.
  - A line for a converter pair that the head's prescriptions no longer permit fails as "no such lens". Leave it out.

  The text reaches a shell only as an environment variable. The dispatch form's field takes one line, so more than
  one bullet is sent from a file. GitHub holds all the inputs of one dispatch to 65,535 characters, which is about
  250 such lines:

  ```bash
  gh workflow run engine-diff-stage.yml --ref <head> -f base=<anchor> -f class=c1 -F transitions=@lines.md
  ```

- **Before the workflow file is on `main`**, or to try a change to it, push the commit to a branch under
  `engine-diff-stage/`. GitHub dispatches a workflow only once its file is on the default branch, and a push has no
  such limit. A push run takes every input at its fallback: Tier S under C0, in 8 shards, with no exception
  declared and the pushed commit as its own base, so it compares that commit with itself and passes only if the
  engine repeats itself bit for bit. The run is on the pull request's own head commit, so its checks show on the
  pull request. Delete the branch afterwards.

  ```bash
  git push origin HEAD:refs/heads/engine-diff-stage/<name>
  git push origin :refs/heads/engine-diff-stage/<name>
  ```

### Tests

Three files in the tooling suite hold the harness to its contract.

- `__tests__/src/benchmarks/engineDiff.test.ts`: a capture repeats byte for byte, the encoding loses nothing, a
  digest's outcome follows the discrete members of a trace alone and its residual share and its tolerance are the
  largest inside it, every digest of a captured record carries all three, every near-axis probe of the fixture
  lenses returns and the prepared ones give the state geometry's ratios bit for bit, a probe launch that throws is
  recorded as the outcome of that tracer's probes and leaves the record's rays, a stack-tracer probe with no finite
  slope has not returned, the fingerprint's restated stop-radius rule agrees with `buildLens` on every catalog lens,
  a fingerprint-equal respelling leaves every Tier P record of a lens unchanged (one case per spelling the canonical
  prescription holds as one), the harness's copy of the inline defaults equals the engine's, a member of a built
  surface that the engine alone changed gives another build record, and no analysis or MTF record carries a skip
  marker. Asking an engine which pairs it permits does not throw on a prescription it cannot read, and it names the
  pairs it cannot build, each by the pair's own build record.
  Each tier's list is the same on every build and for any order of the catalog, Tier S holds every request of Tier
  P and Tier F every request of Tier S, a pair that one engine alone permits is still asked, and the shards of every
  tier are disjoint and complete at several shard counts. It also compares what `requests.ts` has to copy with its
  sources: the benchmark lens set and stopped scenario, the analysis-context job names, the MTF benchmark's lenses,
  and the MTF methods, spectra and default grid.
- `__tests__/src/benchmarks/engineDiffCompare.test.ts`: no class is looser than the quantity table; a number with no
  class fails under C1 and C2 when it moves, by its path, and is compared bit for bit under C0; identical captures pass
  in every class; and each drift injected into captured records is detected (a status, an index, a unit error, a sample
  order, one ulp under C0, twice a budget under C1 where half passes). A scalar below 1 that is no length fails at 1e-10
  relative, a solve's residual is held to its solve's tolerance and not differenced, a stop residual 1000 times larger
  on one side of a converged solve fails, a record that throws alike on both engines fails in every class, and a failing
  solver output is reported in quanta. An effective tolerance passes a last-bits change above C0 and fails at 1e-10
  relative and when doubled, and a hit that left the raw target for a stall envelope, or came back, is a discrete
  transition with both residuals in contract. Inside a nested trace whose status and hit count stand, a flipped flag,
  a NaN, a changed surface index and the changed status of one ray of a pupil bundle each fail under C1 and C2, a
  residual at twice its effective tolerance fails as a contract breach on the head, an infinite or absent share fails
  from either side, a tolerance relaxed to four times the target fails with the residual inside it, and a coordinate
  that moved by any distance is reported and passes, as does a tolerance relaxed under a larger one in the same trace:
  the accepted limit of the rule. The outcome masks exactly the numbers the table budgets, on captured traces, a
  near-axis probe that stops returning fails on either tracer, and a probe launch that threw on one engine fails as
  that outcome alone. It also covers cross-evaluation: a data-only change shows no engine difference
  and an impact report, and a format-only change that alters a value fails. A semantic change is judged path by path:
  a status that turned to a failure, a number that turned non-finite and a job that now throws each block at a path
  both sides have, behind a change of shape and beside an improvement as well. So does a root solve that turned to a
  failure with the work behind it gone, and a status that turned to a failure from one that held no result without
  clip events to show an earlier clip. Synthetic full-hit rays in every fan pass when their head-side event order
  proves a clip before the failure, from `clipped` or `ok`; first-event failures, digests and solve failures still
  block, and mixed gates keep their totals and separate report rows. Failures at paths only the head data has pass
  and are counted, as is what only the base data has, on a modelled chromatic channel and on the records the engine
  returns for a catalog lens with one glass unresolved. An array paired by
  index is counted and listed, where it hides a status that turned to a failure and where it shows one that did not.
  A status the prescription hands back is left out, a digest is read like any object, the message of a lens that
  does not build is written on one line, and a list that is cut passes nothing. A changed converter is compared
  through its pairs, and a pair the engines disagree about fails
  while one the data lost is listed. A pair the data gained passes with failed rays in its records and fails when it
  does not build, the impact report counts what the records of a new lens or a gained pair hold, and a changed converter
  that lost every pair is warned of. A pair the base engine cannot compose and build is uncompared in a run that meets
  it and in one that does not, and passes only when declared; the pairs of a host that does not build alone are
  compared; and the pair lists decide as a pair's own build record does. The uncompared lenses are held to the declared
  exceptions in both directions, and a lens handed over in parts is reported as it would be whole.
  For declared transitions: the line a failing run prints, pasted back with a reason, passes that run under C1 and
  C2, fails it under C0 and is reported under C3. A missing line, a line with nothing behind it, a wrong value, a
  wrong digest, a second ray beside the declared one, a number beyond budget without `numbers` or outside the fields
  `numbers` permits, `numbers` on a unit that does not show its ray ended elsewhere, a residual or a non-finite
  number on the head side of a declared unit (in a hit column that grew as well), a converged solve's residual
  outside its tolerance where the base holds null, a hit both sides have that moved beyond its budget behind a
  column that changed length, a number with no class, the same unit under another state, request or lens, a job or
  record that starts throwing, a build or layout difference, a lens id the catalog does not hold, and a record past
  the cap each fail. A unit that no line can declare gets no line and is listed with what it holds. A matched line
  carries the differences its digest covers. A line for a record the run did not ask for is listed, a format-only
  change is excused by no line, and a lens handed over in parts gets the verdict of the lens whole.
- `__tests__/scripts/engineDiffScript.test.ts`: the command line, and runs of the real driver against `HEAD`, on one
  lens of Tier P and on one lens of one shard of Tier S, which are skipped where git cannot add a worktree. A third
  run hands the driver a description with both headings and checks that its declared transitions are held to the
  run, and a fourth that a bullet with no reason stops the driver before it adds a base worktree. Three steps of
  the stage workflow are run as shell scripts with the workflow's variables in their environment: the step that
  writes that file, whose output is read back by the parser; the `plan` step, which must refuse a heading among the
  bullets; and the `result` step, on fabricated shard summaries, under C1 and under C0 (skipped where there is no
  `jq`). The report of `transitions.md` is rendered from a fabricated summary. No test evaluates the workflow's own
  expressions or dispatches it.

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

Also run `npm run test:tooling` when changing `scripts/`, `src/benchmarks/`, or the audit tooling.

## Benchmark Verification

The optics/rendering benchmark command is intentionally opt-in:

```bash
npm run benchmark:optics-rendering
```

Use `npm run benchmark:optics-rendering -- --dry-run` when changing benchmark code and you only need to validate module
loading, schema construction, and default lens keys. Use `--report-only` after changing report formatting so the
Markdown report is regenerated from existing run JSON without creating another benchmark record.

To compare two refs, run it paired: `npm run benchmark:optics-rendering -- --base <ref>`, with `--heavy` for the
seven-cell subset or `--memory` for the retained-heap session. A paired run of a ref against itself
(`--base HEAD --heavy` on a clean tree) checks the harness after a change to it: no case may be flagged unequal work
or listed as work not verified. `agent_docs/benchmarks/README.md` describes the modes, the statistics, what the work
comparison checks and where the records go.
