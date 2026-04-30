/**
 * Per-surface dispersion resolution.
 *
 * The chromatic ray-trace needs n(λ) at each surface. Historically this was a
 * pure Abbe approximation derived from (nd, vd) only. This module replaces
 * that with a preference cascade that prefers higher-fidelity data when the
 * lens declares it, and degrades gracefully otherwise:
 *
 *   1. Air (nd === 1.0)                       → constant 1.0
 *   2. Catalog Sellmeier (resolved by glass)  → λ-accurate at any wavelength
 *   3. Measured nC/nF on the element          → exact at the listed lines
 *   4. Abbe approximation (the legacy path)   → unchanged fallback
 *
 * Channels: R = C-line (656.3 nm), G = d-line (587.6 nm), B = F-line (486.1 nm),
 * V = g-line (435.8 nm — the secondary-spectrum probe). The Sellmeier path is
 * λ-accurate at any wavelength; the line-indices path uses measured `ng` when
 * present and extrapolates from `dPgF` otherwise; the Abbe path uses the
 * Schott normal-line partial dispersion plus `dPgF` to estimate `ng`.
 *
 * Resolution happens once per lens load (`buildLens`) and is cached as a
 * per-surface closure so the hot ray-trace loop pays no repeated overhead.
 */

import type { ChromaticChannel, ElementData, RuntimeLens, SurfaceData, SurfaceSpectral } from "../types/optics.js";
import { evaluateSellmeier, LINE_NM, resolveGlass, type GlassEntry } from "./glassCatalog.js";

/** Wavelength (nm) used when tracing each chromatic channel. */
const CHANNEL_NM: Record<ChromaticChannel, number> = {
  R: LINE_NM.C,
  G: LINE_NM.d,
  B: LINE_NM.F,
  V: LINE_NM.g,
};

/**
 * Schott "normal line" partial dispersion P_g,F as a function of Abbe number.
 * The standard interpolation used to estimate g-line behavior from (vd) alone:
 *   P_g,F_normal ≈ 0.6438 − 0.001682 · vd
 * Anomalous-partial-dispersion glasses deviate from this line by ΔP_g,F (the
 * `dPgF` field on ElementData), which is what makes apochromatic correction
 * possible. Adding ΔP_g,F to the normal-line baseline gives the corrected
 * partial dispersion used by the Abbe-channel cascade for the V channel.
 */
function partialDispersionPgF(vd: number, dPgF: number): number {
  return 0.6438 - 0.001682 * vd + dPgF;
}

/** The quality of the dispersion data backing a per-surface index function. */
export type DispersionQuality = "air" | "sellmeier" | "lineIndices" | "abbe" | "constant";

/** A pre-resolved per-surface index lookup. */
export type SurfaceIndexFn = (channel: ChromaticChannel) => number;

export interface SurfaceDispersion {
  readonly fn: SurfaceIndexFn;
  readonly quality: DispersionQuality;
  /** Catalog entry the surface resolved to, when quality === 'sellmeier'. */
  readonly glassEntry?: GlassEntry;
}

/**
 * Build the per-surface index function for a single surface, picking the
 * highest-fidelity data path that the surface and element can satisfy.
 */
export function makeSurfaceDispersion(
  surface: SurfaceData,
  element: ElementData | undefined,
  spectral: SurfaceSpectral | undefined,
): SurfaceDispersion {
  // Air interface — always 1.0.
  if (surface.nd === 1.0) {
    return { fn: () => 1.0, quality: "air" };
  }

  // 1) Catalog Sellmeier — λ-accurate, the highest-fidelity path.
  //    Only trust the catalog when its d-line index agrees with the stored
  //    surface.nd within a transcription tolerance. Lens-data files sometimes
  //    annotate glasses speculatively ("S-LAH79 (OHARA) probable") with stored
  //    nd values that don't match the real catalog glass — in which case the
  //    "probable" tag is wrong and the stored nd should win. Tolerance 5e-3
  //    catches misidentifications while permitting normal transcription rounding.
  if (element?.glass) {
    const entry = resolveGlass(element.glass);
    if (entry) {
      const sellmeierNd = evaluateSellmeier(entry, LINE_NM.d);
      if (Math.abs(sellmeierNd - surface.nd) <= 5e-3) {
        const fn: SurfaceIndexFn = (ch) => evaluateSellmeier(entry, CHANNEL_NM[ch]);
        return { fn, quality: "sellmeier", glassEntry: entry };
      }
      // Catalog match disagrees with surface.nd beyond rounding tolerance —
      // the glass annotation is wrong. Fall through to the next cascade tier.
    }
  }

  // 2) Measured line indices on the element — exact at the listed lines.
  //    Falls back to surface.nd at the d-line (G) and to a partial-dispersion
  //    estimate at the g-line (V) when ng is not measured.
  if (spectral?.nC !== undefined && spectral?.nF !== undefined) {
    const nd = surface.nd;
    const nC = spectral.nC;
    const nF = spectral.nF;
    const ngMeasured = spectral.ng;
    // Resolve V channel: prefer measured ng, otherwise extend from (nC, nF)
    // using the dPgF-corrected partial dispersion. Fall back to nF (zero
    // secondary spectrum) when no dPgF info is present.
    let nVfallback: number;
    if (ngMeasured !== undefined) {
      nVfallback = ngMeasured;
    } else if (element?.vd !== undefined) {
      const PgF = partialDispersionPgF(element.vd, element.dPgF ?? 0);
      nVfallback = nF + PgF * (nF - nC);
    } else {
      nVfallback = nF;
    }
    const fn: SurfaceIndexFn = (ch) => (ch === "R" ? nC : ch === "B" ? nF : ch === "V" ? nVfallback : nd);
    return { fn, quality: "lineIndices" };
  }

  // 3) Abbe approximation — the legacy fallback for elements with only (nd, vd).
  //    The V channel uses Schott's normal-line partial dispersion plus the
  //    element's dPgF (when present). Without dPgF this is the standard
  //    "normal glass" approximation; with dPgF the Phase 1 codemod data
  //    finally influences a visible trace.
  const vd = element?.vd;
  if (vd) {
    const nd = surface.nd;
    const delta = (nd - 1) / (2 * vd);
    const nC = nd - delta;
    const nF = nd + delta;
    const PgF = partialDispersionPgF(vd, element?.dPgF ?? 0);
    const ng = nF + PgF * (nF - nC);
    const fn: SurfaceIndexFn = (ch) => (ch === "R" ? nC : ch === "B" ? nF : ch === "V" ? ng : nd);
    return { fn, quality: "abbe" };
  }

  // 4) No vd at all — return the surface's nd verbatim. Chromatic spread is
  //    zero through this surface, which is the same behavior the legacy
  //    `wavelengthNd(nd, undefined, ch)` returned.
  const nd = surface.nd;
  return { fn: () => nd, quality: "constant" };
}

/**
 * Build a per-surface dispersion table for a runtime lens. Used by
 * `buildLens` to populate `RuntimeLens.indexByIdx`.
 */
export function buildSurfaceDispersionIndex(
  surfaces: SurfaceData[],
  elements: ElementData[],
  spectralByIdx: Record<number, SurfaceSpectral>,
): Record<number, SurfaceDispersion> {
  const elementById = new Map(elements.map((e) => [e.id, e]));
  const out: Record<number, SurfaceDispersion> = {};
  for (let i = 0; i < surfaces.length; i++) {
    const surface = surfaces[i];
    const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
    out[i] = makeSurfaceDispersion(surface, element, spectralByIdx[i]);
  }
  return out;
}

/**
 * Look up the refractive index at a surface for a given chromatic channel.
 * Convenience wrapper that delegates to the pre-resolved closure on the
 * runtime lens. Returns the legacy d-line `nd` if no dispersion entry exists
 * at the requested index (e.g. an out-of-range probe).
 */
export function indexAt(L: RuntimeLens, surfIdx: number, channel: ChromaticChannel | undefined): number {
  const surf = L.S[surfIdx];
  if (!channel) return surf.nd === 1.0 ? 1.0 : surf.nd;
  const entry = L.indexByIdx?.[surfIdx];
  if (!entry) return surf.nd === 1.0 ? 1.0 : surf.nd;
  return entry.fn(channel);
}

/**
 * Aggregate dispersion-quality summary for a whole lens — the "weakest link"
 * across all glass surfaces. Used to flag the LCA readout as approximate when
 * any traced glass lacks richer-than-Abbe data.
 */
export function summarizeDispersionQuality(L: RuntimeLens): DispersionQuality {
  const order: DispersionQuality[] = ["sellmeier", "lineIndices", "abbe", "constant"];
  let worst: DispersionQuality = "sellmeier";
  for (let i = 0; i < L.N; i++) {
    const entry = L.indexByIdx?.[i];
    if (!entry || entry.quality === "air") continue;
    if (order.indexOf(entry.quality) > order.indexOf(worst)) worst = entry.quality;
  }
  return worst;
}
