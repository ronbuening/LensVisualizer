# Error Beacon, Analytics Privacy, and Shift/Tilt URL Clamps

## Summary

- Add production error observability via GoatCounter events (no new infrastructure), stop sending the
  query string with pageviews, and clamp adversarial `shift`/`tilt` URL params.

## Changes

- New `src/utils/errorBeacon.ts`: sends GoatCounter events on synthetic paths `/_error/<component-or-lens-key>`.
  Messages are sanitized (URLs, emails, and 40+-char tokens stripped, truncated to 120 chars); beacons are
  PROD-gated, deduped per path, and capped at 20 per session.
- Wired into `ErrorBoundary.componentDidCatch`, `PanelErrorBoundary.componentDidCatch` (uses the lens key as
  the path segment), and window `error` / `unhandledrejection` listeners installed from `src/main.tsx`.
- SPA pageview tracking in `src/main.tsx` now sends only `pathname`; the initial-load pageview in `index.html`
  gets a `window.goatcounter.path` callback that likewise drops the query string (slider/comparison state).
- `parseLensViewQuery` clamps `shift`/`tilt` to a hard envelope (`MOVEMENT_SHIFT_ENVELOPE_MM` = ±25 mm,
  `MOVEMENT_TILT_ENVELOPE_DEG` = ±15°, exported from `src/optics/lensMovement.ts`). Per-lens
  `perspectiveControl` ranges still clamp tighter at trace time via `clampLensMovement`.
- `vite.config.js` honors a `PORT` env var for the dev server (preview tooling); `.claude/launch.json` dev
  config gained `autoPort` so a busy 5173 no longer blocks preview.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — 187 files / 2267 tests passed (includes new `__tests__/src/utils/errorBeacon.test.ts` and
  clamp cases in `__tests__/src/utils/state/lensViewUrlState.test.ts`)
- Browser check: `/lens/canon-tse-90mm-f28l-macro?shift=1e12&tilt=-1e12` hydrates as shift 25 / tilt −15,
  sliders sit at per-lens limits (±12 mm / ±10°), diagram renders with no console errors.

## Follow-ups

- If a future lens declares movement ranges beyond ±25 mm / ±15°, widen the envelope constants alongside it.
- Once beacons accumulate, consider surfacing top `/_error/*` paths in a periodic audit.
