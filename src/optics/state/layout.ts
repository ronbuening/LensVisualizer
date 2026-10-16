/**
 * State layout — one controlled-gap composition and one axial vertex builder.
 *
 * Used before publication by construction and validation, and after publication by prepared geometry
 * and the RuntimeLens compatibility adapters. Only the runtime layout adapter looks up a compiled owner.
 */

import type { SurfaceData, VarRange, AberrationVarRange, RuntimeLens, LayoutResult } from "../../types/optics.js";
import { DEFAULT_FOCUS_POSITIONS, resolveVariableThickness, resolveAberrationThickness } from "./stationTables.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";

/**
 * Combine focus and aberration variable ranges for one surface gap.
 *
 * Aberration control is applied as a delta from the base thickness after focus
 * movement, matching the RuntimeLens compatibility behavior.
 *
 * @param baseThickness - authored default thickness in mm
 * @param focusRange - optional focus/zoom range
 * @param aberrationRange - optional aberration-control range
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @param focusPositions - normalized focus coordinates aligned with each focus range
 * @returns current axial thickness in mm
 */
export function resolveControlledThickness(
  baseThickness: number,
  focusRange: VarRange | undefined,
  aberrationRange: AberrationVarRange | undefined,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  focusPositions: readonly number[] = DEFAULT_FOCUS_POSITIONS,
): number {
  const focusThickness = resolveVariableThickness(baseThickness, focusRange, isZoom, focusT, zoomT, focusPositions);
  if (!aberrationRange) return focusThickness;
  const aberrationThickness = resolveAberrationThickness(baseThickness, aberrationRange, isZoom, aberrationT, zoomT);
  return focusThickness + (aberrationThickness - baseThickness);
}

/**
 * Copy surface records with current gaps without changing their optical metadata.
 * @param surfaces - physical surfaces before control motion
 * @param varByIdx - focus/zoom gaps by surface index
 * @param isZoom - whether gap rows are zoom-indexed
 * @param focusT - normalized focus control
 * @param zoomT - normalized zoom control
 * @param aberrationVarByIdx - optional aberration gaps by surface index
 * @param aberrationT - normalized or centered aberration control
 * @param focusPositions - authored focus keyframe coordinates
 * @returns copied surfaces with current distances in mm
 */
export function buildStateSurfaces(
  surfaces: SurfaceData[],
  varByIdx: Record<number, VarRange>,
  isZoom: boolean,
  focusT: number,
  zoomT: number,
  aberrationVarByIdx: Record<number, AberrationVarRange> = {},
  aberrationT = 0,
  focusPositions?: readonly number[],
): SurfaceData[] {
  return surfaces.map((surface, index) => ({
    ...surface,
    d: resolveControlledThickness(
      surface.d,
      varByIdx[index],
      aberrationVarByIdx[index],
      isZoom,
      focusT,
      zoomT,
      aberrationT,
      focusPositions,
    ),
  }));
}

/**
 * Sum gaps up to a physical surface, retaining sequential addition order.
 * @param surfaces - physical gaps in mm
 * @param endExclusive - index of the target surface
 * @returns axial distance in mm from the first vertex
 */
export function sumSurfaceThicknesses(surfaces: Pick<SurfaceData, "d">[], endExclusive: number): number {
  let total = 0;
  for (let i = 0; i < endExclusive; i++) total += surfaces[i].d;
  return total;
}

/**
 * Accumulate sequential vertex positions from axial gaps, including signed folded-path gaps.
 * @param thicknesses - distance after each physical surface in mm
 * @returns vertex z positions in mm with the first vertex at zero
 */
export function buildZPositions(thicknesses: readonly number[]): number[] {
  const z = [0];
  for (let i = 0; i < thicknesses.length - 1; i++) z.push(z[i] + thicknesses[i]);
  return z;
}

/**
 * Copy prepared positions into the mutable legacy layout result.
 * @param state - prepared vertices, gaps and resolved image-plane position
 * @returns independent arrays for legacy consumers
 */
export function layoutFromPrepared(state: {
  z: readonly number[];
  surfaces: readonly { d: number }[];
  imgZ: number;
}): LayoutResult {
  return { z: [...state.z], th: state.surfaces.map((surface) => surface.d), imgZ: state.imgZ };
}

/**
 * Resolve current axial thickness after a surface.
 *
 * @param i - zero-based physical surface index
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns current thickness in mm
 */
export function thick(i: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  return resolveControlledThickness(
    L.S[i].d,
    L.varByIdx[i],
    L.aberrationControl?.varByIdx[i],
    Boolean(L.isZoom),
    focusT,
    zoomT,
    aberrationT,
    L.focusPositions,
  );
}

/**
 * Compute current RuntimeLens layout positions.
 *
 * Surface vertices start at z=0 and accumulate current thicknesses. Folded systems
 * use an authored explicit image plane when present; otherwise their image plane
 * tracks the current last-surface-plus-BFD position like ordinary prescriptions.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns surface z positions, current thicknesses, and image-plane z in mm
 */
export function doLayout(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const th = L.S.map((_: unknown, i: number) => thick(i, focusT, zoomT, L, aberrationT));
  const z = buildZPositions(th);
  const defaultImgZ = z[z.length - 1] + th[th.length - 1];
  const lens = compiledLensFromRuntime(L);
  const hasExplicitFoldedImagePlane = lens.flags.isFoldedOptics && lens.hasExplicitImagePlane;
  return { z, th, imgZ: hasExplicitFoldedImagePlane ? L.imagePlane.z : defaultImgZ };
}

/**
 * Return RuntimeLens surfaces with state-adjusted thickness values.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns copied surface records with current `d` values
 */
export function stateSurfaces(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0) {
  return buildStateSurfaces(
    L.S,
    L.varByIdx,
    Boolean(L.isZoom),
    focusT,
    zoomT,
    L.aberrationControl?.varByIdx,
    aberrationT,
    L.focusPositions,
  );
}
