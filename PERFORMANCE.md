# Performance Roadmap

This document captures the performance bottlenecks identified in LensVisualizer as of 2026-04-23 and the staged plan for resolving them. Each stage is independently shippable; update the status markers as each lands.

## Context

Slider interactions (focus, aperture, zoom) feel sluggish because every slider tick fires a complete re-computation cascade: main ray traces, off-axis ray traces, chromatic ray traces, SVG shape generation, and — when open — analysis drawer tabs (aberrations / coma / distortion / breathing / vignetting / pupils) and the bokeh overlay.

The goal is a dramatically smoother interactive experience while preserving final accuracy. Only *transient* (mid-drag) results may use reduced-resolution proxies, and they must converge to full resolution on pointer release.

## Status Summary

| Stage | Scope | Status |
|-------|-------|--------|
| 0 | Instrumentation (perf probe, baseline measurements) | ⬜ Not started |
| 1 | Unmount non-visible analysis/bokeh work | ⬜ Not started |
| 2 | Defer non-essential work until pointer-up (`useDeferredValue`) | ⬜ Not started |
| 3 | Stabilize references + split context + `React.memo` | ⬜ Not started |
| 4 | Adaptive resolution during interaction | ⬜ Not started |
| 5 | Web Workers, cross-panel cache, build-time precompute (optional) | ⬜ Not started |

Legend: ⬜ Not started · 🟨 In progress · ✅ Shipped

---

## Confirmed Bottlenecks

### B1 — Slider input has no throttling/debouncing
- [src/components/controls/SliderControl.tsx](src/components/controls/SliderControl.tsx) fires `onChange` on every `input` event (~60 Hz during a drag).
- `onPointerUp` exists but is currently only used for URL-sync debouncing ([src/utils/useURLSync.ts](src/utils/useURLSync.ts), 300 ms), not for deferring heavy compute.
- No `useTransition`, `useDeferredValue`, or rAF batching anywhere in the code.

### B2 — Analysis Drawer content is always mounted when its tab is selected, even when the drawer is closed
- [src/components/layout/AnalysisDrawer.tsx](src/components/layout/AnalysisDrawer.tsx) uses `transform` + `opacity` for show/hide animation and **always renders `{children}`**. The `open` prop only toggles visual state, it does **not** unmount children.
- [src/components/layout/lensDiagram/AnalysisDrawerContent.tsx](src/components/layout/lensDiagram/AnalysisDrawerContent.tsx) uses an if/return pattern that correctly limits rendering to the *active* tab, but because the drawer keeps it mounted, that active tab re-computes on every slider tick regardless of whether the user can see it.
- The JSX for `analysisContent` is constructed unconditionally in [LensDiagramPanel.tsx:288-301](src/components/layout/LensDiagramPanel.tsx#L288-L301).

### B3 — Per-tab analysis computations are heavy and run every slider tick
- [useAberrationsPanelData](src/components/display/aberrations/useAberrationsPanelData.ts) wraps six analyses (SA, SA profile, SA blur character, coma, field curvature, chromatic field curvature) in a single `useMemo` — if **any** dependency changes (every drag, because `zPos` changes), all six recompute.
- The same hook is called from both [AberrationsPanel.tsx](src/components/display/AberrationsPanel.tsx) and [ComaTab.tsx](src/components/display/ComaTab.tsx) — switching tabs recomputes independently.
- [DistortionTab.tsx](src/components/display/DistortionTab.tsx) invokes `computeDistortionCurve` + `computeDistortionFieldGrid` (~170+ chief-ray bisection solves per update).
- [VignettingTab.tsx](src/components/display/VignettingTab.tsx) invokes `computeVignettingCurve` — 192-ray pupil sweeps at ~21 field angles.
- [PupilAberrationTab.tsx](src/components/display/PupilAberrationTab.tsx) — 17-sample bisection-solved chief rays (EP + XP combined API already shares the bisection so this is the cheapest tab).
- [FocusBreathingTab.tsx](src/components/display/FocusBreathingTab.tsx) — 21-point EFL sweep across focus range.

### B4 — Bokeh overlay recomputes on every slider tick when open
- [BokehPreviewOverlay.tsx](src/components/display/BokehPreviewOverlay.tsx) — `computeBokehPreviewPair` (337-ray bundles × 4 field positions × 2 focus distances) recomputes every tick.
- Conditionally mounted in [DiagramViewport.tsx](src/components/layout/lensDiagram/DiagramViewport.tsx), so only affects users who opened it, but major cost when open.

### B5 — `zPos` is the cascade trigger
- [useLensComputation.ts](src/components/hooks/useLensComputation.ts) — `cur` layout recomputes on `[focusT, zoomT, L]`, then `zPos` is a fresh array every tick. Every downstream `useMemo` that lists `zPos` in its deps re-runs, even when array values are numerically identical.
- The SVG `shapes` memo in the same file generates SVG paths for every element on every focus/zoom drag.

### B6 — Main-viewport ray tracing runs every tick (expected, but high-resolution)
- [useOnAxisRays.ts](src/components/hooks/useOnAxisRays.ts), [useOffAxisRays.ts](src/components/hooks/useOffAxisRays.ts), [useChromaticRays.ts](src/components/hooks/useChromaticRays.ts) — these are the **visible** rays and *must* update during drag. **Not** candidates for deferral, but **are** candidates for in-drag resolution reduction (Stage 4).

### B7 — No `React.memo` / selector-based context anywhere
- [src/utils/useLensState.ts](src/utils/useLensState.ts) + [src/utils/LensContext.ts](src/utils/LensContext.ts) — single monolithic context. Any state change cascades through every consumer.
- No component in the codebase is wrapped in `React.memo`.

### B8 — Comparison mode doubles all work with no shared cache
- [src/comparison/ComparisonLayout.tsx](src/comparison/ComparisonLayout.tsx) — two `LensDiagramPanel` instances side-by-side, each running its own ray tracing + analysis pipeline on every shared-slider tick.

---

## Guiding Principles

- **Preserve final accuracy.** No steady-state change from today. Transient mid-drag results may use reduced-resolution proxies but must converge on pointer release.
- **Preserve test determinism.** Optimizations must either be off by default in tests, or produce identical results (avoid time-based throttling that changes what tests observe).
- **Small, reviewable PRs.** Each stage ≤ 3 commits, include benchmark numbers in the PR description.
- **No premature abstractions.** Add a utility only after the second use-case appears.

---

## Stage 0 — Instrumentation (prerequisite)

**Goal:** land a perf probe so every subsequent PR posts before/after numbers rather than "feels faster," and so we catch regressions.

- Add `src/utils/perfProbe.ts` exporting `probe(name, fn)` that wraps a function with `performance.now()` before/after and logs via `console.table` every N calls, guarded behind `import.meta.env.DEV`.
- Wrap the six analysis entry points: `computeSphericalAberration`, `computeComaAnalysis`, `computeDistortionCurve`, `computeDistortionFieldGrid`, `computeVignettingCurve`, `computeBokehPreviewPair`.
- Record baseline measurements in this document (see the Baselines section at the bottom) on a representative lens (e.g., Canon RF 85mm f/1.2L) at default slider positions, scrubbing focus 0→1 over 2 seconds.

---

## Stage 1 — Kill non-visible work (biggest single win)

**Goal:** stop computing anything the user cannot see. No deferral, no debouncing — just proper mounting discipline.

**Expected impact:** eliminates analysis-tab compute when the drawer is closed (the default state). With the drawer open, cuts work to just the visible tab.

### 1.1 — Unmount analysis drawer content when drawer is closed
- Files: [AnalysisDrawer.tsx](src/components/layout/AnalysisDrawer.tsx), [DiagramViewport.tsx](src/components/layout/lensDiagram/DiagramViewport.tsx)
- Wrap `{children}` in the drawer with `{open && children}`. CSS transform/opacity animation still plays on the empty shell.
- Alternative: gate from the caller side in `DiagramViewport.tsx`.

### 1.2 — Don't construct `AnalysisDrawerContent` JSX unless drawer is open
- File: [LensDiagramPanel.tsx:288-301](src/components/layout/LensDiagramPanel.tsx#L288-L301)
- Change `analysisContent={<AnalysisDrawerContent … />}` to `analysisContent={analysisDrawerOpen ? <AnalysisDrawerContent … /> : null}`.

### 1.3 — Split `useAberrationsPanelData` into per-visualization hooks
- Files: [useAberrationsPanelData.ts](src/components/display/aberrations/useAberrationsPanelData.ts), [AberrationsPanel.tsx](src/components/display/AberrationsPanel.tsx), [ComaTab.tsx](src/components/display/ComaTab.tsx)
- Break the monolithic `useMemo` into separate hooks per analysis. Each tab imports only the ones it needs.

### 1.4 — Lazy bokeh overlay JSX construction
- File: [LensDiagramPanel.tsx:278-286](src/components/layout/LensDiagramPanel.tsx#L278-L286)
- `bokehPreviewContent={bokehPreviewOpen ? <BokehPreviewOverlay … /> : null}`.

### 1.5 — Apply closed-drawer gating to both comparison panels
- File: [ComparisonLayout.tsx](src/comparison/ComparisonLayout.tsx)

### Verification
- Open app, don't open drawer, scrub focus hard for 3 seconds — with CPU profiler, confirm zero calls to `computeSphericalAberration`, `computeDistortionCurve`, `computeVignettingCurve`.
- Open aberrations tab, confirm only aberrations compute; switch to vignetting, confirm vignetting computes and aberrations do not.
- Add a test: render `DiagramViewport` with `analysisDrawerOpen=false`, spy on `computeSphericalAberration`, assert it's never called.
- Run `npm run typecheck && npm run format:check && npm run lint && npm run test`.

---

## Stage 2 — Defer non-essential visible work until pointer-up

**Goal:** keep the main diagram at full fidelity mid-drag, but defer expensive *secondary* computations (analysis tabs, bokeh) until the drag ends.

**Expected impact:** dramatic smoothness for users with the analysis drawer open. This is the core "update non-visible/secondary views only after slider stops" idea.

### 2.1 — Introduce an "interacting" signal
- New file: `src/components/hooks/useInteractionSignal.ts` exposing `{ interacting, beginInteraction, endInteraction }`.
- Extend [SliderControl.tsx](src/components/controls/SliderControl.tsx) to accept an optional `onPointerDown`.
- Wire `beginInteraction` to `onPointerDown`, `endInteraction` to `onPointerUp`.
- Safety timeout (~150 ms after last `onChange`) to catch `pointerup` fired outside input bounds (common on touch).

### 2.2 — `useDeferredValue` for analysis inputs
- File: [AnalysisDrawerContent.tsx](src/components/layout/lensDiagram/AnalysisDrawerContent.tsx) (or per-tab)
- Wrap `focusT`, `zoomT`, `currentEPSD`, `currentPhysStopSD` with `useDeferredValue` before passing to computations. React prioritizes the main viewport and lets analyses fall back to the last-computed result until idle.

### 2.3 — Defer bokeh overlay recompute
- File: [BokehPreviewOverlay.tsx:26-37](src/components/display/BokehPreviewOverlay.tsx#L26-L37)
- Wrap inputs with `useDeferredValue`; optionally dim the preview while `focusT !== deferredFocusT` as a visual cue.

### 2.4 — Apply to distortion, vignetting, breathing tabs
- Same pattern for [VignettingTab.tsx](src/components/display/VignettingTab.tsx), [DistortionTab.tsx](src/components/display/DistortionTab.tsx), [FocusBreathingTab.tsx](src/components/display/FocusBreathingTab.tsx).

### Verification
- Open vignetting tab, scrub focus; confirm chart "freezes" during drag and snaps to correct final value within ~1 frame of release.
- Main viewport rays continue updating smoothly mid-drag.
- Add test: render VignettingTab, fire 10 rapid change events, assert `computeVignettingCurve` called at most 2× (initial + settled). Use `act()` + `jest.useFakeTimers()`.

---

## Stage 3 — Reduce per-tick work in the hot path

**Goal:** even when doing work, do less of it. Stabilize references so `useMemo` caches hit more often; narrow context subscriptions so unrelated state changes don't re-render expensive trees.

### 3.1 — Stabilize `zPos` reference when structurally equal
- File: [useLensComputation.ts:90-92](src/components/hooks/useLensComputation.ts#L90-L92)
- Use a `useRef` to hold the previous `zPos`; element-wise compare with epsilon; return the previous reference if unchanged. Outsized impact because many downstream memos list `zPos` as a dep.

### 3.2 — Split `LensStateContext` into narrower contexts
- Files: [LensContext.ts](src/utils/LensContext.ts), [useLensState.ts](src/utils/useLensState.ts), all consumers.
- Split by update frequency:
  - `SliderStateContext` — `sliders`, `sharedSliders`
  - `LensDataContext` — `lens`, `display`, `rays`
  - `PanelStateContext` — `panels`, `overlays`
- Expensive hooks subscribe to the two relevant contexts and skip panel churn.
- Invasive — ship as its own PR. Consider starting by splitting just `panels` out (least-coupled slice), measuring, then proceeding.

### 3.3 — Wrap expensive leaf components in `React.memo`
- Candidates: [DiagramSVG.tsx](src/components/diagram/DiagramSVG.tsx), `DiagramRayLayers`, `DiagramElementLayer`, [DiagramHeader.tsx](src/components/layout/lensDiagram/DiagramHeader.tsx).
- The stabilized `zPos` from 3.1 makes these effective. Profile before/after; only keep wrappers that demonstrably skip renders.

### 3.4 — Verify dispatch callback identities stay stable
- File: [useDispatchAdapters.ts:48-93](src/components/hooks/useDispatchAdapters.ts#L48-L93)
- Already wrapped in a single `useMemo` — good. Confirm no consumer creates new closures that mask this stability.

### Verification
- With React DevTools Profiler, scrub focus; `DiagramSVG` renders do not cascade into `DistortionTab` or `VignettingTab` when drawer closed.
- Toggle `zoomPanActive`; `useOnAxisRays` memo does not invalidate.

---

## Stage 4 — Adaptive resolution during interaction

**Goal:** reduced fidelity while dragging, snap to full fidelity on release. Only meaningful for heavy lenses.

### 4.1 — Adaptive main-viewport ray count
- Files: [useOnAxisRays.ts](src/components/hooks/useOnAxisRays.ts), [useOffAxisRays.ts](src/components/hooks/useOffAxisRays.ts), [useChromaticRays.ts](src/components/hooks/useChromaticRays.ts).
- Consume `interacting` from 2.1. When interacting, trace at stride-2; restore full set on release.
- Feature flag: `ENABLE_ADAPTIVE_RAY_LOD` in [featureFlags.ts](src/utils/featureFlags.ts).

### 4.2 — Adaptive sample counts in analysis modules
- [vignetteAnalysis.ts](src/optics/vignetteAnalysis.ts): `N_PUPIL` 192 → 64 during interaction.
- [distortionAnalysis.ts](src/optics/distortionAnalysis.ts): `DISTORTION_GRID_SEGMENT_COUNT` 17 → 9.
- [pupilAberration.ts](src/optics/pupilAberration.ts): `PUPIL_ABERRATION_SAMPLE_COUNT` 17 → 9.
- Pass an optional `{ lod: "interactive" | "final" }` parameter; default `"final"` so tests/static consumers unchanged.

### 4.3 — Possibly skip 4.2 entirely
If Stage 2 fully defers analysis tab compute to pointer-up, drag-time LOD never runs. Only 4.1 remains meaningful. Defer 4.2 until after Stage 2 ships and is measured.

---

## Stage 5 — Long-horizon improvements (optional)

Only pursue if Stages 1-4 don't deliver a satisfactory experience.

### 5.1 — Offload heavy analysis to a Web Worker
Distortion grid, vignetting sweep, and bokeh preview are pure functions over serializable inputs. Vite natively supports workers. Requires graceful SSR fallback (prerender must not invoke the worker path).

### 5.2 — Cross-panel analysis cache for comparison mode
Cache keyed by `(lensKey, focusT, zoomT, stopdownT)`. Rarely hits unless A==B lens, but useful when it does.

### 5.3 — Build-time precompute for static analysis
Vignetting at `stopdownT=0` / nominal focus could be baked at build time into a `*.precomputed.ts` artifact (**never** into `buildLens()` — CLAUDE.md forbids slider-dependent metrics there). High complexity; only if runtime perf still inadequate.

### 5.4 — Virtualize SVG ray layers
Single `<path>` with computed `d` instead of N `<polyline>`s. Only if Profiler shows SVG reconciliation (not JS compute) as dominant.

---

## Per-stage smoke test

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
npm run build   # confirm prerender still works (SSR path must not break)
npm run preview # manual smoke
```

## Perf regression test

New `__tests__/performance/sliderInteraction.test.ts`:
1. Render `<LensViewer />` with a representative lens.
2. Open analysis drawer (vignetting tab).
3. Spy on `computeVignettingCurve`.
4. Fire 30 `change` events on focus slider rapidly.
5. Fire `pointerUp`.
6. After short `act()` flush, assert `computeVignettingCurve` called at most 2×.

## Manual acceptance checklist (post-Stage 2)

- [ ] With drawer closed, scrubbing focus/aperture/zoom feels immediate on a 6-year-old laptop.
- [ ] With vignetting tab open, chart updates within one frame of releasing the slider.
- [ ] With bokeh overlay open, preview updates on release and holds last value during drag.
- [ ] Comparison mode ≤ 2× single-lens mode in compute cost.
- [ ] Prerendered pages contain final (not interactive-LOD) visuals — verify one route in `dist/` manually.

---

## Baselines

Record before/after measurements here as each stage ships.

### Baseline (pre-optimization)
_Lens:_ TBD · _Scenario:_ scrub focus 0→1 over 2 seconds, drawer closed · _Date:_ TBD
_Measurements:_ TBD

_Lens:_ TBD · _Scenario:_ scrub focus 0→1 over 2 seconds, vignetting tab open · _Date:_ TBD
_Measurements:_ TBD

### After Stage 1
_Date:_ TBD · _Measurements:_ TBD

### After Stage 2
_Date:_ TBD · _Measurements:_ TBD

(…continue per stage…)
