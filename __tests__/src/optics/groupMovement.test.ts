import { describe, expect, it } from "vitest";
import {
  computeGroupMovementProfile,
  getGroupMovementAvailability,
  inferLensMovementGroups,
} from "../../../src/optics/groupMovement.js";
import CanonRF14Raw from "../../../src/lens-data/canon/CanonRF14mmF14LVCM.data.js";
import CanonRF24Raw from "../../../src/lens-data/canon/CanonRF24mmF14LVCM.data.js";
import CanonRF35Raw from "../../../src/lens-data/canon/CanonRF35mmF14LVCM.data.js";
import NikonAfpDx70300Raw from "../../../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.js";
import NikonZ100400Raw from "../../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.js";
import { build, buildVariableStopGapLens, sharedSonnar50f15 } from "./testLensFixtures.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

describe("group movement optics helpers", () => {
  it("falls back to air-separated construction groups", () => {
    const groups = inferLensMovementGroups({
      N: 5,
      ES: [
        [1, 0, 1],
        [2, 1, 2],
        [3, 3, 4],
      ],
      groups: [],
    } as unknown as RuntimeLens);

    expect(groups).toEqual([
      { id: "group-1", label: "G1", fromSurface: 0, toSurface: 2 },
      { id: "group-2", label: "G2", fromSurface: 3, toSurface: 4 },
    ]);
  });

  it("uses fixed-image-plane anchoring so unit focus translates the optical block", () => {
    const L = sharedSonnar50f15();
    const profile = computeGroupMovementProfile(L, "focus", { focusT: 1, zoomT: 0 });

    expect(getGroupMovementAvailability(L).focus).toBe(true);
    for (const series of profile.series) {
      const closePoint = series.samples.find((point) => Math.abs(point.focusT - 1) < 1e-9);
      expect(closePoint?.shiftMm).toBeLessThan(-2.9);
      expect(closePoint?.shiftMm).toBeGreaterThan(-3.1);
      expect(closePoint?.positionMm).toBeLessThan(0);
    }
  });

  it("detects zoom-only group motion without modeled focus travel", () => {
    const L = build(NikonAfpDx70300Raw);
    const availability = getGroupMovementAvailability(L);
    const profile = computeGroupMovementProfile(L, "zoom", { focusT: 0, zoomT: 1 });

    expect(availability).toEqual({ focus: false, zoom: true, combined: false });
    expect(profile.series.length).toBeGreaterThan(1);
    expect(profile.maxAbsShiftMm).toBeGreaterThan(10);
  });

  it("detects combined motion when zoom and focus travel are both modeled", () => {
    const L = build(NikonZ100400Raw);
    const availability = getGroupMovementAvailability(L);
    const profile = computeGroupMovementProfile(L, "combined", { focusT: 0.5, zoomT: 1 });

    expect(availability).toEqual({ focus: true, zoom: true, combined: true });
    expect(profile.series.some((series) => series.secondarySamples && series.secondarySamples.length > 0)).toBe(true);
    expect(profile.maxAbsShiftMm).toBeGreaterThan(20);
  });

  it("detects focus travel that reverses to an unchanged close endpoint", () => {
    const L = buildVariableStopGapLens([2, 5, 2], "test-reversing-focus-availability", [0, 0.5, 1]);

    expect(getGroupMovementAvailability(L)).toEqual({ focus: true, zoom: false, combined: false });
  });

  it("preserves the published Canon RF VCM prime focus directions", () => {
    const rf14 = build(CanonRF14Raw);
    const rf14Profile = computeGroupMovementProfile(rf14, "focus", { focusT: 1, zoomT: 0 });
    const rf14Focus = rf14Profile.series.find((series) => series.group.label.startsWith("L2"));

    expect(getGroupMovementAvailability(rf14)).toEqual({ focus: true, zoom: false, combined: false });
    expect(rf14Focus?.currentPoint.shiftMm).toBeCloseTo(-1.01, 2);

    const rf24 = build(CanonRF24Raw);
    const rf24Profile = computeGroupMovementProfile(rf24, "focus", { focusT: 1, zoomT: 0 });
    const rf24L2 = rf24Profile.series.find((series) => series.group.label.startsWith("L2"));
    const rf24L4 = rf24Profile.series.find((series) => series.group.label.startsWith("L4"));

    expect(getGroupMovementAvailability(rf24)).toEqual({ focus: true, zoom: false, combined: false });
    expect(rf24L2?.currentPoint.shiftMm).toBeCloseTo(3.62, 2);
    expect(rf24L4?.currentPoint.shiftMm).toBeCloseTo(-2.88, 2);
  });

  it("does not invent unpublished Canon RF 35 mm focus or zoom travel", () => {
    const rf35 = build(CanonRF35Raw);

    expect(getGroupMovementAvailability(rf35)).toEqual({ focus: false, zoom: false, combined: false });
    expect(inferLensMovementGroups(rf35).map((group) => group.label)).toEqual([
      "B1",
      "B2 (OBJECTWARD FOCUS)",
      "B3",
      "B4 (OBJECTWARD FOCUS)",
      "B5",
    ]);
  });
});
