/**
 * Chromatic index resolver — maps channels and surfaces to refractive indices for exact tracing.
 *
 * Encapsulates wavelength selection and per-surface dispersion closures so trace loops only request n(lambda).
 */

import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import { LINE_NM } from "../glassCatalog.js";
import type { PreparedOpticalState } from "../types.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";

export const CHROMATIC_CHANNELS_2 = Object.freeze(["R", "G", "B", "V"] as const);

export const CHANNEL_WAVELENGTH_NM_2: Readonly<Record<ChromaticChannel, number>> = Object.freeze({
  R: LINE_NM.C,
  G: LINE_NM.d,
  B: LINE_NM.F,
  V: LINE_NM.g,
});

export type SurfaceIndexResolver2 = (surfaceIndex: number, dLineIndex: number) => number;

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, ReturnType<typeof normalizeRuntimeLens>>();

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

export function channelIndexResolverForState2(
  state: PreparedOpticalState,
  channel: ChromaticChannel | undefined,
): SurfaceIndexResolver2 | undefined {
  if (!channel) return undefined;
  return (surfaceIndex, dLineIndex) => state.lens.dispersion[surfaceIndex]?.indexAt(channel) ?? dLineIndex;
}
