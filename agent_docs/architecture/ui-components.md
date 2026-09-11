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
settings menu or the URL query state.

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

The drawer is opened from `DiagramViewport` and controlled by `analysisDrawerOpen` / `analysisDrawerTab` in the panels
slice. Desktop uses vertical tabs on the left; mobile uses horizontal tabs on top. Tab content unmounts when the drawer
is closed, preventing hidden analysis work during slider drag.

Analysis tabs use stable `src/optics/*` imports only. The temporary engine selector has been removed; do not add a
user-facing or developer-only old-vs-new selector back to analysis components.

`AnalysisDrawerContent` owns global analysis notices. It shows a folded-optics notice for `L.isFoldedOptics`, allows the
mirror-safe aberrations path, and replaces complex tabs that still assume a sequential front-to-rear paraxial model with
an explicit unsupported message. Remove a tab from the folded unsupported set only after its math uses generalized
stop/image-plane ray intersections, has fixture-backed tests, and has clear UI copy for folded image-plane conventions.

To add a tab, follow the four registration points in `agent_docs/adding_an_analysis_tab.md`. `AberrationsPanel` is a
thin container over the section components and data hooks in `src/components/display/analysis/aberrations/`; the
distortion and vignetting tabs consume deferred/frozen inputs through `analysisJobsForState2`.

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

## Markdown Renderer

`ThemedMarkdown` has an `article` variant (heading IDs, React Router internal links, special image renderers, GFM,
math, table styling) and a `description` variant (compact typography, themed colors, GFM, math, safe external links).
Keep article-specific behavior in the renderer rather than duplicating markdown component maps in pages.
