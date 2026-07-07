# Adding an Analysis Drawer Tab

Recipe for adding a new tab to the lens-viewer analysis drawer. Four registration points, all
enforced by the type system — if `npm run typecheck` passes, the wiring is complete.

## The Four Registration Points

1. **Tab id** — `src/types/state.ts`: add your id string to the `ANALYSIS_TAB_IDS` const array
   (near the top of the file). This drives the `AnalysisTabId` union and the `isAnalysisTabId()`
   guard, which also makes the tab automatically URL-shareable via the existing `tab` query param —
   no URL-state work needed.
2. **Tab label** — `src/components/layout/lensDiagram/analysisTabs.ts`: add
   `{ id: "yourTab", label: "YOUR TAB" }` to `ANALYSIS_TABS` (labels are ALL CAPS; order in this
   array is display order).
3. **Display component** — new file `src/components/display/analysis/YourTab.tsx`. Copy the
   structure of an existing simple tab (`FocusBreathingTab.tsx` or `VignettingTab.tsx` are good
   models; `OpticalSummaryTab.tsx` shows the metric-row pattern via `AnalysisMetricRow` from
   `analysisUi.tsx`).
4. **Renderer** — `src/components/layout/lensDiagram/analysisTabRenderers.tsx`: add an entry to
   `ANALYSIS_TAB_RENDERERS`. It is a `Record<AnalysisTabId, AnalysisTabRenderer>`, so typecheck
   FAILS until you add your entry — this is the safety net.

## What Your Renderer Receives

`AnalysisTabRendererContext` (defined in `analysisTabRenderers.tsx`):

- `L: RuntimeLens` — the runtime lens; pass it explicitly to any optics helper.
- `t: Theme` — theme tokens; never hardcode colors.
- `zPos: number[]` — current surface z positions.
- `preparedState: PreparedOpticalState` — pass to `*ForState2()` analysis helpers.
- `analysisContext` — optional `AnalysisComputationContext`; forward it if your helper accepts it.
- `inputs` — `{ focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, dynamicEFL, fieldGeometry }`.

Only the ACTIVE tab renders (`ANALYSIS_TAB_RENDERERS[activeTab]` in `AnalysisDrawerContent.tsx`),
so per-tab computation cost is paid only while the tab is open. Compute inside `useMemo` keyed on
the prepared state / slider inputs you actually use.

## Rules

- Optics math lives in a pure helper under `src/optics/analysis/` (named
  `computeYourThingForState2(state, ...)` by convention), NOT in the component. The component
  formats and renders.
- Slider-dependent values come from `preparedState`/`inputs` at render time — never bake them into
  `buildLens()`.
- Folded/mirror lenses: check how existing tabs guard folded systems before computing (several
  analyses are guarded until fixture-backed validation exists — see CLAUDE.md Core Working Rules).
  Follow the same guard pattern; render an explanatory placeholder rather than wrong numbers.
- Default tab is `"aberrations"`; don't change that without direction.

## Verification

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

Then `npm run dev`, open a lens page, open the drawer, click your tab, and drag focus/zoom/aperture
sliders to confirm live updates. Test files mirror the source path:
`__tests__/src/components/display/analysis/YourTab.test.tsx` (see `agent_docs/testing_recipes.md`).
Add a changelog entry per `agent_docs/changelog.md` for user-visible tabs.
