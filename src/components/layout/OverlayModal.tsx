/**
 * Generic overlay modal — full-viewport backdrop with a centered modal panel
 * and close button. Optional `maxWidth` overrides the default 480px width.
 * Optional `scrollKey` — when it changes, the modal scrolls back to the top.
 * Used for "About Site", "About Author", and "Optics Primer" overlays.
 *
 * Accessible dialog: role="dialog" + aria-modal, Escape close, focus trap,
 * and focus restore via useModalDialog. Label it with `ariaLabel`.
 */

import { useEffect, type ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import useModalDialog from "../hooks/useModalDialog.js";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion.js";
import { OVERLAY_BACKDROP, overlayModal, closeBtn } from "../../utils/style/styles.js";

interface OverlayModalProps {
  onClose: () => void;
  theme: Theme;
  children: ReactNode;
  maxWidth?: number;
  scrollKey?: string;
  /** Accessible dialog name announced by screen readers. */
  ariaLabel?: string;
}

export default function OverlayModal({
  onClose,
  theme,
  children,
  maxWidth,
  scrollKey,
  ariaLabel = "Dialog",
}: OverlayModalProps) {
  const panelRef = useModalDialog(onClose);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [scrollKey, panelRef]);

  return (
    <div onClick={onClose} style={reducedMotion ? { ...OVERLAY_BACKDROP, transition: undefined } : OVERLAY_BACKDROP}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={overlayModal(theme, maxWidth)}
      >
        <button onClick={onClose} aria-label="Close" style={closeBtn(theme)}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
