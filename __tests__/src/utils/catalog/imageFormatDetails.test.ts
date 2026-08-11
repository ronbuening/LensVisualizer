import { describe, expect, it } from "vitest";
import { IMAGE_FORMAT_DETAILS, getImageFormatDetails } from "../../../../src/utils/catalog/imageFormatDetails.js";
import { IMAGE_FORMATS } from "../../../../src/utils/catalog/lensTaxonomy.js";
import { describeDetailRegistry } from "./detailRegistryHarness.js";

describeDetailRegistry({
  registryName: "IMAGE_FORMAT_DETAILS",
  registry: IMAGE_FORMAT_DETAILS,
  ids: IMAGE_FORMATS.map((format) => format.id),
  idNoun: "canonical image format",
  nonEmptyStringFields: ["summary", "description"],
});

describe("getImageFormatDetails", () => {
  it("returns details for a canonical image format", () => {
    const details = getImageFormatDetails("135-full-frame");
    expect(details).not.toBeNull();
    expect(details!.summary).toContain("35 mm");
  });
});
