/**
 * LinkListSidebar — a small navigational sidebar listing related pages as links.
 *
 * Reuses the article table-of-contents panel format (`ArticleTOC`): a bordered panel with an
 * uppercase heading and a list of links with a left-border hover indicator. It has no scrollspy —
 * the links navigate to other pages. Used for the maker→mounts and mount→makers cross-links.
 *
 * The links are SSR-rendered and crawlable: the panel renders in-flow by default (and on narrower
 * screens), and only becomes the fixed top-right aside on wide screens where it clears the centered
 * page content (≈960 px) without overlapping the text. The first client render matches the SSR
 * output, so there is no hydration mismatch.
 */

import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";

export interface LinkListSidebarItem {
  /** Stable React key + hover id. */
  id: string;
  label: string;
  /** Router path, e.g. `/mounts/nikon-f`. */
  to: string;
}

interface LinkListSidebarProps {
  /** Uppercase panel heading, e.g. "Mounts" or "Makers". */
  title: string;
  items: LinkListSidebarItem[];
  theme: Theme;
  /** Accessible label for the nav region (defaults to `title`). */
  ariaLabel?: string;
  /** Pixel offset from the viewport top for the fixed (wide) position; clears the site header. */
  offsetTop?: number;
  /** Panel width on wide screens. */
  width?: number;
  /**
   * Media query gating the fixed (wide) vs in-flow (narrow) layout. The default docks only when the
   * viewport is wide enough for the panel to sit beside the ~960 px page content without overlap.
   */
  wideQuery?: string;
}

function useMediaQueryMatch(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    handler();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function LinkListSidebar({
  title,
  items,
  theme: t,
  ariaLabel,
  offsetTop = 88,
  width = 200,
  wideQuery = "(min-width: 1440px)",
}: LinkListSidebarProps) {
  const isWide = useMediaQueryMatch(wideQuery);
  const [hovered, setHovered] = useState<string | null>(null);

  if (items.length === 0) return null;

  const panelStyle: React.CSSProperties = {
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    borderRadius: 6,
    padding: "12px 14px",
    fontFamily: "'JetBrains Mono','SF Mono','Fira Code', monospace",
    maxHeight: `calc(100vh - ${offsetTop + 40}px)`,
    overflowY: "auto",
    boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
  };

  const list = (
    <nav aria-label={ariaLabel ?? title} style={panelStyle}>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: t.label,
          marginBottom: 8,
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => {
          const active = hovered === item.id;
          return (
            <li key={item.id} style={{ margin: "2px 0" }}>
              <Link
                to={item.to}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "block",
                  fontSize: 12,
                  lineHeight: 1.45,
                  padding: "3px 6px",
                  borderLeft: `2px solid ${active ? t.descLinkColor : "transparent"}`,
                  color: active ? t.descLinkColor : t.descText,
                  textDecoration: "none",
                  fontWeight: active ? 600 : 400,
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  if (isWide) {
    return <aside style={{ position: "fixed", top: offsetTop, right: 24, width, zIndex: 20 }}>{list}</aside>;
  }

  return <div style={{ marginBottom: "1.5rem", maxWidth: 360 }}>{list}</div>;
}
