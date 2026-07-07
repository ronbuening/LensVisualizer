# Adding a URL-Shareable View-State Field

Recipe for making a piece of lens-view state shareable in the URL. The single source of truth is
`src/utils/state/lensViewUrlState.ts` — read its header comment first.

## How the System Works

- Stable slider params (`focus`, `aberration`, `aperture`, `zoom`, `shift`, `tilt`) are always
  parsed and are handled individually — do not add new fields to that group without direction.
- Everything else is **v1-gated view state**: only honored when the URL carries `v=1`, so older
  clients silently ignore fields they don't know. `buildLensViewQuery()` sets `v=1` automatically
  when any view-state field is non-default (see `usesV1ViewState`).
- Boolean/simple fields are table-driven through `VIEW_STATE_FIELDS`
  (`lensViewUrlState.ts`, ~line 48). Hydration into reducer state iterates this table
  (`lensViewQueryToUrlState`), so table entries flow to the reducer with no extra plumbing.
- Non-boolean fields with custom encoding (like `analysisDrawerTab` → `tab`,
  `groupMovementMode` → `mv`) additionally need explicit parse/build branches — use those two as
  the worked examples in the file.

## Steps for a Simple Boolean Field (e.g. a new overlay open-state)

1. `src/utils/state/lensViewUrlState.ts`:
   - Add the key to the `LensViewQueryKey` union.
   - Add `{ key: "myOverlayOpen", default: false }` to `VIEW_STATE_FIELDS`.
   - Add the same default to `DEFAULT_URL_STATE`.
   - In `parseLensViewQuery()`: parse with `parseBooleanParam(params, "myo")` (pick a short,
     unused param key; existing keys: `el`, `a_el`, `b_el`, `gm`, `chr`, `ptz`, `ad`, `tab`, `mv`)
     and assign only when not `undefined`, matching the existing pattern.
   - In `buildLensViewQuery()`: destructure the new option and `params.set("myo", "1")` when true.
   - Include it in the `usesV1ViewState` disjunction so `v=1` is emitted.
   - In `buildLensViewQueryFromState()`: read it from the matching state slice
     (`state.panels.myOverlayOpen`).
2. `src/types/state.ts`: add the field to `URLState` and to the panels slice, with the same default
   in the initial-state factory. Grep for an existing sibling (e.g. `petzvalOverlayOpen`) and touch
   every location that grep hits — reducer action, initial state, hydration.
3. Tests: find the existing lens-view URL tests
   (`grep -rn "parseLensViewQuery" __tests__`) and add: (a) round-trip parse→build→parse identity,
   (b) the field is dropped when `v` is missing or ≠ 1.

## Steps for a Custom-Encoded Field

Same as above, but skip `VIEW_STATE_FIELDS` and instead mirror how `analysisDrawerTab` is handled:
validated parse (`isAnalysisTabId(tab)`-style guard in `src/types/`), explicit build branch that
omits the param at its default value, and an explicit line in `lensViewQueryToUrlState()`.

## Rules

- Params are omitted at default values — URLs stay minimal. Follow that convention.
- Validate everything parsed from the URL (type guards, clamping) — URLs are user input.
- Never rename existing param keys; shared links in the wild depend on them.
- Comparison mode uses `a_`/`b_`-prefixed variants for per-panel fields — check whether your field
  needs per-panel treatment (`selectedElementIdA/B` is the model).

## Verification

```bash
npm run typecheck && npm run test
```

Manual: `npm run dev`, toggle the state, confirm the URL updates; reload the URL in a fresh tab and
confirm the state restores; strip `v=1` from the URL and confirm the field is ignored gracefully.
