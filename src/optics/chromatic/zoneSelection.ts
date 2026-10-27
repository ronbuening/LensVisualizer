/**
 * Chromatic zone selection — one rule for every spread over a set of spectral channels.
 *
 * Every wavelength crosses the stop at the same zone, but a rim behind it can vignette one colour before another. A
 * spread therefore compares every requested channel at the outermost zone they all pass, and only failing that the
 * first zone two pass, naming the channels it leaves out.
 */

import type { ChromaticChannelOmission, ChromaticChannelOmissionReason } from "../../types/optics.js";

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
 * @param zones - candidate zones in search order, each listing the requested channels it leaves out
 * @param channelCount - number of requested channels
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
