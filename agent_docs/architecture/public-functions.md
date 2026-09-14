# Public Functions

This project is an application, not a published library. "Public functions" here means the stable project-internal
import surface that app code, tests, scripts, and future agents should prefer over deep imports into implementation
details. The symbols themselves are documented by their TypeScript exports and the generated `src/**/readme.md` files;
this document only records where to import from and the contracts that are not visible in a signature.

## Import Boundaries

- Prefer the barrel or focused module listed below before importing from a deeper file.
- `src/optics/` is the authoritative optics implementation. App code should prefer the stable `src/optics/*` public
  paths; deeper engine modules are for optics internals and focused tests.
- Do not import from `src/optics/internal/` unless the work is inside the optics implementation or a targeted optics
  test.
- Treat `src/generated/` as read-only build output. Regenerate metadata instead of editing it.
- Lens data modules are auto-discovered through `import.meta.glob`; do not manually import individual lens files for
  catalog behavior.
- React components can be imported directly when composing UI, but shared behavior belongs in hooks, utilities, or pure
  optics modules.

## Which Optics Module To Import From

| Module | Import it for | Rule |
| --- | --- | --- |
| `src/optics/buildLens.ts` | `buildLens(data)` (default export) | The only runtime-lens constructor for app code. It validates/defaults lens data, resolves glass and state indices, and returns a frozen `RuntimeLens`. `paraxialTrace` / `realTraceToStop` are re-exported from `src/optics/runtimeLens.ts` for focused optics tests only. |
| `src/optics/optics.ts` | Pure helpers: surface sag, layout (`doLayout`, `stateSurfaces`, `thick`), derived values (`eflAtZoom`, `effectiveFNumber`, ...), meridional/vector/skew tracing, pupil sampling, chromatic spread | Default barrel for UI hooks, display components, and analysis tabs. It preserves app-facing names over the engine implementation in `compat.ts`. |
| `src/optics/fieldGeometry.ts` | Field and chief-ray helpers: `computeFieldGeometryAtState`, `computeAnalysisFieldGeometryAtState`, `entrancePupilAtState`, `solveChiefRay`, image-height inversion | Analysis tabs must use the `computeAnalysisFieldGeometryAtState` variant. Fisheye/ultra-wide launches go through `src/optics/projection.ts` and `solveChiefRay`; never inline `Math.tan(field)`. |
| `src/optics/diagramGeometry.ts` | `createCoordinateTransforms`, `computeElementShapes`, `computeElementRenderDiagnostics` | The only SVG coordinate/shape entry point for diagram components; keeps UI decoupled from the engine's diagram submodule layout. |
| `src/optics/compat.ts` | `buildLens2`, `prepareRuntimeState`, `engineLensFromRuntime`, `analysisJobsForState2`, and the `*2` analysis facades | Engine-native facade for prepared-state work (`src/optics/state/prepareState.ts`) and engine tests. App code reaches it only through the barrels above or through `analysisJobsForState2` in analysis tabs. |
| `src/optics/analysisJobs.ts`, `src/optics/analysis/analysisContext.ts` | Grouped analysis job facades and the memoized per-panel analysis context | The context carries the complete perspective trace context and cache key; active movement is routed without centered-result fallback (`src/optics/analysis/analysisMovementSupport.ts` classifies section availability). |
| `src/optics/perspective/index.ts`, `src/optics/perspective/analysis/index.ts` | Perspective pose/trace context, chief solving, field sampling, and the fixed-sensor analysis variants | Failed field-sample requests are retained with explicit statuses rather than dropped. |
| `src/optics/lensMovement.ts` | Perspective-control clamping and diagram transform adapters | Keep movement here unless explicitly upgrading full moved-optics analysis. |

## Runtime Lens Contracts

Call `buildLens()` once per lens/session state boundary, then pass the returned `RuntimeLens` (`L`) explicitly into
pure optics helpers. Do not store runtime lens state in module globals, and keep slider-state-dependent analysis out
of `buildLens()`; analysis helpers are pure and are called from memoized hooks or analysis components with the current
slider state.

For mirror or telescope data, inspect `L.opticalPath`, `L.imagePlane`, and `L.isFoldedOptics` instead of inferring
behavior from surface order. Public `traceRay*` helpers report folded termination through `reachedImagePlane`; targeted
optics tests may import the exact tracer to assert generalized-path `hits`, `terminalPoint`, `terminalDirection`, and
repeated stop behavior. Folded callers that need an intermediate stop hit use the generalized stop helper, not
sequential partial tracing.

## Non-Optics Entry Points

- Types: `src/types/optics.ts` (lens data, runtime lens, folded-path and projection metadata, result shapes),
  `src/types/state.ts` (reducer state, actions, preferences, `URLState`, UI unions with `is*` guards),
  `src/types/theme.ts`.
- Catalog: `src/utils/catalog/lensCatalog.ts` exports the full `LENS_CATALOG`; index-style pages and search must use
  the generated summaries in `src/utils/catalog/lensSummaries.ts` and the author/assignee/patent catalogs so they never
  ship full prescriptions. Mount and image-format ids come from `src/utils/catalog/lensTaxonomy.ts`.
- Routing: `src/routes/routeManifest.tsx` is the single source of truth for route patterns used by both
  `src/router.tsx` and `src/entry-server.tsx`; concrete prerender paths are generated into build metadata.
- State: `src/utils/state/lensReducer.ts` exports action constants (prefer them over string literals).
  `src/utils/state/lensViewUrlState.ts` is the single source of truth for shareable query fields; to add one, follow
  `agent_docs/adding_url_state.md`. Comparison URL helpers live in `src/comparison/comparisonURLSync.ts` and
  `src/utils/state/parseComparisonParams.ts` (legacy query URLs).
- UI extension points: `src/components/markdown/ThemedMarkdown.tsx` for all article and lens-description markdown;
  `src/components/SEOHead.tsx` for route-level tags and JSON-LD; `src/components/errors/ErrorBoundary.tsx` for page and
  panel boundaries. Analysis drawer tabs register through `src/components/layout/lensDiagram/analysisTabs.ts` and
  `src/components/layout/lensDiagram/analysisTabRenderers.tsx`, which must stay in sync; see
  `agent_docs/adding_an_analysis_tab.md`.
- Build scripts: `scripts/lens-data-lib.mjs` and `scripts/build-metadata-lib.mjs` are ESM helpers shared by build
  commands and tests. They are public for scripts, not browser code.

## Adding Or Changing Public Functions

- Add or update focused tests for the behavior, especially for optics math, URL parsing, and build scripts.
- Export from the stable module or barrel expected by callers; avoid asking callers to reach into `internal/`.
- Update this document only when an import boundary or a non-obvious contract changes, not for every new symbol.
- For lens data shape changes, update `src/types/optics.ts`, `src/lens-data/LENS_DATA_SPEC.md`, templates, validation,
  and any generated-report scripts that inspect lens files.
