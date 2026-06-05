# UI Components Architecture

Read this for shared controls, display components, content components, markdown rendering, analysis drawer tabs, charts,
and homepage UI.

> Mount interface diagram components are in `src/components/mount/` (`MountDiagram`, `MountDiagramPanel`); the maker
> and mount pages cross-link via `src/components/content/LinkListSidebar.tsx`. See
> [`mount-diagrams.md`](mount-diagrams.md).

## Layout And Navigation Components

| Module | Purpose |
| --- | --- |
| `lensViewer/ViewerChrome.tsx` | Viewer breadcrumb, selectors, comparison buttons, ray/cardinal controls, and view toggles. |
| `lensViewer/ViewerContent.tsx` | Switches between `SingleLensContent` and comparison-mode content. |
| `lensViewer/ViewerOverlays.tsx` | Site/author/primer modals and mobile about footer. |
| `TopBar.tsx` | Lens selectors, compare button, and about buttons. |
| `ControlsBar.tsx` | Theme/ray/ray-density/chromatic/scale toggles with compact and full modes. |
| `ViewToggleBar.tsx` | Generic view-mode toggle used by mobile and desktop layouts. |
| `OverlayModal.tsx` | Generic backdrop/modal/close button. |
| `DropdownPanel.tsx` | Portal-based dropdown panel for settings/theme overlays. |
| `PageNavBar.tsx` | Shared navigation bar for static pages. |
| `StaticPageShell.tsx` | Shared shell for static pages with breadcrumbs, theme toggles, and page base layout. |
| `BreadcrumbBar.tsx` | Lens page breadcrumb navigation. |
| `SingleLensContent.tsx` | Single-lens diagram and description composition. |

## Controls

| Module | Purpose |
| --- | --- |
| `DiagramHeader.tsx` | Title/spec header plus ray mode, ray density, and chromatic controls; memoized and ref-forwarding. |
| `RayToggles.tsx` | On-axis/off-axis toggle buttons with typed off-axis cycling. |
| `CardinalControls.tsx` | Feature-flagged cardinal element and dimension overlay toggles. |
| `ChromaticControls.tsx` | COLOR master toggle plus R/G/B channel buttons. |
| `DiagramControls.tsx` | Zoom, focus, optional aberration-control, aperture, and movement sliders plus interaction-signal wiring. Focus/zoom sliders expose compact MOTION actions when modeled group movement is available. |
| `SliderControl.tsx` | Reusable slider with label, value, endpoints, optional compact action slot, and optional collapsible content. |
| `CollapseButton.tsx` | Shared LESS/MORE toggle used by controls and legend. |
| `LensSelector.tsx` | Portal-based custom lens dropdown with viewport positioning and Escape handling. |

The NORMAL / DENSE / DIAGNOSTIC ray-density segmented control belongs beside the FROM ∞ / TRACKS FOCUS tracing control
in both `DiagramHeader` and `ControlsBar`. It is a preference-backed view setting, so do not add it to the breadcrumb
settings menu or the URL query state.

The CARDINALS / DIMENSIONS overlay controls are feature-flagged by `ENABLE_CARDINAL_ELEMENTS`. Desktop renders them to
the left of the existing ray controls; mobile uses left/right arrow buttons to page between the existing controls and
the cardinal control set.

Lens-specific aberration controls are declared by `LensData.aberrationControl`. `DiagramControls` renders them only when
present, using the data-provided label, endpoint labels, step, and readout labels.

## Display Components

| Module | Purpose |
| --- | --- |
| `ElementInspector.tsx` | Selected element properties, glass, aspheric data, and chromatic data. Renders a "Compare to sphere →" link for aspheric elements via the optional `onOpenAsphericCompare` prop. |
| `DiagramLegend.tsx` | Legend with swatches, ray descriptions, and aberration readouts. |
| `AbbeDiagram.tsx` | Abbe glass map on Vd x Nd axes. |
| `AboutButtonRow.tsx` | Shared about button group. |
| `AboutFooter.tsx` | Mobile footer delegating to `AboutButtonRow`. |
| `DescriptionPanel.tsx` | Lens markdown description panel using `ThemedMarkdown`. |
| `ThemedMarkdown.tsx` | Shared article/description markdown renderer. |

## Content Components

`src/components/content/` contains reusable article/archive/update UI that is shared by pages and the homepage:

| Module | Purpose |
| --- | --- |
| `ArticleCard.tsx` / `ArticleList.tsx` | Article cards and lists used by homepage and archives. |
| `ArticleTOC.tsx` | Floating article table-of-contents with scrollspy; opt-in via `toc: true`. |
| `SeriesCard.tsx` | Archive card for article series. |
| `ChangelogBox.tsx` | Compact changelog panel grouped by date/type. |
| `ChangelogList.tsx` | Full changelog list for `/updates`. |

## Analysis Drawer

The analysis drawer is opened from `DiagramViewport` and controlled by `analysisDrawerOpen` / `analysisDrawerTab` in the
panels slice.

Desktop uses vertical tabs on the left; mobile uses horizontal tabs on top. Tab content unmounts when the drawer is
closed, preventing hidden analysis work during slider drag.

Analysis tabs use stable `src/optics/*` imports only. The temporary engine selector has been removed; do not add a
user-facing or developer-only old-vs-new selector back to analysis components.

`AnalysisDrawerContent` owns global analysis notices. It shows a folded-optics notice for `L.isFoldedOptics`, allows the
mirror-safe aberrations path, and replaces complex tabs that still assume a sequential front-to-rear paraxial model with
an explicit unsupported message. When adapting a tab for mirror systems, remove it from the folded unsupported set only
after its math uses generalized stop/image-plane ray intersections, has fixture-backed tests, and has clear UI copy for
folded image-plane conventions.

New analysis tabs require:

1. Add tab metadata in `src/components/layout/lensDiagram/analysisTabs.ts`.
2. Create tab content under `src/components/display/analysis/`.
3. Add the renderer mapping in `src/components/layout/lensDiagram/analysisTabRenderers.tsx`.
4. Add reducer/URL/persistence typing only if the tab can be externally addressed.

## Analysis Display Modules

| Module | Purpose |
| --- | --- |
| `analysis/AberrationsPanel.tsx` | Thin container wiring shared data hooks into spherical, field-curve, astigmatism, and coma sections. |
| `analysis/aberrations/` | Presentational aberration sections and focused data hooks. |
| `analysis/OpticalSummaryTab.tsx` | Current-state summary tab for prepared-state first-order, aperture, field, and image-plane metrics. |
| `analysis/ComaTab.tsx` | Coma drawer tab. |
| `analysis/BokehTab.tsx` | Bokeh drawer tab using the prepared-state preview pair and shared preview content. |
| `analysis/DistortionTab.tsx` | Distortion tab; consumes deferred/frozen analysis inputs through `analysisJobsForState2`. |
| `analysis/DistortionFieldGrid.tsx` | Traced chief-ray field grid against ideal rectilinear grid. |
| `analysis/FocusBreathingTab.tsx` | Dynamic focal-length/focus breathing readouts. |
| `analysis/VignettingTab.tsx` | Vignetting/relative illumination tab; consumes deferred/frozen inputs through `analysisJobsForState2`. |
| `analysis/PupilAberrationTab.tsx` | Entrance/exit pupil shift tab. |
| `analysis/BokehPreviewGrid.tsx` | SVG blur-brightness and surviving-pupil grid. |

## Display Overlays

`src/components/display/overlays/` holds diagram/modal overlays whose lifecycle is managed by viewer state:

| Module | Purpose |
| --- | --- |
| `AsphericComparisonOverlay.tsx` | Modal content for aspheric deviation analysis. Renders the element with aspheric (solid) and spherical-replacement (dashed) profiles overlaid, with an exaggeration slider, zoom/pan, and click-to-measure sag delta. Opened from `ElementInspector`; state managed in `useOverlayState` - the only overlay that lives outside the URL-shareable panels slice. |
| `LensGroupMovementOverlay.tsx` | Diagram overlay for inferred focus/zoom/combined lens-group movement. It stacks groups vertically, uses the fixed focus plane as x=0, and keeps unavailable modes visible but disabled in the side radio rail. |

## Shared Chart Primitives

Use `src/components/display/analysis/charts/` before adding chart-local SVG axis or tick math.

| Module | Purpose |
| --- | --- |
| `chartMath.ts` | Linear scales, plot area, symmetric domains, ticks, polyline/path generation, compact formatters. |
| `SvgChartFrame.tsx` | Plot frame, grid lines, axes, reference lines, labels, and legend helper. |
| `analysis/analysisUi.tsx` | Shared compact metric/readout rows and empty states. |

Current chart consumers include distortion, vignetting, pupil aberration, and field curvature. `StandardFieldCurvaturePlot`
is a compatibility wrapper around the configurable `FieldCurvaturePlot`.

## Markdown Renderer

`ThemedMarkdown` supports both `article` and `description` variants:

- Article variant: heading IDs, React Router internal links, special image renderers, GFM, math, and table styling.
- Description variant: compact typography, themed colors, GFM, math, and safe external links.

Keep article-specific behavior in the renderer rather than duplicating markdown component maps in pages.

## Homepage Components

| Module | Purpose |
| --- | --- |
| `HeroSection.tsx` | Homepage hero and primary calls to action. |
| `RecentLenses.tsx` | Recently added lens cards. |
| `QuickNavCards.tsx` | Navigation cards for lenses, makers, and articles. |
| `HomeFooter.tsx` | Homepage footer with about links and credits. |
