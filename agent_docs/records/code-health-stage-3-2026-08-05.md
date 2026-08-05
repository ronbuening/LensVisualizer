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

### X5 — shared scrollMarginTop under the sticky navbar

- Exported `STICKY_NAV_SCROLL_MARGIN = 88` from `src/utils/style/pageStyles.ts`.
- Applied `scrollMarginTop` to every anchor-target section: the country and per-assignee sections on
  `PatentsIndexPage`, the group sections on `AuthorPage`, and all seven anchored section/subgroup sites
  in `LensIndexResults` (maker, focal section + focal subgroup, patent party, year, mount, format).
- `LinkListSidebar`'s default `offsetTop = 88` and `ArticleTOC`'s `ARTICLE_SCROLL_MARGIN_TOP` now derive
  from the shared constant. `ThemedMarkdown`'s inline 88s were left as the spec scoped them (article
  pipeline already correct); they can move to the constant during U-series consolidation.

Verification: gate passed (233 files / 2782 tests).

### X6 — heading fixes

- Focused relationship-map heading is now an `<h1>` keeping its 1.3rem styling, so `#focus=` views have
  an intact document outline; `relationshipMapPage.test.tsx` asserts a level-1 heading in both states.
- Adopted `H1_STYLE` on the 13 pages that re-typed the literal (Articles, Author, AuthorsIndex, Format,
  FormatsIndex, Maker, MakersIndex, Mount, MountsIndex, RelationshipMap intro, PatentsIndex, Search,
  Updates). Intentional variants are spreads: `marginBottom: "1.5rem"` on the three index pages,
  `"0.35rem"` on AuthorPage.
- `AuthorsIndexPage`: controls div gained `role="group"` (making its existing aria-label effective); the
  non-interactive Biography badge span lost its ignored `aria-label` (visible text "Biography" is the
  content), and `searchPages.test.tsx` now queries by text.

Verification: gate passed (233 files / 2782 tests).

### X7 — pinned catalog collation

- New `src/utils/catalog/collation.ts` exporting `catalogCollator = new Intl.Collator("en")` with the
  hydration-mismatch rationale documented.
- Mechanically replaced all 38 bare `.localeCompare(` calls across `src/utils/catalog` (relationshipGraph,
  lensCatalog, authorAssignees, authorCatalog, searchCatalog, patentCatalog) and `src/pages`
  (RelationshipMapPage, MakersIndexPage, MountPage, AuthorsIndexPage, lensIndex/{useLensIndexFilters,
  urlState, catalog}) with `catalogCollator.compare`. The verification grep over those two trees now
  returns zero (patent numbers keep their pinned numeric collator).
- Left out of scope: `relationshipMap/layout.ts` (audit-verified healthy, client-only), the
  RelationshipEntityPicker suggestion sort (client-only), benchmark report ISO-timestamp sorts, and the
  glass-scan test sorts (ASCII names; G8's shared lib touches those).
- Updated the five test files that derived expected order via default-locale `localeCompare`
  (assigneeCatalog, lensCatalog, relationshipGraph, authorCatalog, searchPages) to the shared collator so
  they can actually catch regressions under any test-runner locale.

Verification: gate passed (233 files / 2782 tests).

### X8 — publication dates UTC everywhere

- `parseGitLogDates` now derives the calendar date from the UTC instant
  (`timestamp.toISOString().slice(0, 10)`) instead of slicing the committer-local `%cI` string, so site
  cards, JSON-LD, sitemap, and RSS `pubDate` all agree on one day. `fallbackDate` in the generator was
  already UTC-today and is now consistent rather than divergent — no change needed there.
- New test case pinning the evening-EDT boundary: `2026-08-03T21:14:12-04:00` → publishedOn `2026-08-04`.
- Measured impact on regeneration: 1172 of 3124 publishedOn/lastModified fields shift forward one day
  (all evening-ET commits). Spot-check: `canon-ef-14mm-f28-l` card date moved 2026-07-18 → 2026-07-19,
  matching its `publishedAt` of `2026-07-19T02:51:49Z`; current-feed items' pubDate calendar dates equal
  their card dates.
- Changelog entry added (fix).

Verification: gate passed (233 files / 2783 tests); `npm run build` succeeds (1014 routes prerendered,
sitemap + feeds written).

### X9 — patent jurisdiction labels

- Extended `JURISDICTION_LABELS` with the seven spec'd authorities: EP (European Patent Office),
  DD (East Germany (GDR)), AT (Austria), SU (Soviet Union), IT (Italy), NL (Netherlands), CA (Canada).
- New walk-the-real-data guard in `patentCatalog.test.ts`: every visible summary's
  `patentJurisdiction(...).code` must have a curated label (label ≠ raw code), with a message pointing at
  the map; plus direct pins for EP/DD/SU label strings.

Verification: gate passed (233 files / 2784 tests).
