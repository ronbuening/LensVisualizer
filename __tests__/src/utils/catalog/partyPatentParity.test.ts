import { describe, expect, it } from "vitest";
import { ASSIGNEES } from "../../../../src/utils/catalog/assigneeCatalog.js";
import { AUTHORS, patentsForParty } from "../../../../src/utils/catalog/authorCatalog.js";
import type { PatentPartyMetadata } from "../../../../src/types/catalog.js";

/**
 * Build-time `patentCount`/`lensKeys` (scripts/author-metadata.mjs) and runtime
 * `patentsForParty` derive the same aggregation in two languages, kept in sync
 * only by a comment. #639 shipped a mismatch; this walks every party so the
 * next divergence fails here instead of on a live page.
 */
const PARTY_STRATA = [
  { role: "author", label: "inventors", entries: AUTHORS },
  { role: "assignee", label: "assignees", entries: ASSIGNEES },
] as const;

function expectPatentPartyMetadata(entry: PatentPartyMetadata | undefined): void {
  expect(entry).toEqual({
    name: expect.any(String),
    slug: expect.any(String),
    lensKeys: expect.arrayContaining([expect.any(String)]),
    patentCount: expect.any(Number),
  });
}

describe("party patent parity", () => {
  it("keeps generated author and assignee entries aligned with the shared runtime contract", () => {
    expectPatentPartyMetadata(AUTHORS[0]);
    expectPatentPartyMetadata(ASSIGNEES[0]);
  });

  for (const { role, label, entries } of PARTY_STRATA) {
    it(`agrees with the generated patent count for all ${label}`, () => {
      expect(entries.length).toBeGreaterThan(0);

      const mismatches = entries
        .map((entry) => ({ entry, runtime: patentsForParty(entry.name, role).length }))
        .filter(({ entry, runtime }) => runtime !== entry.patentCount)
        .map(({ entry, runtime }) => `${entry.name}: generated ${entry.patentCount}, runtime ${runtime}`);

      expect(mismatches).toEqual([]);
    });

    it(`agrees with the generated lens keys for all ${label}`, () => {
      const mismatches = entries
        .map((entry) => ({
          entry,
          runtime: [...new Set(patentsForParty(entry.name, role).flatMap((p) => p.lenses.map((l) => l.key)))].sort(),
        }))
        .filter(({ entry, runtime }) => runtime.join("|") !== [...entry.lensKeys].sort().join("|"))
        .map(({ entry, runtime }) => `${entry.name}: generated [${entry.lensKeys}], runtime [${runtime}]`);

      expect(mismatches).toEqual([]);
    });
  }

  it("gives every party at least one patent record", () => {
    for (const { role, entries } of PARTY_STRATA) {
      for (const entry of entries) {
        expect(patentsForParty(entry.name, role).length, entry.name).toBeGreaterThan(0);
      }
    }
  });
});

/*
 * Coverage note: every visible lens currently carries an explicit `patentNumber`,
 * so the `lens:${key}` fallback identity that #639 desynchronized is not reached
 * by the walks above. The generator side of that same convention IS covered
 * directly, with synthetic input, by "counts attributed fallback records when a
 * patent number is missing" in __tests__/scripts/authorMetadata.test.ts. The
 * runtime side becomes covered here automatically if an attributed lens without a
 * publication number is ever added. Injecting one here is not currently possible:
 * patentsForParty reads module-level LENS_SUMMARIES. Removing that duplication
 * entirely is plan item C1.
 */
describe("party patent aggregation", () => {
  it("collapses multiple lenses sharing one patent into a single record", () => {
    // Guards the dedup identity itself: with the aggregation keyed per lens
    // rather than per patent, these counts inflate and the parity walk fails.
    const multiLens = AUTHORS.map((author) => ({ author, patents: patentsForParty(author.name, "author") })).find(
      ({ patents }) => patents.some((patent) => patent.lenses.length > 1),
    );

    expect(multiLens, "expected at least one inventor with two diagrams from one patent").toBeDefined();
    const shared = multiLens!.patents.find((patent) => patent.lenses.length > 1)!;
    expect(new Set(shared.lenses.map((lens) => lens.key)).size).toBe(shared.lenses.length);
    expect(shared.patentNumber).toBeTruthy();
  });
});
