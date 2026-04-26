/**
 * useOverlayState — Manages open/close state for diagram panel overlays
 * (LCA overlay, Petzval overlay, aspheric deviation inspector).
 *
 * Resets all overlays when lensKey changes.
 */

import { useState, useEffect, useCallback } from "react";

export interface OverlayState {
  showLcaOverlay: boolean;
  openLcaOverlay: () => void;
  closeLcaOverlay: () => void;
  showPetzvalOverlay: boolean;
  openPetzvalOverlay: () => void;
  closePetzvalOverlay: () => void;
  asphCompareElementId: number | null;
  openAsphCompare: (eid: number) => void;
  closeAsphCompare: () => void;
}

export default function useOverlayState(lensKey: string): OverlayState {
  const [showLcaOverlay, setShowLcaOverlay] = useState(false);
  const [showPetzvalOverlay, setShowPetzvalOverlay] = useState(false);
  const [asphCompareElementId, setAsphCompareElementId] = useState<number | null>(null);

  useEffect(() => {
    setShowLcaOverlay(false);
    setShowPetzvalOverlay(false);
    setAsphCompareElementId(null);
  }, [lensKey]);

  const openLcaOverlay = useCallback(() => setShowLcaOverlay(true), []);
  const closeLcaOverlay = useCallback(() => setShowLcaOverlay(false), []);
  const openPetzvalOverlay = useCallback(() => setShowPetzvalOverlay(true), []);
  const closePetzvalOverlay = useCallback(() => setShowPetzvalOverlay(false), []);
  const openAsphCompare = useCallback((eid: number) => setAsphCompareElementId(eid), []);
  const closeAsphCompare = useCallback(() => setAsphCompareElementId(null), []);

  return {
    showLcaOverlay,
    openLcaOverlay,
    closeLcaOverlay,
    showPetzvalOverlay,
    openPetzvalOverlay,
    closePetzvalOverlay,
    asphCompareElementId,
    openAsphCompare,
    closeAsphCompare,
  };
}
