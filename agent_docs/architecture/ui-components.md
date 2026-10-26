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
- Maker, mount, format, and teleconverter indexes use `LinkListSidebar` for in-page jumps to their displayed entries.
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

Patent-positions mode is the SLIDERS / PATENT POSITIONS group drawn by `PositionModeToggle` in `BreadcrumbBar`, ahead
of the search link and theme toggles. Below the wide breakpoint it collapses to one PATENT on/off button so the
breadcrumb trail keeps its room. It changes how the page's zoom and
focus controls behave, so it sits with the page-level switches; do not move it in with the ray toggles in
`DiagramHeader` or `ControlsBar`. It is single-lens only: the breadcrumb bar omits it while comparing.
With the mode on, `DiagramControls` hands `SliderControl` a `track` (a `StationStepper`) in place of the zoom and
focus range inputs, keeping the label, readout, MOTION action and collapsible section. The buttons are the lens's
source-published stations from `src/optics/publishedStations.ts`, labeled by `patentStations.ts`; a station list
longer than twelve collapses to previous / next. A zoom step keeps the focus row only when the target station
tabulates the same one, otherwise focus returns to infinity. The aperture slider is disabled at wide open and loses
its f-stop shortcuts, an aberration control is disabled at neutral, and shift/tilt stay live. Notes under the
buttons say what is missing (no certified close-focus row, focus not modeled, a converter mounted, modeled zoom
stations that are not source rows).

## Display And Content Components

Diagram color readouts are unavailable when any material has only a constant index: overlapping spectral rays do
not establish zero chromatic error. The inspector marks missing Abbe data explicitly and omits spectral-index rows
for that constant-index fallback.

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
distortion and vignetting tabs consume deferred/frozen inputs through `analysisJobs`.

`MtfTab` defaults to the diffraction-corrected method (`diffraction`), a photopic spectrum (with a note when glass dispersion is
estimated from nd/νd, or the reference line and the reason when a glass blocks spectral sampling), best axial focus
(with an explanatory note when the lens data's plane contradicts its own paraxial focus; "Design plane (auto)" and
"Design plane (always)" remain) and the image-height view at 10 % field steps showing 10 and 30 lp/mm. The header
qualifies the label f-number with the traced one ("f/1.4 (traced f/1.49, limited by surface 14)") when
`MtfResult.aperture` differs from it by more than 2 %, except at finite conjugates. Each dropdown
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
the controls, status counts and per-field values; the table copies as CSV (`mtf/mtfCsv.ts`). When
`assessMtfDataLimitations` lists a `blocking` gap, `mtf/MtfDataWarning` blurs the chart and field summary, marks them
`inert` and covers them with a warning card that lists every item. "Show chart anyway" records the blocking kinds for
that lens system in `src/utils/state/mtfDataWarnings.ts` (`useMtfDataWarning`); the warning then collapses to a
`<details>` line above the chart. Non-blocking notes (source errata) never blur the chart and appear in that line
from the start. Dismissals are in memory only: they survive tab switches, reset on reload, and a kind of gap not yet
dismissed on that lens brings the card back. Worker caching, numerical status, the gap kinds and
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
instead of linking out. The page owns URL `focus`, inventor view, and exploration filter state. Inventor maps offer
Relationships, Assignees, Timeline, Co-inventors, and Evidence lanes; assignee maps keep the original ego graph.
The original renderer mounts when first selected, then stays mounted with gestures suspended in other views to preserve
its camera. Opening another view directly avoids computing a hidden map layout.

The catalog-wide `/relationships/universal` route uses `src/utils/catalog/universalRelationshipGraph.ts` and the pure
`universalLayout.ts` engine. Connected components are partitioned into corporate-family hubs and standalone assignees
regardless of patent count (families still require eight assignment edges; networks without assignees fall back to
the highest-degree node); shared inventors never absorb a small assignee into an unrelated hub. Each node joins its nearest
deterministic hub in capacity-limited local rings, except that an inventor joins the hub holding most of their
assigned patents (newest patents break ties) and an unassigned patent follows its inventors; the neighborhoods are contracted into a hierarchical-affinity hub
graph. Center, orbit, and angular-neighbor selection use lexicographic priority: corporate-history edge count, then
unique cross-neighborhood patent count, then neighborhood node count. `UniversalRelationshipMap.tsx` renders halos
inside each disconnected-network boundary, keeps every edge at its edge-kind brightness within and between
neighborhoods, curves cross-neighborhood edges, draws highlighted edges above the background, and draws nodes above
both boundary layers. Labels are placed in screen space by `universalMapGeometry.ts` (`placeUniversalLabels`): a fixed
on-screen size at every zoom, no overlaps (the overview panel and network captions count as obstacles), and priority
for the selection, the hovered node, the selection's neighbors, then hubs, so hub names read at Fit all. Nodes, edges
and labels outside the viewport are culled except the selection and its highlighted edges. Arrow keys move a roving
tab stop to the nearest node in that direction; Enter or Space selects it. Non-patent catalog models use distinct
`lens` and `maker` nodes with `catalog-maker` edges derived only from an explicit lens `maker` field; these edges do not count as patents,
corporate history, or corporate affinity. Maker hubs center their models, and details link to the model and maker pages.

`UniversalMapSearch` searches only graph nodes and uses the shared portal dropdown with combobox keyboard semantics.
`src/utils/catalog/universalRelationshipSearch.ts` normalizes names and compact patent numbers, ranking exact matches,
prefixes, then reordered word matches with deterministic catalog sorting. A patent also matches the names of the
catalog lenses taken from it. The dropdown shows at most eight results;
Enter selects the highlighted or first result and never navigates to a search page; it is ignored during text composition.
Escape, outside interaction, and Tab dismiss it; selection clears the query and retains input focus.
Search selection opens the existing details and issues a numbered focus request; the renderer measures its SVG and
centers at readable magnification through `useViewBoxZoom.centerOn`. Requests are consumed once, including repeated
requests for the same node, so subsequent pan/zoom gestures remain under the visitor's control.
The navigation controls overlay the map's top-right corner at every width: icon buttons for bounded zoom, fit-all,
readable selection centering, and full screen, then the emphasis and overview toggles (on phones, outside full screen,
the toggles sit in a row under the map box so the overlay stays one row). Labels and network captions treat
the panel as an obstacle; fitting the viewport leaves selection and details intact. The map box height follows the
network's aspect ratio within 320 px to `min(70vh, 760px)`. On coarse pointers the map opts into
`useViewBoxZoom`'s `touchGesture: "two-finger"`: one finger scrolls the page (a brief hint says to use two) and two
fingers pan and zoom; other diagrams keep the one-finger default. Full screen is a fixed `role="dialog"` overlay
(z-index 1000, `aria-modal="true"`) with one-finger pan, page scroll lock, Escape, and focus returned to its toggle; it refits on entry and
exit, ends when the view goes inactive, and stops above a page panel named by `fullScreenBottomInset`. Each node has
an invisible hit circle of at least 12 screen pixels radius (22 on coarse pointers), and its label also selects it.
The page passes selection details as `belowMap`, rendered under the map box, or floating over its bottom-left corner
in full screen. The legend starts folded on phones.
While full screen, the map walks ancestor siblings up to body and makes background subtrees `inert`, descending
branches that contain a `data-map-companion` sheet so it stays operable. It tracks only newly inert elements and
restores those on exit or unmount, preserving pre-existing inert state. A DOM observer updates this boundary as the
sheet mounts or closes; Tab wraps through the overlay and sheet together. Escape in the sheet collapses, then closes
it without also exiting full screen; the sheet remains non-modal.
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
overview sits inside viewports at least 600 CSS pixels wide (and in full screen); below that it sits under the map and
starts hidden. A local toggle keeps the reader's choice. It does not run another layout or filter the graph.

The universal page likewise retains the original Network view after its first use while offering Neighborhoods, Trace connections, Inventor affiliations,
Company bridge, Affiliation matrix, Company chords, and Evidence lanes. Its width class (`widthClass()` on the measured
catalog row) starts as desktop for the server and first client render. Phones get a native view select (in the shared
`ViewChoices`, so inventor maps get it too), a two-line intro with More/Less, the Network note behind "How to use the
map", and details in `UniversalDetailSheet`: a fixed bottom sheet (z-index 1001, above full screen) whose collapsed row
shows the name, a one-line summary, Details, and close, and which expands into a non-modal dialog holding the detail
card. Escape inside it collapses, then closes it. A bare phone visit opens Neighborhoods, chosen once after measurement
(see [Routing and content](routing-and-content.md#pages-and-routes)). Tablet and desktop show details through
`belowMap` in the Network view and under the other views.
`UniversalNeighborhoodSummary` lists one card per layout hub cluster (`universalNeighborhoods.ts`), largest first by
patent and model records, filterable by the anchor or a member company name. Cross-neighborhood edges become patent
(weighted by distinct patents), corporate, or catalog bridges. A card hands its anchor to the Network view in one
history entry (view, selection, and focus request together). With an empty filter, the measured-width list starts at
12 cards on phones (below 560 CSS pixels), or 24 on tablet and desktop; a selected neighborhood beyond that cap is
appended. Show all / Show fewer retains the reader's choice across view changes; expansion focuses the first newly
revealed card. Filtering shows all matches and hides the toggle. Measurement starts at desktop width for matching
server and first-client markup.
`UniversalConnectionTrace` uses `universalConnectionPaths.ts` to find shortest paths over undirected traversal of the
original edges, with an option to exclude corporate records. A BFS predecessor graph retains alternate shortest routes;
bounded enumeration returns at most five plus a truncation indicator. The path diagram opens the same detail cards,
and the evidence list describes each edge in its recorded direction with dates and sources.
`inventorAffiliations.ts` projects authorship and assignment through each distinct patent into inventor–assignee links;
corporate relationships and catalog makers never imply work attribution. Joint assignments count once for each assignee,
while percentages use the union of an inventor's assigned patents. Unassigned patents remain separately counted.
`inventorAffiliationLayout.ts` places company anchors around a circle and inventors at patent-count-weighted centers,
with deterministic collision offsets and a spatial grid. `InventorAffiliationMap` starts with multi-assignee inventors,
offers organization and single-assignee filters, retains all ties of matching inventors, and shows exact counts and
supporting patents. Its zoom/pan uses `useViewBoxZoom`; the comparison table provides a text route to every shown inventor.

`relationshipCatalog.ts` lazily shares one graph and analysis across routes; the ordinary focused map does not request it.
`relationshipInsights.ts` indexes unique authorship evidence, inventors, assignees, unassigned patents, and company pairs,
reusing the same affiliation projection in every view. Matrix rows cache cell counts and sort weights; chord geometry
does not rerun on hover. `useRelationshipViewParams` reads and patches the router fragment for each view's controls.
`CompanyRelationshipViews` offers a two-company bridge (inventor position and line thickness weighted by patent counts),
a paginated inventor-by-assignee matrix (counts or shares), and undirected company chords (distinct shared inventor
records per pair). Matrix and chord views allow up to eight selected assignees. Chord arc sizes count pair incidences,
not unique people; the pure `companyChordLayout.ts` allocates equal-width ribbon endpoints and separates labels.
`InventorRelationshipViews` compares the selected inventor's assignees, plots patents by recorded year and company,
and groups direct collaborators by their most frequent recorded assignee. Timeline playback advances the cutoff only
after an explicit Play action, filters a cached lane layout, and cleans up its timer. Undated patents stay in a separate list.
The co-inventor graph includes all coauthorship among the displayed collaborators; a complete direct-collaborator list
remains available beyond its 6/12/24-person diagram limit without building a second graph for that list. Edge assembly
visits the displayed inventors' patents only. The pure `coInventorLayout.ts` reserves space for each name;
node rings divide patent–assignee incidences while evidence lists retain exact patent counts and shares.
`RelationshipEvidenceLanes` is shared by both scopes: inventor maps fix the person, while the universal view provides an
inventor selector. Joint assignments occupy one patent node with connections to both assignees; bounded diagram lanes
are accompanied by complete supporting-patent lists. All views, including the affiliation map, reuse `PatentEvidence`,
which mounts patent buttons when its disclosure opens. They share the patent inspector and existing theme tokens.
Company views link to the focused inventor with the chosen company pair retained. These projections describe catalog
patent attribution, never employment, formal teams, contracts, or inferred technology transfer.

## Markdown Renderer

`ThemedMarkdown` has an `article` variant (heading IDs, React Router internal links, special image renderers, GFM,
math, table styling) and a `description` variant (compact typography, themed colors, GFM, math, safe external links).
Keep article-specific behavior in the renderer rather than duplicating markdown component maps in pages.

## Lens Builder

`LensBuilderPage` owns the client-only `/lens-builder/` experiment. `ENABLE_LENS_BUILDER` follows Vite's `DEV`
boolean (on in dev and Vitest, off in production); plain-Node metadata readers default it to false. To ship, set it
true; remove the flag and inline the route once released, or remove the builder when abandoned. It has no navigation
or sitemap entry and declares noindex/nofollow.

`SingleLensContent` accepts an optional side panel, a prebuilt `RuntimeLens` and `showPhotoSearch={false}` (threaded
through `LensDiagramPanel` to `DiagramHeader`, which hides the Flickr link for drafts). The builder uses the slot for a
65/35 split at 900 px and stacks the editor below the diagram on smaller screens, under the static pages' `PageNavBar`
breadcrumb ("Home / Lens builder") whose theme toggles dispatch into the builder's own `useLensState`. Those contexts
keep sliders and the analysis drawer working without URL slider updates, and `usePreferences` persists theme and ray
toggles as the viewer does. Builds debounce for 250 ms; invalid drafts retain the last successful runtime lens.
Storage failures are ignored, autosave restores unfinished geometry, and replacing a modified draft from the toolbar
requires confirmation. `?from=<catalog-key>` copies authored data, then is removed from the URL so a reload restores
the autosave instead of asking again.

The prescription table is fixed-layout and compact (0.75 rem monospace inputs whose accessible names stay
`"<surface label> <field>"` while the column headers carry the visible meaning). Below about 1360 px the 35% pane is
narrower than the table, which then scrolls sideways with the surface column pinned and a fade cue. Each row's ▸
disclosure holds its medium select and asphere terms; row actions are always-rendered icon buttons with full
`aria-label`s. Action refusals appear in a sticky alert at the foot of the editor.

React-free `src/lensBuilder/` operates on `LensDataV2Input`, never a reconstructed runtime prescription. Every edit
returns a new object. An element's id names the medium **after** a surface; its ordinary exit omits medium for air.
Each surface's `d` is the axial spacing after it; variable spacings remain exclusively in `gaps[label].values`.
Insertion splits fixed air space, deletion merges it, and reordering moves whole glass runs (an element or cemented
group with its exit surface) or air planes.
The form refuses changes involving referenced gap labels, spans, annotations, errata, cemented boundaries or folded
paths when it cannot preserve their meaning. Use validated Advanced JSON for those structures.

The form edits identity, surface geometry, medium, sparse conic/polynomial aspheres, glass coordinates and labels,
aperture, close focus and vertical fill. Glass suggestions include vendor and nearest nd/vd; native spectral data
must be reconciled in Advanced JSON before choosing replacement glass. Source, catalog, zoom/focus schedules, rear
plates and all other authored fields survive ordinary edits and JSON transport. `.data.ts` export prints the house
root-level type import, header, `const LENS_DATA = { ... } satisfies LensDataV2Input` and default export, using canonical
group order. It retains authored values, not original source comments; it does not import conversion-only optics code.
The built-in triplet is a synthetic teaching design with catalog N-BK7/N-F2 glasses, approximately 49 mm EFL at f/2.8,
declared 135 full frame so field-dependent analyses chart to a real format corner.
