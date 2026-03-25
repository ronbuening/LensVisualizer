/**
 * Shared portal-based dropdown panel component.
 *
 * Renders children in a fixed-position overlay via ReactDOM.createPortal,
 * using the same selectorBg/selectorBlur/sliderAccent theme tokens as LensSelector.
 * Handles Escape and outside-mousedown close. The container div ref is forwarded
 * so callers can imperatively scroll within the panel (e.g. LensSelector).
 */

import { forwardRef, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import type { RefObject } from "react";
import type { Theme } from "../../types/theme.js";

export interface DropdownPanelPos {
  top: number;
  /** Left edge (px). Mutually exclusive with `right`. */
  left?: number;
  /** Right edge distance from viewport right (px). Use for right-aligned panels. */
  right?: number;
  /** Fixed width (px). Omit for intrinsic/auto width. */
  width?: number;
  /** Maximum height (px). Omit for no constraint. */
  maxHeight?: number;
}

interface DropdownPanelProps {
  open: boolean;
  pos: DropdownPanelPos | null;
  /** Ref to the trigger element — excluded from outside-click detection. */
  triggerRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  theme: Theme;
  children: React.ReactNode;
}

const DropdownPanel = forwardRef<HTMLDivElement, DropdownPanelProps>(function DropdownPanel(
  { open, pos, triggerRef, onClose, theme: t, children },
  ref,
) {
  const innerRef = useRef<HTMLDivElement>(null);

  // Merge forwarded ref with local ref so we can use both
  const setRef = (el: HTMLDivElement | null) => {
    innerRef.current = el;
    if (typeof ref === "function") {
      ref(el);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    }
  };

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Close on outside mousedown (excluding trigger and panel itself)
  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (innerRef.current?.contains(target)) return;
      onClose();
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, onClose, triggerRef]);

  if (!open || !pos) return null;

  const panel = (
    <div
      ref={setRef}
      style={{
        position: "fixed",
        top: pos.top,
        ...(pos.right != null ? { right: pos.right } : { left: pos.left }),
        ...(pos.width != null ? { width: pos.width } : {}),
        ...(pos.maxHeight != null ? { maxHeight: pos.maxHeight, overflowY: "scroll" } : {}),
        backgroundColor: t.selectorBg,
        backdropFilter: t.selectorBlur ? "blur(20px)" : undefined,
        WebkitBackdropFilter: t.selectorBlur ? "blur(20px)" : undefined,
        border: `1.5px solid ${t.sliderAccent}40`,
        borderRadius: 6,
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        zIndex: 9999,
        fontFamily: "inherit",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );

  return ReactDOM.createPortal(panel, document.body);
});

export default DropdownPanel;
