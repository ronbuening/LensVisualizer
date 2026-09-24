/**
 * Shared MTF numerical contracts: sampling ladder, convergence band, request limits, and
 * scalar-diffraction validity gates.
 *
 * Option validation, the engine, and user-facing messages all read these values so text and
 * behavior cannot drift apart.
 */

import type { MtfGridCap } from "../../types/mtf.js";

/** Pupil-grid refinement ladder; geometric runs start at 16, scalar diffraction at 32. */
export const MTF_GRID_LADDER = Object.freeze([16, 32, 64, 128, 256] as const);

/** Grid sizes a request may cap refinement at. */
export const MTF_GRID_CAPS: readonly MtfGridCap[] = Object.freeze([32, 64, 128, 256]);
export const MTF_DEFAULT_GRID_CAP: MtfGridCap = 128;

/** Absolute MTF change between successive grids that counts as converged. */
export const MTF_CONVERGENCE_TOLERANCE = 0.01;

/**
 * Convergence is judged at and below this frequency. Above it a sampled geometric sum is
 * dominated by aliasing noise at low contrast, so demanding stability there forces 4x grids
 * without improving the curves photographic charts report (10-50 lp/mm).
 */
export const MTF_CONVERGENCE_BAND_LPMM = 50;

/** Largest field list a request may carry: 1 % steps from center to corner. */
export const MTF_MAX_FIELDS = 101;
export const MTF_MAX_FREQUENCIES = 501;
export const MTF_MAX_FREQUENCY_LPMM = 1000;

/** Fewer transmitted rays than this cannot represent a pupil. */
export const MTF_MIN_RAYS = 16;

/**
 * Largest share of a field's launch flux that may belong to rays the tracer cannot resolve.
 * Omitting flux ε changes a normalized geometric OTF by at most 2ε, so this bounds the
 * induced error at 0.01, the convergence tolerance.
 */
export const MTF_MAX_UNKNOWN_FLUX = 0.005;

/** Conservative scalar-diffraction suitability limits; see agent_docs/architecture/optics-engine.md. */
export const MTF_DIFFRACTION_LIMITS = Object.freeze({
  maxChiefIncidenceDeg: 15,
  maxConeDirectionCosine: 0.25,
  maxBlurToReferenceRadius: 0.02,
  maxPhaseStepWaves: 0.25,
});

/** Transmitted rays inside a footprint's guard band widen it and retrace, at most this many times per field. */
export const MTF_MAX_FOOTPRINT_EXPANSIONS = 2;

/** Frequencies scored by the axial best-focus search, in lp/mm. */
export const MTF_FOCUS_FREQUENCIES: readonly number[] = Object.freeze([10, 20, 30, 40, 50]);

/** Pupil grid of the axial bundle traced once per request for the best-focus search. */
export const MTF_FOCUS_GRID = 64;

/** Default image-space frequencies: 0-100 lp/mm in 2 lp/mm steps. */
export const MTF_FREQUENCIES: readonly number[] = Object.freeze(Array.from({ length: 51 }, (_, i) => i * 2));

/** Default fractions of the reference image height. */
export const MTF_FIELDS: readonly number[] = Object.freeze([0, 0.25, 0.5, 0.75, 1]);

/** Format a tolerance for user-facing convergence messages. */
export function formatMtfTolerance(value = MTF_CONVERGENCE_TOLERANCE): string {
  return value.toFixed(2);
}
