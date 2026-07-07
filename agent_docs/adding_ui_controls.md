# Adding a UI Control (Slider / Toggle)

Recipe for adding controls to the lens viewer. Reuse the shared components in
`src/components/controls/` — do not hand-roll new range inputs or toggle rows.

## What Already Exists

`src/components/controls/`:

- `SliderControl.tsx` — the reusable slider: label, formatted value display, range input, min/max
  endpoint labels, optional collapsible description (`collapsible` + `expanded` +
  `onExpandedChange`), optional `action` node, and a standard disabled treatment
  (`opacity: 0.42` + `grayscale(1)` + `disabledReason`). Read its props interface before building
  anything — it likely already supports what you need.
- `RayToggles.tsx`, `CollapseButton.tsx`, `HelpTooltipButton.tsx`, `LensSelector.tsx` — reusable
  pieces; `DiagramControls.tsx` / `DiagramHeader.tsx` are where viewer controls are composed.
- Shared style constants come from `src/utils/style/styles.ts` (`SLIDER_LABEL`,
  `SLIDER_VALUE_BASE`, `sliderInput(t)`); use these rather than duplicating inline style objects.

## Wiring State

- Viewer state lives in the lens reducer (`src/utils/state/`); components get callbacks from the
  `useDispatchAdapters` hook (`src/components/hooks/useDispatchAdapters.ts`) rather than
  dispatching raw actions. Read that hook first: if an adapter for your state already exists,
  use it; otherwise add one there following its `on*Change` / `on*Toggle` naming.
- New reducer state means: action type in `src/types/state.ts` (UPPER_SNAKE_CASE, e.g.
  `SET_FOCUS_T` style), reducer case, initial-state default, adapter in `useDispatchAdapters`.
- Purely local UI state (an expanded flag, a hover) stays in component `useState` — don't put it
  in the reducer.
- If the value should survive reload or be shareable: localStorage preferences and URL state are
  separate systems — see `agent_docs/architecture/state-and-utilities.md` and
  `agent_docs/adding_url_state.md`. Note the precedent that `analysisDrawerOpen` is intentionally
  NOT persisted.

## Steps for a New Slider

1. Find where existing sliders are composed (`DiagramControls.tsx` or the relevant panel under
   `src/components/layout/`), and add a `SliderControl` there.
2. Provide `t` (theme), `compact`/`useSideLayout` (thread from the parent — they come from layout
   context), `label`, `displayValue` (format in the parent; keep `SliderControl` dumb),
   `value`/`step`/`min`/`max`, `onChange` from the dispatch adapter, and `minLabel`/`maxLabel`.
3. Disabled states: pass `disabled` + `disabledReason` instead of hiding the control.
4. Sliders that drive optics state should use the normalized 0..1 `t`-value convention like
   focus/zoom/aperture do — look at how an existing slider maps its value before choosing units.

## Verification

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

Manual: `npm run dev`, exercise the control in BOTH wide and narrow layouts (controls render
differently via `compact`/`useSideLayout`), and in all four themes if it introduces new colors
(see `agent_docs/theme_tokens.md`). Add a component smoke test per `agent_docs/testing_recipes.md`.
