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

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed (223 files, 2606 tests)

## Follow-ups

- Remaining Stage 1 items tracked in the plan; later stages untouched.
