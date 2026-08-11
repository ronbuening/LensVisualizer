import { describe, expect, it } from "vitest";
import { LENS_MOUNTS } from "../../../../src/utils/catalog/lensTaxonomy.js";
import { MOUNT_DETAILS, getMountDetails } from "../../../../src/utils/catalog/mountDetails.js";
import { describeDetailRegistry } from "./detailRegistryHarness.js";

describeDetailRegistry({
  registryName: "MOUNT_DETAILS",
  registry: MOUNT_DETAILS,
  ids: LENS_MOUNTS.map((mount) => mount.id),
  idNoun: "canonical mount",
  nonEmptyStringFields: ["summary", "description"],
});

describe("getMountDetails", () => {
  it("returns details for a represented mount", () => {
    const details = getMountDetails("nikon-z");
    expect(details).not.toBeNull();
    expect(details!.summary).toContain("Nikon");
  });
});
