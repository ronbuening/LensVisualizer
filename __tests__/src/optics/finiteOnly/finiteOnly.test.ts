import { describe, it, expect } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState, traceFiniteFocusFan } from "../../../../src/optics/optics.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "../../../../src/optics/analysis/mtf/mtfConjugates.js";
import { normalizeFiniteFocus } from "../../../../src/optics/state/finiteFocus.js";
import { finiteFocusState } from "../../../../src/utils/state/finiteFocusState.js";
import reducer, { createInitialState } from "../../../../src/utils/state/lensReducer.js";
import { exportJson, importJson } from "../../../../src/lensBuilder/serialize.js";
import { createAnalysisComputationContext } from "../../../../src/optics/analysis/analysisContext.js";
import { publishedStationGrid } from "../../../../src/optics/state/publishedStations.js";
import { stopSemiDiameterForFNumber } from "../../../../src/optics/state/apertureStop.js";
import type { LensDataV2Input } from "../../../../src/types/lensDataV2.js";

// Keep this synthetic regression: coordinate zero must launch from a finite thick-singlet conjugate.
import { assessMtfSupport } from "../../../../src/optics/analysis/mtf/mtfSupport.js";
import { resolveMtfFieldGeometry } from "../../../../src/optics/analysis/mtf/mtfFields.js";
import { ingestLens } from "../../../../src/optics/prescription/ingestV2.js";
import { toLensDataV2Input } from "../../../../src/optics/prescription/toLensDataV2.js";
import { toLensDataInput } from "../../../../src/optics/prescription/v1/toLensData.js";
import { compiledLensFromRuntime } from "../../../../src/optics/prescription/identity.js";
import { prepareState } from "../../../../src/optics/state/preparedGeometry.js";
import { finiteFixture } from "./fixture.js";
describe("optional finite-only domain", () => {
  it("round trips explicit states without inserting infinity or changing the physical iris", () => {
    const d = finiteFixture();
    const copy = importJson(exportJson(d));
    expect(copy).toEqual(d);
    const canonical = ingestLens(d);
    const canonicalExport = toLensDataV2Input(canonical);
    expect(canonicalExport.focus.finiteOnly).toEqual(d.focus.finiteOnly);
    expect(canonicalExport.focus.published).toBeUndefined();
    expect(() => buildLens(canonicalExport)).not.toThrow();
    expect(() => toLensDataInput(canonical)).toThrow(/requires V2/);
    const L = buildLens(copy);
    expect(publishedStationGrid(L.source).focusByZoomIndex[0].map((s) => s.focusT)).toEqual([0, 1]);
    for (const focusT of [0, 1]) {
      const state = prepareRuntimeState(L, focusT, 0);
      expect(mtfFiniteConjugate(state)?.objectDistanceMm).toBe(focusT === 0 ? 99 : 199);
      expect(mtfFiniteObjectPoint(state, mtfFiniteConjugate(state)!, 0)?.[2]).toBe(focusT === 0 ? -99 : -199);
    }
    const compiled = compiledLensFromRuntime(L);
    const guarded = {
      ...compiled,
      source: new Proxy(compiled.source, {
        get() {
          throw new Error("source echo read during preparation");
        },
      }),
    };
    expect(prepareState(guarded, NaN, 1, 1).focusT).toBe(1);
    const invalid = prepareRuntimeState(L, NaN, 1, 1);
    expect(invalid.focusT).toBe(1);
    expect(invalid.zoomT).toBe(0);
    expect(invalid.aberrationT).toBe(0);
    expect(stopSemiDiameterForFNumber(16, 0, L)).toBe(2);
  });
  it("normalizes initial, reset, lens selection, invalid and hydrated state to supported finite states", () => {
    const d = finiteFixture();
    expect(normalizeFiniteFocus(d)).toBe(1);
    for (const invalid of [NaN, Infinity, -1, 2]) expect(normalizeFiniteFocus(d, invalid)).toBe(1);
    expect(normalizeFiniteFocus(d, 0.2)).toBe(0);
    const initial = createInitialState({}, {}, true, [d.key]);
    expect(finiteFocusState(initial, null, d).sliders.focusT).toBe(1);
    expect(finiteFocusState(initial, null, d, 0).sliders.focusT).toBe(0);
    for (const action of [
      { type: "RESET_SLIDERS" },
      { type: "SET_LENS_A", key: d.key },
      { type: "APPLY_URL_VIEW_STATE", state: { focus: 0.8 } },
    ] as const) {
      expect(finiteFocusState(reducer(initial, action), action, d).sliders.focusT).toBe(1);
    }
    const ordinary = { focus: { keyframes: [0, 1] } };
    expect(finiteFocusState(initial, null, ordinary)).toBe(initial);
    expect(normalizeFiniteFocus(ordinary, 0.23)).toBe(0.23);
  });
  it("rejects missing conjugates, invalid defaults and an infinity-style publication list", () => {
    for (const edit of [
      (d: LensDataV2Input) => d.focus.conjugates!.pop(),
      (d: LensDataV2Input) => (d.focus.finiteOnly!.defaultKeyframe = 2),
      (d: LensDataV2Input) => (d.focus.published = [1]),
    ]) {
      const d = finiteFixture();
      edit(d);
      expect(() => buildLens(d)).toThrow();
    }
    const d = finiteFixture();
    d.focus.keyframes = [0];
    d.focus.finiteOnly!.defaultKeyframe = 0;
    d.focus.conjugates!.pop();
    d.gaps!["2"].values = [[100]];
    expect(() => buildLens(d)).not.toThrow();
  });
  it("launches rays from the actual finite object even at coordinate zero and suppresses unadapted metrics", () => {
    const L = buildLens(finiteFixture());
    const rays = traceFiniteFocusFan(L, 0, 2, L.EP.epSD, 0, [-0.01, 0, 0.01]);
    expect(rays).toHaveLength(3);
    for (const ray of rays) {
      expect(ray.clipped).toBe(false);
      expect(Math.abs(ray.y + (106 - ray.pts.at(-1)![0]) * ray.u)).toBeLessThan(0.0001);
    }
    const context = createAnalysisComputationContext({
      preparedState: prepareRuntimeState(L, 0, 0),
      dynamicEFL: L.EFL,
      currentEPSD: L.EP.epSD,
      currentPhysStopSD: 2,
    });
    const support = assessMtfSupport(context.request, { method: "geometric", spectrum: "reference", focus: "design" });
    expect(support.conjugate?.objectDistanceMm).toBe(99);
    const bounded = resolveMtfFieldGeometry(prepareRuntimeState(L, 0, 0), 2, (angle) => angle * 10);
    expect(bounded!.chiefEdgeAngleDeg).toBeLessThanOrEqual(2.000001);
    expect(context.sectionAvailability("mtf").available).toBe(true);
    expect(context.sectionAvailability("distortion").available).toBe(false);
    expect(() => context.computeDistortionCurve()).toThrow(/finite-only/);
    expect(context.computeOpticalSummary().infinityEFLMm).toBeNull();
  });
});
