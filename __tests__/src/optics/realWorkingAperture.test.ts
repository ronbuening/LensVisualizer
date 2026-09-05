import LaunchCase0 from "../../../src/lens-data/fujifilm/FujifilmGF23mmf4.data.js";
import LaunchCase1 from "../../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.js";
import LaunchCase2 from "../../../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.js";
import LaunchCase3 from "../../../src/lens-data/fujifilm/FujifilmGF55mmf17.data.js";
import LaunchCase4 from "../../../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.js";
import LaunchCase5 from "../../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.js";
import LaunchCase6 from "../../../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.js";
import LaunchCase7 from "../../../src/lens-data/fujifilm/FujifilmX7018mmf28.data.js";
import LaunchCase8 from "../../../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.js";
import LaunchCase9 from "../../../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.js";
import LaunchCase10 from "../../../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.js";
import LaunchCase11 from "../../../src/lens-data/laowa/Laowa15mmf4Macro.data.js";
import LaunchCase12 from "../../../src/lens-data/panasonic/PanasonicLumixG25mmf17.data.js";
import LaunchCase13 from "../../../src/lens-data/sigma/Sigma2845mmf18DN.data.js";
import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeState.js";
import { apertureObjectDistance, realWorkingApertureForState } from "../../../src/optics/trace/workingFNumber.js";
import { apertureMetricsForState, resolveApertureStop } from "../../../src/optics/first-order/aperture.js";
import { createFlatProfile } from "../../../src/optics/math/surfaceProfile.js";
import { conjugateK } from "../../../src/optics/optics.js";
import Sonnar from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import SonnarF2 from "../../../src/lens-data/carl-zeiss-jena/ZeissJenaSonnar50f2.data.js";
import ApoLanthar from "../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import DefocusNikkor from "../../../src/lens-data/nikon/NikonAiAFDCNikkor105mmf2D.data.js";
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
    expect(apertureMetricsForState(state, stop.stopSemiDiameterMm).paraxialWorkingFNumber).toBeCloseTo(1.7747155345, 8);
    const stopped = realWorkingApertureForState(state, stop.stopSemiDiameterMm / 2);
    expect(stopped.fNumber).toBeGreaterThan(result.fNumber!);
    const close = realWorkingApertureForState(prepareRuntimeState(L, 1, 0), stop.stopSemiDiameterMm);
    expect(close.fNumber).toBeGreaterThan(result.fNumber!);
    expect(close.objectDistanceMm).toBeCloseTo(1 / conjugateK(1, 0, L), 8);
  });
  it("derives finite conjugates from geometry independently of marketing distance", () => {
    const L = build(Plena);
    const state = prepareRuntimeState(L, 1, 0);
    const changed = { ...state, lens: { ...state.lens, runtime: { ...L, closeFocusM: 999 } } };
    expect(apertureObjectDistance(changed)).toBe(apertureObjectDistance(state));
    expect(apertureObjectDistance(prepareRuntimeState(L, 0, 0))).toBe(Infinity);
  });
  it.each([Plena, Sonnar, SonnarF2])("keeps $name continuous through the former infinity cutoffs", (data) => {
    const L = build(data);
    const stop = resolveApertureStop(L, 0, 8).stopSemiDiameterMm;
    for (const boundary of [0.0001, 0.003]) {
      const before = prepareRuntimeState(L, boundary - 1e-8, 0);
      const after = prepareRuntimeState(L, boundary + 1e-8, 0);
      const a = realWorkingApertureForState(before, stop);
      const b = realWorkingApertureForState(after, stop);
      expect(a.status).toBe("ok");
      expect(b.status).toBe("ok");
      expect(Math.abs(a.fNumber! - b.fNumber!)).toBeLessThan(1e-6);
      expect(1 / a.objectDistanceMm).toBeCloseTo(conjugateK(before.focusT, 0, L), 14);
    }
    expect(conjugateK(1e-8, 0, L)).not.toBe(0);
    expect(Math.abs(conjugateK(1e-8, 0, L))).toBeLessThan(1e-8);
  });
  it("references infinity at the same zoom and aberration setting", () => {
    const L = build(DefocusNikkor);
    for (const aberrationT of [-1, 0, 1]) {
      expect(conjugateK(0, 0, L, aberrationT)).toBe(0);
      expect(Math.abs(conjugateK(1e-8, 0, L, aberrationT))).toBeLessThan(1e-8);
    }
  });
  it.each([
    LaunchCase0,
    LaunchCase1,
    LaunchCase2,
    LaunchCase3,
    LaunchCase4,
    LaunchCase5,
    LaunchCase6,
    LaunchCase7,
    LaunchCase8,
    LaunchCase9,
    LaunchCase10,
    LaunchCase11,
    LaunchCase12,
    LaunchCase13,
  ])("traces $name close-focus sources despite loose rear-surface bounds", (data) => {
    const L = build(data);
    const state = prepareRuntimeState(L, 1, 0);
    const stop = resolveApertureStop(L, 0, 8).stopSemiDiameterMm;
    const result = realWorkingApertureForState(state, stop);
    expect(result.status).toBe("ok");
    expect(result.fNumber).toBeGreaterThan(0);
    expect(Number.isFinite(result.fNumber)).toBe(true);
  });
  it("preserves a ray cone when the source is nearer than the default launch plane", () => {
    const result = realWorkingApertureForState(planeState(), 0.1, 0.5);
    expect(result.status).toBe("ok");
    expect(result.fNumber).toBeCloseTo(Math.hypot(0.5, 0.1) / 0.2, 8);
  });
  it("keeps finite sources stable as they approach infinity", () => {
    const L = build(Plena);
    const state = prepareRuntimeState(L, 0, 0);
    const stop = resolveApertureStop(L, 0, 8).stopSemiDiameterMm;
    const infinity = realWorkingApertureForState(state, stop, Infinity);
    expect(realWorkingApertureForState(state, stop, 1e14).fNumber).toBeCloseTo(infinity.fNumber!, 7);
  });
  it("reports clipping using physical apertures without a drawing clearance", () => {
    const state = planeState();
    state.surfaces[1] = { ...state.surfaces[1], sd: 2 };
    const result = realWorkingApertureForState(state, 5, 100);
    expect(result.status).toBe("ok");
    expect(result.clippedSurfaceIndices).toEqual([1]);
    expect(result.fNumber).toBeCloseTo(realWorkingApertureForState(planeState(), 5, 100).fNumber!, 10);
    expect(Object.isFrozen(result.clippedSurfaceIndices)).toBe(true);
  });
  it("retains a conventional working cone while diagnosing a catalog rim", () => {
    const L = build(ApoLanthar);
    const state = prepareRuntimeState(L, 0, 0);
    const stop = resolveApertureStop(L, 0, L.FOPEN).stopSemiDiameterMm;
    const open = apertureMetricsForState(state, stop);
    expect(open.status).toBe("ok");
    expect(open.workingFNumber).toBeGreaterThan(0);
    expect(open.clippedSurfaceIndices).toContain(5);
    expect(apertureMetricsForState(state, stop / 2).clippedSurfaceIndices).toEqual([]);
    const sonn = build(Sonnar);
    expect(realWorkingApertureForState(prepareRuntimeState(sonn, 0, 0), sonn.stopPhysSD).status).toBe("failed");
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
