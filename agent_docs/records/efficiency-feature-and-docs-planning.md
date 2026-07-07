# Efficiency/Feature Planning + Agent-Doc Recipes

## Summary

- Audited the codebase (redundancy, performance, feature opportunities, doc gaps) and turned the
  verified findings into two root-level plan docs plus six recipe docs for lower-capability agents.

## Changes

- Added `EFFICIENCY_IMPROVEMENT_PLAN.md` — E-series (redundancy) and P-series (performance) tasks,
  one branch per task, each with steps, risk, and verification gates.
- Added `FEATURE_ADDITION_PLAN.md` — features buildable from existing data/engine, tiered, with
  recipes and a "deferred / already shipped" list (analysis-tab URL sharing already exists).
- Added recipe docs: `agent_docs/adding_an_analysis_tab.md`, `adding_url_state.md`,
  `adding_a_route.md`, `adding_ui_controls.md`, `testing_recipes.md`, `theme_tokens.md`.
- Updated `CLAUDE.md` doc index: added the new docs; removed four stale references to files deleted
  in commit 9a42194f (`PERFORMANCE.md`, `MIRROR_OPTICS_ACCURACY_PLAN.md`,
  `CHROMATIC_DISPERSION_NOTES.md`, `SEO_OFFSITE_ACTIONS.md`).
- Updated `agent_docs/README.md` layout section with the task-recipe list and new plan docs.

## Key verified facts baked into the docs

- Analysis tabs register in four typed places (`ANALYSIS_TAB_IDS` in `src/types/state.ts`,
  `ANALYSIS_TABS`, display component, `ANALYSIS_TAB_RENDERERS`).
- `entry-server.tsx` uses synchronous `renderToString` — route-level `React.lazy` would break
  prerendering (noted in the route recipe and efficiency plan P5).
- The four themes are dark/light × default/high-contrast (`darkHC`, `lightHC`), not holiday
  variants; holiday overrides are a separate layer.
- No `computeChiefRayIncidenceCurve` helper exists — the sensor-compatibility feature (F6)
  specifies creating it from `solveChiefRay`.

## Verification

- Docs-only change; `npm run format:check` run on completion.

## Second pass (same day)

- Expanded both plans to small-model-executable detail: code excerpts, exact signatures,
  acceptance criteria, and common-mistake warnings per task.
- Consolidated planning into `FEATURE_ADDITION_PLAN.md` as the single source of truth:
  absorbed open items from `ANALYSIS_OPTIONS.md` (F-series, AO#n tags) and
  `MIRROR_LENS_FUTURE_ENHANCEMENTS.md` (M-series); archived both originals to
  `agent_docs/records/*-archive.md` via `git mv` and updated every reference
  (`CLAUDE.md`, `agents.md`, `README.md`, `agent_docs/README.md`, `agent_docs/architecture.md`,
  `records/mirror-lens-tracing-and-authoring.md`). Also removed the stale deleted-file
  references from `agents.md` and `README.md` (`MIRROR_OPTICS_ACCURACY_PLAN.md`,
  `CHROMATIC_DISPERSION_NOTES.md`, `PERFORMANCE.md`, `SEO_OFFSITE_ACTIONS.md`).
- Corrections found while verifying subagent reports: `RayPolylines` is unmemoized (its parent
  `DiagramRayLayers` is memoized); `sx`/`sy` are already memoized in `useLensComputation.ts:157`;
  the coma field selector (AO#10 / former F12-candidate) is already shipped; `apertureBlades` is
  populated in 173 lens files; AO#4 (URL state) and AO#6 (cardinal overlays) are shipped.

## Follow-ups

- Execute plan tasks (one branch each), checking off items in the plan files.
- `agent_docs/architecture/testing.md` could link to `testing_recipes.md`.
