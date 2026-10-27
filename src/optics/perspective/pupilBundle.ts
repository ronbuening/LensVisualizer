/**
 * Ordered meridional and weighted circular pupil-bundle tracing.
 *
 * Analysis bundles sample the real stop: each pupil coordinate is aimed in the lens frame through the shared
 * `prepareAimedPupilLaunchForState`, as the centred analyses are. The diagram fan keeps the paraxial entrance-pupil
 * launch, a rendering sampler like the unmoved diagram's rays.
 */

import type { ChromaticChannel } from "../../types/optics.js";
import { prepareAimedPupilLaunchForState } from "../analysis/pupils/aimedPupil.js";
import type { AimedPupilUnaimedReason } from "../analysis/pupils/aimedPupil.js";
import { add, scale } from "../math/vector.js";
import type { Ray3, Vec3 } from "../types.js";
import { perspectiveTraceStatus } from "./chiefRay.js";
import type { PerspectiveChiefRayResult, PerspectiveFieldStatus } from "./chiefRay.js";
import { createFieldPlaneFrame, pointInsideSensor, requirePerspectiveImageFormatMetadata } from "./fieldGeometry.js";
import type { SensorUv } from "./fieldGeometry.js";
import type { FieldSampleDomain } from "./fieldTypes.js";
import { SENSOR_LOCK_FORMAT_TOLERANCE_MM } from "./sensorTarget.js";
import type { PerspectiveTraceContext, PerspectiveTraceResult } from "./trace.js";

export interface PerspectivePupilRaySample {
  pupilUv: SensorUv;
  /** Relative pupil-area integration weight (not pre-normalized). */
  weight: number;
  status: Extract<PerspectiveFieldStatus, "usable" | "clipped" | "missed-sensor">;
  sensorIntercept: Vec3 | null;
  transmission: number;
  trace: PerspectiveTraceResult;
  /** An aimed sample whose ray a rim ahead of the stop blocks before it reaches its stop position (traced, clipped). */
  blocked?: boolean;
}

/** A requested pupil coordinate no ray could be aimed at; it carries no trace and transmits nothing. */
export interface PerspectiveUnaimedPupilSample {
  pupilUv: SensorUv;
  weight: number;
  reason: AimedPupilUnaimedReason;
}

export interface PerspectivePupilBundle {
  kind: "meridional" | "circular";
  /** Traced samples in request order, unaimed ones omitted. */
  samples: readonly PerspectivePupilRaySample[];
  /** Requested samples left out of `samples` because no ray could be aimed at them. */
  unaimed: readonly PerspectiveUnaimedPupilSample[];
}

/**
 * How pupil coordinates become rays: `aimed-stop` positions on the real stop (analyses), or `paraxial-entrance`
 * offsets of the paraxial entrance-pupil radius about the chief launch (the diagram fan).
 */
export type PerspectivePupilLaunch = "aimed-stop" | "paraxial-entrance";

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
      launch?: PerspectivePupilLaunch;
    }
  | {
      kind: "circular";
      pupilSemiDiameterMm: number;
      points: readonly PerspectivePupilPoint[];
      stopSemiDiameterMm?: number;
      channel?: ChromaticChannel;
      launch?: PerspectivePupilLaunch;
    };

interface WeightedPupilCoordinate extends SensorUv {
  weight: number;
}

/** Trace a meridional pupil fan around an already-solved chief launch. */
// Unlike sampleCircularPupil, this traces caller-ordered meridional fractions with unit rather than area weights.
export function sampleMeridionalPupilBundle(
  context: PerspectiveTraceContext,
  chief: PerspectiveChiefRayResult,
  pupilSemiDiameterMm: number,
  fractions: readonly number[],
  channel?: ChromaticChannel,
  stopSemiDiameterMm?: number,
  domain: FieldSampleDomain = "scene-locked",
  launch: PerspectivePupilLaunch = "aimed-stop",
): PerspectivePupilBundle | null {
  return samplePupilBundle(
    context,
    chief,
    "meridional",
    pupilSemiDiameterMm,
    fractions.map((v) => ({ u: 0, v, weight: 1 })),
    channel,
    stopSemiDiameterMm,
    domain,
    launch,
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
  domain: FieldSampleDomain = "scene-locked",
  launch: PerspectivePupilLaunch = "aimed-stop",
): PerspectivePupilBundle | null {
  return samplePupilBundle(
    context,
    chief,
    "circular",
    pupilSemiDiameterMm,
    points,
    channel,
    stopSemiDiameterMm,
    domain,
    launch,
  );
}

export function pupilBundleForRequest(
  context: PerspectiveTraceContext,
  chief: PerspectiveChiefRayResult,
  request: PerspectivePupilBundleRequest,
  domain: FieldSampleDomain = "scene-locked",
): PerspectivePupilBundle | null {
  return request.kind === "meridional"
    ? sampleMeridionalPupilBundle(
        context,
        chief,
        request.pupilSemiDiameterMm,
        request.fractions,
        request.channel,
        request.stopSemiDiameterMm,
        domain,
        request.launch,
      )
    : sampleCircularPupilBundle(
        context,
        chief,
        request.pupilSemiDiameterMm,
        request.points,
        request.channel,
        request.stopSemiDiameterMm,
        domain,
        request.launch,
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
  domain: FieldSampleDomain = "scene-locked",
  launch: PerspectivePupilLaunch = "aimed-stop",
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

  const toleranceMm = domain === "sensor-locked" ? SENSOR_LOCK_FORMAT_TOLERANCE_MM : undefined;
  const traceSample = (
    pupilUv: WeightedPupilCoordinate,
    launchRayLens: Ray3,
    stopSemiDiameter: number,
  ): PerspectivePupilRaySample => {
    const trace = context.traceRay(context.pose.lensToCameraRay(launchRayLens), {
      channel,
      projectToSensor: true,
      checkSemiDiameter: true,
      stopSemiDiameter,
      stopOnClip: true,
      directionNormalized: true,
    });
    const rawStatus = perspectiveTraceStatus(trace);
    const sensorIntercept = trace.sensorIntersection?.point ?? null;
    const status =
      rawStatus === "usable" && !pointInsideSensor(sensorFrame, sensorIntercept, toleranceMm)
        ? "missed-sensor"
        : rawStatus;
    return {
      pupilUv: { u: pupilUv.u, v: pupilUv.v },
      weight: pupilUv.weight,
      status: status === "usable" || status === "clipped" ? status : "missed-sensor",
      sensorIntercept,
      transmission: trace.transmission,
      trace,
    };
  };

  if (launch === "paraxial-entrance") {
    const samples = pupilUvs.map((pupilUv) => {
      const offset = add(
        scale(chief.pupilSagittalAxisLens!, pupilUv.u * pupilSemiDiameterMm),
        scale(chief.pupilRadialAxisLens!, pupilUv.v * pupilSemiDiameterMm),
      );
      const launchRayLens: Ray3 = {
        origin: add(chief.launchRayLens!.origin, offset),
        direction: chief.launchRayLens!.direction,
      };
      return traceSample(pupilUv, launchRayLens, activeStopSemiDiameterMm);
    });
    return { kind, samples, unaimed: [] };
  }

  // Aim in the intrinsic lens frame, which the pose leaves unchanged, then trace each ray through the moved lens.
  const aimed = prepareAimedPupilLaunchForState(
    context.state,
    { stopSemiDiameterMm: activeStopSemiDiameterMm, launchScaleMm: pupilSemiDiameterMm },
    pupilUvs.map(({ u, v, weight }) => ({ xFraction: u, yFraction: v, weight })),
    {
      kind: "launch-frame",
      chiefRay: chief.launchRayLens,
      sagittalAxis: chief.pupilSagittalAxisLens,
      radialAxis: chief.pupilRadialAxisLens,
    },
    channel,
  );
  if (aimed === null) return null;
  const samples: PerspectivePupilRaySample[] = [];
  const unaimed: PerspectiveUnaimedPupilSample[] = [];
  aimed.rays.forEach((ray, index) => {
    const pupilUv = pupilUvs[index];
    if (ray.status === "unaimed") {
      unaimed.push({ pupilUv: { u: pupilUv.u, v: pupilUv.v }, weight: pupilUv.weight, reason: ray.reason });
      return;
    }
    const sample = traceSample(pupilUv, { origin: ray.origin, direction: ray.direction }, aimed.clipSemiDiameterMm);
    samples.push(ray.status === "blocked" ? { ...sample, blocked: true } : sample);
  });
  return { kind, samples, unaimed };
}
