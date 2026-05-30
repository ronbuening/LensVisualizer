import { describe, expect, it } from "vitest";
import {
  CHROMATIC_CHANNEL_METADATA,
  CHROMATIC_CHANNEL_ORDER,
  chromaticChannelIndexLabel,
  chromaticChannelWavelengthLabel,
} from "../../../../src/optics/chromatic/channels.js";

describe("chromatic channel metadata", () => {
  it("keeps the public channel order and spectral-line labels stable", () => {
    expect(CHROMATIC_CHANNEL_ORDER).toEqual(["R", "G", "B", "V"]);
    expect(chromaticChannelWavelengthLabel("R")).toBe("C-line 656.3 nm");
    expect(chromaticChannelWavelengthLabel("G")).toBe("d-line 587.6 nm");
    expect(chromaticChannelWavelengthLabel("B")).toBe("F-line 486.1 nm");
    expect(chromaticChannelWavelengthLabel("V")).toBe("g-line 435.8 nm");
  });

  it("maps display channels to index labels used by inspector readouts", () => {
    expect(chromaticChannelIndexLabel("R")).toBe("nC");
    expect(chromaticChannelIndexLabel("G")).toBe("nd");
    expect(chromaticChannelIndexLabel("B")).toBe("nF");
    expect(chromaticChannelIndexLabel("V")).toBe("ng");
    expect(CHROMATIC_CHANNEL_METADATA.V.description).toContain("secondary-spectrum");
  });
});
