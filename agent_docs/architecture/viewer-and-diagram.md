# Viewer And Diagram Architecture

Read this for `LensViewer`, `LensDiagramPanel`, diagram composition, slider plumbing, zoom/pan, and diagram-level error
handling.

## LensViewer Orchestration

`src/components/layout/LensViewer.tsx` owns state management, context provision, and high-level layout composition. It
delegates rendering to children:

- `BreadcrumbBar` - lens-page breadcrumb navigation.
- `TopBar` - lens selectors, compare button, about buttons.
- `ControlsBar` - theme, ray, chromatic, and scale toggles.
- `ViewToggleBar` - generic view-mode toggle used for mobile and desktop.
- `SingleLensContent` - single-lens diagram plus description layout.
- `ComparisonLayout` - two `LensDiagramPanel` instances for comparison mode.
- `OverlayModal` - site, author, and optics primer modals.
- `AboutButtonRow`, `AboutFooter`, `PrimerToggleButton` - shared about/primer controls.

State is managed through `useLensState`, a reducer wrapper. The state is split into lens, display, rays, sliders,
sharedSliders, panels, and overlays slices. Shared hooks handle persistence, URL sync, comparison orchestration, and
overlay state.

## Contexts

`LensViewer` provides:

- `LensStateContext` - state, active theme, and layout breakpoint information.
- `LensDispatchContext` - stable dispatch reference.
- `PanelStateContext` - `state.panels` directly. The reducer keeps this object stable across slider dispatches.

Diagram sub-components should receive per-instance values as explicit props and avoid reaching into global context when
the value is specific to one diagram panel.

## LensDiagramPanel

`src/components/layout/LensDiagramPanel.tsx` orchestrates per-panel computation and rendering. It owns local hover and
selection state plus structural wiring.

Key responsibilities:

- Builds or receives a `RuntimeLens`. In comparison mode, `ComparisonLayout` passes prebuilt runtime lenses to avoid
  rebuilding the same lens inside each panel.
- Wires computation hooks for layout, rays, chromatic spread, overlays, and slider feedback.
- Passes memoized field geometry into analysis drawer tabs.
- Tracks slider interaction so heavy analysis can defer/freeze inputs while the user drags.
- Surfaces build, shape, ray, and render errors through the panel error tiers.

## Computation Hooks

| Hook | Purpose |
| --- | --- |
| `useLensComputation.ts` | Lens building/reuse, layout, transforms, element shapes, aperture, and current-state field geometry. Stabilizes `zPos` by element-wise comparison. |
| `useRayTracing.ts` | Orchestrates on-axis, off-axis, and chromatic ray hooks and reports the first ray error. |
| `useOnAxisRays.ts` | Computes on-axis ray fan segments. |
| `useOffAxisRays.ts` | Computes visible off-axis rays using state-aware field geometry. |
| `useChromaticRays.ts` | Computes chromatic R/G/B tracing and LCA/TCA spread. |
| `useFlashOverlay.ts` | Sticky-slider flash animation state. |
| `useSideLayoutDetection.ts` | ResizeObserver overflow detection with hysteresis. |
| `useDispatchAdapters.ts` | Stable named dispatch callback adapters for children. |
| `useOverlayState.ts` | Abbe/LCA/Petzval overlay open/close state with lens-key reset. |
| `useHeaderHeight.ts` | Header ResizeObserver height tracking for multi-panel alignment. |
| `useViewBoxZoom.ts` | SVG viewBox zoom/pan with wheel, drag, pinch, and keyboard support. |

## Diagram Layout Components

| Module | Purpose |
| --- | --- |
| `LensDiagramLoadedState.tsx` | Loaded panel composition after build/layout succeeds. |
| `LensDiagramErrorState.tsx` | Build/shape/ray error presentation. |
| `DiagramViewport.tsx` | SVG viewport wrapper with LCA/Petzval overlay gating, zoom/pan toggle, and keyboard shortcut handling. |
| `AnalysisDrawerContent.tsx` | Tab-to-panel router for analysis drawer content. Defers slider-derived inputs and freezes last settled analysis inputs during active slider interaction. |
| `DiagramControlPanel.tsx` | Sliders, inspector, legend, and analysis launch button. |
| `analysisTabs.ts` | Typed analysis tab metadata shared by trigger and drawer. |

## SVG Diagram Components

| Module | Purpose |
| --- | --- |
| `DiagramSVG.tsx` | Top-level SVG renderer. Accepts viewBox override and zoom handlers; wrapped in `React.memo`. |
| `DiagramDefs.tsx` | Shared SVG defs, gradients, filters, and markers. |
| `DiagramGridAxisLayer.tsx` | Grid, axis, and image-plane reference elements. |
| `DiagramElementLayer.tsx` | Lens element paths and aspheric overlays. |
| `DiagramRayLayers.tsx` | On-axis, off-axis, and chromatic ray layers. |
| `RayPolylines.tsx` | Consolidated ray segment polyline rendering. |
| `ApertureStop.tsx` | Aperture stop blades and STO label. |
| `ElementAnnotations.tsx` | Element numbers, Abbe badges, group/doublet labels. |
| `LCAInsetWidget.tsx` | Magnified LCA inset with fixed-reference scale. |
| `LCAOverlayContent.tsx` | Enlarged LCA overlay content. |
| `PetzvalOverlayContent.tsx` | Enlarged Petzval overlay content. |
| `PetzvalSumBadge.tsx` | Diagram badge for Petzval sum and field radius. |
| `PanelOverlay.tsx` | Panel-scoped absolute overlay for diagram-level measure overlays. |

## Error Display Tiers

`LensDiagramPanel` displays the first truthy tier:

1. `buildError` - `buildLens()` failed.
2. `shapeError` - `computeElementShapes()` failed.
3. `rayError` - a ray-trace hook failed.
4. `PanelErrorBoundary` - render-phase errors not caught above.

All `ErrorDisplay` instances include a prefilled GitHub issue URL from `buildIssueURL`, including component name, lens
key, browser user agent, and component stack when available.

## Zoom/Pan Mode

`useViewBoxZoom` manages SVG viewBox state for infinite-resolution zoom and pan. `DiagramViewport` activates it via a
toggle button, hides unrelated controls, and shows persistent Reset/Cancel buttons. Keyboard shortcuts:

- `+` / `-` zoom.
- Arrow keys pan.
- `Escape` cancels zoom/pan.
- `0` resets viewBox.
