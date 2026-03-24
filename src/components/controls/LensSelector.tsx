/**
 * Custom lens selector dropdown with portal-based rendering.
 * Replaces the native <select> to prevent the dropdown from escaping the viewport.
 * Always drops down from the trigger, centers the selected item, and caps height at 1/3 viewport.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import type { Theme } from "../../types/theme.js";
import { selector } from "../../utils/styles.js";

interface LensSelectorProps {
  theme: Theme;
  isWide: boolean;
  value: string;
  options: { key: string; label: string }[];
  onChange: (key: string) => void;
  style?: React.CSSProperties;
}

const ITEM_HEIGHT = 32;

export default function LensSelector({ theme: t, isWide, value, options, onChange, style }: LensSelectorProps) {
  const [open, setOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{
    top: number;
    left: number;
    width: number;
    maxHeight: number;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.key === value)?.label ?? value;

  const openDropdown = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const maxHeight = Math.floor(window.innerHeight / 3);
    let left = rect.left;
    const width = rect.width;
    // Clamp right edge to viewport with 8px margin
    if (left + width > window.innerWidth - 8) {
      left = window.innerWidth - width - 8;
    }
    setDropdownPos({ top: rect.bottom + 2, left, width, maxHeight });
    setOpen(true);
  }, []);

  // Scroll selected item to center after dropdown opens
  useEffect(() => {
    if (!open || !listRef.current || !dropdownPos) return;
    const selectedIndex = options.findIndex((o) => o.key === value);
    if (selectedIndex < 0) return;
    const targetScroll = selectedIndex * ITEM_HEIGHT - dropdownPos.maxHeight / 2 + ITEM_HEIGHT / 2;
    listRef.current.scrollTop = Math.max(0, targetScroll);
  }, [open, options, value, dropdownPos]);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (listRef.current?.contains(target)) return;
      setOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = useCallback(
    (key: string) => {
      onChange(key);
      setOpen(false);
    },
    [onChange],
  );

  const triggerStyle: React.CSSProperties = {
    ...selector(t, isWide),
    ...style,
    // Override text alignment and ensure the button text is left-aligned like a select
    textAlign: "left",
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const dropdown =
    open && dropdownPos
      ? ReactDOM.createPortal(
          <div
            ref={listRef}
            style={{
              position: "fixed",
              top: dropdownPos.top,
              left: dropdownPos.left,
              width: dropdownPos.width,
              maxHeight: dropdownPos.maxHeight,
              overflowY: "scroll",
              backgroundColor: t.selectorBg,
              border: `1.5px solid ${t.sliderAccent}40`,
              borderRadius: 6,
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              zIndex: 9999,
              fontFamily: "inherit",
              willChange: "transform",
            }}
          >
            {options.map((o) => {
              const isSelected = o.key === value;
              const isHovered = o.key === hoveredKey;
              return (
                <div
                  key={o.key}
                  onMouseDown={() => handleSelect(o.key)}
                  onMouseEnter={() => setHoveredKey(o.key)}
                  onMouseLeave={() => setHoveredKey(null)}
                  style={{
                    height: ITEM_HEIGHT,
                    lineHeight: `${ITEM_HEIGHT}px`,
                    padding: "0 12px",
                    cursor: "pointer",
                    fontSize: isWide ? 13 : 12,
                    letterSpacing: "0.06em",
                    color: isSelected ? t.sliderAccent : t.selectorText,
                    backgroundColor: isSelected ? `${t.sliderAccent}20` : isHovered ? t.selectorHover : "transparent",
                    fontWeight: isSelected ? "bold" : "normal",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    boxSizing: "border-box",
                    borderLeft: isSelected ? `2px solid ${t.sliderAccent}` : "2px solid transparent",
                    transition: "background-color 0.1s",
                  }}
                >
                  {o.label}
                </div>
              );
            })}
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button ref={triggerRef} onClick={open ? () => setOpen(false) : openDropdown} style={triggerStyle}>
        {selectedLabel}
      </button>
      {dropdown}
    </>
  );
}
