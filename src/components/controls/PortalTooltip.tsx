/**
 * PortalTooltip — small explanatory tooltip rendered in a body portal and
 * positioned against an anchor element, so it layers above neighboring panels.
 *
 * The owner decides when it is open (hover, focus, click) and handles dismissal;
 * this component only positions and paints it.
 */

import { useLayoutEffect, useState, type CSSProperties, type RefObject } from "react";
import ReactDOM from "react-dom";
import type { Theme } from "../../types/theme.js";

interface PortalTooltipProps {
  anchorRef: RefObject<HTMLElement | null>;
  open: boolean;
  text: string;
  theme: Theme;
  /** "below" opens under the anchor; "above" opens over it (for controls near the bottom of the screen). */
  placement?: "above" | "below";
  /** "end" right-aligns with the anchor; "center" centers on it. */
  align?: "end" | "center";
  /** Tooltip width in px. */
  width?: number;
  id?: string;
}

type TooltipPos = { left: number } & ({ top: number } | { bottom: number });

const TOOLTIP_WIDTH = 220;
const VIEWPORT_MARGIN = 12;
const ANCHOR_GAP = 6;

export default function PortalTooltip({
  anchorRef,
  open,
  text,
  theme: t,
  placement = "below",
  align = "end",
  width = TOOLTIP_WIDTH,
  id,
}: PortalTooltipProps) {
  const [pos, setPos] = useState<TooltipPos | null>(null);

  useLayoutEffect(() => {
    if (!open || !anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    const preferredLeft = align === "center" ? rect.left + rect.width / 2 - width / 2 : rect.right - width;
    const left = Math.min(Math.max(preferredLeft, VIEWPORT_MARGIN), window.innerWidth - width - VIEWPORT_MARGIN);
    /* Anchoring "above" by `bottom` avoids measuring the tooltip's own height. */
    setPos(
      placement === "above"
        ? { bottom: window.innerHeight - rect.top + ANCHOR_GAP, left }
        : { top: rect.bottom + ANCHOR_GAP, left },
    );
  }, [open, anchorRef, placement, align, width]);

  if (!open || !pos) return null;

  const style: CSSProperties = {
    position: "fixed",
    ...pos,
    zIndex: 9999,
    width,
    padding: "8px 10px",
    borderRadius: 8,
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    color: t.muted,
    fontSize: 9,
    lineHeight: 1.45,
    // Newlines in the text start new lines; other whitespace collapses as usual.
    whiteSpace: "pre-line",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.18)",
    pointerEvents: "none",
  };

  return ReactDOM.createPortal(
    <div role="tooltip" id={id} style={style}>
      {text}
    </div>,
    document.body,
  );
}
