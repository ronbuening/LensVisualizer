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

### N4 — configuration-group invariants and Nikon TC parity

- New `__tests__/src/utils/catalog/opticalConfigurationGroups.test.ts`: every `opticalConfiguration` group has ≥2
  members, unique `order` values, exactly one visible member, and non-empty labels. Mutation-checked — repointing
  the TC-IN `groupKey` at an orphan group fails both the ≥2-members and one-visible-member assertions.
- New `__tests__/src/lens-data/nikon/nikon180400TcParity.test.ts` pinning the 39 shared front surfaces (patent
  labels 1-45 minus removed dummy planes) between the TC-OUT and TC-IN prescriptions. Mutation-checked: changing
  one `R` or `sd` in only the TC-IN file fails it.
- **Three corrections to the spec, found by reading the data:**
  1. `vd` is not a field on `SurfaceData` (dispersion lives on elements), so it cannot be compared per surface.
  2. Surface 45's `d` legitimately differs — 41.203 mm (TC-OUT) vs 2 mm (TC-IN) — because that gap is exactly where
     the 1.4x converter is inserted. A blanket "assert `d` for surfaces 1-45" fails. The test asserts `d` equality
     for surfaces ahead of that gap and asserts the gap's specific expected change.
  3. Labels 47-49 and 52-55 appear in *both* files but are different physical surfaces (Table 8 vs Table 10
     renumbering after the converter), so parity must stop at 45. Comparing the full shared-label set would produce
     23 spurious mismatches.
- The variable gaps are compared at infinity focus only (identical across configurations); close-focus values differ
  per configuration, and a reverse assertion pins that they have *not* been copied between files.
- Compares whole surface objects minus `d` rather than an enumerated field list, so fields added to `SurfaceData`
  later are covered without editing the test. `VarRange`'s prime/zoom union is normalized rather than assumed.

Verification: gate passed (227 files / 2694 tests).

### N6 — golden trace coverage for July's physics

- Two `GOLDEN_LENSES` entries appended: `nikon-af-s-nikkor-500mm-f56e-pf-ed-vr` (diffractive Phase Fresnel) and
  `zeiss-touit-50mm-f28-macro` (odd-order A3/A5/A7 asphere), captured via the file's documented capture-and-pin
  procedure and both added to `REFOCUS_BOUND_MM`.
- Sanity-checked against patent nominals rather than pinned blind: computed EFL 489.7124 vs the data file's stated
  "f = 489.704 mm design", and 51.5058 vs "f' = 51.52 mm patent design". Marginal rays refocus to 1.2 µm and
  0.37 µm respectively — well inside the suite's ~20 µm expectation.
- **Added beyond the spec:** a per-channel diffractive block. The d-line-only entry would stay green even if the
  phase term ignored wavelength entirely, which is precisely the trap X12 describes elsewhere in this plan. The new
  test pins R/G/B exit slopes, asserts all three differ, and asserts all three still focus within 5 µm — the Phase
  Fresnel element's whole purpose.
- `exactTraceCatalog.test.ts` gained a hidden-`opticalConfiguration` smoke loop. The 59-surface TC-IN prescription
  was built at import time but never traced in CI; it now runs the same meridional/skew checks as visible lenses at
  every zoom sample. The loop asserts it found at least one such key, so it cannot pass vacuously.

Verification: gate passed (227 files / 2703 tests).

### N7 — glass catalog source-order completeness

- New "ships every vendor shard entry exactly once" guard in `dispersion.test.ts`: exact set equality between the
  union of all eight exported shard arrays and the shipped catalog, plus no-duplicate checks on both sides.
- **No source change needed.** The spec assumed `GLASS_CATALOG_SOURCE_ORDER` would have to be exported; it does not,
  because `RAW_CATALOG = GLASS_CATALOG_SOURCE_ORDER.map(entryByName)` means `allEntries()` already exposes exactly
  the order list with names resolved. Duplicates in the order list surface as duplicate catalog entries.
- Mutation-checked: deleting the `"H-ZLaF76"` line from the order list fails with
  `shard entries absent from GLASS_CATALOG_SOURCE_ORDER never reach the resolver: [ 'H-ZLaF76' ]`.
- Also raised the stale `catalogSize() >= 414` floor to 460 and noted inline that it is a floor only — the exact
  count is now asserted structurally, so it does not need bumping per catalog addition.

Verification: gate passed (227 files / 2704 tests).

### N8 — direct glass-resolution criterion tests

- New `describe("glass resolution criteria")` in `dispersion.test.ts` with one case per rung of
  `candidateSelectionReason`, plus a guard asserting the eight criteria are mutually distinct. With the existing
  `vendor-context` test at ~866, all nine criterion strings now have direct coverage.
- Cases were **derived by probing the real resolver**, not invented — the spec's suggested fixtures do not behave as
  described:
  - `abbe-residual` needs the index residuals to tie *exactly*, which requires byte-identical Sellmeier
    coefficients, not merely identical listed `nd`. Only two such pairs exist in the catalog; `S-TIH53`/`S-TIH53W`
    is the one whose listed Abbe numbers differ (23.7779 vs 23.77794), so it is the only usable case.
  - The spec's `H-K9L`/`H-K9LGT` (code 517642) pin lands on `canonical-name-order`, not
    `duplicate-code-precedence` — 517642's configured winner is `N-BK7`, so neither CDGM twin is preferred and
    every earlier rung ties. It is pinned as the `canonical-name-order` case instead.
  - `duplicate-code-precedence` is reachable only through code `847238` with **no** Abbe number supplied and a
    stored index equal to the twins' evaluated `nd`; otherwise the third row (`H-ZF52`) wins on index residual, or
    the Abbe rung fires first.

Verification: gate passed (227 files / 2713 tests).

### N9 — unit-test backfill

- New `__tests__/src/utils/content/` directory (previously nonexistent) with `changelogHelpers.test.ts`: date
  formatting incl. a negative-offset timezone case, `changelogEntryId` pinned as the public anchor/RSS GUID
  (`changelog-2026-08-04-feature-1hncxzp`), whitespace-insensitive identity, summary sensitivity, uniqueness across
  every shipped entry, grouping order, and the type label/color maps. Also covers `stripFrontmatter` including CRLF
  input and the "don't eat a later horizontal rule" case.
- New `authorCatalog.test.ts` and `assigneeCatalog.test.ts`: slug/name round trips over all real generated entries,
  unknown-key `undefined`, slug uniqueness, `patentsForParty` ordering for both roles, per-record party credit,
  lens-name sorting inside records, and `groupAuthorPatents` reachability in both modes. The assignee suite also
  asserts the role switch is real — an assignee name must return nothing through the `"author"` branch.
- New `catalogSearchResults.test.tsx`: empty-query prompt, whitespace-only query, polite empty state, lens and
  author link targets, match-count pluralization, section omission, and the 40-result truncation notice.
- Both data-dependent cases assert their precondition (`expect(query).toBeDefined()`) instead of early-returning, so
  they fail loudly rather than passing vacuously if the catalog shifts. Verified non-vacuous today: `"e"` yields 292
  lens matches (exercises truncation) and `"Klemt"` yields authors only (exercises section omission).

Verification: gate passed (231 files / 2757 tests).

## Follow-ups

- Runtime-side fallback identity stays untestable until `patentsForParty` stops reading module-level
  `LENS_SUMMARIES` — that is plan item **C1**.
