# Architecture — LensVisualizer

## Module Organization

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
| `useLensComputation.ts` | `src/components/hooks/` | Hook: lens building, layout, transforms, shapes, aperture |
| `useRayTracing.ts` | `src/components/hooks/` | Hook: orchestrates on-axis, off-axis, chromatic ray sub-hooks |
| `useOnAxisRays.ts` | `src/components/hooks/` | Hook: on-axis ray fan computation |
| `useOffAxisRays.ts` | `src/components/hooks/` | Hook: off-axis field ray computation |
| `useChromaticRays.ts` | `src/components/hooks/` | Hook: chromatic tracing + spread computation |
| `useFlashOverlay.ts` | `src/components/hooks/` | Hook: flash animation state machine for sticky slider feedback |
| `useSideLayoutDetection.ts` | `src/components/hooks/` | Hook: ResizeObserver overflow detection with hysteresis |
| `DiagramHeader.tsx` | `src/components/controls/` | Header: title, specs, composes RayToggles + ChromaticControls |
| `RayToggles.tsx` | `src/components/controls/` | On-axis/off-axis toggle buttons with cycling logic |
| `ChromaticControls.tsx` | `src/components/controls/` | COLOR master toggle + R/G/B channel buttons |
| `DiagramControls.tsx` | `src/components/controls/` | Zoom, focus, aperture sliders (composes SliderControl) |
| `SliderControl.tsx` | `src/components/controls/` | Reusable slider with label, endpoints, collapsible content |
| `DiagramSVG.tsx` | `src/components/diagram/` | SVG rendering: composes RayPolylines, ApertureStop, ElementAnnotations, LCAInsetWidget |
| `RayPolylines.tsx` | `src/components/diagram/` | Consolidated ray segment polyline rendering |
| `ApertureStop.tsx` | `src/components/diagram/` | Aperture stop blades + STO label |
| `ElementAnnotations.tsx` | `src/components/diagram/` | Element numbers, Abbe νd badges, group/doublet labels |
| `LCAInsetWidget.tsx` | `src/components/diagram/` | Magnified LCA inset with auto-scaled wavelength offsets |
| `ElementInspector.tsx` | `src/components/display/` | Selected element property display |
| `DiagramLegend.tsx` | `src/components/display/` | Legend with swatches, ray descriptions, aberration readouts |
| `AboutButtonRow.tsx` | `src/components/display/` | Shared about button group (Optics, Site, Author) |
| `AboutFooter.tsx` | `src/components/display/` | Mobile-only footer rendering about buttons at page bottom |
| `ErrorBoundary.tsx` | `src/components/errors/` | Error boundary + reusable ErrorDisplay |
| `PanelErrorBoundary.tsx` | `src/components/errors/` | Panel-level error boundary, resets on lens change |
| `optics.ts` | `src/optics/` | Ray tracing, sag curves, chromatic, layout geometry |
| `buildLens.ts` | `src/optics/` | Lens construction, EFL/pupil/field computation |
| `validateLensData.ts` | `src/optics/` | Schema validation for lens data |
| `diagramGeometry.ts` | `src/optics/` | Coordinate transforms and element shape computation for SVG rendering |
| `themes.ts` | `src/utils/` | Theme factory + 4 theme definitions |
| `styles.ts` | `src/utils/` | Shared style-object factories and static constants for reusable UI patterns |
| `lensCatalog.ts` | `src/utils/` | Auto-registration of lens data via import.meta.glob |
| `comparisonSliders.ts` | `src/utils/` | Shared slider math for comparison mode (focus, aperture, zoom) |
| `parseComparisonParams.ts` | `src/utils/` | URL deep-link parsing + slider state persistence |
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

## LensViewer.tsx — Orchestration Layer

The main component owns state management, context provision, and layout composition. All UI rendering is delegated to child components:

- **`TopBar`** — Lens selectors, compare button, about buttons. Receives named callbacks (no reducer knowledge).
- **`ControlsBar`** — Theme/ray/chromatic/scale toggles. Unified component with `compact` prop (full labels for comparison mode, condensed for mobile). `showScaleMode` controls whether the scale mode toggle is rendered.
- **`ViewToggleBar`** — Generic view-mode toggle. Used for both mobile (DIAGRAM/ANALYSIS) and desktop (DIAGRAM/BOTH/ANALYSIS) switching.
- **`ComparisonLayout`** — Renders two `LensDiagramPanel` instances side-by-side (desktop) or stacked (mobile) with dividers.
- **`OverlayModal`** — Generic backdrop + modal + close button with optional `maxWidth` override. Used for "About Site", "About Author", and "Optics Primer" overlays.
- **`AboutButtonRow`** — Shared button group (Optics, Site, Author) with optional label. Used by TopBar (inline on desktop) and AboutFooter (standalone on mobile).
- **`AboutFooter`** — Mobile-only footer rendering about buttons at the page bottom. Respects `ENABLE_ABOUT_BUTTONS_IN_TOPBAR` feature flag to determine which buttons to show.

**State management** is organized via `useReducer` (wrapped in `useLensState`), with state split into 7 slices: `lens`, `display`, `rays`, `sliders`, `sharedSliders`, `panels`, `overlays`. Extracted hooks:
- `usePreferences(state)` — persists preferences to localStorage
- `useURLSync(state, dispatch, comparisonLenses)` — URL deep links + zoom init
- `useStickySliders(dispatch, focusPair, aperturePair, comparisonLenses)` — comparison slider state machine

State is provided to children via `LensStateContext` (state + theme + isWide) and `LensDispatchContext` (stable dispatch ref). Diagram rendering is delegated to `LensDiagramPanel`.

## LensDiagramPanel.tsx — Diagram Composition Layer

Orchestrates sub-components and custom hooks. Owns only hover/selection state, header height reporting, and structural layout wiring.

Extracted hooks (all in `src/components/hooks/`):
- **`useLensComputation.ts`** — Hook: lens building, layout, coordinate transforms, element shapes, aperture calculations
- **`useRayTracing.ts`** — Hook: orchestrates ray sub-hooks (useOnAxisRays, useOffAxisRays, useChromaticRays)
- **`useOnAxisRays.ts`** — Hook: on-axis ray fan computation + coordinate transform
- **`useOffAxisRays.ts`** — Hook: off-axis field ray computation with trueAngle/edge projection modes
- **`useChromaticRays.ts`** — Hook: chromatic tracing across R/G/B channels + LCA/TCA spread computation
- **`useFlashOverlay.ts`** — Hook: two-phase flash animation state machine for sticky slider feedback
- **`useSideLayoutDetection.ts`** — Hook: ResizeObserver-based overflow detection with hysteresis for side-by-side layout

Sub-components:
- **`PanelErrorBoundary.tsx`** (`src/components/errors/`) — Panel-level error boundary that resets automatically on lens change
- **`DiagramHeader.tsx`** (`src/components/controls/`) — Title, specs, composes RayToggles + ChromaticControls (uses `forwardRef` for height measurement)
  - **`RayToggles.tsx`** — On-axis/off-axis toggle buttons with off-axis cycling logic and feature flag awareness
  - **`ChromaticControls.tsx`** — COLOR master toggle + individual R/G/B channel buttons
- **`DiagramSVG.tsx`** (`src/components/diagram/`) — SVG rendering: defs, grid, composes RayPolylines, element shapes, aspheric overlays, ApertureStop, image plane, LCAInsetWidget, ElementAnnotations, flash overlay
  - **`RayPolylines.tsx`** — Consolidated ray segment polyline rendering (solid + ghost paths)
  - **`ApertureStop.tsx`** — Aperture stop blades + STO label
  - **`ElementAnnotations.tsx`** — Element number labels, Abbe νd badges, group/doublet labels
  - **`LCAInsetWidget.tsx`** — Magnified LCA inset with auto-scaled wavelength offsets (clamped at 5000×)
- **`DiagramControls.tsx`** (`src/components/controls/`) — Zoom, focus, aperture sliders (composes SliderControl)
  - **`SliderControl.tsx`** — Reusable slider with label, value display, endpoints, optional collapsible content
- **`ElementInspector.tsx`** (`src/components/display/`) — Selected element property display (nd, νd, FL, glass, aspheric coefficients, chromatic data)
- **`DiagramLegend.tsx`** (`src/components/display/`) — Legend with color swatches, ray mode descriptions, chromatic aberration readouts

Reads shared state (rays, display, panels) from `LensContext`. Per-instance props (lensKey, per-lens slider values, scaleRatio, panelId, compact, flashOverlay) are passed as explicit props. Sub-components remain context-unaware.

## buildLens.ts

- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, layout geometry, and zoom fields (`isZoom`, `zoomPositions`, `zoomEFLs`, `zoomEPs`, `zoomHalfFields`, `zoomYRatios`, `zoomBs`). For zoom lenses, `totalTrack` uses the maximum across all zoom positions.
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

## optics.ts

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
- **`.data.js`** — Default-exports a `LENS_DATA` object
- **`.analysis.md`** — Markdown design analysis, rendered in the app's description panel

Supporting files:
- **`defaults.ts`** — Shared defaults merged into each lens via `lensCatalog.ts`
- **`LENS_DATA_SPEC.md`** — Complete specification for all lens data fields
- **`TEMPLATE.data.js.template`** — Annotated template for creating new lens files

## Type System

Type definitions are centralized in `src/types/`:
- **`optics.ts`** — `SurfaceData`, `ElementData`, `AsphericCoefficients`, `LensData`, `RuntimeLens`, `RayTraceResult`, `ParaxialTraceResult`, `LayoutResult`, `ChromaticChannel`, `ChromaticSpread`, `CoordinateTransforms`, `ElementShape`
- **`state.ts`** — `LensState` (7 slices), `LensAction` (discriminated union with ~20 variants), `Preferences`, `URLState`, field-string unions (`RayField`, `PanelField`, `OverlayField`)
- **`theme.ts`** — `ThemeColorTokens`, `ThemeInternalTokens`, `Theme` (tokens + closure functions), `ThemeVariant`
- **`index.ts`** — Barrel re-exports from all three

Lens data files (`.data.js`) remain JavaScript — they are loaded via `import.meta.glob` and validated at runtime by `validateLensData()`. Test files are TypeScript (`.ts`) and are included in `tsconfig.json` so `npm run typecheck` validates them alongside `src/`.
