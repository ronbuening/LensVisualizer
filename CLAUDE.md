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
src/lens-data/            — Lens prescription data (auto-registered *.data.ts)
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
- **`agent_docs/code_conventions.md`** — Naming, TypeScript, formatting, and architecture constraints
- **`agent_docs/commenting_guide.md`** — Code commenting standards and best practices
- **`src/lens-data/LENS_DATA_SPEC.md`** — Complete lens data format specification
- **`src/lens-data/TEMPLATE.data.ts.template`** — Annotated template with SD guidelines

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

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/YourLens.data.ts`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation pass

See `agent_docs/adding_a_lens.md` for details on defaults merging, naming conventions, and SD troubleshooting.

## Testing

Run `npm run test`. Tests in `__tests__/` cover the optics engine, lens building, validation, catalog loading, and all utils. Full DOM-based component rendering is not tested. Test files are TypeScript (`.ts`), type-checked by tsc alongside `src/` — use `as unknown as RuntimeLens` for intentionally partial mock objects. Run `npm run test:coverage` for a v8 coverage report.

## Code Conventions

See `agent_docs/code_conventions.md` for full standards. Critical non-defaults: **double quotes**, **120-char** print width, **`import type`** for type-only imports, **`_`-prefixed unused params**, inline styles only (no CSS files).

## Pre-Commit Checklist

Before every commit and before opening a PR, all of the following must pass:

```bash
npm run typecheck     # Zero TypeScript errors
npm run format:check  # Prettier formatting passes (run npm run format to fix)
npm run lint          # ESLint passes (run npm run lint:fix to auto-fix)
npm run test          # All tests pass
```

CI enforces the same checks via `.github/workflows/quality.yml` — failing them blocks deploy.

## Gotchas

- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` calls `validateLensData()` internally; malformed data throws descriptive errors with all issues listed
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
- `vite.config.js` sets `base: '/'` — GitHub Actions deploy workflow handles the Pages base path
- Lens data globs match `*.data.ts`; analysis globs match `*.analysis.md` — naming convention matters for auto-registration
- `src/lens-data/defaults.ts` values are merged under each lens — per-lens values in `.data.ts` take precedence
- Glob paths in `lensCatalog.ts` are relative to the file's location (`../lens-data/`)
- Lens data files are TypeScript (`.data.ts`) with `satisfies LensDataInput` for compile-time type checking — also validated at runtime by `validateLensData()`
- Test files are `.ts` — both Vitest and tsc process them; Vitest resolves `.js` import extensions to `.ts` sources automatically
- `tsconfig.json` uses `strict: true` with `allowJs: false`; lens data `.data.ts` files are included in tsc via the `"src"` include
- `.git-blame-ignore-revs` lists the initial Prettier commit — GitHub respects it automatically; for local blame run `git config blame.ignoreRevsFile .git-blame-ignore-revs`

## Compaction Instructions

When compacting context, always preserve:
- The current task description and acceptance criteria
- The list of files modified in this session
- Any active build/test commands and their last results
- The Agent Docs index above (so docs can be re-read as needed)
