/**
 * Runtime ray-result adapters — convert engine trace results to legacy diagram-friendly shapes.
 *
 * Preserves y/u and x/y/ux/uy result contracts while exact tracing records richer hit diagnostics internally.
 */

import type { RayTraceResult } from "../../types/optics.js";
import type { Vec3 } from "../types.js";
import type { EngineTraceResult } from "./types.js";

export interface RuntimeSkewRayTraceResult {
  x: number;
  y: number;
  ux: number;
  uy: number;
  clipped: boolean;
}

export function engineTraceToRuntimeRayResult(
  result: EngineTraceResult,
  leadPoint: [number, number],
  ghost: boolean,
): RayTraceResult {
  const pts: number[][] = [leadPoint];
  const ghostPts: number[][] = [];
  appendTracePoints(result, pts, ghostPts, ghost);
  appendImagePlanePoint(result, pts);
  return {
    pts,
    ghostPts,
    y: result.y,
    u: result.uy,
    clipped: result.status !== "ok",
    reachedImagePlane: result.reachedImagePlane,
    diagnostics: result.diagnostics,
  };
}

export function engineTraceToRuntimeSkewResult(result: EngineTraceResult): RuntimeSkewRayTraceResult {
  return {
    x: result.x,
    y: result.y,
    ux: result.ux,
    uy: result.uy,
    clipped: result.status !== "ok",
  };
}

export function vectorLeadPoint(
  input: { origin: Vec3; direction: Vec3 },
  result: EngineTraceResult,
  leadDistance: number,
): [number, number] {
  const reference = result.hits[0]?.point ?? input.origin;
  const lead = Math.max(0, leadDistance);
  const z = reference[2] - input.direction[2] * lead;
  const y = reference[1] - input.direction[1] * lead;
  return Number.isFinite(z) && Number.isFinite(y) ? [z, y] : [input.origin[2], input.origin[1]];
}

function appendTracePoints(result: EngineTraceResult, pts: number[][], ghostPts: number[][], ghost: boolean): void {
  for (const hit of result.hits) {
    const point = [hit.point[2], hit.point[1]];
    if (!Number.isFinite(point[0]) || !Number.isFinite(point[1])) continue;
    if (hit.clipped) {
      if (ghost) ghostPts.push(point);
    } else {
      pts.push(point);
    }
  }
}

function appendImagePlanePoint(result: EngineTraceResult, pts: number[][]): void {
  if (!result.reachedImagePlane || result.status !== "ok") return;
  const point = [result.terminalPoint[2], result.terminalPoint[1]];
  if (!Number.isFinite(point[0]) || !Number.isFinite(point[1])) return;
  const last = pts[pts.length - 1];
  if (last && Math.hypot(last[0] - point[0], last[1] - point[1]) < 1e-9) return;
  pts.push(point);
}
