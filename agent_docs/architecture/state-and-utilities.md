# State And Utilities Architecture

Read this for reducer state, preferences, URL sync, contexts, theme tokens, metadata utilities, and general shared
helpers. Per-folder inventories live in the generated `src/utils/**/readme.md` files; this document keeps the behavior
that is not visible from a module's exports.

## State Shape

Lens viewer state is split into these slices:

- `lens` - selected lens, single-lens optical configuration, and comparison identity.
- `display` - mobile/desktop view, theme, high contrast, scale behavior.
- `rays` - on-axis/off-axis/chromatic display toggles, ray tracing mode, and persisted ray density.
- `sliders` - focus, zoom, optional aberration-control, aperture, optional PC shift/tilt, and related numeric UI state.
- `sharedSliders` - comparison-mode shared slider positions, including shared PC shift/tilt when either compared lens
  supports it.
- `panels` - inspector, drawer, legend, zoom/pan, lens-group movement overlay, and analysis tab state.
- `overlays` - modal and diagram overlay state.

`src/types/state.ts` owns the type definitions, literal unions, and runtime guards for tab/view/mode strings. Invalid
persisted or URL-provided strings should be normalized at the boundary.

## Reducer, Persistence, And URL Sync

State modules live under `src/utils/state/`.

- `lensReducer.ts` guards invalid analysis tab, view, and off-axis values. Its `APPLY_URL_VIEW_STATE` action hydrates
  panels and sliders from the URL using the `VIEW_STATE_FIELDS` table owned by `lensViewUrlState.ts`.
- `useLensState.ts` wraps `useReducer` with preference and URL initialization; it calls `parseLensViewQuery` once and
  `parseLensKeysFromSearch` for catalog-validated lens-key resolution.
- `useURLSync.ts` is the single 100 ms-debounced URL writer plus `popstate` hydration, route/legacy identity handling,
  and one-time zoom init. Route pages preserve `/lens/:slug` and `/compare/:slugA/:slugB`; legacy homepage query URLs
  are kept for backward compatibility.
- `lensViewUrlState.ts` is the pure parser/builder and single source of truth for shareable query state. To add a
  shareable field, follow `agent_docs/adding_url_state.md`.
- `lensViewUrlSync.ts` bridges reducer `LensState` to the URL surface and converts focal length to and from `zoomT`
  against the loaded lens(es) through `zoomConversion.ts`.
- `parseComparisonParams.ts` parses legacy comparison query URLs and is kept for backward compatibility.
- `preferences.ts` / `usePreferences.ts` load and persist localStorage preferences behind runtime fallback guards.

`rayDensity` is a local preference, not a shareable URL parameter. Keep its runtime guard in `src/types/state.ts`,
load/save handling in `preferences.ts` / `usePreferences.ts`, and reducer field guard in sync when adding density modes.
Cardinal overlay toggles (`showCardinals`, `showCardinalDimensions`) are also local preferences, not URL parameters.

## Shareable View URLs

Canonical lens identity stays in route paths: `/lens/:slug` and `/compare/:slugA/:slugB`. Query params encode the
shareable view state:

- Stable slider params remain unversioned: `focus`, `aberration`, `aperture`, `zoom`, `shift`, and `tilt`.
- Versioned v1 view params are `v=1`, `el`, `a_el`, `b_el`, `gm`, `chr`, `ptz`, `mv`, `ad`, `tab`, and `cfg`.
- Single-lens optical configuration uses `cfg`; the parser accepts only a bounded catalog-key shape, and lens-aware
  initialization/popstate handling validates it against the canonical lens's `opticalConfiguration` group. Invalid,
  stale, and cross-group values fall back to the canonical prescription and disappear on the next URL write.
  Comparison identity stays in `/compare/:slugA/:slugB`, so `cfg` is ignored and omitted in compare mode.
- Single-lens selection uses `el`; comparison selection uses `a_el` and `b_el`.
- Overlay flags: `gm` (Abbe/glass-map modal), `chr` (chromatic-aberration overlay), `ptz` (Petzval-curvature overlay),
  `mv` (lens-group movement overlay mode: `focus`, `zoom`, or `combined`), `ad` (analysis drawer); `tab` names the
  active analysis drawer tab.
- Boolean params decode strictly as `1` for true and `0` or omitted for false. Invalid values fall back to defaults.
- Unknown `v` values ignore v1-only params while continuing to honor stable slider params.
- `shift` and `tilt` are clamped against each lens' `perspectiveControl` config at render time; lenses without that
  config resolve both values to zero.
- `aberration` is a normalized single-lens control for lenses that declare `aberrationControl`; ordinary controls use
  `0..1`, while optional centered controls use `-1..1` with `0` as their default. Comparison mode does not share it
  because the cam meaning is lens-specific.
- `ai` is reserved for future analysis-tab item state and should not be used until a concrete tab item UI exists.
- Ray density intentionally stays out of this URL surface and persists only through localStorage preferences.

`useOverlayState` keeps only the aspheric-comparison element open state (per-element modal lifecycle that does not
belong in a shareable URL). All other diagram overlays live in the panels slice.

## Contexts

`src/utils/state/LensContext.ts` exports `LensStateContext`, `LensDispatchContext`, `PanelStateContext`, and the
`useLensCtx` / `useLensDispatch` / `usePanelCtx` hooks. The panels context value is `state.panels` directly; the reducer
preserves this object across slider dispatches, which keeps panel consumers from rerendering during slider changes.

## Theme System

Theme modules live under `src/utils/theme/`. `themes.ts` builds the four variants (dark, light, darkHC, lightHC) from
one factory; `themePreferences.ts` resolves theme mode against system dark/high-contrast media queries, and
`usePageTheme.ts` / `usePageThemeToggle.ts` resolve and cycle the theme for static pages. When adding or changing color
tokens, update all four theme definitions; see `agent_docs/theme_tokens.md`.

## Catalog And Metadata Utilities

Catalog modules live under `src/utils/catalog/`, content registries under `src/utils/content/`, and JSON-LD helpers under
`src/utils/seo/`. The relationships worth knowing:

- `lensCatalog.ts` auto-registers lens data and companion analysis markdown via `import.meta.glob`; do not edit the
  catalog by hand.
- `lensSummaries.ts` is generated lightweight metadata (plus freshness lists) for index-style pages, search, and the
  author/assignee/patent catalogs, which must never ship full prescriptions.
- `lensTaxonomy.ts` owns the canonical mount and image-format ids (`src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md`);
  `makerDetails.ts`, `mountDetails.ts`, and `imageFormatDetails.ts` hold the display metadata for taxonomy pages.
- `patentRecords.ts` is the pure, index-free leaf shared by `patentCatalog.ts` and `authorCatalog.ts`;
  `lensPatentMetadata.ts` is re-exported by `lensMetadata.ts` so lens pages and cards share patent subtitles.
- `src/utils/content/changelogData.ts` is the hand-maintained update history (rules in `agent_docs/changelog.md`);
  `src/utils/seo/siteUrls.ts` normalizes page URLs to Cloudflare Pages' trailing-slash direct-`200` form while
  preserving static-file URLs.

## Other Shared Utilities

- `src/utils/errorReporting.ts` builds the prefilled GitHub issue URLs used by every `ErrorDisplay`.
- `src/utils/errorBeacon.ts` reports boundary, window, and rejection errors as privacy-sanitized GoatCounter events;
  startup events wait briefly for the async analytics script instead of being dropped.
- `src/utils/perfProbe.ts` is a dev-only timing wrapper that logs a `console.table` summary every 10 calls; no-op in
  production.
- `src/utils/style/` holds the shared inline style factories, slider stop collections, and static-page base styles;
  reuse them before adding local style constants.

## Type System

Definitions live in `src/types/`: `optics.ts` (lens data, runtime lens, surfaces, elements, rays, transforms,
chromatic data), `state.ts` (reducer state, actions, preferences, URL state, display/ray/panel unions and guards),
`theme.ts` (tokens, closures, variants), and `index.ts` (barrel). Lens data files use `satisfies LensDataInput` for
compile-time validation and are also validated at runtime.
