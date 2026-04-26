/**
 * useOverlayState — Manages the aspheric deviation inspector overlay,
 * which has a per-element modal lifecycle that does not belong in the
 * shareable URL surface (selecting an aspheric element to compare is a
 * transient interaction). Other overlays (Abbe/glass map, LCA, Petzval,
 * bokeh, analysis drawer) live in the reducer-backed `panels` slice and
 * are URL-shareable.
 */

import { useState, useEffect, useCallback } from "react";

export interface OverlayState {
  asphCompareElementId: number | null;
  openAsphCompare: (eid: number) => void;
  closeAsphCompare: () => void;
}

export default function useOverlayState(lensKey: string): OverlayState {
  const [asphCompareElementId, setAsphCompareElementId] = useState<number | null>(null);

  useEffect(() => {
    setAsphCompareElementId(null);
  }, [lensKey]);

  const openAsphCompare = useCallback((eid: number) => setAsphCompareElementId(eid), []);
  const closeAsphCompare = useCallback(() => setAsphCompareElementId(null), []);

  return {
    asphCompareElementId,
    openAsphCompare,
    closeAsphCompare,
  };
}
