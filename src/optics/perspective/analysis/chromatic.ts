/** Fixed-sensor chromatic focus, transverse color, and retained ray fans. */

import type { ChromaticChannel } from "../../../types/optics.js";
import { CHROMATIC_CHANNEL_ORDER } from "../../chromatic/channels.js";
import type { Vec3 } from "../../types.js";
import {
  sampleMeridionalPupilBundle,
  sampleSceneLockedFields,
  sampleSensorLockedFields,
  type FieldSample,
  type PerspectiveFieldSamplingOptions,
  type PerspectiveFieldStatus,
  type SensorUv,
} from "../fieldSampling.js";
import { createFieldPlaneFrame, pointInsideSensor, requirePerspectiveImageFormatMetadata } from "../fieldGeometry.js";
import type { PerspectiveTraceContext, PerspectiveTraceResult } from "../trace.js";
import {
  affineSensorRaysFromField,
  cameraFieldAngleDeg,
  fieldSensorAxes,
  resolvePerspectivePupilSemiDiameter,
  solvePerspectiveSensorBestFocus,
  type PerspectiveSensorBestFocus,
} from "./imageSpace.js";
import { sensorFrameDisplacement, type SensorFrameDisplacement } from "./shared.js";

const DEFAULT_CHROMATIC_SENSOR_UVS: readonly SensorUv[] = [
  { u: 0, v: -1 },
  { u: 0, v: -0.5 },
  { u: 0, v: 0 },
  { u: 0, v: 0.5 },
  { u: 0, v: 1 },
];
const DEFAULT_CHROMATIC_PUPIL_FRACTIONS = [-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9] as const;

/** Controls for scene-matched chromatic measurements at fixed-sensor coordinates. */
export interface PerspectiveChromaticOptions {
  stopSemiDiameterMm: number;
  pupilSemiDiameterMm?: number;
  /** Caller order is retained, including unavailable coordinates. */
  sensorUvs?: readonly SensorUv[];
  /** Caller order is retained; duplicate channels are rejected. */
  channels?: readonly ChromaticChannel[];
  /** Defaults to G when present, otherwise the first requested channel. */
  referenceChannel?: ChromaticChannel;
  /** Ordered meridional pupil fractions retained in every channel fan. */
  pupilFractions?: readonly number[];
  fieldSampling?: Omit<PerspectiveFieldSamplingOptions, "pupilBundle">;
}

/** One retained meridional ray at the physical sensor. */
export interface PerspectiveChromaticRayFanSample {
  sourceIndex: number;
  pupilFraction: number;
  status: PerspectiveFieldStatus;
  sensorPoint: Vec3 | null;
  sensorUMm: number | null;
  sensorVMm: number | null;
  sagittalOffsetMm: number | null;
  tangentialOffsetMm: number | null;
  mechanicalWeight: number;
  photometricWeight: number;
  transmission: number;
  trace: PerspectiveTraceResult | null;
}

/** Ordered fixed-sensor ray fan for one spectral channel. */
export interface PerspectiveChromaticRayFan {
  samples: readonly PerspectiveChromaticRayFanSample[];
  usableSampleCount: number;
  sagittalSpanMm: number | null;
  tangentialSpanMm: number | null;
}

/** One channel traced for a reference wavelength's sensor-locked scene direction. */
export interface PerspectiveChromaticChannelSample {
  channel: ChromaticChannel;
  /** Physical chief-hit status at the fixed sensor for the shared scene. */
  status: PerspectiveFieldStatus;
  actualSensorPoint: Vec3 | null;
  /** Signed displacement from the reference channel in the fixed sensor basis. */
  transverseToReference: SensorFrameDisplacement | null;
  /** Meridional best-focus displacement from the physical sensor along its normal. */
  sensorRelativeFocus: PerspectiveSensorBestFocus | null;
  /** Signed focus difference from the reference spectral channel. */
  focusRelativeToReferenceMm: number | null;
  rayFan: PerspectiveChromaticRayFan;
  fieldSample: FieldSample | null;
}

/** Chromatic measurements at one retained requested sensor coordinate. */
export interface PerspectiveChromaticFieldSample {
  requestedSensorUv: SensorUv;
  status: PerspectiveFieldStatus;
  sensorPoint: Vec3 | null;
  sceneDirectionCamera: Vec3 | null;
  fieldAngleDeg: number | null;
  referenceChannel: ChromaticChannel;
  referenceSensorPoint: Vec3 | null;
  channels: readonly PerspectiveChromaticChannelSample[];
  validChannelCount: number;
  focusSpreadMm: number | null;
  transverseUSpanMm: number | null;
  transverseVSpanMm: number | null;
  maxTransverseSeparationMm: number | null;
  referenceLock: FieldSample;
}

/** Complete movement-aware chromatic result in the fixed camera/sensor frame. */
export interface PerspectiveChromaticAnalysis {
  contextCacheKey: string;
  stopSemiDiameterMm: number;
  pupilSemiDiameterMm: number;
  referenceChannel: ChromaticChannel;
  channels: readonly ChromaticChannel[];
  pupilFractions: readonly number[];
  samples: readonly PerspectiveChromaticFieldSample[];
  usableSampleCount: number;
}

/**
 * Compute chromatic focus and transverse color without invoking lens-axis
 * longitudinal/spherical-aberration summaries.
 *
 * The reference wavelength first solves each requested fixed-sensor point. All
 * channels then reuse that camera-space scene direction, so their physical
 * sensor intercept differences remain visible instead of being solved away.
 */
export function computePerspectiveChromaticAnalysis(
  context: PerspectiveTraceContext,
  options: PerspectiveChromaticOptions,
): PerspectiveChromaticAnalysis {
  const channels = normalizeChannels(options.channels);
  const referenceChannel = resolveReferenceChannel(channels, options.referenceChannel);
  const pupilFractions = normalizePupilFractions(options.pupilFractions);
  const pupilSemiDiameterMm = resolvePerspectivePupilSemiDiameter(
    context,
    options.stopSemiDiameterMm,
    options.pupilSemiDiameterMm,
  );
  const sensorUvs = options.sensorUvs ?? DEFAULT_CHROMATIC_SENSOR_UVS;
  const referenceLocks = sampleSensorLockedFields(context, sensorUvs, {
    ...options.fieldSampling,
    chiefRay: {
      ...options.fieldSampling?.chiefRay,
      channel: referenceChannel,
    },
    pupilBundle: null,
  });
  const validLockIndexes = referenceLocks.flatMap((sample, index) =>
    sample.status === "usable" && sample.sceneDirectionCamera ? [index] : [],
  );
  const validDirections = validLockIndexes.map((index) => referenceLocks[index].sceneDirectionCamera!);
  const channelFields = new Map<ChromaticChannel, readonly FieldSample[]>();
  channelFields.set(
    referenceChannel,
    validLockIndexes.map((index): FieldSample => {
      const field = referenceLocks[index];
      return {
        ...field,
        pupilBundle: field.chiefSolve
          ? sampleMeridionalPupilBundle(
              context,
              field.chiefSolve,
              pupilSemiDiameterMm,
              pupilFractions,
              referenceChannel,
              options.stopSemiDiameterMm,
            )
          : null,
      };
    }),
  );

  for (const channel of channels) {
    if (channel === referenceChannel) continue;
    channelFields.set(
      channel,
      sampleSceneLockedFields(context, validDirections, {
        ...options.fieldSampling,
        chiefRay: {
          ...options.fieldSampling?.chiefRay,
          channel,
        },
        pupilBundle: {
          kind: "meridional",
          pupilSemiDiameterMm,
          stopSemiDiameterMm: options.stopSemiDiameterMm,
          fractions: pupilFractions,
          channel,
        },
      }),
    );
  }

  const validPositionByLock = new Map(validLockIndexes.map((lockIndex, position) => [lockIndex, position]));
  const samples = referenceLocks.map((referenceLock, lockIndex) => {
    const validPosition = validPositionByLock.get(lockIndex);
    const fields = new Map<ChromaticChannel, FieldSample | null>();
    for (const channel of channels) {
      fields.set(channel, validPosition === undefined ? null : (channelFields.get(channel)?.[validPosition] ?? null));
    }
    return reduceChromaticField(
      context,
      sensorUvs[lockIndex] ?? { u: 0, v: 0 },
      referenceLock,
      fields,
      channels,
      referenceChannel,
      pupilFractions,
    );
  });

  return {
    contextCacheKey: context.cacheKey,
    stopSemiDiameterMm: options.stopSemiDiameterMm,
    pupilSemiDiameterMm,
    referenceChannel,
    channels,
    pupilFractions,
    samples,
    usableSampleCount: samples.filter((sample) => sample.validChannelCount >= 2).length,
  };
}

function reduceChromaticField(
  context: PerspectiveTraceContext,
  requestedSensorUv: SensorUv,
  referenceLock: FieldSample,
  fields: ReadonlyMap<ChromaticChannel, FieldSample | null>,
  channels: readonly ChromaticChannel[],
  referenceChannel: ChromaticChannel,
  pupilFractions: readonly number[],
): PerspectiveChromaticFieldSample {
  const referenceField = fields.get(referenceChannel) ?? null;
  const referenceSensorPoint =
    usableSensorIntercept(context, referenceField) ??
    (referenceLock.status === "usable" ? referenceLock.actualSensorIntercept : null);
  const reduced = channels.map((channel) =>
    reduceChromaticChannel(
      context,
      channel,
      fields.get(channel) ?? null,
      requestedSensorUv,
      referenceLock.sensorPoint,
      referenceSensorPoint,
      pupilFractions,
      referenceLock.status,
    ),
  );
  const referenceFocus =
    reduced.find((sample) => sample.channel === referenceChannel)?.sensorRelativeFocus?.normalOffsetMm ?? null;
  const channelSamples = reduced.map(
    (sample): PerspectiveChromaticChannelSample => ({
      ...sample,
      focusRelativeToReferenceMm:
        sample.sensorRelativeFocus && referenceFocus !== null
          ? sample.sensorRelativeFocus.normalOffsetMm - referenceFocus
          : null,
    }),
  );
  const usableChannels = channelSamples.filter(
    (sample) => sample.status === "usable" && sample.actualSensorPoint !== null,
  );
  const focusOffsets = channelSamples.flatMap((sample) =>
    sample.sensorRelativeFocus ? [sample.sensorRelativeFocus.normalOffsetMm] : [],
  );
  const transverseUs = usableChannels.flatMap((sample) =>
    sample.transverseToReference ? [sample.transverseToReference.uMm] : [],
  );
  const transverseVs = usableChannels.flatMap((sample) =>
    sample.transverseToReference ? [sample.transverseToReference.vMm] : [],
  );

  return {
    requestedSensorUv: { ...requestedSensorUv },
    status: referenceLock.status,
    sensorPoint: referenceLock.sensorPoint,
    sceneDirectionCamera: referenceLock.sceneDirectionCamera,
    fieldAngleDeg: cameraFieldAngleDeg(referenceLock.sceneDirectionCamera),
    referenceChannel,
    referenceSensorPoint,
    channels: channelSamples,
    validChannelCount: usableChannels.length,
    focusSpreadMm: numericSpan(focusOffsets),
    transverseUSpanMm: numericSpan(transverseUs),
    transverseVSpanMm: numericSpan(transverseVs),
    maxTransverseSeparationMm: maxTransverseSeparation(usableChannels),
    referenceLock,
  };
}

function reduceChromaticChannel(
  context: PerspectiveTraceContext,
  channel: ChromaticChannel,
  field: FieldSample | null,
  requestedSensorUv: SensorUv,
  targetSensorPoint: Vec3 | null,
  referenceSensorPoint: Vec3 | null,
  pupilFractions: readonly number[],
  unavailableStatus: PerspectiveFieldStatus,
): PerspectiveChromaticChannelSample {
  if (!field || !targetSensorPoint) {
    return unavailableChannel(channel, pupilFractions, field?.status ?? unavailableStatus, field);
  }
  const axes = fieldSensorAxes(context, requestedSensorUv);
  const status = physicalSensorStatus(context, field);
  const affineRays = affineSensorRaysFromField(context, field.pupilBundle?.samples ?? [], targetSensorPoint);
  const rays: PerspectiveChromaticRayFanSample[] = pupilFractions.map((pupilFraction, sourceIndex) => {
    const ray = affineRays[sourceIndex];
    if (!ray) return unavailableRay(sourceIndex, pupilFraction, status);
    return {
      sourceIndex,
      pupilFraction,
      status: ray.status,
      sensorPoint: ray.sensorPoint,
      sensorUMm: ray.sensorUMm,
      sensorVMm: ray.sensorVMm,
      sagittalOffsetMm:
        ray.sensorUMm === null || ray.sensorVMm === null
          ? null
          : ray.sensorUMm * axes.sagittal.u + ray.sensorVMm * axes.sagittal.v,
      tangentialOffsetMm:
        ray.sensorUMm === null || ray.sensorVMm === null
          ? null
          : ray.sensorUMm * axes.tangential.u + ray.sensorVMm * axes.tangential.v,
      mechanicalWeight: ray.mechanicalWeight,
      photometricWeight: ray.photometricWeight,
      transmission: ray.transmission,
      trace: ray.trace,
    };
  });
  const usableRays = rays.filter(
    (ray) =>
      ray.status === "usable" &&
      ray.photometricWeight > 0 &&
      ray.sagittalOffsetMm !== null &&
      ray.tangentialOffsetMm !== null,
  );
  const actualSensorPoint = usableSensorIntercept(context, field);
  return {
    channel,
    status,
    actualSensorPoint,
    transverseToReference:
      referenceSensorPoint && actualSensorPoint
        ? sensorFrameDisplacement(context, referenceSensorPoint, actualSensorPoint)
        : null,
    sensorRelativeFocus: status === "usable" ? solvePerspectiveSensorBestFocus(affineRays, [axes.tangential]) : null,
    focusRelativeToReferenceMm: null,
    rayFan: {
      samples: rays,
      usableSampleCount: usableRays.length,
      sagittalSpanMm: numericSpan(usableRays.map((ray) => ray.sagittalOffsetMm!)),
      tangentialSpanMm: numericSpan(usableRays.map((ray) => ray.tangentialOffsetMm!)),
    },
    fieldSample: field,
  };
}

function unavailableChannel(
  channel: ChromaticChannel,
  pupilFractions: readonly number[],
  status: PerspectiveFieldStatus,
  fieldSample: FieldSample | null,
): PerspectiveChromaticChannelSample {
  return {
    channel,
    status,
    actualSensorPoint: null,
    transverseToReference: null,
    sensorRelativeFocus: null,
    focusRelativeToReferenceMm: null,
    rayFan: {
      samples: pupilFractions.map((fraction, index) => unavailableRay(index, fraction, status)),
      usableSampleCount: 0,
      sagittalSpanMm: null,
      tangentialSpanMm: null,
    },
    fieldSample,
  };
}

function unavailableRay(
  sourceIndex: number,
  pupilFraction: number,
  status: PerspectiveFieldStatus,
): PerspectiveChromaticRayFanSample {
  return {
    sourceIndex,
    pupilFraction,
    status,
    sensorPoint: null,
    sensorUMm: null,
    sensorVMm: null,
    sagittalOffsetMm: null,
    tangentialOffsetMm: null,
    mechanicalWeight: 1,
    photometricWeight: 0,
    transmission: 0,
    trace: null,
  };
}

function usableSensorIntercept(context: PerspectiveTraceContext, field: FieldSample | null): Vec3 | null {
  return field && physicalSensorStatus(context, field) === "usable" ? field.actualSensorIntercept : null;
}

function physicalSensorStatus(context: PerspectiveTraceContext, field: FieldSample): PerspectiveFieldStatus {
  if (field.status !== "usable" && field.status !== "missed-sensor") return field.status;
  // A relocked reference scene can have a pose-ideal point outside the format
  // even though its exact chief hits the sensor. Chromatic availability is
  // therefore classified from that physical hit, not the analytic composition.
  const sensorFrame = createFieldPlaneFrame(
    context.sensorPlane,
    requirePerspectiveImageFormatMetadata(context),
    context.sensorBasis,
  );
  return pointInsideSensor(sensorFrame, field.actualSensorIntercept) ? "usable" : "missed-sensor";
}

function normalizeChannels(channels: readonly ChromaticChannel[] | undefined): ChromaticChannel[] {
  const normalized = [...(channels ?? CHROMATIC_CHANNEL_ORDER)];
  if (normalized.length === 0) throw new RangeError("channels must contain at least one spectral channel");
  if (new Set(normalized).size !== normalized.length) throw new RangeError("channels must not contain duplicates");
  return normalized;
}

function resolveReferenceChannel(
  channels: readonly ChromaticChannel[],
  requested: ChromaticChannel | undefined,
): ChromaticChannel {
  const reference = requested ?? (channels.includes("G") ? "G" : channels[0]);
  if (!channels.includes(reference)) throw new RangeError("referenceChannel must be included in channels");
  return reference;
}

function normalizePupilFractions(fractions: readonly number[] | undefined): number[] {
  const normalized = [...(fractions ?? DEFAULT_CHROMATIC_PUPIL_FRACTIONS)];
  if (normalized.length === 0) throw new RangeError("pupilFractions must contain at least one sample");
  if (normalized.some((fraction) => !Number.isFinite(fraction) || Math.abs(fraction) > 1 + 1e-9)) {
    throw new RangeError("pupilFractions must be finite values inside [-1, 1]");
  }
  return normalized;
}

function numericSpan(values: readonly number[]): number | null {
  return values.length >= 2 ? Math.max(...values) - Math.min(...values) : null;
}

function maxTransverseSeparation(samples: readonly PerspectiveChromaticChannelSample[]): number | null {
  const coordinates = samples.flatMap((sample) =>
    sample.transverseToReference ? [{ u: sample.transverseToReference.uMm, v: sample.transverseToReference.vMm }] : [],
  );
  if (coordinates.length < 2) return null;
  let maximum = 0;
  for (let first = 0; first < coordinates.length; first++) {
    for (let second = first + 1; second < coordinates.length; second++) {
      maximum = Math.max(
        maximum,
        Math.hypot(coordinates[first].u - coordinates[second].u, coordinates[first].v - coordinates[second].v),
      );
    }
  }
  return maximum;
}
