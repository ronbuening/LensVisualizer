/**
 * AnalysisDrawer — Sliding panel that overlays the lens diagram area,
 * providing tabbed access to analysis views (aberrations, distortion, etc.).
 *
 * Desktop: slides in from the left with a vertical tab bar.
 * Mobile: slides in from the top with a horizontal tab bar.
 */

import { useEffect, useCallback, type ReactNode, type CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";

export interface AnalysisTab {
  id: string;
  label: string;
}

interface AnalysisDrawerProps {
  open: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: AnalysisTab[];
  t: Theme;
  isWide: boolean;
  children: ReactNode;
}

export default function AnalysisDrawer({
  open,
  onClose,
  activeTab,
  onTabChange,
  tabs,
  t,
  isWide,
  children,
}: AnalysisDrawerProps) {
  /* ── Escape key closes the drawer ── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  /* ── Drawer positioning and animation ── */
  const drawerStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 200,
    display: "flex",
    flexDirection: isWide ? "row" : "column",
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 8,
    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: open ? "translate(0, 0)" : isWide ? "translateX(-100%)" : "translateY(-100%)",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    overflow: "hidden",
  };

  /* ── Tab bar ── */
  const tabBarStyle: CSSProperties = isWide
    ? {
        display: "flex",
        flexDirection: "column",
        width: 40,
        flexShrink: 0,
        overflowY: "auto",
        overflowX: "hidden",
        borderRight: `1px solid ${t.panelBorder}`,
        background: t.headerBgColor,
        backgroundImage: t.headerBgImage,
        transition: "background-color 0.3s, border-color 0.3s",
        paddingTop: 8,
        gap: 2,
      }
    : {
        display: "flex",
        flexDirection: "row",
        height: 36,
        flexShrink: 0,
        overflowX: "auto",
        overflowY: "hidden",
        borderBottom: `1px solid ${t.panelBorder}`,
        background: t.headerBgColor,
        backgroundImage: t.headerBgImage,
        transition: "background-color 0.3s, border-color 0.3s",
        alignItems: "stretch",
        gap: 0,
      };

  /* ── Content area ── */
  const contentStyle: CSSProperties = {
    flex: 1,
    overflow: "auto",
    padding: isWide ? "16px 20px" : "12px 16px",
    position: "relative",
  };

  /* ── Close button ── */
  const closeBtnStyle: CSSProperties = {
    position: "absolute",
    top: isWide ? 8 : 4,
    right: 8,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    lineHeight: 1,
    padding: "2px 6px",
    borderRadius: 4,
    color: t.muted,
    zIndex: 1,
    fontFamily: "inherit",
    transition: "color 0.3s",
  };

  return (
    <div style={drawerStyle}>
      {/* ── Tab bar ── */}
      <div style={tabBarStyle}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            t={t}
            isWide={isWide}
          />
        ))}
      </div>

      {/* ── Content area ── */}
      <div style={contentStyle}>
        <button onClick={onClose} style={closeBtnStyle}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

/* ── Tab button ── */

function TabButton({
  tab,
  active,
  onClick,
  t,
  isWide,
}: {
  tab: AnalysisTab;
  active: boolean;
  onClick: () => void;
  t: Theme;
  isWide: boolean;
}) {
  const style: CSSProperties = isWide
    ? {
        writingMode: "vertical-lr",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
        padding: "10px 6px",
        cursor: "pointer",
        border: "none",
        borderLeft: active ? `2px solid ${t.sliderAccent}` : "2px solid transparent",
        background: active ? t.toggleActiveBg : "transparent",
        color: active ? t.toggleActiveText : t.muted,
        fontSize: 9,
        letterSpacing: "0.1em",
        fontFamily: "inherit",
        transition: "all 0.25s",
        textAlign: "center",
        whiteSpace: "nowrap",
      }
    : {
        flex: "1 0 88px",
        padding: "6px 10px",
        cursor: "pointer",
        border: "none",
        borderBottom: active ? `2px solid ${t.sliderAccent}` : "2px solid transparent",
        background: active ? t.toggleActiveBg : "transparent",
        color: active ? t.toggleActiveText : t.muted,
        fontSize: 9,
        letterSpacing: "0.1em",
        fontFamily: "inherit",
        transition: "all 0.25s",
        textAlign: "center",
        whiteSpace: "nowrap",
      };

  return (
    <button onClick={onClick} style={style}>
      {tab.label}
    </button>
  );
}
