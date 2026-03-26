/**
 * PageNavBar — shared navigation bar for static pages.
 *
 * Renders a top bar with breadcrumb content on the left and theme toggle
 * buttons (Auto/Dark/Light + High Contrast) on the right. Used on all static
 * pages (homepage, articles, lenses index, makers index, etc.).
 *
 * The interactive LensViewer keeps its own BreadcrumbBar which has
 * additional lens-specific context and settings.
 */

import type { ReactNode } from "react";
import type { Theme } from "../../types/theme.js";
import type { ThemeMode } from "../../utils/usePageThemeToggle.js";
import { headerStrip, toggleGroup, toggleBtn } from "../../utils/styles.js";
import { THEME_ICON, THEME_LABEL } from "../../utils/themeConstants.js";
import useMediaQuery from "../../utils/useMediaQuery.js";

interface PageNavBarProps {
  theme: Theme;
  themeMode: ThemeMode;
  highContrast: boolean;
  onToggleTheme: () => void;
  onToggleHC: () => void;
  children?: ReactNode;
}

export default function PageNavBar({
  theme: t,
  themeMode,
  highContrast,
  onToggleTheme,
  onToggleHC,
  children,
}: PageNavBarProps) {
  const isWide = useMediaQuery("(min-width: 720px)");
  const padding = isWide ? "6px 24px" : "6px 12px";

  return (
    <nav
      style={{
        ...headerStrip(t, { padding }),
        fontSize: isWide ? 11 : 10,
        fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
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
        {children}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0, marginLeft: 12 }}>
        <div style={toggleGroup(t)}>
          <button onClick={onToggleHC} style={toggleBtn(t, highContrast)}>
            <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
            <span>HC</span>
          </button>
          <button onClick={onToggleTheme} style={toggleBtn(t, false, { hasRightBorder: false })}>
            <span style={{ fontSize: themeMode === "auto" ? 12 : 14, lineHeight: 1 }}>{THEME_ICON[themeMode]}</span>
            <span>{THEME_LABEL[themeMode]}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
