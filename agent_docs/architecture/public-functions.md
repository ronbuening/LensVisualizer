# Public Functions

This project is an application, not a published library. "Public functions" here means the stable project-internal
import surface that app code, tests, scripts, and future agents should prefer over deep imports into implementation
details. The symbols themselves are documented by their TypeScript exports and the generated `src/**/readme.md` files;
this document only records where to import from and the contracts that are not visible in a signature.

## Import Boundaries

- Prefer the barrel or focused module listed below before importing from a deeper file.
- `src/optics/` is the authoritative optics implementation. App code should prefer the stable `src/optics/*` public
  paths; deeper engine modules are for optics internals and focused tests.
- Import focused implementation modules only inside the optics engine or a targeted optics test.
- The seam guard in `__tests__/src/optics/opticsArchitecture.test.ts` enforces this boundary for `src/`, `scripts/`
  and `reports/`; see "Architecture Guards" in `agent_docs/architecture/testing.md`.
- Treat `src/generated/` as read-only build output. Regenerate metadata instead of editing it.
- Lens data modules are auto-discovered through `import.meta.glob`; do not manually import individual lens files for
  catalog behavior.
- React components can be imported directly when composing UI, but shared behavior belongs in hooks, utilities, or pure
  optics modules.

## Which Optics Module To Import From

The final seam is the 16 top-level barrels below. Outside `src/optics/`, imports (including types and script-loaded
paths) use these barrels. Focused tests may import the internal module they test. The permanent plain-Node exception
is `prescription/teleconverterCompatibility.ts`; `mount/` is outside this boundary.

| Module in `src/optics/` | Public surface |
| --- | --- |
| `buildLens.ts` | `buildLens` (named/default), canonical ingest and runtime views, `buildCanonicalLens`, `canonicalLensFromRuntime`, `prepareRuntimeState` |
| `teleconverter.ts` | Converter composition, compatibility, labels and validation |
| `optics.ts` | Layout and station values, RuntimeLens state adapters, exact ray adapters, focus/aperture controls, pupil-ray density and display formatting |
| `fieldGeometry.ts` | Field and pupil geometry, image-height inversion, RuntimeLens chief-ray adapters and bounded chief-ray diagnostic snapshots |
| `projection.ts` | Projection domains, fisheye mapping, slopes and bounding-sphere launch vectors |
| `analysis.ts` | Analysis requests, memoized contexts, movement availability, `analysisJobs`, `analysisPreviewJobs`, summary/cardinal and aberration/chromatic/bokeh/aspheric families |
| `mtf.ts` | MTF support, spectrum, orchestration and the numerical helpers used by reports and benchmarks |
| `perspective.ts` | Movement clamping, transforms, pose/trace contexts, field sampling, chief solving and diagram fans |
| `diagramGeometry.ts` | SVG transforms, shapes, surface paths, display sag/trimming and folded-path labels |
| `chromatic.ts` | Channel metadata, spectral lines, dispersion compilation/resolution/quality and chromatic ray tracing |
| `glassCatalog.ts` | Glass entries, catalog resolution, tolerances and index evaluation |
| `publishedStations.ts` | Published station grids, coordinates, labels and availability |
| `validation.ts` | Named `validateLensData`, `validateLensInput`, `validateCanonicalLens`, `validateTeleconverterData` and schema helpers |
| `geometry.ts` | Surface profiles/sag, numerical geometry constants and shared vector helpers |
| `types.ts` | Engine types and preparation errors |
| `lensDataConversion.ts` | Canonical/V1/V2 mapping, source paths and printers for the converter, organizer and build metadata |

## Names And Runtime Adapters

Canonical subdirectory implementations keep their plain names. Where a positional RuntimeLens adapter has a different
contract, its public name says so: `solveChiefRayForRuntimeLens`, `traceParaxialRayForRuntimeLens`, the RuntimeLens
image-height/launch adapters, `doLayoutForRuntimeLens`, `thickOrZero`, and `eflAtZoomClamped` / `epAtZoomClamped` /
`fopenAtZoomClamped`. The station-table interpolators and throwing `thick` keep their plain names. Callers retain the
contract they previously used; these names do not introduce a new optical model.

Prepared field geometry lives in `field/geometry.ts`, chief solves in `field/chiefRaySolve.ts`, and image-height
inversion in `field/imageHeight.ts`. Outside callers use `fieldGeometry.ts`; analysis tabs use
`computeAnalysisFieldGeometryAtState`. `computeCardinalElementsFromState` takes prepared geometry, while
`computeCardinalElements` takes an analysis request. `analysisJobs` is the full request-facing registry;
`analysisPreviewJobs` retains the smaller historical job subset with its distinct key set.

`getChiefRayDiagnostics` returns defensive snapshots keyed by compiled identity and retains at most 2,048 owners.
Published stations return canonical `zoomT` / `focusT`; `distanceM` is a slider label and only `conjugate` is a source
claim. Channel/index helpers expose qualified dispersion data, not historical production-glass identity.

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
  Teleconverters mirror the split: `src/utils/catalog/teleconverterCatalog.ts` holds full prescriptions, per-lens
  options and `resolveLensSystemData()` for the viewer, and `src/utils/catalog/teleconverterSummaries.ts` holds the
  generated summaries with build-time `compatibleLensKeys` for pages and search.
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
- Export from the stable module or barrel expected by callers; keep callers on the public seam.
- Update this document only when an import boundary or a non-obvious contract changes, not for every new symbol.
- For lens data shape changes, update `src/types/optics.ts`, `src/lens-data/LENS_DATA_SPEC.md`, templates, validation,
  and any generated-report scripts that inspect lens files.
