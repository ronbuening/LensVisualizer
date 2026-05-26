# Agent Docs

Focused docs for agents working in LensVisualizer. Read the smallest relevant doc before changing an area, then follow
links outward only when the task crosses boundaries.

## Layout

- [`architecture.md`](architecture.md) and [`architecture/`](architecture/) — subsystem map, program flow, public functions, and focused architecture notes.
- Lens/content workflow docs at the root — lens authoring, patent audits, articles, changelog, comments, and gotchas.
- Glass catalog workflow docs at the root — catalog buildout, relabel follow-up, and proprietary-glass backfill.
- Root-level project docs such as [`../TRACE_MODEL_IMPROVEMENT_PLAN.md`](../TRACE_MODEL_IMPROVEMENT_PLAN.md),
  [`../MIRROR_OPTICS_ACCURACY_PLAN.md`](../MIRROR_OPTICS_ACCURACY_PLAN.md),
  [`../CHROMATIC_DISPERSION_NOTES.md`](../CHROMATIC_DISPERSION_NOTES.md), and
  [`../ANALYSIS_OPTIONS.md`](../ANALYSIS_OPTIONS.md) capture current status or future backlog for broad initiatives.
- Mirror/folded off-axis accuracy status is captured in
  [`../MIRROR_OPTICS_ACCURACY_PLAN.md`](../MIRROR_OPTICS_ACCURACY_PLAN.md); remaining follow-up work is tracked in
  [`../MIRROR_LENS_FUTURE_ENHANCEMENTS.md`](../MIRROR_LENS_FUTURE_ENHANCEMENTS.md).
- Historical root folders such as [`../engine-migration/`](../engine-migration/) are retained for context only. If they
  conflict with `CLAUDE.md`, `agents.md`, or the architecture docs here, treat the current docs as authoritative.
- [`generated/`](generated/) — auto-generated reports and work queues; regenerate these instead of hand-editing them.
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

Individual report commands:

- [`generated/unresolved-glass.generated.md`](generated/unresolved-glass.generated.md) — `npm test -- unresolvedGlassScan`
- [`generated/catalog-mismatches.generated.md`](generated/catalog-mismatches.generated.md) — `npm test -- catalogMismatchScan`
- [`generated/glass-relabel-candidates.generated.md`](generated/glass-relabel-candidates.generated.md) — `npm test -- glassRelabelCandidatesScan`
- [`generated/glass-relabel-by-lens.generated.md`](generated/glass-relabel-by-lens.generated.md) — `npm test -- glassRelabelByLensScan`
- [`generated/six-digit-glass-codes.generated.md`](generated/six-digit-glass-codes.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [`generated/six-digit-glass-codes-missing-sellmeier.generated.md`](generated/six-digit-glass-codes-missing-sellmeier.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [`generated/sellmeier-coverage.generated.md`](generated/sellmeier-coverage.generated.md) — `npm test -- sellmeierCoverageScan`
- [`generated/mirror-fixtures.generated.md`](generated/mirror-fixtures.generated.md) — `npm test -- mirrorFixtureAuthoringReport`
