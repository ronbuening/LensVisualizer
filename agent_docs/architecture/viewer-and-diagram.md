# Viewer And Diagram Architecture

Read this for `LensViewer`, `LensDiagramPanel`, diagram composition, slider plumbing, zoom/pan, and diagram-level error
handling.

## LensViewer Orchestration

`src/components/layout/LensViewer.tsx` owns state management, context provision, and high-level layout composition. It
delegates rendering to children:

- `BreadcrumbBar` - lens-page breadcrumb navigation.
- `TopBar` - lens selectors, compare button, about buttons.
- `ControlsBar` - theme, ray, ray-density, chromatic, and scale toggles.
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

- Builds or receives a `RuntimeLens` through the stable `src/optics/buildLens.ts` entry point. In comparison mode,
  `ComparisonLayout` passes prebuilt runtime lenses to avoid rebuilding the same lens inside each panel.
- Wires computation hooks for layout, density-controlled rays, chromatic spread, overlays, and slider feedback.
- Applies optional perspective-control movement for supported lenses, including transformed geometry/rays and fixed
  image-plane reference behavior.
- Supports folded mirror runtime lenses by consuming `L.imagePlane`, `L.isFoldedOptics`, generalized ray endpoints, and
  obstruction-aware ray sampling instead of assuming the final surface's right-hand BFD is the only imaging plane.
- Passes memoized field geometry into analysis drawer tabs.
- Tracks slider interaction so heavy analysis can defer/freeze inputs while the user drags.
- Surfaces build, shape, ray, and render errors through the panel error tiers.

## Computation Hooks

| Hook | Purpose |
| --- | --- |
| `useLensComputation.ts` | Lens building/reuse, layout, transforms, element shapes, aperture, current-state field geometry, and optional perspective-control movement. It imports stable optics modules directly; there is no old-vs-new selector. Stabilizes `zPos` by element-wise comparison. |
| `useRayTracing.ts` | Orchestrates on-axis, off-axis, and chromatic ray hooks, applies ray density and optional movement transforms, and reports the first ray error. Folded systems receive generalized trace results terminating on `L.imagePlane`. |
| `useOnAxisRays.ts` | Computes density-derived on-axis ray fan segments, using obstruction-aware sampling for folded mirror systems. |
| `useOffAxisRays.ts` | Computes density-derived visible off-axis rays using state-aware field geometry and folded image-plane termination where applicable. |
| `offAxisRayUtils.ts` | Shared off-axis tracing geometry and optional edge-projection endpoint logic for monochrome and chromatic fans. |
| `useChromaticRays.ts` | Computes density-derived axial and off-axis chromatic R/G/B tracing plus axial LCA/TCA spread. |
| `useFlashOverlay.ts` | Sticky-slider flash animation state. |
| `useSideLayoutDetection.ts` | ResizeObserver overflow detection with hysteresis. |
| `useDispatchAdapters.ts` | Stable named dispatch callback adapters for children. |
| `useOverlayState.ts` | Aspheric-compare modal state with lens-key reset (`asphCompareElementId`, `openAsphCompare(eid)`, `closeAsphCompare`). Abbe/glass-map, LCA, Petzval, bokeh, and analysis-drawer state are reducer-backed so they can be encoded in shareable URLs. |
| `useHeaderHeight.ts` | Header ResizeObserver height tracking for multi-panel alignment. |
| `useViewBoxZoom.ts` | SVG viewBox zoom/pan with wheel, drag, pinch, and keyboard support. |

## Diagram Layout Components

| Module | Purpose |
| --- | --- |
| `LensDiagramLoadedState.tsx` | Loaded panel composition after build/layout succeeds. |
| `LensDiagramErrorState.tsx` | Build/shape/ray error presentation. |
| `DiagramViewport.tsx` | SVG viewport wrapper with LCA/Petzval/group-movement overlay gating, zoom/pan toggle, and keyboard shortcut handling. |
| `AnalysisDrawerContent.tsx` | Tab-to-panel router for analysis drawer content. Defers slider-derived inputs and freezes last settled analysis inputs during active slider interaction. Shows notices when PC movement is active or folded mirror optics are detected; folded systems gate tabs that still assume sequential front-to-rear paraxial math. |
| `DiagramControlPanel.tsx` | Sliders, inspector, legend, and analysis launch button. |
| `analysisTabs.ts` | Typed analysis tab metadata shared by trigger and drawer. |

## SVG Diagram Components

| Module | Purpose |
| --- | --- |
| `DiagramSVG.tsx` | Top-level SVG renderer. Accepts viewBox override, zoom handlers, optional movement transforms, and the subtle moved-lens axis; wrapped in `React.memo`. |
| `DiagramDefs.tsx` | Shared SVG defs, gradients, filters, and markers. |
| `DiagramGridAxisLayer.tsx` | Grid, axis, and image-plane reference elements, including explicit folded-system image planes that may be in front of, behind, or above the axial layout. |
| `DiagramElementLayer.tsx` | Lens element paths, aspheric overlays, and surface accents. Annular elements use even-odd fill, tilted flat mirrors render from `interaction.normal`, and second-surface mirror coatings render as dashed substrate accents. |
| `DiagramRayLayers.tsx` | On-axis, off-axis, and chromatic ray layers. When chromatic mode is active, it hides monochrome layers and lets ON-AXIS/OFF-AXIS gate the chromatic axial/off-axis groups. Folded ray polylines follow the generalized tracer rather than surface-list order. |
| `RayPolylines.tsx` | Consolidated ray segment polyline rendering. |
| `ApertureStop.tsx` | Aperture stop blades and STO label. |
| `CardinalElementsOverlay.tsx` | Feature-flagged F/F′, H/H′, N/N′ and axial span overlay. |
| `ElementAnnotations.tsx` | Element numbers, Abbe badges, group/doublet labels. |
| `LCAInsetWidget.tsx` | Magnified LCA inset with fixed-reference scale. |
| `LCAOverlayContent.tsx` | Enlarged LCA overlay content. |
| `PetzvalOverlayContent.tsx` | Enlarged Petzval overlay content. |
| `PetzvalSumBadge.tsx` | Diagram badge for Petzval sum and field radius. |
| `PanelOverlay.tsx` | Panel-scoped absolute overlay for diagram-level measure overlays, including LCA, Petzval, and lens-group movement. |

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
