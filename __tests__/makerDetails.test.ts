import { describe, it, expect } from "vitest";
import { MAKER_DETAILS, getMakerDetails } from "../src/utils/makerDetails.js";
import { allMakerSlugs } from "../src/utils/lensMetadata.js";

describe("MAKER_DETAILS", () => {
  it("has an entry for every known maker slug", () => {
    for (const slug of allMakerSlugs()) {
      expect(MAKER_DETAILS[slug], `missing entry for "${slug}"`).toBeDefined();
    }
  });

  it("every entry has non-empty required fields", () => {
    for (const [slug, details] of Object.entries(MAKER_DETAILS)) {
      expect(details.founded, `${slug}.founded`).toBeGreaterThan(0);
      expect(details.headquarters.length, `${slug}.headquarters`).toBeGreaterThan(0);
      expect(details.summary.length, `${slug}.summary`).toBeGreaterThan(0);
      expect(details.history.length, `${slug}.history`).toBeGreaterThan(0);
    }
  });
});

describe("getMakerDetails", () => {
  it("returns details for a known slug", () => {
    const details = getMakerDetails("nikon");
    expect(details).not.toBeNull();
    expect(details!.founded).toBe(1917);
  });

  it("returns null for an unknown slug", () => {
    expect(getMakerDetails("unknown-maker")).toBeNull();
  });
});
