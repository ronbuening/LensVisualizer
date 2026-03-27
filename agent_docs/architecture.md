# Architecture — LensVisualizer

## Module Organization

### Pages & Routing

| Module | Location | Purpose |
|--------|----------|---------|
| `router.tsx` | `src/` | React Router route definitions (createBrowserRouter) |
| `entry-server.tsx` | `src/` | SSR render function for static prerendering |
| `HomePage.tsx` | `src/pages/` | Interactive LensViewer; handles legacy `?lens=KEY` → `/lens/KEY` redirects |
| `LensPage.tsx` | `src/pages/` | Individual lens page at `/lens/:slug` with SEO content + interactive visualizer |
| `LensIndexPage.tsx` | `src/pages/` | Browsable lens library at `/lenses`, grouped by maker |
| `MakerPage.tsx` | `src/pages/` | Maker page at `/makers/:maker`, lists maker's lenses |
| `MakersIndexPage.tsx` | `src/pages/` | Maker index at `/makers`, lists all makers with lens counts |
| `ComparePage.tsx` | `src/pages/` | Comparison page at `/compare/:slugA/:slugB` with SEO metadata |
| `ArticlePage.tsx` | `src/pages/` | Individual article page at `/articles/:slug` |
| `ArticlesPage.tsx` | `src/pages/` | Articles index at `/articles` |
| `NotFoundPage.tsx` | `src/pages/` | 404 catch-all with navigation links |

### Layout Components

| Module | Location | Purpose |
|--------|----------|---------|
| `LensViewer.tsx` | `src/components/layout/` | Orchestration: state management, context provision, layout composition |
| `TopBar.tsx` | `src/components/layout/` | Lens selectors, compare button, about buttons |
| `ControlsBar.tsx` | `src/components/layout/` | Theme/ray/chromatic/scale toggles (compact + full modes) |
| `ViewToggleBar.tsx` | `src/components/layout/` | Generic view-mode toggle (mobile + desktop) |
| `ComparisonLayout.tsx` | `src/components/layout/` | Side-by-side (desktop) / stacked (mobile) comparison panels |
| `OverlayModal.tsx` | `src/components/layout/` | Generic backdrop + modal + close button |
| `LensDiagramPanel.tsx` | `src/components/layout/` | Diagram composition: wires hooks + sub-components |
| `DescriptionPanel.tsx` | `src/components/layout/` | Markdown panel with themed styling |
| `SharedSlidersBar.tsx` | `src/components/layout/` | Comparison mode shared focus/aperture/zoom controls |
| `BreadcrumbBar.tsx` | `src/components/layout/` | Breadcrumb navigation (Home / Makers / {Maker} / {Lens Name}) for lens pages |
| `PageNavBar.tsx` | `src/components/layout/` | Shared navigation bar for static pages with theme toggle |
| `PanelOverlay.tsx` | `src/components/layout/` | Panel-scoped overlay (position:absolute) for diagram-level LCA/Petzval overlays |
| `DiagramControlPanel.tsx` | `src/components/layout/` | Sliders, inspector, and legend panel extracted from LensDiagramPanel |
| `SingleLensContent.tsx` | `src/components/layout/` | Single-lens diagram + description layout |
| `DropdownPanel.tsx` | `src/components/layout/` | Portal-based dropdown panel for settings/theme overlays |
| `PrimerToggleButton.tsx` | `src/components/layout/` | Shared button for switching between simple/intermediate primer levels |

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
| `DiagramSVG.tsx` | `src/components/diagram/` | SVG rendering: composes RayPolylines, ApertureStop, ElementAnnotations, LCAInsetWidget |
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
| `AberrationsPanel.tsx` | `src/components/display/` | Collapsible aberration metrics panel (SA, future: distortion, LSA, vignetting, coma) |
| `AbbeDiagram.tsx` | `src/components/display/` | Abbe glass map plotting elements on standard Vd × Nd axes |
| `AboutButtonRow.tsx` | `src/components/display/` | Shared about button group (Optics, Site, Author) |
| `AboutFooter.tsx` | `src/components/display/` | Mobile-only footer rendering about buttons at page bottom |

### Utility Components

| Module | Location | Purpose |
|--------|----------|---------|
| `ClientOnly.tsx` | `src/components/` | SSR-safe wrapper that renders children only after hydration |
| `SEOHead.tsx` | `src/components/` | Per-page meta tags (title, OG, Twitter Card, JSON-LD) via react-helmet-async |
| `ErrorBoundary.tsx` | `src/components/errors/` | Error boundary + reusable ErrorDisplay |
| `PanelErrorBoundary.tsx` | `src/components/errors/` | Panel-level error boundary, resets on lens change |

### Optics Engine

| Module | Location | Purpose |
|--------|----------|---------|
| `optics.ts` | `src/optics/` | Ray tracing, sag curves, chromatic, layout geometry |
| `buildLens.ts` | `src/optics/` | Lens construction, EFL/pupil/field computation |
| `validateLensData.ts` | `src/optics/` | Schema validation for lens data |
| `diagramGeometry.ts` | `src/optics/` | Coordinate transforms and element shape computation for SVG rendering |
| `lcaScaling.ts` | `src/optics/` | Fixed-reference LCA bar offset computation (anchored to REFERENCE_LCA_MM = 0.15 mm) |
| `aberrationAnalysis.ts` | `src/optics/` | Pure aberration analysis helpers (spherical aberration; future: distortion, vignetting, coma) |

### Utilities

| Module | Location | Purpose |
|--------|----------|---------|
| `themes.ts` | `src/utils/` | Theme factory + 4 theme definitions |
| `styles.ts` | `src/utils/` | Shared style-object factories (`labelStyle`, `collapseBtn`, `toggleBtn`, etc.) and static constants for reusable UI patterns |
| `themeConstants.ts` | `src/utils/` | Shared theme-toggle display constants (`THEME_ICON`, `THEME_LABEL`) used by PageNavBar and BreadcrumbBar |
| `lensCatalog.ts` | `src/utils/` | Auto-registration of lens data via import.meta.glob |
| `lensMetadata.ts` | `src/utils/` | SEO metadata: maker extraction, page titles/descriptions, canonical URLs, JSON-LD |
| `comparisonSliders.ts` | `src/utils/` | Shared slider math for comparison mode (focus, aperture, zoom) |
| `parseComparisonParams.ts` | `src/utils/` | URL deep-link parsing, `encodeSliderParams()` (shared slider→URL encoding), and slider state persistence |
| `featureFlags.ts` | `src/utils/` | Feature flag controls |
| `errorReporting.ts` | `src/utils/` | GitHub issue URL builder |
| `useMediaQuery.ts` | `src/utils/` | Responsive breakpoint hook |
| `preferences.ts` | `src/utils/` | localStorage load/save |
| `lensReducer.ts` | `src/utils/` | Pure reducer: sliced state shape + action types |
| `useLensState.ts` | `src/utils/` | Hook: useReducer wrapper with prefs/URL initialization |
| `usePreferences.ts` | `src/utils/` | Hook: localStorage persistence from reducer state |
| `useURLSync.ts` | `src/utils/` | Hook: URL read/write/zoom-init |
| `useStickySliders.ts` | `src/utils/` | Hook: comparison slider sticky state machine |
| `LensContext.ts` | `src/utils/` | React Context: LensStateContext + LensDispatchContext |
| `usePageTheme.ts` | `src/utils/` | Hook: resolves theme from dark/HC preferences + system media query |
| `usePageThemeToggle.ts` | `src/utils/` | Hook: extends usePageTheme with dark/HC toggle cycling (auto→dark→light) |
| `zoomConversion.ts` | `src/utils/` | Pure functions: `focalLengthToZoomT()` and `zoomTToFocalLength()` for URL zoom encoding |
| `appConfig.ts` | `src/utils/` | Application-level configuration constants |
| `homepageContent.ts` | `src/utils/` | Homepage content configuration and featured lens data |
| `makerDetails.ts` | `src/utils/` | Maker display names, descriptions, and metadata |

## Routing & SSR

The app uses React Router 7 with client-side routing and static prerendering for SEO:

- **`router.tsx`** — Defines routes via `routeManifest.tsx`: `/` (HomePage), `/lenses` (LensIndexPage), `/lens/:slug` (LensPage), `/compare/:slugA/:slugB` (ComparePage), `/makers` (MakersIndexPage), `/makers/:maker` (MakerPage), `/articles` (ArticlesPage), `/articles/:slug` (ArticlePage), `*` (NotFoundPage)
- **`entry-server.tsx`** — Exports `render(url): { html, helmet }` using `StaticRouter` + `react-helmet-async` for `scripts/prerender.mjs` to generate static HTML
- **`main.tsx`** — Client entry: mounts `RouterProvider` with the browser router
- **`ClientOnly.tsx`** — Wraps components that must not render during SSR (e.g., the interactive visualizer). Renders `null` until after hydration via `useEffect` mount detection.
- **`SEOHead.tsx`** — Sets per-page `<title>`, `<meta>`, Open Graph, Twitter Card, canonical URL, and JSON-LD structured data via react-helmet-async
- **`lensMetadata.ts`** — Pure functions for SEO: `deriveMaker()` extracts maker info from lens names, `lensPageTitle()` / `lensPageDescription()` / `lensCanonicalURL()` / `lensJsonLd()` generate page metadata. Defines `MAKER_PREFIXES` mapping and `SITE_NAME` / `SITE_URL` constants.

**Page flow:** `HomePage` renders the interactive `LensViewer` (handles legacy `?lens=KEY` redirects). `LensPage` renders SEO-friendly static content (specs, element table, analysis markdown) plus a `ClientOnly`-wrapped interactive visualizer. Index pages (`LensIndexPage`, `MakersIndexPage`, `MakerPage`) provide crawlable navigation.

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
- **`useLensComputation.ts`** — Hook: lens building, layout, coordinate transforms, element shapes, aperture calculations
- **`useRayTracing.ts`** — Hook: orchestrates ray sub-hooks (useOnAxisRays, useOffAxisRays, useChromaticRays)
- **`useOnAxisRays.ts`** — Hook: on-axis ray fan computation + coordinate transform
- **`useOffAxisRays.ts`** — Hook: off-axis field ray computation with trueAngle/edge projection modes
- **`useChromaticRays.ts`** — Hook: chromatic tracing across R/G/B channels + LCA/TCA spread computation
- **`useFlashOverlay.ts`** — Hook: two-phase flash animation state machine for sticky slider feedback
- **`useSideLayoutDetection.ts`** — Hook: ResizeObserver-based overflow detection with hysteresis for side-by-side layout
- **`useDispatchAdapters.ts`** — Hook: reads context dispatch and returns named callback adapters for child components
- **`useOverlayState.ts`** — Hook: Abbe/LCA/Petzval overlay open/close state with lensKey reset
- **`useHeaderHeight.ts`** — Hook: header ResizeObserver height tracking for multi-panel alignment

Sub-components:
- **`PanelErrorBoundary.tsx`** (`src/components/errors/`) — Panel-level error boundary that resets automatically on lens change
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
- **`DiagramControlPanel.tsx`** (`src/components/layout/`) — Sliders, inspector, legend, and aberrations panel; composes DiagramControls, ElementInspector, DiagramLegend, and AberrationsPanel
- **`DiagramControls.tsx`** (`src/components/controls/`) — Zoom, focus, aperture sliders (composes SliderControl)
  - **`SliderControl.tsx`** — Reusable slider with label, value display, endpoints, optional collapsible content
- **`ElementInspector.tsx`** (`src/components/display/`) — Selected element property display (nd, νd, FL, glass, aspheric coefficients, chromatic data)
- **`DiagramLegend.tsx`** (`src/components/display/`) — Legend with color swatches, ray mode descriptions, chromatic aberration readouts
- **`AbbeDiagram.tsx`** (`src/components/display/`) — Abbe glass map plotting each element on standard Vd × Nd axes with grid, scaling, and element labels
- **`AberrationsPanel.tsx`** (`src/components/display/`) — Collapsible panel for aberration metrics; computes SA via `computeSphericalAberration()` with `useMemo` from current slider state

Reads shared state (rays, display, panels) from `LensContext`. Per-instance props (lensKey, per-lens slider values, scaleRatio, panelId, compact, flashOverlay) are passed as explicit props. Sub-components remain context-unaware.

## buildLens.ts

- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, layout geometry, and zoom fields (`isZoom`, `zoomPositions`, `zoomEFLs`, `zoomEPs`, `zoomHalfFields`, `zoomYRatios`, `zoomBs`). For zoom lenses, `totalTrack` uses the maximum across all zoom positions. Also derives `stopPhysSD` (physical aperture SD via real ray trace), `bladeStubFrac` (aberration-corrected blade inner edge position), and `stopHousingSD` (iris housing outer boundary = min of adjacent surface SDs, floored at `stopPhysSD`).
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

## optics.ts

Pure functions for optical calculations and SVG layout:
- **Sag curves:** `sag()`, `renderSag()`, `sagSlope()`, `sagSlopeRaw()` (shared core math also used by `buildLens.ts`)
- **Layout:** `doLayout(focusT, zoomT, L)`, `gapTrimHeight()`, `thick(i, focusT, zoomT, L)`
- **Ray tracing:** `traceRay(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L)`, `traceToImage(y0, u0, focusT, zoomT, L)`
- **Chromatic tracing:** `wavelengthNd()`, `traceRayChromatic(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel)`, `computeChromaticSpread()`
- **Zoom interpolation:** `eflAtZoom(zoomT, L)`, `epAtZoom(zoomT, L)`, `fopenAtZoom(zoomT, L)`, `halfFieldAtZoom(zoomT, L)`, `yRatioAtZoom(zoomT, L)`, `bAtZoom(zoomT, L)` — piecewise-linear interpolation of derived constants across zoom positions
- **Utilities:** `conjugateK(focusT, zoomT, L)`, `formatDist()`, `formatPetzvalRadius()` (shared Petzval field radius formatter)
- **Constants:** `FLAT_R_THRESHOLD`, `FOCUS_INFINITY_THRESHOLD`, `SVG_PATH_SUBDIVISIONS`

All trace/layout functions accept a `zoomT` parameter (default `0`). For prime lenses, `zoomT` has no effect.

No React dependencies — fully testable in isolation.

## lcaScaling.ts

Pure-function LCA scaling for consistent magnification across different lenses:
- **`computeLcaBarOffsets(spread, effectiveSC)`** — Computes pixel offsets for LCA wavelength bars using a fixed reference (`REFERENCE_LCA_MM = 0.15 mm`) rather than auto-scaling per lens. This ensures visual consistency: the same physical LCA always produces the same visual offset.

No React dependencies — fully testable in isolation.

## aberrationAnalysis.ts

Pure-function aberration analysis helpers. All functions accept the runtime lens object L and current slider-derived parameters — no build-time dependencies, no React dependencies.

- **`computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD)`** — Computes longitudinal spherical aberration by tracing a marginal ray (0.95× EP, with fallbacks to 0.90/0.85/0.80 if clipped) via exact Snell's law and comparing its axial intercept against a paraxial reference ray. Averages ±Y marginal rays for symmetry. Returns `{saMm, saUm, realIntercept, paraxialIntercept}` or null if all marginal fractions are clipped.

Sign convention: positive SA = undercorrected (real marginal focus farther from lens than paraxial).

Future additions: distortion curve (#297), longitudinal SA plot (#298), vignetting/relative illumination (#299), coma visualization (#300).

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
