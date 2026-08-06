# Code Health Plan — Stage 6 (UI and URL consolidation)

## Summary

- Executed Stage 6 of `agent_docs/code-health-improvement-plan.md` in order: U1 → U2 → U3 → U4 → U5 → U6 → U7.
- Committed each migration or behavior step separately after focused coverage and the full typecheck, formatting, lint,
  and test gate.

## Changes

- U1: consolidated responsive media-query behavior behind deterministic SSR defaults and replaced two homepage
  JavaScript breakpoints with responsive CSS grids.
- U2: extended `StaticPageShell` with its SEO slot and `<main>` landmark, then migrated 14 compatible static pages.
  `HomePage` and `LensIndexPage` retain their specialized chrome as allowed by the plan.
- U3: promoted shared lens-entry and patent-party renderers while preserving source-order inventor attribution.
- U4: centralized panel cards, hidden labels, role chips, count suffixes, iOS-safe search inputs, and 25 catalog
  pluralization call sites.
- U5: shared Escape/outside-click dropdown dismissal across the portal primitive, compact relationship picker, and
  catalog suggestions, with expanded ARIA state.
- U6: extracted the local generic maker/mount/format filter-chip section without changing the lens-index test surface.
- U7: made optical configuration reducer-owned and URL-shareable through validated `cfg` state; configuration variants
  are independently selectable in compare routes without exposing unrelated hidden fixtures.

## Verification

- Full gate passed before every implementation commit; final Stage 6 suite: 243 files / 2,883 tests.
- `npm run build` — passed; 1,023 routes prerendered and all three RSS feeds generated.
- `npm run seo:audit` — passed; 0 errors, 0 warnings.
- U7 coverage includes codec round-trips, malformed/stale/cross-group rejection, first-render hydration, popstate,
  canonical reset, compare allow-listing, hidden-variant navigation, and compare-route reload.
- The in-app browser had no active browser instance for U1's optional narrow-viewport console spot-check; deterministic
  hydration coverage and the production prerender/build completed successfully instead.

## Follow-ups

- Optionally repeat the U1 narrow-viewport console spot-check when an in-app browser instance is available.
