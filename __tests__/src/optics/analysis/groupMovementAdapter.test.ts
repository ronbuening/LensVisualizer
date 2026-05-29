import { describe, expect, it } from "vitest";
import {
  computeGroupMovementProfile2,
  computeGroupMovementProfileForState2,
  firstAvailableGroupMovementMode2,
  getGroupMovementAvailability2,
  inferLensMovementGroups2,
  isGroupMovementModeAvailable2,
} from "../../../../src/optics/analysis/groupMovement.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("group movement analysis adapter", () => {
  it("delegates prepared-state profile computation to the runtime helper", () => {
    const lens = buildSimplePositiveElementLens("test-group-movement-adapter");
    const state = prepareRuntimeState(lens, 0.25, 0, 0.1);

    expect(computeGroupMovementProfileForState2(state, "focus")).toEqual(
      computeGroupMovementProfile2(lens, "focus", { focusT: 0.25, zoomT: 0, aberrationT: 0.1 }),
    );
  });

  it("re-exports movement availability helpers", () => {
    const lens = buildSimplePositiveElementLens("test-group-movement-adapter-helpers");
    const availability = { focus: true, zoom: false, combined: false };

    expect(inferLensMovementGroups2(lens).length).toBeGreaterThan(0);
    expect(firstAvailableGroupMovementMode2(availability)).toBe("focus");
    expect(isGroupMovementModeAvailable2(availability, "focus")).toBe(true);
    expect(getGroupMovementAvailability2(lens)).toEqual({ focus: false, zoom: false, combined: false });
  });
});
