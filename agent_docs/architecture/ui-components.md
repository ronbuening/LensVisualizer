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
  Escape handling; reuse them instead of adding inline dropdowns. `HelpTooltipButton` opens on mouse hover only (pointer
  events), so a tap's compatibility `mouseenter` cannot open it before the tap's click toggles it.

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
  diagram; the drawer slides down with its own horizontal tab strip, which scrolls itself (never the page) to keep
  the active tab in view with a margin, and marks it `aria-pressed`.
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

`MtfTab` defaults to the diffraction-corrected method, a photopic spectrum (with a note when glass dispersion is
estimated from nd/νd, or the reference line and the reason when a glass blocks spectral sampling), best axial focus
(with an explanatory note when the lens data's plane contradicts its own paraxial focus; "Design plane (auto)" and
"Design plane (always)" remain) and the image-height view at 10 % field steps showing 10 and 30 lp/mm. Each dropdown
explains its options in a mouse-hover or keyboard-focus `PortalTooltip`, also linked through `aria-describedby`; on
hover-less (touch) devices a `HelpTooltipButton` beside each dropdown gives tap access. Method, spectrum, image plane, sampling (128² or 256² cap), view, field step (10/5/2/1 %) and frequency chips
(10–50 lp/mm) persist in localStorage through `src/utils/state/mtfPreferences.ts` and `useMtfPreferences`, which
comparison panes share; the existing `tab=mtf` URL selects the tab. Every request computes 0–100 lp/mm for every
field, so chart-only changes never recompute. `useMtfComputation` debounces settled inputs for 150 ms, keeps earlier
curves dimmed until the new request reports progress, and cancels superseded work; the mounted tab disposes its worker
on unmount. `MtfChart` gives each frequency a fixed `chartSeries` slot, labels curve ends, adds marker shapes up to
21 fields and hatches heights beyond the modeled edge. Its crosshair follows the pointer or the arrow keys
(Home/End, Escape) and announces values through a polite live region. When the working aperture is faster than
f/8 and the lens reaches it, "Compare f/8" runs a second worker request with pupil and stop radii scaled by N/8 and
draws it with thin lines in the same slots. `mtf/MtfControls`, `mtf/MtfFieldSummary` and `mtf/MtfValueTable` hold
the controls, status counts and per-field values; the table copies as CSV (`mtf/mtfCsv.ts`). Worker caching, numerical status and
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
regardless of patent count (families still require eight assignment edges; networks without assignees fall back to
the highest-degree node); shared inventors never absorb a small assignee into an unrelated hub. Each node joins its nearest
deterministic hub in capacity-limited local rings, and the neighborhoods are contracted into a hierarchical-affinity hub
graph. Center, orbit, and angular-neighbor selection use lexicographic priority: corporate-history edge count, then
unique cross-neighborhood patent count, then neighborhood node count. `UniversalRelationshipMap.tsx` renders labeled
halos inside each disconnected-network boundary. It preserves every node and edge in the layout while culling
offscreen SVG elements, including conservative curve bounds for edges crossing the viewport. Highlighted edges draw
last, followed by nodes and collision-managed labels at 13 CSS pixels. `universalMapGeometry.ts` owns screen-space
label packing and directional keyboard navigation; the SVG uses one roving node tab stop. Fit neighborhood, fit all,
selection centering, and the minimap reuse the existing camera hook. Non-patent catalog models use distinct `lens` and `maker`
nodes with `catalog-maker` edges derived only from an explicit lens `maker` field; these edges do not count as patents,
corporate history, or corporate affinity. Maker hubs center their models, and details link to the model and maker pages.

`UniversalMapSearch` searches graph nodes and patent-backed lens-name aliases (selecting the source patent) and uses the shared portal dropdown with combobox keyboard semantics.
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
`ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS` in `src/utils/featureFlags.ts` defaults to true, exposing tabs in Full map, Explore,
Research order with shared selection and filters. Full map is the default view. The flag can be disabled to expose
Full map only.
When disabled, Explore/Research are not mounted, path queries do not run, and their saved URL views fall back to Full map
without rewriting the fragment. Hidden features are omitted from the page's introduction and help.
`ENABLE_REVISED_UNIVERSAL_MAP` independently defaults to true and controls the Full map presentation described above.
Turning it off restores unculled nodes and straight edges, zoom-threshold labels, scaling strokes, and the previous
node tab stops; Fit neighborhood is omitted. Selection, search, filters, the minimap, and camera history remain available.
When extra views are enabled, panels stay mounted across tab switches, preserving cameras and local query/pagination state; entering Full map with
a different selection frames it. Details sit beside the workspace from 1100 CSS pixels, or in an expandable panel below.
`StaticPageShell.maxWidth` lets this workspace use 1600 pixels without changing other page widths.
The workspace starts with search and a collapsed relationship-filter panel; its button reports all or partial
coverage, and hidden relationships remain called out even when the panel is closed. The initial toolbar contains
zoom, fit-all, and minimap controls. Selection adds the entity name and relevant actions; below 600 map pixels,
secondary actions collapse under Tools. Below the side-panel breakpoint, View details and Back to map move focus
and scroll between the diagram and the expanded evidence panel without changing history or the camera.
The map key, keyboard help, and evidence explanation are collapsed below the diagram. Disclosure state is local.

`UniversalMapExplore` uses `universalExploreLayout.ts` to contract the complete layout into fixed-size neighborhood
cards, ordered by the existing corporate/patent affinities and packed into separate network regions. Every node belongs
to one summary; each edge appears once in either a neighborhood or a typed inter-neighborhood bridge. Summary counts
always describe the complete neighborhood; relationship filters select the bridge evidence and local adjacency without
reassigning nodes. Below 900 pixels, a searchable card directory replaces the summary SVG. Opening a neighborhood or
selecting an entity shows at most 25 direct neighbors per page, ordered by role, patent year, and name. The accompanying
searchable list exposes full names and each recorded edge, including parallel relationships. The named center card and
heading offer Open full map, which retains the entity and active filters, explicitly frames the entity, and moves
keyboard focus to the Full map tab. The heading action remains available when the local diagram is scrolled.

`UniversalMapResearch` provides sortable, searchable 50-row entity/relationship tables and a two-endpoint path finder.
Opening the Research tab from another view uses the selected entity as the starting endpoint. The destination stays
intact, including an unsubmitted picker choice; explicit Research URLs and Back/Forward restore their recorded endpoints.
`universalRelationshipQueries.ts` runs BFS on original edges, then enumerates at most three shortest paths through the
resulting distance DAG. Traversal is bidirectional, but `UniversalRelationshipEvidence` phrases each step in the source
edge's direction, showing dates, notes, corporate sources, patent links, or the explicit catalog grouping provenance.
Paths are historical record connections, not claims of simultaneous relationships or current ownership. Empty results
distinguish disconnected entities from paths removed by the active filters. Entity lists retain all nodes; connection
counts and relationship rows use the enabled edge kinds. Query text and table sort/page remain local.

Revised Full map's optional connection emphasis uses filtered adjacency: the selected node, its neighbors and incident edges
retain their brightness; other elements multiply opacity by 0.15. Clearing selection suspends emphasis without clearing
the preference. `UniversalMapOverview` reuses the full layout with measured, letterbox-aware viewport bounds; click/tap
centers, double-click zooms, arrow keys pan, and Home fits. It sits inside viewports at least 600 pixels wide and below
narrower ones. Geometry, adjacency, summaries, and path queries are independent of camera movements.

## Markdown Renderer

`ThemedMarkdown` has an `article` variant (heading IDs, React Router internal links, special image renderers, GFM,
math, table styling) and a `description` variant (compact typography, themed colors, GFM, math, safe external links).
Keep article-specific behavior in the renderer rather than duplicating markdown component maps in pages.
