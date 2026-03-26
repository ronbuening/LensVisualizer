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
src/routes/routeManifest.tsx — Single source of truth for route definitions
src/entry-server.tsx      — SSR entry point for pre-rendering
src/pages/                — Page-level route components
                            (HomePage, LensPage, LensIndexPage,
                             MakerPage, MakersIndexPage, ComparePage,
                             ArticlePage, ArticlesPage, NotFoundPage)
src/types/                — Shared TypeScript type definitions (optics, state, theme)
src/comparison/           — Comparison mode feature module
                            (ComparisonContent, SharedSlidersBar,
                             comparisonSliders, comparisonReducer, comparisonTypes,
                             comparisonURLSync, useComparisonMode,
                             useComparisonOrchestration, useStickySliders)
src/components/           — React UI components and hooks
  components/             — Root utility components (ClientOnly, SEOHead)
  components/layout/      — Top-level layout and orchestration components
                            (LensViewer, TopBar, ControlsBar, ViewToggleBar,
                             OverlayModal, LensDiagramPanel, SingleLensContent,
                             DescriptionPanel, BreadcrumbBar, PageNavBar,
                             PanelOverlay, DiagramControlPanel, DropdownPanel,
                             PrimerToggleButton)
  components/diagram/     — SVG rendering components
                            (DiagramSVG, RayPolylines, ApertureStop,
                             ElementAnnotations, LCAInsetWidget,
                             LCAOverlayContent, PetzvalOverlayContent,
                             PetzvalSumBadge)
  components/controls/    — Sliders, toggles, and header controls
                            (DiagramControls, DiagramHeader, SliderControl,
                             RayToggles, ChromaticControls, LensSelector,
                             CollapseButton)
  components/display/     — Data display (inspector, legend, about)
                            (ElementInspector, DiagramLegend, AbbeDiagram,
                             AboutButtonRow, AboutFooter)
  components/errors/      — Error boundary components
                            (ErrorBoundary, PanelErrorBoundary)
  components/hooks/       — Custom React hooks for computation and state
                            (useLensComputation, useRayTracing, useOnAxisRays,
                             useOffAxisRays, useChromaticRays, useFlashOverlay,
                             useSideLayoutDetection, useOverlays,
                             useOverlayState, useDispatchAdapters,
                             useHeaderHeight, raySegmentUtils)
src/optics/               — Pure-function optical engine (.ts, no React deps)
                            (optics, buildLens, validateLensData,
                             diagramGeometry, lcaScaling)
src/utils/                — Themes, styles, feature flags, catalog, state hooks (.ts)
                            (themes, styles, featureFlags, lensCatalog,
                             lensMetadata, lensReducer, useLensState, LensContext,
                             useURLSync, zoomConversion, parseComparisonParams,
                             usePreferences, preferences, errorReporting,
                             useMediaQuery, usePageTheme, usePageThemeToggle,
                             themeConstants, appConfig, homepageContent,
                             makerDetails)
src/lens-data/            — Lens prescription data (auto-registered *.data.ts)
src/content/              — Static markdown content
                            (AboutMe.md, AboutSite.md,
                             OpticsPrimerSimple.md, OpticsPrimerIntermediate.md,
                             AberrationsPrimerSimple.md, AberrationsPrimerIntermediate.md)
scripts/                  — Build utilities
                            (prerender.mjs, generate-sitemap.mjs,
                             generate-build-metadata.mjs, seo-audit.mjs)
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

**GitHub Pages** via GitHub Actions — push to `main` builds and deploys (only after quality checks pass). See `agent_docs/workflow.md` for CI pipeline details.

## Agent Docs

Read the relevant file before starting work on that area:

- **`agent_docs/architecture.md`** — Module responsibilities, component data flow, API surface
- **`agent_docs/adding_a_lens.md`** — Lens data creation workflow and troubleshooting
- **`agent_docs/workflow.md`** — Commit style, pre-commit checks, and deployment pipeline
- **`agent_docs/code_conventions.md`** — Naming, TypeScript, formatting, and architecture constraints
- **`agent_docs/commenting_guide.md`** — Code commenting standards and best practices
- **`agent_docs/gotchas.md`** — Common pitfalls and non-obvious constraints
- **`src/lens-data/LENS_DATA_SPEC.md`** — Complete lens data format specification
- **`src/lens-data/TEMPLATE.data.ts.template`** — Annotated template with SD guidelines

## Key Design Patterns

- Helper functions accept lens object `L` as explicit parameter — no module-level state
- `useMemo`/`useCallback` for expensive computations and event handlers
- Auto-registration — lens data files discovered via `import.meta.glob`
- `ClientOnly` wrapper — prevents SSR hydration mismatches for browser-only components
- Shared utilities extracted to avoid duplication: `compileRaySegment()` + `filterChannels()` in `raySegmentUtils.ts`, `sagSlopeRaw()` in `optics.ts`, `encodeSliderParams()` in `parseComparisonParams.ts`, `formatPetzvalRadius()` in `optics.ts`
- Shared UI components: `CollapseButton` (LESS/MORE toggle), `PrimerToggleButton` (primer level switch), `AboutButtonRow` (about button group), `labelStyle()` + `themeConstants` in utils
- See `agent_docs/architecture.md` for full component relationships and data flow

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

Before every commit and PR — prefer small, staged commits pushed frequently (see `agent_docs/workflow.md`):

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

## Gotchas

See `agent_docs/gotchas.md` for common pitfalls. Key items: update all 4 themes when changing colors; lens data globs require `*.data.ts` naming; `satisfies LensDataInput` enables compile-time validation.

## Compaction Instructions

When compacting context, always preserve:
- The current task description and acceptance criteria
- The list of files modified in this session
- Any active build/test commands and their last results
- The Agent Docs index above (so docs can be re-read as needed)
