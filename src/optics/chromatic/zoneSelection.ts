/**
 * Chromatic zone selection — one rule for every spread over spectral channels.
 *
 * Every wavelength crosses the stop at the same zone, but a rim behind it can vignette one colour before another. The
 * zone is chosen from every channel the analyses trace (`CHROMATIC_ZONE_CHANNELS`: R, G, B and V), whichever are
 * requested: the outermost candidate all of them pass, and only failing that the first that two pass. The requested
 * channels' spread is read at that zone, so toggling channels never moves it and a subset's spread never exceeds the
 * full set's. Requested channels the zone leaves out are named.
 */

import type {
  ChromaticChannel,
  ChromaticChannelOmission,
  ChromaticChannelOmissionReason,
  ChromaticRayFanSpread,
} from "../../types/optics.js";
import { CHROMATIC_CHANNEL_ORDER } from "./channels.js";
import { computeChromaticRayFanSpread } from "./chromaticTrace.js";

/** Channels every chromatic zone is chosen from, whichever are requested. */
export const CHROMATIC_ZONE_CHANNELS = CHROMATIC_CHANNEL_ORDER;

/**
 * Classify a traced channel ray for a spread.
 *
 * @param ray - the channel's traced ray: clipped flag and exit slope
 * @returns null when the ray is compared; "vignetted" when an aperture clips it; "no-axis-crossing" when it leaves
 *   parallel to the axis (or with no finite slope)
 */
export function chromaticRayOmission(ray: { clipped: boolean; u: number }): ChromaticChannelOmissionReason | null {
  if (ray.clipped) return "vignetted";
  return Math.abs(ray.u) > 1e-15 ? null : "no-axis-crossing";
}

/**
 * Pick the zone a chromatic spread compares.
 *
 * Zones arrive outermost first. The first that omits no channel is chosen; only when none does, the first that still
 * compares at least two channels. A caller ends the search early by ending the iterable.
 *
 * @param zones - candidate zones in search order, each listing the traced channels it leaves out
 * @param channelCount - number of traced channels
 * @returns the chosen zone, or undefined when no zone compares two channels
 */
export function selectChromaticZone<Zone extends { omittedChannels: readonly ChromaticChannelOmission[] }>(
  zones: Iterable<Zone>,
  channelCount: number,
): Zone | undefined {
  let firstTwoChannelZone: Zone | undefined;
  for (const zone of zones) {
    if (zone.omittedChannels.length === 0) return zone;
    if (channelCount - zone.omittedChannels.length >= 2) firstTwoChannelZone ??= zone;
  }
  return firstTwoChannelZone;
}

/**
 * The requested channels' part of a chosen zone.
 *
 * @param zone - the chosen zone's rays and omissions over every traced channel
 * @param channels - requested channels
 * @returns the requested channels' rays, and the requested channels the zone leaves out
 */
export function requestedZoneChannels<Ray>(
  zone: { marginalRays: Partial<Record<ChromaticChannel, Ray>>; omittedChannels: readonly ChromaticChannelOmission[] },
  channels: readonly ChromaticChannel[],
): { marginalRays: Partial<Record<ChromaticChannel, Ray>>; omittedChannels: ChromaticChannelOmission[] } {
  const marginalRays: Partial<Record<ChromaticChannel, Ray>> = {};
  for (const channel of channels) {
    const ray = zone.marginalRays[channel];
    if (ray) marginalRays[channel] = ray;
  }
  return {
    marginalRays,
    omittedChannels: zone.omittedChannels.filter((omission) => channels.includes(omission.channel)),
  };
}

/** One traced channel ray of a fan, tagged with its signed pupil fraction. */
export interface ChromaticFanRay {
  channel: ChromaticChannel;
  fraction: number;
  y: number;
  u: number;
  z?: number;
  clipped: boolean;
}

/**
 * Spread of already-traced fan rays at the fraction `selectChromaticZone` picks from every zone channel.
 *
 * Fractions are searched by magnitude, positive side first. A channel with no ray at a fraction is `untraced` there,
 * so the rays should cover every channel in `CHROMATIC_ZONE_CHANNELS`, shown or not.
 *
 * @param rays - traced rays of one fan, any channels and fractions
 * @param channels - requested channels in R/G/B/V order, whose spread is reported
 * @param imagePlaneZ - image-plane z in mm
 * @param lastSurfaceZ - last surface vertex z in mm, the default reference for rays without z
 * @returns spread at the chosen fraction with its compared and omitted channels, or null when no fraction has two
 */
export function chromaticSpreadFromRays(
  rays: readonly ChromaticFanRay[],
  channels: readonly ChromaticChannel[],
  imagePlaneZ: number,
  lastSurfaceZ: number,
): ChromaticRayFanSpread | null {
  const fractions = Array.from(new Set(rays.map((ray) => ray.fraction))).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });

  type MarginalRays = Partial<Record<ChromaticChannel, { y: number; u: number; z?: number; clipped: boolean }>>;
  function* zones() {
    for (const fraction of fractions) {
      const marginalRays: MarginalRays = {};
      const omittedChannels: ChromaticChannelOmission[] = [];
      for (const channel of CHROMATIC_ZONE_CHANNELS) {
        const ray = rays.find((r) => r.channel === channel && Math.abs(r.fraction - fraction) < 1e-12);
        const omission = ray ? chromaticRayOmission(ray) : "untraced";
        if (omission) omittedChannels.push({ channel, reason: omission });
        else if (ray) marginalRays[channel] = { y: ray.y, u: ray.u, z: ray.z, clipped: false };
      }
      yield { fraction, marginalRays, omittedChannels };
    }
  }

  const chosen = selectChromaticZone(zones(), CHROMATIC_ZONE_CHANNELS.length);
  if (!chosen) return null;
  const { marginalRays, omittedChannels } = requestedZoneChannels(chosen, channels);
  const compared = Object.keys(marginalRays) as ChromaticChannel[];
  if (compared.length < 2) return null;
  return {
    ...computeChromaticRayFanSpread(marginalRays, imagePlaneZ, lastSurfaceZ),
    fraction: chosen.fraction,
    channels: compared,
    omittedChannels,
  };
}
