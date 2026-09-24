/**
 * AnalysisDock — desktop launcher and tab switcher for the analysis drawer.
 *
 * Two rows of buttons, one per analysis tab plus ZOOM, under the lens diagram.
 * Clicking a button opens the drawer on that tab; clicking the lit button closes
 * it. Each button explains itself in a hover/focus tooltip. The single-lens view
 * renders the dock inside DiagramViewport; comparison view renders one shared
 * dock under both panes (SharedAnalysisDock).
 */

import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import PortalTooltip from "../../controls/PortalTooltip.js";
import type { AnalysisTab } from "../AnalysisDrawer.js";
import type { AnalysisTabId } from "../../../types/state.js";
import type { Theme } from "../../../types/theme.js";

/* 9 analysis tabs + ZOOM fill a 5 × 2 grid; revisit when the tab count changes. */
const DOCK_COLUMNS = 5;
const TOOLTIP_HOVER_DELAY_MS = 300;

export const ZOOM_DOCK_DESCRIPTION =
  "Magnify and pan the diagram. Scroll or +/− to zoom, drag or arrow keys to pan, Esc to exit.";

interface AnalysisDockProps {
  tabs: readonly AnalysisTab[];
  activeTab: AnalysisTabId;
  drawerOpen: boolean;
  onAnalysisTabChange: (tab: AnalysisTabId) => void;
  onAnalysisDrawerToggle: (open: boolean) => void;
  onZoomPanToggle: (active: boolean) => void;
  t: Theme;
  /** Id of the drawer the tab buttons control (single-lens view). */
  drawerId?: string;
  /** "inline" sits on the diagram background; "shared" is a full-width strip in comparison view. */
  variant: "inline" | "shared";
}

export default function AnalysisDock({
  tabs,
  activeTab,
  drawerOpen,
  onAnalysisTabChange,
  onAnalysisDrawerToggle,
  onZoomPanToggle,
  t,
  drawerId,
  variant,
}: AnalysisDockProps) {
  const handleTabClick = (tabId: AnalysisTabId) => {
    if (drawerOpen && tabId === activeTab) {
      onAnalysisDrawerToggle(false);
      return;
    }
    if (tabId !== activeTab) onAnalysisTabChange(tabId);
    if (!drawerOpen) onAnalysisDrawerToggle(true);
  };

  const handleZoomClick = () => {
    if (drawerOpen) onAnalysisDrawerToggle(false);
    onZoomPanToggle(true);
  };

  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${DOCK_COLUMNS}, minmax(0, 1fr))`,
    gap: 6,
    flex: "0 0 auto",
    ...(variant === "shared"
      ? {
          padding: "8px 12px",
          borderTop: `1px solid ${t.panelDivider}`,
          background: t.headerBgColor,
          backgroundImage: t.headerBgImage,
          transition: "background-color 0.3s, border-color 0.3s",
        }
      : { padding: "8px 10px 15px" }),
  };

  return (
    <div role="group" aria-label="Aberrations & distortions" style={containerStyle}>
      {tabs.map((tab) => {
        const active = drawerOpen && tab.id === activeTab;
        return (
          <DockButton
            key={tab.id}
            description={tab.description}
            active={active}
            pressed={active}
            controls={drawerId}
            onClick={() => handleTabClick(tab.id)}
            t={t}
          >
            {tab.label}
          </DockButton>
        );
      })}
      <DockButton
        ariaLabel="Enter zoom and pan mode"
        description={ZOOM_DOCK_DESCRIPTION}
        active={false}
        onClick={handleZoomClick}
        t={t}
      >
        <span aria-hidden="true" style={{ fontSize: 12, marginRight: 6 }}>
          {"🔍"}
        </span>
        ZOOM
      </DockButton>
    </div>
  );
}

/* ── Dock button with delayed hover tooltip ── */

function DockButton({
  children,
  ariaLabel,
  description,
  active,
  pressed,
  controls,
  onClick,
  t,
}: {
  children: ReactNode;
  ariaLabel?: string;
  description: string;
  active: boolean;
  pressed?: boolean;
  controls?: string;
  onClick: () => void;
  t: Theme;
}) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  /* Pointer presses also focus the button; only keyboard focus should open the tooltip immediately. */
  const pointerFocusRef = useRef(false);
  const descriptionId = useId();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const clearHoverTimer = () => {
    if (hoverTimerRef.current === null) return;
    window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  };

  const hideTooltip = () => {
    clearHoverTimer();
    setTooltipOpen(false);
  };

  useEffect(
    () => () => {
      if (hoverTimerRef.current !== null) window.clearTimeout(hoverTimerRef.current);
    },
    [],
  );

  const style: CSSProperties = {
    display: "block",
    minWidth: 0,
    height: 34,
    padding: "0 8px",
    lineHeight: "32px",
    borderRadius: 8,
    border: `1px solid ${active ? t.toggleActiveBorder : t.toggleBorder}`,
    boxShadow: active ? `inset 0 -2px 0 ${t.sliderAccent}` : "none",
    background: active ? t.toggleActiveBg : t.toggleBg,
    color: active ? t.toggleActiveText : t.muted,
    fontFamily: "inherit",
    fontSize: 10,
    letterSpacing: "0.08em",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
    transition: "all 0.25s",
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
        aria-pressed={pressed}
        aria-controls={controls}
        aria-describedby={descriptionId}
        onPointerDown={() => {
          pointerFocusRef.current = true;
        }}
        onClick={() => {
          pointerFocusRef.current = false;
          hideTooltip();
          onClick();
        }}
        onMouseEnter={() => {
          clearHoverTimer();
          hoverTimerRef.current = window.setTimeout(() => setTooltipOpen(true), TOOLTIP_HOVER_DELAY_MS);
        }}
        onMouseLeave={hideTooltip}
        onFocus={() => {
          if (!pointerFocusRef.current) setTooltipOpen(true);
          pointerFocusRef.current = false;
        }}
        onBlur={hideTooltip}
        onKeyDown={(event) => {
          if (event.key === "Escape") hideTooltip();
        }}
        style={style}
      >
        {children}
      </button>
      <span id={descriptionId} hidden>
        {description}
      </span>
      <PortalTooltip
        anchorRef={buttonRef}
        open={tooltipOpen}
        text={description}
        theme={t}
        placement="above"
        align="center"
      />
    </>
  );
}
