/**
 * Thick-lens focal length — Gullstrand thick-lens equation in air.
 *
 * Computes Gaussian focal length from two bounding surface radii, centre thickness,
 * and medium index in air at the reference line.
 */

import { FLAT_R_THRESHOLD } from "../geometry/surfaceProfile.js";
import type { ElementData, RuntimeLens } from "../../types/optics.js";

/**
 * Compute the thick-lens focal length of a single lens element in air.
 *
 * Uses the Gullstrand thick-lens formula:
 *   phi1 = (n - 1) / R1
 *   phi2 = (1 - n) / R2
 *   phi  = phi1 + phi2 - (d / n) * phi1 * phi2
 *   f    = 1 / phi
 *
 * Flat surfaces (|R| >= FLAT_R_THRESHOLD or "flat") have zero optical power.
 * Zero-power systems (e.g. plane-parallel plates) return Infinity.
 *
 * @param r1 - front surface radius in mm, or "flat"
 * @param r2 - rear surface radius in mm, or "flat"
 * @param d  - axial centre thickness in mm
 * @param n  - refractive index of the element medium at the reference line
 * @returns thick-lens focal length in mm, or Infinity when total power is zero
 */
export function thickLensFocalLength(r1: number | "flat", r2: number | "flat", d: number, n: number): number {
  const phi1 = r1 === "flat" || Math.abs(r1) >= FLAT_R_THRESHOLD ? 0 : (n - 1) / r1;
  const phi2 = r2 === "flat" || Math.abs(r2) >= FLAT_R_THRESHOLD ? 0 : (1 - n) / r2;
  const phi = phi1 + phi2 - (d / n) * phi1 * phi2;

  if (Math.abs(phi) < 1e-15) return Infinity;
  return 1 / phi;
}

/**
 * Compute the thick-lens focal length for one runtime lens element.
 *
 * Resolves the element's bounding surfaces from `L.ES`, accumulates axial centre
 * thickness across intermediate surfaces (e.g. embedded stops), and uses the front
 * surface's authored `nd`, matching monochromatic tracing at the reference line
 * (helium d, or mercury e when the element's `indexReference` is `"e"`).
 *
 * @param element - element metadata record
 * @param L - runtime lens containing surfaces and element spans
 * @returns thick-lens focal length in mm, or null if element span is unresolved
 */
export function computeElementFocalLength(element: ElementData, L: RuntimeLens): number | null {
  const span = L.ES?.find(([id]) => id === element.id);
  if (!span) return null;
  const [, s1, s2] = span;
  if (s1 < 0 || s2 >= L.S.length || s1 >= s2) return null;

  let d = 0;
  for (let j = s1; j < s2; j++) {
    d += L.S[j].d;
  }

  const r1 = L.S[s1].R;
  const r2 = L.S[s2].R;
  const n = L.S[s1].nd;

  return thickLensFocalLength(r1, r2, d, n);
}
