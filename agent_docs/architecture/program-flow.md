# Program Flow

High-level data and control flow for LensVisualizer. Use this as a map before jumping into the focused architecture docs.

## Build And Deploy Pipeline

The production site is static output from Vite plus prerendered route HTML. Cloudflare Pages serves the generated
`dist/` directory. Route patterns live in `routeManifest.tsx`; concrete routes for prerendering, the sitemap, and SEO
audits are enumerated in `src/generated/build-metadata.json`.

```mermaid
flowchart TD
  subgraph Source[Source content]
    LensData[src/lens-data maker data files]
    LensNotes[src/lens-data analysis markdown]
    Articles[src/content markdown articles]
    MakerPrefixes[scripts/maker-prefixes.mjs]
    RouteManifest[src/routes/routeManifest.tsx]
    App[src pages components optics utilities]
  end

  LensData --> Organize[scripts/organize-lens-data.mjs]
  Organize --> Metadata[scripts/generate-build-metadata.mjs]
  LensNotes --> Metadata
  Articles --> Metadata
  MakerPrefixes --> Metadata
  Metadata --> Generated[src/generated build metadata]
  Generated --> ConcreteRoutes[concrete prerender routes and freshness]

  App --> ViteClient[Vite client build]
  Generated --> ViteClient
  RouteManifest --> ViteClient
  ViteClient --> Dist[dist static assets]

  App --> ViteSSR[Vite SSR build of src/entry-server.tsx]
  RouteManifest --> ViteSSR
  ViteSSR --> SSRBundle[dist-server entry-server.js]
  Generated --> Prerender[scripts/prerender.mjs]
  ConcreteRoutes --> Prerender
  SSRBundle --> Prerender
  Prerender --> Coverage[manifest coverage validation]
  Coverage --> HTML[prerendered route HTML and 404.html]
  HTML --> Dist

  Generated --> Sitemap
  Sitemap --> Dist
  Dist --> Cloudflare[Cloudflare Pages]
```

## Route And Page Shell

All user-facing pages pass through the shared route manifest. Lens and compare routes render SEO-friendly fallback
content during SSR, then `ClientOnly` mounts the interactive viewer after hydration.

```mermaid
flowchart TD
  Browser[Browser URL] --> Router[src/router.tsx]
  Router --> Manifest[src/routes/routeManifest.tsx]
  Manifest --> Target{Route target}

  Target -->|Home| HomePage[src/pages/HomePage.tsx]
  Target -->|Lens detail| LensPage[src/pages/LensPage.tsx]
  Target -->|Compare| ComparePage[src/pages/ComparePage.tsx]
  Target -->|Lens library| IndexPage[src/pages/lensIndex]
  Target -->|Maker/mount/format clusters| ClusterPages[src/pages Maker/Mount/Format pages]
  Target -->|Articles| ArticleRoutes[src/pages ArticlesPage and ArticlePage]
  Target -->|Updates| UpdatesPage[src/pages/UpdatesPage.tsx]
  Target -->|404| NotFound[src/pages/NotFoundPage.tsx]

  Generated[src/generated build metadata] --> ContentRegistry[src/utils/content/homepageContent.ts]
  Generated --> Freshness[src/utils/seo structured data freshness]
  Generated --> RecentLensData[src/utils/catalog/lensCatalog.ts freshness lists]
  Catalog[src/utils/catalog/lensCatalog.ts] --> LensPage
  Catalog --> ComparePage
  Catalog --> IndexPage
  Catalog --> ClusterPages
  ContentRegistry --> HomePage
  ContentRegistry --> ArticleRoutes
  RecentLensData --> HomePage
  RecentLensData --> UpdatesPage

  LensPage --> SEO[src/utils/seo and SEOHead]
  ComparePage --> SEO
  IndexPage --> SEO
  ClusterPages --> SEO
  ArticleRoutes --> Markdown[src/components/markdown/ThemedMarkdown.tsx]
  UpdatesPage --> StaticShell[src/components/layout/StaticPageShell.tsx]

  LensPage --> Fallback[SSR text fallback]
  ComparePage --> Fallback
  LensPage --> ClientOnly[src/components/ClientOnly.tsx]
  ComparePage --> ClientOnly
  ClientOnly --> Viewer[src/components/layout/LensViewer.tsx]
```

## Lens Viewer Runtime

`LensViewer` owns the interactive session around one runtime lens. Controls dispatch state updates, URL sync preserves
shareable view state, and the diagram panel recomputes derived optical output from the current state.

```mermaid
flowchart LR
  LensPage[LensPage or ComparePage ClientOnly] --> LensViewer[src/components/layout/LensViewer.tsx]
  LensViewer --> StateHook[src/utils/state/useLensState.ts]
  StateHook --> Reducer[src/utils/state/lensReducer.ts]
  StateHook --> Preferences[src/utils/state/usePreferences.ts]
  LensViewer --> UrlSync[src/utils/state/useURLSync.ts]
  UrlSync --> UrlState[src/utils/state/lensViewUrlState.ts]
  LensViewer --> CompareOrchestration[src/comparison/useComparisonOrchestration.ts]
  LensViewer --> OverlayHook[src/components/hooks/useOverlays.ts]

  Reducer --> Context[src/utils/state/LensContext.ts]
  Preferences --> Context
  UrlSync --> Context
  CompareOrchestration --> Context
  OverlayHook --> Context
  Context --> Chrome[src/components/layout/lensViewer/ViewerChrome.tsx]
  Context --> Content[src/components/layout/lensViewer/ViewerContent.tsx]
  Context --> ViewerOverlays[src/components/layout/lensViewer/ViewerOverlays.tsx]

  Chrome --> Controls[src/components/controls]
  Content --> SingleLens[src/components/layout/SingleLensContent.tsx]
  Content --> CompareContent[src/comparison/ComparisonContent.tsx]
  SingleLens --> DiagramPanel[src/components/layout/LensDiagramPanel.tsx]
  SingleLens --> Description[src/components/layout/DescriptionPanel.tsx]
  CompareContent --> CompareLayout[src/comparison/ComparisonLayout.tsx]
  CompareContent --> SharedSliders[src/comparison/SharedSlidersBar.tsx]
  CompareLayout --> DiagramPanel
  DiagramPanel --> Drawer[Analysis drawer]

  Controls --> Actions[lens view ray theme actions]
  SharedSliders --> Actions
  Actions --> Reducer
  Reducer --> UrlSync
  DiagramPanel --> Drawer
```

## Diagram Computation

The diagram is still SVG-only. Hook output is assembled into layers, then `DiagramSVG` renders lens geometry, stops,
rays, overlays, labels, error tiers, and analysis affordances.

```mermaid
flowchart TD
  Panel[src/components/layout/LensDiagramPanel.tsx] --> Compute[src/components/hooks/useLensComputation.ts]
  Panel --> Trace[src/components/hooks/useRayTracing.ts]
  Panel --> Zoom[src/components/hooks/useViewBoxZoom.ts]
  Panel --> PanelOverlays[src/components/hooks/useOverlayState.ts]

  Compute --> BuildLens[src/optics/buildLens.ts]
  BuildLens --> Validate[src/optics/validateLensData.ts]
  BuildLens --> Glass[src/optics/glassCatalog.ts and dispersion.ts]
  BuildLens --> Runtime[RuntimeLens]
  Runtime --> Path[opticalPath imagePlane folded metadata]
  Runtime --> Layout[src/optics/optics.ts doLayout]
  Layout --> Geometry[src/optics/diagramGeometry.ts]
  Geometry --> Shapes[SVG-ready lens shapes and scales]
  Runtime --> FieldGeometry[current-state field geometry and cardinals]

  Runtime --> Trace
  Path --> Trace
  Trace --> OnAxis[src/components/hooks/useOnAxisRays.ts]
  Trace --> OffAxis[src/components/hooks/useOffAxisRays.ts]
  Trace --> Chromatic[src/components/hooks/useChromaticRays.ts]
  OnAxis --> Segments[Ray segments and statuses]
  OffAxis --> Segments
  Chromatic --> Segments

  Shapes --> Loaded[src/components/layout/lensDiagram/LensDiagramLoadedState.tsx]
  Segments --> Loaded
  FieldGeometry --> Loaded
  Zoom --> Loaded
  PanelOverlays --> Loaded
  Loaded --> Viewport[src/components/layout/lensDiagram/DiagramViewport.tsx]
  Loaded --> ControlPanel[src/components/layout/DiagramControlPanel.tsx]
  Viewport --> DiagramSVG[src/components/diagram/DiagramSVG.tsx]
  Viewport --> AnalysisDrawer[src/components/layout/AnalysisDrawer.tsx]
  AnalysisDrawer --> AnalysisContent[src/components/layout/lensDiagram/AnalysisDrawerContent.tsx]
  DiagramSVG --> Output[Inline SVG diagram]
```

## Optics And Analysis Engine

Most optical code is pure and receives the runtime lens object plus current viewer state. Analysis tabs should compute
from slider state at render time instead of caching slider-dependent results in `buildLens()`.

```mermaid
flowchart TD
  Runtime[RuntimeLens] --> Inputs[Viewer state: focus zoom aperture field wavelength movement]
  Inputs --> Projection[src/optics/projection.ts]
  Inputs --> Field[src/optics/fieldGeometry.ts]
  Inputs --> Movement[src/optics/lensMovement.ts]
  Inputs --> Prepared[src/optics/compat.ts prepareRuntimeState]
  Runtime --> Prepared[src/optics/compat.ts prepareRuntimeState]

  Projection --> TraceCore[src/optics/rayTrace.ts]
  Field --> TraceCore
  Runtime --> TraceCore
  TraceCore --> Exact[src/optics/internal exact surface tracing]
  Exact --> Intersections[src/optics/internal surface intersection]
  Runtime --> Folded[folded optical path image plane annular masks]
  Folded --> Exact
  Intersections --> RayResults[Ray paths statuses pupils focal data]

  Prepared --> AnalysisJobs[src/optics/compat.ts analysisJobsForState2]
  Inputs --> AnalysisJobs
  Projection --> AnalysisJobs
  Field --> AnalysisJobs
  AnalysisJobs --> Aberrations[src/optics/aberration and aberrationAnalysis.ts]
  AnalysisJobs --> Distortion[src/optics/distortionAnalysis.ts]
  AnalysisJobs --> Vignetting[src/optics/vignetteAnalysis.ts]
  AnalysisJobs --> Pupils[src/optics/pupilAberration.ts]
  AnalysisJobs --> Bokeh[src/optics/aberration/bokeh.ts]
  AnalysisJobs --> Cardinal[src/optics/cardinalElements.ts]
  AnalysisJobs --> Groups[src/optics/groupMovement.ts]

  Aberrations --> DrawerTabs[src/components/display analysis tabs]
  Distortion --> DrawerTabs
  Vignetting --> DrawerTabs
  Pupils --> DrawerTabs
  Bokeh --> DrawerTabs
  Cardinal --> DrawerTabs
  Groups --> DrawerTabs
  RayResults --> DiagramLayers[Diagram ray layers and overlays]
  Movement --> DiagramLayers
  DrawerTabs --> Renderers[src/components/layout/lensDiagram/analysisTabRenderers.tsx]
```

## Catalog And Content Feedback Loops

Lens data and markdown content are auto-discovered. Generated metadata feeds route listings and SEO, while runtime lens
construction validates prescription details and glass identifiers when a viewer needs the lens.

```mermaid
flowchart LR
  LensFiles[src/lens-data data files] --> Catalog[src/utils/catalog/lensCatalog.ts]
  LensFiles --> Metadata[scripts/generate-build-metadata.mjs]
  AnalysisFiles[src/lens-data analysis markdown] --> Metadata
  Articles[src/content markdown] --> Metadata
  Metadata --> Generated[src/generated build metadata]
  Metadata --> Routes[concrete route list]

  Generated --> LensIndex[src/pages/lensIndex filters and results]
  Generated --> SEO[SEO metadata, freshness, homepage, updates]
  Routes --> Prerender[scripts/prerender.mjs]
  Routes --> Sitemap[scripts/generate-sitemap.mjs]

  Catalog --> BuildLens[src/optics/buildLens.ts]
  BuildLens --> Runtime[RuntimeLens]
  Runtime --> Viewer[LensViewer]
  AnalysisFiles --> Markdown[ThemedMarkdown lens notes]
  Articles --> Markdown
  Markdown --> SEO
```
