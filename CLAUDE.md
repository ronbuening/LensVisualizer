# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, aspheric deviation analysis, lens comparison, and multiple themes. Deployed to GitHub Pages.

## Tech Stack

- **React 18** (functional components, hooks) + **TypeScript** (strict mode)
- **React Router 7** — client-side routing with page-level components
- **Vite 6** (dev server + build + SSR pre-rendering)
- **Vitest** + **@testing-library/react** (unit and component testing)
- **SVG rendering** — all visuals are inline SVG, no canvas
- **Inline styles** — no CSS files or UI libraries
- **react-helmet-async** — SEO meta tags per page
- **react-markdown + remark-gfm + remark-math + rehype-katex** — markdown rendering with GFM tables/footnotes and KaTeX math (`$inline$`, `$$display$$`); KaTeX CSS imported once in `src/main.tsx`, available to all articles and lens analysis panels

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
src/lens-data/            — Lens prescription data (auto-registered *.data.ts, organized by maker folder at build)
src/content/              — Static markdown content (primers, about pages)
scripts/                  — Build utilities (prerender, sitemap, metadata, SEO audit)
public/                   — Static assets (CNAME, robots.txt)
__tests__/                — Vitest unit tests and script regressions (.ts/.tsx)
agent_docs/               — Detailed architecture and task guides
```

See `agent_docs/architecture.md` for the complete module-by-module breakdown.

## Commands

```bash
npm install           # Install dependencies
npm run dev           # Start dev server (http://localhost:5173)
npm run build         # Production build → dist/ (includes prerender + sitemap)
npm run generate:metadata # Refresh build metadata (also organizes root-level lens files)
npm run organize:lens-data # Move stray root-level lens files into maker folders
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
- **`agent_docs/adding_an_article.md`** — Article and series authoring, frontmatter schema, TOC opt-in, link behavior
- **`agent_docs/workflow.md`** — Commit style, pre-commit checks, and deployment pipeline
- **`agent_docs/changelog.md`** — When and how to add entries to the homepage changelog
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
- **Unified route pipeline** — `organize-lens-data.mjs` moves stray root-level lens files into maker folders before `generate-build-metadata.mjs` refreshes routes and freshness data; `prerender.mjs` validates routes against the React Router manifest; `generate-sitemap.mjs` and `seo-audit.mjs` consume the same route list from `build-metadata.json`
- **Articles and series** — markdown files in `src/content/**/*.md` are auto-discovered; frontmatter (`slug`, `title`, `summary`, `tag`, `series`, `seriesOrder`, `toc`) flows through `generate-build-metadata.mjs` into `ARTICLES`, `HOMEPAGE_ARTICLES`, `ARTICLE_SERIES`, and `ARTICLE_CONTENT` in `src/utils/homepageContent.ts`; series members share a `series` id and collapse to the landing page (`seriesOrder: 0`) in the archive, homepage list, breadcrumb, and back-link
- **Aberration analysis** — slider-state-dependent metrics (SA, distortion, vignetting) live in `src/optics/aberrationAnalysis.ts` and `src/optics/distortionAnalysis.ts` as pure helpers, memoized from current state in the Analysis Drawer tabs; they must NOT go in `buildLens()` which is build-time only. SA uses symmetric +/- ray pairing (reject both if either clips) and a 22-zone pupil profile. Distortion uses iteratively solved chief rays (`solveChiefRayLaunchHeight` in `optics.ts`, 30-iteration bisection, 1° small-angle cutoff) to correct for pupil aberration at wide field angles, with a 17-sample pre-computed correction table for the 2D grid. Vignetting also uses the solved chief ray for accurate pupil-sweep centering at each field angle, with adaptive ~3° field spacing and 192-ray pupil sweeps.
- **Pupil aberration analysis** — `src/optics/pupilAberration.ts` provides: `computePupilAberrationProfile` (EP z-shift per field angle via solved/paraxial chief-ray launch height ratio), `computeExitPupilAberrationProfile` (XP z per field angle from full-system chief-ray back-projection: `xpZ = −y'_last / u'_last`), and `computeBothPupilAberrationProfiles` (combined, shares the per-angle bisection call — use this in the UI). All accept an optional pre-computed `FieldGeometryState`. The PUPILS Analysis Drawer tab (`PupilAberrationTab.tsx` + `PupilAberrationChart.tsx`) wires these into a two-curve SVG chart (EP shift solid, XP shift dashed) reactive to `focusT` and `zoomT`.
- **Ray trace density and chromatic visibility** — `rayDensity` lives in the rays slice and localStorage preferences, not the URL. `normal` preserves each lens' authored `rayFractions` / `offAxisFractions` exactly; `dense` and `diagnostic` derive denser symmetric viewport samples via `src/optics/raySampling.ts`. Chromatic mode replaces monochrome ray layers: ON-AXIS gates axial chromatic rays, OFF-AXIS gates off-axis chromatic rays, and off-axis chromatic tracing shares `computeOffAxisTraceGeometry()` with the monochrome off-axis fan.
- **Aspheric deviation inspector** — `src/optics/asphericComparison.ts` provides pure helpers: `computeBestFitSphereR` (golden-section least-squares best-fit radius), `computeAsphericDeparture` (Δsag at any radius), `computeDepartureProfile` (sampled profile), and `peakAbsDeparture`/`rmsDeparture` metrics. `AsphericComparisonOverlay.tsx` renders a modal view of the selected element with aspheric (solid) and spherical (dashed) surface profiles overlaid, an auto-scaled exaggeration slider, zoom/pan, and click-to-measure Δsag. Opened via the "Compare to sphere →" link in `ElementInspector` (only shown for aspheric elements); overlay state managed in `useOverlayState.ts` — the only diagram overlay still local. Abbe/glass-map, LCA, Petzval, bokeh, and analysis drawer all live in the URL-shareable panels slice.
- **Shareable view URLs** — `src/utils/lensViewUrlState.ts` is the single source of truth for parsing/building the shareable query string. v1-gated keys (`v=1`, `el`, `a_el`, `b_el`, `gm`, `lca`, `ptz`, `bo`, `ad`, `tab`) cover element selection plus all viewer overlays; stable slider keys (`focus`, `aperture`, `zoom`, `shift`, `tilt`) are version-independent. The exported `VIEW_STATE_FIELDS` table drives both URL hydration and the `APPLY_URL_VIEW_STATE` reducer branch — adding a new shareable field is one table edit plus matching `URLState`/`PanelsSlice` entries. All URL writes flow through one 100 ms-debounced callback in `useURLSync.ts`; `popstate` hydration dispatches `APPLY_URL_VIEW_STATE`. See `agent_docs/architecture/state-and-utilities.md` for the full surface.
- **Perspective-control movement** — `src/optics/lensMovement.ts` owns the opt-in 2D shift/tilt layer. Only lenses with `perspectiveControl` expose SHIFT/TILT controls; zero movement must preserve existing geometry/ray output. The IMG plane remains fixed, rendered lens/ray coordinates move, and analysis drawer tabs remain centered-lens diagnostics in v1.
- **SD validation/rendering** — uses slope-based rim check (actual aspherical slope via `sagSlopeRaw`, threshold ~64.2°) instead of the old spherical `sd/|R|` proxy. Element front/rear SD ratio limit is 3.0 (sanity check). Cross-gap validation checks the two boundary surfaces that face each other and requires combined sag intrusion ≤ `gapSagFrac × gap`; the default is 0.90, leaving visible clearance instead of accepting mathematical rim contact. Rendering shares the same rim and boundary-surface gap policy via `computeElementRenderDiagnostics()`; production tests fail if hidden render trim exceeds 0.25 mm.
- **Analysis Drawer** — sliding panel that overlays the SVG viewport with tabbed analysis views (aberrations, coma, distortion, breathing, vignetting, pupils). Opened via the "ABERRATIONS & DISTORTIONS" button in `DiagramViewport.tsx`; state managed via `analysisDrawerOpen` / `analysisDrawerTab` in the panels slice. Desktop: vertical tabs on the left; mobile: horizontal tabs on top. New analysis tabs require: (1) extending `ANALYSIS_TABS` in `src/components/layout/lensDiagram/analysisTabs.ts`, (2) creating a tab content component in `src/components/display/`, (3) adding a conditional render in `AnalysisDrawerContent.tsx`
- **Zoom/pan mode** — `useViewBoxZoom` hook manages SVG viewBox state for infinite-resolution zoom and pan; activated via toggle button in `DiagramViewport.tsx`, which hides all other controls and shows persistent Reset/Cancel buttons. Keyboard shortcuts: `+/-` zoom, arrows pan, `Escape` cancel, `0` reset. State tracked via `zoomPanActive` in the panels slice
- See `agent_docs/architecture.md` for full component relationships and data flow

## Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/YourLens.data.ts`
2. Fill in the lens data following the template's field documentation
3. Only real perspective-control lenses should declare `perspectiveControl`; ordinary lenses omit it
4. Optionally add `src/lens-data/YourLens.analysis.md` beside the data file for the description panel
5. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation pass
6. Run `npm run generate:metadata` or `npm run build` to move the lens into its maker folder and rewrite the `LensDataInput` import for the nested path

See `agent_docs/adding_a_lens.md` for details on defaults merging, naming conventions, and SD troubleshooting.

## Adding a New Article or Series

1. Create `src/content/YourArticle.md` or a nested file under `src/content/` with YAML frontmatter — `slug` and `title` are required; `summary`, `tag`, `series`, `seriesOrder`, `toc` are optional
2. Series: share a `series` id across members and mark the landing page with `seriesOrder: 0`; the archive, homepage, breadcrumb, and back-link all collapse through the landing page automatically
3. Long articles: set `toc: true` to render the floating table of contents
4. Run the pre-commit checklist, then `npm run build` to confirm the new route appears in `build-metadata.json` and `dist/sitemap.xml`

See `agent_docs/adding_an_article.md` for the full frontmatter schema, series semantics, and link behavior.

## Testing

Run `npm run test`. Tests in `__tests__/` cover the optics engine, lens building, validation, catalog loading, utils, component smoke tests (via `@testing-library/react`), and script regressions for the build helpers. Test files are TypeScript (`.ts`/`.tsx`) and are type-checked by tsc alongside `src/`; use `as unknown as RuntimeLens` for intentionally partial mock objects. Run `npm run test:coverage` for a v8 coverage report.

## Code Conventions

See `agent_docs/code_conventions.md` for full standards. Critical non-defaults: **double quotes**, **120-char** print width, **`import type`** for type-only imports, **`_`-prefixed unused params**, inline styles only (no CSS files).

## Pre-Commit Checklist

Before every commit and PR — prefer small, staged commits pushed frequently (see `agent_docs/workflow.md`):

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

## Gotchas

See `agent_docs/gotchas.md` for common pitfalls. Key items: update all 4 themes when changing colors; lens data globs require `*.data.ts` naming; `satisfies LensDataInput` enables compile-time validation; root-level draft lenses use `../types/optics.js` until the organizer rewrites them during `generate:metadata`/`build`; adding new route patterns to `routeManifest.tsx` requires updating `generate-build-metadata.mjs` route expansion (build fails if you forget); perspective-control movement is opt-in and v1 analysis tabs remain centered-lens diagnostics.

## Compaction Instructions

When compacting context, always preserve:
- The current task description and acceptance criteria
- The list of files modified in this session
- Any active build/test commands and their last results
- The Agent Docs index above (so docs can be re-read as needed)
