# Lens Data Maker Folders 260424

## Summary
- Reorganized all production lens data and analysis companions into canonical maker-slug folders under `src/lens-data/`.
- Added a build-time organizer that moves stray root-level lens files into maker folders before metadata generation.
- Kept build metadata freshness anchored to original lens addition dates across uncommitted moves by preserving the tracked-path fallback logic.

## Changes
- Added `scripts/lens-data-lib.mjs` to share maker-slug derivation, lens identity extraction, move planning, organizer execution, and lens freshness collection.
- Added `scripts/organize-lens-data.mjs` plus the `npm run organize:lens-data` script, and wired it into `npm run generate:metadata` and `npm run build`.
- Moved all `*.data.ts` and matching `*.analysis.md` lens assets into `canon`, `fujifilm`, `leica`, `nikon`, `olympus`, `ricoh`, `vivitar`, `voigtlander`, and `carl-zeiss`.
- Updated moved lens files to import `../../types/optics.js`.
- Replaced the nested-discovery TODO in `__tests__/lensCatalog.test.ts` with a concrete regression and added `__tests__/lensDataScripts.test.ts` for organizer/freshness coverage.
- Updated direct test imports and lens-authoring docs to reflect the new nested maker-folder layout.

## Verification
- `npx vitest run __tests__/lensCatalog.test.ts __tests__/lensDataScripts.test.ts` — passed
- `npm run generate:metadata` — passed
- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed
- `npm run build` — passed

## Notes
- `npm run build` still emits the pre-existing `%VITE_GOATCOUNTER_URL%` env warning, a large-chunk warning from Vite, and the existing `<Navigate>` SSR warning during prerender; none blocked the build.
