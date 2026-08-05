# Code Health Plan — Stage 2 (regression nets before behavior or structure changes)

## Summary

- Executes Stage 2 of `agent_docs/code-health-improvement-plan.md` in the documented order:
  N1 → N2 → N3 → N4, N6 → N7 → N8 → N9, G12.
- One commit per item; the full gate
  (`npm run typecheck && npm run format:check && npm run lint && npm run test`) runs before each commit.
- Stage 1 record: `agent_docs/records/code-health-stage-1-2026-08-04.md`.

## Changes

### N1 — author/assignee patent-count parity

- New `__tests__/src/utils/catalog/partyPatentParity.test.ts`: walks all 375 `AUTHORS` and 49 `ASSIGNEES`,
  asserting runtime `patentsForParty(name, role).length` equals the generated `patentCount` and that the union of
  record lens keys equals the generated `lensKeys`. Failures are collected and reported as a list rather than
  failing on the first party.
- **The spec's stated verification is wrong and could not be made to hold.** It claims dropping the `lens:` prefix
  from the fallback identity fails the test. It does not: all 504 visible lenses carry an explicit `patentNumber`
  (verified by walking `lens-summaries.json`), so the fallback branch is unreachable. Even replacing it with an
  outright `continue` leaves every assertion green.
- What the walk *does* catch, verified by mutation: keying the aggregation per lens instead of per patent
  (`patentIdentity = \`lens:${key}\``) fails 15 parties immediately — Erich Wagner 3→4, Franz Schlegel 5→7,
  Haruo Sato 11→12, etc. That is the divergence class real data exercises.
- Added a third case pinning the collapse-multiple-lenses-into-one-patent behavior directly, plus a comment in the
  test recording why the fallback branch is uncovered and where the generator half *is* covered
  (`authorMetadata.test.ts`, "counts attributed fallback records when a patent number is missing").
- Correction appended to the N1 spec in the plan so the next reader is not misled by the original verification line.

Verification: gate passed (223 files / 2621 tests).

## Follow-ups

- Runtime-side fallback identity stays untestable until `patentsForParty` stops reading module-level
  `LENS_SUMMARIES` — that is plan item **C1**.
