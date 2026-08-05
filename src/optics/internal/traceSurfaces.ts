/**
 * Internal paraxial tracing — thin re-exports over the single first-order
 * engine in `math/paraxial.ts`.
 *
 * Runtime-lens construction and the prepared engine previously kept
 * line-for-line twin implementations ("both paths must remain in lockstep"
 * executed by double-edit); the shared engine now accepts authored surfaces
 * directly by defaulting a missing `interaction` to plain refraction.
 * Re-export style mirrors `constants.ts`.
 */

export {
  transferParaxialRay2 as transferParaxialRay,
  interactParaxialSurface2 as interactParaxialSurface,
  traceParaxialSurfaces2 as traceSurfacesParaxial,
} from "../math/paraxial.js";
export type {
  ParaxialState as ParaxialRayState,
  ParaxialTraceOptions as ParaxialSurfaceTraceOptions,
} from "../math/paraxial.js";

/** Real-ray construction options layered over paraxial stop/height controls. */
export interface RealSurfaceTraceOptions {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
  checkSemiDiameter?: boolean;
}

/** Real-ray construction result with clipping state and optional surface heights. */
export interface RealSurfaceTraceResult {
  y: number;
  u: number;
  n: number;
  clipped: boolean;
  heights: number[] | null;
}
