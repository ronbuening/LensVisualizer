/**
 * PageNavBar — shared navigation bar for static pages.
 *
 * Renders a top bar with breadcrumb content on the left and theme toggle
 * buttons (Auto/Dark/Light + High Contrast) on the right. Used on all static
 * pages (homepage, articles, lenses index, makers index, etc.).
 *
 * The interactive LensViewer keeps its own BreadcrumbBar for lens-specific
 * breadcrumbs; both bars render the same ThemeToggleGroup.
 */

import type { ReactNode } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import type { ThemeMode } from "../../utils/theme/themePreferences.js";
import { headerSearchBtn, headerStrip } from "../../utils/style/styles.js";
import useMediaQuery from "../../utils/useMediaQuery.js";
import ThemeToggleGroup from "./ThemeToggleGroup.js";

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
  const isWide = useMediaQuery("(min-width: 720px)", { ssrDefault: false });
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
        <Link to="/search/" aria-label="Search" style={headerSearchBtn(t)}>
          ⌕
        </Link>
        <ThemeToggleGroup
          theme={t}
          themeMode={themeMode}
          highContrast={highContrast}
          onToggleTheme={onToggleTheme}
          onToggleHC={onToggleHC}
        />
      </div>
    </nav>
  );
}
