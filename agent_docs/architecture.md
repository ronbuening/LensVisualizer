# Architecture - LensVisualizer

This file is the architecture index. Read only the focused document that matches the work you are doing, then follow
links outward if the change crosses subsystem boundaries.

## Read This First

- For route, page, SSR, SEO, article, or metadata work, read
  [`architecture/routing-and-content.md`](architecture/routing-and-content.md).
- For LensViewer orchestration, panel layout, diagram composition, slider plumbing, zoom/pan, and error boundaries, read
  [`architecture/viewer-and-diagram.md`](architecture/viewer-and-diagram.md).
- For reusable UI, controls, markdown rendering, analysis drawer tabs, charts, and display components, read
  [`architecture/ui-components.md`](architecture/ui-components.md).
- For optical math, ray tracing, aberrations, vignetting, distortion, bokeh, validation, and diagram geometry, read
  [`architecture/optics-engine.md`](architecture/optics-engine.md).
- For reducer state, persisted preferences, URL sync, contexts, theme tokens, and shared utility modules, read
  [`architecture/state-and-utilities.md`](architecture/state-and-utilities.md).
- For comparison mode, shared sliders, normalized scale, and compare-route synchronization, read
  [`architecture/comparison.md`](architecture/comparison.md).
- For test layout, coverage expectations, and shared test helpers, read
  [`architecture/testing.md`](architecture/testing.md).

## System Shape

LensVisualizer is a React + TypeScript app with an SVG-first optical diagram and a pure-function optics engine:

- `src/pages/` owns route-level screens and SEO shell content.
- `src/components/layout/` owns viewer orchestration and page/panel composition.
- `src/components/diagram/` owns SVG rendering.
- `src/components/display/` owns inspector, legend, analysis tabs, charts, and article/table-of-contents style display.
- `src/components/hooks/` owns viewer computation hooks and interaction-state helpers.
- `src/optics/` owns all optical calculations and has no React dependencies.
- `src/utils/` owns shared state, preferences, theme, metadata, catalog, URL, and JSON-LD helpers.
- `src/comparison/` owns comparison-mode state, layout, sliders, and URL synchronization.
- `scripts/` owns prerender, sitemap, metadata, lens-data organization, and SEO audit build helpers.

## Cross-Cutting Rules

- Keep optics helpers pure and pass the runtime lens object `L` explicitly; do not introduce module-level optical state.
- Keep analysis computations slider-state-aware. Do not move state-dependent analysis into `buildLens()`, which is build-time
  and infinity/default-state oriented.
- Keep perspective-control movement in the dedicated 2D movement layer (`src/optics/lensMovement.ts`) unless the analysis
  itself is explicitly being upgraded for shifted/tilted optics. v1 analysis tabs remain centered-lens diagnostics.
- Use shared chart helpers in `src/components/display/charts/` before adding bespoke SVG axes or tick math.
- Use `ThemedMarkdown` for article and lens-description markdown so link handling, math, tables, and special images stay
  consistent.
- Add new analysis drawer tabs by updating `analysisTabs.ts`, adding tab content under `src/components/display/`, and
  wiring it in `AnalysisDrawerContent.tsx`.
- When adding route patterns, update the route manifest and metadata/prerender pipeline together.
- When changing theme colors, update all four theme variants.

## Related Docs

- [`adding_a_lens.md`](adding_a_lens.md) - lens data workflow and validation troubleshooting.
- [`adding_an_article.md`](adding_an_article.md) - content authoring, frontmatter, TOC, and series behavior.
- [`workflow.md`](workflow.md) - checks, CI, deployment, and commit flow.
- [`code_conventions.md`](code_conventions.md) - TypeScript, naming, formatting, and architecture constraints.
- [`commenting_guide.md`](commenting_guide.md) - project commenting standards.
- [`gotchas.md`](gotchas.md) - non-obvious constraints and failure modes.
