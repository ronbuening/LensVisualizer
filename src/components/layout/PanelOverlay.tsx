/**
 * PanelOverlay — Panel-scoped overlay with backdrop and centered content.
 *
 * Unlike OverlayModal (which uses position:fixed over the entire viewport),
 * this component uses position:absolute to cover only its nearest positioned
 * ancestor. Clicking the backdrop closes the overlay; clicks on the content
 * panel are absorbed via stopPropagation.
 *
 * Accessible dialog: role="dialog" + aria-modal, Escape close, focus trap,
 * and focus restore via useModalDialog. Label it with `ariaLabel`.
 *
 * Designed for reuse with any diagram-level measure overlay.
 */

import type { ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import useModalDialog from "../hooks/useModalDialog.js";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion.js";
import { PANEL_OVERLAY_BACKDROP, panelOverlayContent, closeBtn } from "../../utils/style/styles.js";

interface PanelOverlayProps {
  onClose: () => void;
  theme: Theme;
  children: ReactNode;
  /** Accessible dialog name announced by screen readers. */
  ariaLabel?: string;
}

export default function PanelOverlay({ onClose, theme, children, ariaLabel = "Dialog" }: PanelOverlayProps) {
  const panelRef = useModalDialog(onClose);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      onClick={onClose}
      style={reducedMotion ? { ...PANEL_OVERLAY_BACKDROP, transition: undefined } : PANEL_OVERLAY_BACKDROP}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={panelOverlayContent(theme)}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button onClick={onClose} aria-label="Close" style={closeBtn(theme)}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
