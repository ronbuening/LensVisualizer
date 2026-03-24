/**
 * Generic overlay modal — full-viewport backdrop with a centered modal panel
 * and close button. Optional `maxWidth` overrides the default 480px width.
 * Used for "About Site", "About Author", and "Optics Primer" overlays.
 */

import type { ReactNode } from "react";
import type { Theme } from "../types/theme.js";
import { OVERLAY_BACKDROP, overlayModal, closeBtn } from "../utils/styles.js";

interface OverlayModalProps {
  onClose: () => void;
  theme: Theme;
  children: ReactNode;
  maxWidth?: number;
}

export default function OverlayModal({ onClose, theme, children, maxWidth }: OverlayModalProps) {
  return (
    <div onClick={onClose} style={OVERLAY_BACKDROP}>
      <div onClick={(e) => e.stopPropagation()} style={overlayModal(theme, maxWidth)}>
        <button onClick={onClose} style={closeBtn(theme)}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
