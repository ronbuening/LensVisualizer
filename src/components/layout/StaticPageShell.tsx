import type { ReactNode } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";
import { PAGE_BASE_STYLE } from "../../utils/style/pageStyles.js";
import { usePageThemeToggle } from "../../utils/theme/usePageThemeToggle.js";
import PageNavBar from "./PageNavBar.js";

interface StaticPageBreadcrumb {
  label: string;
  to?: string;
}

interface StaticPageShellContext {
  theme: Theme;
  dark: boolean;
  highContrast: boolean;
}

interface StaticPageShellProps {
  breadcrumbs: readonly StaticPageBreadcrumb[];
  children: (context: StaticPageShellContext) => ReactNode;
}

export default function StaticPageShell({ breadcrumbs, children }: StaticPageShellProps) {
  const { theme: t, themeMode, dark, highContrast, toggleTheme, toggleHC } = usePageThemeToggle();

  return (
    <div style={{ backgroundColor: t.bg, color: t.body, minHeight: "100vh" }}>
      <PageNavBar
        theme={t}
        themeMode={themeMode}
        highContrast={highContrast}
        onToggleTheme={toggleTheme}
        onToggleHC={toggleHC}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={`${breadcrumb.to ?? breadcrumb.label}-${index}`}>
            {index > 0 && <span style={{ color: t.muted, margin: "0 0.35em" }}>/</span>}
            {breadcrumb.to ? (
              <Link to={breadcrumb.to} style={{ color: t.descLinkColor, textDecoration: "none" }}>
                {breadcrumb.label}
              </Link>
            ) : (
              <span style={{ color: t.body }}>{breadcrumb.label}</span>
            )}
          </span>
        ))}
      </PageNavBar>

      <div style={PAGE_BASE_STYLE}>{children({ theme: t, dark, highContrast })}</div>
    </div>
  );
}
