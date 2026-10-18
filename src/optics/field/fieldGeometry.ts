/**
 * Field geometry — raw half-field, entrance-pupil ratios and conjugate sensitivity.
 *
 * Consumes prepared geometry and shares exact stop tracing with the chief solver.
 */

import { wideOpenStopAtZoom } from "../apertureStop.js";
import { FOCUS_INFINITY_CUTOFF } from "../focusDistance.js";
import type { ParaxialTraceResult } from "../../types/optics.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";
import { obstructionAwareRayFractionsForDensity } from "../raySampling.js";
import { prepareState } from "../state/preparedGeometry.js";
import type { Plane3, PreparedGeometry, Ray3, Vec3 } from "../types.js";
import type { FieldGeometryState2 } from "./launch.js";
import {
  ABSOLUTE_HALF_FIELD_CEILING,
  fisheyeProjectionMaxTraceFieldAtZoom2,
  isFisheyeProjection2,
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchSlopeForField2,
  rectilinearProjectionMaxTraceField2,
} from "./projection.js";

import { prepareEngineTrace } from "../trace/rayAdapters.js";
import { traceToStopViaGeneralized2 } from "../trace/stopTrace.js";
import type { TraceOptions } from "../trace/types.js";

const CONJUGATE_REFERENCE_PUPIL_FRACTION = 0.1;

/** Entrance-pupil geometry for current focus/zoom state. */
export interface EntrancePupilState2 {
  epSD: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

/**
 * Compute current-state field geometry from paraxial and real stop traces.
 *
 * The returned ratios express how marginal and chief rays reach the stop and are
 * used to seed chief-ray solving for the current focus/zoom/aberration state.
 *
 * @param state - prepared geometry for the current controls
 * @returns field half-angle and entrance-pupil ratios for this state
 */
export function computeFieldGeometry(state: PreparedGeometry): FieldGeometryState2 {
  const stopIndex = state.lens.stop.surfaceIndex;
  const delta = 1e-4;

  const paraxMarg = traceParaxialSurfaces2(state.surfaces, 1, 0, { stopAt: stopIndex });
  const paraxChief = traceParaxialSurfaces2(state.surfaces, 0, 1, { stopAt: stopIndex });
  const realMarg = traceStateSurfacesReal2(state, delta, 0, { stopAt: stopIndex });
  const realChief = traceStateSurfacesReal2(state, 0, delta, { stopAt: stopIndex });

  const yRatio = Number.isFinite(realMarg.y) ? realMarg.y / delta : paraxMarg.y;
  const b = Number.isFinite(realChief.y) ? realChief.y / delta : paraxChief.y;
  const epRatio = Math.abs(yRatio) > 1e-9 ? b / yRatio : 0;

  const hA = traceParaxialSurfaces2(state.surfaces, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const hB = traceParaxialSurfaces2(state.surfaces, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
  const r = Math.abs(hA[stopIndex]) > 1e-15 ? hB[stopIndex] / hA[stopIndex] : 0;
  let minU = Infinity;
  for (let i = 0; i < state.surfaces.length; i++) {
    if (i === stopIndex || !state.surfaces[i].clips) continue;
    const coeff = Math.abs(hB[i] - r * hA[i]);
    if (coeff > 1e-8) {
      const uMax = state.surfaces[i].sd / coeff;
      if (uMax < minU) minU = uMax;
    }
  }
  let halfFieldDeg = (Math.atan(minU) * 180) / Math.PI;

  if (isFisheyeProjection2(state.lens.projection.config)) {
    halfFieldDeg = Math.min(
      fisheyeProjectionMaxTraceFieldAtZoom2(state.lens.projection.config, state.zoomT) ?? halfFieldDeg,
      ABSOLUTE_HALF_FIELD_CEILING,
    );
    return { halfFieldDeg, yRatio, b, epRatio };
  }

  /* The paraxial aperture estimate can overstate the real field. Bisect it down
   * until an exact chief ray reaches the image side without clipping. */
  const traceChief = prepareStateSurfacesReal(state, { checkSemiDiameter: true });
  const testChief = (deg: number): boolean => {
    const launch = projectionLaunchSlopeForField2({ projection: state.lens.projection.config }, deg);
    if (launch.status === "out-of-domain") return false;
    const yChiefIn = -epRatio * launch.uField;
    const trace = traceChief(yChiefIn, launch.uField);
    return Number.isFinite(trace.y) && !trace.clipped;
  };

  if (Number.isFinite(halfFieldDeg) && halfFieldDeg > 0 && !testChief(halfFieldDeg)) {
    let lo = 0;
    let hi = halfFieldDeg;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      if (testChief(mid)) lo = mid;
      else hi = mid;
    }
    halfFieldDeg = lo;
  }

  halfFieldDeg = rectilinearProjectionMaxTraceField2(state.lens.projection.config) ?? halfFieldDeg;
  halfFieldDeg = Math.min(halfFieldDeg, MAX_FIELD_LAUNCH_DEG - 1e-3);
  return { halfFieldDeg, yRatio, b, epRatio };
}

/**
 * Trace a paraxial reference ray through the current prepared state.
 *
 * @param state - prepared geometry for the current controls
 * @param y0 - launch height in mm
 * @param u0 - paraxial launch slope
 * @returns paraxial image-side height and slope before final transfer
 */
export function traceParaxialRay(
  state: PreparedGeometry,
  { y0, u0 }: { y0: number; u0: number },
): Pick<ParaxialTraceResult, "y" | "u"> {
  const result = traceParaxialSurfaces2(state.surfaces, y0, u0, { skipLastTransfer: true });
  return { y: result.y, u: result.u };
}

/**
 * Compute entrance-pupil diameter and ratios for the current state.
 *
 * @param state - prepared geometry for the current controls
 * @param stopSD - current physical stop semi-diameter in mm
 * @param geometry - optional precomputed field geometry
 * @returns entrance-pupil state used by UI readouts and analysis
 */
export function entrancePupil(
  state: PreparedGeometry,
  { stopSD, geometry }: { stopSD: number; geometry?: FieldGeometryState2 },
): EntrancePupilState2 {
  const geom = geometry ?? computeFieldGeometry(state);
  const epSD = Math.abs(geom.yRatio) > 1e-9 ? Math.abs(stopSD / geom.yRatio) : 0;
  return { epSD, yRatio: geom.yRatio, b: geom.b, epRatio: geom.epRatio };
}

/**
 * Estimate focus-dependent conjugate correction from exact real-ray sensitivity.
 *
 * @param state - prepared geometry for the current controls
 * @returns relative conjugate correction, zero at infinity focus
 */
export function conjugateK(state: PreparedGeometry): number {
  if (state.focusT < FOCUS_INFINITY_CUTOFF) return 0;
  const du = 1e-5;
  const currentEP = entrancePupil(state, {
    stopSD: wideOpenStopAtZoom(state.zoomT, state.lens.constants),
    geometry: undefined,
  }).epSD;
  const infinityEP = entrancePupil(prepareState(state.lens, 0, state.zoomT, 0), {
    stopSD: wideOpenStopAtZoom(state.zoomT, state.lens.constants),
    geometry: undefined,
  }).epSD;
  const yRefCurrent = currentEP * conjugateReferencePupilFraction(state, { entrancePupilSemiDiameter: currentEP });
  const yRefInfinity = infinityEP * conjugateReferencePupilFraction(state, { entrancePupilSemiDiameter: infinityEP });
  const kt = realK(state, { yRef: yRefCurrent, du });
  const k0 = realK(prepareState(state.lens, 0, state.zoomT, 0), { yRef: yRefInfinity, du });
  if (Number.isNaN(kt) || Number.isNaN(k0)) return 0;
  return kt - k0;
}

function conjugateReferencePupilFraction(
  state: PreparedGeometry,
  { entrancePupilSemiDiameter }: { entrancePupilSemiDiameter: number },
): number {
  if (!state.lens.flags.isFoldedOptics || entrancePupilSemiDiameter <= 0) return CONJUGATE_REFERENCE_PUPIL_FRACTION;

  const defaultReference = CONJUGATE_REFERENCE_PUPIL_FRACTION;
  const blockedFraction = foldedCentralObstructionFraction(state, { entrancePupilSemiDiameter });
  if (blockedFraction <= defaultReference) return defaultReference;

  const usableFractions = obstructionAwareRayFractionsForDensity(
    {
      isFoldedOptics: state.lens.flags.isFoldedOptics,
      S: state.lens.constructionSurfaces.map((surface, i) => ({ ...surface, sd: state.lens.surfaces[i].sd })),
      stopIdx: state.lens.stop.surfaceIndex,
    },
    state.lens.authoredRayFans.rayFractions,
    "diagnostic",
    entrancePupilSemiDiameter,
  )
    .map((fraction) => Math.abs(fraction))
    .filter((fraction) => fraction >= blockedFraction - 1e-9)
    .sort((a, b) => a - b);

  return usableFractions[0] ?? Math.min(1, blockedFraction + 0.1 * (1 - blockedFraction));
}

function foldedCentralObstructionFraction(
  state: PreparedGeometry,
  { entrancePupilSemiDiameter }: { entrancePupilSemiDiameter: number },
): number {
  if (entrancePupilSemiDiameter <= 0) return 0;
  const blockedRadius = state.lens.constructionSurfaces.reduce((max, surface, i) => {
    const centralBlocker =
      surface.interaction?.type === "block" ||
      (surface.interaction?.type === "reflect" && surface.interaction.inactiveSide === "block");
    if (centralBlocker && (surface.innerSd ?? 0) <= 0) return Math.max(max, state.lens.surfaces[i].sd);
    if (surface.interaction?.type === "reflect" && (surface.innerSd ?? 0) > 0) return Math.max(max, surface.innerSd!);
    return max;
  }, 0);
  return blockedRadius / entrancePupilSemiDiameter;
}

function traceToImageReal(state: PreparedGeometry, { y0, u0 }: { y0: number; u0: number }): number {
  const trace = traceStateSurfacesReal2(state, y0, u0, {});
  if (!Number.isFinite(trace.y) || trace.clipped) return NaN;
  if (state.lens.flags.isFoldedOptics && trace.reachedImagePlane) {
    return imagePlaneCoordinate2(trace.terminalPoint, state.imagePlane);
  }
  return trace.y + (state.surfaces[state.surfaces.length - 1]?.d ?? 0) * trace.u;
}

function imagePlaneCoordinate2(point: Vec3, imagePlane: Plane3): number {
  const tangentX: Vec3 = [1, 0, 0];
  const tangentY: Vec3 = [
    imagePlane.normal[1] * tangentX[2] - imagePlane.normal[2] * tangentX[1],
    imagePlane.normal[2] * tangentX[0] - imagePlane.normal[0] * tangentX[2],
    imagePlane.normal[0] * tangentX[1] - imagePlane.normal[1] * tangentX[0],
  ];
  const tangentLength = Math.hypot(tangentY[0], tangentY[1], tangentY[2]);
  if (tangentLength <= 1e-12) return point[1] - imagePlane.point[1];
  return (
    ((point[0] - imagePlane.point[0]) * tangentY[0] +
      (point[1] - imagePlane.point[1]) * tangentY[1] +
      (point[2] - imagePlane.point[2]) * tangentY[2]) /
    tangentLength
  );
}

function realK(state: PreparedGeometry, { yRef, du }: { yRef: number; du: number }): number {
  const y0 = traceToImageReal(state, { y0: yRef, u0: 0 });
  const y1 = traceToImageReal(state, { y0: yRef, u0: du });
  if (Number.isNaN(y0) || Number.isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return -y0 / dydu / yRef;
}

interface RealSurfaceTraceResult2 {
  y: number;
  u: number;
  n: number;
  clipped: boolean;
  heights: readonly number[] | null;
  reachedImagePlane: boolean;
  terminalPoint: Vec3;
}

/**
 * Trace a reference slope ray through the prepared surfaces.
 * @param state - prepared geometry
 * @param y0 - launch height in mm at the first vertex
 * @param u0 - meridional slope
 * @param traceOptions - stop, aperture and spectral controls
 * @returns image-side or stop coordinates, including failure and clipping
 */
function traceStateSurfacesReal2(
  state: PreparedGeometry,
  y0: number,
  u0: number,
  traceOptions: TraceOptions = {},
): RealSurfaceTraceResult2 {
  return prepareStateSurfacesReal(state, traceOptions)(y0, u0);
}

/**
 * Bind exact tracing once for repeated field probes, including folded stop searches.
 * @param state - prepared geometry
 * @param traceOptions - stop, aperture and spectral controls
 * @returns a slope-ray tracer with the shared options
 */
export function prepareStateSurfacesReal(
  state: PreparedGeometry,
  traceOptions: TraceOptions,
): (y0: number, u0: number) => RealSurfaceTraceResult2 {
  const lead = inferLeadDistance2(state);
  if (state.lens.flags.isFoldedOptics && traceOptions.stopAt !== undefined) {
    const stopIndex = traceOptions.stopAt;
    const stopOptions = {
      checkSemiDiameter: traceOptions.checkSemiDiameter,
      indexAtSurface: traceOptions.indexAtSurface,
      wavelengthNm: traceOptions.wavelengthNm,
    };
    return (y0, u0) => {
      const ray = slopeRayForState(state, y0, u0, lead);
      const stop = traceToStopViaGeneralized2(state, ray, stopIndex, stopOptions);
      return {
        y: stop.found ? stop.y : NaN,
        u: stop.found ? stop.uy : NaN,
        n: stop.n,
        clipped: !stop.found,
        heights: null,
        reachedImagePlane: false,
        terminalPoint: stop.point ?? [0, stop.y, 0],
      };
    };
  }

  const trace = prepareEngineTrace(state, { ...traceOptions, capture: "terminal" });
  return (y0, u0) => {
    const result = trace(slopeRayForState(state, y0, u0, lead));
    const failed = result.failureReason !== null;
    return {
      y: failed ? NaN : result.y,
      u: failed ? NaN : result.uy,
      n: result.finalMedium,
      clipped: result.status !== "ok",
      heights: result.heights,
      reachedImagePlane: result.reachedImagePlane,
      terminalPoint: result.terminalPoint,
    };
  };
}

function slopeRayForState(state: PreparedGeometry, y0: number, u0: number, lead = inferLeadDistance2(state)): Ray3 {
  const invMag = 1 / Math.hypot(0, u0, 1);
  return {
    origin: [0, y0 - u0 * lead, (state.z[0] ?? 0) - lead],
    direction: [0, u0 * invMag, invMag],
  };
}

function inferLeadDistance2(state: PreparedGeometry): number {
  const first = state.surfaces[0];
  if (!first) return 0;
  const normal = first.interaction.normal;
  if (normal) {
    const sd = first.sd ?? 0;
    if (Math.abs(normal[2]) > 1e-12) return Math.max(1, Math.abs((sd * normal[1]) / normal[2]) + 1);
    return Math.max(1, 2 * sd + 1);
  }
  const firstSag = Math.abs(first.profile.sag(first.sd ?? 0));
  return Math.max(1, firstSag + 1);
}
