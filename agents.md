# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, lens comparison, and multiple themes. Deployed to GitHub Pages.

## Tech Stack

- **React 18** (functional components, hooks) + **TypeScript** (strict mode)
- **React Router 7** — client-side routing with page-level components
- **Vite 6** (dev server + build + SSR pre-rendering)
- **Vitest** + **@testing-library/react** (unit and component testing)
- **SVG rendering** — all visuals are inline SVG, no canvas
- **Inline styles** — no CSS files or UI libraries
- **react-helmet-async** — SEO meta tags per page
- **react-markdown + remark-gfm** — rendering markdown content

## Project Structure

```
src/main.tsx              — React entry point
src/router.tsx            — Route definitions (via routes/routeManifest.tsx)
src/entry-server.tsx      — SSR entry point for pre-rendering
src/pages/                — Page-level route components
src/types/                — Shared TypeScript type definitions (optics, state, theme)
src/comparison/           — Comparison mode feature module
src/components/           — React UI components and hooks
  components/layout/      — Top-level layout and orchestration (LensViewer, TopBar, etc.)
  components/diagram/     — SVG rendering components
  components/controls/    — Sliders, toggles, shared UI (CollapseButton, etc.)
  components/display/     — Data display (inspector, legend, about)
  components/errors/      — Error boundary components
  components/homepage/    — Hero, changelog, recent lenses, nav cards, footer
  components/hooks/       — Custom hooks + shared utilities (raySegmentUtils, etc.)
src/optics/               — Pure-function optical engine (.ts, no React deps)
src/utils/                — Themes, styles, feature flags, catalog, state hooks
src/lens-data/            — Lens prescription data (auto-registered *.data.ts)
src/content/              — Static markdown content (primers, about pages)
scripts/                  — Build utilities (prerender, sitemap, metadata, SEO audit)
public/                   — Static assets (CNAME, robots.txt)
__tests__/                — Vitest unit tests (.ts, type-checked by tsc)
agent_docs/               — Detailed architecture and task guides
```

See `agent_docs/architecture.md` for the complete module-by-module breakdown.

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
- **`agent_docs/record_keeping.md`** — How to maintain branch/task records without bloating `CLAUDE.md`
- **`agent_docs/code_conventions.md`** — Naming, TypeScript, formatting, and architecture constraints
- **`agent_docs/commenting_guide.md`** — Code commenting standards and best practices
- **`agent_docs/gotchas.md`** — Common pitfalls and non-obvious constraints
- **`agent_docs/claude-md-best-practices.md`** — Guidelines for maintaining this file (progressive disclosure, size limits)
- **`src/lens-data/LENS_DATA_SPEC.md`** — Complete lens data format specification
- **`src/lens-data/TEMPLATE.data.ts.template`** — Annotated template with SD guidelines

## Key Design Patterns

- Helper functions accept lens object `L` as explicit parameter — no module-level state
- `useMemo`/`useCallback` for expensive computations and event handlers
- Auto-registration — lens data files discovered via `import.meta.glob`
- `ClientOnly` wrapper — prevents SSR hydration mismatches for browser-only components
- Shared utilities and components reduce duplication — check `architecture.md` before creating new ones
- **Unified route pipeline** — `generate-build-metadata.mjs` is the single source of truth for all concrete routes; `prerender.mjs` validates routes against the React Router manifest; `generate-sitemap.mjs` and `seo-audit.mjs` consume the same route list from `build-metadata.json`
- **Aberration analysis** — slider-state-dependent metrics (SA, distortion, vignetting) live in `src/optics/aberrationAnalysis.ts` and `src/optics/distortionAnalysis.ts` as pure helpers, memoized from current state in the Analysis Drawer tabs; they must NOT go in `buildLens()` which is build-time only
- **Analysis Drawer** — sliding panel that overlays the SVG viewport with tabbed analysis views (aberrations, distortion, breathing, vignetting). Opened via the "ABERRATIONS & DISTORTIONS" button in `DiagramViewport.tsx`; state managed via `analysisDrawerOpen` / `analysisDrawerTab` in the panels slice. Desktop: vertical tabs on the left; mobile: horizontal tabs on top. New analysis tabs require: (1) extending `ANALYSIS_TABS` in `src/components/layout/lensDiagram/analysisTabs.ts`, (2) creating a tab content component in `src/components/display/`, (3) adding a conditional render in `AnalysisDrawerContent.tsx`
- **Zoom/pan mode** — `useViewBoxZoom` hook manages SVG viewBox state for infinite-resolution zoom and pan; activated via toggle button in `DiagramViewport.tsx`, which hides all other controls and shows persistent Reset/Cancel buttons. Keyboard shortcuts: `+/-` zoom, arrows pan, `Escape` cancel, `0` reset. State tracked via `zoomPanActive` in the panels slice
- See `agent_docs/architecture.md` for full component relationships and data flow

## Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/YourLens.data.ts`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation pass

See `agent_docs/adding_a_lens.md` for details on defaults merging, naming conventions, and SD troubleshooting.

## Testing

Run `npm run test`. Tests in `__tests__/` cover the optics engine, lens building, validation, catalog loading, utils, and component smoke tests (via `@testing-library/react`). Test files are TypeScript (`.ts`/`.tsx`), type-checked by tsc alongside `src/` — use `as unknown as RuntimeLens` for intentionally partial mock objects. Run `npm run test:coverage` for a v8 coverage report.

## Code Conventions

See `agent_docs/code_conventions.md` for full standards. Critical non-defaults: **double quotes**, **120-char** print width, **`import type`** for type-only imports, **`_`-prefixed unused params**, inline styles only (no CSS files).

## Pre-Commit Checklist

Before every commit and PR — prefer small, staged commits pushed frequently (see `agent_docs/workflow.md`):

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

## Gotchas

See `agent_docs/gotchas.md` for common pitfalls. Key items: update all 4 themes when changing colors; lens data globs require `*.data.ts` naming; `satisfies LensDataInput` enables compile-time validation; adding new route patterns to `routeManifest.tsx` requires updating `generate-build-metadata.mjs` route expansion (build fails if you forget).

## Compaction Instructions

When compacting context, always preserve:
- The current task description and acceptance criteria
- The list of files modified in this session
- Any active build/test commands and their last results
- The Agent Docs index above (so docs can be re-read as needed)
