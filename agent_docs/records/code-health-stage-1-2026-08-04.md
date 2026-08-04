# Code Health Plan — Stage 1 (repository and generator baseline)

## Summary

- Executes Stage 1 of `agent_docs/code-health-improvement-plan.md` in the documented order:
  D1 → N10 → D2 → D3 → D4 → D7 → D9 → D8 → D10.
- One commit per item; the full gate
  (`npm run typecheck && npm run format:check && npm run lint && npm run test`) runs before each commit.

## Changes

### D1 — CLAUDE.md/agents.md commands and project map

- Commands fence: added `generate:feeds`, `generate:holiday-branding`, `audit:dependencies`,
  `benchmark:optics-rendering`; appended ", RSS feeds" to the `build` description.
- Project Map: added `src/components/search/` and `src/benchmarks/`.
- Re-synced `agents.md` byte-for-byte (enforced by `__tests__/docDrift.test.ts`).
- Deviation from the spec's literal wording: the map/command comments were reworded slightly to match the
  surrounding style (sentence-style comments, aligned `#` column) rather than pasted verbatim.

Verification: gate passed (223 files / 2606 tests).

### N10 — doc-drift guard over commands, project map, script inventory

- `__tests__/docDrift.test.ts` gained three assertions: every `npm run X` in CLAUDE.md exists in
  `package.json`; every non-lifecycle script appears in the Commands fence; every top-level `src/` and
  `src/components/` directory appears in the Project Map fence.
- Lifecycle hooks are detected as `pre<script>` where `<script>` itself exists, so `preview` is still required
  to be documented while `pretest`/`pretypecheck`/`pretest:coverage` are exempt.
- Deviation: the repo has no `@types/node` — only the hand-written `__tests__/node-builtins.d.ts` shim — so
  directory detection uses `readdirSync` + `statSync().isDirectory()` instead of `withFileTypes`. The shim was
  left untouched.
- Mutation-checked: deleting a Commands line, renaming a documented script, and deleting the `search/` map line
  each fail the intended new assertion.

Verification: gate passed (223 files / 2609 tests).

### D2 — architecture docs for the July catalog/search APIs

- `state-and-utilities.md` catalog table gained nine rows: `lensSummaries`, `lensPatentMetadata`,
  `authorCatalog`, `assigneeCatalog`, `authorAssignees`, `authorBiographies`, `patentCatalog`, `searchCatalog`,
  `relationshipGraph`.
- `public-functions.md` gained a "Search And Patent-Attribution APIs" table between the catalog/SEO and
  routing sections, listing the stable exports of those modules (verified against each file's `export`s).

Verification: gate passed (223 files / 2609 tests).

### D3 — real deployment topology

- `agent_docs/workflow.md` Deployment section now describes both targets: Cloudflare Pages as canonical production
  and `.github/workflows/deploy.yml` (GitHub Pages) as an active mirror triggered by a successful Quality Checks run
  on `main`. Replaces the previous "former/legacy workflow" wording, which contradicted the maintainer decision and
  the workflow's actual `workflow_run` trigger.
- Called out that `public/_headers` and `public/_redirects` are Cloudflare-only, so the mirror serves without CSP,
  COOP/CORP, Permissions-Policy, Referrer-Policy, `X-Content-Type-Options`, `X-Frame-Options`, or the SPA `200`
  rewrites; canonical URLs mitigate duplicate-content SEO.
- CLAUDE.md/agents.md Verification paragraph updated to mention the mirror.

Verification: gate passed (223 files / 2609 tests).

### D4 — shipped-plan records and stale references

- `git mv agent_docs/relationship-map-plan.md agent_docs/records/relationship-map-plan.md`; updated every reference
  (CLAUDE.md/agents.md index line, `FEATURE_ADDITION_PLAN.md`, this plan's Verified Healthy note, and the
  2026-07-22 branch record). The CLAUDE.md entry now reads "shipped implementation record (2026-07-22)" and sits
  with the other `agent_docs/records/` entries.
- `TRACE_MODEL_IMPROVEMENT_PLAN.md`: deleted the legacy vertex-plane/`traceMode.ts` bullet from Current State, and
  also the Test Strategy bullet citing the equally nonexistent `__tests__/src/optics/traceMode.test.ts` (extra to
  the spec's step 2, same stale-file class — both files are gone from the tree).
- `agent_docs/diffractive-phase-surfaces-plan.md`: the promised `diffractivePhase.test.ts` now points at the real
  coverage in `__tests__/src/optics/opticsEngineMath.test.ts`.

Verification: gate passed (223 files / 2609 tests).

### D7 — loud failures for silently dropped articles

- Moved `parseFrontmatterContent`, `collectTrackedArticlePathsBySlug`, and `collectArticles` out of
  `generate-build-metadata.mjs` into `build-metadata-lib.mjs`. `collectArticles` now takes
  `{ contentDir, cwd, fallbackDate, contentRepoPath?, concurrency?, execFileImpl? }` so it is unit-testable without
  the repo layout; declarations added to `build-metadata-lib.d.mts`.
- New `articleFrontmatterError` / `isGeneratedContentDoc` exports plus a collect-then-throw `assertArticleFrontmatter`
  (modeled on `assertFreshnessDiversity`). Metadata generation now fails and lists each offending file and reason.
- **Draft/skip convention decided from evidence, not invented:** `git log` and a sweep of `src/content/` showed the
  only three files relying on being skipped are the generated folder docs `readme.md` (×3), written by
  `scripts/generate-src-readmes.mjs`. So the exemption is exactly that generator's `generatedDocNames` set
  (`readme.md`, `improvementsuggestions.md`); everything else throws. No opt-out marker was added — nothing needed it.
- Tests added to `buildMetadataHelpers.test.ts`: frontmatter parsing incl. quoted values and indented keys, each
  failure reason, the generated-doc exemption, a successful temp-dir collection, and the throwing cases.

Verification: gate passed (223 files / 2614 tests); `npm run build` passed (1008 routes prerendered, 806 sitemap
URLs, feeds written); regenerated `build-metadata.json` is byte-identical to the pre-refactor output; a temporary
`src/content/temp-broken-fixture.md` without `title` failed generation with a message naming the file.

### D9 — drop the injection-shaped `exec` option

- `getGitFileFreshness` no longer accepts `exec` (which shell-interpolated the file path); it always uses execFile.
- `getGitFileFreshnessSafe` deleted — it was a byte-for-byte duplicate of the remaining branch. It had no callers
  outside the lib, so no production call site changed.
- `getFirstGitFileFreshness` lost its `exec` pass-through; `build-metadata-lib.d.mts` updated to match.
- The two tests that exercised the string branch now inject `execFileImpl` and assert on the argv path instead of a
  quoted command string.

Verification: gate passed (223 files / 2614 tests); `grep -n "exec(" scripts/build-metadata-lib.mjs` returns nothing
and no `getGitFileFreshnessSafe` references remain.

### D8 — delete the dead `ChangelogBox`

- Deleted `src/components/content/ChangelogBox.tsx` and its only consumer,
  `__tests__/src/components/content/ChangelogBox.test.tsx`.
- Removed its rows from `agent_docs/changelog.md` (prose + Component Reference) and
  `agent_docs/architecture/ui-components.md`; both now point at `ChangelogList.tsx`, the component `/updates`
  actually renders.
- Regenerated `src/components/content/readme.md` via `node scripts/generate-src-readmes.mjs`.
- **Deviation/scope call:** that generator rewrote 36 other committed readmes and created 5 new ones, because the
  July expansion never regenerated them. Committing that sweep here would bury the deletion in unrelated churn, so
  those files were reverted/removed and the staleness is filed as new plan item **D11**.

Verification: gate passed (222 files / 2613 tests — one file and one test fewer, matching the deletion);
`grep -rn ChangelogBox src __tests__` returns no hits.

### D10 — glass shard housekeeping

- (a) Removed the hand-bumped entry count from `glassCatalog.ts`'s header (it happened to read 463, which is
  currently correct) and from `agent_docs/glass-relabel-followup.md` (which read a stale 443); both now point at
  `catalogSize()`.
- (b) Normalized nine CDGM canonical names to the vendor's mixed case: `H-LaF3B`, `H-LaF4`, `H-LaK12`, `H-LaK6A`,
  `H-ZBaF52`, `H-ZLaF50D`, `H-ZLaF52A`, `H-ZLaF68C`, `D-ZLaF81-25`.
- **Beyond the spec's named files:** the canonical name appears in three places that must agree, not one.
  `GLASS_CATALOG_SOURCE_ORDER` is looked up by exact name (`entryByName` throws on a miss), and
  `DUPLICATE_CODE6_PRECEDENCE` is compared with `===` in `glassCatalog.ts` (~368) — leaving either uppercase would
  have thrown at import or silently broken duplicate-code precedence for 744449/750350. Both updated with `cdgm.ts`.
- `source:` provenance strings keep the uppercase spelling of the refractiveindex.info page they cite; only the
  `name:` fields changed.
- `dispersion.test.ts`: updated the two pins that asserted `H-LAF4`, and added a case-insensitive resolution test so
  the "existing all-caps lens annotations still resolve" guarantee stays enforced rather than assumed.
- (c) Added source dates to the two undated shard phase comments in `cdgm.ts` (Phase 45 → July 29, 2026; Phase 14 →
  May 2026, both taken from `agent_docs/glass-catalog-buildout.md`).

Verification: gate passed (222 files / 2614 tests); `npm run generate:glass-reports` run from a checkout with
`patents/` populated (505 files, per `agent_docs/gotchas.md:46`) changed only `glass-ambiguities.generated.md` and
`six-digit-glass-codes.generated.md`, and a line-by-line pairing check confirms the diff is casing-only —
resolution winners, criteria, deltas, and duplicate-code "preferred/alternate" markers are all unchanged.

## Follow-ups

- Stage 1 is complete (D1, N10, D2, D3, D4, D7, D9, D8, D10). Stage 2 onward untouched.
- New item **D11** filed during D8: 36 committed `src/**/readme.md` folder docs are stale and 5 were never
  generated. Deliberately not fixed here.
- Not touched, noticed in passing and left alone: `getFirstGitFileFreshnessAsync` relies on
  `getGitFileFreshnessAsync` being called without `fallbackDate` so it returns `null` and the loop can try the next
  path. That is correct today but fragile — adding a default `fallbackDate` there would silently disable the
  moved-file fallback. Not filed as a plan item; noting it here.
