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
      const parsed =
        typeof window !== "undefined"
          ? parseComparisonParams(window.location.search, keys)
          : ({} as ReturnType<typeof parseComparisonParams>);
      /* Extract slider values from query params (null → undefined for URLState compat) */
      const sliders: Partial<URLState> = {};
      if ("focus" in parsed && parsed.focus != null) sliders.focus = parsed.focus;
      if ("aperture" in parsed && parsed.aperture != null) sliders.aperture = parsed.aperture;
      const shareableView: Partial<URLState> = {};
      if ("analysisDrawerOpen" in parsed && parsed.analysisDrawerOpen != null)
        shareableView.analysisDrawerOpen = parsed.analysisDrawerOpen;
      if ("analysisDrawerTab" in parsed && parsed.analysisDrawerTab)
        shareableView.analysisDrawerTab = parsed.analysisDrawerTab;
      if ("glassMapOpen" in parsed && parsed.glassMapOpen != null) shareableView.glassMapOpen = parsed.glassMapOpen;
      if ("bokehPreviewOpen" in parsed && parsed.bokehPreviewOpen != null)
        shareableView.bokehPreviewOpen = parsed.bokehPreviewOpen;
      if ("selectedElementA" in parsed && parsed.selectedElementA != null)
        shareableView.selectedElementA = parsed.selectedElementA;
      if ("selectedElementB" in parsed && parsed.selectedElementB != null)
        shareableView.selectedElementB = parsed.selectedElementB;
      const parsedLens: Partial<URLState> = {};
      if ("comparing" in parsed && typeof parsed.comparing === "boolean") parsedLens.comparing = parsed.comparing;
      if ("lensKeyA" in parsed && parsed.lensKeyA) parsedLens.lensKeyA = parsed.lensKeyA;
      if ("lensKeyB" in parsed && parsed.lensKeyB) parsedLens.lensKeyB = parsed.lensKeyB;
      if ("singleLens" in parsed && parsed.singleLens) parsedLens.singleLens = parsed.singleLens;
      let urlState: Partial<URLState>;
      if (initKeyA && initKeyB && keys.includes(initKeyA) && keys.includes(initKeyB)) {
        urlState = { ...sliders, ...shareableView, comparing: true, lensKeyA: initKeyA, lensKeyB: initKeyB };
      } else if (initKeyA && keys.includes(initKeyA)) {
        urlState = { ...sliders, ...shareableView, singleLens: initKeyA };
      } else {
        urlState = initKeyA ? { ...sliders, ...shareableView } : { ...sliders, ...shareableView, ...parsedLens };
      }
      return createInitialState(prefs, urlState, wide, keys);
    },
  );

  return [state, dispatch, isWide];
}
