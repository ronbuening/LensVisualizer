# Accessibility Gaps — Diagram Naming, Dialogs, Reduced Motion, Keyboard

## Summary

- Fix four verified accessibility gaps: unnamed primary diagram SVG, overlay modals without dialog
  semantics/focus management, no `prefers-reduced-motion` support, and keyboard-inaccessible clickables.

## Changes

- `DiagramSVG` renders `role="img"`, a computed `aria-label`, and `<title>`/`<desc>` naming the lens,
  element count, and currently visible ray layers.
- New `src/components/hooks/useModalDialog.ts`: Escape close, initial focus, Tab focus trap, and focus
  restore (handles SVG-element openers like the Petzval badge). `OverlayModal` and `PanelOverlay` now
  render `role="dialog"` + `aria-modal` and take an `ariaLabel` prop; all seven call sites pass labels.
- New `src/utils/usePrefersReducedMotion.ts` (wraps `useMediaQuery`); gates the AnalysisDrawer slide,
  BreadcrumbBar chevron rotation, diagram flash fade, diagram background cross-fade, and overlay
  backdrop fades. Remaining ungated transitions are short color/opacity fades on small controls.
- Fixed `useMediaQuery` stale-value bug: the effect now re-reads `mql.matches` when the query changes.
- Keyboard access for all previously mouse-only clickables: diagram element paths (`role="button"`,
  `tabIndex`, Enter/Space, `aria-pressed`, focus mirrors hover, out of tab order in zoom/pan mode),
  Petzval badge, LoCA inset, and the f-stop quick-select spans + effective-aperture toggle divs in
  `DiagramControls` and the comparison module (converted to real buttons, visuals unchanged).
- Intentionally unchanged: the aspheric-overlay click-to-probe canvas (continuous coordinate probe with
  no discrete targets; its zoom/mode controls are already buttons).

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — 186 files / 2271 tests passed
- Live browser check on `/lens/nikon-reflex-nikkor-500mm-f8-new`: diagram labeled, badge keyboard-opens
  the Petzval dialog, Escape closes, focus restores to the badge, element `aria-pressed` toggles.

## Follow-ups

- Consider a keyboard path for the aspheric comparison coordinate probe (step controls or
  `role="application"`).
- Remaining ~150 color/opacity fade declarations could be gated behind `usePrefersReducedMotion` if a
  stricter no-motion policy is ever wanted.
