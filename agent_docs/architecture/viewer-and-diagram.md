# Viewer And Diagram Architecture

Read this for `LensViewer`, `LensDiagramPanel`, diagram composition, slider plumbing, zoom/pan, and diagram-level error
handling.

## LensViewer Orchestration

`src/components/layout/LensViewer.tsx` owns state management, context provision, and high-level layout composition. It
delegates rendering to children:

- `lensViewer/ViewerChrome.tsx` - breadcrumb, selectors, compare controls, ray/cardinal controls, and mobile/desktop view
  toggles.
- `lensViewer/ViewerContent.tsx` - switch between single-lens and comparison layouts.
- `lensViewer/ViewerOverlays.tsx` - site, author, optics primer, aberrations primer, and mobile about-footer overlays.
- `SingleLensContent.tsx` - single-lens diagram plus description layout.
- `ComparisonContent.tsx` - comparison-mode error display, `ComparisonLayout`, and `SharedSlidersBar`.

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
  `ComparisonContent` / `ComparisonLayout` pass prebuilt runtime lenses to avoid rebuilding the same lens inside each
  panel.
- Wires computation hooks for layout, density-controlled rays, chromatic spread, overlays, and slider feedback.
- Builds one `PerspectiveTraceContext` for supported perspective-control lenses from the camera-anchored layout,
  clamped movement, fixed sensor, and authored tilt pivot. The same context drives the diagram rays and analysis drawer
  so a shift- or tilt-only change invalidates both together.
- Supports folded mirror runtime lenses by consuming `L.imagePlane`, `L.isFoldedOptics`, generalized ray endpoints, and
  obstruction-aware ray sampling instead of assuming the final surface's right-hand BFD is the only imaging plane.
- Passes memoized field geometry into analysis drawer tabs.
- Tracks slider interaction so heavy analysis can defer/freeze inputs while the user drags.
- Surfaces build, shape, ray, and render errors through the panel error tiers.

## Computation Hooks

| Hook | Purpose |
| --- | --- |
| `useLensComputation.ts` | Lens building/reuse, camera-anchored layout, rigid lens pose, element shapes, aperture, current-state field geometry, and the shared fixed-sensor `PerspectiveTraceContext`. It imports stable optics modules directly; there is no old-vs-new selector. Stabilizes `zPos` by element-wise comparison. |
| `useRayTracing.ts` | Orchestrates on-axis, off-axis, and chromatic ray hooks, applies ray density, and reports the first ray error. With active PC movement, its children trace through the physically posed lens and project the exiting rays onto the fixed sensor. Folded systems receive generalized trace results terminating on `L.imagePlane`; missed surfaces stop tracing while preserving preceding display hits. |
| `useOnAxisRays.ts` | Computes density-derived on-axis ray fan segments, solving through the moved stop when PC movement is active and using obstruction-aware sampling for folded mirror systems. |
| `useOffAxisRays.ts` | Computes density-derived visible off-axis rays using camera-space scene directions, state-aware field geometry, and folded image-plane termination where applicable. |
| `offAxisRayUtils.ts` | Shared off-axis tracing geometry and optional edge-projection endpoint logic for monochrome and chromatic fans. |
| `useChromaticRays.ts` | Computes density-derived axial and off-axis chromatic R/G/B tracing plus axial LCA/TCA spread. Active PC movement solves and traces each channel through the moved stop rather than reusing a centered or green chief ray. |
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
| `AnalysisDrawerContent.tsx` | Prepares/defer-freezes slider-derived analysis inputs and the perspective trace context, owns global notices, and delegates tab rendering through `analysisTabRenderers.tsx`. Active movement routes ray-based sections to fixed-sensor adapters, labels intrinsic-only results, and suppresses any unsupported section instead of showing centered-lens output. Folded systems likewise gate tabs that still assume sequential front-to-rear paraxial math. |
| `analysisTabRenderers.tsx` | Maps analysis tab ids to concrete tab components and passes the prepared optical state plus shared inputs. |
| `DiagramControlPanel.tsx` | Sliders, inspector, legend, and analysis launch button. |
| `analysisTabs.ts` | Typed analysis tab metadata shared by trigger and drawer. |

## SVG Diagram Components

| Module | Purpose |
| --- | --- |
| `DiagramSVG.tsx` | Top-level SVG renderer. Keeps the camera grid, camera axis, and sensor fixed while rendering a distinct moved-lens axis; accepts viewBox override and zoom handlers and is wrapped in `React.memo`. |
| `DiagramDefs.tsx` | Shared SVG defs, gradients, filters, and markers. |
| `DiagramGridAxisLayer.tsx` | Camera-fixed grid and horizontal camera-axis reference. |
| `DiagramElementLayer.tsx` | Lens element paths, aspheric overlays, and surface accents. Annular elements use even-odd fill, tilted flat mirrors render from `interaction.normal`, and second-surface mirror coatings render as dashed substrate accents. |
| `DiagramRayLayers.tsx` | On-axis, off-axis, and chromatic ray layers. When chromatic mode is active, it hides monochrome layers and lets ON-AXIS/OFF-AXIS gate the chromatic axial/off-axis groups. Folded ray polylines follow the generalized tracer rather than surface-list order. |
| `RayPolylines.tsx` | Consolidated ray segment polyline rendering. Ray segment compilation displays clipped ghost rays only from the last solid point to the first clipped point, keeping zoomed SVG bounds finite. |
| `DiagramOverlayLayer.tsx` | Composes fixed-camera and lens-local overlays. The stop, pupils, element annotations, cardinal markers/dimensions, and folded hit labels follow the rigid lens pose; the sensor/image-plane overlay does not. |
| `ImagePlaneOverlay.tsx` | Camera-fixed sensor/image-plane line and label, including explicit folded-system planes that may be in front of, behind, or above the axial layout. It never receives the lens movement transform. |
| `ApertureStop.tsx` | Aperture stop blades and STO label. |
| `CardinalElementsOverlay.tsx` | Feature-flagged intrinsic F/F′, H/H′, N/N′ and axial span overlay, rigidly posed with the lens for display. |
| `ElementAnnotations.tsx` | Element numbers, Abbe badges, group/doublet labels. |
| `LCAInsetWidget.tsx` | Magnified LCA inset with fixed-reference scale. |
| `LCAOverlayContent.tsx` | Enlarged LCA overlay content. |
| `PetzvalOverlayContent.tsx` | Enlarged Petzval overlay content. |
| `PetzvalSumBadge.tsx` | Diagram badge for Petzval sum and field radius. |
| `PanelOverlay.tsx` | Panel-scoped absolute overlay for diagram-level measure overlays, including LCA, Petzval, and lens-group movement. |

## Perspective-Control Frame Boundary

The diagram uses two explicit coordinate frames. The camera frame owns the horizontal reference axis and the sensor;
neither tilts nor shifts. The intrinsic lens frame owns the prescription surfaces, stop, pupils, cardinal points, and
other lens-local annotations. `PerspectivePose` rigidly maps those lens-local points and directions into the camera
frame. Positive authored shift moves the lens toward camera `-y` because SVG/optical `+y` is down, and positive tilt is
a right-handed rotation about camera `+x`.

Active-movement ray hooks do not transform a completed centered trace. They transform a camera-space launch into the
lens frame, exact-trace through the intrinsic prescription, transform physical hits and the exit direction back into
the camera frame, and intersect that ray with the fixed sensor. The identity pose retains the centered fast path.

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
