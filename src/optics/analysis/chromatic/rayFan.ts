/**
 * Chromatic ray fans — request-facing first-usable-fraction ray-trace summaries.
 */

import { runtimeView } from "../../prescription/runtimeView.js";
import { computeChromaticRayFanSpread } from "../../chromatic/chromaticTrace.js";
import { CHROMATIC_CHANNEL_ORDER } from "../../chromatic/channels.js";
import { computeProjectionAwareOffAxisFieldGeometry, isOffAxisVectorFieldGeometry } from "../aberration/offAxis.js";
import type { ProjectionAwareOffAxisFieldGeometry } from "../aberration/offAxis.js";
import { offsetVectorFieldRay } from "../../field/launch.js";
import { prepareRayTrace } from "../../trace/rayAdapters.js";
import type { PreparedRayTrace } from "../../trace/rayAdapters.js";
import { thick } from "../../state/layout.js";
import { compiledLensFromRuntime } from "../../prescription/identity.js";
import { prepareState } from "../../state/preparedGeometry.js";
import type {
  ChromaticChannel,
  ChromaticRayFanSpread,
  ChromaticRayFanSpreadByAxis,
  RuntimeLens,
} from "../../../types/optics.js";
import { MARGINAL_PUPIL_FRACTIONS } from "../sampling.js";
import type { AnalysisRequest } from "../request.js";

const DEFAULT_ON_AXIS_FRACTIONS = MARGINAL_PUPIL_FRACTIONS;
// Unlike the endpoint-inclusive orthogonal fan, this sparse fan omits the chief and pupil rims.
const DEFAULT_OFF_AXIS_FRACTIONS = [0.75, 0.5, 0.25, -0.75, -0.5, -0.25] as const;

export interface ChromaticRayFanAnalysisOptions {
  channels?: readonly ChromaticChannel[];
  onAxisFractions?: readonly number[];
  offAxisFractions?: readonly number[];
  offAxisFieldFraction?: number;
}

export interface ChromaticRayFanAnalysis {
  channels: readonly ChromaticChannel[];
  spreads: ChromaticRayFanSpreadByAxis;
  offAxisFieldAngleDeg: number;
  onAxisAttemptedRayCount: number;
  offAxisAttemptedRayCount: number;
}

function normalizeChannels(channels: readonly ChromaticChannel[] | undefined): ChromaticChannel[] {
  const requested = new Set(channels ?? CHROMATIC_CHANNEL_ORDER);
  return CHROMATIC_CHANNEL_ORDER.filter((channel) => requested.has(channel));
}

// Unlike chromatic/analysis.normalizeFractions, omit near-zero rays and sort by magnitude, positive side first.
function normalizeSignedFractions(fractions: readonly number[] | undefined, fallback: readonly number[]): number[] {
  const values = (fractions ?? fallback)
    .filter((fraction) => isFinite(fraction) && Math.abs(fraction) > 1e-9)
    .map((fraction) => Math.max(-1, Math.min(1, fraction)));
  return Array.from(new Set(values)).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });
}

function currentImagePlaneZ(
  L: RuntimeLens,
  zPos: readonly number[],
  focusT: number,
  zoomT: number,
  aberrationT: number,
): number | null {
  if (L.N < 1) return null;
  if (L.isFoldedOptics) {
    // Match the trace's plane: an inferred folded image plane follows the current focus spacing.
    const imagePlaneZ = prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT).imgZ;
    return isFinite(imagePlaneZ) ? imagePlaneZ : null;
  }
  const imagePlaneZ = zPos[L.N - 1] + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  return isFinite(imagePlaneZ) ? imagePlaneZ : null;
}

function traceOffAxisChromaticMarginal(
  geometry: ProjectionAwareOffAxisFieldGeometry,
  fraction: number,
  adapter: PreparedRayTrace,
  L: RuntimeLens,
  currentEPSD: number,
  imagePlaneZ: number,
): { y: number; u: number; z?: number; clipped: boolean } {
  const ray = isOffAxisVectorFieldGeometry(geometry)
    ? adapter.skewVector(offsetVectorFieldRay(geometry.vectorLaunch, 0, fraction * currentEPSD))
    : adapter.skew(0 * currentEPSD, geometry.yChief + fraction * currentEPSD, 0, geometry.uField);
  return { y: ray.y, u: ray.uy, z: L.isFoldedOptics ? imagePlaneZ : undefined, clipped: ray.clipped };
}

function computeSpreadFromFractions(
  fractions: readonly number[],
  channels: readonly ChromaticChannel[],
  imagePlaneZ: number,
  lastSurfaceZ: number,
  axis: "onAxis" | "offAxis",
  trace: (fraction: number, channel: ChromaticChannel) => { y: number; u: number; z?: number; clipped: boolean },
): { spread: ChromaticRayFanSpread | null; attemptedRayCount: number } {
  let attemptedRayCount = 0;

  for (const fraction of fractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; z?: number; clipped: boolean }>> = {};

    for (const channel of channels) {
      attemptedRayCount++;
      const ray = trace(fraction, channel);
      if (!ray.clipped && Math.abs(ray.u) > 1e-15) {
        marginalRays[channel] = { y: ray.y, u: ray.u, z: ray.z, clipped: false };
      }
    }

    const validChannels = Object.keys(marginalRays) as ChromaticChannel[];
    if (validChannels.length >= 2) {
      return {
        spread: {
          ...computeChromaticRayFanSpread(marginalRays, imagePlaneZ, lastSurfaceZ),
          axis,
          fraction,
          channels: validChannels,
        },
        attemptedRayCount,
      };
    }
  }

  return { spread: null, attemptedRayCount };
}

/**
 * Trace axis-split chromatic fans at the first usable marginal fraction.
 *
 * @param request - current geometry, apertures and fan sampling; fieldGeometry is intentionally ignored
 * @param options - optional explicit channel, fraction and field-angle controls
 * @returns spreads with ordered channels and counts of every attempted ray
 */
export function computeChromaticRayFanAnalysis(
  request: AnalysisRequest,
  options: ChromaticRayFanAnalysisOptions = {
    channels: request.channels,
    onAxisFractions: request.sampling.chromaticRayTraceOnAxisFractions,
    offAxisFractions: request.sampling.chromaticRayTraceOffAxisFractions,
  },
): ChromaticRayFanAnalysis {
  const { preparedGeometry: state } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD } = request.aperture;
  const channels = normalizeChannels(options.channels);
  const empty = {
    channels,
    spreads: { onAxis: null, offAxis: null },
    offAxisFieldAngleDeg: 0,
    onAxisAttemptedRayCount: 0,
    offAxisAttemptedRayCount: 0,
  };
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return empty;

  const imagePlaneZ = currentImagePlaneZ(L, zPos, focusT, zoomT, aberrationT);
  if (imagePlaneZ === null) return empty;
  const lastSurfaceZ = zPos[L.N - 1];
  const adapters = new Map(
    channels.map((channel) => [
      channel,
      prepareRayTrace(L, {
        zPos,
        focusT,
        zoomT,
        stopSD: currentPhysStopSD,
        ghost: true,
        channel,
        aberrationT,
      }),
    ]),
  );
  const onAxis = computeSpreadFromFractions(
    normalizeSignedFractions(options.onAxisFractions, DEFAULT_ON_AXIS_FRACTIONS),
    channels,
    imagePlaneZ,
    lastSurfaceZ,
    "onAxis",
    (fraction, channel) => {
      const ray = adapters.get(channel)!.ray(fraction * currentEPSD, 0);
      return { y: ray.y, u: ray.u, z: ray.reachedImagePlane ? imagePlaneZ : lastSurfaceZ, clipped: ray.clipped };
    },
  );

  const offAxisFieldFraction = Math.max(0, Math.min(1, options.offAxisFieldFraction ?? L.offAxisFieldFrac));
  const geometry = computeProjectionAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    offAxisFieldFraction,
    undefined,
    aberrationT,
  );
  const vectorGeometry = geometry && isOffAxisVectorFieldGeometry(geometry) ? geometry : undefined;
  const offAxisAdapters =
    geometry === null
      ? adapters
      : new Map(
          channels.map((channel) => [
            channel,
            prepareRayTrace(L, {
              zPos: vectorGeometry?.zPos,
              focusT,
              zoomT,
              stopSD: currentPhysStopSD,
              ghost: true,
              channel,
              aberrationT,
              launchBoundT: vectorGeometry?.vectorLaunch.launchBoundT,
            }),
          ]),
        );
  const offAxis =
    geometry === null
      ? { spread: null, attemptedRayCount: 0 }
      : computeSpreadFromFractions(
          normalizeSignedFractions(options.offAxisFractions, DEFAULT_OFF_AXIS_FRACTIONS),
          channels,
          imagePlaneZ,
          lastSurfaceZ,
          "offAxis",
          (fraction, channel) =>
            traceOffAxisChromaticMarginal(
              geometry,
              fraction,
              offAxisAdapters.get(channel)!,
              L,
              currentEPSD,
              imagePlaneZ,
            ),
        );

  return {
    channels,
    spreads: { onAxis: onAxis.spread, offAxis: offAxis.spread },
    offAxisFieldAngleDeg: geometry?.fieldAngleDeg ?? 0,
    onAxisAttemptedRayCount: onAxis.attemptedRayCount,
    offAxisAttemptedRayCount: offAxis.attemptedRayCount,
  };
}
