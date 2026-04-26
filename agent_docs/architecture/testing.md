# Testing Architecture

Read this for test layout, coverage expectations, shared helpers, and where to add focused regression coverage.

## Test Stack

- Vitest
- `@testing-library/react`
- TypeScript test files under `__tests__/`
- V8 coverage via `npm run test:coverage`

## Coverage Scope

Coverage configuration lives in `vite.config.js` and includes:

- `src/optics/**`
- `src/utils/**`
- `src/pages/**`
- `src/routes/**`
- `src/components/**`
- `src/comparison/**`

## Shared Test Helpers

Shared browser/router helpers live in `__tests__/testUtils.tsx`. They cover:

- Router mounting.
- Lens-context rendering.
- `matchMedia` mocking.
- localStorage seeding.
- `history.replaceState` mocking.

## What Tests Cover

Existing tests cover:

- Pure optics functions and edge cases.
- Lens build and data validation.
- Aberration, distortion, vignetting, pupil aberration, bokeh, and diagram geometry.
- Catalog/metadata utilities.
- Reducer, preferences, URL sync, feature flags, and page-theme hooks.
- Component smoke tests for pages, controls, display panels, analysis drawer, and comparison layout.
- Script regressions for metadata, route sync, lens-data helpers, sitemap/prerender support.

## Refactor Test Expectations

When refactoring:

- Add pure-function tests for shared math helpers before swapping multiple callers.
- Add component smoke tests when extracting shared UI wrappers or markdown renderers.
- Add equality tests when adding optional precomputed inputs to optics helpers.
- Add reducer guard tests when tightening string state into literal unions.
- Add script helper tests when changing metadata generation, route expansion, or git freshness lookup.

Run the normal gate before committing:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```
