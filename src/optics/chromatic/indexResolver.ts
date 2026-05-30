/**
 * Chromatic index resolver — maps channels and surfaces to refractive indices for exact tracing.
 *
 * Encapsulates wavelength selection and per-surface dispersion closures so trace loops only request n(lambda).
 */

import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { CHROMATIC_CHANNEL_METADATA, CHROMATIC_CHANNEL_ORDER } from "./channels.js";

/** Chromatic channels traced by the engine: C, d, F, and g spectral lines. */
export const CHROMATIC_CHANNELS_2 = CHROMATIC_CHANNEL_ORDER;

/** Per-channel wavelength in nanometers, keyed to standard Fraunhofer lines. */
export const CHANNEL_WAVELENGTH_NM_2: Readonly<Record<ChromaticChannel, number>> = Object.freeze({
  R: CHROMATIC_CHANNEL_METADATA.R.wavelengthNm,
  G: CHROMATIC_CHANNEL_METADATA.G.wavelengthNm,
  B: CHROMATIC_CHANNEL_METADATA.B.wavelengthNm,
  V: CHROMATIC_CHANNEL_METADATA.V.wavelengthNm,
});

/**
 * Surface-index callback used by exact tracers when a channel changes refraction.
 *
 * @param surfaceIndex - physical surface index
 * @param dLineIndex - default d-line refractive index for the current surface
 * @returns refractive index to use for this trace step
 */
export type SurfaceIndexResolver2 = (surfaceIndex: number, dLineIndex: number) => number;

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, ReturnType<typeof normalizeRuntimeLens>>();

/**
 * Approximate channel refractive index from d-line index and Abbe number.
 *
 * This is the fallback when no catalog Sellmeier or patent line-index data is
 * available. Red and blue use a symmetric C/F estimate; violet uses the standard
 * partial-dispersion approximation for P_gF.
 *
 * @param nd - d-line refractive index
 * @param vd - Abbe Vd number, if known
 * @param channel - requested chromatic channel
 * @returns estimated refractive index for the channel
 */
export function wavelengthNd2(nd: number, vd: number | undefined, channel: ChromaticChannel): number {
  if (nd === 1.0) return 1.0;
  if (!vd || channel === "G") return nd;
  const delta = (nd - 1) / (2 * vd);
  if (channel === "R") return nd - delta;
  if (channel === "B") return nd + delta;
  const nC = nd - delta;
  const nF = nd + delta;
  const PgF = 0.6438 - 0.001682 * vd;
  return nF + PgF * (nF - nC);
}

/**
 * Resolve a prepared surface index for a chromatic channel.
 *
 * @param state - prepared optical state with compiled dispersion table
 * @param surfaceIndex - physical surface index
 * @param channel - requested channel, or undefined for d-line tracing
 * @returns refractive index for the surface/channel, defaulting to air for invalid indices
 */
export function indexAtPreparedSurface2(
  state: PreparedOpticalState,
  surfaceIndex: number,
  channel: ChromaticChannel | undefined,
): number {
  const surface = state.surfaces[surfaceIndex];
  if (!surface) return 1;
  if (!channel) return surface.nd === 1 ? 1 : surface.nd;
  return state.lens.dispersion[surfaceIndex]?.indexAt(channel) ?? surface.nd;
}

/**
 * Resolve a RuntimeLens surface index for a chromatic channel.
 *
 * Runtime lenses are normalized and cached in a WeakMap so repeated chromatic
 * traces reuse the same dispersion descriptors without mutating `L`.
 *
 * @param L - runtime lens object
 * @param surfaceIndex - physical surface index
 * @param channel - requested channel, or undefined for d-line tracing
 * @returns refractive index for the surface/channel, defaulting to air for invalid indices
 */
export function indexAtRuntimeSurface2(
  L: RuntimeLens,
  surfaceIndex: number,
  channel: ChromaticChannel | undefined,
): number {
  const surface = L.S[surfaceIndex];
  if (!surface) return 1;
  if (!channel) return surface.nd === 1 ? 1 : surface.nd;
  let engineLens = ENGINE_LENS_BY_RUNTIME.get(L);
  if (!engineLens) {
    engineLens = normalizeRuntimeLens(L);
    ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  }
  return (
    engineLens.dispersion[surfaceIndex]?.indexAt(channel) ?? wavelengthNd2(surface.nd, L.vdByIdx[surfaceIndex], channel)
  );
}

/**
 * Create a trace callback for the requested prepared-state channel.
 *
 * @param state - prepared optical state with compiled dispersion table
 * @param channel - requested channel, or undefined for d-line tracing
 * @returns index resolver for exact tracing, or undefined for unchanged d-line indices
 */
export function channelIndexResolverForState2(
  state: PreparedOpticalState,
  channel: ChromaticChannel | undefined,
): SurfaceIndexResolver2 | undefined {
  if (!channel) return undefined;
  return (surfaceIndex, dLineIndex) => state.lens.dispersion[surfaceIndex]?.indexAt(channel) ?? dLineIndex;
}
