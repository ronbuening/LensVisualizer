import { describe, expect, it } from "vitest";
import { MOUNT_OPTIONS } from "../src/pages/lensIndex/catalog.js";
import { MOUNT_DETAILS, getMountDetails } from "../src/utils/mountDetails.js";

describe("MOUNT_DETAILS", () => {
  it("has an entry for every represented mount", () => {
    for (const mount of MOUNT_OPTIONS) {
      expect(MOUNT_DETAILS[mount.id], `missing entry for "${mount.id}"`).toBeDefined();
    }
  });

  it("every entry has non-empty required fields", () => {
    for (const [mountId, details] of Object.entries(MOUNT_DETAILS)) {
      expect(details.summary.length, `${mountId}.summary`).toBeGreaterThan(0);
      expect(details.description.length, `${mountId}.description`).toBeGreaterThan(0);
    }
  });
});

describe("getMountDetails", () => {
  it("returns details for a represented mount", () => {
    const details = getMountDetails("nikon-z");
    expect(details).not.toBeNull();
    expect(details!.summary).toContain("Nikon");
  });
});
