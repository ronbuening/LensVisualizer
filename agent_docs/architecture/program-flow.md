# Program Flow

High-level data and control flow for LensVisualizer. Use this as a map before jumping into the focused architecture docs.

## Build And Deploy Pipeline

The production site is static output from Vite plus prerendered route HTML. Cloudflare Pages serves the generated
`dist/` directory.

```mermaid
flowchart TD
  subgraph Source[Source content]
    LensData[src/lens-data maker data files]
    LensNotes[src/lens-data analysis markdown]
    Articles[src/content markdown articles]
    Routes[src/routes route manifest]
    App[src pages components optics utilities]
  end

  LensData --> Organize[scripts/organize-lens-data.mjs]
  Organize --> Metadata[scripts/generate-build-metadata.mjs]
  LensNotes --> Metadata
  Articles --> Metadata
  Routes --> Metadata
  Metadata --> Generated[src/generated build metadata]

  App --> Vite[Vite client build]
  Generated --> Vite
  Routes --> Vite
  Vite --> Prerender[scripts/prerender.mjs]
  Generated --> Prerender
  Prerender --> Sitemap[scripts/generate-sitemap.mjs]
  Sitemap --> Dist[dist static site]
  Dist --> Cloudflare[Cloudflare Pages]
```

## Route And Page Shell

All user-facing pages pass through the shared route manifest. The route target decides whether the page renders a lens
viewer, comparison view, index page, article, or static content page.

```mermaid
flowchart TD
  Browser[Browser URL] --> Router[src/router.tsx]
  Router --> Manifest[src/routes/routeManifest.tsx]
  Manifest --> Target{Route target}

  Target -->|Lens detail| LensPage[src/pages/LensPage.tsx]
  Target -->|Compare| ComparePage[src/comparison]
  Target -->|Lens library| IndexPage[src/pages/lensIndex]
  Target -->|Article| ArticlePage[src/pages Article route]
  Target -->|Static page| StaticPage[src/pages static route]

  Generated[src/generated metadata] --> Manifest
  Catalog[src/utils/catalog/lensCatalog.ts] --> LensPage
  Catalog --> ComparePage
  Catalog --> IndexPage
  Content[src/content markdown] --> ArticlePage

  LensPage --> SEO[src/utils/seo and SEOHead]
  ComparePage --> SEO
  IndexPage --> SEO
  ArticlePage --> Markdown[src/components/markdown/ThemedMarkdown.tsx]
  StaticPage --> Markdown

  LensPage --> Viewer[src/components/layout/LensViewer.tsx]
  ComparePage --> Viewer
```

## Lens Viewer Runtime

`LensViewer` owns the interactive session around one runtime lens. Controls dispatch state updates, URL sync preserves
shareable view state, and the diagram panel recomputes derived optical output from the current state.

```mermaid
flowchart LR
  LensPage[Lens page or compare panel] --> LensViewer[src/components/layout/LensViewer.tsx]
  LensViewer --> StateHook[src/utils/state/useLensState.ts]
  StateHook --> Reducer[src/utils/state/lensReducer.ts]
  StateHook --> Preferences[src/utils/state/usePreferences.ts]
  StateHook --> UrlState[src/utils/state/lensViewUrlState.ts]
  UrlState --> UrlSync[src/utils/state/lensViewUrlSync.ts]

  Reducer --> Context[src/utils/state/LensContext.ts]
  Preferences --> Context
  UrlSync --> Context
  Context --> Chrome[src/components/layout/lensViewer/ViewerChrome.tsx]
  Context --> Content[src/components/layout/lensViewer/ViewerContent.tsx]

  Chrome --> Controls[src/components/controls]
  Content --> DiagramPanel[src/components/layout/LensDiagramPanel.tsx]
  Content --> Description[src/components/display and markdown]
  Content --> Drawer[Analysis drawer]

  Controls --> Actions[focus zoom aperture field wavelength movement theme]
  Actions --> Reducer
  Reducer --> DiagramPanel
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
  Panel --> Overlays[src/components/hooks/useOverlays.ts]

  Compute --> BuildLens[src/optics/buildLens.ts]
  BuildLens --> Validate[src/optics/validateLensData.ts]
  BuildLens --> Glass[src/optics/glassCatalog.ts and dispersion.ts]
  BuildLens --> Runtime[RuntimeLens]
  Runtime --> Layout[src/optics/layout.ts]
  Layout --> Geometry[src/optics/diagramGeometry.ts]
  Geometry --> Shapes[SVG-ready lens shapes and scales]

  Runtime --> Trace
  Trace --> OnAxis[src/components/hooks/useOnAxisRays.ts]
  Trace --> OffAxis[src/components/hooks/useOffAxisRays.ts]
  Trace --> Chromatic[src/components/hooks/useChromaticRays.ts]
  OnAxis --> Segments[Ray segments and statuses]
  OffAxis --> Segments
  Chromatic --> Segments

  Shapes --> Viewport[src/components/layout/lensDiagram/DiagramViewport.tsx]
  Segments --> Viewport
  Zoom --> Viewport
  Overlays --> Viewport
  Viewport --> DiagramSVG[src/components/diagram/DiagramSVG.tsx]
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

  Projection --> TraceCore[src/optics/rayTrace.ts]
  Field --> TraceCore
  Movement --> TraceCore
  Runtime --> TraceCore
  TraceCore --> Exact[src/optics/internal exact surface tracing]
  Exact --> Intersections[src/optics/internal surface intersection]
  Intersections --> RayResults[Ray paths statuses pupils focal data]

  Runtime --> AnalysisJobs[src/optics/analysisJobs.ts]
  RayResults --> AnalysisJobs
  Inputs --> AnalysisJobs
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
```

## Catalog And Content Feedback Loops

Lens data and markdown content are auto-discovered. Generated metadata feeds route listings and SEO, while runtime lens
construction validates prescription details and glass identifiers when a viewer needs the lens.

```mermaid
flowchart LR
  LensFiles[src/lens-data data files] --> Catalog[src/utils/catalog/lensCatalog.ts]
  LensFiles --> Generated[src/generated metadata]
  AnalysisFiles[src/lens-data analysis markdown] --> Generated
  Articles[src/content markdown] --> Generated

  Generated --> LensIndex[src/pages/lensIndex filters and results]
  Generated --> SEO[SEO metadata and sitemap]
  Generated --> Routes[src/routes route data]

  Catalog --> BuildLens[src/optics/buildLens.ts]
  BuildLens --> Runtime[RuntimeLens]
  Runtime --> Viewer[LensViewer]
  AnalysisFiles --> Markdown[ThemedMarkdown lens notes]
  Articles --> Markdown
  Markdown --> SEO
```
