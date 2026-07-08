# Public Functions

This project is an application, not a published library. In this document, "public functions" means the stable
project-internal import surface that app code, tests, scripts, and future agents should prefer over deep imports into
implementation details.

## Import Boundaries

- Prefer the barrel or focused module listed here before importing from a deeper file.
- `src/optics/` is the authoritative optics implementation. App code should prefer the stable `src/optics/*` public
  paths; deeper engine modules are for optics internals and focused tests.
- Do not import from `src/optics/internal/` unless the work is inside the optics implementation or a targeted optics test.
- Treat `src/generated/` as read-only build output. Regenerate metadata instead of editing it.
- Lens data modules are auto-discovered through `import.meta.glob`; do not manually import individual lens files for
  catalog behavior.
- React components can be imported directly when composing UI, but shared behavior belongs in hooks, utilities, or pure
  optics modules.

## Core Data Types

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/types/optics.ts` | `LensDataInput`, `LensData`, `RuntimeLens` | Raw lens files, defaulted lens data, and the frozen runtime object returned by `buildLens()`. |
| `src/types/optics.ts` | `SurfaceData`, `ElementData`, `AsphericCoefficients`, `VarRange` | Prescription structure, element metadata, aspheric terms, and focus/zoom variable gaps. |
| `src/types/optics.ts` | `SurfaceInteraction`, `SurfaceIncidentSide`, `SurfaceInactiveSideBehavior`, `MirrorKind` | Folded-path surface behavior for refract/reflect/block surfaces, side-specific activation, and first/second-surface mirrors. |
| `src/types/optics.ts` | `OpticalPathData`, `ResolvedOpticalPath`, `ImagePlaneData`, `ResolvedImagePlane`, `ImagePlaneNormal` | Generalized optical path metadata, explicit/repeated surface hit order, automatic path mode, and arbitrary meridional image-plane placement. |
| `src/types/optics.ts` | `LensProjectionConfig`, `PerspectiveControlConfig` | Fisheye/rectilinear projection metadata and shift/tilt capability metadata. |
| `src/types/optics.ts` | `RayTraceResult`, `ParaxialTraceResult`, `LayoutResult`, `ChromaticChannel` | Shared optics result shapes. |
| `src/types/optics.ts` | `ElementShape`, `AsphPathData`, `SurfaceAccentPathData` | SVG-ready element outline, aspheric overlay, and mirror-coating accent path data returned by `computeElementShapes()`. |
| `src/types/state.ts` | `LensState`, `LensAction`, `Preferences`, `URLState` | Reducer state, actions, persisted preferences, and shareable URL state. |
| `src/types/state.ts` | `OffAxisMode`, `RayDensity`, `MobileView`, `DesktopView`, `AnalysisTabId` | UI state unions plus `is*` guards for parsing external values. |
| `src/types/groupMovement.ts` | `GroupMovementMode`, `isGroupMovementMode` | Shared group-movement mode ids and guard. |
| `src/types/theme.ts` | `Theme`, `ThemeVariant`, `ThemeColorTokens` | Theme object and token shapes. |

## Lens Construction And Validation

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/optics/buildLens.ts` | `buildLens(data)` | Stable constructor backed by `buildLens2`; validates/defaults lens data, resolves labels/glass/state indices, computes optical constants, returns a frozen `RuntimeLens`, and registers an engine lens for prepared-state work. |
| `src/optics/runtimeLens.ts` | `paraxialTrace`, `realTraceToStop` | Runtime-lens construction internals and low-level first-order helpers used by focused optics tests. |
| `src/optics/validateLensData.ts` | `validateLensData(data)` | Return validation error strings for untrusted lens data; callers decide whether to throw or show errors. |

Use `buildLens()` once per lens/session state boundary, then pass the returned `RuntimeLens` (`L`) explicitly into pure
optics helpers. Do not store runtime lens state in module globals.

For mirror or telescope data, inspect `L.opticalPath`, `L.imagePlane`, and `L.isFoldedOptics` instead of inferring behavior
from surface order. Public `traceRay*` helpers report folded termination through `reachedImagePlane`; targeted optics
tests may import the exact tracer to assert generalized-path `hits`, `terminalPoint`, `terminalDirection`, and repeated
stop behavior. Folded callers that need an intermediate stop hit should use the generalized stop helper internally
rather than relying on sequential partial tracing.

## Optics Engine

`src/optics/optics.ts` is the stable barrel for the most commonly consumed pure optics helpers. It preserves app-facing
import paths over the engine implementation.

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/optics/optics.ts` | `sag`, `conicPolySag`, `sagSlopeRaw`, `FLAT_R_THRESHOLD` | Surface math used by layout, tracing, and diagnostics. |
| `src/optics/optics.ts` | `doLayout`, `stateSurfaces`, `thick` | Current focus/zoom surface positions and state-adjusted thicknesses. |
| `src/optics/optics.ts` | `eflAtZoom`, `eflAtFocus`, `epAtZoom`, `fopenAtZoom`, `halfFieldAtZoom`, `tracingHalfFieldAtZoom`, `effectiveFNumber` | Derived optical values for the current slider state. |
| `src/optics/optics.ts` | `computeFieldGeometryAtState`, `computeAnalysisFieldGeometryAtState`, `entrancePupilAtState` | State-aware field and pupil geometry. Use the analysis variant for analysis tabs. |
| `src/optics/optics.ts` | `solveChiefRay`, `traceChiefRayAtAngle`, `solveFieldAngleForImageHeight`, `solveFieldAngleForImageHeightAccurate` | Chief-ray solving and field/image-height inversion. |
| `src/optics/optics.ts` | `traceRay`, `traceRayChromatic`, `traceRayVector`, `traceRayVectorChromatic`, `traceToImage` | Meridional and vector ray tracing through the runtime lens. |
| `src/optics/optics.ts` | `traceSkewRay`, `traceSkewRayVector`, `sampleOrthogonalPupilFan`, `sampleCircularPupil`, `computeChromaticSpread` | Skew-ray and pupil-sampling utilities for aberration and bokeh analysis. |
| `src/optics/opticsFormat.ts` | `formatDist`, `formatPetzvalRadius` | Display formatting for optics values. |

Engine-native modules are public only to engine work and focused tests:

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/optics/compat.ts` | `buildLens2`, `prepareRuntimeState`, `engineLensFromRuntime`, `traceRay2`, `solveChiefRay2`, analysis `*2` facades | Runtime-lens adapters for stable `RuntimeLens` callers and engine-native prepared-state work. |
| `src/optics/state/prepareState.ts` | `prepareState(engineLens, focusT, zoomT, aberrationT)` | Compile current optical state for engine-native callers. Use caches when repeated state preparation is measured as overhead. |

Specialized optics modules are also public when work is in that domain:

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/optics/projection.ts` | `resolveProjection`, `isFisheyeProjection`, `projectionImageHeightForAngle`, `projectionFieldAngleForImageHeight` | Projection model resolution and ideal image-height mapping. |
| `src/optics/projection.ts` | `projectionLaunchSlopeForField`, `projectionLaunchVectorForFieldAngles`, `launchSurfaceForFieldDeg` | Safe field launch logic, including fisheye/vector launches. |
| `src/optics/glassCatalog.ts` | `resolveGlass`, `evaluateSellmeier`, `allEntries`, `catalogSize`, `assertCatalogConsistent` | Glass lookup and Sellmeier evaluation. |
| `src/optics/dispersion.ts` | `makeSurfaceDispersion`, `buildSurfaceDispersionIndex`, `indexAt`, `summarizeDispersionQuality` | Per-surface chromatic index resolution. |
| `src/optics/lensMovement.ts` | `ZERO_LENS_MOVEMENT`, `clampLensMovement`, `createLensMovementTransform`, `transformRayTraceResult` | Perspective-control shift/tilt transforms. |
| `src/optics/diagramGeometry.ts` | `createCoordinateTransforms`, `computeElementRenderDiagnostics`, `computeElementShapes` | Convert optical geometry into SVG-ready coordinates and element shapes. |
| `src/optics/raySampling.ts` | `isHeavyLensForRayWork`, `rayFractionsForDensity`, `raySampleCountForDensity` | Display/analysis ray-sampling density helpers. |

## Analysis APIs

Analysis helpers are pure and should be called from memoized hooks or analysis display components with the current slider
state. Keep slider-dependent analysis out of `buildLens()`.

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/optics/analysisJobs.ts` and `src/optics/compat.ts` | `analysisJobs`, `analysisJobsForState2` | Grouped analysis job facades for runtime callers and prepared-state UI work across summary, aberration, bokeh, distortion, vignetting, and pupil analyses. |
| `src/optics/aberrationAnalysis.ts` | `computeSphericalAberration`, `computeSAProfile`, `computeSphericalAberrationBlurCharacter` | Longitudinal spherical aberration and blur character. |
| `src/optics/aberrationAnalysis.ts` | `computeComaAnalysis`, `computeMeridionalComa`, `computeSagittalComa`, `computeComaPreview`, `computeComaPointCloudPreview` | Coma analysis and preview point clouds. |
| `src/optics/aberrationAnalysis.ts` | `computeFieldCurvature` | Tangential/sagittal field-curvature analysis. |
| `src/optics/aberrationAnalysis.ts` | `computeBestFocusZ`, `computeBokehPreviewPair`, `buildBokehDensityGrid`, `buildBokehRadialProfile` | Bokeh and defocus footprint analysis. |
| `src/optics/distortionAnalysis.ts` | `computeDistortionCurve`, `computeDistortionFieldGrid` | Projection-aware distortion residuals and traced field grid. |
| `src/optics/vignetteAnalysis.ts` | `computeVignettingCurve` | Geometric vignetting and relative illumination. |
| `src/optics/pupilAberration.ts` | `computePupilAberrationProfile`, `computeExitPupilAberrationProfile`, `computeBothPupilAberrationProfiles` | Entrance/exit pupil shift and magnification profiles. |
| `src/optics/cardinalElements.ts` | `computeCardinalElementsAtState` | Principal/nodal/focal point diagnostics for the current state. |
| `src/optics/groupMovement.ts` | `getGroupMovementAvailability`, `firstAvailableGroupMovementMode`, `inferLensMovementGroups`, `computeGroupMovementProfile` | Focus/zoom/combined group movement diagnostics. |
| `src/optics/asphericComparison.ts` | `computeDepartureProfile`, `computeBestFitSphereR`, `peakAbsDeparture`, `rmsDeparture`, `nearestSurfaceForClick` | Aspheric departure data for inspection UI. |
| `src/optics/chromaticRayFanScaling.ts` | `computeChromaticBarOffsets`, `computeLocaBarOffsets` | Normalize chromatic ray-fan and longitudinal chromatic-aberration bars for display. |

## Catalog, Content, And SEO

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/utils/catalog/lensCatalog.ts` | `LENS_CATALOG` | Keyed map of visible and hidden defaulted lens data, auto-registered from `src/lens-data/**/*.data.ts`. |
| `src/utils/catalog/lensCatalog.ts` | `CATALOG_KEYS` | Visible lens keys sorted by display name. |
| `src/utils/catalog/lensCatalog.ts` | `hasMdForKey(key)`, `loadMdForKey(key)`, `cachedMdForKey(key)` | Companion `*.analysis.md` existence check plus async code-split loader and sync cache lookup for a lens key. |
| `src/utils/catalog/lensSummaries.ts` | `LENS_SUMMARIES`, `SUMMARY_KEYS`, `ALL_SUMMARY_KEYS`, `DEBUG_SUMMARY_KEYS` | Generated lightweight lens metadata (name, maker, specs, marketing numbers, mounts, format) for index-style pages that must not ship full prescriptions. |
| `src/utils/catalog/lensSummaries.ts` | `RECENT_LENS_KEYS`, `ALL_LENSES_BY_DATE` | Lens freshness lists derived from build metadata. |
| `src/utils/catalog/lensMetadata.ts` | `deriveMaker`, `allMakerSlugs`, `makerDisplayName` | Maker display/slug derivation from generated maker prefixes. |
| `src/utils/catalog/lensMetadata.ts` | `lensPageTitle`, `lensPageDescription`, `lensCanonicalURL`, `lensJsonLd` | Lens SEO metadata and JSON-LD. |
| `src/utils/catalog/lensMetadata.ts` | `makerCanonicalURL`, `mountCanonicalURL`, `formatCanonicalURL` | Canonical URLs for taxonomy pages. |
| `src/utils/catalog/lensTaxonomy.ts` | `LENS_MOUNTS`, `LENS_MOUNT_BY_ID`, `isLensMountId` | Canonical lens mount ids and guard. |
| `src/utils/catalog/lensTaxonomy.ts` | `IMAGE_FORMATS`, `IMAGE_FORMAT_BY_ID`, `DEFAULT_IMAGE_FORMAT_ID`, `isImageFormatId`, `resolveImageFormatMetadata` | Canonical image-format ids, metadata, and guard. |
| `src/utils/content/homepageContent.ts` | `ARTICLES`, `ARTICLE_SERIES`, `HOMEPAGE_ARTICLES`, `ARTICLE_CONTENT`, `stripFrontmatter` | Generated article metadata and raw article content. |
| `src/utils/content/changelogData.ts` | `CHANGELOG`, `ChangelogEntry`, `ChangelogEntryType` | Public changelog source displayed by the app. |
| `src/utils/content/changelogHelpers.ts` | `formatDisplayDate`, `groupChangelogByDate`, `CHANGELOG_TYPE_LABELS` | Changelog display helpers. |
| `src/utils/seo/structuredData.ts` | `publisherJsonLd`, `websiteJsonLd`, `webApplicationJsonLd`, `datasetJsonLd`, `collectionPageJsonLd`, `itemListJsonLd`, `breadcrumbJsonLd`, `articleJsonLd` | Shared JSON-LD builders. |
| `src/utils/seo/structuredData.ts` | `getLensFreshness`, `getRouteFreshness` | Build-metadata freshness lookup for SEO. |

## Routing And SSR APIs

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/routes/routeManifest.tsx` | `RouteManifestEntry`, default `routeManifest` | Single source of truth for React route patterns used by the browser router and SSR renderer. Concrete prerender paths are generated separately in build metadata. |
| `src/router.tsx` | default `router` | Browser router used by the React entry point. |
| `src/entry-server.tsx` | `manifestPaths`, `render(url)` | Static prerender entry and manifest-coverage surface used by `scripts/prerender.mjs`. |

## State, URL, And Comparison APIs

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/utils/state/lensReducer.ts` | `createInitialState`, `lensReducer`, exported action constants | Initialize and update `LensState`. Prefer constants over string literals. |
| `src/utils/state/useLensState.ts` | `useLensState(catalogKeys, initialLensKey?, initialLensKeyB?)` | LensViewer state hook with URL and preference hydration. |
| `src/utils/state/LensContext.ts` | `useLensCtx`, `useLensDispatch`, `usePanelCtx` | Context hooks for viewer children. |
| `src/utils/state/preferences.ts` | `loadPrefs`, `PREFS_KEY` | Read persisted preferences. Writing is handled through `usePreferences`. |
| `src/utils/state/usePreferences.ts` | `usePreferences(state)` | Persist user preferences from reducer state. |
| `src/utils/state/lensViewUrlState.ts` | `parseLensViewQuery`, `buildLensViewQuery`, `buildLensViewQueryFromState`, `lensViewQueryToUrlState` | Single source of truth for shareable lens-view query fields. |
| `src/utils/state/lensViewUrlState.ts` | `VIEW_STATE_FIELDS` | Canonical list of v1 shareable panel/view-state fields. Extend this when adding shareable panel state. |
| `src/utils/state/lensViewUrlSync.ts` | `buildLensViewSearch`, `buildRouteLensViewUrl`, `buildLegacyLensViewUrl`, `buildLegacyLensIdentityUrl` | Convert reducer state into route or legacy URL strings. |
| `src/utils/state/lensViewUrlSync.ts` | `getStateZoom`, `zoomActionFromFocalLength` | Focal-length URL handling for zoom lenses. |
| `src/utils/state/parseComparisonParams.ts` | `parseLensKeysFromSearch`, `parseComparisonParams`, `encodeSliderParams`, `buildComparisonURL` | Legacy query URL parsing and encoding. |
| `src/utils/state/zoomConversion.ts` | `focalLengthToZoomT`, `zoomTToFocalLength` | Convert between user-facing focal length and normalized zoom slider values. |
| `src/comparison/comparisonURLSync.ts` | `buildComparePath`, `comparePageTitle`, `comparePageDescription`, `compareCanonicalURL` | Path-based comparison URLs and metadata. |
| `src/comparison/comparisonSliders.ts` | `computeFocusPair`, `computeAperturePair`, `computeZoomPair`, `computeMovementPair` | Shared slider values mapped onto two runtime lenses. |
| `src/comparison/comparisonSliders.ts` | `formatSharedFocusDist`, `sharedFNumber`, `snapToCommon` | Comparison slider formatting and snapping helpers. |
| `src/comparison/comparisonReducer.ts` | `comparisonReducer`, exported comparison action constants | Comparison-specific reducer transitions. |
| `src/comparison/useComparisonMode.ts` | `useComparisonMode`, `isComparisonOk` | Resolve comparison lens data and status for compare-mode UI. |

## UI Extension Points

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `src/components/markdown/ThemedMarkdown.tsx` | `ThemedMarkdown` | Render article and lens-description markdown with the project markdown stack and themed link/image handling. |
| `src/components/markdown/extractHeadingsFromAst.ts` | `extractHeadingsFromAst` | Build article table-of-contents data from markdown. |
| `src/components/SEOHead.tsx` | `SEOHead` | Route-level SEO tags and JSON-LD injection. |
| `src/components/layout/lensDiagram/analysisTabs.ts` | `ANALYSIS_TABS` | Analysis drawer tab registry. Add ids here when creating a new drawer tab. |
| `src/components/layout/lensDiagram/analysisTabRenderers.tsx` | `ANALYSIS_TAB_RENDERERS` | Maps analysis tab ids to rendered content. Keep in sync with `ANALYSIS_TABS`. |
| `src/components/errors/ErrorBoundary.tsx` | `ErrorBoundary`, `ErrorDisplay` | Page/panel error boundaries and shared error display. |

## Build Script APIs

These modules are ESM script helpers used by tests and build commands. They are public for scripts, not browser code.

| Module | Public Function Or Surface | Use |
| --- | --- | --- |
| `scripts/lens-data-lib.mjs` | `deriveMakerSlug`, `extractLensIdentityContent`, `extractLensIdentity` | Lens identity and maker-slug parsing for organization scripts. |
| `scripts/lens-data-lib.mjs` | `analysisRelativePathForDataPath`, `rewriteLensDataTypesImport` | Companion analysis paths and import rewriting for moved lens files. |
| `scripts/lens-data-lib.mjs` | `collectTrackedLensRecordsByKey`, `collectLensData`, `collectLensDataAsync`, `collectRootLensMovePlan`, `organizeRootLensFiles` | Lens-data collection and root-file organization. |
| `scripts/build-metadata-lib.mjs` | `assertFullGitHistory`, `parseGitLogDates`, `getGitFileFreshness`, `getGitFileFreshnessSafe` | Git freshness helpers for build metadata. |
| `scripts/build-metadata-lib.mjs` | `getFirstGitFileFreshness`, `combineFreshnessEntries`, `assertFreshnessDiversity`, `buildRouteFreshness` | Route/article/lens freshness aggregation. |
| `scripts/maker-prefixes.mjs` | `MAKER_PREFIXES` | Canonical maker prefix list used to generate `src/generated/maker-prefixes.json`. |

## Adding Or Changing Public Functions

- Add or update focused tests for the behavior, especially for optics math, URL parsing, and build scripts.
- Export from the stable module or barrel expected by callers; avoid asking callers to reach into `internal/`.
- Update this document when adding a new reusable function, changing argument meaning, or moving a public surface.
- For shareable view state, update `VIEW_STATE_FIELDS`, `URLState`, reducer hydration, URL parse/build tests, and this
  document together.
- For lens data shape changes, update `src/types/optics.ts`, `src/lens-data/LENS_DATA_SPEC.md`, templates, validation,
  and any generated-report scripts that inspect lens files.
