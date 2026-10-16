/**
 * Prepared geometry — one bounded cache for focus, zoom, and aberration state.
 *
 * Produces the state object consumed by trace, field, diagram, and first-order modules while
 * validating state-dependent thicknesses before tracing.
 */

import { wideOpenStopAtZoom } from "../apertureStop.js";
import { createTraceGeometry } from "../trace/geometry.js";
import type { AberrationVarRange, VarRange } from "../../types/optics.js";
import { clamp, normalizeControlT } from "../math/numerics.js";
import type { CompiledStateSurface, CompiledLens, Plane3, PreparedOpticalState } from "../types.js";
import { Optics2PreparationError } from "../types.js";
import { resolveControlledThickness, buildZPositions } from "../state/layout.js";

const PREPARED_STATE_CACHE_LIMIT = 96;
const PREPARED_STATE_BY_LENS = new WeakMap<CompiledLens, PreparedOpticalState[]>();

interface ZOverrides {
  translated?: PreparedOpticalState;
  preserved?: PreparedOpticalState;
}

const Z_STATE_BY_BASE = new WeakMap<PreparedOpticalState, WeakMap<readonly number[], ZOverrides>>();

/**
 * Compile current optical state for tracing, diagram geometry, and analysis.
 *
 * Focus and zoom are clamped to `[0, 1]`. Aberration controls use `[0, 1]` for
 * legacy two-position ranges or `[-1, 1]` when a center position is declared, then
 * all controls are applied to variable surface gaps. Ordinary lenses require non-negative axial
 * thicknesses; folded systems may use negative z deltas because the path can turn.
 *
 * @param lens - normalized engine lens
 * @param focusTInput - proposed normalized focus slider
 * @param zoomTInput - proposed normalized zoom slider
 * @param aberrationTInput - proposed normalized aberration spacing slider
 * @returns immutable prepared optical state for the requested controls
 */
export function prepareState(
  lens: CompiledLens,
  focusTInput: number,
  zoomTInput: number,
  aberrationTInput = 0,
): PreparedOpticalState {
  const focusT = normalizePreparedControl(focusTInput, "focusT");
  const zoomT = normalizePreparedControl(zoomTInput, "zoomT");
  const aberrationT = normalizePreparedAberrationControl(aberrationTInput, lens.aberrationControl?.centerLabel != null);
  let states = PREPARED_STATE_BY_LENS.get(lens);
  if (!states) {
    states = [];
    PREPARED_STATE_BY_LENS.set(lens, states);
  }
  for (let i = states.length - 1; i >= 0; i--) {
    const state = states[i];
    if (state.focusT === focusT && state.zoomT === zoomT && state.aberrationT === aberrationT) {
      if (i !== states.length - 1) {
        states.splice(i, 1);
        states.push(state);
      }
      return state;
    }
  }
  const state = buildPreparedState(lens, focusT, zoomT, aberrationT);
  states.push(state);
  if (states.length > PREPARED_STATE_CACHE_LIMIT) states.shift();
  return state;
}

/**
 * Build the same immutable geometry without reading or populating the LRU.
 *
 * @param lens - compiled prescription owner
 * @param focusTInput - proposed focus control, clamped to [0, 1]
 * @param zoomTInput - proposed zoom control, clamped to [0, 1]
 * @param aberrationTInput - spacing control, clamped to its authored range
 * @returns freshly prepared optical state
 */
export function prepareStateUncached(
  lens: CompiledLens,
  focusTInput: number,
  zoomTInput: number,
  aberrationTInput = 0,
): PreparedOpticalState {
  return buildPreparedState(
    lens,
    normalizePreparedControl(focusTInput, "focusT"),
    normalizePreparedControl(zoomTInput, "zoomT"),
    normalizePreparedAberrationControl(aberrationTInput, lens.aberrationControl?.centerLabel != null),
  );
}

function buildPreparedState(
  lens: CompiledLens,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): PreparedOpticalState {
  const thicknesses = lens.surfaces.map((surface) =>
    resolvePreparedThickness(
      surface.d,
      lens.variables.bySurfaceIndex[surface.physicalIndex],
      lens.aberrationControl?.varBySurfaceIndex[surface.physicalIndex],
      lens.flags.isZoom,
      focusT,
      zoomT,
      aberrationT,
      lens.variables.focusPositions,
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
        sd:
          index === lens.stop.surfaceIndex && lens.constants.zoomStopSDs
            ? wideOpenStopAtZoom(zoomT, lens.constants)
            : surface.sd,
        d: thicknesses[index],
        z: z[index],
      }),
    ),
  ) as readonly CompiledStateSurface[];
  const frozenZ = Object.freeze([...z]);
  const state = Object.freeze({
    traceGeometry: createTraceGeometry({
      surfaces,
      z: frozenZ,
      imagePlane,
      stopSurfaceIndex: lens.stop.surfaceIndex,
      pathPlan: lens.opticalPath,
      isFoldedOptics: lens.flags.isFoldedOptics,
    }),
    lens,
    focusT,
    zoomT,
    aberrationT,
    surfaces,
    z: frozenZ,
    imagePlane,
    imgZ: imagePlane.point[2],
    totalTrack: resolveTotalTrack(lens, frozenZ, imagePlane.point[2]),
    // Compatibility label for analysis contexts; geometry lookup compares the numbers above.
    cacheKey: [lens.key, focusT, zoomT, aberrationT].join(":"),
  });
  return state;
}

function normalizePreparedControl(value: number, label: string): number {
  try {
    return normalizeControlT(value, label) || 0;
  } catch (_error) {
    throw new Optics2PreparationError("invalid-control", `${label} must be finite`);
  }
}

function normalizePreparedAberrationControl(value: number, centered: boolean): number {
  if (!Number.isFinite(value)) {
    throw new Optics2PreparationError("invalid-control", "aberrationT must be finite");
  }
  return clamp(value, centered ? -1 : 0, 1) || 0;
}

function resolvePreparedThickness(
  baseThickness: number,
  focusRange: VarRange | undefined,
  aberrationRange: AberrationVarRange | undefined,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  focusPositions: readonly number[],
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
    focusPositions,
  );
  if (!Number.isFinite(thickness) || (!allowNegativeThickness && thickness < 0)) {
    throw new Optics2PreparationError(
      "invalid-thickness",
      `Resolved thickness for surface ${surfaceIndex} must be finite and non-negative`,
    );
  }
  return thickness;
}

function resolveStateImagePlane(lens: CompiledLens, defaultImgZ: number): Plane3 {
  if (lens.flags.isFoldedOptics && lens.hasExplicitImagePlane) return lens.imagePlane;
  return Object.freeze({
    ...lens.imagePlane,
    point: Object.freeze([lens.imagePlane.point[0], lens.imagePlane.point[1], defaultImgZ] as const),
  });
}

function resolveTotalTrack(lens: CompiledLens, z: readonly number[], imgZ: number): number {
  if (!lens.flags.isFoldedOptics) return imgZ - z[0];
  const zMin = Math.min(imgZ, ...z);
  const zMax = Math.max(imgZ, ...z);
  return zMax - zMin;
}

/**
 * Rebuild a prepared state around caller-supplied surface z positions.
 *
 * Diagram code can translate non-folded surface vertices so focus/zoom states
 * stay registered to a fixed rendered sensor. Keep image-plane metadata and
 * the final air gap in that same coordinate frame; folded systems retain their
 * authored arbitrary image plane.
 *
 * @param state - prepared geometry before the coordinate override
 * @param zPos - caller-owned vertex positions in mm, treated as immutable
 * @param imagePlaneMode - translate the refractive image plane, or preserve diagram metadata
 * @returns immutable coordinate override, shared for the same state, array and mode
 */
export function stateWithZ(
  state: PreparedOpticalState,
  zPos: readonly number[],
  imagePlaneMode: "translate" | "preserve" = "translate",
): PreparedOpticalState {
  let byZ = Z_STATE_BY_BASE.get(state);
  if (!byZ) {
    byZ = new WeakMap();
    Z_STATE_BY_BASE.set(state, byZ);
  }
  let overrides = byZ.get(zPos);
  const slot = imagePlaneMode === "translate" ? "translated" : "preserved";
  const cached = overrides?.[slot];
  if (cached) return cached;
  if (!overrides) {
    overrides = {};
    byZ.set(zPos, overrides);
  }
  if (zPos.length === 0 || zPos.every((z, index) => z === state.z[index])) {
    overrides[slot] = state;
    return state;
  }

  const baseFirstZ = state.z[0] ?? 0;
  const shiftedFirstZ = zPos[0] ?? baseFirstZ;
  const zShift = shiftedFirstZ - baseFirstZ;
  // Non-folded layouts are translated as a rigid stack, so the axial image plane moves by the same delta.
  const preserveImagePlane = imagePlaneMode === "preserve" || state.lens.flags.isFoldedOptics;
  const imgZ = preserveImagePlane ? state.imgZ : state.imgZ + zShift;
  const surfaces = state.surfaces.map((surface, index) => {
    const z = zPos[index] ?? surface.z;
    let d: number;
    if (index < state.surfaces.length - 1 && zPos[index + 1] !== undefined) {
      d = zPos[index + 1] - z;
    } else if (preserveImagePlane) {
      d = surface.d;
    } else {
      // The last gap is the transfer distance to the shifted rendered image plane.
      d = imgZ - z;
    }
    return Object.freeze({ ...surface, z, d }) as CompiledStateSurface;
  });
  const imagePlane = preserveImagePlane
    ? state.imagePlane
    : Object.freeze({
        ...state.imagePlane,
        point: Object.freeze([state.imagePlane.point[0], state.imagePlane.point[1], imgZ] as const),
      });
  const frozenSurfaces = Object.freeze(surfaces);
  const frozenZ = Object.freeze([...zPos]);
  const shiftedState = Object.freeze({
    ...state,
    surfaces: frozenSurfaces,
    z: frozenZ,
    traceGeometry: createTraceGeometry({
      surfaces: frozenSurfaces,
      z: frozenZ,
      imagePlane,
      stopSurfaceIndex: state.lens.stop.surfaceIndex,
      pathPlan: state.lens.opticalPath,
      isFoldedOptics: state.lens.flags.isFoldedOptics,
    }),
    imagePlane,
    imgZ,
    totalTrack: preserveImagePlane ? state.totalTrack : imgZ - shiftedFirstZ,
  });
  overrides[slot] = shiftedState;
  return shiftedState;
}
