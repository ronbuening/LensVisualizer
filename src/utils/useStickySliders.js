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

import { useState, useRef, useCallback } from "react";
import { ENABLE_SLIDER_STICKY, ENABLE_SLIDER_STICKY_FLASH } from "./featureFlags.js";
import { snapToCommon } from "./comparisonSliders.js";
import { SET_SHARED_FOCUS_T, SET_SHARED_STOPDOWN_T } from "./lensReducer.js";

/**
 * @param {Function}    dispatch         — reducer dispatch
 * @param {Object|null} focusPair        — { focusA, focusB, commonPoint, ... }
 * @param {Object|null} aperturePair     — { stopdownA, stopdownB, commonPoint, ... }
 * @param {Object|null} comparisonLenses — { LA, LB } or null
 * @returns {{
 *   handleSharedFocusChange: Function,
 *   handleSharedStopdownChange: Function,
 *   handleFocusPointerDown: Function,
 *   handleAperturePointerDown: Function,
 *   flashPanel: string|null,
 *   resetSticky: Function,
 * }}
 */
export default function useStickySliders(dispatch, focusPair, aperturePair, comparisonLenses) {
  const focusStuck = useRef(false);
  const apertureStuck = useRef(false);
  const prevFocusT = useRef(0);
  const prevStopdownT = useRef(0);
  const [flashPanel, setFlashPanel] = useState(null);

  const triggerFlash = useCallback((panel) => {
    if (!ENABLE_SLIDER_STICKY_FLASH) return;
    setFlashPanel(panel);
    setTimeout(() => setFlashPanel(null), 400);
  }, []);

  const handleSharedFocusChange = useCallback(
    (rawT) => {
      const cp = focusPair?.commonPoint;
      const stickyActive = ENABLE_SLIDER_STICKY && cp > 0.01 && cp < 0.99;

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
          const { LA, LB } = comparisonLenses;
          triggerFlash(LA.closeFocusM > LB.closeFocusM ? "a" : "b");
          return;
        }
      }
      const v = snapToCommon(rawT, cp);
      prevFocusT.current = v;
      dispatch({ type: SET_SHARED_FOCUS_T, value: v });
    },
    [focusPair, comparisonLenses, triggerFlash, dispatch],
  );

  const handleSharedStopdownChange = useCallback(
    (rawT) => {
      const cp = aperturePair?.commonPoint;
      const stickyActive = ENABLE_SLIDER_STICKY && cp > 0.01 && cp < 0.99;

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
          const { LA, LB } = comparisonLenses;
          triggerFlash(LA.FOPEN > LB.FOPEN ? "a" : "b");
          return;
        }
      }
      const v = snapToCommon(rawT, cp);
      prevStopdownT.current = v;
      dispatch({ type: SET_SHARED_STOPDOWN_T, value: v });
    },
    [aperturePair, comparisonLenses, triggerFlash, dispatch],
  );

  const handleFocusPointerDown = useCallback(() => {
    focusStuck.current = false;
  }, []);

  const handleAperturePointerDown = useCallback(() => {
    apertureStuck.current = false;
  }, []);

  /** Reset all sticky state — call when entering comparison mode. */
  const resetSticky = useCallback(() => {
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
