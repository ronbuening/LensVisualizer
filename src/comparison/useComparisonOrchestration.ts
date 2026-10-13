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
import useComparisonMode, { type ComparisonLensesResult } from "./useComparisonMode.js";
import useStickySliders from "./useStickySliders.js";
import {
  SET_SHARED_STOPDOWN_T,
  SET_SHARED_SHIFT_MM,
  SET_SHARED_TILT_DEG,
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "./comparisonReducer.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult, MovementPairResult } from "./comparisonSliders.js";
import type { LensState, LensAction } from "../types/state.js";
import { canonicalPagePath } from "../utils/seo/siteUrls.js";
import { buildLensViewQuery } from "../utils/state/lensViewUrlState.js";

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
  movementPair: MovementPairResult | null;
  maxHeaderHeight: number;
  handleHeaderHeight: (panelId: string, height: number) => void;
  flashPanel: string | null;
  handleSharedFocusChange: (value: number, direct?: boolean) => void;
  handleSharedStopdownChange: (value: number, direct?: boolean) => void;
  handleSharedShiftChange: (value: number) => void;
  handleSharedTiltChange: (value: number) => void;
  handleFocusPointerDown: (value?: number) => void;
  handleAperturePointerDown: (value?: number) => void;
  toggleCompare: () => void;
}

export default function useComparisonOrchestration({
  state,
  dispatch,
  navigate,
  catalogKeys,
}: UseComparisonOrchestrationParams): ComparisonOrchestration {
  const { lens, sharedSliders } = state;
  const { lensKeyA, lensKeyB, teleconverterKeyA, teleconverterKeyB, comparing, scaleMode } = lens;
  const { sharedFocusT, sharedStopdownT, sharedZoomT, sharedShiftMm, sharedTiltDeg } = sharedSliders;

  /* ── Comparison mode: lens building, slider pairs, scale ratios, header alignment ── */
  const {
    comparisonLenses,
    scaleRatios,
    focusPair,
    aperturePair,
    zoomPair,
    movementPair,
    handleHeaderHeight,
    maxHeaderHeight,
  } = useComparisonMode({
    comparing,
    lensKeyA,
    lensKeyB,
    teleconverterKeyA,
    teleconverterKeyB,
    scaleMode,
    sharedFocusT,
    sharedStopdownT,
    sharedZoomT,
    sharedShiftMm,
    sharedTiltDeg,
  });

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
  } = useStickySliders(dispatch, focusPair, aperturePair);

  const handleSharedShiftChange = useCallback(
    (value: number) => dispatch({ type: SET_SHARED_SHIFT_MM, value }),
    [dispatch],
  );
  const handleSharedTiltChange = useCallback(
    (value: number) => dispatch({ type: SET_SHARED_TILT_DEG, value }),
    [dispatch],
  );

  /* ── Set default aperture to slowest lens wide-open when entering comparison ── */
  useEffect(() => {
    if (!justEnteredCompare.current || !aperturePair) return;
    justEnteredCompare.current = false;
    const cp = aperturePair.commonPoint;
    prevStopdownT.current = cp;
    dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
  }, [aperturePair, dispatch, prevStopdownT]);

  /* ── Enter/exit comparison mode ── */
  const toggleCompare = useCallback(() => {
    if (!comparing) {
      dispatch({ type: ENTER_COMPARE, catalogKeys });
      resetSticky();
      justEnteredCompare.current = true;
      const comparisonKeyA = lens.selectedConfigurationKey;
      /* Mirrors ENTER_COMPARE: a mounted converter is compared against its own bare host. */
      const autoB =
        teleconverterKeyA !== null
          ? comparisonKeyA
          : comparisonKeyA === lensKeyB && catalogKeys.length > 1
            ? catalogKeys[(catalogKeys.indexOf(comparisonKeyA) + 1) % catalogKeys.length]
            : lensKeyB;
      /* The compare route mounts a fresh viewer that initializes from the URL, so a mounted converter has to
         travel in the navigation itself; the debounced URL writer would run too late to carry it across. */
      const search = buildLensViewQuery({ comparing: true, teleconverterKeyA }).toString();
      void navigate(canonicalPagePath(`/compare/${comparisonKeyA}/${autoB}${search ? `?${search}` : ""}`), {
        replace: false,
      });
    } else {
      dispatch({
        type: EXIT_COMPARE,
        focusA: focusPair?.focusA,
        stopdownA: aperturePair?.stopdownA,
        ...(movementPair ? { shiftA: movementPair.shiftA, tiltA: movementPair.tiltA } : {}),
      });
      /* Same remount on the way out: pane A's converter follows its lens back to the single-lens route. */
      const search = buildLensViewQuery({ teleconverterKey: teleconverterKeyA }).toString();
      void navigate(canonicalPagePath(`/lens/${lensKeyA}${search ? `?${search}` : ""}`), { replace: false });
    }
  }, [
    comparing,
    lensKeyA,
    lensKeyB,
    teleconverterKeyA,
    lens.selectedConfigurationKey,
    focusPair,
    aperturePair,
    movementPair,
    dispatch,
    resetSticky,
    navigate,
    catalogKeys,
  ]);

  return {
    comparisonLenses,
    scaleRatios,
    focusPair,
    aperturePair,
    zoomPair,
    movementPair,
    maxHeaderHeight,
    handleHeaderHeight,
    flashPanel,
    handleSharedFocusChange,
    handleSharedStopdownChange,
    handleSharedShiftChange,
    handleSharedTiltChange,
    handleFocusPointerDown,
    handleAperturePointerDown,
    toggleCompare,
  };
}
