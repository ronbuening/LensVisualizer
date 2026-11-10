# Generated Folder Docs and Merge Conflicts (proposal)

A proposal to stop the generated `src/**/readme.md` and `src/**/improvementsuggestions.md` files from causing merge
conflicts. It is waiting on Ron's choice of option. When an option lands, delete this file and record the outcome in
`agent_docs/decisions.md` (retention trigger in `documentation-policy.md`). The figures below were measured on
2026-11-10 against `main` at `4995650`; rerun the method in [Evidence](#evidence) before relying on them later.

## Recommendation

1. **Delete `improvementsuggestions.md` now, whatever else is chosen.** It is boilerplate, it carries the most volatile
   data in the set, and it duplicates the job of `EFFICIENCY_IMPROVEMENT_PLAN.md`.
2. **Stop committing `readme.md` (Option B).** Keep the generator, gitignore its output, and drop the freshness test.
   The maps stay available on demand in about 2.3 seconds, and the conflicts go away entirely, not just mostly.
3. **If the maps must stay browsable on GitHub, use Option C instead**: keep them committed, but make the generator
   emit only structural facts. Replayed against the real merges, it removes most of the conflicting files (48 → 3, in a
   small sample). It does not reduce how many PRs must carry regenerated docs: about half still would.

Removing the generator outright (Option A) is acceptable but gives up more than it needs to: the curated folder-role
prose lives in the generator, and keeping it on demand costs nothing.

## Evidence

### How often they conflict

- **Replayed merges.** Every two-parent merge commit since the generator landed (2026-06-23, `8cdd554b`) was replayed
  with `git merge-tree`; 80 merges, of which 28 conflicted. 13 of the 28 conflicted on generated docs. In 4 of the
  13, the generated docs were the *only* conflicts: without them, those merges would have been clean.
- **Conflicting files by type.** The 28 conflicted merges had 88 conflicting files; 43 (49 %) were generated folder
  docs. The largest of the rest: `src/utils/content/changelogData.ts` 10 (removed on 2026-11-10 by #973's
  one-file-per-entry changelog),
  `agent_docs/sd-audit-queue.md` 9, `agent_docs/generated/` 6, `src/lens-data/LENS_DATA_SPEC.md` 4.
- **Lower bound.** Squash-merged PRs and rebased branches do not leave a merge commit, so their conflicts are not
  visible. These counts are a floor, not an estimate.
- **Churn.** 34 of the last 60 PRs merged to `main` committed generated-doc changes (30 of them in `readme.md`).
  Counting every commit since 2026-10-01, branch commits included, 140 of 460 touched at least one `readme.md`:
  `src/optics/readme.md` in 85, `src/types/readme.md` in 52, `src/optics/trace/readme.md` in 40.

### Why they conflict

1. **A freshness gate puts them in most code PRs.** `__tests__/docDrift.test.ts` runs
   `generate-src-readmes.mjs --check`. Any change to an import, an export, a file name, or the line count of a large
   file therefore fails the tests until the PR also commits regenerated docs. Lens and content PRs escape, because
   `src/lens-data/` is skipped and changelog entries change no imports. Engine, UI, and tooling PRs rarely do: about
   34 of the roughly 38 in the last 60 PRs committed doc edits (classified by PR title). Concurrent code PRs end up
   editing the same generated files.
2. **Aggregates share lines.** Edge weights (`|62|`), per-folder counts (`src/optics/analysis (62)`), lists ordered by
   count and cut at the top five or eight (`+6 more`), and line counts (`opticsRenderingBenchmark.tsx (2177 lines)`)
   each summarize many source files on one line. Two PRs that touch *different* files in a folder still rewrite the
   *same* line. This is the shared-counter pattern that made `changelogData.ts` conflict.
3. **One import edits two folders.** Adding an import rewrites the importing folder's file row, overview, and diagram,
   and the imported folder's "Imported by" cell and "External consumers" line. Hub folders (`src/optics`, `src/types`)
   are touched by most engine PRs.
4. **`improvementsuggestions.md` records line counts.** Any edit to a file of 650 lines or more rewrites its folder's
   "Evidence" line, so two PRs that change the length of the same large file conflict there, even when their source
   edits merge cleanly.

### What a structural-only generator would have done

The 13 merges were replayed again. For each one, docs were regenerated at the merge base and at both parents with
three variants of today's generator, and each doc was merged three ways with `git merge-file`. The current generator
gives 48 conflicting files rather than the 43 observed, because the generator itself has changed since those merges.
The sample is small and clustered: 12 of the 13 merges fall on 2026-10-27 and 2026-10-28, a burst of parallel PRs.
Read the result as a direction, not a rate.

| Generator variant                                                                      | Conflicting docs | Merges affected |
| -------------------------------------------------------------------------------------- | ---------------: | --------------: |
| Current                                                                                |               48 |           13/13 |
| No counts or count-ranked truncation; alphabetical sets; no `improvementsuggestions.md` |                9 |            7/13 |
| As above, and no Exports column                                                        |                3 |            2/13 |

The 3 that remain are real structural overlaps: adjacent table rows changed on both sides, or both branches changing
the same module's set of dependencies. That is the floor for any committed artifact that every PR has to regenerate.

### How many PRs would still carry doc edits

The same three variants were run on each of the last 60 first-parent commits of `main`, and each output was compared
with its parent's. For `readme.md`, the current variant agreed with the committed history on which of the 60 commits
changed the docs and which did not.
`improvementsuggestions.md` was excluded from that comparison because today's generator no longer exempts the deleted
`changelogData.ts`.

| Generator variant (`readme.md` output) | PRs that must commit doc edits | Doc files changed | Doc lines changed |
| -------------------------------------- | -----------------------------: | ----------------: | ----------------: |
| Current                                |                          30/60 |               257 |             3,864 |
| Structural only                        |                          30/60 |               196 |             2,932 |
| Structural only, no Exports column     |                          28/60 |               171 |             2,814 |

Option C makes the edits merge cleanly. It does not make them rarer: the PRs that change imports are the same PRs that
add files, add folder-level dependencies, or reshape a diagram. About half of all PRs would still regenerate and commit
docs, about 100 changed lines each (removed plus added), and would still fail CI when that step is forgotten. Only Option B removes both the
conflicts and the per-PR step.

### How well they answer "where is this used?"

- **Folder-level, and `src/` only.** "Imported by" names folders, not files or symbols, and leaves out `__tests__/`,
  `scripts/`, and `reports/`. For `src/optics/fieldGeometry.ts` it lists four `src/` folders correctly but misses a
  test, a report, and two audit scripts that also import it.
- **Truncated.** 44 of the 676 file rows cut "Imported by" with `+N more`; 102 cut "Exports".
- **No barrel resolution.** The project routes imports through public barrels, so the useful question is often "who
  calls `computeMtf`?". That needs re-export chains followed at symbol level, which these tables cannot do.

`grep` answers the file-level question exactly. TypeScript's find-references answers the symbol-level one, barrels
included (see [Optional: a precise where-used query](#optional-a-precise-where-used-query)).

### Costs found along the way

- **The client bundle ships five of them.** The eager `import.meta.glob("../../content/**/*.md")` in
  `src/utils/content/homepageContent.ts` matches the generated `readme.md` files under `src/content/`. A
  `vite build` confirms that all five (about 15 KB) end up in the `homepageContent` chunk. Fix this whichever option is
  chosen, for example with a `"!../../content/**/readme.md"` negative pattern.
- **Special cases that exist only because the output lives in `src/`:** the `GENERATED_DOC_NAMES` exemption in
  `scripts/build-metadata-lib.mjs`, the `readme.md` filter in `__tests__/src/components/markdown/ThemedMarkdown.test.tsx`,
  the coverage-glob note in `vite.config.js`, and `PATH_MENTION_ONLY_SCRIPTS` in
  `__tests__/src/optics/opticsArchitecture.test.ts`. The last exists only because the generator names
  `glassCatalogData.ts` to keep it out of the large-file warning.
- **Size.** 95 tracked files, 5,357 lines, and about 474 KB of derived text that shows up in PR diffs.

## Options

### Option A — Remove the generator and its output

Delete `scripts/generate-src-readmes.mjs`, the 95 files, `generate:readmes`, the two drift tests, and every reference
to them.

- **Gains:** the simplest result, and no conflicts.
- **Costs:** loses the curated folder-role prose in `folderRoleOverrides`, which has no other home. Some of it overlaps
  the Project Map in `agent_docs/architecture.md`, but not all. Agents lose the per-folder overview.

### Option B — Stop tracking them; generate on demand (recommended)

1. **Delete the suggestions output.** Remove `suggestForDir`, `syncSuggestions`, `findCycleSuggestions`, and the
   large-file exclusion sets from the generator. Delete the 25 tracked `improvementsuggestions.md` files and the drift
   test "omits intentionally data-heavy sources from large-file warnings". Then remove the generator's entry from
   `PATH_MENTION_ONLY_SCRIPTS`. The scanner it exempts from only matches quoted `src/optics/<file>.ts(x)` file paths, and
   the `glassCatalogData.ts` exclusion is the generator's only one; its folder-path strings do not match. If import
   cycles matter, a test that fails on a *new* cycle is a better fit than a generated note; today there is one cycle.
2. **Untrack the readmes.** Add `/src/**/readme.md` to `.gitignore`, which also matches `src/readme.md`, and run
   `git rm --cached` on the 70 tracked files. No hand-written `readme.md` exists under `src/`, so the pattern is safe.
3. **Take the generator out of `build`.** Production output has no use for it. Keeping it in `generate:metadata` is
   optional: it keeps local copies fresh for about 2.3 seconds per run.
4. **Remove the freshness gate.** Delete the `--check` test in `__tests__/docDrift.test.ts` and the generator's
   `--check` mode.
5. **Fix the content glob**, as described under [Costs found along the way](#costs-found-along-the-way).
6. **Update the docs that point at the files:** `CLAUDE.md` and `AGENTS.md` (Commands and Verification),
   `agent_docs/workflow.md`, `agent_docs/documentation-policy.md` (Regenerable content), `agent_docs/architecture.md`
   (Project Map note), and `architecture/public-functions.md`, `state-and-utilities.md`, `comparison.md`, and
   `ui-components.md`. Each should say "run `npm run generate:readmes` for per-folder maps (gitignored)".
7. **Record the decision.** Add a dated `agent_docs/decisions.md` entry that supersedes the 2026-08-04 D11/D12 entry.
   It should also say why the 2026-09-09 decision to keep `agent_docs/generated/` committed still stands: those
   reports have no per-PR freshness gate, so they conflict only when two branches both choose to regenerate them.

Trade-offs to accept:

- **Not on GitHub.** Neither the GitHub web view nor tools that only read committed files will see the maps.
- **Hidden from default search.** Ripgrep-based search, including Claude Code's Grep tool, skips gitignored files by
  default, so agents reach the maps by opening them by path or by regenerating them. The docs in step 6 should say so.
- **Absent on a fresh clone.** A fresh clone, or a new cloud session, has no maps until someone runs the generator.

A variant writes the maps into a gitignored directory outside `src/` instead of beside the code. That removes the
special cases listed under [Costs found along the way](#costs-found-along-the-way), but the maps become harder to find
and the generator's relative links need rewriting. In-place is the smaller change.

### Option C — Keep them committed, emitting structural facts only

- **Make the output stable.** In `generate-src-readmes.mjs`, have `summarizeTargets` return an alphabetical set with
  no counts. Remove the top-N truncation, both in `formatListCell` and in the two Directory Overview lists. Sort
  diagram edges alphabetically, with no `|n|` weights and no 36-edge cap. Drop the Exports column and all suggestions
  output.
- **Collapse the diffs.** Add `src/**/readme.md linguist-generated=true` to a new `.gitattributes` so GitHub hides them
  in PR diffs by default. This changes review noise only, not conflicts.
- **Gains:** the maps stay browsable and fresh, and the replay shows conflicting docs falling from 48 to 3.
- **Costs:** the freshness gate stays, so PRs that add files or folder-level dependencies still carry doc edits and
  occasionally conflict. The dependency weights and export lists are also lost.

### Not recommended

- **Bot-regenerated docs on `main`.** PRs would never touch the docs, and a workflow would regenerate and commit after
  each merge or nightly. It needs a token that branch protection lets push to `main`. With the default
  `GITHUB_TOKEN`, the bot's commits trigger no workflow runs, so `main`'s head goes unchecked; with a PAT or app token,
  every bot commit re-runs `quality.yml` and therefore `deploy.yml`. It also needs race handling for concurrent pushes,
  and every local `generate:*` and `build` path changed so that it stops writing the files. That is a lot of
  machinery for docs that take 2.3 seconds to generate.
- **Merge drivers in `.gitattributes`.** A custom driver such as `merge=ours` plus a regenerate step needs per-clone
  `git config`. GitHub's merge button and mergeability check do not run custom drivers, so PRs would still show
  conflicts. Built-in `merge=union` would quietly duplicate table rows, and GitHub's support for it should not be
  relied on either.
- **Finer-grained files**, such as one doc per source file. This multiplies the file count, and the hot lines are the
  per-folder aggregates in any case.

## Until an option lands

When a merge from `main` conflicts on generated docs, resolve the source conflicts first, then regenerate the docs
rather than hand-merging them:

```bash
git diff --name-only --diff-filter=U -z -- ':(glob)src/**/readme.md' ':(glob)src/**/improvementsuggestions.md' | xargs -0 -r git checkout --theirs --
npm run generate:readmes
git add -A -- ':(glob)src/**/readme.md' ':(glob)src/**/improvementsuggestions.md'
```

This was replayed on merge `e487b355`, where the generated docs were the only conflicts. It cleared all four,
`--check` passed, and the result was byte-identical to the docs that merge actually committed.

## Optional: a precise where-used query

If the "where is this used" question is the main reason to keep the maps, a small `scripts/where-used.mjs` built on the
TypeScript language service answers it better than any generated table. Load the project from `tsconfig.json`, which
already includes `src`, `__tests__`, and `reports`. For a `file#symbol` argument, call `findReferences`, which follows
barrels, re-exports, and aliases, and print the referencing file and line. `scripts/*.mjs` is outside the TypeScript
project, so add a plain-text scan for path-loaded modules if scripts matter. This adds no committed artifacts and does
not go stale.

## Other conflict hot spots

These are lower priority than the generated docs:

- **`src/utils/content/changelogData.ts`** (10 conflicting files) was removed on 2026-11-10 by #973.
- **`agent_docs/sd-audit-queue.md`** (9) conflicts in prose that records census totals each branch rewrites, such as
  "4,389 of 5,062 stations are within 3 %". `documentation-policy.md` already excludes pass counts and command output.
  Leave the totals to the audit script's output and keep the queue to its rows.
- **`agent_docs/generated/` glass reports** (6) have the same shared-counter header, such as "**1103** lenses scanned",
  which changes with every lens. The 2026-09-09 decision keeps them committed, and no test enforces their freshness.
  If they start to bite, regenerate them in one follow-up commit on `main` after a batch of lens PRs lands, rather
  than inside each lens PR.
