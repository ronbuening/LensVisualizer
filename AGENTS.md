# CLAUDE.md - LensVisualizer

## Project Overview

LensVisualizer (public site: Surface & Stop) is an interactive React + TypeScript optical lens cross-section visualizer.
It renders patent-derived camera lens sections as inline SVG, traces rays in real time, and exposes analysis tools for
aberrations, pupils, distortion, vignetting, bokeh, chromatic behavior, glass, lens comparison, perspective-control
movement, folded mirror paths, annular apertures, arbitrary image planes, and projection-aware fisheye tracing. Mount
pages render programmatic camera/lens mount interface diagrams. The site is prerendered for SEO and deployed to
Cloudflare Pages.

## Tech Stack

- React 19 functional components + TypeScript strict mode; React Router 8, Vite 8, Vitest, Testing Library
- Inline SVG rendering only (no canvas for lens diagrams); inline styles only (no CSS files or UI libraries)
- `react-helmet-async` for SEO metadata; `react-markdown` with remark/rehype plugins for articles and lens notes

## Project Map

Top-level layout; the full tree with `src/components/*` subfolders is in `agent_docs/architecture.md`.

```text
src/main.tsx          - React entry point (src/entry-server.tsx is the SSR/prerender entry)
src/router.tsx        - Browser router built from src/routes/routeManifest.tsx
src/routes/           - Shared route manifest
src/generated/        - Build-generated metadata and maker-prefix JSON (gitignored)
src/pages/            - Route-level page components (lensIndex/ holds the lens library module)
src/components/       - React UI: controls, diagram layers, display/analysis, layout, hooks, markdown, mount, search
src/comparison/       - Comparison mode feature module
src/optics/           - Pure optical engine and analysis helpers (math, trace, field, prescription, state, analysis, mount)
src/types/            - Shared TypeScript types
src/utils/            - State, URL sync, themes, catalog, SEO, metadata utilities
src/lens-data/        - Auto-registered *.data.ts prescriptions, *.analysis.md notes, *.audit.md audit logs
src/mounts/           - Mount diagram *.mount.ts specs, schema, and authoring guide
src/content/          - Auto-registered markdown articles and static content
src/benchmarks/       - Optics/render benchmark harness
scripts/              - Metadata, folder-readme, prerender, sitemap, SEO, and lens-data build helpers
__tests__/            - Vitest unit/component/script tests
agent_docs/           - Focused agent docs; start at agent_docs/README.md
```

## Commands

```bash
npm install
npm run dev                     # Generate metadata, then start Vite on http://localhost:5173
npm run build                   # Organize lens data, generate metadata + readmes, build, prerender, sitemap, RSS feeds
npm run generate:metadata       # Organize lens data, refresh src/generated/, rewrite src/**/readme.md
npm run test                    # Vitest; pretest regenerates src/generated/
npm run typecheck
npm run lint                    # npm run lint:fix to auto-fix
npm run format:check            # npm run format to fix
npm run generate:glass-reports  # Refresh agent_docs/generated/ glass reports after glass-data changes
npm run generate:mount-svgs     # Refresh mount SVG specifications after src/mounts/ changes
```

Full script inventory (audits, benchmarks, feeds, branding, SEO): `agent_docs/workflow.md` § Commands.

## Agent Docs

Read the smallest relevant doc before changing an area. `agent_docs/README.md` is the tagged index
(`[policy]` `[recipe]` `[architecture]` `[queue]` `[record]` `[generated]`); route by task:

- Architecture and subsystem boundaries: `agent_docs/architecture.md`, then the matching `agent_docs/architecture/*.md`
- Change recipes (lens, article, route, analysis tab, URL state, UI control, theme token, tests): `agent_docs/adding_*.md`,
  `agent_docs/testing_recipes.md`, `agent_docs/theme_tokens.md`
- Lens data formats: `src/lens-data/LENS_DATA_SPEC.md`, `src/lens-data/LENS_ANALYSIS_SPEC.md`,
  `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md`, `src/lens-data/TEMPLATE.data.ts.template`; mounts: `src/mounts/MOUNT_SVG_SPEC.md`
- Patent and semi-diameter audits: `agent_docs/lens-patent-audit.md`, `agent_docs/patent-figure-sd-audit-procedure.md`;
  open queues: `agent_docs/sd-audit-queue.md`, `agent_docs/lens-mount-format-backfill.md`, glass queues via the index
- Planned features: `FEATURE_ADDITION_PLAN.md`; open efficiency items: `EFFICIENCY_IMPROVEMENT_PLAN.md`; trace-model status
  and deferred work: `TRACE_MODEL_IMPROVEMENT_PLAN.md`
- Standing "do not rebuild / do not fix" decisions: `agent_docs/decisions.md`; failure modes: `agent_docs/gotchas.md`
- Conventions and process: `agent_docs/code_conventions.md`, `agent_docs/commenting_guide.md`, `agent_docs/workflow.md`,
  `agent_docs/changelog.md`, `agent_docs/article_formatting.md`; what to document where: `agent_docs/documentation-policy.md`

## Core Working Rules

- Keep optics helpers pure and pass the runtime lens object `L` explicitly; avoid module-level optical state.
- Exact surface tracing is the only trace path. Do not add per-lens trace rollout state or thread `mode` / `traceMode`
  options through new helpers.
- Fisheye and ultra-wide field launch go through `src/optics/projection.ts` and `solveChiefRay`; do not inline
  `Math.tan(field)` or bypass the bounding-sphere vector path.
- Mirror/folded systems opt into `LensData.opticalPath` and per-surface `interaction` / `innerSd`. Keep ordinary
  sequential defaults for refractive lenses, use explicit `surfaceOrder` when hit order is known, and route folded
  stop/chief-ray solves through the generalized tracer instead of sequential `stopAt` partial traces.
- Folded-system complex analysis stays guarded until the specific path is mirror-safe: the drawer guards coma,
  distortion, vignetting, and pupils, and field curvature/astigmatism stays section-guarded inside the Aberrations tab.
  Details in `agent_docs/architecture/optics-engine.md`.
- Keep slider-state-dependent analysis out of `buildLens()`; analysis tabs compute from current focus/zoom/aperture state.
- Use existing shared utilities/components before adding new abstractions; render article and lens-description markdown
  with `src/components/markdown/ThemedMarkdown.tsx`.
- Add analysis drawer tabs by following `agent_docs/adding_an_analysis_tab.md`; add shareable view state by following
  `agent_docs/adding_url_state.md`.
- Keep perspective-control movement in `src/optics/lensMovement.ts` unless explicitly upgrading full moved-optics analysis.
- Update all four theme variants when changing theme color tokens (`agent_docs/theme_tokens.md`).
- Lens data and content are auto-discovered; avoid manual catalog/route edits unless changing the pipeline itself.
- Do not commit per-lens or per-batch test files; the corpus sweeps already validate every catalog lens. Only a shared
  engine, UI, or data-contract regression justifies a new test, added as the smallest synthetic case to the matching
  subsystem suite (`agent_docs/architecture/testing.md`).
- Lens mount and image-format metadata use canonical ids from `src/utils/catalog/lensTaxonomy.ts`; do not free-type labels.
- Mount diagrams: author `src/mounts/*.mount.ts` with `satisfies MountSpecInput`, register in `src/mounts/index.ts`, keep
  `src/types/mount.ts` and `src/mounts/lens-mount.schema.json` in sync, then run `npm run generate:mount-svgs`.
- Documentation follows `agent_docs/documentation-policy.md`: no per-branch records, delete queue rows when done, one
  rule in one place, and keep this file under 200 lines and byte-identical to `AGENTS.md`.

## Adding Content

- Lens: `agent_docs/adding_a_lens.md` (template, `satisfies LensDataInput`, optional `*.analysis.md`, canonical mount/format ids).
- Mount diagram: `src/mounts/MOUNT_SVG_SPEC.md`, then `npm run generate:mount-svgs`.
- Article: `agent_docs/adding_an_article.md` (`slug` and `title` frontmatter; `series`/`seriesOrder`; `toc: true` for long pieces).

## Verification

Before commits or PRs:

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

`typecheck` and `test` regenerate `src/generated/` through their `pre*` hooks, so they work on a fresh clone. Run
`npm run generate:metadata` first only when running lint alone or when stray root-level lens files need organizing; it
also rewrites `src/**/readme.md`, so commit those diffs with the change that caused them. Run `npm run build` for route,
metadata, lens-data organization, SEO, article, or sitemap changes. Production deploys through Cloudflare Pages with a
GitHub Pages mirror; see `agent_docs/workflow.md`.

## Compaction Instructions

When compacting context, preserve:

- The current task description and acceptance criteria
- The list of files modified in this session
- Active build/test commands and their last results
- The `agent_docs/README.md` routing so focused docs can be re-read as needed
