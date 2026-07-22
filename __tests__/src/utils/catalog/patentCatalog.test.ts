/**
 * Invariant coverage for the shared visible-patent catalog.
 */

import { describe, expect, it } from "vitest";
import { SUMMARY_KEYS } from "../../../../src/utils/catalog/lensSummaries.js";
import { getPatentByNumber, PATENTS } from "../../../../src/utils/catalog/patentCatalog.js";

describe("patentCatalog", () => {
  it("contains one unique record per visible source patent", () => {
    expect(PATENTS.length).toBeGreaterThan(0);
    expect(new Set(PATENTS.map((patent) => patent.patentNumber)).size).toBe(PATENTS.length);
    expect(PATENTS.flatMap((patent) => patent.lenses).length).toBe(SUMMARY_KEYS.length);
  });

  it("resolves every record by patent number", () => {
    for (const patent of PATENTS) {
      expect(getPatentByNumber(patent.patentNumber)).toBe(patent);
      expect(patent.lenses.length).toBeGreaterThan(0);
    }
  });
});
