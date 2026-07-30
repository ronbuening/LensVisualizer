/**
 * Standard spectral lines used by the chromatic engine.
 */

/** Standard spectral-line wavelengths in nanometers. */
export const LINE_NM = {
  /** Hydrogen C line. */
  C: 656.2725,
  /** Cadmium C′ line used with the mercury e reference. */
  CPrime: 643.8469,
  /** Helium d line - reference for nd, vd. */
  d: 587.5618,
  /** Mercury e line - reference for ne, ve. */
  e: 546.074,
  /** Hydrogen F line. */
  F: 486.1327,
  /** Cadmium F′ line used with the mercury e reference. */
  FPrime: 479.9914,
  /** Mercury g line - secondary-spectrum probe. */
  g: 435.8343,
} as const;
