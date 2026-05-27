# Exact Surface Ray-Tracing Migration State

> **Status (2026-05-26):** Historical — exact surface tracing is now the only runtime trace path. The legacy
> vertex-plane tracer, trace-mode switch, and per-lens rollout controls described below were removed after the rollout.
> Use `agent_docs/architecture/optics-engine.md` as the current source of truth.

## Summary

Exact surface tracing is now the production path for public runtime tracing and real-ray-derived optical geometry.
During the rollout, the temporary central switch lived in `src/optics/traceMode.ts`:

- `SURFACE_TRACE_ROLLOUT_MODE: "legacy" | "exact" | "per-lens"`.
- `EXACT_SURFACE_TRACE_LENS_KEYS` for controlled per-lens rollout if the mode is changed back to `"per-lens"`.
- `resolveSurfaceTraceMode(L, requestedMode?)`, where explicit `{ mode: "legacy" | "exact" }` test/comparison requests
  override the rollout config.

Current working-tree note: `src/optics/traceMode.ts` no longer exists. Legacy and per-lens modes are not available for
comparison or rollback; rollback is now a normal git-level revert or focused current-engine fix.

## Implemented State

- `src/optics/internal/exactSurfaceTrace.ts` is the shared exact surface-stack tracer. It solves ray intersections against
  flat, spherical, conic, and polynomial-aspheric sag surfaces via `surfaceIntersection.ts`, applies exact Snell
  refraction at the hit normal, supports `stopAt`, `skipLastTransfer`, semi-diameter clipping, and optional height/hit
  recording.
- `src/optics/rayTrace.ts` routes meridional, chromatic meridional, skew, chromatic skew, and chief-relative skew tracing
  through the shared exact stack in exact mode. Public return values remain compatible by projecting terminal coordinates
  back to the current surface vertex plane.
- The old vertex-plane real-ray helper is now explicitly named `traceSurfacesVertexReal`; `traceSurfacesReal` remains only
  as a compatibility alias for legacy tests and one-off diagnostic scripts.
- `buildLens.ts` accepts optional `BuildLensOptions.traceMode` and uses the shared exact stack for derived stop, entrance
  pupil, exit pupil, blade, half-field, and zoom-position real-ray constants by default.
- `fieldGeometry.ts` uses the shared exact stack for field geometry, chief-ray launch solving, accurate image-height
  solving, `conjugateK`, and current-state entrance-pupil geometry.
- `pupilAberration.ts` uses the same mode-aware exact stack for current-state EP/XP baselines and threads explicit trace
  options through pupil profile calculations.
- Distortion, vignetting, off-axis bundle tracing, spherical aberration blur-character analysis, coma, bokeh, and field
  curvature now preserve explicit `RayTraceOptions` as they call field geometry or traced bundle helpers.

## Intentional Paraxial Layer

First-order optics remain intentionally paraxial:

- `traceSurfacesParaxial`, `traceParaxialRay`, and `traceToImage`.
- Cardinal elements and first-order/cardinal overlays.
- Petzval and other first-order references.

These are not migration debt unless a future feature explicitly replaces first-order diagnostics with real-ray
alternatives.

## Verification Expectations

Before committing exact-trace migration work, run:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

Focused migration coverage:

```bash
npm run test -- traceMode exactTraceCatalog exactSurfaceTrace optics skewRay aberrationAnalysis vignetteAnalysis pupilAberration distortionAnalysis bokeh opticsEdgeCases buildLens opticsInternals
```

The `exactSurfaceTrace` suite includes unit coverage for the shared exact stack, build/field/pupil forced-mode
comparisons, and a guard that production optics code does not import the legacy `traceSurfacesReal` alias.
