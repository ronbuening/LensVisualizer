# Article Scroll Reset

## Summary
- Fix article-route navigation so article pages and the article archive open at the top during SPA transitions.

## Changes
- Added client-side scroll resets in `src/pages/ArticlePage.tsx` and `src/pages/ArticlesPage.tsx`.
- Added regression coverage in `__tests__/pageRenders.test.tsx` for both article routes.
- Updated the homepage changelog and architecture notes so the behavior change is documented alongside the implementation.

## Verification
- `npx vitest run __tests__/pageRenders.test.tsx` — passed
- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed
- `npx eslint src/pages/ArticlePage.tsx src/pages/ArticlesPage.tsx` — passed

## Follow-ups
- If more static pages need consistent SPA scroll restoration, consider extracting the pattern into a shared page-level hook.
