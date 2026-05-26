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

export interface PrepareStateOptions {
  cache?: PreparedStateCache | null;
}

export function preparedStateCacheKey(lens: EngineLens, focusT: number, zoomT: number, aberrationT: number): string {
  return [lens.key, formatCacheNumber(focusT), formatCacheNumber(zoomT), formatCacheNumber(aberrationT)].join(":");
}

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
  if (lens.flags.isFoldedOptics) return lens.imagePlane;
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
