# Generated Reports Off PR Branches — Plan

Status: proposal, 2026-11-27. Measured against `main` at `1f3dd9d` ("Add nine lenses from the November 26 package
(#991)") and the 28 pull requests open on that date. Indexed as a `[queue]` plan in `agent_docs/README.md`; delete it
once every stage has landed, after moving its standing decisions to `agent_docs/decisions.md`.

## 1. Goal and acceptance criteria

Keep every report that LensVisualizer maintains today, but take the regenerated files out of pull requests. Reports
are refreshed on `main` after each merge, and every pull request still shows what it changes in them.

The work is done when:

1. No pull request (lens package or otherwise) commits changes to `agent_docs/generated/**` or to the README lens
   count. CI rejects one that does.
2. Within minutes of each merge, `main` carries every report refreshed for that commit, including the three
   patent-dependent glass reports. The slow MTF chart regression follows in its own job whenever its inputs changed
   (§ 4.4).
3. Every pull request shows its report effect as a CI job summary (which reports change, plus before/after summary
   sections), with the full diff as a downloadable artifact. Engine refactors keep the "no report byte-diff" gate
   from the 2026-08-04 decision; they read it from that summary instead of from committed files.
4. Running `npm test`, `npm run typecheck`, `npm run dev` or `npm run generate:reports` locally no longer changes
   any tracked file.

## 2. What the history shows

### 2.1 Report churn on `main`

There were 286 first-parent landings on `main` from 2026-08-01 to 2026-11-25. Almost all are squash-merged pull
requests; 17 are merge commits.

| Path | Landings that changed it | Share |
| --- | ---: | ---: |
| any file under `agent_docs/generated/` | 157 | 55 % |
| `sellmeier-coverage.generated.md`, `catalog-mismatches.generated.md` | 146 each | 51 % |
| `glass-ambiguities.generated.md` / `unresolved-glass.generated.md` | 145 / 144 | 50 % |
| `glass-coverage-opportunities.generated.md` | 137 | 48 % |
| both `six-digit-glass-codes*.generated.md` | 135 each | 47 % |
| `README.md` | 133 | 47 % |
| `agent_docs/lens-mount-format-backfill.md` | 54 | 19 % |
| `agent_docs/sd-audit-queue.md` | 41 | 14 % |
| `element-focal-lengths`, `mirror-fixtures`, `mtf-chart-regression` reports | 4, 2, 3 | ≈ 1 % |

The glass reports change in about half of all landings because the lens recipes tell authors to run
`npm run generate:glass-reports` after glass edits: `lens-patent-audit.md` (twice),
`lens-data-integration-handoff.md`, and `patent-figure-sd-audit-procedure.md` ("keep the regenerated reports in the
commit only if they changed"). Every lens package changes glass data, and each report's summary carries
catalog-wide totals (for example "**1224** lenses scanned"). So any two lens PRs edit the same lines.

That undercuts the premise #976 used to keep these reports committed. Its proposal argued that they "conflict only
when two branches both choose to regenerate them", because no test forces freshness. The recipes make most lens
branches choose to.

### 2.2 Conflicts among the open lens PRs

21 of the 28 open pull requests are dated lens packages, numbered between #993 and #1033. All 21 are 0 commits
behind `main`, so they are
re-merged after every landing. 15 of them carry regenerated reports, and all 21 change the README count. Each pair
was merged with `git merge-tree --write-tree`:

| Conflicted file | Pairs (of 210) |
| --- | ---: |
| `README.md` (lens count line only; verified for all 21 PRs) | 172 |
| `sellmeier-coverage.generated.md` | 105 |
| `unresolved-glass`, `glass-ambiguities`, `catalog-mismatches` reports | 104 each |
| `src/optics/chromatic/glassCatalogEntries/sumita.ts` | 17 |
| `agent_docs/sd-audit-queue.md` | 15 |
| `glass-coverage-opportunities.generated.md` | 15 |
| both `six-digit-glass-codes*` reports | 9 each |
| `agent_docs/lens-mount-format-backfill.md` | 6 |
| `src/utils/catalog/assigneeCorporateHistory.ts` | 1 |

**205 of 210 pairs conflict.** Next, the same pairs with files taken out of the PRs:

| Scenario | Pairs still conflicting | Kind of estimate |
| --- | ---: | --- |
| S0 today | 205 | measured |
| S1 reports out of PRs | 181 | exact (the files would match the base in both PRs) |
| S2 reports and the README count out of PRs | **39** | exact |
| S3 S2, plus no running totals in `lens-mount-format-backfill.md` | ≤ 33 | best case |
| S4 S3, plus sorted (not appended) glass catalog entries | ≤ 16 | best case |
| S5 S4, plus sorted (not appended) `sd-audit-queue.md` rows | ≤ 1 | best case |

Taking out the reports alone barely helps, because the README count line conflicts in nearly every pair. The README
count is a generated value too: `scripts/generate-build-metadata.mjs` rewrites it, and that script runs from the
`pretest`, `pretypecheck`, `pretest:tooling`, `pretest:coverage`, `dev`, `generate:metadata` and `build` scripts. So
any lens PR that runs its tests changes `README.md`. The S3–S5 figures are bounds: sorted insertion makes conflicts
rare, not impossible.

### 2.3 Today's reporting is already uneven

Every report was regenerated on an untouched `1f3dd9d` checkout (4 vCPU container, Node 22; CI uses 24.15.0):

- `npm run generate:metadata` took 18 s and `npm run generate:reports` took 43 s.
- The MTF chart regression's full `MTF_CHART_REPORT=1` run took **2,280 s (38 min)** on a single core (load ≈ 1.0 on
  4 vCPUs). That is past the report's own `TIMEOUT_MS` of 30 minutes, so the command **exits 1**, although it still
  wrote the report. Apparently the synchronous trace holds off the timeout until the work finishes. The rewritten report
  differed from the committed one only in its 4-line provenance stamp. The #770 commit message (2026-10-08)
  described this run as "about two minutes". Either the run has slowed sharply since then, or the machines it has
  been run on are much faster than this one. As it stands, it cannot be automated on a standard 4-vCPU runner
  (§ 5, stage 1b).
- The six glass reports that do not depend on `patents/` were current, since lens PRs regenerate them. The three
  that do depend on it could not be checked here (last bullet).
- Reports that no recipe asks for have drifted. `element-focal-lengths.generated.md` scans 1,148 lenses, against
  1,224 in the catalog (1,074 changed lines on regeneration). `mirror-fixtures.generated.md` lists 9 fixtures, but
  10 exist. `mtf-chart-regression.generated.md` turns to "Status: STALE — engine sources / 1 lens files", although
  the full run above shows its values had not actually changed.
- `patents/` holds only `.gitkeep` here, so the six-digit and glass-coverage-opportunities scans skipped their
  rewrite without saying so (`reports/glassScanLib.ts` `patentInventory()`). As things stand, CI cannot produce three
  of the reports at all.

A post-merge refresh fixes the drift as a side effect: every report is refreshed on every merge, not only the ones a
recipe happens to mention.

## 3. Root cause and the governing rule

Three kinds of tracked file are computed from the whole catalog and rewritten by individual branches:

1. **Report output** under `agent_docs/generated/`, regenerated because the recipes say so.
2. **The README lens count**, rewritten as a side effect of `npm test` and `npm run typecheck`.
3. **Hand-maintained census totals** in queue docs, such as the five count lines at the top of
   `lens-mount-format-backfill.md`. This is the same pattern #977 removed from the SD audit queue.

The repository has already fixed two siblings of this problem. #973 split the changelog into one file per entry, and
#976 made the folder maps on-demand. The rule this plan adopts:

> A tracked file computed from the whole catalog is written only on `main`, by the refresh workflow. Branches read
> it and never write it. A branch sees its own effect through a local or CI preview.

## 4. Design

### 4.1 Make every report a pure function of tracked files (prerequisite)

A CI runner has to produce byte-for-byte what the owner's machine produces, or the bot cannot own the reports.

- **Patent inventory manifest.** Commit `reports/data/patent-inventory.txt`: one PDF filename per line, sorted, no
  PDFs. A new `npm run patents:inventory` writes it from the local `patents/`. It only adds names by default; a
  `--prune` flag also removes them, so a session holding just one package's PDFs cannot shrink the list.
  `patentInventory()` reads the manifest, and the "skip rewrite when `patents/` is empty" branches in
  `sixDigitGlassCodeScan` and `glassCoverageOpportunitiesScan` are deleted. Little new is disclosed: the committed
  reports already print many of these paths, such as `patents/US7158320.pdf`, and the manifest adds the rest of the
  filenames, which are public patent numbers. The scans use only filenames (`readdirSync`), never PDF contents, so the
  output is unchanged.
- **Move the one hand-written input out of `generated/`.** Move
  `agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md` to `reports/data/`, beside
  `mtfChartAnchors.csv`, the existing home for report inputs. That means updating the two `REVIEWED_SIDECAR`
  constants, six lens `*.audit.md` links (the Tessar 50 and five Fujifilm GF logs), the `agent_docs/README.md` index
  line and the documentation-policy sentence that names it. Afterwards `agent_docs/generated/` is entirely
  machine-written, so the CI guard is a plain path rule.
- **MTF chart regression.** Its plain run already compares input hashes and writes `Status: current` or `STALE`. The
  full `MTF_CHART_REPORT=1` pass runs only when that status reads `STALE`, and in its own job (§ 4.4) because it is
  slow (§ 2.3). The provenance stamp (UTC date and checkout) changes on every full run, so running it unconditionally
  would also add a meaningless diff to every merge. Its assertions check only the recorded anchors, that each anchored lens exists, and that curves come back
  ("How close they sit to a chart is never asserted"). So a change in MTF values cannot make the bot fail.

Acceptance for this stage: on a checkout with no `patents/`, `npm run refresh:reports` (§ 4.4) gives output
byte-identical to the owner's run with `patents/` populated. Against the committed reports, it differs only in the
three drifted files from § 2.3.

### 4.2 Local runs write a preview, never tracked files

- Add `reports/reportOutput.ts`, a small helper that all twelve generators use for every write, replacing their
  hard-coded `agent_docs/generated` paths and the mount SVG directory. By default it writes to a gitignored `.reports/`
  tree that mirrors the repository paths. The tracked files are written only when `REPORTS_OUTPUT=tracked` is set,
  which only the refresh workflow does. The MTF plain pass still reads its provenance from the committed file.
- Add `npm run reports:diff`, which prints `git diff --no-index --stat` (and the full diff with `--full`) between
  `agent_docs/generated/` and `.reports/agent_docs/generated/`. Locally, "what does my branch do to the reports" is
  then two commands with nothing to revert, and no way to commit report output by accident.

### 4.3 README count and census totals

- Remove the README rewrite from `scripts/generate-build-metadata.mjs` (lines 289–298), so the pre-hooks stop
  changing `README.md`. The refresh workflow writes the count instead (§ 4.4), so it stays exact on `main`.
- Remove the running totals from `lens-mount-format-backfill.md`, as #977 did for the SD audit queue. If you use
  those numbers, a small `mount-format-coverage.generated.md` report can carry them, and the bot keeps it current at
  no cost to anyone.

### 4.4 Post-merge refresh workflow

`scripts/refresh-reports.mjs`, exposed as `npm run refresh:reports`, runs three steps in order:

1. `generate:metadata`
2. every report with `REPORTS_OUTPUT=tracked`, including the MTF report's plain status pass
3. the README count

With `--mtf`, it instead runs only the full MTF pass, and only if the plain pass left the report `STALE`. With a
script, the YAML stays small, and the owner can run the same refresh by hand if the workflow is ever down.

The workflow has two jobs:

- **`refresh`** (an estimated 2–3 minutes: about 1 minute measured for metadata and reports, plus checkout and
  `npm ci`) commits every fast report and the README count. It uses
  `cancel-in-progress`, because a newer merge's run supersedes an older one.
- **`refresh-mtf`** runs after `refresh` only if the MTF report is `STALE`, with `timeout-minutes: 90`. It commits
  separately, under its own concurrency group *without* `cancel-in-progress`. GitHub then keeps one run going and
  only the newest one waiting, so a burst of engine merges cannot keep cancelling a half-hour run. The sketch below
  shows `refresh`; `refresh-mtf` repeats it with `npm run refresh:reports -- --mtf`, after a fresh
  `git pull --ff-only` so that it commits on top of the newest `main`.

Sketch of `.github/workflows/refresh-reports.yml` (action versions to be pinned when it is implemented):

```yaml
name: Refresh Generated Reports
on:
  push:
    branches: [main]
    paths-ignore: ["agent_docs/generated/**", "README.md"]
  workflow_dispatch:
concurrency:
  group: refresh-reports
  cancel-in-progress: true # a newer merge's run supersedes this one; every run is idempotent
permissions:
  contents: read
jobs:
  refresh:
    runs-on: ubuntu-latest
    steps:
      - id: token
        uses: actions/create-github-app-token@v1
        with:
          app-id: ${{ vars.REPORTS_BOT_APP_ID }}
          private-key: ${{ secrets.REPORTS_BOT_PRIVATE_KEY }}
      - uses: actions/checkout@v4
        with: { ref: main, fetch-depth: 0, token: "${{ steps.token.outputs.token }}" }
      - uses: actions/setup-node@v4
        with: { node-version: "24.15.0", cache: npm }
      - run: npm ci
      - run: npm run refresh:reports
      - name: Commit and push when anything changed
        run: |
          git add agent_docs/generated README.md
          git diff --cached --quiet && exit 0
          git -c user.name="<app-slug>[bot]" -c user.email="<the App bot's noreply address>" \
            commit -m "Refresh generated reports for ${GITHUB_SHA::7} [skip ci]"
          git push origin HEAD:main || echo "main moved on; the newer merge's run refreshes it"
```

The #976 proposal rejected a post-merge bot for the folder maps. It lived in
`agent_docs/generated-folder-docs-proposal.md`, in that PR's first commit, and never reached `main`. Its reasons, and
how this design answers each:

| #976 objection | Answer here |
| --- | --- |
| "It needs a token that branch protection lets push to `main`." | § 4.6: a GitHub App as a bypass actor; fallbacks D and E in § 8 need no bypass. |
| "With the default `GITHUB_TOKEN`, the bot's commits trigger no workflow runs, so `main`'s head goes unchecked." | The bot commit changes only `agent_docs/generated/**` and the README count line. No build, site or test code reads the reports (checked by grep). The one test that reads `README.md` (`docDrift.test.ts`) checks only that its links and quoted paths resolve, which a count does not affect. So the commit's check results are its parent's, and the parent was checked on push. |
| "With a PAT or app token, every bot commit re-runs `quality.yml` and therefore `deploy.yml`." | `[skip ci]` in the bot's message, plus `paths-ignore: [agent_docs/generated/**, README.md]` on `quality.yml`'s `push` trigger only. Its `pull_request` trigger keeps no path filter, so required checks still report. With no Quality Checks run, `deploy.yml` (a `workflow_run` of it) does not fire either. |
| "Race handling for concurrent pushes." | One `concurrency` group with `cancel-in-progress`, a refresh that is idempotent, and a push failure that is not an error: the newer merge's run regenerates from the newer tip. |
| "Every local `generate:*` and `build` path changed so that it stops writing the files." | § 4.2 and § 4.3 do exactly that. The change is one output helper plus removing the README write. |
| "A lot of machinery for docs that take 2.3 seconds to generate." | These take about a minute, plus over half an hour for the MTF run, and three of them need inputs that cloud sessions lack. The measured cost of keeping them in PRs is 205 of 210 conflicting pairs. |

More design notes:

- **Only `main`.** Integration branches (`engine-next`, `lens-v2-migration`, `optics-rewrite/stage-8`) get no bot
  commits, so they never carry report changes into their own merge to `main`. The guard in § 4.5 covers PRs into
  them as well.
- **No loops.** This workflow's `paths-ignore` hides the bot's own commit from it.
- **Secrets stay away from PR code.** This workflow runs only on pushes to `main`, so the App key never reaches code
  from an unmerged pull request.
- **Failure.** If a generator throws after a merge, the commit on `main` shows a red check and the reports stay at
  their last good version. The PR preview in § 4.5 runs the same generators first, so this should be rare.

### 4.5 Reporting on pull requests: preview job and guard

Add a `reports` job to `quality.yml`, and include it in the aggregated required `test` check:

1. Check out the PR merge ref, run `npm ci`, `generate:metadata`, and `generate:reports` (to `.reports/`). If the
   plain MTF pass reports `STALE`, which happens only when the PR touches engine sources or anchored lens files, the
   summary says so and that the chart regression will be re-run after merge. The full pass does not run by default:
   it takes over half an hour (§ 2.3), and it asserts nothing about MTF values. An author who wants it before merge
   can run it on demand, through a `workflow_dispatch` input or a PR label such as `run-mtf-report`.
2. A small `scripts/report-preview-summary.mjs` writes to `$GITHUB_STEP_SUMMARY`. It lists each changed report with
   its added and removed line counts, then a unified diff of only its `## Summary` section; those totals are what
   reviewers read. It ends with "No report changes" when nothing differs, which is the engine-refactor gate.
3. Upload `.reports/` and the full diff as a `report-preview` artifact, kept for 14 days.
4. **Guard.** Fail the job if `git diff --name-only origin/$BASE...HEAD` lists anything under
   `agent_docs/generated/`, or if the README diff touches the `visible lens pages are currently published` line. The
   error message gives the fix (§ 5, stage 3).

The baseline is `main`'s committed reports. If a PR runs in the few minutes between a merge and its bot commit, the
summary also includes that merge's own report changes. That is noise, not a hidden change, and re-running the job
clears it. If that is ever a nuisance, the job can generate a second baseline from the base commit, at about a minute
more CI time.

Make the job required. Its only failure modes are a generator crash and the guard, and either would otherwise surface
after merge. It never fails on report content; that respects the standing rule that a report is "never a test
threshold".

### 4.6 Bot identity and branch protection (owner actions)

`main` is protected: the branch API reports `protected: true`, though this session cannot see which rules apply. A
plain `GITHUB_TOKEN` push will therefore probably be refused. In order of preference:

1. **A private GitHub App** with `contents: write`, installed on the repository and listed as a bypass actor on
   `main`'s ruleset or branch protection. The workflow mints a short-lived token from it. Nothing is tied to a
   personal account, and nothing expires unnoticed.
2. **A deploy key with write access** as a bypass actor, if `main` uses rulesets and they offer deploy-key bypass.
3. **A fine-grained personal access token.** It works, but it is tied to you and expires.

If you would rather no actor can bypass `main`'s protection, see the fallbacks in § 8 (D or E).

### 4.7 Remaining hotspots (stage 4, optional)

Once stages 1–3 land, between 33 and 39 of the 210 pairs still conflict (S2–S3 in § 2.2). Almost all of them are two
PRs appending at the same end of a list.

- **Glass catalog vendor arrays** (17 pairs, from appends at the end of `sumita.ts`, `hoya.ts` and `ohara.ts`). The
  order inside a vendor array never reaches the runtime. `RAW_CATALOG` is
  `GLASS_CATALOG_SOURCE_ORDER.map(entryByName)` over a name map (`src/optics/chromatic/glassCatalogData.ts`, lines
  765 and 903), and `dispersion.test.ts` ("ships every vendor shard entry exactly once") checks that every vendor
  entry is listed. So sorting each vendor array by name is safe by construction. Confirm it with one byte-identical
  report preview, then add a test that keeps each array sorted. Not measured: whether additions to
  `GLASS_CATALOG_SOURCE_ORDER` itself collide. None did in this sample.
- **`sd-audit-queue.md` tables** (15 pairs, from appended rows). Insert rows in lens-path order and add a sortedness
  check to `docDrift.test.ts`. A heavier option is to keep each finding in its lens's `*.audit.md` and have the bot
  generate the queue tables, which removes these conflicts for good. That changes how the queue is curated, so it is a
  separate decision.

## 5. Rollout

| Stage | Pull request / action | Contents | Verification |
| --- | --- | --- | --- |
| 0 | Owner, no code | Create the App, add it as a bypass actor, store `REPORTS_BOT_APP_ID` (variable) and `REPORTS_BOT_PRIVATE_KEY` (secret). Check Cloudflare Pages behaviour (§ 9). | n/a |
| 1 | PR A, additive | § 4.1 manifest and sidecar move; § 4.2 output helper with the default still `tracked`; `refresh-reports.mjs`. Run `npm run patents:inventory` once, on the machine that holds the full `patents/` archive. Commit the one-time refresh of the three drifted reports. **This is the last PR that commits reports.** | The byte-identity check in § 4.1; full pre-commit suite |
| 1b | PR A′, MTF runtime | Make the full MTF pass fit a CI job and exit 0. Its 19 lens/zoom configurations are independent, so spread them over a worker pool (at most about 4× faster on 4 vCPUs, since 19 runs of unequal length do not divide evenly), and set `TIMEOUT_MS` from a measured runner time. Find out first whether the slowdown from "about two minutes" is a regression. Until this lands, `refresh-mtf` stays manual (`workflow_dispatch`) and the bot keeps only the Status line current. | The full run passes on a GitHub-hosted runner, and its output differs from the committed report only in the provenance stamp |
| 2 | PR B, flip | Default output becomes `.reports/`; add `reports:diff`; remove the README write; remove the census totals; add `refresh-reports.yml`; add the § 4.5 job and guard; update the docs (§ 6) and decisions (§ 7); `cp CLAUDE.md AGENTS.md` | After merge, trigger the refresh once by hand. Confirm a bot commit appears only when something changed, Quality Checks and deploy are skipped, and a test PR shows the summary and is stopped by the guard. |
| 3 | Open branches | On each branch: `git fetch origin main`, `git merge origin/main`, then `git checkout origin/main -- agent_docs/generated README.md` and commit. That is safe for the 21 lens PRs, which change only the count line in `README.md`. A branch that also edited README prose reverts just the count line. A branch that edited the moved sidecar applies its edit at the new path. | The guard passes |
| 4 | Optional, later | Remaining hotspots (§ 4.7) | Measured with the same merge-tree replay |

Stages 1 and 2 are separate so that PR A can be checked for unchanged output on its own. Neither stage leaves `main`
without a working way to refresh: until PR B merges, the reports are still committed the old way.

## 6. Documentation changes (PR B)

Every place that tells an author to regenerate and commit, or that describes the old behaviour:

- `CLAUDE.md` / `AGENTS.md`: the `generate:*` Commands comments and the mount-diagram lines; stay under 200 lines and
  byte-identical.
- `agent_docs/README.md`: the "Generated reports and benchmarks" section, and the moved sidecar's index line.
- `agent_docs/workflow.md`: the commands fence (guarded against `package.json`: add `refresh:reports`,
  `reports:diff`, `patents:inventory`) and the CI and deployment section.
- `agent_docs/documentation-policy.md`: the "only hand-written file there" sentence; generated files are written only
  by the refresh workflow.
- `agent_docs/gotchas.md`: replace the report bullet, which describes the empty-`patents/` skip.
- Recipes: `lens-patent-audit.md` (two places), `lens-data-integration-handoff.md`,
  `patent-figure-sd-audit-procedure.md`, `glass-relabel-followup.md`, `proprietary-glass-backfill.md`,
  `glass-catalog-buildout.md`, `adding_a_lens.md`, `architecture/testing.md`, `architecture/mount-diagrams.md`,
  `src/mounts/MOUNT_SVG_SPEC.md`, `src/lens-data/LENS_DATA_SPEC.md`. Each one says to preview with
  `generate:… && reports:diff`, and that `main` refreshes the reports after merge.
- The generators' "**Regenerate this file**" header lines and `vitest.reports.config.js`'s comment. Changing the
  header lines changes the reports, which costs one bot diff.
- `__tests__/docDrift.test.ts`: exempt `.reports/` from the quoted-path check, as `src/generated/` already is. Fresh
  checkouts have no preview tree, and this is the same trap #976 documented for the folder maps.

## 7. Decisions to record

One new dated bullet in `agent_docs/decisions.md`, with the evidence from § 2:

- It keeps the 2026-09-09 decision: reports stay committed, and only who writes them changes.
- It supersedes the 2026-11-10 rejection of "bot commits regenerating them on main", for reports only; the folder
  maps stay on demand. The decision line gives no reason, but the #976 proposal does, and § 4.4 answers each of its
  objections. Reports also differ in kind: their history and on-GitHub visibility are the point, three of them need
  inputs that cloud sessions lack, and the MTF run takes over half an hour.
- It corrects the 2026-11-10 premise that the reports "conflict only when two branches both choose to regenerate
  them": the recipes make 55 % of landings regenerate them (§ 2.1).
- It supersedes G8/X10 (skip the rewrite when `patents/` is empty), replaced by the tracked inventory.
- It records that the 2026-08-04 refactor byte-diff gate is now read from the PR's report-preview summary.
- It notes, for reference, that the 2026-08-04 limit of about 300 KB per generated file is currently exceeded by
  five reports, `element-focal-lengths` at 2.2 MB the largest. That is out of scope here, and the bot makes it no
  worse.

## 8. Alternatives considered

| | Option | Why not (or when) |
| --- | --- | --- |
| A | Gitignore the reports and generate on demand, as with the folder maps | Loses report history and GitHub viewing, contradicts 2026-09-09, and cloud sessions cannot produce the patent-dependent reports. |
| B | Count-free report output (the option measured on 2026-11-10) | The glass reports' totals are their content. |
| C | `.gitattributes` merge drivers | GitHub's merge button and mergeability check do not run custom drivers, and `merge=union` silently duplicates table rows (both recorded in the #976 proposal). |
| D | Bot commits to a separate unprotected `reports` branch | Needs no bypass and adds no commits to `main`, but reports leave `main` checkouts and links break. **Fallback if no bypass actor on `main` is acceptable.** |
| E | A refresh PR, nightly or after each merge, with auto-merge | Up to a day stale, more PR noise, and a PR opened with `GITHUB_TOKEN` probably triggers no required checks (§ 9, item 1), so it still needs an App token. Second fallback. |
| F | GitHub merge queue | Checks run on the merge group, but cannot add commits to it. |

## 9. Risks, and what this session could not verify

Risks:

- **An extra "behind" step.** Each merge is followed a few minutes later by a bot commit. If "require branches to be
  up to date" is on, a PR updated between the two goes behind once more. That update is now conflict-free (one click
  of "Update branch"), where today it costs a manual merge.
- **Bot outage.** Reports go stale on `main` but stay correct for the commit they describe. Previews still work, and
  `npm run refresh:reports` is the manual fallback.
- **Old habits.** Agents trained on the old recipes will regenerate reports. With output going to `.reports/`,
  that is harmless, and the guard catches anything else.
- **Repository growth.** About the same as now or less: the same diffs land once per merge, without today's repeated
  regenerations on long-lived PR branches.
- **MTF job cost.** Until stage 1b lands, a full MTF run costs about 40 runner-minutes and fails on its timeout. Keep
  `refresh-mtf` manual until then.

Platform behaviour to confirm before stage 2. `docs.github.com` and `developers.cloudflare.com` are blocked by this
session's network policy, so these points rest on recall, not on the documentation:

1. Pushes made with `GITHUB_TOKEN` do not trigger workflows, while App-token pushes do. The #976 proposal stated the
   same. That is why the sketch uses `paths-ignore` and `[skip ci]`.
2. `[skip ci]` in the commit message skips push-triggered GitHub workflows.
3. Cloudflare Pages: whether `[skip ci]` (or `[CF-Pages-Skip]`) skips the production build, or whether build watch
   paths should exclude `agent_docs/**` and `README.md`. Otherwise every bot commit triggers an unnecessary but
   harmless rebuild.
4. Which protection type `main` uses (classic or rulesets), and whether Apps and deploy keys can be bypass actors.
5. The current major version of `actions/create-github-app-token`.

## 10. Decisions needed from you

1. **Bot identity:** GitHub App (recommended), deploy key, or PAT; or no bypass, which means fallback D or E.
2. **Patent status in reports:** the committed filename manifest (recommended; reports unchanged), or drop the
   patent-match columns from committed reports and keep them in a local-only overlay.
3. **README count:** maintained by the bot (recommended), or replaced with fixed prose such as "over 1,200".
4. **Census totals in `lens-mount-format-backfill.md`:** delete them, or move them to a small generated report.
5. **Stage 4:** do the sorted-insertion follow-ups now, or measure again after stage 3.
6. **MTF automation:** post-merge `refresh-mtf` once stage 1b makes it fit (recommended), a nightly run when the report
   is stale, or keep it manual.
