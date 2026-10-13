import { describe, it, expect } from "vitest";
import { MAKER_DETAILS, getMakerDetails } from "../../../../src/utils/catalog/makerDetails.js";
import { allMakerSlugs } from "../../../../src/utils/catalog/lensMetadata.js";
import { describeDetailRegistry } from "./detailRegistryHarness.js";

describeDetailRegistry({
  registryName: "MAKER_DETAILS",
  registry: MAKER_DETAILS,
  ids: allMakerSlugs(),
  idNoun: "known maker slug",
  nonEmptyStringFields: ["headquarters", "summary", "history"],
});

describe("getMakerDetails", () => {
  it("validates founding years when a profile documents one", () => {
    for (const details of Object.values(MAKER_DETAILS)) {
      if (details.founded != null) expect(details.founded).toBeGreaterThan(0);
    }
  });

  it("returns details for a known slug", () => {
    const details = getMakerDetails("nikon");
    expect(details).not.toBeNull();
    expect(details!.founded).toBe(1917);
  });

  it("returns null for an unknown slug", () => {
    expect(getMakerDetails("unknown-maker")).toBeNull();
  });
});
