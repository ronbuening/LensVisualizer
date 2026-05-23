import type { ParaxialTraceResult, SurfaceReflectance } from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "./surfaceMath.js";

interface TraceSurface {
  R: number;
  nd: number;
  d: number;
  sd?: number;
  reflect?: SurfaceReflectance;
}

export interface ParaxialSurfaceTraceOptions {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
  /** Optional explicit trace sequence (surface indices). When present, the
   *  trace walks these indices in order and ignores `stopAt`. Used for
   *  catadioptric lenses where the path traverses surfaces more than once. */
  traceSequence?: readonly number[] | null;
}

export interface RealSurfaceTraceOptions extends ParaxialSurfaceTraceOptions {
  checkSemiDiameter?: boolean;
}

export interface RealSurfaceTraceResult {
  y: number;
  u: number;
  n: number;
  clipped: boolean;
  heights: number[] | null;
}

/**
 * One step in the paraxial trace sequence. Mirrors the exact-trace step shape
 * but adds `transferD` to encode the SIGNED axial distance to the next step
 * (positive forward, negative backward after a reflection).
 */
interface ParaxialStep {
  surfaceIdx: number;
  action: "refract" | "reflect";
  defaultNextN: number;
  transferD: number;
}

/**
 * Build the paraxial step sequence for the given surface list. Identical to
 * `buildTraceStepSequence` in exactSurfaceTrace.ts except it also threads
 * signed transfer distances so backward-walking rays update y by the negative
 * gap thickness.
 */
function buildParaxialStepSequence(
  surfaces: TraceSurface[],
  tracedCount: number,
  traceSequence?: readonly number[] | null,
): ParaxialStep[] {
  if (traceSequence && traceSequence.length > 0) {
    return buildExplicitParaxialStepSequence(surfaces, traceSequence);
  }

  let reflectIdx = -1;
  let reflectCount = 0;
  for (let i = 0; i < tracedCount; i++) {
    if (surfaces[i].reflect !== undefined) {
      if (reflectCount === 0) reflectIdx = i;
      reflectCount++;
    }
  }

  if (reflectCount === 0) {
    const steps = new Array<ParaxialStep>(tracedCount);
    const total = surfaces.length;
    for (let i = 0; i < tracedCount; i++) {
      /* Preserve pre-refactor semantics: the post-loop transfer was guarded by
       * `i < total - 1`, skipping the transfer only when the iteration is at
       * the very last surface in the array. A stopAt-truncated trace still
       * transfers through the gap after its final surface. */
      const transferD = i < total - 1 ? surfaces[i].d : 0;
      steps[i] = {
        surfaceIdx: i,
        action: "refract",
        defaultNextN: surfaces[i].nd,
        transferD,
      };
    }
    return steps;
  }

  if (reflectCount > 1) {
    throw new Error(
      "traceSurfacesParaxial: multiple reflective surfaces require an explicit traceSequence (not yet supported)",
    );
  }

  const steps: ParaxialStep[] = [];
  for (let i = 0; i < reflectIdx; i++) {
    steps.push({
      surfaceIdx: i,
      action: "refract",
      defaultNextN: surfaces[i].nd,
      transferD: surfaces[i].d,
    });
  }
  /* Reflect step. After reflection the ray walks backward through the gap
   * before the mirror; `transferD` is the negative of that gap so the post-
   * reflection y update lands at the previous surface vertex. */
  steps.push({
    surfaceIdx: reflectIdx,
    action: "reflect",
    defaultNextN: 0,
    transferD: reflectIdx > 0 ? -surfaces[reflectIdx - 1].d : 0,
  });
  for (let i = reflectIdx - 1; i >= 0; i--) {
    const nextN = i > 0 ? surfaces[i - 1].nd : 1.0;
    steps.push({
      surfaceIdx: i,
      action: "refract",
      defaultNextN: nextN,
      transferD: i > 0 ? -surfaces[i - 1].d : 0,
    });
  }
  return steps;
}

/**
 * Build the paraxial step sequence from an explicit surface-index path. Each
 * consecutive pair's signed transfer distance is derived from the
 * z-positions accumulated from the surface `d` thicknesses; backward-walking
 * steps (after a reflection) get a negative `transferD` automatically.
 */
function buildExplicitParaxialStepSequence(surfaces: TraceSurface[], sequence: readonly number[]): ParaxialStep[] {
  const zPos = [0];
  for (let i = 0; i < surfaces.length - 1; i++) zPos.push(zPos[i] + surfaces[i].d);

  const steps = new Array<ParaxialStep>(sequence.length);
  let forward = true;
  for (let k = 0; k < sequence.length; k++) {
    const idx = sequence[k];
    const surface = surfaces[idx];
    const action: "refract" | "reflect" = surface.reflect !== undefined ? "reflect" : "refract";
    const defaultNextN = action === "reflect" ? 0 : forward ? surface.nd : idx > 0 ? surfaces[idx - 1].nd : 1.0;
    const nextIdx = k + 1 < sequence.length ? sequence[k + 1] : -1;
    const transferD = nextIdx >= 0 ? zPos[nextIdx] - zPos[idx] : 0;
    steps[k] = { surfaceIdx: idx, action, defaultNextN, transferD };
    if (action === "reflect") forward = !forward;
  }
  return steps;
}

export function traceSurfacesParaxial(
  surfaces: TraceSurface[],
  y0: number,
  u0: number,
  { stopAt, skipLastTransfer = false, recordHeights = false, traceSequence }: ParaxialSurfaceTraceOptions = {},
): ParaxialTraceResult {
  const tracedCount = stopAt !== undefined ? stopAt : surfaces.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let y = y0;
  let u = u0;
  let n = 1.0;
  const steps = buildParaxialStepSequence(surfaces, tracedCount, traceSequence);
  for (let stepIdx = 0; stepIdx < steps.length; stepIdx++) {
    if (recordHeights) heights!.push(y);
    const step = steps[stepIdx];
    const { R } = surfaces[step.surfaceIdx];
    if (step.action === "reflect") {
      /* Mirror as refraction with n' = -n: u' = (n·u − y·(-n − n)/R) / (−n)
       * = −u − 2y/R. The refractive medium sign flips so backward-direction
       * refraction steps that follow use n = −|n_glass|; the standard refract
       * formula below then correctly computes the exit slope. Flat-mirror
       * surfaces (huge |R|) reduce to pure slope inversion. */
      u = Math.abs(R) < FLAT_R_THRESHOLD ? -u - (2 * y) / R : -u;
      n = -n;
    } else {
      const nextN = step.defaultNextN;
      if (nextN !== n) {
        u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - (y * (nextN - n)) / R) / nextN : (n * u) / nextN;
      }
      n = nextN;
    }
    const isLast = stepIdx === steps.length - 1;
    if (isLast && skipLastTransfer) continue;
    y += step.transferD * u;
  }
  /* Restore positive sign on n at the end if the ray has reflected an odd
   * number of times. The n→−n trick is a bookkeeping device — callers expect
   * the magnitude of the refractive index, not a signed reflection counter. */
  return { y, u, n: Math.abs(n), heights };
}
