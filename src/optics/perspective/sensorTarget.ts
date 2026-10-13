/** Actual traced-chief inversion for fixed-sensor perspective field targets. */

import { solveScalarRoot, type ScalarRootSolveResult, type ScalarRootSolveStatus } from "../math/rootSolve.js";
import { dot, normalize, subtract } from "../math/vector.js";
import type { Vec3 } from "../types.js";
import {
  isPerspectiveDirectionInsideProjectionDomain,
  solvePerspectiveChiefRay,
  type PerspectiveChiefRayOptions,
  type PerspectiveChiefRayResult,
} from "./chiefRay.js";
import {
  directionForIdealCoordinates,
  idealCoordinatesForDirection,
  sensorUvForPoint,
  type FieldPlaneFrame,
  type PerspectiveProjectionReference,
  type SensorUv,
} from "./fieldGeometry.js";
import type { PerspectiveTraceContext } from "./trace.js";

/** Diagnostics for the outer solve that targets a finite fixed-sensor point. */
export interface PerspectiveSensorLockSolveResult {
  status: ScalarRootSolveStatus;
  iterations: number;
  evaluations: number;
  residualMm: SensorUv | null;
  scalarRoot: ScalarRootSolveResult | null;
}

export interface SensorChiefSolve {
  chief: PerspectiveChiefRayResult | null;
  sensorSolve: PerspectiveSensorLockSolveResult;
}

interface SensorChiefEvaluation {
  imageU: number;
  imageV: number;
  chief: PerspectiveChiefRayResult;
  residualMm: SensorUv;
  residualMagnitudeMm: number;
}

const SENSOR_LOCK_RESIDUAL_TOLERANCE_MM = 1e-5;
const SENSOR_LOCK_MAX_ITERATIONS = 12;

/**
 * Correct the analytic pose inversion against the real traced chief intercept.
 * Meridional requests use the shared bracketed scalar solver; general skew
 * requests use a damped two-coordinate Newton solve over intrinsic ideal-image
 * coordinates.
 */
export function solveChiefToSensorPoint(
  context: PerspectiveTraceContext,
  sensorPoint: Vec3,
  sensorFrame: FieldPlaneFrame,
  intrinsicFrame: FieldPlaneFrame,
  projection: PerspectiveProjectionReference,
  seedDirectionLens: Vec3,
  chiefOptions: PerspectiveChiefRayOptions | undefined,
): SensorChiefSolve {
  const seed = idealCoordinatesForDirection(seedDirectionLens, projection);
  if (!seed) return failedSensorChiefSolve("invalid-input", 0, null, null);

  const cache = new Map<string, SensorChiefEvaluation | null>();
  let evaluations = 0;
  let nearest: SensorChiefEvaluation | null = null;
  const evaluate = (imageU: number, imageV: number): SensorChiefEvaluation | null => {
    const key = `${imageU.toPrecision(14)}|${imageV.toPrecision(14)}`;
    const cached = cache.get(key);
    if (cached !== undefined || cache.has(key)) return cached ?? null;
    evaluations += 1;
    const directionLens = directionForIdealCoordinates(imageU, imageV, projection);
    const directionCamera = directionLens ? normalize(context.pose.lensToCameraDirection(directionLens)) : null;
    if (!directionLens || !directionCamera || !isPerspectiveDirectionInsideProjectionDomain(context, directionLens)) {
      cache.set(key, null);
      return null;
    }
    const chief = solvePerspectiveChiefRay(context, directionCamera, {
      ...chiefOptions,
      bracketScanSamples: chiefOptions?.bracketScanSamples ?? 32,
    });
    const actual = chief.chiefTrace?.sensorIntersection?.point ?? null;
    if (chief.status !== "usable" || !actual) {
      cache.set(key, null);
      return null;
    }
    const offset = subtract(actual, sensorPoint);
    const residualMm = { u: dot(offset, sensorFrame.uAxis), v: dot(offset, sensorFrame.vAxis) };
    const evaluation = {
      imageU,
      imageV,
      chief,
      residualMm,
      residualMagnitudeMm: Math.hypot(residualMm.u, residualMm.v),
    };
    if (!nearest || evaluation.residualMagnitudeMm < nearest.residualMagnitudeMm) nearest = evaluation;
    cache.set(key, evaluation);
    return evaluation;
  };

  const targetUv = sensorUvForPoint(sensorFrame, sensorPoint);
  if (Math.abs(targetUv.u) <= 1e-12 && Math.abs(seed.u) <= 1e-9) {
    return solveMeridionalSensorChief(
      evaluate,
      seed.v,
      intrinsicFrame,
      () => evaluations,
      () => nearest,
    );
  }
  return solveSkewSensorChief(
    evaluate,
    seed,
    () => evaluations,
    () => nearest,
  );
}

function solveMeridionalSensorChief(
  evaluate: (imageU: number, imageV: number) => SensorChiefEvaluation | null,
  seedV: number,
  intrinsicFrame: FieldPlaneFrame,
  evaluationCount: () => number,
  nearestEvaluation: () => SensorChiefEvaluation | null,
): SensorChiefSolve {
  const maxV = Math.max(4 * intrinsicFrame.halfHeightMm, Math.abs(seedV) + intrinsicFrame.halfHeightMm);
  const scalarRoot = solveScalarRoot((imageV) => evaluate(0, imageV)?.residualMm.v, {
    initialGuess: seedV,
    initialHalfWidth: Math.max(intrinsicFrame.halfHeightMm / 8, 0.25),
    min: -maxV,
    max: maxV,
    maxExpansions: 5,
    scanSamples: 12,
    residualTolerance: SENSOR_LOCK_RESIDUAL_TOLERANCE_MM,
    intervalTolerance: 1e-8,
    maxIterations: 24,
  });
  const solved = scalarRoot.root === null ? null : evaluate(0, scalarRoot.root);
  const finalEvaluation = solved ?? nearestEvaluation();
  const status =
    scalarRoot.status === "converged" &&
    solved !== null &&
    Math.abs(solved.residualMm.u) <= SENSOR_LOCK_RESIDUAL_TOLERANCE_MM
      ? "converged"
      : scalarRoot.status === "converged"
        ? "iteration-limit"
        : scalarRoot.status;
  return {
    chief: finalEvaluation?.chief ?? null,
    sensorSolve: {
      status,
      iterations: scalarRoot.iterations,
      evaluations: evaluationCount(),
      residualMm: finalEvaluation?.residualMm ?? null,
      scalarRoot,
    },
  };
}

function solveSkewSensorChief(
  evaluate: (imageU: number, imageV: number) => SensorChiefEvaluation | null,
  seed: SensorUv,
  evaluationCount: () => number,
  nearestEvaluation: () => SensorChiefEvaluation | null,
): SensorChiefSolve {
  let current = evaluate(seed.u, seed.v);
  if (!current) return failedSensorChiefSolve("evaluation-failed", evaluationCount(), nearestEvaluation(), null);
  if (current.residualMagnitudeMm <= SENSOR_LOCK_RESIDUAL_TOLERANCE_MM) {
    return successfulSensorChiefSolve(current, 0, evaluationCount());
  }

  for (let iteration = 1; iteration <= SENSOR_LOCK_MAX_ITERATIONS; iteration++) {
    const stepU = Math.max(1e-4, Math.abs(current.imageU) * 1e-4);
    const stepV = Math.max(1e-4, Math.abs(current.imageV) * 1e-4);
    const uProbe = evaluate(current.imageU + stepU, current.imageV);
    const vProbe = evaluate(current.imageU, current.imageV + stepV);
    if (!uProbe || !vProbe) {
      return failedSensorChiefSolve("evaluation-failed", evaluationCount(), nearestEvaluation(), null, iteration);
    }

    const duu = (uProbe.residualMm.u - current.residualMm.u) / stepU;
    const dvu = (uProbe.residualMm.v - current.residualMm.v) / stepU;
    const duv = (vProbe.residualMm.u - current.residualMm.u) / stepV;
    const dvv = (vProbe.residualMm.v - current.residualMm.v) / stepV;
    const determinant = duu * dvv - duv * dvu;
    if (!Number.isFinite(determinant) || Math.abs(determinant) <= 1e-12) {
      return failedSensorChiefSolve("unbracketed", evaluationCount(), nearestEvaluation(), null, iteration);
    }

    const deltaU = (-dvv * current.residualMm.u + duv * current.residualMm.v) / determinant;
    const deltaV = (dvu * current.residualMm.u - duu * current.residualMm.v) / determinant;
    let next: SensorChiefEvaluation | null = null;
    for (const damping of [1, 0.5, 0.25, 0.125]) {
      const candidate = evaluate(current.imageU + damping * deltaU, current.imageV + damping * deltaV);
      if (candidate && candidate.residualMagnitudeMm < current.residualMagnitudeMm) {
        next = candidate;
        break;
      }
    }
    if (!next) {
      return failedSensorChiefSolve("iteration-limit", evaluationCount(), nearestEvaluation(), null, iteration);
    }
    current = next;
    if (current.residualMagnitudeMm <= SENSOR_LOCK_RESIDUAL_TOLERANCE_MM) {
      return successfulSensorChiefSolve(current, iteration, evaluationCount());
    }
  }

  return failedSensorChiefSolve(
    "iteration-limit",
    evaluationCount(),
    nearestEvaluation(),
    null,
    SENSOR_LOCK_MAX_ITERATIONS,
  );
}

function successfulSensorChiefSolve(
  evaluation: SensorChiefEvaluation,
  iterations: number,
  evaluations: number,
): SensorChiefSolve {
  return {
    chief: evaluation.chief,
    sensorSolve: {
      status: "converged",
      iterations,
      evaluations,
      residualMm: evaluation.residualMm,
      scalarRoot: null,
    },
  };
}

function failedSensorChiefSolve(
  status: Exclude<ScalarRootSolveStatus, "converged">,
  evaluations: number,
  nearest: SensorChiefEvaluation | null,
  scalarRoot: ScalarRootSolveResult | null,
  iterations = 0,
): SensorChiefSolve {
  return {
    chief: nearest?.chief ?? null,
    sensorSolve: {
      status,
      iterations,
      evaluations,
      residualMm: nearest?.residualMm ?? null,
      scalarRoot,
    },
  };
}
