# Deterministic Generated Reports Without Local patents/

## Summary

- `npm run test` in a fresh worktree or CI (no local `patents/` PDFs) was silently rewriting checked-in reports under
  `agent_docs/generated/` with "Missing from untracked local patents/ references" annotations and large Sweep 1
  reordering churn.
- The tests-as-generators design is intentional (`npm run generate:glass-reports` is a vitest filter), so the fix keeps
  tests as the generators but makes their output deterministic when the patents inventory is unavailable.

## Changes

- `sixDigitGlassCodeScan.test.ts` and `glassCoverageOpportunitiesScan.test.ts` skip the report rewrite (with a console
  warning) when `patents/` contains no PDF files; the scan and its assertion still run. The coverage report sorts
  Sweep 1 by local patent availability, which was the source of the reordering churn.
- Regenerated `catalog-mismatches.generated.md` and `glass-relabel-by-lens.generated.md` once to normalize a trailing
  newline the checked-in copies had lost, so reruns are byte-identical.
- Documented the behavior in `agent_docs/README.md`, `agent_docs/glass-catalog-buildout.md`, and
  `agent_docs/gotchas.md`: regenerate the three patents-dependent reports only from a checkout with `patents/`
  populated.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed (after prettier on the two edited tests)
- `npm run lint` — passed
- `npm run test` — 185 files / 2240 tests passed; rerunning the report suites leaves `agent_docs/generated/` clean
- Dummy-PDF check confirmed the write path still fires when the patents inventory is non-empty
- Mirror and mount report suites rewrite byte-identically (no changes needed)

## Follow-ups

- None; the owner's regenerate workflow with a populated `patents/` directory is unchanged.
