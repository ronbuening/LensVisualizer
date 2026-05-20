# Testing Architecture

Read this for test layout, coverage expectations, shared helpers, and where to add focused regression coverage.

## Test Stack

- Vitest
- `@testing-library/react`
- TypeScript test files under `__tests__/`, with source-facing tests mirrored under `__tests__/src/`
- V8 coverage via `npm run test:coverage`

## Coverage Scope

Coverage configuration lives in `vite.config.js` and includes:

- `src/optics/**`
- `src/utils/**`
- `src/pages/**`
- `src/routes/**`
- `src/components/**`
- `src/comparison/**`

## Test Layout

Most tests mirror the files they cover:

- `src/components/display/AberrationsPanel.tsx` -> `__tests__/src/components/display/AberrationsPanel.test.tsx`
- `src/optics/internal/exactSurfaceTrace.ts` -> `__tests__/src/optics/internal/exactSurfaceTrace.test.ts`
- `src/pages/lensIndex/catalog.ts` -> `__tests__/src/pages/lensIndex/lensIndexCatalog.test.ts`

Keep tests that cover generated metadata, build scripts, or public assets in the matching top-level test area:

- `__tests__/src/generated/`
- `__tests__/scripts/`
- `__tests__/public/`

## Shared Test Helpers

Shared browser/router helpers remain at `__tests__/testUtils.tsx`. They cover:

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
