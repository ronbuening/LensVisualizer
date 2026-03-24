/**
 * useFlashOverlay — Flash animation state machine for sticky slider feedback.
 *
 * Two-phase animation: appear bright, then fade out. Returns flashKey,
 * flashVisible, and flashFading state for the SVG flash overlay rect.
 */
import { useState, useEffect } from "react";

interface FlashOverlayState {
  flashKey: number;
  flashVisible: boolean;
  flashFading: boolean;
}

export default function useFlashOverlay(flashOverlay: boolean): FlashOverlayState {
  const [flashKey, setFlashKey] = useState(0);
  const [flashVisible, setFlashVisible] = useState(false);
  const [flashFading, setFlashFading] = useState(false);

  useEffect(() => {
    if (!flashOverlay) return;
    setFlashVisible(true);
    setFlashFading(false);
    setFlashKey((k) => k + 1);
    /* Phase 2: start fade after two frames so browser paints the bright state */
    let raf1: number, raf2: number, timer: ReturnType<typeof setTimeout>;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setFlashFading(true);
        /* Phase 3: unmount after fade completes */
        timer = setTimeout(() => setFlashVisible(false), 500);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [flashOverlay]);

  return { flashKey, flashVisible, flashFading };
}
