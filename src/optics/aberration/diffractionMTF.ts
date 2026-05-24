/**
 * Diffraction-limited MTF utilities for circular and annular apertures.
 *
 * For aberration-free systems (the diffraction limit), the modulation
 * transfer function of an aperture is fully determined by the pupil shape.
 * A solid circular pupil produces the well-known Airy MTF; an annular pupil
 * (with a central obstruction) produces an MTF with reduced mid-frequency
 * response and a characteristic ringing — the visual signature of a mirror
 * telephoto's MTF curve.
 *
 * These pure functions are exposed for future analysis-tab integration. The
 * current MTFDiagram component is a schematic APO/non-APO illustration and
 * does not yet feed lens-specific MTF computation; when it does, it can use
 * `circularAiryMTF` and `annularAiryMTF` directly.
 *
 * References:
 *   - Born & Wolf, "Principles of Optics," §8.6.2 (annular aperture).
 *   - Wetherell, in "Applied Optics and Optical Engineering," vol. VIII,
 *     Ch. 6 (modulation transfer function with central obstruction).
 *
 * All functions return MTF in the range [0, 1]. Frequencies are normalized
 * by the diffraction cutoff `nu_c = 1 / (lambda * F#)` (or equivalently
 * 2 NA / lambda for an imaging system).
 */

/**
 * Diffraction-limited MTF of an unobstructed circular aperture.
 *
 * `nu` is the normalized spatial frequency in [0, 1], where 1 corresponds
 * to the diffraction cutoff. Returns 0 above the cutoff.
 *
 * Formula: `M(s) = (2/π)·(acos(s) − s·√(1 − s²))` for `s ≤ 1`.
 */
export function circularAiryMTF(nu: number): number {
  if (!isFinite(nu) || nu <= 0) return 1;
  if (nu >= 1) return 0;
  return (2 / Math.PI) * (Math.acos(nu) - nu * Math.sqrt(1 - nu * nu));
}

/**
 * Diffraction-limited MTF of an annular aperture with obstruction ratio
 * `epsilon = rInner/rOuter`. When `epsilon = 0` this reduces to the
 * standard circular Airy MTF.
 *
 * The annular MTF is:
 *
 *     M(s) = [A(s, 1) − ε² · A(s, ε) − 2·B(s, ε)] / (1 − ε²)
 *
 * where
 *
 *     A(s, R) = (2/π) · (acos(s/R) − (s/R) · √(1 − (s/R)²)) · H(R − s)
 *
 * is the autocorrelation of the unit-radius circle scaled by R, and
 * `B(s, ε)` is the cross-correlation between the inner and outer circles —
 * which has a piecewise closed form documented in Wetherell.
 *
 * For the on-axis monochromatic MTF (the diffraction-limit envelope) this
 * implementation evaluates the closed-form integral numerically with a
 * 1024-point trapezoidal rule across the convolution domain. The result is
 * dominated by the closed-form circle terms; the cross-term integral
 * converges quickly because the integrand vanishes at both ends.
 */
export function annularAiryMTF(nu: number, epsilon: number): number {
  if (!isFinite(nu) || nu < 0) return 1;
  if (nu >= 1) return 0;
  if (epsilon <= 0) return circularAiryMTF(nu);
  if (epsilon >= 1) return 0;

  const denom = 1 - epsilon * epsilon;

  /* A(s, 1): autocorrelation of the unit-radius outer circle. */
  const aOuter = circularAiryMTF(nu);

  /* A(s, ε): autocorrelation of the inner (obstruction) circle. Equals the
   * Airy form scaled so the cutoff is at s = ε rather than 1. */
  const aInner = nu < epsilon ? circularAiryMTF(nu / epsilon) : 0;

  /* B(s, ε): cross-correlation between the outer and inner circles. This is
   * the convolution integral that gives the annular MTF its characteristic
   * ringing. Numerical integration is used to avoid the piecewise
   * closed-form expressions (which are tabulated in §6 of Wetherell). */
  const N = 1024;
  let cross = 0;
  for (let i = 1; i < N; i++) {
    const x = (i / N) * (1 + epsilon) * 0.5;
    const inOuter = x <= 1 - nu / 2;
    const inInner = x <= epsilon - nu / 2;
    if (!inOuter || inInner) continue;
    const term =
      Math.sqrt(Math.max(0, 1 - (x + nu / 2) * (x + nu / 2))) *
        Math.sqrt(Math.max(0, 1 - (x - nu / 2) * (x - nu / 2))) -
      Math.sqrt(Math.max(0, epsilon * epsilon - (x + nu / 2) * (x + nu / 2))) *
        Math.sqrt(Math.max(0, epsilon * epsilon - (x - nu / 2) * (x - nu / 2)));
    cross += term;
  }
  cross *= (1 + epsilon) / N / Math.PI;

  return Math.max(0, Math.min(1, (aOuter - epsilon * epsilon * aInner - 2 * cross) / denom));
}
