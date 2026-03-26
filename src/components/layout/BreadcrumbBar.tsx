/**
 * Breadcrumb navigation bar — Home / Makers / {Maker} / {Lens Name}
 *
 * Renders above the TopBar in the LensViewer, matching the breadcrumb
 * pattern used on the multipage layout pages (LensPage, MakerPage, etc.).
 * Includes a right-aligned Settings button that opens a portal-based overlay
 * panel with theme controls (Dark/Light and High Contrast toggles).
 *
 * Reads theme state and dispatches theme changes directly via context,
 * consistent with how LensDiagramPanel and ControlsBar wire theme actions.
 */

import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { ThemeMode } from "../../utils/usePageThemeToggle.js";
import { headerStrip, topBarBtn, toggleGroup, toggleBtn } from "../../utils/styles.js";
import { THEME_ICON, THEME_LABEL } from "../../utils/themeConstants.js";
import { LENS_CATALOG } from "../../utils/lensCatalog.js";
import { deriveMaker } from "../../utils/lensMetadata.js";
import { useLensCtx, useLensDispatch } from "../../utils/LensContext.js";
import { SET_DARK, SET_HIGH_CONTRAST } from "../../utils/lensReducer.js";

function nextThemeMode(current: ThemeMode): ThemeMode {
  if (current === "auto") return "dark";
  if (current === "dark") return "light";
  return "auto";
}

function darkPrefFromMode(mode: ThemeMode): boolean | null {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return null;
}
import DropdownPanel from "./DropdownPanel.js";
import type { DropdownPanelPos } from "./DropdownPanel.js";

interface BreadcrumbBarProps {
  theme: Theme;
  isWide: boolean;
  lensKey: string;
}

export default function BreadcrumbBar({ theme: t, isWide, lensKey }: BreadcrumbBarProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsPos, setSettingsPos] = useState<DropdownPanelPos | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { state } = useLensCtx();
  const dispatch = useLensDispatch();
  const { dark, highContrast } = state.display;
  const themeMode: ThemeMode = dark === true ? "dark" : dark === false ? "light" : "auto";

  const openSettings = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setSettingsPos({ top: rect.bottom + 2, right: window.innerWidth - rect.right });
    setSettingsOpen(true);
  }, []);

  const { comparing, lensKeyB } = state.lens;
  const lensA = LENS_CATALOG[lensKey];
  const lensB = comparing ? LENS_CATALOG[lensKeyB] : null;
  if (!lensA) return null;

  const maker = deriveMaker(lensA.name, lensA.maker);
  const padding = isWide ? "6px 24px" : "6px 12px";

  const linkStyle: React.CSSProperties = {
    color: t.descLinkColor,
    textDecoration: "none",
  };

  const separatorStyle: React.CSSProperties = {
    color: t.muted,
    margin: "0 0.35em",
  };

  return (
    <div>
      <nav
        style={{
          ...headerStrip(t, { padding }),
          fontSize: isWide ? 11 : 10,
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            minWidth: 0,
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <span style={separatorStyle}>/</span>
          {comparing && lensB ? (
            <>
              <Link to="/lenses" style={linkStyle}>
                Lenses
              </Link>
              <span style={separatorStyle}>/</span>
              <span style={{ color: t.body }}>
                {lensA.name} vs {lensB.name}
              </span>
            </>
          ) : (
            <>
              <Link to="/makers" style={linkStyle}>
                Makers
              </Link>
              <span style={separatorStyle}>/</span>
              <Link to={`/makers/${maker.slug}`} style={linkStyle}>
                {maker.display}
              </Link>
              <span style={separatorStyle}>/</span>
              <span style={{ color: t.body }}>{lensA.name}</span>
            </>
          )}
        </div>

        <button
          ref={triggerRef}
          onClick={settingsOpen ? () => setSettingsOpen(false) : openSettings}
          style={{
            ...topBarBtn(t, isWide),
            marginLeft: 12,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: isWide ? "4px 12px" : "4px 8px",
          }}
        >
          {isWide ? <span>SETTINGS</span> : <span style={{ fontSize: 13, lineHeight: 1 }}>⚙</span>}
          <span
            style={{
              display: "inline-block",
              transform: settingsOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              fontSize: 10,
              lineHeight: 1,
            }}
          >
            ▾
          </span>
        </button>
      </nav>

      <DropdownPanel
        open={settingsOpen}
        pos={settingsPos}
        triggerRef={triggerRef}
        onClose={() => setSettingsOpen(false)}
        theme={t}
      >
        <div style={{ padding: 10 }}>
          <div style={toggleGroup(t)}>
            <button
              onClick={() => dispatch({ type: SET_HIGH_CONTRAST, highContrast: !highContrast })}
              style={toggleBtn(t, highContrast)}
            >
              <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
              <span>HC</span>
            </button>
            <button
              onClick={() => dispatch({ type: SET_DARK, dark: darkPrefFromMode(nextThemeMode(themeMode)) })}
              style={toggleBtn(t, false, { hasRightBorder: false })}
            >
              <span style={{ fontSize: themeMode === "auto" ? 12 : 14, lineHeight: 1 }}>{THEME_ICON[themeMode]}</span>
              <span>{THEME_LABEL[themeMode]}</span>
            </button>
          </div>
        </div>
      </DropdownPanel>
    </div>
  );
}
