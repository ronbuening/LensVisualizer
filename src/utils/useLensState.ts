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
import useMediaQuery from "./useMediaQuery.js";
import type { LensState, LensAction } from "../types/state.js";

export default function useLensState(
  catalogKeys: string[],
  initialLensKey?: string,
): [LensState, Dispatch<LensAction>, boolean] {
  const isWide = useMediaQuery("(min-width: 900px)");

  const [state, dispatch] = useReducer(
    lensReducer,
    { catalogKeys, isWide, initialLensKey },
    ({ catalogKeys: keys, isWide: wide, initialLensKey: initKey }) => {
      const prefs = loadPrefs(keys);
      const parsed = typeof window !== "undefined" ? parseComparisonParams(window.location.search, keys) : {};
      const urlState = initKey && keys.includes(initKey) ? { ...parsed, singleLens: initKey } : parsed;
      return createInitialState(prefs, urlState, wide, keys);
    },
  );

  return [state, dispatch, isWide];
}
