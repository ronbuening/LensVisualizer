/**
 * Custom hook wrapping useReducer for LensViewer state.
 *
 * Handles initialization from localStorage prefs + URL params,
 * merging with precedence: URL > prefs > defaults.
 */

import { useReducer, type Dispatch } from "react";
import lensReducer, { createInitialState } from "./lensReducer.js";
import { loadPrefs } from "./preferences.js";
import { parseLensKeysFromSearch } from "./parseComparisonParams.js";
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
      const search = typeof window !== "undefined" ? window.location.search : "";
      const viewState = lensViewQueryToUrlState(parseLensViewQuery(search));
      let urlState: Partial<URLState>;
      if (initKeyA && initKeyB && keys.includes(initKeyA) && keys.includes(initKeyB)) {
        urlState = { ...viewState, comparing: true, lensKeyA: initKeyA, lensKeyB: initKeyB };
      } else if (initKeyA && keys.includes(initKeyA)) {
        urlState = { ...viewState, singleLens: initKeyA };
      } else if (initKeyA) {
        urlState = viewState;
      } else {
        urlState = { ...viewState, ...parseLensKeysFromSearch(search, keys) };
      }
      return createInitialState(prefs, urlState, wide, keys);
    },
  );

  return [state, dispatch, isWide];
}
