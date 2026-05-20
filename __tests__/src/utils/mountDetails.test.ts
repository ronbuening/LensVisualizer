import { describe, expect, it } from "vitest";
import { LENS_MOUNTS } from "../../../src/utils/lensTaxonomy.js";
import { MOUNT_DETAILS, getMountDetails } from "../../../src/utils/mountDetails.js";

describe("MOUNT_DETAILS", () => {
  it("has an entry for every canonical mount", () => {
    for (const mount of LENS_MOUNTS) {
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
