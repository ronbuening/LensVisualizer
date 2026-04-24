# File Organization 260423

## Summary
- Reorganized the `focusing-architectures` article series into a nested content folder without changing article routes.
- Made article and lens discovery recursive so both `src/content/` and `src/lens-data/` can be organized into nested folders.
- Preserved git-derived published dates for moved articles and future moved lens files before their rename commits land.

## Changes
- Moved the `focusing-architectures` markdown files into `src/content/focusing-architecture/`.
- Updated article loading and build metadata generation to support nested markdown content.
- Updated lens catalog loading and build metadata generation to support nested `*.data.ts` and matching `*.analysis.md` files under `src/lens-data/`.
- Added move-safe freshness fallback helpers so article slugs and lens keys retain their original publication dates across uncommitted file moves.
- Added a test TODO for a future focused regression around nested lens-data discovery and analysis stem matching.
- Refreshed README and authoring docs to describe the nested content and lens-data layout.

## Verification
- `npm run generate:metadata` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run typecheck` — passed
- `npm run test` — passed
- `npm run build` — passed

## Follow-ups
- Add a focused regression test for nested lens-data discovery and analysis stem matching once a safe fixture or helper extraction strategy is chosen.
