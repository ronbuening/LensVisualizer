/**
 * useOverlays — Overlay open/close management and primer level state.
 *
 * Consolidates:
 *   • Named open/close callbacks for all four overlays (About Site, About Author, Optics Primer, Aberrations Primer)
 *   • Primer level toggles (simple ↔ intermediate) for Optics and Aberrations overlays
 *   • Escape key handler that closes all overlays and resets primer levels
 */

import { useState, useCallback, useEffect, type Dispatch } from "react";
import { SET_OVERLAY, CLOSE_ALL_OVERLAYS } from "../../utils/lensReducer.js";
import type { LensAction } from "../../types/state.js";

interface UseOverlaysParams {
  showAbout: boolean;
  showAboutSite: boolean;
  showOpticsPrimer: boolean;
  showAberrationsPrimer: boolean;
  dispatch: Dispatch<LensAction>;
}

interface UseOverlaysResult {
  primerLevel: "simple" | "intermediate";
  togglePrimerLevel: () => void;
  aberrationsLevel: "simple" | "intermediate";
  toggleAberrationsLevel: () => void;
  openAboutSite: () => void;
  openAboutAuthor: () => void;
  openOpticsPrimer: () => void;
  openAberrationsPrimer: () => void;
  closeAboutSite: () => void;
  closeAboutAuthor: () => void;
  closeOpticsPrimer: () => void;
  closeAberrationsPrimer: () => void;
}

export default function useOverlays({
  showAbout,
  showAboutSite,
  showOpticsPrimer,
  showAberrationsPrimer,
  dispatch,
}: UseOverlaysParams): UseOverlaysResult {
  const [primerLevel, setPrimerLevel] = useState<"simple" | "intermediate">("simple");
  const [aberrationsLevel, setAberrationsLevel] = useState<"simple" | "intermediate">("simple");

  /* ── Escape key closes all overlays ── */
  useEffect(() => {
    if (!showAbout && !showAboutSite && !showOpticsPrimer && !showAberrationsPrimer) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: CLOSE_ALL_OVERLAYS });
        setPrimerLevel("simple");
        setAberrationsLevel("simple");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showAbout, showAboutSite, showOpticsPrimer, showAberrationsPrimer, dispatch]);

  /* ── Named callbacks ── */
  const togglePrimerLevel = useCallback(() => {
    setPrimerLevel((prev) => (prev === "simple" ? "intermediate" : "simple"));
  }, []);

  const toggleAberrationsLevel = useCallback(() => {
    setAberrationsLevel((prev) => (prev === "simple" ? "intermediate" : "simple"));
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

  const openAberrationsPrimer = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showAberrationsPrimer", visible: true });
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

  const closeAberrationsPrimer = useCallback(() => {
    dispatch({ type: SET_OVERLAY, overlay: "showAberrationsPrimer", visible: false });
    setAberrationsLevel("simple");
  }, [dispatch]);

  return {
    primerLevel,
    togglePrimerLevel,
    aberrationsLevel,
    toggleAberrationsLevel,
    openAboutSite,
    openAboutAuthor,
    openOpticsPrimer,
    openAberrationsPrimer,
    closeAboutSite,
    closeAboutAuthor,
    closeOpticsPrimer,
    closeAberrationsPrimer,
  };
}
