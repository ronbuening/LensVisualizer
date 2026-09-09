# Comparison Architecture

Read this for comparison mode, shared sliders, normalized scale, and compare-route synchronization.

All comparison-mode files live in `src/comparison/`, a peer module alongside `src/components/`, `src/optics/`, and
`src/utils/`.

## Modules

The full inventory is in `src/comparison/readme.md`; these are the modules with cross-module contracts.

| Module | Purpose |
| --- | --- |
| `ComparisonContent.tsx` | Full comparison-mode content area. Wires `ComparisonLayout` and `SharedSlidersBar`; surfaces errors. |
| `ComparisonLayout.tsx` | Side-by-side desktop or stacked mobile comparison panels. Passes prebuilt runtime lenses into each panel. |
| `SharedSlidersBar.tsx` | Shared focus/aperture/zoom and perspective-movement controls for comparison mode, including independent shift/tilt reset actions. |
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

Compare identity may be a hidden member of a visible lens's `opticalConfiguration` group. The selector allow-list is
the visible catalog plus those group members; unrelated hidden debug/reference fixtures remain unavailable. This makes
configurations such as TC OUT versus TC IN directly comparable without an ambiguous pane-specific `cfg` query.
