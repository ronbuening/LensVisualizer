/**
 * Chromatic index resolver — maps channels and surfaces to refractive indices for exact tracing.
 *
 * Encapsulates wavelength selection and per-surface dispersion closures so trace loops only request n(lambda).
 */

import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import type { CompiledSurfaceDispersion, EngineLens, PreparedOpticalState } from "../types.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { normalLinePgF } from "../dispersion.js";
import { evaluateSellmeier } from "../glassCatalog.js";
import { LINE_NM } from "../spectralLines.js";
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
  const PgF = normalLinePgF(vd);
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
  const engineLens = normalizeRuntimeLens(L);
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

/* ── Arbitrary-wavelength indices anchored to the authored reference ── */

/** Channel nodes (µm) of the C/d/F/g interpolation used for line-index and Abbe surfaces. */
const CAUCHY_CHANNELS = ["R", "G", "B", "V"] as const;
const CAUCHY_NODES_UM = [LINE_NM.C, LINE_NM.d, LINE_NM.F, LINE_NM.g].map((nm) => nm / 1000);
const cauchyCoefficientsByDispersion = new WeakMap<CompiledSurfaceDispersion, readonly number[]>();
const referenceLineByLens = new WeakMap<EngineLens, ReadonlyMap<number, number>>();

/**
 * Refractive index of one prepared surface at an arbitrary wavelength, anchored to its authored index.
 *
 * Catalog Sellmeier substitution accepts glasses whose nd sits within a few 1e-3 of the authored value.
 * An analysis evaluated at a fixed image plane, such as MTF, would then defocus the design by that
 * offset rather than by dispersion. Anchoring keeps the authored index at the element's reference line
 * (d, or e for e-referenced elements) and borrows only the catalog's wavelength dependence. Line-index
 * and Abbe surfaces interpolate their C/d/F/g channels with a four-term Cauchy form; their d channel is
 * already the authored index, so they are anchored by construction. Callers must not request native
 * e-referenced non-catalog surfaces, whose channels are not physical C/d/F/g values.
 *
 * @param state - prepared optical state with compiled dispersion descriptors
 * @param surfaceIndex - physical surface index
 * @param wavelengthNm - vacuum wavelength in nanometres (435.8-656.3 nm stays within the fitted lines)
 * @returns refractive index, or 1 for air and missing surfaces
 */
export function anchoredIndexAtWavelength(
  state: PreparedOpticalState,
  surfaceIndex: number,
  wavelengthNm: number,
): number {
  const surface = state.surfaces[surfaceIndex];
  if (!surface || surface.nd === 1) return 1;
  const dispersion = state.lens.dispersion[surfaceIndex];
  if (!dispersion || dispersion.quality === "air" || dispersion.quality === "constant") return surface.nd;
  if (dispersion.quality === "sellmeier" && dispersion.glassEntry) {
    const referenceNm = elementReferenceLineNm(state.lens, surface.elemId);
    return (
      surface.nd +
      evaluateSellmeier(dispersion.glassEntry, wavelengthNm) -
      evaluateSellmeier(dispersion.glassEntry, referenceNm)
    );
  }
  const coefficients = channelCauchyCoefficients(dispersion);
  const inverseSquare = 1 / (wavelengthNm / 1000) ** 2;
  return coefficients.reduce((sum, coefficient, power) => sum + coefficient * inverseSquare ** power, 0);
}

/**
 * Precompute anchored indices for every surface at one wavelength, for hot trace loops.
 *
 * @param state - prepared optical state
 * @param wavelengthNm - vacuum wavelength in nanometres
 * @returns surface-indexed refractive indices
 */
export function anchoredIndexTable(state: PreparedOpticalState, wavelengthNm: number): Float64Array {
  return Float64Array.from(state.surfaces, (_, index) => anchoredIndexAtWavelength(state, index, wavelengthNm));
}

function elementReferenceLineNm(lens: EngineLens, elementId: number | undefined): number {
  let byElement = referenceLineByLens.get(lens);
  if (!byElement) {
    byElement = new Map(
      lens.elements.map((element) => [element.id, element.source.indexReference === "e" ? LINE_NM.e : LINE_NM.d]),
    );
    referenceLineByLens.set(lens, byElement);
  }
  return (elementId !== undefined ? byElement.get(elementId) : undefined) ?? LINE_NM.d;
}

/** Solve n(λ) = a0 + a1/λ² + a2/λ⁴ + a3/λ⁶ exactly through the C, d, F, and g channel indices. */
function channelCauchyCoefficients(dispersion: CompiledSurfaceDispersion): readonly number[] {
  const cached = cauchyCoefficientsByDispersion.get(dispersion);
  if (cached) return cached;
  const size = CAUCHY_NODES_UM.length;
  const rows = CAUCHY_NODES_UM.map((lambda, row) => [
    ...Array.from({ length: size }, (_, power) => (1 / (lambda * lambda)) ** power),
    dispersion.indexAt(CAUCHY_CHANNELS[row]),
  ]);
  for (let pivot = 0; pivot < size; pivot++) {
    let best = pivot;
    for (let row = pivot + 1; row < size; row++) {
      if (Math.abs(rows[row][pivot]) > Math.abs(rows[best][pivot])) best = row;
    }
    [rows[pivot], rows[best]] = [rows[best], rows[pivot]];
    for (let row = pivot + 1; row < size; row++) {
      const factor = rows[row][pivot] / rows[pivot][pivot];
      for (let column = pivot; column <= size; column++) rows[row][column] -= factor * rows[pivot][column];
    }
  }
  const coefficients = new Array<number>(size).fill(0);
  for (let row = size - 1; row >= 0; row--) {
    let value = rows[row][size];
    for (let column = row + 1; column < size; column++) value -= rows[row][column] * coefficients[column];
    coefficients[row] = value / rows[row][row];
  }
  const frozen = Object.freeze(coefficients);
  cauchyCoefficientsByDispersion.set(dispersion, frozen);
  return frozen;
}
