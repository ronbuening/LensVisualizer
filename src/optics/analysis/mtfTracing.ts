/** Shared pupil sampling for MTF. Exact hits stay in physical millimeters. */
import type { MtfOptions, MtfSpectralLine, MtfSupport } from "../../types/mtf.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import type { EngineTraceResult, TraceOptions } from "../trace/types.js";
import { computeAnalysisFieldGeometryAtState2, solveChiefRay2 } from "../field/chiefRay.js";
import { halfFieldAtZoom } from "../layout.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import { bulkTransmissionForTrace } from "../trace/bulkAbsorption.js";
import { anchoredIndexTable } from "../chromatic/indexResolver.js";
import type { MtfSpot } from "./mtfMath.js";
import { mtfFiniteObjectPoint } from "./mtfConjugates.js";
import { mtfTraceClassification } from "./mtfRayClassification.js";

export { mtfTraceClassification } from "./mtfRayClassification.js";

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
  /** Launch flux of rays the tracer could not resolve, in the same units as ray weights. */
  failedWeight: number;
  chief: MtfSpot;
  chiefTrace: EngineTraceResult;
  /** True when the reference chief ray is itself stopped by an aperture. */
  chiefClipped: boolean;
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

/**
 * Intersect a trace's final segment with the axial image plane.
 *
 * A zero-length transfer is a landing: some prescriptions put the last plate surface on the
 * image plane itself.
 *
 * @param state - prepared optical state
 * @param trace - exact trace ending after the last surface
 * @param imagePlaneZ - axial image-plane position in mm
 * @returns landing point with bulk-transmission weight, or null when the plane is not ahead
 */
export function mtfImagePoint(
  state: PreparedOpticalState,
  trace: EngineTraceResult,
  imagePlaneZ = state.imgZ,
): MtfSpot | null {
  if (trace.status !== "ok" || Math.abs(trace.terminalDirection[2]) < 1e-12) return null;
  const distance = (imagePlaneZ - trace.terminalPoint[2]) / trace.terminalDirection[2];
  if (!(distance >= -1e-9)) return null;
  const transfer = Math.max(0, distance);
  return {
    x: trace.terminalPoint[0] + transfer * trace.terminalDirection[0],
    y: trace.terminalPoint[1] + transfer * trace.terminalDirection[1],
    weight: bulkTransmissionForTrace(state.lens.runtime, trace.hits),
  };
}

const indexTablesByState = new WeakMap<PreparedOpticalState, Map<number, Float64Array>>();

/**
 * Surface-index callback for one MTF wavelength.
 *
 * Reference-wavelength runs keep the authored indices unless mixed d/e references need a
 * physical conversion. Resolved runs use indices anchored to each authored reference, so the
 * design's focus at its reference line is unchanged.
 *
 * @param state - prepared optical state
 * @param support - support record selecting authored or resolved indices
 * @param wavelengthNm - traced wavelength in nanometres
 * @returns trace callback, or undefined for authored reference indices
 */
export function mtfIndexResolver(
  state: PreparedOpticalState,
  support: MtfSupport,
  wavelengthNm: number,
): TraceOptions["indexAtSurface"] {
  if (!support.useResolvedReference) return undefined;
  let tables = indexTablesByState.get(state);
  if (!tables) {
    tables = new Map();
    indexTablesByState.set(state, tables);
  }
  let table = tables.get(wavelengthNm);
  if (!table) {
    table = anchoredIndexTable(state, wavelengthNm);
    tables.set(wavelengthNm, table);
  }
  const resolved = table;
  return (surfaceIndex) => resolved[surfaceIndex];
}

export function traceMtfPupil(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  fieldFraction: number,
  gridSize: number,
  spectralLine: MtfSpectralLine = support.spectralLines[0],
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
  const referenceNm = support.spectralLines[0]?.wavelengthNm ?? support.referenceWavelengthNm;
  if (objectPoint) {
    // Aim one finite-source chief through the physical stop. The same source and grid serve every wavelength.
    const aimOptions: TraceOptions = {
      stopAt: state.lens.stop.surfaceIndex + 1,
      checkSemiDiameter: false,
      directionNormalized: true,
      wavelengthNm: referenceNm,
      indexAtSurface: mtfIndexResolver(state, support, referenceNm),
    };
    const atStop = (y: number) => {
      const trace = traceEngineRay2(state, rayAt(0, y), aimOptions);
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
  const traceOptions: TraceOptions = {
    checkSemiDiameter: true,
    stopSemiDiameter: options.stopSemiDiameterMm,
    stopOnClip: true,
    directionNormalized: true,
    wavelengthNm: spectralLine.wavelengthNm,
    recordOpticalPath: options.method === "diffraction",
    indexAtSurface: mtfIndexResolver(state, support, spectralLine.wavelengthNm),
  };
  const traceAt = (x: number, y: number) => traceEngineRay2(state, rayAt(x, centerY + y), traceOptions);
  // The chief is a geometric reference, not a pupil sample: trace it through every surface even
  // when an aperture clips it, and record the clipping separately.
  const chiefTrace = traceEngineRay2(state, rayAt(0, centerY), {
    ...traceOptions,
    checkSemiDiameter: false,
    stopOnClip: false,
  });
  const chiefPoint = mtfImagePoint(state, chiefTrace);
  if (!chiefPoint) return null;
  const chiefClipped = mtfTraceClassification(traceAt(0, 0), state, options.stopSemiDiameterMm) !== "valid";
  const bundle: MtfBundle = {
    rays: [],
    blocked: 0,
    failed: 0,
    failedWeight: 0,
    chief: chiefPoint,
    chiefTrace,
    chiefClipped,
    direction: chiefTrace.input.direction,
    gridSize,
    launchStepMm: (2 * options.pupilSemiDiameterMm) / gridSize,
    objectPoint,
  };
  const chiefDistance = objectPoint ? Math.hypot(...chiefTrace.input.origin.map((v, i) => v - objectPoint[i])) : 0;
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
      const x = (2 * (column + 0.5)) / gridSize - 1;
      const y = (2 * (row + 0.5)) / gridSize - 1;
      if (x * x + y * y > 1) continue;
      const trace = traceAt(x * options.pupilSemiDiameterMm, y * options.pupilSemiDiameterMm);
      // Solid angle subtended by equal cells of the launch plane: cos(theta) / distance².
      const launchWeight = objectPoint
        ? (chiefDistance / Math.hypot(...trace.input.origin.map((v, i) => v - objectPoint[i]))) ** 3
        : 1;
      const classification = mtfTraceClassification(trace, state, options.stopSemiDiameterMm);
      if (classification === "blocked") {
        bundle.blocked++;
        continue;
      }
      const point = classification === "valid" ? mtfImagePoint(state, trace) : null;
      if (!point) {
        bundle.failed++;
        bundle.failedWeight += launchWeight;
        continue;
      }
      point.weight *= launchWeight;
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
