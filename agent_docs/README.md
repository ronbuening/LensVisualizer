# Agent Docs

Focused docs for agents working in LensVisualizer. Read the smallest relevant doc before changing an area, then follow
links outward only when the task crosses boundaries.

## Layout

- [`architecture.md`](architecture.md) and [`architecture/`](architecture/) — subsystem map, program flow, public functions, and focused architecture notes.
- Lens/content workflow docs at the root — lens authoring, patent audits, articles, changelog, comments, and gotchas.
- Glass catalog workflow docs at the root — catalog buildout, relabel follow-up, and proprietary-glass backfill.
- Mirror-lens follow-up work is tracked in [`../MIRROR_LENS_FUTURE_ENHANCEMENTS.md`](../MIRROR_LENS_FUTURE_ENHANCEMENTS.md).
- [`generated/`](generated/) — auto-generated reports and work queues; regenerate these instead of hand-editing them.
- [`records/`](records/) — historical branch/task notes. Treat these as context, not current source of truth.

## Generated Reports

Regenerate all glass reports together:

```bash
npm run generate:glass-reports
```

Individual report commands:

- [`generated/unresolved-glass.generated.md`](generated/unresolved-glass.generated.md) — `npm test -- unresolvedGlassScan`
- [`generated/catalog-mismatches.generated.md`](generated/catalog-mismatches.generated.md) — `npm test -- catalogMismatchScan`
- [`generated/glass-relabel-candidates.generated.md`](generated/glass-relabel-candidates.generated.md) — `npm test -- glassRelabelCandidatesScan`
- [`generated/glass-relabel-by-lens.generated.md`](generated/glass-relabel-by-lens.generated.md) — `npm test -- glassRelabelByLensScan`
- [`generated/six-digit-glass-codes.generated.md`](generated/six-digit-glass-codes.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [`generated/six-digit-glass-codes-missing-sellmeier.generated.md`](generated/six-digit-glass-codes-missing-sellmeier.generated.md) — `npm test -- sixDigitGlassCodeScan`
- [`generated/sellmeier-coverage.generated.md`](generated/sellmeier-coverage.generated.md) — `npm test -- sellmeierCoverageScan`
