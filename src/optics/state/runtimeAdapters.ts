import type { LayoutResult, RuntimeLens } from "../../types/optics.js";
import type { CompiledLens, PreparedOpticalState } from "../types.js";
import { compiledLensFromRuntime } from "../prescription/compile.js";
import { layoutFromPrepared } from "./layout.js";
import { eflAtZoom, epAtZoom, fopenAtZoom, clampStationControl } from "./stationTables.js";
import { prepareState } from "./preparedGeometry.js";

/**
 * Retrieve the compiled owner of a RuntimeLens.
 *
 * The association is lookup-only; callers must not mutate a RuntimeLens in
 * place because prepared-state caches assume a fresh object for changed optics.
 *
 * @param L - runtime lens object returned by buildLens
 * @returns normalized engine lens used by prepared-state modules
 */
export function engineLensFromRuntime(L: RuntimeLens): CompiledLens {
  return compiledLensFromRuntime(L);
}

/**
 * Compile current focus/zoom/aberration state for a RuntimeLens.
 *
 * @param L - runtime lens object
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param aberrationT - normalized aberration spacing slider
 * @returns prepared optical state with current surface spacings and image plane
 */
export function prepareRuntimeState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): PreparedOpticalState {
  return prepareState(engineLensFromRuntime(L), focusT, zoomT, aberrationT);
}

/**
 * Compute current surface layout in RuntimeLens-compatible shape.
 *
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns vertex positions, current thicknesses, and image-plane z in mm
 */
export function doLayoutForRuntimeLens(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const state = prepareRuntimeState(L, focusT, zoomT, aberrationT);
  return layoutFromPrepared(state);
}

/**
 * Return current axial thickness after surface `i`.
 *
 * @param i - physical surface index
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns current distance to the next surface in mm, or 0 for invalid indices
 */
export function thickOrZero(i: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  return prepareRuntimeState(L, focusT, zoomT, aberrationT).surfaces[i]?.d ?? 0;
}

/**
 * Interpolate effective focal length for the current zoom position.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns effective focal length in mm
 */
export function eflAtZoomClamped(zoomT: number, L: RuntimeLens): number {
  return eflAtZoom(clampStationControl(zoomT), L);
}

/**
 * Interpolate entrance-pupil semi-diameter for the current zoom position.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns entrance-pupil semi-diameter in mm
 */
export function epAtZoomClamped(zoomT: number, L: RuntimeLens): number {
  return epAtZoom(clampStationControl(zoomT), L);
}

/**
 * Interpolate wide-open f-number for the current zoom position.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns wide-open f-number for the selected zoom state
 */
export function fopenAtZoomClamped(zoomT: number, L: RuntimeLens): number {
  return fopenAtZoom(clampStationControl(zoomT), L);
}
