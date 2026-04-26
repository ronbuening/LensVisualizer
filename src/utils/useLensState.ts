/**
 * Custom hook wrapping useReducer for LensViewer state.
 *
 * Handles initialization from localStorage prefs + URL params,
 * merging with precedence: URL > prefs > defaults.
 */

import { useReducer, type Dispatch } from "react";
import lensReducer, { createInitialState } from "./lensReducer.js";
import { loadPrefs } from "./preferences.js";
import { parseComparisonParams } from "./parseComparisonParams.js";
import { lensViewQueryToUrlState, parseLensViewQuery } from "./lensViewUrlState.js";
import useMediaQuery from "./useMediaQuery.js";
import type { LensState, LensAction, URLState } from "../types/state.js";

export default function useLensState(
  catalogKeys: string[],
  initialLensKey?: string,
  initialLensKeyB?: string,
): [LensState, Dispatch<LensAction>, boolean] {
  const isWide = useMediaQuery("(min-width: 900px)");

  const [state, dispatch] = useReducer(
    lensReducer,
    { catalogKeys, isWide, initialLensKey, initialLensKeyB },
    ({
      catalogKeys: keys,
      isWide: wide,
      initialLensKey: initKeyA,
      initialLensKeyB: initKeyB,
    }: {
      catalogKeys: string[];
      isWide: boolean;
      initialLensKey?: string;
      initialLensKeyB?: string;
    }) => {
      const prefs = loadPrefs();
      const parsed = typeof window !== "undefined" ? parseComparisonParams(window.location.search, keys) : {};
      const viewState =
        typeof window !== "undefined" ? lensViewQueryToUrlState(parseLensViewQuery(window.location.search)) : {};
      /* Extract slider values from query params (null → undefined for URLState compat) */
      const sliders: Partial<URLState> = {};
      if ("focus" in parsed && parsed.focus != null) sliders.focus = parsed.focus as number;
      if ("aperture" in parsed && parsed.aperture != null) sliders.aperture = parsed.aperture as number;
      let urlState: Partial<URLState>;
      if (initKeyA && initKeyB && keys.includes(initKeyA) && keys.includes(initKeyB)) {
        urlState = { ...viewState, ...sliders, comparing: true, lensKeyA: initKeyA, lensKeyB: initKeyB };
      } else if (initKeyA && keys.includes(initKeyA)) {
        urlState = { ...viewState, ...sliders, singleLens: initKeyA };
      } else {
        urlState = initKeyA ? { ...viewState, ...sliders } : { ...viewState, ...sliders, ...parsed };
      }
      return createInitialState(prefs, urlState, wide, keys);
    },
  );

  return [state, dispatch, isWide];
}
