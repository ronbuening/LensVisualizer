/**
 * Generic overlay modal — full-viewport backdrop with a centered modal panel
 * and close button. Optional `maxWidth` overrides the default 480px width.
 * Optional `scrollKey` — when it changes, the modal scrolls back to the top.
 * Used for "About Site", "About Author", and "Optics Primer" overlays.
 */

import { useEffect, useRef, type ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import { OVERLAY_BACKDROP, overlayModal, closeBtn } from "../../utils/styles.js";

interface OverlayModalProps {
  onClose: () => void;
  theme: Theme;
  children: ReactNode;
  maxWidth?: number;
  scrollKey?: string;
}

export default function OverlayModal({ onClose, theme, children, maxWidth, scrollKey }: OverlayModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [scrollKey]);

  return (
    <div onClick={onClose} style={OVERLAY_BACKDROP}>
      <div ref={panelRef} onClick={(e) => e.stopPropagation()} style={overlayModal(theme, maxWidth)}>
        <button onClick={onClose} style={closeBtn(theme)}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
