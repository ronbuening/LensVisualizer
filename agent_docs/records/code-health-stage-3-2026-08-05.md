# Code Health Plan — Stage 3 (verified user-visible and API defects)

## Summary

- Executes Stage 3 of `agent_docs/code-health-improvement-plan.md` in the documented order:
  X1 → X2 → X3 → X4 → X5 → X6, X7 → X8 → X9, X10 → X11 → X12 → X13.
- One commit per item; the full gate
  (`npm run typecheck && npm run format:check && npm run lint && npm run test`) runs before each commit.
- Stage 2 record: `agent_docs/records/code-health-stage-2-2026-08-04.md`.

## Changes

### X1 — badge tint backgrounds render (invalid hex alpha)

- Added `withAlpha(color, alphaHex)` to `src/utils/style/styles.ts`: expands `#rgb` to `#rrggbb` before
  suffixing the alpha, rewrites `rgba()`/`rgb()` alpha in place, and passes unknown color forms through
  unchanged.
- Replaced the four invalid `` `${color}22` `` call sites: `ChangelogList` type badges, `ArticleCard` tag
  chips (both branches), `SeriesCard` series badge, and `ElementInspector`'s ASPH chip.
- Converted `CHANGELOG_TYPE_COLORS` and `TAG_COLORS` to 6-digit hex (same colors); exported `TAG_COLORS`
  so the palette-shape test can see it. Updated the color column in `agent_docs/changelog.md` to match.
- New unit tests in `styles.test.ts`: `#rgb`, `#rrggbb`, `rgba()`, `rgb()`, and pass-through cases all
  yield valid CSS (`^#[0-9a-f]{8}$` or `rgba(`), and every palette literal is `#RRGGBB`.
- Visual verification is by the unit-level output assertions (computed background strings are valid CSS
  in all forms the four themes use); no screenshots taken in this non-interactive session.
- Changelog entry added (fix).

Verification: gate passed (232 files / 2775 tests after readme regeneration; the doc-drift readme check
initially flagged the new imports, resolved by `npm run generate:readmes` — diffs committed with the item).
