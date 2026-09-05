import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeState.js";
import { apertureObjectDistance, realWorkingApertureForState } from "../../../src/optics/trace/workingFNumber.js";
import { apertureMetricsForState, resolveApertureStop } from "../../../src/optics/first-order/aperture.js";
import { createFlatProfile } from "../../../src/optics/math/surfaceProfile.js";
import Plena from "../../../src/lens-data/nikon/NikonZ135f18.data.js";

function planeState() {
  const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
  return {
    ...state,
    surfaces: state.surfaces.map((s) => ({ ...s, R: 1e15, nd: 1, sd: 100, profile: createFlatProfile() })),
  };
}

describe("real marginal-ray working aperture", () => {
  it.each([20, 100, 200])("matches an independent straight-ray cone from a source %s mm away", (distance) => {
    const result = realWorkingApertureForState(planeState(), 5, distance);
    expect(result.status).toBe("ok");
    expect(result.fNumber).toBeCloseTo(Math.hypot(distance, 5) / 10, 8);
    expect(result.numericalAperture).toBeCloseTo(5 / Math.hypot(distance, 5), 10);
  });
  it("preserves n sin(theta) across a planar air/glass interface", () => {
    const state = planeState();
    state.surfaces = state.surfaces.map((s, i) => ({ ...s, nd: i === 0 ? 1 : 1.5 }));
    expect(realWorkingApertureForState(state, 5, 20).fNumber).toBeCloseTo(Math.hypot(20, 5) / 10, 8);
  });
  it("keeps the Plena calibration and distinguishes real and paraxial cones", () => {
    const L = build(Plena);
    const state = prepareRuntimeState(L, 0, 0);
    const stop = resolveApertureStop(L, 0, 1.85);
    expect(stop.stopSemiDiameterMm * 2).toBeCloseTo(42.91659142192376, 9);
    const result = realWorkingApertureForState(state, stop.stopSemiDiameterMm);
    expect(result.status).toBe("ok");
    expect(result.fNumber).toBeCloseTo(1.8325628709, 7);
    expect(result.fNumber).toBeLessThan(1.85); // Never clamp a calculated cone to the marked setting.
    expect(apertureMetricsForState(state, stop.stopSemiDiameterMm).workingFNumber).toBeCloseTo(1.7747155345, 8);
    const stopped = realWorkingApertureForState(state, stop.stopSemiDiameterMm / 2);
    expect(stopped.fNumber).toBeGreaterThan(result.fNumber!);
    const close = realWorkingApertureForState(prepareRuntimeState(L, 1, 0), stop.stopSemiDiameterMm);
    expect(close.fNumber).toBeGreaterThan(result.fNumber!);
    expect(close.objectDistanceMm).toBeCloseTo(663.839442869, 6);
  });
  it("derives finite conjugates from geometry independently of marketing distance", () => {
    const L = build(Plena);
    const state = prepareRuntimeState(L, 1, 0);
    const changed = { ...state, lens: { ...state.lens, runtime: { ...L, closeFocusM: 999 } } };
    expect(apertureObjectDistance(changed)).toBe(apertureObjectDistance(state));
    expect(apertureObjectDistance({ ...state, focusT: 0.001 })).toBe(Infinity);
  });
  it("reports clipping using physical apertures without a drawing clearance", () => {
    const state = planeState();
    state.surfaces[1] = { ...state.surfaces[1], sd: 2 };
    expect(realWorkingApertureForState(state, 5, 100).status).toBe("clipped");
  });
  it("does not substitute a finite value for failed, unsupported or degenerate geometry", () => {
    const state = planeState();
    expect(realWorkingApertureForState(state, 0).status).toBe("degenerate");
    expect(realWorkingApertureForState(state, NaN).fNumber).toBeNull();
    expect(realWorkingApertureForState(state, 5, -1).status).toBe("degenerate");
    expect(realWorkingApertureForState(state, 5).status).toBe("degenerate"); // Collimated plane train.
    const folded = { ...state, lens: { ...state.lens, flags: { ...state.lens.flags, isFoldedOptics: true } } };
    expect(realWorkingApertureForState(folded, 5).status).toBe("unsupported");
    const annular = { ...state, surfaces: state.surfaces.map((s) => ({ ...s, innerSd: 1 })) };
    expect(realWorkingApertureForState(annular, 5).status).toBe("unsupported");
    const tilted = { ...state, imagePlane: { ...state.imagePlane, normal: [0, 1, 0] as const } };
    expect(realWorkingApertureForState(tilted, 5).status).toBe("unsupported");
    const invalid = { ...state, surfaces: state.surfaces.map((s) => ({ ...s, R: NaN })) };
    expect(realWorkingApertureForState(invalid, 5).fNumber).toBeNull();
  });
});
