import { constructionFixtureData } from "../constructionFixtures.js";
import { describe, expect, it } from "vitest";
import {
  computeGroupMovementProfile,
  firstAvailableGroupMovementMode,
  getGroupMovementAvailability,
  inferLensMovementGroups,
  isGroupMovementModeAvailable,
} from "../../../../src/optics/analysis/summary/groupMovement.js";
import { analysisRequestForLens } from "../testLensFixtures.js";
import { build, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("group movement request analysis", () => {
  it("marks the exact request control point without dropping aberration controls", () => {
    const base = buildSimplePositiveElementLens("test-group-movement-request");
    const lens = build({
      ...constructionFixtureData(base),
      aberrationControl: {
        label: "Soft focus",
        minLabel: "Sharp",
        maxLabel: "Soft",
        step: 0.01,
        var: { "1": [5, 12] },
        varLabels: [["1", "Gap"]],
      },
    });
    const request = analysisRequestForLens(lens, 0.25317, 0, 0.1);
    const profile = computeGroupMovementProfile(request, "focus");
    expect(profile.series.length).toBeGreaterThan(0);
    for (const series of profile.series) {
      expect(series.currentPoint.focusT).toBe(0.25317);
      expect(series.samples.map((point) => point.x)).toEqual(
        [...series.samples.map((point) => point.x)].sort((a, b) => a - b),
      );
      expect(series.samples.some((point) => point.focusT === 0.25317)).toBe(true);
    }
    const corrected = computeGroupMovementProfile(analysisRequestForLens(lens, 0.25317, 0, 0), "focus");
    expect(profile.series[0].currentPoint.positionMm).not.toBe(corrected.series[0].currentPoint.positionMm);
  });

  it("re-exports movement availability helpers", () => {
    const lens = buildSimplePositiveElementLens("test-group-movement-adapter-helpers");
    const availability = { focus: true, zoom: false, combined: false };

    expect(inferLensMovementGroups(lens).length).toBeGreaterThan(0);
    expect(firstAvailableGroupMovementMode(availability)).toBe("focus");
    expect(isGroupMovementModeAvailable(availability, "focus")).toBe(true);
    expect(getGroupMovementAvailability(lens)).toEqual({ focus: false, zoom: false, combined: false });
  });
});
