/**
 * Closed-form conic roots — the hit of a ray on a sphere or a polynomial-free conic, from one quadratic.
 *
 * In the vertex frame the base conic of a profile is the quadric
 *
 *   F(X, Y, Z) = c (X² + Y² + κ Z²) − 2 Z = 0,    κ = 1 + K,
 *
 * the curvature form of the conic in Spencer and Murty's general ray-tracing procedure (J. Opt. Soc. Am. 52(6),
 * 672, 1962). It holds no 1/c, so a flat base is the case c = 0. Their procedure first moves the ray to the vertex
 * tangent plane, which fails as the ray turns transverse; here the ray is moved to P, the foot of the perpendicular
 * from the vertex, which serves every direction and keeps the coefficients at the scale of the surface. Along
 * P + τ D the quadric is
 *
 *   a τ² + 2 b τ + g = 0,    a = c (dx² + dy² + κ dz²)
 *                            b = c (px dx + py dy + κ pz dz) − dz
 *                            g = c (px² + py² + κ pz²) − 2 pz
 *
 * and with s = sqrt(b² − a g) and q = −(b + sign(b) s), which adds two terms of one sign, its roots are g / q and
 * q / a. Neither cancels, and g / q survives a = 0 (a paraboloid met along its axis, a flat base).
 *
 * The quadric is more than the sag surface: it has the far half of an ellipsoid and the second sheet of a
 * hyperboloid. On it, w = 1 − κ c Z equals the profile's conic root sqrt(1 − κ c² r²) on the sag surface and its
 * negative on the rest, so the sign of w names the sheet, and |f'(τ)| = s / |w| for the residual
 * f = z_ray − (vertexZ + sag) the contract is stated in.
 *
 * A root is only proposed here. It is accepted by evaluating the profile at it, under the residual the iterative
 * solver uses and at the raw target alone: the roundoff envelope is granted only at a stall, and one evaluation
 * cannot stall. Every doubtful case is handed back with a reason, and `intersect.ts` then runs the iterative path
 * unchanged. A miss is decided from the profile's data alone, so `curvature` and `conic` have to describe the
 * profile's evaluators, as a factory profile's do (`SurfaceProfile`).
 */

import type { SurfaceProfile, Vec3 } from "../types.js";
import type { ClosedFormFallbackReason, SurfaceIntersectionFailure, SurfaceIntersectionSuccess } from "./intersect.js";
import { normalFromSlope } from "./surfaceProfile.js";

/** A span of ray parameters. */
export interface ParameterInterval {
  minT: number;
  maxT: number;
}

/**
 * Smallest |df/dt| per mm of path at which a closed-form root is returned.
 *
 * Two points that both meet the residual target lie up to 2·tolerance/|f'| apart, so a root the iterative path
 * would also find can move by that much. 4e-3 keeps the move within half the 1e-9 mm budget of an unclipped hit
 * (`OPTICS_ENGINE_REWRITE_SPEC.md`, Quantity budgets); below it the iterative path decides, as it did.
 */
const MIN_RESIDUAL_SLOPE = 4e-3;

/**
 * Conic root |w| at or below which a root counts as on the edge of the conic's domain: within 0.05% of the domain
 * radius. The sag slope there is c·r/w, so the evaluated residual carries rounding of about ε|R|/(2w), and whether
 * it reaches the raw target is chance. The iterative path collapses its bracket on such a root and reports the
 * roundoff envelope, which a single evaluation cannot do.
 */
const DOMAIN_EDGE_CONIC_ROOT = 3e-2;

/** One root of the quadric that lies on the sag surface, inside the bounds or within rounding of one. */
interface ConicRoot {
  /** Parameter in the kernel's parameterization, with a root at a bound moved onto it. */
  t: number;
  /** The same parameter as computed. */
  raw: number;
  /** Conic root 1 − κ c Z at the root. */
  w: number;
  /** How near a bound, in t, the root is treated as being at it. */
  slack: number;
}

/**
 * Solve a ray against the base conic of a spherical profile, or of an aspheric one with no polynomial term.
 *
 * The root returned is the one the iterative path selects: the first root on the sag surface inside the bounds in
 * ray order, and on an aspheric profile the first such root inside the cap interval when there is one. Where that
 * path's endpoint captures could select another root, or the answer rests on rounding, a reason is returned and
 * nothing is decided here.
 *
 * @param origin - ray origin in mm
 * @param direction - ray direction as the kernel holds it; `t` is in its parameterization
 * @param profile - spherical profile, or aspheric profile whose `hasPolynomial` is false
 * @param vertexZ - axial vertex position in mm
 * @param minT - lower parametric bound, finite and non-negative
 * @param maxT - upper parametric bound, finite
 * @param tolerance - residual target in mm
 * @param cap - the bounds cut to the authored cap; null on a sphere, or when the ray has no span inside the cap
 * @param refractiveIndex - index of the medium the segment crosses, when the optical path is wanted
 * @returns the hit or the miss, or the reason this solve has to take the iterative path
 */
export function intersectConicClosedForm(
  origin: Vec3,
  direction: Vec3,
  profile: SurfaceProfile,
  vertexZ: number,
  minT: number,
  maxT: number,
  tolerance: number,
  cap: ParameterInterval | null,
  refractiveIndex: number | undefined,
): SurfaceIntersectionSuccess | SurfaceIntersectionFailure | ClosedFormFallbackReason {
  const c = profile.curvature;
  const kappa = 1 + profile.conic;
  const dx = direction[0];
  const dy = direction[1];
  const dz = direction[2];
  const ox = origin[0];
  const oy = origin[1];
  const oz = origin[2] - vertexZ;

  /* Reference point P = O + t0 D, the foot of the perpendicular from the vertex. Solved from the origin instead,
   * the discriminant would lose digits as (c · distance)². */
  const dd = dx * dx + dy * dy + dz * dz;
  const t0 = -(ox * dx + oy * dy + oz * dz) / dd;
  const px = ox + dx * t0;
  const py = oy + dy * t0;
  const pz = oz + dz * t0;

  const a = c * (dx * dx + dy * dy + kappa * dz * dz);
  const b = c * (px * dx + py * dy + kappa * pz * dz) - dz;
  const g = c * (px * px + py * py + kappa * pz * pz) - 2 * pz;
  const discriminant = b * b - a * g;

  /* Rounding of the discriminant, from the sums of the absolute terms of a, b and g. `transfer` is the operand
   * sum of P, whose own rounding (2ε·transfer per coordinate) reaches b and g through their gradients. The
   * first-order error is about 14ε(bSum² + aSum·gSum) plus 4ε of the transfer terms; 16ε covers both. */
  const absC = Math.abs(c);
  const absKappa = Math.abs(kappa);
  const aSum = absC * (dx * dx + dy * dy + absKappa * dz * dz);
  const bSum = absC * (Math.abs(px * dx) + Math.abs(py * dy) + absKappa * Math.abs(pz * dz)) + Math.abs(dz);
  const gSum = absC * (px * px + py * py + absKappa * pz * pz) + 2 * Math.abs(pz);
  const transfer =
    Math.abs(ox) + Math.abs(oy) + Math.abs(oz) + Math.abs(t0) * (Math.abs(dx) + Math.abs(dy) + Math.abs(dz));
  const bTransfer = transfer * absC * (Math.abs(dx) + Math.abs(dy) + absKappa * Math.abs(dz));
  const gTransfer = transfer * (absC * (Math.abs(px) + Math.abs(py) + absKappa * Math.abs(pz)) + 1);
  const discriminantRoundoff = 16 * Number.EPSILON * (bSum * bSum + aSum * gSum + bTransfer * bSum + aSum * gTransfer);

  if (!Number.isFinite(discriminant) || !Number.isFinite(discriminantRoundoff)) return "failedValidation";
  // The sign of the discriminant is inside its rounding: the line is tangent to the quadric as far as floats tell.
  if (Math.abs(discriminant) <= discriminantRoundoff) return "nearTangency";
  if (discriminant < 0) {
    /* The line misses the quadric, and comes nearest it at τ = −b/a, where |F| = |Δ|/|a| and so
     * |f| ≈ |Δ| / (2|a||w|). Within twice the tolerance the iterative scan can accept a sample that touches the
     * surface without crossing it, so a miss is not declared there. A NaN band compares false and falls back. */
    const nearestW = 1 - kappa * c * (pz + (-b / a) * dz);
    const touchBand = 4 * Math.abs(a) * Math.max(1, Math.abs(nearestW)) * tolerance;
    return -discriminant > touchBand ? closedFormMiss() : "nearTangency";
  }

  const s = Math.sqrt(discriminant);
  const q = b < 0 ? s - b : -(b + s);
  // Rounding of each coefficient and of q, which bound how far a computed root is from the real one.
  const aRoundoff = 4 * Number.EPSILON * aSum;
  const gRoundoff = 4 * Number.EPSILON * (gSum + gTransfer);
  const qRoundoff = 4 * Number.EPSILON * (bSum + bTransfer) + discriminantRoundoff / s;
  // Operand sums of a point O + t D, for the rounding of a residual evaluated there.
  const absOz = Math.abs(origin[2]) + Math.abs(vertexZ);
  const absOxy = Math.abs(ox) + Math.abs(oy);
  const absDxy = Math.abs(dx) + Math.abs(dy);

  // Roots on the sag surface, inside the bounds or within rounding of one, in ray order.
  let first: ConicRoot | null = null;
  let second: ConicRoot | null = null;
  for (let index = 0; index < 2; index++) {
    // g / q is the root nearer P and q / a the farther one; a = 0 leaves only the first.
    const far = index === 1;
    const tau = far ? q / a : g / q;
    if (!Number.isFinite(tau)) continue;
    const z = pz + tau * dz;
    const w = 1 - kappa * c * z;
    if (!Number.isFinite(w)) return "failedValidation";
    const atDomainEdge = kappa > 0 && Math.abs(w) <= DOMAIN_EDGE_CONIC_ROOT;
    // A root on the quadric's other half or sheet is no root of the sag, whatever the bounds.
    if (!atDomainEdge && !(w > 0)) continue;

    /* How near a bound, in t, a computed root still belongs to it. Three parts:
     * - the distance over which the residual evaluated at the bound can be accepted: twice the tolerance plus
     *   the rounding of that evaluation, over |f'| = s/|w|. The rounding is the solver's operand envelope with
     *   the radius replaced by the transverse operand sum, which is at least the radius, so it is never too small;
     * - the rounding of the root, from the coefficients';
     * - the rounding of the sum t0 + τ.
     * A slack that cannot be computed is infinite: the root goes to a bound and the evaluation there decides. */
    const raw = t0 + tau;
    const absTransverse = absOxy + absDxy * Math.abs(raw);
    const residualRoundoff =
      16 *
      Number.EPSILON *
      Math.max(
        Math.abs(w),
        (absOz + Math.abs(dz * raw) + Math.abs(z)) * Math.abs(w) + 2 * absC * absTransverse * absTransverse,
      );
    const tauRoundoff = far
      ? (qRoundoff + Math.abs(tau) * aRoundoff) / Math.abs(a)
      : (gRoundoff + Math.abs(tau) * qRoundoff) / Math.abs(q);
    const acceptance = (2 * tolerance * Math.abs(w) + residualRoundoff) / s;
    const computed = acceptance + tauRoundoff + 4 * Number.EPSILON * (Math.abs(t0) + Math.abs(tau));
    const slack = computed >= 0 ? computed : Infinity;

    if (raw < minT - slack || raw > maxT + slack) continue;
    if (atDomainEdge) return "domainEdge";
    /* The iterative path tests the residual at each bound before it looks between them, and returns the bound
     * when that passes. A root this near a bound is therefore proposed at the bound, the lower one first, and
     * the evaluation there decides as it does on that path: the same point, or a fallback. */
    const t = raw <= minT + slack ? minT : raw >= maxT - slack ? maxT : raw;
    const root: ConicRoot = { t, raw, w, slack };
    if (first === null) first = root;
    else if (raw < first.raw) {
      second = first;
      first = root;
    } else second = root;
  }
  if (first === null) return closedFormMiss();

  let selected = first;
  /* With two roots, a later one at the upper bound is returned by the iterative path ahead of the earlier one,
   * because the bounds are tested first. It decides that case itself. */
  if (second !== null && second.t === maxT) return "domainEdge";
  if (cap !== null) {
    /* The cap search tests its own endpoints the same way, so a root within rounding of the cap's rim can be
     * taken as inside the cap or as outside it. */
    const entersAtRim = cap.minT > minT;
    const leavesAtRim = cap.maxT < maxT;
    const atRim = (root: ConicRoot): boolean =>
      (entersAtRim && Math.abs(root.raw - cap.minT) <= root.slack) ||
      (leavesAtRim && Math.abs(root.raw - cap.maxT) <= root.slack);
    if (atRim(first) || (second !== null && atRim(second))) return "domainEdge";
    // Only the cap holds optical material: its first root wins over an earlier root outside it.
    const firstInCap = first.t >= cap.minT && first.t <= cap.maxT;
    if (second !== null && !firstInCap && second.t >= cap.minT && second.t <= cap.maxT) selected = second;
  }

  // |f'| = s / w per unit of t, and per mm of path once divided by |D|.
  const { t, w } = selected;
  if (discriminant < MIN_RESIDUAL_SLOPE * MIN_RESIDUAL_SLOPE * w * w * dd) return "nearTangency";

  /* Validation: the residual of the iterative path, at the point that will be returned, bound included. Beyond
   * its domain radius a conic is no surface, and the profile is not asked. */
  const point: Vec3 = [origin[0] + dx * t, origin[1] + dy * t, origin[2] + dz * t];
  const radius = Math.hypot(point[0], point[1]);
  const domainRadius = profile.finiteRadiusLimit();
  if (domainRadius !== null && radius > domainRadius) return "domainEdge";
  const { sag, slope } = profile.evaluate(radius);
  const residual = point[2] - (vertexZ + sag);
  if (!(Number.isFinite(radius) && Math.abs(residual) <= tolerance)) return "failedValidation";

  return {
    ok: true,
    t,
    point,
    radius,
    // The slope of the same evaluation: bit for bit the normal `profile.normalAt` builds from its own.
    normal: normalFromSlope(point[0], point[1], radius, slope),
    residual,
    effectiveTolerance: tolerance,
    iterations: 0,
    segmentLength: t,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * t,
    closedFormFallback: null,
  };
}

/** No root on the sag surface inside the bounds: the failure the iterative scan reports, with nothing evaluated. */
function closedFormMiss(): SurfaceIntersectionFailure {
  return { ok: false, failureReason: "noBracket", residual: null, iterations: 0, closedFormFallback: null };
}
