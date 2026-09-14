# Adding a URL-Shareable View-State Field

Recipe for making a piece of lens-view state shareable in the URL. This doc is the canonical statement of the three
coordinated edits; `src/utils/state/lensViewUrlState.ts` is the code-level source of truth — read its header comment.

## How the System Works

- Stable slider params (`focus`, `aberration`, `aperture`, `zoom`, `shift`, `tilt`) are always parsed and handled
  individually; do not add new fields to that group without direction.
- Everything else is **v1-gated view state**, honored only when the URL carries `v=1`, so older clients silently ignore
  fields they do not know. `buildLensViewQuery()` emits `v=1` automatically when any view-state field is non-default
  (the `usesV1ViewState` disjunction).
- Hydration is table-driven: `lensViewQueryToUrlState()` and the reducer's `APPLY_URL_VIEW_STATE` branch both iterate
  `VIEW_STATE_FIELDS`, so a table entry reaches the reducer with no extra plumbing.
- `configurationKey` → `cfg` deliberately stays out of the table: generic parsing enforces only a bounded key syntax,
  while `useLensState` and `useURLSync` validate group membership against the canonical lens before hydration.

## The Three Coordinated Edits

Every new field touches exactly these three places. Using `myOverlayOpen` → param `myo` as the example:

1. **Table entry** — `src/utils/state/lensViewUrlState.ts`: add `{ key: "myOverlayOpen", default: false }` to
   `VIEW_STATE_FIELDS`, add the key to the `LensViewQueryKey` union, and add the same default to `DEFAULT_URL_STATE`.
2. **State types** — `src/types/state.ts`: add `myOverlayOpen` to `URLState` (optional) and to `PanelsSlice`, and to the
   `PanelField` union when it is a boolean toggled through `SET_PANEL_EXPANDED`. Then seed it in `createInitialState`
   (`src/utils/state/lensReducer.ts`) as `urlState.myOverlayOpen ?? false`, mirroring `petzvalOverlayOpen` — grep that
   sibling and touch every location the grep hits.
3. **Parse/build branch** — back in `lensViewUrlState.ts`: in `parseLensViewQuery()` parse with
   `parseBooleanParam(params, "myo")` and assign only when not `undefined`; in `buildLensViewQuery()` destructure the
   option, `params.set("myo", "1")` when true, and add it to the `usesV1ViewState` disjunction; in
   `buildLensViewQueryFromState()` read `state.panels.myOverlayOpen`. Pick a short, unused param key — existing keys:
   `el`, `a_el`, `b_el`, `gm`, `chr`, `ptz`, `ad`, `tab`, `mv`, `cfg`.

### Custom-Encoded Fields

A non-boolean field (compare `analysisDrawerTab` → `tab` and `groupMovementMode` → `mv`) skips the `VIEW_STATE_FIELDS`
entry in step 1 and instead needs a validated parse (an `isAnalysisTabId(tab)`-style guard in `src/types/`), an explicit
build branch that omits the param at its default, and an explicit line in both `lensViewQueryToUrlState()` and the
reducer's `APPLY_URL_VIEW_STATE` branch.

## Tests

Extend `__tests__/src/utils/state/lensViewUrlState.test.ts` with (a) round-trip parse→build→parse identity and (b) the
field being dropped when `v` is missing or ≠ 1.

## Rules

- Params are omitted at default values so URLs stay minimal.
- Validate everything parsed from the URL (type guards, clamping) — URLs are user input.
- Never rename existing param keys; shared links in the wild depend on them.
- Comparison mode uses `a_`/`b_`-prefixed variants for per-panel fields (`selectedElementIdA/B` is the model); decide
  whether your field needs per-panel treatment. Optical configuration is the counterexample: single-lens URLs use `cfg`,
  while compare routes carry each variant in `/compare/:slugA/:slugB` and never serialize `cfg`.

## Verification

```bash
npm run typecheck && npm run test
```

Manual: `npm run dev`, toggle the state, confirm the URL updates; reload the URL in a fresh tab and confirm the state
restores; strip `v=1` from the URL and confirm the field is ignored gracefully.
