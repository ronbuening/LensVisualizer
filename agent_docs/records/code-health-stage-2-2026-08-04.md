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

### N2 — lens-index URL contract

- New `__tests__/src/pages/lensIndex/urlState.test.ts` (40 cases) covering all five previously untested exports:
  `parseLensIndexViewMode`, `parseLensIndexUrlState`, `serializeLensIndexUrlState`, `isSameCustomFilter`,
  `isValidLensLibraryReturnPath`.
- Uses a fixed synthetic `FilterBounds` and an explicit `knownMakerSlugs` list so assertions do not drift as the
  catalog grows.
- Covers: view-mode fallbacks, all eight group modes, unknown maker/mount/format rejection, list dedup and
  taxonomy-`sortOrder` ordering, numeric clamping, non-numeric fallback, swapped min/max normalization, the
  `filters=open` flag, empty/default serialization, and a full round trip.
- Validator table extends the spec's list with two path-traversal cases (`/lenses/../authors`, `/lenses/..`) and a
  `javascript:` scheme, since this is the open-redirect-adjacent surface. All reject correctly — the
  `startsWith("/lenses")` prefix check plus the post-normalization `pathname` equality check together also reject
  the `/lenses-extra` sibling-route trap.

Verification: gate passed (224 files / 2661 tests).

### N3 — pinned public URL contracts

- New `__tests__/src/pages/lensIndex/groupAnchors.test.ts` covering all 8 exports with exact-string pins, including
  the FNV-1a hash suffix: `group-inventor-g-nter-klemt-rpuixk`, `group-assignee-canon-inc-1chmmri`,
  `group-assignee-asahi-kogaku-pentax-h35uay`, the `No named assignee or applicant` fallback bucket, and the
  empty-key `party` stem. Also asserts roles stay in separate namespaces and that the hash still separates keys
  that slugify identically (`Günter`/`Gunter`).
- Noted in the test that `slugifyGroupKey` collapses non-ASCII to a separator (`Günter Klemt` → `g-nter-klemt`)
  rather than transliterating — different from the author-slug path, and intentional to pin as-is.
- Extended `__tests__/scripts/authorMetadata.test.ts` with exact slug pins for the real catalog's tricky names
  (`Josef Weiß` → `josef-weiss`, `Hiltrud Ebbesmeier née Schitthof`, `Günter Klemt`, `Aurélien Dodoc`,
  `Harry Zöllner`) plus synthetic `Jérôme Ø. Håkonsen` and `Łukasz Đurić` to cover the ø/ł/đ replacement rules.
- `stableHash` is module-private, so it is pinned through its observable output: a colliding pair yields
  `josef-weiss-1fd43f8` / `josef-weiss-1249fdl`, and the unslugifiable-name fallback yields `author-7c9tsh`.
- Added a cross-check tying those unit pins to the slugs actually shipped in generated metadata, so the test
  covers the live `/authors/:slug` URLs rather than only the function in isolation.

Verification: gate passed (225 files / 2682 tests).

## Follow-ups

- Runtime-side fallback identity stays untestable until `patentsForParty` stops reading module-level
  `LENS_SUMMARIES` — that is plan item **C1**.
