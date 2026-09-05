/**
 * useComparisonDisplayValues — derived readouts for comparison-mode chrome.
 *
 * ComparisonContent needs a handful of computed values to drive the shared
 * slider bar. Pulling that calculation into a dedicated hook keeps the content
 * component focused on routing between the success and error UI states.
 */

import { prepareRuntimeState } from "../optics/compat.js";
import { formatWorkingApertureNote } from "../components/controls/apertureFormatting.js";
import { useMemo } from "react";
import { eflAtFocus, apertureMetricsForState, resolveApertureStop } from "../optics/optics.js";
import { sharedFNumber } from "./comparisonSliders.js";
import { isComparisonOk, type ComparisonLensesResult } from "./useComparisonMode.js";
import type { AperturePairResult, FocusPairResult, ZoomPairResult } from "./comparisonSliders.js";

interface UseComparisonDisplayValuesParams {
  comparisonLenses: ComparisonLensesResult;
  focusPair: FocusPairResult | null;
  aperturePair: AperturePairResult | null;
  zoomPair: ZoomPairResult | null;
  sharedStopdownT: number;
}

/**
 * Build the derived focal-length and f-number readouts needed by the shared
 * comparison sliders.
 *
 * @param params - comparison build result plus the shared slider positions
 * @returns normalized lens handles and display-oriented derived values
 */
export default function useComparisonDisplayValues({
  comparisonLenses,
  focusPair,
  aperturePair,
  zoomPair,
  sharedStopdownT,
}: UseComparisonDisplayValuesParams) {
  const ok = isComparisonOk(comparisonLenses);
  const LA = ok ? comparisonLenses.LA : null;
  const LB = ok ? comparisonLenses.LB : null;
  const focusA = focusPair?.focusA ?? 0;
  const focusB = focusPair?.focusB ?? 0;
  const zoomA = zoomPair?.zoomA ?? 0;
  const zoomB = zoomPair?.zoomB ?? 0;

  const infinityEflA = useMemo(() => (LA ? eflAtFocus(0, zoomA, LA) : NaN), [LA, zoomA]);
  const infinityEflB = useMemo(() => (LB ? eflAtFocus(0, zoomB, LB) : NaN), [LB, zoomB]);
  const dynamicEflA = useMemo(() => (LA ? eflAtFocus(focusA, zoomA, LA) : 0), [LA, focusA, zoomA]);
  const dynamicEflB = useMemo(() => (LB ? eflAtFocus(focusB, zoomB, LB) : 0), [LB, focusB, zoomB]);

  const sharedDisplayFNumber = aperturePair
    ? sharedFNumber(sharedStopdownT, aperturePair.widerFOPEN, aperturePair.sharedMaxFstop)
    : 1;
  const fNumA = LA ? LA.FOPEN * Math.pow(LA.maxFstop / LA.FOPEN, aperturePair?.stopdownA ?? 0) : sharedDisplayFNumber;
  const fNumB = LB ? LB.FOPEN * Math.pow(LB.maxFstop / LB.FOPEN, aperturePair?.stopdownB ?? 0) : sharedDisplayFNumber;

  const apertureA = useMemo(
    () =>
      LA
        ? apertureMetricsForState(
            prepareRuntimeState(LA, focusA, zoomA),
            resolveApertureStop(LA, zoomA, fNumA).stopSemiDiameterMm,
          )
        : null,
    [LA, fNumA, focusA, zoomA],
  );
  const apertureB = useMemo(
    () =>
      LB
        ? apertureMetricsForState(
            prepareRuntimeState(LB, focusB, zoomB),
            resolveApertureStop(LB, zoomB, fNumB).stopSemiDiameterMm,
          )
        : null,
    [LB, fNumB, focusB, zoomB],
  );
  const effectiveFNumA = LA ? (apertureA?.workingFNumber ?? NaN) : fNumA;
  const effectiveFNumB = LB ? (apertureB?.workingFNumber ?? NaN) : fNumB;
  const workingApertureNoteA = formatWorkingApertureNote(apertureA);
  const workingApertureNoteB = formatWorkingApertureNote(apertureB);

  return {
    ok,
    LA,
    LB,
    infinityEflA,
    infinityEflB,
    dynamicEflA,
    dynamicEflB,
    effectiveFNumA,
    effectiveFNumB,
    workingApertureNoteA,
    workingApertureNoteB,
  };
}
