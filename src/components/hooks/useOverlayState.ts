/**
 * useOverlayState — Manages open/close state for diagram panel overlays
 * (Abbe diagram, LCA overlay, Petzval overlay, bokeh preview).
 *
 * Resets all overlays when lensKey changes.
 */

import { useState, useEffect, useCallback } from "react";

export interface OverlayState {
  showAbbeDiagram: boolean;
  openAbbeDiagram: () => void;
  closeAbbeDiagram: () => void;
  showBokehPreview: boolean;
  openBokehPreview: () => void;
  closeBokehPreview: () => void;
  showLcaOverlay: boolean;
  openLcaOverlay: () => void;
  closeLcaOverlay: () => void;
  showPetzvalOverlay: boolean;
  openPetzvalOverlay: () => void;
  closePetzvalOverlay: () => void;
}

export default function useOverlayState(lensKey: string): OverlayState {
  const [showAbbeDiagram, setShowAbbeDiagram] = useState(false);
  const [showBokehPreview, setShowBokehPreview] = useState(false);
  const [showLcaOverlay, setShowLcaOverlay] = useState(false);
  const [showPetzvalOverlay, setShowPetzvalOverlay] = useState(false);

  useEffect(() => {
    setShowAbbeDiagram(false);
    setShowBokehPreview(false);
    setShowLcaOverlay(false);
    setShowPetzvalOverlay(false);
  }, [lensKey]);

  const openAbbeDiagram = useCallback(() => setShowAbbeDiagram(true), []);
  const closeAbbeDiagram = useCallback(() => setShowAbbeDiagram(false), []);
  const openBokehPreview = useCallback(() => setShowBokehPreview(true), []);
  const closeBokehPreview = useCallback(() => setShowBokehPreview(false), []);
  const openLcaOverlay = useCallback(() => setShowLcaOverlay(true), []);
  const closeLcaOverlay = useCallback(() => setShowLcaOverlay(false), []);
  const openPetzvalOverlay = useCallback(() => setShowPetzvalOverlay(true), []);
  const closePetzvalOverlay = useCallback(() => setShowPetzvalOverlay(false), []);

  return {
    showAbbeDiagram,
    openAbbeDiagram,
    closeAbbeDiagram,
    showBokehPreview,
    openBokehPreview,
    closeBokehPreview,
    showLcaOverlay,
    openLcaOverlay,
    closeLcaOverlay,
    showPetzvalOverlay,
    openPetzvalOverlay,
    closePetzvalOverlay,
  };
}
