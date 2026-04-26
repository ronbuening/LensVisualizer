import { buildComparisonURL } from "./parseComparisonParams.js";
import { buildLensViewQueryFromState, parseLensViewQuery } from "./lensViewUrlState.js";
import { LENS_CATALOG } from "./lensCatalog.js";
import { SET_SHARED_ZOOM_T, SET_ZOOM_T } from "./lensReducer.js";
import { focalLengthToZoomT, zoomTToFocalLength, type ZoomConvertibleLens } from "./zoomConversion.js";
import type { LensAction, LensState } from "../types/state.js";
import type { RuntimeLens } from "../types/optics.js";

export interface ComparisonLenses {
  LA: RuntimeLens;
  LB: RuntimeLens;
  error?: undefined;
}

export interface ComparisonError {
  error: unknown;
}

export type ComparisonLensesParam = ComparisonLenses | ComparisonError | null;

export function getComparisonZoomLens(comparisonLenses: ComparisonLensesParam): ZoomConvertibleLens | null {
  if (!comparisonLenses || !("LA" in comparisonLenses)) return null;
  const { LA, LB } = comparisonLenses;
  return LA.isZoom ? LA : LB.isZoom ? LB : null;
}

export function getCatalogZoomLens(lensKey: string): ZoomConvertibleLens | null {
  const lensData = LENS_CATALOG[lensKey];
  if (!lensData || !Array.isArray(lensData.zoomPositions) || lensData.zoomPositions.length < 2) return null;
  return {
    isZoom: true,
    zoomPositions: lensData.zoomPositions,
  };
}

export function getUrlZoomLens(state: LensState, comparisonLenses: ComparisonLensesParam): ZoomConvertibleLens | null {
  return state.lens.comparing ? getComparisonZoomLens(comparisonLenses) : getCatalogZoomLens(state.lens.lensKeyA);
}

export function getStateZoom(
  state: LensState,
  comparisonLenses: ComparisonLensesParam,
  currentSearch: string,
): number | null {
  const zoomLens = getUrlZoomLens(state, comparisonLenses);
  if (!zoomLens) return parseLensViewQuery(currentSearch).zoom ?? null;

  const currentZoomT = state.lens.comparing ? state.sharedSliders.sharedZoomT : state.sliders.zoomT;
  return currentZoomT > 0 ? zoomTToFocalLength(currentZoomT, zoomLens) : null;
}

export function buildLensViewSearch(
  state: LensState,
  comparisonLenses: ComparisonLensesParam,
  currentSearch: string,
  isComparePage = false,
): string {
  const params = buildLensViewQueryFromState(state, getStateZoom(state, comparisonLenses, currentSearch));
  if (isComparePage && !state.lens.comparing) {
    params.delete("a_el");
    params.delete("b_el");
  }
  const search = params.toString();
  return search ? `?${search}` : "";
}

export function buildRouteLensViewUrl(
  state: LensState,
  comparisonLenses: ComparisonLensesParam,
  pathname: string,
  currentSearch: string,
  isComparePage = false,
): string {
  return `${pathname}${buildLensViewSearch(state, comparisonLenses, currentSearch, isComparePage)}`;
}

export function buildLegacyLensViewUrl(
  state: LensState,
  comparisonLenses: ComparisonLensesParam,
  currentSearch: string,
): string {
  const baseUrl = buildComparisonURL(state.lens.comparing, state.lens.lensKeyA, state.lens.lensKeyB);
  const suffix = buildLensViewSearch(state, comparisonLenses, currentSearch).slice(1);
  return suffix ? `${baseUrl}${baseUrl ? "&" : "?"}${suffix}` : baseUrl;
}

export function buildLegacyLensIdentityUrl(state: LensState): string {
  return buildComparisonURL(state.lens.comparing, state.lens.lensKeyA, state.lens.lensKeyB);
}

export function zoomActionFromUrl(
  search: string,
  state: LensState,
  comparisonLenses: ComparisonLensesParam,
): LensAction | null {
  return zoomActionFromFocalLength(parseLensViewQuery(search).zoom ?? null, state, comparisonLenses);
}

export function zoomActionFromFocalLength(
  zoom: number | null,
  state: LensState,
  comparisonLenses: ComparisonLensesParam,
): LensAction | null {
  const type = state.lens.comparing ? SET_SHARED_ZOOM_T : SET_ZOOM_T;
  if (zoom == null) return { type, value: 0 };

  const zoomLens = getUrlZoomLens(state, comparisonLenses);
  if (!zoomLens) return null;
  return { type, value: focalLengthToZoomT(zoom, zoomLens) };
}
