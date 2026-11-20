import { describe, expect, it } from "vitest";
import reducer, { createInitialState } from "../../../../src/utils/state/lensReducer.js";
import { finiteFocusState } from "../../../../src/utils/state/finiteFocusState.js";
import type { LensAction } from "../../../../src/types/state.js";
import { finiteOnlyFixture } from "../../optics/finiteOnlyFixture.js";

const source = finiteOnlyFixture();
const initial = createInitialState({}, {}, true, [source.key]);

describe("finiteFocusState", () => {
  it.each<[string, number | undefined, number]>([
    ["no URL focus", undefined, 1],
    ["focus=0", 0, 0],
    ["a coordinate between states", 0.2, 0],
    ["a non-finite coordinate", NaN, 1],
    ["a coordinate past the domain", 2, 1],
  ])("hydrates %s to an authored state", (_, urlFocus, focusT) => {
    expect(finiteFocusState(initial, null, source, urlFocus).sliders.focusT).toBe(focusT);
  });

  it.each<[LensAction, number]>([
    [{ type: "RESET_SLIDERS" }, 1],
    [{ type: "SET_LENS_A", key: source.key }, 1],
    [{ type: "APPLY_URL_VIEW_STATE", state: {} }, 1],
    [{ type: "APPLY_URL_VIEW_STATE", state: { focus: 0 } }, 0],
    [{ type: "SET_FOCUS_T", value: 0.3 }, 0],
  ])("puts $type on an authored state with nothing else travelling", (action, focusT) => {
    const travelled = { ...initial, sliders: { ...initial.sliders, zoomT: 1, aberrationT: 1, stopdownT: 1 } };
    const next = finiteFocusState(reducer(travelled, action), action, source);
    expect(next.sliders).toMatchObject({ focusT, zoomT: 0, aberrationT: 0, stopdownT: 0 });
  });

  it("passes ordinary lenses and comparisons through untouched", () => {
    expect(finiteFocusState(initial, null, { focus: { keyframes: [0, 1] } }, 0.23)).toBe(initial);
    const comparing = { ...initial, lens: { ...initial.lens, comparing: true } };
    expect(finiteFocusState(comparing, null, source, 0.2)).toBe(comparing);
  });
});
