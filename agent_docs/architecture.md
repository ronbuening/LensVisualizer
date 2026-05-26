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
- For a high-level Mermaid data/control-flow diagram, read
  [`architecture/program-flow.md`](architecture/program-flow.md).
- For stable project-internal functions, types, and import boundaries, read
  [`architecture/public-functions.md`](architecture/public-functions.md).

## System Shape

LensVisualizer is a React + TypeScript app with an SVG-first optical diagram and a pure-function optics engine:

- `src/pages/` owns route-level screens and SEO shell content.
- `src/components/layout/` owns viewer orchestration and page/panel composition.
- `src/components/diagram/` owns SVG rendering.
- `src/components/display/` owns inspector, legend, display-domain UI, analysis modules under `analysis/`, and diagram
  overlays under `overlays/`.
- `src/components/content/` owns article/archive/changelog cards, lists, and table-of-contents components.
- `src/components/errors/` owns page/panel error boundaries and shared error displays.
- `src/components/hooks/` owns viewer computation hooks and interaction-state helpers.
- `src/optics/` owns all optical calculations and has no React dependencies. See
  [`architecture/optics-engine.md`](architecture/optics-engine.md) for the `math/`, `trace/`, `field/`, `state/`,
  `prescription/`, `analysis/`, and diagram-geometry submodule boundaries.
- `src/utils/` owns shared helpers, partitioned by domain: `catalog/`, `content/`, `seo/`, `state/`, `style/`, and
  `theme/`, plus root-level general utilities.
- `src/comparison/` owns comparison-mode state, layout, sliders, and URL synchronization.
- `scripts/` owns prerender, sitemap, metadata, lens-data organization, and SEO audit build helpers.

## Cross-Cutting Rules

- Keep optics helpers pure and pass the runtime lens object `L` explicitly; do not introduce module-level optical state.
- Exact surface tracing is the only trace path; do not reintroduce a trace-mode flag, `RayTraceOptions`, or
  per-lens rollout state.
- Keep fisheye/ultra-wide launch logic centralized in `src/optics/projection.ts` and `solveChiefRay`; avoid inline
  `Math.tan(field)` launch math in analysis modules.
- Keep mirror/folded optics on the generalized path model: `LensData.opticalPath` resolves hit order and image plane,
  `SurfaceData.interaction` controls refract/reflect/block behavior, `innerSd` controls annular apertures, and ordinary
  lenses must retain their no-`opticalPath` sequential defaults. Folded stop/chief-ray solves must use generalized
  tracing and path-aware image-plane math rather than sequential `stopAt` shortcuts.
- Keep folded-system complex analysis guarded until the specific path is mirror-safe. Axial cardinal overlays and
  mirror-safe spherical/blur paths are adapted; the drawer guards coma, distortion, vignetting, and pupils, while
  folded field curvature/astigmatism remains section-guarded inside the Aberrations tab until fixture-backed validation
  says otherwise.
- Keep analysis computations slider-state-aware. Do not move state-dependent analysis into `buildLens()`, which is build-time
  and infinity/default-state oriented.
- Keep perspective-control movement in the dedicated 2D movement layer (`src/optics/lensMovement.ts`) unless the analysis
  itself is explicitly being upgraded for shifted/tilted optics. v1 analysis tabs remain centered-lens diagnostics.
- Use shared chart helpers in `src/components/display/analysis/charts/` before adding bespoke SVG axes or tick math.
- Use `ThemedMarkdown` for article and lens-description markdown so link handling, math, tables, and special images stay
  consistent.
- Add new analysis drawer tabs by updating `analysisTabs.ts`, adding tab content under
  `src/components/display/analysis/`, and wiring it in `AnalysisDrawerContent.tsx`.
- When adding route patterns, update the route manifest and metadata/prerender pipeline together.
- When changing theme colors, update all four theme variants.

## Related Docs

- [`adding_a_lens.md`](adding_a_lens.md) - lens data workflow and validation troubleshooting.
- [`lens-mount-format-backfill.md`](lens-mount-format-backfill.md) - mount/format metadata backfill status.
- [`glass-catalog-buildout.md`](glass-catalog-buildout.md) - glass catalog expansion and sourcing playbook.
- [`glass-relabel-followup.md`](glass-relabel-followup.md) - per-lens glass mismatch relabel queue.
- [`proprietary-glass-backfill.md`](proprietary-glass-backfill.md) - patent line-index backfill workflow.
- [`generated/`](generated/) - generated glass and mirror fixture reports; regenerate glass reports with
  `npm run generate:glass-reports` and hidden mirror fixture reports with `npm run generate:mirror-reports`.
- [`adding_an_article.md`](adding_an_article.md) - content authoring, frontmatter, TOC, and series behavior.
- [`workflow.md`](workflow.md) - checks, CI, deployment, and commit flow.
- [`../MIRROR_OPTICS_ACCURACY_PLAN.md`](../MIRROR_OPTICS_ACCURACY_PLAN.md) - completed folded off-axis accuracy plan and verification status.
- [`../MIRROR_LENS_FUTURE_ENHANCEMENTS.md`](../MIRROR_LENS_FUTURE_ENHANCEMENTS.md) - root backlog for future mirror-lens hardening.
- [`architecture/program-flow.md`](architecture/program-flow.md) - high-level Mermaid program flow.
- [`architecture/public-functions.md`](architecture/public-functions.md) - stable project-internal functions, types, and import boundaries.
- [`code_conventions.md`](code_conventions.md) - TypeScript, naming, formatting, and architecture constraints.
- [`commenting_guide.md`](commenting_guide.md) - project commenting standards.
- [`gotchas.md`](gotchas.md) - non-obvious constraints and failure modes.

Files under [`records/`](records/) are historical branch/task snapshots. Use them for context archaeology, not as the
current source of architecture or workflow truth.
