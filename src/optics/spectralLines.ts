/**
 * Standard spectral lines used by the chromatic engine.
 */

/** Standard spectral-line wavelengths in nanometers. */
export const LINE_NM = {
  /** Hydrogen C line. */
  C: 656.2725,
  /** Helium d line - reference for nd, vd. */
  d: 587.5618,
  /** Hydrogen F line. */
  F: 486.1327,
  /** Mercury g line - secondary-spectrum probe. */
  g: 435.8343,
} as const;
