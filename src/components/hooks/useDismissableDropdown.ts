import { useEffect, useRef, type RefObject } from "react";

/**
 * Close an open dropdown on Escape or a mousedown outside its trigger and panel.
 * The returned ref belongs on the dropdown panel element.
 */
export default function useDismissableDropdown<T extends HTMLElement>(
  open: boolean,
  triggerRef: RefObject<HTMLElement | null>,
  onClose: () => void,
): RefObject<T | null> {
  const panelRef = useRef<T>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onCloseRef.current();
    };
    const handleMouseDown = (event: MouseEvent): void => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      onCloseRef.current();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [open, triggerRef]);

  return panelRef;
}
