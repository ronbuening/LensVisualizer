# Architecture — LensVisualizer

## Module Organization

| Module | Location | Purpose |
|--------|----------|---------|
| `LensViewer.jsx` | `src/components/` | Orchestration: comparison mode, top bar, overlays, prefs |
| `LensDiagramPanel.jsx` | `src/components/` | Diagram composition: wires hooks + sub-components |
| `useLensComputation.js` | `src/components/` | Hook: lens building, layout, transforms, shapes, aperture |
| `useRayTracing.js` | `src/components/` | Hook: on-axis, off-axis, chromatic ray tracing |
| `DiagramHeader.jsx` | `src/components/` | Header: title, specs, theme/ray toggle controls |
| `DiagramSVG.jsx` | `src/components/` | SVG rendering: elements, rays, labels, overlays |
| `DiagramControls.jsx` | `src/components/` | Zoom, focus, aperture sliders |
| `ElementInspector.jsx` | `src/components/` | Selected element property display |
| `DiagramLegend.jsx` | `src/components/` | Legend with swatches, ray descriptions, aberration readouts |
| `DescriptionPanel.jsx` | `src/components/` | Markdown panel with themed styling |
| `SharedSlidersBar.jsx` | `src/components/` | Comparison mode shared focus/aperture/zoom controls |
| `ErrorBoundary.jsx` | `src/components/` | Error boundary + reusable ErrorDisplay |
| `optics.js` | `src/optics/` | Ray tracing, sag curves, chromatic, layout geometry |
| `buildLens.js` | `src/optics/` | Lens construction, EFL/pupil/field computation |
| `validateLensData.js` | `src/optics/` | Schema validation for lens data |
| `diagramGeometry.js` | `src/optics/` | Coordinate transforms and element shape computation for SVG rendering |
| `themes.js` | `src/utils/` | Theme factory + 4 theme definitions |
| `styles.js` | `src/utils/` | Shared style-object factories and static constants for reusable UI patterns |
| `lensCatalog.js` | `src/utils/` | Auto-registration of lens data via import.meta.glob |
| `comparisonSliders.js` | `src/utils/` | Shared slider math for comparison mode (focus, aperture, zoom) |
| `parseComparisonParams.js` | `src/utils/` | URL deep-link parsing + slider state persistence |
| `featureFlags.js` | `src/utils/` | Feature flag controls |
| `errorReporting.js` | `src/utils/` | GitHub issue URL builder |
| `useMediaQuery.js` | `src/utils/` | Responsive breakpoint hook |
| `preferences.js` | `src/utils/` | localStorage load/save |
| `lensReducer.js` | `src/utils/` | Pure reducer: sliced state shape + action types |
| `useLensState.js` | `src/utils/` | Hook: useReducer wrapper with prefs/URL initialization |
| `usePreferences.js` | `src/utils/` | Hook: localStorage persistence from reducer state |
| `useURLSync.js` | `src/utils/` | Hook: URL read/write/zoom-init |
| `useStickySliders.js` | `src/utils/` | Hook: comparison slider sticky state machine |
| `LensContext.js` | `src/utils/` | React Context: LensStateContext + LensDispatchContext |

## LensViewer.jsx — Orchestration Layer

The main component handles:
- Lens selection (single + comparison mode)
- Theme switching (dark/light x normal/high-contrast)
- Ray toggle controls (on-axis, off-axis, chromatic) in comparison/mobile control bars
- Comparison mode: side-by-side (desktop) / stacked (mobile)
- Desktop view toggle (diagram / both / analysis)
- Mobile view toggle (diagram / analysis)
- About overlays (site + author)

**State management** is organized via `useReducer` (wrapped in `useLensState`), with state split into 7 slices: `lens`, `display`, `rays`, `sliders`, `sharedSliders`, `panels`, `overlays`. Extracted hooks:
- `usePreferences(state)` — persists preferences to localStorage
- `useURLSync(state, dispatch, comparisonLenses)` — URL deep links + zoom init
- `useStickySliders(dispatch, focusPair, aperturePair, comparisonLenses)` — comparison slider state machine

State is provided to children via `LensStateContext` (state + theme + isWide) and `LensDispatchContext` (stable dispatch ref). Diagram rendering is delegated to `LensDiagramPanel`.

## LensDiagramPanel.jsx — Diagram Composition Layer

Orchestrates sub-components and custom hooks. Owns only hover/selection state, flash animation, side-layout detection, header height reporting, and structural layout wiring.

Sub-modules (all in `src/components/`):
- **`useLensComputation.js`** — Hook: lens building, layout, coordinate transforms, element shapes, aperture calculations
- **`useRayTracing.js`** — Hook: on-axis, off-axis, and chromatic ray tracing + chromatic spread
- **`DiagramHeader.jsx`** — Title, specs, theme/ray toggle controls (uses `forwardRef` for height measurement)
- **`DiagramSVG.jsx`** — Full SVG rendering: defs, grid, rays, elements, aspheric overlays, aperture stop, image plane, LCA inset, labels, flash overlay
- **`DiagramControls.jsx`** — Zoom, focus, and aperture sliders
- **`ElementInspector.jsx`** — Selected element property display (nd, νd, FL, glass, aspheric coefficients, chromatic data)
- **`DiagramLegend.jsx`** — Legend with color swatches, ray mode descriptions, chromatic aberration readouts

Reads shared state (rays, display, panels) from `LensContext`. Per-instance props (lensKey, per-lens slider values, scaleRatio, panelId, compact, flashOverlay) are passed as explicit props. Sub-components remain context-unaware.

## buildLens.js

- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, layout geometry, and zoom fields (`isZoom`, `zoomPositions`, `zoomEFLs`, `zoomEPs`, `zoomHalfFields`, `zoomYRatios`, `zoomBs`). For zoom lenses, `totalTrack` uses the maximum across all zoom positions.
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

## optics.js

Pure functions for optical calculations and SVG layout:
- **Sag curves:** `sag()`, `renderSag()`, `sagSlope()`
- **Layout:** `doLayout(focusT, zoomT, L)`, `gapTrimHeight()`, `thick(i, focusT, zoomT, L)`
- **Ray tracing:** `traceRay(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L)`, `traceToImage(y0, u0, focusT, zoomT, L)`
- **Chromatic tracing:** `wavelengthNd()`, `traceRayChromatic(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel)`, `computeChromaticSpread()`
- **Zoom interpolation:** `eflAtZoom(zoomT, L)`, `epAtZoom(zoomT, L)`, `halfFieldAtZoom(zoomT, L)`, `yRatioAtZoom(zoomT, L)`, `bAtZoom(zoomT, L)` — piecewise-linear interpolation of derived constants across zoom positions
- **Utilities:** `conjugateK(focusT, zoomT, L)`, `formatDist()`
- **Constants:** `FLAT_R_THRESHOLD`, `FOCUS_INFINITY_THRESHOLD`, `SVG_PATH_SUBDIVISIONS`

All trace/layout functions accept a `zoomT` parameter (default `0`). For prime lenses, `zoomT` has no effect.

No React dependencies — fully testable in isolation.

## validateLensData.js

Pure validation function that checks all required fields, surface label uniqueness, element ID references, asph/var/group/doublet references, STO surface presence, element edge thickness (surface crossing detection), element SD consistency, surface sd/|R| ratio, cross-gap surface overlap, conic height limits, and zoom lens fields (`zoomPositions` monotonicity, polymorphic `var` format). Returns an array of error strings (empty = valid).

## diagramGeometry.js

Pure-function utilities extracted from LensDiagramPanel for testability:
- **`createCoordinateTransforms()`** — Builds optical mm → SVG pixel mapping functions (`sx`, `sy`, `clampedRayEnd`) from viewport and scale parameters. Handles normalized comparison scaling via `scaleRatio`.
- **`computeElementShapes()`** — Builds closed SVG path strings for each glass element with front/rear surface trimming (prevents visual overlap into neighboring air gaps) and aspheric overlay paths. Clamps surfaces to conic height limits when K > 0.

No React dependencies — fully testable in isolation.

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
