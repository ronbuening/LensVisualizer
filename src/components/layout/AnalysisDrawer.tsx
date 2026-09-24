/**
 * AnalysisDrawer — Sliding panel that overlays the lens diagram area and
 * hosts the active analysis view (aberrations, distortion, etc.).
 *
 * With tabs (mobile): slides down from the top with a horizontal tab strip.
 * Without tabs (desktop): slides up from the bottom; the AnalysisDock below
 * the diagram is the tab switcher.
 */

import { useEffect, useCallback, type ReactNode, type CSSProperties } from "react";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion.js";
import type { Theme } from "../../types/theme.js";
import { panelCard } from "../../utils/style/styles.js";
import type { AnalysisTabId } from "../../types/state.js";

export interface AnalysisTab {
  id: AnalysisTabId;
  label: string;
  /** One-sentence explanation shown as the desktop dock button's tooltip. */
  description: string;
}

interface AnalysisDrawerProps {
  open: boolean;
  onClose: () => void;
  activeTab: AnalysisTabId;
  onTabChange: (tab: AnalysisTabId) => void;
  tabs: readonly AnalysisTab[];
  t: Theme;
  /** Render the horizontal tab strip. False when an external AnalysisDock switches tabs. */
  showTabs: boolean;
  /** DOM id so an external dock can point `aria-controls` at the panel. */
  id?: string;
  children: ReactNode;
}

export default function AnalysisDrawer({
  open,
  onClose,
  activeTab,
  onTabChange,
  tabs,
  t,
  showTabs,
  id,
  children,
}: AnalysisDrawerProps) {
  const reducedMotion = usePrefersReducedMotion();

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
    flexDirection: "column",
    minHeight: 0,
    ...panelCard(t, { borderRadius: 8 }),
    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
    transition: reducedMotion ? undefined : "transform 0.3s ease, opacity 0.3s ease",
    transform: open ? "translate(0, 0)" : showTabs ? "translateY(-100%)" : "translateY(100%)",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    overflow: "hidden",
  };

  /* ── Tab bar ── */
  const tabBarStyle: CSSProperties = {
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
    minHeight: 0,
    overflow: "auto",
    padding: showTabs ? "12px 16px" : "16px 20px",
    position: "relative",
  };

  /* ── Close button ── */
  const closeBtnStyle: CSSProperties = {
    position: "absolute",
    top: showTabs ? 4 : 8,
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

  const activeLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? activeTab;

  /* Closed drawers stay mounted for the slide animation; `inert` keeps them out of the tab order. */
  return (
    <div
      id={id}
      role={showTabs ? undefined : "region"}
      aria-label={showTabs ? undefined : `${activeLabel} analysis`}
      inert={!open}
      style={drawerStyle}
    >
      {/* ── Tab bar ── */}
      {showTabs ? (
        <div style={tabBarStyle}>
          {tabs.map((tab) => (
            <TabButton key={tab.id} tab={tab} active={activeTab === tab.id} onClick={() => onTabChange(tab.id)} t={t} />
          ))}
        </div>
      ) : null}

      {/* ── Content area ── */}
      <div style={contentStyle}>
        <button onClick={onClose} style={closeBtnStyle}>
          ×
        </button>
        {open && children}
      </div>
    </div>
  );
}

/* ── Tab button ── */

function TabButton({ tab, active, onClick, t }: { tab: AnalysisTab; active: boolean; onClick: () => void; t: Theme }) {
  const style: CSSProperties = {
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
