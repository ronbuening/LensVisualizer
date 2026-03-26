/**
 * useComparisonOrchestration — Encapsulates all comparison-mode wiring.
 *
 * Combines useComparisonMode (lens building, slider pairs, scale ratios),
 * useStickySliders (sticky slider state machine), the enter/exit toggle,
 * and the default-aperture entry effect.
 *
 * LensViewer imports this single hook instead of wiring comparison internals.
 */

import { useCallback, useEffect, useRef, type Dispatch } from "react";
import type { NavigateFunction } from "react-router";
import useComparisonMode, { isComparisonOk, type ComparisonLensesResult } from "./useComparisonMode.js";
import useStickySliders from "./useStickySliders.js";
import { SET_SHARED_STOPDOWN_T, ENTER_COMPARE, EXIT_COMPARE } from "./comparisonReducer.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult } from "./comparisonSliders.js";
import type { LensState, LensAction } from "../types/state.js";

export { isComparisonOk } from "./useComparisonMode.js";
export type { ComparisonLensesResult } from "./useComparisonMode.js";

interface UseComparisonOrchestrationParams {
  state: LensState;
  dispatch: Dispatch<LensAction>;
  navigate: NavigateFunction;
  catalogKeys: string[];
}

export interface ComparisonOrchestration {
  comparisonLenses: ComparisonLensesResult;
  scaleRatios: { a: number; b: number } | null;
  focusPair: FocusPairResult | null;
  aperturePair: AperturePairResult | null;
  zoomPair: ZoomPairResult | null;
  maxHeaderHeight: number;
  handleHeaderHeight: (panelId: string, height: number) => void;
  flashPanel: string | null;
  handleSharedFocusChange: (value: number) => void;
  handleSharedStopdownChange: (value: number) => void;
  handleFocusPointerDown: () => void;
  handleAperturePointerDown: () => void;
  toggleCompare: () => void;
}

export default function useComparisonOrchestration({
  state,
  dispatch,
  navigate,
  catalogKeys,
}: UseComparisonOrchestrationParams): ComparisonOrchestration {
  const { lens, sharedSliders } = state;
  const { lensKeyA, lensKeyB, comparing, scaleMode } = lens;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;

  /* ── Comparison mode: lens building, slider pairs, scale ratios, header alignment ── */
  const { comparisonLenses, scaleRatios, focusPair, aperturePair, zoomPair, handleHeaderHeight, maxHeaderHeight } =
    useComparisonMode({ comparing, lensKeyA, lensKeyB, scaleMode, sharedFocusT, sharedStopdownT, sharedZoomT });

  /* ── Sticky slider state machine ── */
  const justEnteredCompare = useRef(false);
  const {
    handleSharedFocusChange,
    handleSharedStopdownChange,
    handleFocusPointerDown,
    handleAperturePointerDown,
    flashPanel,
    resetSticky,
    prevStopdownT,
  } = useStickySliders(dispatch, focusPair, aperturePair, comparisonLenses as Parameters<typeof useStickySliders>[3]);

  /* ── Set default aperture to slowest lens wide-open when entering comparison ── */
  useEffect(() => {
    if (!justEnteredCompare.current || !isComparisonOk(comparisonLenses)) return;
    justEnteredCompare.current = false;
    const { LA, LB } = comparisonLenses;
    const widerFOPEN = Math.min(LA.FOPEN, LB.FOPEN);
    const narrowerFOPEN = Math.max(LA.FOPEN, LB.FOPEN);
    const sharedMaxFstop = Math.max(LA.maxFstop, LB.maxFstop);
    const cp =
      Math.abs(widerFOPEN - narrowerFOPEN) < 0.01
        ? 0
        : Math.log(narrowerFOPEN / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);
    prevStopdownT.current = cp;
    dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
  }, [comparisonLenses, dispatch, prevStopdownT]);

  /* ── Enter/exit comparison mode ── */
  const toggleCompare = useCallback(() => {
    if (!comparing) {
      dispatch({ type: ENTER_COMPARE, catalogKeys });
      resetSticky();
      justEnteredCompare.current = true;
      const autoB =
        lensKeyA === lensKeyB && catalogKeys.length > 1
          ? catalogKeys[(catalogKeys.indexOf(lensKeyA) + 1) % catalogKeys.length]
          : lensKeyB;
      void navigate(`/compare/${lensKeyA}/${autoB}`, { replace: false });
    } else {
      dispatch({
        type: EXIT_COMPARE,
        focusA: focusPair?.focusA,
        stopdownA: aperturePair?.stopdownA,
      });
      void navigate(`/lens/${lensKeyA}`, { replace: false });
    }
  }, [comparing, lensKeyA, lensKeyB, focusPair, aperturePair, dispatch, resetSticky, navigate, catalogKeys]);

  return {
    comparisonLenses,
    scaleRatios,
    focusPair,
    aperturePair,
    zoomPair,
    maxHeaderHeight,
    handleHeaderHeight,
    flashPanel,
    handleSharedFocusChange,
    handleSharedStopdownChange,
    handleFocusPointerDown,
    handleAperturePointerDown,
    toggleCompare,
  };
}
