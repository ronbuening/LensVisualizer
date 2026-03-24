# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, lens comparison, and multiple themes. Deployed to GitHub Pages.

## Tech Stack

- **React 18** (functional components, hooks) + **TypeScript** (strict mode)
- **Vite 6** (dev server + build)
- **Vitest** (unit testing)
- **SVG rendering** — all visuals are inline SVG, no canvas
- **Inline styles** — no CSS files or UI libraries

## Project Structure

```
src/types/          — Shared TypeScript type definitions (optics, state, theme)
src/components/     — React UI (.tsx components + .ts hooks)
src/optics/         — Pure-function optical engine (.ts, no React deps)
src/utils/          — Themes, feature flags, catalog, hooks (.ts)
src/lens-data/      — Lens prescription data (auto-registered *.data.js)
src/content/        — Static markdown content
__tests__/          — Vitest unit tests (.js)
agent_docs/         — Detailed architecture and task guides
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run test         # Run Vitest unit tests
npm run typecheck    # Run TypeScript type checking (tsc --noEmit)
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check formatting (CI uses this)
```

## Deployment

- **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `main` or manual dispatch
- Builds with `npm ci && npm run build`, deploys `dist/` to Pages
- Base path set to `/` in `vite.config.js` (GitHub Actions deploy handles the Pages base path)
- **Quality checks** run on PRs via `.github/workflows/quality.yml` (lint, format, typecheck, test, build)

## Agent Docs

Read the relevant file before starting work on that area:

- **`agent_docs/architecture.md`** — Module responsibilities, component data flow, API surface
- **`agent_docs/adding_a_lens.md`** — Lens data creation workflow and troubleshooting
- **`src/lens-data/LENS_DATA_SPEC.md`** — Complete lens data format specification
- **`src/lens-data/TEMPLATE.data.js.template`** — Annotated template with SD guidelines
- **`agent_docs/commenting_guide.md`** — Code commenting standards and best practices

## Key Design Patterns

- All helper functions accept lens object `L` as explicit parameter — no module-level state
- `useMemo` for expensive computations (lens building, layout, ray traces)
- `useCallback` for event handlers and coordinate transforms
- Pure functions for all optical calculations (no side effects)
- Inline styles only — color palettes defined in theme objects
- Responsive layout — desktop: side-by-side diagram/analysis; mobile (<900px): tab toggle
- Auto-registration — lens data files discovered via `import.meta.glob`

## Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.js.template` to `src/lens-data/YourLens.data.js`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run test` to verify validation passes

See `agent_docs/adding_a_lens.md` for details on defaults merging, naming conventions, and SD troubleshooting.

## Testing

Run `npm run test`. Tests in `__tests__/` cover the optics engine, lens building, validation, catalog loading, comparison sliders, URL parsing, and extracted UI component module contracts. Full DOM-based component rendering is not tested.

## Code Conventions

- **camelCase** for functions and variables (`buildLens`, `traceRay`, `focusT`)
- **Short math variables** in optics code: `y`, `u`, `n`, `R`, `K` (standard optics notation)
- **UPPER_CASE** for catalog-level constants and exported constants
- **No comments on obvious code** — see `agent_docs/commenting_guide.md` for full commenting standards
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory
- **Pure-function modules** (`optics.ts`, `buildLens.ts`, `validateLensData.ts`, `diagramGeometry.ts`) have no React dependencies
- **Type definitions** centralized in `src/types/` — `optics.ts` (RuntimeLens, LensData, etc.), `state.ts` (LensState, LensAction), `theme.ts` (Theme, ThemeColorTokens)
- **Props interfaces** defined at the top of each `.tsx` component file
- **`import type`** for type-only imports to keep runtime bundles clean
- **ESLint 9 + Prettier + TypeScript** enforce code quality — run `npm run lint`, `npm run format:check`, and `npm run typecheck`
- **Double quotes** for strings, **120-char** print width (enforced by Prettier)
- **Prefix unused parameters with `_`** (`_e`, `_info`) to satisfy `no-unused-vars`

## Gotchas

- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` calls `validateLensData()` internally; malformed data throws descriptive errors with all issues listed
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
- `vite.config.js` sets `base: '/'` — GitHub Actions deploy workflow handles the Pages base path
- Lens data globs match `*.data.js`; analysis globs match `*.analysis.md` — naming convention matters for auto-registration
- `src/lens-data/defaults.ts` values are merged under each lens — per-lens values in `.data.js` take precedence
- Glob paths in `lensCatalog.ts` are relative to the file's location (`../lens-data/`)
- Lens data files stay as `.data.js` (not TypeScript) for glob pattern compatibility — validated at runtime by `validateLensData()`
- Test files stay as `.js` — Vitest resolves `.js` imports to `.ts` automatically
- `tsconfig.json` uses `strict: true` with `allowJs: false`; lens data `.data.js` files are excluded from tsc checking
- `.git-blame-ignore-revs` lists the initial Prettier commit — GitHub respects it automatically; for local blame run `git config blame.ignoreRevsFile .git-blame-ignore-revs`

## Compaction Instructions

When compacting context, always preserve:
- The current task description and acceptance criteria
- The list of files modified in this session
- Any active build/test commands and their last results
- The Agent Docs index above (so docs can be re-read as needed)
