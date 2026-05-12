import { describe, expect, it } from "vitest";
import { IMAGE_FORMAT_OPTIONS } from "../src/pages/lensIndex/catalog.js";
import { IMAGE_FORMAT_DETAILS, getImageFormatDetails } from "../src/utils/imageFormatDetails.js";

describe("IMAGE_FORMAT_DETAILS", () => {
  it("has an entry for every represented image format", () => {
    for (const format of IMAGE_FORMAT_OPTIONS) {
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
  it("returns details for a represented image format", () => {
    const details = getImageFormatDetails("135-full-frame");
    expect(details).not.toBeNull();
    expect(details!.summary).toContain("35 mm");
  });
});
