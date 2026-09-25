import { buildComparisonURL } from "./parseComparisonParams.js";
import { buildLensViewQueryFromState, parseLensViewQuery } from "./lensViewUrlState.js";
import { LENS_CATALOG } from "../catalog/lensCatalog.js";
import { SELECT_SOURCE_STATE, SET_SHARED_ZOOM_T, SET_ZOOM_T } from "./lensReducer.js";
import { focalLengthToZoomT, zoomTToFocalLength, type ZoomConvertibleLens } from "./zoomConversion.js";
import type { LensAction, LensState } from "../../types/state.js";
import type { RuntimeLens } from "../../types/optics.js";
import { lensSourceStates, resolveLensSourceState } from "../../optics/sourceStates.js";
import { canonicalPagePath } from "../seo/siteUrls.js";

/**
 * lensViewUrlSync — bridges reducer-shaped LensState to the URL surface
 * defined by `lensViewUrlState`. Owns the route-vs-legacy URL build paths
 * and the focal-length ↔ `zoomT` conversion gated by the loaded lens(es).
 */

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
  return state.lens.comparing
    ? getComparisonZoomLens(comparisonLenses)
    : getCatalogZoomLens(state.lens.selectedConfigurationKey);
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
  const data = LENS_CATALOG[state.lens.selectedConfigurationKey];
  const sourceState =
    !state.lens.comparing && data
      ? resolveLensSourceState(data, state.sliders.focusT, state.sliders.zoomT, state.sliders.aberrationT)
      : undefined;
  const params = buildLensViewQueryFromState(
    state,
    getStateZoom(state, comparisonLenses, currentSearch),
    sourceState ? `${data.key}:${sourceState.id}` : undefined,
  );
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
  return canonicalPagePath(`${pathname}${buildLensViewSearch(state, comparisonLenses, currentSearch, isComparePage)}`);
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

/**
 * Resolve a lens-scoped URL identity into the same atomic action used by the selector.
 * @param state - current viewer (or its initial state)
 * @param identity - parsed lens-key:state-id token
 * @param configurationKey - optical configuration being restored, when different from current
 * @returns exact authored selection, or null for unknown/cross-lens IDs and comparison mode
 */
export function sourceStateActionFromUrl(
  state: LensState,
  identity: string | undefined,
  configurationKey = state.lens.selectedConfigurationKey,
): LensAction | null {
  if (state.lens.comparing || !identity) return null;
  const data = LENS_CATALOG[configurationKey];
  if (!data || !identity.startsWith(`${data.key}:`)) return null;
  const sourceState = lensSourceStates(data).find((s) => identity === `${data.key}:${s.id}`);
  return sourceState ? { type: SELECT_SOURCE_STATE, lensKey: data.key, sourceState } : null;
}
