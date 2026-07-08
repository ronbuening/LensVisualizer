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
  `export default { ... } satisfies LensDataInput` and mount specs use `satisfies MountSpecInput` —
  never `const data: LensDataInput = { ... }`. `satisfies` contract-checks the object while
  preserving its narrow literal types, which downstream normalization, validation, and inference
  rely on; an annotation would widen every field to the input type and lose that information.

## The `*2` Engine Suffix and Compat Facade

Optics-engine modules under `src/optics/` export helpers with a historical `2` suffix
(`buildLens2`, `solveChiefRay2`, `traceRay2`, …) left over from the exact-trace rollout.
`src/optics/compat.ts` collects the suffixed names, and the stable public barrels —
`src/optics/optics.ts`, `src/optics/fieldGeometry.ts`, `src/optics/diagramGeometry.ts`,
`src/optics/buildLens.ts` — re-export them un-suffixed (`solveChiefRay2 as solveChiefRay`).

- **App/UI code imports the un-suffixed name from a public barrel**, not the `*2` symbol.
  There is no `solveChiefRay` vs `solveChiefRay2` distinction to choose between — they are the
  same function; the suffix is an engine-internal spelling.
- Do not add new `*2` names. New engine helpers get ordinary names; the suffix exists only so
  legacy call sites kept compiling during the rollout.
- Known debt: a few analysis-drawer helpers (e.g. `analysisJobsForState2`) have no un-suffixed
  facade yet, so some analysis tabs import them from `compat.ts` directly. When touching those
  call sites, prefer adding the un-suffixed re-export to a public barrel over spreading more
  `*2` imports.

## Formatting

- **Double quotes** for strings, **120-char** print width — enforced by Prettier
- Run `npm run format` to auto-fix; `npm run format:check` to verify (CI uses this)
- ESLint 9 + Prettier + TypeScript enforce code quality — run `npm run lint`, `npm run format:check`, and `npm run typecheck`

## Architecture Constraints

- **Pure-function modules** (`optics.ts`, `buildLens.ts`, `validateLensData.ts`, `diagramGeometry.ts`, `chromaticRayFanScaling.ts`) have no React dependencies
- **Folded mirror behavior stays data-driven** — use `LensData.opticalPath`, `SurfaceData.interaction`, and `innerSd`
  instead of adding per-lens trace flags or special-case code paths for individual fixtures
- **Inline styles only** — color palettes defined in theme objects; no CSS files or UI libraries
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory — update all 4 themes when changing colors

## Commenting

See `agent_docs/commenting_guide.md` for full commenting standards. Key rule: **comment the WHY, not the WHAT.**
