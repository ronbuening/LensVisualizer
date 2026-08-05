# Code Health Improvement Plan — August 2026

Prioritized refactoring and stability backlog covering the July 2026 expansion (PRs #591–#644: patent
attribution/browsing, glass-catalog buildout, relationship map, RSS/canonical URLs, diffractive
optics, TC configuration switching, odd-order aspheres, ~50 new lenses). Findings come from a
**2026-08-04 audit** of six independently reviewed subsystems (patent/catalog, glass catalog,
relationship map + content pipeline, optics engine, cross-cutting UI, tests/docs). Every file/line
reference below was verified against the working tree on that date. Line numbers drift — re-locate
by symbol name if a line doesn't match, and stop if the code no longer matches the description
(the task may already be done).

This plan complements, and does not overlap, `FEATURE_ADDITION_PLAN.md` (features),
`EFFICIENCY_IMPROVEMENT_PLAN.md` (E/P/B-series; audited 2026-07-06, before most of July's code
landed), and `TRACE_MODEL_IMPROVEMENT_PLAN.md` (projection/trace model). Overlaps were checked and
excluded during the audit.

## How To Use This Plan

- Execute the **Implementation Order** below from top to bottom. It is dependency-ordered so each
  branch lands after the tests, shared seams, and generator baselines it relies on.
- The detailed item specifications retain their N/X/D/U/C/G identifiers for branch and history
  tracking. Their specification sections are grouped only to keep related reference material easy
  to find; those groups are not an execution order.
- Pick ONE item per branch. Do not combine items. Do not fix unrelated things you notice — file
  them here instead.
- Every item ends with the same gate:
  `npm run typecheck && npm run format:check && npm run lint && npm run test`.
  Items touching routes, metadata, SEO, or generated reports add `npm run build` or the named
  generator; the item's Verification section says which.
- Items marked **[changelog]** are user-visible and need an entry in
  `src/utils/content/changelogData.ts` per `agent_docs/changelog.md`.
- Follow `agent_docs/code_conventions.md` and `agent_docs/commenting_guide.md`. Match surrounding
  style; do not restyle code you pass through.
- When done: check the box here and add a line to your branch record per
  `agent_docs/record_keeping.md`.
- Item sections follow the shared per-item template defined in `FEATURE_ADDITION_PLAN.md`
  ("Per-Item Template"). Small (S) items compress it — Evidence, Steps, Verification, Out of scope
  — but never omit Verification.

Effort: **S** ≤ half day · **M** 1–2 days · **L** 2+ days.
Status: `[ ]` open · `[x]` done · `[-]` rejected (keep entry, note why).

## Implementation Order

This sequence is authoritative. Finish each numbered stage before starting the next; within a
stage, follow the listed order unless an item's own verification uncovers a blocker.

### Stage 1 — Establish the repository and generator baseline

1. **D1** — correct CLAUDE.md/agents.md commands and project map.
2. **N10** — add the doc-drift guard against that corrected baseline.
3. **D2 → D3 → D4** — bring architecture, deployment, and shipped-plan records current.
4. **D7 → D9** — make metadata parsing loud and remove the unsafe legacy git helper before
   later publication-order work.
5. **D8** — remove the dead changelog component before page-shell consolidation touches the same
   area.
6. **D10** — settle glass naming/report output before byte-diff-gated glass refactors.
7. **D11** — refresh the stale `src/**/readme.md` folder documentation and wire regeneration into
   the metadata/build workflows.
   Filed during D8 execution rather than by the original audit. It belongs in this stage because it
   is repository/generator baseline work, and it goes last within the stage so the sweep captures
   D7–D10's structural edits in one pass instead of being invalidated by them.

### Stage 2 — Land regression nets before behavior or structure changes

1. **D12** — make generated folder-readme drift fail CI before further source changes accumulate.
2. **N1 → N2 → N3 → N4** — catalog parity, URL contracts, and configuration invariants.
3. **N6 → N7 → N8 → N9** — trace goldens and direct catalog/content coverage.
4. **G12** — add the folded-diffractive fixture and generalized-trace assertions before changing
   the shared interaction code.

The aspheric schema item deliberately moves out of this stage: single-sourcing the coefficient
schema changes runtime math implementation and therefore belongs after the golden trace net.

### Stage 3 — Fix verified user-visible and API defects

1. **X1 → X2 → X3 → X4 → X5 → X6** — visual, navigation, accessibility, and
   heading/anchor fixes.
2. **X7 → X8 → X9** — deterministic catalog ordering and public metadata labels/dates.
3. **X10 → X11 → X12 → X13** — settle tokenizer semantics before scan reuse, then close
   the chromatic API trap and relationship-map failure boundary.

### Stage 4 — Consolidate engine foundations and report generators

1. **G1** — centralize normalization caching so subsequent engine work uses one prepared lens.
2. **N5** — single-source the aspheric coefficient schema and derive validation/math/tests from it.
3. **G2 → G3 → G4 → G5 → G6 → G7** — consolidate trace interaction, paraxial,
   chromatic, and resolver primitives in dependency order.
4. **G8 → G9** — move scans onto the settled shared primitives, then remove compatibility types
   and dead exports.
5. **G10 → G11** — perform guarded trace-loop readability work and harden audit scripts.
6. **D5** — slim generated reports only after their generators and shared scan library have
   stabilized.

### Stage 5 — Consolidate the catalog data layer

1. **C6 → C4 → C7** — settle shared metadata/ref types, text/hash helpers, and role vocabulary.
2. **C2 → C1 → C3** — consolidate grouping and patent aggregation, then precompute the author
   directory over the shared records.
3. **C5 → C9 → C10** — optimize search and single-source publication/feed ordering contracts.

### Stage 6 — Consolidate UI on the settled data and state seams

1. **U1 → U2** — establish the shared responsive hook, then migrate compatible static pages.
2. **U3 → U4** — extract patent-attribution components and shared visual vocabulary.
3. **U5 → U6** — standardize dropdown behavior and the repeated filter template.
4. **U7** — add URL-shareable optical configuration and compare reachability last, after catalog,
   shell, and URL-state contracts are stable.

Items D6, C8, and G13 are rejected below and are not part of the implementation sequence.

## Maintainer Decisions (recorded 2026-08-04)

Answers from the maintainer that shape this plan. Do not re-litigate these during execution:

1. **Deployment:** Cloudflare Pages is production; the GitHub Pages workflow
   (`.github/workflows/deploy.yml`) is a mirror/backup. Docs should describe the dual setup (D3).
2. **Generated reports/benchmarks:** slim generated report payloads through D5, but keep everything
   agents read committed. D6's benchmark premise was later rejected; do NOT gitignore reports or
   benchmark records.
3. **Patent/author subsystem:** will keep expanding — consolidate aggressively in Stages 5–6.
4. **Engine internals:** behavior-preserving refactors are in scope when gated by the golden trace
   suite, full test run, and generated-report byte-diffs (Stage 4).
5. **Badge tints:** fix forward — make the designed tints actually render (X1).
6. **Publication dates:** standardize on UTC everywhere (X8).
7. **TC configuration state:** make it URL-shareable and reachable in compare mode (U7).
8. **`changelogData.ts`:** keep the monolith — split rejected (see Rejected section).

## Verified Healthy — Do NOT "Fix" (audited 2026-08-04)

The audit explicitly confirmed these are in good shape; do not spend branches on them:

- **Relationship-map layout engine** (`src/components/relationshipMap/layout.ts`): pure, no module
  state, no `Math.random`/`Date`, determinism directly tested. Implementation matches
  `agent_docs/records/relationship-map-plan.md` with its one deviation self-documented.
- **Reference-safe glass matching** (#623) is enforced coherently: the single filter in
  `src/optics/glassCatalog.ts` (~line 408) plus `assessCatalogGlassCompatibility`'s dual-line
  table; all 15+ scan call sites pass `element.indexReference` correctly.
- **Glass tolerances are not duplicated** — all scans import `GLASS_ND_TOLERANCE` /
  `GLASS_VD_TOLERANCE` from `glassCatalog.ts`.
- **`DUPLICATE_CODE6_PRECEDENCE`** is fully guard-tested (`dispersion.test.ts` ~202–219) — mimic
  this pattern for new guards (N7).
- **Wavelength handling in live paths**: diagram (`rayTrace.ts` ~119–123) and analysis
  (`trace/rayAdapters.ts` ~420–428) chromatic paths both set `indexAtSurface` AND `wavelengthNm`
  with the channel in the cache key. (The one exception is the dead export fixed by X12.)
- **Lens-data validation** is strict, centralized in `validateLensData.ts`, and runs on every lens
  (visible and hidden) at test time via `buildLens`.
- **Audit scripts reuse engine math** — `audit-patent-figure`/`audit-surface-probe` import
  `conicPolySag`/`sagSlopeRaw`/`validateLensData` directly; no reimplementation (only the loader
  and arg handling need work — G11).
- **Route error handling**: every route has `RouteErrorBoundary` with a deduped, sanitized beacon;
  new pages' synchronous catalog reads correctly need no loading states; unknown slugs redirect.
- **CI git history**: shallow-checkout protection (`assertFullGitHistory`,
  `assertFreshnessDiversity`) plus `fetch-depth: 0` in both workflows is well-defended.

---

## N-Series Specifications — Safety Nets and Foundational Invariants

These add missing regression nets around code that already shipped. N5 is the exception: it now
single-sources a runtime coefficient schema and therefore executes in Stage 4 after the trace
goldens, rather than with the test-only items.

### N1. Author/assignee patent-count parity test (the #639 bug class)

- [x] Effort: S · Impact: high · Risk: none (test-only)

PR #639 fixed a mismatch between build-time `patentCount` (baked into `build-metadata.json` by
`scripts/author-metadata.mjs`) and the patents actually listed by `patentsForParty` at runtime. The
fix duplicated the fallback-identity logic in two languages with a comment as the only sync
mechanism — `scripts/author-metadata.mjs` ~57–61 (`lens.patentNumber?.trim() || `lens:${lens.key}``)
mirrors `src/utils/catalog/authorCatalog.ts` ~92. The only runtime parity assertion covers ONE
author of 375 (`__tests__/src/utils/catalog/searchCatalog.test.ts` ~32–40).

Steps:
1. New test `__tests__/src/utils/catalog/partyPatentParity.test.ts`. Reference to mimic: the
   all-strata loop style of `__tests__/src/utils/catalog/authorAssignees.test.ts` ~18–25.
2. For every entry in `AUTHORS` and `ASSIGNEES`: assert
   `patentsForParty(name, role).length === entry.patentCount` and that the union of record lens
   keys equals `entry.lensKeys`. (Measured cost of 375 full calls: ~11 ms — fine for a test.)

Verification: gate passes; deliberately breaking the fallback identity in `authorCatalog.ts`
(e.g. drop the `lens:` prefix) makes the new test fail.
Out of scope: fixing the duplication itself (that is C1).

Correction (2026-08-04, from execution): the stated verification does not hold and was not
achievable. All 504 visible lenses currently carry an explicit `patentNumber`, so the
`lens:${key}` fallback branch is never reached — dropping the prefix, or even `continue`-ing on a
missing number, leaves every parity assertion green. What the walk does catch is any divergence in
the aggregation identity that real data exercises: keying per lens instead of per patent fails 15
parties immediately (verified). The generator half of the fallback convention is covered with
synthetic input in `__tests__/scripts/authorMetadata.test.ts`; the runtime half cannot be injected
while `patentsForParty` reads module-level `LENS_SUMMARIES`, and is C1's to fix.

### N2. Lens-index URL parser/serializer and return-path validator tests

- [x] Effort: S · Impact: high · Risk: none

`src/pages/lensIndex/urlState.ts` — modified by #604 and #635 — has zero tests for
`parseLensIndexViewMode` (~54), `parseLensIndexUrlState` (~95), `serializeLensIndexUrlState`
(~135), `isSameCustomFilter` (~158), and `isValidLensLibraryReturnPath` (~172, an
open-redirect-adjacent navigation validator). The viewer's equivalent has a full suite
(`__tests__/src/utils/state/lensViewUrlState.test.ts` — reference to mimic).

Steps:
1. New `__tests__/src/pages/lensIndex/urlState.test.ts`: round-trip parse↔serialize for each field,
   malformed-query fallbacks to defaults, and an accept/reject table for
   `isValidLensLibraryReturnPath` (accept `/lenses?...`; reject `https://evil.example`, `//host`,
   paths outside the library).

Verification: gate passes.

### N3. Pin the public URL contracts: group-anchor ids and author slugs

- [x] Effort: S · Impact: med-high · Risk: none

`src/pages/lensIndex/groupAnchors.ts` (all 8 exports, ~10–34) generates `#group-…` fragment ids
that author/patent pages deep-link to; `scripts/author-metadata.mjs` (`authorSlugBase`,
`stableHash`, ~12–36) generates `/authors/:slug` URLs. Neither has a test; both use an FNV-1a hash
whose silent drift would relocate every collision-suffixed slug and anchor.

Steps:
1. New `__tests__/src/pages/lensIndex/groupAnchors.test.ts`: exact-string assertions for
   representative inputs — diacritics ("Günter Klemt"), spaces, slashes, the fallback buckets.
2. Extend `__tests__/scripts/authorMetadata.test.ts`: pin exact slugs for the tricky real names
   (e.g. "Josef Weiß" → `josef-weiss`, "Hiltrud Ebbesmeier née Schitthof") and pin one
   `stableHash` output value.

Verification: gate passes. These pins are prerequisites for C4 (single-sourcing the helpers).

### N4. Optical-configuration group invariants + Nikon TC-IN/TC-OUT surface equality

- [x] Effort: S · Impact: med · Risk: none

Nothing validates `opticalConfiguration` groups across files: a hidden variant whose `groupKey`
matches no visible partner becomes unreachable (excluded by `lensCatalog.ts` ~37); duplicate
`order` values and multi-visible groups are undetectable. The TC-IN file
(`src/lens-data/nikon/NikonAFSNikkor180400mmf4ETC14TCIn.data.ts`, 599 lines) re-transcribes 45
surfaces stated to be "identical to Table 8" with nothing pinning them equal, and no test traces it
(hidden keys are built but never ray-traced in CI — see also N6).

Steps:
1. New catalog-invariant test (mimic `__tests__/src/utils/catalog/lensSummaries.test.ts` style):
   every configuration group has ≥2 members, unique `order`s, exactly one visible member.
2. New `__tests__/src/lens-data/nikon/nikon180400TcParity.test.ts`: for surfaces 1–45 assert `R`,
   infinity-focus `d`, `nd`, and `sd` of TC-IN equal TC-OUT.

Verification: gate passes; editing one shared surface in only one file fails the parity test.

Correction (2026-08-05, from execution): "assert `R`, infinity-focus `d`, `nd`, and `sd` … equal"
does not hold as written, and `vd` is not a `SurfaceData` field. Two divergences inside surfaces
1-45 are correct, not drift: surface 45's `d` collapses 41.203 → 2 mm because that is the air space
the converter drops into, and the variable gaps agree at infinity focus while differing at close
focus because each configuration solves close focus separately. Both are now asserted explicitly
rather than skipped. Labels 47-49 and 52-55 exist in both files but describe *different* physical
surfaces (Table 8 vs Table 10 renumbering), so parity must stop at 45.

### N5. Single-source the aspheric coefficient schema; derive sag, slope, validation, and tests

- [ ] Effort: M · Impact: high · Risk: med (runtime math refactor; golden/benchmark gated)

The A3–A20 coefficient set is hand-synchronized across four expansions: the type
(`src/types/optics.ts` ~148–172), validator lists (`src/optics/validateLensData.ts` ~37–55), the
unrolled sag polynomial (`src/optics/internal/surfaceMath.ts` ~56–79), and the separately unrolled
derivative (~101–124). Adding a test with its own hard-coded coefficient list would create a fifth
copy and would still miss a future coefficient omitted from both math paths.

This is no longer a test-only safety-net item. Execute it in Stage 4, after N6 has expanded the
golden trace suite, and keep it on its own branch.

Steps:
1. Add a small shared schema module under `src/types/` containing one ordered descriptor list for
   `K` and every A3–A20 term. Each polynomial descriptor records its key, power, parity, and whether
   the field is required. Derive the required/optional `AsphericCoefficients` keys from this list
   and re-export the type from `src/types/optics.ts` to preserve existing imports.
2. Make `validateLensData.ts` derive its required, optional, and known-key checks from the same
   descriptor list. No validator-local coefficient array remains.
3. Make `conicPolySag` and `sagSlopeRaw` evaluate polynomial terms from the ordered descriptors,
   preserving the existing even/odd accumulation order and the separately handled conic `K`
   term. Do not combine the conic-domain clamp with polynomial evaluation.
4. Add descriptor-driven term-isolation tests: every polynomial descriptor is set nonzero by
   itself and checked against its analytic sag and derivative. Add a combined-term central-
   difference sweep only inside the valid conic domain, using an adaptive step plus combined
   absolute/relative tolerance. Test the intentional invalid-domain clamp separately; do not take
   a finite difference across the clamp boundary.
5. Measure `npm run benchmark:optics-rendering` before/after because sag/slope are hot trace
   functions. If descriptor iteration causes a material regression, keep the descriptor as the
   source of truth but compile active ordered term evaluators once per normalized surface rather
   than restoring hand-maintained lists.

Verification: gate passes; N6 golden values are unchanged unless a reviewed pre-existing math bug
is exposed; validator tests cover every descriptor; zeroing any one sag or slope contribution
fails its term-isolation case; benchmark change is within noise or documented and approved.

### N6. Golden-value trace coverage for July's new physics; trace hidden configuration members

- [ ] Effort: S · Impact: med · Risk: none

`__tests__/src/optics/exactTraceGoldenValues.test.ts` (~42–78) pins 3 designs — none diffractive,
none odd-asphere. The catalog trace smoke (`exactTraceCatalog.test.ts` ~136) iterates only visible
keys, so `nikon-…-tc-in` (59 surfaces with the converter inserted) is built but never traced in CI.

Steps:
1. Append two `GOLDEN_LENSES` entries: the Nikon 500mm f/5.6 PF (diffractive) and one odd-asphere
   lens from the `agent_docs/odd-asphere-backfill.md` set, using the capture-and-pin procedure
   documented in the test file.
2. Extend the smoke loop to include hidden `opticalConfiguration` members, alongside the existing
   `HIDDEN_FOLDED_TRACE_CASES` pattern (reference to mimic).

Verification: gate passes; new golden entries carry pinned numeric values.

### N7. Glass catalog completeness guard for `GLASS_CATALOG_SOURCE_ORDER`

- [ ] Effort: S · Impact: high · Risk: none

`src/optics/glassCatalogData.ts` hand-maintains a 463-name order list (~21–485). A shard entry
missing from the list silently never enters `RAW_CATALOG` (~593) — the glass just vanishes from
resolver and reports. The reverse direction is guarded (`entryByName` throws, ~580–584); this
direction is not. The only size test is a stale floor (`dispersion.test.ts` ~178, `>= 414`).

Steps:
1. In `__tests__/src/optics/dispersion.test.ts` (reference to mimic: the
   `DUPLICATE_CODE6_PRECEDENCE` guard at ~202–219): assert
   `new Set(GLASS_CATALOG_SOURCE_ORDER).size === GLASS_CATALOG_SOURCE_ORDER.length`, and assert
   every entry name across all exported shard arrays appears in the order list (exact set
   equality both ways).

Verification: gate passes; removing any order-list line fails the guard.
Out of scope: deleting the order list entirely (possible follow-up, but it changes generated-report
iteration order — decide separately).

### N8. Direct tests for the glass resolution precedence criteria

- [ ] Effort: S · Impact: med · Risk: none

`explainCompatibleGlassResolution` criteria (`src/optics/glassCatalog.ts` ~67–76, decided
~432–489): `source-priority`, `abbe-residual`, and `duplicate-code-precedence` have no direct unit
test; the multi-name test asserts a disjunction (`dispersion.test.ts` ~730 accepts any of four
criteria). `glassAmbiguityScan` asserts explain ≡ runtime pick but only over annotations that
currently exist in lens data.

Steps:
1. Add a `describe("resolution criteria")` block to `dispersion.test.ts` (mimic the vendor-context
   test at ~712–724) with one synthetic string per criterion: a name+code tie for
   `source-priority`; a crafted `abbe-residual` pair; two duplicate-code rows with identical
   coefficients (e.g. `H-K9L`/`H-K9LGT`, code 517642) pinning `canonical-name-order`; a pinned
   `token-order` outcome.

Verification: gate passes; each criterion string appears in exactly one new assertion.

### N9. Unit-test backfill: changelog helpers, author/assignee slug lookups, search results

- [ ] Effort: S · Impact: med · Risk: none

Three small July-adjacent modules power public routes with no direct tests:
`src/utils/content/changelogHelpers.ts` (`formatDisplayDate` ~19, `groupChangelogByDate` ~36 —
feed `/updates`, homepage, and RSS; there is no `__tests__/src/utils/content/` directory at all);
`getAuthorBySlug` (`authorCatalog.ts` ~50), `getAssigneeBySlug`/`getAssigneeByName`
(`assigneeCatalog.ts` ~25/30), and the `"assignee"` branch of `patentsForParty` (~74);
`CatalogSearchResults.tsx` (only reached indirectly via page flows).

Steps:
1. New `__tests__/src/utils/content/changelogHelpers.test.ts`: grouping order, id stability, fixed
   date-format assertion; add a `stripFrontmatter` case for `homepageContent.ts` ~95.
2. New `__tests__/src/utils/catalog/authorCatalog.test.ts` + `assigneeCatalog.test.ts`: slug
   round-trip over the real generated metadata, unknown-slug → `undefined`, one
   `patentsForParty(name, "assignee")` ordering assertion.
3. New `__tests__/src/components/search/catalogSearchResults.test.tsx`: mixed and empty result
   sets (mimic patterns in `searchPages.test.tsx`).

Verification: gate passes.

### N10. Extend the doc-drift guard to commands, project map, and script inventory

- [x] Effort: S · Impact: med-high · Risk: none

`__tests__/docDrift.test.ts` checks only (a) `agents.md` ≡ CLAUDE.md and (b) inline-backtick paths
exist. It never scans fenced code blocks, so the Project Map and Commands blocks are unguarded —
which is why CLAUDE.md said "React 19" for four weeks of React 18 runtime, and why four npm
scripts are missing today (D1 fixes the content; this item keeps it fixed).

Steps:
1. Extend `docDrift.test.ts`: (1) every `npm run X` token appearing anywhere in CLAUDE.md must
   exist in `package.json` scripts; (2) every non-`pre*` script in `package.json` must appear in
   CLAUDE.md's Commands fence; (3) every top-level directory of `src/` and `src/components/` must
   appear in the Project Map fence.
2. Land D1 on its own preceding branch so the new assertions start green.

Depends on: D1.
Verification: gate passes; deleting a Commands line from CLAUDE.md fails the test.

---

## X-Series Specifications — User-Visible and API Bug Fixes

Real defects found by the audit. Each is a small branch with a test where the N-series doesn't
already cover it.

### X1. Render the badge tint backgrounds (invalid hex alpha) **[changelog]**

- [ ] Effort: S · Impact: med · Risk: low

The ~13%-alpha tints behind changelog type badges, article tag chips, and series badges have never
rendered: the code appends a hex alpha to 3-digit hex or `rgba()` colors, producing invalid CSS
that browsers silently drop.

Evidence (all verified):
- `src/components/content/ChangelogList.tsx:61` — `` background: `${CHANGELOG_TYPE_COLORS[entry.type]}22` `` with a 3-digit palette (`src/utils/content/changelogHelpers.ts:3-9`: `"#58c"`, `"#c65"`, …) → `"#58c22"` invalid.
- `src/components/content/ArticleCard.tsx:47` — same idiom; BOTH branches invalid (3-digit `TAG_COLORS` and `t.toggleActiveBg`, which is `rgba(...)` in all four themes).
- `src/components/content/SeriesCard.tsx:42` — `` `${t.toggleActiveBg}22` `` always invalid.
- `src/components/display/ElementInspector.tsx:187` — `` `${t.asphStroke}22` `` (`asphStroke` is `rgba(...)`) invalid.
- Working reference to mimic: `` `${t.sliderAccent}18` `` in `src/utils/style/styles.ts` ~204 — valid because that token is 6-digit hex.

Maintainer decision: fix forward — the tints should appear.

Steps:
1. Add `withAlpha(color: string, alphaHex: string): string` to `src/utils/style/styles.ts`
   (expand `#rgb` → `#rrggbb` + suffix; for `rgba(r,g,b,a)` return `rgba(r,g,b,<alphaHex/255>)`).
2. Replace the four broken call sites with `withAlpha(...)`. Convert `CHANGELOG_TYPE_COLORS` and
   `TAG_COLORS` to 6-digit hex while there.
3. Unit test: `withAlpha` outputs for `#rgb`, `#rrggbb`, and `rgba()` inputs all match
   `^#([0-9a-f]{8})$|^rgba\(` and parse; assert every palette literal matches `#RRGGBB`.
4. Visually check `/updates`, an article card, and a series card in all four themes.

Verification: gate passes; new unit test; screenshots or manual check noted in the branch record.
Out of scope: promoting the badge palette to theme tokens (file under D-series follow-up if
wanted; requires `agent_docs/theme_tokens.md` four-variant procedure).

### X2. Make `/updates#entry` RSS deep links hash-safe **[changelog]**

- [ ] Effort: S · Impact: med · Risk: low

The #644 changelog feed links to `/updates#<entryId>` (`scripts/generate-rss-feeds.mjs` ~221), but
`src/pages/UpdatesPage.tsx:16-18` unconditionally calls `window.scrollTo({top: 0})` on mount,
undoing the browser's native anchor scroll. The earlier proposal to move all scrolling into
`src/main.tsx`'s pathname-only GoatCounter subscription was unsafe: hash-only navigation is not a
pathname change, the subscription can run before a lazy route commits, and it would define an
unreviewed back/forward restoration policy for every route.

Steps:
1. Keep this fix local to `UpdatesPage`. Read `useLocation().hash`; when it is empty, retain the
   page's existing scroll-to-top behavior. When present, decode the fragment safely and, after the
   page commit, call `scrollIntoView()` on the matching entry instead of calling `scrollTo(0, 0)`.
   Cancel any queued animation-frame callback during cleanup.
2. Do not change the GoatCounter subscription in `main.tsx`, the article-page effects, or unrelated
   route scroll behavior in this item.
3. Add one sentence to `agent_docs/changelog.md`: shipped changelog summaries are append-only —
   editing one changes its public anchor and RSS GUID (`changelogEntryId` hashes
   `date|type|summary`).
4. Add page tests for a cold `/updates#<real-entry-id>` render, same-page hash navigation, an
   encoded fragment, and the no-hash scroll-to-top case. Assert the target's `scrollIntoView`, not
   merely the absence of `window.scrollTo`.

Verification: gate passes; manually cold-load one feed URL and follow a second entry link while
already on `/updates`; both targets become visible inside the changelog's scroll container.
Out of scope: site-wide scroll restoration. Add that only with a router-level design covering
PUSH/REPLACE/POP navigation, lazy-route commit timing, and saved-position behavior.

### X3. Relationship map SVG: `role="group"` + keyboard-focus visibility **[changelog]**

- [ ] Effort: S · Impact: med · Risk: low

Found independently by two reviewers. `src/components/relationshipMap/RelationshipMap.tsx:98` sets
`role="img"` on the `<svg>` while its children are interactive `role="button" tabIndex={0}` `<g>`
nodes (~161–176 patents, ~211–226 parties) — ARIA makes descendants of `img` presentational, so
AT may drop them. Hover highlighting is pointer-only (`onPointerEnter/Leave`); keyboard users get
no focus indication. (This faithfully implements the plan's M4 spec — a spec flaw, not drift.)

Steps:
1. Change the `<svg>` to `role="group"` (keep `aria-label`).
2. Add `onFocus={() => setHoveredNodeId(node.id)}` and
   `onBlur={() => setHoveredNodeId((cur) => (cur === node.id ? null : cur))}` beside the existing
   pointer handlers on both interactive `<g>` variants, so the stroke-width hover treatment
   doubles as the focus indicator.
3. Extend `__tests__/src/components/relationshipMap/relationshipMap.test.tsx`: svg has role
   `group`; focusing a node raises its strokeWidth.

Verification: gate passes; Tab across nodes shows visible highlight.

### X4. Shared nav chrome: toggle/disclosure ARIA attributes

- [ ] Effort: S · Impact: med · Risk: low

The early-July a11y pass (commit 25314099) set the standard the new pages follow (`aria-pressed`
on toggles, `aria-expanded` on disclosure triggers), but the two nav bars rendered on every page
missed it: `src/components/layout/PageNavBar.tsx:73` (HC button — no `aria-pressed`, no
`type="button"`; theme button ~77 likewise) and `src/components/layout/BreadcrumbBar.tsx` ~230–254
(settings trigger — no `aria-expanded`/`aria-haspopup`; HC/theme buttons ~267–276).

Steps:
1. Add `type="button"` and `aria-pressed={highContrast}` to both HC buttons; `aria-label`
   describing the theme cycle on both theme buttons; `aria-expanded={settingsOpen}` +
   `aria-haspopup="true"` on the BreadcrumbBar settings trigger. Reference to mimic:
   `HelpTooltipButton.tsx:102`.
2. Extend a layout test with `getByRole("button", { pressed: … })` assertions.

Verification: gate passes.

### X5. Anchor targets under the sticky navbar: shared `scrollMarginTop`

- [ ] Effort: S · Impact: med · Risk: low

`PageNavBar` is sticky (`~52–54`, `zIndex: 100`). Direct loads of `/patents#patent-country-us`
etc. use native fragment scroll and hide the heading under the bar. The article pipeline already
solved this with `scrollMarginTop: 88` (`ThemedMarkdown.tsx` ~52/67/82; `ArticleTOC.tsx` ~42), and
`LinkListSidebar` hand-offsets with a private `88` (~58–65).

Steps:
1. Export `STICKY_NAV_SCROLL_MARGIN = 88` from `src/utils/style/pageStyles.ts`.
2. Add `scrollMarginTop: STICKY_NAV_SCROLL_MARGIN` to the anchor-target sections:
   `PatentsIndexPage.tsx` ~186–191 and ~207–218, `AuthorPage.tsx` ~266–270, and the six
   `<section id=…>` sites in `LensIndexResults.tsx` (~76 and siblings).
3. Point `LinkListSidebar` and `ArticleTOC`'s private `88`s at the constant.

Verification: gate passes; cold-load `/patents#<country-anchor>` shows the heading below the bar.

### X6. Heading fixes: focused relationship map h1; adopt `H1_STYLE`; drop ineffective aria-labels

- [ ] Effort: S · Impact: low-med · Risk: low

`RelationshipMapPage.tsx` ~116–137: in the focused state the top heading is an `<h2>` — no `<h1>`
exists in that branch, so every `#focus=` view has a broken outline. Separately `H1_STYLE`
(`src/utils/style/pageStyles.ts` ~11–16) is used by exactly one page while 13 pages re-type the
literal with drifting margins. `AuthorsIndexPage.tsx` ~124–127 has `aria-label` on a plain `<div>`
(ignored without a role) and ~214 on a non-interactive `<span>`.

Steps:
1. Make the focused-map heading an `<h1>` styled as today (the element matters, not the size).
2. Adopt `H1_STYLE` across the pages that re-type it (add a `marginBottom` override parameter if
   the variants are intentional).
3. Give the controls div `role="group"` or drop its `aria-label`; drop the span's.
4. Assert `getByRole("heading", { level: 1 })` in both map states in `relationshipMapPage.test.tsx`.

Verification: gate passes.

### X7. Pin catalog collation to a fixed locale (hydration-mismatch hazard)

- [ ] Effort: S · Impact: med · Risk: low

28 bare `.localeCompare(` calls sort prerendered content (`authorCatalog.ts` ~114/119/158,
`patentCatalog.ts` ~129–131/171/174, `authorAssignees.ts` ~23/40, `AuthorsIndexPage.tsx` ~59–60,
`lensIndex/catalog.ts`, …). Prerender sorts under Node's `en`; a visitor whose locale collates
ö/ü after z (sv/fi/da/nb) re-sorts differently at hydration → React hydration mismatch on
`/authors`, `/authors/:slug`, `/patents`. The catalog has 7 diacritic author names today. Only
patent numbers already use a pinned collator (`patentCatalog.ts` ~63 — reference to mimic).

Steps:
1. Export a shared pinned collator (e.g. `catalogCollator = new Intl.Collator("en")`) from a small
   `src/utils/catalog/collation.ts` (or next to `patentNumberCollator`).
2. Mechanically replace bare `.localeCompare(` in the catalog subsystem's comparators and the two
   page-level sorts with `catalogCollator.compare`.
3. Note: page tests derive expected order with the same default-locale `localeCompare`, so they
   cannot catch regressions — update them to use the shared collator too.

Verification: gate passes; `grep -rn "\.localeCompare(" src/utils/catalog src/pages | wc -l`
drops to ~0 (patent-number collator remains).

### X8. Publication dates: UTC everywhere **[changelog]**

- [ ] Effort: S · Impact: low-med · Risk: low-med (some displayed dates shift by one day)

`parseGitLogDates` (`scripts/build-metadata-lib.mjs` ~60–69) keeps the committer-LOCAL calendar
date as `publishedOn` (shown on site cards, JSON-LD, sitemap) while `publishedAt` is UTC (drives
RSS `pubDate`). An evening-EDT commit shows Aug 3 on the site and Aug 4 in the feed. Also
`fallbackDate` (`generate-build-metadata.mjs` ~235) is UTC-today, inconsistent with the local
convention. Maintainer decision: UTC everywhere.

Steps:
1. Derive `on: timestamp.toISOString().slice(0, 10)` from the UTC instant in `parseGitLogDates`.
2. Add a `%cI`-with-negative-offset case to `__tests__/scripts/buildMetadataHelpers.test.ts`
   asserting the UTC date wins.
3. Regenerate metadata; spot-check one evening-ET commit's card date shift and note it in the
   branch record + changelog entry.

Verification: gate passes; `npm run build` succeeds; RSS `pubDate` calendar date equals the site
card date for the spot-checked entries.

### X9. Complete the patent jurisdiction label map + real-data guard

- [ ] Effort: S · Impact: low-med · Risk: low

`patentCatalog.ts` ~50–59 labels CH/CN/DE/FR/GB/JP/US/WO only; any other authority falls back to
the raw code as a prerendered page heading ("DD"). `lensPatentMetadata.ts` ~44 already recognizes
`EP`; the corpus's history makes DD/AT/SU/IT/NL/CA plausible next.

Steps:
1. Extend `JURISDICTION_LABELS` with EP, DD, AT, SU, IT, NL, CA.
2. Add a walk-the-real-data assertion (in `patentCatalog.test.ts`): every visible summary's
   `patentJurisdiction(...).code` has a curated label (mimic `assertPatentAssigneeValidity`'s
   report-then-throw shape if preferred at build time instead).

Verification: gate passes.

### X10. Glass tokenizer: decimal-boundary guards + one shared `decodeCode6`

- [ ] Effort: S · Impact: med · Risk: low-med

The runtime tokenizer's bare `\d{6}` alternative (`src/optics/glassCatalog.ts:275`) has no
digit/decimal boundary guards: `"Crown 1.516330 index note"` tokenizes to `["516330"]` — 19 lens
annotations carry 6-decimal indices, producing phantom code tokens that pollute resolution
explanations and the unresolved-token queue (`agent_docs/glass-catalog-buildout.md` ~760 chases
one such artifact). The scans already solved this with lookaround guards
(`sixDigitGlassCodeScan.test.ts` ~183 — reference to mimic). Separately, the scans' three private
code decoders (`1 + nd/1000`, gate `<400||>1100`) mishandle nd≥2.0 codes like `001255` that the
runtime decodes correctly (`glassCatalog.ts` ~231–233).

Steps:
1. Add `(?<![\d.])` / `(?![\d.])` guards around the `\d{6}` alternative in `glassTokens`.
2. Export `decodeCode6(code: string)` from `glassCatalog.ts` implementing the `<300 → 2.x` rule;
   point the three scan decoders at it (`glassRelabelCandidatesScan` ~58–68,
   `glassRelabelByLensScan`, `glassCoverageOpportunitiesScan` ~259–267).
3. Tests: decimal-adjacent false-positive cases (the `nd=1.720467` string resolves no phantom) and
   `decodeCode6("001255")` ≈ 2.001/25.5.

Verification: gate passes; `npm run generate:glass-reports` then
`git diff --stat agent_docs/generated` — review the diff: expected effect is phantom tokens
disappearing from unresolved/ambiguity reports; investigate anything else.
Gotchas: `agent_docs/gotchas.md:46` — "The six-digit and glass-coverage-opportunities scans skip
their rewrite when the untracked local `patents/` PDF inventory is empty" — regenerate from a
checkout with `patents/` populated.

### X11. Align `unresolvedGlassScan` with the real resolver tokenizer

- [ ] Effort: S · Impact: med · Risk: low

`__tests__/src/optics/unresolvedGlassScan.test.ts` ~37–45 filters candidate tokens through a
vendor-prefix whitelist written before the Hikari-era expansion — unresolved `J-`, `Q-`, `M-`,
`MC-`, `D-`, `PBH/PBL`, `TAC/LAC/FD…` tokens never reach the report that drives catalog-expansion
priorities; its tokenizer also splits `TAFD40L-W`-shaped names differently than the resolver.

Steps:
1. Export `glassTokens` from `glassCatalog.ts` (module-private today, ~274).
2. Replace the scan's `candidateTokens` with: tokenize via `glassTokens`, keep tokens that failed
   to resolve and contain a digit; drop the prefix whitelist.
3. Regenerate and review newly surfaced rows.

Depends on: X10 (tokenizer guards land first so the report doesn't fill with decimal artifacts).
Verification: gate passes; `npm run generate:glass-reports`; diff of
`unresolved-glass.generated.md` only ADDS rows (whitelist removal cannot remove legitimate ones).

### X12. Defuse the `traceEngineRayChromatic2` wavelength trap

- [ ] Effort: S · Impact: med · Risk: low

`src/optics/chromatic/chromaticTrace.ts:45-55` sets per-channel glass indices but not
`wavelengthNm`, so any caller gets diffractive phase power at d-line while glass disperses per
channel — the exact mixed state the diffractive plan forbids. It currently has ZERO callers (only
a `compat.ts` re-export), so it is a loaded API trap rather than a live bug.

Steps:
1. Either delete the export (and its `compat.ts` ~261 re-export) if nothing needs it, or add
   `wavelengthNm: CHANNEL_WAVELENGTH_NM_2[channel]` beside the resolver — mimic the correct
   pattern in `trace/rayAdapters.ts` ~426–427.
2. If kept: test tracing a phase surface through it at R vs B, asserting different bend.

Verification: gate passes; `grep -rn "traceEngineRayChromatic2" src __tests__` shows either no
hits or the fixed implementation plus its test.

### X13. Wrap the relationship map in `PanelErrorBoundary`

- [ ] Effort: S · Impact: low-med · Risk: low

The most algorithmically complex new UI renders bare inside `RelationshipMapPage.tsx` ~152–159;
any render throw escalates to the route boundary and blanks the whole page including the picker
that would let the user recover. `PanelErrorBoundary` exists and is used by
`LensDiagramPanel.tsx:324` (reference to mimic).

Steps:
1. Wrap `<RelationshipMap …>` (and optionally `PatentDetailCard`) in `PanelErrorBoundary`,
   passing an attributable context key (e.g. `lensKey={graph.center.id}`).
2. Throw-child test per `__tests__/src/components/errors/errorBoundaries.test.tsx` pattern.

Verification: gate passes; test shows picker still renders when the map throws.

---

## D-Series Specifications — Docs and Repository Hygiene

CLAUDE.md is the agent contract; the audit found the entire July catalog subsystem invisible from
it. These are cheap, safe, and compound with every future agent task.

### D1. CLAUDE.md: missing commands, project-map entries, build description (+ agents.md sync)

- [x] Effort: S · Impact: med-high · Risk: low

CLAUDE.md's Commands fence omits `generate:feeds`, `generate:holiday-branding`,
`audit:dependencies`, `benchmark:optics-rendering`; describes `build` without its RSS step; and
the Project Map omits `src/components/search/` and `src/benchmarks/`.

Steps:
1. Add the four missing command lines; append ", RSS feeds" to the `build` comment.
2. Add `  search/ - Catalog search box + results list` under `src/components/` and
   `src/benchmarks/ - optics/render benchmark harness (npm run benchmark:optics-rendering)` at top
   level.
3. Apply the byte-identical edit to `agents.md` — `docDrift.test.ts` enforces equality.

Verification: gate passes (docDrift is part of `npm run test`).

### D2. Architecture docs: document the July catalog/search APIs

- [x] Effort: S · Impact: med · Risk: low

`agent_docs/architecture/state-and-utilities.md`'s catalog table (~92–110) is missing all eight
July modules (`authorCatalog`, `patentCatalog`, `assigneeCatalog`, `authorAssignees`,
`authorBiographies`, `searchCatalog`, `relationshipGraph`, `lensPatentMetadata`, plus
`lensSummaries`). `agent_docs/architecture/public-functions.md` (~107–128) documents none of the
new stable APIs (`searchCatalog`, `AUTHORS`, `patentsForParty`, `PATENTS`, `espacenetPatentUrl`,
`relationshipGraph`, …) that 5+ pages consume.

Steps:
1. One table row per missing module in state-and-utilities.md.
2. A "Search and patent-attribution APIs" block in public-functions.md mirroring the existing
   format.

Verification: gate passes (path-existence half of docDrift covers the new refs).

### D3. Document the real deployment topology (Cloudflare production + GitHub Pages mirror)

- [x] Effort: S · Impact: med · Risk: low

Maintainer decision: Cloudflare Pages is production; `.github/workflows/deploy.yml` (GitHub Pages)
is a mirror/backup. Docs currently say only "Cloudflare Pages"; the repo carries both platforms'
artifacts (`public/CNAME` for GH Pages; `public/_headers`/`_redirects` are Cloudflare-only).

Steps:
1. In `agent_docs/workflow.md` Deployment section: describe both targets, state Cloudflare is
   canonical production, and note explicitly that `_headers` security headers apply ONLY on
   Cloudflare — the GH Pages mirror serves without them (canonical URLs pointing at
   surfaceandstop.com mitigate duplicate-content SEO).
2. One-line touch-up in CLAUDE.md's Verification section if wording implies a single platform
   (+ agents.md sync).

Verification: gate passes.

### D4. Move `relationship-map-plan.md` to records; fix stale plan references

- [x] Effort: S · Impact: low · Risk: low

The relationship-map plan is marked "SHIPPED 2026-07-22" but CLAUDE.md indexes it as a live
implementation plan. Two more stale records found: `TRACE_MODEL_IMPROVEMENT_PLAN.md` "Current
State" still describes a legacy vertex-plane mode "retained in traceMode.ts" — that file no longer
exists; the diffractive plan promises `__tests__/src/optics/math/diffractivePhase.test.ts` which
was never created (coverage actually lives in `opticsEngineMath.test.ts` ~15–89).

Steps:
1. `git mv agent_docs/relationship-map-plan.md agent_docs/records/relationship-map-plan.md`;
   update the CLAUDE.md index line to "shipped implementation record (2026-07-22)" (+ agents.md),
   then update every remaining repo reference to the moved path, including this plan's
   Verified Healthy note.
2. Delete the traceMode paragraph from TRACE_MODEL_IMPROVEMENT_PLAN.md.
3. Correct the test-location sentence in `agent_docs/diffractive-phase-surfaces-plan.md`.

Verification: gate passes (docDrift validates moved path references).

### D5. Slim the largest generated reports (keep committed)

- [ ] Effort: M · Impact: high · Risk: low-med

Maintainer decision: keep everything agents read committed; shrink payloads. Regenerated reports
account for ~110 MB of git blob history: `sellmeier-coverage.generated.md` 28.6 MB across 156
versions; `lens-mount-svg-specifications.md` 25.9 MB across 18 versions (2.1 MB per version);
six-digit scans ~30 MB combined; `glass-ambiguities.generated.md` 793 KB current.

Steps (one report per commit, verifying consumers after each):
1. For each of the four largest reports, split output into a committed summary (aggregates,
   actionable queues, per-glass/per-mount rollups) and collapse bulk per-row detail: e.g.
   sellmeier-coverage lists per-lens-per-surface rows the docs never cite — aggregate per glass
   with counts and one example locator; the mount-SVG spec embeds full path data — replace with
   dimensions + element counts + a content hash, since diffable geometry lives in `src/mounts/`.
2. Before changing each report, `grep -rn` its filename across `agent_docs/` and `scripts/` to
   list what actually consumes which sections; preserve those sections verbatim.
3. Update `agent_docs/README.md`'s generated-report index to describe the new shapes.
4. Regenerate everything: `npm run generate:glass-reports && npm run generate:mirror-reports &&
   npm run generate:mount-svgs`.

Verification: gate passes;
`find agent_docs/generated -type f -size +300k -print` returns no committed file; scan tests still
pass in a checkout WITHOUT `patents/` (deterministic-skip behavior preserved —
`agent_docs/gotchas.md:46`). This reduces the current checkout and future blob growth; it does not
reclaim the historical blobs while history rewriting remains out of scope.
Out of scope: history rewrite (separate decision, not urgent); gitignoring anything.
Rollback: revert branch; regenerate.

### D7. Loud failures for silently dropped articles

- [x] Effort: S · Impact: med · Risk: low

`generate-build-metadata.mjs` ~198 silently `return null` for any `src/content/**/*.md` missing
`slug`/`title` frontmatter; the single-line-regex parser (~104–121) drops fields on stray
indentation. With 41 content files, a typo means an article never publishes anywhere (site, feeds,
sitemap) with zero signal. Reference to mimic: the loud collect-then-throw style of
`assertFreshnessDiversity` (`build-metadata-lib.mjs` ~242–254).

Steps:
1. Collect files that parse to no slug/title and fail the build listing them (allow an explicit
   opt-out marker if a draft convention is wanted — check with `git log` whether any current file
   relies on being skipped before choosing warn vs throw).
2. Move `collectArticles`/`parseFrontmatterContent` into `build-metadata-lib.mjs` so they become
   unit-testable; add malformed-frontmatter cases to `buildMetadataHelpers.test.ts`.

Verification: gate passes; a fixture article without `title` fails metadata generation with a
message naming the file.

### D8. Delete dead `ChangelogBox` component

- [x] Effort: S · Impact: low · Risk: low

`src/components/content/ChangelogBox.tsx` has zero production importers (its own generated readme
records "Imported by: none"); `UpdatesPage` re-implements the composition inline. Its only
consumer is its own test.

Steps: delete component + `__tests__/src/components/content/ChangelogBox.test.tsx`; regenerate the
folder readme if the generator is available.
Verification: gate passes; `grep -rn ChangelogBox src __tests__` → no hits.

### D9. Remove the injection-shaped `exec` option from git-freshness helpers

- [x] Effort: S · Impact: low · Risk: low

`build-metadata-lib.mjs` ~102–114: `getGitFileFreshness` still supports a legacy `exec` option
that shell-interpolates the file path; `getGitFileFreshnessSafe` (~120–130) duplicates the
function's own default execFile branch. Production callers all take the safe path; the string
branch survives only for two tests.

Steps: drop the `exec` option, fold `…Safe` into the base function, update
`build-metadata-lib.d.mts` and the two test call sites (`buildMetadataHelpers.test.ts` ~137/~180).
Verification: gate passes; `grep -n "exec(" scripts/build-metadata-lib.mjs` shows only execFile.

### D10. Glass shard housekeeping: stale counts, CDGM casing, phase-comment provenance

- [x] Effort: S · Impact: low · Risk: low

Three cheap consistency fixes: (a) hand-bumped count comments are stale
(`glassCatalog.ts` ~14 says 463; `agent_docs/glass-relabel-followup.md` ~26 says 443) — delete the
sentence, point at `catalogSize()`; (b) CDGM canonical-name casing splits within one shard
(`H-ZLaF76` vs `H-ZLAF50D`, `glassCatalogEntries/cdgm.ts` ~75 vs ~169) — names surface verbatim in
`ElementInspector` and reports; normalize to the vendor's mixed-case style (lookup is
case-insensitive, so no annotation breaks; `dispersion.test.ts` ~604 pins one spelling — update
it); (c) when touching a shard "Phase NN" comment, append its source date.

Verification: gate passes; `npm run generate:glass-reports` diff shows only casing changes.

### D11. Refresh the stale generated `src/**/readme.md` folder documentation

- [x] Effort: S · Impact: low-med · Risk: low

Filed during D8 execution (2026-08-04), not part of the original audit. Running
`node scripts/generate-src-readmes.mjs` rewrites 36 committed folder readmes and creates 5 files
that were never generated at all (`src/components/relationshipMap/`, `src/components/search/`,
`src/content/manufacturer-lens-stories/`, `src/optics/glassCatalogEntries/`) — the July expansion
landed without regenerating them, so every import graph, consumer list, and file table under `src/`
is stale. D8 committed only `src/components/content/readme.md` (the folder it changed) and reverted
the rest to keep the branch scoped.

Steps:
1. Run `node scripts/generate-src-readmes.mjs` and commit the whole sweep in one mechanical commit.
2. Consider adding it to `npm run generate:metadata` or a test guard so it cannot drift again — it
   is not currently an npm script, which is why it drifts (decide separately; a guard that rewrites
   files during `npm run test` would be wrong).

Resolution (2026-08-04): chained into `generate:metadata` and `build`, and exposed as
`npm run generate:readmes`. Deliberately NOT wired into `pretest`/`pretypecheck`, which run
`generate-build-metadata.mjs` only — a test run must not rewrite source files.

Residual gap, not closed: this makes drift *visible* (any local `generate:metadata`/`build` leaves an
uncommitted readme diff) but not *impossible* — CI regenerates without committing, so a PR can still
merge with stale readmes. Closing it needs a `--check` mode on `generate-src-readmes.mjs` that exits
nonzero on drift, called from a test or a CI step. Filed as **D12**.

Verification: gate passes; a second generator run produces no diff.

### D12. Add a `--check` mode to `generate-src-readmes.mjs` and enforce it

- [ ] Effort: S · Impact: low · Risk: none

Filed 2026-08-04 out of D11. The readme generator only ever writes; there is no way to assert the
committed docs match the source tree without mutating it, so CI cannot fail on drift.

Steps:
1. Add a `--check` flag that renders the same output in memory and diffs it against what is on disk,
   exiting nonzero and listing stale/missing paths instead of writing.
2. Call it from `__tests__/docDrift.test.ts` (the natural home — it already owns doc-vs-tree
   invariants) or as a CI step in `quality.yml`. Prefer the test if the ~0.5 s cost is acceptable.

Verification: gate passes; deleting a line from any `src/**/readme.md` fails the check.

---

## U-Series Specifications — UI Consolidation

Maintainer confirmed the patent/author area keeps expanding — build the seams now so the next
feature lands once, not three times. Follow the Stage 6 order after the catalog seams settle.

### U1. One media-query hook (the #639 four-file bug, fixed structurally)

- [ ] Effort: M · Impact: high · Risk: med

Three-plus implementations with three SSR/hydration strategies:
`src/utils/useMediaQuery.ts` ~12–14 (initial read from `window`, server default `true`);
`SidebarLayout.tsx` ~40–50 (private `useMediaQueryMatch`, initial `false`, documented as the
no-hydration-mismatch design); `ArticleTOC.tsx` ~53–63 (byte-identical private copy);
`usePageThemeToggle.ts` ~44–56 (fourth variant). Commit ad068d30 (#639) had to patch the WebKit
`addListener` bug into all four separately. The `true`-default variant produces systematic
server/client first-render mismatches on narrow viewports (`PageNavBar`, `HomePage`,
`UpdatesPage`, `QuickNavCards`, `TrustStrip`, `HeroSection`).

Steps (safest order):
1. Add `useMediaQuery(query, { ssrDefault })` — deterministic initial state, effect re-syncs (the
   `setMatches(mql.matches)` line already exists).
2. Delete the two private `useMediaQueryMatch` copies; consume the shared hook with
   `{ ssrDefault: false }` — zero behavior change for those callers.
3. Migrate `usePageThemeToggle`'s variant.
4. Case-by-case: flip `true`-default callers to explicit `ssrDefault` values, preferring the
   value that matches prerendered output; document per call site. Where CSS can do the job,
   prefer the pattern the new pages proved out: `repeat(auto-fit, minmax(…))` grids avoid the JS
   breakpoint entirely.
5. Extend `__tests__/src/utils/useMediaQuery.test.ts` with server-default behavior
   (`installMatchMediaMock` in `testUtils.tsx` exists).

Verification: gate passes; `grep -rn "useMediaQueryMatch" src` → no hits; manual narrow-viewport
load of `/` and `/updates` shows no hydration warning in console.
Rollback: revert; the private copies return.

### U2. Adopt `StaticPageShell` across the 15 hand-rolled pages

- [ ] Effort: M · Impact: high · Risk: low-med

`src/components/layout/StaticPageShell.tsx` ~25–54 already implements the full page chrome (theme
wrapper, `PageNavBar`, data-driven breadcrumbs, `PAGE_BASE_STYLE` container) but has ONE consumer
(`UpdatesPage`). Fifteen pages — including all five July pages, written after the shell existed —
re-derive it by hand: `SearchPage` ~30–57, `AuthorsIndexPage` ~76–113, `AuthorPage` ~159–208,
`PatentsIndexPage` ~117–154, `RelationshipMapPage` ~76–115, `MakersIndexPage`, `MountsIndexPage`,
`FormatsIndexPage`, `MakerPage`, `MountPage`, `FormatPage`, `ArticlesPage`, `ArticlePage`,
`LensIndexPage`, `HomePage`, `NotFoundPage`. Grep-verified sub-duplication: the breadcrumb
separator span appears 24×; the link-style literal 43× in 19 files; the 13-line
theme-toggle+navbar header block is byte-identical in all 15.

Steps:
1. Extend `StaticPageShell` minimally: render the container as `<main>` (the five new pages set
   the landmark — don't regress it), accept optional SEO children (UpdatesPage proves the slot),
   and keep breadcrumbs as `{label, to?}[]` (`RelationshipMapPage`'s conditional crumb fits —
   pass `to` only when focused).
2. Migrate mechanically, one page per commit, starting with the five July pages then
   Makers/Mounts/Formats (trivially identical). `HomePage`/`LensIndexPage` last — they have extra
   chrome; skip them if they don't fit cleanly rather than force the abstraction.
3. While migrating each page, do NOT restyle; visual parity only.

Depends on: U1 (hook consolidation first so the shell lands on the settled hook).
Verification: gate passes — `pageRenders.test.tsx`, `searchPages.test.tsx`,
`relationshipMapPage.test.tsx` already render every migrated page through the router and must pass
unchanged; spot-check breadcrumbs and theme toggles on 3 migrated pages.
Out of scope: redesigning page chrome; migrating `LensViewer`-based routes.
Rollback: pages are migrated one commit each — revert individually.

### U3. Shared patent-attribution components: `LensEntryLink`, `InventorLinks`/`PatentPartyList`

- [ ] Effort: M · Impact: med-high · Risk: low

Found independently by two reviewers. Three near-identical PatentCards
(`AuthorPage.tsx` ~78–134, `PatentsIndexPage.tsx` ~38–110, `PatentDetailCard.tsx` ~67–130 — whose
header comment admits it mirrors AuthorPage's) with byte-identical embedded blocks: the lens-link
row (`Link` + `LENS_LINK_BASE_STYLE` + `specs.slice(0, 2).join(", ")`) ×3 plus near-variants in
`MakerPage` ~144–151 and `CatalogSearchResults` ~92–99; the inventor-link list ×3 including
`DiagramHeader.tsx` ~204–230 (the #613 feature implemented three times); the year-suffix span ×3.
A private component with exactly the right shape already exists: `LensEntryLink` in
`LensIndexResults.tsx` ~35–60.

Steps:
1. Promote `LensEntryLink` to `src/components/content/LensEntryLink.tsx` (keep the
   `LensIndexResults` call site; add a `specsCount` prop for MakerPage's `slice(0,3)` variant).
2. Extract `PatentPartyList({ names, renderName })` taking a render strategy so
   PatentDetailCard's recenter-buttons and the link-based pages both fit; extract
   `InventorLinks({ names, currentAuthor? })` on top of it (suppresses the current author's link
   the way AuthorPage does — make DiagramHeader consistent with that choice or prop it).
3. Consume from AuthorPage, PatentsIndexPage, DiagramHeader, PatentDetailCard,
   CatalogSearchResults, MakerPage.
4. Keep per-patent inventor DISPLAY order as lens-file source order (LENS_DATA_SPEC ~215–224 says
   `patentAuthors` is source order) — only identity-level lists sort.

Verification: gate passes — `searchPages.test.tsx` asserts lens links inside author/patent pages;
`relationshipMap.test.tsx` covers PatentDetailCard. Visual parity on the three cards.
Out of scope: full card unification (the two blocks above are the safe 80%).

### U4. Shared style vocabulary: panel card, visually-hidden, role chip, count suffix, search input, pluralize

- [ ] Effort: M · Impact: med · Risk: low

`src/utils/style/styles.ts` declares itself the home for patterns used by 2+ components, yet July
re-typed: the panel-card literal (12 sites, 8 byte-compatible: `AuthorsIndexPage` ~198–203,
`AuthorPage` ~46–52/~81–87, `PatentsIndexPage` ~211–217, `RelationshipEntityPicker` ~119–124/
~186–193, `PatentDetailCard` ~70–76, `LinkListSidebar` ~67–76, `ArticleTOC` ~165–168, …); a
visually-hidden style ×3 (no shared constant exists); a role chip duplicated with drift
(`RelationshipEntityPicker` ~79–89 vs `RelationshipMapPage` ~121–134 — 0.6rem vs 0.62rem); the
count-suffix span ×14; the iOS-safe 16px search input whose zoom-rationale comment didn't travel
to its copy; and 25 `x === 1 ? "patent" : "patents"` ternaries across 14 files.

Steps:
1. Add to `styles.ts`: `panelCard(t, opts?)`, `VISUALLY_HIDDEN`, `countSuffix(t)`,
   `searchInput(t)` (carrying the iOS comment); a shared `roleChip(t, role)` module both
   relationship files import; `pluralize(n, word)` in a small text util.
2. Migrate call sites mechanically, one style per commit.

Verification: gate passes; existing page/component tests cover all consumers; grep counts for the
replaced literals drop to ~0.

### U5. Dismissable dropdowns for the two hand-rolled suggestion lists

- [ ] Effort: S · Impact: med · Risk: low-med

`RelationshipEntityPicker.tsx` ~108–154 hand-rolls a suggestion dropdown with no Escape close, no
outside-click close, no `aria-expanded`/listbox semantics — it floats over the map and cannot be
dismissed by standard gestures. `CatalogSearchBox`'s homepage suggestions (~148–186) share the
no-dismiss property. The shared `DropdownPanel` (`src/components/layout/DropdownPanel.tsx` ~53–74)
already implements Escape + outside-mousedown close (used by BreadcrumbBar settings);
`LensSelector.tsx:98` shows the `aria-expanded` trigger pattern.

Steps:
1. Reuse `DropdownPanel` (or minimally add its two `useEffect` behaviors + `aria-expanded`) in
   the picker's compact branch; mind portal/positioning inside the relative wrapper.
2. Same treatment for `CatalogSearchBox` suggestions.
3. Add Escape/outside-click cases to `relationshipMapPage.test.tsx` and the search box test.

Verification: gate passes; Escape and outside-click dismiss both lists.

### U6. Extract the thrice-repeated filter-section template in `LensIndexFilterPanel`

- [ ] Effort: S · Impact: low · Risk: low

`LensIndexFilterPanel.tsx` ~384–480: the Maker, Mount, and Image Format sections are structurally
identical (h3 + "N selected" + "All X" clear chip + `aria-pressed` option chips), differing only
in labels/options/callbacks. This file grew via #604 and is the most likely to grow another facet.

Steps: extract a file-local `FilterChipSection<T>({ title, allLabel, options, selectedIds,
onToggle, onClear, getId, getLabel })`; no new module. Existing lens-index filter tests must pass
unchanged.
Verification: gate passes.

### U7. Make TC/optical-configuration state URL-shareable and compare-reachable **[changelog]**

- [ ] Effort: M · Impact: med · Risk: med (lens identity, URL hydration, hidden catalog keys)

Maintainer decision: change the deliberate viewer-local design. Today
`LensViewer.tsx` ~124–141 keeps `selectedConfigurationKey` in component state (comment: "the
canonical catalog lens and URL remain unchanged"), so a shared URL always reproduces TC OUT, and
`comparing ? []` hides the toggle in compare mode even though TC-in vs TC-out is the obvious
comparison (hidden keys already work if hand-typed via the `needsHiddenCatalog` branch ~87–92).

Steps:
1. Treat configuration as lens identity, not panel state. Add `selectedConfigurationKey` to
   `LensSlice` and a dedicated reducer action/reset path. Add `configurationKey?: string` to
   `URLState`, but **do not** add it to `VIEW_STATE_FIELDS`: that table is applied wholesale to
   `PanelsSlice` by `APPLY_URL_VIEW_STATE` and is only appropriate for panel/view fields.
2. Add `cfg` as a custom-encoded v1 query field in `lensViewUrlState.ts`. The generic parser may
   accept only a bounded, syntactically valid key; perform catalog-aware validation at the
   lens-aware initialization/popstate boundary against
   `opticalConfigurationOptionsForKey(lensKeyA)`. Invalid, cross-group, or stale values fall back
   to the canonical key and are removed on the next URL write.
3. Hydrate the valid value in the initial reducer state so a fresh shared URL does not render the
   wrong prescription for a frame. Switching the canonical lens resets configuration before URL
   serialization; toggling configuration clears selected-element state and writes `cfg`.
4. Keep compare identity in the route: `/compare/<variant-key>/<variant-key>`, with no ambiguous
   single `cfg` query applying to two panels. Expand compare-selector options from visible catalog
   keys plus their `opticalConfiguration` group members, and pass that same expanded allow-list to
   route parsing/state initialization. Do not expose unrelated hidden debug/reference fixtures.
5. Tests: custom-field URL round-trip and invalid-value removal; fresh-tab initialization;
   back/forward hydration; canonical-lens reset; compare picker lists group variants; selecting a
   hidden variant navigates to and reloads the expected compare route.

Verification: gate passes; share a TC-IN URL into a fresh tab and confirm TC-IN renders.
Out of scope: per-configuration analysis caching changes (prepared-state caches already key on the
runtime lens object).

---

## C-Series Specifications — Catalog Data-Layer Consolidation

The area keeps expanding (maintainer decision) — every future patent feature pays these seams.
Do C1 before C3; N3's pin tests before C4.

### C1. One patent aggregator (fixes divergent year/order semantics)

- [ ] Effort: M · Impact: high · Risk: low-med

Two parallel "one record per patent" aggregators with divergent semantics:
`patentsForParty` (`authorCatalog.ts` ~74–121) sets `patentYear` from the FIRST matching lens and
never backfills, emits parties in insertion order; `buildPatentIndex` (`patentCatalog.ts` ~92–133)
backfills via `??=`, sorts parties, dedupes lenses via Map. Latent divergence: a shared patent
whose first lens lacks `patentYear` shows a year on `/patents` but not on `/authors/:slug` — and
sorts to the END of the author's list (`patentYear ?? Infinity`). Data is consistent today
(verified: zero mixed-year shared patents), so this is exactly the silent-drift class #639 fixed
on the count side.

Steps:
1. Extract `aggregatePatentRecords(summaries)` into `patentCatalog.ts` keeping `buildPatentIndex`'s
   more defensive semantics (`??=` backfill, Map-deduped lenses); support the author path's
   `lens:${key}` fallback records via an option.
2. Reimplement `patentsForParty` as a filter/derivation over it.
3. Display-order rule: per-patent inventor display stays lens-file source order (see U3 step 4);
   only identity-level lists sort via the pinned collator (X7).
4. N1's parity test plus `patentCatalog.test.ts` and `searchCatalog.test.ts` are the nets; add a
   synthetic-input unit test for `patentsForParty` (multi-lens merge, fallback records,
   missing-year backfill) — it has none today.

Depends on: N1 (net first), X7 (collator).
Verification: gate passes; author/patent pages render identical content order except documented
fixes (year now backfills on author pages).

### C2. One "group under named parties + fallback bucket" implementation

- [ ] Effort: S · Impact: med · Risk: low-med

Three implementations with three fallback vocabularies: `groupAuthorPatents`
(`authorCatalog.ts` ~134–160, ids `named:${party}`/`fallback`), inline assignee grouping
(`patentCatalog.ts` ~152–159), and `groupByPatentParty` (`lensIndex/catalog.ts` ~256–285, ids
`named:`/`unnamed`/`missing-metadata`). All feed `patentPartyGroupAnchorId` anchors.

Steps: one generic `groupByNamedParty<T>(items, partiesOf, { fallbackId, fallbackLabel,
missingLabel? })` in `src/utils/catalog/`; consume from all three; **byte-preserve each site's
existing id strings** — they are public `#` anchors (N3's pin test is the guard).
Depends on: N3.
Verification: gate passes; N3 anchor pins unchanged; all three existing grouping suites pass.

### C3. Precompute the author directory; memoize AuthorPage derivations

- [ ] Effort: S · Impact: med · Risk: low

`authorAssignees.ts` ~18–26 runs 375 × full-504-summary scans at module evaluation of the
`/authors` chunk (~11 ms Node, 30–50 ms low-end mobile, on the load path); `AuthorPage.tsx`
~145–147 recomputes `patentsForAuthor` + `groupAuthorPatents` on every render with no `useMemo`
(theme toggles re-scan the catalog) — contrast `LensIndexPage.tsx` ~99–105 which memoizes every
grouping call (reference to mimic).

Steps:
1. Build one module-scope pass over C1's shared records producing `Map<name, AuthorPatent[]>`;
   make `patentsForParty` a lookup.
2. Wrap AuthorPage's `patents`/`groups` in `useMemo` keyed `[author.slug]` /
   `[patents, author.name, groupMode]`.

Depends on: C1.
Verification: gate passes; `searchPages.test.tsx` unchanged.

### C4. Single-source slug transliteration + FNV-1a hash (script ↔ runtime)

- [ ] Effort: S · Impact: med · Risk: low-med

The diacritic transliteration table exists twice (`scripts/author-metadata.mjs` ~22–36 vs
`searchCatalog.ts` `normalizeSearchText` ~40–53) and the FNV-1a hash twice
(`author-metadata.mjs` ~12–19 vs `groupAnchors.ts` ~17–25). Slug generation and search matching
must agree; hash drift would relocate every collision slug and party anchor. Precedent for scripts
importing src TS: `generate-rss-feeds.mjs` ~11–12 imports `changelogData.ts` via the
ts-js-specifier hook.

Steps:
1. Create `src/utils/catalog/slugText.ts` exporting the table-driven transliteration and
   `stableHash`; import from both consumers (script side via the existing hook pattern).
2. N3's pin tests must pass byte-identically — they are the URL guard.
3. Add one cross-consistency test: for each diacritic author name, slug base ==
   transliterated-normalized search text modulo separator rules.

Depends on: N3.
Verification: gate passes; `node scripts/generate-build-metadata.mjs` produces byte-identical
`authors` metadata (diff `src/generated/build-metadata.json` before/after).

### C5. Precompute search normalization; skip disabled suggestion scans

- [ ] Effort: S · Impact: low-med (grows with catalog) · Risk: low

`searchCatalog()` re-normalizes all 504 names per call — inside filter AND sort comparators
(`searchCatalog.ts` ~73–107); `/search` runs two full scans per keystroke because
`CatalogSearchBox` computes suggestions even when `showSuggestions` is false (~62) while
`CatalogSearchResults` scans again (~65).

Steps: precompute `normalizedName`/`normalizedPatent` per summary at module scope (mimic
`lensSummaries.ts` derived constants); compute each candidate's score once before sorting; skip
the suggestions memo when `!showSuggestions`.
Verification: gate passes; `searchCatalog.test.ts` + `searchPages.test.tsx` pin semantics.

### C6. One metadata type + one lens-ref type for generated JSON; guard the casts

- [ ] Effort: S · Impact: low-med · Risk: low

`AuthorMetadata`/`AssigneeMetadata`/`GeneratedAuthorMetadata` declare the same shape thrice;
the lens-ref shape thrice (`authorCatalog.ts` ~21–25, `patentCatalog.ts` ~12–16,
`relationshipGraph.ts` ~29 inline). Blind `as` casts of generated JSON
(`authorCatalog.ts` ~44, `assigneeCatalog.ts` ~19, `lensSummaries.ts` ~40) mean a generator-side
rename type-checks clean and surfaces as `undefined` in the UI.

Steps: define `PatentPartyMetadata` + `PatentLensRef` once (in `authorCatalog.ts` or
`src/types/`); alias the others; add one runtime shape assertion for `AUTHORS[0]`/`ASSIGNEES[0]`
to an existing catalog test (summaries already have a parity test).
Verification: gate passes.

### C7. One role vocabulary: `PatentPartyRole`

- [ ] Effort: S · Impact: low · Risk: low

`"author" | "assignee"` (authorCatalog, relationshipGraph) vs `"inventor" | "assignee"`
(groupAnchors, lensIndex GroupMode) forces seam translations (`AuthorPage.tsx` ~152). Standardize
the code-level type on `PatentPartyRole = "author" | "assignee"` (author is baked into public
URLs); `patentPartyGroupAnchorId` maps internally to the legacy `"inventor"` anchor prefix — **do
not change emitted anchor strings** (N3 pins them). Document the mapping in `groupAnchors.ts`.
Depends on: N3.
Verification: gate passes; N3 pins unchanged.

### C9. One publication-order comparator

- [ ] Effort: S · Impact: med · Risk: low

`comparePublicationEntries` (`build-metadata-lib.mjs` ~221–240) vs `newestFirst`
(`generate-rss-feeds.mjs` ~96–107) re-implement the timestamp/commit/name fallback chain with
different semantics (missing uncommitted-first rule, different tie-break fields) — the exact bug
class #636 unified, kept alive in a second file. The fallback chain is near-dead in production
(generation always emits `publicationOrder`), so drift is symptomless until someone feeds partial
metadata.

Steps: export the comparator from `build-metadata-lib.mjs`; import in `generate-rss-feeds.mjs`
keeping only the `publicationOrder` short-circuit local; update both `.d.mts` files.
Verification: gate passes; `generateRssFeeds.test.ts` + `buildMetadataHelpers.test.ts` carry it;
regenerated feeds byte-identical.

### C10. Derive feed paths from one definition

- [ ] Effort: S · Impact: low-med · Risk: low

`/feeds/{lenses,articles,changelog}.xml` is hardcoded in five places: `feedMetadata.ts` ~1–3,
`FEED_DEFINITIONS` (`generate-rss-feeds.mjs` ~22–41), AGAIN as raw filenames in `writeRssFeeds`
(~332–334), `seo-audit.mjs` ~26–28, and `index.html` ~14–28 discovery links.

Steps: export the path constants from `feedMetadata.ts`; derive `FEED_DEFINITIONS.feedPath` and
`writeRssFeeds` filenames (`basename(feedPath)`) from them; point seo-audit at the same import.
Optionally append `npm run seo:audit` to the CI build job — it already cross-checks feeds
end-to-end and currently runs manual-only.
Verification: gate passes; `npm run build && npm run seo:audit` clean;
`feedDiscovery.test.ts` unchanged.

---

## G-Series Specifications — Engine and Script Consolidation

Maintainer decision: in scope, each gated by the golden trace suite, the full test run, and
generated-report byte-diffs. Follow Stage 4 exactly: G1 and N5 establish the shared runtime
foundations; G2–G7 settle primitives; G8/G9 then consolidate their scan consumers; G10/G11 follow;
D5 changes report shapes last. For any item touching trace numerics, run
`npm run benchmark:optics-rendering` before/after per the EFFICIENCY plan's measurement policy if
a perf claim is made.

### G1. Centralize the `normalizeRuntimeLens` cache (5 private WeakMaps → 1)

- [ ] Effort: S · Impact: high · Risk: low

`normalizeRuntimeLens` (`prescription/normalizeLensData.ts` ~66–91) structuredClones the full
prescription and re-runs glass-catalog matching per surface on EVERY call. Five modules each
maintain a private `ENGINE_LENS_BY_RUNTIME = new WeakMap(...)` (`compat.ts:15`,
`trace/rayAdapters.ts:30`, `chromatic/indexResolver.ts:32`, `chromatic/dispersionQuality.ts:13`,
`diagram/runtimeDiagramAdapter.ts:16` — all verified), while 8 hot call sites use it UNCACHED:
`field/chiefRay.ts` ~92/246/347 (line ~347 is inside the mandated fisheye bounding-sphere path)
/875/1054/1059/1071, `first-order/cardinals.ts` ~180, `focusBreathing.ts` ~30 — amplified per
field angle by `distortionAnalysis.ts` ~319 and `pupilAberration.ts` (4 sites).

Steps:
1. Move the WeakMap inside `normalizeRuntimeLens` itself (reference to mimic: the idiom at
   `chromatic/indexResolver.ts` ~96–100). Safe because `RuntimeLens` is rebuilt on data change
   (`agent_docs/gotchas.md:30-34` documents the same WeakMap-keyed-on-RuntimeLens pattern for
   `solveChiefRay` and the trace adapters).
2. Delete the five call-site WeakMaps; call sites use the function directly. No API change.

Verification: gate passes including `exactTraceGoldenValues.test.ts`, `chiefRaySolver.test.ts`,
`opticsEngineModelState.test.ts`; `grep -rn "ENGINE_LENS_BY_RUNTIME" src` → no hits.
Rollback: revert branch.

### G2. Extract the 4×-duplicated diffractive refract-or-fail block

- [ ] Effort: S · Impact: high · Risk: low

The identical "phase-aware refract, map null to
`nonPropagatingDiffractionOrder`/`totalInternalReflection` + clip reason" block exists at
`trace/sequentialTrace.ts` ~132–154, `trace/generalizedTrace.ts` ~318–327,
`internal/exactSurfaceTrace.ts` ~389–414 AND ~806–830. PR #641 landed the same physics four times;
two copies use the `phaseRefractedDirection` wrapper, two bypass it — drift has already begun.

Steps: one `interactRefractiveSurface(direction, normal, point, n, nn, surface, wavelengthNm)` in
`trace/interactions.ts` (mimic `phaseRefractedDirection`) returning
`{ direction } | { failureReason, clipReason }`; use at all four sites. Do NOT attempt tracer-stack
unification here.
Verification: gate passes; golden suite + Nikon PF parity test
(`NikonAFSNikkor500mmf56EPFEDVR.test.ts` ~65–100) green; N6's new golden entries green.

### G3. Unify the twin paraxial engines

- [ ] Effort: M · Impact: med · Risk: low-med

`internal/traceSurfaces.ts` ~68–93 and `math/paraxial.ts` ~64–89 are line-for-line identical
(verified) including the July diffractive additions — the plan's "both paths must remain in
lockstep" was executed by double-edit. Only the parameter types differ (`TraceSurface` vs
`Pick<CompiledStateSurface,…>`; optional vs required `interaction`).

Steps: make `internal/traceSurfaces.ts` thin wrappers re-exporting over `math/paraxial.ts`,
adapting the type gap with a default `interaction ?? "refract"`. Reference to mimic:
`constants.ts` ~8–12 re-exporting `FLAT_R_THRESHOLD` from `internal/surfaceMath.ts`.
Verification: gate passes; golden values BIT-identical (construction path flows through
`buildLens` → these functions); `npm run benchmark:optics-rendering` unchanged within noise.
Rollback: revert; the twin returns.

### G4. Deduplicate chromatic fallback math (`wavelengthNd`, fan spread, PgF formula)

- [ ] Effort: S · Impact: med · Risk: low

`wavelengthNd` (`rayTrace.ts` ~76–87) ≡ `wavelengthNd2` (`chromatic/indexResolver.ts` ~46–56)
verbatim (verified); `computeChromaticRayFanSpread` ≡ `…2` line-identical with private helper
copies; the normal-line PgF constant `0.6438 − 0.001682·vd` appears in 7 files, and only the
dispersion-cascade copy honors `dPgF` (latent divergence — the fallbacks currently trigger only
for out-of-range probes, so no wrong numbers today).

Steps:
1. Export `normalLinePgF(vd, dPgF = 0)` from `dispersion.ts` (it exists privately as
   `partialDispersionPgF` ~49–51); import in `rayTrace.ts`, `indexResolver.ts`,
   `PVDiagram.tsx` ~72, and (later) G8's scan lib.
2. Delete `rayTrace.ts`'s private `wavelengthNd` in favor of the indexResolver export (already
   publicly aliased at `optics.ts` ~75); delete one fan-spread implementation and re-export the
   other (mimic the `optics.ts` ~71 alias pattern).
3. Document (comment) the dPgF asymmetry decision at the single remaining implementation.

Verification: gate passes; `chromaticRayFanScaling.test.ts`, `dispersion.test.ts`, golden suite
green; generated glass reports byte-identical (`npm run generate:glass-reports`).

### G5. Precompute Sellmeier channel indices per surface

- [ ] Effort: S · Impact: med-low · Risk: low

`dispersion.ts` ~122–124 returns `(ch) => evaluateSellmeier(entry, CHANNEL_NM[ch])` — re-running
sqrt/divisions (or a 7-term power series for 109 entries) on every refraction event, contradicting
the module's own "no repeated overhead" header (~25–27). Sibling tiers precompute all four
constants (~88, ~150 — reference to mimic).

Steps: in `makeSurfaceDispersion`, evaluate the four channels once and return the same
lookup shape as the lineIndices tier. Bit-identical outputs.
Verification: gate passes; `dispersion.test.ts` ~779–791 + golden suite green.

### G6. Hoist per-call vendor/alias work in `candidateMatches`

- [ ] Effort: S · Impact: med · Risk: low

`glassCatalog.ts` ~309–312 rebuilds a 463-element vendor scan per resolution call; ~280–285
compiles up to 42 alias RegExps per call. Called per glass surface per normalize (×2 per lens:
`runtimeLens.ts` ~392 and `normalizeLensData.ts` ~91), multiplied by the 8 scan files × 513
lenses.

Steps: module-level `CATALOG_VENDORS: readonly string[]` (distinct, uppercased) and
`ALIAS_PATTERNS: ReadonlyMap<string, RegExp>` next to the existing precomputed
`CATALOG`/`CODE6_INDEX` (~249–268 — the pattern to mimic). Behavior-identical.
Verification: gate passes; `npm run generate:glass-reports` byte-identical; wall-time of the glass
scan suites drops (note before/after in the branch record).

### G7. Reimplement `resolveGlass` over `candidateMatches`; share the unresolved-marker regex

- [ ] Effort: M · Impact: med · Risk: med

`glassCatalog.ts` contains two hand-maintained copies of the tokenize/trim/lookup loop
(~349–371 ranked vs ~567–594 first-hit) with divergent semantics for alias-before-name strings;
the `/\b(unmatched|unknown|proprietary|unidentified)\b/i` marker is written 6× (2 in
glassCatalog.ts + 4 scans).

Steps:
1. (low risk, do first) Export `UNRESOLVED_MARKER` from `glassCatalog.ts`; consume in the 4 scans.
2. (med risk) Re-implement `resolveGlass` as
   `candidateMatches(s)` sorted by token-rank → source-rank → legacy-preference → name; the
   `resolveGlass` describe-block (`dispersion.test.ts` ~659–765) plus
   `glassAmbiguityScan`'s explain-≡-runtime assertion (~139–141) plus a full
   `generate:glass-reports` byte-diff prove equivalence. If the diff is non-empty, STOP and
   document the divergence in the docstring instead of forcing it.

Depends on: X10 (tokenizer settled first).
Verification: gate passes; report byte-diff empty (or divergence documented and reviewed).

### G8. Shared library for the 8 glass report scans

- [ ] Effort: M · Impact: high (maintenance) · Risk: low

Eight scan files under `__tests__/src/optics/` re-implement the same harness:
`toRepoRelativeLensPath` ×8, `extractPatentNumber` ×5, the ~60-line patent-PDF inventory matcher
×2 (byte-identical), `extractSixDigitCodes`/`hasActualGlassTypeToken` ×2 (byte-identical),
`findCandidates` ×3 (with drift), `PGF_TOLERANCE` ×2, the 513-module walk ×8.
`glassCoverageOpportunitiesScan` (911 lines) is a self-described consolidation of sweeps the
others already compute.

Steps:
1. Create `__tests__/src/optics/glassScanLib.ts` (precedent: `testLensFixtures.ts`,
   `__tests__/testUtils.tsx`) exporting: `walkLensSurfaces(modules, visitor)`,
   `toRepoRelativeLensPath`, `extractPatentNumber`, the patent-PDF matcher,
   `extractSixDigitCodes`/`hasActualGlassTypeToken`, `findCandidates` (one canonical ranking),
   `PGF_TOLERANCE`; import `decodeCode6` (X10), `UNRESOLVED_MARKER` (G7), `normalLinePgF` (G4).
2. Convert scans ONE per commit; after each, regenerate and assert the generated .md is
   byte-identical (`git diff --exit-code agent_docs/generated/<file>`).

Depends on: X10, G4, G7 step 1. G8 must land before D5 so each scan conversion can still prove
behavior preservation against the current full-detail report baseline.
Verification: per-commit byte-identical reports; gate passes; combined scan wall-time noted.

### G9. Type/dead-code cleanup: `SurfaceDispersion` name collision, dead `indexAt`, deprecated trio

- [ ] Effort: S · Impact: low-med · Risk: low

Two exported `SurfaceDispersion` types with different shapes (`dispersion.ts` ~60–65 vs
`types.ts` ~162–167, converted between in `prescription/dispersion.ts` ~23–41); dead export
`dispersion.indexAt` (~186–192, zero importers, and its fallback differs from the live path's);
deprecated `catalogNd`/`ndDiff`/`vdDiff` (~58–63) kept only for scan compatibility.

Steps: rename the engine-side type `CompiledSurfaceDispersion`; delete `indexAt`; migrate the 5
scan usages to `catalogIndex`/`indexDiff`/`abbeDiff` and drop the trio.
Depends on: G8 (touch the scans once, after the lib exists).
Verification: gate passes; reports byte-identical.

### G10. Readability pass on the two generalized-trace loops

- [ ] Effort: M · Impact: low-med · Risk: low-med

`traceGeneralized` (`trace/generalizedTrace.ts` ~66–391) and `traceGeneralizedSurfaceStackVector`
(`internal/exactSurfaceTrace.ts` ~570–900) each interleave side-activity, blocking, aperture,
annular holes, phase/refraction, loop-key detection, and diagnostics in one function, with four
near-identical `hits.push({…clipReason})` blocks per copy (`exactSurfaceTrace.ts` ~727–800).

Steps (within each file only — NO cross-stack moves): extract a local
`recordClippedHit(hits, clipEvents, …reason)` collapsing the four blocks; lift the
`interaction.type === "block"` and inactive-side stanzas into small private functions.
Verification: gate passes; `mirrorOptics.test.ts`, `exactSurfaceTrace.test.ts`, folded fixture
suites, golden values all green; `npm run generate:mirror-reports` byte-identical.

### G11. Harden the three audit scripts (loader hook, absolute paths, arg validation)

- [ ] Effort: S · Impact: med-low · Risk: low

`audit:image-circle` and `audit:patent-figure` run plain `node` yet import `.ts` sources — they
work only because those specific modules currently have zero value imports (adding one exported
constant to `surfaceMath.ts` breaks them with `ERR_MODULE_NOT_FOUND` far from the cause);
`audit:surface` already uses `--import ./scripts/ts-js-specifier-hook-register.mjs` (reference to
mimic). All three use `join(process.cwd(), dataFile)` which mangles absolute paths; numeric args
are unvalidated (`NaN` geometry → misleading "no element edges found").

Steps: add the `--import` hook to all three package.json entries; `join` → `resolve`; 5-line arg
validation (finite page ≥ 1, crop = four numbers in [0,1], `--sd` finite > 0); add one smoke test
invoking `audit-image-circle` on a known lens to lock the loader contract.
Verification: gate passes; each script runs against one lens with a relative AND an absolute path.

### G12. Fixture-validate diffractive surfaces in folded systems

- [ ] Effort: M · Impact: med · Risk: low-med (test fixture may expose an existing trace defect)

`validateLensData.ts` ~732–737 correctly rejects diffractive data on reflect/block surfaces while
allowing a refracting phase surface in a folded `opticalPath`. The generalized tracers implement
that combination, but their phase branches have no folded fixture coverage. Rejecting every
folded+diffractive prescription would remove currently accepted behavior without evidence that
the implementation is wrong, so validation must remain permissive.

Steps:
1. Add a hidden reference fixture under `src/lens-data/reference/` with a flat same-index phase
   plate before a simple fold. Give it an explicit `opticalPath`/`surfaceOrder`, conservative
   apertures, and analytically predictable geometry.
2. Trace the fixture through both generalized trace surfaces that contain phase/refraction logic.
   Assert the expected diffraction-direction change, successful traversal of the fold, finite
   image-plane intercept, and matching results between the two generalized entry points. Do not
   impose a naive same-order reverse-ray reciprocity assertion on the phase surface; reversing a
   grating path requires the physically reciprocal order/sign convention.
3. Add a zero-phase-order/control assertion showing that the same folded fixture reduces to its
   ordinary refractive behavior, including forward/reverse agreement across the non-phase control
   path. Keep the existing validation rejection for attaching `diffractive` directly to
   reflect/block interactions.
4. Register the hidden fixture exactly like the existing mirror references and regenerate the
   mirror report. Review and commit the expected new fixture row; do not require a byte-identical
   report when the fixture inventory intentionally grows.

Verification: gate passes; focused generalized-trace and mirror suites pass;
`npm run generate:mirror-reports` contains only the reviewed fixture addition. Land this before
G2 so the fixture protects extraction of the shared phase-aware interaction block.
Out of scope: adding a production folded DOE lens or broadening complex folded-system analysis.

---

## Rejected

- [-] **Split `changelogData.ts` into per-quarter files** — maintainer decision 2026-08-04: keep
  the monolith; the single file is simpler for tooling and the merge-conflict cost is acceptable.
  Do not re-propose without new evidence (e.g. conflict frequency data).

- [-] **D6: shrink benchmark runs by dropping raw sample arrays** — rejected 2026-08-04
  because persisted schema-2 records already contain only per-cell aggregates, not raw timing
  arrays. The report reads those per-cell medians to recompute summaries and identify the slowest
  lens/scenario cases. Reaching the proposed 50 KB target would require a separately designed
  loss of diagnostic capability, not the no-op described by D6. Keeping current records has no
  runtime or correctness effect; it only retains the existing repository payload.

- [-] **C8: merge script/runtime URL and site-name constants** — rejected 2026-08-04. The current
  duplication is small and covered end-to-end by build/SEO tests. The proposed shared
  `SITE_NAME` source (`lensMetadata.ts`) is not safe for plain Node consumers because importing it
  pulls JSON and `.js`-to-`.ts` dependencies into build scripts. Removing C8 leaves a modest drift
  risk and the hardcoded same-site base used only for URL parsing; N2 guards that validator's
  behavior. Reconsider only around a new import-free `siteIdentity.ts` contract.

- [-] **G13: cache git freshness metadata** — rejected 2026-08-04. The proposed cache key hashed
  `HEAD` plus `git status --porcelain`, which records dirty paths/statuses but not their changing
  contents and can therefore reuse stale metadata while a dirty file is edited repeatedly.
  Removing G13 preserves correctness at the cost of the existing metadata-generation time. A
  future proposal must either bypass the cache for dirty trees or content-hash staged, unstaged,
  and relevant untracked inputs.

Cross-plan note: anything here that grows into a feature (e.g. U7 follow-ons) moves to
`FEATURE_ADDITION_PLAN.md`; new perf findings join `EFFICIENCY_IMPROVEMENT_PLAN.md`'s series
instead of this file once this plan's stages close out.
