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

Page translators (Chrome's built-in Google Translate among them) replace each Text node with new `<font>` wrappers
and remove the original that React still owns. React then throws `NotFoundError` when it removes or inserts beside
that node, or writes updates nobody sees. Keep each changing HTML text run in a React-owned element with **one
primitive child**, which React updates through `textContent`:

- `<span>{textRun("A: f/", formatFNumber(value))}</span>`, not `<span>A: f/{value}</span>` (two Text nodes). Use a
  template string when every part is a non-null string or number, and `textRun` when a part can be `null`,
  `undefined` or `boolean` (it drops them as React does). Preserve the existing whitespace. `textRun` takes only
  primitives; never stringify a `ReactNode`.
- Beside links, buttons, conditional elements or styled suffixes, give each text run its own `<span>`.
- Join a list of strings into one string (`names.join(", ")`) or render each item in its own element; a bare
  `{names}` renders one Text node per item.
- Shared numeric/readout components take `string | number` values and own their text element.

`translation/owned-text` (`scripts/translation-text-rule.mjs`) flags these JSX patterns, including router links, and
reports itself when type information is missing. The shared Markdown renderer applies the same ownership to its parsed
tree (`rehypeOwnedText`), because lint cannot see generated Markdown. Opaque `ReactNode` props, components that return
bare strings and third-party renderers are outside the rule; the detached-text audit in `agent_docs/testing_recipes.md`
("Translation DOM Replacement") catches them at runtime. SVG text is outside the rule (`agent_docs/decisions.md`).
Do not disable translation, patch DOM prototypes, swallow rendering exceptions, rewrite the DOM with an observer, or
remount views to hide failures; own the text instead (`agent_docs/decisions.md`, Rejected approaches).

## Commenting

See `agent_docs/commenting_guide.md` for full commenting standards. Key rule: **comment the WHY, not the WHAT.**
