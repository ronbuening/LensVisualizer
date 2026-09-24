/**
 * HelpTooltipButton — reusable help icon that opens a small explanatory
 * tooltip on hover, tap, or click. The tooltip is rendered in a portal so it
 * layers above neighboring panels and tab content.
 */

import { useEffect, useRef, useState } from "react";
import PortalTooltip from "./PortalTooltip.js";
import type { Theme } from "../../types/theme.js";

interface HelpTooltipButtonProps {
  theme: Theme;
  label: string;
  text: string;
}

export default function HelpTooltipButton({ theme: t, label, text }: HelpTooltipButtonProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleResize = () => setOpen(false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          border: `1px solid ${t.toggleBorder}`,
          background: t.toggleBg,
          color: t.muted,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          lineHeight: 1,
          cursor: "pointer",
          padding: 0,
          transition: "all 0.25s",
        }}
      >
        ?
      </button>
      <PortalTooltip anchorRef={triggerRef} open={open} text={text} theme={t} />
    </>
  );
}
