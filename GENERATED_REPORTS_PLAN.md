# Generated Reports — Open Work

`agent_docs/generated/` and the README lens count are written only by the post-merge refresh on `main`
(`.github/workflows/refresh-reports.yml`); pull requests preview them and never commit them. The rule, its evidence and
what it supersedes are in `agent_docs/decisions.md` (2026-11-27); how to preview is in `agent_docs/README.md`
§ Generated reports and benchmarks. This file holds only what is still open. Delete each item when it is done, and the
file when it is empty.

## 1. Commit the patent inventory (owner)

`reports/data/patent-inventory.txt` lists no PDFs yet, so CI cannot produce the two six-digit reports or the
glass-coverage-opportunities report; until it does, the refresh leaves those three as committed. On the machine that
holds the full `patents/` archive, run `npm run patents:inventory`, review the list (it records every `*.pdf` filename
under `patents/`, which becomes public), and commit it. Check: the pull request's report preview lists those three
reports as regenerated, and unchanged unless lens data changed.

## 2. Confirm the first refresh

After the change merges, run **Actions → Refresh Generated Reports → Run workflow** on `main` (or wait for the next
merge). Expect one commit by `lensvisualizer-reports[bot]` that updates `element-focal-lengths` (it scanned 1,148 lenses
against 1,224), `mirror-fixtures` (9 fixtures against 10), the MTF Status line, and every report's new notice line.
Confirm that Quality Checks and the GitHub Pages deploy did not run for it.

## 3. Confirm Cloudflare skips bot commits

Not verifiable from the session that built this (the documentation host was blocked): whether `[skip ci]` in a commit
message skips the Cloudflare Pages production build. If the bot commit from item 2 triggers a build, set the project's
build watch paths to exclude `agent_docs/**` and `README.md`. A rebuild is harmless, only wasted.

## 4. Migrate open pull requests

On 2026-11-27, 21 open lens-package PRs (#993–#1033) carried the README count and 15 carried regenerated reports; the
`reports` job now fails them. On each branch: `git fetch origin main && git merge origin/main`, then
`git checkout origin/main -- agent_docs/generated README.md` (these PRs change only the count line in `README.md`),
`git rm` any report the branch added, and commit. A branch that edited
`agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md` re-applies the edit at
`reports/data/six-digit-glass-codes-missing-sellmeier-reviewed.md`.

## 5. MTF chart regression runtime

The full `MTF_CHART_REPORT=1` run took 2,280 s on one core of a 4-vCPU container (2026-11-27), past its 30-minute test
timeout (the refresh raises it through `MTF_CHART_TIMEOUT_MINUTES`); the #770 commit message (2026-10-08) called it
"about two minutes", and its output then differed from the committed report only in the provenance stamp. Find out
whether that is a regression (time the run at #770, #988/#990 and current `main` on one machine), then run the 19
independent lens/zoom configurations in parallel. Until then the full run on `main` happens only when the refresh
workflow is started by hand with its `mtf` input.

## 6. Remaining conflict hotspots

Replaying the 21 open lens PRs pairwise left 39 of 210 pairs conflicting once reports and the README count were out of
them. In order of size, each still to be measured with the same `git merge-tree` replay before and after:

- **Glass catalog vendor arrays** (17 pairs: appends at the end of `sumita.ts`, `hoya.ts`, `ohara.ts`). Order inside a
  vendor array never reaches the runtime: `RAW_CATALOG` is `GLASS_CATALOG_SOURCE_ORDER.map(entryByName)` over a name
  map (`src/optics/chromatic/glassCatalogData.ts`), and `dispersion.test.ts` checks that every entry is listed. Sort
  each array by name once (the report preview should show no change), then add a test that keeps them sorted.
- **`agent_docs/sd-audit-queue.md` tables** (15 pairs: appended rows). Insert rows in lens-path order and add a
  sortedness check to `__tests__/docDrift.test.ts`.
- **Census totals in `agent_docs/lens-mount-format-backfill.md`** (up to 6 pairs). Delete the running totals, as #977
  did for the SD audit queue, or move them into a small generated report that the refresh keeps current.

## 7. Optional: require checks before merging

The "Protecting Main" ruleset requires a pull request but no status checks, so a failing `reports` guard (or `test`)
does not block a merge. To enforce them, enable "Require status checks to pass" in the ruleset and add the checks; the
App's bypass also covers that rule, so the refresh keeps working.
