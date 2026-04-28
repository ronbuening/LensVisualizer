# State And Utilities Architecture

Read this for reducer state, preferences, URL sync, contexts, theme tokens, metadata utilities, and general shared helpers.

## State Shape

Lens viewer state is split into these slices:

- `lens` - selected lens and comparison identity.
- `display` - mobile/desktop view, theme, high contrast, scale behavior.
- `rays` - on-axis/off-axis/chromatic display toggles.
- `sliders` - focus, zoom, aperture, optional PC shift/tilt, and related numeric UI state.
- `sharedSliders` - comparison-mode shared slider positions, including shared PC shift/tilt when either compared lens
  supports it.
- `panels` - inspector, drawer, legend, zoom/pan, and analysis tab state.
- `overlays` - modal and diagram overlay state.

`src/types/state.ts` owns the type definitions, literal unions, and runtime guards for tab/view/mode strings. Invalid
persisted or URL-provided strings should be normalized at the boundary.

## Reducer And Persistence

| Module | Purpose |
| --- | --- |
| `lensReducer.ts` | Pure reducer and initial-state derivation. Guards invalid analysis tab, view, and off-axis values. The `APPLY_URL_VIEW_STATE` action hydrates panels and sliders from the URL using the `VIEW_STATE_FIELDS` table from `lensViewUrlState.ts`. |
| `useLensState.ts` | `useReducer` wrapper with preference and URL initialization. Calls `parseLensViewQuery` once and `parseLensKeysFromSearch` for catalog-validated lens-key resolution. |
| `preferences.ts` | localStorage load/save with runtime fallback guards. |
| `usePreferences.ts` | Persists reducer state back to localStorage. |
| `useURLSync.ts` | Single 100 ms-debounced URL writer plus `popstate` hydration and one-time zoom init. All slider and view-state changes flow through the same callback. |
| `lensViewUrlState.ts` | Pure parser/builder for shareable route query state. Owns the canonical `VIEW_STATE_FIELDS` table; adding a shareable field is a one-line table edit plus the matching `URLState` and `PanelsSlice` additions. |
| `lensViewUrlSync.ts` | Bridges reducer `LensState` to the URL surface and converts focal length ↔ `zoomT` against the loaded lens(es). |
| `parseComparisonParams.ts` | Legacy comparison query parsing (kept for backward compat). Also exports `parseLensKeysFromSearch` for callers that have already parsed view state. |
| `zoomConversion.ts` | Focal length to/from zoom slider conversion. |

## Shareable View URLs

Canonical lens identity stays in route paths: `/lens/:slug` and `/compare/:slugA/:slugB`. Query params encode the
shareable view state:

- Stable slider params remain unversioned: `focus`, `aperture`, `zoom`, `shift`, and `tilt`.
- Versioned v1 view params are `v=1`, `el`, `a_el`, `b_el`, `gm`, `lca`, `ptz`, `bo`, `ad`, and `tab`.
- Single-lens selection uses `el`; comparison selection uses `a_el` and `b_el`.
- Overlay flags: `gm` (Abbe/glass-map modal), `lca` (chromatic-aberration overlay), `ptz` (Petzval-curvature overlay),
  `bo` (bokeh preview), `ad` (analysis drawer); `tab` names the active analysis drawer tab.
- Boolean params decode strictly as `1` for true and `0` or omitted for false. Invalid values fall back to defaults.
- Unknown `v` values ignore v1-only params while continuing to honor stable slider params.
- `shift` and `tilt` are clamped against each lens' `perspectiveControl` config at render time; lenses without that
  config resolve both values to zero.
- `ai` is reserved for future analysis-tab item state and should not be used until a concrete tab item UI exists.

`useOverlayState` keeps only the aspheric-comparison element open state (per-element modal lifecycle that does not
belong in a shareable URL). All other diagram overlays live in the panels slice.

## Contexts

`src/utils/LensContext.ts` exports:

- `LensStateContext`
- `LensDispatchContext`
- `PanelStateContext`
- `usePanelCtx`

The panels context value is `state.panels` directly. The reducer preserves this object across slider dispatches, which
keeps panel consumers from rerendering unnecessarily during slider changes.

## Theme System

| Module | Purpose |
| --- | --- |
| `themes.ts` | Theme factory and four theme definitions: dark, light, darkHC, lightHC. |
| `themeConstants.ts` | Shared theme-toggle icons/labels. |
| `themePreferences.ts` | Theme-mode conversion and system dark/high-contrast resolution. |
| `usePageTheme.ts` | Resolves page theme from prefs and media query state. |
| `usePageThemeToggle.ts` | Adds dark/high-contrast toggle cycling for static pages. |
| `styles.ts` | Shared inline style factories and static style constants. |

When adding or changing color tokens, update all four theme definitions.

## Catalog And Metadata Utilities

| Module | Purpose |
| --- | --- |
| `lensCatalog.ts` | Auto-registers lens data and lens analysis markdown via `import.meta.glob`. |
| `lensMetadata.ts` | SEO metadata, maker extraction, page titles/descriptions, canonical URLs, JSON-LD helpers. |
| `makerDetails.ts` | Maker display names, descriptions, and metadata. |
| `homepageContent.ts` | Generated homepage/article/lens content registries. |
| `changelogData.ts` | Homepage changelog entries. |
| `structuredData.ts` | JSON-LD structured-data helpers. |

## Other Shared Utilities

| Module | Purpose |
| --- | --- |
| `featureFlags.ts` | Feature flag controls. |
| `errorReporting.ts` | Builds prefilled GitHub issue URLs with component, lens, stack, and browser context. |
| `useMediaQuery.ts` | Responsive breakpoint hook. |
| `appConfig.ts` | Application-level constants. |
| `perfProbe.ts` | Dev-only timing wrapper that logs a `console.table` summary every 10 calls; no-op in production. |

## Type System

Definitions live in `src/types/`:

- `optics.ts` - `LensData`, `LensDataInput`, `RuntimeLens`, `PerspectiveControlConfig`, surfaces, elements, rays,
  transforms, chromatic data.
- `state.ts` - `LensState`, reducer actions, preferences, URL state, display/ray/panel unions and guards.
- `theme.ts` - theme tokens, closures, and variants.
- `index.ts` - barrel re-exports.

Lens data files use `satisfies LensDataInput` for compile-time validation and are also validated at runtime.
