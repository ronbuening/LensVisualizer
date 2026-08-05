# Code Health Plan — Stage 4 (engine foundations and report generators)

## Summary

- Executes Stage 4 of `agent_docs/code-health-improvement-plan.md` in the documented order:
  G1 → N5, G2 → G3 → G4 → G5 → G6 → G7, G8 → G9, G10 → G11, D5.
- One commit per item; the full gate
  (`npm run typecheck && npm run format:check && npm run lint && npm run test`) runs before each commit,
  plus the per-item generator/byte-diff checks the plan names.
- Stage 3 record: `agent_docs/records/code-health-stage-3-2026-08-05.md`.

## Changes

### G1 — centralized normalizeRuntimeLens cache

- The identity-keyed `WeakMap<RuntimeLens, EngineLens>` now lives inside
  `prescription/normalizeLensData.ts`; `normalizeRuntimeLens` checks it first and populates it on miss
  (the compiled body moved to a private `normalizeRuntimeLensUncached`).
- Deleted the five private call-site WeakMaps (`compat.ts`, `trace/rayAdapters.ts`,
  `chromatic/indexResolver.ts`, `chromatic/dispersionQuality.ts`, `diagram/runtimeDiagramAdapter.ts`) —
  each call site now calls the function directly; `engineLensFromRuntime` is a one-line delegate. The
  eight previously uncached hot call sites (chiefRay ×7, cardinals, focusBreathing — amplified per field
  angle by distortion/pupil analysis) now share the cache automatically, no call-site change needed.
- No API change. Safety argument is the documented WeakMap-keyed-on-RuntimeLens pattern
  (`agent_docs/gotchas.md`): RuntimeLens objects are rebuilt on data change, never mutated in place.

Verification: gate passed (234 files / 2787 tests) including the spec's named suites
(`exactTraceGoldenValues`, `chiefRaySolver`, `opticsEngineModelState`);
`grep -rn ENGINE_LENS_BY_RUNTIME src` shows only the single cache in `normalizeLensData.ts`.
