/**
 * Chromatic ray fans — request-facing first-usable-fraction ray-trace summaries.
 */

import type { PreparedGeometry } from "../../types.js";

import { runtimeView } from "../../prescription/runtimeView.js";
import { computeChromaticRayFanSpread } from "../../chromatic/chromaticTrace.js";
import { CHROMATIC_CHANNEL_ORDER } from "../../chromatic/channels.js";
import { computeOffAxisFieldGeometry } from "../aberration/offAxis.js";
import { prepareAxialZoneLaunch } from "../aberration/shared.js";
import { prepareAimedPupilLaunch, prepareAimedPupilTrace } from "../pupils/aimedPupil.js";
import type { AimedPupilLaunch, AimedPupilTrace } from "../pupils/aimedPupil.js";
import { thick } from "../../state/layout.js";
import { compiledLensFromRuntime } from "../../prescription/identity.js";
import { prepareState } from "../../state/preparedGeometry.js";
import type { ChromaticChannel, ChromaticRayFanSpread, ChromaticRayFanSpreadByAxis } from "../../../types/optics.js";
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
  /** Attempted rays no launch could be aimed at the stop for, on either axis. */
  unaimedRayCount: number;
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

function currentImagePlaneZ(state: PreparedGeometry): number | null {
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const focusT = state.focusT;
  const zoomT = state.zoomT;
  const aberrationT = state.aberrationT;

  if (L.N < 1) return null;
  if (L.isFoldedOptics) {
    // Match the trace's plane: an inferred folded image plane follows the current focus spacing.
    const imagePlaneZ = prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT).imgZ;
    return isFinite(imagePlaneZ) ? imagePlaneZ : null;
  }
  const imagePlaneZ = zPos[L.N - 1] + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  return isFinite(imagePlaneZ) ? imagePlaneZ : null;
}

interface FanRay {
  y: number;
  u: number;
  z?: number;
  clipped: boolean;
  unaimed: boolean;
}

/** Each channel's fan is aimed at the same stop fractions at that channel's indices. */
function aimedFanTracer(
  launches: ReadonlyMap<ChromaticChannel, { launch: AimedPupilLaunch; trace: AimedPupilTrace } | null>,
  fractions: readonly number[],
  toFanRay: (trace: AimedPupilTrace, ray: Parameters<AimedPupilTrace["skew"]>[0]) => Omit<FanRay, "unaimed">,
): (fraction: number, channel: ChromaticChannel) => FanRay {
  return (fraction, channel) => {
    const aimed = launches.get(channel);
    const ray = aimed?.launch.rays[fractions.indexOf(fraction)];
    if (!aimed || !ray || ray.status === "unaimed") return { y: NaN, u: NaN, clipped: true, unaimed: true };
    return { ...toFanRay(aimed.trace, ray), unaimed: false };
  };
}

function computeSpreadFromFractions(
  fractions: readonly number[],
  channels: readonly ChromaticChannel[],
  imagePlaneZ: number,
  lastSurfaceZ: number,
  axis: "onAxis" | "offAxis",
  trace: (fraction: number, channel: ChromaticChannel) => FanRay,
): { spread: ChromaticRayFanSpread | null; attemptedRayCount: number; unaimedRayCount: number } {
  let attemptedRayCount = 0;
  let unaimedRayCount = 0;

  for (const fraction of fractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; z?: number; clipped: boolean }>> = {};

    for (const channel of channels) {
      attemptedRayCount++;
      const ray = trace(fraction, channel);
      if (ray.unaimed) unaimedRayCount++;
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
        unaimedRayCount,
      };
    }
  }

  return { spread: null, attemptedRayCount, unaimedRayCount };
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
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const { entrancePupilSemiDiameterMm: currentEPSD } = request.aperture;
  const channels = normalizeChannels(options.channels);
  const empty = {
    channels,
    spreads: { onAxis: null, offAxis: null },
    offAxisFieldAngleDeg: 0,
    onAxisAttemptedRayCount: 0,
    offAxisAttemptedRayCount: 0,
    unaimedRayCount: 0,
  };
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return empty;

  const imagePlaneZ = currentImagePlaneZ(request.preparedGeometry);
  if (imagePlaneZ === null) return empty;
  const lastSurfaceZ = zPos[L.N - 1];
  const onAxisFractions = normalizeSignedFractions(options.onAxisFractions, DEFAULT_ON_AXIS_FRACTIONS);
  const onAxisZones = new Map(
    channels.map((channel) => [channel, prepareAxialZoneLaunch(request, onAxisFractions, channel)]),
  );
  const onAxis = computeSpreadFromFractions(
    onAxisFractions,
    channels,
    imagePlaneZ,
    lastSurfaceZ,
    "onAxis",
    aimedFanTracer(onAxisZones, onAxisFractions, (trace, aimed) => {
      const ray = trace.meridional(aimed);
      return { y: ray.y, u: ray.u, z: ray.reachedImagePlane ? imagePlaneZ : lastSurfaceZ, clipped: ray.clipped };
    }),
  );

  const offAxisFieldFraction = Math.max(0, Math.min(1, options.offAxisFieldFraction ?? L.offAxisFieldFrac));
  const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, offAxisFieldFraction, undefined);
  const offAxisFractions = normalizeSignedFractions(options.offAxisFractions, DEFAULT_OFF_AXIS_FRACTIONS);
  const offAxisSamples = offAxisFractions.map((yFraction) => ({ xFraction: 0, yFraction }));
  const offAxis =
    geometry === null
      ? { spread: null, attemptedRayCount: 0, unaimedRayCount: 0 }
      : computeSpreadFromFractions(
          offAxisFractions,
          channels,
          imagePlaneZ,
          lastSurfaceZ,
          "offAxis",
          aimedFanTracer(
            new Map(
              channels.map((channel) => {
                const launch = prepareAimedPupilLaunch(request, offAxisSamples, geometry, channel);
                const trace = launch && prepareAimedPupilTrace(request.preparedGeometry, launch, channel);
                return [channel, launch && trace ? { launch, trace } : null];
              }),
            ),
            offAxisFractions,
            (trace, aimed) => {
              const ray = trace.skew(aimed);
              return { y: ray.y, u: ray.uy, z: L.isFoldedOptics ? imagePlaneZ : undefined, clipped: ray.clipped };
            },
          ),
        );

  return {
    channels,
    spreads: { onAxis: onAxis.spread, offAxis: offAxis.spread },
    offAxisFieldAngleDeg: geometry?.fieldAngleDeg ?? 0,
    onAxisAttemptedRayCount: onAxis.attemptedRayCount,
    offAxisAttemptedRayCount: offAxis.attemptedRayCount,
    unaimedRayCount: onAxis.unaimedRayCount + offAxis.unaimedRayCount,
  };
}
