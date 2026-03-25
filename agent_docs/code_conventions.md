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

## Formatting

- **Double quotes** for strings, **120-char** print width — enforced by Prettier
- Run `npm run format` to auto-fix; `npm run format:check` to verify (CI uses this)
- ESLint 9 + Prettier + TypeScript enforce code quality — run `npm run lint`, `npm run format:check`, and `npm run typecheck`

## Architecture Constraints

- **Pure-function modules** (`optics.ts`, `buildLens.ts`, `validateLensData.ts`, `diagramGeometry.ts`, `lcaScaling.ts`) have no React dependencies
- **Inline styles only** — color palettes defined in theme objects; no CSS files or UI libraries
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory — update all 4 themes when changing colors

## Commenting

See `agent_docs/commenting_guide.md` for full commenting standards. Key rule: **comment the WHY, not the WHAT.**
