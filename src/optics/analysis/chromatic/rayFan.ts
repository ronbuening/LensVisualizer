/**
 * Chromatic ray fans — request-facing ray-trace summaries at the outermost fraction all four channels pass.
 */

import type { PreparedGeometry } from "../../types.js";

import { runtimeView } from "../../prescription/runtimeView.js";
import { computeChromaticRayFanSpread } from "../../chromatic/chromaticTrace.js";
import {
  CHROMATIC_ZONE_CHANNELS,
  chromaticRayOmission,
  requestedZoneChannels,
  selectChromaticZone,
} from "../../chromatic/zoneSelection.js";
import { CHROMATIC_CHANNEL_ORDER } from "../../chromatic/channels.js";
import { computeOffAxisFieldGeometry } from "../aberration/offAxis.js";
import { prepareAxialZoneLaunch } from "../aberration/shared.js";
import { prepareAimedPupilLaunch, prepareAimedPupilTrace } from "../pupils/aimedPupil.js";
import type { AimedPupilLaunch, AimedPupilTrace, AimedPupilUnaimedReason } from "../pupils/aimedPupil.js";
import { thick } from "../../state/layout.js";
import { compiledLensFromRuntime } from "../../prescription/identity.js";
import { prepareState } from "../../state/preparedGeometry.js";
import type {
  ChromaticChannel,
  ChromaticChannelOmission,
  ChromaticRayFanSpread,
  ChromaticRayFanSpreadByAxis,
  ChromaticZoneSearchEnd,
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
  /** The unaimed ray that ended each fan's search before any fraction passed every channel, or null. */
  searchEnds: { onAxis: ChromaticZoneSearchEnd | null; offAxis: ChromaticZoneSearchEnd | null };
  offAxisFieldAngleDeg: number;
  onAxisAttemptedRayCount: number;
  offAxisAttemptedRayCount: number;
  /** Attempted rays no launch could be aimed at the stop for, on either axis. */
  unaimedRayCount: number;
  /** Attempted rays a rim ahead of the stop blocked before they reached their stop position, on either axis. */
  blockedRayCount: number;
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
  /** Why no ray could be aimed; null for an aimed ray, or when the channel has no launch at all. */
  unaimedReason: AimedPupilUnaimedReason | null;
  blocked: boolean;
}

/** Each channel's fan is aimed at the same stop fractions at that channel's indices. */
function aimedFanTracer(
  launches: ReadonlyMap<ChromaticChannel, { launch: AimedPupilLaunch; trace: AimedPupilTrace } | null>,
  fractions: readonly number[],
  toFanRay: (
    trace: AimedPupilTrace,
    ray: Parameters<AimedPupilTrace["skew"]>[0],
  ) => Omit<FanRay, "unaimed" | "unaimedReason" | "blocked">,
): (fraction: number, channel: ChromaticChannel) => FanRay {
  return (fraction, channel) => {
    const aimed = launches.get(channel);
    const ray = aimed?.launch.rays[fractions.indexOf(fraction)];
    if (!aimed || !ray || ray.status === "unaimed") {
      const unaimedReason = ray?.status === "unaimed" ? ray.reason : null;
      return { y: NaN, u: NaN, clipped: true, unaimed: true, unaimedReason, blocked: false };
    }
    return { ...toFanRay(aimed.trace, ray), unaimed: false, unaimedReason: null, blocked: ray.status === "blocked" };
  };
}

function computeSpreadFromFractions(
  fractions: readonly number[],
  channels: readonly ChromaticChannel[],
  imagePlaneZ: number,
  lastSurfaceZ: number,
  axis: "onAxis" | "offAxis",
  trace: (fraction: number, channel: ChromaticChannel) => FanRay,
): {
  spread: ChromaticRayFanSpread | null;
  searchEndedBy: ChromaticZoneSearchEnd | null;
  attemptedRayCount: number;
  unaimedRayCount: number;
  blockedRayCount: number;
} {
  let attemptedRayCount = 0;
  let unaimedRayCount = 0;
  let blockedRayCount = 0;
  let searchEndedBy: ChromaticZoneSearchEnd | null = null;

  type MarginalRays = Partial<Record<ChromaticChannel, { y: number; u: number; z?: number; clipped: boolean }>>;
  function* zones() {
    for (const fraction of fractions) {
      const marginalRays: MarginalRays = {};
      const omittedChannels: ChromaticChannelOmission[] = [];
      // Every zone channel is traced, requested or not, so the fraction is the same whichever channels are shown.
      for (const channel of CHROMATIC_ZONE_CHANNELS) {
        attemptedRayCount++;
        const ray = trace(fraction, channel);
        if (ray.blocked) blockedRayCount++;
        if (ray.unaimed) {
          // As in LoCA, a fraction no ray could be aimed at ends the search; a channel with no launch has no fan.
          unaimedRayCount++;
          if (ray.unaimedReason) searchEndedBy = { fraction, channel, reason: ray.unaimedReason };
          return;
        }
        const omission = chromaticRayOmission(ray);
        if (omission) omittedChannels.push({ channel, reason: omission });
        else marginalRays[channel] = { y: ray.y, u: ray.u, z: ray.z, clipped: false };
      }
      yield { fraction, marginalRays, omittedChannels };
    }
  }

  const chosen = selectChromaticZone(zones(), CHROMATIC_ZONE_CHANNELS.length);
  const requested = chosen && requestedZoneChannels(chosen, channels);
  const compared = requested ? (Object.keys(requested.marginalRays) as ChromaticChannel[]) : [];
  const spread: ChromaticRayFanSpread | null =
    chosen && requested && compared.length >= 2
      ? {
          ...computeChromaticRayFanSpread(requested.marginalRays, imagePlaneZ, lastSurfaceZ),
          axis,
          fraction: chosen.fraction,
          channels: compared,
          omittedChannels: requested.omittedChannels,
          ...(searchEndedBy ? { searchEndedBy } : {}),
        }
      : null;
  return { spread, searchEndedBy, attemptedRayCount, unaimedRayCount, blockedRayCount };
}

/**
 * Trace axis-split chromatic fans at the outermost fraction all four traced channels pass.
 *
 * Fractions are searched by magnitude, positive side first, over R, G, B and V whichever are requested, and the
 * requested channels' spread is read at the fraction chosen. A fraction an unaimed ray falls on ends the search
 * (`searchEnds`). When no fraction passes all four, a fan falls back to the first that two pass and lists requested
 * channels left out in its spread's `omittedChannels`.
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
    searchEnds: { onAxis: null, offAxis: null },
    offAxisFieldAngleDeg: 0,
    onAxisAttemptedRayCount: 0,
    offAxisAttemptedRayCount: 0,
    unaimedRayCount: 0,
    blockedRayCount: 0,
  };
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return empty;

  const imagePlaneZ = currentImagePlaneZ(request.preparedGeometry);
  if (imagePlaneZ === null) return empty;
  const lastSurfaceZ = zPos[L.N - 1];
  const onAxisFractions = normalizeSignedFractions(options.onAxisFractions, DEFAULT_ON_AXIS_FRACTIONS);
  const onAxisZones = new Map(
    CHROMATIC_ZONE_CHANNELS.map((channel) => [channel, prepareAxialZoneLaunch(request, onAxisFractions, channel)]),
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
      ? { spread: null, searchEndedBy: null, attemptedRayCount: 0, unaimedRayCount: 0, blockedRayCount: 0 }
      : computeSpreadFromFractions(
          offAxisFractions,
          channels,
          imagePlaneZ,
          lastSurfaceZ,
          "offAxis",
          aimedFanTracer(
            new Map(
              CHROMATIC_ZONE_CHANNELS.map((channel) => {
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
    searchEnds: { onAxis: onAxis.searchEndedBy, offAxis: offAxis.searchEndedBy },
    offAxisFieldAngleDeg: geometry?.fieldAngleDeg ?? 0,
    onAxisAttemptedRayCount: onAxis.attemptedRayCount,
    offAxisAttemptedRayCount: offAxis.attemptedRayCount,
    unaimedRayCount: onAxis.unaimedRayCount + offAxis.unaimedRayCount,
    blockedRayCount: onAxis.blockedRayCount + offAxis.blockedRayCount,
  };
}
