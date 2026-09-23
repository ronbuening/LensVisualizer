/** Shared pupil sampling for MTF. Exact hits stay in physical millimeters. */
import type { MtfOptions, MtfSupport } from "../../types/mtf.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import type { EngineTraceResult } from "../trace/types.js";
import { computeAnalysisFieldGeometryAtState2, solveChiefRay2 } from "../field/chiefRay.js";
import { halfFieldAtZoom } from "../layout.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import { bulkTransmissionForTrace } from "../trace/bulkAbsorption.js";
import type { MtfSpot } from "./mtfMath.js";
import type { ChromaticChannel } from "../../types/optics.js";
import { mtfFiniteObjectPoint } from "./mtfConjugates.js";
import { evaluateAperture } from "../trace/aperture.js";

export interface MtfPupilRay extends MtfSpot {
  column: number;
  row: number;
  trace: Pick<
    EngineTraceResult,
    "input" | "terminalPoint" | "terminalDirection" | "finalMedium" | "opticalPathLengthMm"
  >;
}
export interface MtfBundle {
  rays: MtfPupilRay[];
  blocked: number;
  failed: number;
  chief: MtfSpot;
  chiefTrace: EngineTraceResult;
  direction: Vec3;
  gridSize: number;
  launchStepMm: number;
  objectPoint?: Vec3;
}

/** Finite fields retain their source convention; infinity fields respect known format bounds. */
export function mtfHalfField(state: PreparedOpticalState): number {
  const source = state.lens.source;
  return state.focusT === 0 && (source.imageFormat || source.imageCircleMm)
    ? computeAnalysisFieldGeometryAtState2(0, state.zoomT, state.lens.runtime, state.aberrationT).halfFieldDeg
    : halfFieldAtZoom(state.zoomT, state.lens.runtime);
}

export function mtfImagePoint(state: PreparedOpticalState, trace: EngineTraceResult): MtfSpot | null {
  if (trace.status !== "ok" || Math.abs(trace.terminalDirection[2]) < 1e-12) return null;
  const distance = (state.imgZ - trace.terminalPoint[2]) / trace.terminalDirection[2];
  if (!(distance > 0)) return null;
  return {
    x: trace.terminalPoint[0] + distance * trace.terminalDirection[0],
    y: trace.terminalPoint[1] + distance * trace.terminalDirection[1],
    weight: bulkTransmissionForTrace(state.lens.runtime, trace.hits),
  };
}

/** Prove a miss against the finite spherical/flat cap, independently of the intersection solver. */
function missesApertureBounds(trace: EngineTraceResult, state: PreparedOpticalState, stopRadius?: number): boolean {
  const surface = state.surfaces[trace.terminalSurfaceIndex + 1];
  if (!surface || !["spherical", "flat"].includes(surface.profile.kind)) return false;
  const radius = evaluateAperture(state, surface, 0, stopRadius).semiDiameter;
  const limit = surface.profile.finiteRadiusLimit();
  if (radius === null || !(radius > 0) || (limit !== null && radius > limit)) return false;
  const sag = surface.profile.sag(radius);
  const origin = trace.terminalPoint,
    direction = trace.terminalDirection;
  if (!Number.isFinite(sag) || direction[2] <= 1e-12) return false;
  // A spherical cap is wholly inside this axial slab and radial cylinder. If the ray
  // misses their intersection, a noBracket result is physical clipping, not lost data.
  const start = Math.max(0, (surface.z + Math.min(0, sag) - origin[2]) / direction[2]);
  const end = (surface.z + Math.max(0, sag) - origin[2]) / direction[2];
  if (end < start) return false;
  const radialSpeed2 = direction[0] ** 2 + direction[1] ** 2;
  const closest = radialSpeed2 > 0 ? -(origin[0] * direction[0] + origin[1] * direction[1]) / radialSpeed2 : start;
  const distance = Math.max(start, Math.min(end, closest));
  return Math.hypot(origin[0] + distance * direction[0], origin[1] + distance * direction[1]) > radius + 1e-8;
}

/** Keep unknown numerical failures distinct from geometrically proven aperture misses. */
export function mtfTraceClassification(
  trace: EngineTraceResult,
  state?: PreparedOpticalState,
  stopRadius?: number,
): "valid" | "blocked" | "failed" {
  if (trace.status === "ok") return "valid";
  if (trace.failureReason === "noBracket" && state && missesApertureBounds(trace, state, stopRadius)) return "blocked";
  if (trace.failureReason && trace.failureReason !== "totalInternalReflection") return "failed";
  return "blocked";
}

export function traceMtfPupil(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  fieldFraction: number,
  gridSize: number,
  spectralLine?: { channel: ChromaticChannel; wavelengthNm: number },
  halfFieldDeg = mtfHalfField(state),
): MtfBundle | null {
  const L = state.lens.runtime;
  const angle = halfFieldDeg * fieldFraction;
  const chief = solveChiefRay2(angle, state.focusT, state.zoomT, L, undefined, state.aberrationT);
  const objectPoint = support.conjugate ? mtfFiniteObjectPoint(state, support.conjugate, angle) : undefined;
  if (objectPoint === null || (!objectPoint && chief.status !== "converged")) return null;
  const norm = Math.hypot(1, chief.uField);
  const direction: Vec3 = [0, chief.uField / norm, 1 / norm];
  const firstZ = Math.min(0, state.surfaces[0].profile.sag(state.surfaces[0].sd));
  const leadZ = Math.max(
    firstZ - Math.max(10, L.rayLead ?? 0),
    objectPoint ? (objectPoint[2] + firstZ) / 2 : -Infinity,
  );
  let centerY = chief.status === "converged" ? chief.yLaunch + leadZ * chief.uField : 0;
  const rayAt = (x: number, y: number): Ray3 => {
    const origin: Vec3 = [x, y, leadZ];
    if (!objectPoint) return { origin, direction };
    const delta = origin.map((v, i) => v - objectPoint[i]);
    const length = Math.hypot(...delta);
    return { origin, direction: [delta[0] / length, delta[1] / length, delta[2] / length] };
  };
  if (objectPoint) {
    // Aim one finite-source chief through the physical stop. The same source and grid serve every wavelength.
    const atStop = (y: number) => {
      const trace = traceEngineRay2(state, rayAt(0, y), {
        stopAt: state.lens.stop.surfaceIndex + 1,
        checkSemiDiameter: false,
        directionNormalized: true,
        indexAtSurface:
          support.useResolvedReference || options.spectrum === "cdf"
            ? (i) => state.lens.dispersion[i].indexAt("G")
            : undefined,
      });
      return trace.status === "ok" ? trace.terminalPoint[1] : NaN;
    };
    let aimed = false;
    for (let i = 0; i < 30; i++) {
      const height = atStop(centerY);
      if (Math.abs(height) < 1e-8) {
        aimed = true;
        break;
      }
      const derivative = (atStop(centerY + 1e-4) - height) / 1e-4;
      if (!Number.isFinite(derivative) || Math.abs(derivative) < 1e-10) break;
      const step = height / derivative,
        limit = Math.max(1, options.pupilSemiDiameterMm);
      centerY -= Math.max(-limit, Math.min(limit, step));
    }
    if (!aimed) return null;
  }
  const traceAt = (x: number, y: number) => {
    const ray = rayAt(x, centerY + y);
    return traceEngineRay2(state, ray, {
      checkSemiDiameter: true,
      stopSemiDiameter: options.stopSemiDiameterMm,
      stopOnClip: true,
      directionNormalized: true,
      wavelengthNm: spectralLine?.wavelengthNm ?? support.referenceWavelengthNm,
      recordOpticalPath: options.method === "diffraction",
      indexAtSurface:
        spectralLine || support.useResolvedReference
          ? (i) => state.lens.dispersion[i].indexAt(spectralLine?.channel ?? "G")
          : undefined,
    });
  };
  const chiefTrace = traceAt(0, 0);
  const chiefPoint = mtfImagePoint(state, chiefTrace);
  if (!chiefPoint) return null;
  const bundle: MtfBundle = {
    rays: [],
    blocked: 0,
    failed: 0,
    chief: chiefPoint,
    chiefTrace,
    direction: chiefTrace.input.direction,
    gridSize,
    launchStepMm: (2 * options.pupilSemiDiameterMm) / gridSize,
    objectPoint,
  };
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
      const x = (2 * (column + 0.5)) / gridSize - 1;
      const y = (2 * (row + 0.5)) / gridSize - 1;
      if (x * x + y * y > 1) continue;
      const trace = traceAt(x * options.pupilSemiDiameterMm, y * options.pupilSemiDiameterMm);
      const classification = mtfTraceClassification(trace, state, options.stopSemiDiameterMm);
      if (classification === "blocked") {
        bundle.blocked++;
        continue;
      }
      const point = classification === "valid" ? mtfImagePoint(state, trace) : null;
      if (!point) {
        bundle.failed++;
        continue;
      }
      if (objectPoint) {
        const distance = (origin: Vec3) => Math.hypot(...origin.map((v, i) => v - objectPoint[i]));
        // Solid angle subtended by equal cells of the launch plane: cos(theta) / distance².
        point.weight *= (distance(chiefTrace.input.origin) / distance(trace.input.origin)) ** 3;
      }
      bundle.rays.push({
        ...point,
        column,
        row,
        trace: {
          input: trace.input,
          terminalPoint: trace.terminalPoint,
          terminalDirection: trace.terminalDirection,
          finalMedium: trace.finalMedium,
          opticalPathLengthMm: trace.opticalPathLengthMm,
        },
      });
    }
  }
  return bundle;
}
