import { describe, expect, it } from "vitest";
import { MOUNT_SPEC_BY_ID } from "../../../src/mount-data/index.js";
import { validateMountSpecs } from "../../../src/mount-data/validateMountSpec.js";

describe("mount specification records", () => {
  const specs = Object.values(MOUNT_SPEC_BY_ID).filter(Boolean);

  it("includes the proof-of-concept mount records", () => {
    expect(Object.keys(MOUNT_SPEC_BY_ID).sort()).toEqual(["canon-ef", "nikon-f", "pentax-k"]);
  });

  it("passes schema and project validation", () => {
    expect(validateMountSpecs(specs)).toEqual([]);
  });

  it("keeps evolved mounts on named selected profiles", () => {
    expect(MOUNT_SPEC_BY_ID["nikon-f"]?.mvp.profileModel.selectedMvpProfileId).toBe("nikon-f/ai-s");
    expect(MOUNT_SPEC_BY_ID["pentax-k"]?.mvp.profileModel.selectedMvpProfileId).toBe("pentax-k/kaf2");
  });
});
