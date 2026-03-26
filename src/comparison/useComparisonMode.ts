/**
 * useComparisonMode — Comparison-mode lens building, slider mapping, and header alignment.
 *
 * Consolidates the pure-computation side of comparison mode:
 *   • Building both lenses (with error handling)
 *   • Computing per-lens focus/aperture/zoom from shared slider positions
 *   • Normalized scale ratios for visual comparison
 *   • Header height alignment across panels
 *
 * The toggle/entry-effect logic stays in LensViewer because it depends on
 * useStickySliders outputs (circular dependency).
 */

import { useMemo, useState, useCallback } from "react";
import buildLens from "../optics/buildLens.js";
import { LENS_CATALOG } from "../utils/lensCatalog.js";
import { computeFocusPair, computeAperturePair, computeZoomPair } from "./comparisonSliders.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult } from "./comparisonSliders.js";
import type { RuntimeLens } from "../types/optics.js";

/* ── Comparison result types ── */

export interface ComparisonLensesOk {
  LA: RuntimeLens;
  LB: RuntimeLens;
  error?: undefined;
  failedKeys?: undefined;
}

interface ComparisonLensesErr {
  error: unknown;
  failedKeys: string;
  LA?: undefined;
  LB?: undefined;
}

export type ComparisonLensesResult = ComparisonLensesOk | ComparisonLensesErr | null;

export function isComparisonOk(cl: ComparisonLensesResult): cl is ComparisonLensesOk {
  return cl !== null && !cl.error;
}

/* ── Hook interface ── */

interface UseComparisonModeParams {
  comparing: boolean;
  lensKeyA: string;
  lensKeyB: string;
  scaleMode: string;
  sharedFocusT: number;
  sharedStopdownT: number;
  sharedZoomT: number;
}

interface UseComparisonModeResult {
  comparisonLenses: ComparisonLensesResult;
  scaleRatios: { a: number; b: number } | null;
  focusPair: FocusPairResult | null;
  aperturePair: AperturePairResult | null;
  zoomPair: ZoomPairResult | null;
  handleHeaderHeight: (panelId: string, height: number) => void;
  maxHeaderHeight: number;
}

/* ── Hook implementation ── */

export default function useComparisonMode({
  comparing,
  lensKeyA,
  lensKeyB,
  scaleMode,
  sharedFocusT,
  sharedStopdownT,
  sharedZoomT,
}: UseComparisonModeParams): UseComparisonModeResult {
  /* ── Build both lenses when comparison mode is active ── */
  const comparisonLenses: ComparisonLensesResult = useMemo(() => {
    if (!comparing) return null;
    try {
      return { LA: buildLens(LENS_CATALOG[lensKeyA]), LB: buildLens(LENS_CATALOG[lensKeyB]) } as ComparisonLensesOk;
    } catch (e) {
      return { error: e, failedKeys: `${lensKeyA} vs ${lensKeyB}` } as ComparisonLensesErr;
    }
  }, [comparing, lensKeyA, lensKeyB]);

  /* ── Normalized scale ratios ── */
  const scaleRatios = useMemo(() => {
    if (!isComparisonOk(comparisonLenses) || scaleMode !== "normalized") return null;
    const { LA, LB } = comparisonLenses;
    const minSC = Math.min(LA.SC, LB.SC);
    return { a: minSC / LA.SC, b: minSC / LB.SC };
  }, [comparisonLenses, scaleMode]);

  /* ── Per-lens slider values from shared positions ── */
  const focusPair = useMemo(() => {
    if (!isComparisonOk(comparisonLenses)) return null;
    return computeFocusPair(sharedFocusT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedFocusT, comparisonLenses]);

  const aperturePair = useMemo(() => {
    if (!isComparisonOk(comparisonLenses)) return null;
    return computeAperturePair(sharedStopdownT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedStopdownT, comparisonLenses]);

  const zoomPair = useMemo(() => {
    if (!isComparisonOk(comparisonLenses)) return null;
    return computeZoomPair(sharedZoomT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedZoomT, comparisonLenses]);

  /* ── Header height alignment for comparison panels ── */
  const [headerHeights, setHeaderHeights] = useState<Record<string, number>>({ a: 0, b: 0 });

  const handleHeaderHeight = useCallback((panelId: string, height: number) => {
    setHeaderHeights((prev) => (prev[panelId] === height ? prev : { ...prev, [panelId]: height }));
  }, []);

  const maxHeaderHeight = Math.max(headerHeights.a, headerHeights.b);

  return {
    comparisonLenses,
    scaleRatios,
    focusPair,
    aperturePair,
    zoomPair,
    handleHeaderHeight,
    maxHeaderHeight,
  };
}
