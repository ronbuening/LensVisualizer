# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, lens comparison, and multiple themes. Deployed to GitHub Pages.

## Tech Stack

- **React 18** (functional components, hooks) + **TypeScript** (strict mode)
- **React Router 7** — client-side routing with page-level components
- **Vite 6** (dev server + build + SSR pre-rendering)
- **Vitest** (unit testing)
- **SVG rendering** — all visuals are inline SVG, no canvas
- **Inline styles** — no CSS files or UI libraries
- **react-helmet-async** — SEO meta tags per page
- **react-markdown + remark-gfm** — rendering markdown content

## Project Structure

```
src/main.tsx              — React entry point
src/router.tsx            — React Router route definitions
src/entry-server.tsx      — SSR entry point for pre-rendering
src/pages/                — Page-level route components
                            (HomePage, LensPage, LensIndexPage,
                             MakerPage, MakersIndexPage, NotFoundPage)
src/types/                — Shared TypeScript type definitions (optics, state, theme)
src/components/           — React UI components and hooks
  components/             — Root utility components (ClientOnly, SEOHead)
  components/layout/      — Top-level layout and orchestration components
                            (LensViewer, TopBar, ControlsBar, ViewToggleBar,
                             ComparisonLayout, OverlayModal, LensDiagramPanel,
                             DescriptionPanel, SharedSlidersBar, BreadcrumbBar,
                             PanelOverlay)
  components/diagram/     — SVG rendering components
                            (DiagramSVG, RayPolylines, ApertureStop,
                             ElementAnnotations, LCAInsetWidget,
                             LCAOverlayContent, PetzvalOverlayContent,
                             PetzvalSumBadge)
  components/controls/    — Sliders, toggles, and header controls
                            (DiagramControls, DiagramHeader, SliderControl,
                             RayToggles, ChromaticControls, LensSelector)
  components/display/     — Data display (inspector, legend, about)
                            (ElementInspector, DiagramLegend, AbbeDiagram,
                             AboutButtonRow, AboutFooter)
  components/errors/      — Error boundary components
                            (ErrorBoundary, PanelErrorBoundary)
  components/hooks/       — Custom React hooks for computation and state
                            (useLensComputation, useRayTracing, useOnAxisRays,
                             useOffAxisRays, useChromaticRays, useFlashOverlay,
                             useSideLayoutDetection)
src/optics/               — Pure-function optical engine (.ts, no React deps)
                            (optics, buildLens, validateLensData,
                             diagramGeometry, lcaScaling)
src/utils/                — Themes, styles, feature flags, catalog, state hooks (.ts)
                            (themes, styles, featureFlags, lensCatalog,
                             lensMetadata, lensReducer, useLensState, LensContext,
                             useURLSync, useStickySliders, comparisonSliders,
                             parseComparisonParams, usePreferences, preferences,
                             errorReporting, useMediaQuery)
src/lens-data/            — Lens prescription data (auto-registered *.data.js)
src/content/              — Static markdown content
                            (AboutMe.md, AboutSite.md,
                             OpticsPrimerSimple.md, OpticsPrimerIntermediate.md)
scripts/                  — Build utilities
                            (prerender.mjs, generate-sitemap.mjs, seo-audit.mjs)
public/                   — Static assets (CNAME, robots.txt)
__tests__/                — Vitest unit tests (.ts, type-checked by tsc)
agent_docs/               — Detailed architecture and task guides
```

## Commands

```bash
npm install           # Install dependencies
npm run dev           # Start dev server (http://localhost:5173)
npm run build         # Production build → dist/ (includes prerender + sitemap)
npm run preview       # Preview production build
npm run test          # Run Vitest unit tests
npm run test:coverage # Run Vitest with v8 coverage report
npm run typecheck     # Run TypeScript type checking (tsc --noEmit)
npm run lint          # Run ESLint
npm run lint:fix      # Run ESLint with auto-fix
npm run format        # Format code with Prettier
npm run format:check  # Check formatting (CI uses this)
npm run seo:audit     # Run SEO audit on built output
```

## Deployment

- **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `main` or manual dispatch
- Builds with `npm ci && npm run build`, deploys `dist/` to Pages
- Base path set to `/` in `vite.config.js` (GitHub Actions deploy handles the Pages base path)
- **Quality checks** run on PRs via `.github/workflows/quality.yml` (lint, format, typecheck, test, npm audit, build)
- Deploy workflow is conditional — only runs after quality checks pass (or on manual dispatch)
- Build pipeline: `vite build` → `prerender.mjs` (SSR static HTML) → `generate-sitemap.mjs`

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
- Page-level routing — `src/pages/` components handle URL routes; `src/router.tsx` defines the route tree
- SSR pre-rendering — `entry-server.tsx` + `scripts/prerender.mjs` generate static HTML for SEO
- `ClientOnly` wrapper — prevents SSR hydration mismatches for browser-only components
- `SEOHead` — per-page meta tags via react-helmet-async

## Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.js.template` to `src/lens-data/YourLens.data.js`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run test` to verify validation passes

See `agent_docs/adding_a_lens.md` for details on defaults merging, naming conventions, and SD troubleshooting.

## Testing

Run `npm run test`. Tests in `__tests__/` (31 test files) cover the optics engine, lens building, validation, catalog loading, comparison sliders, URL parsing, themes, styles, state management (reducer, preferences, URL sync, sticky sliders), zoom optics helpers, error reporting, diagram geometry, LCA scaling, lens metadata, media queries, feature flags, and extracted UI component module contracts. Full DOM-based component rendering is not tested. Run `npm run test:coverage` for a v8 coverage report (coverage scope is `src/optics/**` and `src/utils/**`).

Test files are TypeScript (`.ts`) and included in `tsconfig.json` so `npm run typecheck` validates them alongside `src/`. Intentionally partial mock objects use `as unknown as RuntimeLens` (or the relevant type) to satisfy strict mode while keeping fixtures minimal. Lens data files (`.data.js`) are declared in `__tests__/globals.d.ts` via a wildcard module so tsc can resolve those imports.

## Code Conventions

- **camelCase** for functions and variables (`buildLens`, `traceRay`, `focusT`)
- **Short math variables** in optics code: `y`, `u`, `n`, `R`, `K` (standard optics notation)
- **UPPER_CASE** for catalog-level constants and exported constants
- **No comments on obvious code** — see `agent_docs/commenting_guide.md` for full commenting standards
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory
- **Pure-function modules** (`optics.ts`, `buildLens.ts`, `validateLensData.ts`, `diagramGeometry.ts`, `lcaScaling.ts`) have no React dependencies
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
- Test files are `.ts` — both Vitest and tsc process them; Vitest resolves `.js` import extensions to `.ts` sources automatically
- `tsconfig.json` uses `strict: true` with `allowJs: false`; `__tests__/` is included but lens data `.data.js` files are excluded via `__tests__/globals.d.ts` wildcard module declaration
- `.git-blame-ignore-revs` lists the initial Prettier commit — GitHub respects it automatically; for local blame run `git config blame.ignoreRevsFile .git-blame-ignore-revs`

## Compaction Instructions

When compacting context, always preserve:
- The current task description and acceptance criteria
- The list of files modified in this session
- Any active build/test commands and their last results
- The Agent Docs index above (so docs can be re-read as needed)
