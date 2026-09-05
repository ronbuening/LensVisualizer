/** Real marginal-ray numerical aperture for centered sequential refractive systems. */
import type { PreparedOpticalState, Ray3 } from "../types.js";
import { conservativeAxialBounds } from "../prescription/geometryBounds.js";
import { traceSequential } from "./sequentialTrace.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";
import { FOCUS_INFINITY_THRESHOLD } from "../constants.js";
import { solveBracketedRoot } from "../math/bracketedRoot.js";

export interface RealWorkingAperture {
  status: "ok" | "unsupported" | "degenerate" | "failed" | "clipped";
  fNumber: number | null;
  numericalAperture: number | null;
  /** Axial source distance measured from the first vertex, in mm. */
  objectDistanceMm: number;
}

/** Infer the finite axial conjugate from current geometry, independently of marketing focus labels.
 * The baseline focus position retains the prescription's infinity source even when its sensor is
 * displaced slightly from Gaussian focus by the author's aberration balancing.
 */
export function apertureObjectDistance(state: PreparedOpticalState): number {
  if (state.focusT < FOCUS_INFINITY_THRESHOLD) return Infinity;
  const a = traceParaxialSurfaces2(state.surfaces, 1, 0, { skipLastTransfer: true });
  const b = traceParaxialSurfaces2(state.surfaces, 0, 1, { skipLastTransfer: true });
  const gap = state.imgZ - state.z[state.z.length - 1];
  const imageA = a.y + gap * a.u;
  const imageB = b.y + gap * b.u;
  return Math.abs(imageA) < 1e-12 ? Infinity : -imageB / imageA;
}

/**
 * Aim a ray from the axial source at the stop rim, then use its exact outgoing cone:
 * Nw = 1/(2 n' sin(theta')). Uses prescription reference indices, not a coating/exposure model.
 * Other apertures are checked with no drawing margin. A clipped rim is explicitly unavailable;
 * it is never silently replaced by a smaller ray or a paraxial estimate.
 */
export function realWorkingApertureForState(
  state: PreparedOpticalState,
  stopSemiDiameterMm: number,
  objectDistanceMm = apertureObjectDistance(state),
): RealWorkingAperture {
  const empty = (status: RealWorkingAperture["status"]): RealWorkingAperture => ({
    status,
    fNumber: null,
    numericalAperture: null,
    objectDistanceMm,
  });
  if (
    state.lens.flags.isFoldedOptics ||
    state.surfaces.length === 0 ||
    state.surfaces.some(
      (s) =>
        s.interaction.type !== "refract" ||
        s.interaction.incidentSide !== "both" ||
        s.interaction.normal ||
        s.diffractive ||
        (s.innerSd ?? 0) > 0,
    ) ||
    state.imagePlane.normal[0] !== 0 ||
    state.imagePlane.normal[1] !== 0 ||
    state.imagePlane.normal[2] !== 1
  )
    return empty("unsupported");
  if (!(objectDistanceMm > 0) || !Number.isFinite(stopSemiDiameterMm) || stopSemiDiameterMm <= 0)
    return empty("degenerate");
  const bounds = conservativeAxialBounds(state);
  if (!bounds) return empty("unsupported");
  const launchZ = bounds.frontZ - 1;
  const sourceGap = objectDistanceMm + launchZ - state.z[0];
  if (sourceGap <= 0) return empty("unsupported");
  const stopIndex = state.lens.stop.surfaceIndex;
  const rayAt = (height: number): Ray3 => ({
    origin: [height, 0, launchZ],
    direction: objectDistanceMm === Infinity ? [0, 0, 1] : [height, 0, sourceGap],
  });
  const evaluate = (height: number) => {
    const trace = traceSequential(state, rayAt(height), { stopAt: stopIndex + 1 });
    const hit = trace.hits[stopIndex];
    return {
      t: height,
      derivative: NaN,
      value: trace.status === "ok" && hit ? hit.point[0] - stopSemiDiameterMm : NaN,
    };
  };
  // Grow from the axis to find the first bracket. Never bridge a failed trace.
  let hi = Math.max(1e-6, stopSemiDiameterMm / 8);
  let lo = 0;
  let value = evaluate(hi);
  for (let i = 0; i < 32 && Number.isFinite(value.value) && value.value < 0; i++) {
    lo = hi;
    hi *= 1.5;
    value = evaluate(hi);
  }
  // A coarse upper trial can leave the surface domain before the stop rim.
  // Approach that boundary from the last valid ray instead of discarding a reachable rim.
  if (!Number.isFinite(value.value)) {
    let failedHi = hi;
    for (let i = 0; i < 32; i++) {
      hi = (lo + failedHi) / 2;
      value = evaluate(hi);
      if (!Number.isFinite(value.value)) failedHi = hi;
      else if (value.value < 0) lo = hi;
      else break;
    }
  }
  if (!Number.isFinite(value.value) || value.value < 0) return empty("failed");
  const solved = solveBracketedRoot(evaluate, {
    minT: lo,
    maxT: hi,
    seed: hi / 2,
    tolerance: Math.max(1e-10, stopSemiDiameterMm * 1e-11),
    maxIterations: 48,
    bracketSamples: 2,
    validValue: (v) => Number.isFinite(v.value),
    validNewton: (v) => Number.isFinite(v.value),
  });
  if (solved.kind !== "success") return empty("failed");
  const strictState = { ...state, lens: { ...state.lens, display: { ...state.lens.display, clipMargin: 1 } } };
  const trace = traceSequential(strictState, rayAt(solved.value.t), {
    checkSemiDiameter: true,
    stopSemiDiameter: stopSemiDiameterMm,
    stopOnClip: true,
  });
  if (trace.failureReason) return empty("failed");
  if (trace.status === "clipped") return empty("clipped");
  if (
    trace.terminalSurfaceIndex !== state.surfaces.length - 1 ||
    trace.terminalDirection[2] <= 0 ||
    trace.terminalPoint[2] >= state.imgZ
  )
    return empty("unsupported");
  const numericalAperture = trace.finalMedium * Math.hypot(trace.terminalDirection[0], trace.terminalDirection[1]);
  if (!Number.isFinite(numericalAperture) || numericalAperture <= 1e-12) return empty("degenerate");
  return { status: "ok", fNumber: 1 / (2 * numericalAperture), numericalAperture, objectDistanceMm };
}
