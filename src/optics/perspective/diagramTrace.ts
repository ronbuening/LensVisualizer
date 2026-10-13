/**
 * Diagram adapters for fixed-camera perspective-control traces.
 *
 * The exact engine records 3D surface hits. This module projects those physical
 * camera-frame hits into the diagram's `[z, y]` convention and appends the
 * fixed-sensor intersection without exposing engine details to React hooks.
 */

import type { RayTraceResult } from "../../types/optics.js";
import type { Vec3 } from "../types.js";
import type { PerspectiveTraceResult } from "./trace.js";

/** Diagram-ready trace plus the camera-frame return point used by ray summaries. */
export interface PerspectiveDiagramTrace {
  ray: RayTraceResult;
  returnPoint: readonly [number, number];
  sensorPoint: readonly [number, number] | null;
}

export interface PerspectiveDiagramTraceOptions {
  /** Optional camera-frame lead point. Defaults to the exact trace input origin. */
  leadPoint?: readonly [number, number];
  /** Whether physically clipped surface hits should be retained as ghost points. */
  ghost?: boolean;
}

/** Convert a physical perspective trace into the legacy diagram ray shape. */
export function perspectiveTraceToDiagram(
  result: PerspectiveTraceResult,
  { leadPoint, ghost = true }: PerspectiveDiagramTraceOptions = {},
): PerspectiveDiagramTrace {
  const trace = result.cameraTrace;
  const resolvedLead = leadPoint ?? cameraPointToDiagram(trace.input.origin);
  const pts: number[][] = [[resolvedLead[0], resolvedLead[1]]];
  const ghostPts: number[][] = [];

  for (const hit of trace.hits) {
    const point = cameraPointToDiagram(hit.point);
    if (!Number.isFinite(point[0]) || !Number.isFinite(point[1])) continue;
    if (hit.clipped) {
      if (ghost) ghostPts.push([point[0], point[1]]);
    } else {
      pts.push([point[0], point[1]]);
    }
  }

  const sensorPoint = result.sensorIntersection ? cameraPointToDiagram(result.sensorIntersection.point) : null;
  if (sensorPoint && trace.status === "ok") appendDistinctPoint(pts, sensorPoint);

  return {
    ray: {
      pts,
      ghostPts,
      y: result.cameraReturnPoint[1],
      u: trace.uy,
      clipped: trace.status !== "ok",
      transmission: result.transmission,
      reachedImagePlane: result.reachedSensor,
      diagnostics: trace.diagnostics,
    },
    returnPoint: cameraPointToDiagram(result.cameraReturnPoint),
    sensorPoint,
  };
}

/** Convert an engine camera-frame point `[x, y, z]` to diagram `[z, y]`. */
export function cameraPointToDiagram(point: Vec3): readonly [number, number] {
  return [point[2], point[1]];
}

/**
 * Produce the compact lead segment used for bounding-sphere vector launches.
 * This avoids drawing from a potentially distant raw launch origin.
 */
export function perspectiveVectorLeadPoint(result: PerspectiveTraceResult, leadDistanceMm: number): [number, number] {
  const trace = result.cameraTrace;
  const reference = trace.hits[0]?.point ?? trace.input.origin;
  const lead = Math.max(0, leadDistanceMm);
  const z = reference[2] - trace.input.direction[2] * lead;
  const y = reference[1] - trace.input.direction[1] * lead;
  return Number.isFinite(z) && Number.isFinite(y) ? [z, y] : [trace.input.origin[2], trace.input.origin[1]];
}

function appendDistinctPoint(points: number[][], point: readonly [number, number]): void {
  const last = points[points.length - 1];
  if (last && Math.hypot(last[0] - point[0], last[1] - point[1]) < 1e-9) return;
  points.push([point[0], point[1]]);
}
