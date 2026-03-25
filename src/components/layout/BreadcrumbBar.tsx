/**
 * Breadcrumb navigation bar — Home / Makers / {Maker} / {Lens Name}
 *
 * Renders above the TopBar in the LensViewer, matching the breadcrumb
 * pattern used on the multipage layout pages (LensPage, MakerPage, etc.).
 * Includes a right-aligned Settings button that expands a collapsible panel
 * with theme controls (Dark/Light and High Contrast toggles).
 */

import { useState } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { headerStrip, topBarBtn, toggleGroup, toggleBtn } from "../../utils/styles.js";
import { LENS_CATALOG } from "../../utils/lensCatalog.js";
import { deriveMaker } from "../../utils/lensMetadata.js";

interface BreadcrumbBarProps {
  theme: Theme;
  isWide: boolean;
  lensKey: string;
  dark: boolean;
  highContrast: boolean;
  onDarkChange?: (value: boolean) => void;
  onHighContrastChange?: (value: boolean) => void;
}

export default function BreadcrumbBar({
  theme: t,
  isWide,
  lensKey,
  dark,
  highContrast,
  onDarkChange,
  onHighContrastChange,
}: BreadcrumbBarProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const lens = LENS_CATALOG[lensKey];
  if (!lens) return null;

  const maker = deriveMaker(lens.name, lens.maker);
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
          <Link to="/makers" style={linkStyle}>
            Makers
          </Link>
          <span style={separatorStyle}>/</span>
          <Link to={`/makers/${maker.slug}`} style={linkStyle}>
            {maker.display}
          </Link>
          <span style={separatorStyle}>/</span>
          <span style={{ color: t.body }}>{lens.name}</span>
        </div>

        <button
          onClick={() => setSettingsOpen((o) => !o)}
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
          {isWide ? (
            <span>SETTINGS</span>
          ) : (
            <span style={{ fontSize: 13, lineHeight: 1 }}>⚙</span>
          )}
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

      {settingsOpen && (
        <div
          style={{
            ...headerStrip(t, { padding }),
            display: "flex",
            gap: 8,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div style={toggleGroup(t)}>
            <button
              onClick={() => onHighContrastChange?.(!highContrast)}
              style={toggleBtn(t, highContrast)}
            >
              <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
              <span>HC</span>
            </button>
            <button
              onClick={() => onDarkChange?.(!dark)}
              style={toggleBtn(t, false, { hasRightBorder: false })}
            >
              <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span>
              <span>{dark ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
