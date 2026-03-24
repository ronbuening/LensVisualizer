/**
 * PanelOverlay — Panel-scoped overlay with backdrop and centered content.
 *
 * Unlike OverlayModal (which uses position:fixed over the entire viewport),
 * this component uses position:absolute to cover only its nearest positioned
 * ancestor. Clicking the backdrop closes the overlay; clicks on the content
 * panel are absorbed via stopPropagation.
 *
 * Designed for reuse with any diagram-level measure overlay (LCA, TCA, etc.).
 */

import type { ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import { PANEL_OVERLAY_BACKDROP, panelOverlayContent, closeBtn } from "../../utils/styles.js";

interface PanelOverlayProps {
  onClose: () => void;
  theme: Theme;
  children: ReactNode;
}

export default function PanelOverlay({ onClose, theme, children }: PanelOverlayProps) {
  return (
    <div onClick={onClose} style={PANEL_OVERLAY_BACKDROP}>
      <div onClick={(e) => e.stopPropagation()} style={panelOverlayContent(theme)}>
        <div style={{ display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button onClick={onClose} style={closeBtn(theme)}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
