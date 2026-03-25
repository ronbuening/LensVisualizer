/**
 * useOverlays — Overlay open/close management and primer level state.
 *
 * Consolidates:
 *   • Named open/close callbacks for all three overlays (About Site, About Author, Optics Primer)
 *   • Primer level toggle (simple ↔ intermediate)
 *   • Escape key handler that closes all overlays and resets primer level
 */

import { useState, useCallback, useEffect, type Dispatch } from "react";
import { SET_OVERLAY, CLOSE_ALL_OVERLAYS } from "../../utils/lensReducer.js";
import type { LensAction } from "../../types/state.js";

interface UseOverlaysParams {
  showAbout: boolean;
  showAboutSite: boolean;
  showOpticsPrimer: boolean;
  dispatch: Dispatch<LensAction>;
}

interface UseOverlaysResult {
  primerLevel: "simple" | "intermediate";
  togglePrimerLevel: () => void;
  openAboutSite: () => void;
  openAboutAuthor: () => void;
  openOpticsPrimer: () => void;
  closeAboutSite: () => void;
  closeAboutAuthor: () => void;
  closeOpticsPrimer: () => void;
}

export default function useOverlays({
  showAbout,
  showAboutSite,
  showOpticsPrimer,
  dispatch,
}: UseOverlaysParams): UseOverlaysResult {
  const [primerLevel, setPrimerLevel] = useState<"simple" | "intermediate">("simple");

  /* ── Escape key closes all overlays ── */
  useEffect(() => {
    if (!showAbout && !showAboutSite && !showOpticsPrimer) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: CLOSE_ALL_OVERLAYS });
        setPrimerLevel("simple");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showAbout, showAboutSite, showOpticsPrimer, dispatch]);

  /* ── Named callbacks ── */
  const togglePrimerLevel = useCallback(() => {
    setPrimerLevel((prev) => (prev === "simple" ? "intermediate" : "simple"));
  }, []);

  const openAboutSite = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: true });
  }, [dispatch]);

  const openAboutAuthor = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: true });
  }, [dispatch]);

  const openOpticsPrimer = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: true });
  }, [dispatch]);

  const closeAboutSite = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: false });
  }, [dispatch]);

  const closeAboutAuthor = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: false });
  }, [dispatch]);

  const closeOpticsPrimer = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: false });
    setPrimerLevel("simple");
  }, [dispatch]);

  return {
    primerLevel,
    togglePrimerLevel,
    openAboutSite,
    openAboutAuthor,
    openOpticsPrimer,
    closeAboutSite,
    closeAboutAuthor,
    closeOpticsPrimer,
  };
}
