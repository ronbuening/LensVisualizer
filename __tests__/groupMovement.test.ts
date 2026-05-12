import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import {
  computeGroupMovementProfile,
  getGroupMovementAvailability,
  inferLensMovementGroups,
} from "../src/optics/groupMovement.js";
import Sonnar50Raw from "../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import NikonAfpDx70300Raw from "../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.js";
import NikonZ100400Raw from "../src/lens-data/nikon/NikonNikkorZ100400f4556.data.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

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
    const L = build(Sonnar50Raw);
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
});
