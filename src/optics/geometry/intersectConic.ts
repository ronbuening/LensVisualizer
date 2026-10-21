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
 * negative on the rest, so the sign of w names the sheet. Off it, at the radius of a point where the conic root is
 * w, F = f (κ c f − 2 w) for the residual f = z_ray − (vertexZ + sag) the contract is stated in, so |F| is 2|w||f|
 * near the surface and |f'(τ)| = s / |w| at a root.
 *
 * A root is only proposed here. It is accepted by evaluating the profile at it, under the residual the iterative
 * solver uses and at the raw target alone: the roundoff envelope is granted only at a stall, and one evaluation
 * cannot stall. Every doubtful case is handed back with a reason, and `intersect.ts` then runs the iterative path
 * with a turning-point bracket for near tangency and a sampled bracket otherwise. A miss is decided from the
 * profile's data alone, so `curvature` and `conic` have to describe its evaluators, as a factory profile's do
 * (`SurfaceProfile`). At the edge of an ellipsoid's domain they do not, because an aspheric profile floors the
 * conic root it evaluates (`surfaceProfile.ts`), and nothing is decided there.
 *
 * `baseConicRoot` gives the same quadratic's root with none of that: it is where the solve of a polynomial asphere
 * starts (`seedAsphereSolve` in `intersect.ts`), and that solve has an acceptance of its own.
 */

import { INTERSECTION_BRACKET_SAMPLES, INTERSECTION_TOLERANCE, VECTOR_EPSILON } from "../math/constants.js";
import type { SurfaceProfile, Vec3 } from "../types.js";
import type {
  ClosedFormFallbackReason,
  ParameterInterval,
  SurfaceIntersectionFailure,
  SurfaceIntersectionSuccess,
} from "./intersectTypes.js";
import { normalFromSlope } from "./surfaceProfile.js";

/**
 * Farthest, in mm along the ray, that the point the iterative path stops on may lie from a point that is returned
 * in its place, a closed-form root or the point of the conic-seeded route (`intersect.ts`): half the hit reference tolerance
 * defined in agent_docs/architecture/optics-engine.md (Exact Surface Trace), independent of residual acceptance.
 *
 * Two points whose evaluated residuals both meet the shipped target lie up to twice that target, plus the rounding
 * of an evaluation, over |f'| apart, so a root that path would also find can move by that much. At the coordinates
 * of a lens that is 2e-12 mm / |f'|, which makes this a floor of 4e-3 per mm on |f'|; far from the origin of
 * coordinates the rounding raises it. Under it the iterative path decides, as it did.
 */
export const MAX_ROOT_MOVE = 5e-10;

/**
 * Most that the unit normal may differ between those two points: half the unit-normal reference tolerance
 * defined in agent_docs/architecture/optics-engine.md (Exact Surface Trace).
 *
 * The normal turns along the ray at the rate the surface curves, so this limit binds before the one above where
 * the surface is strongly curved: on a sphere, once |R| is under 10 mm. There it is a floor of 4e-2 mm times
 * that rate on |f'|.
 */
export const MAX_NORMAL_MOVE = 5e-11;

/**
 * Conic root |w| at or below which a point counts as on the edge of the conic's domain: within 0.05% of the domain
 * radius. Two things make the iterative path's answer there its own:
 *
 * - The sag slope is c·r/w, so the evaluated residual carries rounding of about ε|R|/(2w), and whether it reaches
 *   the raw target is chance. That path collapses its bracket on such a root and reports the roundoff envelope,
 *   which a single evaluation cannot do.
 * - At the domain radius itself an aspheric profile floors its conic root, so the sag it evaluates is off the
 *   quadric, and that path can accept, or bracket on, a point that is no root of the quadratic.
 */
const DOMAIN_EDGE_CONIC_ROOT = 3e-2;

/** One root of the quadric that lies on the sag surface, inside the bounds or within rounding of one. */
interface ConicRoot {
  /** Parameter in the kernel's parameterization, with a root at a bound moved onto it. */
  t: number;
  /** The same parameter as computed. */
  raw: number;
  /** Axial coordinate of the root in the vertex frame, in mm. */
  z: number;
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
 * path's captures of the points it tests could select another root, or the answer rests on rounding, a reason is
 * returned and nothing is decided here.
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
  const transverse2 = dx * dx + dy * dy;
  const dd = transverse2 + dz * dz;
  const t0 = -(ox * dx + oy * dy + oz * dz) / dd;
  const px = ox + dx * t0;
  const py = oy + dy * t0;
  const pz = oz + dz * t0;

  const a = c * (transverse2 + kappa * dz * dz);
  const b = c * (px * dx + py * dy + kappa * pz * dz) - dz;
  const g = c * (px * px + py * py + kappa * pz * pz) - 2 * pz;
  const discriminant = b * b - a * g;

  /* Rounding of the discriminant, from the sums of the absolute terms of a, b and g. `transfer` is the operand
   * sum of P, whose own rounding (2ε·transfer per coordinate) reaches b and g through their gradients. The
   * first-order error is about 14ε(bSum² + aSum·gSum) plus 4ε of the transfer terms; 16ε covers both. */
  const absC = Math.abs(c);
  const absKappa = Math.abs(kappa);
  const aSum = absC * (transverse2 + absKappa * dz * dz);
  const bSum = absC * (Math.abs(px * dx) + Math.abs(py * dy) + absKappa * Math.abs(pz * dz)) + Math.abs(dz);
  const gSum = absC * (px * px + py * py + absKappa * pz * pz) + 2 * Math.abs(pz);
  const transfer =
    Math.abs(ox) + Math.abs(oy) + Math.abs(oz) + Math.abs(t0) * (Math.abs(dx) + Math.abs(dy) + Math.abs(dz));
  const bTransfer = transfer * absC * (Math.abs(dx) + Math.abs(dy) + absKappa * Math.abs(dz));
  const gTransfer = transfer * (absC * (Math.abs(px) + Math.abs(py) + absKappa * Math.abs(pz)) + 1);
  const discriminantRoundoff = 16 * Number.EPSILON * (bSum * bSum + aSum * gSum + bTransfer * bSum + aSum * gTransfer);

  // Operand sums of a point O + t D, for the rounding of a residual evaluated there.
  const absOz = Math.abs(origin[2]) + Math.abs(vertexZ);
  const absOxy = Math.abs(ox) + Math.abs(oy);
  const absDxy = Math.abs(dx) + Math.abs(dy);

  if (!Number.isFinite(discriminant) || !Number.isFinite(discriminantRoundoff)) return "failedValidation";
  // The sign of the discriminant is inside its rounding: the line is tangent to the quadric as far as floats tell.
  if (Math.abs(discriminant) <= discriminantRoundoff) return "nearTangency";
  if (discriminant < 0) {
    /* The line misses the quadric, and comes nearest it at τ = −b/a, where |F| = |Δ|/|a|. The iterative scan can
     * still accept a sample that touches the surface without crossing it: one whose evaluated residual is within
     * the tolerance, so whose real residual is within the tolerance plus the rounding of that evaluation, and
     * whose |F| is 2|w| times that. A miss is declared only beyond twice that, with |w| taken as at least 1. A
     * NaN band compares false and falls back. */
    const tau = -b / a;
    const z = pz + tau * dz;
    const w = 1 - kappa * c * z;
    const absTransverse = absOxy + absDxy * Math.abs(t0 + tau);
    const roundoff = scaledResidualRoundoff(
      absOz + Math.abs(dz * (t0 + tau)) + Math.abs(z),
      2 * absC * absTransverse * absTransverse,
      w,
    );
    const touchBand = 4 * Math.abs(a) * (Math.max(1, Math.abs(w)) * tolerance + roundoff);
    if (!(-discriminant > touchBand)) return "nearTangency";
    if (kappa > 0 && Math.abs(w) <= DOMAIN_EDGE_CONIC_ROOT) {
      /* Beside the edge of an ellipsoid's domain a miss needs a wider margin: the sag evaluated at the domain
       * radius is off the quadric, and the scan can accept a point there. Such a point has an |F| far inside
       * that of a conic root of `DOMAIN_EDGE_CONIC_ROOT` at the domain radius, which is w²/(κ|c|). */
      const edgeBand = (Math.abs(a) * DOMAIN_EDGE_CONIC_ROOT * DOMAIN_EDGE_CONIC_ROOT) / (kappa * absC);
      if (!(-discriminant > edgeBand)) return "domainEdge";
    }
    return closedFormMiss();
  }

  const s = Math.sqrt(discriminant);
  const q = b < 0 ? s - b : -(b + s);
  // Rounding of each coefficient and of q, which bound how far a computed root is from the real one.
  const aRoundoff = 4 * Number.EPSILON * aSum;
  const gRoundoff = 4 * Number.EPSILON * (gSum + gTransfer);
  const qRoundoff = 4 * Number.EPSILON * (bSum + bTransfer) + discriminantRoundoff / s;

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
     *   the rounding of that evaluation, over |f'| = s/|w|;
     * - the rounding of the root, from the coefficients';
     * - the rounding of the sum t0 + τ.
     * A slack that cannot be computed is infinite: the root goes to a bound and the evaluation there decides. */
    const raw = t0 + tau;
    const absTransverse = absOxy + absDxy * Math.abs(raw);
    const roundoff = scaledResidualRoundoff(
      absOz + Math.abs(dz * raw) + Math.abs(z),
      2 * absC * absTransverse * absTransverse,
      w,
    );
    const tauRoundoff = far
      ? (qRoundoff + Math.abs(tau) * aRoundoff) / Math.abs(a)
      : (gRoundoff + Math.abs(tau) * qRoundoff) / Math.abs(q);
    const acceptance = (2 * tolerance * Math.abs(w) + roundoff) / s;
    const computed = acceptance + tauRoundoff + 4 * Number.EPSILON * (Math.abs(t0) + Math.abs(tau));
    const slack = computed >= 0 ? computed : Infinity;

    if (atDomainEdge) {
      /* The iterative path's own answer can lie anywhere from this root out to the domain radius, where the
       * floored sag is, so the root counts as inside the bounds when any of that stretch of the ray is. With
       * r·dr/dt = x dx + y dy at the root, where R_d² − r² = w²/(κc²) on the quadric, the ray reaches the domain
       * radius after gap / (|r·dr/dt| + sqrt((r·dr/dt)² + |D_xy|² gap)); twice that is allowed. A ray that
       * never reaches it gives no number, and the root then counts as inside. */
      const radialRate = Math.abs((px + tau * dx) * dx + (py + tau * dy) * dy);
      const gap = (w * w) / (kappa * c * c);
      const toDomainRadius = gap / (radialRate + Math.sqrt(radialRate * radialRate + transverse2 * gap));
      const reach = toDomainRadius >= 0 ? slack + 2 * toDomainRadius : Infinity;
      if (raw < minT - reach || raw > maxT + reach) continue;
      return "domainEdge";
    }
    if (raw < minT - slack || raw > maxT + slack) continue;
    /* The iterative path tests the residual at each bound before it looks between them, and returns the bound
     * when that passes. A root this near a bound is therefore proposed at the bound, the lower one first, and
     * the evaluation there decides as it does on that path: the same point, or a fallback. */
    const t = raw <= minT + slack ? minT : raw >= maxT - slack ? maxT : raw;
    const root: ConicRoot = { t, raw, z, w, slack };
    if (first === null) first = root;
    else if (raw < first.raw) {
      second = first;
      first = root;
    } else second = root;
  }
  if (first === null) return closedFormMiss();

  let selected = first;
  if (second !== null) {
    /* The iterative path tests its upper bound, and then each sample of its scan in turn, before it looks for a
     * sign change. A later root on one of those points is returned ahead of the earlier root: at the bound
     * always, and on a sample when no sample separates the two. The cap search scans the cap interval the same
     * way, and a later root on that interval's far end is on the upper bound or on the cap's rim. That path
     * decides all of these. */
    if (second.t === maxT || onScanSample(second, minT, maxT)) return "domainEdge";
    if (cap !== null && onScanSample(second, cap.minT, cap.maxT)) return "domainEdge";
  }
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

  /* Validation: the residual of the iterative path, at the point that will be returned, bound included. Beyond
   * its domain radius a conic is no surface, and the profile is not asked: a root moved onto a bound by a slack
   * as wide as the rim is the one case that gets there. */
  const { t, z, w } = selected;
  const point: Vec3 = [origin[0] + dx * t, origin[1] + dy * t, origin[2] + dz * t];
  const radius = Math.hypot(point[0], point[1]);
  const domainRadius = profile.finiteRadiusLimit();
  if (domainRadius !== null && radius > domainRadius) return "domainEdge";
  const { sag, slope } = profile.evaluate(radius);
  const residual = point[2] - (vertexZ + sag);
  if (!(Number.isFinite(radius) && Math.abs(residual) <= tolerance)) return "failedValidation";

  /* How far from this point, in t, the iterative path's own can be (`MAX_ROOT_MOVE`): twice the shipped target
   * plus the rounding of an evaluation, here with the point's radius, over |f'| = s / |w|. Squared, to compare
   * without a root; a mm of path is 1 / |D| of t. */
  const roundoff = scaledResidualRoundoff(
    absOz + Math.abs(dz * t) + Math.abs(z),
    2 * absC * radius * (absOxy + absDxy * Math.abs(t)),
    w,
  );
  const numerator = 2 * INTERSECTION_TOLERANCE * Math.abs(w) + roundoff;
  const move2 = (numerator * numerator) / discriminant;
  if (move2 * dd > MAX_ROOT_MOVE * MAX_ROOT_MOVE) return "nearTangency";
  /* The two points are |D_xy| times that far apart in radius, and per mm of radius the unit normal of a conic
   * turns by |c| / (|w| q) in the meridional plane and by |c| / sqrt(q) about the axis, with
   * q = w² + c²r² = w² + c z (1 + w) on the quadric. Both are within |c| max(1, 1 / (|w| q)). */
  const normalTurn = absC * Math.max(1, 1 / (Math.abs(w) * (w * w + c * z * (1 + w))));
  if (move2 * transverse2 * normalTurn * normalTurn > MAX_NORMAL_MOVE * MAX_NORMAL_MOVE) return "nearTangency";

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

/**
 * First root of a ray on the base conic's sag sheet inside an interval of ray parameters: a starting point for a
 * solve on the profile that conic is the base of, never an answer.
 *
 * It is the quadratic of `intersectConicClosedForm`, the same expressions in the same order, so on a
 * polynomial-free conic it is that function's root bit for bit wherever that root is not moved onto a bound.
 * None of the closed form's rounding is bounded here: a root within rounding of an end of the interval, of
 * tangency or of the other sheet is taken or left as the floats fall, and the caller's own acceptance decides.
 * On a flat base the root is the vertex-plane crossing in the iterative path's own expression, the float that path
 * starts its Newton iteration from.
 *
 * @param origin - ray origin in mm
 * @param direction - ray direction as the kernel holds it; `t` is in its parameterization
 * @param curvature - base curvature in 1/mm, 0 for a flat base
 * @param conic - conic constant K
 * @param vertexZ - axial vertex position in mm
 * @param lo - lower end of the interval
 * @param hi - upper end of the interval
 * @returns the root's parameter and the conic's sag there in mm, or null with no such root inside the interval
 */
export function baseConicRoot(
  origin: Vec3,
  direction: Vec3,
  curvature: number,
  conic: number,
  vertexZ: number,
  lo: number,
  hi: number,
): { t: number; sag: number } | null {
  const dx = direction[0];
  const dy = direction[1];
  const dz = direction[2];
  if (curvature === 0) {
    const t = Math.abs(dz) > VECTOR_EPSILON ? (vertexZ - origin[2]) / dz : NaN;
    return t >= lo && t <= hi ? { t, sag: 0 } : null;
  }
  const c = curvature;
  const kappa = 1 + conic;
  const ox = origin[0];
  const oy = origin[1];
  const oz = origin[2] - vertexZ;

  const transverse2 = dx * dx + dy * dy;
  const dd = transverse2 + dz * dz;
  const t0 = -(ox * dx + oy * dy + oz * dz) / dd;
  const px = ox + dx * t0;
  const py = oy + dy * t0;
  const pz = oz + dz * t0;

  const a = c * (transverse2 + kappa * dz * dz);
  const b = c * (px * dx + py * dy + kappa * pz * dz) - dz;
  const g = c * (px * px + py * py + kappa * pz * pz) - 2 * pz;
  const discriminant = b * b - a * g;
  // A NaN discriminant compares false too: no root is proposed from coefficients that are not finite.
  if (!(discriminant >= 0)) return null;

  const s = Math.sqrt(discriminant);
  const q = b < 0 ? s - b : -(b + s);
  let first: { t: number; sag: number } | null = null;
  for (let index = 0; index < 2; index++) {
    const tau = index === 1 ? q / a : g / q;
    if (!Number.isFinite(tau)) continue;
    const z = pz + tau * dz;
    // The sign of the conic root names the sheet, as in the closed form.
    if (!(1 - kappa * c * z > 0)) continue;
    const t = t0 + tau;
    if (t >= lo && t <= hi && (first === null || t < first.t)) first = { t, sag: z };
  }
  return first;
}

/**
 * Rounding of the residual the iterative path evaluates at a point of the ray, times the conic root |w| there.
 *
 * It is that path's operand envelope (`sagResidualRoundoff`) with the sag slope written as |c| r / |w|. Its slope
 * term is then |c| r (r + transverse operand sum), which is within twice |c| r times that sum. A caller without
 * the radius passes the sum in its place: it is at least the radius, so the result is never too small.
 *
 * @param axialOperands - |origin z| + |dz t| + |vertexZ| + |z in the vertex frame|, in mm
 * @param slopeOperands - 2 |c| r times the transverse operand sum |origin x| + |dx t| + |origin y| + |dy t|, in mm
 * @param w - conic root 1 − κ c z at the point
 * @returns the rounding in mm, scaled by |w|
 */
function scaledResidualRoundoff(axialOperands: number, slopeOperands: number, w: number): number {
  const absW = Math.abs(w);
  return 16 * Number.EPSILON * Math.max(absW, axialOperands * absW + slopeOperands);
}

/**
 * Whether a sample of the iterative path's bracket scan, between the ends of the scanned interval, lies within a
 * root's slack of it. The ends have rules of their own.
 *
 * @param root - root of the quadric on the sag surface
 * @param minT - lower end of the scanned interval
 * @param maxT - upper end of the scanned interval
 * @returns true when the scan can accept one of its interior samples as this root
 */
function onScanSample(root: ConicRoot, minT: number, maxT: number): boolean {
  const index = Math.round(((root.raw - minT) * INTERSECTION_BRACKET_SAMPLES) / (maxT - minT));
  if (!(index >= 1 && index < INTERSECTION_BRACKET_SAMPLES)) return false;
  // The scan's own expression for the sample.
  const sample = minT + ((maxT - minT) * index) / INTERSECTION_BRACKET_SAMPLES;
  return Math.abs(sample - root.raw) <= root.slack;
}

/** No root on the sag surface inside the bounds: the failure the iterative scan reports, with nothing evaluated. */
function closedFormMiss(): SurfaceIntersectionFailure {
  return { ok: false, failureReason: "noBracket", residual: null, iterations: 0, closedFormFallback: null };
}
