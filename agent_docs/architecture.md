# Architecture — LensVisualizer

## Module Organization

| Module | Location | Purpose |
|--------|----------|---------|
| `LensViewer.jsx` | `src/components/` | Orchestration: comparison mode, top bar, overlays, prefs |
| `LensDiagramPanel.jsx` | `src/components/` | Diagram rendering: SVG, rays, elements, controls |
| `DescriptionPanel.jsx` | `src/components/` | Markdown panel with themed styling |
| `SharedSlidersBar.jsx` | `src/components/` | Comparison mode shared focus/aperture/zoom controls |
| `ErrorBoundary.jsx` | `src/components/` | Error boundary + reusable ErrorDisplay |
| `optics.js` | `src/optics/` | Ray tracing, sag curves, chromatic, layout geometry |
| `buildLens.js` | `src/optics/` | Lens construction, EFL/pupil/field computation |
| `validateLensData.js` | `src/optics/` | Schema validation for lens data |
| `themes.js` | `src/utils/` | Theme factory + 4 theme definitions |
| `lensCatalog.js` | `src/utils/` | Auto-registration of lens data via import.meta.glob |
| `comparisonSliders.js` | `src/utils/` | Shared slider math for comparison mode (focus, aperture, zoom) |
| `parseComparisonParams.js` | `src/utils/` | URL deep-link parsing + slider state persistence |
| `featureFlags.js` | `src/utils/` | Feature flag controls |
| `errorReporting.js` | `src/utils/` | GitHub issue URL builder |
| `useMediaQuery.js` | `src/utils/` | Responsive breakpoint hook |
| `preferences.js` | `src/utils/` | localStorage load/save |

## LensViewer.jsx — Orchestration Layer

The main component handles:
- Lens selection (single + comparison mode)
- Theme switching (dark/light x normal/high-contrast)
- Ray toggle controls (on-axis, off-axis, chromatic)
- Comparison mode: side-by-side (desktop) / stacked (mobile)
- URL deep links (`?a=&b=` for comparison, `?lens=` for single, `&zoom=&focus=&aperture=` for slider state)
- Desktop view toggle (diagram / both / analysis)
- Mobile view toggle (diagram / analysis)
- About overlays (site + author)
- localStorage preference persistence

Diagram rendering is delegated to `LensDiagramPanel`.

## LensDiagramPanel.jsx — Diagram Renderer

Self-contained component that owns:
- Lens building (`buildLens()` call)
- Layout computation (`doLayout()`)
- Coordinate transforms (SVG <-> optical space)
- Ray tracing (on-axis, off-axis, chromatic)
- Element rendering (filled SVG paths with hover/click)
- Control panel (focus/aperture sliders, element inspector, legend)
- Panel-level error boundary

Receives shared control state (focus, aperture, zoom, ray toggles) from LensViewer.

## buildLens.js

- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, layout geometry, and zoom fields (`isZoom`, `zoomPositions`, `zoomEFLs`)
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

## optics.js

Pure functions for optical calculations and SVG layout:
- **Sag curves:** `sag()`, `renderSag()`, `sagSlope()`
- **Layout:** `doLayout(focusT, zoomT, L)`, `gapTrimHeight()`, `thick(i, focusT, zoomT, L)`
- **Ray tracing:** `traceRay(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L)`, `traceToImage(y0, u0, focusT, zoomT, L)`
- **Chromatic tracing:** `wavelengthNd()`, `traceRayChromatic(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel)`, `computeChromaticSpread()`
- **Zoom:** `eflAtZoom(zoomT, L)` — interpolates EFL across zoom positions
- **Utilities:** `conjugateK(focusT, zoomT, L)`, `formatDist()`
- **Constants:** `FLAT_R_THRESHOLD`, `FOCUS_INFINITY_THRESHOLD`, `SVG_PATH_SUBDIVISIONS`

All trace/layout functions accept a `zoomT` parameter (default `0`). For prime lenses, `zoomT` has no effect.

No React dependencies — fully testable in isolation.

## validateLensData.js

Pure validation function that checks all required fields, surface label uniqueness, element ID references, asph/var/group/doublet references, STO surface presence, element edge thickness (surface crossing detection), element SD consistency, surface sd/|R| ratio, cross-gap surface overlap, conic height limits, and zoom lens fields (`zoomPositions` monotonicity, polymorphic `var` format). Returns an array of error strings (empty = valid).

## themes.js — Theme System

Four themes (dark, light, darkHC, lightHC) built via a `createTheme()` factory function. The factory takes a flat color-token object and generates closure-based properties (`elemFill`, `elemStroke`, `elemNum`, `grid`) to eliminate duplication across themes. When adding or changing colors, update all 4 theme definitions.

## Lens Data Files

Each lens has two files in `src/lens-data/`:
- **`.data.js`** — Default-exports a `LENS_DATA` object
- **`.analysis.md`** — Markdown design analysis, rendered in the app's description panel

Supporting files:
- **`defaults.js`** — Shared defaults merged into each lens via `lensCatalog.js`
- **`LENS_DATA_SPEC.md`** — Complete specification for all lens data fields
- **`TEMPLATE.data.js.template`** — Annotated template for creating new lens files
