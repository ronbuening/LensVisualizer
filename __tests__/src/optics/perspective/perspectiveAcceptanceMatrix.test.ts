import { describe, expect, it } from "vitest";
import { computeMovementPair } from "../../../../src/comparison/comparisonSliders.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { anchorLayoutToCamera } from "../../../../src/optics/cameraLayout.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { clampLensMovement, isMovementAxisEnabled } from "../../../../src/optics/lensMovement.js";
import { doLayout, entrancePupilAtState } from "../../../../src/optics/optics.js";
import { computePerspectiveFocusAnalysis } from "../../../../src/optics/perspective/analysis/focus.js";
import {
  computePerspectiveVignettingAnalysis,
  createAreaWeightedCircularPupilPoints,
} from "../../../../src/optics/perspective/analysis/vignetting.js";
import { sampleSensorLockedFields } from "../../../../src/optics/perspective/fieldSampling.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../src/optics/perspective/trace.js";
import { traceEngineRay2 } from "../../../../src/optics/trace/rayAdapters.js";
import type { Vec3 } from "../../../../src/optics/types.js";
import type { LensMovementState } from "../../../../src/optics/lensMovement.js";
import type { RuntimeLens } from "../../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";

const DUAL_AXIS_KEY = "nikon-pc-nikkor-19mm-f4e-ed";
const SHIFT_ONLY_KEY = "nikon-pc-nikkor-35mm-f28";
const ORDINARY_KEY = "nikkor-z-50f18s";

interface AcceptanceScenario {
  label: string;
  focusT: number;
  stopdownT: number;
  requestedMovement: LensMovementState;
}

interface AcceptanceState {
  L: RuntimeLens;
  context: PerspectiveTraceContext;
  focusT: number;
  stopdownT: number;
  currentStopSemiDiameterMm: number;
  currentPupilSemiDiameterMm: number;
}

const DUAL_AXIS_MATRIX: readonly AcceptanceScenario[] = [
  { label: "zero", focusT: 0, stopdownT: 0, requestedMovement: { shiftMm: 0, tiltDeg: 0 } },
  { label: "positive shift", focusT: 0, stopdownT: 0, requestedMovement: { shiftMm: 4, tiltDeg: 0 } },
  { label: "negative shift", focusT: 0, stopdownT: 0, requestedMovement: { shiftMm: -4, tiltDeg: 0 } },
  { label: "positive tilt", focusT: 0, stopdownT: 0, requestedMovement: { shiftMm: 0, tiltDeg: 3 } },
  { label: "negative tilt", focusT: 0, stopdownT: 0, requestedMovement: { shiftMm: 0, tiltDeg: -3 } },
  { label: "combined infinity", focusT: 0, stopdownT: 0, requestedMovement: { shiftMm: 4, tiltDeg: 3 } },
  { label: "combined close", focusT: 1, stopdownT: 0, requestedMovement: { shiftMm: 4, tiltDeg: 3 } },
  { label: "combined close stopped", focusT: 1, stopdownT: 0.6, requestedMovement: { shiftMm: 4, tiltDeg: 3 } },
];

const FOCUS_PUPIL_POINTS = [
  { u: 0, v: 0, weight: 1 },
  { u: 0, v: -0.6, weight: 1 },
  { u: 0, v: 0.6, weight: 1 },
  { u: -0.6, v: 0, weight: 1 },
  { u: 0.6, v: 0, weight: 1 },
] as const;

function acceptanceState(lensKey: string, scenario: AcceptanceScenario): AcceptanceState {
  const L = buildLens(LENS_CATALOG[lensKey]);
  const reference = doLayout(0, 0, L);
  const current = doLayout(scenario.focusT, 0, L);
  const cameraLayout = anchorLayoutToCamera(reference, current);
  const movement = clampLensMovement(L, scenario.requestedMovement);
  const preparedState = prepareRuntimeState(L, scenario.focusT, 0);
  const fNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, scenario.stopdownT);
  const apertureScale = L.FOPEN / fNumber;

  return {
    L,
    context: createPerspectiveTraceContext({
      preparedState,
      cameraZPos: cameraLayout.z,
      movement: { shiftMm: movement.shiftMm, tiltDeg: movement.tiltDeg },
      tiltPivot: movement.config?.tiltPivot,
    }),
    focusT: scenario.focusT,
    stopdownT: scenario.stopdownT,
    currentStopSemiDiameterMm: L.stopPhysSD * apertureScale,
    currentPupilSemiDiameterMm: entrancePupilAtState(L.stopPhysSD, scenario.focusT, 0, L).epSD * apertureScale,
  };
}

function expectPointOnFixedSensor(context: PerspectiveTraceContext, point: Vec3 | null): void {
  expect(point).not.toBeNull();
  expect(point!.every(Number.isFinite)).toBe(true);
  const offset = point!.map((coordinate, index) => coordinate - context.sensorPlane.point[index]) as unknown as Vec3;
  const residual = offset.reduce((sum, coordinate, index) => sum + coordinate * context.sensorPlane.normal[index], 0);
  expect(residual).toBeCloseTo(0, 8);
}

describe("perspective-control final acceptance matrix", () => {
  it("keeps one camera sensor fixed while physically tracing every dual-axis movement/focus/aperture state", () => {
    const states = DUAL_AXIS_MATRIX.map((scenario) => ({ scenario, state: acceptanceState(DUAL_AXIS_KEY, scenario) }));
    const fixedSensor = states[0].state.context.sensorPlane;

    for (const { scenario, state } of states) {
      expect(state.context.sensorPlane.point).toEqual(fixedSensor.point);
      expect(state.context.sensorPlane.normal).toEqual(fixedSensor.normal);
      expect(state.context.pose.movement).toEqual(scenario.requestedMovement);

      const field = sampleSensorLockedFields(state.context, [{ u: 0, v: 0 }])[0];
      expect(field.status, scenario.label).toBe("usable");
      expect(field.chiefTrace?.reachedSensor, scenario.label).toBe(true);
      expect(field.chiefTrace?.cameraTrace.hits.length, scenario.label).toBeGreaterThan(0);
      expect(
        field.chiefTrace?.cameraTrace.hits.every((hit) => hit.point.every(Number.isFinite)),
        scenario.label,
      ).toBe(true);
      expectPointOnFixedSensor(state.context, field.actualSensorIntercept);
      expectPointOnFixedSensor(state.context, field.chiefTrace?.sensorIntersection?.point ?? null);
    }

    const infinity = states.find(({ scenario }) => scenario.label === "combined infinity")!.state;
    const close = states.find(({ scenario }) => scenario.label === "combined close")!.state;
    const stopped = states.find(({ scenario }) => scenario.label === "combined close stopped")!.state;
    expect(close.context.state.z).not.toEqual(infinity.context.state.z);
    expect(close.context.sensorPlane.point).toEqual(infinity.context.sensorPlane.point);
    expect(stopped.currentStopSemiDiameterMm).toBeLessThan(close.currentStopSemiDiameterMm);
    expect(stopped.currentPupilSemiDiameterMm).toBeLessThan(close.currentPupilSemiDiameterMm);
  });

  it("preserves the centered trace exactly and exposes signed movement effects in blur and illumination", () => {
    const centered = acceptanceState(DUAL_AXIS_KEY, DUAL_AXIS_MATRIX[0]);
    const combined = acceptanceState(DUAL_AXIS_KEY, DUAL_AXIS_MATRIX.find(({ label }) => label === "combined close")!);
    const stopped = acceptanceState(
      DUAL_AXIS_KEY,
      DUAL_AXIS_MATRIX.find(({ label }) => label === "combined close stopped")!,
    );
    const input = {
      origin: [0, 0, centered.context.state.z[0] - 5] as Vec3,
      direction: [0, 0, 1] as Vec3,
    };
    const traceOptions = {
      checkSemiDiameter: true,
      stopSemiDiameter: centered.currentStopSemiDiameterMm,
      stopOnClip: true,
    } as const;
    const direct = traceEngineRay2(centered.context.state, input, traceOptions);
    const identity = centered.context.traceRay(input, traceOptions);

    expect(identity.cameraTrace).toBe(identity.localTrace);
    expect(identity.localTrace).toEqual(direct);
    expectPointOnFixedSensor(centered.context, identity.sensorIntersection?.point ?? null);

    const centeredFocus = computePerspectiveFocusAnalysis(centered.context, {
      stopSemiDiameterMm: centered.currentStopSemiDiameterMm,
      pupilSemiDiameterMm: centered.currentPupilSemiDiameterMm,
      sensorUvs: [
        { u: 0, v: -0.45 },
        { u: 0, v: 0.45 },
      ],
      pupilPoints: FOCUS_PUPIL_POINTS,
    });
    const movedFocus = computePerspectiveFocusAnalysis(combined.context, {
      stopSemiDiameterMm: combined.currentStopSemiDiameterMm,
      pupilSemiDiameterMm: combined.currentPupilSemiDiameterMm,
      sensorUvs: [
        { u: 0, v: -0.45 },
        { u: 0, v: 0.45 },
      ],
      pupilPoints: FOCUS_PUPIL_POINTS,
    });

    expect(centeredFocus.samples.map(({ status }) => status)).toEqual(["usable", "usable"]);
    expect(movedFocus.samples.map(({ status }) => status)).toEqual(["usable", "usable"]);
    expect(movedFocus.samples[0].fieldSample.sceneDirectionCamera?.[1]).not.toBeCloseTo(
      -movedFocus.samples[1].fieldSample.sceneDirectionCamera![1],
      5,
    );
    expect(movedFocus.samples.map((sample) => sample.bestFocus?.normalOffsetMm)).not.toEqual(
      centeredFocus.samples.map((sample) => sample.bestFocus?.normalOffsetMm),
    );

    const pupilPoints = createAreaWeightedCircularPupilPoints(2, 8);
    const wideIllumination = computePerspectiveVignettingAnalysis(combined.context, {
      stopSemiDiameterMm: combined.currentStopSemiDiameterMm,
      pupilSemiDiameterMm: combined.currentPupilSemiDiameterMm,
      sensorUvs: [
        { u: 0, v: -0.6 },
        { u: 0, v: 0.6 },
      ],
      pupilPoints,
    });
    const stoppedIllumination = computePerspectiveVignettingAnalysis(stopped.context, {
      stopSemiDiameterMm: stopped.currentStopSemiDiameterMm,
      pupilSemiDiameterMm: stopped.currentPupilSemiDiameterMm,
      sensorUvs: [
        { u: 0, v: -0.6 },
        { u: 0, v: 0.6 },
      ],
      pupilPoints,
    });

    for (const analysis of [wideIllumination, stoppedIllumination]) {
      expect(analysis.samples.map(({ status }) => status)).toEqual(["usable", "usable"]);
      const top = analysis.samples[0].throughput?.absoluteTransmittedGeometricFactor;
      const bottom = analysis.samples[1].throughput?.absoluteTransmittedGeometricFactor;
      expect(top).toBeTypeOf("number");
      expect(bottom).toBeTypeOf("number");
      expect(top).not.toBeCloseTo(bottom!, 10);
    }
    expect(stoppedIllumination.stopSemiDiameterMm).toBeLessThan(wideIllumination.stopSemiDiameterMm);
  });

  it("honors the real Nikon shift-only contract and omits unsupported tilt", () => {
    const L = buildLens(LENS_CATALOG[SHIFT_ONLY_KEY]);
    const clampedExtreme = clampLensMovement(L, { shiftMm: 99, tiltDeg: 8 });
    const shifted = acceptanceState(SHIFT_ONLY_KEY, {
      label: "shift only",
      focusT: 0,
      stopdownT: 0.35,
      requestedMovement: { shiftMm: 8, tiltDeg: 8 },
    });

    expect(L.perspectiveControl?.tiltPivot).toBeUndefined();
    expect(isMovementAxisEnabled(L.perspectiveControl!.tiltRangeDeg)).toBe(false);
    expect(clampedExtreme).toMatchObject({ shiftMm: 11, tiltDeg: 0, active: true });
    expect(shifted.context.pose.movement).toEqual({ shiftMm: 8, tiltDeg: 0 });
    expect(shifted.context.pose.tiltPivot).toBeNull();

    const field = sampleSensorLockedFields(shifted.context, [{ u: 0, v: 0 }])[0];
    expect(field.status).toBe("usable");
    expectPointOnFixedSensor(shifted.context, field.actualSensorIntercept);
  });

  it("builds independent physical contexts for a PC/ordinary comparison", () => {
    const pc = buildLens(LENS_CATALOG[DUAL_AXIS_KEY]);
    const ordinary = buildLens(LENS_CATALOG[ORDINARY_KEY]);
    const pair = computeMovementPair(6, 4, pc, ordinary);
    const pcState = acceptanceState(DUAL_AXIS_KEY, {
      label: "comparison PC",
      focusT: 0,
      stopdownT: 0,
      requestedMovement: { shiftMm: pair.shiftA, tiltDeg: pair.tiltA },
    });
    const ordinaryState = acceptanceState(ORDINARY_KEY, {
      label: "comparison ordinary",
      focusT: 0,
      stopdownT: 0,
      requestedMovement: { shiftMm: pair.shiftB, tiltDeg: pair.tiltB },
    });

    expect(pair).toMatchObject({ showMovement: true, shiftA: 6, tiltA: 4, shiftB: 0, tiltB: 0 });
    expect(pcState.context.pose.active).toBe(true);
    expect(ordinaryState.context.pose.active).toBe(false);
    expect(pcState.context.cacheKey).not.toBe(ordinaryState.context.cacheKey);
    expect(pcState.context.state.lens.key).toBe(DUAL_AXIS_KEY);
    expect(ordinaryState.context.state.lens.key).toBe(ORDINARY_KEY);

    const ordinaryField = sampleSensorLockedFields(ordinaryState.context, [{ u: 0, v: 0 }])[0];
    expect(ordinaryField.status).toBe("usable");
    expectPointOnFixedSensor(ordinaryState.context, ordinaryField.actualSensorIntercept);
  });
});
