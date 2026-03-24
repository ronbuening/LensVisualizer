/**
 * Generic overlay modal — full-viewport backdrop with a centered modal panel
 * and close button. Used for "About Site" and "About Author" overlays.
 */

import type { ReactNode } from "react";
import type { Theme } from "../types/theme.js";
import { OVERLAY_BACKDROP, overlayModal, closeBtn } from "../utils/styles.js";

interface OverlayModalProps {
  onClose: () => void;
  theme: Theme;
  children: ReactNode;
}

export default function OverlayModal({ onClose, theme, children }: OverlayModalProps) {
  return (
    <div onClick={onClose} style={OVERLAY_BACKDROP}>
      <div onClick={(e) => e.stopPropagation()} style={overlayModal(theme)}>
        <button onClick={onClose} style={closeBtn(theme)}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
