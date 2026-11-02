# Code Conventions — LensVisualizer

> **Prescriptive** — all new and modified code must follow these standards.

## Naming

- **camelCase** for functions and variables (`buildLens`, `traceRay`, `focusT`)
- **UPPER_CASE** for catalog-level constants and exported constants
- **Short math variables** in optics code: `y`, `u`, `n`, `R`, `K` (standard optics notation)
- **Prefix unused parameters with `_`** (`_e`, `_info`) to satisfy `no-unused-vars`

## TypeScript

- **`import type`** for type-only imports to keep runtime bundles clean
- **Props interfaces** defined at the top of each `.tsx` component file
- **Type definitions** centralized in `src/types/` — `optics.ts` (RuntimeLens, LensData, etc.), `state.ts` (LensState, LensAction), `theme.ts` (Theme, ThemeColorTokens)
- Intentionally partial mock objects in tests use `as unknown as RuntimeLens` (or the relevant type) to satisfy strict mode while keeping fixtures minimal
- **`satisfies`, not annotation, for authored data.** Lens prescriptions export
  `export default { ... } satisfies LensDataV2Input` and mount specs use `satisfies MountSpecInput` —
  never `const data: LensDataV2Input = { ... }`. `satisfies` contract-checks the object while
  preserving its narrow literal types, which downstream normalization, validation, and inference
  rely on; an annotation would widen every field to the input type and lose that information.

## Optics Public Seam And Names

Outside `src/optics/`, import only the final barrels listed in
[`architecture/public-functions.md`](architecture/public-functions.md). The architecture guard enforces the same rule
for app code, scripts and reports. Tests may import the implementation they exercise; `mount/` is outside the seam.

Engine helpers use ordinary names. Do not add rollout suffixes or compatibility barrels. Canonical implementations
keep the plain name; adapters with distinct contracts use descriptive names such as `ForRuntimeLens`, `FromState`,
`Clamped` or `OrZero`. Preserve the existing contract when changing an import. Implementations live in focused
subdirectories and import lower-level owners directly, avoiding public-barrel cycles.

## Formatting

- **Double quotes** for strings, **120-char** print width — enforced by Prettier
- Run `npm run format` to auto-fix; `npm run format:check` to verify (CI uses this)
- ESLint 9 + Prettier + TypeScript enforce code quality — run `npm run lint`, `npm run format:check`, and `npm run typecheck`

## Architecture Constraints

- **Pure-function modules** (`optics.ts`, `buildLens.ts`, `validation.ts`, `diagramGeometry.ts`, `chromatic.ts`) have no React dependencies
- **Folded mirror behavior stays data-driven** — use `LensData.opticalPath`, `SurfaceData.interaction`, and `innerSd`
  instead of adding per-lens trace flags or special-case code paths for individual fixtures
- **Inline styles only** — color palettes defined in theme objects; no CSS files or UI libraries
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory — update all 4 themes when changing colors

## Translator-Safe Display Text

Page translators can replace a Text node with nested elements, leaving React's Text reference detached.
Keep each changing HTML text run in a React-owned element with **one primitive child**:
`<span>{textRun("A: f/", formatFNumber(value))}</span>` (or one template string).
`<span>A: f/{value}</span>` still creates multiple children and can leave stale text. For mixed rich content,
give the text run its own span beside links, buttons or styled suffixes. Preserve the existing whitespace.
The shared `textRun` utility only accepts primitive display parts; it must not stringify `ReactNode`.
Shared numeric/readout components should accept `string | number` values and own their text element.

`translation/owned-text` flags this known JSX pattern across source views, including router links.
The shared Markdown renderer applies the same ownership rule to mixed text in its parsed tree, because
JSX lint cannot inspect generated Markdown. The guard deliberately does not prove opaque `ReactNode`
props, other third-party renderers, SVG, or pre-hydration DOM safe. Do not disable translation,
patch DOM prototypes, swallow rendering exceptions, rewrite the DOM with an observer, or remount entire
views to hide failures. Behavioral regressions and browser coverage are described in
`agent_docs/testing_recipes.md` under "Translation DOM Replacement".

## Commenting

See `agent_docs/commenting_guide.md` for full commenting standards. Key rule: **comment the WHY, not the WHAT.**
