# Agent Docs

Focused docs for agents working in LensVisualizer. Read the smallest relevant doc before changing an area, then follow
links outward only when the task crosses boundaries.

## Layout

- [`architecture.md`](architecture.md) and [`architecture/`](architecture/) — subsystem map, program flow, public functions, and focused architecture notes.
- Lens/content workflow docs at the root — lens authoring, patent audits, articles, changelog, comments, and gotchas.
- Glass catalog workflow docs at the root — catalog buildout, relabel follow-up, and proprietary-glass backfill.
- Root-level project docs such as [`../TRACE_MODEL_IMPROVEMENT_PLAN.md`](../TRACE_MODEL_IMPROVEMENT_PLAN.md),
  [`../MIRROR_LENS_FUTURE_ENHANCEMENTS.md`](../MIRROR_LENS_FUTURE_ENHANCEMENTS.md), and
  [`../ANALYSIS_OPTIONS.md`](../ANALYSIS_OPTIONS.md) capture current status or future backlog for broad initiatives.
- Current mirror/folded optics behavior is covered in [`architecture/optics-engine.md`](architecture/optics-engine.md)
  and authoring rules are covered in [`adding_a_lens.md`](adding_a_lens.md); remaining follow-up work is tracked in
  [`../MIRROR_LENS_FUTURE_ENHANCEMENTS.md`](../MIRROR_LENS_FUTURE_ENHANCEMENTS.md).
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

## Benchmarks

Optics/rendering benchmark records live outside `generated/` because each run is a permanent historical measurement:

- [`benchmarks/README.md`](benchmarks/README.md) — command, options, output policy, and benchmark coverage.
- [`benchmarks/benchmark-report.md`](benchmarks/benchmark-report.md) — latest report regenerated from the newest 10 run JSON files.
- [`benchmarks/runs/`](benchmarks/runs/) — one JSON file per real benchmark run.

Regenerate only the human-readable report without creating another run:

```bash
npm run benchmark:optics-rendering -- --report-only
```
