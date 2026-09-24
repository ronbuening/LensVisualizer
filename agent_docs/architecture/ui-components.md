# UI Components Architecture

Read this for the non-obvious behavior and cross-component rules of shared controls, display components, content
components, markdown rendering, analysis drawer tabs, charts, and homepage UI. Per-folder inventories live in the
generated `src/components/**/readme.md` files; viewer orchestration and the SVG diagram layers are covered by
[`viewer-and-diagram.md`](viewer-and-diagram.md).

> Mount interface diagram components are in `src/components/mount/` (`MountDiagram`, `MountDiagramPanel`); the maker
> and mount pages cross-link via `src/components/content/LinkListSidebar.tsx` (also used, with `#anchor` items, for
> the lens-library group-navigation sidebar), placed by `src/components/content/SidebarLayout.tsx`. See
> [`mount-diagrams.md`](mount-diagrams.md).

## Navigation And Search

- `src/components/search/CatalogSearchBox.tsx` navigates an exact lens-name/patent/author hit straight to its page and
  sends every other query to `/search?q=`. The homepage mounts it below the hero; `PageNavBar` and the viewer's
  `BreadcrumbBar` provide a persistent Search link on every other route.
- `SidebarLayout` is a sticky column on wide viewports (>= 1200 px) and stacks above the content on narrow ones; the
  stacked layout is the SSR/first-render default so crawlers see the links.
- `DropdownPanel` (used by `LensSelector`) and `HelpTooltipButton` render through portals with viewport positioning and
  Escape handling; reuse them instead of adding inline dropdowns.

## Controls

Companion `*.analysis.md` content and its desktop/mobile view controls are gated by `ENABLE_ANALYSIS_VIEW`. When the
flag is disabled, individual lens pages remain diagram-only and do not load or advertise the companion markdown.

The NORMAL / DENSE / DIAGNOSTIC ray-density segmented control belongs beside the FROM ∞ / TRACKS FOCUS tracing control
in both `DiagramHeader` and `ControlsBar`. It is a preference-backed view setting, so do not add it to the breadcrumb
theme toggles or the URL query state.

The CARDINALS / DIMENSIONS overlay controls are feature-flagged by `ENABLE_CARDINAL_ELEMENTS`. Desktop renders them to
the left of the existing ray controls; mobile uses left/right arrow buttons to page between the existing controls and
the cardinal control set.

Lens-specific aberration controls are declared by `LensData.aberrationControl`. `DiagramControls` renders them only when
present, using the data-provided label, endpoint labels, optional center label, step, and readout labels. Controls with
a center label use signed `-1..1` travel with the center/default at `0`; controls without one retain `0..1` travel.

`DiagramControls` focus/zoom sliders expose a compact MOTION action (through `SliderControl`'s action slot) only when
modeled group movement is available. Without modeled focus travel, the disabled focus control labels its far end
"Not modeled" instead of presenting a schema placeholder or production specification as a reachable focus endpoint.
Shift/tilt sliders expose independent zero-reset actions through the shared
`SliderResetButton`, which comparison mode's shared sliders reuse.

## Display And Content Components

`ElementInspector` renders its "Compare to sphere" link for aspheric elements only when the optional
`onOpenAsphericCompare` prop is supplied. `DescriptionPanel` renders lens notes through `ThemedMarkdown`'s `description`
variant. `ArticleTOC` (in `src/components/content/`) is opt-in per article via `toc: true` frontmatter.

## Analysis Drawer

The drawer is controlled by `analysisDrawerOpen` / `analysisDrawerTab` in the panels slice and covers the diagram
viewport. How it is launched depends on `AnalysisControlsMode` (`lensDiagram/panelModel.ts`), chosen in
`LensDiagramPanel`:

- `pill` (mobile, below the 900px `isWide` breakpoint): the "ABERRATIONS & DISTORTIONS" pill and ZOOM button float on the
  diagram; the drawer slides down with its own horizontal tab strip.
- `dock` (desktop single-lens): `AnalysisDock` renders two rows of buttons (one per `ANALYSIS_TABS` entry plus ZOOM) in
  the bottom band of `DiagramViewport`, below a `position: relative` stage that holds the SVG, overlays, and drawer. The
  drawer has no tab strip and slides up over the stage, so the dock stays visible as the tab switcher; clicking the lit
  button closes it. Each button's hover/keyboard-focus tooltip is the tab's `description` (`PortalTooltip`). The dock
  unmounts in zoom/pan mode.
- `shared` (desktop comparison): each pane's drawer is tabless and has no launcher; `SharedAnalysisDock` under both panes
  drives the shared drawer and zoom state.

Tab content unmounts when the drawer is closed, preventing hidden analysis work during slider drag.

Analysis tabs use stable `src/optics/*` imports only. The temporary engine selector has been removed; do not add a
user-facing or developer-only old-vs-new selector back to analysis components.

`AnalysisDrawerContent` owns global analysis notices. It shows a folded-optics notice for `L.isFoldedOptics`, allows the
mirror-safe aberrations path, and replaces complex tabs that still assume a sequential front-to-rear paraxial model with
an explicit unsupported message. Remove a tab from the folded unsupported set only after its math uses generalized
stop/image-plane ray intersections, has fixture-backed tests, and has clear UI copy for folded image-plane conventions.

To add a tab, follow the five registration points in `agent_docs/adding_an_analysis_tab.md`. `AberrationsPanel` is a
thin container over the section components and data hooks in `src/components/display/analysis/aberrations/`; the
distortion and vignetting tabs consume deferred/frozen inputs through `analysisJobsForState2`.

`MtfTab` defaults to the diffraction-corrected method, a photopic spectrum (the reference line when a glass lacks
spectral data, with a note), the design image plane and the image-height view at 10 % field steps showing 10 and
30 lp/mm. Method, spectrum, image plane, sampling (128² or 256² cap), view, field step (10/5/2/1 %) and frequency chips
(10–50 lp/mm) persist in localStorage through `src/utils/state/mtfPreferences.ts` and `useMtfPreferences`, which
comparison panes share; the existing `tab=mtf` URL selects the tab. Every request computes 0–100 lp/mm for every
field, so chart-only changes never recompute. `useMtfComputation` debounces settled inputs for 150 ms, keeps earlier
curves dimmed until the new request reports progress, and cancels superseded work; the mounted tab disposes its worker
on unmount. `MtfChart` gives each frequency a fixed `chartSeries` slot, labels curve ends, adds marker shapes up to
21 fields and hatches heights beyond the modelled edge. `mtf/MtfControls`, `mtf/MtfFieldSummary` and
`mtf/MtfValueTable` hold the controls, status counts and per-field values. Worker caching, numerical status and
optical eligibility are documented in [`Simulated MTF`](optics-engine.md#simulated-mtf).

## Display Overlays

`src/components/display/overlays/` holds diagram/modal overlays whose lifecycle is managed by viewer state.
`AsphericComparisonOverlay.tsx` overlays the aspheric (solid) and best-fit-sphere (dashed) profiles with an exaggeration
slider, zoom/pan, and click-to-measure sag delta; it is opened from `ElementInspector` and its state lives in
`useOverlayState`, the only overlay outside the URL-shareable panels slice. `LensGroupMovementOverlay.tsx` stacks
inferred focus/zoom/combined groups vertically, uses the fixed focus plane as x=0, and keeps unavailable modes visible
but disabled in the side radio rail.

## Shared Chart Primitives

Use `src/components/display/analysis/charts/` (`chartMath.ts` scales/ticks/paths, `SvgChartFrame.tsx` frame/axes/legend)
and the metric/empty-state rows in `src/components/display/analysis/analysisUi.tsx` before adding chart-local SVG axis or
tick math. `StandardFieldCurvaturePlot` is a compatibility wrapper around the configurable `FieldCurvaturePlot`.

## Relationship Map Components

`src/components/relationshipMap/` mirrors the mount-diagram engine/renderer split. `layout.ts` is a pure, React-free
engine that maps a `RelationshipGraph` (from `src/utils/catalog/relationshipGraph.ts`) to a deterministic,
collision-free two-ring radial layout; `RelationshipMap.tsx` renders it as inline SVG (edges, then nodes, then labels)
with `useViewBoxZoom` pan/zoom, hover edge highlighting, and colorblind-safe role shapes (circle inventor / square
assignee), turning node clicks into recenter/select callbacks rather than navigating from inside the `<svg>`.
`PatentDetailCard.tsx` is a deliberate copy of `AuthorPage`'s local `PatentCard` whose party names recenter the map
instead of linking out. The page owns URL `focus` state.

The catalog-wide `/relationships/universal` route uses `src/utils/catalog/universalRelationshipGraph.ts` and the pure
`universalLayout.ts` engine. Connected components are partitioned into corporate-family hubs and standalone assignees
with at least eight patent-assignment edges (falling back to the highest-degree node); each node joins its nearest
deterministic hub in capacity-limited local rings, and the neighborhoods are contracted into a hierarchical-affinity hub
graph. Center, orbit, and angular-neighbor selection use lexicographic priority: corporate-history edge count, then
unique cross-neighborhood patent count, then neighborhood node count. `UniversalRelationshipMap.tsx` renders labeled
halos inside each disconnected-network boundary, keeps every edge at its edge-kind brightness within and between
neighborhoods, and draws nodes above both boundary layers.

`UniversalMapSearch` searches only graph nodes and uses the shared portal dropdown with combobox keyboard semantics.
`src/utils/catalog/universalRelationshipSearch.ts` normalizes names and compact patent numbers, ranking exact matches,
prefixes, then reordered word matches with deterministic catalog sorting. The dropdown shows at most eight results;
Enter selects the highlighted or first result and never navigates to a search page; it is ignored during text composition.
Escape, outside interaction, and Tab dismiss it; selection clears the query and retains input focus.
Search selection opens the existing details and issues a numbered focus request; the renderer measures its SVG and
centers at readable magnification through `useViewBoxZoom.centerOn`. Requests are consumed once, including repeated
requests for the same node, so subsequent pan/zoom gestures remain under the visitor's control.
The persistent navigation controls reuse that hook for bounded zoom, fit-all, and readable selection centering;
fitting the viewport leaves selection and details intact.
Universal detail cards use the same selection/focus path for related patents, inventors, assignees, organizations,
and families. Explicit focused-map and source links remain available. Keyboard navigation between cards focuses the
replacement heading without scrolling; pointer navigation leaves page focus alone.
The page owns selection history and camera intent; see [Routing and content](routing-and-content.md#pages-and-routes)
for the fragment, hydration, and Back/Forward contract.
The optional connection emphasis uses memoized adjacency to retain the selected node, its immediate neighbors, and
incident edges at normal opacity while multiplying other node/edge opacity by 0.15. Hover does not change membership,
all elements remain operable, and clearing selection temporarily suspends emphasis without forgetting the toggle.
`UniversalMapOverview` reuses the same layout for a cached simplified scene and shows the visible viewport measured
through the main SVG's inverse screen transform (`useSvgViewport` / `svgCoordinates`). Click/tap centers without
changing selection or zoom; double-click centers and doubles the zoom; arrow keys pan and Home fits the map. The
overview sits inside wide viewports and below viewports narrower than 600 CSS pixels, with a local visibility
toggle. It does not run another layout or filter the graph.

## Markdown Renderer

`ThemedMarkdown` has an `article` variant (heading IDs, React Router internal links, special image renderers, GFM,
math, table styling) and a `description` variant (compact typography, themed colors, GFM, math, safe external links).
Keep article-specific behavior in the renderer rather than duplicating markdown component maps in pages.
