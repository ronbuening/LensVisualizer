# Comparison Architecture

Read this for comparison mode, shared sliders, normalized scale, and compare-route synchronization.

All comparison-mode files live in `src/comparison/`, a peer module alongside `src/components/`, `src/optics/`, and
`src/utils/`.

## Modules

The full inventory is in `src/comparison/readme.md`; these are the modules with cross-module contracts.

| Module | Purpose |
| --- | --- |
| `ComparisonContent.tsx` | Full comparison-mode content area. Wires `ComparisonLayout`, `SharedAnalysisDock` (desktop), and `SharedSlidersBar`; surfaces errors. |
| `ComparisonLayout.tsx` | Side-by-side desktop or stacked mobile comparison panels. Passes prebuilt runtime lenses into each panel. |
| `SharedSlidersBar.tsx` | Shared focus/aperture/zoom and perspective-movement controls for comparison mode, including independent shift/tilt reset actions. |
| `SharedAnalysisDock.tsx` | Desktop-only analysis/ZOOM button dock under both panes. Drawer and zoom state are shared, so one dock opens the same tab in both panes; each pane's drawer is tabless (`analysisControls: "shared"`). |
| `useComparisonOrchestration.ts` | LensViewer integration hook: comparison mode, sticky sliders, enter/exit, and default-aperture effect. |
| `useComparisonMode.ts` | Runtime lens building, per-lens slider mapping, normalized scale ratios, and header-height alignment. |
| `useStickySliders.ts` | Sticky shared-slider state machine. |
| `comparisonSliders.ts` | Pure mapping between shared slider positions and per-lens focus/aperture/zoom values. |
| `comparisonURLSync.ts` | Compare pathname building and compare-route SEO metadata. |

## Runtime Lens Reuse

Comparison orchestration builds each displayed runtime lens once per lens key change. `ComparisonLayout` passes those
runtime lenses to `LensDiagramPanel`, and `useLensComputation` uses the supplied runtime lens instead of rebuilding from
`LENS_CATALOG`.

Single-lens mode keeps the fallback path where `useLensComputation` builds from the selected catalog lens.

## Shared Slider Flow

Shared sliders represent a normalized comparison control surface. `comparisonSliders.ts` maps shared positions into each
lens' actual focus, aperture, zoom, and optional perspective-control movement ranges. This keeps the UI ergonomic while
preserving each lens' real optical limits; lenses without `perspectiveControl` clamp shared shift/tilt to zero.

The aperture request scale stays fixed across zoom so a selected f-number and saved URL keep their meaning.
`fNumberAtStopdown` supplies the current-zoom aperture limit for both the diagrams and comparison readouts.
When either lens cannot reach the request, the slider labels it "Requested" and shows both actual A/B apertures;
the optional effective-aperture row adds only the close-focus correction. The common-point marker and sticky flash
follow the current zoom limits, with no common-point marker when the aperture ranges do not overlap.

Focus ranges include only lenses with modeled focus travel. Unsupported panes receive infinity focus and display
"Not modeled"; the shared control is disabled when neither lens supports focusing.

Sticky common-point detents apply only to pointer drags. Keyboard adjustments and aperture presets select their
requested value directly and release an existing detent.

Interactive zoom changes rescale normalized focus to preserve the current object distance, clamping at the new
close-focus endpoint. Single-lens controls use the same distance conversion. Zoom actions carry the adjusted focus
atomically; URL hydration omits this adjustment so saved focus and zoom restore together without reinterpretation.

## Scale Modes

Comparison mode can normalize the two panels so users can compare physical scale or framing. Scale ratios are computed
in comparison orchestration and passed into diagram panels as explicit per-panel props.

## URL Sync

Compare routes use `/compare/:slugA/:slugB`; lens identity never moves into query params. Shared sliders use the stable
`focus`, `aperture`, `zoom`, `shift`, and `tilt` params, and shared overlay/view state uses the v1 params from
`src/utils/state/lensViewUrlState.ts`: `gm`, `chr`, `ptz`, `mv`, `ad`, and `tab` apply to both panes, while selected elements
are pane-specific via `a_el` and `b_el`. Path building and compare-route SEO metadata live in `comparisonURLSync.ts`,
legacy query URLs parse through `src/utils/state/parseComparisonParams.ts`, and all URL writes flow through the one
debounced callback in `src/utils/state/useURLSync.ts`. To add a shareable field, including a pane-specific `a_`/`b_`
variant, follow `agent_docs/adding_url_state.md`.

Patent-positions mode is single-lens only. Compare panes render with `showSliders={false}`, the `pp` param is neither
read nor written on compare routes, and the flag stays in state so the stored preference survives a compare session.

Compare identity may be a hidden member of a visible lens's `opticalConfiguration` group. The selector allow-list is
the visible catalog plus those group members; unrelated hidden debug/reference fixtures remain unavailable. This makes
configurations such as TC OUT versus TC IN directly comparable without an ambiguous pane-specific `cfg` query.

Each pane can also carry a detachable teleconverter (`teleconverterKeyA` / `teleconverterKeyB`, URL `a_tc` / `b_tc`).
`useComparisonMode` builds each pane through `resolveLensSystemData()`, and `ComparisonLayout` reads the converter back
from the built lens so pane identity follows the built system. Both panes may hold the same lens: pressing COMPARE
with a converter mounted opens lens + converter against the bare lens. Changing a pane's lens clears that pane's
converter, and a swap carries each converter with its lens. A compare-route lens switch replaces the path and drops
the query, so `LensViewer` reschedules the URL writer after it; otherwise the other pane's `a_tc` / `b_tc` would be
missing from the address bar until some unrelated view state changed.

## Header Details And Vertical Space

Desktop comparison panes expose an independent Details disclosure for specifications and current optical readouts.
The lens name, patent link, and inventors remain visible. Details default to collapsed at viewport heights up to 800px,
and expanded above that height. Manual choices survive resizing and slider changes; replacing a lens resets only its
pane's choice. Mobile retains the existing header preference.

The comparison content owns vertical scrolling. Each desktop diagram reserves at least 280px and grows into additional
space; analysis controls and shared sliders follow in the same scroll region. The header measurement observes natural
content inside the alignment spacer, allowing both panes to shrink after details collapse.

Desktop comparison toolbar groups use their natural label widths, with cardinal and dimension controls side by side.
This keeps the full controls on one row at ordinary desktop widths while allowing wrapping on smaller screens.
