/**
 * MTF analysis — diffraction-limited modulation-transfer-function curves
 * for the current lens state.
 *
 * The computation is the ideal-aberration-free MTF determined by the
 * pupil shape and aperture. For ordinary refractive lenses the pupil is
 * a solid circle and the curve is the standard Airy MTF. For catadioptric
 * lenses with `L.EP.epObstructionSD > 0` the pupil is an annulus and the
 * curve picks up the characteristic mid-frequency suppression that gives
 * mirror telephotos their lower-contrast look at moderate spatial
 * frequencies.
 *
 * Three wavelengths are sampled (Fraunhofer C, d, F lines) so the chart
 * can illustrate the chromatic shift of the cutoff frequency. Per-lens
 * aberrations (spherical, coma, astigmatism, defocus) are NOT folded into
 * this MTF yet — that's a separate compute path (PSF → FFT → OTF) and
 * lands in a follow-up. The diffraction limit is the *upper bound* on
 * what any lens can achieve at a given aperture; for well-corrected
 * lenses near their best aperture the real MTF is close to this curve.
 */

import { annularAiryMTF, circularAiryMTF } from "./aberration/diffractionMTF.js";
import type { RuntimeLens } from "../types/optics.js";

/** Wavelengths used for the three plotted curves (millimetres). */
export const MTF_WAVELENGTHS_MM = {
  /** Fraunhofer F line (blue, 486.1 nm). */
  blue: 486.1e-6,
  /** Fraunhofer d line (green, 587.6 nm). Matches `nd` and `vd` data. */
  green: 587.6e-6,
  /** Fraunhofer C line (red, 656.3 nm). */
  red: 656.3e-6,
} as const;

export type MTFChannel = "blue" | "green" | "red";

export interface MTFCurve {
  channel: MTFChannel;
  /** Wavelength in mm. */
  wavelengthMm: number;
  /** Cutoff frequency in cycles per mm: `nu_c = 1 / (lambda · F#)`. */
  cutoffCyclesPerMm: number;
  /** [frequency_in_cycles_per_mm, MTF] pairs, monotonically increasing in frequency. */
  samples: Array<[number, number]>;
}

export interface MTFCurveSet {
  /** F-number at which the curves were computed. */
  fNumber: number;
  /** Obstruction ratio (epOuter ÷ epOuter), 0 for a solid pupil. */
  obstructionRatio: number;
  /** Maximum cycles-per-mm covered across the three channels (= red cutoff). */
  maxCyclesPerMm: number;
  curves: MTFCurve[];
}

/** Number of frequency samples per curve. Higher = smoother plot. */
const FREQUENCY_SAMPLE_COUNT = 64;

/**
 * Compute diffraction-limited MTF curves for the current lens state.
 *
 * Returns one curve per channel (R/G/B). The curves run from DC (frequency 0,
 * MTF = 1) to the diffraction cutoff of the longest wavelength (red line) so
 * all three curves share the same x-axis.
 *
 * @param L              Runtime lens object (only `L.EP.epSD` and
 *                       `L.EP.epObstructionSD` are read for the pupil shape).
 * @param fNumber        Current working F-number (after stop-down).
 */
export function computeMTFCurves(L: RuntimeLens, fNumber: number): MTFCurveSet | null {
  if (!isFinite(fNumber) || fNumber <= 0) return null;
  const epOuter = L.EP.epSD;
  if (!isFinite(epOuter) || epOuter <= 0) return null;
  const obstructionRatio = epOuter > 0 ? Math.min(0.95, Math.max(0, (L.EP.epObstructionSD ?? 0) / epOuter)) : 0;

  const curves: MTFCurve[] = [];
  let maxCyclesPerMm = 0;
  for (const channel of ["red", "green", "blue"] as const) {
    const lambdaMm = MTF_WAVELENGTHS_MM[channel];
    const cutoff = 1 / (lambdaMm * fNumber);
    if (cutoff > maxCyclesPerMm) maxCyclesPerMm = cutoff;
  }

  for (const channel of ["red", "green", "blue"] as const) {
    const lambdaMm = MTF_WAVELENGTHS_MM[channel];
    const cutoff = 1 / (lambdaMm * fNumber);
    const samples: Array<[number, number]> = [];
    for (let i = 0; i <= FREQUENCY_SAMPLE_COUNT; i++) {
      /* X axis runs from 0 to the red-line cutoff so all three curves share
       * the same domain. Frequencies past the channel's own cutoff get MTF = 0. */
      const cyclesPerMm = (maxCyclesPerMm * i) / FREQUENCY_SAMPLE_COUNT;
      const nu = cyclesPerMm / cutoff;
      const mtf =
        obstructionRatio > 0 && obstructionRatio < 1 ? annularAiryMTF(nu, obstructionRatio) : circularAiryMTF(nu);
      samples.push([cyclesPerMm, mtf]);
    }
    curves.push({
      channel,
      wavelengthMm: lambdaMm,
      cutoffCyclesPerMm: cutoff,
      samples,
    });
  }

  return { fNumber, obstructionRatio, maxCyclesPerMm, curves };
}
