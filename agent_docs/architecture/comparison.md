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

The shared slider slice also owns `focusZoom`: Linked mode derives both panes through the existing mappings;
Independent mode retains exact normalized coordinates for A and B. Entering Independent copies both currently
resolved positions before a pane changes, avoiding jumps when prime/zoom ranges differ. Aperture and perspective
movement remain shared. The pure `computeComparisonGeometry` helper resolves the effective coordinates for all panes.

The Focus & zoom mode control and each pane's MTF source selector use this shared state. Selecting a source state
enters Independent atomically, changes only that pane, and enables focus-following rays. Per-pane focus/zoom sliders
remain below the diagrams when MTF closes; the bottom bar continues to own aperture and movement. Range controls
preserve authored values between slider steps rather than allowing the browser to round the displayed coordinate.

Relinking computes inverse shared focus/zoom coordinates from A. When A is a prime, B retains its zoom; B's focus
can change or clamp, and the UI warns that B may leave its source state. Swapping lenses swaps independent coordinates;
replacement resets only the affected pane. Exiting writes A's actual focus/zoom/aperture and source identity into the
single-lens destination URL, so route remounting cannot reset its configuration.

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

Independent comparison links use versioned `fz=independent`, exact normalized `a_focus`/`a_zoom` and
`b_focus`/`b_zoom` coordinates, and optional lens-scoped `a_ss`/`b_ss` identities. Valid identities override
coordinate fallbacks with the authored station; unknown or cross-lens identities retain the bounded coordinate
fallback. Back/forward restores the mode as well as both panes. Legacy shared-slider links remain linked.
Manual movement removes mismatched identities, and swapping/replacing lenses writes the resulting pane state
into the destination URL before navigation. The compare route keys the viewer by the lens pair so route history
changes initialize from that entry rather than retaining the previous pair.
