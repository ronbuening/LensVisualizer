/** Opt-in eikonal accounting from exact 3D encounters; normal diagram traces pay no additional cost. */
import type { ChromaticChannel } from "../../types/optics.js";
import type { OpticalPathResult } from "../../types/imageQuality.js";
import type { PreparedOpticalState } from "../types.js";
import type { EngineTraceResult } from "./types.js";
import { mediumAfterEncounter } from "./encounterMedia.js";
import { sensorPointForTrace } from "./utils.js";

export function opticalPathForTrace(
  state: PreparedOpticalState,
  trace: EngineTraceResult,
  channel: ChromaticChannel = "G",
): OpticalPathResult {
  const empty = (status: OpticalPathResult["status"]): OpticalPathResult => ({
    status,
    toLastSurfaceMm: null,
    toSensorMm: null,
    sensorPoint: null,
  });
  if (state.surfaces.some((s) => s.diffractive)) return empty("unsupported");
  if (trace.status === "clipped" || trace.failureReason === "totalInternalReflection") return empty("blocked");
  const sensorPoint = sensorPointForTrace(state, trace);
  if (!sensorPoint) return empty("failed");
  let medium: number | null = null;
  let n = 1;
  let previous = trace.input.origin;
  let opl = 0;
  for (const hit of trace.hits) {
    // Use physical hit positions, not the tracer's epsilon-advanced search origins.
    opl += n * Math.hypot(hit.point[0] - previous[0], hit.point[1] - previous[1], hit.point[2] - previous[2]);
    medium = mediumAfterEncounter(state.lens.runtime.S, hit, medium);
    n = medium === null ? 1 : state.lens.dispersion[medium].indexAt(channel);
    previous = hit.point;
  }
  const toSensorMm =
    opl + n * Math.hypot(sensorPoint[0] - previous[0], sensorPoint[1] - previous[1], sensorPoint[2] - previous[2]);
  if (!Number.isFinite(opl) || !Number.isFinite(toSensorMm)) return empty("failed");
  return { status: "ok", toLastSurfaceMm: opl, toSensorMm, sensorPoint };
}
