/**
 * LinkListSidebar — a small navigational panel listing related pages as links.
 *
 * Reuses the article table-of-contents panel format (`ArticleTOC`): a bordered panel with an
 * uppercase heading and a list of links with a left-border hover indicator. Items whose `to` starts
 * with `#` are in-page anchors (smooth-scroll to the matching element id); all other `to` values are
 * router paths. Used for the maker→mounts and mount→makers cross-links and the lens-library
 * group-navigation sidebar.
 *
 * This component renders only the panel; placement (sticky column on wide screens vs. stacked above
 * the content on narrow ones) is owned by `SidebarLayout`. The panel and its links render in-flow and
 * are crawlable in the prerendered HTML. Returns `null` when there are no items.
 */

import { useState } from "react";
import { Link } from "react-router";
import type { Theme } from "../../types/theme.js";

export interface LinkListSidebarItem {
  /** Stable React key + hover id. */
  id: string;
  label: string;
  /** Router path (e.g. `/mounts/nikon-f`) or in-page anchor (e.g. `#group-maker-nikon`). */
  to: string;
}

interface LinkListSidebarProps {
  /** Uppercase panel heading, e.g. "Mounts" or "Makers". */
  title: string;
  items: LinkListSidebarItem[];
  theme: Theme;
  /** Accessible label for the nav region (defaults to `title`). */
  ariaLabel?: string;
  /** Pixel offset from the viewport top used when smooth-scrolling to an `#anchor` item. */
  offsetTop?: number;
}

export default function LinkListSidebar({ title, items, theme: t, ariaLabel, offsetTop = 88 }: LinkListSidebarProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  if (items.length === 0) return null;

  // In-page `#anchor` items smooth-scroll to the target id (offset to clear the header); route items use Link.
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    const el = typeof document !== "undefined" ? document.getElementById(to.slice(1)) : null;
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - offsetTop;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", to);
  };

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

  return (
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
          const isAnchor = item.to.startsWith("#");
          const linkStyle: React.CSSProperties = {
            display: "block",
            fontSize: 12,
            lineHeight: 1.45,
            padding: "3px 6px",
            borderLeft: `2px solid ${active ? t.descLinkColor : "transparent"}`,
            color: active ? t.descLinkColor : t.descText,
            textDecoration: "none",
            fontWeight: active ? 600 : 400,
            transition: "color 0.15s, border-color 0.15s",
          };
          const hoverHandlers = {
            onMouseEnter: () => setHovered(item.id),
            onMouseLeave: () => setHovered(null),
          };
          return (
            <li key={item.id} style={{ margin: "2px 0" }}>
              {isAnchor ? (
                <a href={item.to} onClick={(e) => handleAnchorClick(e, item.to)} style={linkStyle} {...hoverHandlers}>
                  {item.label}
                </a>
              ) : (
                <Link to={item.to} style={linkStyle} {...hoverHandlers}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
