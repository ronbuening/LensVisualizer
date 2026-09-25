/** Physical source points and stop-aimed launches shared by diagrams and optical analyses. */
import type { FiniteConjugate } from "../../types/optics.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import type { TraceOptions } from "../trace/types.js";
import { projectionLaunchSlopeForField2 } from "./projection.js";
import { solveChiefRay2 } from "./chiefRay.js";
import { solveScalarRoot } from "../math/rootSolve.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";

export interface SourceFieldLaunch {
  fieldAngleDeg: number;
  /** Collimated launch direction; a finite source launches every ray from `objectPoint`. */
  direction: Vec3;
  objectPoint?: Vec3;
  /** Axial position of the launch plane in mm. */
  leadZ: number;
  /** Chief-ray height on the launch plane in mm. */
  centerY: number;
}

/**
 * Locate the physical object before the first optical rim.
 * @param state - current optical geometry
 * @param conjugate - axial distance with an explicit reference plane
 * @param fieldAngle - field angle in degrees measured from the first vertex
 * @returns physical source point, or null outside the launch domain
 */
export function sourceObjectPoint(
  state: PreparedOpticalState,
  conjugate: FiniteConjugate,
  fieldAngle: number,
): Vec3 | null {
  const first = state.surfaces[0];
  const z = (conjugate.distanceReference === "image-plane" ? state.imgZ : first.z) - conjugate.objectDistanceMm;
  const slope = projectionLaunchSlopeForField2(state.lens.runtime, fieldAngle);
  if (slope.status === "out-of-domain" || z >= first.z + Math.min(0, first.profile.sag(first.sd)) - 1e-3) return null;
  // Field angle is measured from the first vertex; all pupil rays share this one physical source point.
  return [0, (z - first.z) * slope.uField, z];
}

/**
 * Launch each finite pupil ray from the same source; infinity rays remain parallel.
 * @param launch - aimed source geometry
 * @param x - sagittal launch-plane offset in mm
 * @param y - tangential launch-plane offset in mm
 * @returns normalized ray at the launch plane
 */
export function sourceLaunchRay(launch: SourceFieldLaunch, x: number, y: number): Ray3 {
  const origin: Vec3 = [x, launch.centerY + y, launch.leadZ];
  const source = launch.objectPoint;
  if (!source) return { origin, direction: launch.direction };
  const dx = origin[0] - source[0];
  const dy = origin[1] - source[1];
  const dz = origin[2] - source[2];
  const length = Math.hypot(dx, dy, dz);
  return { origin, direction: [dx / length, dy / length, dz / length] };
}

/**
 * Aim the reference chief through the physical stop without changing the source for other wavelengths.
 * @param state - current sequential refractive geometry
 * @param fieldAngleDeg - field angle in degrees
 * @param pupilSemiDiameterMm - pupil-radius seed for bracketing the chief
 * @param conjugate - finite source, or undefined for infinity
 * @param spectral - reference wavelength and optional surface-index resolver
 * @returns shared launch geometry, or null when aiming fails
 */
export function prepareSourceFieldLaunch(
  state: PreparedOpticalState,
  fieldAngleDeg: number,
  pupilSemiDiameterMm: number,
  conjugate?: FiniteConjugate,
  spectral: Pick<TraceOptions, "wavelengthNm" | "indexAtSurface"> = {},
): SourceFieldLaunch | null {
  const L = state.lens.runtime;
  const chief = solveChiefRay2(fieldAngleDeg, state.focusT, state.zoomT, L, undefined, state.aberrationT);
  const objectPoint = conjugate ? sourceObjectPoint(state, conjugate, fieldAngleDeg) : undefined;
  if (objectPoint === null || (!objectPoint && chief.status !== "converged")) return null;
  const norm = Math.hypot(1, chief.uField);
  const direction: Vec3 = [0, chief.uField / norm, 1 / norm];
  const firstZ = Math.min(0, state.surfaces[0].profile.sag(state.surfaces[0].sd));
  const leadZ = Math.max(
    firstZ - Math.max(10, L.rayLead ?? 0),
    objectPoint ? (objectPoint[2] + firstZ) / 2 : -Infinity,
  );
  const seedY = chief.status === "converged" ? chief.yLaunch + leadZ * chief.uField : 0;
  const launch: SourceFieldLaunch = { fieldAngleDeg, direction, objectPoint, leadZ, centerY: seedY };
  if (!objectPoint) return launch;
  const aimOptions: TraceOptions = {
    stopAt: state.lens.stop.surfaceIndex + 1,
    checkSemiDiameter: false,
    directionNormalized: true,
    ...spectral,
  };
  const aim = solveScalarRoot(
    (y) => {
      const trace = traceEngineRay2(state, sourceLaunchRay(launch, 0, y - seedY), aimOptions);
      return trace.status === "ok" ? trace.terminalPoint[1] : null;
    },
    {
      initialGuess: seedY,
      initialHalfWidth: Math.max(1, pupilSemiDiameterMm),
      residualTolerance: 1e-8,
      scanSamples: 16,
    },
  );
  if (aim.status !== "converged" || aim.root === null) return null;
  return { ...launch, centerY: aim.root };
}
