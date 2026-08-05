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

### X2 — hash-safe /updates#entry deep links

- `UpdatesPage` now reads `useLocation().hash`: with no hash it keeps the original scroll-to-top; with a
  hash it decodes the fragment (malformed percent-encoding falls back to the raw string) and calls
  `scrollIntoView()` on the matching entry inside a `requestAnimationFrame` queued after commit, cancelled
  on cleanup. Effect is keyed on the hash so same-page navigation between entries re-fires it. The fix is
  local to the page — `main.tsx`'s GoatCounter subscription and other routes untouched, per the spec.
- Added the append-only warning to `agent_docs/changelog.md`: editing a shipped entry changes its public
  anchor and RSS GUID (`changelogEntryId` hashes `date|type|summary`).
- New `__tests__/src/pages/updatesPage.test.tsx` (5 cases): no-hash scroll-to-top, cold feed-link load
  asserting the *target's* `scrollIntoView` (identified via `this.id` in the mock), same-page hash
  navigation to a second entry, percent-encoded fragment decoding, and malformed-encoding survival.
- Changelog entry added (fix).

Verification: gate passed (233 files / 2780 tests).

### X3 — relationship map role="group" + keyboard-focus visibility

- `RelationshipMap`'s `<svg>` is now `role="group"` (aria-label kept) — descendants of `role="img"` are
  presentational, which could hide the interactive patent/party buttons from assistive tech.
- Both interactive `<g>` variants gained `onFocus`/`onBlur` mirroring the pointer-enter/leave handlers,
  so the existing stroke-width hover treatment doubles as the keyboard focus indicator.
- Tests: new "svg is a group" and focus/blur stroke-width cases in `relationshipMap.test.tsx`; the three
  `role="img"` queries in `relationshipMapPage.test.tsx` updated to `role="group"` with an accessible-name
  filter so unrelated implicit group roles cannot match.
- Changelog entry added (improvement).

Verification: gate passed (233 files / 2782 tests).

### X4 — nav chrome toggle/disclosure ARIA

- `PageNavBar`: both buttons gained `type="button"`; HC gained `aria-pressed={highContrast}`; the theme
  button gained an `aria-label` describing the cycle (`Theme: <slot>. Cycle theme`).
- `BreadcrumbBar`: settings trigger gained `type="button"`, `aria-expanded={settingsOpen}`,
  `aria-haspopup="true"`, and an `aria-label` (its narrow-viewport ⚙ glyph had no accessible name);
  the dropdown's HC/theme buttons got the same treatment as PageNavBar's.
- Deliberately did NOT put an `aria-label` on the HC buttons — the spec assigns labels only to the theme
  buttons, and an overriding label would break the existing `/HC/i` accessible-name queries.
- Tests: breadcrumb coverage test now asserts `aria-haspopup`/`aria-expanded` toggling and queries HC via
  `{ pressed: false }`; homepage render test clicks HC and asserts the pressed state flips.

Verification: gate passed (233 files / 2782 tests).
