import { createAnalysisRequest } from "../../../../../src/optics/analysis/request.js";
import { prepareRuntimeState } from "../../../../../src/optics/state/runtimeAdapters.js";
import { stateWithZ } from "../../../../../src/optics/state/preparedGeometry.js";
import { describe, it, expect, vi } from "vitest";
import * as rayAdapters from "../../../../../src/optics/trace/rayAdapters.js";
import Canon14Raw from "../../../../../src/lens-data/canon/CanonEF14mmf28L.data.js";
import ApoLantharRaw from "../../../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import {
  computeDistortionCurve,
  computeDistortionFieldGrid,
} from "../../../../../src/optics/analysis/distortion/distortion.js";
import {
  computeAnalysisFieldGeometryAtState,
  chiefRayImageHeightAccurateForRuntimeLens as chiefRayImageHeightAccurate,
  paraxialObjectVergenceForRuntimeLens as paraxialObjectVergence,
  solveChiefRayForRuntimeLens as solveChiefRay,
  traceParaxialRayForRuntimeLens as traceParaxialRay,
} from "../../../../../src/optics/state/fieldAdapters.js";
import {
  doLayoutForRuntimeLens as doLayout,
  thickOrZero as thick,
} from "../../../../../src/optics/state/runtimeAdapters.js";
import { eflAtFocus } from "../../../../../src/optics/first-order/focusBreathing.js";
import { skewImagePlaneIntercept, traceSkewRay } from "../../../../../src/optics/trace/rayAdapters.js";
import SigmaMacro180Raw from "../../../../../src/lens-data/sigma/SigmaAPOMacro180mmf28.data.js";
import Olympus18Raw from "../../../../../src/lens-data/olympus/OlympusZuikoAutoW18mmf35.data.js";
import NikonZ135Raw from "../../../../../src/lens-data/nikon/NikonZ135f18.data.js";
import NikonZ100400Raw from "../../../../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.js";
import NikonFisheye6mmf28Raw from "../../../../../src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.js";
import MinoltaAF100MacroRaw from "../../../../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.js";
import {
  apertureAt,
  build,
  buildVariableStopGapLens,
  sharedApoLanthar50f2,
  sharedNikkorZ70200,
  sharedSonnar50f15,
} from "../../testLensFixtures.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";

describe("computeDistortionCurve", () => {
  it.each([0, 1])("drops failed samples and reports the Olympus corner unavailable at focus %s", (focusT) => {
    const L = build(Olympus18Raw);
    const { z } = doLayout(focusT, 0, L);
    const result = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, 0, 0), z),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: L.stopPhysSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(result.corner.status).toBe("unreachable");
    expect(result.cornerImageHeight).toBe(21.65);
    expect(result.samples.length).toBeGreaterThan(1);
    if (focusT === 0) expect(result.samples.length).toBe(10);
    for (const sample of result.samples) {
      expect(
        Math.abs(chiefRayImageHeightAccurate(sample.fieldAngleDeg, z, focusT, 0, L) - sample.realHeight),
      ).toBeLessThan(1e-4);
    }
  });

  function curveAcrossJump() {
    const L = buildVariableStopGapLens([1, 1], "test-distortion-jump", undefined, { imageCircleMm: 60 });
    const { z } = doLayout(0, 0, L);
    const geometry = { ...computeAnalysisFieldGeometryAtState(0, 0, L), halfFieldDeg: 20 };
    const prepare = rayAdapters.prepareRayTraceForState;
    const prepared = vi.spyOn(rayAdapters, "prepareRayTraceForState").mockImplementation((...args) => {
      const adapter = prepare(...args);
      return {
        ...adapter,
        ray(y, u) {
          const result = adapter.ray(y, u);
          const angle = (Math.atan(-u) * 180) / Math.PI;
          return { ...result, y: -angle - (angle >= 12 ? 10 : 0), u: 0 };
        },
      };
    });
    try {
      return computeDistortionCurve(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), z),
          dynamicEFL: L.EFL,
          currentEPSD: L.EP.epSD,
          currentPhysStopSD: L.stopPhysSD,
          fieldGeometry: geometry,
          sampling: { distortionCurveSampleCount: 4 },
        }),
      );
    } finally {
      prepared.mockRestore();
    }
  }

  it("keeps a valid corner available after an earlier height jump", () => {
    const result = curveAcrossJump();
    expect(result.corner.status).toBe("reached");
    expect(result.samples.at(-1)!.imageHeight).toBeCloseTo(-30, 10);
    expect(result.samples.at(-1)!.normalizedImageHeight).toBe(1);
  });

  it("drops an invalid middle sample and retains valid samples on both sides", () => {
    const result = curveAcrossJump();
    expect(result.samples.map((sample) => Math.round(sample.imageHeight))).toEqual([0, -10, -30]);
    expect(result.samples.map((sample) => sample.normalizedImageHeight)).toEqual([0, 1 / 3, 1]);
  });

  // Hold forward residuals so solver changes are checked against physical target accuracy.
  // The baseline counts include table construction and final distortion-reference rays.
  it.each([
    { data: ApoLantharRaw, baselineCount: 242 },
    { data: Canon14Raw, baselineCount: 272 },
  ])("validates every sample with fewer rays than bisection for $data.key", ({ data, baselineCount }) => {
    const L = build(data);
    const { z } = doLayout(0, 0, L);
    let boundScalarCount = 0;
    let boundVectorCount = 0;
    const prepare = rayAdapters.prepareRayTraceForState;
    const prepared = vi.spyOn(rayAdapters, "prepareRayTraceForState").mockImplementation((...args) => {
      const adapter = prepare(...args);
      return {
        ...adapter,
        ray(y, u) {
          boundScalarCount++;
          return adapter.ray(y, u);
        },
        vector(input) {
          boundVectorCount++;
          return adapter.vector(input);
        },
      };
    });
    const scalar = vi.spyOn(rayAdapters, "traceRay");
    const vector = vi.spyOn(rayAdapters, "traceRayVector");
    try {
      const result = computeDistortionCurve(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), z),
          dynamicEFL: L.EFL,
          currentEPSD: L.EP.epSD,
          currentPhysStopSD: L.stopPhysSD,
          fieldGeometry: undefined,
          sampling: undefined,
        }),
      );
      expect(result.corner.status).toBe("reached");
      expect(result.samples).toHaveLength(21);
      expect(scalar.mock.calls.length + boundScalarCount).toBeLessThan(baselineCount);
      for (const sample of result.samples) {
        expect(
          Math.abs(chiefRayImageHeightAccurate(sample.fieldAngleDeg, z, 0, 0, L) - sample.realHeight),
        ).toBeLessThan(1e-4);
      }
      expect(boundVectorCount).toBe(0);
      expect(vector).not.toHaveBeenCalled();
    } finally {
      prepared.mockRestore();
      scalar.mockRestore();
      vector.mockRestore();
    }
  });

  it("keeps the axis finite when the projection inverse cannot supply an angle", () => {
    const L = build(SigmaMacro180Raw);
    const { z } = doLayout(1, 0, L);
    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 1, 0, 0), z),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: L.stopPhysSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(samples.length).toBeGreaterThan(0);
    expect(samples[0].idealFieldAngleDeg).toBe(0);
  });

  /* ── Basic curve shape ── */

  it("returns at least 9 samples for Sonnar 50/1.5", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(samples.length).toBeGreaterThanOrEqual(9);
  });

  it("first sample is at 0° with exactly 0% distortion", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(samples[0].fieldAngleDeg).toBe(0);
    expect(samples[0].distortionPercent).toBe(0);
  });

  it("field angles span from 0 to near the current field edge", () => {
    const L = sharedApoLanthar50f2();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(samples.length).toBeGreaterThan(1);

    const halfField = computeAnalysisFieldGeometryAtState(0, 0, L).halfFieldDeg;
    const lastAngle = samples[samples.length - 1].fieldAngleDeg;
    expect(lastAngle).toBeGreaterThan(0);
    expect(lastAngle).toBeLessThanOrEqual(halfField);
    expect(lastAngle).toBeGreaterThan(halfField * 0.9);
  });

  it("all samples have finite values", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    for (const s of samples) {
      expect(isFinite(s.fieldAngleDeg)).toBe(true);
      expect(isFinite(s.distortionPercent)).toBe(true);
      expect(isFinite(s.realHeight)).toBe(true);
      expect(isFinite(s.idealHeight)).toBe(true);
      expect(isFinite(s.imageHeight)).toBe(true);
      expect(isFinite(s.normalizedImageHeight)).toBe(true);
      expect(isFinite(s.idealFieldAngleDeg)).toBe(true);
    }
  });

  /* ── Edge cases ── */

  it("ignores the legacy dynamicEFL input and still computes the curve", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: 0,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(samples.length).toBeGreaterThanOrEqual(9);
  });

  it("matches exactly when using precomputed field geometry", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0.25, 0, L);
    const dynamicEFL = eflAtFocus(0.25, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0.2);
    const geometry = computeAnalysisFieldGeometryAtState(0.25, 0, L);

    expect(
      computeDistortionCurve(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0.25, 0, 0), zPos),
          dynamicEFL: dynamicEFL,
          currentEPSD: L.EP.epSD,
          currentPhysStopSD: currentPhysStopSD,
          fieldGeometry: geometry,
          sampling: undefined,
        }),
      ),
    ).toEqual(
      computeDistortionCurve(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0.25, 0, 0), zPos),
          dynamicEFL: dynamicEFL,
          currentEPSD: L.EP.epSD,
          currentPhysStopSD: currentPhysStopSD,
          fieldGeometry: undefined,
          sampling: undefined,
        }),
      ),
    );
    expect(
      computeDistortionFieldGrid(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0.25, 0, 0), zPos),
          dynamicEFL: L.EFL,
          currentEPSD: L.EP.epSD,
          currentPhysStopSD: currentPhysStopSD,
          fieldGeometry: geometry,
          sampling: undefined,
        }),
      ),
    ).toEqual(
      computeDistortionFieldGrid(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0.25, 0, 0), zPos),
          dynamicEFL: L.EFL,
          currentEPSD: L.EP.epSD,
          currentPhysStopSD: currentPhysStopSD,
          fieldGeometry: undefined,
          sampling: undefined,
        }),
      ),
    );
  });

  /* ── Zoom lens ── */

  it("produces samples for a zoom lens at tele position", () => {
    const L = sharedNikkorZ70200();
    if (!L.isZoom) return; // skip if not zoom
    const { z: zPos } = doLayout(0, 1, L);
    const dynamicEFL = eflAtFocus(0, 1, L);
    const { currentPhysStopSD } = apertureAt(L, 1, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 1, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    expect(samples.length).toBeGreaterThanOrEqual(9);
    expect(samples[0].distortionPercent).toBe(0);
  });

  /* ── Distortion direction ── */

  it("ApoLanthar 50/2 shows non-zero distortion at field edge", () => {
    const L = sharedApoLanthar50f2();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    const edgeSample = samples[samples.length - 1];
    /* Just verify it's non-zero — specific direction depends on lens design */
    expect(edgeSample.distortionPercent).not.toBe(0);
  });

  it("field angles are monotonically increasing", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldAngleDeg).toBeGreaterThan(samples[i - 1].fieldAngleDeg);
    }
  });

  it("image heights are monotonically increasing in magnitude", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    for (let i = 1; i < samples.length; i++) {
      expect(Math.abs(samples[i].imageHeight)).toBeGreaterThan(Math.abs(samples[i - 1].imageHeight));
      expect(samples[i].normalizedImageHeight).toBeGreaterThan(samples[i - 1].normalizedImageHeight);
    }
  });

  it("keeps close-focus distortion bounded for Nikon Z 135mm f/1.8", () => {
    const L = build(NikonZ135Raw);
    const { z: zPos } = doLayout(1, 0, L);
    const dynamicEFL = eflAtFocus(1, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 1, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    const maxAbs = samples.reduce((m, s) => Math.max(m, Math.abs(s.distortionPercent)), 0);
    expect(maxAbs).toBeLessThan(10);
  });

  it("keeps tele close-focus distortion bounded for Nikon Z 100-400mm", () => {
    const L = build(NikonZ100400Raw);
    const { z: zPos } = doLayout(1, 1, L);
    const dynamicEFL = eflAtFocus(1, 1, L);
    const { currentPhysStopSD } = apertureAt(L, 1, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 1, 1, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    const maxAbs = samples.reduce((m, s) => Math.max(m, Math.abs(s.distortionPercent)), 0);
    expect(maxAbs).toBeLessThan(15);
  });

  it("uses the declared equidistant projection reference for fisheye lenses", () => {
    const L = build(NikonFisheye6mmf28Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeAnalysisFieldGeometryAtState(0, 0, L);

    // halfFieldDeg matches the declared maxTraceFieldDeg (Step 7: fisheyes
    // skip the paraxial-chief-ray bisection that would narrow it).
    expect(geometry.halfFieldDeg).toBeCloseTo(110, 6);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: geometry,
        sampling: undefined,
      }),
    );
    // Samples that can't be solved past the slope-launch cap (~89°) drop out
    // naturally; the curve covers the slope-launchable range and labels
    // everything against the fisheye-equidistant reference.
    expect(samples.length).toBeGreaterThan(5);
    expect(samples.every((sample) => sample.referenceKind === "fisheye-equidistant")).toBe(true);

    const outerSample = samples[samples.length - 1];
    const thetaRad = (outerSample.fieldAngleDeg * Math.PI) / 180;
    expect(outerSample.idealHeight).toBeCloseTo(-6.3 * thetaRad, 5);
  });

  describe("finite-conjugate reference", () => {
    // A positive element ahead of the stop images it with strong pupil aberration, so the real chief ray misses the
    // paraxial entrance-pupil centre and F-tan(theta) of its object-space angle is not its object point's image.
    const L = build({
      key: "test-distortion-front-element-rear-stop",
      name: "Front element, rear stop",
      closeFocusM: 0.5,
      yScFill: 0.55,
      nominalFno: 4,
      fstopSeries: [4, 5.6, 8],
      elements: [{ id: 1, name: "Front element", label: "L1", type: "positive", nd: 1.5168, vd: 64.17 }],
      surfaces: [
        { label: "1", R: 30, nd: 1.5168, sd: 20, d: 10, elemId: 1 },
        { label: "2", R: 1e15, nd: 1.0, sd: 20, d: 25, elemId: 0 },
        { label: "STO", R: 1e15, nd: 1.0, sd: 4, d: 26.5, elemId: 0 },
      ],
      var: { STO: [26.5, 46.5] },
    });
    const curveAt = (focusT: number) => {
      const { z } = doLayout(focusT, 0, L);
      const geometry = computeAnalysisFieldGeometryAtState(focusT, 0, L);
      return {
        geometry,
        samples: computeDistortionCurve(
          createAnalysisRequest({
            preparedState: stateWithZ(prepareRuntimeState(L, focusT, 0, 0), z),
            dynamicEFL: L.EFL,
            currentEPSD: L.EP.epSD,
            currentPhysStopSD: L.stopPhysSD,
            fieldGeometry: geometry,
            sampling: undefined,
          }),
        ).samples,
      };
    };
    const tanDeg = (deg: number) => Math.tan((deg * Math.PI) / 180);

    it("keeps the F-tan(theta) reference at infinity", () => {
      const samples = curveAt(0).samples.slice(1);
      const scale = samples[0].idealHeight / tanDeg(samples[0].fieldAngleDeg);
      for (const sample of samples) expect(sample.idealHeight).toBeCloseTo(scale * tanDeg(sample.fieldAngleDeg), 9);
    });

    it("measures finite focus against the paraxial image of the chief ray's object point", () => {
      const focusT = 1;
      const { geometry, samples } = curveAt(focusT);
      const edge = samples.at(-1)!;
      // An axial object at s in front of the first vertex launches y = s·u; the parallel ray's height is the magnification.
      const imageGap = thick(L.N - 1, focusT, 0, L);
      const imageHeight = (y0: number, u0: number) => {
        const ray = traceParaxialRay(y0, u0, focusT, 0, L);
        return ray.y + imageGap * ray.u;
      };
      const objectDistance = -imageHeight(0, 1) / imageHeight(1, 0);
      const chief = solveChiefRay(edge.fieldAngleDeg, focusT, 0, L, geometry);
      const paraxialImage = imageHeight(1, 0) * (chief.yLaunch - chief.uField * objectDistance);
      const infinityConjugateIdeal =
        (samples[1].idealHeight / tanDeg(samples[1].fieldAngleDeg)) * tanDeg(edge.fieldAngleDeg);

      expect(objectDistance).toBeGreaterThan(0);
      expect(Math.abs(edge.idealHeight / paraxialImage - 1)).toBeLessThan(1e-4);
      expect(Math.abs(infinityConjugateIdeal / paraxialImage - 1)).toBeGreaterThan(1e-2);
    });
  });
});

describe("computeDistortionFieldGrid", () => {
  function tracedGridAtState(L: RuntimeLens, focusT: number, zoomT: number) {
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);
    return computeDistortionFieldGrid(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
  }

  it("returns a paired horizontal and vertical grid set", () => {
    const L = sharedSonnar50f15();
    const grid = tracedGridAtState(L, 0, 0);

    expect(grid.idealFieldRadius).toBeGreaterThan(0);
    expect(grid.lines.length).toBe(10);
    expect(grid.lines.filter((line) => line.orientation === "vertical").length).toBe(5);
    expect(grid.lines.filter((line) => line.orientation === "horizontal").length).toBe(5);
    expect(grid.lines.every((line) => line.points.length === 17)).toBe(true);
  });

  it("keeps the center point fixed", () => {
    const L = sharedSonnar50f15();
    const grid = tracedGridAtState(L, 0, 0);
    const centerLine = grid.lines.find((line) => line.orientation === "vertical" && line.idealCoordinate === 0);
    expect(centerLine).toBeDefined();
    const centerPoint = centerLine!.points.find((point) => point.idealY === 0);
    expect(centerPoint).toBeDefined();
    expect(centerPoint!.insideImageCircle).toBe(true);
    expect(centerPoint!.usable).toBe(true);
    expect(centerPoint!.tracedX).toBeCloseTo(0, 8);
    expect(centerPoint!.tracedY).toBeCloseTo(0, 8);
  });

  it("marks corner samples outside the current image circle as unavailable", () => {
    const L = sharedSonnar50f15();
    const grid = tracedGridAtState(L, 0, 0);
    const topLine = grid.lines.find((line) => line.orientation === "horizontal" && line.idealCoordinate === 1);

    expect(topLine).toBeDefined();
    expect(topLine!.points[0].insideImageCircle).toBe(false);
    expect(topLine!.points[0].usable).toBe(false);
    expect(topLine!.points[topLine!.points.length - 1].insideImageCircle).toBe(false);
    expect(topLine!.points[topLine!.points.length - 1].usable).toBe(false);
  });

  it("moves the traced axis edge point in the same direction as the 1D edge distortion sign", () => {
    const L = sharedApoLanthar50f2();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);

    const { samples } = computeDistortionCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: dynamicEFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    const edgeSample = samples[samples.length - 1];
    const grid = computeDistortionFieldGrid(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: undefined,
        sampling: undefined,
      }),
    );
    const centerLine = grid.lines.find((line) => line.orientation === "horizontal" && line.idealCoordinate === 0);

    expect(centerLine).toBeDefined();
    const edgePoint = centerLine!.points[centerLine!.points.length - 1];
    expect(edgePoint.insideImageCircle).toBe(true);
    expect(edgePoint.usable).toBe(true);
    expect(edgePoint.tracedX).not.toBeNull();

    const tracedRadius = Math.abs(edgePoint.tracedX!);
    const idealRadius = Math.abs(edgePoint.idealX);
    if (edgeSample.distortionPercent > 0) {
      expect(tracedRadius).toBeGreaterThan(idealRadius);
    } else if (edgeSample.distortionPercent < 0) {
      expect(tracedRadius).toBeLessThan(idealRadius);
    } else {
      expect(tracedRadius).toBeCloseTo(idealRadius, 8);
    }
  });

  it("keeps usable traced grid points finite", () => {
    const L = sharedNikkorZ70200();
    const grid = tracedGridAtState(L, 0, 1);

    for (const line of grid.lines) {
      for (const point of line.points) {
        expect(isFinite(point.idealX)).toBe(true);
        expect(isFinite(point.idealY)).toBe(true);
        if (!point.usable) continue;
        expect(point.tracedX).not.toBeNull();
        expect(point.tracedY).not.toBeNull();
        expect(isFinite(point.tracedX!)).toBe(true);
        expect(isFinite(point.tracedY!)).toBe(true);
      }
    }
  });

  it("projects close-focus grid points to the current variable image plane", () => {
    const L = build(MinoltaAF100MacroRaw);
    const focusT = 1;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);
    const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const grid = computeDistortionFieldGrid(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: geometry,
        sampling: undefined,
      }),
    );
    const centerLine = grid.lines.find((line) => line.orientation === "horizontal" && line.idealCoordinate === 0);

    expect(centerLine).toBeDefined();
    const edgePoint = centerLine!.points[centerLine!.points.length - 1];
    expect(edgePoint).toBeDefined();
    expect(edgePoint.usable).toBe(true);
    expect(grid.idealFieldRadius).toBeGreaterThan(0);

    const rectilinearScale = grid.idealFieldRadius / Math.tan((geometry.halfFieldDeg * Math.PI) / 180);
    const paraxialSlopeX = edgePoint.idealX / rectilinearScale;
    const paraxialSlopeY = -edgePoint.idealY / rectilinearScale;
    const paraxialSlope = Math.hypot(paraxialSlopeX, paraxialSlopeY);
    const pupilCorrection = (angleDeg: number) => {
      const paraxialYChief = geometry.epRatio * Math.tan((angleDeg * Math.PI) / 180);
      const solvedYChief = solveChiefRay(angleDeg, focusT, zoomT, L, geometry).yLaunch;
      return Math.abs(paraxialYChief) > 1e-12 ? solvedYChief / paraxialYChief : 1;
    };
    // Aim the chief ray at the object point whose paraxial image is the ideal grid point.
    const pupilVergence = geometry.epRatio * paraxialObjectVergence(focusT, zoomT, L);
    let correction = pupilCorrection(Math.min((Math.atan(paraxialSlope) * 180) / Math.PI, geometry.halfFieldDeg));
    let slopeScale = 1;
    for (let pass = 0; pass < 4; pass++) {
      slopeScale = (1 + pupilVergence) / (1 + pupilVergence * correction);
      correction = pupilCorrection(
        Math.min((Math.atan(slopeScale * paraxialSlope) * 180) / Math.PI, geometry.halfFieldDeg),
      );
    }
    const fieldSlopeX = paraxialSlopeX * slopeScale;
    const fieldSlopeY = paraxialSlopeY * slopeScale;
    const correctedEpRatio = geometry.epRatio * correction;
    const trace = traceSkewRay(
      -correctedEpRatio * fieldSlopeX,
      -correctedEpRatio * fieldSlopeY,
      fieldSlopeX,
      fieldSlopeY,
      focusT,
      zoomT,
      currentPhysStopSD,
      true,
      L,
    );

    const lastSurfZ = zPos[L.N - 1];
    const currentImage = skewImagePlaneIntercept(
      trace.x,
      trace.y,
      trace.ux,
      trace.uy,
      lastSurfZ,
      lastSurfZ + thick(L.N - 1, focusT, zoomT, L),
    );
    const staleImage = skewImagePlaneIntercept(
      trace.x,
      trace.y,
      trace.ux,
      trace.uy,
      lastSurfZ,
      lastSurfZ + L.S[L.N - 1].d,
    );

    expect(currentImage).not.toBeNull();
    expect(staleImage).not.toBeNull();
    // The grid interpolates the pupil correction between solved fields; this check solves it exactly.
    expect(edgePoint.tracedX).toBeCloseTo(currentImage!.x, 5);
    expect(edgePoint.tracedY).toBeCloseTo(-currentImage!.y, 5);
    expect(Math.abs(edgePoint.tracedX! - staleImage!.x)).toBeGreaterThan(1);
  });

  it("uses equidistant ideal grid coordinates for fisheye projection residuals", () => {
    const L = build(NikonFisheye6mmf28Raw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);
    const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const grid = computeDistortionFieldGrid(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: geometry,
        sampling: undefined,
      }),
    );

    expect(grid.referenceKind).toBe("fisheye-equidistant");
    expect(grid.idealFieldRadius).toBeCloseTo(6.3 * ((geometry.halfFieldDeg * Math.PI) / 180), 5);
  });

  it("Nikon 6mm fisheye: angular grid sampler produces a properly-typed grid", () => {
    // After Step 7 the Nikon 6mm reports halfFieldDeg=110°, well past the
    // slope-launch cap. The angular sampler successfully forward-maps for all
    // grid points (no `null` from inverse-mapping past π/2 as the legacy
    // image-space sampler used to produce); chief-ray usability at the
    // resulting angles depends on the lens's individual chief-ray geometry
    // (the Nikon 6mm's paraxial chief ray clips past ~10° regardless of
    // launch surface), so we only assert structural invariants here.
    const L = build(NikonFisheye6mmf28Raw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);
    const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const grid = computeDistortionFieldGrid(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: currentPhysStopSD,
        fieldGeometry: geometry,
        sampling: undefined,
      }),
    );

    expect(grid.referenceKind).toBe("fisheye-equidistant");
    expect(grid.lines.length).toBeGreaterThan(0);
    // On-axis grid points (the center line) are always usable: the angular
    // sampler doesn't fail there regardless of halfFieldDeg.
    const centerLine = grid.lines.find((line) => line.idealCoordinate === 0);
    expect(centerLine).toBeDefined();
    const centerPoint = centerLine!.points.find((p) => p.radiusNormalized < 1e-6);
    expect(centerPoint?.usable).toBe(true);
  });
});
