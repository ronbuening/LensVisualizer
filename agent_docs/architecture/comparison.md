# Comparison Architecture

Read this for comparison mode, shared sliders, normalized scale, and compare-route synchronization.

All comparison-mode files live in `src/comparison/`, a peer module alongside `src/components/`, `src/optics/`, and
`src/utils/`.

## Modules

| Module | Purpose |
| --- | --- |
| `ComparisonContent.tsx` | Full comparison-mode content area. Wires `ComparisonLayout` and `SharedSlidersBar`; surfaces errors. |
| `ComparisonLayout.tsx` | Side-by-side desktop or stacked mobile comparison panels. Passes prebuilt runtime lenses into each panel. |
| `SharedSlidersBar.tsx` | Shared focus/aperture/zoom controls for comparison mode. |
| `SharedSliderSection.tsx` | Shared slider section UI. |
| `SharedFStopQuickSelect.tsx` | F-stop quick-select UI for shared aperture controls. |
| `useComparisonOrchestration.ts` | LensViewer integration hook: comparison mode, sticky sliders, enter/exit, and default-aperture effect. |
| `useComparisonMode.ts` | Runtime lens building, per-lens slider mapping, normalized scale ratios, and header-height alignment. |
| `useComparisonDisplayValues.ts` | Display values derived from shared comparison state. |
| `useStickySliders.ts` | Sticky shared-slider state machine. |
| `comparisonSliders.ts` | Pure mapping between shared slider positions and per-lens focus/aperture/zoom values. |
| `comparisonReducer.ts` | Comparison sub-reducer. |
| `comparisonURLSync.ts` | Compare pathname building and compare-route SEO metadata. |
| `comparisonTypes.ts` | Shared slider and comparison action types. |

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

Compare routes use `/compare/:slugA/:slugB`; lens identity does not move into query params. Shared sliders use the
stable `focus`, `aperture`, `zoom`, `shift`, and `tilt` params. Shared overlay/view state uses the v1 params from
`lensViewUrlState.ts`: `gm`, `lca`, `ptz`, `bo`, `ad`, and `tab` apply to both panes, while selected elements are
pane-specific via `a_el` and `b_el`. URL helpers live in `comparisonURLSync.ts`, `parseComparisonParams.ts`, and
`src/utils/lensViewUrlState.ts`. All URL writes flow through one 100 ms-debounced callback in `useURLSync.ts`.
