# Stage 05: Performance, Docs, And Final Migration

Use this stage only after Stages 01 through 04 have passed their exit gates.

## /goal Prompt

```text
/goal Implement Optics 2 Stage 05 from engine-migration/stages/05-performance-docs-and-final-migration.md: run the performance pass, update architecture and authoring docs, satisfy final migration entry criteria, flip stable imports to optics-2, remove temporary selectors, and retain rollback coverage.
```

## Scope

This stage covers Phase 13, Phase 14, and the final migration:

- Performance pass.
- Documentation and authoring updates.
- Final import flip.
- Temporary selector removal.
- Legacy retirement after a safe window.

Primary requirement ids:

- R13: Performance and reliability.
- Final migration entry criteria, steps, and rollback.

## Goals

- Prove the rewrite is not just structurally cleaner, but operationally acceptable.
- Keep correctness observable through typed diagnostics and retained regression tests.
- Update architecture docs so future work knows which engine is authoritative.
- Flip stable imports deliberately.
- Preserve a rollback path until the new engine has been exercised.

## Non-Goals

- Do not begin this stage if parity or UI opt-in is incomplete.
- Do not remove old internals before stable imports delegate to `optics-2`.
- Do not keep a permanent old-vs-new production selector.
- Do not accept speedups that hide changed trace counts, clip counts, or failure counts.

## Performance Requirements

Benchmark protocol:

1. Record machine, Node version, branch, and commit.
2. Run old-engine and new-engine benchmarks in the same process when possible.
3. Warm up each case before measurement.
4. Use the same prepared lens, slider state, field state, aperture state, and ray density for both engines.
5. Record median, worst, and successful sample counts.
6. Include clipped and failed counts.
7. Repeat enough times to distinguish signal from noise.

Required benchmark cases:

- Sequential on-axis display rays.
- Sequential off-axis display rays.
- Skew ray trace.
- Chromatic fan.
- Distortion grid.
- Vignetting sweep.
- Bokeh point cloud or spot grid.
- Folded auto-path fixture.

Optimization rules:

- Remove repeated state preparation before changing math algorithms.
- Prefer compiled arrays and prepared closures over map lookups in per-ray loops.
- Add batch APIs only where measured repeated overhead exists.
- Keep compatibility adapters thin.
- Do not duplicate core trace logic to optimize a wrapper.
- Document any intentional tradeoff between performance and correctness.

Performance exit criteria:

- Ordinary display rendering is no slower than the existing engine beyond measurement noise.
- At least one nested analysis path is measurably faster or less allocative.
- Any regression over 15 percent has a documented reason and follow-up.

## Reliability Requirements

- Engine-native failures use typed statuses, not raw `NaN` alone.
- Compatibility wrappers may continue returning legacy `NaN` only where callers expect it.
- Caches include every optical state input that affects results.
- Cache lookup is optional in tests.
- Development warnings remain gated behind dev checks.
- Folded unsupported-tab gating remains correct.

## Documentation Updates

Update these when the corresponding implementation is real:

- `agent_docs/architecture/optics-engine.md`: `optics-2` module architecture, data flow, and authoritative status.
- `agent_docs/architecture/public-functions.md`: stable import paths and public function owners.
- `agent_docs/architecture/viewer-and-diagram.md`: diagram data flow if hooks or shapes changed.
- `agent_docs/architecture/ui-components.md`: analysis facade or drawer data flow changes.
- `agent_docs/gotchas.md`: numerical, folded-path, projection, cache, and migration constraints.
- `src/lens-data/LENS_DATA_SPEC.md`: only if lens authors gain a real new field or rule.
- `src/lens-data/TEMPLATE.data.ts.template`: only if authoring changes.

Documentation quality rules:

- State whether `src/optics` or `src/optics-2` is authoritative.
- Do not document temporary internals as permanent authoring rules.
- Do not tell lens authors to use unsupported fields.
- Keep diagrams focused on import boundaries and data flow.

## Final Migration Entry Criteria

All of the following must be true before flipping stable imports:

- `buildLens2` builds every visible lens and hidden reference fixture.
- Parity tests pass for layout, rays, chromatic paths, field geometry, chief rays, folded diagnostics, diagram geometry,
  and migrated analysis outputs.
- `useLensComputation`, ray hooks, and analysis drawer tests pass with `optics-2` selected.
- `npm run test` passes with `optics-2` selected.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` pass.
- Benchmarks show no unacceptable regression in normal diagram rendering or settled analysis.
- Folded unsupported-tab gating remains correct.
- Docs identify the current authoritative engine and updated public import boundaries.

## Final Migration Steps

1. Freeze old engine feature work.
   - Stop adding features to `src/optics` except critical bug fixes.
   - Route new optics features to `src/optics-2`.

2. Flip compatibility imports one boundary at a time.
   - Change stable `src/optics/optics.ts` exports to delegate to `src/optics-2/compat.ts`.
   - Change `src/optics/buildLens.ts` to delegate to `buildLens2`.
   - Move focused public modules after their parity is green:
     - `projection.ts`.
     - `dispersion.ts` or its adapter.
     - `diagramGeometry.ts`.
     - `raySampling.ts`.
     - analysis modules.

3. Run the full verification gate.

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
npm run build
```

4. Keep old internals temporarily.
   - Leave old implementation files untouched until one release or deployment has exercised `optics-2`.
   - Move old files to `src/optics-legacy` only if rollback needs a clean boundary.
   - Avoid keeping duplicate public exports longer than necessary.

5. Update docs.
   - Architecture docs.
   - Public function docs.
   - Gotchas.
   - Generated report docs if wording or paths changed.

6. Remove temporary selectors.
   - Delete feature flags.
   - Delete old-vs-new selector code.
   - Delete parity scaffolding that only compared to removed internals.
   - Keep durable regression tests that protect the new behavior.

7. Retire legacy files.
   - Delete old internals only after new public modules own all callers.
   - Keep stable module paths where app code and tests expect them, even if those paths re-export `optics-2`.
   - Avoid mass import churn unless it clearly improves the codebase.

8. Verify production-facing behavior.
   - Run `npm run build`.
   - Spot-check ordinary, zoom, fisheye, perspective-control, aberration-control, and folded-reference behavior.
   - Confirm analysis drawer gating and notices.
   - Confirm generated glass and mirror reports if relevant.

## Rollback Plan

If a serious regression appears during final migration:

1. Revert only the barrel or delegation changes that selected `optics-2`.
2. Keep `src/optics-2` and its tests if they do not break the app.
3. Add a failing regression test in the `optics-2` parity suite.
4. Fix the new engine behind the selector before attempting migration again.

Do not use destructive git operations as part of rollback unless the user explicitly asks for them.

## Verification

The final stage should end with:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
npm run build
```

Also run any generated report commands that changed files or behavior:

```bash
npm run generate:glass-reports
npm run generate:mirror-reports
```

Only run report generation when the corresponding data or report wording changed.

## Exit Gate

Stage 05 is complete when:

- Stable optics imports delegate to or are implemented by `optics-2`.
- Temporary engine selectors are removed.
- Old internals are retained only where they serve a named rollback or compatibility purpose.
- The full verification gate passes.
- Architecture docs identify the authoritative engine.
- Lens authors do not need to learn an unnecessary new format.
- Rollback coverage exists for any accepted behavioral difference.

