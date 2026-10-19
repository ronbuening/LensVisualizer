# Adding an Analysis Drawer Tab

Recipe for adding a new tab to the lens-viewer analysis drawer. Five registration points, all
enforced by the type system — if `npm run typecheck` passes, the wiring is complete.

## The Five Registration Points

1. **Tab id** — `src/types/state.ts`: add your id string to the `ANALYSIS_TAB_IDS` const array
   (near the top of the file). This drives the `AnalysisTabId` union and the `isAnalysisTabId()`
   guard, which also makes the tab automatically URL-shareable via the existing `tab` query param —
   no URL-state work needed.
2. **Tab label** — `src/components/layout/lensDiagram/analysisTabs.ts`: add
   `{ id: "yourTab", label: "YOUR TAB", description: "…" }` to `ANALYSIS_TABS` (labels are ALL
   CAPS; order in this array is display order). `description` is the one-sentence tooltip on the
   desktop dock button. The dock distributes analysis tabs across two rows and reserves the final
   column for a double-height ZOOM button (currently five analysis columns plus ZOOM).
3. **Display component** — new file `src/components/display/analysis/YourTab.tsx`. Copy the
   structure of an existing simple tab (`FocusBreathingTab.tsx` or `VignettingTab.tsx` are good
   models; `OpticalSummaryTab.tsx` shows the metric-row pattern via `AnalysisMetricRow` from
   `analysisUi.tsx`).
4. **Renderer** — `src/components/layout/lensDiagram/analysisTabRenderers.tsx`: add an entry to
   `ANALYSIS_TAB_RENDERERS`. It is a `Record<AnalysisTabId, AnalysisTabRenderer>`, so typecheck
   FAILS until you add your entry — this is the safety net.
5. **Movement support** — register its analysis sections in `AnalysisDrawerContent.tsx` and add
   new section ids to `analysisMovementSupport.ts`. Only register movement-aware support after
   fixed-sensor fixtures pass; otherwise the drawer suppresses the tab during active movement.

## What Your Renderer Receives

`AnalysisTabRendererContext` (defined in `analysisTabRenderers.tsx`):

- `L: RuntimeLens` — the runtime lens; pass it explicitly to any optics helper.
- `t: Theme` — theme tokens; never hardcode colors.
- `zPos: number[]` — current surface z positions.
- `preparedState: PreparedOpticalState` — the geometry snapshot for request construction.
- `analysisContext` — optional `AnalysisComputationContext`; its `request` owns the deferred snapshot. Reuse it for migrated helpers.
- `inputs` — `{ focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, dynamicEFL, fieldGeometry }`.

Only the ACTIVE tab renders (`ANALYSIS_TAB_RENDERERS[activeTab]` in `AnalysisDrawerContent.tsx`),
so per-tab computation cost is paid only while the tab is open. Compute inside `useMemo` keyed on
the prepared state / slider inputs you actually use.

## Rules

- Optics math and sampled-series orchestration live in a pure helper under
  `src/optics/analysis/<family>/`, taking `AnalysisRequest`. Expose migrated helpers through
  `src/optics/analysis.ts`; implementation leaves import lower-level sources directly.
  The component formats and renders. Summary/cardinals/breathing/group movement and spherical aberration/SA
  profile/blur character/best focus, field curvature/astigmatism/chromatic field-focus summary, coma,
  distortion, vignetting, pupil aberration, bokeh and chromatic LoCA/lateral color/fans use this path.
  The historical job-table names now dispatch centered requests.
- Reuse `analysisContext.request`, or memoize `createAnalysisRequest` from the supplied prepared
  state and every used control/aperture/EFL/field input. Memoize the context/result on that identity.
  Do not mix deferred geometry with live controls. The breathing series intentionally omits
  aberration control; preserve that input contract when reusing its chart pattern.
  Coma detail-field overrides use a distinct request with `sampling.comaDetailFieldFraction`;
  retain that fraction in memo dependencies so changing it updates the previews.
  Distortion's context forwards sampling to its curve while retaining separate grid defaults;
  preserve that distinction when reusing its two-result context pattern.
  Vignetting uses both aperture radii, field geometry and request sampling; its standalone request
  uses zero for the unused dynamic EFL. Keep survivor counts separate from absorption-weighted illumination.
  Pupils share one combined per-angle solve for entrance and exit profiles. Reuse the context request's sampling;
  standalone pupil requests leave sampling unset (17 samples) and use zero for unused EFL/aperture values.
  Keep field geometry in the memo dependencies and preserve scalar-domain entrance fallback and vector exit tracing.
  Bokeh reuses the context request or snapshots prepared controls and both aperture radii (zero unused EFL).
  Keep both aperture values in memo dependencies. Pair previews trace their own infinity/near layouts with
  request sampling and recomputed field geometry, retaining T2 best focus; moved bokeh still uses perspective focus.
  Chromatic summary, fans and field-focus bundle share one request/context. Retain field geometry and both apertures
  in request memo dependencies; only lateral color forwards the field geometry, while fans recompute it.
  Diagram LoCA preserves supplied surface z and obstruction-aware marginal fractions through an explicit options
  override. Keep intrinsic LoCA available in the moved frame without routing perspective chromatic through centered jobs.
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
