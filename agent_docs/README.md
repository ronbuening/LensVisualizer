# Agent Docs

Focused docs for agents working in LensVisualizer. Read the smallest relevant doc before changing an area, then follow
links outward only when the task crosses boundaries.

## Layout

- [`architecture.md`](architecture.md) and [`architecture/`](architecture/) — subsystem map, program flow, public functions, and focused architecture notes.
- Task recipes at the root — step-by-step guides for common change types:
  [`adding_an_analysis_tab.md`](adding_an_analysis_tab.md), [`adding_url_state.md`](adding_url_state.md),
  [`adding_a_route.md`](adding_a_route.md), [`adding_ui_controls.md`](adding_ui_controls.md),
  [`testing_recipes.md`](testing_recipes.md), [`theme_tokens.md`](theme_tokens.md). Read the matching
  recipe before starting one of these tasks.
- Lens/content workflow docs at the root — lens authoring, patent audits, semi-diameter diagram audits, articles,
  changelog, comments, and gotchas.
- Glass catalog workflow docs at the root — catalog buildout, relabel follow-up, and proprietary-glass backfill.
- Agent instruction guidance at the root — [`agent-md-best-practices.md`](agent-md-best-practices.md) for general
  AGENTS.md files and [`claude-md-best-practices.md`](claude-md-best-practices.md) for Claude-specific files.
- Root-level project docs: [`../TRACE_MODEL_IMPROVEMENT_PLAN.md`](../TRACE_MODEL_IMPROVEMENT_PLAN.md) (historical
  trace status), [`../FEATURE_ADDITION_PLAN.md`](../FEATURE_ADDITION_PLAN.md) (single source of truth for planned
  features), and [`../EFFICIENCY_IMPROVEMENT_PLAN.md`](../EFFICIENCY_IMPROVEMENT_PLAN.md) (cleanup/performance
  backlog). The former `ANALYSIS_OPTIONS.md` and `MIRROR_LENS_FUTURE_ENHANCEMENTS.md` roadmaps are archived under
  [`records/`](records/).
- Current mirror/folded optics behavior is covered in [`architecture/optics-engine.md`](architecture/optics-engine.md)
  and authoring rules are covered in [`adding_a_lens.md`](adding_a_lens.md); remaining follow-up work is tracked in
  the Mirror/Folded Backlog section of [`../FEATURE_ADDITION_PLAN.md`](../FEATURE_ADDITION_PLAN.md).
- [`generated/`](generated/) — auto-generated reports and work queues; regenerate these instead of hand-editing them.
- [`benchmarks/`](benchmarks/) — on-demand optics/rendering benchmark history and the latest human-readable benchmark
  report. Run `npm run benchmark:optics-rendering` manually; this command is intentionally not part of normal tests or
  build scripts.
- [`records/`](records/) — historical branch/task notes. Treat these as context, not current source of truth.

## Generated Reports

Regenerate all glass reports together:

```bash
npm run generate:glass-reports
```

Regenerate mirror fixture reports:

```bash
npm run generate:mirror-reports
```

Regenerate the mount SVG specifications + per-view SVGs:

```bash
npm run generate:mount-svgs
```

Individual report commands:

- [`generated/unresolved-glass.generated.md`](generated/unresolved-glass.generated.md) — `npm test -- unresolvedGlassScan`
- [`generated/catalog-mismatches.generated.md`](generated/catalog-mismatches.generated.md) — `npm test -- catalogMismatchScan`
- [`generated/glass-relabel-candidates.generated.md`](generated/glass-relabel-candidates.generated.md) — `npm test -- glassRelabelCandidatesScan`
- [`generated/glass-relabel-by-lens.generated.md`](generated/glass-relabel-by-lens.generated.md) — `npm test -- glassRelabelByLensScan`
- [`generated/six-digit-glass-codes.generated.md`](generated/six-digit-glass-codes.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [`generated/six-digit-glass-codes-missing-sellmeier.generated.md`](generated/six-digit-glass-codes-missing-sellmeier.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [`generated/sellmeier-coverage.generated.md`](generated/sellmeier-coverage.generated.md) — `npm test -- sellmeierCoverageScan`
- [`generated/mirror-fixtures.generated.md`](generated/mirror-fixtures.generated.md) — `npm test -- mirrorFixtureAuthoringReport`
- [`generated/lens-mount-svg-specifications.md`](generated/lens-mount-svg-specifications.md) + [`generated/mounts/`](generated/mounts/) — `npm test -- mountSvgSpecificationsReport`

The `sixDigitGlassCodeScan` and `glassCoverageOpportunitiesScan` reports embed match statuses against the untracked
local `patents/` PDF inventory. Those scans skip the rewrite when the inventory is empty (fresh worktrees, CI), so
regenerate their three report files only from a checkout where `patents/` is populated.

## Benchmarks

Optics/rendering benchmark records live outside `generated/` because each run is a permanent historical measurement:

- [`benchmarks/README.md`](benchmarks/README.md) — command, options, output policy, and benchmark coverage.
- [`benchmarks/benchmark-report.md`](benchmarks/benchmark-report.md) — latest report regenerated from the newest 10 run JSON files.
- [`benchmarks/runs/`](benchmarks/runs/) — one JSON file per real benchmark run.

Regenerate only the human-readable report without creating another run:

```bash
npm run benchmark:optics-rendering -- --report-only
```
