/**
 * MTF ray classification — separates physical clipping from rays the tracer could not resolve.
 *
 * A pupil sample that misses a clear aperture carries no flux, but an unresolved intersection
 * inside the aperture silently removes real flux. The miss proofs here are independent of the
 * trace solver: analytic for flat and spherical caps, and a Lipschitz-bounded interval test
 * for conic/polynomial aspheres. Anything unproven stays "failed" so the caller can bound its
 * effect on the OTF.
 */
import type { EngineTraceResult } from "../trace/types.js";
import type { CompiledStateSurface, PreparedOpticalState, Vec3 } from "../types.js";
import { evaluateAperture } from "../trace/aperture.js";

export type MtfRayClass = "valid" | "blocked" | "failed";

/** Radial samples used to bound an asphere's sag and slope over its clear aperture. */
const PROFILE_SAMPLES = 256;
/** Safety factor on the sampled slope maximum; a looser bound only costs subdivisions. */
const SLOPE_SAFETY = 2;
/** Subdivision depth for the interval root-exclusion test. */
const MAX_SUBDIVISION_DEPTH = 14;

interface ProfileBounds {
  minSag: number;
  maxSag: number;
  maxSlope: number;
}

const boundsBySurface = new WeakMap<CompiledStateSurface, Map<number, ProfileBounds>>();

/**
 * Classify one exact trace for MTF sampling.
 *
 * Total internal reflection and proven aperture misses are physical blocking. Other failures
 * are reported as "failed": the ray may carry flux the estimate cannot see.
 *
 * @param trace - exact trace result for one pupil sample
 * @param state - prepared state, required to prove misses
 * @param stopRadius - current physical stop radius in mm
 * @returns valid, blocked, or failed
 */
export function mtfTraceClassification(
  trace: EngineTraceResult,
  state?: PreparedOpticalState,
  stopRadius?: number,
): MtfRayClass {
  if (trace.status === "ok") return "valid";
  if (trace.failureReason === "totalInternalReflection" || (trace.status === "clipped" && !trace.failureReason))
    return "blocked";
  if (
    state &&
    (trace.failureReason === "noBracket" || trace.failureReason === "noConvergedIntersection") &&
    provesApertureMiss(trace, state, stopRadius)
  )
    return "blocked";
  return "failed";
}

/**
 * Prove that the ray leaving the last traced surface misses the next surface's clear cap.
 *
 * @param trace - failed trace whose terminal point/direction precede the missed surface
 * @param state - prepared optical state
 * @param stopRadius - current physical stop radius in mm
 * @returns true only when no intersection with the active cap can exist
 */
export function provesApertureMiss(
  trace: EngineTraceResult,
  state: PreparedOpticalState,
  stopRadius?: number,
): boolean {
  const surface = state.surfaces[trace.terminalSurfaceIndex + 1];
  if (!surface) return false;
  const aperture = evaluateAperture(state, surface, 0, stopRadius).semiDiameter;
  if (aperture === null || !(aperture > 0)) return false;
  const origin = trace.terminalPoint;
  const [dx, dy, dz] = trace.terminalDirection;
  const length = Math.hypot(dx, dy, dz);
  if (!(length > 0)) return false;
  const direction: Vec3 = [dx / length, dy / length, dz / length];
  switch (surface.profile.kind) {
    case "flat":
      return flatMisses(origin, direction, surface.z, aperture);
    case "spherical":
      return sphereMisses(origin, direction, surface, aperture);
    case "aspheric":
      return asphereMisses(origin, direction, surface, aperture);
    default:
      return false;
  }
}

function flatMisses(origin: Vec3, direction: Vec3, vertexZ: number, aperture: number): boolean {
  if (Math.abs(direction[2]) < 1e-15) return Math.abs(origin[2] - vertexZ) > 1e-9;
  const t = (vertexZ - origin[2]) / direction[2];
  if (t < -1e-9) return true;
  return Math.hypot(origin[0] + t * direction[0], origin[1] + t * direction[1]) > aperture * (1 + 1e-9) + 1e-9;
}

/** Exact ray/sphere roots, restricted to the vertex-side cap within the clear aperture. */
function sphereMisses(origin: Vec3, direction: Vec3, surface: CompiledStateSurface, aperture: number): boolean {
  const R = surface.R;
  if (!Number.isFinite(R) || R === 0) return false;
  const centerZ = surface.z + R;
  const offset: Vec3 = [origin[0], origin[1], origin[2] - centerZ];
  const b = offset[0] * direction[0] + offset[1] * direction[1] + offset[2] * direction[2];
  const c = offset[0] ** 2 + offset[1] ** 2 + offset[2] ** 2 - R * R;
  const discriminant = b * b - c;
  if (discriminant < 0) return true;
  const root = Math.sqrt(discriminant);
  const limit = Math.min(aperture, Math.abs(R)) * (1 + 1e-9) + 1e-9;
  for (const t of [-b - root, -b + root]) {
    if (t < -1e-9) continue;
    const z = origin[2] + t * direction[2];
    // The optical cap is the hemisphere containing the vertex, which lies at centerZ - R.
    if (Math.sign(z - centerZ) !== Math.sign(-R)) continue;
    if (Math.hypot(origin[0] + t * direction[0], origin[1] + t * direction[1]) <= limit) return false;
  }
  return true;
}

/**
 * Exclude any root of g(t) = z(t) - (vertex + sag(r(t))) on the part of the ray inside the
 * aperture cylinder and the cap's axial slab, using |g'| ≤ |dz| + maxSlope·|d_xy|.
 */
function asphereMisses(origin: Vec3, direction: Vec3, surface: CompiledStateSurface, aperture: number): boolean {
  const bounds = profileBounds(surface, aperture);
  if (!bounds) return false;
  const radialSpeed2 = direction[0] ** 2 + direction[1] ** 2;
  let tLo = 0;
  let tHi = Infinity;
  const c = origin[0] ** 2 + origin[1] ** 2 - aperture * aperture;
  if (radialSpeed2 < 1e-24) {
    if (c > 0) return true;
  } else {
    const b = 2 * (origin[0] * direction[0] + origin[1] * direction[1]);
    const discriminant = b * b - 4 * radialSpeed2 * c;
    if (discriminant < 0) return true;
    const root = Math.sqrt(discriminant);
    tLo = Math.max(tLo, (-b - root) / (2 * radialSpeed2));
    tHi = Math.min(tHi, (-b + root) / (2 * radialSpeed2));
  }
  const zLo = surface.z + bounds.minSag;
  const zHi = surface.z + bounds.maxSag;
  if (Math.abs(direction[2]) < 1e-15) {
    if (origin[2] < zLo || origin[2] > zHi) return true;
  } else {
    const a = (zLo - origin[2]) / direction[2];
    const z = (zHi - origin[2]) / direction[2];
    tLo = Math.max(tLo, Math.min(a, z));
    tHi = Math.min(tHi, Math.max(a, z));
  }
  if (!(tHi >= tLo)) return true;
  const lipschitz = Math.abs(direction[2]) + bounds.maxSlope * Math.sqrt(radialSpeed2) + 1e-12;
  const g = (t: number) => {
    const x = origin[0] + t * direction[0];
    const y = origin[1] + t * direction[1];
    return origin[2] + t * direction[2] - (surface.z + surface.profile.sag(Math.hypot(x, y)));
  };
  const excludes = (t0: number, t1: number, g0: number, g1: number, depth: number): boolean => {
    if (!Number.isFinite(g0) || !Number.isFinite(g1) || Math.sign(g0) !== Math.sign(g1) || g0 === 0) return false;
    if (Math.abs(g0) + Math.abs(g1) > lipschitz * (t1 - t0)) return true;
    if (depth >= MAX_SUBDIVISION_DEPTH) return false;
    const mid = (t0 + t1) / 2;
    const gMid = g(mid);
    return excludes(t0, mid, g0, gMid, depth + 1) && excludes(mid, t1, gMid, g1, depth + 1);
  };
  return excludes(tLo, tHi, g(tLo), g(tHi), 0);
}

function profileBounds(surface: CompiledStateSurface, aperture: number): ProfileBounds | null {
  let byAperture = boundsBySurface.get(surface);
  if (!byAperture) {
    byAperture = new Map();
    boundsBySurface.set(surface, byAperture);
  }
  const cached = byAperture.get(aperture);
  if (cached) return cached;
  let minSag = Infinity;
  let maxSag = -Infinity;
  let maxSlope = 0;
  for (let i = 0; i <= PROFILE_SAMPLES; i++) {
    const r = (aperture * i) / PROFILE_SAMPLES;
    const sag = surface.profile.sag(r);
    const slope = Math.abs(surface.profile.slope(r));
    if (!Number.isFinite(sag) || !Number.isFinite(slope)) return null;
    minSag = Math.min(minSag, sag);
    maxSag = Math.max(maxSag, sag);
    maxSlope = Math.max(maxSlope, slope);
  }
  // Extrema between samples can exceed the sampled range by at most slope·Δr/2.
  const margin = (maxSlope * SLOPE_SAFETY * aperture) / PROFILE_SAMPLES + 1e-9;
  const bounds = { minSag: minSag - margin, maxSag: maxSag + margin, maxSlope: maxSlope * SLOPE_SAFETY };
  byAperture.set(aperture, bounds);
  return bounds;
}
