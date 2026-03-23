/**
 * Custom hook wrapping useReducer for LensViewer state.
 *
 * Handles initialization from localStorage prefs + URL params,
 * merging with precedence: URL > prefs > defaults.
 */

import { useReducer } from "react";
import lensReducer, { createInitialState } from "./lensReducer.js";
import { loadPrefs } from "./preferences.js";
import { parseComparisonParams } from "./parseComparisonParams.js";
import useMediaQuery from "./useMediaQuery.js";

/**
 * @param {string[]} catalogKeys — valid lens keys from the catalog
 * @returns {[Object, Function]} [state, dispatch]
 */
export default function useLensState(catalogKeys) {
  const isWide = useMediaQuery("(min-width: 900px)");

  const [state, dispatch] = useReducer(lensReducer, { catalogKeys, isWide }, ({ catalogKeys: keys, isWide: wide }) => {
    const prefs = loadPrefs(keys);
    const urlState = typeof window !== "undefined" ? parseComparisonParams(window.location.search, keys) : {};
    return createInitialState(prefs, urlState, wide, keys);
  });

  return [state, dispatch, isWide];
}
