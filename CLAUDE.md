# CLAUDE.md - LensVisualizer

## Project Overview

LensVisualizer (public site: Surface & Stop) is an interactive React + TypeScript optical lens cross-section visualizer.
It renders patent-derived camera lens sections as inline SVG, traces rays in real time, and exposes analysis tools for
aberrations, pupils, distortion, vignetting, bokeh, chromatic behavior, glass, lens comparison, and perspective-control
movement, including projection-aware fisheye tracing. The site is prerendered for SEO and deployed to Cloudflare Pages.

## Tech Stack

- React 18 functional components + TypeScript strict mode
- React Router 7, Vite 6, Vitest, Testing Library
- Inline SVG rendering only; no canvas for lens diagrams
- Inline styles only; no CSS files or UI libraries
- `react-helmet-async` for SEO metadata
- `react-markdown`, `remark-gfm`, `remark-math`, `rehype-katex`, and `rehype-slug` for articles and lens notes

## Project Map

```text
src/main.tsx              - React entry point
src/router.tsx            - Browser router from src/routes/routeManifest.tsx
src/entry-server.tsx      - SSR entry point for prerendering
src/routes/               - Shared route manifest
src/generated/            - Build-generated metadata and maker-prefix JSON (gitignored)
src/pages/                - Route-level page components
src/pages/lensIndex/      - Lens library filtering/results module
src/components/           - React UI components and hooks
  controls/               - Sliders, toggles, shared controls
  diagram/                - SVG diagram rendering layers
  display/                - Inspectors, charts, analysis tabs, overlays
  homepage/               - Home page sections
  hooks/                  - Viewer computation and interaction hooks
  layout/                 - LensViewer, diagram panels, page chrome
  markdown/               - Shared markdown renderer
src/comparison/           - Comparison mode feature module
src/optics/               - Pure optical engine and analysis helpers
src/types/                - Shared TypeScript types
src/utils/                - State, URL sync, themes, catalog, SEO, metadata utilities
src/lens-data/            - Auto-registered `*.data.ts` prescriptions and `*.analysis.md` notes
src/content/              - Auto-registered markdown articles and static content
scripts/                  - Metadata, prerender, sitemap, SEO, and lens-data build helpers
__tests__/                - Vitest unit/component/script tests
agent_docs/               - Focused architecture, workflow, generated-report, and historical guidance
```

## Commands

```bash
npm install
npm run dev                # Generate metadata, then start Vite on http://localhost:5173
npm run build              # Organize lens data, generate metadata, build, prerender, sitemap
npm run generate:metadata  # Organize lens data and refresh src/generated/build-metadata.json
npm run organize:lens-data # Move stray root-level lens files into maker folders
npm run preview
npm run test
npm run test:coverage
npm run typecheck
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run seo:audit
```

## Agent Docs

Read only the relevant focused doc before changing that area:

- `agent_docs/README.md` - agent-docs layout and generated-report index
- `agent_docs/architecture.md` - architecture index and subsystem routing
- `agent_docs/architecture/program-flow.md` - high-level Mermaid program flow diagram
- `agent_docs/architecture/public-functions.md` - stable project-internal functions, types, and import boundaries
- `agent_docs/architecture/routing-and-content.md` - routes, SSR, SEO, articles, generated metadata
- `agent_docs/architecture/viewer-and-diagram.md` - LensViewer, diagram panels, zoom/pan, error tiers
- `agent_docs/architecture/ui-components.md` - controls, display components, markdown renderer, analysis tabs
- `agent_docs/architecture/optics-engine.md` - ray tracing, aberrations, validation, diagram geometry
- `agent_docs/architecture/state-and-utilities.md` - reducer state, preferences, URL sync, themes, metadata helpers
- `agent_docs/architecture/comparison.md` - comparison mode, shared sliders, compare URLs
- `agent_docs/architecture/testing.md` - test layout and regression expectations
- `agent_docs/glass-catalog-buildout.md` - chromatic dispersion catalog, resolver, and how to add Sellmeier entries safely
- `agent_docs/glass-relabel-followup.md` - per-lens catalog mismatch relabel queue and audit workflow pointers
- `agent_docs/proprietary-glass-backfill.md` - patent line-index backfill workflow for unresolved proprietary glasses
- `agent_docs/generated/` - generated glass reports and queues; refresh all with `npm run generate:glass-reports`
- `agent_docs/records/exact-surface-trace.md` - historical staged implementation notes for the exact trace rollout
- `TRACE_MODEL_IMPROVEMENT_PLAN.md` - current/historical fisheye projection, vector launch, and bounding-sphere trace status
- `agent_docs/adding_a_lens.md` - lens data workflow and validation troubleshooting
- `agent_docs/lens-mount-format-backfill.md` - mount/format metadata backfill status and review queue
- `agent_docs/lens-patent-audit.md` - standard procedure for re-checking a lens against its patent and logging the result
- `agent_docs/adding_an_article.md` - article/series frontmatter, TOC, links, verification
- `agent_docs/article_formatting.md` - Markdown polishing expectations
- `agent_docs/workflow.md` - commits, CI, deployment, branch records
- `agent_docs/changelog.md` - update-history entry rules for `src/utils/content/changelogData.ts`
- `agent_docs/record_keeping.md` - branch/task notes under `agent_docs/records/`
- `agent_docs/code_conventions.md` - TypeScript, naming, formatting, architecture constraints
- `agent_docs/commenting_guide.md` - commenting standards
- `agent_docs/gotchas.md` - non-obvious constraints and failure modes
- `agent_docs/claude-md-best-practices.md` - how to keep this file short and useful
- `src/lens-data/LENS_DATA_SPEC.md` - full lens data format, glass identification conventions, validation rules
- `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md` - allowed `lensMounts` and `imageFormat` ids
- `src/lens-data/LENS_ANALYSIS_SPEC.md` - companion analysis-file format: required skeleton, conditional sections, voice
- `src/lens-data/TEMPLATE.data.ts.template` - annotated lens template and SD guidance

## Core Working Rules

- Keep optics helpers pure and pass the runtime lens object `L` explicitly; avoid module-level optical state.
- Exact surface tracing is the only trace path; there is no legacy mode. Do not add per-lens trace rollout state
  or thread `mode` / `traceMode` options through new helpers.
- Fisheye and ultra-wide field launch must go through `src/optics/projection.ts` and `solveChiefRay`; do not inline
  `Math.tan(field)` or bypass the bounding-sphere vector path.
- Keep slider-state-dependent analysis out of `buildLens()`; analysis tabs compute from current focus/zoom/aperture state.
- Use existing shared utilities/components before adding new abstractions.
- Use `src/components/markdown/ThemedMarkdown.tsx` for article and lens-description markdown.
- Add analysis drawer tabs through `analysisTabs.ts`, a display tab component, and `AnalysisDrawerContent.tsx`.
- Add shareable view state through `src/utils/state/lensViewUrlState.ts`, matching state types, and reducer hydration.
- Keep perspective-control movement in `src/optics/lensMovement.ts` unless explicitly upgrading full moved-optics analysis.
- Update all four theme variants when changing theme color tokens.
- Lens data and content are auto-discovered; avoid manual catalog/route edits unless changing the pipeline itself.
- Lens mount and image-format metadata use canonical ids from `src/utils/catalog/lensTaxonomy.ts`; see
  `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md` and do not free-type labels.

## Adding Content

For a lens: start from `src/lens-data/TEMPLATE.data.ts.template`, use `satisfies LensDataInput`, optionally add a matching
`*.analysis.md`, and populate `lensMounts` / `imageFormat` when the mount and format are unambiguous. Track backfill
status in `agent_docs/lens-mount-format-backfill.md`. `npm run generate:metadata` or `npm run build` will move
root-level draft lens files into maker folders and fix nested imports.

For an article: create `src/content/**/*.md` with required `slug` and `title` frontmatter. Use `series` and
`seriesOrder` for article series, and `toc: true` for long pieces. Run `npm run build` when route metadata should be
verified in `src/generated/build-metadata.json` and `dist/sitemap.xml`.

## Verification

Before commits or PRs, prefer:

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

Run `npm run build` for route, metadata, lens-data organization, SEO, article, or sitemap changes. Production deploys
through Cloudflare Pages; see `agent_docs/workflow.md`.

## Compaction Instructions

When compacting context, preserve:

- The current task description and acceptance criteria
- The list of files modified in this session
- Active build/test commands and their last results
- The Agent Docs index above so focused docs can be re-read as needed
