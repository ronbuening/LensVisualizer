import { describe, expect, it } from "vitest";
import {
  CHROMATIC_CHANNEL_METADATA,
  CHROMATIC_CHANNEL_ORDER,
  chromaticChannelDescription,
  chromaticChannelIndexLabel,
  chromaticChannelLineList,
  chromaticChannelWavelengthLabel,
  lensChromaticReference,
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

  it("names the C′/e/F′ lines for a lens whose elements are all e-referenced", () => {
    expect(lensChromaticReference([{ indexReference: "e" }, { indexReference: "e" }])).toBe("e");
    // A lens that mixes references traces per element, so it keeps the d-line labels.
    expect(lensChromaticReference([{ indexReference: "e" }, {}])).toBe("d");
    expect(lensChromaticReference([{}, { indexReference: "d" }])).toBe("d");
    expect(lensChromaticReference([])).toBe("d");

    expect(chromaticChannelWavelengthLabel("R", "e")).toBe("C′-line 643.8 nm");
    expect(chromaticChannelWavelengthLabel("G", "e")).toBe("e-line 546.1 nm");
    expect(chromaticChannelWavelengthLabel("B", "e")).toBe("F′-line 480.0 nm");
    expect(chromaticChannelWavelengthLabel("V", "e")).toBe("g-line 435.8 nm");
    expect(chromaticChannelDescription("G", "e")).toBe("green e-line");
    expect(chromaticChannelDescription("G")).toBe("green d-line");
    expect(chromaticChannelIndexLabel("R", "e")).toBe("nC′");
    expect(chromaticChannelIndexLabel("G", "e")).toBe("ne");
    expect(chromaticChannelIndexLabel("B", "e")).toBe("nF′");
    expect(chromaticChannelIndexLabel("V", "e")).toBe("ng");
    expect(chromaticChannelLineList("e")).toBe("C′, e, F′, and g");
    expect(chromaticChannelLineList()).toBe("C, d, F, and g");
  });
});
