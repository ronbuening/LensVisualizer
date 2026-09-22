/** Shared pupil sampling for MTF. Exact hits stay in physical millimeters. */
import type { MtfOptions, MtfSupport } from "../../types/mtf.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import type { EngineTraceResult } from "../trace/types.js";
import { solveChiefRay2 } from "../field/chiefRay.js";
import { halfFieldAtZoom } from "../layout.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import { bulkTransmissionForTrace } from "../trace/bulkAbsorption.js";
import type { MtfSpot } from "./mtfMath.js";
import type { ChromaticChannel } from "../../types/optics.js";

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

/** Do not silently mask numerical intersection failures as an opaque pupil. */
export function mtfTraceClassification(trace: EngineTraceResult): "valid" | "blocked" | "failed" {
  if (trace.status === "ok") return "valid";
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
): MtfBundle | null {
  const L = state.lens.runtime;
  const angle = halfFieldAtZoom(state.zoomT, L) * fieldFraction;
  const chief = solveChiefRay2(angle, state.focusT, state.zoomT, L, undefined, state.aberrationT);
  if (chief.status !== "converged") return null;
  const norm = Math.hypot(1, chief.uField);
  const direction: Vec3 = [0, chief.uField / norm, 1 / norm];
  const leadZ = Math.min(0, state.surfaces[0].profile.sag(state.surfaces[0].sd)) - Math.max(10, L.rayLead ?? 0);
  const traceAt = (x: number, y: number) => {
    const ray: Ray3 = { origin: [x, chief.yLaunch + y + leadZ * chief.uField, leadZ], direction };
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
    direction,
    gridSize,
    launchStepMm: (2 * options.pupilSemiDiameterMm) / gridSize,
  };
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
      const x = (2 * (column + 0.5)) / gridSize - 1;
      const y = (2 * (row + 0.5)) / gridSize - 1;
      if (x * x + y * y > 1) continue;
      const trace = traceAt(x * options.pupilSemiDiameterMm, y * options.pupilSemiDiameterMm);
      const classification = mtfTraceClassification(trace);
      if (classification === "blocked") {
        bundle.blocked++;
        continue;
      }
      const point = classification === "valid" ? mtfImagePoint(state, trace) : null;
      if (!point) {
        bundle.failed++;
        continue;
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
