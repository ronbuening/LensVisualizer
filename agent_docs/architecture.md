# Architecture - LensVisualizer

This file is the architecture index. Read only the focused document that matches the work you are doing, then follow
links outward if the change crosses subsystem boundaries. Cross-cutting rules live in `CLAUDE.md` (Core Working Rules);
the tagged doc index lives in `README.md`.

## Read This First

- For route, page, SSR, SEO, article, or metadata work, read
  [`architecture/routing-and-content.md`](architecture/routing-and-content.md).
- For LensViewer orchestration, panel layout, diagram composition, slider plumbing, zoom/pan, and error boundaries, read
  [`architecture/viewer-and-diagram.md`](architecture/viewer-and-diagram.md).
- For reusable UI, controls, markdown rendering, analysis drawer tabs, charts, and display components, read
  [`architecture/ui-components.md`](architecture/ui-components.md).
- For optical math, ray tracing, aberrations, vignetting, distortion, bokeh, validation, diffractive surfaces, and
  diagram geometry, read [`architecture/optics-engine.md`](architecture/optics-engine.md).
- For camera/lens mount interface diagrams (mount data, the polar geometry/renderer, the `/mounts` pages, the maker
  mounts sidebar, and the SVG generator), read [`architecture/mount-diagrams.md`](architecture/mount-diagrams.md).
- For reducer state, persisted preferences, URL sync, contexts, theme tokens, and shared utility modules, read
  [`architecture/state-and-utilities.md`](architecture/state-and-utilities.md).
- For comparison mode, shared sliders, normalized scale, and compare-route synchronization, read
  [`architecture/comparison.md`](architecture/comparison.md).
- For test layout, coverage expectations, shared test helpers, and the per-lens test retention policy, read
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
- `src/mounts/` owns mount-diagram data (`*.mount.ts` specs + `lens-mount.schema.json`), rendered by the pure
  `src/optics/mount/` engine and shown by `src/components/mount/`; see
  [`architecture/mount-diagrams.md`](architecture/mount-diagrams.md).
- `scripts/` owns prerender, sitemap, metadata, lens-data organization, and SEO audit build helpers.

## Project Map

Full directory tree; `__tests__/docDrift.test.ts` fails when a `src/` or `src/components/` directory is missing here.
The generated `src/**/readme.md` files carry per-folder import graphs and file inventories.

```text
src/main.tsx              - React entry point
src/router.tsx            - Browser router from src/routes/routeManifest.tsx
src/entry-server.tsx      - SSR entry point for prerendering
src/routes/               - Shared route manifest
src/generated/            - Build-generated metadata and maker-prefix JSON (gitignored)
src/pages/                - Route-level page components
src/pages/lensIndex/      - Lens library filtering/results module
src/components/           - React UI components and hooks
  content/                - Article/archive/changelog cards, lists, and TOC
  controls/               - Sliders, toggles, shared controls
  diagram/                - SVG diagram rendering layers
  display/                - Inspectors, charts, analysis tabs, overlays
    analysis/             - Analysis drawer tabs, charts, and section components
    overlays/             - Diagram/modal overlays such as bokeh and aspheric compare
  errors/                 - Error boundaries and shared error display
  homepage/               - Home page sections
  hooks/                  - Viewer computation and interaction hooks
  layout/                 - LensViewer, diagram panels, page chrome
    lensDiagram/          - Per-panel diagram viewport, drawer, and control wiring
    lensViewer/           - Viewer-level chrome, content layout, and header helpers
  markdown/               - Shared markdown renderer
  mount/                  - Mount interface diagram components (MountDiagram, panel)
  relationshipMap/        - patent relationship map (radial layout engine + SVG renderer + picker)
  search/                 - Catalog search box and results list
src/comparison/           - Comparison mode feature module
src/optics/               - Pure optical engine and analysis helpers
  math/ trace/ field/     - Vector math, exact tracing, projection-aware field launch
  prescription/ state/    - Lens normalization and prepared optical state
  analysis/ aberration/   - State-aware analysis adapters and aberration helpers
  mount/                  - Mount diagram geometry + deterministic SVG renderer
src/types/                - Shared TypeScript types
src/utils/                - State, URL sync, themes, catalog, SEO, metadata utilities
src/lens-data/            - Auto-registered `*.data.ts` prescriptions, `*.analysis.md` notes, `*.audit.md` logs
src/mounts/               - Mount diagram `*.mount.ts` specs, barrel, schema, and authoring guide
src/content/              - Auto-registered markdown articles and static content
src/benchmarks/           - Optics/render benchmark harness (npm run benchmark:optics-rendering)
scripts/                  - Metadata, folder-readme, prerender, sitemap, SEO, and lens-data build helpers
__tests__/                - Vitest unit/component/script tests
agent_docs/               - Focused architecture, recipe, policy, queue, and generated-report docs
```

## Historical Records

- [`records/mirror-lens-tracing-and-authoring.md`](records/mirror-lens-tracing-and-authoring.md) - mirror/folded
  implementation notes from the original rollout; `architecture/optics-engine.md` is the current source of truth.
