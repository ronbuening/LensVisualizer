import { useState, useCallback, useRef } from "react";

const SAFETY_TIMEOUT_MS = 150;

export interface InteractionSignal {
  interacting: boolean;
  beginInteraction: () => void;
  endInteraction: () => void;
  onChangeActivity: () => void;
}

/**
 * Tracks whether the user is actively dragging a slider.
 *
 * Wire `beginInteraction` to `onPointerDown`, `endInteraction` to `onPointerUp`,
 * and `onChangeActivity` to every `onChange` on the input. The safety timeout
 * ensures `interacting` returns to false even when `pointerup` fires outside the
 * element bounds (common on touch devices).
 *
 * `interacting` is used by Stage 4 for adaptive ray LOD. For Stage 2 the value
 * is threaded through but not yet consumed.
 */
export default function useInteractionSignal(): InteractionSignal {
  const [interacting, setInteracting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const beginInteraction = useCallback(() => {
    if (timeoutRef.current != null) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setInteracting(true);
  }, []);

  const endInteraction = useCallback(() => {
    if (timeoutRef.current != null) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setInteracting(false);
  }, []);

  const onChangeActivity = useCallback(() => {
    if (timeoutRef.current != null) clearTimeout(timeoutRef.current);
    setInteracting(true);
    timeoutRef.current = setTimeout(() => setInteracting(false), SAFETY_TIMEOUT_MS);
  }, []);

  return { interacting, beginInteraction, endInteraction, onChangeActivity };
}
