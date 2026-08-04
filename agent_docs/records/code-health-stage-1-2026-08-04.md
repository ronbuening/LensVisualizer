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

## Follow-ups

- Remaining Stage 1 items tracked in the plan; later stages untouched.
