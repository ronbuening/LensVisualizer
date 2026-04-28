# UI Components Architecture

Read this for shared controls, display components, markdown rendering, analysis drawer tabs, charts, and homepage UI.

## Layout And Navigation Components

| Module | Purpose |
| --- | --- |
| `TopBar.tsx` | Lens selectors, compare button, and about buttons. |
| `ControlsBar.tsx` | Theme/ray/ray-density/chromatic/scale toggles with compact and full modes. |
| `ViewToggleBar.tsx` | Generic view-mode toggle used by mobile and desktop layouts. |
| `OverlayModal.tsx` | Generic backdrop/modal/close button. |
| `DropdownPanel.tsx` | Portal-based dropdown panel for settings/theme overlays. |
| `PageNavBar.tsx` | Shared navigation bar for static pages. |
| `BreadcrumbBar.tsx` | Lens page breadcrumb navigation. |
| `SingleLensContent.tsx` | Single-lens diagram and description composition. |

## Controls

| Module | Purpose |
| --- | --- |
| `DiagramHeader.tsx` | Title/spec header plus ray mode, ray density, and chromatic controls; memoized and ref-forwarding. |
| `RayToggles.tsx` | On-axis/off-axis toggle buttons with typed off-axis cycling. |
| `ChromaticControls.tsx` | COLOR master toggle plus R/G/B channel buttons. |
| `DiagramControls.tsx` | Zoom, focus, aperture sliders and interaction-signal wiring. |
| `SliderControl.tsx` | Reusable slider with label, value, endpoints, optional collapsible content. |
| `CollapseButton.tsx` | Shared LESS/MORE toggle used by controls and legend. |
| `LensSelector.tsx` | Portal-based custom lens dropdown with viewport positioning and Escape handling. |

The NORMAL / DENSE / DIAGNOSTIC ray-density segmented control belongs beside the FROM ∞ / TRACKS FOCUS tracing control
in both `DiagramHeader` and `ControlsBar`. It is a preference-backed view setting, so do not add it to the breadcrumb
settings menu or the URL query state.

## Display Components

| Module | Purpose |
| --- | --- |
| `ElementInspector.tsx` | Selected element properties, glass, aspheric data, and chromatic data. Renders a "Compare to sphere →" link for aspheric elements via the optional `onOpenAsphericCompare` prop. |
| `AsphericComparisonOverlay.tsx` | Modal content for aspheric deviation analysis. Renders the element with aspheric (solid) and spherical-replacement (dashed) profiles overlaid, with an exaggeration slider, zoom/pan, and click-to-measure Δsag. Opened from `ElementInspector`; state managed in `useOverlayState` — the only overlay that lives outside the URL-shareable panels slice. |
| `DiagramLegend.tsx` | Legend with swatches, ray descriptions, and aberration readouts. |
| `AbbeDiagram.tsx` | Abbe glass map on Vd x Nd axes. |
| `AboutButtonRow.tsx` | Shared about button group. |
| `AboutFooter.tsx` | Mobile footer delegating to `AboutButtonRow`. |
| `ArticleTOC.tsx` | Floating article table-of-contents with scrollspy; opt-in via `toc: true`. |
| `DescriptionPanel.tsx` | Lens markdown description panel using `ThemedMarkdown`. |
| `ThemedMarkdown.tsx` | Shared article/description markdown renderer. |

## Analysis Drawer

The analysis drawer is opened from `DiagramViewport` and controlled by `analysisDrawerOpen` / `analysisDrawerTab` in the
panels slice.

Desktop uses vertical tabs on the left; mobile uses horizontal tabs on top. Tab content unmounts when the drawer is
closed, preventing hidden analysis work during slider drag.

New analysis tabs require:

1. Add tab metadata in `src/components/layout/lensDiagram/analysisTabs.ts`.
2. Create tab content under `src/components/display/`.
3. Add the conditional render in `AnalysisDrawerContent.tsx`.
4. Add reducer/URL/persistence typing only if the tab can be externally addressed.

## Analysis Display Modules

| Module | Purpose |
| --- | --- |
| `AberrationsPanel.tsx` | Thin container wiring shared data hooks into spherical, field-curve, astigmatism, and coma sections. |
| `aberrations/` | Presentational aberration sections and focused data hooks. |
| `ComaTab.tsx` | Coma drawer tab. |
| `DistortionTab.tsx` | Distortion tab; consumes deferred/frozen analysis inputs and `analysisJobs`. |
| `DistortionFieldGrid.tsx` | Traced chief-ray field grid against ideal rectilinear grid. |
| `FocusBreathingTab.tsx` | Dynamic focal-length/focus breathing readouts. |
| `VignettingTab.tsx` | Vignetting/relative illumination tab; consumes deferred/frozen inputs and `analysisJobs`. |
| `PupilAberrationTab.tsx` | Entrance/exit pupil shift tab. |
| `BokehPreviewOverlay.tsx` | Deferred bokeh preview overlay. |
| `BokehPreviewGrid.tsx` | SVG blur-brightness and surviving-pupil grid. |

## Shared Chart Primitives

Use `src/components/display/charts/` before adding chart-local SVG axis or tick math.

| Module | Purpose |
| --- | --- |
| `chartMath.ts` | Linear scales, plot area, symmetric domains, ticks, polyline/path generation, compact formatters. |
| `SvgChartFrame.tsx` | Plot frame, grid lines, axes, reference lines, labels, and legend helper. |
| `analysisUi.tsx` | Shared compact metric/readout rows and empty states. |

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
| `ArticleList.tsx` / `ArticleCard.tsx` | Homepage article list and cards. |
| `SeriesCard.tsx` | Archive card for article series. |
| `ChangelogBox.tsx` | Scrollable changelog panel grouped by date/type. |
| `HomeFooter.tsx` | Homepage footer with about links and credits. |
