# Agent Docs

Focused docs for agents working in LensVisualizer. Read the smallest relevant doc before changing an area, then follow
links outward only when the task crosses boundaries. Every living doc is listed here once with a tag;
`documentation-policy.md` says what goes where and when it is deleted, and `__tests__/docDrift.test.ts` enforces the
index.

Tags: `[policy]` how we work · `[recipe]` steps for one change type · `[architecture]` how the code works now ·
`[queue]` open work only · `[record]` linked historical or in-progress notes · `[generated]` regenerable reports.

## Policy and conventions

- [policy] [`documentation-policy.md`](documentation-policy.md) — where things go, what is not documented, retention triggers, CLAUDE.md rules
- [policy] [`decisions.md`](decisions.md) — verified-healthy, rejected, and excluded items; check before "fixing" or rebuilding
- [policy] [`workflow.md`](workflow.md) — commit style, the full npm script inventory, CI, deployment
- [policy] [`code_conventions.md`](code_conventions.md) — naming, TypeScript, the `*2` compat facade, formatting, architecture constraints
- [policy] [`commenting_guide.md`](commenting_guide.md) — comment the why, not the what
- [policy] [`changelog.md`](changelog.md) — `/updates` entry rules for `src/utils/content/changelogData.ts`
- [policy] [`article_formatting.md`](article_formatting.md) — markdown polish expectations for articles
- [policy] [`gotchas.md`](gotchas.md) — non-obvious constraints and failure modes, with pointers

## Architecture

- [architecture] [`architecture.md`](architecture.md) — subsystem index, system shape, full project map
- [architecture] [`architecture/program-flow.md`](architecture/program-flow.md) — route shell and diagram computation flow (Mermaid)
- [architecture] [`architecture/public-functions.md`](architecture/public-functions.md) — import boundaries and which public barrel to use
- [architecture] [`architecture/routing-and-content.md`](architecture/routing-and-content.md) — routes, SSR, SEO, articles, generated metadata
- [architecture] [`architecture/viewer-and-diagram.md`](architecture/viewer-and-diagram.md) — LensViewer, diagram panels, zoom/pan, error tiers
- [architecture] [`architecture/ui-components.md`](architecture/ui-components.md) — controls, display components, markdown renderer, analysis tabs
- [architecture] [`architecture/optics-engine.md`](architecture/optics-engine.md) — tracing, launch conventions, folded paths, aberrations, diffractive surfaces, validation
- [architecture] [`architecture/mount-diagrams.md`](architecture/mount-diagrams.md) — mount data, polar geometry renderer, `/mounts` pages, SVG generator
- [architecture] [`architecture/state-and-utilities.md`](architecture/state-and-utilities.md) — reducer state, preferences, URL sync, themes, utilities
- [architecture] [`architecture/comparison.md`](architecture/comparison.md) — comparison mode, shared sliders, compare URLs
- [architecture] [`architecture/testing.md`](architecture/testing.md) — test layout, regression anchors, and the per-lens test retention policy

## Recipes

- [recipe] [`adding_a_lens.md`](adding_a_lens.md) — lens data workflow and validation troubleshooting; field rules live in `src/lens-data/LENS_DATA_SPEC.md`
- [recipe] [`lens-data-integration-handoff.md`](lens-data-integration-handoff.md) — copy-ready AI handoff for constructing data/analysis pairs
- [recipe] [`lens-patent-audit.md`](lens-patent-audit.md) — four-phase patent audit and the per-lens `*.audit.md` log format
- [recipe] [`patent-figure-sd-audit-procedure.md`](patent-figure-sd-audit-procedure.md) — semi-diameter vs patent-figure runbook
- [recipe] [`glass-catalog-buildout.md`](glass-catalog-buildout.md) — glass catalog playbook and how to add a Sellmeier entry safely
- [recipe] [`adding_an_article.md`](adding_an_article.md) — article and series frontmatter, TOC, links, verification
- [recipe] [`adding_a_route.md`](adding_a_route.md) — new page/route with prerender and sitemap wiring
- [recipe] [`adding_an_analysis_tab.md`](adding_an_analysis_tab.md) — the four registration points for a new analysis drawer tab
- [recipe] [`adding_url_state.md`](adding_url_state.md) — the three coordinated edits for a URL-shareable view-state field
- [recipe] [`adding_ui_controls.md`](adding_ui_controls.md) — sliders and toggles via shared controls and dispatch adapters
- [recipe] [`theme_tokens.md`](theme_tokens.md) — adding or changing theme color tokens across all four variants
- [recipe] [`testing_recipes.md`](testing_recipes.md) — copy-paste test patterns and the shared `__tests__/testUtils.tsx` helpers

## Queues (open work only)

- [queue] [`../FEATURE_ADDITION_PLAN.md`](../FEATURE_ADDITION_PLAN.md) — planned features; owns the per-item template and the "already shipped" list
- [queue] [`../EFFICIENCY_IMPROVEMENT_PLAN.md`](../EFFICIENCY_IMPROVEMENT_PLAN.md) — open cleanup and performance items with verification gates
- [queue] [`../TRACE_MODEL_IMPROVEMENT_PLAN.md`](../TRACE_MODEL_IMPROVEMENT_PLAN.md) — trace-model status, deferred items, suggested next work
- [queue] [`sd-audit-queue.md`](sd-audit-queue.md) — semi-diameter floor failures, shape deviations, source blockers, the in-progress diagram sweep
- [queue] [`lens-mount-format-backfill.md`](lens-mount-format-backfill.md) — mount/format metadata coverage and review queue
- [queue] [`glass-relabel-followup.md`](glass-relabel-followup.md) — catalog-mismatch relabel status and closed families
- [queue] [`proprietary-glass-backfill.md`](proprietary-glass-backfill.md) — patent line-index backfill for proprietary glasses
- [queue] [`seo-optimization-plan.md`](seo-optimization-plan.md) — SEO rollout and Search Console triage, blocked on user-supplied inputs

## Records

Kept only while a living doc or a lens `*.audit.md` sidecar links them; see [`records/README.md`](records/README.md).

- [record] [`records/README.md`](records/README.md) — admission rule and where deleted records went
- [record] [`records/lens-shape-audit-first-200-2026-09-08.md`](records/lens-shape-audit-first-200-2026-09-08.md) — in-progress diagram sweep, paused at lens 40 of 200, with resume handoff
- [record] [`records/patent-figure-sd-audit-2026-07.md`](records/patent-figure-sd-audit-2026-07.md) — 2026-07 semi-diameter audit report of the odd-asphere lenses
- [record] [`records/konica-ar-september5-audit.md`](records/konica-ar-september5-audit.md) — Konica AR batch audit linked from its lens audit logs
- [record] [`records/relationship-map-2026-07-22.md`](records/relationship-map-2026-07-22.md) — patent relationship map (F25) outcome record
- [record] [`records/mirror-lens-tracing-and-authoring.md`](records/mirror-lens-tracing-and-authoring.md) — historical mirror/folded implementation notes
- [record] [`records/optics-2-stage-05-performance.md`](records/optics-2-stage-05-performance.md) — trace performance stage record
- [record] [`records/react-types-downgrade-2026-07-07.md`](records/react-types-downgrade-2026-07-07.md) — resolved React 18-era types mismatch
- [record] [`records/analysis-options-roadmap-archive.md`](records/analysis-options-roadmap-archive.md) — archived analysis-options roadmap, absorbed into the feature plan
- [record] [`records/mirror-lens-future-enhancements-archive.md`](records/mirror-lens-future-enhancements-archive.md) — archived mirror/folded backlog, absorbed into the feature plan

## Generated reports and benchmarks

Regenerate instead of hand-editing. Reports are deterministic, so `git diff` after regeneration shows only real data
changes. Judge glass coverage by the share of surfaces with trusted chromatic data, not by absolute missing counts.
`npm run generate:glass-reports` rewrites all glass reports, `npm run generate:mirror-reports` the mirror fixtures, and
`npm run generate:mount-svgs` the mount SVG specification plus per-view SVGs. Individual reports:

- [generated] [`generated/unresolved-glass.generated.md`](generated/unresolved-glass.generated.md) — `npm test -- unresolvedGlassScan`
- [generated] [`generated/catalog-mismatches.generated.md`](generated/catalog-mismatches.generated.md) — `npm test -- catalogMismatchScan`
- [generated] [`generated/glass-relabel-candidates.generated.md`](generated/glass-relabel-candidates.generated.md) — `npm test -- glassRelabelCandidatesScan`
- [generated] [`generated/glass-relabel-by-lens.generated.md`](generated/glass-relabel-by-lens.generated.md) — `npm test -- glassRelabelByLensScan`
- [generated] [`generated/glass-ambiguities.generated.md`](generated/glass-ambiguities.generated.md) — `npm test -- glassAmbiguityScan`; one rollup row per distinct ambiguity, per-candidate residuals come from `explainCompatibleGlassResolution`
- [generated] [`generated/six-digit-glass-codes.generated.md`](generated/six-digit-glass-codes.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [generated] [`generated/six-digit-glass-codes-missing-sellmeier.generated.md`](generated/six-digit-glass-codes-missing-sellmeier.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [generated] [`generated/six-digit-glass-codes-missing-sellmeier-reviewed.md`](generated/six-digit-glass-codes-missing-sellmeier-reviewed.md) — hand-written review sidecar read by two scans; preserve it when regenerating
- [generated] [`generated/sellmeier-coverage.generated.md`](generated/sellmeier-coverage.generated.md) — `npm test -- sellmeierCoverageScan`
- [generated] [`generated/glass-coverage-opportunities.generated.md`](generated/glass-coverage-opportunities.generated.md) — `npm test -- glassCoverageOpportunitiesScan`
- [generated] [`generated/mirror-fixtures.generated.md`](generated/mirror-fixtures.generated.md) — `npm test -- mirrorFixtureAuthoringReport`
- [generated] [`generated/lens-mount-svg-specifications.md`](generated/lens-mount-svg-specifications.md) — `npm test -- mountSvgSpecificationsReport`; figure counts and content hashes, with full SVG markup in [`generated/mounts/`](generated/mounts/) and diffable geometry in `src/mounts/`
- [generated] [`benchmarks/README.md`](benchmarks/README.md) — on-demand `npm run benchmark:optics-rendering`; one JSON per run in [`benchmarks/runs/`](benchmarks/runs/), latest report in [`benchmarks/benchmark-report.md`](benchmarks/benchmark-report.md)

The six-digit and glass-coverage-opportunities scans embed match statuses against the untracked local `patents/` PDF
inventory and skip their rewrite when it is empty (fresh worktrees, CI); regenerate those three report files only from a
checkout where `patents/` is populated.
