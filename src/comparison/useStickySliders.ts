/**
 * Encapsulates the sticky slider state machine for comparison mode.
 *
 * Each shared slider (focus, aperture) has a state machine:
 *   Normal → slider moves freely, prevT tracks position
 *   Stuck  → slider crossed the common point; movement rejected, value held at CP
 *   Released → on next pointerDown, stuck is cleared, slider continues freely
 *
 * Also manages the 400ms flash overlay that highlights which panel
 * hit its limit when a slider gets stuck.
 */

import { useState, useRef, useEffect, useCallback, type Dispatch, type MutableRefObject } from "react";
import { snapToCommon } from "./comparisonSliders.js";
import type { FocusPairResult, AperturePairResult } from "./comparisonSliders.js";
import { SET_SHARED_FOCUS_T, SET_SHARED_STOPDOWN_T } from "./comparisonReducer.js";
import type { LensAction } from "../types/state.js";

interface UseStickySliderResult {
  handleSharedFocusChange: (rawT: number, direct?: boolean) => void;
  handleSharedStopdownChange: (rawT: number, direct?: boolean) => void;
  handleFocusPointerDown: (value?: number) => void;
  handleAperturePointerDown: (value?: number) => void;
  flashPanel: string | null;
  resetSticky: () => void;
  prevStopdownT: MutableRefObject<number>;
}

export default function useStickySliders(
  dispatch: Dispatch<LensAction>,
  focusPair: FocusPairResult | null,
  aperturePair: AperturePairResult | null,
): UseStickySliderResult {
  const focusStuck = useRef<boolean>(false);
  const apertureStuck = useRef<boolean>(false);
  const prevFocusT = useRef<number>(0);
  const prevStopdownT = useRef<number>(0);
  const [flashPanel, setFlashPanel] = useState<string | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerFlash = useCallback((panel: string): void => {
    if (flashTimer.current != null) clearTimeout(flashTimer.current);
    setFlashPanel(panel);
    flashTimer.current = setTimeout(() => setFlashPanel(null), 400);
  }, []);

  useEffect(() => {
    return () => {
      if (flashTimer.current != null) clearTimeout(flashTimer.current);
    };
  }, []);

  const handleSharedFocusChange = useCallback(
    (rawT: number, direct = false): void => {
      // Presets and keyboard input select exactly; the detent belongs to pointer drags.
      if (direct) {
        focusStuck.current = false;
        prevFocusT.current = rawT;
        dispatch({ type: SET_SHARED_FOCUS_T, value: rawT });
        return;
      }
      const cp = focusPair?.commonPoint;
      const stickyActive = cp != null && cp > 0.01 && cp < 0.99;

      if (stickyActive && focusStuck.current) {
        dispatch({ type: SET_SHARED_FOCUS_T, value: cp });
        return;
      }

      if (stickyActive) {
        const prev = prevFocusT.current;
        if ((prev < cp && rawT >= cp) || (prev > cp && rawT <= cp)) {
          dispatch({ type: SET_SHARED_FOCUS_T, value: cp });
          prevFocusT.current = cp;
          focusStuck.current = true;
          triggerFlash(focusPair!.focusA > focusPair!.focusB ? "a" : "b");
          return;
        }
      }
      const v = cp != null ? snapToCommon(rawT, cp) : rawT;
      prevFocusT.current = v;
      dispatch({ type: SET_SHARED_FOCUS_T, value: v });
    },
    [focusPair, triggerFlash, dispatch],
  );

  const handleSharedStopdownChange = useCallback(
    (rawT: number, direct = false): void => {
      // Presets and keyboard input select exactly; the detent belongs to pointer drags.
      if (direct) {
        apertureStuck.current = false;
        prevStopdownT.current = rawT;
        dispatch({ type: SET_SHARED_STOPDOWN_T, value: rawT });
        return;
      }
      const cp = aperturePair?.commonPoint;
      const stickyActive = cp != null && cp > 0.01 && cp < 0.99;

      if (stickyActive && apertureStuck.current) {
        dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
        return;
      }

      if (stickyActive) {
        const prev = prevStopdownT.current;
        if ((prev < cp && rawT >= cp) || (prev > cp && rawT <= cp)) {
          dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
          prevStopdownT.current = cp;
          apertureStuck.current = true;
          if (aperturePair?.limitingPanel) triggerFlash(aperturePair.limitingPanel);
          return;
        }
      }
      const v = cp != null ? snapToCommon(rawT, cp) : rawT;
      prevStopdownT.current = v;
      dispatch({ type: SET_SHARED_STOPDOWN_T, value: v });
    },
    [aperturePair, triggerFlash, dispatch],
  );

  const handleFocusPointerDown = useCallback((value?: number): void => {
    if (value != null) prevFocusT.current = value;
    focusStuck.current = false;
  }, []);

  const handleAperturePointerDown = useCallback((value?: number): void => {
    if (value != null) prevStopdownT.current = value;
    apertureStuck.current = false;
  }, []);

  /** Reset all sticky state — call when entering comparison mode. */
  const resetSticky = useCallback((): void => {
    prevFocusT.current = 0;
    prevStopdownT.current = 0;
    focusStuck.current = false;
    apertureStuck.current = false;
  }, []);

  return {
    handleSharedFocusChange,
    handleSharedStopdownChange,
    handleFocusPointerDown,
    handleAperturePointerDown,
    flashPanel,
    resetSticky,
    prevStopdownT,
  };
}
