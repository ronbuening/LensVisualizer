# Record Keeping — LensVisualizer

## Purpose

Keep a lightweight, durable record of branch work so future sessions can recover context quickly without bloating `CLAUDE.md`.

## What To Record

Record only information that will matter after context is gone:

- Current branch purpose
- Meaningful user-facing or architectural changes
- New analysis tabs, controls, or workflow changes
- Commands run for verification and whether they passed
- Open follow-ups, known limitations, or deferred work
- PR-ready summary points when a branch is approaching review

Do **not** copy large diffs, command transcripts, or code snippets here.

## Where To Record It

- Keep durable process guidance in docs like this one
- Keep branch-specific notes in a short markdown file under `agent_docs/records/`
- Prefer one file per branch or task, with a descriptive name such as:
  - `agent_docs/records/focus-breathing-distortion-overhaul.md`
  - `agent_docs/records/pr-123-followups.md`

## Recommended Template

```md
# <Task or Branch Name>

## Summary
- Short description of the goal

## Changes
- High-signal bullets only

## Verification
- `npm run typecheck` — passed
- `npx vitest run ...` — passed

## Follow-ups
- Remaining UI polish, edge cases, or cleanup
```

## Updating Records

- Update the branch record at the end of each substantial stage, not every tiny edit
- Before opening a PR, make sure the record reflects the final scope and verification status
- When work is merged and no longer useful for active context, the record can be pruned or replaced by the PR itself

## Governing Principle

Prefer short, high-signal notes that help the next session restart work confidently.
