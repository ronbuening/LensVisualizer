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

### N5 — single-source aspheric coefficient schema

- New `src/types/asphericSchema.ts`: one ordered descriptor list (`K` + A3–A20; key, kind, power, parity,
  required) with the accumulation-order warning documented. `AsphericCoefficients` is now DERIVED from the
  list (`Extract` on required/optional membership) and re-exported from `types/optics.ts`, so all existing
  imports keep working.
- `validateLensData.ts`: required/optional/known-key lists derive from the schema; no validator-local
  coefficient array remains. New descriptor-driven validator loop asserts required-missing and
  optional-non-finite errors for every schema entry.
- `internal/surfaceMath.ts`: `conicPolySag`/`sagSlopeRaw` evaluate polynomial terms from schema-derived
  term plans, keeping the separate even/odd accumulation order and the untouched conic-K clamp handling.
- **Benchmark forced the plan's documented fallback.** The naive descriptor loop (string-keyed coefficient
  lookups per evaluation) regressed rays median 1.072 → 1.325 ms (+23.6%) and layout +24.3%. Per step 5's
  contingency, coefficients are now compiled once per asphere object into `Float64Array` vectors (WeakMap
  keyed by identity — asphere objects are immutable) with exponent tables hoisted to module scope; the
  schema stays the single source of truth.
- New `__tests__/src/optics/internal/asphericSchemaMath.test.ts`: schema-shape guards (K + A3..A20 exactly
  once; parity matches power), per-descriptor term isolation against the analytic monomial (sag and
  derivative — a dropped term reads 0 and fails its own case), conic-K closed-form check, combined-term
  central-difference sweep inside the valid conic domain (adaptive step, abs+rel tolerance), and a
  separate finite-clamp test that never differences across the domain boundary.
- Golden trace values unchanged (last-ulp association changes in two terms are far inside the suite's
  1e-6/1e-8 pins).
- Final benchmark vs pre-N5 baseline: build −4.9%, layout +3.3%, rays +1.7%, analysis −4.0%,
  svgRender +4.2% — mixed signs within run-to-run noise. Both run records are committed
  (2026-08-05T19-03-39Z baseline, 2026-08-05T19-19-31Z final); the intermediate naive-loop run was
  deleted since its code never shipped.

Verification: gate passed (235 files / 2811 tests); golden suite green; benchmark within noise.
