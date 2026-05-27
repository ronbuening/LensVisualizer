# Optics 2 Engine Migration Plan

> **Status (2026-05-26):** Historical — the staged migration is complete. The promoted engine now lives in
> `src/optics/`, old engine selectors and parity-only harnesses have been removed, and
> `agent_docs/architecture/optics-engine.md` is the current source of truth. The stage briefs below are retained only
> for implementation archaeology.

This is the source index for the optics engine rewrite. The original long-form plan has been split into sequential stage
briefs so coding agents can work one stage at a time with clear `/goal` prompts, scoped deliverables, and exit gates.

The rewrite still follows the same top-level strategy:

- Build the new engine alongside the current engine in `src/optics-2`.
- Keep existing lens files, glass catalog data, analysis markdown, URL state, and UI props compatible.
- Add parity tests before changing production callers.
- Use prepared optical state to remove repeated layout and state-surface work.
- Keep formulas DRY: one owner for surface profiles, projection launch, aperture state, tracing, dispersion, and
  first-order/pupil math.
- Migrate only after parity, app smoke coverage, and benchmarks are in place.

## Stage Order

Agents should implement these stages in order. Later stages may read earlier stage files for context, but should not
reopen the whole migration plan unless they are changing the migration strategy itself.

| Stage | File | Main phases | Main requirement ids | Purpose |
| --- | --- | --- | --- | --- |
| 01 | [Foundation, Parity, And Rules](stages/01-foundation-parity-and-rules.md) | P0-P1 | Project policy, parity matrix | Establish the migration rules, fixture matrix, and benchmark scaffolding. |
| 02 | [Core Model, State, And Math](stages/02-core-model-state-and-math.md) | P2-P4 | R1-R5 | Add core types, surface math, normalization, dispersion descriptors, and prepared state. |
| 03 | [Trace, Field, And First-Order](stages/03-trace-field-and-first-order.md) | P5-P8 | R6-R10 | Add vector tracing, folded paths, field launch, chief rays, first-order, and pupils. |
| 04 | [Chromatic, Diagram, Analysis, And UI](stages/04-chromatic-diagram-analysis-and-ui.md) | P9-P12 | R4, R11-R12 | Port chromatic helpers, diagram geometry, analysis modules, and internal UI opt-in. |
| 05 | [Performance, Docs, And Final Migration](stages/05-performance-docs-and-final-migration.md) | P13-P14, final migration | R13, final gates | Benchmark, document, flip imports, remove temporary selectors, and retire legacy internals. |

## Copy-Ready Goals

Use one of these prompts with `/goal` when assigning a coding agent a stage.

```text
/goal Implement Optics 2 Stage 01 from engine-migration/stages/01-foundation-parity-and-rules.md: establish migration rules, add the parity fixture matrix and benchmark harness scaffolding, keep production on src/optics, and verify with focused typecheck/tests. Do not switch UI imports.
```

```text
/goal Implement Optics 2 Stage 02 from engine-migration/stages/02-core-model-state-and-math.md: add src/optics-2 core types, math, LensData normalization, EngineLens compatibility, dispersion descriptors, and prepared optical state with parity tests. Keep lens files unchanged and do not switch UI callers.
```

```text
/goal Implement Optics 2 Stage 03 from engine-migration/stages/03-trace-field-and-first-order.md: implement vector-native sequential tracing, generalized folded tracing, projection/chief-ray ownership, and first-order/pupil calculations behind compatibility wrappers. Preserve legacy trace outputs and folded diagnostics.
```

```text
/goal Implement Optics 2 Stage 04 from engine-migration/stages/04-chromatic-diagram-analysis-and-ui.md: port chromatic behavior, diagram geometry, and analysis modules to optics-2 behind compatibility facades, then add an internal UI opt-in selector without changing lens data, URLs, or component props.
```

```text
/goal Implement Optics 2 Stage 05 from engine-migration/stages/05-performance-docs-and-final-migration.md: run the performance pass, update architecture and authoring docs, satisfy final migration entry criteria, flip stable imports to optics-2, remove temporary selectors, and retain rollback coverage.
```

## Common Constraints For Every Stage

- Keep new source code under `src/optics-2` until the final migration stage.
- Keep the current `src/optics` engine available as the production fallback until Stage 05.
- Do not add a user-facing engine selector or lens-data trace-mode field.
- Do not change `src/lens-data/**/*.data.ts` unless a stage explicitly proves a new authored field is required.
- Do not fork the glass catalog into divergent copies.
- Keep pure engine modules free of React, route, page, and component imports.
- Keep diagram rendering SVG-only.
- Pass the runtime lens object or `PreparedOpticalState` explicitly. Do not add hidden mutable optical state.
- Add tests before switching callers.
- Preserve current `null` versus `undefined` behavior in compatibility wrappers unless Stage 05 explicitly changes it.
- Record intentional parity differences by name. Do not hide them behind broad tolerances.

## Compatibility Promises

These promises hold until the final migration is complete:

- Existing `LensDataInput` files keep working with `satisfies LensDataInput`.
- `buildLens2(data)` returns a legacy-compatible `RuntimeLens`.
- UI hooks keep returning the same public shapes until their callers are intentionally migrated.
- Analysis drawer components do not learn engine-native types during staged migration.
- Hidden reference fixtures continue to anchor folded and mirror behavior.
- Glass report and mismatch-scan behavior stays stable.

## Normal Verification Gate

Use focused tests during early phases. Before a broad switch or final migration, prefer:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

Run `npm run build` when route metadata, lens-data organization, generated metadata, SEO, article, or sitemap behavior
could be affected.

## Final Migration Summary

The final migration belongs only to Stage 05. It may begin only after:

- Every visible lens and hidden reference fixture builds through `buildLens2`.
- Parity tests pass for layout, rays, chromatic behavior, field geometry, chief rays, folded diagnostics, diagram
  geometry, and migrated analysis outputs.
- `useLensComputation`, ray hooks, and analysis drawer tests pass with `optics-2` selected.
- Benchmarks show no unacceptable regression in ordinary rendering or settled analysis.
- Folded unsupported-tab gating remains correct.
- Docs identify the authoritative engine and updated public import boundaries.
