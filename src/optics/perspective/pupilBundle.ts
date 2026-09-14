/** Ordered meridional and weighted circular pupil-bundle tracing. */

import type { ChromaticChannel } from "../../types/optics.js";
import { add, scale } from "../math/vector.js";
import type { Ray3, Vec3 } from "../types.js";
import { perspectiveTraceStatus, type PerspectiveChiefRayResult, type PerspectiveFieldStatus } from "./chiefRay.js";
import {
  createFieldPlaneFrame,
  pointInsideSensor,
  requirePerspectiveImageFormatMetadata,
  type SensorUv,
} from "./fieldGeometry.js";
import type { PerspectiveTraceContext, PerspectiveTraceResult } from "./trace.js";

export interface PerspectivePupilRaySample {
  pupilUv: SensorUv;
  /** Relative pupil-area integration weight (not pre-normalized). */
  weight: number;
  status: Extract<PerspectiveFieldStatus, "usable" | "clipped" | "missed-sensor">;
  sensorIntercept: Vec3 | null;
  transmission: number;
  trace: PerspectiveTraceResult;
}

export interface PerspectivePupilBundle {
  kind: "meridional" | "circular";
  samples: readonly PerspectivePupilRaySample[];
}

/** Circular pupil coordinate with an explicit quadrature/area weight. */
export interface PerspectivePupilPoint extends SensorUv {
  weight: number;
}

export type PerspectivePupilBundleRequest =
  | {
      kind: "meridional";
      pupilSemiDiameterMm: number;
      fractions: readonly number[];
      stopSemiDiameterMm?: number;
      channel?: ChromaticChannel;
    }
  | {
      kind: "circular";
      pupilSemiDiameterMm: number;
      points: readonly PerspectivePupilPoint[];
      stopSemiDiameterMm?: number;
      channel?: ChromaticChannel;
    };

interface WeightedPupilCoordinate extends SensorUv {
  weight: number;
}

/** Trace a meridional pupil fan around an already-solved chief launch. */
export function sampleMeridionalPupilBundle(
  context: PerspectiveTraceContext,
  chief: PerspectiveChiefRayResult,
  pupilSemiDiameterMm: number,
  fractions: readonly number[],
  channel?: ChromaticChannel,
  stopSemiDiameterMm?: number,
): PerspectivePupilBundle | null {
  return samplePupilBundle(
    context,
    chief,
    "meridional",
    pupilSemiDiameterMm,
    fractions.map((v) => ({ u: 0, v, weight: 1 })),
    channel,
    stopSemiDiameterMm,
  );
}

/** Trace an explicitly ordered circular pupil pattern around a solved chief launch. */
export function sampleCircularPupilBundle(
  context: PerspectiveTraceContext,
  chief: PerspectiveChiefRayResult,
  pupilSemiDiameterMm: number,
  points: readonly PerspectivePupilPoint[],
  channel?: ChromaticChannel,
  stopSemiDiameterMm?: number,
): PerspectivePupilBundle | null {
  return samplePupilBundle(context, chief, "circular", pupilSemiDiameterMm, points, channel, stopSemiDiameterMm);
}

export function pupilBundleForRequest(
  context: PerspectiveTraceContext,
  chief: PerspectiveChiefRayResult,
  request: PerspectivePupilBundleRequest,
): PerspectivePupilBundle | null {
  return request.kind === "meridional"
    ? sampleMeridionalPupilBundle(
        context,
        chief,
        request.pupilSemiDiameterMm,
        request.fractions,
        request.channel,
        request.stopSemiDiameterMm,
      )
    : sampleCircularPupilBundle(
        context,
        chief,
        request.pupilSemiDiameterMm,
        request.points,
        request.channel,
        request.stopSemiDiameterMm,
      );
}

function samplePupilBundle(
  context: PerspectiveTraceContext,
  chief: PerspectiveChiefRayResult,
  kind: PerspectivePupilBundle["kind"],
  pupilSemiDiameterMm: number,
  pupilUvs: readonly WeightedPupilCoordinate[],
  channel?: ChromaticChannel,
  stopSemiDiameterMm?: number,
): PerspectivePupilBundle | null {
  const activeStopSemiDiameterMm = stopSemiDiameterMm ?? context.state.lens.stop.physicalSemiDiameter;
  const sensorFrame = createFieldPlaneFrame(
    context.sensorPlane,
    requirePerspectiveImageFormatMetadata(context),
    context.sensorBasis,
  );
  if (
    !chief.launchRayLens ||
    !chief.pupilRadialAxisLens ||
    !chief.pupilSagittalAxisLens ||
    !Number.isFinite(pupilSemiDiameterMm) ||
    pupilSemiDiameterMm <= 0 ||
    !Number.isFinite(activeStopSemiDiameterMm) ||
    activeStopSemiDiameterMm <= 0 ||
    pupilUvs.some(
      ({ u, v, weight }) => !Number.isFinite(u) || !Number.isFinite(v) || !Number.isFinite(weight) || weight < 0,
    )
  ) {
    return null;
  }

  const samples = pupilUvs.map((pupilUv): PerspectivePupilRaySample => {
    const offset = add(
      scale(chief.pupilSagittalAxisLens!, pupilUv.u * pupilSemiDiameterMm),
      scale(chief.pupilRadialAxisLens!, pupilUv.v * pupilSemiDiameterMm),
    );
    const launchRayLens: Ray3 = {
      origin: add(chief.launchRayLens!.origin, offset),
      direction: chief.launchRayLens!.direction,
    };
    const trace = context.traceRay(context.pose.lensToCameraRay(launchRayLens), {
      channel,
      projectToSensor: true,
      checkSemiDiameter: true,
      stopSemiDiameter: activeStopSemiDiameterMm,
      stopOnClip: true,
      directionNormalized: true,
    });
    const rawStatus = perspectiveTraceStatus(trace);
    const sensorIntercept = trace.sensorIntersection?.point ?? null;
    const status =
      rawStatus === "usable" && !pointInsideSensor(sensorFrame, sensorIntercept) ? "missed-sensor" : rawStatus;
    return {
      pupilUv: { u: pupilUv.u, v: pupilUv.v },
      weight: pupilUv.weight,
      status: status === "usable" || status === "clipped" ? status : "missed-sensor",
      sensorIntercept,
      transmission: trace.transmission,
      trace,
    };
  });
  return { kind, samples };
}
