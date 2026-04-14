# Architecture — LensVisualizer

## Module Organization

### Pages & Routing

| Module | Location | Purpose |
|--------|----------|---------|
| `router.tsx` | `src/` | React Router route definitions (createBrowserRouter) |
| `entry-server.tsx` | `src/` | SSR render function for static prerendering |
| `HomePage.tsx` | `src/pages/` | Interactive LensViewer; handles legacy `?lens=KEY` → `/lens/KEY` redirects |
| `LensPage.tsx` | `src/pages/` | Individual lens page at `/lens/:slug` with SEO content + interactive visualizer |
| `LensIndexPage.tsx` | `src/pages/` | Browsable lens library at `/lenses`, with maker/focal/patent grouping plus custom filters |
| `MakerPage.tsx` | `src/pages/` | Maker page at `/makers/:maker`, lists maker's lenses |
| `MakersIndexPage.tsx` | `src/pages/` | Maker index at `/makers`, lists all makers with lens counts |
| `ComparePage.tsx` | `src/pages/` | Comparison page at `/compare/:slugA/:slugB` with SEO metadata |
| `ArticlePage.tsx` | `src/pages/` | Individual article page at `/articles/:slug`; resets scroll to the top when the article slug changes during SPA navigation |
| `ArticlesPage.tsx` | `src/pages/` | Articles index at `/articles`; resets scroll to the top on mount so archive visits start at the page heading |
| `NotFoundPage.tsx` | `src/pages/` | 404 catch-all with navigation links |

### Layout Components

| Module | Location | Purpose |
|--------|----------|---------|
| `LensViewer.tsx` | `src/components/layout/` | Orchestration: state management, context provision, layout composition |
| `TopBar.tsx` | `src/components/layout/` | Lens selectors, compare button, about buttons |
| `ControlsBar.tsx` | `src/components/layout/` | Theme/ray/chromatic/scale toggles (compact + full modes) |
| `ViewToggleBar.tsx` | `src/components/layout/` | Generic view-mode toggle (mobile + desktop) |
| `OverlayModal.tsx` | `src/components/layout/` | Generic backdrop + modal + close button |
| `LensDiagramPanel.tsx` | `src/components/layout/` | Diagram composition: wires hooks + sub-components |
| `DescriptionPanel.tsx` | `src/components/layout/` | Markdown panel with themed styling |
| `BreadcrumbBar.tsx` | `src/components/layout/` | Breadcrumb navigation (Home / Makers / {Maker} / {Lens Name}) for lens pages |
| `PageNavBar.tsx` | `src/components/layout/` | Shared navigation bar for static pages with theme toggle |
| `PanelOverlay.tsx` | `src/components/layout/` | Panel-scoped overlay (position:absolute) for diagram-level LCA/Petzval overlays |
| `AnalysisDrawer.tsx` | `src/components/layout/` | Sliding tabbed panel overlaying SVG viewport for analysis views (aberrations, distortion, breathing, vignetting) |
| `DiagramControlPanel.tsx` | `src/components/layout/` | Sliders, inspector, legend, and analysis launch button extracted from LensDiagramPanel |
| `SingleLensContent.tsx` | `src/components/layout/` | Single-lens diagram + description layout |
| `DropdownPanel.tsx` | `src/components/layout/` | Portal-based dropdown panel for settings/theme overlays |
| `PrimerToggleButton.tsx` | `src/components/layout/` | Shared button for switching between simple/intermediate primer levels |
| `AnalysisDrawerContent.tsx` | `src/components/layout/lensDiagram/` | Tab-to-panel router for the analysis drawer content inside LensDiagramPanel |
| `DiagramViewport.tsx` | `src/components/layout/lensDiagram/` | SVG viewport wrapper with LCA/Petzval overlay gating, zoom/pan toggle, and keyboard shortcut handling |
| `analysisTabs.ts` | `src/components/layout/lensDiagram/` | Shared analysis tab metadata used by the drawer trigger and drawer content |

### Hooks

| Module | Location | Purpose |
|--------|----------|---------|
| `useLensComputation.ts` | `src/components/hooks/` | Hook: lens building, layout, transforms, shapes, aperture |
| `useRayTracing.ts` | `src/components/hooks/` | Hook: orchestrates on-axis, off-axis, chromatic ray sub-hooks |
| `useOnAxisRays.ts` | `src/components/hooks/` | Hook: on-axis ray fan computation |
| `useOffAxisRays.ts` | `src/components/hooks/` | Hook: off-axis field ray computation |
| `useChromaticRays.ts` | `src/components/hooks/` | Hook: chromatic tracing + spread computation |
| `useFlashOverlay.ts` | `src/components/hooks/` | Hook: flash animation state machine for sticky slider feedback |
| `useSideLayoutDetection.ts` | `src/components/hooks/` | Hook: ResizeObserver overflow detection with hysteresis |
| `useDispatchAdapters.ts` | `src/components/hooks/` | Hook: context dispatch callback wiring for LensDiagramPanel children |
| `useOverlayState.ts` | `src/components/hooks/` | Hook: Abbe/LCA/Petzval overlay open/close state with lensKey reset |
| `useOverlays.ts` | `src/components/hooks/` | Hook: combines overlay state with dispatch adapters for LensViewer |
| `useHeaderHeight.ts` | `src/components/hooks/` | Hook: header ResizeObserver height tracking for multi-panel alignment |
| `useViewBoxZoom.ts` | `src/components/hooks/` | Hook: SVG viewBox-based zoom/pan with wheel, drag, pinch, and keyboard support |
| `raySegmentUtils.ts` | `src/components/hooks/` | Pure utilities: `compileRaySegment()` (shared ray segment compilation) and `filterChannels()` (chromatic channel filter) |

### Controls

| Module | Location | Purpose |
|--------|----------|---------|
| `DiagramHeader.tsx` | `src/components/controls/` | Header: title, specs, composes RayToggles + ChromaticControls |
| `RayToggles.tsx` | `src/components/controls/` | On-axis/off-axis toggle buttons with cycling logic |
| `ChromaticControls.tsx` | `src/components/controls/` | COLOR master toggle + R/G/B channel buttons |
| `DiagramControls.tsx` | `src/components/controls/` | Zoom, focus, aperture sliders (composes SliderControl) |
| `SliderControl.tsx` | `src/components/controls/` | Reusable slider with label, endpoints, collapsible content |
| `CollapseButton.tsx` | `src/components/controls/` | Shared LESS/MORE toggle pill used by DiagramHeader, SliderControl, and DiagramLegend |
| `LensSelector.tsx` | `src/components/controls/` | Custom dropdown with portal-based rendering, viewport-aware positioning, keyboard escape |

### Diagram (SVG)

| Module | Location | Purpose |
|--------|----------|---------|
| `DiagramSVG.tsx` | `src/components/diagram/` | SVG rendering: composes RayPolylines, ApertureStop, ElementAnnotations, LCAInsetWidget; accepts viewBox override and zoom interaction handlers |
| `RayPolylines.tsx` | `src/components/diagram/` | Consolidated ray segment polyline rendering |
| `ApertureStop.tsx` | `src/components/diagram/` | Aperture stop blades + STO label; outer edge extends to `stopHousingSD` (adjacent surface min-SD) for visibility on fast lenses |
| `ElementAnnotations.tsx` | `src/components/diagram/` | Element numbers, Abbe νd badges, group/doublet labels |
| `LCAInsetWidget.tsx` | `src/components/diagram/` | Magnified LCA inset with auto-scaled wavelength offsets |
| `LCAOverlayContent.tsx` | `src/components/diagram/` | Enlarged LCA visualization with description, rendered inside PanelOverlay |
| `PetzvalOverlayContent.tsx` | `src/components/diagram/` | Enlarged Petzval sum visualization with description, rendered inside PanelOverlay |
| `PetzvalSumBadge.tsx` | `src/components/diagram/` | SVG overlay badge showing Petzval sum (P) and field radius (R_ptz) |

### Display

| Module | Location | Purpose |
|--------|----------|---------|
| `ElementInspector.tsx` | `src/components/display/` | Selected element property display |
| `DiagramLegend.tsx` | `src/components/display/` | Legend with swatches, ray descriptions, aberration readouts |
| `AberrationsPanel.tsx` | `src/components/display/` | Thin aberrations container that wires the shared panel-data hook into the extracted spherical-aberration, field-curve, and astigmatism sections |
| `aberrations/` | `src/components/display/aberrations/` | Presentational aberration sections (`SphericalAberrationSection`, `FieldCurvatureSection`, `AstigmatismSection`), formatting helpers, and `useAberrationsPanelData` |
| `AstigmatismPlot.tsx` | `src/components/display/` | SVG chart plotting in-circle tangential-sagittal split magnitude separately from the field-curve charts so astigmatism can use its own scale |
| `SagittalComaPlot.tsx` | `src/components/display/` | SVG chart plotting sagittal fan x-intercepts against pupil fraction with dashed lines and square markers |
| `StandardFieldCurvaturePlot.tsx` | `src/components/display/` | SVG chart for parabasal tangential/sagittal field curves plus Petzval reference, using denser internal field sweep with standard checkpoint markers |
| `FieldCurvaturePlot.tsx` | `src/components/display/` | SVG chart for real-ray tangential/sagittal field curves from dense bundle solves, sharing the same Y-scale as the parabasal plot |
| `ChromaticFieldCurvaturePlot.tsx` | `src/components/display/` | SVG chart showing per-wavelength (R/G/B) parabasal tangential and sagittal field curves across the field |
| `DistortionTab.tsx` | `src/components/display/` | Distortion analysis tab content; memoizes computation and renders both the 1D rectilinear curve and the traced 2D chief-ray field grid |
| `DistortionChart.tsx` | `src/components/display/` | Reusable SVG line chart: distortion % vs field angle with zero line, sample dots, axis labels |
| `DistortionFieldGrid.tsx` | `src/components/display/` | Reusable SVG grid view overlaying ideal rectilinear lines with the traced chief-ray field positions across the current image circle |
| `FocusBreathingTab.tsx` | `src/components/display/` | Focus breathing tab content; reports dynamic focal-length change across focus |
| `VignettingTab.tsx` | `src/components/display/` | Vignetting tab content; memoizes computation and renders VignettingChart |
| `VignettingChart.tsx` | `src/components/display/` | Reusable SVG chart for relative illumination / geometric vignetting vs field |
| `BokehPreviewOverlay.tsx` | `src/components/display/` | Panel overlay with memoized bokeh computation showing infinity/near-focus density heatmap grids |
| `BokehPreviewGrid.tsx` | `src/components/display/` | 2×2 SVG density heatmap grid for bokeh ball visualization at four field positions |
| `AbbeDiagram.tsx` | `src/components/display/` | Abbe glass map plotting elements on standard Vd × Nd axes |
| `AboutButtonRow.tsx` | `src/components/display/` | Shared about button group (Optics, Site, Author) |
| `AboutFooter.tsx` | `src/components/display/` | Mobile-only footer rendering about buttons at page bottom |
| `ArticleTOC.tsx` | `src/components/display/` | Reusable floating table-of-contents with scrollspy for long-form markdown articles; opt-in via `toc: true` frontmatter |

### Homepage Components

| Module | Location | Purpose |
|--------|----------|---------|
| `HeroSection.tsx` | `src/components/homepage/` | Hero banner with headline, tagline, and primary CTAs |
| `RecentLenses.tsx` | `src/components/homepage/` | "Recently Added" card list from the lens catalog |
| `QuickNavCards.tsx` | `src/components/homepage/` | Quick-access navigation cards for Lenses, Makers, and Articles |
| `ArticleList.tsx` | `src/components/homepage/` | Condensed list of articles for the homepage articles section |
| `ArticleCard.tsx` | `src/components/homepage/` | Single article card used by ArticleList |
| `SeriesCard.tsx` | `src/components/homepage/` | Archive card that collapses a multi-article series into one entry with nested member links |
| `ChangelogBox.tsx` | `src/components/homepage/` | Scrollable changelog panel grouping entries by date with type badges |
| `HomeFooter.tsx` | `src/components/homepage/` | Homepage footer with about links and site credits |

### Utility Components

| Module | Location | Purpose |
|--------|----------|---------|
| `ClientOnly.tsx` | `src/components/` | SSR-safe wrapper that renders children only after hydration |
| `SEOHead.tsx` | `src/components/` | Per-page meta tags (title, OG, Twitter Card, JSON-LD) via react-helmet-async |
| `ErrorBoundary.tsx` | `src/components/errors/` | Error boundary + reusable `ErrorDisplay`. `ErrorDisplay` builds a pre-filled GitHub issue URL via `buildIssueURL`, including the error message, stack trace, React component stack, lens key, and browser UA |
| `PanelErrorBoundary.tsx` | `src/components/errors/` | Panel-level error boundary, resets on lens change; stores `componentStack` from `ErrorInfo` and passes it through to `ErrorDisplay` |

### Optics Engine

| Module | Location | Purpose |
|--------|----------|---------|
| `optics.ts` | `src/optics/` | Ray tracing, skew-ray pupil sampling (monochromatic and chromatic), sag curves, chromatic, layout geometry, chief ray solver (30-iter bisection, 1° cutoff), `slopeTrimHeight()` for aspherically-aware rendering trim |
| `buildLens.ts` | `src/optics/` | Lens construction, EFL/pupil/field computation (40-iter real-ray half-field bisection) |
| `validateLensData.ts` | `src/optics/` | Schema validation: slope-based rim check (64.2° threshold via `sagSlopeRaw`), element SD ratio (≤3.0 sanity), edge thickness, cross-gap overlap, conic h_max |
| `diagramGeometry.ts` | `src/optics/` | Coordinate transforms and per-surface-SD element shape computation with aspherically-aware slope trim |
| `lcaScaling.ts` | `src/optics/` | Fixed-reference LCA bar offset computation (anchored to REFERENCE_LCA_MM = 0.15 mm) |
| `aberrationAnalysis.ts` | `src/optics/` | Public aberration-analysis entry point that re-exports the decomposed internal helpers |
| `aberration/` | `src/optics/aberration/` | Internal aberration modules for shared ray sampling/types plus spherical aberration, meridional and sagittal coma, chromatic field curvature, field-curvature/astigmatism computations, and bokeh preview (defocused point-source density heatmaps with vignetting and SA effects) |
| `internal/` | `src/optics/internal/` | Shared optics internals for surface math, multi-surface tracing, and zoom/state derivation reused by build, trace, and validation paths |
| `distortionAnalysis.ts` | `src/optics/` | Pure distortion analysis: 1D rectilinear curve + traced 2D field grid; 17-sample pupil correction table, adaptive 1°/segment bracket search |
| `vignetteAnalysis.ts` | `src/optics/` | Pure vignetting / relative illumination: solved chief ray launch (not paraxial), adaptive ~3° field spacing, 192-ray pupil sweep |

### Utilities

| Module | Location | Purpose |
|--------|----------|---------|
| `themes.ts` | `src/utils/` | Theme factory + 4 theme definitions |
| `styles.ts` | `src/utils/` | Shared style-object factories (`labelStyle`, `collapseBtn`, `toggleBtn`, etc.) and static constants for reusable UI patterns |
| `themeConstants.ts` | `src/utils/` | Shared theme-toggle display constants (`THEME_ICON`, `THEME_LABEL`) used by PageNavBar and BreadcrumbBar |
| `themePreferences.ts` | `src/utils/` | Shared theme-mode conversion and system dark/high-contrast resolution used by page hooks and viewer chrome |
| `lensCatalog.ts` | `src/utils/` | Auto-registration of lens data via import.meta.glob |
| `lensMetadata.ts` | `src/utils/` | SEO metadata: maker extraction, page titles/descriptions, canonical URLs, JSON-LD |
| `parseComparisonParams.ts` | `src/utils/` | URL deep-link parsing, `encodeSliderParams()` (shared slider→URL encoding), and slider state persistence |
| `featureFlags.ts` | `src/utils/` | Feature flag controls |
| `errorReporting.ts` | `src/utils/` | `buildIssueURL(error, context)` — builds a pre-filled GitHub `/issues/new` URL. `IssueContext` fields: `component`, `lensKey`, `componentStack` (React component tree from `ErrorInfo`), `extra` |
| `useMediaQuery.ts` | `src/utils/` | Responsive breakpoint hook |
| `preferences.ts` | `src/utils/` | localStorage load/save |
| `lensReducer.ts` | `src/utils/` | Pure reducer: sliced state shape + action types |
| `useLensState.ts` | `src/utils/` | Hook: useReducer wrapper with prefs/URL initialization |
| `usePreferences.ts` | `src/utils/` | Hook: localStorage persistence from reducer state |
| `useURLSync.ts` | `src/utils/` | Hook: URL read/write/zoom-init |
| `LensContext.ts` | `src/utils/` | React Context: LensStateContext + LensDispatchContext |
| `usePageTheme.ts` | `src/utils/` | Hook: resolves theme from dark/HC preferences + system media query |
| `usePageThemeToggle.ts` | `src/utils/` | Hook: extends usePageTheme with dark/HC toggle cycling (auto→dark→light) |
| `zoomConversion.ts` | `src/utils/` | Pure functions: `focalLengthToZoomT()` and `zoomTToFocalLength()` for URL zoom encoding |
| `appConfig.ts` | `src/utils/` | Application-level configuration constants |
| `homepageContent.ts` | `src/utils/` | Homepage content configuration and featured lens data |
| `makerDetails.ts` | `src/utils/` | Maker display names, descriptions, and metadata |
| `changelogData.ts` | `src/utils/` | `CHANGELOG` array of `ChangelogEntry` objects powering the homepage changelog panel |
| `structuredData.ts` | `src/utils/` | JSON-LD structured-data helpers shared across page components |

### Comparison Module

All comparison-mode files live together in `src/comparison/`. This is a peer module alongside `src/components/`, `src/optics/`, and `src/utils/`.

| Module | Location | Purpose |
|--------|----------|---------|
| `ComparisonContent.tsx` | `src/comparison/` | Full comparison-mode content area: wires ComparisonLayout + SharedSlidersBar, surfaces errors |
| `ComparisonLayout.tsx` | `src/comparison/` | Side-by-side (desktop) / stacked (mobile) comparison panels |
| `SharedSlidersBar.tsx` | `src/comparison/` | Comparison mode shared focus/aperture/zoom controls |
| `useComparisonOrchestration.ts` | `src/comparison/` | Single hook for LensViewer: combines useComparisonMode + useStickySliders + enter/exit toggle + default-aperture effect |
| `useComparisonMode.ts` | `src/comparison/` | Lens building, per-lens slider mapping, normalized scale ratios, and header height alignment for comparison |
| `useStickySliders.ts` | `src/comparison/` | Sticky slider state machine for comparison mode (snap to common point behavior) |
| `comparisonSliders.ts` | `src/comparison/` | Pure functions: per-lens slider values from shared slider positions (focus, aperture, zoom) |
| `comparisonReducer.ts` | `src/comparison/` | Comparison-mode sub-reducer: shared slider updates, scale mode, enter/exit transitions |
| `comparisonURLSync.ts` | `src/comparison/` | Pathname-based comparison URL building and page-level SEO metadata for the compare route |
| `comparisonTypes.ts` | `src/comparison/` | Type definitions: `SharedSlidersSlice`, `ComparisonAction` union |

## Testing & Coverage

- Coverage runs are configured in `vite.config.js` and currently include `src/optics/**`, `src/utils/**`, `src/pages/**`, `src/routes/**`, `src/components/**`, and `src/comparison/**`.
- Shared browser/router test helpers live in `__tests__/testUtils.tsx` and cover router mounting, lens-context rendering, `matchMedia`, localStorage seeding, and `history.replaceState` mocking. Uses `@testing-library/react` for component rendering.
- Component smoke tests (`.test.tsx`) cover the analysis drawer, aberrations panel sections, page renders, URL sync branches, and page-theme hooks so the layout/orchestration seams can be refactored safely.

## Routing & SSR

The app uses React Router 7 with client-side routing and static prerendering for SEO:

- **`router.tsx`** — Defines routes via `routeManifest.tsx`: `/` (HomePage), `/lenses` (LensIndexPage), `/lens/:slug` (LensPage), `/compare/:slugA/:slugB` (ComparePage), `/makers` (MakersIndexPage), `/makers/:maker` (MakerPage), `/articles` (ArticlesPage), `/articles/:slug` (ArticlePage), `*` (NotFoundPage)
- **`entry-server.tsx`** — Exports `render(url): { html, helmet }` using `StaticRouter` + `react-helmet-async` for `scripts/prerender.mjs` to generate static HTML
- **`main.tsx`** — Client entry: mounts `RouterProvider` with the browser router
- **`ClientOnly.tsx`** — Wraps components that must not render during SSR (e.g., the interactive visualizer). Renders `null` until after hydration via `useEffect` mount detection.
- **`SEOHead.tsx`** — Sets per-page `<title>`, `<meta>`, Open Graph, Twitter Card, canonical URL, and JSON-LD structured data via react-helmet-async
- **`lensMetadata.ts`** — Pure functions for SEO: `deriveMaker()` extracts maker info from lens names, `lensPageTitle()` / `lensPageDescription()` / `lensCanonicalURL()` / `lensJsonLd()` generate page metadata. Defines `MAKER_PREFIXES` mapping and `SITE_NAME` / `SITE_URL` constants.

**Page flow:** `HomePage` renders the interactive `LensViewer` (handles legacy `?lens=KEY` redirects). `LensPage` renders SEO-friendly static content (specs, element table, analysis markdown) plus a `ClientOnly`-wrapped interactive visualizer. `LensIndexPage` provides crawlable catalog navigation with maker/focal/patent grouping plus custom filters for focal length, aperture, patent year, and maker. `MakersIndexPage` and `MakerPage` provide crawlable maker navigation.

## LensViewer.tsx — Orchestration Layer

The main component owns state management, context provision, and layout composition. All UI rendering is delegated to child components:

- **`BreadcrumbBar`** — Breadcrumb navigation (Home / Makers / {Maker} / {Lens Name}) rendered above TopBar on lens pages using react-router Links.
- **`TopBar`** — Lens selectors, compare button, about buttons. Receives named callbacks (no reducer knowledge). Uses `LensSelector` (portal-based custom dropdown with viewport-aware positioning and keyboard escape).
- **`ControlsBar`** — Theme/ray/chromatic/scale toggles. Unified component with `compact` prop (full labels for comparison mode, condensed for mobile). `showScaleMode` controls whether the scale mode toggle is rendered.
- **`ViewToggleBar`** — Generic view-mode toggle. Used for both mobile (DIAGRAM/ANALYSIS) and desktop (DIAGRAM/BOTH/ANALYSIS) switching.
- **`ComparisonLayout`** — Renders two `LensDiagramPanel` instances side-by-side (desktop) or stacked (mobile) with dividers.
- **`OverlayModal`** — Generic backdrop + modal + close button with optional `maxWidth` override. Used for "About Site", "About Author", and "Optics Primer" overlays.
- **`AboutButtonRow`** — Shared button group (Optics, Site, Author) with optional label. Used by TopBar (inline on desktop) and AboutFooter (standalone on mobile).
- **`AboutFooter`** — Mobile-only footer delegating to `AboutButtonRow` with `showLabel` for consistent button rendering.
- **`PrimerToggleButton`** — Shared link-styled button for switching between simple/intermediate primer levels in overlay modals.

**State management** is organized via `useReducer` (wrapped in `useLensState`), with state split into 7 slices: `lens`, `display`, `rays`, `sliders`, `sharedSliders`, `panels`, `overlays`. Extracted hooks:
- `usePreferences(state)` — persists preferences to localStorage
- `useURLSync(state, dispatch, comparisonLenses)` — URL deep links + zoom init
- `useStickySliders(dispatch, focusPair, aperturePair, comparisonLenses)` — comparison slider state machine

State is provided to children via `LensStateContext` (state + theme + isWide) and `LensDispatchContext` (stable dispatch ref). Diagram rendering is delegated to `LensDiagramPanel`.

## LensDiagramPanel.tsx — Diagram Composition Layer

Orchestrates sub-components and custom hooks. Owns only hover/selection state and structural layout wiring.

Extracted hooks (all in `src/components/hooks/`):
- **`useLensComputation.ts`** — Hook: lens building, layout, coordinate transforms, element shapes, aperture calculations. Returns `buildError` (thrown by `buildLens`) and `shapeError` (thrown by `computeElementShapes`) separately so the panel can surface both via `ErrorDisplay`
- **`useRayTracing.ts`** — Hook: orchestrates ray sub-hooks (useOnAxisRays, useOffAxisRays, useChromaticRays). Aggregates errors from all three into a single `rayError` (first non-null)
- **`useOnAxisRays.ts`** — Hook: on-axis ray fan computation + coordinate transform. Returns `{ segments, error }` — caught errors are surfaced rather than silently dropped
- **`useOffAxisRays.ts`** — Hook: off-axis field ray computation with trueAngle/edge projection modes. Returns `{ segments, error }`
- **`useChromaticRays.ts`** — Hook: chromatic tracing across R/G/B channels + LCA/TCA spread computation. Returns `{ chromaticRays, chromSpread, error }`
- **`useFlashOverlay.ts`** — Hook: two-phase flash animation state machine for sticky slider feedback
- **`useSideLayoutDetection.ts`** — Hook: ResizeObserver-based overflow detection with hysteresis for side-by-side layout
- **`useDispatchAdapters.ts`** — Hook: reads context dispatch and returns named callback adapters for child components
- **`useOverlayState.ts`** — Hook: Abbe/LCA/Petzval overlay open/close state with lensKey reset
- **`useHeaderHeight.ts`** — Hook: header ResizeObserver height tracking for multi-panel alignment

**Error display tiers** (in render order — first truthy wins):
1. `buildError` — `buildLens()` threw (bad lens data); shown via `ErrorDisplay`
2. `shapeError` — `computeElementShapes()` threw; shown via `ErrorDisplay`
3. `rayError` — any ray-trace sub-hook threw; shown via `ErrorDisplay`
4. `PanelErrorBoundary` — catches any render-phase error not caught above

All `ErrorDisplay` instances include a pre-filled "Report Issue on GitHub" link built by `buildIssueURL` with component name, lens key, and (for render errors) the React component stack.

Sub-components:
- **`PanelErrorBoundary.tsx`** (`src/components/errors/`) — Panel-level error boundary that resets automatically on lens change; captures React's `componentStack` and forwards it to `buildIssueURL`
- **`DiagramHeader.tsx`** (`src/components/controls/`) — Title, specs, composes RayToggles + ChromaticControls (uses `forwardRef` for height measurement)
  - **`RayToggles.tsx`** — On-axis/off-axis toggle buttons with off-axis cycling logic and feature flag awareness
  - **`ChromaticControls.tsx`** — COLOR master toggle + individual R/G/B channel buttons
- **`DiagramSVG.tsx`** (`src/components/diagram/`) — SVG rendering: defs, grid, composes RayPolylines, element shapes, aspheric overlays, ApertureStop, image plane, LCAInsetWidget, ElementAnnotations, flash overlay
  - **`RayPolylines.tsx`** — Consolidated ray segment polyline rendering (solid + ghost paths)
  - **`ApertureStop.tsx`** — Aperture stop blades + STO label; outer edge at `stopHousingSD` (min of adjacent surface SDs, floored at `stopPhysSD`)
  - **`ElementAnnotations.tsx`** — Element number labels, Abbe νd badges, group/doublet labels
  - **`LCAInsetWidget.tsx`** — Magnified LCA inset with auto-scaled wavelength offsets (clamped at 5000×)
  - **`LCAOverlayContent.tsx`** — Enlarged LCA visualization with description, rendered inside PanelOverlay on click
  - **`PetzvalOverlayContent.tsx`** — Enlarged Petzval sum visualization with description, rendered inside PanelOverlay on click
- **`PetzvalSumBadge.tsx`** — SVG overlay badge showing Petzval sum (P) and field radius (R_ptz) in diagram upper-left
- **`PanelOverlay.tsx`** (`src/components/layout/`) — Panel-scoped overlay (position:absolute, not fixed) for diagram-level measure overlays
- **`AnalysisDrawer.tsx`** (`src/components/layout/`) — Sliding tabbed panel overlaying SVG viewport; desktop: vertical tab bar on left, mobile: horizontal tab bar on top. Tab content components: AberrationsPanel, DistortionTab, FocusBreathingTab, and VignettingTab. Controlled by `analysisDrawerOpen` / `analysisDrawerTab` in panels slice.
- **`DiagramControlPanel.tsx`** (`src/components/layout/`) — Sliders, inspector, legend, and analysis launch button; composes DiagramControls, ElementInspector, DiagramLegend
- **`DiagramControls.tsx`** (`src/components/controls/`) — Zoom, focus, aperture sliders (composes SliderControl)
  - **`SliderControl.tsx`** — Reusable slider with label, value display, endpoints, optional collapsible content
- **`ElementInspector.tsx`** (`src/components/display/`) — Selected element property display (nd, νd, FL, glass, aspheric coefficients, chromatic data)
- **`DiagramLegend.tsx`** (`src/components/display/`) — Legend with color swatches, ray mode descriptions, chromatic aberration readouts
- **`AbbeDiagram.tsx`** (`src/components/display/`) — Abbe glass map plotting each element on standard Vd × Nd axes with grid, scaling, and element labels
- **`AberrationsPanel.tsx`** (`src/components/display/`) — Collapsible analysis panel that renders separate spherical-aberration, field-curve, and astigmatism sections; computes the shared SA and field-curvature data via `useAberrationsPanelData()` from current slider state so the field curves can use an independent shift scale while the astigmatism section omits out-of-image-circle split values

Reads shared state (rays, display, panels) from `LensContext`. Per-instance props (lensKey, per-lens slider values, scaleRatio, panelId, compact, flashOverlay) are passed as explicit props. Sub-components remain context-unaware.

## buildLens.ts

- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, layout geometry, and zoom fields (`isZoom`, `zoomPositions`, `zoomEFLs`, `zoomEPs`, `zoomHalfFields`, `zoomYRatios`, `zoomBs`). For zoom lenses, `totalTrack` uses the maximum across all zoom positions. Also derives `stopPhysSD` (physical aperture SD via real ray trace), `bladeStubFrac` (aberration-corrected blade inner edge position), and `stopHousingSD` (iris housing outer boundary = min of adjacent surface SDs, floored at `stopPhysSD`).
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

## optics.ts

Pure functions for optical calculations and SVG layout:
- **Sag curves:** `sag()`, `renderSag()`, `sagSlope()`, `sagSlopeRaw()` (shared core math also used by `buildLens.ts`)
- **Layout:** `doLayout(focusT, zoomT, L)`, `gapTrimHeight()`, `thick(i, focusT, zoomT, L)`
- **Ray tracing:** `traceRay(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L)`, `traceToImage(y0, u0, focusT, zoomT, L)`
- **Paraxial state tracing:** `traceParaxialRay(y0, u0, focusT, zoomT, L)` for current-state paraxial references
- **Chromatic tracing:** `wavelengthNd()`, `traceRayChromatic(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel)`, `computeChromaticSpread()`
- **Zoom interpolation:** `eflAtZoom(zoomT, L)`, `epAtZoom(zoomT, L)`, `fopenAtZoom(zoomT, L)`, `halfFieldAtZoom(zoomT, L)`, `yRatioAtZoom(zoomT, L)`, `bAtZoom(zoomT, L)` — piecewise-linear interpolation of derived constants across zoom positions
- **Current-state pupil geometry:** `entrancePupilAtState(stopSD, focusT, zoomT, L)` derives entrance-pupil size from the current front-group state instead of the build-time infinity-only value
- **Utilities:** `conjugateK(focusT, zoomT, L)`, `formatDist()`, `formatPetzvalRadius()` (shared Petzval field radius formatter)
- **Constants:** `FLAT_R_THRESHOLD`, `FOCUS_INFINITY_THRESHOLD`, `SVG_PATH_SUBDIVISIONS`

All trace/layout functions accept a `zoomT` parameter (default `0`). For prime lenses, `zoomT` has no effect.

No React dependencies — fully testable in isolation.

## lcaScaling.ts

Pure-function LCA scaling for consistent magnification across different lenses:
- **`computeLcaBarOffsets(spread, effectiveSC)`** — Computes pixel offsets for LCA wavelength bars using a fixed reference (`REFERENCE_LCA_MM = 0.15 mm`) rather than auto-scaling per lens. This ensures visual consistency: the same physical LCA always produces the same visual offset.

No React dependencies — fully testable in isolation.

## aberrationAnalysis.ts

Public barrel for the decomposed aberration modules under `src/optics/aberration/`. All functions accept the runtime lens object L and current slider-derived parameters — no build-time dependencies, no React dependencies.

- **`computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)`** — Computes longitudinal spherical aberration by tracing a marginal ray (0.95× EP, with fallbacks to 0.90/0.85/0.80 if clipped) via exact Snell's law and comparing its axial intercept against a true current-state paraxial reference. Averages ±Y marginal rays for symmetry. Returns `{saMm, saUm, realIntercept, paraxialIntercept}` or null if all marginal fractions are clipped.
- **`computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)`** — Samples the entrance pupil across aperture zones and returns the longitudinal spherical-aberration profile used by the analysis chart.
- **`computeComaPointCloudPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)`** — Traces a denser fixed circular pupil pattern for the representative spot-diagram tiles, returning chief-ray-referenced point clouds plus centroid / RMS spot-radius metrics used by both the traced spot view and the idealized coma comparison.
- **`computeSagittalComa(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)`** — Traces a sagittal pupil fan at the configured off-axis field fraction and returns x-intercept spread, complementing the existing meridional (tangential) coma analysis.
- **`computeFieldCurvature(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, chromatic?)`** — Computes parabasal tangential and sagittal field curves from chief-ray-relative parabasal rays, plus real-ray field curves from dense bundle solves, and overlays Petzval shifts across fixed field fractions. The shared Y-scale range covers both methods. When `chromatic=true`, additionally traces R/G/B channels and reports per-wavelength field curves plus a `chromaticFocusSpreadMm` summary.

Sign convention: negative SA = undercorrected (real marginal focus closer to the lens than paraxial); positive SA = overcorrected.

This module is now accuracy-sensitive: the panel copy, tests, and optics primers all use the same sign convention.

## distortionAnalysis.ts

Pure-function distortion analysis. Traces chief rays at 11 field positions from center to half-field edge using the existing chief-ray launch convention, computes real vs ideal rectilinear image height (`EFL × tan θ`), and returns the 1D distortion curve. The same rectilinear reference is also reused to trace a true 2D chief-ray field grid across the current image circle for the analysis drawer.

- **`computeDistortionCurve(L, zPos, focusT, zoomT, dynamicEFL, _currentPhysStopSD)`** — Returns `DistortionSample[]` with `{fieldAngleDeg, distortionPercent, realHeight, idealHeight}`. Center distortion is exactly 0 by definition. Uses `halfFieldAtZoom()`, `bAtZoom()`, `yRatioAtZoom()` for zoom-aware parameters.
- **`computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD)`** — Traces a 2D chief-ray field grid against the same near-axis rectilinear reference, clipping the ideal grid to the current image circle and returning the traced image positions for each usable sample.

No React dependencies — fully testable in isolation.

## bokeh.ts (src/optics/aberration/)

Pure-function bokeh preview computation. Traces 337-ray circular pupil bundles through the lens at both infinity-focus and near-focus optics, then re-intercepts surviving rays on a defocused image plane to produce the characteristic bokeh ball shape. Cat's eye vignetting and SA-driven brightness profiles emerge naturally from the ray tracing.

- **`computeBokehPreviewPair(L, focusT, zoomT, currentEPSD, currentPhysStopSD)`** — Main entry point. Returns `BokehPreviewPair` with `infinity` and `nearFocus` grids, each containing 4 field positions (0%, 25%, 50%, 75%).
- **`computeBokehPreview(L, traceFocusT, viewFocusT, zoomT, currentEPSD, currentPhysStopSD, label)`** — Computes one grid by tracing at `traceFocusT` optics and intercepting at `viewFocusT` image plane.
- **`computeBokehFieldFootprint(..., fieldFraction, defocusDelta)`** — Per-field computation: traces circular pupil bundle, re-intercepts at shifted plane, preserves pupil coordinates for future aperture blade masking.
- **`buildBokehDensityGrid(points, halfRange, gridSize)`** — Reusable 2D density heatmap utility: bins points into a grid, normalises max density to 1.0. Returns only non-empty cells.
- **`ApertureBladeConfig`** — Future-proofing type for polygonal bokeh (blade count + roundedness). Not used in current computation but pupil coordinates are preserved on all traced points.

## validateLensData.ts

Pure validation function that checks all required fields, surface label uniqueness, element ID references, asph/var/group/doublet references, STO surface presence, element edge thickness (surface crossing detection), element SD consistency, surface sd/|R| ratio, cross-gap surface overlap, conic height limits, and zoom lens fields (`zoomPositions` monotonicity, polymorphic `var` format). Returns an array of error strings (empty = valid).

## diagramGeometry.ts

Pure-function utilities extracted from LensDiagramPanel for testability:
- **`createCoordinateTransforms()`** — Builds optical mm → SVG pixel mapping functions (`sx`, `sy`, `clampedRayEnd`) from viewport and scale parameters. Handles normalized comparison scaling via `scaleRatio`.
- **`computeElementShapes()`** — Builds closed SVG path strings for each glass element with front/rear surface trimming (prevents visual overlap into neighboring air gaps) and aspheric overlay paths. Clamps surfaces to conic height limits when K > 0.

No React dependencies — fully testable in isolation.

## themes.ts — Theme System

Four themes (dark, light, darkHC, lightHC) built via a `createTheme()` factory function. The factory takes a flat color-token object and generates closure-based properties (`elemFill`, `elemStroke`, `elemNum`, `grid`) to eliminate duplication across themes. When adding or changing colors, update all 4 theme definitions.

## Lens Data Files

Each lens has two files in `src/lens-data/`:
- **`.data.ts`** — Default-exports a `LENS_DATA` object with `satisfies LensDataInput` for compile-time validation
- **`.analysis.md`** — Markdown design analysis, rendered in the app's description panel

Supporting files:
- **`defaults.ts`** — Shared defaults merged into each lens via `lensCatalog.ts`
- **`LENS_DATA_SPEC.md`** — Complete specification for all lens data fields
- **`TEMPLATE.data.ts.template`** — Annotated template for creating new lens files

## Type System

Type definitions are centralized in `src/types/`:
- **`optics.ts`** — `SurfaceData`, `ElementData`, `AsphericCoefficients`, `LensData`, `RuntimeLens`, `RayTraceResult`, `ParaxialTraceResult`, `LayoutResult`, `ChromaticChannel`, `ChromaticSpread`, `CoordinateTransforms`, `ElementShape`
- **`state.ts`** — `LensState` (7 slices including `SharedSlidersSlice`), `LensAction` (discriminated union with ~20 variants), `Preferences`, `URLState`, field-string unions (`RayField`, `PanelField`, `OverlayField`)
- **`theme.ts`** — `ThemeColorTokens`, `ThemeInternalTokens`, `Theme` (tokens + closure functions), `ThemeVariant`
- **`index.ts`** — Barrel re-exports from all three

Lens data files (`.data.ts`) are TypeScript with `satisfies LensDataInput` for compile-time validation. They are loaded via `import.meta.glob` and also validated at runtime by `validateLensData()`. Test files are TypeScript (`.ts`) and are included in `tsconfig.json` so `npm run typecheck` validates them alongside `src/`.
