/**
 * useModalDialog — accessibility behavior for modal overlay panels.
 *
 * Attach the returned ref to the dialog panel element (give it tabIndex={-1}
 * so it can take focus when it contains no focusable children). Provides:
 *   • Escape key close
 *   • Initial focus on the first focusable element inside the panel
 *   • Tab / Shift+Tab focus trap within the panel
 *   • Focus restore to the previously focused element on unmount
 *
 * Used by OverlayModal and PanelOverlay; complements the existing Escape
 * handlers in useOverlays/DropdownPanel (double-close dispatches are idempotent).
 */
import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export default function useModalDialog(onClose: () => void): RefObject<HTMLDivElement> {
  const panelRef = useRef<HTMLDivElement>(null);
  /* Keep the latest onClose without re-running the mount effect (callers pass inline arrows) */
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    /* SVGElement matters here: diagram badges (Petzval, LoCA) are focusable SVG buttons */
    const active = document.activeElement;
    const previouslyFocused = active instanceof HTMLElement || active instanceof SVGElement ? active : null;

    const focusables = (): HTMLElement[] => Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

    (focusables()[0] ?? panel).focus();

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusables();
      if (els.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }
      const first = els[0];
      const last = els[els.length - 1];
      const active = document.activeElement;
      if (e.shiftKey) {
        /* Wrap backward — also pull focus back in if it escaped the panel */
        if (active === first || active === panel || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !panel.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, []);

  return panelRef;
}
