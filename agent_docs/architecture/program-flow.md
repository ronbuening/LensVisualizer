# Program Flow

High-level data and control flow for LensVisualizer. Use this as a map before jumping into the focused architecture
docs: the build/deploy pipeline and content registries are described in `routing-and-content.md`, viewer wiring in
`viewer-and-diagram.md`, and the engine in `optics-engine.md`.

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

## Diagram Computation

The diagram is SVG-only. Hook output is assembled into layers, then `DiagramSVG` renders lens geometry, stops, rays,
overlays, labels, error tiers, and analysis affordances.

```mermaid
flowchart TD
  Panel[src/components/layout/LensDiagramPanel.tsx] --> Compute[src/components/hooks/useLensComputation.ts]
  Panel --> Trace[src/components/hooks/useRayTracing.ts]
  Panel --> Zoom[src/components/hooks/useViewBoxZoom.ts]
  Panel --> PanelOverlays[src/components/hooks/useOverlayState.ts]

  Compute --> BuildLens[src/optics/buildLens.ts]
  BuildLens --> Validate[src/optics/prescription/validate/]
  BuildLens --> Glass[src/optics/chromatic/]
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

Analysis families take an `AnalysisRequest`; field and trace helpers take prepared geometry, and UI adapters take
`RuntimeLens`. See `optics-engine.md` for ownership, physical conventions and analysis availability.

```mermaid
flowchart TD
  V2[Authored V2 file] --> Ingest[src/optics/prescription/ingestV2.ts]
  Ingest --> Canonical[Canonical prescription and provenance]
  Canonical --> Compile[src/optics/prescription/compile.ts]
  Compile --> Validate[src/optics/prescription/validate/]
  Compile --> Glass[src/optics/chromatic/]
  Compile --> Compiled[CompiledLens]
  Compiled --> Runtime[RuntimeLens read model]
  Compiled --> Prepared[src/optics/state/preparedGeometry.ts]
  Runtime --> Adapter[src/optics/buildLens.ts prepareRuntimeState]
  Controls[Focus zoom aberration controls] --> Adapter
  Adapter --> Prepared
  Prepared --> TraceGeometry[TraceGeometry]
  TraceGeometry --> Trace[src/optics/trace/]
  Trace --> Intersect[src/optics/geometry/intersect.ts]
  Intersect --> Rays[Ray paths and statuses]
  Prepared --> Request[src/optics/analysis/request.ts]
  Aperture[Aperture field sampling and optional pose] --> Request
  Request --> Jobs[src/optics/analysis/analysisJobs.ts]
  Jobs --> Families[src/optics/analysis/ and perspective/analysis/]
  Families --> Drawer[Analysis drawer tabs]
  Rays --> Diagram[SVG ray layers]
```
