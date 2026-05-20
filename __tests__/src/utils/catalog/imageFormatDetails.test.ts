import { describe, expect, it } from "vitest";
import { IMAGE_FORMAT_DETAILS, getImageFormatDetails } from "../../../../src/utils/catalog/imageFormatDetails.js";
import { IMAGE_FORMATS } from "../../../../src/utils/catalog/lensTaxonomy.js";

describe("IMAGE_FORMAT_DETAILS", () => {
  it("has an entry for every canonical image format", () => {
    for (const format of IMAGE_FORMATS) {
      expect(IMAGE_FORMAT_DETAILS[format.id], `missing entry for "${format.id}"`).toBeDefined();
    }
  });

  it("every entry has non-empty required fields", () => {
    for (const [formatId, details] of Object.entries(IMAGE_FORMAT_DETAILS)) {
      expect(details.summary.length, `${formatId}.summary`).toBeGreaterThan(0);
      expect(details.description.length, `${formatId}.description`).toBeGreaterThan(0);
    }
  });
});

describe("getImageFormatDetails", () => {
  it("returns details for a canonical image format", () => {
    const details = getImageFormatDetails("135-full-frame");
    expect(details).not.toBeNull();
    expect(details!.summary).toContain("35 mm");
  });
});
