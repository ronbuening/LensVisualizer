/** Real marginal-ray numerical aperture for centered sequential refractive systems. */
import type { PreparedOpticalState, Ray3 } from "../types.js";
import { conservativeAxialBounds } from "../prescription/geometryBounds.js";
import { traceSequential } from "./sequentialTrace.js";
import { conjugateK2 } from "../field/chiefRay.js";
import { solveBracketedRoot } from "../math/bracketedRoot.js";

export interface RealWorkingAperture {
  status: "ok" | "unsupported" | "degenerate" | "failed";
  fNumber: number | null;
  numericalAperture: number | null;
  clippedSurfaceIndices: readonly number[] | null;
  /** Axial source distance measured from the first vertex, in mm. */
  objectDistanceMm: number;
}

/** Share the diagram's infinity-calibrated real-ray sensitivity estimate.
 * K is incoming slope divided by height at the first vertex, so 1/K is the
 * axial source distance from that vertex. Negative (virtual) sources stay signed.
 * This is a focus-tracking estimate, not an absolute Gaussian conjugate or a
 * catalog focus-distance measurement. Explicit source arguments bypass it.
 */
export function apertureObjectDistance(state: PreparedOpticalState): number {
  const k = conjugateK2(state.focusT, state.zoomT, state.lens.runtime, state.aberrationT);
  return k === 0 ? Infinity : 1 / k;
}

/**
 * Aim a ray from the axial source at the stop rim, then use its exact outgoing cone:
 * Nw = 1/(2 n' sin(theta')). Uses prescription reference indices, not a coating/exposure model.
 * Conventional working f-number uses the stop-edge cone independently of other
 * clear apertures. Record physical rim clipping separately, without drawing margins.
 * Intersection/refraction failures never use extrapolated or paraxial substitute rays.
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
    clippedSurfaceIndices: null,
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
  // Only the first encountered surface constrains the input plane. Rear aspheres
  // can have enormous conservative envelopes despite a modest physical sag.
  const bounds = conservativeAxialBounds({ surfaces: state.surfaces.slice(0, 1) });
  if (!bounds) return empty("unsupported");
  // For a nearby source, launch at the source itself. Otherwise advance along
  // the same ray to the first-surface enclosure, avoiding far-source cancellation.
  const lead = Math.min(state.z[0] - bounds.frontZ + 1, objectDistanceMm);
  const launchZ = state.z[0] - lead;
  const inverseDistance = 1 / objectDistanceMm;
  const stopIndex = state.lens.stop.surfaceIndex;
  const rayAt = (height: number): Ray3 => ({
    origin: [height * (1 - lead * inverseDistance), 0, launchZ],
    direction: [height * inverseDistance, 0, 1],
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
    stopOnClip: false,
  });
  if (trace.failureReason) return empty("failed");
  if (
    trace.terminalSurfaceIndex !== state.surfaces.length - 1 ||
    trace.terminalDirection[2] <= 0 ||
    trace.terminalPoint[2] >= state.imgZ
  )
    return empty("unsupported");
  const numericalAperture = trace.finalMedium * Math.hypot(trace.terminalDirection[0], trace.terminalDirection[1]);
  if (!Number.isFinite(numericalAperture) || numericalAperture <= 1e-12) return empty("degenerate");
  return {
    status: "ok",
    fNumber: 1 / (2 * numericalAperture),
    numericalAperture,
    objectDistanceMm,
    clippedSurfaceIndices: Object.freeze(
      trace.hits.filter((hit) => hit.clipReason === "semi-diameter").map((hit) => hit.surfaceIndex),
    ),
  };
}
