/**
 * Prepared-state builder — applies focus, zoom, and aberration controls to engine surfaces.
 *
 * Produces the state object consumed by trace, field, diagram, and first-order modules while
 * validating state-dependent thicknesses before tracing.
 */

import type { VarRange } from "../../types/optics.js";
import { formatCacheNumber, normalizeControlT } from "../math/numerics.js";
import type { PreparedStateCache } from "./cache.js";
import type { CompiledStateSurface, EngineLens, Plane3, PreparedOpticalState } from "../types.js";
import { Optics2PreparationError } from "../types.js";
import { resolveControlledThickness } from "../prescription/variables.js";

/** Optional prepared-state cache owned by the caller. */
export interface PrepareStateOptions {
  cache?: PreparedStateCache | null;
}

/**
 * Build a deterministic cache key for a prepared state.
 *
 * @param lens - normalized engine lens
 * @param focusT - normalized focus control
 * @param zoomT - normalized zoom control
 * @param aberrationT - normalized aberration-spacing control
 * @returns stable cache key containing lens identity and controls
 */
export function preparedStateCacheKey(lens: EngineLens, focusT: number, zoomT: number, aberrationT: number): string {
  return [lens.key, formatCacheNumber(focusT), formatCacheNumber(zoomT), formatCacheNumber(aberrationT)].join(":");
}

/**
 * Compile current optical state for tracing, diagram geometry, and analysis.
 *
 * Focus, zoom, and aberration controls are validated/clamped to `[0, 1]`, then
 * applied to variable surface gaps. Ordinary lenses require non-negative axial
 * thicknesses; folded systems may use negative z deltas because the path can turn.
 *
 * @param lens - normalized engine lens
 * @param focusTInput - proposed normalized focus slider
 * @param zoomTInput - proposed normalized zoom slider
 * @param aberrationTInput - proposed normalized aberration spacing slider
 * @param options - optional caller-owned cache
 * @returns immutable prepared optical state for the requested controls
 */
export function prepareState(
  lens: EngineLens,
  focusTInput: number,
  zoomTInput: number,
  aberrationTInput = 0,
  options: PrepareStateOptions = {},
): PreparedOpticalState {
  const focusT = normalizePreparedControl(focusTInput, "focusT");
  const zoomT = normalizePreparedControl(zoomTInput, "zoomT");
  const aberrationT = normalizePreparedControl(aberrationTInput, "aberrationT");
  const cacheKey = preparedStateCacheKey(lens, focusT, zoomT, aberrationT);
  const cached = options.cache?.get(cacheKey);
  if (cached) return cached;

  const thicknesses = lens.surfaces.map((surface) =>
    resolvePreparedThickness(
      surface.d,
      lens.variables.bySurfaceIndex[surface.physicalIndex],
      lens.aberrationControl?.varBySurfaceIndex[surface.physicalIndex],
      lens.flags.isZoom,
      focusT,
      zoomT,
      aberrationT,
      surface.physicalIndex,
      lens.flags.isFoldedOptics,
    ),
  );
  const z = buildZPositions(thicknesses);
  const defaultImgZ = z[z.length - 1] + thicknesses[thicknesses.length - 1];
  const imagePlane = resolveStateImagePlane(lens, defaultImgZ);
  const surfaces = Object.freeze(
    lens.surfaces.map((surface, index) =>
      Object.freeze({
        ...surface,
        base: surface,
        d: thicknesses[index],
        z: z[index],
      }),
    ),
  ) as readonly CompiledStateSurface[];
  const frozenZ = Object.freeze([...z]);
  const state = Object.freeze({
    lens,
    focusT,
    zoomT,
    aberrationT,
    surfaces,
    z: frozenZ,
    imagePlane,
    imgZ: imagePlane.point[2],
    totalTrack: resolveTotalTrack(lens, frozenZ, imagePlane.point[2]),
    cacheKey,
  });
  options.cache?.set(cacheKey, state);
  return state;
}

function normalizePreparedControl(value: number, label: string): number {
  try {
    return normalizeControlT(value, label);
  } catch (_error) {
    throw new Optics2PreparationError("invalid-control", `${label} must be finite`);
  }
}

function resolvePreparedThickness(
  baseThickness: number,
  focusRange: VarRange | undefined,
  aberrationRange: VarRange | undefined,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  surfaceIndex: number,
  allowNegativeThickness: boolean,
): number {
  const thickness = resolveControlledThickness(
    baseThickness,
    focusRange,
    aberrationRange,
    isZoom,
    focusT,
    zoomT,
    aberrationT,
  );
  if (!Number.isFinite(thickness) || (!allowNegativeThickness && thickness < 0)) {
    throw new Optics2PreparationError(
      "invalid-thickness",
      `Resolved thickness for surface ${surfaceIndex} must be finite and non-negative`,
    );
  }
  return thickness;
}

function buildZPositions(thicknesses: readonly number[]): number[] {
  const z = [0];
  for (let i = 0; i < thicknesses.length - 1; i++) z.push(z[i] + thicknesses[i]);
  return z;
}

function resolveStateImagePlane(lens: EngineLens, defaultImgZ: number): Plane3 {
  if (lens.flags.isFoldedOptics && lens.source.opticalPath?.imagePlane !== undefined) return lens.imagePlane;
  return Object.freeze({
    ...lens.imagePlane,
    point: Object.freeze([lens.imagePlane.point[0], lens.imagePlane.point[1], defaultImgZ] as const),
  });
}

function resolveTotalTrack(lens: EngineLens, z: readonly number[], imgZ: number): number {
  if (!lens.flags.isFoldedOptics) return imgZ - z[0];
  const zMin = Math.min(imgZ, ...z);
  const zMax = Math.max(imgZ, ...z);
  return zMax - zMin;
}
