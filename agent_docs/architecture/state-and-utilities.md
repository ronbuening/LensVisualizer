# State And Utilities Architecture

Read this for reducer state, preferences, URL sync, contexts, theme tokens, metadata utilities, and general shared helpers.

## State Shape

Lens viewer state is split into these slices:

- `lens` - selected lens and comparison identity.
- `display` - mobile/desktop view, theme, high contrast, scale behavior.
- `rays` - on-axis/off-axis/chromatic display toggles.
- `sliders` - focus, zoom, aperture, and related numeric UI state.
- `sharedSliders` - comparison-mode shared slider positions.
- `panels` - inspector, drawer, legend, zoom/pan, and analysis tab state.
- `overlays` - modal and diagram overlay state.

`src/types/state.ts` owns the type definitions, literal unions, and runtime guards for tab/view/mode strings. Invalid
persisted or URL-provided strings should be normalized at the boundary.

## Reducer And Persistence

| Module | Purpose |
| --- | --- |
| `lensReducer.ts` | Pure reducer and initial-state derivation. Guards invalid analysis tab, view, and off-axis values. |
| `useLensState.ts` | `useReducer` wrapper with preference and URL initialization. |
| `preferences.ts` | localStorage load/save with runtime fallback guards. |
| `usePreferences.ts` | Persists reducer state back to localStorage. |
| `useURLSync.ts` | Reads/writes deep-link URL state and initializes zoom from params. |
| `parseComparisonParams.ts` | Comparison route parsing plus shared slider URL encoding. |
| `zoomConversion.ts` | Focal length to/from zoom slider conversion. |

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

- `optics.ts` - `LensData`, `LensDataInput`, `RuntimeLens`, surfaces, elements, rays, transforms, chromatic data.
- `state.ts` - `LensState`, reducer actions, preferences, URL state, display/ray/panel unions and guards.
- `theme.ts` - theme tokens, closures, and variants.
- `index.ts` - barrel re-exports.

Lens data files use `satisfies LensDataInput` for compile-time validation and are also validated at runtime.
