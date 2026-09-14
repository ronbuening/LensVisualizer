# Records

Historical or in-progress notes that a living doc or a lens `*.audit.md` sidecar still links. They are context, not the
current source of truth; if a record conflicts with `agent_docs/architecture/` or a generated report, the living doc wins.

Admission rule (`agent_docs/documentation-policy.md`): no per-branch notes — the PR description is the record. A file
here is deleted at merge unless something living links it; `__tests__/docDrift.test.ts` enforces that.

Records removed in the 2026-09 documentation rationalization remain in git history:
`git log --diff-filter=D --name-only -- agent_docs/records`.
