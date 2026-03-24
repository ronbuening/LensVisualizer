/**
 * React Context for LensViewer state, eliminating prop drilling.
 *
 * Two contexts split state from dispatch so that components that only
 * dispatch (buttons, toggles) avoid re-rendering when state changes.
 *
 * Sub-components (DiagramHeader, DiagramControls, etc.) remain
 * context-unaware — only LensDiagramPanel reads from context.
 */

import { createContext, useContext, type Dispatch } from "react";
import type { LensState, LensAction } from "../types/state.js";
import type { Theme } from "../types/theme.js";

export interface LensCtxValue {
  state: LensState;
  theme: Theme;
  isWide: boolean;
  updateURLWithSliders: () => void;
}

/**
 * Carries: { state, theme, isWide, updateURLWithSliders }
 * - state: full reducer state from useLensState
 * - theme: derived theme object (t)
 * - isWide: boolean from useMediaQuery
 * - updateURLWithSliders: debounced URL update callback
 */
export const LensStateContext = createContext<LensCtxValue | null>(null);

/**
 * Carries: dispatch (stable ref from useReducer)
 */
export const LensDispatchContext = createContext<Dispatch<LensAction> | null>(null);

/** Read the full context value (state + derived). */
export function useLensCtx(): LensCtxValue {
  const ctx = useContext(LensStateContext);
  if (!ctx) throw new Error("useLensCtx must be used within a LensStateContext.Provider");
  return ctx;
}

/** Read only the dispatch function. */
export function useLensDispatch(): Dispatch<LensAction> {
  const ctx = useContext(LensDispatchContext);
  if (!ctx) throw new Error("useLensDispatch must be used within a LensDispatchContext.Provider");
  return ctx;
}
